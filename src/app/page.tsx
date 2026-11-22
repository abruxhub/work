import { about, credits, education, workCategories, photos, services, site, skillGroups } from "@/content/site";
import { ContactForm } from "@/components/contact-form";
import { Credential, Polaroid, Scribble, Star, Tag, Tape, WordSearch } from "@/components/collage";

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

const tilt = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2", "rotate-0"];

export default function Home() {
  const [heroPhoto, flagPhoto, headsetPhoto, jerseyPhoto, wallPhoto] = photos;
  return (
    <>
      <header className="sticky top-0 z-40 bg-bg/95 backdrop-blur">
        <nav aria-label="Main" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="flex items-center gap-2 font-marker text-2xl leading-none text-white">
            <Star className="size-6" />
            {site.handle}
          </a>
          <ul className="flex items-center gap-1 text-sm font-semibold lowercase text-fg-2">
            <li className="hidden sm:block"><a className="px-3 py-2 transition-colors hover:text-white" href="#offer">what i do</a></li>
            <li className="hidden sm:block"><a className="px-3 py-2 transition-colors hover:text-white" href="#work">work</a></li>
            <li className="hidden sm:block"><a className="px-3 py-2 transition-colors hover:text-white" href="#about">about</a></li>
            <li className="hidden md:block"><a className="px-3 py-2 transition-colors hover:text-white" href="#skills">skills</a></li>
            <li><a className="ml-2 inline-block bg-ink px-3 py-2 font-extrabold text-white transition-opacity hover:opacity-85" href="#contact">contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="halftone overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 pt-6 pb-20">
            <div className="flex flex-wrap justify-between gap-x-6 gap-y-1 border border-line px-4 py-1.5 text-sm text-fg-2">
              <span>@abruxgg</span>
              <span className="hidden sm:inline">{site.name.toLowerCase()}</span>
              <span>coordinator, producer, translator</span>
            </div>

            <div className="mt-16 grid items-center gap-16 lg:mt-12 lg:grid-cols-[1fr_1.25fr]">
              <div className="relative order-2 pt-36 lg:order-1">
                <Credential name={site.name} handle={site.handle} role="Esports coordinator" photo={heroPhoto} />
                <Star className="absolute -bottom-14 left-0 size-24 -rotate-12 sm:size-28" />
              </div>

              <div className="order-1 lg:order-2">
                <h1>
                  <Tag className="text-[clamp(2rem,6vw,3.75rem)]">meet</Tag>
                  <span className="mt-1 block font-serif text-[clamp(5.5rem,17vw,12rem)] uppercase leading-[0.85] text-white">Abril</span>
                  <span className="sr-only">{site.name}, {site.role}</span>
                </h1>
                <Scribble className="mt-2 w-[min(100%,34rem)] text-white" />
                <p className="mt-6 inline-flex items-center gap-2 rounded-[50%] border-2 border-white px-5 py-3 text-base font-bold whitespace-nowrap lowercase text-white sm:px-7 sm:text-xl">
                  <span aria-hidden="true">*</span> esports coordinator & producer
                </p>
                <p className="mt-8 max-w-lg text-lg leading-relaxed text-fg-2">{site.intro}</p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a href="#contact" className="bg-ink px-6 py-3 font-extrabold lowercase text-white transition-[opacity,transform] hover:opacity-85 active:scale-[0.98]">work with me</a>
                  <a href="#work" className="font-marker text-2xl text-white underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80">see my work →</a>
                </div>
                <p aria-hidden="true" className="mt-10 hidden -rotate-6 text-right font-marker text-5xl text-white/80 lg:block">abruX</p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" aria-labelledby="about-h" className="paper overflow-hidden">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div>
              <Tag className="text-4xl">hello!</Tag>
              <div className="mt-6 grid gap-4 text-lg leading-relaxed text-fg-2">
                {about.map((p) => <p key={p}>{p}</p>)}
              </div>
            </div>
            <h2 id="about-h" className="order-first -rotate-6 font-marker text-[clamp(5rem,13vw,9rem)] leading-[0.8] text-bg md:order-none">
              about<br />&nbsp;&nbsp;me
            </h2>
            {flagPhoto && <Polaroid photo={flagPhoto} caption="from argentina" className="justify-self-center rotate-3" />}
          </div>
        </section>

        {/* What I do */}
        <section id="offer" aria-labelledby="offer-h" className="halftone overflow-hidden">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[auto_1fr_1fr] lg:items-center">
            <h2 id="offer-h" className="font-serif text-7xl uppercase leading-none text-blush lg:[writing-mode:vertical-rl] lg:rotate-180 lg:text-8xl">
              What I do
            </h2>
            <WordSearch className="justify-self-start" />
            <ol className="grid gap-5">
              {services.map((s) => (
                <li key={s.title}>
                  <h3 className="font-marker text-3xl leading-none text-white">{s.title.toLowerCase()}</h3>
                  <p className="mt-1 text-fg-2">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Work */}
        <section id="work" aria-labelledby="work-h" className="paper overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-wrap items-center justify-between gap-10">
              <h2 id="work-h" className="grid justify-items-start gap-1">
                <span className="font-serif text-7xl uppercase leading-none sm:text-8xl">Work</span>
                <span className="font-marker text-3xl text-bg">teams, broadcasts, events</span>
              </h2>
              {headsetPhoto && <Polaroid photo={headsetPhoto} caption="on comms" className="-rotate-3 sm:mr-10" />}
            </div>
            <div className="mt-12 grid gap-14">
              {workCategories.map((cat) => {
                const items = credits.filter((c) => c.category === cat);
                if (!items.length) return null;
                return (
                  <div key={cat}>
                    <h3 className="flex items-baseline gap-3">
                      <Tag className="text-2xl sm:text-3xl">{cat}</Tag>
                      <span className="font-marker text-2xl text-bg">{items.length}</span>
                    </h3>
                    <svg aria-hidden="true" viewBox="0 0 1200 60" preserveAspectRatio="none" className="mt-3 h-8 w-full text-bg">
                      <path d="M0 10 C 300 60, 900 60, 1200 10" fill="none" stroke="currentColor" strokeWidth="4" />
                    </svg>
                    <ol className="-mt-3 grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4">
                      {items.map((c, i) => (
                        <li key={c.title + c.role} className={`relative bg-white px-3 pt-7 pb-4 sm:px-4 sm:pb-5 shadow-[0_2px_0_rgb(22_17_19/0.08),0_12px_24px_-12px_rgb(22_17_19/0.35)] ${tilt[i % tilt.length]}`}>
                          <Tape className="-top-3 left-1/2 -translate-x-1/2 -rotate-3 bg-blush/70" />
                          <p className="font-marker text-xl leading-none text-bg">{c.year}</p>
                          <h4 className="mt-2 font-serif text-xl leading-tight sm:text-2xl">{c.title}</h4>
                          <p className="mt-2 text-sm text-fg-3">{c.role}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" aria-labelledby="skills-h" className="halftone overflow-hidden">
          <div className="relative mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
              <h2 id="skills-h" className="font-serif text-7xl uppercase leading-none text-white sm:text-8xl">Skills</h2>
              <p className="pb-2 font-marker text-3xl text-blush">what I bring to the team</p>
            </div>
            {jerseyPhoto && (
              <div className="absolute top-10 right-6 hidden lg:block">
                <Polaroid photo={jerseyPhoto} caption="game day" className="rotate-6" />
              </div>
            )}
            <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:pr-72">
              {skillGroups.map((g) => (
                <div key={g.title}>
                  <h3><Tag className="text-2xl">{g.title}</Tag></h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <li key={it} className="rounded-full border-2 border-white px-3.5 py-1.5 text-sm font-semibold text-white">{it}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" aria-labelledby="edu-h" className="paper overflow-hidden">
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <h2 id="edu-h" className="-rotate-3 font-marker text-[clamp(4.5rem,11vw,8rem)] leading-[0.8] text-bg">
              school<br />&nbsp;days
            </h2>
            <ol className="grid gap-10">
              {education.map((e) => (
                <li key={e.school} className="relative max-w-2xl -rotate-1 bg-white bg-[repeating-linear-gradient(180deg,transparent_0_31px,rgb(156_72_102/0.18)_31px_32px)] px-6 pt-10 pb-8 shadow-[0_12px_24px_-12px_rgb(22_17_19/0.4)] sm:px-10">
                  <Tape className="-top-3 left-10 -rotate-6 bg-blush/70" />
                  <span aria-hidden="true" className="absolute inset-y-0 left-4 w-px bg-bg/40 sm:left-6" />
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <p className="font-marker text-2xl leading-none text-bg">{e.years}</p>
                    <Tag className="rotate-2 text-base">{e.note}</Tag>
                  </div>
                  <h3 className="mt-3 font-serif text-4xl leading-[1.05] sm:text-5xl">{e.program}</h3>
                  <p className="mt-3 font-semibold">{e.credential} · {e.school}, {e.place}</p>
                  <p className="mt-3 leading-relaxed text-fg-2">{e.detail}</p>
                </li>
              ))}
            </ol>
            {wallPhoto && <Polaroid photo={wallPhoto} caption="st. clair saints" className="justify-self-center -rotate-2" />}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" aria-labelledby="contact-h" className="halftone overflow-hidden">
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1fr_1.4fr_auto] lg:items-center">
            <div>
              <Tag className="text-3xl">let’s work together</Tag>
              <p className="mt-6 text-lg leading-relaxed text-fg-2">
                Running a team, an event or a broadcast, or need something translated? Tell me what you have in mind.
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {site.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} rel="me noopener" target="_blank" className="inline-block rounded-full border-2 border-white px-4 py-1.5 font-bold lowercase text-white transition-colors hover:bg-white hover:text-bg">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="paper relative rotate-1 p-6 shadow-[10px_12px_0_rgb(22_17_19/0.3)] sm:p-8">
              <Tape className="-top-3 left-8 -rotate-6" />
              <Tape className="-top-3 right-8 rotate-6" />
              <ContactForm />
            </div>
            <h2 id="contact-h" className="font-serif text-7xl uppercase leading-none text-blush lg:[writing-mode:vertical-rl] lg:text-8xl">
              Say hi
            </h2>
            <Star className="absolute right-[30%] -bottom-8 hidden size-28 rotate-12 lg:block" />
          </div>
        </section>
      </main>

      <footer className="bg-ink">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-white/70">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <a href="/privacy" className="transition-colors hover:text-white">privacy</a>
        </div>
      </footer>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
