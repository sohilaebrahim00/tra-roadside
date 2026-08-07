import Image from "next/image";
import Link from "next/link";
import { Camera } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { getGalleryItems } from "@/lib/data/gallery";
import { BUSINESS } from "@/lib/content/business";
import { InstagramIcon } from "@/components/brand/social-icons";

export async function GallerySection() {
  const items = await getGalleryItems();

  return (
    <section className="border-y border-ink-950/8 bg-paper-50 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="Real Work" title="On the job across DFW" align="center" />

        {items.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {items.slice(0, 8).map((item) => (
              <div key={item.id} className="relative aspect-square overflow-hidden rounded-xl">
                <Image src={item.image_url} alt={item.alt_text} fill className="object-cover" sizes="(min-width: 768px) 25vw, 50vw" />
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-10 flex max-w-lg flex-col items-center rounded-2xl border border-dashed border-ink-950/15 px-8 py-12 text-center dark:border-white/15">
            <Camera className="h-8 w-8 text-ink-400" aria-hidden="true" />
            <p className="mt-3 font-display text-lg font-semibold text-ink-950 dark:text-white">
              Real job photos are on the way
            </p>
            <p className="mt-1.5 text-sm text-ink-600 dark:text-ink-200">
              This gallery pulls directly from completed jobs added through the admin dashboard.
              In the meantime, follow along on Instagram.
            </p>
            <Button
              href={BUSINESS.socials.instagram}
              variant="outline"
              size="sm"
              className="mt-5"
              icon={<InstagramIcon className="h-4 w-4" aria-hidden="true" />}
            >
              @tra.roadside
            </Button>
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/gallery" className="text-sm font-semibold text-red-600 hover:text-red-700">
            View full gallery →
          </Link>
        </div>
      </Container>
    </section>
  );
}
