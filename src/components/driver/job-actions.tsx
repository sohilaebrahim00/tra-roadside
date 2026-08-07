"use client";

import { useState, useTransition } from "react";
import { Loader2, AlertTriangle } from "lucide-react";
import { updateJobStatus, addJobNote } from "@/app/driver/(protected)/actions";
import { REQUEST_STATUS_TRANSITIONS, type RequestStatus } from "@/lib/types/domain";

const ACTION_LABELS: Partial<Record<RequestStatus, string>> = {
  driver_en_route: "Accept & Start Trip",
  driver_nearby: "Mark Nearby",
  arrived: "Mark Arrived",
  in_progress: "Start Service",
  completed: "Complete Service",
  unable_to_complete: "Unable to Complete",
};

export function JobActions({ requestId, currentStatus }: { requestId: string; currentStatus: RequestStatus }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const options = (REQUEST_STATUS_TRANSITIONS[currentStatus] ?? []).filter((s) => s !== "canceled");

  if (options.length === 0) {
    return <p className="rounded-xl bg-paper-50 p-4 text-center text-sm text-ink-500">This job is closed out.</p>;
  }

  return (
    <div className="space-y-2.5">
      {options.map((status) => (
        <button
          key={status}
          disabled={isPending}
          onClick={() =>
            startTransition(async () => {
              setError(null);
              try {
                await updateJobStatus(requestId, status);
              } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to update");
              }
            })
          }
          className={
            status === "unable_to_complete"
              ? "flex h-13 w-full items-center justify-center gap-2 rounded-2xl border-2 border-red-600 text-base font-bold text-red-600 disabled:opacity-50"
              : "flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-red-600 text-base font-bold uppercase text-white disabled:opacity-50"
          }
        >
          {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === "unable_to_complete" && <AlertTriangle className="h-4 w-4" aria-hidden="true" />}
          {ACTION_LABELS[status] ?? status}
        </button>
      ))}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

export function JobNoteForm({ requestId }: { requestId: string }) {
  const [note, setNote] = useState("");
  const [isPending, startTransition] = useTransition();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!note.trim()) return;
        startTransition(async () => {
          await addJobNote(requestId, note);
          setNote("");
        });
      }}
      className="flex gap-2"
    >
      <input
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Add a note for dispatch…"
        className="h-11 flex-1 rounded-xl border border-ink-950/15 px-3 text-sm"
      />
      <button disabled={isPending} className="rounded-xl bg-ink-950 px-4 text-sm font-semibold text-white disabled:opacity-50">
        Add
      </button>
    </form>
  );
}
