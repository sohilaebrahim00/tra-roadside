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
import { DISPATCH_FEE_EXPLAINER, DISPATCH_FEE_HEADLINE, DISPATCH_FEE_USD, exampleTotal, headlineLine, lowPrice, pricedTitle, servicePrice, startingPrice } from "@/lib/content/pricing";
import { PriceFigure } from "@/components/ui/price-figure";
import { pricesShort, pricingAnswer, roadsideFaqs } from "@/lib/content/quick-answers";
import { fitDescription } from "@/lib/seo";
import { QuickAnswer } from "@/components/ui/quick-answer";
import { ServiceCallSteps } from "@/components/ui/service-call-steps";
import { BUSINESS, SERVICE_AREAS } from "@/lib/content/business";
import { batteryReview } from "@/lib/content/google-reviews";
import { guidesForService } from "@/lib/content/guides";
import { env } from "@/lib/env";
import { pageUrls, shareImageFor } from "@/lib/seo";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";
import { heroPhoto } from "@/lib/content/hero-photos";

/**
 * Every published price on one page. Nothing here is typed in: each figure,
 * label and qualifier renders from SERVICES through the same PricePanel the
 * service pages use, so this page cannot disagree with them.
 *
 * Battery replacement leads, because it is the business's main earner. Every
 * price is a service price, plus the dispatch fee once per job (owner's pricing
 * brief, 2026-11-03). The battery price is shown without the fee beside it
 * (owner, 2026-11-07); this page's fee questions still say the fee applies to
 * it, since this is where fees are explained.
 */

const battery = getService("battery-replacement");

export const metadata: Metadata = {
  title: { absolute: pricedTitle("Roadside Assistance Prices Dallas", startingPrice()) },
  description: fitDescription(`Roadside prices across DFW: ${pricesShort()}.`, ["No membership.", `Call ${BUSINESS.phoneDisplay}.`]),
  ...pageUrls("/pricing", shareImageFor("battery-replacement")),
};

const tire = getService("tire-replacement");
const SERVICE_COUNT = SERVICE_AREAS.length;

/** Real job photos beside the price of the service they show. */
const WORK = [
  { slug: "flat-tire-change", src: "/images/tire-spare-lot.webp", w: 1200, h: 800, alt: "A compact spare, floor jack and impact wrench laid out beside a gray sedan in a parking lot." },
  { slug: "battery-replacement", src: "/images/jobs/battery-tesla-frunk.webp", w: 1200, h: 900, alt: "A red Tesla with its front trunk open and a 12-volt battery set down on the ground beside it." },
  { slug: "tire-repair-plug-patch", src: "/images/jobs/tire-plug-pliers.webp", w: 900, h: 1200, alt: "A plug being pressed into a puncture in the tread of a tire with pliers." },
  { slug: "rim-lock-removal", src: "/images/jobs/impact-wrench-sockets.webp", w: 768, h: 512, alt: "An impact wrench and a row of sockets laid out for removing stuck lug nuts." },
] as const;
/**
 * The photo on each price card. A service's own first photo, except where two
 * cards would show the same picture: those take another photo of the same work.
 */
const CARD_PHOTO: Partial<Record<Parameters<typeof getService>[0], { src: string; w: number; h: number; alt: string }>> = {
  "tire-repair-plug-patch": { src: "/images/jobs/tire-plug-pliers.webp", w: 900, h: 1200, alt: "A plug being pressed into a puncture in the tread of a tire with pliers." },
  "flat-tire-change": { src: "/images/jobs/spare-change-black-sedan.webp", w: 900, h: 1200, alt: "A black sedan raised on a floor jack, its flat front tire still on and the spare lying on the ground beside it." },
  "stripped-lug-nut-removal": { src: "/images/tire-spare-lugs.webp", w: 1200, h: 800, alt: "A gloved hand running a cordless impact wrench on the lug nuts of a steel spare wheel." },
};
const cardPhoto = (svc: NonNullable<ReturnType<typeof getService>>) => {
  const own = CARD_PHOTO[svc.slug];
  if (own) return own;
  const p = svc.photos?.[0];
  return p ? { src: p.src, w: p.width, h: p.height, alt: p.alt } : undefined;
};
const jumpStart = getService("jump-start");
const priceOf = (slug: Parameters<typeof getService>[0]) => {
  const svc = getService(slug);
  const line = svc && headlineLine(svc);
  return line ? servicePrice(line) : "";
};

