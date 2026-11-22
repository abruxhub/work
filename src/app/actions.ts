"use server";

import { headers } from "next/headers";
import { handleContact, type ContactState } from "@/lib/contact";
import { contactDeps } from "@/lib/contact-server";

export async function submitContact(_prev: ContactState, form: FormData): Promise<ContactState> {
  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown";
  return handleContact(form, ip, contactDeps);
}
