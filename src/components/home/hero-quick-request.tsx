import Link from "next/link";
import { ArrowRight, ArrowUpRight, Navigation } from "lucide-react";
import { getService } from "@/lib/content/services";
import { SERVICE_ICONS } from "@/lib/content/service-icons";
import { SERVICE_PROBLEM } from "@/lib/content/service-problems";
import type { ServiceTypeSlug } from "@/lib/types/domain";
import { Icon3D } from "@/components/ui/icon-3d";

/** The six calls that cover most breakdowns, battery first (the main service). */
const QUICK: ServiceTypeSlug[] = [
  "battery-replacement",
  "jump-start",
  "lockout",
  "flat-tire-change",
  "fuel-delivery",
  "tire-repair-plug-patch",
];

/**
 * The desktop hero's right column: a frosted card over the background video
 * that starts a request in one tap. Each tile opens the request form with
 * that service already chosen, and shows the price from SERVICES, so the
 * figures can never drift from the rest of the site. The strip at the bottom
 * says what happens next: a live tracking link.
 *
 * It replaced an abstract route drawing, which said "tracking" but gave the
 * visitor nothing to do.
 */
export function HeroQuickRequest() {
  const tiles = QUICK.map((slug) => getService(slug)).filter((s) => s !== undefined);

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-ink-950/60 p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.85)] backdrop-blur-xl xl:p-7">
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-red-600/25 blur-3xl" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-2xl font-semibold uppercase leading-tight">What happened?</p>
          <p className="mt-1 text-sm text-white/65">Pick one and we&apos;ll take it from there.</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-white/85">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-500 opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success-500" />
          </span>
          Dispatch open 24/7
        </span>
      </div>

      <ul className="relative mt-5 grid grid-cols-2 gap-2.5">
        {tiles.map((service) => {
          const Icon = SERVICE_ICONS[service.slug];
          return (
            <li key={service.slug}>
              <Link
                href={`/request?service=${service.slug}`}
                className="group flex h-full items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3 transition-colors hover:border-red-500/60 hover:bg-white/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
              >
                <Icon3D icon={Icon} size="sm" />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold leading-snug text-white">{SERVICE_PROBLEM[service.slug]}</span>
                  <span className="mt-0.5 block text-xs leading-snug text-white/60">{service.priceBadge}</span>
                </span>
                <ArrowUpRight
                  className="hidden h-4 w-4 shrink-0 text-white/35 transition-transform xl:block group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  aria-hidden="true"
                />
              </Link>
            </li>
          );
        })}
      </ul>

      {/* What happens after the request: the tracking link, with a small
          moving route so the promise reads at a glance. */}
      <div className="relative mt-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-amber-400">
          <Navigation className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold">Track your driver live</span>
          <span className="block text-xs text-white/60">Link by text and email once a driver is on the way</span>
        </span>
        <svg viewBox="0 0 96 32" className="hidden h-8 w-24 shrink-0 xl:block" aria-hidden="true">
          <path d="M4 26 C 24 26, 30 8, 50 12 S 78 22, 92 6" fill="none" stroke="#f2840c" strokeWidth="2.5" strokeDasharray="5 5" strokeLinecap="round" className="route-flow" />
          <circle cx="4" cy="26" r="3.5" fill="#e0131c" />
          <circle cx="92" cy="6" r="3.5" fill="#efab23" />
        </svg>
      </div>

      <Link
        href="/request"
        className="relative mt-4 flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-ink-950 transition-colors hover:bg-white/90"
      >
        Something else? Start a request
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </div>
  );
}
