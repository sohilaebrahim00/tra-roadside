import { MapPinned, ShieldCheck, Receipt, Satellite } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { BrandPattern } from "@/components/brand/brand-pattern";
import { Icon3D } from "@/components/ui/icon-3d";

const POINTS = [
  {
    icon: MapPinned,
    title: "Local DFW dispatch",
    body: "Requests are handled by local dispatch in the Dallas–Fort Worth area — not an out-of-state call center.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & insured",
    body: "TRA operates fully licensed and insured for towing and roadside work in Texas.",
  },
  {
    icon: Receipt,
    title: "Upfront pricing",
    body: "Pricing is confirmed before a driver is dispatched — no surprise fees after the fact.",
  },
  {
    icon: Satellite,
    title: "Real-time tracking",
    body: "A secure live tracking link shows your driver's location and ETA the moment the trip starts.",
  },
];

export function WhyChooseSection() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 py-12 text-white sm:py-28">
      <BrandPattern fade="bottom-left" />
      <Container className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
        <SectionHeading
          eyebrow="Why TRA"
          title="Built to be trusted at your worst moment"
          description="A breakdown is already stressful — the way we operate is designed to remove uncertainty, not add to it."
          tone="light"
        />
        <div className="grid gap-6 sm:grid-cols-2">
          {POINTS.map((point) => (
            <div key={point.title} className="border-l-2 border-red-600/60 pl-5">
              <Icon3D icon={point.icon} size="sm" />
              <h3 className="mt-3 font-display text-lg font-semibold">{point.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/65">{point.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
