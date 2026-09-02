import {
  Truck, BatteryCharging, CircleDot, Fuel, KeyRound, Disc3,
  BatteryFull, Drill, Wrench, Lock,
  type LucideIcon,
} from "lucide-react";
import type { ServiceTypeSlug } from "@/lib/types/domain";

export const SERVICE_ICONS: Record<ServiceTypeSlug, LucideIcon> = {
  "battery-replacement": BatteryFull,
  "jump-start": BatteryCharging,
  lockout: KeyRound,
  "tire-repair-plug-patch": Drill,
  "flat-tire-change": CircleDot,
  "tire-replacement": Disc3,
  "stuck-screw-in-tire": Wrench,
  "rim-lock-removal": Lock,
  "fuel-delivery": Fuel,
  towing: Truck,
};
