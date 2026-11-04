"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { NO_FLOATING_ACTIONS, onQuickRequest, type QuickRequestOpen } from "@/lib/quick-request";

// Loaded on first open, so the form adds nothing to the page's first load.
const QuickRequestSheet = dynamic(() => import("./quick-request-sheet").then((m) => m.QuickRequestSheet), { ssr: false });

/**
 * Every "Request" link on the site opens the short request form in place, with
 * the link's service already chosen, instead of leaving the page for the full
 * multi-step form. The links stay ordinary links to /request: a modified click,
 * a new tab, or a browser without JavaScript still reaches the full form, and
 * so does the "Use the full form" link inside the sheet.
 */
export function QuickRequestHost() {
  const pathname = usePathname();
  const [open, setOpen] = useState<QuickRequestOpen | null>(null);
  const enabled = !NO_FLOATING_ACTIONS.some((p) => pathname?.startsWith(p));

  useEffect(() => {
    if (!enabled) return;
    const stopListening = onQuickRequest(setOpen);

    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const link = (e.target as Element).closest?.<HTMLAnchorElement>("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("data-full-request")) return;
      const url = new URL(link.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== "/request") return;
      e.preventDefault();
      e.stopPropagation();
      setOpen({ service: url.searchParams.get("service") ?? undefined });
    }
    // Capture phase, so this runs before next/link starts the navigation.
    document.addEventListener("click", onClick, true);
    return () => {
      stopListening();
      document.removeEventListener("click", onClick, true);
    };
  }, [enabled]);

  if (!enabled || !open) return null;
  return <QuickRequestSheet initialService={open.service} initialVehicle={open.vehicle} onClose={() => setOpen(null)} />;
}
