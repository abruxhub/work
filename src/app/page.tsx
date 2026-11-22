import { ClipboardList, Gamepad2, Languages, Users } from "lucide-react";
import { about, brands, credits, education, photos, services, site, skillGroups, stats, workCategories } from "@/content/site";
import { ContactForm } from "@/components/contact-form";
import { Butterfly, Flower, GiltFrame, Label, Phone, PixelReveal, ScriptHead, Seal, TornNote } from "@/components/vintage";

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

const statIcons = { users: Users, languages: Languages, clipboard: ClipboardList, gamepad: Gamepad2 };
const socialShort: Record<string, string> = { X: "X", Instagram: "IG", LinkedIn: "in" };
const roman = ["I", "II", "III", "IV", "V", "VI"];

function WorkEntry({ c, flip }: { c: (typeof credits)[number]; flip: boolean }) {
  const pics = (c.photos ?? []).slice(0, 4);
  return (
    <li className={`grid items-center gap-8 ${pics.length ? "lg:col-span-2 lg:grid-cols-2 lg:gap-14" : ""} ${pics.length && flip ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <div className="relative border-l-4 border-oxblood bg-raised p-6 shadow-[0_14px_28px_-18px_rgb(36_21_15/0.5)] sm:p-8">
        <Label className="text-fg-3">{c.year}</Label>
        <h4 className="mt-2 font-serif text-3xl leading-tight sm:text-4xl">{c.title}</h4>
        <p className="mt-1 font-serif text-lg italic text-oxblood">{c.role}</p>
        {c.points && (
          <ul className="mt-4 grid gap-1.5 text-fg-2">
            {c.points.map((pt) => (
              <li key={pt} className="flex gap-3"><span aria-hidden="true" className="mt-2.5 h-px w-4 shrink-0 bg-oxblood" />{pt}</li>
            ))}
          </ul>
        )}
      </div>
      {pics.length > 0 && (
        <ul className={`grid gap-5 ${pics.length === 1 ? "grid-cols-1 justify-items-center" : "grid-cols-2"}`}>
          {pics.map((p, i) => (
            <li key={p.src} className={`${pics.length === 3 && i === 0 ? "col-span-2" : ""} ${pics.length === 1 ? "w-full max-w-md" : ""}`}>
              <GiltFrame photo={p} className="aspect-[4/3] w-full" />
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Home() {
  const [heroPhoto, flagPhoto, headsetPhoto, , wallPhoto] = photos;
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur">
        <nav aria-label="Main" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-script text-3xl leading-none text-oxblood">Abril</a>
          <ul className="flex items-center gap-1 text-xs font-bold uppercase tracking-[0.18em] text-fg-2">
            <li className="hidden sm:block"><a className="px-3 py-2 transition-colors hover:text-oxblood" href="#about">About</a></li>
            <li className="hidden sm:block"><a className="px-3 py-2 transition-colors hover:text-oxblood" href="#offer">Services</a></li>
            <li className="hidden sm:block"><a className="px-3 py-2 transition-colors hover:text-oxblood" href="#work">Work</a></li>
            <li className="hidden md:block"><a className="px-3 py-2 transition-colors hover:text-oxblood" href="#skills">Skills</a></li>
            <li><a className="ml-2 inline-block bg-oxblood px-4 py-2 text-cream transition-opacity hover:opacity-90" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="main">
        {/* ── Hero ── */}
        <section id="top" className="grain relative overflow-hidden">
          <Butterfly className="absolute top-24 left-[6%] size-16 -rotate-12 sm:size-20" />
          <Flower className="absolute top-[42%] right-[5%] size-14 rotate-12 sm:size-20" />
          <Flower className="absolute bottom-24 left-[3%] hidden size-14 lg:block" />
          <div className="mx-auto max-w-6xl px-6 pt-10 pb-20 text-center">
            <p aria-hidden="true" className="font-display text-[clamp(5rem,21vw,17.5rem)] uppercase leading-[0.8] tracking-tight text-oxblood">
              Portfolio
            </p>
            {heroPhoto && (
              <div className="relative z-10 mx-auto -mt-2 w-[min(60vw,18rem)] sm:-mt-[min(9vw,6rem)]">
                <GiltFrame photo={heroPhoto} shape="arch" className="aspect-[3/4] w-full" imgClass="object-top" />
                <Butterfly className="absolute -top-6 -right-10 size-14 rotate-12" />
              </div>
            )}
            <h1 className="relative z-20 -mt-3 font-serif sm:-mt-[min(14vw,6.5rem)] text-[clamp(2.8rem,9vw,7rem)] italic leading-[0.9] text-oxblood [text-shadow:0_0_22px_#efe6d4,0_0_6px_#efe6d4,0_0_2px_#efe6d4]">
              Abril <span className="whitespace-nowrap">Molins Sandner</span>
              <span className="sr-only">, {site.role}</span>
            </h1>

            <div className="mt-14 grid gap-10 text-left md:grid-cols-[1fr_1.3fr_auto] md:items-end">
              <p className="font-display text-4xl uppercase leading-[0.95] text-espresso sm:text-5xl">
                Esports<br />coordinator<br /><span className="text-oxblood">& producer</span>
              </p>
              <div>
                <p className="leading-relaxed text-fg-2">{site.intro}</p>
                <div className="mt-6 flex flex-wrap items-center gap-5">
                  <a href="#contact" className="bg-oxblood px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] text-cream transition-opacity hover:opacity-90">Work with me</a>
                  <a href="#work" className="font-serif text-xl italic text-oxblood underline decoration-1 underline-offset-4 hover:opacity-80">see my work</a>
                </div>
              </div>
              <ul className="flex gap-3 md:flex-col">
                {site.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} rel="me noopener" target="_blank" aria-label={l.label}
                      className="grid size-12 place-items-center bg-espresso font-sans text-base font-extrabold text-cream ring-1 ring-gold transition-colors hover:bg-oxblood">
                      {socialShort[l.label] ?? l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Brands ── */}
        <section aria-labelledby="brands-h" className="on-dark damask bg-espresso py-12">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 id="brands-h"><Label className="text-gold">Companies and brands I’ve worked with</Label></h2>
            <ul className="mt-7 flex flex-wrap justify-center gap-3 sm:gap-5">
              {brands.map((b) => (
                <li key={b} className={`grid size-[6.25rem] place-items-center rounded-full bg-cream p-2 text-center font-display uppercase leading-tight tracking-wide text-oxblood ring-2 ring-gold ring-offset-4 ring-offset-espresso sm:size-32 ${b.split(" ").some((w) => w.length > 9) ? "text-[0.7rem] sm:text-sm" : "text-[0.8rem] sm:text-base"}`}>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" aria-labelledby="about-h" className="on-dark damask relative overflow-hidden bg-oxblood">
          <Flower className="absolute top-16 right-[46%] hidden size-14 lg:block" />
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <ScriptHead id="about-h" script="About" serif="me" tone="light" />
              <div className="mt-8 grid gap-4 text-lg leading-relaxed text-fg-2">
                {about.map((p) => <p key={p}>{p}</p>)}
              </div>
              <TornNote className="mt-10 max-w-md -rotate-1" inner="px-7 py-9">
                <div className="flex items-baseline justify-between border-b border-espresso/40 pb-2">
                  <p className="font-serif text-2xl uppercase tracking-wide">My info</p>
                  <p className="font-script text-2xl text-oxblood">abruX</p>
                </div>
                <dl className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  {[
                    ["based in", site.location],
                    ["roots", "Argentina · Germany"],
                    ["speaks", "ES · EN · PT"],
                    ["plays", "VALORANT · LoL"],
                    ["team", "St. Clair Saints"],
                    ["role", "Esports coordinator"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="font-serif italic text-oxblood">{k}</dt>
                      <dd className="font-semibold">{v}</dd>
                    </div>
                  ))}
                </dl>
              </TornNote>
            </div>
            {wallPhoto && (
              <div className="relative mx-auto w-full max-w-sm">
                <PixelReveal photo={wallPhoto} className="w-full shadow-[0_24px_40px_-18px_rgb(0_0_0/0.7)]" />
                <Butterfly className="absolute -top-8 -left-8 size-20 -rotate-12" />
                <Flower className="absolute -right-6 -bottom-6 size-16" />
              </div>
            )}
          </div>
        </section>

        {/* ── Numbers ── */}
        <section aria-labelledby="numbers-h" className="grain relative overflow-hidden">
          <Butterfly className="absolute top-14 right-[38%] hidden size-14 rotate-12 lg:block" />
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <ScriptHead id="numbers-h" script="By the" serif="numbers" />
              <ul className="mt-12 grid grid-cols-2 border-y border-line lg:grid-cols-4">
                {stats.map((s, i) => {
                  const Icon = statIcons[s.icon];
                  return (
                    <li key={s.label} className={`px-4 py-6 ${i % 2 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""} lg:border-l lg:first:border-l-0`}>
                      <span className="grid size-11 place-items-center rounded-full bg-oxblood text-cream">
                        <Icon aria-hidden="true" className="size-5" strokeWidth={1.75} />
                      </span>
                      <span className="mt-4 block font-display text-5xl leading-none tabular-nums text-espresso">{s.value}</span>
                      <span className="mt-2 block font-serif text-lg italic leading-tight text-fg-2">{s.label}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            {headsetPhoto && (
              <div className="relative justify-self-center">
                <Phone photo={headsetPhoto} label="on comms" className="rotate-3" />
                <Flower className="absolute -top-6 -left-8 size-16" />
                <Flower className="absolute -right-6 bottom-20 size-12 rotate-45" />
              </div>
            )}
          </div>
        </section>

        {/* ── Services ── */}
        <section id="offer" aria-labelledby="offer-h" className="on-dark damask relative overflow-hidden bg-brown">
          <Butterfly className="absolute top-16 right-[8%] size-16 rotate-12" />
          <div className="mx-auto max-w-6xl px-6 py-24">
            <ScriptHead id="offer-h" script="Services" serif="& what I do" tone="light" />
            <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => (
                <li key={s.title} className="grain relative flex flex-col bg-cream p-6 text-espresso shadow-[0_20px_36px_-20px_rgb(0_0_0/0.8)] ring-1 ring-gold ring-offset-4 ring-offset-brown">
                  <p className="font-serif text-5xl italic leading-none text-oxblood">{roman[i]}</p>
                  <h3 className="mt-4 font-display text-2xl uppercase leading-tight">{s.title}</h3>
                  <ul className="mt-4 grid gap-1.5 text-sm">
                    {s.items.map((it) => (
                      <li key={it} className="flex items-baseline gap-2">
                        <span>{it}</span>
                        <span aria-hidden="true" className="flex-1 border-b border-dotted border-espresso/40" />
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-espresso/75">{s.body}</p>
                  <a href="#contact" className="mt-5 font-serif text-lg italic text-oxblood underline decoration-1 underline-offset-4">inquire</a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Work ── */}
        <section id="work" aria-labelledby="work-h" className="grain relative overflow-hidden">
          <Flower className="absolute top-20 right-[10%] size-16" />
          <Butterfly className="absolute top-36 right-[22%] hidden size-14 -rotate-12 sm:block" />
          <div className="mx-auto max-w-6xl px-6 py-24">
            <ScriptHead id="work-h" script="Working" serif="experience" />
            <div className="mt-16 grid gap-20">
              {workCategories.map((cat) => {
                const items = credits.filter((c) => c.category === cat);
                if (!items.length) return null;
                return (
                  <div key={cat}>
                    <h3 className="flex items-center gap-4">
                      <span className="bg-brown px-4 py-2 font-sans text-xs font-bold uppercase tracking-[0.22em] text-cream">{cat}</span>
                      <span aria-hidden="true" className="h-px flex-1 bg-line" />
                      <span className="font-serif italic text-fg-3">{items.length} {items.length === 1 ? "role" : "roles"}</span>
                    </h3>
                    <ol className="mt-10 grid gap-x-10 gap-y-12 lg:grid-cols-2">
                      {items.map((c, i) => <WorkEntry key={c.title + c.role} c={c} flip={i % 2 === 1} />)}
                    </ol>
                  </div>
                );
              })}
              <a href="#contact" className="mx-auto block w-full max-w-sm rotate-2 transition-transform hover:rotate-1">
                <TornNote inner="py-10 text-center">
                  <span className="block font-script text-5xl leading-none text-oxblood">your event next?</span>
                  <span className="mt-4 block text-xs font-bold uppercase tracking-[0.2em]">let’s talk</span>
                </TornNote>
              </a>
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" aria-labelledby="skills-h" className="on-dark damask relative overflow-hidden bg-espresso">
          <Flower className="absolute top-20 left-[40%] hidden size-14 lg:block" />
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.6fr] lg:items-start">
            <div>
              <ScriptHead id="skills-h" script="Skills" serif="& strengths" tone="light" />
              <p className="mt-6 max-w-sm text-lg leading-relaxed text-fg-2">What I bring to a team, a broadcast or an event, in my own words.</p>
              <Butterfly className="mt-10 size-20 rotate-6" />
            </div>
            <div className="overflow-hidden bg-cream text-espresso shadow-[0_26px_44px_-20px_rgb(0_0_0/0.75)] ring-1 ring-gold ring-offset-4 ring-offset-espresso">
              <div className="flex items-center gap-2 bg-oxblood px-4 py-2.5 text-cream">
                <span aria-hidden="true" className="size-2.5 rounded-full bg-cream" />
                <span aria-hidden="true" className="size-2.5 rounded-full bg-cream/60" />
                <span aria-hidden="true" className="size-2.5 rounded-full bg-cream/30" />
                <span className="ml-3 font-mono text-sm">#abrux-comms</span>
              </div>
              <ul className="grid gap-4 p-4 sm:p-6">
                <li className="max-w-[80%] rounded-2xl rounded-bl-sm bg-parchment px-4 py-2.5 font-serif text-lg italic">So, what are you actually good at?</li>
                {skillGroups.map((g) => (
                  <li key={g.title} className="ml-auto max-w-[92%] rounded-2xl rounded-br-sm bg-oxblood px-4 py-3 text-cream">
                    <p className="font-display text-lg uppercase tracking-wide">{g.title}</p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {g.items.map((it) => (
                        <li key={it} className="rounded-full border border-cream/40 px-2.5 py-1 text-sm">{it}</li>
                      ))}
                    </ul>
                  </li>
                ))}
                <li className="flex items-center gap-2 text-sm text-espresso/60">
                  <span aria-hidden="true" className="flex gap-1">
                    <span className="size-1.5 rounded-full bg-espresso/40" /><span className="size-1.5 rounded-full bg-espresso/40" /><span className="size-1.5 rounded-full bg-espresso/40" />
                  </span>
                  abruX is typing
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Education ── */}
        <section id="education" aria-labelledby="edu-h" className="on-dark damask relative overflow-hidden bg-oxblood">
          <Butterfly className="absolute top-16 right-[8%] size-16 -rotate-12" />
          <Flower className="absolute bottom-16 left-[6%] size-14" />
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[auto_1fr] lg:items-center">
            <ScriptHead id="edu-h" script="Education" serif="background" tone="light" />
            <ol className="grid gap-10">
              {education.map((e) => (
                <li key={e.school} className="grain relative max-w-2xl bg-cream p-3 text-espresso shadow-[0_26px_44px_-20px_rgb(0_0_0/0.75)]">
                  <div className="border-2 border-gold p-1">
                    <div className="border border-gold/70 px-6 py-8 text-center sm:px-10">
                      <Label className="text-oxblood">{e.years} · {e.note}</Label>
                      <h3 className="mt-3 font-serif text-4xl leading-[1.05] sm:text-5xl">{e.program}</h3>
                      <p className="mt-3 font-script text-3xl text-oxblood">{e.credential}</p>
                      <p className="mt-1 text-sm font-bold uppercase tracking-[0.16em]">{e.school} · {e.place}</p>
                      <p className="mx-auto mt-4 max-w-md leading-relaxed text-espresso/75">{e.detail}</p>
                    </div>
                  </div>
                  <Seal className="absolute -right-5 -bottom-5 size-20 rotate-12" />
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" aria-labelledby="contact-h" className="grain relative overflow-hidden">
          <Flower className="absolute top-14 left-[42%] hidden size-14 lg:block" />
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[1fr_1.35fr] lg:items-center">
            <div>
              <ScriptHead id="contact-h" script="Let’s work" serif="together" />
              <p className="mt-6 text-lg leading-relaxed text-fg-2">
                Running a team, an event or a broadcast, or need something translated? Tell me what you have in mind.
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {site.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} rel="me noopener" target="_blank" className="inline-block border border-espresso px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] transition-colors hover:bg-espresso hover:text-cream">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              {flagPhoto && (
                <figure className="relative mt-12 w-44">
                  <GiltFrame photo={flagPhoto} shape="oval" className="aspect-[3/4] w-full" />
                  <figcaption className="mt-3 text-center font-script text-2xl text-oxblood">from Argentina</figcaption>
                  <Butterfly className="absolute -top-6 -right-12 size-14 rotate-12" />
                </figure>
              )}
            </div>
            {/* Envelope with the form as the letter */}
            <div className="relative pb-10">
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-oxblood [clip-path:polygon(0_0,50%_55%,100%_0,100%_100%,0_100%)] shadow-[0_20px_40px_-20px_rgb(0_0_0/0.6)]" />
              <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-wine" style={{ clipPath: "polygon(0 100%, 50% 45%, 100% 100%)" }} />
              <div className="relative mx-4 grain bg-parchment p-6 shadow-[0_10px_30px_-12px_rgb(36_21_15/0.5)] sm:mx-8 sm:p-8">
                <p className="mb-6 font-script text-4xl leading-none text-oxblood">Dear Abril,</p>
                <ContactForm />
              </div>
              <Seal className="absolute right-6 bottom-3 size-16 rotate-12 sm:right-10" />
              <Flower className="absolute -top-6 -right-4 size-16 rotate-12" />
            </div>
          </div>
        </section>
      </main>

      <footer className="on-dark bg-espresso">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-fg-3">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <p className="font-script text-2xl text-cream">thank you for visiting</p>
          <a href="/privacy" className="transition-colors hover:text-cream">Privacy</a>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
