import Link from "next/link";

/**
 * The SMS consent wording. Each request records SMS_CONSENT_TEXT_VERSION in the
 * API route next to the customer's consent, so a change here needs a new version
 * there.
 */
export function SmsConsentText() {
  return (
    <span>
      I agree to receive automated SMS updates about my request from TRA. Message frequency
      varies with the status of your request (typically 4&ndash;6 messages per request).
      Message and data rates may apply. Reply STOP to opt out, HELP for help. Consent is
      optional and is not required to request or receive service. See{" "}
      <Link href="/sms-terms" className="underline">
        SMS Terms
      </Link>{" "}
      and{" "}
      <Link href="/privacy-policy" className="underline">
        Privacy Policy
      </Link>
      .
    </span>
  );
}
