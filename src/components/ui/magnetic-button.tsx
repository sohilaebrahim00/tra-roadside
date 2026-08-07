"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap/register";

/**
 * Desktop-only "magnetic" hover pull toward the cursor, using gsap.quickTo
 * for GPU-cheap transform updates. No-ops on touch devices and when
 * prefers-reduced-motion is set — mobile keeps the button's own native
 * active/press feedback instead.
 */
export function MagneticButton({ children, strength = 0.35 }: { children: React.ReactNode; strength?: number }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = wrapperRef.current;
      if (!el) return;

      const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!canHover || reduceMotion) return;

      const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });

      function handleMove(e: MouseEvent) {
        const rect = el!.getBoundingClientRect();
        const relX = e.clientX - (rect.left + rect.width / 2);
        const relY = e.clientY - (rect.top + rect.height / 2);
        xTo(relX * strength);
        yTo(relY * strength);
      }

      function handleLeave() {
        xTo(0);
        yTo(0);
      }

      el.addEventListener("mousemove", handleMove);
      el.addEventListener("mouseleave", handleLeave);

      return () => {
        el.removeEventListener("mousemove", handleMove);
        el.removeEventListener("mouseleave", handleLeave);
      };
    },
    { scope: wrapperRef }
  );

  return (
    <div ref={wrapperRef} className="inline-block">
      {children}
    </div>
  );
}
