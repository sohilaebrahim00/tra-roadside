import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, LifeBuoy, Phone, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { PricePanel } from "@/components/city-service/price-panel";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { SERVICES, getService } from "@/lib/content/services";
import { DISPATCH_FEE_EXPLAINER, DISPATCH_FEE_HEADLINE, DISPATCH_FEE_USD, TAX_NOTE, exampleTotal, headlineLine, servicePrice } from "@/lib/content/pricing";
import { BUSINESS } from "@/lib/content/business";
import { batteryReview } from "@/lib/content/google-reviews";
import { guidesForService } from "@/lib/content/guides";
import { env } from "@/lib/env";
import { pageUrls, shareImageFor } from "@/lib/seo";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";

/**
 * Every published price on one page. Nothing here is typed in: each figure,
 * label and qualifier renders from SERVICES through the same PricePanel the
 * service pages use, so this page cannot disagree with them.
 *
 * Battery replacement leads, because it is the business's main earner. Every
 * price is a service price before tax, plus the dispatch fee once per job
 * (owner's pricing brief, 2026-11-03; tax decision, 2026-11-04).
 */

const battery = getService("battery-replacement");

export const metadata: Metadata = {
  title: "Roadside Assistance Prices in Dallas–Fort Worth",
  description: `TRA roadside prices across Dallas–Fort Worth: ${DISPATCH_FEE_HEADLINE.toLowerCase()}. Car batteries ${battery && headlineLine(battery) ? servicePrice(headlineLine(battery)!) : ""}, jump starts, lockouts, flat tires and tire repair.`,
  ...pageUrls("/pricing", shareImageFor("battery-replacement")),
};

const tire = getService("tire-replacement");
const priceOf = (slug: Parameters<typeof getService>[0]) => {
  const svc = getService(slug);
  const line = svc && headlineLine(svc);
  return line ? servicePrice(line) : "";
};

const FAQS = [
  {
    q: `What is the ${DISPATCH_FEE_USD} dispatch fee?`,
    a: `${DISPATCH_FEE_EXPLAINER} It is added to the service price, never charged twice on one job, and never the whole cost of the service.`,
  },
  {
    q: "Is tax included in these prices?",
    a: `No. ${TAX_NOTE}`,
  },
  {
    q: "How do I get an exact price for my situation?",
    a: "Request help online or call us. The request form shows the expected total for your service before you send it, and dispatch confirms the price for your vehicle and location before a driver is sent.",
  },
  {
    q: "Do you bring a spare tire?",
    a: `A spare tire change (${priceOf("flat-tire-change")}) uses the spare carried in your vehicle. If you have no usable spare, a tire replacement starts ${tire && headlineLine(tire) ? servicePrice(headlineLine(tire)!).toLowerCase() : ""}, and tire availability varies, so dispatch confirms a tire is available before a driver is sent.`,
  },
  {
    q: "Can my flat tire be repaired, or does it need replacing?",
    a: `A puncture in the tread, such as a nail or screw, can usually be plugged or patched (${priceOf("tire-repair-plug-patch")}). Damage to the sidewall or shoulder, a large cut, or a tire that was driven flat needs a replacement instead. The technician checks the tire before any work is done.`,
  },
  {
    q: "Will the battery fit my vehicle?",
    a: `${battery?.priceNote ?? ""} Tell us the year, make and model, or the VIN, when you request help.`,
  },
  {
    q: "What do you need for a lockout?",
    a: `The vehicle's location, and proof that it is yours, such as an ID that matches the registration. A door lockout starts at ${priceOf("lockout")}; keys locked in the trunk are priced separately, as listed.`,
  },
];

