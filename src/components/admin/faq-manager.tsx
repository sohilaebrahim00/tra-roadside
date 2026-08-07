"use client";

import { useState, useTransition } from "react";
import { Plus, Trash2, Loader2 } from "lucide-react";
import { upsertFaq, deleteFaq } from "@/app/admin/(protected)/faqs/actions";

interface Faq {
  id: string;
  category: string;
  question: string;
  answer: string;
  sort_order: number;
  is_published: boolean;
}

export function FaqManager({ faqs }: { faqs: Faq[] }) {
  const [items, setItems] = useState(faqs);
  const [isPending, startTransition] = useTransition();

  function addBlank() {
    setItems((prev) => [
      ...prev,
      { id: `new-${Date.now()}`, category: "General", question: "", answer: "", sort_order: prev.length, is_published: true },
    ]);
  }

  function update(id: string, patch: Partial<Faq>) {
    setItems((prev) => prev.map((f) => (f.id === id ? { ...f, ...patch } : f)));
  }

  function save(item: Faq) {
    startTransition(async () => {
      await upsertFaq({
        id: item.id.startsWith("new-") ? undefined : item.id,
        category: item.category,
        question: item.question,
        answer: item.answer,
        sortOrder: item.sort_order,
        isPublished: item.is_published,
      });
    });
  }

  function remove(item: Faq) {
    if (item.id.startsWith("new-")) {
      setItems((prev) => prev.filter((f) => f.id !== item.id));
      return;
    }
    startTransition(async () => {
      await deleteFaq(item.id);
      setItems((prev) => prev.filter((f) => f.id !== item.id));
    });
  }

  return (
    <div>
      <button onClick={addBlank} className="flex items-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-sm font-semibold text-white">
        <Plus className="h-4 w-4" aria-hidden="true" /> Add FAQ
      </button>

      <div className="mt-5 space-y-4">
        {items.map((item) => (
          <div key={item.id} className="rounded-2xl border border-ink-950/8 bg-white p-4 dark:border-white/10 dark:bg-ink-900">
            <div className="grid gap-3 sm:grid-cols-[140px_1fr]">
              <input
                value={item.category}
                onChange={(e) => update(item.id, { category: e.target.value })}
                placeholder="Category"
                className="h-10 rounded-lg border border-ink-950/15 px-3 text-sm dark:border-white/15 dark:bg-ink-800"
              />
              <input
                value={item.question}
                onChange={(e) => update(item.id, { question: e.target.value })}
                placeholder="Question"
                className="h-10 rounded-lg border border-ink-950/15 px-3 text-sm dark:border-white/15 dark:bg-ink-800"
              />
            </div>
            <textarea
              value={item.answer}
              onChange={(e) => update(item.id, { answer: e.target.value })}
              placeholder="Answer"
              rows={2}
              className="mt-3 w-full rounded-lg border border-ink-950/15 px-3 py-2 text-sm dark:border-white/15 dark:bg-ink-800"
            />
            <div className="mt-3 flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-ink-600 dark:text-ink-200">
                <input type="checkbox" checked={item.is_published} onChange={(e) => update(item.id, { is_published: e.target.checked })} />
                Published
              </label>
              <div className="flex gap-2">
                <button onClick={() => remove(item)} className="flex h-9 w-9 items-center justify-center rounded-lg text-ink-400 hover:bg-red-600/10 hover:text-red-600">
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  onClick={() => save(item)}
                  disabled={isPending || !item.question || !item.answer}
                  className="flex items-center gap-1.5 rounded-lg bg-ink-950 px-4 py-2 text-sm font-semibold text-white disabled:opacity-50 dark:bg-white dark:text-ink-950"
                >
                  {isPending && <Loader2 className="h-3.5 w-3.5 animate-spin" />}
                  Save
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
