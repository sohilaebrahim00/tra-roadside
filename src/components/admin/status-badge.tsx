import { cn } from "@/lib/utils/cn";
import { STATUS_META, type RequestStatus } from "@/lib/types/domain";

const TONE: Record<RequestStatus, string> = {
  new: "bg-info-500/10 text-info-500",
  reviewing: "bg-info-500/10 text-info-500",
  accepted: "bg-amber-500/10 text-amber-600",
  driver_assigned: "bg-amber-500/10 text-amber-600",
  driver_en_route: "bg-amber-500/10 text-amber-600",
  driver_nearby: "bg-amber-500/10 text-amber-600",
  arrived: "bg-amber-500/10 text-amber-600",
  in_progress: "bg-amber-500/10 text-amber-600",
  completed: "bg-success-600/10 text-success-600",
  canceled: "bg-ink-950/8 text-ink-500",
  unable_to_complete: "bg-red-600/10 text-red-600",
};

export function StatusBadge({ status }: { status: RequestStatus }) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap", TONE[status])}>
      {STATUS_META[status].label}
    </span>
  );
}
