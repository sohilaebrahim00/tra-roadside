import { z } from "zod";
import { SERVICE_TYPE_SLUGS, VEHICLE_TYPES, CONTACT_METHODS } from "@/lib/types/domain";

/**
 * The VIN alphabet excludes I, O and Q by standard (ISO 3779) because they are
 * confusable with 1 and 0. Exported so the input mask and the schema agree.
 */
export const VIN_PATTERN = /^[A-HJ-NPR-Z0-9]{17}$/;
export const VIN_LENGTH = 17;

export const locationSchema = z.object({
  pickupLat: z.number().min(-90).max(90),
  pickupLng: z.number().min(-180).max(180),
  pickupAddress: z.string().min(3, "Enter or confirm your location").max(300),
});

export const serviceSchema = z.object({
  serviceSlug: z.enum(SERVICE_TYPE_SLUGS, { message: "Select a service" }),
});

export const vehicleSchema = z.object({
  vehicleYear: z.string().max(4).optional().or(z.literal("")),
  vehicleMake: z.string().max(60).optional().or(z.literal("")),
  vehicleModel: z.string().max(60).optional().or(z.literal("")),
  vehicleColor: z.string().max(40).optional().or(z.literal("")),
  vehicleLicensePlate: z.string().max(20).optional().or(z.literal("")),
  // Battery Replacement only — see the conditional field in vehicle-step.tsx.
  // Always optional: a stranded customer hunting for a 17-character VIN is a
  // customer who abandons the form. Format is enforced in the superRefine
  // below only when it is actually filled in, because a wrong VIN is worse
  // than no VIN — dispatch would order the wrong battery from it.
  vehicleVin: z.string().max(64).optional().or(z.literal("")),
  vehicleType: z.enum(VEHICLE_TYPES),
  isDrivable: z.boolean().nullable(),
  notes: z.string().max(1000).optional().or(z.literal("")),
});

export const destinationSchema = z.object({
  destinationAddress: z.string().max(300).optional().or(z.literal("")),
  destinationLat: z.number().min(-90).max(90).nullable().optional(),
  destinationLng: z.number().min(-180).max(180).nullable().optional(),
  destinationNotes: z.string().max(500).optional().or(z.literal("")),
});

export const photosSchema = z.object({
  photos: z
    .array(
      z.object({
        storagePath: z.string().min(1),
        kind: z.enum(["vehicle", "damage", "location"]),
      })
    )
    .max(6, "Up to 6 photos"),
});

export const contactSchema = z.object({
  fullName: z.string().min(2, "Enter your full name").max(120),
  phone: z
    .string()
    .min(10, "Enter a valid phone number")
    .max(20)
    .regex(/^[0-9()+\-.\s]+$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email").max(200).optional().or(z.literal("")),
  preferredContactMethod: z.enum(CONTACT_METHODS),
  smsConsent: z.boolean(),
  termsAccepted: z.literal(true, { message: "You must accept the Terms and Privacy Policy" }),
  // Honeypot — real users never see or fill this field. Deliberately NOT
  // constrained to max(0): a bot that does fill it in must still pass
  // schema validation so the route handler's honeypot check ("pretend
  // success, do nothing") is what rejects it — a validation error here
  // would tip the bot off that it hit a honeypot instead of silently
  // wasting its time.
  companyWebsite: z.string().max(200).optional().or(z.literal("")),
});

export const createRequestSchema = locationSchema
  .merge(serviceSchema)
  .merge(vehicleSchema)
  .merge(destinationSchema)
  .merge(photosSchema)
  .merge(contactSchema)
  .extend({
    clientRequestId: z.string().uuid(),
  })
  .superRefine((data, ctx) => {
    // A VIN is optional everywhere, but if one is supplied it must be a real
    // 17-character VIN. I, O and Q are excluded from the VIN alphabet by
    // standard precisely because they are confusable with 1 and 0.
    const vin = data.vehicleVin?.trim().toUpperCase();
    if (vin && !VIN_PATTERN.test(vin)) {
      ctx.addIssue({
        code: "custom",
        path: ["vehicleVin"],
        message:
          "That VIN doesn't look right. Enter all 17 characters (letters and numbers, no I, O or Q), or leave it blank.",
      });
    }
    // Battery fitment is determined by year/make/model, which a customer can
    // answer from the driver's seat. The VIN above only refines that guess.
    if (data.serviceSlug === "battery-replacement") {
      const required = [
        ["vehicleYear", data.vehicleYear, "Enter the vehicle year so we bring a battery that fits."],
        ["vehicleMake", data.vehicleMake, "Enter the vehicle make so we bring a battery that fits."],
        ["vehicleModel", data.vehicleModel, "Enter the vehicle model so we bring a battery that fits."],
      ] as const;
      for (const [path, value, message] of required) {
        if (!value?.trim()) ctx.addIssue({ code: "custom", path: [path], message });
      }
    }
  });

export type CreateRequestInput = z.infer<typeof createRequestSchema>;

export const REQUEST_STEPS = [
  "location",
  "service",
  "vehicle",
  "destination",
  "photos",
  "contact",
  "review",
] as const;
export type RequestStep = (typeof REQUEST_STEPS)[number];
