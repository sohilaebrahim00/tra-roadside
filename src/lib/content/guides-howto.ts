import type { Guide } from "./guides";

/** Practical how-to guides. The rules are in guides.ts. */

const UPDATED = "2026-11-04";

/** Portrait field photos for the guide cards, all 1080 x 1350. */
const card = (name: string) => ({ src: `/images/field/${name}.webp`, width: 1080, height: 1350 });

export const GUIDES_HOWTO: Guide[] = [
  {
    slug: "what-does-roadside-assistance-cover",
    title: "What Does Roadside Assistance Cover?",
    h1: "What roadside assistance covers, and what it was never meant to do",
    metaDescription:
      "What a roadside company handles on the spot, from jump starts to lockouts, what it doesn't do, and how to tell which kind of help your problem needs.",
    topic: "How-to guide",
    dek: "Roadside assistance is help that comes to the car, for problems small enough to fix where it sits. The name makes it sound like a rescue for any breakdown, and it isn't. It covers a short list of jobs, and knowing that list saves you a call to the wrong place.",
    updated: UPDATED,
    cardImage: card("field-arrival-gear"),
    sections: [
      {
        heading: "The jobs a roadside company usually does",
        paragraphs: [
          "Across the industry, the standard menu is a jump start, a spare tire change, a lockout, fuel delivery and a tow. Some companies do all five, and some do only a few. What the jobs share is that one person with a truck and a few tools can finish them at the curb, and then the car can go on its way.",
          "Anything that needs a lift, a diagnostic computer or a part taken apart is a different kind of job. That belongs to a repair shop, however capable the roadside driver is.",
        ],
      },
      {
        heading: "What TRA does",
        paragraphs: ["TRA dispatches around the clock across Dallas–Fort Worth, and it covers the jobs where the car can drive away when the driver leaves:"],
        list: [
          "A dead battery: a jump start, or a new battery installed where you're parked.",
          "Locked out: opening the vehicle with the keys inside, trunk included.",
          "A flat tire: your spare put on, a puncture in the tread repaired, or a tire supplied and installed.",
          "A stuck screw or nail taken out and the tire made safe.",
          "A wheel that won't come off: a wheel lock removed, or a stripped lug nut taken off.",
          "A cracked or leaking valve stem replaced.",
        ],
      },
      {
        heading: "What TRA does not do",
        paragraphs: [
          "TRA does not tow, does not deliver fuel, does no mechanical repair and makes no keys. A flat tire change uses the spare already in the vehicle, so a car with no usable spare needs a tire supplied and installed instead.",
          "If the engine overheats, the transmission fails, the tank is empty or the keys are lost rather than locked inside, you need a tow company, a shop, a fuel delivery service or a locksmith. It's better to learn that on the phone than after a driver has made the trip.",
        ],
      },
      {
        heading: "Coverage is a different question from cost",
        paragraphs: [
          "The word cover can also mean insurance. Some auto policies, car makers and credit cards include roadside help, with limits on which services count, how many calls you get a year and how far a tow goes. Ask what is included before you count on it.",
          "TRA is pay per use, so there's no plan to be covered by. You request the job and pay for it. A jump start costs {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once per job, and dispatch confirms your total when you request help. Our average arrival is 30 minutes, with the actual time depending on your location and traffic. We text or call when the driver is on the way.",
        ],
      },
      {
        heading: "What to tell dispatch so the right help is sent",
        paragraphs: ["Whoever you call, the same few facts get the right driver sent the first time:"],
        list: [
          "Where the car is: the road, the direction you were going and the nearest exit or cross street.",
          "The year, make and model.",
          "What happened, in plain words: a clicking sound, a flat, keys on the seat.",
          "Whether you carry a spare, and where the battery is if it isn't under the hood.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a tow included in roadside assistance?",
        a: "That depends on the company or the plan. Many memberships include some towing. TRA does not tow, so if the car can't be driven after a jump or a tire, you will need a tow company.",
      },
      {
        q: "Does roadside assistance include fuel?",
        a: "Some companies deliver fuel. TRA does not. If you ran out, you'll need someone to bring fuel or a way to get the car to a gas station.",
      },
      {
        q: "Do I need a membership to use TRA?",
        a: "No. You request the service you need, and the price is the published service price plus the dispatch fee.",
      },
    ],
    services: ["jump-start", "flat-tire-change", "lockout"],
  },
  {
    slug: "how-to-jump-start-a-car",
    title: "How to Jump Start a Car, Step by Step",
    h1: "How to jump start a car with cables, in the safe order, and when to stop",
    metaDescription:
      "Jump start a dead battery with jumper cables: the order to connect and remove the clamps, a safe place to ground, and signs you should stop and call.",
    topic: "How-to guide",
    dek: "A jump start is simple when the clamps go on in the right order and risky when they don't. Read the jump-start page of your owner's manual first, because some cars keep their jump points away from the battery. Where this page and your manual disagree, the manual wins.",
    updated: UPDATED,
    cardImage: card("field-jump-start-hood"),
    sections: [
      {
        heading: "Before you touch a cable",
        paragraphs: [
          "Park the running car close enough for the cables to reach, but with the two cars not touching. Turn both off, set both parking brakes, and switch off the lights, radio and air conditioning in the dead car so nothing pulls power the moment it wakes up.",
          "Then look at the dead battery. If the case is cracked, swollen or leaking, or you smell rotten eggs, stop here and call for help. A damaged battery is not one to jump.",
        ],
      },
      {
        heading: "Connecting the cables, in this order",
        paragraphs: ["Keep the clamps from touching each other or any metal while you work. The order below keeps the spark that can happen on the last connection away from the battery."],
        list: [
          "Clip one red clamp to the positive (+) terminal of the dead battery. It usually has a red cover or a plus sign.",
          "Clip the other red clamp to the positive terminal of the good battery.",
          "Clip one black clamp to the negative (-) terminal of the good battery.",
          "Clip the last black clamp to bare, unpainted metal on the dead car, such as a sturdy engine bracket or the ground point your manual shows. Choose a spot away from the battery, the belts and the fan. Do not put it on the dead battery's own negative post.",
          "Check that the cables are clear of belts and fan blades and that the clamps are gripping metal, not sitting loose.",
        ],
      },
      {
        heading: "Starting the car and taking the cables off",
        paragraphs: [
          "Start the good car and let it run for a few minutes. Then try the dead car. If it starts, leave both running. If it only clicks or cranks slowly, wait a few minutes and try again in short tries instead of one long one.",
          "Once the engine is running, remove the cables in exactly the reverse order: the black clamp from the bare metal first, then the black from the good battery, then the red from the good battery, and last the red from the battery that was dead. Keep the clamps apart as they come off. Don't shut the engine off yet.",
        ],
      },
      {
        heading: "When to stop and call someone",
        paragraphs: ["Take the cables off and make a call if any of these happens:"],
        list: [
          "The battery is cracked, swollen or leaking, or smells like rotten eggs.",
          "The battery isn't under the hood and you can't find the jump posts the manual describes.",
          "The cables get hot, smoke, or spark when they touch a terminal.",
          "The car only clicks or cranks slowly after several tries, which can mean the battery is past a jump or the problem isn't the battery.",
          "It's a hybrid or electric car and the manual doesn't show the jump points.",
        ],
      },
      {
        heading: "If you would rather not do it yourself",
        paragraphs: [
          "A jump start from TRA costs {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once per job. We text or call when the driver is on the way. Our average arrival is 30 minutes, with the actual time depending on your location and traffic.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why shouldn't the last clamp go on the dead battery's negative post?",
        a: "A battery can give off a flammable gas, and the last connection can throw a small spark. Making that connection on bare metal away from the battery keeps the spark away from the gas.",
      },
      {
        q: "Should the good car be running while I try?",
        a: "Yes. Most manuals have you start the good car and keep it running so its charging system helps. Your manual has the exact steps for your car.",
      },
      {
        q: "What if the cables won't reach?",
        a: "Move the good car, but keep the cars from touching. Never run cables across a lane of traffic. If you can't get them close enough, it's time to call for help.",
      },
    ],
    services: ["jump-start", "battery-replacement"],
  },
  {
    slug: "jumper-cables-or-jump-pack",
    title: "Jumper Cables or a Jump Pack: Which to Keep?",
    h1: "Jumper cables or a portable jump pack: which one belongs in your car",
    metaDescription:
      "Cables need a second car, a pack doesn't. How the two compare for DFW drivers, what to look for in each, and how to keep a pack ready in Texas heat.",
    topic: "How-to guide",
    dek: "Both will start a dead car. The difference is what each one asks of you when it happens. Cables need another driver standing there, and a pack needs to have been charged months ago.",
    updated: UPDATED,
    cardImage: card("field-jump-start-booster"),
    sections: [
      {
        heading: "What cables ask of you",
        paragraphs: [
          "Cables need a second vehicle with a healthy battery, a driver willing to move it, and room to park it close. In an empty parking lot at night or on a quiet street, that can be the hard part.",
          "Cables never need charging, which is their big advantage. If you buy a set, buy thick ones. Wire thickness is the gauge number, and a lower number means thicker wire. Thin cables heat up and deliver less. Length matters too, because the cars won't always park nose to nose.",
        ],
      },
      {
        heading: "What a jump pack asks of you",
        paragraphs: [
          "A pack is a battery in a box, and it needs to be charged when you reach for it. Check it every few months and top it up. A pack that sat dead in the trunk for a year is the same as no pack.",
          "Heat is the Texas problem. A trunk or a closed car in a DFW summer gets far hotter than the air outside, and lithium packs don't like that. Look at the maker's temperature limits, and if the limit is below what your trunk reaches, keep the pack inside the cabin out of the sun.",
          "Size it to the engine. A pack made for a small four-cylinder may not turn over a large truck or a diesel, so read the rating on the label against your vehicle. Packs often have built-in protection against reversed clamps, but follow the pack's own instructions for the order anyway.",
        ],
      },
      {
        heading: "Which one to keep",
        paragraphs: ["Match it to how you actually drive:"],
        list: [
          "You drive alone a lot, or park in garages and lots where nobody walks by: a pack.",
          "You want the cheapest backup that can't go dead on a shelf: cables.",
          "A teen drives the car: a pack, so a dead battery doesn't depend on finding a stranger.",
          "You drive a large truck or a diesel: check the pack's rating first, or buy heavy-duty cables.",
          "You can't decide: keep both. Cables cost little, and a pack covers the nights nobody is around.",
        ],
      },
      {
        heading: "When neither one is the answer",
        paragraphs: [
          "A jump only helps a drained battery. A battery that is cracked, swollen or too old to hold a charge needs replacing, and a jump won't bring it back. If the car needs a second jump within days, treat the battery as finished.",
          "If you have no cables, no pack and nobody to ask, TRA can do it. A jump start costs {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once per job, and the driver can tell you whether the battery looks ready to replace.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a jump pack replace a dead battery?",
        a: "No. It gives the starter enough power to turn the engine once. The battery still has to hold a charge afterward, or the car will go dead again.",
      },
      {
        q: "How often should I charge a jump pack?",
        a: "Follow the maker's schedule. A check every few months is a sensible habit, and always check it before a long trip.",
      },
      {
        q: "Are cheap jumper cables worth it?",
        a: "Thin, short cables are the ones that disappoint. Look for thicker wire, which means a lower gauge number, and enough length to reach when the cars can't park close.",
      },
    ],
    services: ["jump-start", "battery-replacement"],
  },
  {
    slug: "where-to-put-a-car-jack",
    title: "Where to Put a Car Jack: Finding the Jack Point",
    h1: "Where to put the jack: finding the lift point, and why the manual decides",
    metaDescription:
      "Finding the right jack point on your car, which parts to never lift on, and how the owner's manual settles it. Plus when to leave the jack alone.",
    topic: "How-to guide",
    dek: "The jack goes in one specific spot on each car, and the people who built the car chose that spot. Put the jack anywhere else and you can bend a panel, crack plastic, or have the car slip off. That's why the owner's manual decides, not a rule of thumb.",
    updated: UPDATED,
    cardImage: card("field-tire-jack"),
    sections: [
      {
        heading: "Open the manual first",
        paragraphs: [
          "Look in the index under tire change, flat tire, jacking or lifting. The page shows a diagram with the exact points marked, usually one behind each front wheel and one ahead of each rear wheel. It takes two minutes, and it settles the question for your car.",
          "If the manual isn't in the glove box, most makers post a copy online or in an app. Look it up before the day you need it.",
        ],
      },
      {
        heading: "What the lift point looks like",
        paragraphs: [
          "Most cars are built as one shell, and the strong spot is a reinforced seam of metal that runs along the bottom edge of the body between the wheels. Makers often mark it with a notch, an arrow or a pair of small dents. On some cars a plastic cover sits over it with a slot for the jack's head.",
          "Trucks and many larger SUVs are built on a separate frame. The lift point is on the frame rail or at the axle, and the manual shows which. Don't trust a photo of a similar car, because the right spot can be a few inches different.",
        ],
      },
      {
        heading: "Places that are never the jack point",
        paragraphs: ["Unless your manual names one of these, keep the jack away from them:"],
        list: [
          "The plastic side skirt or trim that sits over the real lift point.",
          "The oil pan, the transmission pan, or anything else under the engine.",
          "The exhaust pipe or muffler.",
          "A suspension arm, or the bumper cover.",
          "The floor of the cabin between the lift points.",
        ],
      },
      {
        heading: "Before the car goes up",
        paragraphs: [
          "Level, firm ground is a requirement, such as concrete or asphalt. Set the parking brake, put the car in Park, and block a wheel at the opposite end of the car if you have a chock or a solid object. Nobody and no part of anybody goes under a car held up by a jack.",
          "Electric cars need extra care. Many have a large battery pack under the floor, and a jack in the wrong place can damage it. Use the lift points in the manual and nowhere else.",
        ],
      },
      {
        heading: "When to leave the jack in the trunk",
        paragraphs: [
          "Leave it if the ground is soft or sloped, if you're on a shoulder with traffic close by, or if you can't find the lift point with certainty. A flat tire change from TRA uses the spare already in the vehicle and costs {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the jack point the same on both sides of the car?",
        a: "Usually, yes. The points are mirrored, but the manual's diagram is what to check.",
      },
      {
        q: "What if I already put the jack in the wrong place?",
        a: "Lower the car right away, look at the spot, and move to the marked point. A bent seam or cracked trim is better found now than after the car is in the air.",
      },
      {
        q: "Can I use the jack from a different car?",
        a: "It's a bad idea. The jack head may not suit your car's lift point, and the jack may be rated for less weight. Use the one made for your vehicle.",
      },
    ],
    services: ["flat-tire-change", "tire-replacement"],
  },
  {
    slug: "run-flat-tires-what-to-do",
    title: "Run-Flat Tires: What to Do After a Puncture",
    h1: "Run-flat tires: how they work and what to do after a puncture",
    metaDescription:
      "How run-flat tires keep you moving after a puncture, why you may not feel it, how far you can go, and what to do about repair and replacement.",
    topic: "How-to guide",
    dek: "A run-flat is built to carry the car for a limited distance with no air in it. That's useful, and it's also why many drivers don't notice the tire went flat until the warning light tells them.",
    updated: UPDATED,
    cardImage: card("field-tire-wheel-tools"),
    sections: [
      {
        heading: "How a run-flat works",
        paragraphs: [
          "The most common build has a sidewall made much stiffer than a normal tire's, so it can hold the car up when the air is gone. A second design puts a hard support ring inside the tire. Either way, the tire keeps carrying the car, but it heats up and wears fast with no air in it.",
          "You may feel almost nothing change when one loses pressure. That's the point of the design, and it's the catch. Your only warning is the tire pressure light, so treat that light as real until you've checked.",
        ],
      },
      {
        heading: "What to do when the light comes on",
        paragraphs: ["Your manual gives a distance and a top speed for driving on a deflated run-flat, and both are lower than normal driving. Until you've read them:"],
        list: [
          "Ease off the gas and avoid hard braking or sharp turns.",
          "Get off the freeway at the next safe exit or pull into a lot. Don't stay in a lane.",
          "Look at the tires. A tire that's visibly shredded or off the rim means stop, not drive.",
          "Check the manual's limits, and treat the distance as a budget that starts when the pressure dropped, which you may not know.",
          "Drive only as far as you need to reach a safe place or a tire shop.",
        ],
      },
      {
        heading: "Why there's probably no spare",
        paragraphs: [
          "Most cars that come with run-flats don't carry a spare, and many don't carry a sealant kit either. That leaves two choices after a puncture: drive within the limit to a tire shop, or have a tire brought to you.",
          "A flat tire change from TRA puts on the spare already in the vehicle, so it doesn't fit a car with no spare. Tire replacement does, because we supply the tire and install it where you're parked.",
        ],
      },
      {
        heading: "Can a run-flat be repaired",
        paragraphs: [
          "That's up to the tire maker's own repair rules. A run-flat that was driven on after losing its air is often judged unrepairable, because the sidewall can be damaged on the inside where you can't see it. Some makers allow repairing a small tread puncture if the tire wasn't run low. Ask the tire maker or the shop, and expect the answer to be replacement more often than with a normal tire.",
          "Tire replacement from TRA costs {{price:tire-replacement}}, plus a {{dispatchFee}} dispatch fee charged once per job. Tire availability varies, so give dispatch the size from the sidewall, mention that they're run-flats, and dispatch confirms a tire is available before a driver is sent.",
        ],
      },
    ],
    faqs: [
      {
        q: "How can I tell whether my car has run-flat tires?",
        a: "Check the sidewall for a run-flat marking and look in the manual's tire section. A car with no spare and no sealant kit often has them.",
      },
      {
        q: "Does the tire pressure light always mean a run-flat is flat?",
        a: "No. A temperature swing can trip it too. But with run-flats you can't feel the difference, so check the pressure before you assume.",
      },
      {
        q: "Can I keep driving normally once I've reached a shop?",
        a: "The limits are for getting to safety, not for carrying on. Have the tire looked at before you drive any further than you must.",
      },
    ],
    services: ["tire-replacement", "tire-repair-plug-patch"],
  },
  {
    slug: "tire-sealant-kit-instead-of-spare",
    title: "Tire Sealant Kit Instead of a Spare: How to Use It",
    h1: "Using the sealant kit that came instead of a spare, and what it does to a repair",
    metaDescription:
      "How to use a tire sealant and inflator kit, which holes it can seal, the speed and distance limits, and what the sealant means for the repair later.",
    topic: "How-to guide",
    dek: "If your car has no spare, it probably has a small compressor and a bottle of sealant tucked in the trunk. Most people open that kit for the first time on the side of the road. Read this once now and the roadside will be less of a puzzle.",
    updated: UPDATED,
    cardImage: card("field-tire-spare-lugs"),
    sections: [
      {
        heading: "Where the kit is and when it works",
        paragraphs: [
          "It's usually under the cargo floor or in a side compartment of the trunk, and the manual shows where. Find it today and check the date printed on the sealant bottle, because sealant expires.",
          "The kit is meant for a small puncture in the tread, the flat part that meets the road. It can't seal a cut in the sidewall, a torn tire, a tire pulled off the rim or a hole too big to close.",
        ],
      },
      {
        heading: "Using it, step by step",
        paragraphs: ["Every maker's kit is a little different, so the instructions printed on yours come first. The general pattern is this:"],
        list: [
          "Get to a safe, level spot and turn on the hazard lights.",
          "If a nail or screw is in the tire, leave it there.",
          "Take the cap off the valve and connect the kit's hose to the valve stem.",
          "Plug the compressor into the car's power outlet, start the engine if the kit says to, and run it to push the sealant in and inflate the tire.",
          "Stop at the pressure on the sticker in the driver's door jamb, reading the kit's gauge.",
          "Drive right away, gently, for the short distance the kit gives, so the sealant spreads inside. Then stop and check the pressure again.",
        ],
      },
      {
        heading: "The limits",
        paragraphs: [
          "A sealant kit is a way to reach a repair, not the repair. It comes with a top speed and a distance on its label, and they are lower than normal driving. If the pressure falls again, or the tire bulges or vibrates, stop and call for help.",
          "It seals the hole from the inside only. A tire with a small, sealed puncture is fine for a short drive. A tire with sealant in it should still be looked at soon.",
        ],
      },
      {
        heading: "What sealant does to the repair later",
        paragraphs: [
          "The sealant coats the inside of the tire, and it can reach the pressure sensor inside the wheel. That's the part nobody tells you. Some shops clean it out and repair the tire, and some will only replace it. Either way, say you used a sealant kit when you call or arrive.",
          "That's not a reason to avoid the kit when you're stuck. It's a reason to mention it.",
        ],
      },
      {
        heading: "When to skip it and call",
        paragraphs: [
          "If the damage is outside the tread or the tire won't hold air, a tire supplied and installed by TRA costs {{price:tire-replacement}}, plus a {{dispatchFee}} dispatch fee charged once per job. Tire availability varies, so dispatch confirms a tire is available before a driver is sent. A puncture in the tread that hasn't had sealant in it can be repaired with a plug or patch.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I use sealant on a hole in the sidewall?",
        a: "No. The kit is for the tread. Sidewall damage can't be sealed in a way you should trust, and the tire needs replacing.",
      },
      {
        q: "What if the compressor won't run?",
        a: "Check that it's firmly plugged in and that the engine is running if the kit asks for that. If it still won't run, call for help rather than driving on a low tire.",
      },
      {
        q: "Can I keep driving on a tire that has sealant in it?",
        a: "For the short distance and speed the kit allows, to reach a repair. After that, have the tire looked at.",
      },
    ],
    services: ["tire-repair-plug-patch", "tire-replacement"],
  },
  {
    slug: "how-old-are-my-tires",
    title: "How Old Are My Tires? Reading the Date Code",
    h1: "How old are my tires? Reading the date code on the sidewall",
    metaDescription:
      "Find the four-digit date code on a tire sidewall, read the week and year it was made, and learn why age matters even when the tread looks fine.",
    topic: "How-to guide",
    dek: "Tires age whether or not you drive on them. The age is printed on the sidewall in a code that looks like nothing until someone tells you how to read it.",
    updated: UPDATED,
    cardImage: card("field-tire-wheel-tools"),
    sections: [
      {
        heading: "Find the DOT code",
        paragraphs: [
          "Look on the sidewall for the letters DOT, followed by a string of letters and numbers. The date is the last four digits of that string.",
          "Often only one side of the tire carries the full code, with the date. If the side you can see shows a shorter code with no date, the date is on the other side, which may face the inside of the car. A flashlight and a phone camera help you read it without crawling under the car.",
        ],
      },
      {
        heading: "Reading the four digits",
        paragraphs: [
          "The first two digits are the week of the year, and the last two are the year. A code ending in 1822 means week 18 of 2022, which is about the start of May. A code ending in 4724 means week 47 of 2024, late November.",
          "A tire with only three digits for the date was made before the year 2000. If you find one, it is long past use. Check the spare as well, because a spare in the trunk ages just as the other four do.",
        ],
      },
      {
        heading: "How old is too old",
        paragraphs: [
          "There's no single number everyone agrees on. Some vehicle makers say to replace tires around six years after they were made, and some tire makers allow up to ten if the tire is inspected regularly. Your manual and your tire maker's warranty tell you what applies to you.",
          "Rubber hardens and cracks with age, and heat speeds that up, which is a reason to take age seriously in a Texas summer. A tire with deep tread can still be too old to trust.",
        ],
      },
      {
        heading: "Check these as well as the code",
        paragraphs: ["Age is one test. These tell you what the code can't:"],
        list: [
          "Fine cracks in the grooves or across the sidewall.",
          "Rubber that looks dry or chalky instead of dark and slightly flexible.",
          "A bulge or bubble on the side of the tire, which means replace it now.",
          "The date on a set you just bought. New tires can already be a year or two old, so look before they are mounted.",
        ],
      },
      {
        heading: "When it's time",
        paragraphs: [
          "If a tire is past the age your maker allows or shows cracking, replace it before it chooses a bad moment. TRA installs tires at your location. Tire replacement costs {{price:tire-replacement}}, plus a {{dispatchFee}} dispatch fee charged once per job, and tire availability varies, so dispatch confirms a tire is available before a driver is sent.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does deep tread mean the tire is fine?",
        a: "No. Tread depth measures wear, not age. A tire can have plenty of tread and still be too old.",
      },
      {
        q: "Do the spare and the full-size tires age the same?",
        a: "Yes. A spare that has never touched the road still ages, so give it the same check.",
      },
      {
        q: "Where do I find my vehicle maker's tire age advice?",
        a: "In the owner's manual, usually in the tire care section. Your tire maker's website or warranty booklet may add its own.",
      },
    ],
    services: ["tire-replacement"],
  },
  {
    slug: "how-to-check-tire-pressure",
    title: "How to Check Your Tire Pressure",
    h1: "How to check your tire pressure, and where to find the right number",
    metaDescription:
      "Where the correct PSI is printed, how to use a gauge, why to check tires cold, and how often to do it. A two-minute job that prevents flats.",
    topic: "How-to guide",
    dek: "A tire gauge costs a few dollars and the check takes two minutes. The part that trips people up is which number to aim for, because the biggest number on the tire isn't it.",
    updated: UPDATED,
    cardImage: card("field-tire-spare-lugs"),
    sections: [
      {
        heading: "Find the right number",
        paragraphs: [
          "Open the driver's door and look at the edge of the door or the pillar for a sticker listing tire sizes and pressures. That sticker is the number for your car. Some cars also print it inside the fuel door, and the owner's manual has it too. Front and rear can differ, so read both.",
          "Ignore the large number molded into the tire's sidewall. That is the most pressure the tire can safely hold, not what your car needs. The spare often has its own pressure on a label, and it's usually higher than the others.",
        ],
      },
      {
        heading: "Check them cold",
        paragraphs: [
          "Cold means the car hasn't been driven, or has sat for a few hours. Driving heats the air inside a tire and raises the reading by a few pounds, and on a DFW afternoon the asphalt itself adds heat. The best time is early morning, before you leave.",
          "If you have to check a warm tire, expect the number to read higher than it will cold. Don't let air out to match the sticker, or the tire will be low once it cools.",
        ],
      },
      {
        heading: "The steps",
        paragraphs: ["Keep a gauge in the glove box and do all four tires, one at a time:"],
        list: [
          "Unscrew the valve cap and keep it in your hand or pocket.",
          "Press the gauge straight onto the valve stem, quickly and firmly, until the hiss stops, and read the number.",
          "Compare it with the sticker. If it's low, add air a little at a time. If it's high, press the small pin in the center of the valve to let some out.",
          "Recheck, then screw the cap back on.",
          "Do the other three tires, then the spare if you carry one.",
        ],
      },
      {
        heading: "How often, and what the numbers tell you",
        paragraphs: [
          "Once a month is enough, plus after a sharp swing in temperature. The warning light on the dash is not a gauge. It comes on only when a tire is well below where it should be, so a tire can be low for weeks before it speaks up.",
          "If one tire needs air again and again while the others hold, it has a slow leak. Look for a nail or screw in the tread, and brush soapy water over the valve stem to see if it bubbles. TRA repairs a puncture in the tread for {{price:tire-repair-plug-patch}}, plus a {{dispatchFee}} dispatch fee charged once per job.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the pressure shown on my dash accurate enough?",
        a: "It's a guide. If the car shows a number for each tire, it's useful, but a hand gauge settles it, and the dash can lag.",
      },
      {
        q: "Do front and rear tires get the same pressure?",
        a: "Not always. The sticker lists each, so read it for your car instead of assuming.",
      },
      {
        q: "Should I check the spare too?",
        a: "Yes. A spare loses air while it sits, and a flat spare is no help on the side of the road. Check it a couple of times a year.",
      },
    ],
    services: ["tire-repair-plug-patch", "flat-tire-change"],
  },
  {
    slug: "tire-tread-penny-test",
    title: "Penny Test for Tire Tread: How to Do It",
    h1: "The penny test: checking your tire tread with a coin",
    metaDescription:
      "Use a penny to check tire tread depth in under a minute. How to read the result, the quarter test for wet roads, and when it's time for new tires.",
    topic: "How-to guide",
    dek: "You don't need a tread gauge to know whether a tire is worn out. A penny and a flashlight tell you most of it, and a North Texas thunderstorm is a good reason to check before the next one.",
    updated: UPDATED,
    cardImage: card("field-tire-wheel-tools"),
    sections: [
      {
        heading: "The penny test",
        paragraphs: [
          "Hold a penny with Lincoln's head upside down and push it into one of the grooves in the tread, head first. If the tread covers the top of his head, you have more than two thirty-seconds of an inch left. If you can see all of his head, the tread is at that depth or below, and the tire is worn out.",
          "Two thirty-seconds is the depth where most tire makers call a tire finished. The tread has done its job by then, and the tire is poor at moving water.",
        ],
      },
      {
        heading: "Check more than one spot",
        paragraphs: ["One groove can fool you. Try the penny in several places on every tire:"],
        list: [
          "A groove near the inside edge, one in the middle and one near the outside edge.",
          "Two or three points around the circle, rolling the car a little if you need to.",
          "Each tire separately, because the front and rear wear differently.",
          "Edge against center: if the edges are more worn than the center, the tire has been run low on air. If the center is more worn, it has been run too high. One edge worn more than the other points to an alignment problem.",
        ],
      },
      {
        heading: "The quarter test for wet roads",
        paragraphs: [
          "Do the same with a quarter, with Washington's head upside down. If the tread covers the top of his head, you have more than four thirty-seconds. If you can see the top of his head, you're below it.",
          "A tire between those two numbers is legal to keep but not at its best. Wet-road grip falls off as the tread wears, so many drivers choose to replace tires around the quarter mark, ahead of the wet season.",
        ],
      },
      {
        heading: "The wear bars",
        paragraphs: [
          "Look closely in the grooves and you'll find small raised ridges of rubber across the bottom. They sit at two thirty-seconds, and when the tread is level with them, the tire is done. They are the tire maker's own penny test, built in.",
        ],
      },
      {
        heading: "What to do with the result",
        paragraphs: [
          "A tire at the penny limit should be replaced soon, and one at the quarter mark should go on your list. Check the age code too, since a tire can be too old with tread to spare. TRA installs tires where you're parked. Tire replacement costs {{price:tire-replacement}}, plus a {{dispatchFee}} dispatch fee charged once per job, and tire availability varies, so dispatch confirms a tire is available before a driver is sent.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a tread depth gauge better than a penny?",
        a: "It's more exact and costs a few dollars. For telling a worn tire from a good one, the penny is enough.",
      },
      {
        q: "Can I do the test without jacking up the car?",
        a: "Yes. The tire stays on the ground, and a flashlight helps you see into the grooves.",
      },
      {
        q: "Does a tire with good tread ever need replacing?",
        a: "Yes. Cracks, bulges, damage to the sidewall and age can all end a tire's life while the tread is still deep.",
      },
    ],
    services: ["tire-replacement"],
  },
  {
    slug: "lost-car-keys-what-to-do",
    title: "Lost Your Car Keys? What to Do Next",
    h1: "You've lost all your car keys: what to do, and who can actually help",
    metaDescription:
      "All your car keys are gone? A roadside lockout won't help. What to check first, who can make a new key, and what to have ready for them.",
    topic: "How-to guide",
    dek: "A lockout and a lost key sound alike and they aren't the same problem. If the keys are sitting inside the car, a lockout opens the door. If they're gone, nobody can open the door and drive away. You need a new key made, and that's work for a locksmith or the dealer.",
    updated: UPDATED,
    cardImage: card("field-arrival-gear"),
    sections: [
      {
        heading: "First, make sure they're really lost",
        paragraphs: ["Most lost keys turn up within an hour of looking in the right places:"],
        list: [
          "Retrace your steps and check pockets, bags, jackets and the last place you paid for something.",
          "Call the last stop and ask them to check, including the restroom and the lost and found.",
          "Look through the car's windows. If you can see the keys inside, that's a lockout, not a lost key.",
          "Ask whoever has a spare, and check the car maker's phone app, since some can unlock the car.",
        ],
      },
      {
        heading: "Who can make a new key",
        paragraphs: [
          "The dealer for your make can order a key cut and programmed to your car, using the VIN. A locksmith who works on cars can often do the same, and some come to where the car is parked. Both are real options, and their prices and timing differ, so ask for the total, trip included, before anyone is sent.",
          "Most keys made in the last couple of decades have a chip inside that the car has to recognize. That's why a copy cut at a hardware store may open the door and still not start the engine. Smart keys and fobs have to be programmed to the car as well.",
        ],
      },
      {
        heading: "What they will ask you for",
        paragraphs: [
          "Expect to prove the car is yours. Have a photo ID and the registration or title ready, along with the VIN. The VIN is on the lower corner of the windshield on the driver's side, and it's printed on your registration and insurance card.",
          "If the keys were stolen, or they had your address on them, say so. Ask whether the lost key can be erased from the car's memory so that it can't be used to start it.",
        ],
      },
      {
        heading: "If the car has to move",
        paragraphs: [
          "Sometimes the car has to go to the dealer or a shop. A car that can't start without its key will need a tow, and TRA doesn't tow. Ask the key maker whether they can come to the car first. If not, call a tow company.",
        ],
      },
      {
        heading: "Where TRA fits",
        paragraphs: [
          "TRA makes no keys, cuts none and programs none, so for keys that are really gone, the locksmith or the dealer is the right call. We can help in the other case. If the keys turn out to be inside, a lockout costs {{price:lockout}}, plus a {{dispatchFee}} dispatch fee charged once per job. The driver confirms the vehicle is yours before opening it, so have your ID.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can roadside assistance make me a new key?",
        a: "No. TRA opens vehicles. We don't cut or program keys, so a lost key is a job for a locksmith or the dealer.",
      },
      {
        q: "Can I start the car without a key?",
        a: "Not safely or legally unless you have the right key or fob programmed to it. A key maker can fix that.",
      },
      {
        q: "Does insurance cover a lost key?",
        a: "Some policies and some warranty or dealer programs include key replacement. Read your coverage or call the provider before you pay.",
      },
    ],
    services: ["lockout"],
  },
  {
    slug: "fob-locked-inside-push-button-car",
    title: "Key Fob Locked Inside a Push-Button Car",
    h1: "The fob is locked inside a push-button car: why it happens and what to do",
    metaDescription:
      "Locked out with the fob inside a push-start car? Why it happens, what to try first, why the engine may still be running, and how a lockout works.",
    topic: "How-to guide",
    dek: "Many push-button cars try to stop you from locking the fob inside. They sense it by radio and complain. The sensing isn't perfect, and a fob in a bag, a pocket on a jacket or the trunk is easy to miss.",
    updated: UPDATED,
    cardImage: card("field-arrival-gear"),
    sections: [
      {
        heading: "How it ends up inside",
        paragraphs: [
          "The car looks for the fob with antennas in the doors and the cabin. A fob in a bag on the back seat, in a cargo area or in the trunk can slip past them. So can a car locked from the touch pad on a door handle while the fob sits in a jacket on the seat.",
          "Auto-lock is the other cause. A car can relock itself after the doors close, with you outside and the fob in the cabin, and then it won't open from the handle because it senses no fob nearby.",
        ],
      },
      {
        heading: "Check these before you call",
        paragraphs: ["A few minutes of looking can save a call:"],
        list: [
          "Try every door and the trunk or hatch. Sometimes one door didn't lock.",
          "Look for a keypad on the door pillar, which some cars have.",
          "Check the car maker's phone app, which may unlock the car.",
          "Think about a spare fob, at home or with someone who can bring it.",
          "Make sure the fob really is inside. A passenger may have it in a pocket.",
        ],
      },
      {
        heading: "If the engine is still running",
        paragraphs: [
          "A push-button car can keep running after the fob leaves the cabin. Most chime at you when that happens, and they don't shut off. If you left it running, tell dispatch, and stay near the car. It's burning fuel the whole time, and anyone could get in if a door is unlocked.",
          "Once the engine is off, it won't restart unless the fob is back inside the car. Never leave a running car in a closed garage, including one attached to the house. The exhaust is dangerous.",
        ],
      },
      {
        heading: "What the lockout covers",
        paragraphs: [
          "Opening the vehicle with the fob in the cabin is a lockout, and it costs {{price:lockout}}, plus a {{dispatchFee}} dispatch fee charged once per job. If the fob is in the trunk, that's the separate, longer job at {{price2:lockout}}, plus the dispatch fee. The driver confirms the vehicle is yours before opening it, so keep your ID with you.",
          "Tell dispatch it's a push-button car and exactly where the fob is, so the driver arrives ready. TRA opens vehicles and makes no keys, so if the fob is lost rather than locked in, you need a locksmith or the dealer.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a fob in the trunk the same job as one in the cabin?",
        a: "No. Getting into the trunk is a longer job and is priced separately. Tell dispatch which one you have.",
      },
      {
        q: "How do I stop this from happening again?",
        a: "Keep the fob in your pocket until you've closed the trunk and every door, and look before you walk away. A spare fob kept somewhere you can reach also helps.",
      },
      {
        q: "What if the engine is still running?",
        a: "Say so when you call and stay close to the car. The car keeps running with the doors locked, and it will not restart once it is off unless the fob is inside.",
      },
    ],
    services: ["lockout"],
  },
  {
    slug: "why-did-my-car-lock-itself",
    title: "Why Did My Car Lock Itself? Auto-Lock Explained",
    h1: "Why did my car lock itself? The features that do it, and how to turn them off",
    metaDescription:
      "Cars lock themselves by speed, by shifting out of park, by walk-away sensors and by a re-lock timer. How each works and how to change the setting.",
    topic: "How-to guide",
    dek: "A car that locks itself usually isn't broken. It's doing what a setting told it to do, and that setting is often on from the factory. Which one it is depends on when the doors locked.",
    updated: UPDATED,
    cardImage: card("field-arrival-gear"),
    sections: [
      {
        heading: "When it happened tells you which feature",
        paragraphs: ["Think about the moment the doors locked:"],
        list: [
          "As you drove away: speed-sensing lock, which locks the doors once the car picks up speed.",
          "When you moved the shifter out of Park: lock on shift.",
          "A short time after you unlocked the car and didn't open a door: the re-lock timer, which keeps an unlocked car from sitting open in a lot.",
          "When you walked away with the fob in your pocket: walk-away lock, which uses the fob's signal.",
          "When you shut the door with the fob left inside: the car relocked after the door closed, as some do.",
        ],
      },
      {
        heading: "Where the setting lives",
        paragraphs: [
          "On most newer cars it's in the screen's vehicle or door lock menu. Look for words like auto lock, auto relock, lock on exit or walk-away lock. Names change from maker to maker.",
          "Older cars may use a button sequence from the manual, such as holding lock and unlock together for a few seconds. If the manual doesn't cover it, the dealer can change the setting for you. Our drivers don't do repairs or reprogramming, so this one is a manual or dealer job.",
        ],
      },
      {
        heading: "When it isn't a setting",
        paragraphs: [
          "A door lock actuator that is failing can make a door lock or unlock on its own, or lock and unlock several times a minute. A weak car battery can also make the electronics act strangely, including locks that move at odd times.",
          "If the locks misbehave along with a slow start or dim lights, look at the battery. If it's just the locks and nothing else, it's probably a part, and a repair shop can check.",
        ],
      },
      {
        heading: "When the lock locks you out",
        paragraphs: [
          "The trap is the re-lock timer. You unlock the car with the fob, walk back for something, and the car locks itself with the fob on the seat. Turn the timer off, or leave a habit: fob in your pocket before you close the door.",
          "If it's already happened, a lockout from TRA costs {{price:lockout}}, plus a {{dispatchFee}} dispatch fee charged once per job.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is auto-lock a safety feature?",
        a: "Yes. Locked doors while you're driving make it harder for someone to open one at a stop. Many people leave it on and only change the re-lock timer.",
      },
      {
        q: "Can I turn off only the timer?",
        a: "On many cars, yes, since the settings are separate. The menu or the manual shows which ones your car has.",
      },
      {
        q: "Could a dead car battery make the locks act up?",
        a: "It can. If the car is also slow to start or the lights are dim, the battery is the first thing to check.",
      },
    ],
    services: ["lockout"],
  },
  {
    slug: "stranded-alone-at-night",
    title: "Stranded Alone at Night: How to Stay Safe",
    h1: "Stranded alone at night: how to stay safe while you wait for help",
    metaDescription:
      "Broken down alone after dark? Where to wait, who to tell, what to do when someone stops, and how to know the person who arrives is the one you called.",
    topic: "How-to guide",
    dek: "Waiting is the hardest part of a night breakdown. The car isn't going anywhere, and neither are you. A few habits make the wait safer and keep a bad night from getting worse.",
    updated: UPDATED,
    cardImage: card("field-tire-shoulder-night"),
    sections: [
      {
        heading: "Make the car easy to see",
        paragraphs: [
          "Turn on the hazard lights as soon as something goes wrong, and get the car as far from moving traffic as you can. In a parking lot, choose a spot under a light near a door, even if that means moving the car a short way at a crawl.",
          "If any part of the car is in a traffic lane, or you feel unsafe, call 911 first. The tire or the battery can wait. A passing driver at night is the real danger.",
        ],
      },
      {
        heading: "Tell someone where you are",
        paragraphs: [
          "Send a friend or a family member your location pin from the map app, the car's color and make, and your license plate. Tell them you'll text again when help arrives. Then if you go quiet, someone knows where to look.",
          "Save your phone's battery. Turn the screen down, close the apps you aren't using, and charge it from the car if the engine is running. Keep the phone in your hand, not on the seat.",
        ],
      },
      {
        heading: "Doors locked, and what to do when someone stops",
        paragraphs: ["Unless the car is on fire or the shoulder is so narrow that traffic is the greater danger, stay inside with the doors locked. If someone stops and offers help:"],
        list: [
          "Keep the window up, or open it only a crack, and say that help is already on the way.",
          "Don't accept a ride, and don't let a stranger work on the car.",
          "Don't open the door for anyone you didn't call.",
          "If someone makes you uneasy, call 911 and stay on the line.",
        ],
      },
      {
        heading: "Know who you're expecting",
        paragraphs: [
          "When you request help from TRA, we text or call when the driver is on the way, so you know a driver is coming. Our average arrival is 30 minutes, though the actual time depends on your location and traffic.",
          "If a vehicle pulls up that you didn't call, don't open the door. Ask through the window which company it is and who sent it. If the answer doesn't match the company you called, phone the number you used to request help before you do anything else.",
        ],
      },
      {
        heading: "What the call costs",
        paragraphs: [
          "A flat tire change using the spare you already carry costs {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms your total when you request help.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I call 911 or a roadside company?",
        a: "Call 911 if you're in a lane, hurt, or feel threatened. Call a roadside company for the car once you're safe.",
      },
      {
        q: "Should I walk to find help?",
        a: "Almost never, especially along a freeway at night. Staying with the car, where help will look for you, is safer than walking in the dark.",
      },
      {
        q: "What if my phone is almost dead?",
        a: "Make the important calls first and keep them short. A text uses less battery than a call, and a 911 call can go through on any available network.",
      },
    ],
    services: ["flat-tire-change", "jump-start"],
  },
  {
    slug: "teen-driver-roadside-basics",
    title: "What a New Driver Should Know Before a Flat Tire",
    h1: "Roadside basics for a teen or new driver, before the first flat tire or dead battery",
    metaDescription:
      "What a new driver should know before the first breakdown: where the spare and jack are, when to call 911, how to give a location, and who to call.",
    topic: "How-to guide",
    dek: "Nobody learns roadside basics in a driving course, and the first flat tire tends to arrive when a parent isn't in the car. Twenty minutes in the driveway does more than any lecture.",
    updated: UPDATED,
    cardImage: card("field-tire-jack"),
    sections: [
      {
        heading: "A twenty-minute walk around the car",
        paragraphs: ["Do this together, once, in the driveway, and have the new driver put a hand on each thing:"],
        list: [
          "The spare, the jack and the lug wrench. Lift the trunk floor and see how they are stored.",
          "The wheel lock key, if the wheels have locking nuts.",
          "The sticker in the door jamb that lists tire pressures.",
          "The hood release, the battery and the hazard light button.",
          "The parking brake, whether it's a lever, a pedal or a switch.",
        ],
      },
      {
        heading: "The rules for a roadside stop",
        paragraphs: [
          "Put the hazard lights on at the first sign of trouble. Slow down gradually and steer to the shoulder or a lot. If any part of the car is still in a lane, or anyone is hurt, call 911 first.",
          "Never change a tire on a freeway shoulder, on a hill or on soft ground, and never go under a car on a jack. With traffic close, stay buckled in the car with the doors locked and call for help. Don't accept a ride from a stranger or let anyone work on the car.",
        ],
      },
      {
        heading: "What to put in their phone",
        paragraphs: ["A note takes two minutes and saves a lot of fumbling when they're frightened:"],
        list: [
          "A parent's number, and one backup person.",
          "The insurance company's roadside number, if the policy has one.",
          "The car's year, make, model, color and license plate.",
          "The tire size and the right pressure from the door jamb sticker.",
        ],
      },
      {
        heading: "Practice saying where they are",
        paragraphs: [
          "During a drive, ask them to say aloud the road, the direction and the next exit or cross street. A new driver who can say that in one breath gets help sooner. Mile markers and exit signs are easy to read when you aren't upset.",
        ],
      },
      {
        heading: "What a call to us looks like",
        paragraphs: [
          "For a flat tire with a good spare in the car, a flat tire change costs {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job, and dispatch confirms the total when help is requested. We need the exact location, the vehicle, and what's wrong, and we text or call when the driver is on the way. Our average arrival is 30 minutes, with the actual time depending on location and traffic.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should my teen change a tire themselves?",
        a: "In a driveway or a quiet lot, with you present the first time, it's a good skill. On a shoulder or a hill, no. That's when they call.",
      },
      {
        q: "What if a stranger stops to help?",
        a: "Stay in the locked car, say thank you, and say that help is on the way. A new driver can say that without being rude.",
      },
      {
        q: "Do they need to know how to jump start a car?",
        a: "It's good to know the order, but a new driver should never do it alone in the dark or with a damaged battery. They can call instead.",
      },
    ],
    services: ["flat-tire-change", "jump-start", "lockout"],
  },
  {
    slug: "texas-move-over-law",
    title: "Texas Move Over Law: What Drivers Must Do",
    h1: "The Texas Move Over or Slow Down law: what it asks of drivers passing a stopped vehicle",
    metaDescription:
      "What the Texas Move Over or Slow Down law asks when you pass a stopped vehicle with its lights on, as TxDOT describes it, and what to do if you can't change lanes.",
    topic: "How-to guide",
    dek: "Texas law asks drivers to give room to certain stopped vehicles on the side of the road. Everything below comes from the Texas Department of Transportation's own page on the law. That page is the place to check for the current wording.",
    updated: UPDATED,
    cardImage: card("field-tire-shoulder-night"),
    sections: [
      {
        heading: "What TxDOT says the law asks",
        paragraphs: [
          "TxDOT says that when you pass one of the covered vehicles stopped on the roadside with its lights activated, you must move over an entire lane or slow to 20 mph below the posted speed limit.",
          "If you can't switch lanes safely, or the road doesn't have more than one lane in your direction, slow down as above. TxDOT adds that on roads posted at 25 mph or less, you reduce your speed to 5 mph.",
        ],
      },
      {
        heading: "Which vehicles it covers",
        paragraphs: ["TxDOT lists these, when they are stopped on the side of the road with overhead lights activated:"],
        list: [
          "Law enforcement vehicles.",
          "Tow trucks.",
          "Utility vehicles.",
          "Municipal waste trucks.",
          "Emergency responders' vehicles.",
          "TxDOT vehicles.",
          "Vehicles driven by animal control officers and parking enforcement employees, added by TxDOT's account on September 1, 2025.",
        ],
      },
      {
        heading: "What about an ordinary car with its hazards on",
        paragraphs: [
          "The vehicles on TxDOT's list don't include an ordinary car stopped with its hazard lights flashing. Whether a law reaches that car is not what matters to the person standing beside it. Moving over a lane, or slowing down if you can't, gives them room, and that is the right thing to do either way.",
          "When you're the one who has stopped, the same reasoning applies in reverse. Get as far from the lanes as the shoulder allows, and stay inside the car with the belt on if traffic is passing close.",
        ],
      },
      {
        heading: "Moving over safely",
        paragraphs: [
          "TxDOT's advice is to move over only when it is safe and legal. Check the mirror and the blind spot, signal, and change lanes smoothly. Don't swerve across another car to do it.",
          "If the next lane is full, slowing down is the alternative TxDOT describes. Lift off the gas early so you aren't braking hard, and leave extra space for the car behind you.",
        ],
      },
      {
        heading: "Where to read the official wording",
        paragraphs: [
          "TxDOT publishes the details on its Move Over or Slow Down page at txdot.gov. The statute itself is in the Texas Transportation Code, which is the place to look for the exact legal text. TxDOT's page says the law carries fines, with heavier penalties for a driver who causes serious injury, and it lists the current amounts. We have left the figures out here because they can change.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I have to change lanes if another car is beside me?",
        a: "TxDOT says to move over only when it's safe and legal. If you can't, slow down to 20 mph below the posted limit, or 5 mph on roads posted at 25 mph or less.",
      },
      {
        q: "Did the list of vehicles change recently?",
        a: "TxDOT's page says that since September 1, 2025, the law has also covered vehicles driven by animal control officers and parking enforcement employees.",
      },
      {
        q: "Does it apply on a road with one lane each way?",
        a: "TxDOT says to slow down if the road doesn't offer more than one lane in your direction. The speed to drop to is 20 mph below the posted limit, unless the road is posted at 25 mph or less.",
      },
    ],
    services: ["flat-tire-change", "jump-start"],
  },
  {
    slug: "wait-in-the-car-or-get-out",
    title: "Wait in the Car or Get Out? On the Shoulder",
    h1: "Broken down on a shoulder: stay in the car or get out?",
    metaDescription:
      "How to decide whether to stay buckled in or get clear of the car on a highway shoulder: shoulder width, barriers, smoke, passengers and weather.",
    topic: "How-to guide",
    dek: "Both answers are right, in the right place. What decides it is how close the traffic is, how much room you have to get away from it, and whether anything about the car itself is dangerous.",
    updated: UPDATED,
    cardImage: card("field-tire-shoulder-night"),
    sections: [
      {
        heading: "Get out when the car is the danger",
        paragraphs: [
          "Smoke from under the hood, flames, a strong smell of fuel or a burning smell means everyone leaves right now. Get out on the side away from traffic, move well clear of the car and upwind of any smoke, and call 911. Leave bags and phones that you can't grab in a second.",
          "A car on fire can go from smoke to flames fast. Don't open the hood to look, and don't stay to see how bad it gets.",
        ],
      },
      {
        heading: "Stay in when the traffic is the danger",
        paragraphs: [
          "On a narrow shoulder with no barrier and fast traffic, the car is the safest place. A seat belt and a headrest do more for you in a rear-end hit than anything you can do on foot. Keep the belt on, the hazards on, and call for help.",
          "If any part of the car is still in a lane, stay buckled and call 911. Don't get out onto a live roadway.",
        ],
      },
      {
        heading: "Questions to ask yourself",
        paragraphs: ["Run down these in order and stop at the first yes:"],
        list: [
          "Is anything smoking, burning or leaking fuel? Get out and away.",
          "Is any part of the car in a lane? Stay belted and call 911.",
          "Is there a guardrail or concrete barrier you can reach in a few steps, with room to stand behind it? You may get out, on the side away from traffic.",
          "Is it dark, raining or foggy? Stay in the car unless the first question was yes.",
          "Is the shoulder narrower than the car? Stay in.",
        ],
      },
      {
        heading: "If you do get out",
        paragraphs: [
          "Everyone exits on the passenger side and walks away from the road, not along it, to a spot behind the barrier. Don't wander. Help needs to find you. Keep children close and any pet on a leash.",
          "In a DFW summer, a car without air conditioning gets hot fast. If the car won't run, shade behind a barrier can be a better wait than a sealed cabin, as long as you aren't near the traffic.",
        ],
      },
      {
        heading: "Telling dispatch where you're waiting",
        paragraphs: [
          "Say whether you're in the car or behind a barrier, and which side of the road you're on. We text or call when the driver is on the way, and our average arrival is 30 minutes, with the actual time depending on location and traffic.",
        ],
      },
    ],
    faqs: [
      {
        q: "What if I'm on the left shoulder?",
        a: "The left shoulder along a median is often narrower, and the traffic beside it is fast. Default to staying in the car, belted, with the hazards on.",
      },
      {
        q: "Should children stay in the car too?",
        a: "Yes, buckled in, for the same reason as the adults. Fast traffic and hot asphalt are a poor mix for small children.",
      },
      {
        q: "Is it ever right to walk to the next exit?",
        a: "Almost never. Walking along a freeway is far riskier than waiting. Stay where help can find you, unless there is fire or an immediate danger.",
      },
    ],
    services: ["flat-tire-change", "jump-start"],
  },
  {
    slug: "how-to-describe-your-location-on-a-highway",
    title: "How to Describe Your Location on a Highway",
    h1: "How to describe where you are on a highway: mile markers, exits and direction",
    metaDescription:
      "Give help a precise spot on a highway: the road name, direction of travel, the last exit you passed, mile markers, and what to do when you can't tell.",
    topic: "How-to guide",
    dek: "On a highway, saying you're on I-35 narrows nothing down. Help needs a handful of small facts, and every one of them can be read from your seat in under a minute.",
    updated: UPDATED,
    cardImage: card("field-tire-shoulder-night"),
    sections: [
      {
        heading: "Start with the road and the direction you were traveling",
        paragraphs: [
          "Give the road name and the direction, such as northbound I-35E. The two directions are separate roadways, and a driver sent to the wrong one may need miles to reach you. Say the direction you were traveling, not the way the car is pointing now.",
          "If you're unsure, a map app shows your road and an arrow for your direction. Compass directions are better than the name of a far-off city.",
        ],
      },
      {
        heading: "Read the exit and the mile marker",
        paragraphs: [
          "Look for the last exit sign you passed and the next one ahead, and read out the number and the cross street. Mile markers are small green signs on the right side of the road, usually one a mile on interstates. On interstates the numbers generally rise as you go north or east.",
          "On many highways, exit numbers match the nearest mile marker, but not on every road. Give the number you read instead of working one out, and say whether it was a marker or an exit.",
        ],
      },
      {
        heading: "Describe exactly where the car is",
        paragraphs: ["These small details help a driver spot you:"],
        list: [
          "Left or right shoulder.",
          "Whether you're on the main lanes, a frontage road, a ramp or an express lane.",
          "A nearby landmark: a bridge, an overpass, a large sign or a business you can read.",
          "The year, make, model and color of the car.",
          "Whether the hazard lights are on.",
        ],
      },
      {
        heading: "Let your phone help",
        paragraphs: [
          "Open the map app. It shows the road you're on, the nearest cross street and often an address. Read that out, and keep the pin handy so you can send it to a friend. Your phone's location is a good second opinion, not a replacement for the signs.",
        ],
      },
      {
        heading: "If you passed nothing",
        paragraphs: [
          "Sometimes you broke down between exits with no marker in sight. Say what you last passed and how long ago, such as the last exit about five minutes back at highway speed. Don't walk along the road to find a sign. Keep the phone close, because we text or call when the driver is on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which direction do I give if the car is facing the wrong way?",
        a: "The direction you were traveling, not where the car points now. That is the direction of the roadway you're on.",
      },
      {
        q: "Can I give a cross street instead of a mile marker?",
        a: "Yes. A cross street or an exit name works as well, and a marker adds to it. Give whichever you can read.",
      },
      {
        q: "What if I'm in an express lane or toll road?",
        a: "Say so. Express and managed lanes can be separated from the main lanes, so help needs to know which roadway you're on.",
      },
    ],
    services: ["flat-tire-change", "jump-start"],
  },
  {
    slug: "roadside-scams-red-flags",
    title: "Roadside Assistance Scams: Red Flags to Watch For",
    h1: "Roadside scams: the red flags, and how to protect yourself",
    metaDescription:
      "Warning signs of a bad roadside operator: unmarked trucks, no price up front, pressure to tow, and help you didn't ask for. What to do instead.",
    topic: "How-to guide",
    dek: "Most roadside help is honest. A few operators make their money from people who are frightened, tired and in a hurry, and they count on you not asking questions. These are the signs that tell you to stop and ask.",
    updated: UPDATED,
    cardImage: card("field-arrival-gear"),
    sections: [
      {
        heading: "Help you didn't ask for",
        paragraphs: [
          "Be careful with anyone who stops and starts working before you've agreed to anything, or who says they happen to be in the area. A breakdown is when a stranger's offer is most tempting. You can say that help is already on the way.",
          "If someone pushes after you say no, or blocks the car, call 911. You don't owe an explanation.",
        ],
      },
      {
        heading: "No price before they set out",
        paragraphs: ["A real quote is a total, given before the driver starts. These are warning signs:"],
        list: [
          "No price at all, or only it depends, before anyone is sent.",
          "A low number on the phone that grows once the truck arrives.",
          "New fees that were never mentioned, such as distance or vehicle weight.",
          "A request to sign a blank form, or to pay in full before any work begins.",
          "No invoice when the job is done.",
        ],
      },
      {
        heading: "Pressure to tow",
        paragraphs: [
          "A dead battery, a flat tire or a lockout doesn't need a tow. An operator who says it does may be steering you to a bigger bill. Ask what exactly is wrong and why it can't be fixed where the car sits.",
          "Some problems really do need a tow, such as an overheated engine or a failed transmission. In that case, get the destination and the total price in writing or by text before the car is hooked up.",
        ],
      },
      {
        heading: "Names and vehicles that don't match",
        paragraphs: [
          "Compare the business name you were given on the phone with the name on the truck and on the invoice. An unmarked vehicle, a driver who can't say who they work for, or a company name that changes between the call and the arrival is a reason to stop and call back.",
        ],
      },
      {
        heading: "What to do instead",
        paragraphs: [
          "Call the company yourself, and ask for the total before anyone is sent. With TRA, the prices are published on this site. A flat tire change costs {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job, and dispatch confirms your total when you request help. We text or call when the driver is on the way, so you know who is coming.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a low price on the phone always a scam?",
        a: "No, but ask whether it's the total with every fee included. A number that leaves out the trip or the parts is the one that grows.",
      },
      {
        q: "Does every tow cost too much?",
        a: "No, and some cars truly need one. The point is to get the destination and the full price before the car is hooked up.",
      },
      {
        q: "What if I think I was overcharged?",
        a: "Keep the invoice, any texts and photos of the vehicle, and contact the company first. If you paid by card, the card issuer can tell you what options you have.",
      },
    ],
    services: ["jump-start", "flat-tire-change"],
  },
  {
    slug: "what-to-ask-before-a-driver-comes",
    title: "What to Ask Before a Roadside Driver Comes",
    h1: "Questions to ask any roadside company about price before a driver comes",
    metaDescription:
      "The questions that get a straight price out of any roadside company before anyone is sent, and how to tell a real total from a teaser number.",
    topic: "How-to guide",
    dek: "A price over the phone is only as good as the questions behind it. Ask these before you say yes, and write down the answers. An honest company can give them in a minute.",
    updated: UPDATED,
    cardImage: card("field-arrival-gear"),
    sections: [
      {
        heading: "Ask for the total, in one number",
        paragraphs: [
          "The first question is what the total will be with every fee in it. Many companies quote a service price and a separate trip fee, and that's fine, as long as you hear both and the sum. A figure that starts with from or only a service price leaves room to grow.",
          "Repeat the number back, so you know you heard it right: so that's a total of that, with nothing else added.",
        ],
      },
      {
        heading: "Ask what the number includes",
        paragraphs: ["Names matter less than what's inside the price:"],
        list: [
          "The trip to you, the labor, and any parts or the tire or battery itself.",
          "Anything extra for distance, the type of vehicle, or the size of the wheels.",
          "Whether a minimum charge applies if the job turns out smaller than expected.",
          "Which of these are in the quoted total, and which come on top.",
        ],
      },
      {
        heading: "Ask what happens if the job changes",
        paragraphs: [
          "A flat tire you thought could be repaired may need replacing. A car you thought needed a jump may have a dead battery that won't hold one. Ask what happens then, and agree that you will be told the new price before more work begins.",
          "Ask what happens if the job can't be done on site. An honest company will tell you what it can't do, and so will we. TRA doesn't tow and does no mechanical repair.",
        ],
      },
      {
        heading: "Ask who is coming, and how you'll know",
        paragraphs: [
          "Get the company name and what to expect. We text or call when the driver is on the way, and our average arrival is 30 minutes, with the actual time depending on location and traffic. Be wary of an arrival time so exact it sounds like a promise.",
          "Write down the time of the call, the name of the person, and the total. Compare all three with the invoice at the end.",
        ],
      },
      {
        heading: "How TRA answers these",
        paragraphs: [
          "Our prices are published. A jump start costs {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once per job, and dispatch confirms your total when you request help. For batteries and tires, dispatch also confirms the battery or tire is available before a driver is sent.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it rude to ask for the total?",
        a: "No. It's the normal first question, and an honest company expects it.",
      },
      {
        q: "What if they won't give me a total?",
        a: "Call another company. A provider who can't say what the job costs before the trip is telling you something.",
      },
      {
        q: "Should I ask these while I'm on a dangerous shoulder?",
        a: "Get safe first. If you're in a lane or in danger, call 911, and ask your price questions after you're out of harm's way.",
      },
    ],
    services: ["jump-start", "flat-tire-change", "lockout"],
  },
  {
    slug: "electric-parking-brake-dead-battery",
    title: "Electric Parking Brake and a Dead Battery",
    h1: "Dead battery with an electric parking brake: why the car is stuck and how to free it",
    metaDescription:
      "An electric parking brake needs power to release. What a dead battery does to it, what to try after a jump start, and when to leave the manual release alone.",
    topic: "How-to guide",
    dek: "A car with an electric parking brake stays put when the battery is dead, because the brake holds itself. That's by design. Getting it to let go takes power, and the power has to come first.",
    updated: UPDATED,
    cardImage: card("field-jump-start-hood"),
    sections: [
      {
        heading: "Why the car is stuck",
        paragraphs: [
          "An electric parking brake uses small motors at the rear brakes to clamp them. You apply it with a switch, not a lever. With a dead battery, the brake stays in the state it was in, which is usually applied. Releasing it is electric too, and most cars want the car on and your foot on the brake pedal before they will let go.",
          "So the rear wheels are locked, and the car won't roll or be pushed. On a slope, that locked brake is doing its job.",
        ],
      },
      {
        heading: "The fix is power first",
        paragraphs: ["Give the car power, then release the brake in the order your manual shows. The general pattern:"],
        list: [
          "Restore power with a jump start, or replace the battery if it won't hold a charge.",
          "Turn the car on, and press the brake pedal.",
          "Work the release switch as the manual describes. Many switches release when you press them down. The brake light on the dash should go out.",
          "If the light stays on or flashes, or the car still won't move, stop. A fault or a failed brake motor is a shop job.",
        ],
      },
      {
        heading: "The manual release",
        paragraphs: [
          "Some models have a manual release for towing, such as a cable, a lever or a small cover at the rear brake with a tool in the trunk. The manual shows if yours does. It is for moving the car in an emergency or onto a tow truck, not for roadside use.",
          "Never release it on a slope unless the wheels are blocked, because the car can roll once the brake is free. Don't pull fuses or force the brake. That's how a small problem turns into a repair.",
        ],
      },
      {
        heading: "If the car has to be towed",
        paragraphs: [
          "Tell the tow company the car has an electric parking brake and a dead battery. Locked rear wheels affect how a car can be loaded, and the operator needs to know before they arrive. TRA doesn't tow, so this is a call to a tow company.",
        ],
      },
      {
        heading: "Where TRA fits",
        paragraphs: [
          "A jump start restores the power. It costs {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once per job. Mention the electric parking brake in the notes when you request help, so the driver knows what you're dealing with. If the battery won't hold a charge, battery replacement is the next step.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I push the car with the brake stuck on?",
        a: "No. The rear wheels are locked, and pushing drags the tires. Restore the power and release the brake first.",
      },
      {
        q: "Will a jump start release the brake by itself?",
        a: "No. It only restores power. You still release it with the switch, and some cars do that automatically when you shift into Drive with the belt fastened.",
      },
      {
        q: "Can I release it by disconnecting the battery?",
        a: "No, and don't try. It can leave the brake as it was, and it can trigger faults. Use a jump start and the release switch.",
      },
    ],
    services: ["jump-start", "battery-replacement"],
  },
  {
    slug: "car-wont-shift-out-of-park",
    title: "Car Won't Shift Out of Park? What to Check",
    h1: "Car won't shift out of park: the brake pedal, the shift lock and a dead battery",
    metaDescription:
      "Stuck in park? Check the brake pedal and ignition, then the shift lock. Why a dead battery locks the shifter and when the release slot is safe to use.",
    topic: "How-to guide",
    dek: "An automatic won't let the shifter leave Park unless two things are true: the car is on, and your foot is on the brake. When it won't budge, one of those isn't happening, and a dead battery is a common reason.",
    updated: UPDATED,
    cardImage: card("field-jump-start-booster"),
    sections: [
      {
        heading: "How the shift lock works",
        paragraphs: [
          "A small electric lock holds the shifter in Park. It lets go when the car is on and the brake pedal switch tells it your foot is down. That's a safety feature, so the car can't be shifted into gear by accident.",
          "It also means the lock needs power. No power to the lock, no release, however hard you pull.",
        ],
      },
      {
        heading: "Try these in order",
        paragraphs: ["Work through the simple things before anything else:"],
        list: [
          "Press the brake pedal firmly and hold it, then try the shifter again.",
          "Turn the ignition fully to On, or press Start with your foot on the brake.",
          "If the shifter has a button, press it all the way in.",
          "Have someone look at the brake lights while you press the pedal. If they don't come on, the brake switch or the bulbs may be the cause.",
          "Look at the dash. Dim or dead lights, a slow start or clicking points to the battery.",
        ],
      },
      {
        heading: "A dead battery",
        paragraphs: [
          "If the car has no power, the shift lock has none either. A jump start gives the lock power, and the shifter then moves as it should. A car that starts fine and still won't shift points the other way, to the brake switch.",
          "A new battery doesn't help a bad brake switch, and a jump doesn't either. The lights on the dash and the way the car starts tell you which one you have.",
        ],
      },
      {
        heading: "The shift lock release",
        paragraphs: [
          "Most automatics have a way past the lock: a small cover or slot near the shifter, often marked with an arrow or the words shift lock. Pry the cover off, push a key or a screwdriver into the slot, hold it, and press the shifter button. The manual shows the exact spot.",
          "Use it to move the car, not to drive it. If the brake lights aren't working, the car isn't safe to drive in traffic, and a shop should look at the switch. Set the parking brake before you use the release on a slope. Some cars with dial or button shifters have no such release, and the manual says so.",
        ],
      },
      {
        heading: "Where TRA fits",
        paragraphs: [
          "If the cause is a dead battery, a jump start costs {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once per job. TRA does no mechanical repair, so a failed brake switch or shift lock is a shop job.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why won't my car shift with the engine running?",
        a: "The usual causes are a foot that isn't pressing the brake hard enough, or a failed brake switch. The brake lights are the clue.",
      },
      {
        q: "Is it safe to use the shift lock release?",
        a: "To move the car a short way, yes, with the parking brake set. It's not a fix, and it's not for driving around without working brake lights.",
      },
      {
        q: "Will a jump start fix it?",
        a: "If a dead battery is the cause, yes. If the car already has power, a jump won't change anything.",
      },
    ],
    services: ["jump-start", "battery-replacement"],
  },
  {
    slug: "car-starts-then-dies",
    title: "Car Starts Then Dies: What It Usually Means",
    h1: "Your car starts and then dies: what it usually points to, and when to call",
    metaDescription:
      "A car that starts then stalls within seconds usually points to the key's security chip, fuel, air or weak power. What to check and when help makes sense.",
    topic: "How-to guide",
    dek: "A car that fires up and then quits is telling you the starting part works. The starter turned, the engine caught, and then something that has to keep it going didn't. That narrows it down.",
    updated: UPDATED,
    cardImage: card("field-jump-start-hood"),
    sections: [
      {
        heading: "How fast it dies tells you where to look",
        paragraphs: ["Notice how it behaves, because the pattern points at the cause:"],
        list: [
          "It dies in a second or two, every time, with a key or security light flashing: the car may not recognize the key.",
          "It runs roughly and quits, or dies when you lift off the gas: a fuel or air problem.",
          "It runs on a jump and dies when the cables come off: a charging problem.",
          "It starts only when you hold the gas down: a sensor or air supply problem is likely.",
        ],
      },
      {
        heading: "The key's security chip",
        paragraphs: [
          "Most cars made in the last couple of decades check a chip in the key before they will keep running. If they don't get a clear answer, they let the engine fire and then cut it. Look for a dash light shaped like a key or a car with a lock that flashes.",
          "Try the spare key, and take other keys off the ring. On a push-button car, hold the fob against the start button as the manual shows. If the spare works, the first key or its battery is the problem.",
        ],
      },
      {
        heading: "Fuel and air",
        paragraphs: [
          "Check the fuel gauge first. Gauges can mislead near empty, and a car that runs on what's in the lines and then quits is a classic sign. TRA doesn't deliver fuel, so an empty tank means you need someone to bring some.",
          "If there's fuel, a weak fuel pump, a clogged filter, or a dirty sensor on the air intake can all do it. These are shop jobs, and a shop can read the engine's codes.",
        ],
      },
      {
        heading: "Weak power",
        paragraphs: [
          "A weak battery can start an engine and then fail to keep the electronics alive, and an alternator that isn't charging does the same thing a few minutes later. Dim lights, a battery warning light, or a car that only runs while it's connected to a jump are the signs.",
          "That's the one case where a roadside driver can help: a jump start gets the engine going, and a battery that won't hold a charge can be replaced on site.",
        ],
      },
      {
        heading: "When to call, and when not to",
        paragraphs: [
          "If the lights dim or the car clicks, call. A jump start costs {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once per job. If the lights are bright, the security light is flashing, or it dies the same way every time, a jump won't help. You need a shop, and TRA does no mechanical repair and does not tow.",
          "Don't keep cranking it. Repeated tries wear down the battery. And if a car stalls while you're driving, you'll feel the steering and brakes get heavy. Keep both hands on the wheel, brake firmly, and steer to the shoulder with the hazards on.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I keep trying to start it?",
        a: "A few tries are fine. Beyond that you're draining the battery without learning anything new. Stop and work through the list above.",
      },
      {
        q: "Can the battery be the problem if the lights are bright?",
        a: "It can, but it's less likely. A weak battery usually dims the lights when you try to start. Bright lights and a car that quits point more toward fuel, air or the key.",
      },
      {
        q: "Is it safe to drive a car that stalls?",
        a: "No. It can lose power at a bad moment. Have it checked before you rely on it in traffic.",
      },
    ],
    services: ["jump-start", "battery-replacement"],
  },
];
