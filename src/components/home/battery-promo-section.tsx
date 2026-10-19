import Image from "next/image";
import Link from "next/link";
import { BatteryFull, ShieldCheck, LifeBuoy, Check, ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getService } from "@/lib/content/services";
import { batteryReview } from "@/lib/content/google-reviews";

/**
 * The commercial center of the home page — batteries are the highest-margin
 * service, so this gets a full section directly below the Hero rather than
 * being one card among many in the services grid.
 *
 * The published figure is the price of the BATTERY ALONE and never appears
 * without the qualifier that says so. The site's own promise is upfront
 * pricing with no surprise fees; a bare "$189" followed by an installation
 * quote on the phone would read as a bait and cost more trust than the
 * attractive number wins.
 */
export function BatteryPromoSection() {
  const service = getService("battery-replacement");
  if (!service?.priceLines) return null;
  const review = batteryReview();

  return (
    <section className="border-b border-ink-950/8 bg-ink-950 py-12 text-white sm:py-16">
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
              We bring the battery to you and install it on the spot — no tow, no waiting room.
            </p>

            {/* Both strings come from SERVICES, so a price change reaches this
                section without anyone remembering it exists. */}
            <div className="mt-5 max-w-md rounded-2xl border border-white/15 bg-white/5 p-4 sm:mt-7 sm:p-5">
              <p className="font-display text-3xl font-bold text-white sm:text-4xl">{service.priceBadge}</p>
              {service.priceLines[0]?.note && (
                <p className="mt-1.5 text-sm text-white/70">{service.priceLines[0].note}</p>
              )}
            </div>

            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80 sm:mt-6">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
                1-year warranty
              </li>
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
            The business's own job photo, cropped to 2:3 for the one genuinely
            vertical slot on the site. Capped at max-w-72 (288px) on phones and
            max-w-104 (416px) above; the file is 816px wide, so it stays sharp
            on 2x screens, and next/image serves smaller widths to phones.

            The caption is the point of the picture. A battery under the rear
            seat is why installation is quoted per vehicle rather than
            published as one figure.

            Not marked priority: the hero above it already holds the priority
            slot for its background video, and a second preload would compete
            with the actual LCP element for bandwidth.
          */}
          <figure className="mx-auto w-full max-w-72 sm:max-w-104 lg:mx-0">
            {/* Two views of the same job: the wide shot behind, the close-up
                overlapping its lower-left corner. The red outline is offset
                behind the wide shot as a frame; it is decorative only. */}
            <div className="relative pb-14 pl-12 pr-3 pt-3 sm:pb-16 sm:pl-16">
              <div
                aria-hidden="true"
                className="absolute bottom-11 left-16 right-0 top-0 rounded-3xl border-2 border-red-600/80 sm:bottom-13 sm:left-20"
              />
              <Image
                src="/images/battery-under-seat-portrait.webp"
                alt="A car battery set into the floor under the rear seat of a blue vehicle, with the seat cushion lifted and the red positive terminal cover visible."
                width={816}
                height={1224}
                sizes="(min-width: 448px) 352px, calc(100vw - 6rem)"
                loading="lazy"
                className="relative h-auto w-full rounded-3xl border border-white/15"
              />
              <div className="absolute bottom-0 left-0 w-[48%] overflow-hidden rounded-2xl border-4 border-ink-950 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.7)] ring-1 ring-white/25">
                <Image
                  src="/images/field/field-battery-under-seat-detail.webp"
                  alt="Close-up of the same battery, with the red cover over its positive terminal."
                  width={560}
                  height={700}
                  sizes="(min-width: 448px) 200px, 45vw"
                  loading="lazy"
                  className="h-auto w-full"
                />
              </div>
            </div>
            <figcaption className="mt-3 text-[0.8rem] leading-relaxed text-white/70 sm:mt-4 sm:text-sm">
              Not every battery sits under the hood. This one is under the rear seat, which is why
              installation is quoted for your vehicle before anyone sets off.
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
