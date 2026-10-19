import Image from "next/image";
import { cn } from "@/lib/utils/cn";

/**
 * The owner's TRA logo (supplied 2026-10-19), cut from the original artwork
 * into transparent files in public/brand/:
 *
 *   tra-logo.png        the full stacked logo
 *   tra-emblem.png      tire, wrenches and road
 *   tra-wordmark.png    the TRA letters
 *
 * Each has a "-dark" twin for dark backgrounds, identical except that the
 * black asphalt is a dark gray, so the road still reads on ink. The white
 * background, the gaps in the tire tread and the letter counters are
 * transparent in both; the road's center dashes and edge lines are kept.
 */
const EMBLEM = { width: 317, height: 160 };
const WORDMARK = { width: 351, height: 80 };
export const FULL_LOGO = { width: 800, height: 699 };

/** Horizontal lockup for the header and app shells: emblem, then TRA over the tagline. */
export function LogoLockup({
  className,
  subline = true,
  onDark = false,
  priority = false,
}: {
  className?: string;
  subline?: boolean;
  /** Use the dark-background version of the artwork. */
  onDark?: boolean;
  /** Preload, for the copy in the header. */
  priority?: boolean;
}) {
  const sfx = onDark ? "-dark" : "";
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src={`/brand/tra-emblem${sfx}.png`}
        alt=""
        width={EMBLEM.width}
        height={EMBLEM.height}
        priority={priority}
        className="h-9 w-auto shrink-0 sm:h-10"
      />
      <span className="inline-flex flex-col items-start leading-none">
        <Image
          src={`/brand/tra-wordmark${sfx}.png`}
          alt="TRA"
          width={WORDMARK.width}
          height={WORDMARK.height}
          priority={priority}
          className="h-[1.3rem] w-auto sm:h-6"
        />
        {subline && (
          // The logo's own tagline color family: red-orange on light, the
          // logo orange on dark, each clearing 4.5:1 at this size.
          <span
            className={cn(
              "mt-1 text-[0.52rem] font-bold uppercase tracking-[0.2em]",
              onDark ? "text-amber-500" : "text-red-600"
            )}
          >
            Texas Roadside Assistance
          </span>
        )}
      </span>
    </span>
  );
}

/** The full stacked logo, for the footer and anywhere the brand gets room. */
export function FullLogo({ className, onDark = false }: { className?: string; onDark?: boolean }) {
  return (
    <Image
      src={`/brand/tra-logo${onDark ? "-dark" : ""}.png`}
      alt="TRA — Texas Roadside Assistance"
      width={FULL_LOGO.width}
      height={FULL_LOGO.height}
      className={cn("h-auto", className)}
    />
  );
}
