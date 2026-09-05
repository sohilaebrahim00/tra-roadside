import dynamic from "next/dynamic";
import { Hero } from "@/components/home/hero";
import { BatteryPromoSection } from "@/components/home/battery-promo-section";
import { TrustStrip } from "@/components/home/trust-strip";
import { SignatureWordSection } from "@/components/home/signature-word-section";
import { RoadsideRevealSection } from "@/components/home/roadside-reveal-section";
import { TrackingPreviewSection } from "@/components/home/tracking-preview-section";
import { WhyChooseSection } from "@/components/home/why-choose-section";
import { ServiceAreasSection } from "@/components/home/service-areas-section";
import { GallerySection } from "@/components/home/gallery-section";
import { VideoSection } from "@/components/home/video-section";
import { GoogleReviewsSection } from "@/components/home/google-reviews-section";
import { FaqPreviewSection } from "@/components/home/faq-preview-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";

// Code-split the two GSAP ScrollTrigger sections below the fold so their JS
// loads as separate chunks instead of bloating the bundle the hero/CTAs
// need to hydrate. Skeletons reserve roughly the real section height to
// avoid layout shift while each chunk loads.
const ServicesSection = dynamic(() => import("@/components/home/services-section").then((m) => m.ServicesSection), {
  loading: () => <div className="h-[900px] sm:h-[700px]" aria-hidden="true" />,
});
const HowItWorksSection = dynamic(() => import("@/components/home/how-it-works-section").then((m) => m.HowItWorksSection), {
  loading: () => <div className="h-[900px] bg-ink-950 sm:h-[600px]" aria-hidden="true" />,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <BatteryPromoSection />
      <TrustStrip />
      <SignatureWordSection />
      <ServicesSection />
      <RoadsideRevealSection />
      <HowItWorksSection />
      <TrackingPreviewSection />
      <WhyChooseSection />
      <ServiceAreasSection />
      <GallerySection />
      <VideoSection />
      {/* Renders null unless GOOGLE_PLACE_ID + the server Maps key are set AND
          Google returns real reviews. VideoSection and FaqPreviewSection both
          carry their own vertical padding, so the page closes cleanly when it
          is absent. */}
      <GoogleReviewsSection />
      <FaqPreviewSection />
      <FinalCtaSection />
    </>
  );
}
