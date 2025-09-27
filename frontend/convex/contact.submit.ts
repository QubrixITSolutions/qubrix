import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { action } from "./_generated/server"; // only for types

// Response types
// Success: { ok: true }
// Validation error: { ok: false, code: "VALIDATION_ERROR", fieldErrors: { name?: string; email?: string; message?: string } }
// Rate limit: { ok: false, code: "RATE_LIMIT" }
// Server error: { ok: false, code: "SERVER_ERROR" }
export const submit = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    message: v.string(),
    company: v.optional(v.string()), // honeypot
    userAgent: v.optional(v.string()),
    ip: v.optional(v.string()), // allow client-provided ip fallback (proxy should override)
  },
  handler: async (ctx, args) => {
    try {
      // Basic sanitization / trimming
      const name = sanitize(args.name);
      const email = args.email.trim();
      const message = sanitize(args.message);
      const honeypot = (args.company || "").trim();

      const fieldErrors: Record<string, string> = {};

      if (honeypot.length > 0) {
        fieldErrors.name = "Invalid submission"; // generic
        return { ok: false as const, code: "VALIDATION_ERROR" as const, fieldErrors };
      }

      if (!validateLength(name, 2, 100)) fieldErrors.name = "Name must be 2-100 characters";
      if (!validateEmail(email)) fieldErrors.email = "Invalid email";
      if (!validateLength(message, 10, 5000)) fieldErrors.message = "Message must be 10-5000 characters";

      if (Object.keys(fieldErrors).length > 0) {
        return { ok: false as const, code: "VALIDATION_ERROR" as const, fieldErrors };
      }

      // Spam detection
      if (isSpam(message)) {
        return { ok: false as const, code: "VALIDATION_ERROR" as const, fieldErrors: { message: "Message flagged as spam" } };
      }

      // Rate limiting by IP (max 5 submissions per hour)
      const ip = await deriveIp(ctx, args.ip);
      const oneHourAgo = Date.now() - 60 * 60 * 1000;
      const recent = await ctx.db
        .query("contactSubmissions")
        .withIndex("by_ip_createdAt", (q) => q.eq("ip", ip))
        .filter((q) => q.gte(q.field("createdAt"), oneHourAgo))
        .collect();

      if (recent.length >= 5) {
        (ctx as any).log?.warn?.("Rate limit hit for contact submissions", { ip });
        return { ok: false as const, code: "RATE_LIMIT" as const };
      }

      const now = Date.now();
      const userAgent = (args.userAgent || "unknown").slice(0, 512);

      const submissionId = await ctx.db.insert("contactSubmissions", {
        name,
        email,
        message,
        userAgent,
        ip,
        createdAt: now,
        status: "new",
        readAt: undefined,
      });

      (ctx as any).log?.info?.("Contact submission stored", {
        id: submissionId,
        ip,
        status: "new",
        messagePreview: message.slice(0, 300),
      });

      // Fire email notification via action
      try {
        const result = await (ctx as any).runAction("contact.sendContactEmail", {
          id: submissionId,
            name,
            email,
            message,
            ip,
            userAgent,
            createdAt: now,
        } as any);

        if (!result?.ok) {
          await ctx.db.patch(submissionId, { status: "email_failed" });
          (ctx as any).log?.error?.("Contact email failed", { id: submissionId, ip, code: result?.code });
        }
      } catch (error) {
        await ctx.db.patch(submissionId, { status: "email_failed" });
        (ctx as any).log?.error?.("Contact email action threw error", { id: submissionId, ip, error });
      }

      return { ok: true as const };
    } catch (error) {
      (ctx as any).log?.error?.("Unexpected server error handling contact submission", { error });
      return { ok: false as const, code: "SERVER_ERROR" as const };
    }
  },
});

/* Utility functions */
function sanitize(input: string): string {
  return input.trim().replace(/\s+/g, " ");
}

function validateLength(value: string, min: number, max: number): boolean {
  const len = value.length;
  return len >= min && len <= max;
}

// Simple RFC5322 baseline pattern (not exhaustive but sufficient)
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
function validateEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

function isSpam(message: string): boolean {
  const urlMatches = message.match(/https?:\/\//gi)?.length || 0;
  const tokenCount = message.split(/\s+/).length;
  if (tokenCount > 0 && urlMatches / tokenCount > 0.3) return true; // >30% tokens are URLs
  const lowered = message.toLowerCase();
  const spamSignals = [
    "viagra",
    "free money",
    "crypto investment",
    "loan approval",
    "weight loss",
    "casino",
  ];
  if (spamSignals.some((s) => lowered.includes(s))) return true;
  return false;
}

async function deriveIp(ctx: any, provided?: string): Promise<string> {
  // If Convex provides a request object with IP (future-proof), attempt to use it.
  const ip = provided || "0.0.0.0";
  return ip;
}
