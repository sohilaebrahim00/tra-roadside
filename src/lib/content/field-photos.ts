import type { ServiceTypeSlug } from "@/lib/types/domain";

/**
 * Stills from the business's own video footage, for the gallery and the home
 * page gallery preview.
 *
 * PROVENANCE
 * Each frame was pulled from a clip in /media-source — the same footage the
 * site already plays as its home hero, letter-mask and video-page clips — and
 * cropped to 4:5. No stock, competitor or generated imagery. Note for the
 * owner: several of those clips end on an "OHA Roadside Assistance" logo card
 * rather than TRA's, so confirm the rights to this footage before deploying.
 *
 * Frames showing legible slogans on clothing or accessories were left out on
 * purpose, as were frames with readable license plates.
 *
 * These are presented as TRA's crew and equipment at work, NOT as specific
 * customer jobs: the footage does not establish where or for whom it was shot,
 * so captions describe the service shown and never name a city or a customer.
 *
 * All files are 1080x1350 webp (quality 78); next/image derives the smaller
 * sizes from `sizes` on each slot.
 */
export interface FieldPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface FieldPhotoGroup {
  id: string;
  title: string;
  caption: string;
  /** The service page this group illustrates, when it illustrates one. */
  service?: ServiceTypeSlug;
  photos: [FieldPhoto, FieldPhoto];
}

const W = 1080;
const H = 1350;

export const FIELD_PHOTO_GROUPS: FieldPhotoGroup[] = [
  {
    id: "jump-start",
    title: "Jump starts",
    caption: "A portable jump pack comes to the car, so a dead battery is dealt with where the car sits.",
    service: "jump-start",
    photos: [
      {
        src: "/images/field/field-jump-start-booster.webp",
        alt: "A technician in a high-visibility shirt and cap setting a red portable jump pack on the engine of a car with its hood raised.",
        width: W,
        height: H,
      },
      {
        src: "/images/field/field-jump-start-hood.webp",
        alt: "A technician in high-visibility workwear raising the hood of a blue sedan in a parking lot, with a red jump pack on the ground beside the car.",
        width: W,
        height: H,
      },
    ],
  },
  {
    id: "tire",
    title: "Tire service",
    caption: "The car goes up on a floor jack from a solid lifting point before a wheel comes off.",
    service: "flat-tire-change",
    photos: [
      {
        src: "/images/field/field-tire-jack.webp",
        alt: "A technician kneeling beside a black sedan, positioning a red and black floor jack under the car next to its wheel.",
        width: W,
        height: H,
      },
      {
        src: "/images/field/field-tire-wheel.webp",
        alt: "Close-up of a floor jack set under a black sedan beside its alloy wheel.",
        width: W,
        height: H,
      },
    ],
  },
  {
    id: "fuel",
    title: "Fuel delivery",
    caption: "Enough fuel to reach a station, carried to the car and poured in by the driver.",
    service: "fuel-delivery",
    photos: [
      {
        src: "/images/field/field-fuel-pour.webp",
        alt: "A technician in high-visibility workwear pouring fuel from a red gas can into the open fuel door of a dark vehicle.",
        width: W,
        height: H,
      },
      {
        src: "/images/field/field-fuel-can.webp",
        alt: "A technician in high-visibility workwear bending to pick up a red gas can from the ground in a parking lot.",
        width: W,
        height: H,
      },
    ],
  },
  {
    id: "arrival",
    title: "Arriving equipped",
    caption: "The jump pack, tools and gear travel with the driver, in the vehicle that brings them to you.",
    photos: [
      {
        src: "/images/field/field-arrival-van.webp",
        alt: "A technician in high-visibility workwear lifting a red jump pack out of the open rear hatch of a minivan in a parking lot.",
        width: W,
        height: H,
      },
      {
        src: "/images/field/field-arrival-gear.webp",
        alt: "A technician in high-visibility workwear walking between parked cars carrying a red jump pack and a black equipment bag.",
        width: W,
        height: H,
      },
    ],
  },
];

/** One photo per group, for a compact four-up preview. */
export function fieldPhotoPreview(): FieldPhoto[] {
  return FIELD_PHOTO_GROUPS.map((g) => g.photos[0]);
}
