import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, Radio, AlertTriangle } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/content/business";
import { googleAdsConversionSendTo } from "@/lib/env";
import { GoogleAdsConversion } from "@/components/analytics/google-ads-conversion";

export const metadata: Metadata = {
  title: "Request Confirmed",
  robots: { index: false, follow: false },
};

export default async function ConfirmationPage({
  params,
  searchParams,
}: {
  params: Promise<{ requestNumber: string }>;
  searchParams: Promise<{
    token?: string;
    demo?: string;
    emailLive?: string;
    smsLive?: string;
    name?: string;
    service?: string;
    pickup?: string;
  }>;
}) {
  const { requestNumber } = await params;
  const { token, demo, emailLive, smsLive, name, service, pickup } = await searchParams;
  const isDemo = demo === "1";
  const emailNotDelivered = !isDemo && emailLive === "0";
  const smsNotDelivered = !isDemo && smsLive === "0";

  return (
    <div className="bg-paper-50 py-14 sm:py-20">
      {/* The only place on the site that reports a Google Ads conversion. It
          fires once per request number, not once per page view — see the guard
          in GoogleAdsConversion. Demo submissions are excluded: they are not
          real jobs and must not be optimized against. */}
      {googleAdsConversionSendTo && !isDemo && (
        <GoogleAdsConversion sendTo={googleAdsConversionSendTo} requestNumber={requestNumber} />
      )}
      <Container size="narrow">
        <div className="rounded-3xl border border-ink-950/8 bg-white p-6 text-center shadow-sm sm:p-10 dark:border-white/10 dark:bg-ink-900">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-600/10 text-success-600">
            <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
          </span>
          <h1 className="mt-5 font-display text-2xl font-semibold text-ink-950 dark:text-white sm:text-3xl">
            Your request is in
          </h1>
          <p className="mt-2 text-ink-600 dark:text-ink-200">
            Status: <span className="font-semibold text-ink-950 dark:text-white">Received</span> — dispatch is
            reviewing it now. We&apos;ll text and email you as soon as a driver is on the way.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink-950/10 px-4 py-2 font-mono text-sm font-semibold text-ink-900 dark:border-white/15 dark:text-white">
            <Radio className="h-4 w-4 text-red-600" aria-hidden="true" />
            {requestNumber}
          </div>

          {(name || service || pickup) && (
            <dl className="mt-6 grid grid-cols-1 gap-3 rounded-2xl border border-ink-950/8 p-4 text-left text-sm sm:grid-cols-2 dark:border-white/10">
              {name && (
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-400">Name</dt>
                  <dd className="mt-0.5 font-medium text-ink-900 dark:text-white">{name}</dd>
                </div>
              )}
              {service && (
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-400">Service</dt>
                  <dd className="mt-0.5 font-medium text-ink-900 dark:text-white">{service}</dd>
                </div>
              )}
              {pickup && (
                <div className="sm:col-span-2">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-ink-400">Pickup location</dt>
                  <dd className="mt-0.5 font-medium text-ink-900 dark:text-white">{pickup}</dd>
                </div>
              )}
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wide text-ink-400">Support</dt>
                <dd className="mt-0.5 font-medium text-ink-900 dark:text-white">{BUSINESS.phoneDisplay}</dd>
              </div>
            </dl>
          )}

          {isDemo && (
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-left text-sm text-amber-800 dark:text-amber-300">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <p>
                <span className="font-semibold">Demo mode:</span> Supabase isn&apos;t connected on this install, so
                your request wasn&apos;t saved to a database, and your confirmation email/SMS were recorded in the
                server log only — they were <span className="font-semibold">not actually delivered</span>. Connect
                Supabase, Resend, and Twilio to go live.
              </p>
            </div>
          )}

          {!isDemo && (emailNotDelivered || smsNotDelivered) && (
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4 text-left text-sm text-amber-800 dark:text-amber-300">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <p>
                <span className="font-semibold">Partial configuration:</span> Your request was saved, but{" "}
                {emailNotDelivered && smsNotDelivered
                  ? "email and SMS notifications aren't configured yet"
                  : emailNotDelivered
                  ? "email notifications aren't configured yet"
                  : "SMS notifications aren't configured yet"}
                , so that confirmation was logged rather than delivered. Call dispatch if you don&apos;t hear back.
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {token && (
              <Button href={`/t/${token}`} size="lg">
                View Live Tracking
              </Button>
            )}
            <Button href={BUSINESS.phoneHref} variant="outline" size="lg" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
              Call Dispatch
            </Button>
          </div>

          <p className="mt-8 text-sm text-ink-500 dark:text-ink-300">
            Save this page or the link sent to you — you can reopen your tracking link anytime before
            your request is completed.{" "}
            <Link href="/" className="font-medium text-red-600 hover:underline">
              Return home
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}
