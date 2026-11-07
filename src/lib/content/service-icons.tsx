import {
  BatteryCharging, CircleDot, KeyRound, Disc3,
  BatteryFull, Drill, Wrench, Lock, Nut, Gauge, Truck,
  type LucideIcon,
} from "lucide-react";
import type { ServiceTypeSlug } from "@/lib/types/domain";

export const SERVICE_ICONS: Record<ServiceTypeSlug, LucideIcon> = {
  "battery-replacement": BatteryFull,
  "jump-start": BatteryCharging,
  "semi-truck-jump-start": Truck,
  lockout: KeyRound,
  "tire-repair-plug-patch": Drill,
  "flat-tire-change": CircleDot,
  "tire-replacement": Disc3,
  "stuck-screw-in-tire": Wrench,
  "rim-lock-removal": Lock,
  "stripped-lug-nut-removal": Nut,
  "valve-stem-replacement": Gauge,
};
