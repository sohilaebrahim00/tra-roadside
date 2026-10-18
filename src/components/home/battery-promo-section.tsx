import Image from "next/image";
import Link from "next/link";
import { BatteryFull, ShieldCheck, LifeBuoy, Check, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getService } from "@/lib/content/services";

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

  return (
    <section className="border-b border-ink-950/8 bg-ink-950 py-12 text-white sm:py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-400">
              <BatteryFull className="h-4 w-4" aria-hidden="true" />
              Mobile Battery Replacement
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              A new battery, installed right where you are.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/70">
              We bring the battery to you and install it on the spot — no tow, no waiting room.
            </p>

            {/* Both strings come from SERVICES, so a price change reaches this
                section without anyone remembering it exists. */}
            <div className="mt-7 max-w-md rounded-2xl border border-white/15 bg-white/5 p-5">
              <p className="font-display text-4xl font-bold text-white">{service.priceBadge}</p>
              {service.priceLines[0]?.note && (
                <p className="mt-1.5 text-sm text-white/70">{service.priceLines[0].note}</p>
              )}
            </div>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
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

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
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
            </div>
          </div>

          {/*
            The business's own job photo, cropped to 2:3 for the one genuinely
            vertical slot on the site. Capped at max-w-102 (408px); the file is
            816px wide, so it stays sharp on 2x screens, and next/image serves
            smaller widths to phones.

            The caption is the point of the picture. A battery under the rear
            seat is why installation is quoted per vehicle rather than
            published as one figure.

            Not marked priority: the hero above it already holds the priority
            slot for its background video, and a second preload would compete
            with the actual LCP element for bandwidth.
          */}
          <figure className="mx-auto w-full max-w-102 lg:mx-0">
            <Image
              src="/images/battery-under-seat-portrait.webp"
              alt="A car battery set into the floor under the rear seat of a blue vehicle, with the seat cushion lifted and the red positive terminal cover visible."
              width={816}
              height={1224}
              sizes="(min-width: 448px) 408px, calc(100vw - 2rem)"
              loading="lazy"
              className="h-auto w-full rounded-3xl border border-white/15"
            />
            <figcaption className="mt-3 text-sm leading-relaxed text-white/70">
              Not every battery sits under the hood. This one is under the rear seat, which is why
              installation is quoted for your vehicle before anyone sets off.
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  );
}
