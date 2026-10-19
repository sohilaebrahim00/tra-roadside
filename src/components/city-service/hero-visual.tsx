import Image from "next/image";
import { SERVICE_ICONS } from "@/lib/content/service-icons";
import type { ServiceContent } from "@/lib/content/services";
import { BrandPattern } from "@/components/brand/brand-pattern";
import { Icon3D } from "@/components/ui/icon-3d";

/**
 * The visual half of the City x Service hero.
 *
 * Two states, deliberately sharing one aspect ratio:
 *
 *   1. An owned photograph, when SERVICES carries one for this service. Today
 *      that is only battery-replacement, which has six. The photo and its alt
 *      text both come from SERVICES, so nothing is authored here.
 *   2. A branded panel built from existing tokens — the service icon over the
 *      TRA monogram pattern (components/brand/brand-pattern.tsx). No stock photography and no
 *      generated imagery is used for services that have no owned asset.
 *
 * Because both states fill the same box, adding an approved photo to a service
 * in SERVICES later lights up this slot with no layout change in this file.
 *
 * On the fallback state the panel is hidden below `lg`. It carries no
 * information, and on a 375px screen a decorative block above the fold is
 * exactly what makes these heroes too tall to scroll past.
 *
 * `unoptimized` + explicit width/height + a capped `sizes` follows the
 * convention already set on /services/[slug]: these webp files are already the
 * optimized artifact (612px or 1200px wide), and next/image would otherwise
 * emit srcset candidates far wider than the source and upscale the photograph.
 */
export function HeroVisual({ svc }: { svc: ServiceContent }) {
  const photo = svc.photos?.[0];
  const Icon = SERVICE_ICONS[svc.slug];

  if (photo) {
    return (
      /*
        Hidden on phones, and capped in ratio until `lg`.

        Measured at 375px: the photograph plus its grid gap added 254px to the hero
        (922px -> 1176px, or 1.76 viewports on a 667px-tall screen). Because the
        grid stacks on mobile, that height sits BELOW the CTAs, so it was costing
        the most scroll depth exactly where it earns the least. From `sm` up it
        is back, and it takes its native 3:2 from `lg` where the hero is a real
        two-column composition.
      */
      <div className="relative hidden aspect-[16/10] overflow-hidden rounded-3xl border border-white/15 bg-ink-900 sm:block lg:aspect-[3/2]">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="(min-width: 1024px) 34rem, 100vw"
          className="h-full w-full object-cover"
          priority={false}
        />
        {/* Keeps the lower edge readable where the photograph is bright. */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink-950/70 to-transparent"
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <div
      className="relative isolate hidden aspect-[3/2] overflow-hidden rounded-3xl border border-white/12 bg-ink-900 lg:block"
      aria-hidden="true"
    >
      {/* The logo monogram pattern, so the panel reads as a deliberate
          brand graphic rather than an empty box waiting for a photo. */}
      <BrandPattern fade="center" strength={0.12} />

      {/* Red bloom behind the mark, then a corner falloff for depth. */}
      <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-ink-950/10 via-transparent to-ink-950/85" />

      <div className="relative flex h-full flex-col items-center justify-center gap-4 px-8">
        <Icon3D icon={Icon} size="xl" />
        <p className="font-display text-xl font-bold uppercase tracking-wide text-white/90">
          {svc.shortName}
        </p>
        <span className="h-px w-16 bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
      </div>
    </div>
  );
}
