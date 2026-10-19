import type { Metadata } from "next";
import { pageUrls } from "@/lib/seo";
import { Phone, Mail, Clock, LifeBuoy, MapPin, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Icon3D } from "@/components/ui/icon-3d";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ContactForm } from "@/components/contact/contact-form";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";
import { BUSINESS, addressLine } from "@/lib/content/business";
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

      <section className="relative isolate overflow-hidden border-b border-ink-950/8 bg-ink-950 py-14 text-white sm:py-20">
        <HeroBackdrop />
        <Container>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-400">Contact</p>
          <h1 className="mt-3 font-display text-4xl font-bold uppercase tracking-tight sm:text-5xl">Contact TRA</h1>
          <p className="mt-4 max-w-xl text-white/75">
            Need help right now? Call dispatch directly — it&apos;s faster than a contact form for active
            roadside emergencies.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button href={BUSINESS.phoneHref} size="lg" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
              {BUSINESS.phoneDisplay}
            </Button>
            <Button
              href="/request"
              variant="outline"
              size="lg"
              className="border-white/25 text-white hover:bg-white/10"
              icon={<LifeBuoy className="h-4 w-4" aria-hidden="true" />}
            >
              Request Help Online
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-paper-50 py-12 sm:py-20 dark:bg-ink-950">
        <Container className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          <div className="space-y-4">
            <ul className="divide-y divide-ink-950/8 overflow-hidden rounded-3xl border border-ink-950/8 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-ink-900">
              <li className="flex items-center gap-4 p-5">
                <Icon3D icon={Phone} size="sm" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-300">Dispatch, 24/7</p>
                  <a href={BUSINESS.phoneHref} className="font-display text-xl font-semibold text-ink-950 hover:text-red-600 dark:text-white">
                    {BUSINESS.phoneDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 p-5">
                <Icon3D icon={Mail} size="sm" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-300">Email</p>
                  <a href={`mailto:${BUSINESS.email}`} className="break-all font-medium text-ink-950 hover:text-red-600 dark:text-white">
                    {BUSINESS.email}
                  </a>
                </div>
              </li>
              {/*
                The full street address as plain text, exactly as on the Google
                Business Profile (owner's decision, 2026-10-19), so the name,
                address and phone here match the listing and the LocalBusiness
                schema. Text, not a link: it is the address itself that search
                engines read and compare.
              */}
              <li className="flex items-center gap-4 p-5">
                <Icon3D icon={MapPin} size="sm" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-300">Address</p>
                  <address className="font-medium not-italic text-ink-950 dark:text-white">
                    {BUSINESS.legalName}
                    <br />
                    {addressLine()}
                  </address>
                </div>
              </li>
              <li className="flex items-center gap-4 p-5">
                <Icon3D icon={Clock} size="sm" />
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500 dark:text-ink-300">Hours</p>
                  <p className="font-medium text-ink-950 dark:text-white">{BUSINESS.hours}</p>
                </div>
              </li>
            </ul>

            <div className="rounded-3xl border border-ink-950/8 bg-white p-5 dark:border-white/10 dark:bg-ink-900">
              <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-200">{BUSINESS.serviceAreaNote}</p>
              <a
                href={BUSINESS.googleListingUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View the TRA listing on Google (opens in a new tab)"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700"
              >
                Find TRA on Google <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <div className="rounded-3xl border border-ink-950/8 bg-white p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-ink-900">
              <h2 className="font-display text-2xl font-semibold uppercase text-ink-950 dark:text-white">Send us a message</h2>
              <p className="mt-2 text-sm text-ink-600 dark:text-ink-200">
                For non-urgent questions, feedback, or business inquiries. We&apos;ll respond as soon as possible.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
