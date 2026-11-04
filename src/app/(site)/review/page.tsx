import type { Metadata } from "next";
import Image from "next/image";
import { Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/content/business";

export const metadata: Metadata = {
  title: "Leave a Review",
  description: "Tell other drivers how it went. Your Google review helps them find us when they're stuck.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/review" },
};

/**
 * For drivers to show a customer when a job is done: scan the code, or tap the
 * button, and Google's review box opens. Not linked from the site's navigation.
 * The code holds BUSINESS.googleReviewUrl; if that changes, regenerate it.
 */
export default function ReviewPage() {
  return (
    <section className="py-14 sm:py-20">
      <Container size="narrow" className="max-w-md text-center">
        <span className="flex justify-center gap-1" aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className="h-7 w-7 fill-amber-400 text-amber-400" />
          ))}
        </span>
        <h1 className="mt-4 font-display text-3xl font-bold text-ink-950">How did we do?</h1>
        <p className="mt-3 text-base leading-relaxed text-ink-600">
          A quick Google review helps other drivers find us when they&apos;re stuck on the side of the road. It takes about a minute.
        </p>
        <Image src="/images/review-qr.svg" alt="QR code that opens TRA's Google review page" width={260} height={260} unoptimized className="mx-auto mt-6 rounded-2xl border border-ink-950/10 bg-white p-3" />
        <Button href={BUSINESS.googleReviewUrl} size="lg" fullWidth className="mt-6">
          Leave a Google review
        </Button>
      </Container>
    </section>
  );
}