export default function PricingPage() {
  const review = batteryReview();
  const rest = SERVICES.filter((s) => s.slug !== "battery-replacement" && s.priceLines?.length);
  const batteryGuides = guidesForService("battery-replacement");

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: env.siteUrl }, { name: "Pricing", url: `${env.siteUrl}/pricing` }]} />
      <FaqJsonLd items={FAQS} />

      <section className="relative isolate overflow-hidden border-b border-ink-950/8 bg-ink-950 py-16 text-white sm:py-20">
        <HeroBackdrop />
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Pricing"
            title="Roadside prices, published"
            description="Every service has a listed price. Where the total depends on your vehicle, the page says so, and dispatch confirms it when you request help."
            tone="light"
          />
          <div className="mt-8 max-w-3xl rounded-2xl border border-white/15 bg-white/[0.06] p-5">
            <p className="font-display text-xl font-bold text-white sm:text-2xl">{DISPATCH_FEE_HEADLINE}</p>
            <p className="mt-2 text-sm leading-relaxed text-white/80">{DISPATCH_FEE_EXPLAINER} {TAX_NOTE}</p>
            <ul className="mt-3 grid gap-1 text-sm text-white/90 sm:grid-cols-2">
              {SERVICES.filter((svc) => headlineLine(svc)).map((svc) => (
                <li key={svc.slug}>{exampleTotal(svc.shortName, headlineLine(svc)!)}</li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      {battery && (
        <section className="border-b border-ink-950/8 bg-paper-50 py-14 sm:py-20" aria-labelledby="battery-price">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-red-600">Most requested</p>
                <h2 id="battery-price" className="mt-2 font-display text-3xl font-bold text-ink-950 sm:text-4xl">
                  {battery.name}
                </h2>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-600">{battery.problem}</p>
                <PricePanel svc={battery} tone="dark" className="mt-6 max-w-md" />
                {review && (
                  <figure className="mt-6 max-w-md border-l-2 border-red-600 pl-4">
                    <blockquote className="text-[0.95rem] leading-relaxed text-ink-700">&ldquo;{review.text}&rdquo;</blockquote>
                    <figcaption className="mt-2 flex items-center gap-2 text-xs text-ink-500">
                      <span className="flex gap-0.5" role="img" aria-label={`${review.rating} out of 5 stars`}>
                        {Array.from({ length: review.rating }, (_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                        ))}
                      </span>
                      {review.author}, Google review
                    </figcaption>
                  </figure>
                )}
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href={`/request?service=${battery.slug}`} size="lg" icon={<LifeBuoy className="h-4 w-4" aria-hidden="true" />}>
                    Request a Battery
                  </Button>
                  <Button href={BUSINESS.phoneHref} size="lg" variant="outline" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
                    Call {BUSINESS.phoneDisplay}
                  </Button>
                </div>
                {batteryGuides.length > 0 && (
                  <ul className="mt-6 space-y-2">
                    {batteryGuides.map((g) => (
                      <li key={g.slug}>
                        <Link href={`/guides/${g.slug}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700">
                          {g.h1} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              {battery.photos?.[0] && (
                <Image
                  src={battery.photos[0].src}
                  alt={battery.photos[0].alt}
                  width={battery.photos[0].width}
                  height={battery.photos[0].height}
                  sizes="(min-width: 1024px) 560px, calc(100vw - 2rem)"
                  className="h-auto w-full rounded-3xl border border-ink-950/10"
                />
              )}
            </div>
          </Container>
        </section>
      )}

      <section className="py-14 sm:py-20" aria-labelledby="all-prices">
        <Container>
          <h2 id="all-prices" className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
            Every other service
          </h2>
          <ul className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((svc) => (
              <li key={svc.slug} className="flex flex-col rounded-2xl border border-ink-950/10 bg-white p-6">
                <h3 className="font-display text-xl font-semibold text-ink-950">{svc.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{svc.summary}</p>
                <PricePanel svc={svc} tone="dark" className="mt-5 flex-1" />
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Button href={`/request?service=${svc.slug}`} size="sm">
                    Request
                  </Button>
                  <Link href={`/services/${svc.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:text-red-700">
                    Details <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-ink-950/8 bg-paper-50 py-14 sm:py-20">
        <Container size="narrow" className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">Pricing questions</h2>
          <div className="mt-5 rounded-2xl border border-ink-950/8 bg-white px-5 sm:px-6">
            <FaqAccordion items={FAQS.map((f, i) => ({ id: `pricing-${i}`, category: "Pricing", question: f.q, answer: f.a }))} />
          </div>
        </Container>
      </section>
    </>
  );
}
