"use client";

import { useState, useTransition } from "react";
import { Loader2 } from "lucide-react";
import { updateSetting } from "@/app/admin/(protected)/settings/actions";

export function SettingsForm({
  dispatchEmail,
  timeoutMinutes,
}: {
  dispatchEmail: string;
  timeoutMinutes: number;
}) {
  const [email, setEmail] = useState(dispatchEmail);
  const [minutes, setMinutes] = useState(timeoutMinutes);
  const [isPending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);

  return (
    <div className="max-w-md space-y-4 rounded-2xl border border-ink-950/8 bg-white p-5 dark:border-white/10 dark:bg-ink-900">
      <label className="block text-sm font-medium text-ink-800 dark:text-ink-100">
        Dispatch notification email
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-ink-950/15 px-3.5 py-2.5 dark:border-white/15 dark:bg-ink-800"
        />
      </label>
      <label className="block text-sm font-medium text-ink-800 dark:text-ink-100">
        Unaccepted request timeout (minutes)
        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
          className="mt-1.5 w-full rounded-xl border border-ink-950/15 px-3.5 py-2.5 dark:border-white/15 dark:bg-ink-800"
        />
      </label>
      <button
        disabled={isPending}
        onClick={() =>
          startTransition(async () => {
            await updateSetting("dispatch_notification_email", email);
            await updateSetting("unaccepted_request_timeout_minutes", minutes);
            setSaved(true);
            setTimeout(() => setSaved(false), 1500);
          })
        }
        className="flex items-center gap-2 rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold text-white disabled:opacity-60"
      >
        {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
        Save Settings
      </button>
      {saved && <span className="ml-3 text-sm text-success-600">Saved</span>}
    </div>
  );
}
