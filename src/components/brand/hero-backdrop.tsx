import { BrandPattern } from "./brand-pattern";

/**
 * The shared backdrop for the dark opening band of inner pages: a glow in the
 * logo's red and orange, the logo pattern, and a thin orange rule along the
 * bottom edge. It turns the plain ink band most pages open with into the same
 * branded surface as the home page.
 *
 * Place it first inside a `relative isolate overflow-hidden` section. Every
 * layer sits at -z-10, so the section's content needs no changes.
 */
export function HeroBackdrop() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_70%_at_88%_0%,rgba(224,19,28,0.28),transparent),radial-gradient(ellipse_45%_60%_at_0%_100%,rgba(242,132,12,0.16),transparent)]"
      />
      <BrandPattern />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-amber-500/70 to-transparent"
      />
    </>
  );
}
