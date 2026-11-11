"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Phone, MessageSquareText } from "lucide-react";
import { BUSINESS } from "@/lib/content/business";
import { NO_FLOATING_ACTIONS } from "@/lib/quick-request";
import { cn } from "@/lib/utils/cn";

export function MobileActionBar() {
  const pathname = usePathname();
  const hidden = NO_FLOATING_ACTIONS.some((p) => pathname?.startsWith(p));
  // The Spanish pages get the bar in Spanish; the form behind it is in English.
  const es = pathname === "/es" || Boolean(pathname?.startsWith("/es/"));

  if (hidden) return null;

  return (
    <>
      {/*
        Reserves the bar's height at the END of the document.

        The bar is fixed, so at full scroll it covers the last
        `--mobile-action-bar-height` of the page. That reservation used to live
        as bottom padding on <main>, but SiteFooter renders after <main>, so the
        footer's final row — the legal links and copyright — sat underneath the
        bar and could not be scrolled clear of it. The padding also left a dead
        gap between the last content section and the footer.

        The spacer lives here rather than in the layout so it cannot disagree
        with the bar about its height, or about which routes the bar appears on:
        both are governed by the `hidden` check above and the same calc().

        The safe-area inset is ADDED to the bar's height rather than carved out
        of it. With border-box sizing, a fixed height plus bottom padding left
        the buttons 34px shorter on phones with a gesture bar, and made the
        bar shorter than the spacer reserving room for it.
      */}
      <div
        aria-hidden="true"
        className="h-[calc(var(--mobile-action-bar-height)+env(safe-area-inset-bottom))] md:hidden"
      />
      <div
        className="fixed inset-x-0 bottom-0 z-40 h-[calc(var(--mobile-action-bar-height)+env(safe-area-inset-bottom))] border-t border-ink-950/10 bg-white/95 backdrop-blur pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden"
        role="region"
        aria-label={es ? "Pedir ayuda" : "Emergency actions"}
      >
        <div className="grid h-[3.25rem] grid-cols-2 gap-2 px-3 pt-2.5">
          <a
            href={BUSINESS.phoneHref}
            className="flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 border-ink-950 text-ink-950 text-[0.82rem] font-bold uppercase tracking-tight active:bg-ink-950/5 min-[360px]:text-base"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {es ? "Llamar" : "Call Now"}
          </a>
          <Link
            href="/request"
            className={cn(
              "relative flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-red-600 text-[0.82rem] font-bold uppercase tracking-tight text-white active:bg-red-700 min-[360px]:text-base",
              "animate-pulse-ring"
            )}
          >
            <MessageSquareText className="h-5 w-5" aria-hidden="true" />
            {es ? "Pedir ayuda" : "Text a Request"}
          </Link>
        </div>
        <p className="mt-1.5 truncate px-3 text-center text-[0.7rem] font-medium text-ink-600">
          {es ? "Le contesta una persona, las 24 horas. Sin membresía." : "A real dispatcher replies, 24/7. No membership needed."}
        </p>
      </div>
    </>
  );
}
