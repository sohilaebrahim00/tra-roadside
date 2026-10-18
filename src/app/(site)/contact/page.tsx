import type { Metadata } from "next";
import { pageUrls } from "@/lib/seo";
import { Phone, Mail, Clock, LifeBuoy, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ContactForm } from "@/components/contact/contact-form";
import { BUSINESS } from "@/lib/content/business";
import { env } from "@/lib/env";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact TRA — 24/7 roadside assistance dispatch for the Dallas–Fort Worth Metroplex.",
  ...pageUrls("/contact"),
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: env.siteUrl }, { name: "Contact", url: `${env.siteUrl}/contact` }]} />
      <section className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-2">
          <div>
            <h1 className="font-display text-3xl font-semibold text-ink-950 dark:text-white">Contact TRA</h1>
            <p className="mt-3 text-ink-600 dark:text-ink-200">
              Need help right now? Call dispatch directly — it&apos;s faster than a contact form for
              active roadside emergencies.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href={BUSINESS.phoneHref} size="lg" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
                {BUSINESS.phoneDisplay}
              </Button>
              <Button href="/request" variant="outline" size="lg" icon={<LifeBuoy className="h-4 w-4" aria-hidden="true" />}>
                Request Help Online
              </Button>
            </div>

            <div className="mt-8 space-y-3 text-sm text-ink-600 dark:text-ink-200">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-red-600" aria-hidden="true" /> {BUSINESS.email}</p>
              <p className="flex items-center gap-2"><Clock className="h-4 w-4 text-red-600" aria-hidden="true" /> {BUSINESS.hours}</p>
            </div>

            {/*
              A link to the Google listing, deliberately NOT an embedded map.
              TRA publishes no street address, and a pin on a map reads as a
              place you can drive to — which would contradict the LocalBusiness
              schema this site ships (geo + areaServed, no PostalAddress) and
              send customers to a location that does not exist.
            */}
            <div className="mt-6 rounded-2xl border border-ink-950/8 bg-paper-50 p-4 dark:border-white/10 dark:bg-white/5">
              <a
                href={BUSINESS.googleListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the TRA listing on Google (opens in a new tab)"
                className="flex items-center gap-2 text-sm font-semibold text-red-600 hover:text-red-700"
              >
                <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" /> Find TRA on Google
              </a>
              <p className="mt-2 text-xs leading-relaxed text-ink-500 dark:text-ink-300">
                {BUSINESS.serviceAreaNote}
              </p>
            </div>

            <p className="mt-8 text-sm text-ink-500 dark:text-ink-300">
              For non-urgent questions, feedback, or business inquiries, use the form and we&apos;ll
              respond as soon as possible.
            </p>
          </div>

          <div className="rounded-2xl border border-ink-950/8 bg-white p-6 dark:border-white/10 dark:bg-ink-900">
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
