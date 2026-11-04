import { Info } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { PricingDisclaimer } from "@/components/ui/pricing-disclaimer";
import type { ServiceContent } from "@/lib/content/services";
import { DISPATCH_FEE_USD, TAX_NOTE, servicePrice } from "@/lib/content/pricing";

/**
 * Pricing for a City x Service page, rendered entirely from SERVICES.
 *
 * Every figure on screen comes from `svc.priceLines` / `svc.priceNote` through
 * the helpers in src/lib/content/pricing.ts. The first line is the headline
 * service price; any further line is a variant priced differently (the semi
 * truck jump start, the trunk lockout) and gets its own row, so it can never
 * read as the starting price.
 *
 * Under the service price sits the dispatch fee, on its own and charged once
 * per job (owner's pricing brief, 2026-11-03, and 2026-11-04). The expected
 * total is shown on the request form, before the customer sends a request.
 *
 * `priceNote` is the qualifier that must not get lost (battery fitment, tire
 * availability), so it gets its own flagged row.
 */
export function PricePanel({
  svc,
  tone = "light",
  className,
}: {
  svc: ServiceContent;
  /** "light" = sits on a dark surface (the hero). "dark" = on a light surface. */
  tone?: "light" | "dark";
  className?: string;
}) {
  if (!svc.priceLines?.length) return null;

  const [headline, ...variants] = svc.priceLines;
  const onDark = tone === "light";

  return (
    <div
      className={cn(
        "rounded-2xl border p-5",
        onDark ? "border-white/15 bg-white/[0.06]" : "border-ink-950/10 bg-paper-50",
        className
      )}
    >
      <p
        className={cn(
          "text-[0.7rem] font-semibold uppercase tracking-widest",
          onDark ? "text-white/50" : "text-ink-400"
        )}
      >
        Service price
      </p>

      {/* Headline figure. baseline alignment keeps a long note from shifting it. */}
      <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span
          className={cn(
            "font-display text-3xl font-bold leading-none sm:text-4xl",
            onDark ? "text-white" : "text-ink-950"
          )}
        >
          {servicePrice(headline)}
        </span>
        <span className={cn("text-sm font-semibold", onDark ? "text-white/80" : "text-ink-700")}>+ tax</span>
        {headline.label && (
          <span className={cn("text-sm font-semibold", onDark ? "text-white/90" : "text-ink-800")}>
            {headline.label}
          </span>
        )}
        {headline.note && (
          <span className={cn("text-sm", onDark ? "text-white/65" : "text-ink-600")}>
            {headline.note}
          </span>
        )}
      </div>

      {/* Differently priced variants, one row each. */}
      {variants.length > 0 && (
        <ul className={cn("mt-4 space-y-2 border-t pt-3", onDark ? "border-white/10" : "border-ink-950/8")}>
          {variants.map((line) => (
            <li
              key={line.label ?? line.min}
              className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5"
            >
              <span className={cn("text-sm", onDark ? "text-white/80" : "text-ink-700")}>
                {line.label ?? line.note}
              </span>
              <span
                className={cn(
                  "font-display text-base font-bold tabular-nums",
                  onDark ? "text-white" : "text-ink-950"
                )}
              >
                {servicePrice(line)} + tax
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* The dispatch fee on its own. */}
      <dl className={cn("mt-4 space-y-1.5 border-t pt-3 text-sm", onDark ? "border-white/10" : "border-ink-950/8")}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4">
          <dt className={onDark ? "text-white/80" : "text-ink-700"}>Dispatch fee, once per job</dt>
          <dd className={cn("font-display text-base font-bold tabular-nums", onDark ? "text-white" : "text-ink-950")}>+ {DISPATCH_FEE_USD}</dd>
        </div>
      </dl>
      <p className={cn("mt-2 text-xs", onDark ? "text-white/60" : "text-ink-500")}>{TAX_NOTE}</p>

      {/* The qualifier. Flagged, because this is the line that prevents a
          customer reading the headline figure as the whole bill. */}
      {svc.priceNote && (
        <div
          className={cn(
            "mt-4 flex gap-2.5 rounded-xl p-3",
            onDark ? "bg-amber-400/10" : "bg-amber-500/10"
          )}
        >
          <Info
            className={cn("mt-0.5 h-4 w-4 shrink-0", onDark ? "text-amber-400" : "text-amber-600")}
            aria-hidden="true"
          />
          <p className={cn("text-sm leading-relaxed", onDark ? "text-white/85" : "text-ink-700")}>
            {svc.priceNote}
          </p>
        </div>
      )}

      <PricingDisclaimer tone={tone} className="mt-4" />
    </div>
  );
}
