import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageUrls } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { getGalleryItems } from "@/lib/data/gallery";
import { env } from "@/lib/env";
import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InstagramIcon } from "@/components/brand/social-icons";
import { BUSINESS } from "@/lib/content/business";
import { getService } from "@/lib/content/services";
import { FIELD_PHOTO_GROUPS } from "@/lib/content/field-photos";
import { HeroBackdrop } from "@/components/brand/hero-backdrop";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos of TRA at work across the Dallas–Fort Worth Metroplex: battery replacement, flat tires, jump starts, fuel delivery and the gear our drivers carry.",
  ...pageUrls("/gallery"),
};

/**
 * Two sources, kept separate on purpose:
 *
 *   1. FIELD_PHOTO_GROUPS — the business's own job photos and stills from its footage, grouped by
 *      the service they show. Always present, so the page is never an empty
 *      "coming soon" box. Captioned as the crew and equipment at work, never
 *      as named customer jobs (see field-photos.ts).
 *   2. gallery_items from Supabase — photos of completed jobs uploaded through
 *      the admin dashboard. Rendered under their own heading only when there
 *      are any.
 */
export default async function GalleryPage() {
  const items = await getGalleryItems();

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: env.siteUrl }, { name: "Gallery", url: `${env.siteUrl}/gallery` }]} />
      <section className="relative isolate overflow-hidden border-b border-ink-950/8 bg-ink-950 py-16 text-white sm:py-20">
        <HeroBackdrop />
        <Container>
          <SectionHeading
            as="h1"
            eyebrow="Gallery"
            title="TRA at work across DFW"
            description="Our crew and the equipment they bring: battery replacement, flat tires, jump starts and fuel delivery, from our own job photos and footage."
            tone="light"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-x-12 lg:gap-y-16">
            {FIELD_PHOTO_GROUPS.map((group, gi) => {
              const svc = group.service ? getService(group.service) : undefined;
              return (
                <section key={group.id} aria-labelledby={`field-${group.id}`}>
                  <h2 id={`field-${group.id}`} className="font-display text-2xl font-semibold text-ink-950">
                    {group.title}
                  </h2>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-600">{group.caption}</p>
                  <ul className="mt-5 grid grid-cols-2 gap-3">
                    {group.photos.map((photo) => (
                      <li key={photo.src} className="overflow-hidden rounded-2xl border border-ink-950/8 bg-paper-50">
                        {/* Fixed 4:5 box matching the files, so nothing moves
                            while they load. The first group is above the fold
                            on desktop and is not lazy-loaded. */}
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          width={photo.width}
                          height={photo.height}
                          sizes="(min-width: 1280px) 290px, (min-width: 1024px) 22vw, 46vw"
                          loading={gi === 0 ? "eager" : "lazy"}
                          className="aspect-[4/5] h-auto w-full object-cover"
                        />
                      </li>
                    ))}
                  </ul>
                  {svc && (
                    <Link
                      href={`/services/${svc.slug}`}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700"
                    >
                      {svc.name} service <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </section>
              );
            })}
          </div>

          {items.length > 0 && (
            <section aria-labelledby="recent-jobs" className="mt-20 border-t border-ink-950/8 pt-14">
              <h2 id="recent-jobs" className="font-display text-2xl font-semibold text-ink-950">
                Recent jobs
              </h2>
              <div className="mt-6">
                <GalleryGrid items={items} />
              </div>
            </section>
          )}

          <div className="mt-16 flex flex-col items-start gap-3 rounded-2xl border border-ink-950/8 bg-paper-50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-ink-600">See the same work in motion, or follow along for new photos.</p>
            <div className="flex flex-wrap gap-3">
              <Button href="/videos" variant="outline" size="sm" icon={<PlayCircle className="h-4 w-4" aria-hidden="true" />}>
                Watch the videos
              </Button>
              <Button
                href={BUSINESS.socials.instagram}
                variant="outline"
                size="sm"
                aria-label="TRA on Instagram (@tra.roadside)"
                icon={<InstagramIcon className="h-4 w-4" aria-hidden="true" />}
              >
                @tra.roadside
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
