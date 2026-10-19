import { Phone, LifeBuoy } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { BUSINESS } from "@/lib/content/business";
import { BrandPattern } from "@/components/brand/brand-pattern";

export function FinalCtaSection() {
  return (
    <section className="relative isolate overflow-hidden bg-red-600 py-12 text-white sm:py-20">
      <BrandPattern fade="none" strength={0.1} />
      <Container className="relative flex flex-col items-center gap-6 text-center">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-balance sm:text-4xl">
          Don&apos;t wait it out. Get help moving.
        </h2>
        <p className="max-w-xl text-white/85">
          Requesting help takes under two minutes, and you&apos;ll know exactly what&apos;s happening every
          step of the way.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <MagneticButton>
            <Button
              href="/request"
              variant="dark"
              size="xl"
              icon={<LifeBuoy className="h-5 w-5" aria-hidden="true" />}
            >
              Request Roadside Help
            </Button>
          </MagneticButton>
          <MagneticButton>
            <Button
              href={BUSINESS.phoneHref}
              variant="outline"
              size="xl"
              className="border-white/40 text-white hover:bg-white/10"
              icon={<Phone className="h-5 w-5" aria-hidden="true" />}
            >
              {BUSINESS.phoneDisplay}
            </Button>
          </MagneticButton>
        </div>
      </Container>
    </section>
  );
}
