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
            <img src={photo.src} alt={photo.alt} className="size-full object-cover grayscale contrast-125" />
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

/* Vertical film strip. Uses photos when given, words otherwise. */
export function FilmStrip({ photos, words, className = "" }: { photos: Photo[]; words: string[]; className?: string }) {
  const frames = photos.length ? photos.map((p) => ({ p, w: "" })) : words.map((w) => ({ p: undefined as Photo | undefined, w }));
  return (
    <div aria-hidden={photos.length ? undefined : true}
      className={`relative w-36 rotate-2 bg-ink px-5 py-4 shadow-lg before:absolute before:inset-y-2 before:left-1.5 before:w-2 before:bg-[repeating-linear-gradient(180deg,#f7f2ed_0_6px,transparent_6px_14px)] after:absolute after:inset-y-2 after:right-1.5 after:w-2 after:bg-[repeating-linear-gradient(180deg,#f7f2ed_0_6px,transparent_6px_14px)] ${className}`}>
      <ul className="grid gap-3">
        {frames.map(({ p, w }, i) => (
          <li key={i} className="grid aspect-square place-items-center overflow-hidden bg-paper">
            {p ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.src} alt={p.alt} className="size-full object-cover grayscale" />
            ) : (
              <span className="font-marker text-3xl text-bg">{w}</span>
            )}
          </li>
        ))}
      </ul>
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
