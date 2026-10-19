import { cn } from "@/lib/utils/cn";

const FADES = {
  // Strongest in one corner and gone well before the text column, so the
  // mark reads as texture and never sits behind a line of copy at full
  // strength.
  "top-right": "radial-gradient(ellipse 75% 85% at 100% 0%, #000 0%, transparent 70%)",
  "bottom-left": "radial-gradient(ellipse 75% 85% at 0% 100%, #000 0%, transparent 70%)",
  center: "radial-gradient(ellipse 70% 80% at 50% 50%, #000 0%, transparent 75%)",
  none: undefined,
} as const;

/**
 * The TRA pattern: the logo's emblem (tire, wrenches and road) as a white
 * silhouette on a staggered grid (public/images/brand/tra-pattern.png, cut
 * from the owner's logo). Decorative only.
 *
 * Place it inside a `relative isolate overflow-hidden` dark or red section.
 * It sits at -z-10, which inside that isolated stacking context is above the
 * section's own background and below all of its content, so nothing else in
 * the section has to change. `strength` is the layer's opacity: the default
 * suits ink-950; red sections and small tiles carry a little more.
 */
export function BrandPattern({
  fade = "top-right",
  strength = 0.08,
  className,
}: {
  fade?: keyof typeof FADES;
  strength?: number;
  className?: string;
}) {
  const mask = FADES[fade];
  return (
    <div
      aria-hidden="true"
      className={cn("brand-pattern pointer-events-none absolute inset-0 -z-10", className)}
      style={{ opacity: strength, maskImage: mask, WebkitMaskImage: mask }}
    />
  );
}
