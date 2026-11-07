import type { CityServiceContent } from "./city-service-pages";

/** City x Service pages for cities already on the site. The rules are at the top of city-service-pages.ts. */
export const PAGES_CORE: CityServiceContent[] = [
  // ===================== ARLINGTON =====================
  {
    city: "arlington",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Arlington, TX",
    title: "Mobile Tire Repair Arlington TX",
    metaDescription:
      "Slow leak or a nail in your tire in Arlington? TRA plugs or patches tread punctures where the car is parked, when the damage allows. Call now.",
    intro:
      "A slow leak is the best kind of tire problem to have, because it can still be repaired. In Arlington, where I-20, I-30 and US-287 all cross the city, a soft tire and interstate speed make a bad pairing. When the puncture is in the tread, a TRA driver plugs or patches it where the car is parked: a driveway, an apartment lot or a workplace lot. Your spare stays in the trunk.",
    scenarios: [
      "A pressure light that came on after a week of commuting on I-30.",
      "A nail found in the tread of a car parked in an apartment complex lot.",
      "A tire that is lower than the other three every morning.",
      "A puncture noticed on a Saturday, before a drive on I-20 to Grand Prairie.",
    ],
    localContext:
      "Arlington is in Tarrant County and borders Grand Prairie, Fort Worth, Mansfield and Kennedale. I-20 and I-30 cross the city, and US-287 runs through Arlington and on through Mansfield and Kennedale. We repair tires wherever the car is parked, from lots in the Entertainment District to driveways across town, so a slow leak gets fixed before it meets one of those roads.",
    faqs: [
      {
        q: "Can you repair a tire in an apartment complex lot?",
        a: "Usually, if the driver can work safely around the car. Give dispatch the complex, the building or the parking area, and where in it the car sits.",
      },
      {
        q: "The leak is slow. Can I keep driving on it for a few days?",
        a: "It's better not to. Avoid driving further on a visibly low tire, because it can damage the wheel as well as the tire, and a slow leak can turn into a flat at highway speed.",
      },
      {
        q: "What if the damage turns out to be in the sidewall?",
        a: "Damage in or near the sidewall, or a hole beyond a certain size, can't be safely repaired. The driver tells you which it is, and the choices are your spare or a replacement tire supplied by us.",
      },
    ],
    primaryKeyword: "mobile tire repair Arlington TX",
    secondaryKeywords: ["tire plug Arlington", "tire patch Arlington", "nail in tire Arlington", "flat tire repair Arlington TX"],
    longTail: ["slow leak tire repair Arlington", "screw in tire repair near me Arlington", "tire pressure light on Arlington TX"],
    intent: "Commercial-urgent, repair-before-replace; interstate-commuter slow leaks. Fills the Arlington tire repair gap; built from the TRA service catalog.",
    sourceUrls: [],
  },
  {
    city: "arlington",
    service: "tire-replacement",
    h1: "Roadside Tire Replacement in Arlington, TX",
    title: "Tire Replacement Arlington TX",
    metaDescription:
      "Tire beyond repair in Arlington, or no usable spare? TRA brings a replacement tire and installs it where the car is. Tire availability varies.",
    intro:
      "Some tires cannot be repaired: a blowout on I-20, a sidewall cut, a hole too big to plug. If the spare is missing, flat or not one you want to run on, the tire has to be replaced before the car can go anywhere. We bring a replacement tire to wherever the car is in Arlington and install it there. The price shown on this page covers the tire, supplied by us, and installing it. Tire availability varies, so dispatch confirms one is available, and your total, before a driver is sent.",
    scenarios: [
      "A blowout on I-30 that left the tire in pieces.",
      "A sidewall bulge noticed in the driveway before leaving for work.",
      "A flat on a car whose spare is flat as well.",
      "A newer car that came with no spare at all.",
    ],
    localContext:
      "Arlington is in Tarrant County and borders Fort Worth, Grand Prairie, Mansfield and Kennedale. I-20 and I-30 carry the fast traffic, with US-287 also running through the city. A tire that fails on any of them cannot be driven on to a shop, which is why the replacement comes to the car instead.",
    faqs: [
      {
        q: "Where do I find my tire size?",
        a: "On the tire's sidewall, for example 235/55R18, or on the sticker inside the driver's door jamb. Read it only if you can do so safely, and give it to dispatch so the right tire is sent.",
      },
      {
        q: "What if the exact tire isn't available?",
        a: "Tire availability varies by size. Dispatch confirms a tire is available before a driver is sent, so you know before anyone sets out.",
      },
      {
        q: "Can I drive to a shop on the flat?",
        a: "No. Driving further on a flat damages the wheel as well as the tire. Pull as far from traffic as you can, turn on your hazards and call. If you are in a live lane, call 911 first.",
      },
    ],
    primaryKeyword: "tire replacement Arlington TX",
    secondaryKeywords: ["mobile tire replacement Arlington", "roadside tire replacement Arlington", "tire blowout help Arlington", "no spare tire help Arlington"],
    longTail: ["blown tire on I-30 Arlington", "need a tire replaced at home Arlington", "no spare tire Arlington TX"],
    intent: "Emergency, no-spare or damage-beyond-repair. Fills the Arlington tire replacement gap; built from the TRA service catalog.",
    sourceUrls: [],
  },

  // ===================== IRVING =====================
  {
    city: "irving",
    service: "tire-replacement",
    h1: "Roadside Tire Replacement in Irving, TX",
    title: "Tire Replacement Irving TX",
    metaDescription:
      "Ruined tire in Irving and no usable spare? TRA brings a replacement tire and installs it in Las Colinas, Valley Ranch or on the road. Availability varies.",
    intro:
      "Part of DFW International Airport lies inside Irving's city limits, and rentals and unfamiliar cars are a normal part of the traffic. A tire that cannot be repaired on a car like that is a particular problem: the spare may be a sealant kit or nothing at all, and you may not know where the nearest tire shop is. We bring a replacement tire to the car and install it there, so the car does not have to go anywhere on a ruined tire. Tire availability varies, so dispatch confirms one is available, and your total, before a driver is sent.",
    scenarios: [
      "A rental car with a shredded tire and no spare in the trunk.",
      "A blowout on the Airport Freeway that ruined the tire past repair.",
      "A sidewall cut from a curb in a Las Colinas garage.",
      "A tire that gave up at home in Valley Ranch the night before a trip.",
    ],
    localContext:
      "Irving is in Dallas County and borders Dallas, Coppell, Grand Prairie, Grapevine, Euless and Fort Worth. TX-183 (Airport Freeway), I-635, TX-114 (John Carpenter Freeway) and the President George Bush Turnpike cross it, and Las Colinas and Valley Ranch are its recognized districts. We replace tires wherever the car is parked in the city.",
    faqs: [
      {
        q: "It's a rental. Can you still replace the tire?",
        a: "Tell dispatch it is a rental and give the vehicle details. Rental agreements often say what to do about tire trouble, so check yours for roadside instructions and let the rental company know too.",
      },
      {
        q: "The car is in airport-area parking. Can you reach it?",
        a: "Tell dispatch the lot and the nearest entrance. We hold no special access at the airport, so dispatch will say plainly whether a driver can get to that spot.",
      },
      {
        q: "I don't know this car well. How do I find the tire size?",
        a: "Look at the sidewall for a code like 235/55R18, or at the sticker inside the driver's door jamb. If you cannot find either safely, give dispatch the year, make and model and they will work from there.",
      },
    ],
    primaryKeyword: "tire replacement Irving TX",
    secondaryKeywords: ["mobile tire replacement Irving", "roadside tire replacement Irving", "rental car flat tire Irving", "no spare tire Irving"],
    longTail: ["blown tire on Airport Freeway Irving", "rental car tire replacement Irving TX", "tire replaced at hotel Irving"],
    intent: "Emergency, no-spare or damage-beyond-repair; rental and traveler cars near the airport. Fills the Irving tire replacement gap; built from the TRA service catalog.",
    sourceUrls: [],
  },

  // ===================== GRAND PRAIRIE =====================
  {
    city: "grand-prairie",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Grand Prairie, TX",
    title: "Mobile Tire Repair Grand Prairie TX",
    metaDescription:
      "Nail or screw in a tire in Grand Prairie? TRA plugs or patches tread punctures on site, from Belt Line Road to Pioneer Parkway. Call now.",
    intro:
      "Grand Prairie is a long city with a busy grid of arterials and highways, and a tire that is losing air on any of them is worth dealing with early. When the puncture is in the tread, a TRA driver plugs or patches it where the car is parked, so you skip the wait at a tire shop and the swap to a spare. The driver checks the damage first and tells you whether it can be repaired.",
    scenarios: [
      "A screw found in the tread after a drive along Belt Line Road.",
      "A tire that is low again after a trip on TX-360.",
      "A nail spotted in a tire at an apartment complex off Main Street.",
      "A pressure warning that keeps coming back after a stop at the air pump.",
    ],
    localContext:
      "Grand Prairie spans Dallas, Tarrant and Ellis counties, with a small part in Johnson County, and borders Dallas, Arlington, Irving, Fort Worth, Mansfield, Cedar Hill and Midlothian. I-20, I-30, TX-360, the President George Bush Turnpike, Pioneer Parkway (Spur 303), Main Street (TX-180) and Belt Line Road all serve the city. We repair tires wherever the car is parked, at home or at work, rather than where it finally gives out.",
    faqs: [
      {
        q: "I can't find the puncture. Can the driver?",
        a: "The driver checks the tire for the leak. If nothing is in the tread, the cause may be elsewhere, such as the valve stem, and they will tell you what they found.",
      },
      {
        q: "Do I need to bring the car anywhere?",
        a: "No. The driver comes to the car, wherever in Grand Prairie it is parked. Tell dispatch the nearest major road and cross street, since the city is long and spans four counties.",
      },
      {
        q: "Is repairing always better than replacing?",
        a: "When the puncture is in the tread, a plug or patch repairs the tire without replacing it. If the damage is in or near the sidewall, or a hole is beyond a certain size, replacement is the only safe option.",
      },
    ],
    primaryKeyword: "mobile tire repair Grand Prairie TX",
    secondaryKeywords: ["tire plug Grand Prairie", "tire patch Grand Prairie", "nail in tire Grand Prairie", "flat tire repair Grand Prairie TX"],
    longTail: ["slow leak tire repair Grand Prairie", "screw in tire repair near me Grand Prairie", "tire pressure light on Grand Prairie TX"],
    intent: "Commercial-urgent, repair-before-replace; arterial-road punctures across a long four-county city. Fills the Grand Prairie tire repair gap; built from the TRA service catalog.",
    sourceUrls: [],
  },
  {
    city: "grand-prairie",
    service: "tire-replacement",
    h1: "Roadside Tire Replacement in Grand Prairie, TX",
    title: "Tire Replacement Grand Prairie TX",
    metaDescription:
      "Tire beyond repair in Grand Prairie? TRA brings a replacement tire and installs it where the car sits. Tire availability varies. Call now.",
    intro:
      "A tire that cannot be repaired has to be matched exactly, and vehicles in Grand Prairie come in every size. We supply a replacement and install it where the car is parked, so you are not driving on a ruined tire to find one. Tire availability varies by size, so the most useful thing you can give dispatch is the size printed on the sidewall. The price shown on this page covers the tire, supplied by us, and installing it.",
    scenarios: [
      "A pickup with a shredded tire and no matching spare.",
      "A sidewall cut from hitting a curb on Main Street.",
      "A tire with a hole too big to plug.",
      "A blowout on I-20 or TX-360 with the spare missing.",
    ],
    localContext:
      "Grand Prairie runs a long way across Dallas, Tarrant and Ellis counties, with a small part in Johnson County, and borders Dallas, Arlington, Irving, Fort Worth, Mansfield, Cedar Hill and Midlothian. Because the city is so long, where you are matters: give dispatch the nearest major road, such as I-20, I-30, TX-360 or Belt Line Road, and the cross street.",
    faqs: [
      {
        q: "My wheel has a locking nut and the key is missing. Can the tire still be replaced?",
        a: "The lock has to come off before the wheel can, and removing it is a separate service. Mention it when you request the tire so the driver comes prepared.",
      },
      {
        q: "How do I help the driver find me in such a long city?",
        a: "Give the nearest major road, the cross street and your direction of travel, plus a landmark if there is one. Grand Prairie spans four counties, so a street name alone can be ambiguous.",
      },
      {
        q: "Could a repair have been enough?",
        a: "If the damage is a small puncture in the tread, tire repair may be all you need. Describe what happened when you request help and dispatch can tell you which service fits.",
      },
    ],
    primaryKeyword: "tire replacement Grand Prairie TX",
    secondaryKeywords: ["mobile tire replacement Grand Prairie", "roadside tire replacement Grand Prairie", "tire blowout help Grand Prairie", "no spare tire help Grand Prairie"],
    longTail: ["blown tire on I-20 Grand Prairie", "need a tire replaced at home Grand Prairie", "sidewall damage tire Grand Prairie TX"],
    intent: "Emergency, no-spare or damage-beyond-repair; size-matching across a four-county city. Fills the Grand Prairie tire replacement gap; built from the TRA service catalog.",
    sourceUrls: [],
  },

  // ===================== GARLAND =====================
  {
    city: "garland",
    service: "tire-replacement",
    h1: "Roadside Tire Replacement in Garland, TX",
    title: "Tire Replacement Garland TX",
    metaDescription:
      "Tire damaged beyond repair in Garland? TRA brings a replacement tire and installs it where the car is, from Firewheel to I-30. Availability varies.",
    intro:
      "A bulge in the sidewall, a cut from a curb or a blowout means the tire is finished, and driving on it any further risks the wheel as well. TRA brings a replacement tire to the car in Garland and installs it there. The price shown on this page covers the tire, supplied by us, and installing it. Tire availability varies by size, so dispatch confirms a tire is available, and your total, before a driver is sent.",
    scenarios: [
      "A sidewall bulge noticed when backing out of the driveway.",
      "A blowout on I-30 that shredded the tire.",
      "A tire damaged by a curb near Historic Downtown Garland.",
      "A flat in the Firewheel area with a spare that is flat too.",
    ],
    localContext:
      "Garland spans Dallas, Collin and Rockwall counties and borders Dallas, Mesquite, Richardson, Rowlett and Sachse. I-30, I-635, TX-66, TX-78, the President George Bush Turnpike and Belt Line Road cross it, and Historic Downtown Garland, the Travis College Hill Historic District and Firewheel are among its recognized areas. We replace tires at the car, whether it is on a residential street, in a retail lot or beside a highway.",
    faqs: [
      {
        q: "I only have a compact spare. Should I just use it?",
        a: "If it is usable, a flat tire change puts it on. Compact spares are made for limited use, so replacement is the better choice if you would rather not run on one or the spare is missing.",
      },
      {
        q: "Why can't a sidewall be repaired?",
        a: "Any damage in or near the sidewall can't be safely repaired, so the tire has to be replaced. A hole beyond a certain size is the same. Only a puncture in the tread can be plugged or patched.",
      },
      {
        q: "What should I tell dispatch about the tire?",
        a: "The size printed on the sidewall if you can read it safely, or the year, make and model if you can't. The sticker inside the driver's door jamb lists the size too.",
      },
    ],
    primaryKeyword: "tire replacement Garland TX",
    secondaryKeywords: ["mobile tire replacement Garland", "roadside tire replacement Garland", "tire blowout help Garland", "no spare tire help Garland"],
    longTail: ["blown tire on I-30 Garland", "sidewall bulge tire Garland TX", "need a tire replaced at home Garland"],
    intent: "Emergency, no-spare or damage-beyond-repair. Fills the Garland tire replacement gap; built from the TRA service catalog.",
    sourceUrls: [],
  },

  // ===================== PLANO =====================
  {
    city: "plano",
    service: "tire-replacement",
    h1: "Roadside Tire Replacement in Plano, TX",
    title: "Tire Replacement Plano TX",
    metaDescription:
      "Tire beyond repair in Plano? TRA brings a replacement tire to the office lot or driveway and installs it there. Availability varies. Call now.",
    intro:
      "Finding a ruined tire at the end of a Plano workday is a particular kind of bad timing: the car is in a corporate lot, the evening is waiting, and a tire shop means another trip. TRA brings a replacement tire to the car and installs it there, whether it is parked off Legacy Drive or in the driveway at home. The price shown on this page covers the tire, supplied by us, and installing it. Tire availability varies, so dispatch confirms one is available, and your total, before a driver is sent.",
    scenarios: [
      "A sidewall cut found when walking out to the car in a Legacy Drive corridor lot.",
      "A tire that blew on the Dallas North Tollway and is past repair.",
      "A car with a missing spare, discovered only now.",
      "A tire with a bulge, noticed in the driveway on a weekend.",
    ],
    localContext:
      "Plano is in Collin and Denton counties and borders Richardson, Frisco, Allen and The Colony. It is the largest city in Texas without an interstate, so its fast roads are US-75, the Dallas North Tollway, the Sam Rayburn Tollway, the President George Bush Turnpike and Preston Road. We replace tires at the car, whether it is in the Legacy Drive corporate corridor or on a residential street.",
    faqs: [
      {
        q: "What do I give dispatch so the right tire is sent?",
        a: "The tire size printed on the sidewall, for example 235/55R18, plus the year, make and model. Dispatch uses them to confirm a tire is available before a driver is sent.",
      },
      {
        q: "There's a full-size spare in the trunk. Which service do I need?",
        a: "If the spare is usable, a flat tire change puts it on. Tire replacement is for when there is no usable spare, or you would rather not run on one.",
      },
      {
        q: "The tire went on the tollway. Where should I wait?",
        a: "If you are in a live traffic lane, or anyone is in danger, call 911 first. Otherwise get as far from the lanes as you can, turn on your hazards and stay buckled in until the driver arrives.",
      },
    ],
    primaryKeyword: "tire replacement Plano TX",
    secondaryKeywords: ["mobile tire replacement Plano", "roadside tire replacement Plano", "tire blowout help Plano", "no spare tire help Plano"],
    longTail: ["blown tire on Dallas North Tollway Plano", "tire replaced at work Plano", "sidewall damage tire Plano TX"],
    intent: "Emergency, no-spare or damage-beyond-repair; workplace-lot and tollway tire failures. Fills the Plano tire replacement gap; built from the TRA service catalog.",
    sourceUrls: [],
  },

  // ===================== FRISCO =====================
  {
    city: "frisco",
    service: "tire-replacement",
    h1: "Roadside Tire Replacement in Frisco, TX",
    title: "Tire Replacement Frisco TX",
    metaDescription:
      "Ruined tire in Frisco and no usable spare? TRA brings a replacement tire and installs it where the car sits. Tire availability varies.",
    intro:
      "A tire that is beyond repair is a tire you cannot drive on, so the question is where the replacement meets you. In Frisco the answer is anywhere in town, and the town borders six other cities we serve: Plano, The Colony, McKinney, Allen, Prosper and Little Elm. We supply the tire and install it where the car is parked. The price shown on this page covers both, and tire availability varies, so dispatch confirms a tire is available, and your total, before a driver is sent.",
    scenarios: [
      "A blowout on the Dallas North Tollway that shredded the tire.",
      "A sidewall tear from clipping the edge of the road on US-380.",
      "A flat on Preston Road with a spare that has already been used.",
      "A tire with an obvious bulge in the driveway before a family trip.",
    ],
    localContext:
      "Frisco lies in Collin and Denton counties. The Dallas North Tollway, the Sam Rayburn Tollway, Preston Road, US-380 and FM 423 are its main routes. Because it borders so many other cities, a road name and the nearest cross street tell dispatch more than a city name does when you are near the edge of town.",
    faqs: [
      {
        q: "I'm near the edge of Frisco and don't know which city I'm in. Does it matter?",
        a: "Not to us. We serve all of them. Give dispatch the road and the nearest cross street, which place you more exactly than the name of a city.",
      },
      {
        q: "It's dark and I can't read the sidewall. What now?",
        a: "Check the sticker inside the driver's door jamb, which lists the tire size, or give dispatch the year, make and model and they can work it out. Do not go crawling around beside traffic to read it.",
      },
      {
        q: "One lug nut is rounded off and won't turn. Is that a problem?",
        a: "It can stop the wheel from coming off. Stripped lug nut removal is a separate service, so mention it when you request the tire and the driver will come prepared.",
      },
    ],
    primaryKeyword: "tire replacement Frisco TX",
    secondaryKeywords: ["mobile tire replacement Frisco", "roadside tire replacement Frisco", "tire blowout help Frisco", "no spare tire help Frisco"],
    longTail: ["blown tire on Dallas North Tollway Frisco", "need a tire replaced at home Frisco", "sidewall tear tire Frisco TX"],
    intent: "Emergency, no-spare or damage-beyond-repair; edge-of-city ambiguity in a city bordering six served cities. Fills the Frisco tire replacement gap; built from the TRA service catalog.",
    sourceUrls: [],
  },

  // ===================== MCKINNEY =====================
  {
    city: "mckinney",
    service: "tire-replacement",
    h1: "Roadside Tire Replacement in McKinney, TX",
    title: "Tire Replacement McKinney TX",
    metaDescription:
      "Tire damaged beyond repair in McKinney? TRA brings a replacement tire and installs it downtown, at home or on the road. Availability varies.",
    intro:
      "A tire can be ruined by a curb as easily as by a nail: one scrape on a downtown street and the sidewall is finished. When a tire cannot be repaired, TRA brings a replacement to the car in McKinney and installs it there. The price shown on this page covers the tire, supplied by us, and installing it. Tire availability varies, so dispatch confirms one is available, and your total, before a driver is sent.",
    scenarios: [
      "A sidewall scrape from a curb near Historic Downtown McKinney.",
      "A blowout on US-380 or US-75 that left the tire shredded.",
      "A tire with a bulge, found while visiting Chestnut Square Heritage Village.",
      "A flat on a car with no spare, found in a driveway off TX-5.",
    ],
    localContext:
      "McKinney is the county seat of Collin County and borders Allen, Frisco, Prosper, Melissa and Celina. US-75, US-380, TX-5 and the Sam Rayburn Tollway cross it, and Historic Downtown McKinney and Chestnut Square Heritage Village are its recognized areas. We replace tires wherever the car is parked, from a downtown street to a driveway in town.",
    faqs: [
      {
        q: "Why can't a sidewall be plugged or patched?",
        a: "Any damage in or near the sidewall can't be safely repaired, so the tire has to be replaced. Only a puncture in the tread can be plugged or patched.",
      },
      {
        q: "I'm parked on a downtown street. Is there room for you to work?",
        a: "Usually, if the driver can work safely around the car. Tell dispatch the street, which side the car is on, and anything that limits space nearby.",
      },
      {
        q: "A lug nut is rounded off and won't come off. Can that be handled?",
        a: "Yes. Stripped lug nut removal is a separate service, so mention it when you request the tire and the driver comes prepared. Dispatch confirms the price before anyone is sent.",
      },
    ],
    primaryKeyword: "tire replacement McKinney TX",
    secondaryKeywords: ["mobile tire replacement McKinney", "roadside tire replacement McKinney", "tire blowout help McKinney", "no spare tire help McKinney"],
    longTail: ["blown tire on US-75 McKinney", "sidewall damage tire McKinney TX", "need a tire replaced at home McKinney"],
    intent: "Emergency, no-spare or damage-beyond-repair; curb-damage and highway failures around a historic downtown. Fills the McKinney tire replacement gap; built from the TRA service catalog.",
    sourceUrls: [],
  },

  // ===================== ALLEN =====================
  {
    city: "allen",
    service: "jump-start",
    h1: "Jump Start Service in Allen, TX",
    title: "Jump Start Service Allen TX",
    metaDescription:
      "Car won't start in Allen? TRA brings a jump start to your driveway or a lot off US-75 or the Sam Rayburn Tollway. Local DFW dispatch, 24/7.",
    intro:
      "A car that clicks and won't turn over almost always has a drained battery rather than a serious fault. In Allen it is often the vehicle that has been sitting: the second car, the weekend car, the one that was not needed this week. A TRA driver brings a portable jump pack to wherever it is parked and gets the engine running, so you can drive away under your own power. We text or call when the driver is on the way.",
    scenarios: [
      "A second car that sat in the garage while the first one did all the driving.",
      "A phone charger or dash camera left plugged in overnight.",
      "Headlights left on in a lot off US-75 during a long appointment.",
      "A battery that cranked slowly on the first cold morning and quit by the afternoon.",
    ],
    localContext:
      "Allen is in Collin County and is bordered by Plano, McKinney and Frisco. US-75 (Central Expressway) runs through the city and the Sam Rayburn Tollway (TX-121) crosses it. We jump start vehicles across town, from driveways to retail lots. If the car has stopped in a live lane on either road, call 911 first.",
    faqs: [
      {
        q: "Can something small really drain a battery overnight?",
        a: "Yes. Anything that draws power with the engine off, such as a dome light, a door left ajar or a plugged-in device, can run a weak battery down.",
      },
      {
        q: "What happens after the jump?",
        a: "You drive away under your own power. If the car won't restart later, the battery probably isn't holding a charge, and battery replacement is a separate service we can bring out to you.",
      },
      {
        q: "What if the car still won't start after the jump?",
        a: "Then the battery wasn't the whole story. The driver tells you what they found. We replace batteries but do not do mechanical repair, so a repair shop is the next step.",
      },
    ],
    primaryKeyword: "jump start service Allen TX",
    secondaryKeywords: ["car battery jump start Allen", "dead battery Allen", "jump start near me Allen"],
    longTail: ["car won't start Allen TX help", "mobile jump start Allen", "dead battery second car Allen"],
    intent: "Emergency, mobile/on-site; sitting-car and small-drain dead batteries. Fills the Allen jump start gap; built from the TRA service catalog.",
    sourceUrls: [],
  },
  {
    city: "allen",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Allen, TX",
    title: "Mobile Tire Repair Allen TX",
    metaDescription:
      "Nail or screw in a tire in Allen? TRA plugs or patches tread punctures where the car is parked, when the damage allows. Call now.",
    intro:
      "Most punctures are found rather than felt: a low-pressure light, a tire that looks a little soft, a screw head glinting in the tread. When the puncture is in the tread, a TRA driver can plug or patch it where the car is parked in Allen, so the original tire stays on and the spare stays unused. The driver checks the damage before starting and tells you whether it can be repaired.",
    scenarios: [
      "A pressure warning that returns after a stop at the air pump.",
      "A screw head spotted in the tread while pumping gas.",
      "A tire that looks fine but is a little lower each week.",
      "A nail found before a drive on the Sam Rayburn Tollway.",
    ],
    localContext:
      "Allen is in Collin County and borders Plano, McKinney and Frisco. US-75 (Central Expressway) and the Sam Rayburn Tollway (TX-121) are its two main roads, and a tire that is slowly losing air is best dealt with before it meets either. We repair tires at the car, in a driveway, an office lot or a retail lot.",
    faqs: [
      {
        q: "I found a screw in the tread but the tire still holds air. Should I do anything?",
        a: "Leave it where it is. A screw can partly seal the hole, and pulling it out usually deflates the tire. Call, and if the puncture is in the tread the driver can repair it properly.",
      },
      {
        q: "Where on the tire does the damage have to be?",
        a: "In the tread. Damage in or near the sidewall can't be safely repaired, and neither can a hole beyond a certain size. The driver tells you which you have before starting.",
      },
      {
        q: "My spare is in the trunk anyway. Why repair rather than swap?",
        a: "A repair keeps the original tire on the car and leaves the spare unused for a real emergency. A flat tire change is the better choice when the tire is too damaged to repair.",
      },
    ],
    primaryKeyword: "mobile tire repair Allen TX",
    secondaryKeywords: ["tire plug Allen", "tire patch Allen", "nail in tire Allen", "flat tire repair Allen TX"],
    longTail: ["slow leak tire repair Allen", "screw in tire repair near me Allen", "tire pressure light on Allen TX"],
    intent: "Commercial-urgent, repair-before-replace; found-not-felt punctures. Fills the Allen tire repair gap; built from the TRA service catalog.",
    sourceUrls: [],
  },

  // ===================== CARROLLTON =====================
  {
    city: "carrollton",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Carrollton, TX",
    title: "Mobile Tire Repair Carrollton TX",
    metaDescription:
      "Nail or screw in a tire in Carrollton? TRA plugs or patches tread punctures at the car, from I-35E lots to driveways. Call now.",
    intro:
      "Carrollton sits across three counties and borders five cities we serve, so cars cross its edges without drivers noticing, picking up whatever is on the road on the way. A screw or nail in the tread does not have to mean a new tire. When the puncture is in the tread, a TRA driver plugs or patches it where the car is parked, and the original tire stays on.",
    scenarios: [
      "A tire that picked up a screw between I-35E and the Bush Turnpike.",
      "A pressure light that shows up after a drive over to Lewisville.",
      "A nail found in a tire in a workplace lot at the end of a shift.",
      "A tire that needs air every Monday.",
    ],
    localContext:
      "Carrollton lies in Dallas, Denton and Collin counties and borders The Colony, Farmers Branch, Coppell, Addison and Lewisville. I-35E, the President George Bush Turnpike and the Sam Rayburn Tollway cross it. We repair tires wherever the car is parked in the city, at home or at work.",
    faqs: [
      {
        q: "I'm not sure whether I'm in Carrollton, Farmers Branch or Addison. Does it matter?",
        a: "Not to us. We serve all three. Give dispatch the street and the nearest cross street, which place you more exactly than a city name.",
      },
      {
        q: "Can the repair be done at my workplace?",
        a: "Yes, if the driver can work safely around the car. Tell dispatch the building or lot and roughly where the car is parked.",
      },
      {
        q: "What happens if the puncture can't be repaired?",
        a: "The driver explains what they found. Then the choice is your spare, if it is usable, or a replacement tire supplied by us. Dispatch confirms a tire is available before one is sent.",
      },
    ],
    primaryKeyword: "mobile tire repair Carrollton TX",
    secondaryKeywords: ["tire plug Carrollton", "tire patch Carrollton", "nail in tire Carrollton", "flat tire repair Carrollton TX"],
    longTail: ["slow leak tire repair Carrollton", "screw in tire repair near me Carrollton", "tire pressure light on Carrollton TX"],
    intent: "Commercial-urgent, repair-before-replace; border-crossing commuters with tread punctures. Fills the Carrollton tire repair gap; built from the TRA service catalog.",
    sourceUrls: [],
  },

  // ===================== DENTON =====================
  {
    city: "denton",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Denton, TX",
    title: "Flat Tire Change Denton TX",
    metaDescription:
      "Flat tire in Denton? If you have a usable spare, TRA puts it on where you are, from I-35 to Loop 288, UNT or the Square. Call for help.",
    intro:
      "Denton is where I-35E and I-35W rejoin as a single I-35, close to the University of North Texas campus, so a flat tire here can happen at interstate speed or on a campus-area street. If the vehicle carries a usable spare, a TRA driver comes to wherever it stopped and puts the spare on in place of the flat. We text or call when the driver is on the way.",
    scenarios: [
      "A blowout on I-35 near the point where I-35E and I-35W come together.",
      "A flat on Loop 288 with traffic passing close.",
      "A tire found flat in a lot near Texas Woman's University.",
      "A tire that went soft overnight on a street near Downtown Denton Square.",
    ],
    localContext:
      "Denton is the county seat of Denton County. I-35, I-35E, I-35W, US-380, US-377, US-77 and Loop 288 cross the city, and Downtown Denton Square and the University of North Texas and Texas Woman's University areas are its recognized districts. No other city we serve borders Denton, so give dispatch the road and the nearest cross street.",
    faqs: [
      {
        q: "I'm on I-35 and can't tell whether I'm on the E or W side. What should I say?",
        a: "Give your direction of travel, the nearest exit or cross street, and the highway number on the sign. I-35E and I-35W rejoin as I-35 near the UNT campus, so an exit or a campus landmark helps.",
      },
      {
        q: "Can you change a tire in a campus-area lot?",
        a: "Usually, if the driver can work safely around the car. Tell dispatch the lot, the nearest building and anything that limits space.",
      },
      {
        q: "What if I'm in a live lane on the interstate?",
        a: "Call 911 first. If you can reach a shoulder, put your hazards on, stay buckled in and call us. Standing beside a car on an interstate is the dangerous part of a flat.",
      },
    ],
    primaryKeyword: "flat tire change Denton TX",
    secondaryKeywords: ["flat tire service Denton", "spare tire change Denton", "tire change near me Denton"],
    longTail: ["flat tire on I-35 Denton", "flat tire near UNT Denton", "change my flat tire Denton TX"],
    intent: "Emergency, near-me; interstate-shoulder and campus-area flats. Fills the Denton flat tire change gap; built from the TRA service catalog.",
    sourceUrls: [],
  },
  {
    city: "denton",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Denton, TX",
    title: "Mobile Tire Repair Denton TX",
    metaDescription:
      "Nail or screw in a tire in Denton? TRA plugs or patches tread punctures at the car, near UNT, TWU or the Square. Call now.",
    intro:
      "A tire that needs air every few days is leaking somewhere, and in a city of short hops and apartment lots it is easy to keep topping it up and never fix it. When the cause is a puncture in the tread, a TRA driver plugs or patches it where the car is parked, so the original tire stays on and the spare stays in the trunk.",
    scenarios: [
      "A pressure light that comes back every week of the semester.",
      "A screw found in the tread in an apartment lot near the UNT campus.",
      "A tire that is low after a drive on US-380 or Loop 288.",
      "A nail spotted before a long weekend trip on I-35.",
    ],
    localContext:
      "Denton is the county seat of Denton County, crossed by I-35, I-35E, I-35W, US-380, US-377, US-77 and Loop 288. Downtown Denton Square and the University of North Texas and Texas Woman's University areas are its recognized districts. We repair tires wherever the car is parked, so the fix happens at the apartment, the campus-area lot or the driveway.",
    faqs: [
      {
        q: "I live in a student apartment and park on the street. Can you work there?",
        a: "Usually, if the driver can work safely around the car. Tell dispatch the street, which side the car is on and anything that limits space.",
      },
      {
        q: "There's a screw in the tread. Should I pull it out?",
        a: "Leave it where it is. While it's lodged in the tread it is partly sealing the hole, and pulling it out usually deflates the tire.",
      },
      {
        q: "What happens if the repair isn't possible?",
        a: "The driver explains what they found. Then the choice is your spare, if it is usable, or a replacement tire supplied by us. Dispatch confirms a tire is available before one is sent.",
      },
    ],
    primaryKeyword: "mobile tire repair Denton TX",
    secondaryKeywords: ["tire plug Denton", "tire patch Denton", "nail in tire Denton", "flat tire repair Denton TX"],
    longTail: ["slow leak tire repair Denton", "screw in tire repair near me Denton", "tire pressure light on Denton TX"],
    intent: "Commercial-urgent, repair-before-replace; apartment-lot and campus-area slow leaks. Fills the Denton tire repair gap; built from the TRA service catalog.",
    sourceUrls: [],
  },

  // ===================== ADDISON =====================
  {
    city: "addison",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Addison, TX",
    title: "Car Battery Replacement Addison TX",
    metaDescription:
      "Battery failing in Addison? TRA brings a new one to the office lot, garage or home and installs it there. Installation included for eligible vehicles.",
    intro:
      "Addison packs a lot of parking into a small town, and a car whose battery has given up in one of those lots has nowhere to go. TRA brings a replacement battery to the vehicle and installs it where it sits. The price shown on this page covers the battery and installing it, for eligible vehicles and batteries. Dispatch confirms the right battery for your vehicle, and your total, before a driver is sent.",
    scenarios: [
      "A car that won't start in an office garage at the end of a long day.",
      "A battery that needed a jump after an evening on Belt Line Road, and again the next morning.",
      "A battery that gave out after the car sat while its owner was away on a trip.",
      "Dim lights and slow windows after a long, hot summer.",
    ],
    localContext:
      "Addison is a small town in Dallas County, bordered by Dallas, Carrollton and Farmers Branch. The Dallas North Tollway runs through it, with Belt Line Road and Keller Springs Road carrying local traffic, and Addison Airport, a business-aviation field, covers roughly an eighth of the town's area. We install batteries wherever the car sits, in an office garage, a restaurant lot or a driveway.",
    faqs: [
      {
        q: "My car is in a garage with low clearance. Can the battery still be replaced?",
        a: "Often, if the driver can work safely around the vehicle, but height limits can matter. Give dispatch the building, the level and the clearance if you know it.",
      },
      {
        q: "Does it matter that my car is a hybrid or an electric vehicle?",
        a: "It can. Eligibility and compatibility vary by vehicle and battery type, so tell dispatch the year, make and model. They confirm compatibility, and your total, before a driver is sent.",
      },
      {
        q: "What does the warranty cover?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice, since that is what warranty service goes through.",
      },
    ],
    primaryKeyword: "car battery replacement Addison TX",
    secondaryKeywords: ["mobile battery replacement Addison", "battery installation Addison", "car battery service Addison"],
    longTail: ["car battery died office garage Addison", "mobile car battery near me Addison TX", "battery replaced at work Addison"],
    intent: "Commercial, convenience-led; office-garage and restaurant-lot battery swaps in a small, dense town. Fills the Addison battery replacement gap; built from the TRA service catalog.",
    sourceUrls: [],
  },
];
