import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { getGalleryItems } from "@/lib/data/gallery";
import { env } from "@/lib/env";
import { Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/brand/social-icons";
import { BUSINESS } from "@/lib/content/business";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Real roadside assistance jobs across the Dallas–Fort Worth Metroplex.",
  alternates: { canonical: "/gallery" },
};

export default async function GalleryPage() {
  const items = await getGalleryItems();

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: env.siteUrl }, { name: "Gallery", url: `${env.siteUrl}/gallery` }]} />
      <section className="border-b border-ink-950/8 bg-ink-950 py-16 text-white sm:py-20">
        <Container>
          <SectionHeading eyebrow="Real Work" title="On the job across DFW" tone="light" />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          {items.length > 0 ? (
            <GalleryGrid items={items} />
          ) : (
            <div className="mx-auto flex max-w-lg flex-col items-center rounded-2xl border border-dashed border-ink-950/15 px-8 py-16 text-center dark:border-white/15">
              <Camera className="h-8 w-8 text-ink-400" aria-hidden="true" />
              <p className="mt-3 font-display text-lg font-semibold text-ink-950 dark:text-white">Gallery coming soon</p>
              <p className="mt-1.5 text-sm text-ink-600 dark:text-ink-200">
                Real job photos are added here through the admin dashboard. Follow along on Instagram in the meantime.
              </p>
              <Button href={BUSINESS.socials.instagram} variant="outline" size="sm" className="mt-5" icon={<InstagramIcon className="h-4 w-4" aria-hidden="true" />}>
                @tra.roadside
              </Button>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
