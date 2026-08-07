"use client";

import { useFormContext } from "react-hook-form";
import { Check } from "lucide-react";
import { StepShell } from "../step-shell";
import { SERVICES } from "@/lib/content/services";
import { SERVICE_ICONS } from "@/lib/content/service-icons";
import { cn } from "@/lib/utils/cn";
import type { CreateRequestInput } from "@/lib/validation/request";

export function ServiceStep({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  const { watch, setValue, trigger, formState: { errors } } = useFormContext<CreateRequestInput>();
  const selected = watch("serviceSlug");

  async function handleSelect(slug: CreateRequestInput["serviceSlug"]) {
    setValue("serviceSlug", slug, { shouldValidate: true });
    const valid = await trigger("serviceSlug");
    if (valid) onNext();
  }

  return (
    <StepShell title="What do you need?" description="Select the service that best matches your situation." onBack={onBack}>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = SERVICE_ICONS[service.slug];
          const isSelected = selected === service.slug;
          return (
            <button
              key={service.slug}
              type="button"
              onClick={() => handleSelect(service.slug)}
              className={cn(
                "relative flex flex-col items-center gap-2 rounded-2xl border-2 px-3 py-5 text-center transition-colors",
                isSelected
                  ? "border-red-600 bg-red-600/5"
                  : "border-ink-950/10 hover:border-ink-950/25 dark:border-white/10"
              )}
            >
              {isSelected && (
                <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-white">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
              )}
              <Icon className={cn("h-7 w-7", isSelected ? "text-red-600" : "text-ink-500 dark:text-ink-300")} aria-hidden="true" />
              <span className="text-sm font-semibold text-ink-900 dark:text-white">{service.shortName}</span>
            </button>
          );
        })}
      </div>
      {errors.serviceSlug && <p className="mt-3 text-sm text-red-600">{errors.serviceSlug.message}</p>}
    </StepShell>
  );
}
