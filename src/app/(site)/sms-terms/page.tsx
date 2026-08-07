import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/legal-layout";
import { BUSINESS } from "@/lib/content/business";

export const metadata: Metadata = {
  title: "SMS Terms and Consent",
  robots: { index: true, follow: true },
  alternates: { canonical: "/sms-terms" },
};

export default function SmsTermsPage() {
  return (
    <LegalLayout title="SMS Terms and Consent" updated="August 2026">
      <p>
        By checking the SMS consent box when requesting service, you agree to receive automated
        text messages from {BUSINESS.legalName} related to your roadside assistance request,
        including confirmations, status updates, and driver arrival notices.
      </p>

      <h2>Message frequency and cost</h2>
      <p>
        Message frequency varies based on the status of your request. Message and data rates may
        apply based on your mobile carrier plan.
      </p>

      <h2>Opting out</h2>
      <p>
        You can opt out of SMS updates at any time by replying STOP to any message, or by contacting
        us at {BUSINESS.phoneDisplay}. Reply HELP for assistance.
      </p>

      <h2>Consent is not required for service</h2>
      <p>
        SMS consent is optional. You can still request and receive roadside assistance, including
        email updates and a live tracking link, without opting in to SMS.
      </p>

      <h2>Consent record</h2>
      <p>
        For each request, we record the timestamp, request ID, and the version of this consent text
        you agreed to, along with the phone number provided.
      </p>
    </LegalLayout>
  );
}
