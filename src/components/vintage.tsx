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
