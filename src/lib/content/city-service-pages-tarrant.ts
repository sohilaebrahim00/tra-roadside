import type { CityServiceContent } from "./city-service-pages";

/**
 * City x Service pages for Fort Worth and Tarrant County. The rules are at the top of city-service-pages.ts.
 *
 * Every page here is written from SERVICES and the city's verified local-data entry only, so `sourceUrls` is
 * empty by design. Where a city has no verified districts, none are named: those pages are about the kind of
 * driving the city's roads carry, not about invented places.
 */
export const PAGES_TARRANT: CityServiceContent[] = [
  // ===================== FORT WORTH =====================
  {
    city: "fort-worth",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Fort Worth, TX",
    title: "Flat Tire Change Fort Worth TX",
    metaDescription:
      "Flat tire in Fort Worth? With a usable spare in the car, TRA puts it on where you are: a freeway shoulder, a downtown garage or your driveway.",
    intro:
      "Fort Worth is a big place to break down in, and a flat never picks a convenient corner of it. If there is a usable spare in the vehicle, a TRA driver comes to you, takes the flat off, puts the spare on and tightens it properly. You never jack the car up yourself and nothing is towed. We text or call when the driver is on the way.",
    scenarios: [
      "A blowout on I-35W or the I-820 loop, where the shoulder is the only place to stop.",
      "A flat found in a Sundance Square garage after dinner, with the spare under a pile of bags.",
      "A tire flat overnight in a driveway in Tanglewood or Arlington Heights, on a morning you have to be somewhere.",
      "A flat on US-287, US-377 or TX-114 when you can't say which exit you just passed.",
    ],
    localContext:
      "Fort Worth reaches into Tarrant, Denton, Johnson, Parker and Wise counties, and I-30, I-20, I-35W and the I-820 loop cross it, with US-287, US-377, US-81, TX-114, TX-183 and TX-121 adding more shoulder. Give dispatch the highway, your direction and the nearest exit or cross street. In town we work around Sundance Square, the Stockyards, Panther Island and the Upper West Side as readily as on a freeway.",
    faqs: [
      {
        q: "I'm on a freeway shoulder. What should I do while I wait?",
        a: "Stay belted in with your hazards on, away from the traffic side of the car. If you couldn't clear a live lane, or anyone is in danger, call 911 first. Standing beside the car while traffic passes is the most dangerous part.",
      },
      {
        q: "My car has no spare, only a sealant kit. Can you help?",
        a: "A flat tire change puts on the spare you already carry, so without one it is the wrong service. Tire replacement is the right one: we supply a tire and install it where you're parked. Availability varies, so dispatch confirms first.",
      },
      {
        q: "Do you handle a stuck or locked lug nut?",
        a: "A missing wheel lock key and a stripped lug nut are separate services from the spare change. Mention it when you request help so the driver comes prepared.",
      },
    ],
    primaryKeyword: "flat tire change Fort Worth TX",
    secondaryKeywords: ["flat tire service Fort Worth", "tire change near me Fort Worth", "roadside tire change Fort Worth", "spare tire installation Fort Worth"],
    longTail: ["flat tire on I-35W Fort Worth", "change my flat tire Fort Worth TX", "flat tire on I-820 help"],
    intent: "Emergency, roadside-safety, near-me. Highway-heavy large city.",
    sourceUrls: [],
  },
  {
    city: "fort-worth",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Fort Worth, TX",
    title: "Car Battery Replacement Fort Worth TX",
    metaDescription:
      "Battery failing in Fort Worth? TRA installs a new one where the car sits, from downtown garages to driveways. Includes a 1-year warranty.",
    intro:
      "A battery that needed a jump last week will need one again, and in a city this spread out the car can be a long way from home when it does. We bring a replacement to the car and install it where it is parked, so nothing is towed. The price on this page covers the battery and installing it, for eligible vehicles and batteries. Dispatch confirms which battery your car takes, and your total, before a driver is sent.",
    scenarios: [
      "A car that needed a jump twice in one week and now cranks slowly every morning.",
      "A dead battery in a garage near Sundance Square at the end of a workday.",
      "A vehicle that sat in a driveway in Tanglewood or Fairmount–Southside during a long trip and now only clicks.",
      "A battery several years old that you'd rather replace than wait on.",
    ],
    localContext:
      "Fort Worth drivers put real miles on a battery: I-30, I-20, I-35W and the I-820 loop cross the city, and US-287, US-377 and TX-114 add more. A weak battery often shows it only after the car has sat for a day or two. We install from the Upper West Side and Panther Island to Arlington Heights, in driveways, office lots and garages.",
    faqs: [
      {
        q: "Can the battery be replaced in a downtown garage?",
        a: "Often, as long as the driver can work safely beside the car. Tell dispatch the garage, the level and the space, and mention any height limit at the entrance.",
      },
      {
        q: "How do I tell a bad battery from a bad alternator?",
        a: "A car that dies again soon after a jump, or loses power while you're driving, may have a charging problem. Describe what happened when you request help. A new battery won't fix a bad alternator, so your driver can advise before anything is installed.",
      },
      {
        q: "My battery is under the back seat. Is that a problem?",
        a: "Not usually. Some vehicles keep the battery under a seat or in the trunk instead of under the hood, which is one reason dispatch confirms the battery first. Give the year, make and model, and the VIN if you can reach it.",
      },
    ],
    primaryKeyword: "car battery replacement Fort Worth TX",
    secondaryKeywords: ["mobile battery replacement Fort Worth", "battery installation Fort Worth", "car battery service Fort Worth", "new car battery Fort Worth"],
    longTail: ["mobile car battery replacement near me Fort Worth", "battery replaced at my office Fort Worth", "car battery keeps dying Fort Worth"],
    intent: "Commercial, convenience-led, comparison-aware. Spread-out city, garage and driveway installs.",
    sourceUrls: [],
  },
  {
    city: "fort-worth",
    service: "lockout",
    h1: "Car Lockout Service in Fort Worth, TX",
    title: "Car Lockout Service Fort Worth TX",
    metaDescription:
      "Locked out in Fort Worth? TRA opens your car without damage at Sundance Square, the Stockyards, the office or home. Local DFW dispatch, day or night.",
    intro:
      "Locking the keys in the car is a small mistake with a deadline attached: a meeting starting, dinner going cold, someone waiting to be picked up. A TRA driver comes to the car wherever it is in Fort Worth, confirms you're entitled to the vehicle and opens it with non-destructive methods whenever the vehicle allows. The car doesn't have to be towed or left overnight.",
    scenarios: [
      "Keys on the seat after a door locked itself in a Sundance Square garage.",
      "A key fob that gave up on the street after an afternoon at the Stockyards.",
      "Keys shut in the trunk while loading for a weekend trip, which is a separate job from opening a door.",
      "A borrowed car that locked with the spare key back at the owner's house.",
    ],
    localContext:
      "Fort Worth spans five counties, and lockouts come from all of it: garages and street parking around Sundance Square and the Upper West Side, visitor parking at the Fort Worth Stockyards, and driveways in Arlington Heights, Fairmount–Southside and Tanglewood. A city this size has plenty of lots that look alike, so give dispatch the garage name, the level and the nearest cross street.",
    faqs: [
      {
        q: "What ID should I have ready?",
        a: "Something that links you to the vehicle, such as a driver's license that matches the registration. The driver confirms ownership on site before opening anything, which keeps anyone else from getting your car opened.",
      },
      {
        q: "Can you open a car in a garage or a gated lot?",
        a: "Usually, if the driver can reach it. Give dispatch the garage or lot, the level and the space, plus any gate code or access instructions.",
      },
      {
        q: "A child or pet is locked in the car. What should I do?",
        a: "If they are in danger, call 911 first. Then call us: we treat a child or pet locked in a car as urgent and route it to the nearest driver first.",
      },
    ],
    primaryKeyword: "car lockout service Fort Worth TX",
    secondaryKeywords: ["locked out of car Fort Worth", "car unlock Fort Worth TX", "auto lockout Fort Worth", "vehicle lockout Fort Worth"],
    longTail: ["locked keys in car Fort Worth TX", "car unlock near me Fort Worth", "locked keys in trunk Fort Worth"],
    intent: "Emergency, near-me, immediate-dispatch. Downtown garage and visitor-lot scenarios.",
    sourceUrls: [],
  },
  {
    city: "fort-worth",
    service: "jump-start",
    h1: "Jump Start Service in Fort Worth, TX",
    title: "Jump Start Service Fort Worth TX",
    metaDescription:
      "Car won't start in Fort Worth? TRA brings a jump start to garages, lots and driveways across the city, semi trucks included. Open 24/7.",
    intro:
      "A car that clicks, crawls or stays silent is most often one with a battery out of charge, not one that has failed outright. A TRA driver comes to the vehicle with the equipment to start it on the spot, so you drive away instead of waiting on a tow. In Fort Worth that covers big rigs too: the service includes semi trucks and 18-wheelers as well as cars and pickups.",
    scenarios: [
      "Headlights left on through a long afternoon at the Stockyards.",
      "A car that sat in a driveway through a week away and now only clicks when you turn the key.",
      "A semi truck that won't crank in a yard or at a truck stop with a load waiting.",
      "A battery that has been slow to turn over for days and finally gave out on a cold morning.",
    ],
    localContext:
      "Fort Worth is crossed by I-35W, I-30, I-20 and the I-820 loop, plus US-287, US-377, US-81, TX-114, TX-183 and TX-121, so a dead battery can leave a vehicle a long way from help. Several airfields lie inside the city, including Meacham International and Spinks, and Dallas/Fort Worth International sits between Fort Worth and Dallas. We hold no special access to any airfield or airport property, so tell dispatch exactly where the vehicle is parked.",
    faqs: [
      {
        q: "Can you jump a semi truck or an 18-wheeler?",
        a: "Yes. Choose semi truck as the vehicle type when you request, and tell dispatch the unit number and exactly where it is parked: the yard, the truck stop or the mile marker.",
      },
      {
        q: "It clicks but won't crank. Is that a dead battery?",
        a: "Rapid clicking or a slow, labored crank usually means a battery that is out of charge, which is what a jump start is for. Describe what you hear and see when you request help, and your driver will tell you what they find on site.",
      },
      {
        q: "Does my hybrid or electric car need anything special?",
        a: "Add the year, make and model, and anything unusual, in the notes when you request. Dispatch confirms the right equipment before a driver is sent rather than finding out on arrival.",
      },
    ],
    primaryKeyword: "jump start service Fort Worth TX",
    secondaryKeywords: ["car battery jump start Fort Worth", "dead battery Fort Worth", "jump start near me Fort Worth", "24 hour jump start Fort Worth"],
    longTail: ["semi truck jump start Fort Worth", "car won't start Fort Worth TX help", "mobile jump start Fort Worth"],
    intent: "Emergency, mobile, 24-hour. Includes the semi truck and 18-wheeler variant.",
    sourceUrls: [],
  },
  {
    city: "fort-worth",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Fort Worth, TX",
    title: "Mobile Tire Repair Fort Worth TX",
    metaDescription:
      "Nail or screw in a tire in Fort Worth? TRA plugs or patches the tread where the car sits, when the damage allows. Your spare stays in the trunk.",
    intro:
      "A nail or screw in the tread rarely announces itself. The tire just gets a little softer each day until a warning light comes on. When the hole is in the tread and small enough to repair, a plug or patch done where the car is parked deals with the tire that is already on it, with no trip to a shop. We bring the equipment to you anywhere in Fort Worth.",
    scenarios: [
      "A tire pressure warning that comes back each morning after you top the tire up.",
      "A screw spotted in the tread while loading the car in an Upper West Side or Panther Island lot.",
      "A low tire noticed in the driveway after a long run on US-287 or I-35W.",
      "A slow leak found on a weekend that you'd rather repair than run on the spare.",
    ],
    localContext:
      "Fort Worth has plenty of highways for debris to land on: I-30, I-20, I-35W, the I-820 loop, US-287, US-377 and TX-183 all cross the city. A nail or screw picked up at highway speed is often found only later, in a garage near Sundance Square, in a driveway in Tanglewood or in a lot at the Stockyards. We repair the tire wherever the car is sitting.",
    faqs: [
      {
        q: "How can I tell if the puncture is in the tread?",
        a: "The tread is the part of the tire that meets the road. A nail or screw there is the repairable kind. Anything in or near the sidewall is not, and the driver checks before starting and tells you which it is.",
      },
      {
        q: "I drove on it flat for a while. Can it still be repaired?",
        a: "Maybe not. Driving on a flat can damage the tire as well as the wheel. The driver inspects it and tells you honestly; if it can't be repaired, the options are your spare or a replacement tire we supply.",
      },
      {
        q: "Do you use my spare for a repair?",
        a: "No. A plug or patch repairs the tire that is on the car, so the spare stays in the trunk. It only comes into play if the tire turns out not to be repairable.",
      },
    ],
    primaryKeyword: "mobile tire repair Fort Worth TX",
    secondaryKeywords: ["tire plug Fort Worth", "tire patch Fort Worth", "nail in tire Fort Worth", "flat tire repair Fort Worth TX"],
    longTail: ["screw in tire repair near me Fort Worth", "slow leak tire repair Fort Worth", "tire pressure light on Fort Worth help"],
    intent: "Commercial-urgent, repair-before-replace.",
    sourceUrls: [],
  },
  {
    city: "fort-worth",
    service: "tire-replacement",
    h1: "Roadside Tire Replacement in Fort Worth, TX",
    title: "Tire Replacement Fort Worth TX",
    metaDescription:
      "Tire shredded or no usable spare in Fort Worth? TRA brings a replacement tire and installs it where the car sits. Tire availability varies.",
    intro:
      "Some tire damage can't be repaired: a torn sidewall, a blowout, a hole too big to plug. With no usable spare to fall back on, the car stays where it is until it has a tire. TRA supplies a tire and installs it on site, so a Fort Worth driver doesn't need a tow to a tire shop. Tire availability varies by size, so dispatch confirms a tire is available, and your total, before anyone is sent.",
    scenarios: [
      "A blowout on I-35W or I-30 that left nothing of the tire worth repairing.",
      "A bulge or cut in the sidewall found on a street in Fairmount–Southside, beyond any plug or patch.",
      "A vehicle that never carried a spare, only a sealant kit, now flat in a downtown garage.",
      "A spare that is soft or missing when you reach for it at the Stockyards.",
    ],
    localContext:
      "Fort Worth reaches into five counties and is crossed by I-30, I-20, I-35W, the I-820 loop, US-287, US-377, US-81, TX-114, TX-183 and TX-121, so the call can come from almost anywhere. Dispatch needs the tire size and your exact spot: a highway with the direction and nearest exit, or a garage with the level. We bring the tire to the car, whether that is a shoulder, a Sundance Square garage or a driveway in Tanglewood.",
    faqs: [
      {
        q: "I can't read the tire size safely. What can I tell dispatch?",
        a: "The year, make and model, plus the size on the sticker inside the driver's door jamb if you can reach it. That is enough to start, and dispatch confirms the rest. Never lean into a live lane to read a sidewall.",
      },
      {
        q: "My spare is flat too. Which service do I book?",
        a: "Tire replacement, since a flat spare can't be put on. If the spare holds air and is usable, a flat tire change puts it on instead. Say which situation you're in when you request help.",
      },
      {
        q: "Will the new tire match the others?",
        a: "Tire availability varies, so dispatch tells you what can be supplied for your size before a driver is sent. If you drive an all-wheel-drive vehicle or care about a particular brand, mention it up front.",
      },
    ],
    primaryKeyword: "tire replacement Fort Worth TX",
    secondaryKeywords: ["mobile tire replacement Fort Worth", "roadside tire replacement Fort Worth", "tire blowout help Fort Worth", "no spare tire help Fort Worth"],
    longTail: ["blown tire on highway Fort Worth", "need a tire replaced at home Fort Worth", "sidewall damage tire Fort Worth TX"],
    intent: "Emergency, no-spare or damage-beyond-repair.",
    sourceUrls: [],
  },

  // ===================== SOUTHLAKE =====================
  {
    city: "southlake",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Southlake, TX",
    title: "Flat Tire Change Southlake TX",
    metaDescription:
      "Flat tire in Southlake? With a usable spare in the car, TRA puts it on at Town Square, Solana or the shoulder of TX-114. Request help online or call.",
    intro:
      "A flat in Southlake usually turns up in the middle of something: lunch at Town Square, a meeting at an office park, the drive home on TX-114. If there is a usable spare in the vehicle, a TRA driver comes to you, puts it on and tightens it properly, and the rest of the day carries on. You don't need to own a jack or change a wheel in your work clothes.",
    scenarios: [
      "A flat found in the Town Square parking lot after a long lunch.",
      "A low tire spotted at the end of the workday in a Solana business park lot.",
      "A blowout on the TX-114 shoulder with traffic passing at highway speed.",
      "A tire found flat in the driveway on a morning when everyone has to be out the door.",
    ],
    localContext:
      "Southlake lies mostly in Tarrant County, with some areas in Denton County, and its drivers move between TX-114, TX-26, FM 1709 (Southlake Boulevard) and FM 1938. The city borders Keller, Colleyville and Grapevine and lies close to Dallas/Fort Worth International Airport. We change tires in the Town Square and Solana areas, on side streets and in driveways as readily as on a TX-114 shoulder.",
    faqs: [
      {
        q: "Can you change a tire in a retail parking lot?",
        a: "Yes. Tell dispatch which lot, the nearest store entrance and the row. If the car is blocking an aisle or a lane, say so, and keep clear of moving cars while you wait.",
      },
      {
        q: "Should I drive to a safer spot on the flat?",
        a: "Only as far as you must. Get the car away from traffic as safely as you can, then stop, because driving on a flat damages the wheel as well as the tire. If you can't clear a live lane, or anyone is in danger, call 911 first.",
      },
      {
        q: "My spare looks low on air. What then?",
        a: "Spares sit for years without a check, so it happens. Tell dispatch if you think yours is soft. If it can't be used, tire replacement is the service that supplies a tire and installs it on site.",
      },
    ],
    primaryKeyword: "flat tire change Southlake TX",
    secondaryKeywords: ["flat tire service Southlake", "tire change near me Southlake", "roadside tire change Southlake", "spare tire installation Southlake"],
    longTail: ["flat tire at Southlake Town Square", "flat tire on TX-114 Southlake help", "change my flat tire Southlake TX"],
    intent: "Emergency, near-me. Retail and office-park lots plus a highway commute.",
    sourceUrls: [],
  },
  {
    city: "southlake",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Southlake, TX",
    title: "Car Battery Replacement Southlake TX",
    metaDescription:
      "Need a car battery in Southlake? TRA installs it at your car, at home or the office, and confirms the total first. Includes a 1-year warranty.",
    intro:
      "Replacing a battery shouldn't cost you a morning. We bring a new battery to the car and install it where it is parked, whether that is a driveway in Southlake or a space at the office, so the day carries on and nothing is towed. The price on this page covers the battery and installing it, for eligible vehicles and batteries. Dispatch checks which battery your car takes and confirms your total before a driver is sent.",
    scenarios: [
      "A car in a Solana business park lot that needed a jump on Monday and won't start again by Thursday.",
      "A vehicle that sat in the driveway while the family was away and now only clicks.",
      "A warning light and slow windows that point to a charging problem rather than a bad engine.",
      "A battery several years old that you'd rather change on a Saturday than after it fails on TX-114.",
    ],
    localContext:
      "Southlake driving is a mix of short hops between Town Square, the Solana business park and home, with longer runs on TX-114 and TX-26. Short hops are hard on a battery, because the engine never runs long enough to put back what starting took out. The city also lies close to Dallas/Fort Worth International Airport, and a car left at home during a trip is another way a weak battery shows itself.",
    faqs: [
      {
        q: "Can you replace the battery at my office?",
        a: "Yes, if the car is somewhere the driver can work safely beside it. Give dispatch the building, the lot and the space, and say whether the lot has a gate or a height limit.",
      },
      {
        q: "I've already jumped it twice. Should I just replace the battery?",
        a: "Two jumps in a short time usually means the battery isn't holding a charge, and a third only delays the problem. Replacement is the lasting fix, and dispatch confirms the right battery and your total before a driver is sent.",
      },
      {
        q: "What warranty comes with the new battery?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice, which is what warranty service is handled against.",
      },
    ],
    primaryKeyword: "car battery replacement Southlake TX",
    secondaryKeywords: ["mobile battery replacement Southlake", "battery installation Southlake", "car battery service Southlake", "new car battery Southlake"],
    longTail: ["mobile car battery replacement near me Southlake", "battery replaced at office Southlake", "car battery keeps dying Southlake"],
    intent: "Commercial, convenience-led. Workplace and driveway installs.",
    sourceUrls: [],
  },
  {
    city: "southlake",
    service: "lockout",
    h1: "Car Lockout Service in Southlake, TX",
    title: "Car Lockout Service Southlake TX",
    metaDescription:
      "Locked out in Southlake? TRA opens your car without damage at Town Square, the Solana business park or home. Local DFW dispatch, day or night.",
    intro:
      "Locking the keys in the car is rarely planned, and in Southlake it tends to happen mid-errand: a stop at Town Square, a meeting at the office, a quick run into a store. A TRA driver comes to the car, confirms it's yours and opens it using non-destructive methods whenever the vehicle allows, and you carry on with your day.",
    scenarios: [
      "Keys on the seat and the doors locked while you were inside a store at Town Square.",
      "A smart key with a dead battery, leaving you unable to open the car in a Solana lot.",
      "Keys shut in the trunk after loading grocery bags, which is a separate job from a door.",
      "A door that locked itself in the driveway with the engine still running.",
    ],
    localContext:
      "We open cars in the Town Square and Solana areas, on side streets off TX-114, TX-26, FM 1709 (Southlake Boulevard) and FM 1938, and in driveways anywhere in the city, which reaches into both Tarrant and Denton counties. Southlake borders Keller, Colleyville and Grapevine, so if you are near a city line, tell dispatch the nearest cross street.",
    faqs: [
      {
        q: "My key fob battery died. Can you still get me in?",
        a: "Yes. A dead fob doesn't change how the car is opened. Once you're in, the car may still need the fob to start, so check your owner's manual for the backup way to start it.",
      },
      {
        q: "Will opening the car damage the door?",
        a: "Drivers use non-destructive entry whenever the vehicle allows. If a particular vehicle can't be opened safely without damage, the driver tells you before starting.",
      },
      {
        q: "Why are keys in the trunk handled separately?",
        a: "Reaching a trunk is a different job from opening a door, so it is booked and priced separately. Tell dispatch where the keys are when you request help.",
      },
    ],
    primaryKeyword: "car lockout service Southlake TX",
    secondaryKeywords: ["locked out of car Southlake", "car unlock Southlake TX", "auto lockout Southlake", "vehicle lockout Southlake"],
    longTail: ["locked keys in car Southlake TX", "car unlock near me Southlake", "locked out at Southlake Town Square"],
    intent: "Emergency, near-me, errand-driven.",
    sourceUrls: [],
  },
  {
    city: "southlake",
    service: "jump-start",
    h1: "Jump Start Service in Southlake, TX",
    title: "Jump Start Service Southlake TX",
    metaDescription:
      "Car won't start in Southlake? TRA brings a jump start to Town Square, Solana or your driveway. Local DFW dispatch, 24 hours a day.",
    intro:
      "A dead battery in Southlake tends to leave you stuck at the worst place: a Town Square parking space, an office lot, the end of a driveway with the family already in the car. A TRA driver comes to the vehicle, jump starts it on the spot and lets you drive away under your own power, with no tow involved.",
    scenarios: [
      "Headlights left on through a long dinner at Town Square.",
      "A car that sat in the garage during a week away and now won't turn over.",
      "An interior light left on overnight in a Solana business park lot.",
      "A battery that has been cranking slower each morning for a week.",
    ],
    localContext:
      "Southlake runs on TX-114, TX-26, FM 1709 (Southlake Boulevard) and FM 1938, with Southlake Town Square and the Solana business park both inside the city. It lies close to Dallas/Fort Worth International Airport and borders Keller, Colleyville and Grapevine. Calls come from lots, garages and driveways alike, and the driver comes to the car wherever it is.",
    faqs: [
      {
        q: "Should I keep trying the ignition while I wait?",
        a: "No. Each attempt takes more out of a battery that is already low and makes the jump harder. Turn off the lights, stereo and climate control, and wait for the driver.",
      },
      {
        q: "My car sat for weeks. Is a jump start enough?",
        a: "Usually, if the battery simply ran down while sitting. A battery near the end of its life may not hold the charge afterward, and your driver will tell you what they saw.",
      },
      {
        q: "What should I tell dispatch so the driver finds me?",
        a: "The lot or street, the nearest cross street, and for a garage the level and space. In a big lot, a row number or the nearest store name helps.",
      },
    ],
    primaryKeyword: "jump start service Southlake TX",
    secondaryKeywords: ["car battery jump start Southlake", "dead battery Southlake", "jump start near me Southlake", "24 hour jump start Southlake"],
    longTail: ["car won't start Southlake TX help", "mobile jump start Southlake", "dead battery at Town Square Southlake"],
    intent: "Emergency, mobile, 24-hour.",
    sourceUrls: [],
  },
  {
    city: "southlake",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Southlake, TX",
    title: "Mobile Tire Repair Southlake TX",
    metaDescription:
      "Nail or screw in your tire in Southlake? TRA plugs or patches the tread on site when the damage allows. Your spare stays in the trunk.",
    intro:
      "A screw in the tread can sit there for days, letting out a little air each night, until a low-pressure light finally comes on. When the puncture is in the tread and small enough to repair, a TRA driver plugs or patches the tire where the car is parked: at home, at the office or in a Town Square lot. The tire you have gets fixed and your spare stays in the trunk.",
    scenarios: [
      "A pressure light that returns every morning after you add air.",
      "A screw spotted in the tread in the Solana business park lot.",
      "A tire that sits lower than the other three after a week of TX-114 driving.",
      "A slow leak found in the driveway on a weekend that you'd rather repair than run on the spare.",
    ],
    localContext:
      "Drivers here use TX-114, TX-26, FM 1709 (Southlake Boulevard) and FM 1938 every day, and a nail or screw from any of them can sit unnoticed in a tire. We repair tires in the Town Square and Solana areas, in office lots and in driveways, in a city that spans Tarrant and Denton counties. If the damage turns out to be beyond repair, the driver says so on the spot.",
    faqs: [
      {
        q: "There's a screw in the tire. Should I pull it out?",
        a: "Leave it where it is. While it is in the tread it partly seals the hole, and taking it out before the repair is ready usually lets the tire go flat.",
      },
      {
        q: "What happens if the tire can't be repaired?",
        a: "Then the options are your spare, if it is usable, or a replacement tire we supply and install on site. The driver explains what they found so you can decide there and then.",
      },
      {
        q: "Could it be the valve stem and not a puncture?",
        a: "It could. Brush soapy water over the stem: bubbles mean air is escaping there. Tell dispatch what you find, because a valve stem replacement is a different service from a plug or patch.",
      },
    ],
    primaryKeyword: "mobile tire repair Southlake TX",
    secondaryKeywords: ["tire plug Southlake", "tire patch Southlake", "nail in tire Southlake", "flat tire repair Southlake TX"],
    longTail: ["screw in tire repair near me Southlake", "slow leak tire repair Southlake", "tire pressure light on Southlake help"],
    intent: "Commercial-urgent, repair-before-replace.",
    sourceUrls: [],
  },

  // ===================== KELLER =====================
  {
    city: "keller",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Keller, TX",
    title: "Flat Tire Change Keller TX",
    metaDescription:
      "Flat tire in Keller? If you have a usable spare, TRA puts it on along US-377, Davis Boulevard or in your driveway. Request help online or call.",
    intro:
      "Keller's everyday driving runs on Davis Boulevard, Keller Parkway and US-377, and a flat usually happens somewhere along one of them. If your vehicle has a usable spare, a TRA driver comes to the spot, puts it on and tightens it properly, and you drive on. Nothing is towed, and you don't have to jack the car up beside a busy road.",
    scenarios: [
      "A flat on US-377 along the western edge of town, with traffic passing close by.",
      "A tire down on Davis Boulevard (FM 1938) in the middle of an errand run.",
      "A low tire spotted while parking at Keller Town Center.",
      "A compact spare you have never used, waiting under the trunk floor for its first job.",
    ],
    localContext:
      "Keller lies entirely in Tarrant County. Its main roads are US-377 along the western border, Davis Boulevard (FM 1938) through the city and Keller Parkway (FM 1709). Fort Worth, Southlake, Colleyville and North Richland Hills border it, so a flat near a city line is still ours to reach. Give dispatch the nearest cross street and which way you were heading.",
    faqs: [
      {
        q: "How far can I go on a compact spare?",
        a: "Most compact spares are rated for limited speed and distance, and the limits are printed on the spare or in the owner's manual. Your driver will tell you what yours allows so you can plan the next step.",
      },
      {
        q: "Can the flat be repaired instead of swapped?",
        a: "Often, if the puncture is in the tread. Tire repair is a separate service, and the driver can say which makes sense once they see the tire.",
      },
      {
        q: "What should I have ready when the driver arrives?",
        a: "If it is safe, clear the trunk so the spare is easy to reach, and find the wheel lock key if your wheels have one. It saves time but isn't required: the driver brings the tools.",
      },
    ],
    primaryKeyword: "flat tire change Keller TX",
    secondaryKeywords: ["flat tire service Keller", "tire change near me Keller", "roadside tire change Keller", "spare tire installation Keller"],
    longTail: ["flat tire on US-377 Keller", "change my flat tire Keller TX", "flat tire Davis Boulevard Keller help"],
    intent: "Emergency, roadside, near-me. Arterial-road driving.",
    sourceUrls: [],
  },
  {
    city: "keller",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Keller, TX",
    title: "Car Battery Replacement Keller TX",
    metaDescription:
      "Car battery failing in Keller? TRA brings a new one and installs it at home, work or a parking lot. Includes a 1-year warranty.",
    intro:
      "A battery that has started to crank slowly is giving you notice. We bring a replacement to your Keller driveway or parking space and install it there, so there is no tow to a shop and no waiting around without a car. The price on this page covers the battery and installing it, for eligible vehicles and batteries, and dispatch confirms the right battery and your total before a driver is sent.",
    scenarios: [
      "A car that cranks slower every morning and now barely turns over.",
      "A battery jumped once on a weekday that quit again on the weekend.",
      "A vehicle that sat unused over a holiday and now shows nothing at all on the dash.",
      "A dead battery in a Keller Town Center parking space after a long evening out.",
    ],
    localContext:
      "Keller drivers run short trips on Davis Boulevard (FM 1938) and Keller Parkway (FM 1709), with US-377 for longer runs. A mix like that can hide a failing battery until the car has sat for a day or two. We install batteries around Keller Town Center and in neighborhoods across the city, which borders Southlake, Colleyville and North Richland Hills as well as Fort Worth.",
    faqs: [
      {
        q: "Do I need to know my battery's size or type?",
        a: "No. Give the year, make and model and dispatch works out which battery your car takes. The VIN confirms the exact one if you can reach it, but it is optional.",
      },
      {
        q: "Should I just get another jump instead?",
        a: "If the battery still holds a charge, a jump start gets you moving. If it has already failed a jump or died again soon after, replacement is the better move. Your driver can advise on site if you're unsure.",
      },
      {
        q: "How long does the installation take?",
        a: "It depends on where the battery sits. Some are under the hood and take little time; others are under a seat or behind panels and take longer. Dispatch tells you what to expect when they confirm the battery and your total.",
      },
    ],
    primaryKeyword: "car battery replacement Keller TX",
    secondaryKeywords: ["mobile battery replacement Keller", "battery installation Keller", "car battery service Keller", "new car battery Keller"],
    longTail: ["mobile car battery replacement near me Keller", "battery replaced at home Keller", "car battery keeps dying Keller TX"],
    intent: "Commercial, convenience-led. Driveway installs.",
    sourceUrls: [],
  },
  {
    city: "keller",
    service: "lockout",
    h1: "Car Lockout Service in Keller, TX",
    title: "Car Lockout Service Keller TX",
    metaDescription:
      "Locked out in Keller? TRA opens your car without damage on Davis Boulevard, near Town Center or at home. Local DFW dispatch, day or night.",
    intro:
      "A locked car in Keller is usually a short stop gone wrong: a quick run into a store, a moment at a front door, the engine left running. A TRA driver comes to wherever you left it, checks the car is yours and opens it with non-destructive methods whenever the vehicle allows. Dispatch is local to Dallas–Fort Worth, not an out-of-state call center.",
    scenarios: [
      "Keys in the cup holder and the doors locked while you handed over a package at a front door.",
      "The engine running and the door locked behind you at a store off Davis Boulevard.",
      "A fob that stopped working in the Keller Town Center lot after a meal.",
      "Keys shut in the trunk after loading the car, which is a separate job from opening a door.",
    ],
    localContext:
      "Keller lies entirely in Tarrant County, with US-377 along its western border and Davis Boulevard (FM 1938) and Keller Parkway (FM 1709) running through it. We open cars around Keller Town Center and in neighborhoods across the city. It borders Fort Worth, Southlake, Colleyville and North Richland Hills, and a car just over a line is a call we still take.",
    faqs: [
      {
        q: "The engine is still running and the doors are locked. Does that change anything?",
        a: "It doesn't change how the car is opened. If the car is parked safely, stay nearby and wait. If it is in a live lane, or anyone is in danger, call 911 first.",
      },
      {
        q: "I don't have my ID with me. What then?",
        a: "The driver needs some way to confirm the vehicle is yours: ID or another proof. Tell dispatch what you do have when you request help, and they'll tell you whether it will work.",
      },
      {
        q: "What should I do while I wait?",
        a: "Stay in a well-lit spot near the car and don't try to force the door. Check whether another door or the trunk is unlocked, and have your ID ready.",
      },
    ],
    primaryKeyword: "car lockout service Keller TX",
    secondaryKeywords: ["locked out of car Keller", "car unlock Keller TX", "auto lockout Keller", "vehicle lockout Keller"],
    longTail: ["locked keys in car Keller TX", "car unlock near me Keller", "keys locked in running car Keller"],
    intent: "Emergency, near-me, immediate-dispatch.",
    sourceUrls: [],
  },
  {
    city: "keller",
    service: "jump-start",
    h1: "Jump Start Service in Keller, TX",
    title: "Jump Start Service Keller TX",
    metaDescription:
      "Car won't start in Keller? TRA brings a jump start to your driveway, Davis Boulevard or Town Center. Local DFW dispatch, 24 hours a day.",
    intro:
      "When a car in Keller won't start, it is most often a battery that has run out of charge, not an engine that has failed. A TRA driver comes to the car with the right equipment, jump starts it where it sits, and you drive away without a tow. Whether you are in a driveway, a store lot or a Town Center space, the driver comes to you.",
    scenarios: [
      "A car that sat in the garage over a long weekend and now only clicks.",
      "A dome light left on overnight, found out at 6:30 on a school morning.",
      "A dead battery in a Keller Parkway parking lot after an afternoon appointment.",
      "A cold morning that finally finished a battery that had been slow for a week.",
    ],
    localContext:
      "Keller's traffic uses US-377 on the western border, Davis Boulevard (FM 1938) and Keller Parkway (FM 1709), and short trips on those roads are tough on a battery. We take jump start calls from Keller Town Center, from neighborhood driveways and from lots along all three roads. The city borders Fort Worth, Southlake, Colleyville and North Richland Hills.",
    faqs: [
      {
        q: "The car started but died again an hour later. What now?",
        a: "That usually means the battery no longer holds a charge, or something isn't recharging it. Your driver can tell you what they saw, and battery replacement is a separate service we bring to the car.",
      },
      {
        q: "What do I tell dispatch about where I am?",
        a: "A street address at a house; for a store lot, the business name and nearest entrance; on a road, the cross street and your direction. The more exact it is, the easier the driver finds the spot.",
      },
      {
        q: "Should I open the hood before the driver arrives?",
        a: "If it is safe to, yes. It saves a moment. Switch off the lights, stereo and climate control first, and stay in a well-lit spot.",
      },
    ],
    primaryKeyword: "jump start service Keller TX",
    secondaryKeywords: ["car battery jump start Keller", "dead battery Keller", "jump start near me Keller", "24 hour jump start Keller"],
    longTail: ["car won't start Keller TX help", "mobile jump start Keller", "dead battery Keller Town Center"],
    intent: "Emergency, mobile, 24-hour.",
    sourceUrls: [],
  },
  {
    city: "keller",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Keller, TX",
    title: "Mobile Tire Repair Keller TX",
    metaDescription:
      "Nail in your tire in Keller? TRA plugs or patches the tread at home, at work or in a lot when the damage allows. Request help online or call.",
    intro:
      "A screw picked up on a Keller road can sit in the tread for days, losing a little air at a time. When the hole is in the tread and small enough, a TRA driver repairs it with a plug or patch where the car is parked, so you keep the tire you have and skip the trip to a shop.",
    scenarios: [
      "A screw spotted in the tread while you wash the car in the driveway.",
      "A tire that needs air every few days with nothing visible wrong.",
      "A low-pressure warning that appeared after a run on US-377.",
      "A nail found in the tread at Keller Town Center before you have driven away.",
    ],
    localContext:
      "Davis Boulevard (FM 1938), Keller Parkway (FM 1709) and US-377 carry most of Keller's daily traffic, and debris collects along roads like those. Because most driving here is ordinary daily trips, a puncture is as likely to turn up in a driveway as on the road. We repair tires there, at Keller Town Center and in office lots.",
    faqs: [
      {
        q: "Can you repair a tire in my driveway?",
        a: "Yes. We come to wherever the car is parked, a driveway included, as long as the driver can work safely beside it.",
      },
      {
        q: "The nail is near the edge of the tread. Can it still be repaired?",
        a: "It depends on how close to the sidewall it is. A puncture in the flat part of the tread is the repairable kind; one at or near the sidewall is not. The driver checks before starting and tells you which it is.",
      },
      {
        q: "How long can I wait before getting it repaired?",
        a: "Avoid driving on a visibly low tire, and skip long trips on it. A tire driven low can be damaged until it can't be repaired, which turns a repair into a replacement.",
      },
    ],
    primaryKeyword: "mobile tire repair Keller TX",
    secondaryKeywords: ["tire plug Keller", "tire patch Keller", "nail in tire Keller", "flat tire repair Keller TX"],
    longTail: ["screw in tire repair near me Keller", "slow leak tire repair Keller", "tire pressure light on Keller help"],
    intent: "Commercial-urgent, repair-before-replace.",
    sourceUrls: [],
  },

  // ===================== MANSFIELD =====================
  {
    city: "mansfield",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Mansfield, TX",
    title: "Flat Tire Change Mansfield TX",
    metaDescription:
      "Flat tire in Mansfield? If you have a usable spare, TRA puts it on along TX-360, US-287 or in Historic Mansfield. Request help online or call.",
    intro:
      "Mansfield stretches across Tarrant, Johnson and Ellis counties, so a flat here can happen a long way from any one landmark. If there is a usable spare in the vehicle, a TRA driver comes to you, on a highway shoulder or a downtown street, puts it on and tightens it properly, and you drive on. We text or call when the driver is on the way.",
    scenarios: [
      "A blowout on TX-360 where the shoulder is all that stands between the car and traffic.",
      "A flat on US-287 on the way out of town.",
      "A tire found down on a street in Historic Mansfield, where the car is parked tight to the curb.",
      "A pickup or SUV whose spare rides under the vehicle, with no idea how to lower it.",
    ],
    localContext:
      "TX-360 and US-287 are Mansfield's two main routes, and the city's reach into Johnson and Ellis counties as well as Tarrant means calls can come from well away from Downtown Mansfield and Historic Mansfield. Mansfield borders Arlington and Grand Prairie. Give dispatch the highway and nearest cross street, or the street name and nearest business in the historic area.",
    faqs: [
      {
        q: "My spare is under the truck. Can you get it down?",
        a: "Tell dispatch where the spare is carried and whether you have the tool or key that lowers it. If it can't be reached or isn't usable, tire replacement is the service that supplies a tire.",
      },
      {
        q: "A lug nut is stripped. Does that stop the job?",
        a: "It can. Stripped lug nut removal is a separate service, so mention it when you request help and the driver comes prepared.",
      },
      {
        q: "Can you work on a downtown street where cars are parked close?",
        a: "Usually, if there is room beside the car for the driver to lift it and work safely. Tell dispatch the street and how tight the space is.",
      },
    ],
    primaryKeyword: "flat tire change Mansfield TX",
    secondaryKeywords: ["flat tire service Mansfield", "tire change near me Mansfield", "roadside tire change Mansfield", "spare tire installation Mansfield"],
    longTail: ["flat tire on TX-360 Mansfield", "change my flat tire Mansfield TX", "flat tire US-287 Mansfield help"],
    intent: "Emergency, roadside, near-me. Three-county city with highway and historic-street calls.",
    sourceUrls: [],
  },
  {
    city: "mansfield",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Mansfield, TX",
    title: "Car Battery Replacement Mansfield TX",
    metaDescription:
      "Car battery failing in Mansfield? TRA brings a new one and installs it on site, from Downtown Mansfield to your driveway. Includes a 1-year warranty.",
    intro:
      "A battery that has started to struggle rarely fixes itself. In Mansfield, replacing it doesn't have to mean a tow or a day without the car: we bring a new battery to wherever the vehicle is parked and install it there. The price on this page covers the battery and installing it, for eligible vehicles and batteries, and dispatch confirms which battery your car takes, and your total, before a driver sets out.",
    scenarios: [
      "A car that wouldn't start on Monday after a weekend of short trips.",
      "A dead battery on a street in Downtown Mansfield after dinner out.",
      "A vehicle that has needed a jump three times this month.",
      "A battery old enough that you'd rather replace it before a trip along TX-360 or US-287.",
    ],
    localContext:
      "Mansfield spans parts of Tarrant, Johnson and Ellis counties, and its drivers rely on TX-360 and US-287. We install batteries in driveways across the city and at street parking in Downtown Mansfield and Historic Mansfield. The city borders Arlington and Grand Prairie; if your car is near either line, give dispatch the cross street.",
    faqs: [
      {
        q: "Can you replace it with the car parked on the street?",
        a: "Usually, if the driver can work safely beside it. Tell dispatch the street, which side the car is on and the nearest business.",
      },
      {
        q: "Is the new battery under warranty?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice, because that is what any warranty claim is handled against.",
      },
      {
        q: "What are the signs it's the battery?",
        a: "A slow crank, dim headlights, clicking or a battery warning light are the usual ones. If the car starts after a jump but dies again soon, replacement is the next step, and your driver can advise on site.",
      },
    ],
    primaryKeyword: "car battery replacement Mansfield TX",
    secondaryKeywords: ["mobile battery replacement Mansfield", "battery installation Mansfield", "car battery service Mansfield", "new car battery Mansfield"],
    longTail: ["mobile car battery replacement near me Mansfield", "battery replaced at home Mansfield", "car battery keeps dying Mansfield TX"],
    intent: "Commercial, convenience-led. Driveway and street-parking installs.",
    sourceUrls: [],
  },
  {
    city: "mansfield",
    service: "lockout",
    h1: "Car Lockout Service in Mansfield, TX",
    title: "Car Lockout Service Mansfield TX",
    metaDescription:
      "Locked out in Mansfield? TRA opens your car without damage downtown, off TX-360 or at home. Local DFW dispatch, day or night.",
    intro:
      "A locked car in Mansfield might be parked outside a shop in Downtown Mansfield, in a driveway, or in a lot off US-287 at the end of a long day. A TRA driver comes to the spot, confirms the car is yours and opens it using non-destructive methods whenever the vehicle allows. You don't have to leave it overnight.",
    scenarios: [
      "Keys on the seat after the door locked itself outside a shop in Downtown Mansfield.",
      "A company car that locked with the only key inside.",
      "Keys shut in the trunk during a move, which is a separate job from a door.",
      "A dead fob battery in a driveway, with the family waiting.",
    ],
    localContext:
      "Mansfield spreads across Tarrant, Johnson and Ellis counties, with TX-360 and US-287 as its main routes and Downtown Mansfield and Historic Mansfield among its recognized areas. Street parking there means the driver needs the exact block, so tell dispatch the street and the nearest business. The city borders Arlington and Grand Prairie.",
    faqs: [
      {
        q: "It's a company or borrowed car. Can you still open it?",
        a: "Yes, but the driver still has to confirm you're entitled to the vehicle. Tell dispatch the situation when you request help, and they will say what the driver needs to see.",
      },
      {
        q: "How do I describe where I am on a highway?",
        a: "Give the highway, the direction you're facing and the nearest cross street or exit. In Downtown Mansfield, the street name and the nearest business are enough.",
      },
      {
        q: "Will it damage the door or lock?",
        a: "Drivers use non-destructive entry whenever the vehicle allows. If a particular vehicle can't be opened safely without damage, the driver tells you before starting.",
      },
    ],
    primaryKeyword: "car lockout service Mansfield TX",
    secondaryKeywords: ["locked out of car Mansfield", "car unlock Mansfield TX", "auto lockout Mansfield", "vehicle lockout Mansfield"],
    longTail: ["locked keys in car Mansfield TX", "car unlock near me Mansfield", "locked keys in trunk Mansfield"],
    intent: "Emergency, near-me, immediate-dispatch.",
    sourceUrls: [],
  },
  {
    city: "mansfield",
    service: "jump-start",
    h1: "Jump Start Service in Mansfield, TX",
    title: "Jump Start Service Mansfield TX",
    metaDescription:
      "Car won't start in Mansfield? TRA brings a jump start to TX-360, US-287, Downtown Mansfield or your driveway. Local DFW dispatch, 24/7.",
    intro:
      "A car that dies on you in Mansfield is far more often a drained battery than a broken engine. A TRA driver comes to wherever it is parked or stopped, starts it with a jump, and lets you drive away without a tow. Whether you are in a driveway, a lot off US-287 or on a downtown street, you don't need to jump it yourself.",
    scenarios: [
      "A car that won't start after sitting over a weekend while the family was away.",
      "Headlights left on in a lot off TX-360.",
      "A dome light left on overnight in a driveway.",
      "A morning when the engine turns over slowly, then not at all.",
    ],
    localContext:
      "TX-360 and US-287 are Mansfield's main routes, and the city's reach across Tarrant, Johnson and Ellis counties means a call can come from the edge of town as easily as from Downtown Mansfield or Historic Mansfield. Mansfield borders Arlington and Grand Prairie, so tell dispatch the nearest cross street if you are close to either.",
    faqs: [
      {
        q: "Do I need a jump start or a new battery?",
        a: "If the battery still holds a charge, a jump start gets you moving. If it won't hold one, or it has needed several jumps, replacement is the better move. Your driver can advise on site.",
      },
      {
        q: "My car cut out while I was driving. Is that a jump start?",
        a: "Maybe not. A jump start is for a battery that is out of charge, and a car that dies while moving can have another cause. Tell dispatch exactly what happened. If you are in a live lane, call 911 first.",
      },
      {
        q: "Can you jump a car parked tight against the curb downtown?",
        a: "Usually, if the driver can get the equipment beside the battery and work safely. Tell dispatch how the car is parked and which way it faces.",
      },
    ],
    primaryKeyword: "jump start service Mansfield TX",
    secondaryKeywords: ["car battery jump start Mansfield", "dead battery Mansfield", "jump start near me Mansfield", "24 hour jump start Mansfield"],
    longTail: ["car won't start Mansfield TX help", "mobile jump start Mansfield", "dead battery downtown Mansfield"],
    intent: "Emergency, mobile, 24-hour.",
    sourceUrls: [],
  },
  {
    city: "mansfield",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Mansfield, TX",
    title: "Mobile Tire Repair Mansfield TX",
    metaDescription:
      "Nail in a tire in Mansfield? TRA plugs or patches the tread on site when the damage allows, at home, at work or downtown. Call or request online.",
    intro:
      "A tire that is a little lower every morning has usually picked up a screw or nail. If the puncture is in the tread and small, a TRA driver can plug or patch it where the car sits in Mansfield, whether that is a driveway or a lot off TX-360. You keep the tire you have, and your spare stays in the trunk.",
    scenarios: [
      "A tire that needs air every few days with no visible cause.",
      "A nail spotted in the tread after a run on US-287.",
      "A pressure warning that appeared after parking in Downtown Mansfield.",
      "A slow leak you want fixed before a weekend trip.",
    ],
    localContext:
      "TX-360 and US-287 are Mansfield's main routes, and a nail or screw picked up on either may only show itself days later, at home or in a lot. The city reaches into Tarrant, Johnson and Ellis counties and borders Arlington and Grand Prairie, so tell dispatch the street or highway and the nearest cross street.",
    faqs: [
      {
        q: "Should I drive to a shop instead?",
        a: "Try not to. Driving on a low tire damages it and the wheel, and can turn a repairable puncture into a replacement. A repair where the car sits avoids that risk.",
      },
      {
        q: "What if the damage is more than a puncture?",
        a: "Damage in or near the sidewall, or a hole that is too large, can't be repaired safely. The driver tells you, and the options are your spare, if it is usable, or a replacement tire we supply.",
      },
      {
        q: "Do I take the screw out first?",
        a: "No. Leave it in. While it is in the tread it partly seals the hole, and pulling it out usually turns a slow leak into a flat.",
      },
    ],
    primaryKeyword: "mobile tire repair Mansfield TX",
    secondaryKeywords: ["tire plug Mansfield", "tire patch Mansfield", "nail in tire Mansfield", "flat tire repair Mansfield TX"],
    longTail: ["screw in tire repair near me Mansfield", "slow leak tire repair Mansfield", "tire pressure light on Mansfield help"],
    intent: "Commercial-urgent, repair-before-replace.",
    sourceUrls: [],
  },

  // ===================== BURLESON =====================
  {
    city: "burleson",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Burleson, TX",
    title: "Flat Tire Change Burleson TX",
    metaDescription:
      "Flat tire in Burleson? If you have a usable spare, TRA puts it on along I-35W, TX-174 or in Old Town. Request roadside help online or call.",
    intro:
      "On I-35W, a flat tire is more than an inconvenience: it is a car stopped beside traffic moving at highway speed. If your vehicle has a usable spare, a TRA driver comes to Burleson, puts it on and tightens it properly, and you drive off without jacking the car up beside the lane. If you are in a live lane, or anyone is in danger, call 911 first.",
    scenarios: [
      "A blowout on I-35W with the shoulder as the only place to stop.",
      "A flat on TX-174 on the way into town.",
      "A tire found down on a street in Old Town Burleson.",
      "A slow leak that finished overnight in a driveway before a Monday commute.",
    ],
    localContext:
      "Burleson is mostly in northern Johnson County with a small part in Tarrant County, and I-35W and TX-174 are its main routes. Fort Worth and Crowley border it on the north. We change tires on both highways, in Old Town Burleson and in driveways across town, so give dispatch the highway, your direction and the nearest exit or cross street.",
    faqs: [
      {
        q: "How do I wait safely beside I-35W?",
        a: "Stay belted in with your hazards on, and don't stand beside the car while traffic passes. If you couldn't clear the lane, or anyone is in danger, call 911 first, then request help from us.",
      },
      {
        q: "Where would my spare be if my car has one?",
        a: "Check under the trunk floor, under the vehicle or on the back door, but only if it is safe to get out. A flat tire change uses the spare you already carry, so if you find none, tell dispatch and ask about tire replacement.",
      },
      {
        q: "The spare has been in the car for years. Will it do?",
        a: "Spares often sit untouched and can be soft or worn. Tell dispatch if you suspect yours is. If it can't be used, tire replacement supplies a tire and installs it on site.",
      },
    ],
    primaryKeyword: "flat tire change Burleson TX",
    secondaryKeywords: ["flat tire service Burleson", "tire change near me Burleson", "roadside tire change Burleson", "spare tire installation Burleson"],
    longTail: ["flat tire on I-35W Burleson", "change my flat tire Burleson TX", "flat tire TX-174 Burleson help"],
    intent: "Emergency, roadside-safety. Interstate shoulder risk.",
    sourceUrls: [],
  },
  {
    city: "burleson",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Burleson, TX",
    title: "Car Battery Replacement Burleson TX",
    metaDescription:
      "Car battery failing in Burleson? TRA brings a new one and installs it at home, at work or in Old Town. Includes a 1-year warranty.",
    intro:
      "Drivers who use I-35W or TX-174 give a battery a real test every day, and one that is failing usually announces it with a slow crank. We bring a new battery to your car and install it where it is parked, whether that is a driveway, a work lot or a street in Old Town Burleson. Dispatch confirms the right battery, and your total, before a driver is sent.",
    scenarios: [
      "A slow crank that has gotten worse each morning for a week.",
      "A car parked in Old Town that wouldn't start after dinner.",
      "A truck that sat in the driveway during a trip and now won't wake up.",
      "Two jumps in a month and a third on the way.",
    ],
    localContext:
      "Burleson's driving splits between I-35W and TX-174 for longer runs and short local trips in and around Old Town Burleson. Long runs keep a weak battery topped up, which is why it often fails after a short stop or after the car sits. We install across the city, which lies mostly in northern Johnson County with a small Tarrant County portion and borders Fort Worth and Crowley.",
    faqs: [
      {
        q: "Does the vehicle type matter?",
        a: "It can. Trucks, hybrids and some newer vehicles use different batteries, and replacement is for eligible vehicles and batteries. Give dispatch the year, make and model, and they confirm what applies before anyone is sent.",
      },
      {
        q: "Will a new battery fix a car that keeps dying?",
        a: "If the battery was the problem, yes. If the alternator isn't charging, a new battery would drain too, so your driver can advise before installing. We don't do mechanical repair, so a charging fault would be a shop job.",
      },
      {
        q: "Can you do this in a work lot with a gate?",
        a: "Yes, if the driver can reach the car and work safely. Give dispatch the business name, the gate or access details and the spot.",
      },
    ],
    primaryKeyword: "car battery replacement Burleson TX",
    secondaryKeywords: ["mobile battery replacement Burleson", "battery installation Burleson", "car battery service Burleson", "new car battery Burleson"],
    longTail: ["mobile car battery replacement near me Burleson", "battery replaced at work Burleson", "car battery keeps dying Burleson TX"],
    intent: "Commercial, convenience-led. Commuter and truck vehicles.",
    sourceUrls: [],
  },
  {
    city: "burleson",
    service: "lockout",
    h1: "Car Lockout Service in Burleson, TX",
    title: "Car Lockout Service Burleson TX",
    metaDescription:
      "Locked out in Burleson? TRA opens your car without damage in Old Town, off I-35W or at home. Local DFW dispatch, day or night.",
    intro:
      "Getting locked out in Burleson can happen at a stop off I-35W as easily as in a driveway. A TRA driver comes to the car, confirms it's yours and opens it using non-destructive methods whenever the vehicle allows, so you aren't left waiting beside a door you can't open.",
    scenarios: [
      "Keys locked inside at a gas stop just off I-35W.",
      "A fob that quit after an evening in Old Town Burleson.",
      "A set of keys visible through the window with the spare back at the house.",
      "Keys shut in the trunk after loading for a weekend away, a separate job from a door.",
    ],
    localContext:
      "Burleson is mostly in northern Johnson County with a small Tarrant County portion. I-35W and TX-174 are its main routes, Old Town Burleson is its recognized district, and Fort Worth and Crowley border it on the north. We open cars wherever they are parked, so give dispatch the street, the business name or the exit.",
    faqs: [
      {
        q: "My keys are lost, not locked inside. Can you still open the car?",
        a: "Opening the car doesn't depend on where the keys are, but a lockout won't start it. Tell dispatch the whole situation so they can say what we can do, and be ready to show the car is yours.",
      },
      {
        q: "Can you reach a car at a roadside stop off I-35W?",
        a: "Yes. Give dispatch the exit, the direction you were heading and the business name or nearest cross street. If you are in a live lane, or anyone is in danger, call 911 first.",
      },
      {
        q: "A child is locked inside. What do I do?",
        a: "If they are in danger, call 911 first. Then call us: a child or pet locked in a car is treated as urgent.",
      },
    ],
    primaryKeyword: "car lockout service Burleson TX",
    secondaryKeywords: ["locked out of car Burleson", "car unlock Burleson TX", "auto lockout Burleson", "vehicle lockout Burleson"],
    longTail: ["locked keys in car Burleson TX", "car unlock near me Burleson", "locked out off I-35W Burleson"],
    intent: "Emergency, near-me, immediate-dispatch.",
    sourceUrls: [],
  },
  {
    city: "burleson",
    service: "jump-start",
    h1: "Jump Start Service in Burleson, TX",
    title: "Jump Start Service Burleson TX",
    metaDescription:
      "Car won't start in Burleson? TRA brings a jump start to I-35W, Old Town or your driveway, big rigs included. Local DFW dispatch, 24/7.",
    intro:
      "Burleson's drivers use I-35W and TX-174, and a car or truck that won't start at either end of the trip usually has a drained battery. A TRA driver comes to the vehicle, jump starts it on the spot and gets you rolling without a tow. The service covers cars, pickups and semi trucks.",
    scenarios: [
      "A truck that sat in the driveway for two weeks and now only clicks.",
      "A car that won't start in Old Town Burleson after an evening out.",
      "A semi parked on a lot off I-35W that won't crank.",
      "A morning crank that has been slow for days and finally failed.",
    ],
    localContext:
      "Burleson lies mostly in northern Johnson County with a small piece of Tarrant County, along I-35W and TX-174, and Old Town Burleson is its recognized district. Fort Worth Spinks Airport lies on the northern edge of the city limits, and Fort Worth and Crowley border the city on the north. We hold no special access to airport property, so tell dispatch exactly where the vehicle is parked.",
    faqs: [
      {
        q: "The car cut out while I was driving. Is a jump start the answer?",
        a: "Maybe. A jump start is for a battery that is out of charge, and a car that dies while moving can have a different cause. Tell dispatch exactly what happened. If you are in a live lane, or anyone is in danger, call 911 first.",
      },
      {
        q: "My truck sat for two weeks. Will a jump start be enough?",
        a: "Usually, when the battery simply ran down while sitting. A battery near the end of its life may not hold the charge afterward, and your driver will tell you what they saw.",
      },
      {
        q: "Can you jump a vehicle on a business lot with a gate?",
        a: "Yes, provided the driver can reach it. Tell dispatch about the gate, any code and the exact spot.",
      },
    ],
    primaryKeyword: "jump start service Burleson TX",
    secondaryKeywords: ["car battery jump start Burleson", "dead battery Burleson", "jump start near me Burleson", "24 hour jump start Burleson"],
    longTail: ["semi truck jump start Burleson", "car won't start Burleson TX help", "mobile jump start Burleson"],
    intent: "Emergency, mobile, 24-hour. Includes cars, pickups and semi trucks.",
    sourceUrls: [],
  },
  {
    city: "burleson",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Burleson, TX",
    title: "Mobile Tire Repair Burleson TX",
    metaDescription:
      "Nail in your tire in Burleson? TRA plugs or patches the tread on site when the damage allows. Request help online or call.",
    intro:
      "A slow leak picked up on I-35W or TX-174 can go unnoticed until the tire is visibly low. When the puncture is in the tread and small enough, a TRA driver plugs or patches the tire where the car is parked in Burleson. You keep the tire you have, and the spare stays in the trunk.",
    scenarios: [
      "A pressure warning that returns every morning.",
      "A screw found in the tread while loading the car in Old Town Burleson.",
      "A tire that looks fine but needs air weekly.",
      "A low tire after a run on I-35W that you want fixed before another trip.",
    ],
    localContext:
      "I-35W and TX-174 are Burleson's main routes, and debris on highways like those is a steady source of nails and screws. The city lies mostly in northern Johnson County with a small part in Tarrant, and borders Fort Worth and Crowley. We repair tires in driveways, work lots and Old Town Burleson, wherever the car is sitting.",
    faqs: [
      {
        q: "What size of hole can be repaired?",
        a: "Only a small puncture in the tread, such as a nail or screw. A larger hole, or any damage in or near the sidewall, can't be safely repaired. The driver checks first and tells you which it is.",
      },
      {
        q: "Can I keep adding air instead?",
        a: "Only for a short while. A tire that keeps losing air has a leak, and driving on a low tire can damage it until it can't be repaired. It is better to fix it while the puncture is still repairable.",
      },
      {
        q: "The tire is beyond repair. What happens next?",
        a: "The options are your spare, if it is usable, or a replacement tire we supply and install on site. The driver explains what they found so you can decide there and then.",
      },
    ],
    primaryKeyword: "mobile tire repair Burleson TX",
    secondaryKeywords: ["tire plug Burleson", "tire patch Burleson", "nail in tire Burleson", "flat tire repair Burleson TX"],
    longTail: ["screw in tire repair near me Burleson", "slow leak tire repair Burleson", "tire pressure light on Burleson help"],
    intent: "Commercial-urgent, repair-before-replace.",
    sourceUrls: [],
  },

  // ===================== COLLEYVILLE =====================
  {
    city: "colleyville",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Colleyville, TX",
    title: "Flat Tire Change Colleyville TX",
    metaDescription:
      "Flat tire in Colleyville? With a usable spare, TRA puts it on along Colleyville Boulevard, TX-121 or at home. Call or request help online.",
    intro:
      "TX-26 (Colleyville Boulevard) runs through the middle of Colleyville and TX-121 runs along part of its eastern edge, so a flat here often happens on the way to somewhere else. If there is a usable spare in the vehicle, a TRA driver comes to you, puts it on and tightens it properly, and you carry on. No tow, and no changing a wheel beside a busy road.",
    scenarios: [
      "A flat on Colleyville Boulevard (TX-26) in the middle of an errand run.",
      "A blowout on TX-121 with traffic passing at highway speed.",
      "A tire that went soft overnight in the driveway, with the car blocking the garage.",
      "A spare you haven't touched in years, and no idea where the jack is.",
    ],
    localContext:
      "TX-26 (Colleyville Boulevard) bisects the city and TX-121 runs along part of its eastern edge. Seven cities border Colleyville: Southlake, Keller, Grapevine, Hurst, North Richland Hills, Euless and Bedford. It also lies close to Dallas/Fort Worth International Airport. With so many city lines nearby, tell dispatch the nearest cross street and which way you were heading.",
    faqs: [
      {
        q: "The tire pressure light is on, but the tire looks fine. Is that a flat?",
        a: "Possibly a slow leak. A tire can look normal and still be well under pressure. If you find a nail or screw in the tread, tire repair may be what you need; if the tire is flat, a flat tire change puts on the spare.",
      },
      {
        q: "My flat is on the traffic side of the car. Does that matter?",
        a: "It matters to the driver, who decides where it is safe to work. If you are on a shoulder, stay belted in and let them handle it. If you are in a live lane, call 911 first.",
      },
      {
        q: "Can I wait at a nearby store instead of with the car?",
        a: "If the car is somewhere safe, such as a parking lot, you can. Tell dispatch where you will be and keep your phone on, because we text or call when the driver is on the way.",
      },
    ],
    primaryKeyword: "flat tire change Colleyville TX",
    secondaryKeywords: ["flat tire service Colleyville", "tire change near me Colleyville", "roadside tire change Colleyville", "spare tire installation Colleyville"],
    longTail: ["flat tire on Colleyville Boulevard", "change my flat tire Colleyville TX", "flat tire TX-121 Colleyville help"],
    intent: "Emergency, roadside, near-me. Pass-through arterial driving.",
    sourceUrls: [],
  },
  {
    city: "colleyville",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Colleyville, TX",
    title: "Car Battery Replacement Colleyville TX",
    metaDescription:
      "Car battery failing in Colleyville? TRA brings a new one and installs it at your home or lot. Dispatch confirms the right battery first.",
    intro:
      "A battery rarely fails on a schedule that suits you. In Colleyville it is likely to give out in a driveway or a shop lot just when the car is needed, and the usual answer is a tow to a repair shop. We bring a new battery to the car and install it where it is parked instead, for eligible vehicles and batteries. The price on this page covers the battery and installing it, and dispatch confirms the right battery, and your total, before a driver is sent.",
    scenarios: [
      "A car that only clicks at the end of the driveway on a weekday morning.",
      "A dead battery in a shop lot off Colleyville Boulevard after a quick errand.",
      "A car that sat while the owners were away and now shows a dim dash.",
      "A battery that was jumped once and quit again days later.",
    ],
    localContext:
      "TX-26 (Colleyville Boulevard) bisects Colleyville, with TX-121 along part of its eastern edge, and short trips along those roads are hard on a battery, because the engine seldom runs long enough to recharge it. The city lies close to Dallas/Fort Worth International Airport and borders Southlake, Keller, Grapevine, Hurst, North Richland Hills, Euless and Bedford. We install batteries in driveways and lots on all sides of it.",
    faqs: [
      {
        q: "The car sat for weeks during a trip. Is the battery finished?",
        a: "Not necessarily. A battery can drain simply from sitting, and a jump may be enough. If it is old or has failed before, replacement is the better move. Describe what happened and your driver can advise.",
      },
      {
        q: "How will I know the total before anyone comes?",
        a: "Dispatch confirms the battery and your total with you before a driver is sent. The total is the battery replacement price plus the dispatch fee, which is added once for the job.",
      },
      {
        q: "What if I can't reach the VIN?",
        a: "Skip it. The year, make and model are enough to start. The VIN just confirms the exact battery when you can get to it easily.",
      },
    ],
    primaryKeyword: "car battery replacement Colleyville TX",
    secondaryKeywords: ["mobile battery replacement Colleyville", "battery installation Colleyville", "car battery service Colleyville", "new car battery Colleyville"],
    longTail: ["mobile car battery replacement near me Colleyville", "battery replaced at home Colleyville", "car battery keeps dying Colleyville TX"],
    intent: "Commercial, convenience-led. Driveway and shop-lot installs.",
    sourceUrls: [],
  },
  {
    city: "colleyville",
    service: "lockout",
    h1: "Car Lockout Service in Colleyville, TX",
    title: "Car Lockout Service Colleyville TX",
    metaDescription:
      "Locked out in Colleyville? TRA opens your car without damage on Colleyville Boulevard, near TX-121 or at home. Local DFW dispatch, day or night.",
    intro:
      "A locked car in Colleyville is usually a small mistake in an ordinary moment: the door pulled shut with the keys on the seat, a fob that stops responding at a store, a trunk closed over a key ring. A TRA driver comes to wherever the car is parked, confirms it's yours and opens it using non-destructive methods whenever the vehicle allows.",
    scenarios: [
      "Keys on the seat after the door closed behind you at a stop on Colleyville Boulevard.",
      "A fob that stopped responding in a shop lot, with no spare on you.",
      "A key ring shut in the trunk after loading, a separate job from opening a door.",
      "A car locked in the driveway with the engine still running.",
    ],
    localContext:
      "TX-26 (Colleyville Boulevard) splits the city in two, with TX-121 along part of its eastern edge, and lockouts here happen on side streets and in driveways as readily as in shop lots along those roads. Colleyville borders seven cities, including Southlake, Hurst and Euless, so give dispatch the nearest cross street and we find the car.",
    faqs: [
      {
        q: "I'm locked out of my spouse's car. Is that okay?",
        a: "Possibly. The driver has to confirm you are entitled to the vehicle, which for a family member's car depends on what you can show. Tell dispatch the situation when you call and they will say what the driver needs.",
      },
      {
        q: "My fob won't unlock the doors. Does that count as a lockout?",
        a: "Yes. A fob that no longer responds still leaves you locked out, and we open the vehicle the same way.",
      },
      {
        q: "A family member is bringing a spare key. Should I wait?",
        a: "That is your call. If the spare is close by, it may be the simplest fix. If it isn't, or you would rather not wait, we can open the car.",
      },
    ],
    primaryKeyword: "car lockout service Colleyville TX",
    secondaryKeywords: ["locked out of car Colleyville", "car unlock Colleyville TX", "auto lockout Colleyville", "vehicle lockout Colleyville"],
    longTail: ["locked keys in car Colleyville TX", "car unlock near me Colleyville", "locked keys in trunk Colleyville"],
    intent: "Emergency, near-me, immediate-dispatch.",
    sourceUrls: [],
  },

  // ===================== CROWLEY =====================
  {
    city: "crowley",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Crowley, TX",
    title: "Flat Tire Change Crowley TX",
    metaDescription:
      "Flat tire in Crowley? If you have a usable spare, TRA puts it on along FM 1187, FM 731, in Downtown Crowley or at home. Call or request online.",
    intro:
      "Crowley's center is the crossroads of FM 1187 and FM 731, and a flat on either road can leave you stopped where it is hard to say exactly where you are. If there is a usable spare in the vehicle, a TRA driver comes to you, puts it on and tightens it properly, and you drive on. Give dispatch the road, the direction you were heading and the nearest cross street.",
    scenarios: [
      "A flat on FM 1187 on the way into Downtown Crowley.",
      "A tire gone flat on FM 731 where the edge of the road is soft or uneven.",
      "A tire found flat outside a house in Crowley on a morning before work.",
      "A spare that has ridden in the trunk since the car was bought and never been checked.",
    ],
    localContext:
      "Crowley lies in southern Tarrant County with a small strip in Johnson County. Its center is the crossroads of FM 1187 and FM 731, with Downtown Crowley as its recognized district. Fort Worth borders it on the north and east and Burleson on the south, so a flat near the city line may be on either side of the boundary. Tell dispatch the nearest cross street and the direction you were facing.",
    faqs: [
      {
        q: "The edge of the road is soft. Can the spare still go on?",
        a: "Usually, if the driver can lift the car and work safely. Describe the surface when you request help, and stay clear of the road while you wait.",
      },
      {
        q: "How do I choose between a tire change, a repair and a replacement?",
        a: "With a usable spare, a flat tire change puts it on. If the puncture is in the tread, a repair keeps your tire. With no usable spare, or a tire beyond repair, tire replacement supplies one. If you are unsure, describe it when you request help.",
      },
      {
        q: "It's late and I can't see a thing. Can you still come?",
        a: "Yes, we work day or night. Turn on your hazards, stay in the vehicle with your seatbelt fastened if you are beside a road, and tell dispatch the road and the nearest cross street.",
      },
    ],
    primaryKeyword: "flat tire change Crowley TX",
    secondaryKeywords: ["flat tire service Crowley", "tire change near me Crowley", "roadside tire change Crowley", "spare tire installation Crowley"],
    longTail: ["flat tire on FM 1187 Crowley", "change my flat tire Crowley TX", "flat tire FM 731 Crowley help"],
    intent: "Emergency, roadside, near-me. FM-road driving in a smaller city.",
    sourceUrls: [],
  },
  {
    city: "crowley",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Crowley, TX",
    title: "Car Battery Replacement Crowley TX",
    metaDescription:
      "Car battery failing in Crowley? TRA brings a new one and installs it at home or in a lot. Dispatch confirms the total before anyone is sent.",
    intro:
      "A failed battery usually means a car stuck at home and a tow to a shop. We skip the tow: a TRA driver brings a new battery to Crowley and installs it where the car is parked, for eligible vehicles and batteries. The price on this page covers the battery and installing it. Dispatch checks which battery your vehicle takes and confirms your total before a driver is sent.",
    scenarios: [
      "A car that only clicks in the driveway before the morning commute.",
      "A truck that needed a jump twice this month.",
      "A car that won't start in Downtown Crowley after an hour inside a store.",
      "A battery with years on it, replaced before a trip instead of after a failure.",
    ],
    localContext:
      "Crowley's center is the crossroads of FM 1187 and FM 731, and short local trips along roads like those are hard on a battery because the engine rarely runs long enough to recharge it. We install batteries in driveways and lots across the city and in Downtown Crowley. It lies in southern Tarrant County with a small strip in Johnson County, and borders Fort Worth and Burleson.",
    faqs: [
      {
        q: "How do I know which battery my truck takes?",
        a: "You don't have to. Give dispatch the year, make and model and they work out the battery. If you can reach the VIN, it confirms the exact one.",
      },
      {
        q: "Can you work if the car is parked on gravel or grass?",
        a: "Usually, if the ground is firm enough for the driver to work safely beside the car. Tell dispatch what the surface is like.",
      },
      {
        q: "What happens if the new battery fails early?",
        a: "A battery replacement includes a 1-year warranty, so keep your invoice. That is what any warranty claim is handled against.",
      },
    ],
    primaryKeyword: "car battery replacement Crowley TX",
    secondaryKeywords: ["mobile battery replacement Crowley", "battery installation Crowley", "car battery service Crowley", "new car battery Crowley"],
    longTail: ["mobile car battery replacement near me Crowley", "battery replaced at home Crowley", "car battery keeps dying Crowley TX"],
    intent: "Commercial, convenience-led. Driveway installs for cars and trucks.",
    sourceUrls: [],
  },
  {
    city: "crowley",
    service: "lockout",
    h1: "Car Lockout Service in Crowley, TX",
    title: "Car Lockout Service Crowley TX",
    metaDescription:
      "Locked out in Crowley? TRA opens your car without damage, from Downtown Crowley to FM 1187 and FM 731. Local DFW dispatch, day or night.",
    intro:
      "A locked car in Crowley is a short job once a driver reaches it. A TRA driver comes to wherever the car is, confirms it's yours and opens it using non-destructive methods whenever the vehicle allows. There is no tow, and the car doesn't have to sit overnight.",
    scenarios: [
      "Keys on the seat of a truck at a work site along FM 731.",
      "A fob that gave up at a store in Downtown Crowley.",
      "Keys shut in the trunk after loading up for the weekend.",
      "A door that locked itself in the driveway as the family got into the other car.",
    ],
    localContext:
      "Crowley lies mostly in southern Tarrant County, with a small strip in Johnson County, and its center is the crossroads of FM 1187 and FM 731. Downtown Crowley is its recognized district. Fort Worth borders the city on the north and east and Burleson on the south. Give dispatch the road, the nearest cross street and any landmark, and the driver comes to the car.",
    faqs: [
      {
        q: "How do I tell you where I am on an FM road?",
        a: "Give the road, FM 1187, FM 731 or another, the direction you were heading and the nearest cross street or business. If your phone can share your location when you request help, do that too.",
      },
      {
        q: "What proof of ownership do you need?",
        a: "ID or another way to show the vehicle is yours. The driver confirms it before opening anything, and it protects the car's owner.",
      },
      {
        q: "Why is the trunk a separate job from a door?",
        a: "Reaching keys shut in a trunk takes longer and needs different tools than opening a door, so it is booked and priced separately. Tell dispatch where the keys are.",
      },
    ],
    primaryKeyword: "car lockout service Crowley TX",
    secondaryKeywords: ["locked out of car Crowley", "car unlock Crowley TX", "auto lockout Crowley", "vehicle lockout Crowley"],
    longTail: ["locked keys in car Crowley TX", "car unlock near me Crowley", "locked keys in trunk Crowley"],
    intent: "Emergency, near-me, immediate-dispatch.",
    sourceUrls: [],
  },

  // ===================== KENNEDALE =====================
  {
    city: "kennedale",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Kennedale, TX",
    title: "Flat Tire Change Kennedale TX",
    metaDescription:
      "Flat tire in Kennedale? If you have a usable spare, TRA puts it on along I-20, US-287 or at home. Request help online or call.",
    intro:
      "I-20 and US-287 both cross Kennedale, and a flat on either puts you on a shoulder with highway traffic close by. If you are in a live lane, or anyone is in danger, call 911 first. Once you are stopped safely and there is a usable spare in the vehicle, a TRA driver comes to you, puts it on and tightens it properly, and you drive on.",
    scenarios: [
      "A blowout on I-20 where the shoulder is the only place to stop.",
      "A flat on US-287 near the Arlington line.",
      "A tire found flat on a residential street when you step outside in the morning.",
      "A wheel that won't come off because the locking nut key is somewhere else.",
    ],
    localContext:
      "I-20 and US-287 are Kennedale's two routes, and the city lies in Tarrant County with Fort Worth and Arlington as its neighbors. A flat near the edge of town may be on the other side of a city line, so tell dispatch the highway, your direction and the nearest exit or cross street, and we find the car from there.",
    faqs: [
      {
        q: "Should I call 911 or TRA for a flat on I-20?",
        a: "Call 911 first if you are in a live lane, if anyone is hurt or if there is any danger. If you have reached a safe spot such as a shoulder, stay belted in with your hazards on and request help from us.",
      },
      {
        q: "I have a locking lug nut and can't find the key. What now?",
        a: "A missing wheel lock key is a separate service, rim lock removal, because the lock has to come off before the wheel can. Mention it when you request help so the driver comes prepared.",
      },
      {
        q: "What about the original tire after the spare goes on?",
        a: "The service puts on the spare so you can drive. Getting the original repaired or replaced afterward is a separate job you can arrange with us or elsewhere.",
      },
    ],
    primaryKeyword: "flat tire change Kennedale TX",
    secondaryKeywords: ["flat tire service Kennedale", "tire change near me Kennedale", "roadside tire change Kennedale", "spare tire installation Kennedale"],
    longTail: ["flat tire on I-20 Kennedale", "change my flat tire Kennedale TX", "flat tire US-287 Kennedale help"],
    intent: "Emergency, roadside-safety. Two highways through a small city.",
    sourceUrls: [],
  },
  {
    city: "kennedale",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Kennedale, TX",
    title: "Car Battery Replacement Kennedale TX",
    metaDescription:
      "Car battery failing in Kennedale? TRA brings a new battery and installs it at home or in a lot. Dispatch confirms the right one first.",
    intro:
      "When a battery gives out in Kennedale, the answer doesn't have to be a tow to a shop. A TRA driver brings a replacement to the car and installs it where it is parked, for eligible vehicles and batteries. The price on this page covers the battery and installing it, and dispatch confirms the right battery and your total before anyone is sent.",
    scenarios: [
      "A car that cranks slowly after a few days of short trips.",
      "A battery jumped once at the start of the month and failing again now.",
      "A vehicle left in the driveway through a long trip.",
      "Headlights that dim at a stoplight and a dash light that flickers on I-20.",
    ],
    localContext:
      "Kennedale's driving runs along I-20 and US-287, with Fort Worth and Arlington as its neighbors. Highway runs keep a battery charged, but the short hops at either end are what wear a weak one down. We install batteries across Kennedale, in driveways and parking lots, wherever the car is sitting.",
    faqs: [
      {
        q: "The car started after a jump and has been fine for days. Do I still need a battery?",
        a: "Maybe not immediately. If lights left on drained it, the battery may recover. If it has died more than once, or is several years old, replacement is the safer move. Your driver can advise.",
      },
      {
        q: "Can you help if the car died on the I-20 shoulder?",
        a: "If you are in a live lane or anyone is in danger, call 911 first. Once you have reached a safe spot, tell dispatch exactly where you are. Whether to jump or replace depends on the battery, and your driver can advise on site.",
      },
      {
        q: "How do I prepare the car before the driver comes?",
        a: "Turn off all electronics and accessories, pop the hood if it is safe to, and have the year, make and model ready.",
      },
    ],
    primaryKeyword: "car battery replacement Kennedale TX",
    secondaryKeywords: ["mobile battery replacement Kennedale", "battery installation Kennedale", "car battery service Kennedale", "new car battery Kennedale"],
    longTail: ["mobile car battery replacement near me Kennedale", "battery replaced at home Kennedale", "car battery keeps dying Kennedale TX"],
    intent: "Commercial, convenience-led.",
    sourceUrls: [],
  },
  {
    city: "kennedale",
    service: "lockout",
    h1: "Car Lockout Service in Kennedale, TX",
    title: "Car Lockout Service Kennedale TX",
    metaDescription:
      "Locked out in Kennedale? TRA opens your car without damage near I-20, US-287 or at home. Local DFW dispatch, day or night.",
    intro:
      "A locked car in Kennedale might be at a gas stop beside I-20, in a driveway or at the end of a shift. A TRA driver comes to the car, confirms it's yours and opens it with non-destructive methods whenever the vehicle allows, so you aren't left waiting beside a door you can't open.",
    scenarios: [
      "Keys locked inside at a stop off I-20.",
      "A borrowed car that locked with the only key inside.",
      "A dead fob battery in a store lot.",
      "A running car that locked behind you while you stepped out for a moment.",
    ],
    localContext:
      "I-20 and US-287 run through Kennedale, which lies in Tarrant County and borders Fort Worth and Arlington. The simplest way to guide a driver here is the nearest highway exit or cross street. Give dispatch that, and which side of the highway you are on.",
    faqs: [
      {
        q: "What if my vehicle can't be opened safely?",
        a: "The driver tells you before starting, not after. Most vehicles can be opened without damage, and if yours can't, you decide how to proceed.",
      },
      {
        q: "Where should I wait for the driver?",
        a: "Somewhere safe and well lit, close to the car. If you are beside I-20 or US-287, stay out of the traffic lane, and if you are in danger, call 911 first.",
      },
      {
        q: "Do I need ID to get my car opened?",
        a: "Yes, or another way to show the vehicle is yours. The driver confirms it on site before opening anything.",
      },
    ],
    primaryKeyword: "car lockout service Kennedale TX",
    secondaryKeywords: ["locked out of car Kennedale", "car unlock Kennedale TX", "auto lockout Kennedale", "vehicle lockout Kennedale"],
    longTail: ["locked keys in car Kennedale TX", "car unlock near me Kennedale", "locked out near I-20 Kennedale"],
    intent: "Emergency, near-me, immediate-dispatch.",
    sourceUrls: [],
  },

  // ===================== HALTOM CITY =====================
  {
    city: "haltom-city",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Haltom City, TX",
    title: "Flat Tire Change Haltom City TX",
    metaDescription:
      "Flat tire in Haltom City? If you have a usable spare, TRA puts it on along I-820, Denton Highway, TX-121 or TX-183. Call or request online.",
    intro:
      "Four highways run through or alongside Haltom City: I-820, US-377 (Denton Highway), TX-121 and TX-183. A flat here usually happens in traffic, so the first job is getting safely out of the lane. If there is a usable spare in the vehicle, a TRA driver comes to you, puts it on and tightens it properly. In a live lane, or if anyone is in danger, call 911 first.",
    scenarios: [
      "A blowout on I-820 with traffic close on both sides.",
      "A flat on Denton Highway (US-377) in the middle of an errand.",
      "A tire found down in a driveway, with a shift starting in an hour.",
      "A flat on a TX-121 or TX-183 ramp where you can't get far from the lane.",
    ],
    localContext:
      "I-820, US-377 (Denton Highway), TX-121 and TX-183 run through or alongside Haltom City, which sits about six miles from downtown Fort Worth. Fort Worth and North Richland Hills border it, so a flat can happen a block from a city line. Tell dispatch the highway, your direction and the nearest exit or cross street.",
    faqs: [
      {
        q: "Several highways meet here and I don't know which exit I passed. How do I tell you where I am?",
        a: "Give the highway you were on, your direction and the last exit or cross street you remember. If your phone can share your location when you request help, do that too.",
      },
      {
        q: "Could the flat be repaired instead of swapped?",
        a: "Often, if the puncture is in the tread. Tire repair is a separate service, and the driver can say which makes sense once they see the tire.",
      },
      {
        q: "I think the spare is soft. Should I say so?",
        a: "Yes. Spares go years without a check. If it can't be used, tire replacement supplies a tire and installs it on site, so telling dispatch up front avoids a wasted visit.",
      },
    ],
    primaryKeyword: "flat tire change Haltom City TX",
    secondaryKeywords: ["flat tire service Haltom City", "tire change near me Haltom City", "roadside tire change Haltom City", "spare tire installation Haltom City"],
    longTail: ["flat tire on I-820 Haltom City", "change my flat tire Haltom City TX", "flat tire Denton Highway help"],
    intent: "Emergency, roadside-safety. Four highways through one city.",
    sourceUrls: [],
  },
  {
    city: "haltom-city",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Haltom City, TX",
    title: "Car Battery Replacement Haltom City TX",
    metaDescription:
      "Car battery failing in Haltom City? TRA brings a new battery and installs it at home or work. Dispatch confirms the right one first.",
    intro:
      "A battery that is on its way out usually shows it the morning after a day of short stops. In Haltom City we bring a replacement to the car and install it where it sits, for eligible vehicles and batteries, so you keep the day and skip the tow. The price on this page covers the battery and installing it, and dispatch confirms the right battery and your total first.",
    scenarios: [
      "A car that cranks slower each morning before a shift.",
      "A vehicle that needed a jump after a weekend parked outside.",
      "A dash that flickers when you turn the key.",
      "A battery several years old that you'd rather swap on your own schedule.",
    ],
    localContext:
      "Haltom City is crossed or bordered by I-820, US-377 (Denton Highway), TX-121 and TX-183, about six miles from downtown Fort Worth. With Fort Worth and North Richland Hills on its borders, a quick run across a city line is a short hop, and short hops are hard on a battery because the engine rarely runs long enough to recharge it. We install in driveways, apartment lots and work lots.",
    faqs: [
      {
        q: "Can you do this at my apartment complex?",
        a: "Yes, if the driver can reach the car and work safely. Give dispatch the building, the parking spot and any gate code.",
      },
      {
        q: "How long will the car be out of use?",
        a: "It depends on where the battery sits. Some are under the hood; others are under a seat or behind panels and take longer. Dispatch tells you what to expect when they confirm the battery.",
      },
      {
        q: "Is there a warranty on the battery?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice, which is what warranty service is handled against.",
      },
    ],
    primaryKeyword: "car battery replacement Haltom City TX",
    secondaryKeywords: ["mobile battery replacement Haltom City", "battery installation Haltom City", "car battery service Haltom City", "new car battery Haltom City"],
    longTail: ["mobile car battery replacement near me Haltom City", "battery replaced at apartment Haltom City", "car battery keeps dying Haltom City"],
    intent: "Commercial, convenience-led. Apartment and work-lot installs.",
    sourceUrls: [],
  },
  {
    city: "haltom-city",
    service: "lockout",
    h1: "Car Lockout Service in Haltom City, TX",
    title: "Car Lockout Service Haltom City TX",
    metaDescription:
      "Locked out in Haltom City? TRA opens your car without damage near I-820, Denton Highway or at home. Local DFW dispatch, day or night.",
    intro:
      "A lockout in Haltom City is a short job once a driver reaches the car. A TRA driver comes to wherever it is parked, confirms it's yours and opens it using non-destructive methods whenever the vehicle allows. There is no tow and no damage to the door.",
    scenarios: [
      "Keys locked in at a stop off I-820.",
      "A fob that quit in an apartment lot at night.",
      "Keys in the trunk after unloading groceries.",
      "A door that locked itself at a gas pump on Denton Highway.",
    ],
    localContext:
      "Haltom City is crossed or bordered by I-820, US-377 (Denton Highway), TX-121 and TX-183, about six miles from downtown Fort Worth, and it borders Fort Worth and North Richland Hills. Give dispatch the street, the nearest cross street or the business name, and the driver goes straight to the car.",
    faqs: [
      {
        q: "Can you open a car in an apartment lot or behind a gate?",
        a: "Yes, if the driver can reach it. Give dispatch the complex, the spot and any gate code.",
      },
      {
        q: "A child or pet is locked in the car. What now?",
        a: "If they are in danger, call 911 first. Then call us: a child or pet locked in a car is treated as urgent.",
      },
      {
        q: "Are keys in the trunk the same job?",
        a: "No. Reaching a trunk is a different job from opening a door, so it is booked and priced separately. Tell dispatch where the keys are.",
      },
    ],
    primaryKeyword: "car lockout service Haltom City TX",
    secondaryKeywords: ["locked out of car Haltom City", "car unlock Haltom City TX", "auto lockout Haltom City", "vehicle lockout Haltom City"],
    longTail: ["locked keys in car Haltom City TX", "car unlock near me Haltom City", "locked keys in trunk Haltom City"],
    intent: "Emergency, near-me, immediate-dispatch.",
    sourceUrls: [],
  },

  // ===================== SAGINAW =====================
  {
    city: "saginaw",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Saginaw, TX",
    title: "Flat Tire Change Saginaw TX",
    metaDescription:
      "Flat tire in Saginaw? If you have a usable spare, TRA puts it on along I-820, Main Street or Blue Mound Road, or at home. Call or request online.",
    intro:
      "Saginaw is an inner suburb of Fort Worth, and a flat here usually comes on one of three roads: I-820, Main Street (Business US-287) or Blue Mound Road (FM 156). If there is a usable spare in the vehicle, a TRA driver comes to you, puts it on and tightens it properly, and you carry on. You never jack the car up beside traffic.",
    scenarios: [
      "A blowout on I-820 where the shoulder is the only room you have.",
      "A flat on Main Street (Business US-287) outside a store.",
      "A tire down on Blue Mound Road (FM 156) on the way to work.",
      "A tire found flat in the driveway before the first errand of the day.",
    ],
    localContext:
      "I-820, Business US-287 (Main Street) and FM 156 (Blue Mound Road) are Saginaw's routes, and rail lines run through the middle of town. Fort Worth is the only served city that borders it, so give dispatch the street and the nearest cross street and the driver finds the car whichever side of the line you are on.",
    faqs: [
      {
        q: "What's the difference between a flat tire change and a tire replacement?",
        a: "A flat tire change puts on the spare you already carry. Tire replacement is for when there is no usable spare or the tire is beyond repair: we supply the tire and install it.",
      },
      {
        q: "How long will the spare last?",
        a: "Most spares are limited in speed and distance, shown on the spare or in your owner's manual. Your driver will tell you what yours allows so you can plan the next step.",
      },
      {
        q: "How do I wait safely on I-820?",
        a: "Stay belted in with your hazards on and away from the traffic side. If you couldn't clear a live lane, or anyone is in danger, call 911 first.",
      },
    ],
    primaryKeyword: "flat tire change Saginaw TX",
    secondaryKeywords: ["flat tire service Saginaw", "tire change near me Saginaw", "roadside tire change Saginaw", "spare tire installation Saginaw"],
    longTail: ["flat tire on I-820 Saginaw", "change my flat tire Saginaw TX", "flat tire Blue Mound Road Saginaw"],
    intent: "Emergency, roadside, near-me. Inner-suburb routes.",
    sourceUrls: [],
  },
  {
    city: "saginaw",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Saginaw, TX",
    title: "Car Battery Replacement Saginaw TX",
    metaDescription:
      "Car battery failing in Saginaw? TRA brings a new one and installs it at home or work. Dispatch confirms the right battery first.",
    intro:
      "A weakening battery gives the same warning every time: a slower crank, then a click, then nothing. In Saginaw, TRA brings a replacement to the car and installs it there, so there is no tow and no waiting around at a shop. The price on this page covers the battery and installing it, for eligible vehicles and batteries, and dispatch confirms the right battery and your total before a driver is sent.",
    scenarios: [
      "A car that clicks in the driveway before the first errand.",
      "A dead battery in a store lot on Blue Mound Road.",
      "A truck that needed a jump twice in a week.",
      "A battery that fails every time the car sits over a weekend.",
    ],
    localContext:
      "Saginaw's routes are I-820, Main Street (Business US-287) and Blue Mound Road (FM 156), and the city is an inner suburb of Fort Worth with rail lines through the middle. Short runs to nearby stores and back are hard on a weak battery, because the engine rarely runs long enough to recharge it. We install across the city, in driveways and lots.",
    faqs: [
      {
        q: "I've jumped it twice this week. Is it time to replace it?",
        a: "Probably. A battery that needs repeated jumps is no longer holding a charge, and replacement is the lasting fix. Your driver can advise on site if you are unsure.",
      },
      {
        q: "Does the type of vehicle change anything?",
        a: "It can. Trucks and some newer vehicles use different batteries, and replacement is for eligible vehicles and batteries. Dispatch confirms what applies before anyone is sent.",
      },
      {
        q: "What do you need from me?",
        a: "Your exact location and the vehicle's year, make and model. The VIN is optional but confirms the exact battery if you can reach it.",
      },
    ],
    primaryKeyword: "car battery replacement Saginaw TX",
    secondaryKeywords: ["mobile battery replacement Saginaw", "battery installation Saginaw", "car battery service Saginaw", "new car battery Saginaw"],
    longTail: ["mobile car battery replacement near me Saginaw", "battery replaced at home Saginaw", "car battery keeps dying Saginaw TX"],
    intent: "Commercial, convenience-led.",
    sourceUrls: [],
  },
  {
    city: "saginaw",
    service: "lockout",
    h1: "Car Lockout Service in Saginaw, TX",
    title: "Car Lockout Service Saginaw TX",
    metaDescription:
      "Locked out in Saginaw? TRA opens your car without damage on Main Street, Blue Mound Road or at home. Local DFW dispatch, day or night.",
    intro:
      "Locked out in Saginaw, the quickest way back in is a driver who comes to you. A TRA driver reaches the car wherever it is parked, confirms it's yours and opens it using non-destructive methods whenever the vehicle allows, with no tow and no damage to the door.",
    scenarios: [
      "Keys on the seat after a stop on Main Street (Business US-287).",
      "A fob that stopped working in a Blue Mound Road lot.",
      "A pet inside a hot car, where you call 911 first if it is in danger, then us.",
      "Keys shut in the trunk at the end of a grocery run.",
    ],
    localContext:
      "Saginaw is an inner suburb of Fort Worth, with I-820, Main Street (Business US-287) and Blue Mound Road (FM 156) as its routes and rail lines through the middle of town. Fort Worth borders it, so give dispatch the street and the nearest cross street or business, and the driver comes straight to the car.",
    faqs: [
      {
        q: "How do I describe my location in a lot with no address?",
        a: "Give the business name, the nearest street and the part of the lot you are in. A landmark such as a store entrance helps.",
      },
      {
        q: "What ID should I show?",
        a: "Something that links you to the vehicle, such as a driver's license that matches the registration. The driver confirms ownership on site before opening anything.",
      },
      {
        q: "Will the lock or door be damaged?",
        a: "Drivers use non-destructive entry whenever the vehicle allows. If yours can't be opened safely without damage, the driver tells you before starting.",
      },
    ],
    primaryKeyword: "car lockout service Saginaw TX",
    secondaryKeywords: ["locked out of car Saginaw", "car unlock Saginaw TX", "auto lockout Saginaw", "vehicle lockout Saginaw"],
    longTail: ["locked keys in car Saginaw TX", "car unlock near me Saginaw", "locked keys in trunk Saginaw"],
    intent: "Emergency, near-me, immediate-dispatch.",
    sourceUrls: [],
  },

  // ===================== BENBROOK =====================
  {
    city: "benbrook",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Benbrook, TX",
    title: "Flat Tire Change Benbrook TX",
    metaDescription:
      "Flat tire in Benbrook? If you have a usable spare, TRA puts it on along I-20, Benbrook Highway or near the lake. Call or request online.",
    intro:
      "Benbrook sits in the southwestern corner of Tarrant County, with Benbrook Lake as its main body of water, and a flat here can come on I-20, on Benbrook Highway or on a road near the lake. If there is a usable spare in the vehicle, a TRA driver comes to you, puts it on and tightens it properly. In a live lane, or if anyone is in danger, call 911 first.",
    scenarios: [
      "A blowout on I-20 where the shoulder is the only place to stop.",
      "A flat on Benbrook Highway (US-377) while running errands.",
      "A low tire found after a day at Benbrook Lake.",
      "A slow leak that finished overnight in a driveway.",
    ],
    localContext:
      "I-20, US-377 (Benbrook Highway) and TX-183 serve Benbrook, which borders Fort Worth. Benbrook Lake is the city's main body of water, so calls can come from roads around it as well as from the highways. Tell dispatch the road, your direction and the nearest cross street or exit.",
    faqs: [
      {
        q: "A lug nut on my wheel is rounded off. Who handles that?",
        a: "It can. Stripped lug nut removal is a separate service, so mention it when you request help and the driver comes prepared.",
      },
      {
        q: "I can't find the jack. Do I need it?",
        a: "No. The driver brings the tools. You only need to say where the spare is carried.",
      },
      {
        q: "Does it matter which side the flat is on?",
        a: "It matters to the driver, who decides where it is safe to work. On a shoulder, stay belted in and let them handle it.",
      },
    ],
    primaryKeyword: "flat tire change Benbrook TX",
    secondaryKeywords: ["flat tire service Benbrook", "tire change near me Benbrook", "roadside tire change Benbrook", "spare tire installation Benbrook"],
    longTail: ["flat tire on I-20 Benbrook", "change my flat tire Benbrook TX", "flat tire Benbrook Highway help"],
    intent: "Emergency, roadside, near-me. Highway and lake-area driving.",
    sourceUrls: [],
  },
  {
    city: "benbrook",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Benbrook, TX",
    title: "Car Battery Replacement Benbrook TX",
    metaDescription:
      "Car battery failing in Benbrook? TRA brings a new battery and installs it at home or in a lot. Dispatch confirms the right one first.",
    intro:
      "A battery that dies after a day at the lake is a miserable end to it, and one that dies in your driveway isn't much better. In Benbrook a TRA driver brings a replacement to the car and installs it where it is parked, for eligible vehicles and batteries. The price on this page covers the battery and installing it, and dispatch confirms the right battery and your total first.",
    scenarios: [
      "A car that won't start in a lot after a day at Benbrook Lake.",
      "A truck that needed a jump on Friday and again on Monday.",
      "A vehicle that sat in the driveway over a long weekend away.",
      "Dim headlights and a slow crank on a cold morning before I-20 traffic.",
    ],
    localContext:
      "Benbrook's driving runs on I-20, US-377 (Benbrook Highway) and TX-183, with Benbrook Lake as the city's main body of water and Fort Worth as its only served neighbor. Highway runs charge a battery, but a car that sits at the lake or at home for days doesn't get that, and a weak battery gives out.",
    faqs: [
      {
        q: "Does a truck or hybrid need a different battery?",
        a: "Often, yes. Replacement is for eligible vehicles and batteries, so give dispatch the year, make and model and they confirm what applies.",
      },
      {
        q: "Will a new battery fix a car that dies on the road?",
        a: "Only if the battery was the cause. If the alternator isn't charging, a new battery would drain too. Describe what happened and your driver can advise before installing.",
      },
      {
        q: "Can you replace it in a parking lot?",
        a: "Usually, if the driver can work safely beside the car. Tell dispatch the lot, the nearest road and a landmark.",
      },
    ],
    primaryKeyword: "car battery replacement Benbrook TX",
    secondaryKeywords: ["mobile battery replacement Benbrook", "battery installation Benbrook", "car battery service Benbrook", "new car battery Benbrook"],
    longTail: ["mobile car battery replacement near me Benbrook", "battery replaced at home Benbrook", "car battery keeps dying Benbrook TX"],
    intent: "Commercial, convenience-led.",
    sourceUrls: [],
  },
  {
    city: "benbrook",
    service: "lockout",
    h1: "Car Lockout Service in Benbrook, TX",
    title: "Car Lockout Service Benbrook TX",
    metaDescription:
      "Locked out in Benbrook? TRA opens your car without damage near I-20, Benbrook Lake or at home. Local DFW dispatch, day or night.",
    intro:
      "Locked out in Benbrook, whether in a driveway or a parking area near the lake, the fix is a driver who comes to you. A TRA driver reaches the car, confirms it's yours and opens it using non-destructive methods whenever the vehicle allows. No tow, no damage, and no need to leave the car overnight.",
    scenarios: [
      "Keys locked in after a day at Benbrook Lake.",
      "A rented vehicle that locked with the key inside.",
      "A fob that died while loading on a hot afternoon.",
      "Keys shut in the trunk after loading a cooler.",
    ],
    localContext:
      "Benbrook lies in the southwestern corner of Tarrant County, with I-20, US-377 (Benbrook Highway) and TX-183 running through or alongside it and Benbrook Lake as its main body of water. Fort Worth is its only served neighbor. Near the lake a lot may have no obvious address, so give dispatch the nearest road and a landmark.",
    faqs: [
      {
        q: "I'm locked out at the lake. How do I tell you where I am?",
        a: "Give the nearest road, the name of the area or lot and a landmark. If your phone can share your location when you request help, do that too.",
      },
      {
        q: "Can you open a car that isn't registered to me?",
        a: "Possibly, but the driver must confirm you are entitled to it. Tell dispatch the situation, and they will say what the driver needs to see.",
      },
      {
        q: "What ID do I need?",
        a: "ID or another way to show the vehicle is yours. The driver confirms it before opening anything.",
      },
    ],
    primaryKeyword: "car lockout service Benbrook TX",
    secondaryKeywords: ["locked out of car Benbrook", "car unlock Benbrook TX", "auto lockout Benbrook", "vehicle lockout Benbrook"],
    longTail: ["locked keys in car Benbrook TX", "car unlock near me Benbrook", "locked out at Benbrook Lake"],
    intent: "Emergency, near-me, immediate-dispatch.",
    sourceUrls: [],
  },
];
