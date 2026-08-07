"use client";

import { useFormContext } from "react-hook-form";
import { StepShell } from "../step-shell";
import { MapPicker, type LocationValue } from "../map-picker";
import type { CreateRequestInput } from "@/lib/validation/request";

export function LocationStep({ onNext }: { onNext: () => void }) {
  const { setValue, watch, formState: { errors }, trigger } = useFormContext<CreateRequestInput>();
  const value: LocationValue | null =
    watch("pickupLat") && watch("pickupLng")
      ? { lat: watch("pickupLat"), lng: watch("pickupLng"), address: watch("pickupAddress") }
      : null;

  async function handleNext() {
    const valid = await trigger(["pickupLat", "pickupLng", "pickupAddress"]);
    if (valid) onNext();
  }

  return (
    <StepShell title="Where are you?" description="Share your location so we can dispatch the nearest driver." showBack={false}>
      <MapPicker
        value={value}
        onChange={(loc) => {
          setValue("pickupLat", loc.lat, { shouldValidate: true });
          setValue("pickupLng", loc.lng, { shouldValidate: true });
          setValue("pickupAddress", loc.address, { shouldValidate: true });
        }}
      />
      {errors.pickupAddress && <p className="mt-2 text-sm text-red-600">{errors.pickupAddress.message}</p>}

      <button
        type="button"
        onClick={handleNext}
        className="mt-6 flex h-13 w-full items-center justify-center rounded-full bg-red-600 text-base font-bold text-white hover:bg-red-700"
      >
        Continue
      </button>
    </StepShell>
  );
}
