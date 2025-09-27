import { action } from "./_generated/server";
import { v } from "convex/values";
import nodemailer from "nodemailer";

// This action sends an email notification for a new contact submission.
// It is intentionally minimal: validation is performed in the mutation.
export const sendContactEmail = action({
  args: {
    id: v.id("contactSubmissions"),
    name: v.string(),
    email: v.string(),
    message: v.string(),
    ip: v.string(),
    userAgent: v.string(),
    createdAt: v.number(),
  },
  handler: async (ctx, args) => {
    const env = (ctx as any).env as { get: (k: string) => string | undefined } | undefined;

    const host = env?.get("EMAIL_HOST") || process.env.EMAIL_HOST;
    const portRaw = env?.get("EMAIL_PORT") || process.env.EMAIL_PORT;
    const user = env?.get("EMAIL_USER") || process.env.EMAIL_USER;
    const pass = env?.get("EMAIL_PASS") || process.env.EMAIL_PASS;
    const notifyTo = env?.get("CONTACT_NOTIFY_TO") || process.env.CONTACT_NOTIFY_TO;

    if (!host || !portRaw || !user || !pass || !notifyTo) {
      (ctx as any).log?.error?.("Email env vars missing; cannot send contact email", { id: args.id });
      return { ok: false, code: "MISSING_CONFIG" as const };
    }

    const port = Number(portRaw);

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // common heuristic
      auth: { user, pass },
    });

    const submittedAt = new Date(args.createdAt).toISOString();

    const subject = `New Website Inquiry from ${args.name}`;
    const plain = `New contact submission\n\nID: ${args.id}\nName: ${args.name}\nEmail: ${args.email}\nIP: ${args.ip}\nUser-Agent: ${args.userAgent}\nSubmitted: ${submittedAt}\n\nMessage:\n${args.message}`;

    const html = `<!doctype html><html><body style="font-family:Arial,sans-serif;color:#111;">\n<h2>New Website Inquiry</h2>\n<table style="border-collapse:collapse;max-width:640px;width:100%;">\n<tr><td style="font-weight:600;padding:4px 8px;background:#f3f4f6;width:140px;">ID</td><td style="padding:4px 8px;">${escapeHtml(
      args.id
    )}</td></tr>\n<tr><td style="font-weight:600;padding:4px 8px;background:#f3f4f6;">Name</td><td style="padding:4px 8px;">${escapeHtml(
      args.name
    )}</td></tr>\n<tr><td style="font-weight:600;padding:4px 8px;background:#f3f4f6;">Email</td><td style="padding:4px 8px;">${escapeHtml(
      args.email
    )}</td></tr>\n<tr><td style="font-weight:600;padding:4px 8px;background:#f3f4f6;">IP</td><td style="padding:4px 8px;">${escapeHtml(
      args.ip
    )}</td></tr>\n<tr><td style="font-weight:600;padding:4px 8px;background:#f3f4f6;">User Agent</td><td style="padding:4px 8px;white-space:pre-wrap;">${escapeHtml(
      args.userAgent
    )}</td></tr>\n<tr><td style="font-weight:600;padding:4px 8px;background:#f3f4f6;">Submitted</td><td style="padding:4px 8px;">${escapeHtml(
      submittedAt
    )}</td></tr>\n<tr><td style="font-weight:600;padding:4px 8px;background:#f3f4f6;vertical-align:top;">Message</td><td style="padding:4px 8px;white-space:pre-wrap;">${escapeHtml(
      args.message
    )}</td></tr>\n</table>\n</body></html>`;

    try {
      await transporter.sendMail({
        from: user,
        to: notifyTo.split(",").map((s: string) => s.trim()),
        subject,
        text: plain,
        html,
      });
      return { ok: true as const };
    } catch (error) {
      (ctx as any).log?.error?.("Failed to send contact email", { id: args.id, error });
      return { ok: false, code: "SEND_FAILED" as const };
    }
  },
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
