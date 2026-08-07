import { redirect } from "next/navigation";
import { isDemoMode } from "@/lib/env";
import { getStaffSession, STAFF_ROLES } from "@/lib/auth/session";
import { AdminShell } from "@/components/admin/admin-shell";
import { SetupRequired } from "@/components/admin/setup-required";

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  if (isDemoMode()) return <SetupRequired area="The admin dashboard" />;

  const session = await getStaffSession();
  if (!session || !STAFF_ROLES.includes(session.role)) {
    redirect("/admin/login");
  }

  return (
    <AdminShell role={session.role} fullName={session.fullName}>
      {children}
    </AdminShell>
  );
}
