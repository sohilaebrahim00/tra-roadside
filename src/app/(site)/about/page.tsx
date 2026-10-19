import type { Metadata } from "next";
import { pageUrls } from "@/lib/seo";
import { ShieldCheck, MapPinned, Clock, Receipt, Phone, LifeBuoy } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS, SERVICE_AREAS } from "@/lib/content/business";
import { env } from "@/lib/env";
import { AboutStorySection } from "@/components/about/about-story-section";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";

export const metadata: Metadata = {
  title: "About TRA",
  description: "TRA is a Dallas–Fort Worth based roadside assistance company providing 24/7 towing, jump starts, tire service, and more with live driver tracking.",
  ...pageUrls("/about"),
};

const POINTS = [
  { icon: MapPinned, title: "Local dispatch", body: "Requests are handled by dispatch based in the Dallas–Fort Worth area, not routed through an out-of-state call center." },
  { icon: ShieldCheck, title: "Licensed & insured", body: "TRA operates fully licensed and insured for towing and roadside assistance work in Texas." },
  { icon: Clock, title: "Always on", body: "Dispatch runs 24 hours a day, 365 days a year — breakdowns don't wait for business hours, and neither do we." },
  { icon: Receipt, title: "Upfront pricing", body: "Pricing is confirmed with you before a driver is dispatched, with no surprise fees added afterward." },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: env.siteUrl }, { name: "About", url: `${env.siteUrl}/about` }]} />
      <section className="relative isolate overflow-hidden border-b border-ink-950/8 bg-ink-950 py-16 text-white sm:py-20">
        <HeroBackdrop />
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="About TRA"
            title="Roadside assistance built for the DFW Metroplex"
            description={`${BUSINESS.legalName} provides 24/7 emergency roadside assistance across ${SERVICE_AREAS.length} cities in the Dallas–Fort Worth area — towing, jump starts, flat tire changes, fuel delivery, lockouts, and more.`}
            tone="light"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-2">
          {POINTS.map((p) => (
            <div key={p.title} className="flex gap-4 rounded-2xl border border-ink-950/8 bg-white p-6 dark:border-white/10 dark:bg-ink-900">
              <p.icon className="h-6 w-6 shrink-0 text-red-600" aria-hidden="true" />
              <div>
                <h2 className="font-display text-lg font-semibold text-ink-950 dark:text-white">{p.title}</h2>
                <p className="mt-1.5 text-sm text-ink-600 dark:text-ink-200">{p.body}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>

      <AboutStorySection />

      <section className="border-t border-ink-950/8 bg-white py-16 text-center">
        <Container size="narrow">
          <h2 className="font-display text-2xl font-semibold text-ink-950">Need help right now?</h2>
          <p className="mt-2 text-ink-600 dark:text-ink-200">Request online or call dispatch directly — both take under two minutes.</p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/request" size="lg" icon={<LifeBuoy className="h-4 w-4" aria-hidden="true" />}>Request Help</Button>
            <Button href={BUSINESS.phoneHref} variant="outline" size="lg" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
              {BUSINESS.phoneDisplay}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
