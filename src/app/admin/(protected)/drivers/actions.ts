"use server";

import { revalidatePath } from "next/cache";
import { createAdminSupabaseClient } from "@/lib/supabase/admin";
import { getStaffSession } from "@/lib/auth/session";

async function requireAdminOrDispatch() {
  const session = await getStaffSession();
  if (!session || (session.role !== "super_admin" && session.role !== "dispatcher")) {
    throw new Error("Not authorized");
  }
  return session;
}

function generateTempPassword() {
  return `Tra-${Math.random().toString(36).slice(2, 8)}${Math.floor(Math.random() * 90 + 10)}!`;
}

export async function inviteDriver(input: {
  fullName: string;
  email: string;
  phone: string;
  vehicleDescription?: string;
  licensePlate?: string;
}): Promise<{ tempPassword: string }> {
  await requireAdminOrDispatch();
  const admin = createAdminSupabaseClient();
  const tempPassword = generateTempPassword();

  const { data: created, error: createErr } = await admin.auth.admin.createUser({
    email: input.email,
    password: tempPassword,
    email_confirm: true,
  });
  if (createErr || !created.user) throw new Error(createErr?.message ?? "Failed to create driver account");

  const { error: profileErr } = await admin.from("profiles").insert({
    id: created.user.id,
    role: "driver",
    full_name: input.fullName,
    phone: input.phone,
  });
  if (profileErr) throw new Error(profileErr.message);

  const { error: driverErr } = await admin.from("drivers").insert({
    id: created.user.id,
    vehicle_description: input.vehicleDescription || null,
    license_plate: input.licensePlate || null,
  });
  if (driverErr) throw new Error(driverErr.message);

  revalidatePath("/admin/drivers");
  return { tempPassword };
}

export async function setDriverActive(driverId: string, isActive: boolean) {
  await requireAdminOrDispatch();
  const admin = createAdminSupabaseClient();
  const { error } = await admin.from("profiles").update({ is_active: isActive }).eq("id", driverId);
  if (error) throw new Error(error.message);
  revalidatePath("/admin/drivers");
}
