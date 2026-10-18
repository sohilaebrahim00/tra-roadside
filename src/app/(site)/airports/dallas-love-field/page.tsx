import type { Metadata } from "next";
import Link from "next/link";
import { Phone, LifeBuoy, MapPin, PlaneLanding, AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { BreadcrumbJsonLd, FaqJsonLd } from "@/components/seo/json-ld";
import { PricingDisclaimer } from "@/components/ui/pricing-disclaimer";
import { BUSINESS, getServiceArea } from "@/lib/content/business";
import { getService } from "@/lib/content/services";
import { getLocalArea } from "@/lib/content/local-data";
import { SERVICE_ICONS } from "@/lib/content/service-icons";
import { env } from "@/lib/env";

/**
 * Dallas Love Field — a LOCATION hub, not a service page.
 *
 * The search intent here is location-led: someone types "Dallas Love Field
 * roadside assistance" because the location is what they know, not because
 * they have diagnosed the fault. So this page's job is to sort the symptom and
 * route to the right Dallas City x Service page, NOT to re-sell any one
 * service. That is why there is no Service/Offer schema: the page spans four
 * services and an Offer would have to pick one price arbitrarily.
 *
 * Two hard rules:
 *   1. Geography comes only from local-data.ts. Love Field's verified fact is
 *      that it lies inside Dallas city limits, northwest near Bachman Lake.
 *      No terminal names, parking operators, garage levels or shuttle details
 *      are invented here.
 *   2. TRA holds no airport access, authorization, partnership or preferred-
 *      vendor status, and says so plainly. This mirrors the approach already
 *      used on the Irving, Euless, Grapevine, Coppell, Addison, McKinney and
 *      Grand Prairie pages.
 *
 * Prices are rendered from SERVICES via priceBadge, never written into prose.
 */

const PATH = "/airports/dallas-love-field";

export const metadata: Metadata = {
  title: "Dallas Love Field Roadside Assistance",
  description:
    "Car won't start at Dallas Love Field? TRA covers Love Field as part of Dallas — jump starts, batteries, lockouts and flat tires. Tell us where it's parked.",
  alternates: { canonical: PATH },
  openGraph: {
    title: "Dallas Love Field Roadside Assistance",
    description:
      "Car won't start at Dallas Love Field? TRA covers Love Field as part of Dallas — jump starts, batteries, lockouts and flat tires.",
    url: PATH,
    type: "website",
  },
};

/**
 * The routing table. Each entry pairs the symptom a returning traveler can
 * actually observe with the Dallas page that answers it. Order is deliberate:
 * a car that has sat for days fails at the battery far more often than
 * anything else.
 */
const ROUTES = [
  {
    service: "jump-start",
    symptom: "It cranks slowly, clicks, or does nothing at all",
    body: "The most common outcome by a wide margin. A car left for a few days with anything drawing current comes back dead. If the battery is otherwise sound, a jump start is enough to get you out of the parking structure and home.",
  },
  {
    service: "battery-replacement",
    symptom: "It has already been jumped once on this trip",
    body: "A battery that needed help once and died again has stopped holding charge, and jumping it a second time only moves the problem to the drive home. We bring the replacement to the car and install it where it sits.",
  },
  {
    service: "lockout",
    symptom: "The keys are inside, or the fob has gone dead",
    body: "Fob batteries fail while a car sits, which is why this is the second most common Love Field call. Entry is non-destructive wherever the vehicle allows it, and you will be asked to show the car is yours before it is opened.",
  },
  {
    service: "flat-tire-change",
    symptom: "A tire has gone down while the car was parked",
    body: "Tires lose air slowly, and a week is long enough for a small puncture to finish the job. If there is a serviceable spare in the vehicle, it can be put on where the car is parked.",
  },
] as const;

const FAQS = [
  {
    q: "Can you reach my car in Love Field parking?",
    a: "Give dispatch the parking operator, the lot and the level when you call. We hold no special standing at the airport and cannot enter restricted areas, so dispatch will tell you honestly whether a driver can get to that particular spot or whether it is quicker to meet them somewhere they can.",
  },
  {
    q: "I have been away a week and the car is dead. What do I actually need?",
    a: "Almost always the battery. If this is the first time it has failed on the trip, start with a jump start. If it has already been jumped once and died again, go straight to a replacement — the second failure is the battery telling you it is finished.",
  },
  {
    q: "Does it cost more because the car is at the airport?",
    a: "The published rates are the same as anywhere else we cover in Dallas. What the final figure depends on is your vehicle and exactly where it is parked, and dispatch confirms that with you before a driver is sent.",
  },
  {
    q: "My flight lands late. Is anyone working?",
    a: "Dispatch is staffed around the clock, so a late arrival is not a problem in itself. What affects how long you wait is where the car is parked and how easily a driver can reach it — dispatch will give you a realistic answer rather than an optimistic one.",
  },
];

export default function DallasLoveFieldPage() {
  const dallas = getServiceArea("dallas");
  const local = getLocalArea("dallas");
  const base = env.siteUrl;

  const faqItems = FAQS.map((f, i) => ({
    id: `love-field-${i}`,
    category: "Dallas Love Field",
    question: f.q,
    answer: f.a,
  }));

  return (
    <>
      {/*
        Breadcrumb follows the site hierarchy rather than the URL path: there is
        no /airports index page, so pointing at one would emit a crumb that
        404s. Dallas is the true parent — Love Field sits inside its limits.
      */}
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: base },
          { name: "Service Areas", url: `${base}/service-areas` },
          { name: "Dallas", url: `${base}/service-areas/dallas` },
          { name: "Dallas Love Field", url: `${base}${PATH}` },
        ]}
      />
      <FaqJsonLd items={FAQS} />

      {/* ---------------- Hero ---------------- */}
      <section className="border-b border-ink-950/8 bg-ink-950 py-14 text-white sm:py-20">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-red-400">
            <Link href="/service-areas" className="hover:underline">Service Areas</Link>
            {" / "}
            <Link href="/service-areas/dallas" className="hover:underline">Dallas</Link>
            {" / "}
            Love Field
          </p>
          <div className="mt-4 flex items-start gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-600/15 text-red-500">
              <PlaneLanding className="h-7 w-7" aria-hidden="true" />
            </span>
            <h1 className="font-display text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              Roadside Assistance at Dallas Love Field
            </h1>
          </div>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">
            Coming back to a car that will not start is the ordinary ending to a trip, and it
            happens at Love Field more than most places simply because every vehicle there has
            been sitting still for days. Love Field lies inside Dallas city limits, so it falls
            under the same coverage as the rest of the city. Tell us what the car is doing and
            where it is parked, and we will send the right help rather than the nearest guess.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href="/request" size="lg" icon={<LifeBuoy className="h-4 w-4" aria-hidden="true" />}>
              Request Help Online
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
        </Container>
      </section>

      {/* ---------------- Body ---------------- */}
      <section className="py-14 sm:py-20">
        <Container className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            {/* The hub's real job: sort the symptom, then hand off. */}
            <h2 className="font-display text-2xl font-semibold text-ink-950 dark:text-white">
              Work out what you need, then go straight to it
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-600 dark:text-ink-200">
              You do not have to diagnose anything to call us. But if you can tell dispatch which
              of these it looks like, the right driver and the right equipment are sent first time.
            </p>

            <div className="mt-6 space-y-4">
              {ROUTES.map(({ service, symptom, body }) => {
                const svc = getService(service);
                if (!svc) return null;
                const Icon = SERVICE_ICONS[svc.slug];
                return (
                  <Link
                    key={service}
                    href={`/service-areas/dallas/${service}`}
                    className="block rounded-2xl border border-ink-950/8 bg-white p-5 transition-colors hover:border-red-600/30 dark:border-white/10 dark:bg-ink-900"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-600/10 text-red-600">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-display text-base font-semibold text-ink-950 dark:text-white">
                          {symptom}
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-600 dark:text-ink-200">{body}</p>
                        <p className="mt-2.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                          <span className="font-semibold text-red-600">
                            {svc.shortName} in Dallas
                          </span>
                          {svc.priceBadge && (
                            <span className="text-ink-500 dark:text-ink-300">{svc.priceBadge}</span>
                          )}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <PricingDisclaimer className="mt-5 max-w-md" />

            {/* The integrity section. This is the part that must never drift. */}
            <h2 className="mt-10 font-display text-2xl font-semibold text-ink-950 dark:text-white">
              What we can and cannot do on airport property
            </h2>
            <div className="mt-4 flex gap-3 rounded-2xl border border-amber-500/30 bg-amber-50/60 p-5 dark:border-amber-400/20 dark:bg-amber-950/20">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" aria-hidden="true" />
              <div className="space-y-3 text-base leading-relaxed text-ink-700 dark:text-ink-200">
                <p>
                  TRA is an independent roadside assistance company. We are not an airport vendor,
                  we hold no authorization, permit or partnership with Love Field, and we cannot
                  enter restricted areas. Anyone who tells you otherwise is overselling it.
                </p>
                <p>
                  In practice that rarely stops us, because the places travelers park are reachable
                  like any other parking in Dallas. What it does mean is that dispatch needs to know
                  exactly where the vehicle is parked — the operator, the lot, the level — and
                  will tell you plainly if a driver cannot get to that spot.
                </p>
              </div>
            </div>

            <h2 className="mt-10 font-display text-2xl font-semibold text-ink-950 dark:text-white">
              Where Love Field sits
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink-600 dark:text-ink-200">
              Love Field lies inside the city of Dallas, to the northwest near Bachman Lake. That
              matters for one practical reason: it is not a separate service area with separate
              terms, but part of the Dallas coverage our drivers already work every day.
            </p>

            <h2 className="mt-10 font-display text-2xl font-semibold text-ink-950 dark:text-white">
              Love Field — common questions
            </h2>
            <div className="mt-4">
              <FaqAccordion items={faqItems} />
            </div>
          </div>

          {/* ---------------- Sidebar ---------------- */}
          <aside className="space-y-6">
            <div className="rounded-2xl bg-red-600 p-6 text-white">
              <h3 className="font-display text-base font-semibold">Standing at the car right now?</h3>
              <p className="mt-2 text-sm text-white/85">
                Tell us the operator, lot and level, and we&apos;ll dispatch the nearest driver who
                can reach it.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Button href="/request" size="md" className="bg-white text-red-600 shadow-none hover:bg-white/90">
                  Request Help Online
                </Button>
                <Button href={BUSINESS.phoneHref} variant="outline" size="md" className="border-white/40 text-white hover:bg-white/10">
                  {BUSINESS.phoneDisplay}
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-ink-950/8 bg-paper-50 p-6 dark:border-white/10 dark:bg-ink-900">
              <h3 className="font-display text-base font-semibold text-ink-950 dark:text-white">
                Dallas services in full
              </h3>
              <ul className="mt-3 space-y-2">
                {ROUTES.map(({ service }) => {
                  const svc = getService(service);
                  if (!svc) return null;
                  return (
                    <li key={service}>
                      <Link
                        href={`/service-areas/dallas/${service}`}
                        className="text-sm text-ink-600 hover:text-red-600 dark:text-ink-200"
                      >
                        {svc.shortName} in Dallas
                      </Link>
                    </li>
                  );
                })}
                <li>
                  <Link
                    href="/service-areas/dallas"
                    className="flex items-center gap-1.5 text-sm text-ink-600 hover:text-red-600 dark:text-ink-200"
                  >
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> All services in{" "}
                    {dallas?.name ?? "Dallas"}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Corridors come from local-data.ts, unmodified. */}
            {local && local.corridors.length > 0 && (
              <div className="rounded-2xl border border-ink-950/8 bg-paper-50 p-6 dark:border-white/10 dark:bg-ink-900">
                <h3 className="font-display text-base font-semibold text-ink-950 dark:text-white">
                  Roads we cover in Dallas
                </h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-200">{local.corridors.join(" · ")}</p>
              </div>
            )}
          </aside>
        </Container>
      </section>
    </>
  );
}
