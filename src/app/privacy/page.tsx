import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/content/site";

export const metadata: Metadata = { title: "Privacy" };

export default function Privacy() {
  return (
    <main id="main" className="mx-auto max-w-2xl px-6 py-20">
      <Link href="/" className="text-sm text-fg-3 hover:text-fg">← {site.handle}</Link>
      <h1 className="mt-6 text-3xl font-semibold tracking-tight [font-stretch:115%]">Privacy</h1>
      <div className="mt-6 grid gap-4 text-fg-2">
        <p>When you send the contact form, I store your name, email, topic and message so I can reply. I don’t sell it or share it, and I delete it on request.</p>
        <p>The site uses Vercel Web Analytics to count visits. It doesn’t use cookies and doesn’t track you across sites.</p>
        <p>To ask about or delete your data, use the contact form and say so.</p>
      </div>
    </main>
  );
}
