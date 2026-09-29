"use client";

import { useFormContext } from "react-hook-form";
import { StepShell } from "../step-shell";
import { MapPicker, type LocationPoint } from "../map-picker";
import type { CreateRequestInput } from "@/lib/validation/request";

export function DestinationStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const { setValue, watch, register } = useFormContext<CreateRequestInput>();
  const lat = watch("destinationLat");
  const lng = watch("destinationLng");
  const address = watch("destinationAddress");
  const value: LocationPoint | null = lat && lng ? { lat, lng, address: address ?? "" } : null;

  return (
    <StepShell title="Where should we take it?" description="Tell us your preferred shop, dealership, or destination." onBack={onBack}>
      <MapPicker
        value={value}
        onChange={(loc) => {
          setValue("destinationLat", loc.lat);
          setValue("destinationLng", loc.lng);
          setValue("destinationAddress", loc.address);
        }}
      />

      <label className="mt-5 block text-sm font-medium text-ink-800 dark:text-ink-100">
        Destination notes (optional)
        <textarea
          {...register("destinationNotes")}
          rows={2}
          placeholder="e.g. ask for the service bay entrance"
          className="mt-1.5 w-full rounded-xl border border-ink-950/15 px-3.5 py-3 text-base focus:border-red-600 focus:outline-none dark:border-white/15 dark:bg-ink-900"
        />
      </label>

      <button
        type="button"
        onClick={onNext}
        className="mt-6 flex h-13 w-full items-center justify-center rounded-full bg-red-600 text-base font-bold text-white hover:bg-red-700"
      >
        Continue
      </button>
    </StepShell>
  );
}
