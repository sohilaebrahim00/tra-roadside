"use client";

import { useState, useTransition } from "react";
import { Loader2 } from "lucide-react";
import { updateRequestStatus, assignDriver, addInternalNote } from "@/app/admin/(protected)/requests/[id]/actions";
import { REQUEST_STATUS_TRANSITIONS, STATUS_META, type RequestStatus } from "@/lib/types/domain";

export function StatusActions({ requestId, currentStatus }: { requestId: string; currentStatus: RequestStatus }) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const options = REQUEST_STATUS_TRANSITIONS[currentStatus] ?? [];

  if (options.length === 0) {
    return <p className="text-sm text-ink-400">This request is closed out — no further status changes available.</p>;
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {options.map((status) => (
          <button
            key={status}
            disabled={isPending}
            onClick={() =>
              startTransition(async () => {
                setError(null);
                try {
                  await updateRequestStatus(requestId, status);
                } catch (err) {
                  setError(err instanceof Error ? err.message : "Failed to update status");
                }
              })
            }
            className="rounded-full border border-ink-950/15 px-4 py-2 text-sm font-semibold text-ink-800 hover:border-red-600 hover:text-red-600 disabled:opacity-50 dark:border-white/15 dark:text-white"
          >
            Mark {STATUS_META[status].label}
          </button>
        ))}
      </div>
      {isPending && <p className="mt-2 flex items-center gap-1.5 text-xs text-ink-400"><Loader2 className="h-3.5 w-3.5 animate-spin" /> Updating…</p>}
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export function DriverAssign({
  requestId,
  currentDriverId,
  drivers,
}: {
  requestId: string;
  currentDriverId: string | null;
  drivers: { id: string; full_name: string; status: string }[];
}) {
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState(currentDriverId ?? "");
  const [error, setError] = useState<string | null>(null);

  return (
    <div>
      <div className="flex gap-2">
        <select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="h-10 flex-1 rounded-lg border border-ink-950/15 px-3 text-sm dark:border-white/15 dark:bg-ink-900"
        >
          <option value="">Select a driver…</option>
          {drivers.map((d) => (
            <option key={d.id} value={d.id}>
              {d.full_name} ({d.status})
            </option>
          ))}
        </select>
        <button
          disabled={!value || isPending}
          onClick={() =>
            startTransition(async () => {
              setError(null);
              try {
                await assignDriver(requestId, value);
              } catch (err) {
                setError(err instanceof Error ? err.message : "Failed to assign driver");
              }
            })
          }
          className="rounded-lg bg-ink-950 px-4 text-sm font-semibold text-white disabled:opacity-50 dark:bg-white dark:text-ink-950"
        >
          Assign
        </button>
      </div>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export function NotesForm({ requestId }: { requestId: string }) {
  const [isPending, startTransition] = useTransition();
  const [body, setBody] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!body.trim()) return;
        startTransition(async () => {
          await addInternalNote(requestId, body);
          setBody("");
        });
      }}
      className="flex gap-2"
    >
      <input
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Add an internal note…"
        className="h-10 flex-1 rounded-lg border border-ink-950/15 px-3 text-sm dark:border-white/15 dark:bg-ink-900"
      />
      <button disabled={isPending} className="rounded-lg bg-ink-950 px-4 text-sm font-semibold text-white disabled:opacity-50 dark:bg-white dark:text-ink-950">
        Add
      </button>
    </form>
  );
}
