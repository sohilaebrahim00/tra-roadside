import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, LifeBuoy, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { PricePanel } from "@/components/city-service/price-panel";
import { ServiceCallSteps } from "@/components/ui/service-call-steps";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";
import { BUSINESS, SERVICE_AREAS } from "@/lib/content/business";
import { getService } from "@/lib/content/services";
import { fillPrices } from "@/lib/content/price-tokens";
import { feeTagFor, lowPrice, pricedTitle } from "@/lib/content/pricing";
import { PriceFigure } from "@/components/ui/price-figure";
import { TOPIC_PAGES, getTopicPage } from "@/lib/content/topic-pages";
import { env } from "@/lib/env";
import { pageUrls, shareImageFor } from "@/lib/seo";

/**
 * One topic page, rendered from src/lib/content/topic-pages.ts. All the copy is
 * in the data; every price comes from SERVICES through fillPrices() and the same
 * PricePanel the service pages use.
 */

export function generateStaticParams() {
  return TOPIC_PAGES.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopicPage(slug);
  const svc = topic && getService(topic.service);
  if (!topic || !svc) return {};
  const price = lowPrice(svc);
  return {
    title: { absolute: pricedTitle(topic.title, price) },
    description: fillPrices(topic.metaDescription),
    ...pageUrls(`/roadside/${topic.slug}`, shareImageFor(topic.service)),
  };
}

export default async function TopicPageRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const topic = getTopicPage(slug);
  const svc = topic && getService(topic.service);
  if (!topic || !svc) notFound();

  const path = `/roadside/${topic.slug}`;
  const faqs = topic.faqs.map((f) => ({ q: fillPrices(f.q), a: fillPrices(f.a) }));
  const also = topic.alsoServices.flatMap((s) => getService(s) ?? []);
  const cities = (topic.cities ?? []).flatMap((c) => SERVICE_AREAS.find((a) => a.slug === c) ?? []);

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: env.siteUrl },
          { name: "Services", url: `${env.siteUrl}/services` },
          { name: topic.h1, url: `${env.siteUrl}${path}` },
        ]}
      />
      <ServiceJsonLd name={topic.h1} description={fillPrices(topic.metaDescription)} path={path} service={svc} />
      {faqs.length > 0 && <FaqJsonLd items={faqs} />}

      <section className="relative isolate overflow-hidden border-b border-ink-950/8 bg-ink-950 py-14 text-white sm:py-20">
        <HeroBackdrop />
        <Container className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_minmax(0,26rem)] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-red-400">{topic.eyebrow}</p>
            <h1 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight sm:text-5xl">{topic.h1}</h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">{fillPrices(topic.intro)}</p>
            <p className="mt-4 font-display text-xl font-bold text-white">
              {svc.shortName} <PriceFigure svc={svc}>{lowPrice(svc)}</PriceFigure>
              {feeTagFor(svc) && <> {feeTagFor(svc)}</>}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={`/request?service=${svc.slug}`} size="lg" icon={<LifeBuoy className="h-4 w-4" aria-hidden="true" />}>
                Request {svc.shortName}
              </Button>
              <Button href={BUSINESS.phoneHref} variant="outline" size="lg" className="border-white/25 text-white hover:bg-white/10" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
                Call {BUSINESS.phoneDisplay}
              </Button>
            </div>
          </div>
          <PricePanel svc={svc} tone="light" />
        </Container>
      </section>

      <section className="py-14 sm:py-20">
        <Container size="narrow" className="max-w-3xl space-y-10">
          {topic.sections.map((section) => (
            <div key={section.heading}>
              <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-[1.75rem]">{section.heading}</h2>
              {section.paragraphs.map((p) => (
                <p key={p} className="mt-3 text-base leading-relaxed text-ink-700">
                  {fillPrices(p)}
                </p>
              ))}
              {section.list && (
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-base leading-relaxed text-ink-700">
                  {section.list.map((item) => (
                    <li key={item}>{fillPrices(item)}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Container>
      </section>

      <section className="border-t border-ink-950/8 bg-paper-50 py-14 sm:py-20">
        <Container size="narrow" className="max-w-4xl space-y-12">
          <ServiceCallSteps title="What happens after you call or send a request" />

          {faqs.length > 0 && (
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink-950 sm:text-[1.75rem]">Common questions</h2>
              <div className="mt-5 rounded-2xl border border-ink-950/8 bg-white px-5 sm:px-6">
                <FaqAccordion items={faqs.map((f, i) => ({ id: `${topic.slug}-${i}`, category: topic.eyebrow, question: f.q, answer: f.a }))} />
              </div>
            </div>
          )}

          {also.length > 0 && (
            <div>
              <h2 className="font-display text-xl font-semibold text-ink-950">Also available</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {also.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="flex items-center justify-between gap-3 rounded-xl border border-ink-950/10 bg-white px-4 py-3 text-sm font-semibold text-ink-900 hover:border-red-600/40">
                      <span>
                        {s.name} <PriceFigure svc={s} inLink className="font-normal text-ink-500">{lowPrice(s)}</PriceFigure>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {cities.length > 0 && (
            <div>
              <h2 className="font-display text-xl font-semibold text-ink-950">Nearby service areas</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {cities.map((c) => (
                  <li key={c.slug}>
                    <Link href={`/service-areas/${c.slug}`} className="inline-block rounded-full border border-ink-950/10 bg-white px-3.5 py-1.5 text-sm font-medium text-ink-800 hover:border-red-600/40">
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
