import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="mx-auto grid min-h-dvh max-w-xl place-content-center px-6 text-center">
      <p className="font-mono text-sm text-fg-3">404</p>
      <h1 className="mt-3 font-serif text-7xl uppercase">This page doesn’t exist</h1>
      <p className="mt-3 text-fg-2">The link may be old or mistyped.</p>
      <Link href="/" className="mt-8 justify-self-center bg-ink px-5 py-3 font-extrabold lowercase text-white">Back to the homepage</Link>
    </main>
  );
}
