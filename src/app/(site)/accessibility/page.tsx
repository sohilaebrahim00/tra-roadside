import type { Metadata } from "next";
import { pageUrls } from "@/lib/seo";
import { LegalLayout } from "@/components/legal/legal-layout";
import { BUSINESS } from "@/lib/content/business";

export const metadata: Metadata = {
  title: "Accessibility",
  description:
    "How TRA works to keep this website usable for everyone, what has been done so far, and how to reach us if any part of the site does not work for you.",
  robots: { index: true, follow: true },
  ...pageUrls("/accessibility"),
};

export default function AccessibilityPage() {
  return (
    <LegalLayout title="Accessibility Statement" updated="August 2026">
      <p>
        {BUSINESS.legalName} is committed to making our website usable by everyone, including
        people using assistive technology. This site is built to align with WCAG 2.2 Level AA
        guidelines.
      </p>

      <h2>What we&apos;ve done</h2>
      <ul>
        <li>Semantic HTML structure and heading hierarchy throughout the site.</li>
        <li>Keyboard navigation support, including visible focus states on all interactive elements.</li>
        <li>Descriptive alt text on meaningful images and labeled form fields with accessible error messages.</li>
        <li>Sufficient color contrast between text and backgrounds.</li>
        <li>Respect for reduced-motion preferences on animations and transitions.</li>
        <li>Large, clearly labeled touch targets for emergency actions like Call Now and Request Help.</li>
      </ul>

      <h2>Ongoing work</h2>
      <p>
        Accessibility is an ongoing effort. If you encounter a barrier using this site, please let
        us know so we can address it.
      </p>

      <h2>Contact</h2>
      <p>
        Report accessibility issues to {BUSINESS.email} or by calling {BUSINESS.phoneDisplay}.
      </p>
    </LegalLayout>
  );
}
