"use server";

import { revalidatePath } from "next/cache";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function upsertFaq(input: {
  id?: string;
  category: string;
  question: string;
  answer: string;
  sortOrder: number;
  isPublished: boolean;
}) {
  const supabase = await createServerSupabaseClient();
  const payload = {
    category: input.category,
    question: input.question,
    answer: input.answer,
    sort_order: input.sortOrder,
    is_published: input.isPublished,
  };

  const { error } = input.id
    ? await supabase.from("faqs").update(payload).eq("id", input.id)
    : await supabase.from("faqs").insert(payload);

  if (error) throw new Error(error.message);
  revalidatePath("/admin/faqs");
  revalidatePath("/faq");
}

export async function deleteFaq(id: string) {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.from("faqs").delete().eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/faqs");
  revalidatePath("/faq");
}
