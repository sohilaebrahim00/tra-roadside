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
import { BUSINESS } from "@/lib/content/business";
import { batteryReview } from "@/lib/content/google-reviews";
import { guidesForService } from "@/lib/content/guides";
import { env } from "@/lib/env";
import { pageUrls, shareImageFor } from "@/lib/seo";

/**
 * Every published price on one page. Nothing here is typed in: each figure,
 * label and qualifier renders from SERVICES through the same PricePanel the
 * service pages use, so this page cannot disagree with them.
 *
 * Battery replacement leads, because it is the business's main earner and the
 * one price that needs the most explaining (battery only, installation quoted).
 */

const battery = getService("battery-replacement");

export const metadata: Metadata = {
  title: "Roadside Assistance Prices in Dallas–Fort Worth",
  description: `Published prices for every TRA roadside service across Dallas–Fort Worth: car batteries ${battery?.priceBadge?.replace(/^Battery /, "") ?? ""}, jump starts, lockouts, flat tires, fuel delivery and towing.`,
  ...pageUrls("/pricing", shareImageFor("battery-replacement")),
};

const FAQS = [
  {
    q: "Why isn't battery installation listed with a price?",
    a: "Because it depends on where your car keeps its battery. Some come out in minutes; others sit under a seat or in the trunk behind trim. Dispatch quotes installation for your vehicle, and you know the full figure before a driver is sent.",
  },
  {
    q: "How do I get an exact price for my situation?",
    a: "Request help online or call us. Dispatch confirms the price for your service, vehicle and location when you request it.",
  },
  {
    q: "Is the fuel included in the fuel delivery price?",
    a: "No. The published figure is the delivery charge, and the fuel itself is added at cost.",
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

      <section className="border-b border-ink-950/8 bg-ink-950 py-16 text-white sm:py-20">
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Pricing"
            title="Roadside prices, published"
            description="Every service has a listed price. Where the total depends on your vehicle or the distance, the page says so, and dispatch confirms it when you request help."
            tone="light"
          />
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
