"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageSquareText, Phone, Send, X } from "lucide-react";
import { ASK_SUGGESTIONS, answerQuestion, type AskAnswer } from "@/lib/content/ask-answers";
import { BUSINESS } from "@/lib/content/business";
import { priceSummary } from "@/lib/content/pricing";
import { openQuickRequest } from "@/lib/quick-request";

interface Exchange {
  question: string;
  answer: AskAnswer;
}

/**
 * The "Ask" panel: type or tap a question, get the answer from the site's own
 * content (ask-answers.ts), with a one-tap way to request help or call. A native
 * <dialog>, for its focus trap and Esc to close.
 */
export function AskPanel({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const [exchanges, setExchanges] = useState<Exchange[]>([]);
  const [draft, setDraft] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
    const { overflow } = document.documentElement.style;
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.documentElement.style.overflow = overflow;
    };
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end", behavior: "smooth" });
  }, [exchanges]);

  function ask(question: string) {
    const q = question.trim();
    if (!q) return;
    setExchanges((list) => [...list, { question: q, answer: answerQuestion(q) }]);
    setDraft("");
  }

  function requestHelp(service?: string) {
    dialogRef.current?.close();
    openQuickRequest(service);
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-labelledby="ask-title"
      style={{ colorScheme: "light" }}
      className="fixed inset-x-0 bottom-0 top-auto m-0 w-full max-w-none overflow-hidden rounded-t-3xl bg-white p-0 text-ink-950 shadow-2xl backdrop:bg-ink-950/60 sm:inset-auto sm:bottom-6 sm:right-6 sm:max-w-md sm:rounded-3xl"
    >
      <div className="flex h-[85dvh] flex-col sm:h-[36rem] sm:max-h-[85dvh]">
        <header className="flex items-start justify-between gap-3 border-b border-ink-950/10 px-5 py-4">
          <div>
            <h2 id="ask-title" className="font-display text-xl font-bold leading-tight">
              Ask TRA
            </h2>
            <p className="mt-0.5 text-xs text-ink-500">Instant answers from our site · a real dispatcher is one tap away</p>
          </div>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full hover:bg-ink-950/5"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </header>

        <div className="flex-1 space-y-4 overflow-y-auto overscroll-contain px-5 py-4" aria-live="polite">
          <p className="text-sm text-ink-600">Ask about prices, services, your city, or how fast we can reach you.</p>

          {exchanges.map(({ question, answer }, i) => (
            <div key={i} className="space-y-2">
              <p className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-ink-950 px-3.5 py-2 text-sm text-white">{question}</p>
              <div className="w-fit max-w-[92%] rounded-2xl rounded-bl-md bg-paper-50 px-3.5 py-2.5 text-sm leading-relaxed text-ink-800">
                <p>{answer.text}</p>
                {answer.link && (
                  <Link href={answer.link.href} onClick={() => dialogRef.current?.close()} className="mt-1.5 inline-flex items-center gap-1 font-semibold text-red-600 hover:text-red-700">
                    {answer.link.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                )}
                <div className="mt-2.5 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => requestHelp(answer.service?.slug)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-3.5 py-2 text-sm font-bold text-white hover:bg-red-700"
                  >
                    <MessageSquareText className="h-4 w-4" aria-hidden="true" />
                    {answer.service ? `Request ${answer.service.shortName}` : "Text a Request"}
                  </button>
                  <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-1.5 rounded-full border border-ink-950/15 bg-white px-3.5 py-2 text-sm font-bold text-ink-950">
                    <Phone className="h-4 w-4" aria-hidden="true" />
                    Call
                  </a>
                </div>
                {answer.service && priceSummary(answer.service) && <p className="mt-1.5 text-xs text-ink-500">{priceSummary(answer.service)}</p>}
              </div>
            </div>
          ))}

          <div className="flex flex-wrap gap-2">
            {ASK_SUGGESTIONS.map((s) => (
              <button key={s} type="button" onClick={() => ask(s)} className="rounded-full border border-ink-950/12 px-3.5 py-2 text-sm font-medium text-ink-800 hover:border-ink-950/30">
                {s}
              </button>
            ))}
          </div>
          <div ref={endRef} />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(draft);
          }}
          className="flex items-center gap-2 border-t border-ink-950/10 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3"
        >
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            aria-label="Your question"
            placeholder="Type your question…"
            maxLength={200}
            className="min-w-0 flex-1 rounded-full border border-ink-950/15 bg-white px-4 py-2.5 text-base text-ink-950 placeholder:text-ink-400 focus:border-red-600 focus:outline-none"
          />
          <button type="submit" aria-label="Send question" className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-red-600 text-white hover:bg-red-700">
            <Send className="h-4.5 w-4.5" aria-hidden="true" />
          </button>
        </form>
      </div>
    </dialog>
  );
}
