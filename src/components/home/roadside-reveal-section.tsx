import dynamic from "next/dynamic";

// Code-split: this section's GSAP ScrollTrigger logic only loads as a
// separate chunk, so it never competes with the hero/CTA bundle for the
// main thread on first paint. The skeleton reserves the section's height
// to avoid layout shift while the chunk loads.
const CircularScrollVideo = dynamic(
  () => import("@/components/media/circular-scroll-video").then((m) => m.CircularScrollVideo),
  {
    loading: () => <div className="h-[70vh] bg-ink-950" aria-hidden="true" />,
  }
);

export function RoadsideRevealSection() {
  return (
    <CircularScrollVideo
      placement="home-circular-reveal"
      eyebrow="On Every Call"
      title="Real drivers. Real roadside work."
      description="Every request is handled by a local DFW driver — not a dispatch center reading from a script hundreds of miles away."
    />
  );
}
