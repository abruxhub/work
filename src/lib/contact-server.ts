import "server-only";
import { put } from "@vercel/blob";
import { Resend } from "resend";
import type { ContactDeps, Lead } from "./contact";
import { createRateLimiter } from "./rate-limit";
import { site } from "@/content/site";

const allow = createRateLimiter(5, 60 * 60 * 1000);

async function saveLead(lead: Lead) {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    if (process.env.NODE_ENV === "production") throw new Error("BLOB_READ_WRITE_TOKEN is not set");
    console.info("contact (dev, not saved):", lead);
    return;
  }
  // New file per message with a random suffix; the URL never leaves the server.
  await put(`leads/${lead.receivedAt.replace(/[:.]/g, "-")}.json`, JSON.stringify(lead, null, 2), {
    access: "public",
    addRandomSuffix: true,
    contentType: "application/json",
  });
}

async function sendEmails(lead: Lead) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Site <onboarding@resend.dev>";
  if (!key || !to) {
    console.info("contact (dev, email skipped)");
    return;
  }
  const resend = new Resend(key);
  await resend.emails.send({
    from,
    to,
    replyTo: lead.email,
    subject: `New message (${lead.topic}) from ${lead.name}`,
    text: `${lead.name} <${lead.email}>\nTopic: ${lead.topic}\n\n${lead.message}`,
  });
  await resend.emails.send({
    from,
    to: lead.email,
    subject: `Got your message`,
    text: `Hi ${lead.name},\n\nThanks for writing. I got your message and will reply within a few days.\n\n${site.name}`,
  });
}

export const contactDeps: ContactDeps = { allow, saveLead, sendEmails };
