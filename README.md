# qubrix

## Contact / Quote Submission Backend (Convex)

This project uses [Convex](https://convex.dev) as a serverless backend + database for capturing contact / quote submissions.

### Features

- Frontend `Contact` form validates (name, email, message) and uses a Convex mutation (`contact.submit`) to persist submissions.
- Honeypot anti-spam input (`company`) – submission is rejected if filled.
- Basic spam filtering (URL density > 30%, common spam keywords).
- Rate limiting: max 5 submissions per IP per hour.
- Email notification via Nodemailer SMTP action `contact.sendContactEmail`.
- Logging of each submission with id, ip, status, truncated message.

### Convex Functions Added

| File | Purpose |
|------|---------|
| `frontend/convex/contact.submit.ts` | Mutation: validate, spam / rate limit, insert, trigger email. |
| `frontend/convex/contact.sendContactEmail.ts` | Action: Sends notification email via SMTP. |
| `frontend/convex/contact.health.ts` | Query: simple health check `{ ok: true }`. |
| `frontend/convex/schema.ts` | Added `contactSubmissions` table + indexes. |

### Database Schema (`contactSubmissions`)

Fields: `name`, `email`, `message`, `userAgent`, `ip`, `createdAt` (ms epoch), `status` (`new | email_failed`), `readAt` (optional ms epoch).

Indexes:
- `by_createdAt`
- `by_ip_createdAt` (used for rate limiting)

### Environment Variables

Configure these in Convex dashboard (or `.env.local` used by Convex runtime if applicable):

```
EMAIL_HOST=your.smtp.host
EMAIL_PORT=587
EMAIL_USER=your_smtp_username
EMAIL_PASS=your_smtp_password
CONTACT_NOTIFY_TO=you@example.com,team@example.com
```

Optional (existing lead notification system):
```
RESEND_API_KEY=...
LEAD_NOTIFY_EMAIL=...
```

### Running Locally

In one terminal (Convex):
```
npx convex dev
```

In another (frontend Vite dev server):
```
cd frontend
npm run dev
```

Ensure the Convex generated client (`frontend/convex/_generated`) is up-to-date. If types for new functions are missing, stop and re-run `npx convex dev`.

### Testing the Flow

1. Start both servers (`npx convex dev` and `npm run dev`).
2. Open the site and navigate to the Contact section.
3. Fill in valid values (Name: 2–100 chars, Message: 10–5000 chars).
4. Leave the hidden `company` field empty (it is hidden; filling via devtools should cause rejection).
5. Submit – button shows “Sending…”. On success you should see a green success banner and form resets.
6. Check Convex dashboard data explorer: `contactSubmissions` should have the new row.
7. Confirm you receive the email (SMTP settings must be valid). If email fails, record status updates to `email_failed`.
8. Trigger rate limiting by submitting >5 times within one hour from same IP; you should receive a rate limit error banner.

### Standardized Mutation Responses

```
Success: { ok: true }
Validation: { ok: false, code: "VALIDATION_ERROR", fieldErrors: { ... } }
Rate limit: { ok: false, code: "RATE_LIMIT" }
Server error: { ok: false, code: "SERVER_ERROR" }
```

### Notes

- Frontend currently references the mutation path with a string (`'contact.submit:submit'`). After first codegen run that path will be resolved in `api` types.
- Logging uses Convex context logger when available; otherwise falls back to console (in action). Logs include truncated message (300 chars) to avoid large log payloads.

