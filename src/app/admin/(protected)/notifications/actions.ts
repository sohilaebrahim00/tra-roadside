"use server";

import { revalidatePath } from "next/cache";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function updateTemplate(id: string, input: { subject: string; body: string; isActive: boolean }) {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase
    .from("notification_templates")
    .update({ subject: input.subject || null, body: input.body, is_active: input.isActive })
    .eq("id", id);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/notifications");
}
