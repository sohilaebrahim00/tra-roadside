"use server";

import { revalidatePath } from "next/cache";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function updateSetting(key: string, value: unknown) {
  const supabase = await createServerSupabaseClient();
  const { error } = await supabase.from("site_settings").upsert({ key, value });
  if (error) throw new Error(error.message);
  revalidatePath("/admin/settings");
}
