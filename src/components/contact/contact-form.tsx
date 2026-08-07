"use client";

import { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
          companyWebsite: form.get("companyWebsite"),
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-2 rounded-2xl border border-success-600/20 bg-success-600/5 p-8 text-center">
        <CheckCircle2 className="h-8 w-8 text-success-600" aria-hidden="true" />
        <p className="font-semibold text-ink-950 dark:text-white">Message sent</p>
        <p className="text-sm text-ink-500 dark:text-ink-300">We&apos;ll get back to you as soon as possible.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-sm font-medium text-ink-800 dark:text-ink-100">
        Name
        <input name="name" required className="mt-1.5 w-full rounded-xl border border-ink-950/15 px-3.5 py-3 focus:border-red-600 focus:outline-none dark:border-white/15 dark:bg-ink-900" />
      </label>
      <label className="block text-sm font-medium text-ink-800 dark:text-ink-100">
        Email
        <input name="email" type="email" required className="mt-1.5 w-full rounded-xl border border-ink-950/15 px-3.5 py-3 focus:border-red-600 focus:outline-none dark:border-white/15 dark:bg-ink-900" />
      </label>
      <label className="block text-sm font-medium text-ink-800 dark:text-ink-100">
        Message
        <textarea name="message" required rows={4} className="mt-1.5 w-full rounded-xl border border-ink-950/15 px-3.5 py-3 focus:border-red-600 focus:outline-none dark:border-white/15 dark:bg-ink-900" />
      </label>
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Company website
          <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {status === "error" && <p className="text-sm text-red-600">Something went wrong — please try again or call us directly.</p>}
      <button
        disabled={status === "sending"}
        className="flex h-12 items-center gap-2 rounded-full bg-red-600 px-6 text-sm font-bold uppercase text-white disabled:opacity-60"
      >
        {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
        Send Message
      </button>
    </form>
  );
}
