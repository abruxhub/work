import type { Photo } from "@/content/site";

type C = { className?: string };

export function Butterfly({ className = "" }: C) {
  return (
    <svg viewBox="0 0 64 48" aria-hidden="true" className={className}>
      <g stroke="#9a8f80" strokeWidth=".8">
        <path d="M31 22C24 6 9 0 4 6s4 18 27 18Z" fill="#f7f3ec" />
        <path d="M33 22C40 6 55 0 60 6s-4 18-27 18Z" fill="#f2ede4" />
        <path d="M31 25C20 26 10 34 13 41s15 1 18-14Z" fill="#ece6db" />
        <path d="M33 25c11 1 21 9 18 16s-15 1-18-14Z" fill="#e7e0d3" />
        <path d="M10 8c6 2 12 7 19 14M54 8c-6 2-12 7-19 14" fill="none" />
      </g>
      <path d="M32 16v18" stroke="#3a2a20" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function Flower({ className = "" }: C) {
  return (
    <svg viewBox="0 0 60 60" aria-hidden="true" className={className}>
      <g fill="#faf7f1" stroke="#cfc6b8" strokeWidth=".8">
        {[0, 72, 144, 216, 288].map((r) => (
          <path key={r} transform={`rotate(${r} 30 30)`} d="M30 30c-8-6-9-18 0-25 9 7 8 19 0 25Z" />
        ))}
      </g>
      <circle cx="30" cy="30" r="4.5" fill="#d8b964" />
      <circle cx="30" cy="30" r="2" fill="#9a7a2e" />
    </svg>
  );
}

const shapes = {
  rect: "rounded-sm",
  oval: "rounded-[50%]",
  arch: "rounded-t-full rounded-b-sm",
} as const;

export function GiltFrame({ photo, shape = "rect", className = "", imgClass = "" }: { photo: Photo; shape?: keyof typeof shapes; className?: string; imgClass?: string }) {
  return (
    <div className={`gilt overflow-hidden ${shapes[shape]} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.src} alt={photo.alt} className={`size-full object-cover ${imgClass}`} />
    </div>
  );
}

export function TornNote({ children, className = "", inner = "" }: { children: React.ReactNode; className?: string; inner?: string }) {
  return (
    <div className={`drop-shadow-[0_14px_18px_rgb(36_21_15/0.35)] ${className}`}>
      <div className={`torn grain bg-parchment px-6 py-8 text-espresso ${inner}`}>{children}</div>
    </div>
  );
}

/* Script word over serif caps, the deck-style heading. */
export function ScriptHead({ script, serif, id, className = "", tone = "dark" }: { script: string; serif: string; id?: string; className?: string; tone?: "dark" | "light" }) {
  const sc = tone === "light" ? "text-cream" : "text-oxblood";
  const sf = tone === "light" ? "text-cream/90" : "text-espresso";
  return (
    <h2 id={id} className={`relative leading-none ${className}`}>
      <span className={`block font-script text-[clamp(3.6rem,8vw,6.5rem)] leading-[0.9] ${sc}`}>{script}</span>
      <span className={`-mt-3 block pl-[12%] font-serif text-[clamp(2.2rem,5vw,3.8rem)] uppercase tracking-wide ${sf}`}>{serif}</span>
    </h2>
  );
}

export function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`inline-block font-sans text-xs font-bold uppercase tracking-[0.22em] ${className}`}>{children}</span>;
}

/* Photo behind a grid where some squares are filled in, like a half-loaded mosaic. */
const FILL = new Set([0, 1, 4, 6, 9, 11, 17, 23, 24, 29, 30, 34, 35]);
export function PixelReveal({ photo, className = "" }: { photo: Photo; className?: string }) {
  return (
    <div className={`relative aspect-[5/6] overflow-hidden ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.src} alt={photo.alt} className="size-full object-cover" />
      <div aria-hidden="true" className="absolute inset-0 grid grid-cols-6 grid-rows-6">
        {Array.from({ length: 36 }, (_, i) => (
          <span key={i} className={`border border-oxblood/70 ${FILL.has(i) ? (i % 3 ? "bg-oxblood" : "bg-cream/70") : ""}`} />
        ))}
      </div>
    </div>
  );
}

export function Phone({ photo, label, className = "" }: { photo: Photo; label: string; className?: string }) {
  return (
    <figure className={`relative w-[min(58vw,14.5rem)] rounded-[2.6rem] bg-espresso p-2 shadow-[0_0_0_2px_#b08d57,0_26px_44px_-18px_rgb(0_0_0/0.7)] ${className}`}>
      <span aria-hidden="true" className="absolute top-4 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-espresso" />
      <div className="relative aspect-[9/19] overflow-hidden rounded-[2.1rem]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={photo.src} alt={photo.alt} className="size-full object-cover" />
        <figcaption className="absolute inset-x-3 bottom-4 rounded-full bg-cream/95 px-3 py-1.5 text-center font-serif text-base italic text-oxblood">{label}</figcaption>
      </div>
    </figure>
  );
}

export function Seal({ className = "" }: C) {
  return (
    <svg viewBox="0 0 80 80" aria-hidden="true" className={className}>
      <circle cx="40" cy="40" r="36" fill="#6b1d27" />
      <circle cx="40" cy="40" r="29" fill="none" stroke="#efe6d4" strokeOpacity=".6" strokeDasharray="2 3" />
      <text x="40" y="47" textAnchor="middle" fontFamily="Instrument Serif, serif" fontStyle="italic" fontSize="22" fill="#efe6d4">aX</text>
    </svg>
  );
}

/* ── Collage pieces, in the cream / oxblood / brown palette ── */

export function Star({ className = "", tone = "cream" }: C & { tone?: "cream" | "oxblood" }) {
  const fill = tone === "cream" ? "#f6efe2" : "#6b1d27";
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <path d="M51 4 63 37 97 38 70 59 80 94 50 73 19 95 30 59 3 38 38 36Z" fill={fill} stroke="#24150f" strokeWidth="3.5" strokeLinejoin="round" />
    </svg>
  );
}

export function Sparkle({ className = "" }: C) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path d="M12 1c.6 5.6 4.4 9.4 11 11-6.6 1.6-10.4 5.4-11 11-.6-5.6-4.4-9.4-11-11C7.6 10.4 11.4 6.6 12 1Z" fill="currentColor" />
    </svg>
  );
}

