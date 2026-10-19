import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Images } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getGalleryItems } from "@/lib/data/gallery";
import { fieldPhotoPreview } from "@/lib/content/field-photos";

interface Tile {
  key: string;
  src: string;
  alt: string;
  caption?: string;
}

/**
 * Editorial layout: one large photo and smaller ones beside it, then a tile
 * that leads to the full gallery, instead of a flat row of equal squares.
 * From md up the first photo spans two columns and two rows of a four-column
 * grid; on phones it runs full width above a two-column grid.
 */
export async function GallerySection() {
  const items = await getGalleryItems();

  // Uploaded gallery items when there are any; until then, one still from
  // each group of the business's own footage, captioned with its service.
  const tiles: Tile[] =
    items.length > 0
      ? items.slice(0, 4).map((item) => ({ key: item.id, src: item.image_url, alt: item.alt_text, caption: item.title ?? undefined }))
      : fieldPhotoPreview().map((photo) => ({ key: photo.src, src: photo.src, alt: photo.alt, caption: photo.title }));

  return (
    <section className="border-y border-ink-950/8 bg-paper-50 py-12 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading eyebrow="Real Work" title="Real work. Real roads." description="Our own crew and equipment on jobs across Dallas–Fort Worth." />
          <Link href="/gallery" className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700 sm:flex">
            View full gallery <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 md:grid-cols-4 md:grid-rows-2 md:gap-4">
          {tiles.map((tile, i) => (
            <li
              key={tile.key}
              className={`group relative overflow-hidden rounded-2xl bg-ink-900 ${
                i === 0 ? "col-span-2 aspect-[4/3] md:row-span-2 md:aspect-auto" : "aspect-[4/5] md:aspect-auto md:min-h-56"
              }`}
            >
              <Image
                src={tile.src}
                alt={tile.alt}
                fill
                sizes={i === 0 ? "(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw" : "(min-width: 1280px) 300px, (min-width: 768px) 25vw, 50vw"}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              {tile.caption && (
                <>
                  <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink-950/85 to-transparent" />
                  <p className="absolute bottom-3 left-3.5 right-3.5 font-display text-sm font-semibold uppercase tracking-wide text-white sm:bottom-4 sm:left-4 sm:text-base">
                    {tile.caption}
                  </p>
                </>
              )}
            </li>
          ))}
          {/* Fills the grid's last slot: beside the fourth photo on phones,
              under the top-right pair from md up. */}
          <li>
            <Link
              href="/gallery"
              className="flex h-full min-h-28 flex-col justify-between rounded-2xl bg-ink-950 p-5 text-white transition-colors hover:bg-ink-900 md:min-h-56"
            >
              <Images className="h-6 w-6 text-amber-400" aria-hidden="true" />
              <span>
                <span className="block font-display text-lg font-semibold uppercase">See the full gallery</span>
                <span className="mt-1 inline-flex items-center gap-1 text-sm text-white/70">
                  Photos and video from the road <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </Link>
          </li>
        </ul>
      </Container>
    </section>
  );
}
