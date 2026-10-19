import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const SIZES = {
  xs: { box: "h-8 w-8 rounded-[0.6rem]", icon: "h-4 w-4" },
  sm: { box: "h-10 w-10 rounded-xl", icon: "h-5 w-5" },
  md: { box: "h-12 w-12 rounded-[0.95rem]", icon: "h-6 w-6" },
  lg: { box: "h-16 w-16 rounded-2xl", icon: "h-8 w-8" },
  xl: { box: "h-24 w-24 rounded-[1.75rem]", icon: "h-12 w-12" },
} as const;

/**
 * The site's icon badge, drawn to read as a raised, glossy 3D tile in the
 * logo's colors: light comes from the top (orange into red down the face), a
 * soft shine sits on the upper half, the lower edge carries an inner shadow,
 * and the tile throws a red glow beneath it. The glyph itself gets a small
 * drop shadow so it looks pressed into the surface.
 *
 * Pure CSS, so it costs nothing to load, stays sharp at any size and works in
 * every browser. Decorative: the label next to it carries the meaning.
 *
 * `muted` is the unselected state in pickers, gray instead of brand color.
 */
export function Icon3D({
  icon: Icon,
  size = "md",
  muted = false,
  className,
}: {
  icon: LucideIcon;
  size?: keyof typeof SIZES;
  muted?: boolean;
  className?: string;
}) {
  const s = SIZES[size];
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative inline-grid shrink-0 place-items-center overflow-hidden text-white",
        s.box,
        muted
          ? "bg-gradient-to-b from-ink-400 to-ink-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-3px_6px_rgba(0,0,0,0.3),0_6px_14px_-8px_rgba(10,10,11,0.6)]"
          : "bg-gradient-to-b from-amber-400 via-amber-500 to-red-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-4px_8px_rgba(110,0,0,0.35),0_10px_22px_-10px_rgba(224,19,28,0.75)]",
        className
      )}
    >
      {/* The shine: a soft highlight across the top half of the face. */}
      <span className="pointer-events-none absolute inset-x-[10%] top-[5%] h-[46%] rounded-[inherit] bg-gradient-to-b from-white/45 to-white/0" />
      <Icon className={cn("relative drop-shadow-[0_2px_1.5px_rgba(70,0,0,0.45)]", s.icon)} strokeWidth={2.2} />
    </span>
  );
}
