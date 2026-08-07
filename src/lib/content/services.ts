import type { ServiceTypeSlug } from "@/lib/types/domain";

export interface ServiceContent {
  slug: ServiceTypeSlug;
  name: string;
  shortName: string;
  needsDestination: boolean;
  summary: string;
  heroLine: string;
  problem: string;
  whileYouWait: string[];
  whatWeNeed: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICES: ServiceContent[] = [
  {
    slug: "towing",
    name: "Towing",
    shortName: "Towing",
    needsDestination: true,
    summary: "Light and medium-duty towing to the destination of your choice.",
    heroLine: "Your vehicle, moved safely to wherever it needs to go.",
    problem:
      "Some breakdowns can't be fixed roadside — a dead transmission, a collision, or a vehicle that won't safely restart. When that happens, your car needs to move, not get patched on the shoulder.",
    whileYouWait: [
      "Move as far from traffic as safely possible and turn on hazard lights.",
      "Stay inside the vehicle with your seatbelt on if you're on a highway shoulder.",
      "Have your destination (home, shop, dealership) ready to share with dispatch.",
    ],
    whatWeNeed: [
      "Your exact location or a shareable GPS pin",
      "Vehicle year, make, and model",
      "Whether the vehicle is drivable or needs to be loaded",
      "Your preferred destination",
    ],
    faqs: [
      {
        q: "Can you tow to any shop?",
        a: "Yes — tell us the destination during the request and we'll confirm distance and details before dispatching.",
      },
      {
        q: "Do you tow motorcycles or larger vehicles?",
        a: "Select your vehicle type in the request form and add notes; dispatch will confirm equipment fit before accepting.",
      },
    ],
  },
  {
    slug: "jump-start",
    name: "Jump Start",
    shortName: "Jump Start",
    needsDestination: false,
    summary: "Dead battery? We'll get your engine running again on the spot.",
    heroLine: "A dead battery shouldn't end your day.",
    problem:
      "Lights left on, extreme temperatures, or an aging battery can leave you with a car that won't start. A jump start gets most vehicles running again in minutes.",
    whileYouWait: [
      "Turn off all electronics and accessories to avoid draining further.",
      "Pop the hood if it's safe to do so before your driver arrives.",
      "Stay in a well-lit, visible area if it's dark.",
    ],
    whatWeNeed: [
      "Your exact location",
      "Vehicle year, make, and model",
      "Confirmation the battery is the suspected issue",
    ],
    faqs: [
      {
        q: "What if the battery won't hold a charge afterward?",
        a: "Your driver can advise whether the battery needs replacement — let dispatch know if you'd like that discussed on site.",
      },
      {
        q: "Does this work for hybrid or electric vehicles?",
        a: "Add your vehicle type and any details in the notes field so we can dispatch the right equipment.",
      },
    ],
  },
  {
    slug: "flat-tire-change",
    name: "Flat Tire Change",
    shortName: "Flat Tire",
    needsDestination: false,
    summary: "Fast, safe swap to your spare or a serviceable tire.",
    heroLine: "Flat tire, back on the road.",
    problem:
      "A blown or flat tire is one of the most common roadside issues. If you have a usable spare, our driver can typically have you moving again quickly.",
    whileYouWait: [
      "Pull as far from active traffic lanes as possible.",
      "Turn on hazard lights and, if available, place reflective triangles.",
      "Locate your spare tire and jack if you can safely do so.",
    ],
    whatWeNeed: [
      "Your exact location",
      "Vehicle year, make, and model",
      "Whether a spare tire is available in the vehicle",
    ],
    faqs: [
      {
        q: "What if I don't have a spare?",
        a: "Let us know in the request notes — depending on availability we may be able to bring a serviceable option, or this may need to become a tow.",
      },
      {
        q: "Can you patch the flat instead of swapping it?",
        a: "Select this if you'd prefer a repair attempt; our driver will advise what's possible on site.",
      },
    ],
  },
  {
    slug: "tire-inflation",
    name: "Tire Inflation",
    shortName: "Tire Inflation",
    needsDestination: false,
    summary: "Low tire pressure topped off so you can safely continue.",
    heroLine: "Low tire pressure, handled roadside.",
    problem:
      "A slow leak or underinflated tire can be dangerous to drive on. We can air up your tire enough to get you moving toward a repair.",
    whileYouWait: [
      "Avoid driving further on a visibly low or flat tire.",
      "Keep hazard lights on while you wait.",
    ],
    whatWeNeed: ["Your exact location", "Vehicle year, make, and model"],
    faqs: [
      {
        q: "Will this fix a slow leak permanently?",
        a: "No — inflation is a temporary measure to get you safely to a repair shop.",
      },
    ],
  },
  {
    slug: "spare-tire-install",
    name: "Spare Tire Installation",
    shortName: "Spare Install",
    needsDestination: false,
    summary: "We'll mount and install your spare tire correctly and safely.",
    heroLine: "Spare tire, properly installed.",
    problem:
      "Already have your spare out but need it professionally and safely mounted? We'll handle the install so it's torqued and road-ready.",
    whileYouWait: [
      "Keep your spare, jack, and lug wrench accessible.",
      "Stay clear of the roadway while you wait.",
    ],
    whatWeNeed: ["Your exact location", "Vehicle year, make, and model"],
    faqs: [
      {
        q: "Is the spare safe for highway speeds?",
        a: "Most spares are speed- and distance-limited — your driver can walk you through the limitations for your specific spare.",
      },
    ],
  },
  {
    slug: "fuel-delivery",
    name: "Fuel Delivery",
    shortName: "Fuel Delivery",
    needsDestination: false,
    summary: "Ran out of gas or diesel? We'll bring enough to get you to a station.",
    heroLine: "Out of fuel, not out of options.",
    problem:
      "Running out of gas or diesel happens. We deliver enough fuel to get your vehicle safely to the nearest station.",
    whileYouWait: [
      "Move to the shoulder or a parking area if possible.",
      "Keep hazard lights on and stay visible.",
      "Confirm whether your vehicle takes gasoline or diesel before requesting.",
    ],
    whatWeNeed: [
      "Your exact location",
      "Vehicle year, make, and model",
      "Fuel type — gas or diesel",
    ],
    faqs: [
      {
        q: "How much fuel do you bring?",
        a: "Enough to safely reach the nearest station — full fill-ups aren't provided roadside.",
      },
    ],
  },
  {
    slug: "lockout",
    name: "Vehicle Lockout",
    shortName: "Lockout",
    needsDestination: false,
    summary: "Locked your keys inside? We'll get you back in without damage.",
    heroLine: "Locked out, not locked down.",
    problem:
      "Keys locked inside, a jammed door, or a dead fob can leave you stuck. Our drivers use non-destructive entry methods whenever possible.",
    whileYouWait: [
      "Confirm all doors and the trunk to see if any are unlocked.",
      "Have ID ready to confirm vehicle ownership.",
    ],
    whatWeNeed: [
      "Your exact location",
      "Vehicle year, make, and model",
      "Confirmation you can verify ownership on site",
    ],
    faqs: [
      {
        q: "Do you need proof I own the car?",
        a: "Yes, for everyone's safety our driver will ask for ID or another way to confirm ownership before unlocking a vehicle.",
      },
    ],
  },
  {
    slug: "winching-recovery",
    name: "Winching & Recovery",
    shortName: "Winch & Recovery",
    needsDestination: false,
    summary: "Stuck in a ditch, mud, or off the roadway? We'll recover your vehicle.",
    heroLine: "Stuck happens. We'll pull you out.",
    problem:
      "Whether you've slid off the shoulder, into a ditch, or onto soft ground, winching and recovery equipment gets your vehicle safely back on solid pavement.",
    whileYouWait: [
      "Stay inside the vehicle if it's in an unsafe position near traffic.",
      "Do not attempt recovery yourself if the vehicle is on an incline or near water.",
      "Describe the terrain and vehicle position as accurately as possible in the request notes.",
    ],
    whatWeNeed: [
      "Your exact location",
      "Vehicle year, make, and model",
      "Description of how the vehicle is stuck (mud, ditch, embankment, etc.)",
    ],
    faqs: [
      {
        q: "Can you recover vehicles off-road?",
        a: "Describe the terrain in your request notes — dispatch will confirm the right equipment before accepting.",
      },
    ],
  },
  {
    slug: "minor-repair",
    name: "Minor Roadside Repair",
    shortName: "Minor Repair",
    needsDestination: false,
    summary: "Small mechanical issues resolved on the spot when possible.",
    heroLine: "Small problem, fixed roadside.",
    problem:
      "Not every issue needs a shop visit. Loose belts, minor hose issues, and other small mechanical problems can sometimes be resolved on site.",
    whileYouWait: [
      "Turn off the engine if you notice smoke, unusual smells, or warning lights.",
      "Describe the issue as specifically as possible in your request notes.",
    ],
    whatWeNeed: [
      "Your exact location",
      "Vehicle year, make, and model",
      "A description of the problem",
    ],
    faqs: [
      {
        q: "What counts as a 'minor' repair?",
        a: "Small, non-structural issues that don't require shop tools or lift equipment. Your driver will advise if the issue needs a tow instead.",
      },
    ],
  },
  {
    slug: "truck-assistance",
    name: "18 Wheeler Roadside Services",
    shortName: "Truck Assistance",
    needsDestination: false,
    summary:
      "Roadside support for 18-wheelers, semi-trucks, tractor-trailers, and other commercial trucks.",
    heroLine: "Roadside help for big rigs, semis, and commercial trucks.",
    problem:
      "Breakdowns don't stop at passenger vehicles — 18-wheelers, semi-trucks, tractor-trailers, and other commercial trucks need help too. Tell us what's going on and dispatch will confirm what's needed before a driver is sent.",
    whileYouWait: [
      "Set out reflective triangles or hazard warning devices behind the vehicle if you can safely do so.",
      "Move as far from the travel lanes as possible and keep hazard lights on.",
      "Stay clear of the roadway side of the vehicle if traffic is close.",
      "Have your truck type, unit number, and trailer status ready to share with dispatch.",
    ],
    whatWeNeed: [
      "Your exact location or a shareable GPS pin",
      "Truck type and make/model, if known",
      "Whether a trailer is attached",
      "Whether the truck is currently drivable",
      "A description of the problem",
    ],
    faqs: [
      {
        q: "Do you handle 18-wheelers, semis, and tractor-trailers?",
        a: "Yes — select Truck Assistance and describe your truck and the issue; dispatch will confirm equipment and next steps before a driver is sent.",
      },
      {
        q: "What if I don't know my exact truck type or unit number?",
        a: "Share what you know — those fields are optional. Dispatch can gather the rest by phone if needed.",
      },
      {
        q: "Is towing capacity or heavy-duty equipment guaranteed?",
        a: "Equipment and capability vary by request — dispatch confirms exact capacity, response time, and any specialized equipment with you directly before dispatching.",
      },
    ],
  },
  {
    slug: "other-roadside-service",
    name: "Other Roadside Service",
    shortName: "Other Roadside Service",
    needsDestination: false,
    summary: "Not sure which service fits? Tell us what's going on and we'll dispatch the right help.",
    heroLine: "Not listed above? Tell us what you need.",
    problem:
      "If your situation doesn't match one of our standard services, select Other Roadside Service and describe what's happening — dispatch will review the details and follow up with next steps.",
    whileYouWait: [
      "Move to a safe, visible location away from moving traffic if possible.",
      "Keep hazard lights on while you wait.",
      "Be as specific as possible when describing the issue.",
    ],
    whatWeNeed: [
      "Your exact location",
      "Vehicle year, make, and model",
      "A written description of the help you need",
    ],
    faqs: [
      {
        q: "What if my issue isn't listed as its own service?",
        a: "Select Other Roadside Service and describe what you need in the required notes field — dispatch will review it and confirm how we can help.",
      },
    ],
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
