import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, LifeBuoy, MapPin, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";
import { PricingDisclaimer } from "@/components/ui/pricing-disclaimer";
import { BUSINESS, getServiceArea, nearbyAreas } from "@/lib/content/business";
import { getService } from "@/lib/content/services";
import { getLocalArea } from "@/lib/content/local-data";
import { SERVICE_ICONS } from "@/lib/content/service-icons";
import { cityServicePairs, getCityServicePage, servicesForCity } from "@/lib/content/city-service-pages";
import { env } from "@/lib/env";

/**
 * City x Service landing pages, nested under the existing city hubs so no
 * indexed URL changes and the hierarchy stays city -> service.
 *
 * Only pairs with authored content in city-service-pages.ts exist. There is no
 * automatic city x service expansion: a page with no written content would be
 * a doorway page, and generating 135 of them from a template is precisely what
 * this architecture is meant to avoid.
 *
 * Every geographic statement rendered here comes from local-data.ts. Prices
 * come from SERVICES. Neither is duplicated into the editorial content.
 */

export function generateStaticParams() {
  return cityServicePairs().map((p) => ({ slug: p.city, service: p.service }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}): Promise<Metadata> {
  const { slug, service } = await params;
  const content = getCityServicePage(slug, service);
  if (!content) return {};
  const url = `/service-areas/${slug}/${service}`;
  return {
    title: content.title,
    description: content.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: content.title,
      description: content.metaDescription,
      url,
      type: "website",
    },
  };
}

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ slug: string; service: string }>;
}) {
  const { slug, service } = await params;
  const content = getCityServicePage(slug, service);
  const city = getServiceArea(slug);
  const svc = getService(service);
  const local = getLocalArea(slug);
  if (!content || !city || !svc || !local) notFound();

  const Icon = SERVICE_ICONS[svc.slug];
  const nearby = nearbyAreas(city.slug, 4);
  const siblings = servicesForCity(city.slug).filter((p) => p.service !== service);
  const base = `${env.siteUrl}`;
  const faqItems = content.faqs.map((f, i) => ({
    id: `${city.slug}-${svc.slug}-${i}`,
    category: `${svc.name} — ${city.name}`,
    question: f.q,
    answer: f.a,
  }));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: base },
          { name: "Service Areas", url: `${base}/service-areas` },
          { name: city.name, url: `${base}/service-areas/${city.slug}` },
          { name: svc.name, url: `${base}/service-areas/${city.slug}/${svc.slug}` },
        ]}
      />
      <ServiceJsonLd
        name={`${svc.name} in ${city.name}, TX`}
        description={content.metaDescription}
        slug={`${city.slug}/${svc.slug}`}
        priceFrom={svc.priceFrom}
      />
      <FaqJsonLd items={content.faqs} />

      {/* ---------------- Hero ---------------- */}
      <section className="border-b border-ink-950/8 bg-ink-950 py-14 text-white sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-red-500">
            <Link href="/service-areas" className="hover:underline">Service Areas</Link>
            {" / "}
            <Link href={`/service-areas/${city.slug}`} className="hover:underline">{city.name}</Link>
            {" / "}
            {svc.shortName}
          </p>
          <div className="mt-4 flex items-start gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600/15 text-red-500">
              <Icon className="h-7 w-7" aria-hidden="true" />
            </span>
            <h1 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              {content.h1}
            </h1>
          </div>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">{content.intro}</p>

          {svc.priceLines && (
            <div className="mt-6 max-w-lg rounded-2xl bg-white/10 p-4">
              <ul className="space-y-2">
                {svc.priceLines.map((line) => (
                  <li key={line.label ?? line.amount} className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                    <span className="font-display text-xl font-bold text-white">{line.amount}</span>
                    {line.label && <span className="text-sm font-semibold text-white/90">{line.label}</span>}
                    {line.note && <span className="text-sm text-white/70">{line.note}</span>}
                  </li>
                ))}
              </ul>
              {svc.priceNote && <p className="mt-3 text-sm text-white/70">{svc.priceNote}</p>}
            </div>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={`/request?service=${svc.slug}`} size="lg" icon={<LifeBuoy className="h-4 w-4" aria-hidden="true" />}>
              Request {svc.shortName}
            </Button>
            <Button
              href={BUSINESS.phoneHref}
              variant="outline"
              size="lg"
              className="border-white/25 text-white hover:bg-white/10"
              icon={<Phone className="h-4 w-4" aria-hidden="true" />}
            >
              Call {BUSINESS.phoneDisplay}
            </Button>
          </div>

          {svc.priceLines && <PricingDisclaimer tone="light" className="mt-5 max-w-md" />}
        </Container>
      </section>

      {/* ---------------- Body ---------------- */}
      <section className="py-14 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">
              When drivers in {city.name} call us for this
            </h2>
            <ul className="mt-4 space-y-3">
              {content.scenarios.map((s) => (
                <li key={s} className="flex gap-3 text-base leading-relaxed text-ink-600 dark:text-ink-200">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                  {s}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-2xl font-semibold text-ink-950 dark:text-white">
              {svc.shortName} across {city.name}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-600 dark:text-ink-200">{content.localContext}</p>


            <h2 className="mt-10 font-display text-2xl font-semibold text-ink-950 dark:text-white">
              What we need from you
            </h2>
            <ul className="mt-4 space-y-2">
              {svc.whatWeNeed.map((w) => (
                <li key={w} className="flex gap-3 text-base text-ink-600 dark:text-ink-200">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-red-600" aria-hidden="true" />
                  {w}
                </li>
              ))}
            </ul>

            <h2 className="mt-10 font-display text-2xl font-semibold text-ink-950 dark:text-white">
              {svc.shortName} in {city.name} — common questions
            </h2>
            <div className="mt-4">
              <FaqAccordion items={faqItems} />
            </div>
          </div>

          {/* ---------------- Sidebar ---------------- */}
          <aside className="space-y-6">
            <div className="rounded-2xl bg-red-600 p-6 text-white">
              <h3 className="font-display text-base font-semibold">Need help in {city.name} now?</h3>
              <p className="mt-2 text-sm text-white/85">
                Share your exact location and we&apos;ll dispatch the nearest driver.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Button href={`/request?service=${svc.slug}`} size="md" className="bg-white text-red-600 shadow-none hover:bg-white/90">
                  Request Help Online
                </Button>
                <Button href={BUSINESS.phoneHref} variant="outline" size="md" className="border-white/40 text-white hover:bg-white/10">
                  {BUSINESS.phoneDisplay}
                </Button>
              </div>
            </div>

            {/* Highways and districts come strictly from local-data.ts. */}
            {local.corridors.length > 0 && (
              <div className="rounded-2xl border border-ink-950/8 bg-paper-50 p-6 dark:border-white/10 dark:bg-ink-900">
                <h3 className="font-display text-base font-semibold text-ink-950 dark:text-white">
                  Roads we cover in {city.name}
                </h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-200">{local.corridors.join(" · ")}</p>
                {local.districts.length > 0 && (
                  <>
                    <h3 className="mt-4 font-display text-base font-semibold text-ink-950 dark:text-white">Areas</h3>
                    <p className="mt-2 text-sm text-ink-600 dark:text-ink-200">{local.districts.join(" · ")}</p>
                  </>
                )}
              </div>
            )}

            {siblings.length > 0 && (
              <div className="rounded-2xl border border-ink-950/8 bg-paper-50 p-6 dark:border-white/10 dark:bg-ink-900">
                <h3 className="font-display text-base font-semibold text-ink-950 dark:text-white">
                  Other services in {city.name}
                </h3>
                <ul className="mt-3 space-y-2">
                  {siblings.map((s) => {
                    const sv = getService(s.service);
                    if (!sv) return null;
                    return (
                      <li key={s.service}>
                        <Link
                          href={`/service-areas/${city.slug}/${s.service}`}
                          className="text-sm text-ink-600 hover:text-red-600 dark:text-ink-200"
                        >
                          {sv.shortName} in {city.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {nearby.length > 0 && (
              <div className="rounded-2xl border border-ink-950/8 bg-paper-50 p-6 dark:border-white/10 dark:bg-ink-900">
                <h3 className="font-display text-base font-semibold text-ink-950 dark:text-white">Nearby areas</h3>
                <ul className="mt-3 space-y-2">
                  {nearby.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/service-areas/${c.slug}`} className="text-sm text-ink-600 hover:text-red-600 dark:text-ink-200">
                        {c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="rounded-2xl border border-ink-950/8 bg-paper-50 p-6 dark:border-white/10 dark:bg-ink-900">
              <h3 className="font-display text-base font-semibold text-ink-950 dark:text-white">More about this service</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <Link href={`/services/${svc.slug}`} className="text-sm text-ink-600 hover:text-red-600 dark:text-ink-200">
                    {svc.name} — full service details
                  </Link>
                </li>
                <li>
                  <Link href={`/service-areas/${city.slug}`} className="flex items-center gap-1.5 text-sm text-ink-600 hover:text-red-600 dark:text-ink-200">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> All services in {city.name}
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
