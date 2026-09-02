import Image from "next/image";
import { BatteryFull, ShieldCheck, LifeBuoy, Check, AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { getService } from "@/lib/content/services";

/**
 * The commercial centre of the home page — batteries are the highest-margin
 * service, so this gets a full section directly below the Hero rather than
 * being one card among many in the services grid.
 *
 * Prices are published as TOTALS ("$290 including installation"), never as a
 * parts-plus-labour breakdown.
 */
export function BatteryPromoSection() {
  const service = getService("battery-replacement");
  if (!service?.priceLines) return null;

  return (
    <section className="border-b border-ink-950/8 bg-ink-950 py-12 text-white sm:py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-red-500">
              <BatteryFull className="h-4 w-4" aria-hidden="true" />
              Mobile Battery Replacement
            </p>
            <h2 className="mt-3 max-w-xl font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              A new battery, installed right where you are.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/70">
              We bring the battery to you and fit it on the spot — no tow, no waiting room. Standard
              and AGM both carried.
            </p>

            <dl className="mt-7 grid max-w-lg gap-3 sm:grid-cols-2">
              {service.priceLines.map((line) => (
                <div
                  key={line.label ?? line.amount}
                  className="rounded-2xl border border-white/15 bg-white/5 p-4"
                >
                  <dt className="text-sm font-semibold text-white/70">{line.label}</dt>
                  <dd className="mt-1 font-display text-3xl font-bold text-white">{line.amount}</dd>
                  {line.note && <p className="mt-1 text-xs text-white/60">{line.note}</p>}
                </div>
              ))}
            </dl>

            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
              <li className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
                1-year warranty on the standard battery
              </li>
              <li className="flex items-center gap-1.5">
                <Check className="h-4 w-4 shrink-0 text-red-500" aria-hidden="true" />
                Installation included in the price
              </li>
            </ul>

            {service.restriction && (
              <p className="mt-4 flex items-start gap-1.5 text-sm font-semibold text-amber-300">
                <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                {service.restriction}
              </p>
            )}

            <div className="mt-7">
              <Button
                href={`/request?service=${service.slug}`}
                size="lg"
                icon={<LifeBuoy className="h-4 w-4" aria-hidden="true" />}
              >
                Request a Battery
              </Button>
            </div>
          </div>

          {/*
            The one portrait in the set (408x612 native), given the one
            genuinely vertical slot on the site rather than being cropped into
            a landscape box. Capped at max-w-102 so it renders at exactly
            its native width on desktop and narrower — never wider — below that.

            `unoptimized` because the file is already the optimised artefact
            (webp q76 from scripts/optimize-images.mjs); without it next/image
            would emit srcset candidates far wider than the 408px source.

            Not marked priority: the hero above it already holds the priority
            slot for its background video, and a second preload would compete
            with the actual LCP element for bandwidth.
          */}
          <div className="mx-auto w-full max-w-102 lg:mx-0">
            <Image
              src="/images/battery-trunk-portrait.webp"
              alt="A technician in a blue jacket loosening the terminal on a white car battery sitting in an open car trunk, with a pair of work gloves resting beside it."
              width={408}
              height={612}
              loading="lazy"
              unoptimized
              className="h-auto w-full rounded-3xl border border-white/15"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
