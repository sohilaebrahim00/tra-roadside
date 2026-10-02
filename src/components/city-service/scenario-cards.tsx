import { ArrowRight } from "lucide-react";
import type { ServiceContent } from "@/lib/content/services";
import type { ServiceArea } from "@/lib/content/business";

/**
 * The "when drivers call us for this" scenarios, as cards rather than a bullet
 * list.
 *
 * Each scenario in the approved content is a single sentence, and it is rendered
 * verbatim — they are not split into a title and a supporting line, because
 * inventing a title would be rewriting approved copy for decoration. The visual
 * structure comes from a numbered chip instead, which is interface chrome and
 * carries no claim.
 *
 * Cards sit in a two-column grid from `sm` up and stretch to the tallest in the
 * row, so the shortest scenario ("A gauge that read higher than the tank
 * actually was.") and the longest ("Keys shut in the trunk with tailgating gear
 * already loaded, which is priced separately from a door.") line up without
 * either being clipped.
 */
export function ScenarioCards({
  city,
  scenarios,
}: {
  city: ServiceArea;
  scenarios: readonly string[];
}) {
  if (!scenarios.length) return null;

  return (
    <section>
      <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-[1.75rem]">
        When drivers in {city.name} call us for this
      </h2>

      <ul className="mt-6 grid gap-4 sm:grid-cols-2">
        {scenarios.map((s, i) => (
          <li
            key={s}
            className="group flex h-full gap-4 rounded-2xl border border-ink-950/8 bg-white p-5 transition-colors hover:border-red-600/25"
          >
            <span
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-600/10 font-mono text-xs font-bold tabular-nums text-red-600"
              aria-hidden="true"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="min-w-0 text-[0.95rem] leading-relaxed text-ink-700">{s}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

/**
 * "What we need from you" — the dispatch checklist, straight from SERVICES.
 *
 * Kept next to the scenarios because the two answer the same question from
 * opposite ends: what has happened, and what we need in order to come out.
 */
export function WhatWeNeed({ svc }: { svc: ServiceContent }) {
  if (!svc.whatWeNeed?.length) return null;

  return (
    <section>
      <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-[1.75rem]">
        What we need from you
      </h2>

      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {svc.whatWeNeed.map((w) => (
          <li
            key={w}
            className="flex items-center gap-3 rounded-xl border border-ink-950/8 bg-paper-50 px-4 py-3.5"
          >
            <ArrowRight className="h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
            <span className="min-w-0 text-[0.95rem] text-ink-700">{w}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
