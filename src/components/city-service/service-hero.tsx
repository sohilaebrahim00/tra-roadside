import Link from "next/link";
import { Phone, LifeBuoy, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PricePanel } from "./price-panel";
import { HeroVisual } from "./hero-visual";
import { SERVICE_ICONS } from "@/lib/content/service-icons";
import { BUSINESS } from "@/lib/content/business";
import type { ServiceContent } from "@/lib/content/services";
import type { ServiceArea } from "@/lib/content/business";

/**
 * City x Service hero.
 *
 * Before this pass the hero was a single narrow column on a tall dark band, so
 * most of the viewport above the fold was empty ink. It is now a two-column
 * composition: the decision path on the left (where you are, what this is, what
 * it costs, the two things you can do) and a visual on the right.
 *
 * Hierarchy is deliberate and matches the brief: breadcrumb, H1, intro, price,
 * primary CTA, secondary CTA.
 *
 * H1 and intro come from the approved content entry and are rendered verbatim.
 * Price comes from SERVICES. Nothing here authors copy.
 */
export function ServiceHero({
  city,
  svc,
  h1,
  intro,
}: {
  city: ServiceArea;
  svc: ServiceContent;
  h1: string;
  intro: string;
}) {
  const Icon = SERVICE_ICONS[svc.slug];

  return (
    <section className="relative overflow-hidden border-b border-ink-950/8 bg-ink-950 text-white">
      {/* Depth without imagery: a soft red bloom behind the headline and a
          hairline road motif along the bottom edge. Both decorative. */}
      <div
        className="pointer-events-none absolute -left-32 -top-40 h-[26rem] w-[26rem] rounded-full bg-red-600/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-30 road-lines" aria-hidden="true" />

      <Container className="relative py-10 sm:py-14 lg:py-18">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_minmax(0,32rem)] lg:gap-14">
          {/* ---------------- Decision column ---------------- */}
          <div>
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs font-semibold uppercase tracking-widest text-red-500">
                <li>
                  <Link href="/service-areas" className="hover:underline">
                    Service Areas
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3 w-3 text-white/30" />
                </li>
                <li>
                  <Link href={`/service-areas/${city.slug}`} className="hover:underline">
                    {city.name}
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3 w-3 text-white/30" />
                </li>
                <li aria-current="page" className="text-white/60">
                  {svc.shortName}
                </li>
              </ol>
            </nav>

            <div className="mt-5 flex items-start gap-3.5 sm:gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-red-500/25 bg-red-600/15 text-red-500 sm:h-14 sm:w-14">
                <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
              </span>
              <h1 className="font-display text-[1.75rem] font-bold uppercase leading-[1.1] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
                {h1}
              </h1>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-[1.05rem]">
              {intro}
            </p>

            <PricePanel svc={svc} tone="light" className="mt-7 max-w-md" />

            {/* Primary action first, in source order and visually. Stacked and
                full width on mobile so neither button can be mis-tapped. */}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href={`/request?service=${svc.slug}`}
                size="lg"
                fullWidth
                className="sm:w-auto"
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
                className="border-white/25 text-white hover:bg-white/10 sm:w-auto"
                icon={<Phone className="h-4 w-4 shrink-0" aria-hidden="true" />}
              >
                Call Now
              </Button>
            </div>
          </div>

          {/* ---------------- Visual column ---------------- */}
          <HeroVisual svc={svc} />
        </div>
      </Container>
    </section>
  );
}
