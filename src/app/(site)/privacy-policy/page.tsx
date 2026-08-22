import type { Metadata } from "next";
import { LegalLayout } from "@/components/legal/legal-layout";
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

      <h2>SMS messaging and mobile information</h2>
      <p>
        <strong>
          No mobile information will be shared with third parties or affiliates for marketing or
          promotional purposes. Text messaging originator opt-in data and consent will not be
          shared with any third parties.
        </strong>{" "}
        Phone numbers collected for SMS updates are used solely to send you status messages about
        the roadside assistance request you submitted, and are shared only with the messaging
        provider that delivers those messages on our behalf.
      </p>
      <p>
        SMS consent is optional and is never required to request or receive service. Message
        frequency varies with the status of your request, typically four to six messages per
        request, and messages stop once your request is completed or canceled. Message and data
        rates may apply. Reply STOP to any message to opt out, or HELP for assistance. See our{" "}
        <a href="/sms-terms" className="underline">
          SMS Terms and Consent
        </a>{" "}
        for full details.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain service request records and the related communications tied to them for three
        years from the date of the request. Photos uploaded in connection with a request are
        retained for twelve months. At the end of those periods the corresponding records and
        files are deleted.
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
