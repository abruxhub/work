import type { Photo } from "@/content/site";

export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <path d="M51 4 63 37 97 38 70 59 80 94 50 73 19 95 30 59 3 38 38 36Z"
        fill="#fff" stroke="#161113" strokeWidth="3.5" strokeLinejoin="round" />
    </svg>
  );
}

export function Tag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-block bg-ink px-3 pt-1 pb-1.5 font-sans font-extrabold lowercase leading-none tracking-tight text-white ${className}`}>
      {children}
    </span>
  );
}

export function Tape({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true"
      className={`absolute h-7 w-24 bg-[repeating-linear-gradient(90deg,rgb(255_255_255/0.55)_0_6px,rgb(255_255_255/0.42)_6px_12px)] shadow-sm backdrop-blur-[1px] ${className}`} />
  );
}

/* Hand-drawn underline / loop, used under headings and around words. */
export function Scribble({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 30" aria-hidden="true" className={className} fill="none">
      <path d="M4 18c40-9 95-12 150-8s95 6 142-3M20 25c60-6 140-8 255-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/* An event credential on a lanyard: the hero cut-out. */
export function Credential({ name, handle, role, photo }: { name: string; handle: string; role: string; photo?: Photo }) {
  return (
    <div className="relative mx-auto w-[min(78vw,20rem)] -rotate-6">
      <span aria-hidden="true" className="absolute -top-40 left-1/2 h-44 w-6 -translate-x-1/2 bg-ink [mask:repeating-linear-gradient(0deg,#000_0_10px,rgb(0_0_0/0.85)_10px_12px)]" />
      <div className="relative rounded-2xl border-[3px] border-ink bg-paper p-3 text-ink shadow-[8px_10px_0_rgb(22_17_19/0.35)]">
        <span aria-hidden="true" className="mx-auto mb-3 block h-3 w-16 rounded-full bg-ink/80" />
        <div className="flex items-center justify-between bg-ink px-3 py-2 font-sans text-sm font-extrabold uppercase tracking-wide text-white">
          <span>All access</span>
          <span className="text-blush">Staff</span>
        </div>
        <div className="mt-3 aspect-[4/5] overflow-hidden rounded-lg bg-bg">
          {photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photo.src} alt={photo.alt} className="size-full object-cover object-top" />
          ) : (
            <div aria-hidden="true" className="halftone relative grid size-full place-items-center">
              <span className="font-serif text-[7.5rem] leading-none text-white">aX</span>
              <Star className="absolute right-3 bottom-3 size-12 rotate-12" />
            </div>
          )}
        </div>
        <p className="mt-3 font-marker text-4xl leading-none">{handle}</p>
        <p className="mt-1 font-sans text-sm font-bold uppercase">{name}</p>
        <p className="font-sans text-xs uppercase text-ink/70">{role}</p>
        <span aria-hidden="true" className="mt-3 block h-8 bg-[repeating-linear-gradient(90deg,#161113_0_2px,transparent_2px_4px,#161113_4px_7px,transparent_7px_9px,#161113_9px_10px,transparent_10px_13px)]" />
      </div>
    </div>
  );
}

/* Word search with the services circled. Decorative; the real list sits beside it. */
const GRID: { row: string; hit?: [number, number] }[] = [
  { row: "QTEAMSXVBK", hit: [1, 6] },
  { row: "EVENTSZPWA", hit: [0, 6] },
  { row: "MJPOVRYDLC", hit: [2, 5] },
  { row: "KREPLAYUSN", hit: [1, 7] },
  { row: "LOCALIZEFH", hit: [0, 8] },
  { row: "GGWPNOSXAT" },
];

export function WordSearch({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`font-sans text-[clamp(1.4rem,4.6vw,2.6rem)] font-medium uppercase leading-none text-blush ${className}`}>
      {GRID.map(({ row, hit }, r) => (
        <div key={r} className="flex">
          {row.split("").map((ch, c) => {
            const inHit = hit && c >= hit[0] && c < hit[1];
            const first = hit && c === hit[0];
            const last = hit && c === hit[1] - 1;
            return (
              <span key={c}
                className={`grid w-[1.35em] place-items-center py-[0.18em] ${inHit ? "border-y-2 border-white text-white" : ""} ${first ? "rounded-l-full border-l-2" : ""} ${last ? "rounded-r-full border-r-2" : ""}`}>
                {ch}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
}

/* A single taped polaroid with a marker caption. */
export function Polaroid({ photo, caption, className = "" }: { photo: Photo; caption?: string; className?: string }) {
  return (
    <figure className={`relative w-[min(70vw,15rem)] bg-white p-3 pb-4 shadow-[0_14px_28px_-12px_rgb(22_17_19/0.5)] ${className}`}>
      <Tape className="-top-3 left-1/2 -translate-x-1/2 rotate-3" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.src} alt={photo.alt} className="aspect-square w-full object-cover grayscale" />
      {caption && <figcaption className="mt-3 text-center font-marker text-2xl leading-none text-ink">{caption}</figcaption>}
    </figure>
  );
}

export function Heart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 30" aria-hidden="true" className={className}>
      <path d="M16 28S2 19.5 2 10.2C2 5.6 5.4 2 9.6 2c2.8 0 5 1.5 6.4 3.8C17.4 3.5 19.6 2 22.4 2 26.6 2 30 5.6 30 10.2 30 19.5 16 28 16 28Z" fill="currentColor" />
    </svg>
  );
}

export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M12 1c.6 5.6 4.4 9.4 11 11-6.6 1.6-10.4 5.4-11 11-.6-5.6-4.4-9.4-11-11C7.6 10.4 11.4 6.6 12 1Z" fill="currentColor" />
    </svg>
  );
}

export function PaperClip({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 64" aria-hidden="true" className={`absolute ${className}`} fill="none">
      <path d="M8 18V50a6 6 0 0 0 12 0V12a9 9 0 0 0-18 0v40a11 11 0 0 0 22 0" stroke="#5b5157" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

export function BinderClip({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`absolute flex flex-col items-center ${className}`}>
      <span className="h-5 w-8 rounded-t-full border-[3px] border-b-0 border-[#4a4146]" />
      <span className="h-5 w-12 rounded-sm bg-ink" />
    </span>
  );
}

/* Two-tone heading: bold sans on a highlight bar, then italic serif on a black bar. */
export function MixHead({ a, b, id, className = "" }: { a: string; b: string; id?: string; className?: string }) {
  return (
    <h2 id={id} className={`relative inline-flex flex-col items-start leading-none ${className}`}>
      <span className="bg-white px-3 pt-1 pb-2 font-sans text-[clamp(2.4rem,6vw,4.25rem)] font-extrabold lowercase tracking-tight text-ink">{a}</span>
      <span className="-mt-2 ml-8 -rotate-2 bg-ink px-4 pt-1 pb-2 font-serif text-[clamp(2.2rem,5.5vw,4rem)] italic text-blush">{b}</span>
    </h2>
  );
}

/* Receipt-style card for a service. */
export function Receipt({ n, title, items, className = "" }: { n: number; title: string; items: readonly string[]; className?: string }) {
  return (
    <article className={`relative bg-white px-5 pt-6 pb-4 font-mono text-[0.8rem] text-ink shadow-[0_16px_30px_-14px_rgb(22_17_19/0.55)] [mask:linear-gradient(#000_0_0)_top/100%_calc(100%-10px)_no-repeat,radial-gradient(circle_at_6px_100%,transparent_5px,#000_5.5px)_bottom/12px_10px_repeat-x] ${className}`}>
      <p className="text-center text-xs tracking-widest text-ink/60">ORDER #{String(n).padStart(2, "0")}</p>
      <h3 className="mt-1 bg-ink py-1 text-center font-sans text-lg font-extrabold lowercase text-white">{title.toLowerCase()}</h3>
      <ul className="mt-4 grid gap-1.5">
        {items.map((it) => (
          <li key={it} className="flex items-baseline gap-2">
            <span>{it}</span>
            <span aria-hidden="true" className="flex-1 border-b border-dotted border-ink/40" />
            <span aria-hidden="true">✓</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 flex justify-between border-t-2 border-dashed border-ink/40 pt-2 font-bold">
        <span>TOTAL</span><span>let’s talk</span>
      </p>
      <span aria-hidden="true" className="mt-3 block h-7 bg-[repeating-linear-gradient(90deg,#161113_0_2px,transparent_2px_4px,#161113_4px_6px,transparent_6px_9px,#161113_9px_10px,transparent_10px_12px)]" />
      <p className="mt-2 pb-2 text-center text-[0.7rem] text-ink/60">thank you for scrimming with me</p>
    </article>
  );
}

/* Phone frame around a photo. */
export function Phone({ photo, label, className = "" }: { photo: Photo; label: string; className?: string }) {
  return (
    <figure className={`relative w-[min(60vw,15rem)] rounded-[2.6rem] border-[6px] border-ink bg-ink p-1.5 shadow-[0_24px_40px_-16px_rgb(22_17_19/0.6)] ${className}`}>
      <span aria-hidden="true" className="absolute top-3 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" />
      <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo.src} alt={photo.alt} className="size-full object-cover" />
        <figcaption className="absolute inset-x-3 bottom-4 rounded-full bg-white/90 px-3 py-1.5 text-center text-sm font-bold lowercase text-ink">{label}</figcaption>
      </div>
    </figure>
  );
}
