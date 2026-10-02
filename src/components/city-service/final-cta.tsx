import { Phone, LifeBuoy } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SERVICE_ICONS } from "@/lib/content/service-icons";
import { BUSINESS } from "@/lib/content/business";
import type { ServiceContent } from "@/lib/content/services";
import type { ServiceArea } from "@/lib/content/business";

/**
 * Closing conversion band.
 *
 * Every line of language here already existed. `svc.heroLine` is the approved
 * one-liner from SERVICES ("Locked out, not locked down.", "Out of fuel, not out
 * of options."), and the heading and supporting sentence are the strings the old
 * sidebar CTA used. Nothing is authored, and in particular there is no response
 * time, no arrival window and no guarantee — none of which the business has
 * published.
 */
export function FinalCta({ city, svc }: { city: ServiceArea; svc: ServiceContent }) {
  const Icon = SERVICE_ICONS[svc.slug];

  return (
    <section className="relative overflow-hidden bg-ink-950 text-white">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-red-600/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-30 road-lines" aria-hidden="true" />

      <Container className="relative py-12 sm:py-16">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500">
              <Icon className="h-4 w-4" aria-hidden="true" />
              {svc.name}
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-balance sm:text-3xl">
              Need help in {city.name} now?
            </h2>
            {svc.heroLine && (
              <p className="mt-3 text-base text-white/75 sm:text-lg">{svc.heroLine}</p>
            )}
            <p className="mt-2 text-sm text-white/55">
              Share your exact location and we&apos;ll dispatch the nearest driver.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto lg:shrink-0 lg:flex-col xl:flex-row">
            <Button
              href={`/request?service=${svc.slug}`}
              size="lg"
              fullWidth
              className="sm:w-auto lg:w-full xl:w-auto"
              icon={<LifeBuoy className="h-4 w-4 shrink-0" aria-hidden="true" />}
            >
              Request {svc.shortName}
            </Button>
            <Button
              href={BUSINESS.phoneHref}
              variant="outline"
              size="lg"
              fullWidth
              aria-label={`Call ${BUSINESS.legalName} at ${BUSINESS.phoneDisplay}`}
              className="border-white/25 text-white hover:bg-white/10 sm:w-auto lg:w-full xl:w-auto"
              icon={<Phone className="h-4 w-4 shrink-0" aria-hidden="true" />}
            >
              Call Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
