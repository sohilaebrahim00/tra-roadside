import { BatteryFull, ShieldCheck, LifeBuoy } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getService } from "@/lib/content/services";

/**
 * Highest-commercial-priority offer on the site — placed directly below the
 * Hero so it's seen almost immediately, without competing with the Hero's
 * own emergency CTAs (Request Help / Call Now stay untouched above this).
 */
export function BatteryPromoSection() {
  const service = getService("battery-replacement");
  if (!service?.startingPrice) return null;

  return (
    <section className="border-b border-ink-950/8 bg-red-600 py-6 sm:py-7">
      <Container>
        <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15 text-white">
              <BatteryFull className="h-6 w-6" aria-hidden="true" />
            </span>
            <div>
              <p className="font-display text-lg font-bold text-white sm:text-xl">
                Battery Replacement from ${service.startingPrice}
              </p>
              <p className="mt-1 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-sm text-white/85 sm:justify-start">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> Includes a 2-Year Battery Warranty
                </span>
                <span className="text-white/60">Installation requirements vary by vehicle — final price confirmed for your vehicle and location.</span>
              </p>
            </div>
          </div>
          <Button
            href={`/request?service=${service.slug}`}
            size="lg"
            className="shrink-0 bg-white text-red-600 shadow-none hover:bg-white/90"
            icon={<LifeBuoy className="h-4 w-4" aria-hidden="true" />}
          >
            Request Battery Service
          </Button>
        </div>
      </Container>
    </section>
  );
}
