"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { BatteryFull } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BATTERY_SLUG, batteryTotalCopy } from "@/lib/content/battery-total";

/** Elements marked with totalOnClick(): a battery price, or a control that books the battery. */
const MARKED = "[data-battery-total]";

function isBatteryRequestLink(link: HTMLAnchorElement): boolean {
  // The sheet's "Use the full form" link: the battery was already chosen there.
  if (link.hasAttribute("data-full-request")) return false;
  const url = new URL(link.href, window.location.href);
  return url.origin === window.location.origin && url.pathname === "/request" && url.searchParams.get("service") === BATTERY_SLUG;
}

/**
 * What a click on `target` would have acted on, when that click books the
 * battery or is on its price; null for every other click. Calls and texts
 * always go straight through.
 */
function batteryTrigger(target: EventTarget | null): { el: HTMLElement; link: HTMLAnchorElement | null } | null {
  if (!(target instanceof Element)) return null;
  const link = target.closest<HTMLAnchorElement>("a[href]");
  if (link && /^(tel|sms):/i.test(link.getAttribute("href") ?? "")) return null;
  const marked = target.closest<HTMLElement>(MARKED);
  if (marked) return { el: marked, link };
  if (link && isBatteryRequestLink(link)) return { el: link, link };
  return null;
}

/**
 * The battery total, shown before a battery booking goes ahead (owner,
 * 2026-11-07; see src/lib/content/battery-total.ts).
 *
 * One dialog for the whole site. Every link to /request?service=battery-replacement
 * and every element marked with totalOnClick() is caught here, in the capture
 * phase on window, so it runs before the quick request host and next/link see
 * the click. Continue replays the same click on the same element, so the
 * request sheet opens, the link navigates or the button acts exactly as it
 * would have; Go back, Esc or a tap outside closes it. A link opened in a new
 * tab with a modifier key is left alone: it reaches the full request form,
 * which shows the total before sending.
 *
 * A native <dialog>, like the request sheet and the Ask panel, for its focus
 * trap, Esc to close and top-layer stacking (it opens above the sheet when the
 * battery is chosen inside it). The page is not scroll-locked, so nothing
 * shifts when it opens; the entrance is a short rise, off for reduced motion.
 */
export function BatteryTotalGuard() {
  const pathname = usePathname();
  const lang = pathname === "/es" || pathname?.startsWith("/es/") ? "es" : "en";
  const copy = batteryTotalCopy(lang);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const pending = useRef<HTMLElement | null>(null);
  const replaying = useRef(false);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (replaying.current || e.defaultPrevented || e.button !== 0) return;
      const dialog = dialogRef.current;
      if (!dialog || dialog.open) return;
      const trigger = batteryTrigger(e.target);
      if (!trigger) return;
      // A modified click on a link opens it elsewhere; let the browser do that.
      if (trigger.link && (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || trigger.link.target === "_blank")) return;
      e.preventDefault();
      e.stopImmediatePropagation();
      pending.current = trigger.el;
      dialog.showModal();
      dialog.querySelector<HTMLButtonElement>("[data-proceed]")?.focus();
    }
    window.addEventListener("click", onClick, true);
    return () => window.removeEventListener("click", onClick, true);
  }, []);

  /** Close, then either replay the click or hand focus back to what was clicked. */
  function finish(proceed: boolean) {
    const trigger = pending.current;
    pending.current = null;
    dialogRef.current?.close();
    if (!trigger?.isConnected) return;
    if (!proceed) {
      trigger.focus({ preventScroll: true });
      return;
    }
    replaying.current = true;
    try {
      trigger.click();
    } finally {
      replaying.current = false;
    }
  }

  if (!copy) return null;

  return (
    <dialog
      ref={dialogRef}
      lang={lang}
      aria-modal="true"
      aria-labelledby="battery-total-title"
      aria-describedby="battery-total-body"
      // Esc: the dialog closes itself; finish() only has to restore focus.
      onClose={() => pending.current && finish(false)}
      onClick={(e) => {
        if (e.target === e.currentTarget) finish(false);
      }}
      style={{ colorScheme: "light" }}
      className="dialog-rise fixed inset-0 m-auto h-fit w-[calc(100%-2rem)] max-w-sm overflow-hidden rounded-3xl bg-white p-0 text-ink-950 shadow-2xl backdrop:bg-ink-950/60"
    >
      <div className="p-6">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-red-600/10 text-red-600">
          <BatteryFull className="h-6 w-6" aria-hidden="true" />
        </span>
        <h2 id="battery-total-title" className="mt-4 font-display text-2xl font-bold uppercase leading-tight">
          {copy.title}
        </h2>
        <p id="battery-total-body" className="mt-2 text-base leading-relaxed text-ink-700">
          {copy.body} <strong className="font-bold text-ink-950">{copy.total}</strong>
        </p>
        <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <Button type="button" variant="outline" size="md" onClick={() => finish(false)}>
            {copy.back}
          </Button>
          <Button type="button" size="md" data-proceed="" onClick={() => finish(true)}>
            {copy.proceed}
          </Button>
        </div>
      </div>
    </dialog>
  );
}
