"use client";

import { useState, useTransition } from "react";
import { Loader2 } from "lucide-react";
import { updateTemplate } from "@/app/admin/(protected)/notifications/actions";

interface Template {
  id: string;
  event: string;
  channel: string;
  subject: string | null;
  body: string;
  is_active: boolean;
}

export function TemplateEditor({ template }: { template: Template }) {
  const [subject, setSubject] = useState(template.subject ?? "");
  const [body, setBody] = useState(template.body);
  const [isActive, setIsActive] = useState(template.is_active);
  const [isPending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);

  return (
    <div className="rounded-2xl border border-ink-950/8 bg-white p-4 dark:border-white/10 dark:bg-ink-900">
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs font-semibold uppercase text-ink-400">
          {template.event} · {template.channel}
        </p>
        <label className="flex items-center gap-2 text-xs text-ink-500 dark:text-ink-300">
          <input type="checkbox" checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />
          Active
        </label>
      </div>
      {template.channel === "email" && (
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Subject"
          className="mt-2 w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm dark:border-white/15 dark:bg-ink-800"
        />
      )}
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={3}
        className="mt-2 w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm dark:border-white/15 dark:bg-ink-800"
      />
      <div className="mt-2 flex items-center gap-3">
        <button
          disabled={isPending}
          onClick={() =>
            startTransition(async () => {
              await updateTemplate(template.id, { subject, body, isActive });
              setSaved(true);
              setTimeout(() => setSaved(false), 1500);
            })
          }
          className="flex items-center gap-1.5 rounded-lg bg-ink-950 px-4 py-1.5 text-sm font-semibold text-white disabled:opacity-50 dark:bg-white dark:text-ink-950"
        >
          {isPending && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
          Save
        </button>
        {saved && <span className="text-xs text-success-600">Saved</span>}
      </div>
    </div>
  );
}
