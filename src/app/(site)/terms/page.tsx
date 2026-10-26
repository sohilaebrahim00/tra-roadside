import type { Metadata } from "next";
import { pageUrls } from "@/lib/seo";
import { LegalLayout, LegalPlaceholder } from "@/components/legal/legal-layout";
import { BUSINESS } from "@/lib/content/business";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "The terms for requesting roadside assistance from Texas Roadside Assistance LLC, covering service requests, pricing, cancellations, live tracking and liability.",
  robots: { index: true, follow: true },
  ...pageUrls("/terms"),
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms and Conditions" updated="August 2026">
      <p>
        These Terms and Conditions govern your use of the {BUSINESS.legalName} website and roadside
        assistance request service. By submitting a request or using this site, you agree to these terms.
      </p>

      <h2>Service requests</h2>
      <p>
        Submitting a request through this website is a request for service, not a guarantee of a
        specific arrival time. Dispatch confirms and accepts requests based on driver availability
        and location. {BUSINESS.trustClaims.find((c) => c.id === "arrival")?.label} reflects a
        general average, not a guaranteed response time for any individual request.
      </p>

      <h2>Pricing</h2>
      <p>
        <LegalPlaceholder>
          A published rate card is not yet available. Pricing is confirmed by dispatch prior to
          dispatching a driver — this section should be updated with finalized pricing terms before
          launch.
        </LegalPlaceholder>
      </p>

      <h2>Cancellations</h2>
      <p>
        <LegalPlaceholder>
          Specific cancellation policies (e.g., cutoff windows or cancellation fees) have not been
          finalized. Contact dispatch as soon as possible to cancel a request.
        </LegalPlaceholder>
      </p>

      <h2>Live tracking</h2>
      <p>
        Live tracking links are provided for convenience once a driver is assigned and begins the
        trip. Links are unique to your request, expire after a limited period, and stop functioning
        once your request is completed or canceled.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        <LegalPlaceholder>
          Standard liability limitation language for a licensed roadside assistance operator should be
          added here in consultation with legal counsel.
        </LegalPlaceholder>
      </p>

      <h2>Contact</h2>
      <p>Questions about these terms can be sent to {BUSINESS.email} or by calling {BUSINESS.phoneDisplay}.</p>
    </LegalLayout>
  );
}
