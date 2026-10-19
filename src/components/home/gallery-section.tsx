import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { getGalleryItems } from "@/lib/data/gallery";
import { fieldPhotoPreview } from "@/lib/content/field-photos";

export async function GallerySection() {
  const items = await getGalleryItems();

  return (
    <section className="border-y border-ink-950/8 bg-paper-50 py-12 sm:py-28">
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
          // Until job photos are uploaded through the admin dashboard, the
          // preview shows one still from each group of the business's own
          // footage rather than an empty placeholder box.
          <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {fieldPhotoPreview().map((photo) => (
              <li key={photo.src} className="overflow-hidden rounded-xl border border-ink-950/8 bg-white">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1280px) 290px, (min-width: 768px) 23vw, 46vw"
                  className="aspect-[4/5] h-auto w-full object-cover"
                />
              </li>
            ))}
          </ul>
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
