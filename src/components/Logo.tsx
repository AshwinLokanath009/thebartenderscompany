/**
 * Brand logo mark — a cocktail shaker pouring into a coupe glass, echoing
 * The Bartenders Company logo. Two tones: `glass` (currentColor, the outline)
 * and the pour/drink in brand yellow. Scales cleanly from favicon to hero size.
 */
export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
      {/* Pour / drink — brand yellow */}
      <path
        d="M17 25c2.5 4.5 11.5 4.5 14 0-1.8.4-3.2-.2-4.5-.9-1.6-.9-3.4-.9-5 0-1.3.7-2.7 1.3-4.5.9Z"
        fill="#f2c40d"
      />
      <path d="M20.5 19.5c-.8-1.6-2.6-2-4-1.3M23.8 18.4c-.2-1.6.7-3 2.2-3.4" stroke="#f2c40d" strokeWidth="2" strokeLinecap="round" />

      {/* Coupe glass — outline in currentColor */}
      <path
        d="M15 24h18c-1 5.2-5 8-9 8s-8-2.8-9-8Z"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M24 32v9M18.5 41.5h11" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />

      {/* Stirrer with ball top */}
      <path d="M27 30 36 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="36.6" cy="10.6" r="2" fill="currentColor" />

      {/* Shaker, tilted, pouring in */}
      <g transform="rotate(34 21 13)">
        <rect x="15.5" y="4" width="11" height="15" rx="2.4" stroke="currentColor" strokeWidth="2.4" />
        <path d="M17 19h8v2.6a1.6 1.6 0 0 1-1.6 1.6h-4.8A1.6 1.6 0 0 1 17 21.6V19Z" fill="currentColor" />
        <path d="M18.5 8.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/** Horizontal lockup: mark in a gold disc + wordmark. Used in the navbar & footer. */
export function LogoLockup({ onClick }: { onClick?: () => void }) {
  return (
    <button onClick={onClick} className="flex items-center gap-3 group">
      <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center shadow-md shadow-gold-600/30 group-hover:shadow-gold-500/50 transition-shadow">
        <LogoMark className="w-7 h-7 text-charcoal-950" />
      </div>
      <span className="font-serif font-black leading-none tracking-tight text-left">
        <span className="block text-[15px] uppercase text-gradient-gold">The Bartenders</span>
        <span className="block text-[11px] uppercase tracking-[0.35em] text-white/90">Company</span>
      </span>
    </button>
  );
}
