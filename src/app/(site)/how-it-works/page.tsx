import type { Metadata } from "next";
import { MapPin, ClipboardList, UserCheck, Navigation, CheckCircle2, Phone, LifeBuoy } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { BUSINESS } from "@/lib/content/business";
import { env } from "@/lib/env";

export const metadata: Metadata = {
  title: "How It Works",
  description: "How to request 24/7 roadside assistance from TRA — share your location, pick a service, get matched with a driver, and track live.",
  alternates: { canonical: "/how-it-works" },
};

const STEPS = [
  {
    icon: MapPin,
    title: "Share your location",
    body: "Allow GPS access from your phone or drop a pin on the map. If you'd rather type it in, you can enter your address or nearest cross streets manually.",
  },
  {
    icon: ClipboardList,
    title: "Tell us what's wrong",
    body: "Pick the service you need — jump start, flat tire, fuel delivery, towing, and more — then add your vehicle details and any photos that help.",
  },
  {
    icon: UserCheck,
    title: "Dispatch reviews and matches you",
    body: "A local DFW dispatcher reviews your request and assigns the nearest available driver. You'll get a confirmation the moment it's accepted.",
  },
  {
    icon: Navigation,
    title: "Track your driver live",
    body: "Once your driver starts the trip, a secure tracking link is sent by text and email. Watch their location, ETA, and status update automatically — no login required.",
  },
  {
    icon: CheckCircle2,
    title: "Get back on the road",
    body: "Your driver completes the service on site (or tows your vehicle to your chosen destination), and your request is marked complete.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: env.siteUrl }, { name: "How It Works", url: `${env.siteUrl}/how-it-works` }]} />
      <section className="border-b border-ink-950/8 bg-ink-950 py-16 text-white sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="How It Works"
            title="From stranded to sorted"
            description="Requesting roadside help takes under two minutes. Here's exactly what happens from the moment you submit a request."
            tone="light"
          />
        </Container>
      </section>

      <section className="py-16 sm:py-24">
        <Container size="narrow">
          <ol className="space-y-10">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-red-600 text-red-600">
                  <step.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-red-600">Step {i + 1}</p>
                  <h2 className="mt-1 font-display text-xl font-semibold text-ink-950 dark:text-white">{step.title}</h2>
                  <p className="mt-1.5 text-ink-600 dark:text-ink-200">{step.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-14 flex flex-col gap-3 rounded-2xl bg-paper-50 p-6 text-center sm:flex-row sm:justify-center dark:bg-ink-900">
            <Button href="/request" size="lg" icon={<LifeBuoy className="h-4 w-4" aria-hidden="true" />}>
              Request Roadside Help
            </Button>
            <Button href={BUSINESS.phoneHref} variant="outline" size="lg" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
              Call {BUSINESS.phoneDisplay}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
