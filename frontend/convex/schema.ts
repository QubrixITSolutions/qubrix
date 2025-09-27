import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  leads: defineTable({
    name: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
    projectType: v.string(),
    projectDetails: v.string(),
    message: v.string(),
    source: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_createdAt", ["createdAt"]),
  contactSubmissions: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    userAgent: v.string(),
    ip: v.string(),
    createdAt: v.number(), // store as ms epoch
    status: v.string(), // "new" | "email_failed"
    readAt: v.optional(v.number()), // nullable timestamp ms
  })
    .index("by_createdAt", ["createdAt"]) // for admin listing
    .index("by_ip_createdAt", ["ip", "createdAt"]), // for rate limiting
});
