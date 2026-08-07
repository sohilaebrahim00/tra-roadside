"use client";

import { useTransition } from "react";
import { Trash2 } from "lucide-react";
import { deleteBlogPost } from "@/app/admin/(protected)/blog/actions";

export function DeletePostButton({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      disabled={isPending}
      onClick={() => startTransition(() => deleteBlogPost(id))}
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-ink-400 hover:bg-red-600/10 hover:text-red-600 disabled:opacity-50"
      aria-label="Delete post"
    >
      <Trash2 className="h-4 w-4" aria-hidden="true" />
    </button>
  );
}
