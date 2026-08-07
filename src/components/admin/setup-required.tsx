import { Database, ExternalLink } from "lucide-react";
import { integrationStatus } from "@/lib/env";

export function SetupRequired({ area }: { area: string }) {
  const statuses = integrationStatus();

  return (
    <div className="mx-auto flex min-h-screen max-w-lg flex-col items-center justify-center px-4 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-950 text-white">
        <Database className="h-6 w-6" aria-hidden="true" />
      </span>
      <h1 className="mt-5 font-display text-2xl font-semibold text-ink-950 dark:text-white">
        {area} requires Supabase
      </h1>
      <p className="mt-2 text-ink-600 dark:text-ink-200">
        This install is running in demo mode. Connect Supabase to enable authentication, the
        request queue, and driver tracking data.
      </p>

      <div className="mt-6 w-full space-y-2 rounded-2xl border border-ink-950/8 p-4 text-left dark:border-white/10">
        {statuses.map((s) => (
          <div key={s.key} className="flex items-center justify-between gap-3 py-1.5 text-sm">
            <span className="text-ink-700 dark:text-ink-200">{s.label}</span>
            <span
              className={
                s.configured
                  ? "rounded-full bg-success-600/10 px-2.5 py-0.5 text-xs font-semibold text-success-600"
                  : "rounded-full bg-amber-500/10 px-2.5 py-0.5 text-xs font-semibold text-amber-600"
              }
            >
              {s.configured ? "Configured" : "Missing"}
            </span>
          </div>
        ))}
      </div>

      <a
        href="https://supabase.com/docs/guides/getting-started"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-red-600 hover:text-red-700"
      >
        Supabase setup guide <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
      <p className="mt-2 text-xs text-ink-400">See README.md in the project root for full setup steps.</p>
    </div>
  );
}
