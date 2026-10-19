"use client";

import { Film } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const isDev = process.env.NODE_ENV === "development";

/**
 * Branded static fallback shown wherever a video slot has no registered
 * media yet, or the video fails to load. Public visitors see only a clean
 * gradient + road texture — the "no video registered" label is dev-only.
 */
export function MediaFallback({
  label,
  tone = "dark",
  className,
}: {
  /** Dev-only diagnostic text (e.g. the placement id). Never shown in production. */
  label?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden",
        tone === "dark" ? "bg-gradient-to-br from-ink-900 to-ink-950" : "bg-gradient-to-br from-paper-100 to-paper-50",
        className
      )}
      role="img"
      aria-label={label ?? "Roadside assistance"}
    >
      <div
        aria-hidden="true"
        className={cn("absolute inset-0 road-lines", tone === "dark" ? "opacity-[0.05]" : "opacity-[0.08]")}
        style={{ transform: "rotate(-6deg) scale(1.4)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(224,19,28,0.12),transparent)]"
      />
      <Film className={cn("relative h-6 w-6", tone === "dark" ? "text-white/20" : "text-ink-950/15")} aria-hidden="true" />
      {isDev && label && (
        <span className="absolute bottom-2 left-2 rounded bg-black/70 px-2 py-1 font-mono text-[0.6rem] text-amber-300">
          no video: {label}
        </span>
      )}
    </div>
  );
}
