import type { Metadata } from "next";
import { LegalLayout, LegalPlaceholder } from "@/components/legal/legal-layout";
import { BUSINESS } from "@/lib/content/business";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: true, follow: true },
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="August 2026">
      <p>
        This Privacy Policy describes how {BUSINESS.legalName} (&quot;TRA&quot;, &quot;we&quot;,
        &quot;us&quot;) collects, uses, and protects information when you use our website and
        roadside assistance request service.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>Contact information you provide: name, phone number, and email address.</li>
        <li>Location data you share when requesting service, including GPS coordinates and address.</li>
        <li>Vehicle information you provide: year, make, model, color, and license plate.</li>
        <li>Photos you choose to upload of your vehicle or the roadside issue.</li>
        <li>Communications with dispatch and drivers related to your request.</li>
        <li>Basic technical data such as browser type and device information, used to keep the site secure and functioning.</li>
      </ul>

      <h2>How we use this information</h2>
      <ul>
        <li>To dispatch a driver and provide the roadside assistance service you requested.</li>
        <li>To send status updates via email and SMS (only with your consent for SMS).</li>
        <li>To provide live tracking of your assigned driver via a secure, time-limited link.</li>
        <li>To improve our service and respond to support inquiries.</li>
      </ul>

      <h2>Sharing of information</h2>
      <p>
        We share request details with the driver assigned to your job so they can safely locate and
        assist you. We do not sell your personal information. We may share information with service
        providers who help us operate (for example, mapping, SMS, and email delivery providers)
        strictly to provide the service.
      </p>

      <h2>Data retention</h2>
      <p>
        <LegalPlaceholder>
          Specific retention periods for request records, photos, and communications have not yet
          been finalized — this section should be completed with input from TRA leadership and legal
          counsel before publishing.
        </LegalPlaceholder>
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>You can opt out of SMS updates at any time by replying STOP, or by contacting us.</li>
        <li>You can request details about the information we hold about you by contacting us at {BUSINESS.email}.</li>
      </ul>

      <h2>Contact</h2>
      <p>Questions about this policy can be sent to {BUSINESS.email} or by calling {BUSINESS.phoneDisplay}.</p>
    </LegalLayout>
  );
}
