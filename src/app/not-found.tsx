import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto grid min-h-dvh max-w-xl place-content-center px-6 text-center">
      <p className="font-mono text-sm text-fg-3">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight [font-stretch:115%]">This page doesn’t exist</h1>
      <p className="mt-3 text-fg-2">The link may be old or mistyped.</p>
      <Link href="/" className="mt-8 justify-self-center rounded-lg bg-fg px-5 py-2.5 font-medium text-bg">Back to the homepage</Link>
    </main>
  );
}
