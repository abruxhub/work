import { ClipboardList, Gamepad2, Languages, Users } from "lucide-react";
import { about, credits, education, photos, services, site, skillGroups, stats, workCategories } from "@/content/site";
import { ContactForm } from "@/components/contact-form";
import {
  BinderClip, Credential, Heart, MixHead, PaperClip, Phone, Polaroid, Receipt, Scribble, Sparkle, Star, Tag, Tape,
} from "@/components/collage";

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
const statIcons = { users: Users, languages: Languages, clipboard: ClipboardList, gamepad: Gamepad2 };
const socialShort: Record<string, string> = { X: "X", Instagram: "IG", LinkedIn: "in" };

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
            <li className="hidden sm:block"><a className="px-3 py-2 transition-colors hover:text-white" href="#about">about</a></li>
            <li className="hidden sm:block"><a className="px-3 py-2 transition-colors hover:text-white" href="#offer">services</a></li>
            <li className="hidden sm:block"><a className="px-3 py-2 transition-colors hover:text-white" href="#work">work</a></li>
            <li className="hidden md:block"><a className="px-3 py-2 transition-colors hover:text-white" href="#skills">skills</a></li>
            <li><a className="ml-2 inline-block bg-ink px-3 py-2 font-extrabold text-white transition-opacity hover:opacity-85" href="#contact">contact</a></li>
          </ul>
        </nav>
      </header>

      <main id="main">
        {/* ── Hero ── */}
        <section id="top" className="halftone relative overflow-hidden">
          <Sparkle className="absolute top-24 left-[8%] size-6 text-white/80" />
          <Sparkle className="absolute top-[60%] left-[46%] size-4 text-white/70" />
          <Heart className="absolute top-28 right-[34%] hidden size-9 rotate-12 text-blush lg:block" />
          <Sparkle className="absolute right-[6%] bottom-16 size-8 text-white/80" />

          <div className="mx-auto max-w-6xl px-6 pt-6 pb-24">
            <div className="flex flex-wrap justify-between gap-x-6 gap-y-1 border border-line px-4 py-1.5 text-sm text-fg-2">
              <span>@abruxgg</span>
              <span className="hidden sm:inline">{site.name.toLowerCase()}</span>
              <span>coordinator, producer, translator</span>
            </div>

            <div className="mt-14 grid items-center gap-16 lg:grid-cols-[1.35fr_1fr]">
              {/* Folder with the name */}
              <div className="relative">
                <div aria-hidden="true" className="absolute -top-6 left-6 h-10 w-40 rounded-t-xl bg-[#e9c98f]" />
                <div aria-hidden="true" className="absolute inset-0 translate-x-3 -translate-y-3 rotate-2 rounded-xl bg-[#f3dca8]" />
                <div className="relative rounded-xl bg-[#f7e6bd] px-6 pt-10 pb-8 text-ink shadow-[0_24px_40px_-20px_rgb(22_17_19/0.6)] sm:px-10">
                  <PaperClip className="-top-6 right-16 h-16 w-6 rotate-6" />
                  {flagPhoto && (
                    <div className="absolute -top-14 -right-4 hidden sm:block">
                      <Polaroid photo={flagPhoto} caption="from argentina" className="w-40! rotate-6" />
                    </div>
                  )}
                  <p className="font-marker text-2xl leading-none text-bg">hi, I’m</p>
                  <h1 className="mt-2 leading-[0.85]">
                    <span className="block font-sans text-[clamp(4.5rem,13vw,9rem)] font-extrabold lowercase tracking-tighter">abril</span>
                    <span className="-mt-2 block pl-[0.4em] font-serif text-[clamp(2.6rem,7.5vw,5.25rem)] italic text-bg">molins sandner</span>
                  </h1>
                  <p className="mt-6 inline-flex items-center gap-2 rounded-[50%] border-2 border-ink px-4 py-2.5 text-sm font-bold whitespace-nowrap lowercase sm:px-5 sm:text-lg">
                    <span aria-hidden="true">*</span> esports coordinator & producer
                  </p>
                  <p className="mt-6 max-w-lg leading-relaxed text-ink/80">{site.intro}</p>
                  <div className="mt-7 flex flex-wrap items-center gap-4">
                    <a href="#contact" className="bg-ink px-6 py-3 font-extrabold lowercase text-white transition-[opacity,transform] hover:opacity-85 active:scale-[0.98]">work with me</a>
                    <a href="#work" className="font-marker text-2xl text-bg underline decoration-2 underline-offset-4 transition-opacity hover:opacity-80">see my work →</a>
                  </div>
                  <Heart className="absolute -bottom-5 left-8 size-10 -rotate-12 text-bg" />
                </div>
              </div>

              {/* Badge + social tiles */}
              <div className="relative pt-36">
                <Credential name={site.name} handle={site.handle} role="Esports coordinator" photo={heroPhoto} />
                <ul className="absolute top-40 right-0 grid gap-3 sm:-right-2">
                  {site.links.map((l, i) => (
                    <li key={l.href} className={i % 2 ? "rotate-6" : "-rotate-3"}>
                      <a href={l.href} rel="me noopener" target="_blank" aria-label={l.label}
                        className="grid size-14 place-items-center rounded-2xl border-2 border-ink bg-white font-sans text-xl font-extrabold text-bg shadow-[4px_5px_0_rgb(22_17_19/0.35)] transition-transform hover:-translate-y-0.5">
                        {socialShort[l.label] ?? l.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <Star className="absolute -bottom-12 left-0 size-24 -rotate-12" />
              </div>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" aria-labelledby="about-h" className="paper relative overflow-hidden">
          <Sparkle className="absolute top-16 right-[42%] size-6 text-bg/70" />
          <Heart className="absolute bottom-14 left-[44%] size-8 rotate-12 text-blush" />
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <MixHead id="about-h" a="a little bit" b="about me" />
              <div className="mt-8 grid gap-4 text-lg leading-relaxed text-fg-2">
                {about.map((p) => <p key={p}>{p}</p>)}
              </div>
              <p className="mt-6 -rotate-2 font-marker text-3xl text-bg">let’s be great.</p>
            </div>

            {/* "my info" card */}
            <div className="relative mx-auto w-full max-w-md rotate-2">
              <BinderClip className="-top-7 left-1/2 z-10 -translate-x-1/2" />
              <div className="relative bg-white p-5 shadow-[0_18px_34px_-16px_rgb(22_17_19/0.55)] sm:p-6">
                <div className="flex items-center justify-between border-b-2 border-ink pb-2">
                  <p className="font-sans text-2xl font-extrabold lowercase">my info</p>
                  <p className="font-marker text-xl text-bg">{site.handle}</p>
                </div>
                <div className="mt-4 grid grid-cols-[7rem_1fr] gap-4">
                  {wallPhoto && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={wallPhoto.src} alt={wallPhoto.alt} className="aspect-[3/4] w-full border-2 border-ink object-cover grayscale" />
                  )}
                  <dl className="grid content-start gap-2 text-sm">
                    {[
                      ["name", "Abril Molins Sandner"],
                      ["based in", site.location],
                      ["roots", "Argentina · Germany"],
                      ["speaks", "ES · EN · PT"],
                      ["plays", "VALORANT · LoL"],
                      ["team", "St. Clair Saints"],
                    ].map(([k, v]) => (
                      <div key={k} className="border-b border-dashed border-ink/30 pb-1">
                        <dt className="font-marker text-base leading-none text-bg">{k}</dt>
                        <dd className="font-semibold">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <span aria-hidden="true" className="mt-4 block h-6 bg-[repeating-linear-gradient(90deg,#161113_0_2px,transparent_2px_4px,#161113_4px_7px,transparent_7px_9px)]" />
              </div>
              <Tape className="-bottom-3 -left-4 rotate-[-30deg] bg-blush/80" />
            </div>
          </div>
        </section>

        {/* ── Numbers ── */}
        <section aria-labelledby="numbers-h" className="halftone relative overflow-hidden">
          <Sparkle className="absolute top-20 right-[8%] size-7 text-white/80" />
          <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <MixHead id="numbers-h" a="by the" b="numbers" />
              <ul className="mt-10 grid gap-5 sm:grid-cols-2">
                {stats.map((s) => {
                  const Icon = statIcons[s.icon];
                  return (
                    <li key={s.label} className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 ring-1 ring-white/25">
                      <span className="grid size-14 shrink-0 place-items-center rounded-xl bg-ink text-white">
                        <Icon aria-hidden="true" className="size-7" strokeWidth={1.75} />
                      </span>
                      <span>
                        <span className="block font-sans text-4xl font-extrabold leading-none tabular-nums text-white">{s.value}</span>
                        <span className="mt-1 block font-serif text-xl italic leading-tight text-blush">{s.label}</span>
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            {jerseyPhoto && (
              <div className="relative justify-self-center">
                <Phone photo={jerseyPhoto} label="game day · saints val" className="rotate-3" />
                <Heart className="absolute -top-4 -left-6 size-12 -rotate-12 text-blush" />
                <Star className="absolute -right-8 bottom-16 size-16 rotate-12" />
              </div>
            )}
          </div>
        </section>

        {/* ── Services ── */}
        <section id="offer" aria-labelledby="offer-h" className="paper relative overflow-hidden">
          <Sparkle className="absolute top-20 right-[12%] size-7 text-bg/70" />
          <Heart className="absolute top-32 right-[6%] size-8 -rotate-12 text-blush" />
          <div className="mx-auto max-w-6xl px-6 py-24">
            <MixHead id="offer-h" a="what I do" b="& services" />
            <ol className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s, i) => (
                <li key={s.title} className={`relative ${tilt[i % tilt.length]}`}>
                  <Tape className={`-top-3 left-1/2 z-10 -translate-x-1/2 ${i % 2 ? "rotate-6" : "-rotate-6"} bg-blush/70`} />
                  <Receipt n={i + 1} title={s.title} items={s.items} />
                  <p className="mt-4 text-sm leading-relaxed text-fg-2">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Work ── */}
        <section id="work" aria-labelledby="work-h" className="halftone relative overflow-hidden">
          <Sparkle className="absolute top-40 left-[46%] size-6 text-white/80" />
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="flex flex-wrap items-center justify-between gap-10">
              <div>
                <MixHead id="work-h" a="recent" b="work" />
                <p className="mt-4 font-marker text-3xl text-white">teams, broadcasts, events</p>
              </div>
              {headsetPhoto && (
                <div className="relative sm:mr-10">
                  <Polaroid photo={headsetPhoto} caption="on comms" className="-rotate-3" />
                  <PaperClip className="-top-8 left-6 h-16 w-6 -rotate-12" />
                </div>
              )}
            </div>
            <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-x-12">
              {workCategories.map((cat) => {
                const items = credits.filter((c) => c.category === cat);
                if (!items.length) return null;
                return (
                  <div key={cat}>
                    <h3 className="flex items-baseline gap-3">
                      <span className="inline-block bg-white px-3 pt-1 pb-1.5 font-sans text-2xl font-extrabold lowercase leading-none text-ink sm:text-3xl">{cat}</span>
                      <span className="font-marker text-2xl text-white">{items.length}</span>
                    </h3>
                    <svg aria-hidden="true" viewBox="0 0 1200 60" preserveAspectRatio="none" className="mt-3 h-8 w-full text-white/80">
                      <path d="M0 10 C 300 60, 900 60, 1200 10" fill="none" stroke="currentColor" strokeWidth="3" />
                    </svg>
                    <ol className="-mt-3 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6">
                      {items.map((c, i) => (
                        <li key={c.title + c.role} className={`paper relative px-3 pt-7 pb-4 shadow-[0_14px_26px_-14px_rgb(22_17_19/0.6)] sm:px-4 sm:pb-5 ${tilt[i % tilt.length]}`}>
                          <BinderClip className="-top-6 left-1/2 -translate-x-1/2 scale-75" />
                          <p className="font-marker text-xl leading-none text-bg">{c.year}</p>
                          <h4 className="mt-2 font-serif text-xl leading-tight sm:text-2xl">{c.title}</h4>
                          <p className="mt-2 text-sm text-fg-3">{c.role}</p>
                        </li>
                      ))}
                    </ol>
                  </div>
                );
              })}
              <a href="#contact" className="group relative grid aspect-square max-w-xs place-content-center justify-self-center rotate-3 bg-blush p-8 text-center text-ink shadow-[0_18px_30px_-14px_rgb(22_17_19/0.6)] transition-transform hover:rotate-1">
                <Tape className="-top-3 left-1/2 -translate-x-1/2 -rotate-3" />
                <span className="font-marker text-4xl leading-none">your event next?</span>
                <span className="mt-4 font-sans font-extrabold lowercase underline decoration-2 underline-offset-4">let’s talk →</span>
                <Heart className="absolute right-4 bottom-4 size-7 text-bg" />
              </a>
            </div>
          </div>
        </section>

        {/* ── Skills as a chat ── */}
        <section id="skills" aria-labelledby="skills-h" className="paper relative overflow-hidden">
          <Heart className="absolute top-24 left-[6%] size-8 -rotate-12 text-blush" />
          <Sparkle className="absolute right-[8%] bottom-24 size-8 text-bg/70" />
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.6fr] lg:items-start">
            <div>
              <MixHead id="skills-h" a="skills" b="& strengths" />
              <p className="mt-6 max-w-sm text-lg leading-relaxed text-fg-2">What I bring to a team, a broadcast or an event, in my own words.</p>
            </div>
            <div className="overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-[10px_12px_0_rgb(156_72_102/0.35)]">
              <div className="flex items-center gap-2 border-b-2 border-ink bg-blush/40 px-4 py-2.5">
                <span aria-hidden="true" className="size-3 rounded-full bg-ink" />
                <span aria-hidden="true" className="size-3 rounded-full bg-ink/60" />
                <span aria-hidden="true" className="size-3 rounded-full bg-ink/30" />
                <span className="ml-3 font-mono text-sm">#abrux-comms</span>
              </div>
              <ul className="grid gap-4 p-4 sm:p-6">
                <li className="max-w-[80%] rounded-2xl rounded-bl-sm bg-[#efe8ea] px-4 py-2.5 text-ink">ok but what are you actually good at?</li>
                {skillGroups.map((g) => (
                  <li key={g.title} className="ml-auto max-w-[92%] rounded-2xl rounded-br-sm bg-bg px-4 py-3 text-white">
                    <p className="font-sans font-extrabold lowercase">{g.title}</p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {g.items.map((it) => (
                        <li key={it} className="rounded-full bg-white/15 px-2.5 py-1 text-sm">{it}</li>
                      ))}
                    </ul>
                  </li>
                ))}
                <li className="flex items-center gap-2 text-sm text-ink/60">
                  <span aria-hidden="true" className="flex gap-1">
                    <span className="size-1.5 rounded-full bg-ink/40" /><span className="size-1.5 rounded-full bg-ink/40" /><span className="size-1.5 rounded-full bg-ink/40" />
                  </span>
                  abruX is typing
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Education ── */}
        <section id="education" aria-labelledby="edu-h" className="halftone relative overflow-hidden">
          <Sparkle className="absolute top-16 right-[10%] size-7 text-white/80" />
          <Heart className="absolute bottom-16 left-[8%] size-9 rotate-12 text-blush" />
          <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[auto_1fr] lg:items-center">
            <MixHead id="edu-h" a="school" b="days" />
            <ol className="grid gap-10">
              {education.map((e) => (
                <li key={e.school} className="paper relative max-w-2xl -rotate-1 bg-[repeating-linear-gradient(180deg,transparent_0_31px,rgb(156_72_102/0.18)_31px_32px)] px-6 pt-10 pb-8 shadow-[0_18px_30px_-14px_rgb(22_17_19/0.6)] sm:px-10">
                  <PaperClip className="-top-7 left-10 h-16 w-6 -rotate-6" />
                  <Tape className="-top-3 right-10 rotate-6 bg-blush/70" />
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
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" aria-labelledby="contact-h" className="paper relative overflow-hidden">
          <Sparkle className="absolute top-20 left-[40%] size-6 text-bg/70" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <div>
              <MixHead id="contact-h" a="let’s work" b="together" />
              <p className="mt-6 text-lg leading-relaxed text-fg-2">
                Running a team, an event or a broadcast, or need something translated? Tell me what you have in mind.
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {site.links.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} rel="me noopener" target="_blank" className="inline-block rounded-full border-2 border-ink px-4 py-1.5 font-bold lowercase transition-colors hover:bg-ink hover:text-white">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <Scribble className="mt-8 w-56 text-bg" />
            </div>
            <div className="relative">
              <div aria-hidden="true" className="absolute -top-5 left-8 h-8 w-36 rounded-t-xl bg-bg" />
              <div className="relative rotate-1 rounded-xl bg-bg p-3 shadow-[0_24px_40px_-20px_rgb(22_17_19/0.6)]">
                <div className="paper relative rounded-lg p-6 sm:p-8">
                  <PaperClip className="-top-8 right-10 h-16 w-6 rotate-12" />
                  <ContactForm />
                </div>
              </div>
              <Star className="absolute -right-6 -bottom-10 size-24 rotate-12" />
              <Heart className="absolute -top-6 -left-5 size-10 -rotate-12 text-blush" />
            </div>
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
