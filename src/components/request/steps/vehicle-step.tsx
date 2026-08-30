"use client";

import { useFormContext } from "react-hook-form";
import { BatteryFull, ShieldCheck } from "lucide-react";
import { StepShell } from "../step-shell";
import { VEHICLE_TYPES, type VehicleType } from "@/lib/types/domain";
import { cn } from "@/lib/utils/cn";
import { getService } from "@/lib/content/services";
import { VIN_LENGTH, type CreateRequestInput } from "@/lib/validation/request";

const VEHICLE_TYPE_LABELS: Record<VehicleType, string> = {
  sedan: "Sedan",
  suv: "SUV",
  pickup_truck: "Pickup Truck",
  van: "Van",
  motorcycle: "Motorcycle",
  box_truck: "Box Truck",
  semi_truck: "Semi / 18-Wheeler",
  other: "Other",
};

export function VehicleStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const { register, watch, setValue, trigger, formState: { errors } } = useFormContext<CreateRequestInput>();
  const vehicleType = watch("vehicleType");
  const isDrivable = watch("isDrivable");
  const serviceSlug = watch("serviceSlug");
  const trailerAttached = watch("trailerAttached");
  const isTruck = serviceSlug === "truck-assistance";
  const isOther = serviceSlug === "other-roadside-service";
  const isBattery = serviceSlug === "battery-replacement";
  const vinField = register("vehicleVin");
  const selectedService = serviceSlug ? getService(serviceSlug) : undefined;
  const notesLabel = isOther
    ? "Tell us what kind of roadside help you need *"
    : isTruck
    ? "Description of the problem *"
    : "Anything else we should know? (optional)";
  const notesPlaceholder = isOther
    ? "Describe what's going on so dispatch can confirm the right help"
    : isTruck
    ? "e.g. blown steer tire, won't start, brakes locked up"
    : "e.g. parked on the shoulder of I-35, near exit 12";

  async function handleNext() {
    const fields: (keyof CreateRequestInput)[] = ["vehicleYear", "vehicleMake", "vehicleModel", "vehicleColor", "vehicleType"];
    if (isBattery) fields.push("vehicleVin");
    if (isTruck) fields.push("truckType", "truckUnitNumber", "trailerAttached");
    if (isTruck || isOther) fields.push("notes");
    const valid = await trigger(fields);
    if (valid) onNext();
  }

  return (
    <StepShell title="Tell us about your vehicle" description="This helps your driver arrive prepared." onBack={onBack}>
      {isBattery && selectedService?.startingPrice && (
        <div className="mb-5 flex items-center gap-3 rounded-2xl bg-red-600 p-4 text-white">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
            <BatteryFull className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <p className="font-display text-base font-bold">Battery Replacement · Starting at ${selectedService.startingPrice}</p>
            <p className="mt-0.5 flex items-center gap-1.5 text-sm text-white/90">
              <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" /> 2-Year Warranty included
            </p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3">
        <Field label={isBattery ? "Year *" : "Year"} error={errors.vehicleYear?.message}>
          <input {...register("vehicleYear")} inputMode="numeric" placeholder="2019" aria-required={isBattery} className={inputClass} />
        </Field>
        <Field label="Color">
          <input {...register("vehicleColor")} placeholder="Silver" className={inputClass} />
        </Field>
        <Field label={isBattery ? "Make *" : "Make"} error={errors.vehicleMake?.message}>
          <input {...register("vehicleMake")} placeholder="Toyota" aria-required={isBattery} className={inputClass} />
        </Field>
        <Field label={isBattery ? "Model *" : "Model"} error={errors.vehicleModel?.message}>
          <input {...register("vehicleModel")} placeholder="Camry" aria-required={isBattery} className={inputClass} />
        </Field>
        <Field label="License Plate (optional)" full>
          <input {...register("vehicleLicensePlate")} placeholder="ABC-1234" className={inputClass} />
        </Field>
      </div>

      <p className="mt-5 text-sm font-medium text-ink-800 dark:text-ink-100">Vehicle type</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {VEHICLE_TYPES.map((type) => (
          <button
            key={type}
            type="button"
            onClick={() => setValue("vehicleType", type, { shouldValidate: true })}
            className={cn(
              "rounded-full border px-3.5 py-2 text-sm font-medium",
              vehicleType === type
                ? "border-red-600 bg-red-600 text-white"
                : "border-ink-950/15 text-ink-700 dark:border-white/15 dark:text-ink-200"
            )}
          >
            {VEHICLE_TYPE_LABELS[type]}
          </button>
        ))}
      </div>

      <p className="mt-5 text-sm font-medium text-ink-800 dark:text-ink-100">Is the vehicle drivable?</p>
      <div className="mt-2 flex gap-2">
        {[
          { label: "Yes", val: true },
          { label: "No", val: false },
          { label: "Not sure", val: null },
        ].map((opt) => (
          <button
            key={opt.label}
            type="button"
            onClick={() => setValue("isDrivable", opt.val)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium",
              isDrivable === opt.val
                ? "border-red-600 bg-red-600 text-white"
                : "border-ink-950/15 text-ink-700 dark:border-white/15 dark:text-ink-200"
            )}
          >
            {opt.label}
          </button>
        ))}
      </div>


      {isBattery && (
        <div className="mt-5 rounded-2xl border border-red-600/20 bg-red-600/5 p-4">
          <p className="text-sm font-semibold text-ink-900 dark:text-white">Battery fitment</p>
          <Field label="VIN (optional)" full className="mt-3">
            <input
              {...vinField}
              onChange={(e) => {
                // Uppercase as they type. Cursor stays put because the value
                // is the same length — this is a case fold, not a reformat.
                e.target.value = e.target.value.toUpperCase();
                vinField.onChange(e);
              }}
              maxLength={VIN_LENGTH}
              autoCapitalize="characters"
              autoCorrect="off"
              spellCheck={false}
              placeholder="1HGBH41JXMN109186"
              aria-describedby="vin-hint"
              className={cn(inputClass, "font-mono tracking-wide")}
            />
          </Field>
          <p id="vin-hint" className="mt-1.5 text-xs text-ink-600 dark:text-ink-200">
            Helps us match the exact battery. Find it on the driver&apos;s side dashboard, seen
            through the windscreen, or on the sticker inside the driver&apos;s door jamb. Skip it if
            you can&apos;t reach it — year, make and model are enough to get us moving.
          </p>
          {errors.vehicleVin && (
            <p className="mt-1.5 text-sm text-red-600">{errors.vehicleVin.message}</p>
          )}
        </div>
      )}
      {isTruck && (
        <div className="mt-5 rounded-2xl border border-red-600/20 bg-red-600/5 p-4">
          <p className="text-sm font-semibold text-ink-900 dark:text-white">Truck details</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <Field label="Truck type (optional)">
              <input {...register("truckType")} placeholder="e.g. 18-wheeler, tractor-trailer" className={inputClass} />
            </Field>
            <Field label="Unit number (optional)">
              <input {...register("truckUnitNumber")} placeholder="e.g. 4521" className={inputClass} />
            </Field>
          </div>
          <p className="mt-4 text-sm font-medium text-ink-800 dark:text-ink-100">Trailer attached?</p>
          <div className="mt-2 flex gap-2">
            {[
              { label: "Yes", val: true },
              { label: "No", val: false },
            ].map((opt) => (
              <button
                key={opt.label}
                type="button"
                onClick={() => setValue("trailerAttached", opt.val)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium",
                  trailerAttached === opt.val
                    ? "border-red-600 bg-red-600 text-white"
                    : "border-ink-950/15 bg-white text-ink-700 dark:border-white/15 dark:bg-transparent dark:text-ink-200"
                )}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <Field label={notesLabel} full className="mt-5">
        <textarea
          {...register("notes")}
          rows={3}
          placeholder={notesPlaceholder}
          aria-required={isTruck || isOther}
          className={inputClass}
        />
      </Field>
      {errors.notes && <p className="mt-1.5 text-sm text-red-600">{errors.notes.message}</p>}

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

const inputClass =
  "mt-1.5 w-full rounded-xl border border-ink-950/15 px-3.5 py-3 text-base focus:border-red-600 focus:outline-none dark:border-white/15 dark:bg-ink-900";

function Field({ label, children, full, className, error }: { label: string; children: React.ReactNode; full?: boolean; className?: string; error?: string }) {
  return (
    <label className={cn("block text-sm font-medium text-ink-800 dark:text-ink-100", full && "col-span-2", className)}>
      {label}
      {children}
      {error && <span className="mt-1.5 block text-sm font-normal text-red-600">{error}</span>}
    </label>
  );
}
