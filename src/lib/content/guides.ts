/**
 * Guides: original, practical articles that answer the questions drivers
 * search before they buy. Battery topics come first because batteries are the
 * service the business earns the most from.
 *
 * RULES FOR EDITING
 *  - Prices are never typed into prose. Write {{price:<service-slug>}} and the
 *    page renders the published figure from SERVICES, so a price change
 *    reaches every guide.
 *  - Only state what TRA actually does (from SERVICES and business.ts) and
 *    general automotive facts that hold for any car. No response times, no
 *    brand claims, no invented statistics.
 *  - Written for this site from scratch. Competitor pages were used only to
 *    see which questions people ask, never for wording.
 *  - US English. Keep sentences plain: these should read like a mechanic
 *    explaining something, not like marketing.
 */
import type { ServiceTypeSlug } from "@/lib/types/domain";

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  list?: string[];
}

export interface Guide {
  slug: string;
  /** <title>, before the site-wide suffix. */
  title: string;
  h1: string;
  metaDescription: string;
  /** Short label shown above the H1 and on cards. */
  topic: string;
  /** Opening paragraph. */
  dek: string;
  updated: string;
  image?: { src: string; alt: string; width: number; height: number; caption?: string };
  /** Photo for the guide's card on /guides when the article itself has none. */
  cardImage?: { src: string; width: number; height: number };
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
  /** Services this guide supports, first one is the main CTA. */
  services: ServiceTypeSlug[];
}

const UPDATED = "2026-10-18";

const UNDER_SEAT_PHOTO = {
  src: "/images/battery-under-seat.webp",
  alt: "A car battery set into the floor under the rear seat of a blue vehicle, with the seat cushion lifted and the red positive terminal cover visible.",
  width: 1200,
  height: 800,
};