/* Hand-drawn double underline. Colour comes from currentColor. */
export function Scribble({ className = "" }: C) {
  return (
    <svg viewBox="0 0 300 30" aria-hidden="true" className={className} fill="none">
      <path d="M4 18c40-9 95-12 150-8s95 6 142-3M20 25c60-6 140-8 255-4" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/* Loose loop drawn around a word. Place it absolutely over the word. */
export function Loop({ className = "" }: C) {
  return (
    <svg viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden="true" className={className} fill="none">
      <path d="M150 10C110 0 30 4 10 30s40 46 100 44 88-20 82-42S120 4 60 14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/* Curly marker arrow, pointing down-right by default. */
export function Arrow({ className = "" }: C) {
  return (
    <svg viewBox="0 0 120 90" aria-hidden="true" className={className} fill="none">
      <path d="M6 10c30-6 52 6 46 26-5 16-26 10-20-4 8-18 50-8 66 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M86 62l12 12 6-16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Zig-zag scribble used as a filler mark. */
export function Zigzag({ className = "" }: C) {
  return (
    <svg viewBox="0 0 120 30" aria-hidden="true" className={className} fill="none">
      <path d="M4 22 18 8l14 14L46 8l14 14L74 8l14 14 14-14 14 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Tape({ className = "" }: C) {
  return (
    <span aria-hidden="true"
      className={`absolute z-10 h-7 w-24 bg-[repeating-linear-gradient(90deg,rgb(239_230_212/0.8)_0_6px,rgb(227_214_189/0.75)_6px_12px)] shadow-sm ${className}`} />
  );
}

/* Background-removed photo with a cream sticker edge (baked into the image). */
export function Cutout({ photo, className = "", priority = false }: { photo: Photo; className?: string; priority?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={photo.src} alt={photo.alt} fetchPriority={priority ? "high" : undefined}
      className={`h-auto drop-shadow-[0_18px_22px_rgb(36_21_15/0.45)] ${className}`} />
  );
}

/* A taped print: photo with a cream border, a strip of tape and an optional marker caption. */
export function Print({ photo, caption, className = "", imgClass = "aspect-[4/5]" }: { photo: Photo; caption?: string; className?: string; imgClass?: string }) {
  return (
    <figure className={`relative bg-raised p-2.5 pb-3 shadow-[0_16px_28px_-14px_rgb(36_21_15/0.55)] ${className}`}>
      <Tape className="-top-3 left-1/2 -translate-x-1/2 -rotate-3" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={photo.src} alt={photo.alt} className={`w-full object-cover ${imgClass}`} />
      {caption && <figcaption className="mt-2 text-center font-marker text-2xl leading-none text-oxblood">{caption}</figcaption>}
    </figure>
  );
}

/* Horizontal film strip that drifts sideways. The photo set is shown twice so the loop is seamless;
   the second copy is hidden from screen readers. */
export function FilmStrip({ photos, className = "", reverse = false }: { photos: Photo[]; className?: string; reverse?: boolean }) {
  const frames = [0, 1].flatMap((r) => photos.map((p, i) => ({ p, key: `${r}-${i}`, dup: r > 0 })));
  const holes = "bg-[repeating-linear-gradient(90deg,#efe6d4_0_10px,transparent_10px_22px)]";
  return (
    <div className={`relative overflow-hidden bg-espresso py-5 shadow-[0_18px_30px_-16px_rgb(0_0_0/0.6)] ${className}`}>
      <span aria-hidden="true" className={`absolute inset-x-0 top-1.5 h-2 opacity-80 ${holes}`} />
      <span aria-hidden="true" className={`absolute inset-x-0 bottom-1.5 h-2 opacity-80 ${holes}`} />
      <ul className={`marquee flex w-max ${reverse ? "marquee-reverse" : ""}`}>
        {frames.map(({ p, key, dup }) => (
          <li key={key} aria-hidden={dup || undefined} className="mr-3 aspect-[4/3] w-44 shrink-0 overflow-hidden bg-brown sm:w-60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt={dup ? "" : p.alt} className="size-full object-cover object-[50%_25%] sepia-[.3] saturate-[.85]" />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* Event credential on a lanyard, with a photo. */
export function Credential({ name, handle, role, photo, className = "" }: { name: string; handle: string; role: string; photo: Photo; className?: string }) {
  return (
    <div className={`relative w-[min(76vw,19rem)] ${className}`}>
      <span aria-hidden="true" className="absolute -top-44 left-1/2 h-48 w-6 -translate-x-1/2 bg-oxblood bg-[repeating-linear-gradient(0deg,transparent_0_10px,rgb(239_230_212/0.18)_10px_12px)]" />
      <span aria-hidden="true" className="absolute -top-2 left-1/2 z-10 h-6 w-10 -translate-x-1/2 rounded-sm border-[3px] border-gold bg-espresso" />
      <div className="relative rounded-2xl border-[3px] border-espresso bg-raised p-3 text-espresso shadow-[8px_10px_0_rgb(36_21_15/0.3)]">
        <span aria-hidden="true" className="mx-auto mb-3 block h-3 w-16 rounded-full bg-espresso/80" />
        <div className="flex items-center justify-between bg-oxblood px-3 py-2 font-sans text-sm font-extrabold uppercase tracking-wide text-cream">
          <span>All access</span>
          <span className="text-gold">Staff</span>
        </div>
        <div className="mt-3 aspect-[4/5] overflow-hidden rounded-lg bg-espresso">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo.src} alt={photo.alt} fetchPriority="high" className="size-full object-cover object-top" />
        </div>
        <p className="mt-3 font-marker text-4xl leading-none text-oxblood">{handle}</p>
        <p className="mt-1 font-sans text-sm font-bold uppercase">{name}</p>
        <p className="font-sans text-xs uppercase text-espresso/70">{role}</p>
        <span aria-hidden="true" className="mt-3 block h-8 bg-[repeating-linear-gradient(90deg,#24150f_0_2px,transparent_2px_4px,#24150f_4px_7px,transparent_7px_9px,#24150f_9px_10px,transparent_10px_13px)]" />
      </div>
    </div>
  );
}