const ROADSIDE = roadsideFaqs();
const shared = (...ids: string[]) => ROADSIDE.filter((f) => ids.includes(f.id)).map((f) => ({ q: f.question, a: f.answer }));

const FAQS = [
  {
    q: `What is the ${DISPATCH_FEE_USD} dispatch fee?`,
    a: `${DISPATCH_FEE_EXPLAINER} It is added to the service price, never charged twice on one job, and never the whole cost of the service. For example: ${jumpStart && headlineLine(jumpStart) ? exampleTotal("a jump start", headlineLine(jumpStart)!) : ""}.`,
  },
  ...shared("roadside-tow", "roadside-membership"),
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
    q: "What payment do you take?",
    a: "In cash, to the technician. Dispatch confirms the total before a driver is sent, so you know the amount to have ready.",
  },
  {
    q: "Is the price the same in every city you serve?",
    a: `Yes. The prices on this page apply in all ${SERVICE_COUNT} Dallas–Fort Worth cities we serve, with the same ${DISPATCH_FEE_USD} dispatch fee once per job.`,
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
        <HeroBackdrop photo={heroPhoto("/pricing")} />
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
            <p className="mt-2 text-sm leading-relaxed text-white/80">{DISPATCH_FEE_EXPLAINER}</p>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {SERVICES.filter((svc) => lowPrice(svc)).map((svc) => (
                <li key={svc.slug} className="rounded-xl bg-white/[0.07] px-3 py-2.5">
                  <span className="block text-xs text-white/70">{svc.shortName}</span>
                  <PriceFigure svc={svc} className="mt-0.5 block font-display text-lg font-bold text-white">{lowPrice(svc)}</PriceFigure>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <QuickAnswer content={pricingAnswer()} framed />

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
            {rest.map((svc) => {
              const photo = cardPhoto(svc);
              return (
              <li key={svc.slug} className="flex flex-col overflow-hidden rounded-2xl border border-ink-950/10 bg-white">
                {photo && (
                  <Image src={photo.src} alt={photo.alt} width={photo.w} height={photo.h} sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw" className="aspect-[16/10] w-full object-cover" />
                )}
                <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-ink-950">{svc.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{svc.summary}</p>
                {svc.priceCovers && (
                  <p className="mt-2 text-sm leading-relaxed text-ink-700">
                    <span className="font-semibold text-ink-950">The price covers:</span> {svc.priceCovers}
                  </p>
                )}
                <PricePanel svc={svc} tone="dark" className="mt-5 flex-1" />
                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <Button href={`/request?service=${svc.slug}`} size="sm">
                    Request
                  </Button>
                  <Link href={`/services/${svc.slug}`} className="inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:text-red-700">
                    Details <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
                </div>
              </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="border-t border-ink-950/8 bg-paper-50 py-14 sm:py-20" aria-labelledby="work-prices">
        <Container>
          <h2 id="work-prices" className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
            The work behind the prices
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-600">
            Photos from our own jobs, each beside the published price of the service it shows.
          </p>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WORK.map((w) => {
              const svc = getService(w.slug);
              const line = svc && headlineLine(svc);
              if (!svc || !line) return null;
              return (
                <li key={w.slug} className="overflow-hidden rounded-2xl border border-ink-950/10 bg-white">
                  <figure>
                    <Image src={w.src} alt={w.alt} width={w.w} height={w.h} sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw" className="aspect-[4/3] w-full object-cover" />
                    <figcaption className="p-4">
                      <Link href={`/services/${svc.slug}`} className="font-display text-lg font-semibold text-ink-950 hover:text-red-600">
                        {svc.name}
                      </Link>
                      <p className="mt-1 text-sm font-semibold text-red-600">{servicePrice(line)}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-600">{w.alt}</p>
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="border-t border-ink-950/8 py-14 sm:py-20">
        <Container size="narrow" className="max-w-4xl">
          <ServiceCallSteps title="What happens after you call or send a request" />
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
