import { mutation, query } from "./_generated/server";
import type { MutationCtx } from "./_generated/server";
import type { Id } from "./_generated/dataModel";
import { v } from "convex/values";

type LeadInsert = {
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  projectDetails: string;
  message: string;
  source?: string;
  createdAt: number;
};

type LeadNotificationPayload = LeadInsert & { id: Id<"leads"> };

const DEFAULT_NOTIFY_EMAIL = "chawlamanan5@gmail.com";
const RESEND_ENDPOINT = "https://api.resend.com/emails";
const RESEND_FROM_EMAIL = "QUBRIX <onboarding@resend.dev>";

export const create = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    projectType: v.string(),
    projectDetails: v.string(),
    source: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const leadRecord: LeadInsert = {
      name: args.name,
      email: args.email,
      projectType: args.projectType,
      projectDetails: args.projectDetails,
      message: args.projectDetails,
      source: args.source,
      createdAt: now,
    };

    if (args.phone) {
      leadRecord.phone = args.phone;
    }

    const id = await ctx.db.insert("leads", leadRecord);

    await sendLeadNotification(ctx, { ...leadRecord, id });

    return { id };
  },
});

export const list = query({
  args: { limit: v.optional(v.number()) },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 50;
    const leads = await ctx.db
      .query("leads")
      .withIndex("by_createdAt")
      .order("desc")
      .take(limit);
    return leads;
  },
});

async function sendLeadNotification(ctx: MutationCtx, lead: LeadNotificationPayload) {
  const apiKey = getEnv(ctx, "RESEND_API_KEY");
  const notifyEmail = getEnv(ctx, "LEAD_NOTIFY_EMAIL") ?? DEFAULT_NOTIFY_EMAIL;

  if (!apiKey) {
    logWarn(ctx, "RESEND_API_KEY not set. Lead email notification skipped.", {
      leadId: lead.id,
    });
    return;
  }

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM_EMAIL,
        to: [notifyEmail],
        subject: buildEmailSubject(lead),
        html: buildEmailHtml(lead),
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      logError(ctx, "Failed to send lead notification email", {
        leadId: lead.id,
        status: response.status,
        body,
      });
    }
  } catch (error) {
    logError(ctx, "Unexpected error sending lead notification email", {
      leadId: lead.id,
      error,
    });
  }
}

function buildEmailSubject(lead: LeadInsert): string {
  const source = formatSourceLabel(lead.source);
  return `New ${source} request from ${lead.name}`;
}

function buildEmailHtml(lead: LeadInsert): string {
  const projectType = formatProjectTypeLabel(lead.projectType);
  const source = formatSourceLabel(lead.source);
  const createdAt = new Date(lead.createdAt).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return `
    <h2 style="font-family: Arial, sans-serif; color: #111827;">New lead from your website</h2>
    <p style="font-family: Arial, sans-serif; color: #1f2937;">A visitor just submitted the <strong>${source}</strong> form.</p>
    <table style="font-family: Arial, sans-serif; border-collapse: collapse; width: 100%; margin-top: 16px;">
      <tbody>
        ${tableRow("Name", lead.name)}
        ${tableRow("Email", lead.email)}
        ${tableRow("Phone", lead.phone ?? "Not provided")}
        ${tableRow("Project Type", projectType)}
        ${tableRow("Submitted", createdAt)}
        ${tableRow("Project Details", lead.projectDetails)}
      </tbody>
    </table>
  `;
}

function tableRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding: 6px 8px; font-weight: 600; color: #111827; width: 160px; background: #f9fafb; border-bottom: 1px solid #e5e7eb;">${escapeHtml(label)}</td>
      <td style="padding: 6px 8px; color: #1f2937; border-bottom: 1px solid #e5e7eb;">${formatCellValue(value)}</td>
    </tr>
  `;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatCellValue(value: string): string {
  return escapeHtml(value).replace(/\n/g, "<br />");
}

function formatSourceLabel(source?: string): string {
  if (!source) return "website";
  return source.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatProjectTypeLabel(projectType: string): string {
  const mapping: Record<string, string> = {
    "custom-software": "Custom Software Development",
    website: "Website Development",
    ecommerce: "E-commerce Platform",
    "mobile-app": "Mobile App Development",
    "ai-automation": "AI & Automation Solutions",
    other: "Other",
  };

  return mapping[projectType] ?? projectType.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function getEnv(ctx: MutationCtx, key: string): string | undefined {
  const env = (ctx as unknown as { env?: { get(key: string): string | undefined } }).env;
  if (env && typeof env.get === "function") {
    return env.get(key);
  }
  const globalProcess = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process;
  if (globalProcess?.env) {
    return globalProcess.env[key];
  }
  return undefined;
}

function logWarn(ctx: MutationCtx, message: string, details?: Record<string, unknown>) {
  const logger = (ctx as unknown as { log?: { warn: (msg: string, details?: Record<string, unknown>) => void } }).log;
  if (logger && typeof logger.warn === "function") {
    logger.warn(message, details);
  } else {
    console.warn(message, details);
  }
}

function logError(ctx: MutationCtx, message: string, details?: Record<string, unknown>) {
  const logger = (ctx as unknown as { log?: { error: (msg: string, details?: Record<string, unknown>) => void } }).log;
  if (logger && typeof logger.error === "function") {
    logger.error(message, details);
  } else {
    console.error(message, details);
  }
}
