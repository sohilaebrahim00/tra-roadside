import type { TopicPage } from "./topic-pages";

/** Place pages at /roadside/<slug>: highways, districts, an airport. The rules are in topic-pages.ts. */
export const TOPICS_PLACES: TopicPage[] = [
  // ---------------------------------------------------------------------------
  // Highways
  // ---------------------------------------------------------------------------
  {
    slug: "stuck-on-i-35e",
    kind: "place",
    title: "Stuck on I-35E? Roadside Help",
    h1: "Stuck on I-35E: roadside help for drivers",
    metaDescription:
      "{{price:flat-tire-change}} + {{dispatchFee}} dispatch. Flat tire on I-35E? Call 911 if you're in a lane, then call us to change it.",
    eyebrow: "I-35E",
    intro:
      "I-35E runs through Dallas, with Farmers Branch, Carrollton, Lewisville and Denton to the north and DeSoto, Lancaster, Red Oak and Waxahachie to the south. If a tire goes flat on it, get safe first, then call or send a request and a driver comes to the car to put on your spare.",
    service: "flat-tire-change",
    alsoServices: ["tire-repair-plug-patch", "tire-replacement"],
    cities: ["dallas", "farmers-branch", "carrollton", "lewisville", "denton", "coppell", "desoto", "lancaster", "red-oak", "waxahachie"],
    sections: [
      {
        heading: "Say E, not just 35",
        paragraphs: [
          "Two branches of I-35 cross the metroplex, and they are different roads. I-35E is the Dallas branch. I-35W is the Fort Worth branch. The two rejoin as I-35 near the University of North Texas campus in Denton.",
          "Dispatch can't send a driver to a number alone, so lead with the letter, then name the city you are closest to. On a road this long, a city name narrows your spot faster than any guess at a mile marker.",
        ],
      },
      {
        heading: "Where to stop",
        paragraphs: [
          "In a live traffic lane, or if anyone is in danger, call 911 first. Everything else waits.",
          "If the car can still roll, a slow drive to the right shoulder, an exit or a lot beside the road beats stopping in a lane. A ramp can look like a safe pocket, but traffic is entering or leaving at speed there and may not see you around the curve. Keep going to the end of the ramp if you can, then stop where a driver can reach you.",
          "Hazard lights on. Get everyone out on the side away from traffic, or stay belted in with the hazards on if the shoulder is too narrow to stand on.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: ["Read what you can see safely, and give us as many of these as you have:"],
        list: [
          "Northbound or southbound on I-35E.",
          "The nearest exit or cross street, and the city.",
          "A mile marker, if one is in sight and safe to read.",
          "Main lanes, an express lane if that stretch has one, or the frontage road.",
          "Whether the car has a spare, and where the wheel lock key is if you have locking nuts.",
        ],
      },
      {
        heading: "What the tire change costs",
        paragraphs: [
          "Putting on the spare you already carry is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once. With no usable spare, we can supply a tire and install it for {{price:tire-replacement}}, plus the same fee, once dispatch confirms a tire is available.",
          "We text or call you when the driver is on the way. Our average arrival is 30 minutes; the actual time depends on where you are and the traffic.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which exit should I give if I can't see a sign?",
        a: "The last one you passed or the next one you can see, and say which it is. Add the city and your direction. Dispatch can place you from that, and a mile marker is a bonus only if you can read it safely.",
      },
      {
        q: "Is it safe to change the tire myself on the shoulder?",
        a: "A shoulder beside moving traffic is a hard place to jack up a car. If you can't get well clear of the lane, stay buckled in with the hazards on and let a driver come. If you are in a lane, call 911.",
      },
      {
        q: "Can you tow my car off I-35E?",
        a: "No. We don't tow and we don't do mechanical repair. We put on your spare, supply a tire, plug or patch a puncture, jump a battery or open a locked door. If the car can't be fixed at the roadside, you will need a towing service.",
      },
      {
        q: "Do you cover all of I-35E?",
        a: "We serve Dallas, Farmers Branch, Carrollton, Lewisville, Denton, Coppell, DeSoto, Lancaster, Red Oak and Waxahachie, all places I-35E runs through or alongside. Tell dispatch your exact spot and they confirm whether we can reach it.",
      },
    ],
  },
  {
    slug: "stuck-on-i-35w",
    kind: "place",
    title: "Stuck on I-35W? Roadside Help",
    h1: "Stuck on I-35W: help with a ruined tire",
    metaDescription:
      "{{price:tire-replacement}} + {{dispatchFee}} dispatch. Tire shredded on I-35W? Call 911 if you're in a lane, then call us for a new tire.",
    eyebrow: "I-35W",
    intro:
      "I-35W is the Fort Worth side of the I-35 split, running through Burleson and Fort Worth and on to Denton, where it rejoins I-35E. When a tire is torn, blown or has no spare behind it, get safe first, then call or send a request. We come to the car with a tire and install it.",
    service: "tire-replacement",
    alsoServices: ["flat-tire-change", "tire-repair-plug-patch"],
    cities: ["fort-worth", "burleson", "denton"],
    sections: [
      {
        heading: "The W side of I-35",
        paragraphs: [
          "Drivers in Fort Worth and Burleson use I-35W. Drivers in Dallas use I-35E. Mixing the two up points the conversation at the wrong side of the metroplex, so start with the letter.",
          "Then give the city and the nearest cross street or exit. Fort Worth is a large city that reaches into five counties, so the name of the city alone is not a pin on the map.",
        ],
      },
      {
        heading: "When the tire needs replacing, not changing",
        paragraphs: [
          "A tire that has blown apart, split along the sidewall or been cut can't be plugged or patched, and a spare doesn't help if it is flat or missing. In that case we supply a tire and install it: {{price:tire-replacement}}, plus a {{dispatchFee}} dispatch fee charged once.",
          "Tire availability varies by size. Dispatch checks that a tire is available, and tells you the total, before a driver is sent.",
          "With a usable spare, a flat tire change is {{price:flat-tire-change}} plus the same fee. A puncture in the tread may be a plug or patch instead, {{price:tire-repair-plug-patch}} plus the fee, if the driver finds it repairable.",
        ],
      },
      {
        heading: "Staying safe while you wait",
        paragraphs: [
          "A car stopped in a live traffic lane, or anyone in danger, means 911 first, before you call us. Don't drive on a destroyed tire any farther than it takes to leave the lane, because every extra block damages the wheel.",
          "A wide shoulder or a lot is the best place to stop and a ramp the worst, because traffic is merging or leaving there at speed. If you can't get clear of traffic, stay belted in with the hazard lights on, and don't try to jack the car up yourself.",
        ],
      },
      {
        heading: "What helps us send the right tire",
        paragraphs: ["Have these ready if you can read them safely."],
        list: [
          "Your direction on I-35W and the city.",
          "The nearest exit or cross street, or a mile marker you can read safely.",
          "The year, make and model.",
          "The wheel size, from the sidewall or the sticker on the driver's door jamb.",
          "Whether a usable spare is in the car.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you put a new tire on if I have no spare?",
        a: "Yes. Tire replacement is {{price:tire-replacement}} plus the {{dispatchFee}} dispatch fee. Tire availability varies, so dispatch confirms one is available, and your total, before a driver is sent.",
      },
      {
        q: "How do I know if the tire can be repaired instead?",
        a: "Only a puncture in the tread can be plugged or patched. Damage in or near the sidewall, or a large hole, means replacement. The driver checks the tire before starting and tells you which it is.",
      },
      {
        q: "My wheels have locking nuts and I lost the key. Does that matter?",
        a: "It does. The lock has to come off before the wheel can, and that is a separate service. Mention it when you request so the driver comes prepared, and dispatch confirms the price before a driver is sent.",
      },
      {
        q: "How soon will help come, and how will I know?",
        a: "Once a driver is on the way, you get a text or a call. Average arrival is 30 minutes, with the real figure set by your location and the traffic. I-35W runs through Fort Worth, Burleson and Denton, and we serve all three.",
      },
    ],
  },
  {
    slug: "stuck-on-i-30",
    kind: "place",
    title: "Stuck on I-30? Roadside Help",
    h1: "Stuck on I-30: help for a car that won't restart",
    metaDescription:
      "{{price:jump-start}} + {{dispatchFee}} dispatch. Car dead on I-30? Call 911 if you're in a lane, then call us for a jump start.",
    eyebrow: "I-30",
    intro:
      "I-30 links Fort Worth, Arlington and Grand Prairie with Dallas, Mesquite, Garland, Rowlett and Rockwall. If your car dies and won't start again, get out of traffic first, then call or send a request and a driver brings a jump start to you.",
    service: "jump-start",
    alsoServices: ["flat-tire-change", "battery-replacement"],
    cities: ["fort-worth", "arlington", "grand-prairie", "dallas", "mesquite", "garland", "rowlett", "rockwall"],
    sections: [
      {
        heading: "A road that crosses a lake",
        paragraphs: [
          "On the east side of the metroplex, I-30 links Rowlett and Rockwall across Lake Ray Hubbard. If you stop on that crossing itself, say so first. Where help can pull in changes when you are over water, and dispatch should know it before anything else.",
          "Everywhere else, give the city and the nearest exit. Arlington, Grand Prairie and Mesquite are each crossed by more than one interstate, so say I-30 rather than the interstate.",
        ],
      },
      {
        heading: "Dead, or just not starting?",
        paragraphs: [
          "When a car clicks, cranks slowly or goes dark, a weak battery is a common cause, and a jump start often brings it back. It won't help if the trouble is something else, such as an empty tank, and we don't do mechanical repair or deliver fuel.",
          "Tell dispatch what happened right before the car stopped: dim lights, clicking, a slow crank, or the engine quit while you were driving. If it starts after a jump and dies again soon, the battery has probably reached the end of its life, and a replacement is the better fix.",
        ],
      },
      {
        heading: "Staying safe until help arrives",
        paragraphs: [
          "Call 911 first if you are in a live traffic lane or anyone is in danger. If the engine quit while you were moving, steering and braking can feel much heavier. Hold the wheel firmly and coast toward the right shoulder with your hazard lights on.",
          "Pick a shoulder or a lot over a ramp, since traffic enters and leaves a ramp at speed. Once stopped, put the car in park, set the parking brake and get everyone out on the side away from traffic. If the shoulder is too narrow to stand on, stay belted in with the hazards on.",
        ],
      },
      {
        heading: "Cost and arrival",
        paragraphs: [
          "A jump start is {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once. If the battery won't hold a charge, a replacement is {{price:battery-replacement}} plus the same fee, for eligible vehicles and batteries. Dispatch confirms the battery is compatible, and your total, before a driver is sent.",
          "You will get a text or a call when the driver heads your way. Arrival averages 30 minutes, but where you are and how the traffic runs decide the real time.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you jump start my car on the shoulder of I-30?",
        a: "Yes, when the driver can reach the car safely. A jump start is {{price:jump-start}} plus the {{dispatchFee}} dispatch fee. If you are in a live lane, call 911 first.",
      },
      {
        q: "What if the car dies again after the jump?",
        a: "Then the battery is probably not holding a charge, and a replacement is the better answer: {{price:battery-replacement}} plus the dispatch fee, for eligible vehicles and batteries. Dispatch confirms compatibility and your total first.",
      },
      {
        q: "I'm on the Lake Ray Hubbard crossing. Does that change anything?",
        a: "Tell dispatch you are on the crossing and which direction you are facing. If you are in a lane, call 911 first. Stay in the car with your seat belt on and the hazards flashing until help can reach you.",
      },
      {
        q: "Which cities along I-30 do you serve?",
        a: "We serve Fort Worth, Arlington, Grand Prairie, Dallas, Mesquite, Garland, Rowlett and Rockwall, all of which I-30 passes through or links.",
      },
    ],
  },
  {
    slug: "stuck-on-i-20",
    kind: "place",
    title: "Stuck on I-20? Roadside Help",
    h1: "Stuck on I-20: a flat tire changed at the roadside",
    metaDescription:
      "{{price:flat-tire-change}} + {{dispatchFee}} dispatch. Flat tire on I-20? Call 911 if you're in a lane, then call us to put on your spare.",
    eyebrow: "I-20",
    intro:
      "I-20 passes through Benbrook, Fort Worth, Kennedale, Arlington, Grand Prairie, Duncanville, Lancaster, Dallas and Mesquite. A flat tire on it starts with getting safe. Then call or send a request, and a driver comes to the car and puts on the spare you carry.",
    service: "flat-tire-change",
    alsoServices: ["tire-repair-plug-patch", "tire-replacement"],
    cities: ["benbrook", "fort-worth", "kennedale", "arlington", "grand-prairie", "duncanville", "lancaster", "dallas", "mesquite"],
    sections: [
      {
        heading: "Read the shield before you call",
        paragraphs: [
          "In Arlington, Grand Prairie, Mesquite and Dallas, I-20 shares the city with I-30. In Lancaster, I-35E forms the city's western edge while I-20 crosses its far north. Saying only that you are on the interstate leaves dispatch guessing, so name I-20 and the city.",
          "Then give your direction, eastbound or westbound, and the nearest exit or cross street. A mile marker is a bonus if you can read one safely.",
        ],
      },
      {
        heading: "A shoulder, a ramp or a lot",
        paragraphs: [
          "If you are in a live traffic lane, or anyone is in danger, 911 comes first. Then call us. If the car can still roll slowly, a wide shoulder or a parking lot at the next exit is the best place to stop. A ramp is the worst, because traffic enters and leaves it at speed and a stopped car there is easy to miss.",
          "Get everyone out on the side away from traffic, or stay belted in with the hazards on if the shoulder is too narrow to stand on. Please don't jack the car up yourself beside moving traffic.",
        ],
      },
      {
        heading: "Two things that decide how it goes",
        paragraphs: ["Before the driver arrives, find out these two things if you can do it safely:"],
        list: [
          "A usable spare. On many cars it lives under the trunk floor or beneath the vehicle. A flat or missing spare means you need a tire supplied instead.",
          "The wheel lock key. If your wheels have locking nuts, the key is often in the glove box or with the spare. A missing key is a separate service, so mention it when you request.",
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          "The spare you already carry goes on for {{price:flat-tire-change}}, and a {{dispatchFee}} dispatch fee is added once for sending the driver. A puncture in the tread may be repairable with a plug or patch, {{price:tire-repair-plug-patch}} plus the fee. With no usable spare, we supply a tire and install it, {{price:tire-replacement}} plus the fee, once dispatch confirms a tire is available.",
          "A text or a call tells you the driver is on the way. Our average arrival is 30 minutes, and your location and the traffic set the actual time.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does it matter whether I'm eastbound or westbound?",
        a: "Yes. It tells the driver which side of the road you are on and which way to approach. If you aren't sure, give the last exit you passed and the city.",
      },
      {
        q: "Can I drive to the next exit on a flat?",
        a: "Only if it is the safer choice, such as leaving a live lane. Even a short drive on a flat damages the wheel as well as the tire, so keep it slow and stop as soon as you are out of traffic.",
      },
      {
        q: "What if my spare is flat too?",
        a: "Then ask for tire replacement. We supply a tire and install it for {{price:tire-replacement}} plus the {{dispatchFee}} dispatch fee, once dispatch confirms a tire is available.",
      },
      {
        q: "Do you cover I-20 through Dallas and Fort Worth?",
        a: "Yes. We serve Benbrook, Fort Worth, Kennedale, Arlington, Grand Prairie, Duncanville, Lancaster, Dallas and Mesquite, where I-20 runs through our service area.",
      },
    ],
  },
  {
    slug: "stuck-on-i-635-lbj",
    kind: "place",
    title: "Stuck on I-635 (LBJ)? Roadside Help",
    h1: "Stuck on I-635 LBJ Freeway: a jump start comes to you",
    metaDescription:
      "{{price:jump-start}} + {{dispatchFee}} dispatch. Car died on I-635 LBJ? Call 911 if you're in a lane, then call us for a jump start.",
    eyebrow: "I-635 / LBJ",
    intro:
      "I-635, the LBJ Freeway, runs through Grapevine, Coppell, Irving, Farmers Branch, Dallas, Richardson, Garland and Mesquite. If your car dies on it, get clear of traffic first, then call or send a request and a driver brings a jump start to wherever you stopped.",
    service: "jump-start",
    alsoServices: ["battery-replacement", "flat-tire-change"],
    cities: ["dallas", "irving", "mesquite", "garland", "richardson", "grapevine", "coppell", "farmers-branch"],
    sections: [
      {
        heading: "Two names, one road",
        paragraphs: [
          "Drivers call this road both I-635 and the LBJ Freeway. Either name works with dispatch, but pair it with the city and the nearest cross street, because the road passes through eight of the cities we serve. Mesquite and Garland are toward the eastern end, Grapevine and Irving toward the western end.",
          "If the stretch you are on has express or managed lanes beside the main lanes, say which set you are in. A driver can't always cross from one to the other.",
        ],
      },
      {
        heading: "If the engine quits at speed",
        paragraphs: [
          "A dead engine can make steering and braking feel much heavier. Hold the wheel firmly, keep steady pressure on the brake, and let the car coast toward the right shoulder with your hazard lights on.",
          "Dial 911 before anything else if your car is in a live lane or anyone is in danger. Even a narrow shoulder beats the lane. A frontage road or a lot is better still, if there is one within reach. A ramp is a poor choice, because traffic is merging or exiting at speed.",
        ],
      },
      {
        heading: "What a jump start does and doesn't fix",
        paragraphs: [
          "A jump start fixes a dead battery. Tell dispatch what you saw: dim dash lights, clicking, a slow crank, or nothing at all. If the car quit while moving, say that too. We don't do mechanical repair and we don't deliver fuel, so an empty tank or a failed part is a job for someone else.",
          "A jump start costs {{price:jump-start}} plus a {{dispatchFee}} dispatch fee charged once. If the battery has failed for good, a replacement is {{price:battery-replacement}} plus the fee, for eligible vehicles and batteries. Dispatch confirms compatibility and your total before a driver is sent.",
        ],
      },
      {
        heading: "While you wait",
        paragraphs: [
          "Watch your phone for a text or a call once the driver is on the way. The average arrival is 30 minutes, though the real time depends on where you are and the traffic.",
          "Keep the hazards on and turn off other electronics so you don't drain the battery further. Stay belted in, or well away from the lanes if you have safely gotten out.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I say I-635 or LBJ when I call?",
        a: "Either one. Add the city, the direction you were traveling, and the nearest exit or cross street, and say whether you are in the main lanes or on a frontage road.",
      },
      {
        q: "What if I'm in the express lanes?",
        a: "Say so. Express or managed lanes are separate from the main lanes, and a driver can't always get from one to the other. If you are stopped in a live lane, call 911 first.",
      },
      {
        q: "Will a jump start get me home?",
        a: "Often, if the battery was the problem. If the car won't start again afterward, the battery needs replacing: {{price:battery-replacement}} plus the {{dispatchFee}} dispatch fee, for eligible vehicles and batteries.",
      },
      {
        q: "Can you bring gas if I ran out?",
        a: "No. We don't deliver fuel. We handle batteries, tires and locked cars, and we don't do mechanical repair.",
      },
    ],
  },
  {
    slug: "stuck-on-i-820",
    kind: "place",
    title: "Stuck on I-820? Roadside Help",
    h1: "Stuck on I-820: a flat tire changed at the roadside",
    metaDescription:
      "{{price:flat-tire-change}} + {{dispatchFee}} dispatch. Flat tire on I-820? Call 911 if you're in a lane, then call us to change it.",
    eyebrow: "I-820",
    intro:
      "I-820, also called Loop 820, goes around Fort Worth and passes through North Richland Hills, Haltom City and Saginaw. A flat on the loop is a get-safe-first problem. After that, call or send a request, and a driver comes to the car with your spare.",
    service: "flat-tire-change",
    alsoServices: ["tire-repair-plug-patch", "tire-replacement"],
    cities: ["fort-worth", "north-richland-hills", "haltom-city", "saginaw"],
    sections: [
      {
        heading: "On a loop, the compass can mislead",
        paragraphs: [
          "I-820 is a loop, so its direction keeps changing as it curves. Northbound can be true at one exit and wrong a few miles later. Give dispatch the direction you were traveling, then the nearest exit or cross street and the city: North Richland Hills, Haltom City, Saginaw or Fort Worth.",
          "In Haltom City, I-820 shares the area with US-377, TX-121 and TX-183. In Saginaw, other roads in the area include Main Street and Blue Mound Road. Say I-820 outright, so dispatch isn't choosing among them.",
        ],
      },
      {
        heading: "Making the stop safe",
        paragraphs: [
          "Anyone in danger, or a car sitting in a live lane, is a 911 call before it is a call to us. If the car can still roll, drive slowly to a wide shoulder, an exit or a lot rather than stopping beside the lane. A ramp is a bad place to stop, because traffic enters and leaves it at speed.",
          "Turn the wheels away from the road if you can, put the car in park and set the parking brake. Everyone gets out on the side away from traffic, or stays belted in with the hazards on if the shoulder is too narrow.",
        ],
      },
      {
        heading: "What a tire change includes",
        paragraphs: [
          "A flat tire change is the job of swapping the flat for the spare you already carry: {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once. It does not include a new tire.",
          "If the spare is flat, missing or unusable, ask for tire replacement instead, {{price:tire-replacement}} plus the fee. We supply the tire and install it once dispatch confirms one is available.",
        ],
      },
      {
        heading: "Before and after you call",
        paragraphs: [
          "Look for where the spare is stored, and whether your wheels have locking nuts and you have the key. Tell dispatch both. A missing key is a separate service, and it is better to say so now than when the driver arrives.",
          "When the driver is on the way, we text or call to tell you. Average arrival is 30 minutes; actual time depends on your location and traffic.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Loop 820 the same as I-820?",
        a: "Yes, it is the same road. Use whichever name you know, and add the city and the nearest cross street so dispatch can place you.",
      },
      {
        q: "I'm not sure which direction I'm going. What do I say?",
        a: "Give the last exit you passed and the city. On a loop, that is more reliable than a compass direction. Dispatch can work out the side of the road from there.",
      },
      {
        q: "Can you repair the tire instead of swapping it?",
        a: "Often, if the puncture is in the tread. A plug or patch is {{price:tire-repair-plug-patch}} plus the {{dispatchFee}} dispatch fee. Damage in or near the sidewall can't be safely repaired.",
      },
      {
        q: "Which cities along I-820 do you serve?",
        a: "We serve Fort Worth, North Richland Hills, Haltom City and Saginaw, all of which I-820 passes through.",
      },
    ],
  },
  {
    slug: "stuck-on-us-75",
    kind: "place",
    title: "Stuck on US-75? Roadside Help",
    h1: "Stuck on US-75 Central Expressway: tire help",
    metaDescription:
      "{{price:tire-replacement}} + {{dispatchFee}} dispatch. Torn tire or no spare on US-75? Call 911 if you're in a lane, then call us.",
    eyebrow: "US-75",
    intro:
      "US-75, called Central Expressway through Dallas, Richardson, Plano, Allen and McKinney, also passes Highland Park, University Park, Anna and Melissa. If a tire is torn or blown, or there is no spare to replace it, get safe first, then call or send a request. We supply a tire and install it where you stopped.",
    service: "tire-replacement",
    alsoServices: ["flat-tire-change", "tire-repair-plug-patch"],
    cities: ["dallas", "highland-park", "university-park", "richardson", "plano", "allen", "mckinney", "anna", "melissa"],
    sections: [
      {
        heading: "One road, two names",
        paragraphs: [
          "People say US-75 and Central Expressway for the same road. Either works for dispatch. Add the city, because the road covers a long run from Dallas up to Melissa, and the nearest cross street.",
          "Highland Park sits between US-75 and the Dallas North Tollway, so the two roads are close together there. If you are in or near Highland Park or University Park, say which of the two you are on. If a frontage road runs beside the main lanes where you stopped, tell dispatch which one you are on.",
        ],
      },
      {
        heading: "Tires that can't be saved",
        paragraphs: [
          "A torn sidewall, a blowout, or a hole too big or too close to the sidewall to plug can't be repaired, and a flat spare doesn't help. A new tire is supplied and installed: {{price:tire-replacement}}, plus a {{dispatchFee}} dispatch fee charged once. Dispatch confirms a tire is available, and your total, before a driver is sent.",
          "If you have a usable spare, swapping it on is a flat tire change at {{price:flat-tire-change}} plus the same fee.",
        ],
      },
      {
        heading: "Stopping safely, and what to have ready",
        paragraphs: [
          "If the car is in a live traffic lane or someone is in danger, call 911 first. A shoulder is better than the lane, and an exit or a lot is better than a shoulder. Avoid stopping on a ramp, where traffic is merging or leaving at speed and may not see you in time.",
          "If you can't get well clear of the lanes, don't get out. Stay belted in with the hazards on, and let the driver deal with the wheel. Read these off if you can do it safely:",
        ],
        list: [
          "Northbound or southbound on US-75, and the city.",
          "The nearest cross street or exit.",
          "The year, make and model.",
          "The wheel size, from the sidewall or the driver's door jamb sticker.",
          "Whether a usable spare is in the car.",
        ],
      },
      {
        heading: "After you call",
        paragraphs: [
          "A text or a call comes when the driver is on the way. Arrival averages 30 minutes, and the actual time depends on your location and the traffic.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why replace the tire instead of using my spare?",
        a: "You may not need to. A flat tire change puts on the spare you already carry, {{price:flat-tire-change}} plus the {{dispatchFee}} dispatch fee. Tire replacement is for a spare that is missing, flat or unusable.",
      },
      {
        q: "What do I give dispatch on a long road like this?",
        a: "The city, the direction, and the nearest cross street or exit. A mile marker helps only if you can read it safely.",
      },
      {
        q: "Does the tire have to be available first?",
        a: "Yes. Tire availability varies by size, so dispatch confirms a tire is available, and your total, before a driver is sent.",
      },
      {
        q: "Do you cover US-75 all the way to Melissa?",
        a: "We serve Dallas, Highland Park, University Park, Richardson, Plano, Allen, McKinney, Anna and Melissa, all places US-75 runs through. Tell dispatch your exact spot and they confirm.",
      },
    ],
  },
  {
    slug: "stuck-on-dallas-north-tollway",
    kind: "place",
    title: "Stuck on Dallas North Tollway",
    h1: "Stuck on the Dallas North Tollway: flat tire help",
    metaDescription:
      "{{price:flat-tire-change}} + {{dispatchFee}} dispatch. Flat tire on the Dallas North Tollway? Call 911 if you're in a lane, then call us.",
    eyebrow: "Dallas North Tollway",
    intro:
      "The Dallas North Tollway runs through Dallas, Highland Park, University Park, Addison, Plano and Frisco, and along the edge of Farmers Branch. A flat on the tollway means getting clear first. Then call or send a request, and a driver comes to put on your spare.",
    service: "flat-tire-change",
    alsoServices: ["tire-repair-plug-patch", "tire-replacement"],
    cities: ["dallas", "highland-park", "university-park", "farmers-branch", "addison", "plano", "frisco", "prosper"],
    sections: [
      {
        heading: "Who else can help on a toll road",
        paragraphs: [
          "A toll road has an operator, and that operator runs its own help for stranded drivers. Look for its signs or its roadside information, and use that help if it is closer to hand than ours. TRA is an independent company. We are not part of the tollway's operator, and we have no arrangement with it.",
          "Either way, if you are in a live lane or anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "Placing yourself on a tollway",
        paragraphs: [
          "A tollway has exits and cross streets just as a freeway does. Give dispatch your direction, northbound toward Plano and Frisco or southbound toward Dallas, the nearest cross street, and the city.",
          "Highland Park lies between the tollway and US-75, and Farmers Branch has the tollway on its eastern edge. If you are near either, say Dallas North Tollway outright so dispatch doesn't picture the wrong road.",
        ],
      },
      {
        heading: "Shoulder or exit",
        paragraphs: [
          "If the car can still roll, a slow drive to the next exit, and then a lot or a side street, is safer than stopping beside the lanes. Nobody should be jacking up a car next to moving tollway traffic.",
          "A ramp is a poor place to stop, since traffic is entering or leaving at speed. If you must stop beside the lanes, hazards on, parking brake set, and stay belted in unless the shoulder is wide enough to stand well clear of the car.",
        ],
      },
      {
        heading: "What a tire change costs",
        paragraphs: [
          "Swapping on the spare you already carry is a flat tire change at {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once. A puncture in the tread may be repairable with a plug or patch, {{price:tire-repair-plug-patch}} plus the fee. Without a usable spare, we supply a tire and install it, {{price:tire-replacement}} plus the fee, once dispatch confirms a tire is available.",
          "We will text or call when the driver is on the way. Our average arrival is 30 minutes, though your location and the traffic decide the actual time.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I call the tollway's own help first?",
        a: "You can use either, or both. The road's operator has its own help for stranded drivers, and we are a separate company you can call or request online. In a live lane, call 911 first.",
      },
      {
        q: "Does being on a tollway change the price?",
        a: "Our published prices don't depend on the road. A flat tire change is {{price:flat-tire-change}} plus the {{dispatchFee}} dispatch fee. Dispatch confirms your total before a driver is sent.",
      },
      {
        q: "What if I can't read the exit or cross street?",
        a: "Give the last one you passed, your direction and the city. Dispatch can place you from that.",
      },
      {
        q: "Which cities along the tollway do you serve?",
        a: "We serve Dallas, Highland Park, University Park, Farmers Branch, Addison, Plano, Frisco and Prosper, all places the Dallas North Tollway passes through or runs beside.",
      },
    ],
  },
  {
    slug: "stuck-on-bush-turnpike",
    kind: "place",
    title: "Stuck on Bush Turnpike? Roadside Help",
    h1: "Stuck on the President George Bush Turnpike",
    metaDescription:
      "{{price:jump-start}} + {{dispatchFee}} dispatch. Car dead on the Bush Turnpike? Call 911 if you're in a lane, then call us.",
    eyebrow: "Bush Turnpike",
    intro:
      "The President George Bush Turnpike runs through Irving, Coppell, Carrollton, Plano, Richardson, Garland, Rowlett, Sachse and Grand Prairie. If your car won't start again after a stop, get out of traffic first, then call or send a request, and a driver brings a jump start to you.",
    service: "jump-start",
    alsoServices: ["battery-replacement", "flat-tire-change"],
    cities: ["irving", "grand-prairie", "garland", "richardson", "plano", "carrollton", "coppell", "rowlett", "sachse"],
    sections: [
      {
        heading: "The sign may not say Bush",
        paragraphs: [
          "Along the turnpike the state route number changes. Around Richardson and Plano it is TX-190, and around Grand Prairie it is TX-161. A driver reading a sign and a driver who knows the road by its name may be saying different things, so give dispatch the name, the number you see, and the city.",
          "Say the nearest cross street or exit rather than the road you just left, and whether you were heading east, west, north or south when the car stopped.",
        ],
      },
      {
        heading: "Check before you call",
        paragraphs: [
          "A car that quits isn't always a dead battery. Glance at the fuel gauge first. We don't deliver fuel and we don't do mechanical repair, so an empty tank or a failed part means calling someone else.",
          "A dead battery usually shows up as clicking, dim lights or a dark dash. The jump start is {{price:jump-start}}, and the {{dispatchFee}} dispatch fee is added once for sending the driver. If the car dies again soon after, a replacement is {{price:battery-replacement}} plus the fee, for eligible vehicles and batteries.",
        ],
      },
      {
        heading: "The operator's help and ours",
        paragraphs: [
          "A turnpike has an operator, and that operator runs its own help for stranded drivers. Use it if it is closer to hand. TRA is independent, and we have no arrangement with the turnpike's operator.",
          "Call 911 first, ahead of anyone else, if you are in a live traffic lane or anyone is in danger.",
        ],
      },
      {
        heading: "Where to wait",
        paragraphs: [
          "A shoulder is better than a lane, and an exit or lot is better than a shoulder. Skip ramps: traffic is merging or leaving at speed there. Hazards on, parking brake set, and everyone out on the side away from traffic, unless the shoulder is too narrow, in which case stay belted in.",
          "Expect a text or a call once the driver is on the way. Our arrival average is 30 minutes; the actual time varies with your location and traffic. Meanwhile, shut off the radio, climate control and anything else drawing power.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the Bush Turnpike the same as TX-190 and TX-161?",
        a: "On different stretches, yes. Around Richardson and Plano the turnpike carries the TX-190 number, and around Grand Prairie it carries TX-161. Give dispatch the name and the city and they place you.",
      },
      {
        q: "My car quit while I was driving and won't even click. Can you help?",
        a: "Tell dispatch exactly that. A jump start helps when the battery is the problem. If it is something else, such as the fuel or a failed part, we don't do mechanical repair and can't fix it at the roadside.",
      },
      {
        q: "Can you tow me off the turnpike?",
        a: "No. We don't tow. If the car can't be fixed at the roadside, you will need a towing service. In a live lane, call 911 first.",
      },
      {
        q: "Which cities along the turnpike do you serve?",
        a: "We serve Irving, Coppell, Carrollton, Plano, Richardson, Garland, Rowlett, Sachse and Grand Prairie, all places the turnpike passes through.",
      },
    ],
  },
  {
    slug: "stuck-on-sam-rayburn-tollway",
    kind: "place",
    title: "Stuck on Sam Rayburn Tollway",
    h1: "Stuck on the Sam Rayburn Tollway (TX-121)",
    metaDescription:
      "{{price:jump-start}} + {{dispatchFee}} dispatch. Car dead on Sam Rayburn Tollway? Call 911 if you're in a lane, then call us.",
    eyebrow: "Sam Rayburn Tollway",
    intro:
      "The Sam Rayburn Tollway, also TX-121, runs through Coppell, Carrollton, Lewisville, The Colony, Plano, Frisco, Allen and McKinney. If your car dies on it, get clear of traffic first, then call or send a request, and a driver brings a jump start to you.",
    service: "jump-start",
    alsoServices: ["battery-replacement", "flat-tire-change"],
    cities: ["coppell", "carrollton", "lewisville", "the-colony", "plano", "frisco", "allen", "mckinney"],
    sections: [
      {
        heading: "Name the tollway and the number",
        paragraphs: [
          "Sam Rayburn Tollway and TX-121 are the same road in these cities. Either works, so say whichever you read on the sign, and add the city.",
          "Between McKinney and Allen the tollway runs along the border of the two cities, so the city name alone doesn't pin your spot. Add the nearest cross street and your direction.",
        ],
      },
      {
        heading: "Start with what happened",
        paragraphs: [
          "A dead battery tends to announce itself: dim lights, a slow crank, clicking, or a dark dash. Heat shortens a battery's life, and a Texas summer is hard on one that was already weak. A jump start is {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once.",
          "If the car starts but dies again soon, the battery has probably failed for good. A replacement is {{price:battery-replacement}} plus the fee, for eligible vehicles and batteries, and dispatch confirms compatibility and your total before a driver is sent.",
        ],
      },
      {
        heading: "Waiting safely on a tollway",
        paragraphs: [
          "Stopped in a live lane, or with anyone in danger? Call 911 before you do anything else. The tollway's operator also runs its own help for stranded drivers, and you can use it if it is closer to hand. TRA is independent, with no arrangement with the operator.",
          "Pick a shoulder or lot over a ramp, since traffic enters and leaves a ramp at speed. Don't raise the hood next to the lanes; the driver does that. Hazards on, parking brake set, and stay belted in if there is not room to get well clear.",
        ],
      },
      {
        heading: "After you call",
        paragraphs: [
          "When a driver is on the way, you hear from us by text or call. Our average arrival is 30 minutes. Where you are and how traffic is moving set the actual time.",
          "Turn off the radio, the climate control and anything else drawing power, so there is as much charge left as possible when the driver arrives.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I say Sam Rayburn Tollway or TX-121?",
        a: "Either. Add the city, your direction and the nearest cross street. Between McKinney and Allen, the cross street matters most.",
      },
      {
        q: "Can I open the hood while I wait?",
        a: "Not next to moving traffic. If you can get well clear of the lanes it helps the driver, but staying belted in with the hazards on is safer than working under a hood beside the tollway.",
      },
      {
        q: "What if the jump start works but the car dies again?",
        a: "Then the battery is not holding a charge. A replacement is {{price:battery-replacement}} plus the {{dispatchFee}} dispatch fee, for eligible vehicles and batteries.",
      },
      {
        q: "Which cities along the tollway do you serve?",
        a: "We serve Coppell, Carrollton, Lewisville, The Colony, Plano, Frisco, Allen and McKinney, all places the Sam Rayburn Tollway passes through.",
      },
    ],
  },
  {
    slug: "stuck-on-tx-183",
    kind: "place",
    title: "Stuck on TX-183? Roadside Help",
    h1: "Stuck on TX-183 Airport Freeway: flat tire help",
    metaDescription:
      "{{price:flat-tire-change}} + {{dispatchFee}} dispatch. Flat tire on TX-183? Call 911 if you're in a lane, then call us to change it.",
    eyebrow: "TX-183",
    intro:
      "TX-183 runs through Irving, Euless, Bedford and Hurst, where it is known as the Airport Freeway, and through Fort Worth, Haltom City and Benbrook. When a tire goes down on it, move to safety, then call or send a request. A driver comes to the car with your spare.",
    service: "flat-tire-change",
    alsoServices: ["tire-repair-plug-patch", "tire-replacement"],
    cities: ["irving", "euless", "bedford", "hurst", "fort-worth", "haltom-city", "benbrook"],
    sections: [
      {
        heading: "Airport Freeway, but not the airport",
        paragraphs: [
          "TX-183 is called the Airport Freeway in Irving, Euless, Bedford and Hurst, and DFW Airport land lies inside Irving and Euless. A car on the freeway itself is on a public road. If you are inside the airport grounds, tell dispatch, since the airport sets its own rules for where a driver can go.",
          "Name TX-183 outright and the city. Nearby routes include TX-121 in Bedford, Loop 820 in Hurst and I-20 in Benbrook, and a stranded driver can easily name the wrong one.",
        ],
      },
      {
        heading: "Making the stop safe",
        paragraphs: [
          "If the car is in a live traffic lane, or anyone is in danger, make 911 your first call. If the car can still roll, drive slowly to a wide shoulder, an exit or a lot instead of stopping beside the lane. A ramp is a poor place to stop, because traffic is merging or leaving at speed.",
          "Hazards on, parking brake set. Get out on the side away from traffic, or stay belted in if the shoulder is too narrow to stand well clear. Please don't jack up the car yourself next to moving traffic.",
        ],
      },
      {
        heading: "What a tire change includes, and what to tell us",
        paragraphs: [
          "A flat tire change puts on the spare you already carry: {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once. It does not include a new tire. A puncture in the tread may be a plug or patch, {{price:tire-repair-plug-patch}} plus the fee. If the spare is missing or flat, ask for tire replacement, {{price:tire-replacement}} plus the fee, and dispatch confirms a tire is available first.",
          "Give us what you can read safely, and we will do the rest:",
        ],
        list: [
          "Eastbound or westbound on TX-183, and the city.",
          "The nearest exit or cross street.",
          "Main lanes or the frontage road.",
          "Whether a usable spare is in the car, and where the wheel lock key is if you have locking nuts.",
        ],
      },
      {
        heading: "After you call",
        paragraphs: [
          "We text or call once the driver is on the way. Average arrival is 30 minutes, and the actual time depends on where you are and traffic.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does the Airport Freeway mean you can reach cars inside DFW Airport?",
        a: "Not automatically. A car on TX-183 itself is on a public road. Inside airport grounds, the airport's own rules may limit where a driver can go, and TRA holds no permit or partnership with the airport. Say exactly where the car is.",
      },
      {
        q: "Can I keep driving to a shop on the flat?",
        a: "Only far enough to leave a live lane. Even a short drive on a flat damages the wheel as well as the tire.",
      },
      {
        q: "What if I'm on the frontage road, not the main lanes?",
        a: "Say so. A frontage road is easier for a driver to reach, and it matters to dispatch which one you are on.",
      },
      {
        q: "Which cities along TX-183 do you serve?",
        a: "We serve Irving, Euless, Bedford, Hurst, Fort Worth, Haltom City and Benbrook, all places TX-183 runs through.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Districts
  // ---------------------------------------------------------------------------
  {
    slug: "roadside-help-downtown-dallas",
    kind: "place",
    title: "Roadside Help Downtown Dallas",
    h1: "Roadside help in Downtown Dallas garages and streets",
    metaDescription:
      "{{price:jump-start}} + {{dispatchFee}} dispatch. Car won't start in a Downtown Dallas garage or on the street? Call or request a driver.",
    eyebrow: "Downtown Dallas",
    intro:
      "A car that won't start Downtown is usually in a parking garage or at a curb on a tight block. Tell us the garage level or the cross street, and a driver comes to you with a jump start.",
    service: "jump-start",
    alsoServices: ["lockout", "battery-replacement"],
    cities: ["dallas"],
    sections: [
      {
        heading: "Give the level, not just the garage",
        paragraphs: [
          "In a garage, the address gets a driver to the door but not to the car. Tell dispatch the garage's name or street address, the level, and the section or the nearest stairwell or elevator. If you parked on a numbered level, give the number.",
          "If the garage uses tickets, a gate or an access code, say so, and be ready to meet the driver at the entrance if you can. We have no special access to any garage, so a driver gets in the way any other customer would.",
          "Garages can be quiet at some hours. If you are alone on the level, wait where you can be seen, near the elevator or stairwell, and keep your phone with you. If anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "The battery is not always under the hood",
        paragraphs: [
          "On some cars the battery sits in the trunk or under the rear seat, and the driver has to reach it. If the car is parked nose-in against a wall, between pillars or close to the next car, tell dispatch. The year, make and model help us plan for it.",
        ],
      },
      {
        heading: "On the street",
        paragraphs: [
          "Downtown blocks often run one way. Give the nearest cross street, the side of the street, and which way the car faces. If the space has a time limit, mention it, since a driver may have only a short window to work in.",
          "A car stopped in a travel lane, or anyone in danger, is a call to 911 before it is a call to us.",
        ],
      },
      {
        heading: "Cost and arrival",
        paragraphs: [
          "A jump start is {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once. If the battery won't hold a charge afterward, a replacement is {{price:battery-replacement}} plus the same fee, for eligible vehicles and batteries, and dispatch confirms your total before a driver is sent.",
          "We text or call you when the driver is on the way. Our average arrival is 30 minutes; the actual time depends on where you are and the traffic.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a driver reach my car on a high level of a garage?",
        a: "Dispatch asks for the level and any gate or access code, and tells you plainly if a driver can't reach that spot. Give those details when you call and you will know before anyone is sent.",
      },
      {
        q: "What if my car is boxed in between other cars?",
        a: "Say so when you call. A jump start needs access to the battery, so the driver may need a few feet of room at the front or wherever the battery sits.",
      },
      {
        q: "Do you have an arrangement with Downtown garages?",
        a: "No. TRA is independent and has no arrangement with any garage, lot or district group in Downtown Dallas.",
      },
      {
        q: "What if the jump start doesn't hold?",
        a: "Then the battery has probably failed, and replacing it is the better answer: {{price:battery-replacement}} plus the {{dispatchFee}} dispatch fee, for eligible vehicles and batteries.",
      },
    ],
  },
  {
    slug: "roadside-help-deep-ellum",
    kind: "place",
    title: "Roadside Help in Deep Ellum",
    h1: "Locked out or stuck in Deep Ellum? We come to you",
    metaDescription:
      "{{price:lockout}} + {{dispatchFee}} dispatch. Keys locked in your car in Deep Ellum? A driver opens it, non-destructively when possible, 24/7.",
    eyebrow: "Deep Ellum",
    intro:
      "Deep Ellum is a place most people drive to, park wherever they find a space, and walk from. When the keys end up inside the car, call or send a request and a driver comes to open it.",
    service: "lockout",
    alsoServices: ["jump-start", "flat-tire-change"],
    cities: ["dallas"],
    sections: [
      {
        heading: "Find the car again, in words",
        paragraphs: [
          "Street spaces and small lots can look alike at night. Give dispatch the nearest cross street, the side of the street, and something easy to spot nearby, such as a business sign or a lit corner. If the car is in a paid lot, say which lot.",
          "If you can't remember exactly, retrace your steps from where you are now to the car and tell dispatch the turns. A driver can work with that.",
        ],
      },
      {
        heading: "What dispatch needs from you",
        paragraphs: ["A few details make the call quick:"],
        list: [
          "The cross street and the side of the street, or the lot you used.",
          "The year, make and model of the car.",
          "Whether the keys are in the cabin or the trunk, since those are different jobs.",
          "Whether the engine is still running.",
        ],
      },
      {
        heading: "Proving the car is yours",
        paragraphs: [
          "The driver confirms the car is yours before opening anything, for everyone's safety. Have ID ready, or another way to show the vehicle belongs to you. Drivers use non-destructive entry methods whenever possible, so you aren't left with a broken window.",
          "If a friend can bring a spare key quickly, that may be the fastest way in. If not, the owner needs to be there when the driver arrives.",
        ],
      },
      {
        heading: "Waiting safely, and the cost",
        paragraphs: [
          "Wait somewhere well lit, near the car but out of the way of traffic, and ideally with someone. If a child or pet is locked inside, or anyone is in danger, call 911 first. Don't wait for a driver.",
          "Opening the vehicle so you can reach keys in the cabin is {{price:lockout}}, plus a {{dispatchFee}} dispatch fee charged once. Keys locked in the trunk are a separate job, so tell dispatch which one you have. A text or a call tells you the driver is on the way. Average arrival is 30 minutes, and your location and the traffic set the real time.",
        ],
      },
    ],
    faqs: [
      {
        q: "What if my phone is inside the car too?",
        a: "Borrow a phone from someone nearby, or ask a business for help placing a call. Request help online from any device if you can, and tell us where the car is.",
      },
      {
        q: "Do I need to be at the car?",
        a: "Yes. The driver confirms ownership before unlocking anything, so you need to be there with ID or another proof the car is yours.",
      },
      {
        q: "Will opening the door damage my car?",
        a: "Drivers use non-destructive entry methods whenever possible.",
      },
      {
        q: "Do you work with Deep Ellum venues or lots?",
        a: "No. TRA is an independent company with no arrangement with any venue, lot or district group in Deep Ellum. A driver comes to the car the way they would anywhere else.",
      },
    ],
  },
  {
    slug: "roadside-help-uptown-dallas",
    kind: "place",
    title: "Roadside Help in Uptown Dallas",
    h1: "Roadside help in Uptown Dallas apartment garages",
    metaDescription:
      "{{price:jump-start}} + {{dispatchFee}} dispatch. Car won't start in an Uptown Dallas garage or at the curb? Call or request a driver, 24/7.",
    eyebrow: "Uptown Dallas",
    intro:
      "In a neighborhood as dense as Uptown, a car often lives in a garage under an apartment or office building. When one won't start, tell us how to reach it, and a driver comes with a jump start.",
    service: "jump-start",
    alsoServices: ["battery-replacement", "lockout"],
    cities: ["dallas"],
    sections: [
      {
        heading: "The gate is part of the job",
        paragraphs: [
          "Tell dispatch whether the garage has a gate, an access code, a key card or a front desk, and who can let the driver in. A driver can't get through a closed gate alone, and TRA has no access to any building's garage. A resident or manager has to open it.",
          "Give the building's name or street address, the level, and the stall number if there is one.",
        ],
      },
      {
        heading: "Short trips and tired batteries",
        paragraphs: [
          "A car that only makes short hops around town may never get a full charge, and a battery that is run down a little each day eventually can't start the car. If this is not the first slow start, say so. It helps dispatch know whether a jump start or a replacement is the likelier answer.",
          "If the car starts after a jump and dies again, the battery has most likely failed.",
        ],
      },
      {
        heading: "Tight stalls and curb spaces",
        paragraphs: [
          "Garage stalls and parallel spaces can leave little room around the hood. Tell dispatch if the car is nose-in against a wall, between pillars or tucked behind another car. On some cars the battery isn't under the hood at all, so give the year, make and model.",
          "If the car is at the curb in a travel lane, or anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "Cost and arrival",
        paragraphs: [
          "A jump start is {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once. A battery replacement is {{price:battery-replacement}} plus the fee, for eligible vehicles and batteries, and dispatch confirms the battery is compatible and your total before a driver is sent.",
          "A text or a call comes once the driver is on the way. Our average arrival is 30 minutes, though the real time depends on your location and traffic. Keep your phone nearby, and turn off the lights and the radio in the meantime.",
        ],
      },
    ],
    faqs: [
      {
        q: "What if my garage needs a key card to get in?",
        a: "Tell dispatch when you call. Someone has to let the driver in, such as you, a resident or the building's manager. We can't open a gate or enter a building's garage on our own.",
      },
      {
        q: "Can you jump start a car that is in a tight stall?",
        a: "Often, if the driver can reach the battery. Tell dispatch how the car is parked and the year, make and model, and they will say whether a driver can reach it.",
      },
      {
        q: "Should I replace the battery instead?",
        a: "If it has already been jumped once and died again, yes. A replacement is {{price:battery-replacement}} plus the {{dispatchFee}} dispatch fee, for eligible vehicles and batteries.",
      },
    ],
  },
  {
    slug: "roadside-help-oak-cliff",
    kind: "place",
    title: "Roadside Help in Oak Cliff",
    h1: "Flat tire help on Oak Cliff streets and driveways",
    metaDescription:
      "{{price:flat-tire-change}} + {{dispatchFee}} dispatch. Flat tire at home in Oak Cliff? A driver puts on your spare. Call or request, 24/7.",
    eyebrow: "Oak Cliff",
    intro:
      "A flat tire on a neighborhood street is a safer place to be stuck than a freeway shoulder, but the car still has to be reached. Give us the house number or the nearest cross street, and a driver comes to put on your spare.",
    service: "flat-tire-change",
    alsoServices: ["tire-replacement", "jump-start"],
    cities: ["dallas"],
    sections: [
      {
        heading: "The address is usually the answer",
        paragraphs: [
          "At home, you can skip the landmarks. Give the house number and street, and say whether the car is in the driveway, at the curb or on the street across from the house. The district name alone covers a lot of ground, so the street is what lets a driver find you.",
          "If you are not at home, give the nearest cross street and the side of the street.",
        ],
      },
      {
        heading: "Room to work",
        paragraphs: [
          "A tire change needs space beside the wheel to set a jack and take the tire off. If the car is parked between two others at the curb, tell dispatch how much room there is. A driver can often work in a driveway or a wide spot without anyone moving.",
          "Please don't drive on the flat to find a better spot. Even a short drive damages the wheel, and a tire that could have been repaired may then have to be replaced.",
        ],
      },
      {
        heading: "Check the spare first",
        paragraphs: [
          "Find where the spare is stored, usually under the trunk floor or beneath the vehicle, and whether it has air. If your wheels have locking nuts, look for the key. Tell dispatch both. A missing key is a separate service.",
          "If the car is stopped in a travel lane, or anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "Cost and arrival",
        paragraphs: [
          "Putting on the spare you already carry is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once. With no usable spare, we supply a tire and install it, {{price:tire-replacement}} plus the same fee, once dispatch confirms a tire is available.",
          "A text or a call tells you the driver is on the way. Our average arrival is 30 minutes, and the actual time depends on your location and traffic.",
        ],
      },
    ],
    faqs: [
      {
        q: "My car has been sitting with a slow leak. Is that a flat?",
        a: "If the tire is low and won't hold air, treat it as one. Don't drive on it. A nail or small puncture in the tread may be repairable, {{price:tire-repair-plug-patch}} plus the {{dispatchFee}} dispatch fee.",
      },
      {
        q: "What if I don't know where my spare is?",
        a: "Check the trunk floor, then underneath the vehicle. Tell dispatch if you can't find one, and ask for tire replacement.",
      },
      {
        q: "Does the driver need me at the car?",
        a: "For a tire change, not always, but it helps. Tell dispatch where the car is and where the key to any wheel locks is. For anything involving the keys, the driver needs you there.",
      },
    ],
  },
  {
    slug: "roadside-help-bishop-arts",
    kind: "place",
    title: "Roadside Help in Bishop Arts",
    h1: "Locked out in the Bishop Arts District? We can help",
    metaDescription:
      "{{price:lockout}} + {{dispatchFee}} dispatch. Keys locked in your car in Bishop Arts? A driver opens it, non-destructively when possible.",
    eyebrow: "Bishop Arts District",
    intro:
      "A quick stop to pick something up turns into a long wait when the keys are on the seat. In the Bishop Arts District, tell us the block and the side of the street, and a driver comes to open the car.",
    service: "lockout",
    alsoServices: ["jump-start", "flat-tire-change"],
    cities: ["dallas"],
    sections: [
      {
        heading: "Small lots and tight blocks",
        paragraphs: [
          "Parking in a busy district is tight: spaces along the street and small lots behind buildings. Tell dispatch the nearest cross street, which side of the street, and whether the car is in a lot behind a business. If it is a customer lot, give the business name so the driver doesn't have to look lot by lot.",
          "If you are inside a business, ask them whether you may wait in their lot, and let dispatch know.",
        ],
      },
      {
        heading: "Before you call",
        paragraphs: ["A few checks can save a trip. If the engine is still running, tell dispatch right away."],
        list: [
          "Try every door, and the trunk or hatch, in case one isn't locked.",
          "Make sure the keys are really inside the car and not in a bag or on a counter.",
          "Note whether the keys are in the cabin or the trunk, since those are different jobs.",
          "If someone can bring a spare key quickly, that may be the fastest way in.",
        ],
      },
      {
        heading: "Proving the car is yours",
        paragraphs: [
          "For everyone's safety, the driver confirms the car is yours before unlocking anything. Have ID ready, or another way to show it belongs to you. Entry is non-destructive whenever possible.",
          "If a child or pet is locked in the car, or anyone is in danger, call 911 first. Don't wait for us.",
        ],
      },
      {
        heading: "Cost and arrival",
        paragraphs: [
          "Opening the vehicle for keys in the cabin is {{price:lockout}}, plus a {{dispatchFee}} dispatch fee charged once. Keys locked in the trunk are a separate job, and dispatch confirms your total before a driver is sent.",
          "You will get a text or a call when the driver is on the way. Our average arrival is 30 minutes; the actual time depends on your location and traffic. Stay near the car, but out of the way of passing traffic.",
        ],
      },
    ],
    faqs: [
      {
        q: "The car is running and locked. What do I do?",
        a: "Tell dispatch right away and stay near the car. If anyone is inside, or the car could roll, call 911 first.",
      },
      {
        q: "Can the driver open the car if I'm not there?",
        a: "No. The driver confirms ownership before unlocking, so you need to be there with ID or another proof the car is yours.",
      },
      {
        q: "Do you have an arrangement with Bishop Arts businesses?",
        a: "No. TRA is independent and has no arrangement with any business, lot or district group in the Bishop Arts District.",
      },
    ],
  },
  {
    slug: "roadside-help-lakewood-dallas",
    kind: "place",
    title: "Roadside Help in Lakewood Dallas",
    h1: "Dead battery at home in Lakewood, Dallas",
    metaDescription:
      "{{price:battery-replacement}} + {{dispatchFee}} dispatch. Battery dead again in Lakewood? We bring a new one and install it at your car.",
    eyebrow: "Lakewood",
    intro:
      "Lakewood is a residential neighborhood in Dallas, and a dead battery there usually means a car in a driveway or at the curb. Call or send a request, and a driver comes to you with a jump start or a new battery.",
    service: "battery-replacement",
    alsoServices: ["jump-start", "lockout"],
    cities: ["dallas"],
    sections: [
      {
        heading: "A battery that told you first",
        paragraphs: [
          "A battery often gives warning before it quits. A slow crank in the morning, dim lights at idle or a car that needed a jump last month are all signs. Texas heat shortens a battery's life, and one that has been struggling often gives out on a hot afternoon.",
          "If you have already jumped the car once and it died again, jumping it a second time only moves the problem. A replacement is the better answer.",
        ],
      },
      {
        heading: "Replaced where it sits",
        paragraphs: [
          "We bring a new battery and install it where the car is parked, in the driveway or at the curb. A battery replacement includes a 1-year warranty, so keep your invoice. On some cars the battery isn't under the hood, so give the year, make and model, and your VIN if you can reach it.",
          "Battery pricing varies by vehicle and battery type. Dispatch confirms the battery is compatible, and your total, before a driver is sent.",
        ],
      },
      {
        heading: "Telling us where to come",
        paragraphs: [
          "Give the house number and street, and say whether the car is in the driveway, at the curb or in a garage. If it is in a closed garage, make sure the driver can reach it, with the door open or someone to open it.",
          "If you see smoke or smell burning from under the hood, or anyone is in danger, move away from the car and call 911 first.",
        ],
      },
      {
        heading: "Cost and arrival",
        paragraphs: [
          "A battery replacement is {{price:battery-replacement}}, plus a {{dispatchFee}} dispatch fee charged once, for eligible vehicles and batteries. If a jump start is all the car needs, that is {{price:jump-start}} plus the same fee.",
          "Once the driver is on the way, we text or call you. Our average arrival is 30 minutes, though the real time depends on your location and traffic.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I know whether I need a jump or a new battery?",
        a: "If the car has failed once and starts after a jump, a jump may be enough. If it has needed one before, or dies again soon after, replace it. Your driver can advise on site.",
      },
      {
        q: "Will the new battery work in my car?",
        a: "Battery pricing and compatibility vary by vehicle and battery type. Give dispatch the year, make and model, and your VIN if you can reach it, and they confirm compatibility and the total before a driver is sent.",
      },
      {
        q: "What does the warranty cover?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice for warranty service.",
      },
    ],
  },
  {
    slug: "roadside-help-las-colinas",
    kind: "place",
    title: "Roadside Help in Las Colinas",
    h1: "Roadside help in Las Colinas, Irving",
    metaDescription:
      "{{price:jump-start}} + {{dispatchFee}} dispatch. Car won't start in a Las Colinas lot or garage? Call or request a driver, 24/7.",
    eyebrow: "Las Colinas",
    intro:
      "Las Colinas is part of Irving, so it falls under the same coverage as the rest of the city. When a car won't start in an office lot or garage, tell us the building and where the car sits, and a driver brings a jump start.",
    service: "jump-start",
    alsoServices: ["battery-replacement", "lockout"],
    cities: ["irving"],
    sections: [
      {
        heading: "Which lot, which building",
        paragraphs: [
          "Large office complexes can have several lots and garages that look alike. Give dispatch the building's name or street address, which lot or garage, and the row or level. A landmark helps too, such as an entrance or a sign you can see from the car.",
          "If the property has a gate, a guard desk or an access code, tell dispatch that when you call.",
        ],
      },
      {
        heading: "After a long day in the lot",
        paragraphs: [
          "A car that has sat in the sun all day, with lights or electronics left on, can fail to start at the end of the workday. Heat shortens a battery's life, and a battery on its last legs often gives out after a long day parked.",
          "If the car starts after a jump and dies again, it needs a new battery. We can replace it in the same lot, once dispatch confirms compatibility.",
        ],
      },
      {
        heading: "What to have ready",
        paragraphs: ["The more of these you can give, the sooner dispatch can plan the visit:"],
        list: [
          "The building name or address, and the lot or garage.",
          "The row, the level or the nearest entrance.",
          "The year, make and model of the car.",
          "What the car did: clicking, a slow crank, dim lights or nothing.",
          "Any gate, guard desk or access code a driver will meet.",
        ],
      },
      {
        heading: "We are not part of the property, and the cost",
        paragraphs: [
          "TRA is independent, with no arrangement with any property manager, building or lot in Las Colinas. A driver gets in the way any other customer would. If the lot restricts access, dispatch will tell you plainly whether a driver can reach it or whether to meet somewhere nearby. If anyone is in danger, call 911 first.",
          "A jump start is {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once. A battery replacement is {{price:battery-replacement}} plus the fee, for eligible vehicles and batteries. We text or call when the driver is on the way. Average arrival is 30 minutes, and the actual time depends on your location and traffic.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is Las Colinas covered like the rest of Irving?",
        a: "Yes. Las Colinas is part of Irving, which we serve. Tell dispatch the building, the lot and the row or level.",
      },
      {
        q: "Can you replace the battery in the parking lot?",
        a: "Yes, for eligible vehicles and batteries: {{price:battery-replacement}} plus the {{dispatchFee}} dispatch fee. Dispatch confirms the battery is compatible, and your total, before a driver is sent.",
      },
      {
        q: "What if I don't know the lot's name?",
        a: "Give the building's address and a landmark you can see, such as an entrance or a sign. Dispatch can work from that.",
      },
    ],
  },
  {
    slug: "roadside-help-sundance-square",
    kind: "place",
    title: "Roadside Help Sundance Square",
    h1: "Flat tire near Sundance Square in Fort Worth",
    metaDescription:
      "{{price:flat-tire-change}} + {{dispatchFee}} dispatch. Flat tire near Sundance Square in Fort Worth? A driver puts on your spare. Call or request.",
    eyebrow: "Sundance Square",
    intro:
      "You parked, spent your evening, and came back to a tire that is down. Tell us the garage level or the street and cross street, and a driver comes to put on your spare.",
    service: "flat-tire-change",
    alsoServices: ["tire-replacement", "lockout"],
    cities: ["fort-worth"],
    sections: [
      {
        heading: "Don't drive the flat out",
        paragraphs: [
          "In a garage it is tempting to drive the flat down the ramp and out. Don't. The wheel takes the damage, and a tire that could have been repaired may have to be replaced. Stay put and call.",
          "The same goes for a street space. Driving a few blocks to somewhere easier costs more than waiting a while.",
        ],
      },
      {
        heading: "Tell us where you are",
        paragraphs: [
          "In a garage, give its name or street address, the level, and the section or nearest stairwell. On the street, give the nearest cross street, the side of the street, and which way the car faces. Tell dispatch about any ticket, gate or time limit.",
          "TRA has no special access to any garage or lot in Fort Worth, so a driver gets in the way any other customer would. If the car is blocking a travel lane, or anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "Check the spare",
        paragraphs: [
          "Find where the spare is stored, usually under the trunk floor or beneath the vehicle, and whether it has air. If your wheels have locking nuts, look for the key. A tire change needs room beside the wheel, so tell dispatch if the car is nose-in or close to a pillar.",
        ],
      },
      {
        heading: "Cost and arrival",
        paragraphs: [
          "A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once. If a puncture is in the tread, a plug or patch may do it, {{price:tire-repair-plug-patch}} plus the fee. With no usable spare, tire replacement is {{price:tire-replacement}} plus the fee, once dispatch confirms a tire is available.",
          "A text or a call tells you the driver is on the way. Our average arrival is 30 minutes, and your location and the traffic set the actual time.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you change a tire in a parking garage?",
        a: "Often, yes, if the driver can reach the car. Tell dispatch the level and any gate or ticket, and they will tell you plainly if a driver can't reach that spot.",
      },
      {
        q: "Do you have an arrangement with Sundance Square or its garages?",
        a: "No. TRA is independent and has no arrangement with Sundance Square, any garage or any district group.",
      },
      {
        q: "My tire is flat and I have no spare. What now?",
        a: "Ask for tire replacement. We supply a tire and install it, {{price:tire-replacement}} plus the {{dispatchFee}} dispatch fee, once dispatch confirms a tire is available.",
      },
    ],
  },
  {
    slug: "roadside-help-fort-worth-stockyards",
    kind: "place",
    title: "Roadside Help Fort Worth Stockyards",
    h1: "Roadside help at the Fort Worth Stockyards",
    metaDescription:
      "{{price:jump-start}} + {{dispatchFee}} dispatch. Car won't start at the Fort Worth Stockyards? Tell us the lot or street. Call or request, 24/7.",
    eyebrow: "Fort Worth Stockyards",
    intro:
      "Visitors to the Fort Worth Stockyards often park for hours and walk from there. When the car won't start afterward, tell us the lot or the street, and a driver comes with a jump start.",
    service: "jump-start",
    alsoServices: ["lockout", "flat-tire-change"],
    cities: ["fort-worth"],
    sections: [
      {
        heading: "A long day in the Texas sun",
        paragraphs: [
          "A car that sits for hours in a lot has had a long day in the heat, and heat shortens a battery's life. Add a radio or dome light left on, or headlights that stayed on, and a weak battery can give out by the time you walk back.",
          "If it starts after a jump and dies again soon, it needs a new battery, and we can replace it where the car is parked.",
        ],
      },
      {
        heading: "Name the lot or the street",
        paragraphs: [
          "Give dispatch the name of the lot if you saw one, or the nearest cross street and a landmark you can see from the car. If the car is on the street, say which side and which way it faces. If the lot has gates or closes at some point, tell dispatch.",
        ],
        list: [
          "The lot's name, or the nearest cross street.",
          "A landmark you can see from the car.",
          "The year, make and model.",
          "What the car did: clicking, a slow crank, dim lights or nothing.",
        ],
      },
      {
        heading: "We are not part of the district",
        paragraphs: [
          "TRA is independent, with no arrangement with any venue, lot owner or district group at the Stockyards. A driver gets in the way any other customer would. If a spot is closed to outside vehicles, dispatch will say so plainly, and it may be easier to meet the driver somewhere nearby.",
          "If the car is in a travel lane, or anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "Cost and arrival",
        paragraphs: [
          "A jump start is {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once. A battery replacement is {{price:battery-replacement}} plus the fee, for eligible vehicles and batteries, and dispatch confirms your total before a driver is sent.",
          "We text or call you when the driver is on the way. Our average arrival is 30 minutes, though the real time depends on your location and traffic.",
        ],
      },
    ],
    faqs: [
      {
        q: "My phone is nearly dead too. What should I tell dispatch first?",
        a: "Where the car is. Give the lot or the cross street before anything else, then your vehicle's year, make and model.",
      },
      {
        q: "What if my keys are locked in the car instead?",
        a: "Then ask for a lockout. The driver confirms ownership before unlocking anything, so have ID ready. Entry is non-destructive whenever possible.",
      },
      {
        q: "Can you replace the battery in the parking lot?",
        a: "Yes, for eligible vehicles and batteries: {{price:battery-replacement}} plus the {{dispatchFee}} dispatch fee. Dispatch confirms compatibility and your total before a driver is sent.",
      },
    ],
  },

  // ---------------------------------------------------------------------------
  // Airport
  // ---------------------------------------------------------------------------
  {
    slug: "car-trouble-at-dfw-airport",
    kind: "place",
    title: "Car Trouble at DFW Airport",
    h1: "Car won't start at DFW Airport? Here's how we help",
    metaDescription:
      "{{price:jump-start}} + {{dispatchFee}} dispatch. Dead battery after a trip? Tell us exactly where your car is at DFW Airport. Call or request.",
    eyebrow: "DFW Airport",
    intro:
      "Coming back from a trip to a car that won't start is a common ending at an airport lot. Tell us exactly where the car is parked, and a driver comes with a jump start wherever the airport's own rules allow.",
    service: "jump-start",
    alsoServices: ["battery-replacement", "lockout"],
    cities: ["irving", "euless", "grapevine", "coppell"],
    sections: [
      {
        heading: "What we can and can't do on airport property",
        paragraphs: [
          "TRA is an independent roadside assistance company. We hold no permit, authorization or partnership with DFW International Airport, and we can't enter restricted areas. The airport sets its own rules for who can go where, and those rules may limit where a driver can reach your car.",
          "That is why the exact spot matters. Say whether the car is in a terminal garage, a long-term lot or a remote lot, plus the lot name or number and the row or level. Dispatch tells you plainly whether a driver can reach that spot or whether it makes more sense to meet somewhere the driver can.",
        ],
      },
      {
        heading: "The long-term lot problem",
        paragraphs: [
          "A car that has sat for days or weeks can lose enough charge to leave you with nothing but a click. If it is the first time the battery has failed on this trip, start with a jump start. If it has already been jumped and died again, go straight to a replacement.",
          "If the key fob has gone dead, or the keys are inside, a lockout may be what you need instead. If anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "Which city is the airport in?",
        paragraphs: [
          "Airport land is spread across several cities, with parts inside Irving, Euless, Grapevine and Coppell. Don't rely on a city name or a street address to describe where you are. Give the terminal, the lot and the level instead.",
        ],
        list: [
          "The terminal you used, or the lot's name or number.",
          "The level, the row or the section.",
          "The year, make and model, and what the car did.",
        ],
      },
      {
        heading: "Cost and arrival",
        paragraphs: [
          "A jump start is {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once, the same published prices as anywhere else we work. A battery replacement is {{price:battery-replacement}} plus the fee, for eligible vehicles and batteries, and dispatch confirms your total before a driver is sent.",
          "We text or call you when the driver is on the way. Our average arrival is 30 minutes. At an airport the real time also depends on how easily a driver can reach your lot.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you have permission to work at DFW Airport?",
        a: "No. TRA is an independent company with no permit, authorization or partnership with the airport, and we can't enter restricted areas. Dispatch tells you plainly if a driver can't reach your spot.",
      },
      {
        q: "I've been away a week and the car won't start. What do I need?",
        a: "Almost always the battery. If this is the first failure, start with a jump start. If it has been jumped once and died again, ask for a battery replacement.",
      },
      {
        q: "My flight lands late. Is anyone working?",
        a: "Dispatch is open 24/7, 365 days a year. What affects how long you wait is where the car is parked and how easily a driver can reach it.",
      },
      {
        q: "What should I tell dispatch about where the car is?",
        a: "The terminal, the lot or garage, the level and the row or section, as exactly as you can. If you aren't sure, say what you passed on the way in.",
      },
    ],
  },
];
