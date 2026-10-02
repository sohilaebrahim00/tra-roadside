import { Info } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { PricingDisclaimer } from "@/components/ui/pricing-disclaimer";
import type { ServiceContent } from "@/lib/content/services";

/**
 * Pricing for a City x Service page, rendered entirely from SERVICES.
 *
 * Every figure on screen comes from `svc.priceLines` / `svc.priceNote`. Nothing
 * is hard-coded, because one component has to be correct for four different
 * shapes that exist in the data today:
 *
 *   {amount}                      jump start, tire repair, stuck screw, rim lock
 *   {amount, note}                flat tire, fuel delivery, towing, battery
 *   {label, amount} x2            tire replacement, priced by wheel size
 *   {amount} then {label, amount} lockout — a door, then the trunk
 *
 * The first line is the headline figure. Any further line is a variant priced
 * differently and is shown as its own row rather than folded into the headline,
 * so "$120 keys locked in the trunk" can never read as the starting price.
 *
 * `priceNote` is the qualifier that must not get lost — it is the field that
 * says "battery only, installation quoted by dispatch" and "the fuel itself is
 * added at cost". It is given its own flagged row for that reason.
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
        Starting price
      </p>

      {/* Headline figure. baseline alignment keeps a long note from shifting it. */}
      <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span
          className={cn(
            "font-display text-3xl font-bold leading-none sm:text-4xl",
            onDark ? "text-white" : "text-ink-950"
          )}
        >
          {headline.amount}
        </span>
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
              key={line.label ?? line.amount}
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
                {line.amount}
              </span>
            </li>
          ))}
        </ul>
      )}

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
