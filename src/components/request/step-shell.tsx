"use client";

import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { REQUEST_STEPS, type RequestStep } from "@/lib/validation/request";

const STEP_LABELS: Record<RequestStep, string> = {
  location: "Location",
  service: "Service",
  vehicle: "Vehicle",
  destination: "Destination",
  photos: "Photos",
  contact: "Contact",
  review: "Review",
};

export function StepProgress({ activeSteps, current }: { activeSteps: RequestStep[]; current: RequestStep }) {
  const index = activeSteps.indexOf(current);
  const percent = ((index + 1) / activeSteps.length) * 100;

  return (
    <div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-950/8 dark:bg-white/10">
        <motion.div
          className="h-full rounded-full bg-red-600"
          initial={false}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
      <p className="mt-2 text-xs font-medium text-ink-500 dark:text-ink-300">
        Step {index + 1} of {activeSteps.length} — {STEP_LABELS[current]}
      </p>
    </div>
  );
}

export function StepShell({
  title,
  description,
  children,
  onBack,
  showBack = true,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
  onBack?: () => void;
  showBack?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {showBack && onBack && (
        <button
          type="button"
          onClick={onBack}
          className="mb-4 flex items-center gap-1 text-sm font-medium text-ink-500 hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Back
        </button>
      )}
      <h1 className="font-display text-2xl font-semibold text-ink-950 dark:text-white sm:text-3xl">{title}</h1>
      {description && <p className="mt-2 text-ink-600 dark:text-ink-200">{description}</p>}
      <div className="mt-6">{children}</div>
    </motion.div>
  );
}

export { REQUEST_STEPS };
