import { about, credits, services, site, skills } from "@/content/site";
import { ContactForm } from "@/components/contact-form";
import { Star, Tag } from "@/components/star";

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

function SectionHead({ n, id, children }: { n: string; id: string; children: React.ReactNode }) {
  return (
    <div className="flex items-end justify-between gap-6 border-b border-line pb-4">
      <h2 id={id} className="font-serif text-5xl italic leading-none sm:text-6xl">{children}</h2>
      <span className="caps text-sm text-fg-3">{n}</span>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
        <nav aria-label="Main" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2 font-sans font-extrabold [font-stretch:125%]">
            <Star className="size-5 text-accent" />
            {site.handle}
          </a>
          <ul className="caps flex items-center gap-1 text-xs text-fg-2">
            <li className="hidden sm:block"><a className="px-3 py-2 transition-colors hover:text-fg" href="#offer">Services</a></li>
            <li className="hidden sm:block"><a className="px-3 py-2 transition-colors hover:text-fg" href="#work">Work</a></li>
            <li className="hidden sm:block"><a className="px-3 py-2 transition-colors hover:text-fg" href="#about">About</a></li>
            <li><a className="ml-2 inline-block bg-fg px-3 py-2 text-bg transition-opacity hover:opacity-85" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="main" className="mx-auto max-w-6xl px-6">
        {/* Hero */}
        <section id="top" className="pt-10 pb-20 sm:pt-14">
          <div className="caps flex flex-wrap justify-between gap-4 text-xs leading-relaxed text-fg-3">
            <p className="max-w-56">{site.role}<br />St. Clair College Esports</p>
            <p className="sm:text-right">{site.location}<br />ES · EN · PT</p>
          </div>

          <div className="relative mt-12 sm:mt-16">
            <h1 className="leading-[0.85]">
              <span className="block font-serif text-[clamp(5rem,19vw,15rem)] italic">Abril</span>
              <span className="block font-sans text-[clamp(2.4rem,9.4vw,7.5rem)] font-extrabold uppercase tracking-tight [font-stretch:112%]">
                Molins Sandner
              </span>
            </h1>
            <Star className="absolute top-0 right-[4%] size-20 rotate-12 text-accent sm:right-auto sm:left-[min(56vw,44rem)] sm:size-28" />
            <Tag className="absolute top-[30%] right-0 -rotate-3 sm:right-auto sm:left-[min(60vw,47rem)] sm:text-base">ex. pro VALORANT</Tag>
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-end">
            <div>
              <p className="caps text-lg leading-snug text-fg sm:text-2xl">
                <span className="inline-block w-12 sm:w-28" />
                {site.headline}
              </p>
              <p className="mt-6 max-w-xl leading-relaxed text-fg-2 sm:ml-28">{site.intro}</p>
            </div>
            <div className="grid gap-6">
              <ul className="flex flex-wrap gap-2" aria-label="Skills">
                {skills.map((s) => (
                  <li key={s} className="rounded-full border border-line px-3 py-1.5 text-sm text-fg-2">{s}</li>
                ))}
              </ul>
              <div className="caps flex flex-wrap gap-3 text-sm">
                <a href="#contact" className="bg-fg px-5 py-3 text-bg transition-[opacity,transform] hover:opacity-85 active:scale-[0.98]">Work with me</a>
                <a href="#work" className="border border-line px-5 py-3 text-fg-2 transition-colors hover:text-fg">See my work ↘</a>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section aria-labelledby="offer" className="py-16">
          <SectionHead n="01" id="offer">What I do</SectionHead>
          <ol className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <li key={s.title} className="border-t border-fg/40 pt-4">
                <p className="caps text-sm text-fg-3">0{i + 1}</p>
                <h3 className="caps mt-6 text-base font-medium">{s.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-fg-2">{s.body}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Work */}
        <section id="work" aria-labelledby="work-h" className="py-16">
          <SectionHead n="02" id="work-h">Work</SectionHead>
          <ol className="mt-4">
            {credits.map((c, i) => (
              <li key={i} className="grid grid-cols-[4.5rem_1fr] items-baseline gap-x-4 gap-y-1 border-b border-line py-5 transition-colors hover:bg-raised sm:grid-cols-[6rem_1.2fr_1fr] sm:px-2">
                <span className="caps text-sm tabular-nums text-fg-3">{c.year}</span>
                <span className="font-serif text-3xl leading-tight sm:text-4xl">{c.title}</span>
                <span className="caps col-start-2 text-xs leading-relaxed text-fg-2 sm:col-start-3 sm:text-sm">{c.role}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* About */}
        <section id="about" aria-labelledby="about-h" className="py-16">
          <div className="relative overflow-hidden rounded-3xl bg-wine px-6 py-12 sm:px-12 sm:py-16">
            <Star className="absolute -top-14 -right-10 size-32 -rotate-12 text-accent sm:size-44" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_1.3fr]">
              <div>
                <Tag>hello!</Tag>
                <h2 id="about-h" className="mt-5 leading-[0.9]">
                  <span className="block font-sans text-5xl font-extrabold uppercase [font-stretch:112%] sm:text-6xl">About</span>
                  <span className="block font-serif text-6xl italic sm:text-7xl">me</span>
                </h2>
                <dl className="caps mt-10 grid gap-3 text-sm">
                  <div className="flex gap-3"><dt className="text-fg/60">Based in</dt><dd>{site.location}</dd></div>
                  <div className="flex gap-3"><dt className="text-fg/60">Speaks</dt><dd>ES · EN · PT</dd></div>
                  <div className="flex gap-3"><dt className="text-fg/60">Games</dt><dd>VALORANT · LoL</dd></div>
                </dl>
              </div>
              <div className="grid content-start gap-5 text-lg leading-relaxed text-fg/90 lg:pt-14">
                {about.map((p) => <p key={p}>{p}</p>)}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-h" className="py-16">
          <SectionHead n="03" id="contact-h">Let’s talk</SectionHead>
          <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="caps text-base leading-snug">
                Running a team, an event or a broadcast, or need something translated? Tell me what you have in mind.
              </p>
              <ul className="caps mt-8 grid gap-2 text-sm">
                {site.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} rel="me noopener" target="_blank" className="group inline-flex items-center gap-2 py-1 text-fg-2 transition-colors hover:text-fg">
                      {l.label} <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
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
        <div className="caps mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-xs text-fg-3">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <a href="/privacy" className="transition-colors hover:text-fg">Privacy</a>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
