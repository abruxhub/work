import { about, credits, services, site } from "@/content/site";
import { ContactForm } from "@/components/contact-form";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: site.handle,
  jobTitle: site.role,
  url: site.url,
  knowsLanguage: site.languages,
  sameAs: site.links.map((l) => l.href),
};

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-bg/85 backdrop-blur">
        <nav aria-label="Main" className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <a href="#top" className="font-semibold tracking-tight [font-stretch:125%]">{site.handle}</a>
          <ul className="flex items-center gap-1 text-sm text-fg-2">
            <li className="hidden sm:block"><a className="rounded-md px-3 py-2 transition-colors hover:text-fg" href="#work">Work</a></li>
            <li className="hidden sm:block"><a className="rounded-md px-3 py-2 transition-colors hover:text-fg" href="#about">About</a></li>
            <li><a className="rounded-md bg-raised px-3 py-2 text-fg transition-colors hover:bg-line" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="main" className="mx-auto max-w-5xl px-6">
        <section id="top" className="grid gap-10 py-20 sm:py-28 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="mb-5 flex items-center gap-2 font-mono text-sm text-fg-3">
              <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
              {site.role} · {site.location}
            </p>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight [font-stretch:115%] sm:text-6xl">
              {site.headline}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-fg-2">{site.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="rounded-lg bg-fg px-5 py-2.5 font-medium text-bg transition-[opacity,transform] hover:opacity-90 active:scale-[0.98]">Work with me</a>
              <a href="#work" className="rounded-lg px-5 py-2.5 text-fg-2 transition-colors hover:text-fg">See my work</a>
            </div>
          </div>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line font-mono text-sm">
            {[
              ["Role", "Esports coordinator"],
              ["Games", "VALORANT, LoL"],
              ["Languages", "ES · EN · PT"],
              ["Before", "Pro VALORANT"],
            ].map(([k, v]) => (
              <div key={k} className="bg-raised p-4">
                <dt className="text-fg-3">{k}</dt>
                <dd className="mt-1 text-fg">{v}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="offer" className="border-t border-line py-16">
          <h2 id="offer" className="text-2xl font-semibold tracking-tight [font-stretch:115%]">What I do</h2>
          <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
            {services.map((s) => (
              <li key={s.title} className="bg-bg p-6">
                <h3 className="font-medium">{s.title}</h3>
                <p className="mt-2 text-fg-2">{s.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="work" aria-labelledby="work-h" className="border-t border-line py-16">
          <h2 id="work-h" className="text-2xl font-semibold tracking-tight [font-stretch:115%]">Work</h2>
          <ol className="mt-8 divide-y divide-line border-y border-line">
            {credits.map((c, i) => (
              <li key={i} className="grid grid-cols-[4.5rem_1fr] gap-x-4 gap-y-1 py-4 sm:grid-cols-[5rem_1fr_1.2fr]">
                <span className="font-mono text-sm tabular-nums text-fg-3">{c.year}</span>
                <span className="font-medium">{c.title}</span>
                <span className="col-start-2 text-fg-2 sm:col-start-3">{c.role}</span>
              </li>
            ))}
          </ol>
        </section>

        <section id="about" aria-labelledby="about-h" className="border-t border-line py-16">
          <h2 id="about-h" className="text-2xl font-semibold tracking-tight [font-stretch:115%]">About me</h2>
          <div className="mt-6 grid max-w-2xl gap-4 text-lg text-fg-2">
            {about.map((p) => <p key={p}>{p}</p>)}
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-h" className="border-t border-line py-16">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
            <div>
              <h2 id="contact-h" className="text-2xl font-semibold tracking-tight [font-stretch:115%]">Get in touch</h2>
              <p className="mt-4 text-fg-2">
                Running a team, an event or a broadcast, or need something translated? Tell me what you have in mind.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2 text-sm">
                {site.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} rel="me noopener" target="_blank" className="inline-block rounded-md border border-line px-3 py-2 text-fg-2 transition-colors hover:text-fg">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-fg-3">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <a href="/privacy" className="transition-colors hover:text-fg">Privacy</a>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
