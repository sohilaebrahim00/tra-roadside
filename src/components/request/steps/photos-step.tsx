"use client";

import { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import { Camera, X, Loader2, ImagePlus } from "lucide-react";
import { StepShell } from "../step-shell";
import { compressImage } from "@/lib/utils/image-compression";
import { cn } from "@/lib/utils/cn";
import type { CreateRequestInput } from "@/lib/validation/request";

interface PhotoDraft {
  id: string;
  previewUrl: string;
  kind: "vehicle" | "damage" | "location";
  status: "uploading" | "done" | "error";
  storagePath?: string;
}

const KIND_LABELS: Record<PhotoDraft["kind"], string> = {
  vehicle: "Vehicle",
  damage: "Damage / Issue",
  location: "Surroundings",
};

export function PhotosStep({
  onNext,
  onBack,
  draftId,
}: {
  onNext: () => void;
  onBack: () => void;
  draftId: string;
}) {
  const { setValue } = useFormContext<CreateRequestInput>();
  const [drafts, setDrafts] = useState<PhotoDraft[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function syncFormValue(next: PhotoDraft[]) {
    setValue(
      "photos",
      next.filter((d) => d.status === "done" && d.storagePath).map((d) => ({ storagePath: d.storagePath!, kind: d.kind }))
    );
  }

  async function handleFiles(files: FileList | null, kind: PhotoDraft["kind"]) {
    if (!files || files.length === 0) return;
    const remainingSlots = 6 - drafts.length;
    const selected = Array.from(files).slice(0, remainingSlots);

    for (const file of selected) {
      const id = crypto.randomUUID();
      const previewUrl = URL.createObjectURL(file);
      setDrafts((prev) => {
        const next = [...prev, { id, previewUrl, kind, status: "uploading" as const }];
        return next;
      });

      try {
        const compressed = await compressImage(file);
        const formData = new FormData();
        formData.append("file", compressed);
        formData.append("kind", kind);
        formData.append("draftId", draftId);
        const res = await fetch("/api/uploads", { method: "POST", body: formData });
        if (!res.ok) throw new Error("upload failed");
        const data = await res.json();
        setDrafts((prev) => {
          const next = prev.map((d) => (d.id === id ? { ...d, status: "done" as const, storagePath: data.storagePath } : d));
          syncFormValue(next);
          return next;
        });
      } catch {
        setDrafts((prev) => prev.map((d) => (d.id === id ? { ...d, status: "error" as const } : d)));
      }
    }
  }

  function removePhoto(id: string) {
    setDrafts((prev) => {
      const next = prev.filter((d) => d.id !== id);
      syncFormValue(next);
      return next;
    });
  }

  return (
    <StepShell
      title="Add photos (optional)"
      description="Photos of your vehicle or the issue help your driver prepare — this step is optional."
      onBack={onBack}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        multiple
        className="hidden"
        onChange={(e) => handleFiles(e.target.files, "vehicle")}
      />

      <div className="grid grid-cols-3 gap-3">
        {drafts.map((d) => (
          <div key={d.id} className="relative aspect-square overflow-hidden rounded-xl border border-ink-950/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={d.previewUrl} alt={KIND_LABELS[d.kind]} className="h-full w-full object-cover" />
            {d.status === "uploading" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <Loader2 className="h-5 w-5 animate-spin text-white" aria-hidden="true" />
              </div>
            )}
            {d.status === "error" && (
              <div className="absolute inset-0 flex items-center justify-center bg-red-600/70 text-center text-xs text-white">
                Upload failed
              </div>
            )}
            <button
              type="button"
              onClick={() => removePhoto(d.id)}
              className="absolute right-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-black/60 text-white"
              aria-label="Remove photo"
            >
              <X className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            <span className="absolute bottom-1 left-1 rounded bg-black/60 px-1.5 py-0.5 text-[0.6rem] font-medium text-white">
              {KIND_LABELS[d.kind]}
            </span>
          </div>
        ))}

        {drafts.length < 6 && (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className={cn(
              "flex aspect-square flex-col items-center justify-center gap-1.5 rounded-xl border-2 border-dashed border-ink-950/20 text-ink-400 hover:border-red-600/40 hover:text-red-600 dark:border-white/20"
            )}
          >
            <Camera className="h-6 w-6" aria-hidden="true" />
            <span className="text-xs font-medium">Add photo</span>
          </button>
        )}
      </div>

      <p className="mt-3 flex items-center gap-1.5 text-xs text-ink-500 dark:text-ink-300">
        <ImagePlus className="h-3.5 w-3.5" aria-hidden="true" /> Up to 6 photos, compressed automatically before upload.
      </p>

      <button
        type="button"
        onClick={onNext}
        className="mt-6 flex h-13 w-full items-center justify-center rounded-full bg-red-600 text-base font-bold text-white hover:bg-red-700"
      >
        Continue
      </button>
      <button
        type="button"
        onClick={onNext}
        className="mt-2 flex h-11 w-full items-center justify-center text-sm font-medium text-ink-500 dark:text-ink-300"
      >
        Skip this step
      </button>
    </StepShell>
  );
}
