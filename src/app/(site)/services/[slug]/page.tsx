import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, LifeBuoy, CheckCircle2, ClipboardList, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/seo/json-ld";
import { SERVICES, getService } from "@/lib/content/services";
import { SERVICE_ICONS } from "@/lib/content/service-icons";
import { BUSINESS, SERVICE_AREAS } from "@/lib/content/business";
import { env } from "@/lib/env";
import { CinematicBackgroundVideo } from "@/components/media/cinematic-background-video";
import { TruckVideoSection } from "@/components/media/truck-video-section";
import { getServiceVideo } from "@/data/media-registry";
import { PricingDisclaimer } from "@/components/ui/pricing-disclaimer";
import { ShieldCheck } from "lucide-react";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return {
    title: `${service.name} — 24/7 Roadside Assistance`,
    description: `${service.summary} Serving the Dallas–Fort Worth Metroplex, available 24/7. Request help online in under two minutes.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = SERVICE_ICONS[service.slug];
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);
  const faqItems = service.faqs.map((f, i) => ({ id: `${service.slug}-${i}`, category: service.name, question: f.q, answer: f.a }));

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: env.siteUrl },
          { name: "Services", url: `${env.siteUrl}/services` },
          { name: service.name, url: `${env.siteUrl}/services/${service.slug}` },
        ]}
      />
      <ServiceJsonLd name={service.name} description={service.summary} slug={service.slug} startingPrice={service.startingPrice} />
      {faqItems.length > 0 && <FaqJsonLd items={service.faqs} />}

      <section className="relative overflow-hidden border-b border-ink-950/8 bg-ink-950 py-14 text-white sm:py-20">
        <CinematicBackgroundVideo placement="service-detail-hero" video={getServiceVideo(service.slug)} overlay="strong" />
        <Container className="relative z-10 grid gap-8 lg:grid-cols-[auto_1fr] lg:items-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600/15 text-red-500">
            <Icon className="h-8 w-8" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-red-500">
              <Link href="/services" className="hover:underline">Services</Link> / {service.name}
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              {service.heroLine}
            </h1>

            {service.startingPrice && (
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-white/10 px-4 py-1.5 text-base font-bold text-white">
                  Starting at ${service.startingPrice}
                </span>
                {service.slug === "battery-replacement" && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90">
                    <ShieldCheck className="h-4 w-4 text-red-400" aria-hidden="true" /> 2-Year Warranty
                  </span>
                )}
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={`/request?service=${service.slug}`} size="lg" icon={<LifeBuoy className="h-4 w-4" aria-hidden="true" />}>
                Request {service.shortName}
              </Button>
              <Button href={BUSINESS.phoneHref} variant="outline" size="lg" className="border-white/25 text-white hover:bg-white/10" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
                Call Now
              </Button>
            </div>

            {service.startingPrice && <PricingDisclaimer tone="light" className="mt-5 max-w-md" />}
          </div>
        </Container>
      </section>

      {service.slug === "truck-assistance" && (
        <section className="py-14 sm:pb-0 sm:pt-20">
          <Container>
            <TruckVideoSection />
          </Container>
        </section>
      )}

      <section className="py-14 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">The problem</h2>
            <p className="mt-3 text-base leading-relaxed text-ink-600 dark:text-ink-200">{service.problem}</p>

            <h2 className="mt-10 font-display text-2xl font-semibold text-ink-950 dark:text-white">
              While you wait
            </h2>
            <ul className="mt-4 space-y-3">
              {service.whileYouWait.map((tip) => (
                <li key={tip} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
                  <span className="text-ink-700 dark:text-ink-200">{tip}</span>
                </li>
              ))}
            </ul>

            {faqItems.length > 0 && (
              <>
                <h2 className="mt-10 font-display text-2xl font-semibold text-ink-950 dark:text-white">
                  {service.name} FAQs
                </h2>
                <div className="mt-4 rounded-2xl border border-ink-950/8 px-6 dark:border-white/10">
                  <FaqAccordion items={faqItems} />
                </div>
              </>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-ink-950/8 bg-paper-50 p-6 dark:border-white/10 dark:bg-ink-900">
              <h3 className="flex items-center gap-2 font-display text-base font-semibold text-ink-950 dark:text-white">
                <ClipboardList className="h-4.5 w-4.5 text-red-600" aria-hidden="true" /> What we&apos;ll need
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-600 dark:text-ink-200">
                {service.whatWeNeed.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-red-600">–</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-ink-950/8 p-6 dark:border-white/10">
              <h3 className="font-display text-base font-semibold text-ink-950 dark:text-white">Service area</h3>
              <p className="mt-2 text-sm text-ink-600 dark:text-ink-200">
                Available across {SERVICE_AREAS.length} DFW-area cities including Dallas, Arlington,
                Plano, and Frisco.
              </p>
              <Link href="/service-areas" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-red-600 hover:text-red-700">
                View full coverage map <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </Link>
            </div>

            <div className="rounded-2xl bg-red-600 p-6 text-white">
              <h3 className="font-display text-base font-semibold">Need this now?</h3>
              <p className="mt-2 text-sm text-white/85">Requesting help takes under two minutes.</p>
              <Button href={`/request?service=${service.slug}`} variant="dark" size="md" fullWidth className="mt-4">
                Request Help
              </Button>
            </div>
          </aside>
        </Container>
      </section>

      <section className="border-t border-ink-950/8 bg-paper-50 py-14 sm:py-20 dark:border-white/10">
        <Container>
          <h2 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">Related services</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {related.map((r) => {
              const RIcon = SERVICE_ICONS[r.slug];
              return (
                <Link
                  key={r.slug}
                  href={`/services/${r.slug}`}
                  className="group rounded-2xl border border-ink-950/8 bg-white p-5 hover:border-red-600/30 hover:shadow-md dark:border-white/10 dark:bg-ink-900"
                >
                  <RIcon className="h-5 w-5 text-red-600" aria-hidden="true" />
                  <h3 className="mt-3 font-display text-base font-semibold text-ink-950 dark:text-white">{r.name}</h3>
                  <p className="mt-1 text-sm text-ink-600 dark:text-ink-200">{r.summary}</p>
                </Link>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
