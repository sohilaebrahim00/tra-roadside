import Image from "next/image";
import Link from "next/link";
import { BatteryFull, ShieldCheck, LifeBuoy, Check, ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { BrandPattern } from "@/components/brand/brand-pattern";
import { Button } from "@/components/ui/button";
import { getService } from "@/lib/content/services";
import { batteryReview } from "@/lib/content/google-reviews";
import { lowOf } from "@/lib/content/pricing";
import { PriceFigure } from "@/components/ui/price-figure";

/**
 * The commercial center of the home page — batteries are the highest-margin
 * service, so this gets a full section directly below the Hero rather than
 * being one card among many in the services grid.
 *
 * The published figure is the battery replacement service price. It stands
 * alone, with no dispatch fee beside it (owner, 2026-11-07): the fee and the
 * total are shown the moment the customer taps Request or the price itself
 * (components/request/battery-total.tsx), and again on the request form.
 */
export function BatteryPromoSection() {
  const service = getService("battery-replacement");
  if (!service?.priceLines) return null;
  const review = batteryReview();

  return (
    <section className="relative isolate overflow-hidden border-b border-ink-950/8 bg-ink-950 py-12 text-white sm:py-16">
      <BrandPattern />
      <Container>
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-400">
              <BatteryFull className="h-4 w-4" aria-hidden="true" />
              Mobile Battery Replacement
            </p>
            <h2 className="mt-3 max-w-xl font-display text-[1.6rem] font-bold uppercase leading-tight tracking-tight sm:text-4xl">
              A new battery, installed right where you are.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/70">
              The battery comes to your car and goes in right there — no tow, no waiting room.
            </p>

            {/* Both strings come from SERVICES, so a price change reaches this
                section without anyone remembering it exists. */}
            <div className="mt-5 max-w-md rounded-2xl border border-white/15 bg-gradient-to-br from-white/[0.09] to-white/[0.02] p-5 shadow-[0_20px_50px_-25px_rgba(224,19,28,0.6)] sm:mt-7 sm:p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-400">Battery replacement</p>
                  <p className="mt-1.5 font-display text-6xl font-bold leading-none text-white sm:text-7xl">
                    <PriceFigure svc={service}>{lowOf(service.priceLines[0])}</PriceFigure>
                  </p>
                  {/* What the price covers, with no fee beside it (owner, 2026-11-07). */}
                  <p className="mt-2 text-sm font-semibold text-white/85">Battery, core charge and installation</p>
                </div>
                <span className="mt-0.5 inline-flex shrink-0 items-center gap-1.5 rounded-full bg-red-600 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-wider text-white">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  1-year warranty
                </span>
              </div>
              {service.priceLines[0]?.note && (
                <p className="mt-3 border-t border-white/10 pt-3 text-sm text-white/75">{service.priceLines[0].note}</p>
              )}
            </div>

            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80 sm:mt-6">
              <li className="flex items-center gap-1.5">
                <Check className="h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
                Installed at your location
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
                Full price confirmed before a driver sets off
              </li>
            </ul>

            {/* A real review that names battery replacement, verbatim from the
                Google listing (see src/lib/content/google-reviews.ts). */}
            {review && (
              <figure className="mt-5 max-w-md border-l-2 border-red-600 pl-4 sm:mt-6">
                <blockquote className="text-[0.95rem] leading-relaxed text-white/90">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <figcaption className="mt-2 flex items-center gap-2 text-xs text-white/60">
                  <span className="flex gap-0.5" role="img" aria-label={`${review.rating} out of 5 stars`}>
                    {Array.from({ length: review.rating }, (_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                    ))}
                  </span>
                  {review.author}, Google review
                </figcaption>
              </figure>
            )}

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3.5 sm:mt-7 sm:gap-y-4">
              <Button
                href={`/request?service=${service.slug}`}
                size="lg"
                icon={<LifeBuoy className="h-4 w-4" aria-hidden="true" />}
              >
                Request a Battery
              </Button>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-1 text-sm font-semibold text-white/85 underline-offset-4 hover:text-white hover:underline"
              >
                How battery replacement works
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/guides/car-battery-replacement-cost"
                className="inline-flex items-center gap-1 text-sm font-semibold text-white/85 underline-offset-4 hover:text-white hover:underline"
              >
                What a battery costs
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/*
            The 408x612 portrait from the owner's battery set, for the one
            genuinely vertical slot on the site. Capped at max-w-72 (288px) on
            phones and max-w-102 (408px) above, so it never renders wider than
            its native width.

            `unoptimized` because the file is already the optimized artifact
            (webp from scripts/optimize-images.mjs); without it next/image would
            emit srcset candidates far wider than the 408px source.

            The caption is the point of the picture: where a battery sits is
            why installation is quoted per vehicle rather than published as
            one figure.

            Not marked priority: the hero above it already holds the priority
            slot for its background video, and a second preload would compete
            with the actual LCP element for bandwidth.
          */}
          <figure className="mx-auto w-full max-w-72 sm:max-w-102 lg:mx-0">
            {/* The red outline is offset behind the photo as a frame; it is
                decorative only. */}
            <div className="relative pb-5 pl-5">
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-5 top-5 rounded-3xl border-2 border-red-600/80"
              />
              <Image
                src="/images/battery-trunk-portrait.webp"
                alt="A technician in a blue jacket loosening the terminal on a white car battery sitting in an open car trunk, with a pair of work gloves resting beside it."
                width={408}
                height={612}
                loading="lazy"
                unoptimized
                className="relative h-auto w-full rounded-3xl border border-white/15"
              />
            </div>
            <figcaption className="mt-3 text-[0.8rem] leading-relaxed text-white/70 sm:mt-4 sm:text-sm">
              Not every battery sits under the hood. Some are in the trunk or under a seat, which is
              why installation is quoted for your vehicle before anyone sets off.
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
