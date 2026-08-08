"use client";

import { useFormContext } from "react-hook-form";
import { Loader2 } from "lucide-react";
import { StepShell } from "../step-shell";
import { getService } from "@/lib/content/services";
import type { CreateRequestInput } from "@/lib/validation/request";
import type { RequestStep } from "@/lib/validation/request";

export function ReviewStep({
  onBack,
  onEdit,
  onSubmit,
  submitting,
  submitError,
}: {
  onBack: () => void;
  onEdit: (step: RequestStep) => void;
  onSubmit: () => void;
  submitting: boolean;
  submitError: string | null;
}) {
  const { getValues } = useFormContext<CreateRequestInput>();
  const values = getValues();
  const service = getService(values.serviceSlug);

  return (
    <StepShell title="Review your request" description="Confirm everything looks right before submitting." onBack={onBack}>
      <div className="space-y-4">
        <SummaryRow
          label="Service"
          value={service?.startingPrice ? `${service.name} · Starting at $${service.startingPrice}` : service?.name ?? "—"}
          onEdit={() => onEdit("service")}
        />
        <SummaryRow label="Location" value={values.pickupAddress || "—"} onEdit={() => onEdit("location")} />
        <SummaryRow
          label="Vehicle"
          value={[values.vehicleYear, values.vehicleMake, values.vehicleModel, values.vehicleColor].filter(Boolean).join(" ") || "Not provided"}
          onEdit={() => onEdit("vehicle")}
        />
        {service?.needsDestination && (
          <SummaryRow label="Destination" value={values.destinationAddress || "Not provided"} onEdit={() => onEdit("destination")} />
        )}
        {values.notes && <SummaryRow label="Details" value={values.notes} onEdit={() => onEdit("vehicle")} />}
        <SummaryRow label="Photos" value={`${values.photos?.length ?? 0} attached`} onEdit={() => onEdit("photos")} />
        <SummaryRow
          label="Contact"
          value={`${values.fullName} · ${values.phone}${values.email ? " · " + values.email : ""}`}
          onEdit={() => onEdit("contact")}
        />
      </div>

      {service?.startingPrice && (
        <div className="mt-4 rounded-xl border border-ink-950/8 bg-paper-50 px-4 py-3 dark:border-white/10 dark:bg-white/5">
          <p className="text-sm font-semibold text-ink-900 dark:text-white">Starting price: ${service.startingPrice}</p>
          <p className="mt-1 text-xs text-ink-500 dark:text-ink-300">
            Final price may vary depending on vehicle, location, and service requirements.
          </p>
          {service.slug === "battery-replacement" && (
            <p className="mt-1 text-xs text-ink-500 dark:text-ink-300">
              Includes a 2-year battery warranty. Keep your invoice for warranty service.
            </p>
          )}
        </div>
      )}

      {submitError && (
        <p className="mt-4 rounded-lg bg-red-600/10 px-3 py-2.5 text-sm text-red-700 dark:text-red-400">{submitError}</p>
      )}

      <button
        type="button"
        onClick={onSubmit}
        disabled={submitting}
        className="mt-6 flex h-14 w-full items-center justify-center gap-2 rounded-full bg-red-600 text-base font-bold uppercase tracking-wide text-white hover:bg-red-700 disabled:opacity-70"
      >
        {submitting && <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />}
        {submitting ? "Submitting…" : "Submit Request"}
      </button>
    </StepShell>
  );
}

function SummaryRow({ label, value, onEdit }: { label: string; value: string; onEdit: () => void }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-xl border border-ink-950/8 px-4 py-3 dark:border-white/10">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-ink-400">{label}</p>
        <p className="mt-0.5 text-sm font-medium text-ink-900 dark:text-white">{value}</p>
      </div>
      <button type="button" onClick={onEdit} className="shrink-0 text-sm font-semibold text-red-600 hover:text-red-700">
        Edit
      </button>
    </div>
  );
}