export const GUIDES: Guide[] = [
  {
    slug: "car-battery-replacement-cost",
    title: "Car Battery Replacement Cost in DFW",
    h1: "What a car battery replacement costs in DFW, and why the total varies",
    metaDescription:
      "What mobile car battery replacement costs in Dallas–Fort Worth: TRA batteries from {{price:battery-replacement}}, why installation is quoted per vehicle, and what changes the total.",
    topic: "Battery guide",
    dek: "Two things make up the bill: the battery, and the labor to install it. The battery has a set price. The labor depends mostly on where your car keeps its battery, which is why we quote it for your vehicle instead of guessing.",
    updated: UPDATED,
    image: {
      ...UNDER_SEAT_PHOTO,
      caption: "A battery under the rear seat. The seat has to come out before the battery can, which is labor a battery under the hood never needs.",
    },
    sections: [
      {
        heading: "The battery: a published price",
        paragraphs: [
          "TRA batteries start at {{price:battery-replacement}}. That figure is for the battery alone. It does not include installation, and we never show it without saying so.",
          "Every battery we install carries a 1-year warranty. Keep the invoice, because a warranty claim is checked against it.",
        ],
      },
      {
        heading: "Installation: quoted for your vehicle",
        paragraphs: [
          "On many cars the battery sits at the front of the engine bay and comes out in minutes. On others it is in the trunk, under the floor of the cargo area, under a seat, or behind a panel inside the wheel well, and trim or a seat has to come out first.",
          "One flat labor figure would be too high for the easy cars and too low for the hard ones, so we don't publish one. Dispatch quotes installation from your year, make and model, and you know the full price before a driver sets off.",
        ],
      },
      {
        heading: "What changes the total",
        paragraphs: ["The same few things decide almost every quote:"],
        list: [
          "Where the battery is mounted, and how much has to be removed to reach it.",
          "The size and type of battery your vehicle needs. {{price:battery-replacement}} is where prices start, and some vehicles take a larger battery.",
          "Whether the car is somewhere a driver can work safely beside it, like a driveway, a parking lot or a garage with room to open the doors.",
        ],
      },
      {
        heading: "Mobile installation or a trip to the shop",
        paragraphs: [
          "Installing at a shop works if the car can still get there. A failing battery is the one part that makes that trip a gamble, and when the car won't start, the shop visit becomes a tow first.",
          "Mobile installation brings the battery to wherever the car is: your driveway, your apartment lot or the parking garage at work. You stay where you are, and the car is running when the driver leaves.",
        ],
      },
      {
        heading: "What to have ready when you call",
        paragraphs: ["A quote takes a minute if you have these:"],
        list: [
          "The year, make and model.",
          "The VIN if you can reach it easily. It confirms the exact battery fit, but it is optional.",
          "Where the car is parked, and whether there is room to open the doors and the hood.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is installation included in the battery price?",
        a: "No. The battery price covers the battery only. Dispatch quotes installation for your vehicle, and you hear the full figure before anyone is sent.",
      },
      {
        q: "Is there a warranty on the new battery?",
        a: "Yes, a 1-year warranty. Keep your invoice, since that is what a warranty claim is checked against.",
      },
      {
        q: "Do I need my VIN to get a quote?",
        a: "No. Year, make and model are enough to start. The VIN only confirms the exact fit, so send it if it's easy to reach.",
      },
    ],
    services: ["battery-replacement", "jump-start"],
  },
  {
    slug: "signs-car-battery-dying",
    title: "Car Battery Dying? 7 Warning Signs",
    h1: "Seven signs your car battery is on its way out",
    metaDescription:
      "Slow cranking, clicking, dim lights, a car that needs a second jump: the signs a car battery is failing, and why DFW summers wear batteries out faster.",
    topic: "Battery guide",
    dek: "Batteries rarely die without warning. The warnings are just easy to explain away, especially in a Texas summer, when the car still starts fine every afternoon.",
    updated: UPDATED,
    cardImage: { src: "/images/field/field-battery-under-seat-detail.webp", width: 560, height: 700 },
    sections: [
      {
        heading: "The signs",
        paragraphs: ["Any one of these is worth paying attention to. Two or more together usually mean the battery is close to the end."],
        list: [
          "The engine turns over slowly, most noticeably first thing in the morning.",
          "You hear rapid clicking when you turn the key or press start, and the engine doesn't turn.",
          "The headlights and dash lights dim while the engine is cranking.",
          "The battery warning light comes on.",
          "Small electrical oddities: a clock that resets, windows that move slowly, a radio that forgets its presets.",
          "The car has needed a jump start more than once in a few weeks.",
          "The battery case looks swollen, or the terminals are crusted with white or blue-green corrosion.",
        ],
      },
      {
        heading: "Why heat is harder on a battery than cold",
        paragraphs: [
          "Cold weather gets the blame, because a cold morning is when a weak battery finally refuses to start the car. The damage usually happened months earlier. Heat speeds up the chemical wear inside a battery and dries it out, and a DFW summer full of 100-degree afternoons does a lot of that wear.",
          "Most car batteries last somewhere between three and five years. In a climate this hot, plan on the shorter end of that range.",
        ],
      },
      {
        heading: "When it probably isn't the battery",
        paragraphs: [
          "If the lights are bright and steady but the engine won't turn over, the starter may be the problem. If the car dies while you're driving, or the battery light comes on with the engine running, the alternator is the more likely cause.",
          "A jump start won't fix either of those, and neither will a new battery. Have a repair shop look at it.",
        ],
      },
      {
        heading: "What to do about it",
        paragraphs: [
          "If the car still starts, replace the battery on your schedule instead of waiting for it to choose a bad moment. A battery more than three years old that shows any of the signs above is worth replacing before the next cold snap.",
          "If the car won't start, a jump start gets you moving, and the driver can tell you whether the battery looked likely to hold the charge. If the battery is swollen, leaking or smells like rotten eggs, don't try to jump it yourself. Call for help.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a car battery last in Texas?",
        a: "Usually three to five years, and heat pushes it toward the shorter end. If yours is past three years and showing any of the signs above, replace it before it leaves you stuck.",
      },
      {
        q: "Can a jump start fix a dying battery?",
        a: "It gets you moving, but it can't bring back a battery that no longer holds a charge. If the car needs another jump within days, the battery needs replacing.",
      },
      {
        q: "Why did my battery die after the car sat for a week?",
        a: "Every car draws a little power while it's parked. A healthy battery covers that easily, but a weak one runs flat. A battery that dies after sitting was often already near the end.",
      },
    ],
    services: ["battery-replacement", "jump-start"],
  },
  {
    slug: "where-is-my-car-battery",
    title: "Where Is My Car Battery? Hood, Trunk or Seat",
    h1: "Where your car battery is, and why it changes the job",
    metaDescription:
      "Not every car battery is under the hood. Some sit in the trunk, the cargo floor or under a seat, and that changes how long replacement takes and what it costs.",
    topic: "Battery guide",
    dek: "Open the hood on a lot of cars and the battery is right there. On plenty of others it isn't. The one in this photo sits in the floor under the rear seat.",
    updated: UPDATED,
    image: {
      ...UNDER_SEAT_PHOTO,
      caption: "One of our jobs: the rear seat cushion lifted to reach a battery mounted in the floor.",
    },
    sections: [
      {
        heading: "Where batteries usually are",
        paragraphs: ["Manufacturers put the battery wherever it fits their design. The common places:"],
        list: [
          "Under the hood, at the front or side of the engine bay. This is the most common spot and the quickest to replace.",
          "In the trunk, often under the floor panel or behind a side trim panel.",
          "Under the floor of an SUV's cargo area.",
          "Under a front or rear seat, like the one in the photo.",
          "Behind a panel inside a front wheel well.",
        ],
      },
      {
        heading: "How to find yours",
        paragraphs: [
          "The owner's manual shows it, usually in the section on jump starting. If the battery isn't under the hood, the manual will also point out the remote jump-start posts that most of these cars have under the hood: a positive terminal under a red cover and a separate ground point.",
          "If you can't find either, tell dispatch the year, make and model and we will work it out.",
        ],
      },
      {
        heading: "Why it changes the price",
        paragraphs: [
          "A battery at the front of the engine bay can be swapped in minutes. One under a seat means the seat comes out first. One in a wheel well can mean removing the wheel liner. It's the same battery and a very different amount of work.",
          "That is why installation is quoted for your vehicle, while the battery itself has a published price starting at {{price:battery-replacement}}. You know the full figure before a driver sets off.",
        ],
      },
      {
        heading: "Jump starts still work",
        paragraphs: [
          "Most cars with the battery outside the engine bay have those remote posts under the hood, so a jump start works the usual way. Mention where the battery is when you request help, so the driver knows what to expect.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a battery under a seat harder to replace?",
        a: "It takes longer, because the seat or trim has to come out first. That's the main reason installation is quoted for your vehicle rather than listed as one price.",
      },
      {
        q: "Can I check where my battery is before I call?",
        a: "Yes. The owner's manual shows it, usually under jump starting. If you can't find it, give dispatch the year, make and model.",
      },
    ],
    services: ["battery-replacement", "jump-start"],
  },
  {
    slug: "lost-wheel-lock-key",
    title: "Lost Your Wheel Lock Key? What to Do",
    h1: "Lost the wheel lock key? How a locked wheel comes off",
    metaDescription:
      "No wheel lock key means the wheel can't come off for a flat. Where the key usually hides, what not to try, and how TRA removes a locking lug nut for {{price:rim-lock-removal}}.",
    topic: "Tire guide",
    dek: "A wheel lock is one special lug nut per wheel that only turns with its matching key. Most of the time nobody thinks about it, until a tire goes flat and the key is nowhere to be found.",
    updated: "2026-10-19",
    image: {
      src: "/images/rim-lock-honda.webp",
      alt: "A locking lug nut with a star-shaped key pattern on a two-tone Honda alloy wheel, next to four standard lug nuts.",
      width: 1024,
      height: 683,
      caption: "A locking lug nut with a star-shaped pattern. Without its key, this wheel stays on the car.",
    },
    sections: [
      {
        heading: "Check these places first",
        paragraphs: ["The key is usually somewhere in the car, put away when the wheels were last off:"],
        list: [
          "The glove box or the center console.",
          "The trunk well, near the jack and the spare tire.",
          "A small pouch with the owner's manual.",
          "Tucked in with the spare wheel itself.",
        ],
      },
      {
        heading: "What not to try",
        paragraphs: [
          "Hammering a regular socket onto a locking lug nut, or going at it with pliers, usually rounds the nut off and can scar the wheel. A rounded nut is harder to remove, not easier.",
          "If the key is missing, snapped or doesn't fit anymore, leave the nut alone and call for help before the job gets bigger.",
        ],
      },
      {
        heading: "How we remove it",
        paragraphs: [
          "A driver removes the locking lug nut on site so the wheel can come off. Wheel lock removal is {{price:rim-lock-removal}}.",
          "If you also need the spare put on, say so in your request so the driver comes ready for both jobs.",
        ],
      },
      {
        heading: "Once the wheel is off",
        paragraphs: [
          "Decide whether to replace the missing key or go back to standard lug nuts. Many wheel locks come with a code card for ordering a replacement key, so if you have one, keep it with the car's papers.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much does wheel lock removal cost?",
        a: "{{price:rim-lock-removal}}, the published price. Dispatch confirms it when you request help.",
      },
      {
        q: "Can you change my flat at the same visit?",
        a: "Yes, if there's a usable spare in the car. Mention both jobs in your request so the driver comes ready for both.",
      },
    ],
    services: ["rim-lock-removal", "flat-tire-change"],
  },
  {
    slug: "jump-start-electric-car",
    title: "Can You Jump Start an Electric Car or Tesla?",
    h1: "Jump starting an electric car: what actually needs the jump",
    metaDescription:
      "An EV's big battery doesn't get jumped. Its 12-volt battery does, and when it runs down the car may not unlock or switch on. What to check, and when to call.",
    topic: "Battery guide",
    dek: "Electric cars still carry a small 12-volt battery. It powers the door locks, the screens and the computers that switch the car on, so when it runs down the car can look completely dead even with a full main battery.",
    updated: "2026-10-19",
    cardImage: { src: "/images/jump-start-pack.webp", width: 1200, height: 800 },
    sections: [
      {
        heading: "Two batteries, two different problems",
        paragraphs: [
          "The large high-voltage battery drives the wheels and is recharged at a charger. A roadside jump does not charge it.",
          "The small 12-volt battery is the one a jump start is for. It wakes the car up, and once the car is on, the main battery keeps it charged again.",
        ],
      },
      {
        heading: "Signs the 12-volt battery is the problem",
        paragraphs: ["Any of these points at the small battery rather than the big one:"],
        list: [
          "The car won't unlock with the key fob or the phone app.",
          "The screens stay dark when you get in.",
          "A warning about the 12-volt or low-voltage battery appeared in the days before.",
          "On a hybrid, the car won't switch on and the Ready light never comes on.",
        ],
      },
      {
        heading: "Where the jump points are",
        paragraphs: [
          "It depends on the model. On many electric cars the 12-volt battery or its jump terminals sit under the hood or in the front trunk, and some need a release cable to open the front trunk when the 12-volt system is dead. The owner's manual shows the exact spot.",
        ],
      },
      {
        heading: "When to call",
        paragraphs: [
          "Tell dispatch the year, make and model, and that it's electric or hybrid, so the driver comes with the right equipment for the 12-volt system.",
          "If the problem is a low main battery rather than a dead 12-volt one, a jump won't help. The car needs a charger, or a tow to one.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will a jump start charge my EV's main battery?",
        a: "No. A jump only helps the 12-volt battery. A low main battery needs a charger, or a tow to one.",
      },
      {
        q: "Is jump starting a hybrid different?",
        a: "The idea is the same: the 12-volt battery is what gets the jump. Note that it's a hybrid in your request so the driver brings the right equipment.",
      },
    ],
    services: ["jump-start", "battery-replacement"],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((g) => g.slug === slug);
}

/** Guides that support a given service, for linking from that service's page. */
export function guidesForService(service: string): Guide[] {
  return GUIDES.filter((g) => g.services.includes(service as ServiceTypeSlug));
}
