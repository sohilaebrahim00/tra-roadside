import type { ServiceTypeSlug } from "@/lib/types/domain";

/**
 * The business's own job photos and stills from its video footage, for the
 * gallery and the home page gallery preview.
 *
 * PROVENANCE — JOB PHOTOS (battery and the two tire groups)
 * Phone photos supplied by the owner in October 2026. The license plate and
 * dealer frame on the freeway-shoulder SUV were pixelated before export, and
 * the files carry no EXIF or location data. A fifth supplied photo was left
 * out: it is a crop of the same footage as field-jump-start-booster.webp.
 *
 * PROVENANCE — FOOTAGE STILLS (every other group)
 * Each frame was pulled from a clip in /media-source — the same footage the
 * site already plays as its home hero, letter-mask and video-page clips — and
 * cropped to 4:5. No stock, competitor or generated imagery. Note for the
 * owner: several of those clips end on an "OHA Roadside Assistance" logo card
 * rather than TRA's. The owner confirmed on 2026-10-18 that the business holds
 * the rights to this footage.
 *
 * Frames showing legible slogans on clothing or accessories were left out on
 * purpose, as were frames with readable license plates.
 *
 * These are presented as TRA's crew and equipment at work, NOT as specific
 * customer jobs: the footage does not establish where or for whom it was shot,
 * so captions describe the service shown and never name a city or a customer.
 *
 * All files are 4:5 webp (quality 78), most at 1080x1350; next/image derives
 * the smaller sizes from `sizes` on each slot.
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
    id: "battery",
    title: "Battery replacement",
    caption: "Not every battery is under the hood. This one sits under the rear seat, which is why installation is quoted for each vehicle.",
    service: "battery-replacement",
    photos: [
      {
        src: "/images/field/field-battery-under-seat.webp",
        alt: "The rear seat area of a blue vehicle with the seat cushion lifted, showing a car battery set into the floor beside a blue body rail, with a ratchet and a shop towel nearby.",
        width: W,
        height: H,
      },
      {
        src: "/images/field/field-battery-under-seat-detail.webp",
        alt: "Close-up of a car battery mounted in the floor under a rear seat, with a red cover over the positive terminal.",
        width: 560,
        height: 700,
      },
    ],
  },
  {
    id: "tire-roadside",
    title: "Flat tires, wherever they happen",
    caption: "A freeway shoulder after dark or a parking lot in daylight: the spare goes on where the car stopped.",
    service: "flat-tire-change",
    photos: [
      {
        src: "/images/field/field-tire-shoulder-night.webp",
        alt: "A silver SUV on a freeway shoulder at night with its rear wheel removed and a floor jack under the body, with city lights and traffic behind.",
        width: W,
        height: H,
      },
      {
        src: "/images/field/field-tire-spare-lot.webp",
        alt: "A gray sedan in a parking space with a compact spare tire on the ground, a floor jack and a cordless impact wrench beside its rear wheel.",
        width: 960,
        height: 1200,
      },
    ],
  },
  {
    id: "tire-spare",
    title: "Putting the spare on",
    caption: "The spare goes on and every lug nut is tightened before you drive away.",
    service: "flat-tire-change",
    photos: [
      {
        src: "/images/field/field-tire-spare-lugs.webp",
        alt: "A gloved hand running a cordless impact wrench on the lug nuts of a steel spare wheel.",
        width: W,
        height: H,
      },
      {
        src: "/images/field/field-tire-wheel-tools.webp",
        alt: "The front wheel of a white electric sedan with a cordless impact wrench and a floor jack set down beside it.",
        width: W,
        height: H,
      },
    ],
  },
  {
    id: "rim-lock",
    title: "Wheel locks",
    caption: "A locking lug nut without its key stops a tire change cold. We remove it so the wheel can come off.",
    service: "rim-lock-removal",
    photos: [
      {
        src: "/images/field/field-rim-lock-honda.webp",
        alt: "A locking lug nut with a star-shaped key pattern on a two-tone Honda alloy wheel.",
        width: 614,
        height: 768,
      },
      {
        src: "/images/field/field-rim-lock-wheel.webp",
        alt: "A wheel lock lug nut recessed in the spoke of a dark alloy wheel.",
        width: 810,
        height: 1012,
      },
    ],
  },
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

/**
 * Four photos for the compact four-up preview on the home page: one per
 * service, battery first, so the preview never shows two tire shots.
 */
const PREVIEW_GROUPS = ["battery", "tire-roadside", "jump-start", "fuel"];

export function fieldPhotoPreview(): (FieldPhoto & { title: string })[] {
  return PREVIEW_GROUPS.map((id) => {
    const group = FIELD_PHOTO_GROUPS.find((g) => g.id === id)!;
    return { ...group.photos[0], title: group.title };
  });
}
