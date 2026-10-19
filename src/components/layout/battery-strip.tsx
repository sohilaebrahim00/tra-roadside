import Link from "next/link";
import { BatteryFull, ArrowRight } from "lucide-react";
import { getService } from "@/lib/content/services";

/**
 * Slim commercial strip pinned above the site header.
 *
 * Deliberately NOT sticky and NOT dismissible. It scrolls away with the page
 * so that the sticky header is the only bar that ever stays pinned — two
 * stacked persistent bars would eat roughly a fifth of a 390px-wide phone
 * screen. Height is fixed at --battery-strip-height so the mobile nav panel
 * can subtract it from its own max-height.
 *
 * The CTA deep-links into the request wizard with the battery service already
 * selected (see the `service` search param in app/(site)/request/page.tsx), so
 * the customer never picks it out of a list a second time.
 */
export function BatteryStrip() {
  // From SERVICES rather than a literal, so a price change cannot leave the
  // one strip on every page quoting the old figure.
  const price = getService("battery-replacement")?.priceFrom;
  if (!price) return null;

  return (
    // An aside so the strip sits in a landmark like the rest of the page
    // (axe region rule); it is supplementary to every page it appears on.
    <aside aria-label="Battery offer" className="h-(--battery-strip-height) bg-ink-950 text-white">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <p className="flex min-w-0 items-center gap-2 text-xs sm:text-sm">
          <BatteryFull className="h-4 w-4 shrink-0 text-amber-400" aria-hidden="true" />
          <span className="truncate">
            <span className="font-semibold">Car batteries</span>
            <span className="hidden sm:inline"> from ${price} — battery only, installation quoted by dispatch</span>
            <span className="sm:hidden"> from ${price} — battery only</span>
          </span>
        </p>

        <Link
          href="/request?service=battery-replacement"
          className="flex shrink-0 items-center gap-1 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white hover:bg-red-700 sm:px-3.5 sm:text-sm"
        >
          <span className="sm:hidden">Request</span>
          <span className="hidden sm:inline">Request a battery</span>
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </aside>
  );
}
