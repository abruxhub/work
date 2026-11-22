// The site's signature mark: a slightly lopsided, hand-cut star.
export function Star({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" aria-hidden="true" className={className}>
      <path
        d="M51 4 63 37 97 38 70 59 80 94 50 73 19 95 30 59 3 38 38 36Z"
        fill="currentColor"
        stroke="#13100e"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Tag({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-block bg-fg px-2.5 py-1 font-sans text-sm font-extrabold leading-none text-bg [font-stretch:110%] ${className}`}>
      {children}
    </span>
  );
}
