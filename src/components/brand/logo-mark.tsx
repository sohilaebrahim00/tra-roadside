import { cn } from "@/lib/utils/cn";

/**
 * Lightweight SVG recreation of the TRA mark (tire arc + wrenches over a
 * road) for use as a scalable, crisp favicon-adjacent glyph in the header
 * and footer. This is a stand-in for the official raster logo files supplied
 * by the brand — drop the source PNG/SVG into /public/brand/ and swap this
 * component's usage if pixel-exact reproduction of the original artwork is
 * required (e.g. for print or the OG image).
 */
export function LogoGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="tra-accent" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#e0202b" />
          <stop offset="100%" stopColor="#f2941c" />
        </linearGradient>
      </defs>
      <path
        d="M24 4a20 20 0 0 1 20 20h-6a14 14 0 0 0-28 0H4A20 20 0 0 1 24 4Z"
        fill="currentColor"
      />
      <path d="M6 34 24 20l18 14" stroke="url(#tra-accent)" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <circle cx="24" cy="24" r="3" fill="url(#tra-accent)" />
    </svg>
  );
}

export function Wordmark({ className, subline = true }: { className?: string; subline?: boolean }) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span className="font-display text-2xl font-bold tracking-tight">
        TR<span className="text-red-600">A</span>
      </span>
      {subline && (
        <span className="mt-0.5 text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-ink-400">
          Texas Roadside Assistance
        </span>
      )}
    </span>
  );
}

export function LogoLockup({ className, subline = true }: { className?: string; subline?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoGlyph className="h-9 w-9 shrink-0" />
      <Wordmark subline={subline} />
    </span>
  );
}
