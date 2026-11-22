import { Plus } from "lucide-react";
import {
  about, brands, credits, education, eventPhotos, faqs, highlights, photos, services, site, skillGroups, stats, workCategories,
} from "@/content/site";
import { ContactForm } from "@/components/contact-form";
import { WorkLog } from "@/components/work-log";
import { Credential, Label, Loop, Print, Scribble, Seal, Sparkle, Star, Tape, TornNote } from "@/components/vintage";

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

const socialShort: Record<string, string> = { X: "X", Instagram: "IG", LinkedIn: "in" };

const btn = "inline-block border-2 px-6 py-3 text-xs font-bold uppercase tracking-[0.18em] transition-colors";
const btnSolid = `${btn} border-oxblood bg-oxblood text-cream hover:border-espresso hover:bg-espresso`;
const btnLine = `${btn} border-espresso text-espresso hover:bg-espresso hover:text-cream`;

export default function Home() {
  const [handsPhoto, , headsetPhoto, jerseyPhoto, portraitPhoto] = photos;
  const accordion = [
    ...services.map((s) => ({ title: s.title, body: s.body as string, items: s.items as readonly string[] })),
    ...skillGroups
      .filter((g) => g.title === "games" || g.title === "languages")
      .map((g) => ({ title: g.title === "games" ? "Games" : "Languages", body: "", items: g.items as readonly string[] })),
  ];
  const skillCards = [0, 1, 2].map((i) => ({ group: skillGroups[i], photo: eventPhotos[i] }));
  const socialRow = [handsPhoto, eventPhotos[3], headsetPhoto, eventPhotos[5], portraitPhoto].filter(Boolean);
  const ig = site.links.find((l) => l.label === "Instagram");
  const edu = education[0];

  return (
    <>
      {/* Header: links left, name centre, socials + CTA right */}
      <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur">
        <nav aria-label="Main" className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-6">
          <ul className="hidden items-center gap-1 text-xs font-bold uppercase tracking-[0.18em] text-fg-2 md:flex">
            <li><a className="px-2 py-2 hover:text-oxblood" href="#about">About</a></li>
            <li><a className="px-2 py-2 hover:text-oxblood" href="#work">Work</a></li>
            <li><a className="px-2 py-2 hover:text-oxblood" href="#faq">FAQ</a></li>
          </ul>
          <a href="#top" className="col-start-1 row-start-1 justify-self-start font-marker text-3xl leading-none text-oxblood md:col-start-2 md:justify-self-center">{site.handle}</a>
          <div className="col-start-3 row-start-1 flex items-center justify-end gap-2">
            <ul className="hidden gap-1 sm:flex">
              {site.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} rel="me noopener" target="_blank" aria-label={l.label} className="grid size-8 place-items-center text-xs font-extrabold text-espresso hover:text-oxblood">
                    {socialShort[l.label] ?? l.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#contact" className="border-2 border-espresso px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] whitespace-nowrap transition-colors hover:bg-espresso hover:text-cream">Work with me</a>
          </div>
        </nav>
      </header>

      <main id="main">
        {/* 1. Split hero */}
        <section id="top" className="relative overflow-hidden bg-cream">
          <div aria-hidden="true" className="grain absolute inset-y-0 right-0 hidden w-[38%] bg-parchment lg:block" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pt-16 pb-20 lg:grid-cols-[1.1fr_1fr] lg:pt-20">
            <div>
              <Label className="text-oxblood">{site.role}</Label>
              <h1 className="mt-5 inline-flex flex-col items-start">
                <span className="relative z-10 -mb-3 -rotate-2 bg-espresso px-4 pt-1 pb-2 font-sans text-[clamp(1.8rem,4.5vw,3rem)] font-extrabold lowercase leading-none tracking-tight text-cream shadow-md">meet</span>
                <span className="font-serif text-[clamp(5.5rem,14vw,10rem)] uppercase leading-[0.85] text-oxblood">Abril</span>
                <span className="sr-only"> Molins Sandner, {site.role}</span>
              </h1>
              <Scribble className="-mt-1 block w-[min(80vw,26rem)] text-oxblood" />
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-fg-2">{site.intro}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#contact" className={btnSolid}>Work with me</a>
                <a href="#work" className={btnLine}>See my work</a>
              </div>
            </div>
            <div className="relative justify-self-center pt-40 lg:pt-32">
              {handsPhoto && <Credential name={site.name} handle={site.handle} role={site.role} photo={handsPhoto} className="rotate-3" />}
              <Star className="absolute bottom-6 -left-10 size-16 -rotate-12" />
              <Sparkle className="absolute top-44 -right-6 size-8 text-oxblood" />
            </div>
          </div>
        </section>

        {/* 2. Hook band */}
        <section aria-label="In short" className="border-y border-line bg-raised">
          <p className="mx-auto max-w-3xl px-6 py-8 text-center font-serif text-xl leading-snug text-espresso sm:text-2xl">
            <span className="relative inline-block px-2">
              <span className="relative z-10 italic text-oxblood">Hi, I’m abruX.</span>
              <Loop className="absolute -inset-x-2 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+1rem)] text-oxblood/60" />
            </span>{" "}
            Ex-pro VALORANT player, now an esports coordinator, broadcast observer and translator in Ontario, Canada.
          </p>
        </section>

        {/* 3. About */}
        <section id="about" aria-labelledby="about-h" className="grain relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 lg:grid-cols-[1fr_1.15fr]">
            <div className="relative mx-auto grid w-full max-w-md grid-cols-2 items-start gap-5">
              {portraitPhoto && <Print photo={portraitPhoto} caption="hi!" className="-rotate-3" />}
              {jerseyPhoto && <Print photo={jerseyPhoto} caption="game day" className="mt-14 rotate-3" />}
              <Star className="absolute -top-8 left-[40%] size-14 -rotate-12" />
            </div>
            <div>
              <h2 id="about-h" className="font-serif text-5xl leading-none sm:text-6xl">About me</h2>
              <Label className="mt-3 block text-oxblood">Argentine-German, in Canada since 2025</Label>
              <div className="mt-6 grid gap-4 text-lg leading-relaxed text-fg-2">
                {about.map((p) => <p key={p}>{p}</p>)}
              </div>
              <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-line py-5 sm:grid-cols-4">
                {stats.map((s) => (
                  <li key={s.label}>
                    <span className="block font-display text-4xl leading-none text-oxblood">{s.value}</span>
                    <span className="mt-1 block font-serif text-base italic leading-tight text-fg-2">{s.label}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className={`${btnLine} mt-8`}>Get in touch</a>
            </div>
          </div>
        </section>

        {/* 4. Marquee: companies and brands */}
        <section aria-labelledby="brands-h" className="overflow-hidden bg-espresso py-3.5 text-cream">
          <h2 id="brands-h" className="sr-only">Companies and brands I’ve worked with</h2>
          <ul className="marquee flex w-max items-center">
            {[0, 1].flatMap((r) => brands.map((b) => (
              <li key={`${r}-${b}`} aria-hidden={r > 0 || undefined} className="flex items-center gap-6 pr-6 font-sans text-sm font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                {b}<Sparkle className="size-3 text-gold" />
              </li>
            )))}
          </ul>
        </section>

        {/* 5. Photo panel + accordion */}
        <section id="offer" aria-labelledby="offer-h" className="grid lg:grid-cols-2">
          <div className="relative grid min-h-[36rem] place-items-center overflow-hidden bg-brown p-8">
            {[
              [eventPhotos[4], "top-6 left-[6%] -rotate-6"],
              [eventPhotos[6], "top-8 right-[6%] rotate-3"],
              [eventPhotos[7], "bottom-8 left-[8%] rotate-2"],
              [eventPhotos[1], "bottom-6 right-[6%] -rotate-3"],
            ].map(([p, pos]) => p && typeof p !== "string" && (
              <div key={p.src} className={`absolute w-[38%] max-w-48 ${pos}`}><Print photo={p} imgClass="aspect-square" /></div>
            ))}
            <div className="relative z-10 max-w-xs bg-cream px-8 py-10 text-center shadow-[0_20px_40px_-18px_rgb(0_0_0/0.7)]">
              <Tape className="-top-3 left-1/2 -translate-x-1/2 -rotate-2" />
              <h2 id="offer-h" className="font-serif text-4xl leading-tight">What I do</h2>
              <p className="mt-2 font-marker text-2xl text-oxblood">& how I can help</p>
            </div>
          </div>
          <div className="bg-cream">
            {accordion.map((a, i) => (
              <details key={a.title} className="group border-b border-line" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-center gap-4 px-8 py-6 font-serif text-2xl hover:text-oxblood [&::-webkit-details-marker]:hidden">
                  <Plus aria-hidden="true" className="size-5 shrink-0 transition-transform group-open:rotate-45" strokeWidth={1.5} />
                  {a.title}
                </summary>
                <div className="px-8 pb-6 sm:pl-17">
                  {a.body && <p className="leading-relaxed text-fg-2">{a.body}</p>}
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {a.items.map((it) => <li key={it} className="border border-line px-3 py-1 text-sm">{it}</li>)}
                  </ul>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* 6. Highlights: five cards with a photo on top */}
        <section aria-labelledby="highlights-h" className="grain bg-parchment">
          <div className="mx-auto max-w-6xl px-6 py-24 text-center">
            <h2 id="highlights-h" className="font-serif text-5xl">Highlights</h2>
            <p className="mt-2 font-marker text-2xl text-oxblood">a few I’m proud of</p>
            <ul className="mt-24 flex flex-wrap justify-center gap-x-8 gap-y-24">
              {highlights.map((h) => (
                <li key={h.title} className="relative w-full bg-raised px-6 sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] pt-32 pb-8 shadow-[0_16px_30px_-18px_rgb(36_21_15/0.5)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={h.photo.src} alt={h.photo.alt} className="absolute -top-16 left-1/2 aspect-square w-44 -translate-x-1/2 border-4 border-raised object-cover shadow-md" />
                  <h3 className="font-serif text-2xl leading-tight">{h.title}</h3>
                  <p className="mt-3 leading-relaxed text-fg-2">{h.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 7. Work log */}
        <section id="work" aria-labelledby="work-h" className="grain relative overflow-hidden">
          <Star className="absolute top-16 right-[8%] hidden size-12 rotate-12 md:block" />
          <div className="mx-auto max-w-6xl px-6 py-20">
            <h2 id="work-h" className="font-display text-5xl uppercase leading-none tracking-wide sm:text-6xl">Work log</h2>
            <p className="mt-3 text-fg-2">Every role, newest first. Tap Photos to see pictures from the job.</p>
            <div className="mt-8">
              <WorkLog credits={credits} categories={workCategories} />
            </div>
          </div>
        </section>

        {/* 8. Small heading + three cards: education and skills */}
        <section id="skills" aria-labelledby="skills-h" className="bg-raised">
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-6 py-24 lg:grid-cols-[0.9fr_2fr]">
            <div>
              <Label className="text-oxblood">Education</Label>
              <h2 id="skills-h" className="mt-3 font-serif text-4xl leading-tight">{edu.program}</h2>
              <p className="mt-2 font-serif text-lg italic text-fg-2">{edu.credential}, {edu.school} · {edu.years}, {edu.note}</p>
              <Seal className="mt-6 size-16 -rotate-6" />
            </div>
            <ul className="grid gap-10 sm:grid-cols-3 sm:gap-6">
              {skillCards.map(({ group, photo }) => (
                <li key={group.title} className="text-center">
                  {photo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={photo.src} alt={photo.alt} className="aspect-[4/3] w-full object-cover sepia-[.2]" />
                  )}
                  <Label className="mt-4 block text-oxblood">{group.title}</Label>
                  <p className="mt-2 text-sm leading-relaxed text-fg-2">{group.items.join(" · ")}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 9. CTA */}
        <section aria-labelledby="cta-h" className="grain relative overflow-hidden">
          <Star className="absolute top-14 left-[12%] hidden size-14 -rotate-12 md:block" />
          <Sparkle className="absolute right-[14%] bottom-16 hidden size-8 text-oxblood md:block" />
          <div className="mx-auto max-w-3xl px-6 py-24 text-center">
            <p className="font-sans text-sm font-bold text-espresso">Running a team, an event or a broadcast?</p>
            <h2 id="cta-h" className="mt-2 font-serif text-5xl leading-tight">Let’s work together.</h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-fg-2">Or need something translated into Spanish or Portuguese? Tell me what you have in mind.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="#contact" className={btnSolid}>Send a message</a>
              {site.links.filter((l) => l.label !== "X").map((l) => (
                <a key={l.href} href={l.href} rel="me noopener" target="_blank" className={btnLine}>{l.label}</a>
              ))}
            </div>
          </div>
        </section>

        {/* 10. Social photo row */}
        <section aria-label="Photos" className="grain">
          <div className="mx-auto max-w-6xl px-6 pb-16">
            <div className="flex items-center gap-4">
              <a href={ig?.href ?? "#"} rel="me noopener" target="_blank" className="font-marker text-2xl text-oxblood hover:underline">@abruxmo</a>
              <span aria-hidden="true" className="h-px flex-1 bg-line" />
            </div>
            <ul className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-5 sm:gap-5">
              {socialRow.map((p, i) => (
                <li key={p.src} className={i > 2 ? "hidden sm:block" : ""}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.src} alt={p.alt} className="aspect-square w-full object-cover object-top" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 11. Contact (the layout's signup block) */}
        <section id="contact" aria-labelledby="contact-h" className="grain bg-parchment">
          <div className="mx-auto max-w-3xl px-6 py-20">
            <div className="text-center">
              <p className="text-sm font-bold text-espresso">Say hi</p>
              <h2 id="contact-h" className="mt-1 font-serif text-4xl">Send me a message</h2>
              <p className="mt-3 text-fg-2">Tell me about your team, event or project.</p>
            </div>
            <TornNote className="relative mt-10" inner="px-6 py-10 sm:px-10">
              <ContactForm />
            </TornNote>
          </div>
        </section>
        {/* 12. FAQ (last) */}
        <section id="faq" aria-labelledby="faq-h" className="on-dark damask bg-oxblood">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 id="faq-h" className="text-center font-serif text-5xl">FAQ</h2>
            <div className="mt-12 grid gap-x-12 sm:grid-cols-2">
              {faqs.map((f) => (
                <details key={f.q} className="group border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg [&::-webkit-details-marker]:hidden">
                    {f.q}
                    <Plus aria-hidden="true" className="size-5 shrink-0 transition-transform group-open:rotate-45" strokeWidth={1.5} />
                  </summary>
                  <p className="pb-5 leading-relaxed text-fg-2">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="on-dark bg-espresso">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-sm text-fg-3">
          <ul className="flex gap-4">
            {site.links.map((l) => (
              <li key={l.href}><a href={l.href} rel="me noopener" target="_blank" aria-label={l.label} className="font-bold text-cream hover:text-gold">{socialShort[l.label] ?? l.label}</a></li>
            ))}
          </ul>
          <p>© {new Date().getFullYear()} {site.name} · <a href="/privacy" className="hover:text-cream">Privacy</a></p>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
