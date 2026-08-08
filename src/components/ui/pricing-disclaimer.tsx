import { Phone } from "lucide-react";
import { BUSINESS } from "@/lib/content/business";
import { cn } from "@/lib/utils/cn";

/**
 * Shared pricing disclaimer + phone CTA, used everywhere starting prices are
 * shown (service cards, services listing, request wizard) so the "starting
 * at, not guaranteed" framing and the phone fallback stay consistent and
 * only need to change in one place. `tone="light"` is for dark-background
 * sections (e.g. the service-detail hero).
 */
export function PricingDisclaimer({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <div className={cn("text-xs", tone === "light" ? "text-white/60" : "text-ink-500 dark:text-ink-300", className)}>
      <p>Prices start at the listed amount. Final price depends on your vehicle and location.</p>
      <a
        href={BUSINESS.phoneHref}
        className={cn(
          "mt-1 inline-flex items-center gap-1 font-medium",
          tone === "light" ? "text-white/80 hover:text-white" : "text-ink-600 hover:text-red-600 dark:text-ink-200"
        )}
      >
        <Phone className="h-3 w-3" aria-hidden="true" /> Questions about pricing? Call {BUSINESS.phoneDisplay}
      </a>
    </div>
  );
}
