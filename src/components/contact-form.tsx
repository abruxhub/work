"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions";
import type { ContactState } from "@/lib/contact";

const initial: ContactState = { status: "idle" };

const field =
  "w-full border-0 border-b border-line bg-transparent px-0 py-2.5 text-lg text-fg placeholder:text-fg-3 transition-colors hover:border-fg-3 focus:border-accent focus:outline-none aria-[invalid=true]:border-red-400/80";

function Err({ id, msgs }: { id: string; msgs?: string[] }) {
  if (!msgs?.length) return null;
  return (
    <p id={id} className="mt-1.5 text-sm text-red-300">
      {msgs[0]}
    </p>
  );
}

export function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initial);
  const fe = state.fieldErrors ?? {};

  if (state.status === "ok") {
    return (
      <p role="status" className="caps border-t border-fg/40 pt-6 text-base leading-snug">
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} noValidate className="grid gap-7">
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="caps mb-1 block text-xs text-fg-3">Name</label>
          <input id="name" name="name" autoComplete="name" required className={field}
            aria-invalid={!!fe.name} aria-describedby={fe.name ? "name-err" : undefined} />
          <Err id="name-err" msgs={fe.name} />
        </div>
        <div>
          <label htmlFor="email" className="caps mb-1 block text-xs text-fg-3">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" required className={field}
            aria-invalid={!!fe.email} aria-describedby={fe.email ? "email-err" : undefined} />
          <Err id="email-err" msgs={fe.email} />
        </div>
      </div>
      <div>
        <label htmlFor="topic" className="caps mb-1 block text-xs text-fg-3">What’s it about</label>
        <select id="topic" name="topic" defaultValue="team" className={`${field} [&>option]:bg-raised`}>
          <option value="team">Team coordination</option>
          <option value="event">An event</option>
          <option value="broadcast">Observing or replays</option>
          <option value="localization">Translation</option>
          <option value="other">Something else</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="caps mb-1 block text-xs text-fg-3">Message</label>
        <textarea id="message" name="message" rows={5} required className={field}
          aria-invalid={!!fe.message} aria-describedby={fe.message ? "message-err" : undefined} />
        <Err id="message-err" msgs={fe.message} />
      </div>
      {/* Honeypot: hidden from people and screen readers. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" disabled={pending}
          className="caps bg-fg px-6 py-3 text-sm text-bg transition-[opacity,transform] hover:opacity-85 active:scale-[0.98] disabled:opacity-60">
          {pending ? "Sending" : "Send message"}
        </button>
        <p role="status" className="text-sm text-red-300">
          {state.status === "error" ? state.message : ""}
        </p>
      </div>
    </form>
  );
}
