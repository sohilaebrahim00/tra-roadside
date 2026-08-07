"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence } from "framer-motion";
import { createRequestSchema, type CreateRequestInput, type RequestStep } from "@/lib/validation/request";
import { getService } from "@/lib/content/services";
import { StepProgress } from "./step-shell";
import { LocationStep } from "./steps/location-step";
import { ServiceStep } from "./steps/service-step";
import { VehicleStep } from "./steps/vehicle-step";
import { DestinationStep } from "./steps/destination-step";
import { PhotosStep } from "./steps/photos-step";
import { ContactStep } from "./steps/contact-step";
import { ReviewStep } from "./steps/review-step";

const DRAFT_KEY = "tra-request-draft-v1";

function defaultValues(initialService: string | undefined, clientRequestId: string): Partial<CreateRequestInput> {
  return {
    pickupLat: undefined,
    pickupLng: undefined,
    pickupAddress: "",
    serviceSlug: (initialService as CreateRequestInput["serviceSlug"]) ?? undefined,
    vehicleType: "sedan",
    isDrivable: null,
    truckType: "",
    truckUnitNumber: "",
    trailerAttached: null,
    photos: [],
    preferredContactMethod: "call",
    smsConsent: false,
    termsAccepted: undefined,
    clientRequestId,
  };
}

export function RequestWizard({ initialService }: { initialService?: string }) {
  const router = useRouter();
  const draftId = useRef(crypto.randomUUID()).current;
  const clientRequestId = useRef(crypto.randomUUID()).current;

  const methods = useForm<CreateRequestInput>({
    resolver: zodResolver(createRequestSchema),
    mode: "onChange",
    defaultValues: defaultValues(initialService, clientRequestId),
  });

  const [step, setStep] = useState<RequestStep>(initialService ? "location" : "location");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const submittedRef = useRef(false);

  // Restore an in-progress draft (e.g. after an accidental refresh).
  useEffect(() => {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      if (parsed?.values) methods.reset(parsed.values);
      if (parsed?.step) setStep(parsed.step);
    } catch {
      // ignore corrupt draft
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Autosave on every change, debounced.
  const values = methods.watch();
  useEffect(() => {
    const handle = setTimeout(() => {
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify({ values, step }));
    }, 400);
    return () => clearTimeout(handle);
  }, [values, step]);

  const selectedService = getService(methods.watch("serviceSlug"));
  const activeSteps = useMemo<RequestStep[]>(() => {
    const base: RequestStep[] = ["location", "service", "vehicle"];
    if (selectedService?.needsDestination) base.push("destination");
    base.push("photos", "contact", "review");
    return base;
  }, [selectedService]);

  function goNext() {
    const idx = activeSteps.indexOf(step);
    const next = activeSteps[Math.min(idx + 1, activeSteps.length - 1)];
    setStep(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function goBack() {
    const idx = activeSteps.indexOf(step);
    const prev = activeSteps[Math.max(idx - 1, 0)];
    setStep(prev);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit() {
    if (submittedRef.current) return;
    const valid = await methods.trigger();
    if (!valid) return;

    submittedRef.current = true;
    setSubmitting(true);
    setSubmitError(null);

    try {
      const payload: CreateRequestInput = { ...methods.getValues(), clientRequestId };
      const res = await fetch("/api/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error ?? "Something went wrong. Please try again.");
      }

      const data = await res.json();
      window.localStorage.removeItem(DRAFT_KEY);
      const params = new URLSearchParams({ token: data.trackingToken });
      if (data.demo) params.set("demo", "1");
      if (data.channelsLive?.email === false) params.set("emailLive", "0");
      if (data.channelsLive?.sms === false) params.set("smsLive", "0");
      if (data.customerName) params.set("name", data.customerName);
      if (data.serviceName) params.set("service", data.serviceName);
      if (data.pickupAddress) params.set("pickup", data.pickupAddress);
      router.push(`/request/confirmation/${data.requestNumber}?${params.toString()}`);
    } catch (err) {
      submittedRef.current = false;
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <FormProvider {...methods}>
      <div className="mb-6">
        <StepProgress activeSteps={activeSteps} current={step} />
      </div>
      <AnimatePresence mode="wait">
        {step === "location" && <LocationStep key="location" onNext={goNext} />}
        {step === "service" && <ServiceStep key="service" onNext={goNext} onBack={goBack} />}
        {step === "vehicle" && <VehicleStep key="vehicle" onNext={goNext} onBack={goBack} />}
        {step === "destination" && <DestinationStep key="destination" onNext={goNext} onBack={goBack} />}
        {step === "photos" && <PhotosStep key="photos" onNext={goNext} onBack={goBack} draftId={draftId} />}
        {step === "contact" && <ContactStep key="contact" onNext={goNext} onBack={goBack} />}
        {step === "review" && (
          <ReviewStep
            key="review"
            onBack={goBack}
            onEdit={setStep}
            onSubmit={handleSubmit}
            submitting={submitting}
            submitError={submitError}
          />
        )}
      </AnimatePresence>
    </FormProvider>
  );
}
