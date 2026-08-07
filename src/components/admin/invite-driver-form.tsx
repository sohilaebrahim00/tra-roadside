"use client";

import { useState, useTransition } from "react";
import { Copy, Check, Loader2, UserPlus, X } from "lucide-react";
import { inviteDriver } from "@/app/admin/(protected)/drivers/actions";

export function InviteDriverForm() {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const [credentials, setCredentials] = useState<{ email: string; password: string } | null>(null);
  const [copied, setCopied] = useState(false);

  function handleSubmit(formData: FormData) {
    setError(null);
    const fullName = String(formData.get("fullName") ?? "");
    const email = String(formData.get("email") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const vehicleDescription = String(formData.get("vehicleDescription") ?? "");
    const licensePlate = String(formData.get("licensePlate") ?? "");

    startTransition(async () => {
      try {
        const { tempPassword } = await inviteDriver({ fullName, email, phone, vehicleDescription, licensePlate });
        setCredentials({ email, password: tempPassword });
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to invite driver");
      }
    });
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white"
      >
        <UserPlus className="h-4 w-4" aria-hidden="true" /> Invite Driver
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 dark:bg-ink-900">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold text-ink-950 dark:text-white">Invite a driver</h2>
          <button onClick={() => { setOpen(false); setCredentials(null); }} aria-label="Close">
            <X className="h-5 w-5 text-ink-400" />
          </button>
        </div>

        {credentials ? (
          <div className="mt-5">
            <p className="text-sm text-ink-600 dark:text-ink-200">
              Driver account created. Share these sign-in details securely — they&apos;ll be prompted
              to change the password after their first sign-in.
            </p>
            <div className="mt-4 space-y-2 rounded-xl bg-paper-50 p-4 font-mono text-sm dark:bg-white/5">
              <p>Email: {credentials.email}</p>
              <div className="flex items-center justify-between">
                <span>Password: {credentials.password}</span>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(credentials.password);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1500);
                  }}
                  className="text-ink-500 hover:text-red-600"
                  aria-label="Copy password"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <button
              onClick={() => { setOpen(false); setCredentials(null); }}
              className="mt-5 h-11 w-full rounded-full bg-ink-950 text-sm font-bold text-white dark:bg-white dark:text-ink-950"
            >
              Done
            </button>
          </div>
        ) : (
          <form action={handleSubmit} className="mt-5 space-y-3">
            <Field label="Full name" name="fullName" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Vehicle description" name="vehicleDescription" placeholder="e.g. Ford F-350 Tow Truck #04" />
            <Field label="License plate" name="licensePlate" />
            {error && <p className="text-sm text-red-600">{error}</p>}
            <button
              type="submit"
              disabled={isPending}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-red-600 text-sm font-bold text-white disabled:opacity-60"
            >
              {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
              Create driver account
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <label className="block text-sm font-medium text-ink-800 dark:text-ink-100">
      {label}
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-ink-950/15 px-3.5 py-2.5 text-sm focus:border-red-600 focus:outline-none dark:border-white/15 dark:bg-ink-800"
      />
    </label>
  );
}
