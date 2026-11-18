import type { ServiceTypeSlug } from "@/lib/types/domain";

/**
 * The business's own job photos and stills from its video footage, for the
 * gallery and the home page gallery preview.
 *
 * PROVENANCE — JOB PHOTOS (the two flat tire groups)
 * Phone photos supplied by the owner in October 2026. The license plate and
 * dealer frame on the freeway-shoulder SUV were pixelated before export, and
 * the files carry no EXIF or location data. A fifth supplied photo was left
 * out: it is a crop of the same footage as field-jump-start-booster.webp.
 * The battery, wheel lock and spare-in-a-lot photos were removed on
 * 2026-11-18: another company publishes the same pictures as its own.
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
    id: "tire-roadside",
    title: "Flat tires, wherever they happen",
    caption: "A freeway shoulder after dark or a street in daylight: the car goes up on a floor jack from a solid lifting point, right where it stopped.",
    service: "flat-tire-change",
    photos: [
      {
        src: "/images/field/field-tire-shoulder-night.webp",
        alt: "A silver SUV on a freeway shoulder at night with its rear wheel removed and a floor jack under the body, with city lights and traffic behind.",
        width: W,
        height: H,
      },
      {
        src: "/images/field/field-tire-jack.webp",
        alt: "A technician kneeling beside a black sedan, positioning a red and black floor jack under the car next to its wheel.",
        width: W,
        height: H,
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
 * Four photos for the compact four-up preview on the home page, alternating
 * tire and jump start so two similar shots never sit side by side.
 */
const PREVIEW_GROUPS = ["tire-roadside", "jump-start", "tire-spare", "arrival"];

export function fieldPhotoPreview(): (FieldPhoto & { title: string })[] {
  return PREVIEW_GROUPS.map((id) => {
    const group = FIELD_PHOTO_GROUPS.find((g) => g.id === id)!;
    return { ...group.photos[0], title: group.title };
  });
}
