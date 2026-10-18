"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { FaqAccordion } from "./faq-accordion";
import { cn } from "@/lib/utils/cn";
import type { FaqItem } from "@/lib/content/faqs";

export function FaqPageClient({ faqs }: { faqs: FaqItem[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const categories = useMemo(() => ["All", ...Array.from(new Set(faqs.map((f) => f.category)))], [faqs]);

  const filtered = faqs.filter((f) => {
    const matchesCategory = category === "All" || f.category === category;
    const matchesQuery =
      !query || f.question.toLowerCase().includes(query.toLowerCase()) || f.answer.toLowerCase().includes(query.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div>
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" aria-hidden="true" />
        <input
          type="search"
          aria-label="Search FAQs"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search FAQs…"
          className="h-12 w-full rounded-full border border-ink-950/15 pl-11 pr-4 focus:border-red-600 focus:outline-none dark:border-white/15 dark:bg-ink-900"
        />
      </div>

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Filter FAQs by topic">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            aria-pressed={category === c}
            className={cn(
              "rounded-full border px-3.5 py-1.5 text-sm font-medium",
              category === c ? "border-red-600 bg-red-600 text-white" : "border-ink-950/15 text-ink-600 dark:border-white/15 dark:text-ink-200"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* The accordion renders each question as an h3; this keeps the outline
          h1 -> h2 -> h3 instead of jumping straight from the page title. */}
      <h2 className="sr-only">{category === "All" ? "All questions" : `${category} questions`}</h2>
      <div className="mt-6 rounded-2xl border border-ink-950/8 px-6 dark:border-white/10">
        {filtered.length > 0 ? <FaqAccordion items={filtered} /> : <p className="py-8 text-center text-ink-400">No FAQs match your search.</p>}
      </div>
    </div>
  );
}
