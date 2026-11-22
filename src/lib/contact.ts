import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Tell me your name").max(100),
  email: z.email("That email doesn't look right").max(200),
  topic: z.enum(["team", "event", "broadcast", "localization", "other"]),
  message: z.string().trim().min(10, "A little more detail, please").max(4000),
});

export type Lead = z.infer<typeof contactSchema> & { receivedAt: string };

export type ContactState = {
  status: "idle" | "ok" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof z.infer<typeof contactSchema>, string[]>>;
};

export type ContactDeps = {
  allow: (ip: string) => boolean;
  saveLead: (lead: Lead) => Promise<void>;
  sendEmails: (lead: Lead) => Promise<void>;
  now?: () => Date;
  log?: (msg: string, err?: unknown) => void;
};

const OK: ContactState = { status: "ok", message: "Thanks. I got your message and will reply within a few days." };

export async function handleContact(
  form: FormData,
  ip: string,
  deps: ContactDeps,
): Promise<ContactState> {
  // Honeypot: real people never see this field. Pretend it worked.
  if (String(form.get("website") ?? "").length > 0) return OK;

  if (!deps.allow(ip)) {
    return { status: "error", message: "Too many messages from your connection. Try again in an hour." };
  }

  const parsed = contactSchema.safeParse({
    name: form.get("name"),
    email: form.get("email"),
    topic: form.get("topic") || "other",
    message: form.get("message"),
  });
  if (!parsed.success) {
    return { status: "error", message: "Check the highlighted fields", fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }

  const lead: Lead = { ...parsed.data, receivedAt: (deps.now?.() ?? new Date()).toISOString() };
  const log = deps.log ?? console.error;

  // Save first, so an email outage never loses a message.
  try {
    await deps.saveLead(lead);
  } catch (err) {
    log("contact: save failed", err);
    return { status: "error", message: "Something broke on my side. Please email me directly instead." };
  }

  try {
    await deps.sendEmails(lead);
  } catch (err) {
    log("contact: email failed (lead is saved)", err);
  }
  return OK;
}
