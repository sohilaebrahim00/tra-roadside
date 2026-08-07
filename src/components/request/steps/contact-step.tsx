"use client";

import { useFormContext } from "react-hook-form";
import Link from "next/link";
import { StepShell } from "../step-shell";
import { CONTACT_METHODS, type ContactMethod } from "@/lib/types/domain";
import { cn } from "@/lib/utils/cn";
import type { CreateRequestInput } from "@/lib/validation/request";

const METHOD_LABELS: Record<ContactMethod, string> = { call: "Call", sms: "Text", email: "Email" };

export function ContactStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const {
    register,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext<CreateRequestInput>();
  const method = watch("preferredContactMethod");
  const smsConsent = watch("smsConsent");
  const termsAccepted = watch("termsAccepted");

  async function handleNext() {
    const valid = await trigger(["fullName", "phone", "email", "termsAccepted"]);
    if (valid) onNext();
  }

  return (
    <StepShell title="How can we reach you?" description="We'll use this to send updates and your live tracking link." onBack={onBack}>
      <div className="space-y-4">
        <Field label="Full name" error={errors.fullName?.message}>
          <input {...register("fullName")} autoComplete="name" className={inputClass} />
        </Field>
        <Field label="Mobile number" error={errors.phone?.message}>
          <input {...register("phone")} type="tel" inputMode="tel" autoComplete="tel" placeholder="(555) 123-4567" className={inputClass} />
        </Field>
        <Field label="Email (optional)" error={errors.email?.message}>
          <input {...register("email")} type="email" autoComplete="email" className={inputClass} />
        </Field>

        {/* Honeypot — hidden from real users via CSS, not display:none, to avoid basic bot heuristics. */}
        <div className="absolute -left-[9999px]" aria-hidden="true">
          <label>
            Company website
            <input {...register("companyWebsite")} tabIndex={-1} autoComplete="off" />
          </label>
        </div>

        <div>
          <p className="text-sm font-medium text-ink-800 dark:text-ink-100">Preferred contact method</p>
          <div className="mt-2 flex gap-2">
            {CONTACT_METHODS.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setValue("preferredContactMethod", m)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium",
                  method === m ? "border-red-600 bg-red-600 text-white" : "border-ink-950/15 text-ink-700 dark:border-white/15 dark:text-ink-200"
                )}
              >
                {METHOD_LABELS[m]}
              </button>
            ))}
          </div>
        </div>

        <label className="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-200">
          <input
            type="checkbox"
            checked={smsConsent}
            onChange={(e) => setValue("smsConsent", e.target.checked)}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-ink-950/25 text-red-600 focus:ring-red-600"
          />
          <span>
            I agree to receive automated SMS updates about my request from TRA. Message and data
            rates may apply. See{" "}
            <Link href="/sms-terms" className="underline">
              SMS Terms
            </Link>
            .
          </span>
        </label>

        <label className="flex items-start gap-3 text-sm text-ink-700 dark:text-ink-200">
          <input
            type="checkbox"
            checked={termsAccepted === true}
            onChange={(e) => setValue("termsAccepted", e.target.checked as true, { shouldValidate: true })}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-ink-950/25 text-red-600 focus:ring-red-600"
          />
          <span>
            I agree to the{" "}
            <Link href="/terms" className="underline">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy-policy" className="underline">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {errors.termsAccepted && <p className="text-sm text-red-600">{errors.termsAccepted.message}</p>}
      </div>

      <button
        type="button"
        onClick={handleNext}
        className="mt-6 flex h-13 w-full items-center justify-center rounded-full bg-red-600 text-base font-bold text-white hover:bg-red-700"
      >
        Review Request
      </button>
    </StepShell>
  );
}

const inputClass =
  "mt-1.5 w-full rounded-xl border border-ink-950/15 px-3.5 py-3 text-base focus:border-red-600 focus:outline-none dark:border-white/15 dark:bg-ink-900";

function Field({ label, children, error }: { label: string; children: React.ReactNode; error?: string }) {
  return (
    <label className="block text-sm font-medium text-ink-800 dark:text-ink-100">
      {label}
      {children}
      {error && <span className="mt-1 block text-sm font-normal text-red-600">{error}</span>}
    </label>
  );
}
