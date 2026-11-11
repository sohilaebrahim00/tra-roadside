"use client";

import { useEffect, type RefObject } from "react";
import type { gsap as GsapCore } from "gsap";
import type { ScrollTrigger as ScrollTriggerClass } from "gsap/ScrollTrigger";

export interface LazyGsap {
  gsap: typeof GsapCore;
  ScrollTrigger: typeof ScrollTriggerClass;
}

/**
 * Runs a GSAP setup once the page has loaded and the browser is idle, and
 * only then downloads GSAP itself (about 60 KB of JavaScript).
 *
 * `useGSAP` imported GSAP up front, so it was parsed and run before the first
 * screen could paint: about 3 s of a mid-range phone's main thread on the
 * home page (Lighthouse, 2026-11-12). Every animation here is decoration on
 * content that is already readable without it, so it can wait.
 *
 * The setup runs inside `gsap.context(…, scope)`, like `useGSAP`: selectors
 * are scoped, a returned function is called on cleanup, and everything it
 * created is reverted when the component unmounts.
 */
export function useLazyGsap(setup: (g: LazyGsap) => void | (() => void), scope: RefObject<HTMLElement | null>) {
  useEffect(() => {
    let cancelled = false;
    let ctx: { revert: () => void } | undefined;
    let idleId: number | undefined;

    const run = async () => {
      const mod = await import("./register");
      if (cancelled) return;
      mod.registerGsap();
      ctx = mod.gsap.context(() => setup({ gsap: mod.gsap, ScrollTrigger: mod.ScrollTrigger }), scope.current ?? undefined);
    };
    const hasIdle = typeof window.requestIdleCallback === "function";
    const whenIdle = () => {
      idleId = hasIdle ? window.requestIdleCallback(() => void run(), { timeout: 2000 }) : window.setTimeout(() => void run(), 200);
    };

    if (document.readyState === "complete") whenIdle();
    else window.addEventListener("load", whenIdle, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", whenIdle);
      if (idleId !== undefined) {
        if (hasIdle) window.cancelIdleCallback(idleId);
        else window.clearTimeout(idleId);
      }
      ctx?.revert();
    };
    // The setup runs once per mount, like useGSAP without dependencies.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
