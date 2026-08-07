"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Abstract route/map visual used in the hero instead of stock photography or
 * a fake map screenshot — a vector route line between a driver marker and a
 * destination pin, rendered in the brand palette.
 */
export function RouteGraphic() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-ink-900 to-ink-950 sm:aspect-square lg:aspect-[4/5]">
      <svg viewBox="0 0 400 480" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="route-line" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#f2941c" />
            <stop offset="100%" stopColor="#e0202b" />
          </linearGradient>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="white" strokeOpacity="0.05" />
          </pattern>
        </defs>

        <rect width="400" height="480" fill="url(#grid)" />

        <motion.path
          d="M60 420 C 120 380, 90 300, 160 270 S 260 200, 230 140 S 320 80, 340 60"
          fill="none"
          stroke="url(#route-line)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray="10 10"
          initial={reduceMotion ? undefined : { pathLength: 0, opacity: 0 }}
          animate={reduceMotion ? undefined : { pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />

        {/* Driver marker */}
        <g transform="translate(60 420)">
          <circle r="16" fill="#0a0a0b" stroke="#e0202b" strokeWidth="2" />
          <circle r="5" fill="#e0202b" className="animate-marker-bob" />
        </g>

        {/* Destination pin */}
        <g transform="translate(340 60)">
          <path
            d="M0 -22c9 0 16 7 16 16 0 12-16 28-16 28S-16 6-16-6c0-9 7-16 16-16Z"
            fill="#f2941c"
          />
          <circle r="5" fill="#0a0a0b" />
        </g>
      </svg>

      <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl border border-white/10 bg-ink-950/80 px-4 py-3 text-white backdrop-blur">
        <div>
          <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-white/50">Live tracking</p>
          <p className="font-display text-lg font-semibold">ETA 12 min</p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-success-600/20 px-2.5 py-1 text-xs font-semibold text-success-500">
          <span className="h-1.5 w-1.5 rounded-full bg-success-500" />
          En route
        </span>
      </div>
    </div>
  );
}
