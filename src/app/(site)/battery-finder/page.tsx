import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";
import { BatteryFinder } from "@/components/battery-finder/battery-finder";
import { getService } from "@/lib/content/services";
import { DISPATCH_FEE_TAG, lowPrice, pricedTitle } from "@/lib/content/pricing";
import { env } from "@/lib/env";
import { pageUrls, shareImageFor } from "@/lib/seo";

const battery = getService("battery-replacement");

export const metadata: Metadata = {
  title: { absolute: pricedTitle("Car Battery Finder DFW", battery && lowPrice(battery)) },
  description: `Which battery does your car take? Pick your vehicle or enter your VIN. New battery installed where you're parked, ${battery ? lowPrice(battery) : ""} ${DISPATCH_FEE_TAG}. 24/7 across Dallas–Fort Worth.`,
  ...pageUrls("/battery-finder", shareImageFor("battery-replacement")),
};

export default function BatteryFinderPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: env.siteUrl }, { name: "Battery Finder", url: `${env.siteUrl}/battery-finder` }]} />
      <section className="relative isolate overflow-hidden border-b border-ink-950/8 bg-ink-950 py-14 text-white sm:py-20">
        <HeroBackdrop />
        <Container>
          <SectionHeading as="h1" eyebrow="Battery finder" title="Which battery fits your car?" description="Pick your vehicle or enter your VIN to see its battery size, then have it installed where you're parked." tone="light" />
        </Container>
      </section>
      <section className="bg-paper-50 py-12 sm:py-16">
        <Container size="narrow" className="max-w-3xl">
          <BatteryFinder />
          <p className="mt-5 text-sm leading-relaxed text-ink-600">
            Not sure it&apos;s the battery? See <Link href="/guides/battery-or-alternator" className="font-semibold text-red-600 hover:text-red-700">how to tell the battery from the alternator</Link> or the{" "}
            <Link href="/services/battery-replacement" className="font-semibold text-red-600 hover:text-red-700">battery replacement service</Link>.
          </p>
        </Container>
      </section>
    </>
  );
}
