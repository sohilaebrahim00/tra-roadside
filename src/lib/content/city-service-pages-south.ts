import type { CityServiceContent } from "./city-service-pages";

/** City x Service pages for south Dallas County, Ellis and Johnson counties. The rules are at the top of city-service-pages.ts. */
export const PAGES_SOUTH: CityServiceContent[] = [
  // ===================== CEDAR HILL =====================
  {
    city: "cedar-hill",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Cedar Hill, TX",
    title: "Flat Tire Change Cedar Hill TX",
    metaDescription:
      "Flat tire in Cedar Hill? If your car has a usable spare, TRA puts it on at home, in a US-67 retail lot or by the lake. Request help online or call.",
    intro:
      "Most flats in Cedar Hill are found rather than felt: a tire sagging in the driveway before the school run, or one gone soft in a shopping center lot with the groceries already loaded. If your car carries a usable spare, a TRA driver comes to wherever it sits and puts the spare on. Request help online or call, and we text or call when the driver is on the way.",
    scenarios: [
      "A tire found sagging in a driveway in the Lake Ridge area on a school morning.",
      "A flat discovered in a retail lot along US-67 with the groceries already in the car.",
      "A tire that lost its air slowly while the car sat parked near Joe Pool Lake all afternoon.",
      "A spare you have never had to use, and a factory jack you do not trust.",
    ],
    localContext:
      "Cedar Hill sits on the eastern shore of Joe Pool Lake and crosses the line between Dallas and Ellis counties. US-67 carries the retail frontage, and people park in Cedar Hill City Center, Historic Downtown Cedar Hill and the Lake Ridge area. Dallas, Grand Prairie, Duncanville, DeSoto and Midlothian all border the city.",
    faqs: [
      {
        q: "Can you change the tire in my driveway or a parking lot?",
        a: "Yes. Driveways, apartment lots and shopping center parking are routine, as long as the car is somewhere a driver can work safely. Tell dispatch the street or the store and which part of the lot.",
      },
      {
        q: "My spare has been in the trunk for years. Will it still work?",
        a: "Spares lose air sitting untouched. The driver looks at the spare before using it, and if it cannot be used, a replacement tire supplied by us is the next step.",
      },
      {
        q: "What should I do if the flat happens on US-67?",
        a: "If the car is stopped in a live traffic lane, or anyone is in danger, call 911 first. On a shoulder or in a lot, turn on the hazards, keep your seatbelt on if traffic is close, and call us. Standing beside the car is the risky part.",
      },
    ],
    primaryKeyword: "flat tire change Cedar Hill TX",
    secondaryKeywords: ["flat tire service Cedar Hill", "tire change near me Cedar Hill", "spare tire installation Cedar Hill", "roadside tire change Cedar Hill TX"],
    longTail: ["flat tire on US-67 Cedar Hill help", "change my flat tire Lake Ridge Cedar Hill", "24 hour tire change Cedar Hill TX"],
    intent: "Emergency, residential and retail-lot flats, near-me. Lower highway exposure than neighboring cities.",
    sourceUrls: [],
  },
  {
    city: "cedar-hill",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Cedar Hill, TX",
    title: "Car Battery Replacement Cedar Hill TX",
    metaDescription:
      "Battery failing in Cedar Hill? TRA brings a new one and installs it where your car is parked. The price covers both, with a 1-year warranty.",
    intro:
      "A battery rarely fails on a convenient day. The usual story in Cedar Hill is a summer of short drives, then a car that only clicks in the driveway. We bring a replacement battery to the car and install it where it sits, so you skip the repair shop waiting room. The price on this page covers the battery and installing it, for eligible vehicles and batteries, and dispatch confirms the right battery and your total before a driver is sent.",
    scenarios: [
      "A car that needed a jump twice in one week and will not hold a charge overnight.",
      "A battery worn down by short hops between Lake Ridge and the stores along US-67.",
      "A slow crank on a hot afternoon in a Cedar Hill City Center parking lot.",
      "A battery old enough that you would rather replace it before a road trip than during one.",
    ],
    localContext:
      "Much of the driving in Cedar Hill is short: down to the retail frontage on US-67, over to Cedar Hill City Center or Historic Downtown Cedar Hill, back to Lake Ridge. Short trips ask a lot of a battery and give little back, so a worn one tends to give out in a driveway or a lot rather than on the road. The city crosses from Dallas County into Ellis County, and we install batteries on both sides of that line.",
    faqs: [
      {
        q: "How can I tell it is the battery and not something else?",
        a: "Slow cranking, dim headlights, a clock that resets and a car that has needed a jump are the usual signs. The driver can advise whether the battery looks like the cause. We replace batteries but do not repair charging or starting systems.",
      },
      {
        q: "Can you install it in my driveway?",
        a: "Yes, as long as the car is somewhere a driver can work safely. Some batteries sit under the hood and others under the rear seat, so tell dispatch the year, make and model and they will confirm what your car takes.",
      },
      {
        q: "Is the new battery covered by a warranty?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice, because warranty service is handled against it.",
      },
    ],
    primaryKeyword: "car battery replacement Cedar Hill TX",
    secondaryKeywords: ["mobile battery replacement Cedar Hill", "battery installation Cedar Hill", "car battery service Cedar Hill TX", "new car battery Cedar Hill"],
    longTail: ["car battery keeps dying Cedar Hill", "battery replaced at my house Cedar Hill", "mobile car battery near me Lake Ridge"],
    intent: "Commercial, convenience-led, short-trip suburb. Battery-vs-jump decision.",
    sourceUrls: [],
  },
  {
    city: "cedar-hill",
    service: "lockout",
    h1: "Car Lockout Service in Cedar Hill, TX",
    title: "Car Lockout Service Cedar Hill TX",
    metaDescription:
      "Locked out in Cedar Hill? TRA opens your car without damage at City Center, Historic Downtown, Lake Ridge or a US-67 lot. Request help or call.",
    intro:
      "A lockout is a small mistake with a big pause attached: the door shuts, the keys are on the seat, and the errand stops. A TRA driver comes to the car in Cedar Hill, confirms it is yours and opens it using non-destructive entry whenever the vehicle allows. You do not need to arrange a tow or wait for someone to bring a spare key across town.",
    scenarios: [
      "Keys left on the seat when the door shut behind you in a Cedar Hill City Center lot.",
      "A fob that quit in a Historic Downtown Cedar Hill parking space, with the spare at home.",
      "Keys shut in the trunk while loading for a day at Joe Pool Lake, which is a separate job from opening a door.",
      "A door that locked itself with the engine running in a driveway near Lake Ridge.",
    ],
    localContext:
      "Lockouts happen wherever a car is parked, and in Cedar Hill that means Cedar Hill City Center, Historic Downtown Cedar Hill, the retail frontage along US-67 and the streets around Lake Ridge. Wherever you are, give dispatch the lot or the street and the nearest cross street, so the driver goes straight to the car.",
    faqs: [
      {
        q: "A child or pet is locked inside. Who do I call first?",
        a: "If a child or pet is in danger, call 911 first, because emergency crews can act immediately. Then call us and tell dispatch what is happening so it is handled as urgent.",
      },
      {
        q: "Does it matter that my spare key is at home?",
        a: "No. Opening the car does not depend on having a key, so the distance to your spare does not matter. Give dispatch the address or the nearest cross street and where in the lot the car is parked.",
      },
      {
        q: "What if my keys are in the trunk?",
        a: "Keys shut in a trunk are a different job from a door, because they take longer and need different tools. Say so when you request help so the right job is booked.",
      },
    ],
    primaryKeyword: "car lockout service Cedar Hill TX",
    secondaryKeywords: ["locked out of car Cedar Hill", "car unlock Cedar Hill TX", "auto lockout Cedar Hill", "vehicle lockout Cedar Hill"],
    longTail: ["locked keys in car Cedar Hill TX", "car unlock near me Cedar Hill", "keys locked in trunk Cedar Hill"],
    intent: "Emergency, near-me, errand-interrupting. Parking-lot and downtown parking calls.",
    sourceUrls: [],
  },
  {
    city: "cedar-hill",
    service: "jump-start",
    h1: "Jump Start Service in Cedar Hill, TX",
    title: "Jump Start Service Cedar Hill TX",
    metaDescription:
      "Car won't start in Cedar Hill? TRA brings a jump start to your driveway, a US-67 lot or Lake Ridge. Local DFW dispatch, 24/7. Request help or call.",
    intro:
      "The click-click-click when you turn the key means the battery has run down, not that the car is finished. A TRA driver brings a jump pack to the car, gets the engine running and lets you drive on, whether it is parked in a Cedar Hill driveway or in a lot outside the stores. If the battery turns out to be the real problem, the driver can say so while there.",
    scenarios: [
      "Headlights left on during an afternoon at Joe Pool Lake.",
      "A second family car that sits in the driveway most of the week.",
      "A dead battery in a Cedar Hill City Center lot after a long dinner.",
      "The first cold morning after a mild week, when the weakest battery on the street gives up.",
    ],
    localContext:
      "Cedar Hill sits on the eastern shore of Joe Pool Lake. Lake Ridge, Cedar Hill City Center, Historic Downtown Cedar Hill and the retail lots along US-67 are all places where a car can sit parked for hours, sometimes with a light left on, and a tired battery rarely survives that. We jump cars in all of them, and in Duncanville and DeSoto when the day takes you across the city line.",
    faqs: [
      {
        q: "Do I need to keep the engine running afterwards?",
        a: "Drive for a while rather than parking again right away, so the alternator can put some charge back. If the car will not start again after it has been switched off, the battery probably cannot hold a charge, and replacing it is the next step.",
      },
      {
        q: "Can you jump a car in a tight driveway or a garage?",
        a: "Usually, as long as the driver can reach the battery or the jump points under the hood. If the car is nose-in to a wall or boxed in by other vehicles, mention it to dispatch when you call.",
      },
      {
        q: "Can you jump start a hybrid or electric vehicle?",
        a: "Tell us the year, make and model and add anything unusual in the notes when you request help, so dispatch can send the right equipment.",
      },
    ],
    primaryKeyword: "jump start service Cedar Hill TX",
    secondaryKeywords: ["dead battery Cedar Hill", "jump start near me Cedar Hill", "car won't start Cedar Hill TX", "mobile jump start Cedar Hill"],
    longTail: ["24 hour jump start Cedar Hill TX", "car battery died Lake Ridge Cedar Hill", "jump start Cedar Hill City Center"],
    intent: "Emergency, mobile, residential and retail-lot. Parked-car battery drain.",
    sourceUrls: [],
  },
  {
    city: "cedar-hill",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Cedar Hill, TX",
    title: "Mobile Tire Repair Cedar Hill TX",
    metaDescription:
      "Nail or screw in a tire in Cedar Hill? TRA plugs or patches tread punctures at your driveway or lot, so your spare stays put. Call or request help.",
    intro:
      "A nail or screw in a tire is easy to ignore for a week, right up to the morning the tire is flat. If the hole is in the tread and small enough to repair, a TRA driver can plug or patch it where the car is parked, so the original tire stays on the car and the spare stays in the trunk. The driver looks at the puncture before starting and tells you whether it can be repaired.",
    scenarios: [
      "A tire that needs air every few days with no obvious cause.",
      "A screw head spotted in the tread while backing out of a driveway near Lake Ridge.",
      "A pressure warning that came on after a run along US-67 and will not clear.",
      "A puncture found after a stop at Cedar Hill City Center, with the tire still holding air.",
    ],
    localContext:
      "Slow punctures tend to be found where the car sits: backing out of a driveway near Lake Ridge, loading up along US-67, or parking in Cedar Hill City Center or Historic Downtown Cedar Hill. Caught at that stage, a tread puncture can often be repaired in place. Driven on until the tire is flat, it may have to be replaced instead.",
    faqs: [
      {
        q: "Can a puncture near the edge of the tire be repaired?",
        a: "Only a puncture in the tread can be. Damage in or near the sidewall cannot be repaired safely, and neither can a hole beyond a certain size. The driver checks before starting and tells you which it is.",
      },
      {
        q: "There is a screw in my tire but it is holding air. Should I wait?",
        a: "Leave the screw where it is and get the tire seen soon. It is partly sealing the hole, and pulling it out usually deflates the tire. Avoid long drives until it has been repaired.",
      },
      {
        q: "If the tire cannot be repaired, am I stuck?",
        a: "No. The choices are your spare, if it is usable, or a replacement tire supplied by us. The driver explains what they found so you can decide on the spot.",
      },
    ],
    primaryKeyword: "mobile tire repair Cedar Hill TX",
    secondaryKeywords: ["tire plug Cedar Hill", "tire patch Cedar Hill", "nail in tire Cedar Hill", "flat tire repair Cedar Hill TX"],
    longTail: ["screw in tire repair near me Cedar Hill", "slow leak tire repair Cedar Hill TX", "tire pressure light on Cedar Hill help"],
    intent: "Commercial-urgent, repair-before-replace, slow-leak awareness.",
    sourceUrls: [],
  },

  // ===================== DESOTO =====================
  {
    city: "desoto",
    service: "flat-tire-change",
    h1: "Flat Tire Change in DeSoto, TX",
    title: "Flat Tire Change DeSoto TX",
    metaDescription:
      "Flat tire on I-35E or at home in DeSoto? TRA puts on your usable spare where you are. Request help online or call, and stay safe while you wait.",
    intro:
      "On a road like I-35E, the dangerous part of a flat is not the wheel, it is the traffic beside it. If your car carries a usable spare, a TRA driver comes to you in DeSoto and changes the tire, so you do not have to get out and work next to passing vehicles. A flat in a driveway or a parking lot is the same job without the danger. Request help online or call, and we text or call when the driver is on the way.",
    scenarios: [
      "A blowout on I-35E where the shoulder is the only place to stop.",
      "A tire that went down overnight in a driveway before the morning commute.",
      "A flat in a DeSoto Town Center lot after errands, with the spare buried under bags.",
      "A flat on a US-77 errand, with no safe place to change it yourself.",
    ],
    localContext:
      "DeSoto has two main routes, I-35E and US-77, and I-35E also runs through Dallas, which borders the city along with Duncanville, Cedar Hill and Lancaster. We change tires on the freeway shoulder, around DeSoto Town Center and on city streets.",
    faqs: [
      {
        q: "What should I do while I wait on the I-35E shoulder?",
        a: "If the car is stopped in a live lane, or anyone is in danger, call 911 first. On a shoulder, keep your seatbelt on, turn on the hazards and stay in the car. Standing beside the car is where most of the risk is.",
      },
      {
        q: "Do I need to have my own jack?",
        a: "No. The driver brings the tools. What you need is a usable spare in the vehicle. If you do not have one, ask dispatch about a replacement tire instead.",
      },
      {
        q: "Can you change a tire if I have lost the wheel lock key?",
        a: "The lock has to come off before the wheel can, and removing it is a separate service. Mention it when you request help so the driver comes prepared.",
      },
    ],
    primaryKeyword: "flat tire change DeSoto TX",
    secondaryKeywords: ["flat tire service DeSoto", "tire change near me DeSoto", "roadside tire change DeSoto TX", "spare tire installation DeSoto"],
    longTail: ["flat tire on I-35E DeSoto help", "change my flat tire DeSoto TX", "24 hour tire change DeSoto"],
    intent: "Emergency, freeway-shoulder safety, near-me.",
    sourceUrls: [],
  },
  {
    city: "desoto",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in DeSoto, TX",
    title: "Car Battery Replacement DeSoto TX",
    metaDescription:
      "Weak battery in DeSoto? TRA installs a new one at home, work or Town Center, no tow needed. Price covers battery and installation. 1-year warranty.",
    intro:
      "If you have jumped the same battery twice this month, you already know how this ends. In DeSoto we bring a new battery to the car and install it where it is parked, whether that is a driveway, a workplace lot or a space at DeSoto Town Center. There is no tow and the car never leaves. The price on this page covers the battery and installing it, for eligible vehicles and batteries, and dispatch confirms the battery your car takes, and your total, before a driver is sent.",
    scenarios: [
      "A car that cranks a little slower each morning before the drive out to I-35E.",
      "A battery that failed the day after it was jumped, in a Town Center lot.",
      "Headlights that dim and windows that slow down, with no other warning.",
      "A second car in the family that sits for weeks and now will not wake up.",
    ],
    localContext:
      "DeSoto has two main routes, I-35E and US-77, and I-35E continues into Dallas next door. A battery that copes with a daily highway run can still fail the first time the car sits for a few days, so a weak one often gives out in a driveway or at DeSoto Town Center rather than on the road.",
    faqs: [
      {
        q: "Do I need my VIN to get the right battery?",
        a: "No. Year, make and model are enough to start with. The VIN confirms the exact fit if you can reach it easily, but nobody should be crawling around a dashboard for it.",
      },
      {
        q: "Should I try a jump start first?",
        a: "If the battery still holds a charge, a jump start is the lighter fix. If this one has already needed a jump and will not hold a charge, replacing it is the better move. Tell dispatch what has happened and they will point you to the right service.",
      },
      {
        q: "Is it worth replacing a battery before it fails?",
        a: "If it cranks slowly or has needed a jump, replacing it on a day of your choosing beats finding out on the I-35E shoulder. Request it when it suits you, and dispatch confirms the fit and your total.",
      },
    ],
    primaryKeyword: "car battery replacement DeSoto TX",
    secondaryKeywords: ["mobile battery replacement DeSoto", "battery installation DeSoto", "car battery service DeSoto TX", "new car battery DeSoto"],
    longTail: ["car battery keeps dying DeSoto", "mobile car battery near me DeSoto TX", "battery replaced at my house DeSoto"],
    intent: "Commercial, convenience-led, commuter city. Replace-vs-jump decision.",
    sourceUrls: [],
  },
  {
    city: "desoto",
    service: "lockout",
    h1: "Car Lockout Service in DeSoto, TX",
    title: "Car Lockout Service DeSoto TX",
    metaDescription:
      "Locked out in DeSoto? TRA opens your car without damage at Town Center, on a US-77 errand or at home. Request help online or call.",
    intro:
      "The usual DeSoto lockout is an ordinary stop: a door that shuts, keys on the seat, a phone in your hand. A TRA driver comes to the car, checks that it is yours and opens it using non-destructive methods whenever the vehicle allows. Once the door is open you are on your way again, with the car where you left it and no tow needed.",
    scenarios: [
      "Keys locked in the car at DeSoto Town Center while you ran inside.",
      "A door that locked itself with the engine running in a driveway.",
      "A fob that quit on a cold morning, with the key blade nowhere to be found.",
      "Keys shut in the trunk while loading, which is booked as its own job.",
    ],
    localContext:
      "DeSoto sits in Dallas County along I-35E and US-77, with Dallas, Duncanville, Cedar Hill and Lancaster on its borders. We open cars across the city, from DeSoto Town Center to the streets around it. When you call, name the store, or the street and the nearest cross street, so the driver can go straight to the car instead of searching for it.",
    faqs: [
      {
        q: "What if my ID is locked in the car too?",
        a: "Tell dispatch when you call. The driver needs ID or another way to confirm the vehicle is yours before opening it, so ask what will work in your case.",
      },
      {
        q: "Do you open trunks?",
        a: "Yes. Keys shut in a trunk are a separate job from a door, with their own price, so say so when you request help.",
      },
      {
        q: "Is there anything I can try before the driver comes?",
        a: "Check every door and the trunk release, since one may be unlocked. Do not force a door or a window, because damage is worse than a lockout. Have ID ready.",
      },
    ],
    primaryKeyword: "car lockout service DeSoto TX",
    secondaryKeywords: ["locked out of car DeSoto", "car unlock DeSoto TX", "auto lockout DeSoto", "vehicle lockout DeSoto"],
    longTail: ["locked keys in car DeSoto TX", "car unlock near me DeSoto", "24 hour car lockout DeSoto"],
    intent: "Emergency, near-me, errand-interrupting.",
    sourceUrls: [],
  },
  {
    city: "desoto",
    service: "jump-start",
    h1: "Jump Start Service in DeSoto, TX",
    title: "Jump Start Service DeSoto TX",
    metaDescription:
      "Car won't start in DeSoto? TRA brings a jump start to your driveway, a Town Center lot or the I-35E shoulder. Local DFW dispatch, 24/7. Call now.",
    intro:
      "A dead battery picks its moment. In DeSoto it usually shows up as a car that will not start for the morning drive, or one that goes quiet at the end of an errand when you try to start it again. A TRA driver brings a jump pack to the car, starts it, and lets you drive away, so there is no tow.",
    scenarios: [
      "A car that will not start before the morning drive to I-35E.",
      "A dead battery after an afternoon at DeSoto Town Center, with the lights left on.",
      "A car that cranked weakly after a stop on US-77 and now will not restart.",
      "A vehicle left for two weeks during a trip, now silent.",
    ],
    localContext:
      "DeSoto's two main routes are I-35E and US-77, and the city borders Dallas, Duncanville, Cedar Hill and Lancaster, so an ordinary day can take you across a city line. A car that starts fine at home can quit in a lot a few streets into a different city, and we come to it there.",
    faqs: [
      {
        q: "I am stopped on the I-35E shoulder with a dead battery. Is that a jump start call?",
        a: "Yes, once you are out of traffic. If the car is in a live lane, or anyone is in danger, call 911 first. On a shoulder, stay belted in with the hazards on and call us.",
      },
      {
        q: "Will a jump start fix a battery that keeps dying?",
        a: "Not for long. If the same car needs a jump again within days, the battery is probably the problem and replacing it is the better fix. The driver can advise on site.",
      },
      {
        q: "Do you jump start semi trucks?",
        a: "Yes. A semi truck or 18-wheeler jump start is its own job with its own price. Choose Semi truck as the vehicle type when you request help and tell us exactly where the truck is parked.",
      },
    ],
    primaryKeyword: "jump start service DeSoto TX",
    secondaryKeywords: ["dead battery DeSoto", "jump start near me DeSoto", "car won't start DeSoto TX", "mobile jump start DeSoto"],
    longTail: ["24 hour jump start DeSoto TX", "car battery died DeSoto Town Center", "dead battery I-35E DeSoto"],
    intent: "Emergency, mobile, commuter and errand-driven. Includes semi-truck jump start.",
    sourceUrls: [],
  },
  {
    city: "desoto",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in DeSoto, TX",
    title: "Mobile Tire Repair DeSoto TX",
    metaDescription:
      "Screw or nail in a tire in DeSoto? TRA plugs or patches tread punctures where your car is parked. Request help online or call.",
    intro:
      "Highway debris is one common way tread punctures start. A nail or screw picked up on I-35E can leak for days before the tire shows it. If the hole is in the tread and within repairable limits, a TRA driver plugs or patches it where the car sits in DeSoto, so the tire stays on the car and the spare stays in the trunk.",
    scenarios: [
      "A pressure light that comes back two days after you add air.",
      "A screw head visible in the tread when you step out at DeSoto Town Center.",
      "One tire that is always a little softer than the others on the morning commute.",
      "A puncture you would rather fix before a weekend trip on I-35E.",
    ],
    localContext:
      "I-35E and US-77 are DeSoto's two main routes, and a tire that picks something up on either can be fine for the rest of the trip and soft by morning. DeSoto Town Center and the surrounding streets are typical places to notice it. Dallas, Duncanville, Cedar Hill and Lancaster are close enough that a nail picked up there is still a call we take.",
    faqs: [
      {
        q: "How do I check whether the tire is losing air?",
        a: "Compare the pressure with the sticker in the driver's door jamb. A tire that keeps falling short has a leak. Brush soapy water over the tread and the valve to look for bubbles, and tell dispatch if they show at the valve, since that is a different job.",
      },
      {
        q: "Is it safe to drive to a shop on a slow leak?",
        a: "It depends how fast the tire is losing air, and a tire driven flat is often ruined. If it is going down quickly, do not drive on it. Have the repair come to the car instead.",
      },
      {
        q: "Does a repair mean I skip the spare entirely?",
        a: "When the puncture is repairable, yes: the repaired tire stays on the car. If it cannot be repaired, you choose between your spare and a replacement tire supplied by us.",
      },
    ],
    primaryKeyword: "mobile tire repair DeSoto TX",
    secondaryKeywords: ["tire plug DeSoto", "tire patch DeSoto", "nail in tire DeSoto", "flat tire repair DeSoto TX"],
    longTail: ["screw in tire repair near me DeSoto", "slow leak tire repair DeSoto TX", "tire pressure light on DeSoto help"],
    intent: "Commercial-urgent, repair-before-replace, highway-debris awareness.",
    sourceUrls: [],
  },

  // ===================== WAXAHACHIE =====================
  {
    city: "waxahachie",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Waxahachie, TX",
    title: "Flat Tire Change Waxahachie TX",
    metaDescription:
      "Flat tire in Waxahachie? With a usable spare, TRA changes it on I-35E, US-287, near the square or at home. Request help online or call.",
    intro:
      "Waxahachie is a county seat with a road system to match: I-35E bypasses the west side, US-287 runs across the north and US-77 comes through downtown. A flat on each of them leaves you in a different kind of spot. If your car has a usable spare, a TRA driver comes to you and puts it on, so you are not stuck beside fast traffic on a bypass, or in a downtown space with a jack you have never used.",
    scenarios: [
      "A blowout on I-35E along the west side of town.",
      "A flat on US-287 across the north of the city, with traffic passing close.",
      "A tire found flat on a downtown street near the courthouse square after a long lunch.",
      "A flat in a driveway that you only discover once the car is loaded.",
    ],
    localContext:
      "Tire trouble in Waxahachie can start on a fast bypass or on a slow street around the courthouse square in Downtown Waxahachie, and the help is the same in both. Midlothian and Red Oak are the cities beside it that we also cover, if a flat finds you on the way to either. If you are stopped in a live lane on any of these roads, call 911 before anything else.",
    faqs: [
      {
        q: "Can you change a tire near the courthouse square?",
        a: "Yes, wherever the car is parked and a driver can work safely. Give dispatch the street and the nearest cross street, or the name of the business you are beside, and the driver comes straight to the car.",
      },
      {
        q: "I do not know where my spare is. Does that matter?",
        a: "Tell dispatch you are not sure it is there. Spares live under the trunk floor, under the vehicle or behind a panel, and some cars have none at all. If there is no usable spare, ask about a replacement tire supplied by us.",
      },
      {
        q: "Should I try the spare myself if I am on US-287?",
        a: "We would advise against it. Stay belted in with the hazards on and let the driver come to you. Working beside traffic, with the car on a jack, is the most dangerous part of a flat.",
      },
    ],
    primaryKeyword: "flat tire change Waxahachie TX",
    secondaryKeywords: ["flat tire service Waxahachie", "tire change near me Waxahachie", "roadside tire change Waxahachie TX", "spare tire installation Waxahachie"],
    longTail: ["flat tire on I-35E Waxahachie help", "change my flat tire Waxahachie TX", "flat tire downtown Waxahachie square"],
    intent: "Emergency, county-seat town mixing bypass highways and downtown streets.",
    sourceUrls: [],
  },
  {
    city: "waxahachie",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Waxahachie, TX",
    title: "Car Battery Replacement Waxahachie TX",
    metaDescription:
      "Weak battery in Waxahachie? TRA brings a new one and installs it at home, work or downtown. Price covers both, with a 1-year warranty.",
    intro:
      "When a battery gives out in Waxahachie, the usual answers are a tow to a shop or a ride to buy one. We do something else: a TRA driver brings a new battery to the car, installs it where it is parked, and the car leaves under its own power. The price on this page covers the battery and installing it, for eligible vehicles and batteries. Dispatch confirms the battery your car takes, and your total, before a driver is sent.",
    scenarios: [
      "A pickup that needs a jump every other morning before work.",
      "A car that quit after an errand near the courthouse square and will not restart.",
      "A car that sat parked while you were away and now only clicks.",
      "A battery on its last legs that you would rather swap before a long drive on US-287.",
    ],
    localContext:
      "Waxahachie is the county seat of Ellis County, and Downtown Waxahachie and its courthouse square are the kind of place where a car gets parked for a while with the engine off. A battery near the end of its life can fail right there. We install batteries in town, along I-35E, US-287 and US-77, and in neighboring Midlothian and Red Oak.",
    faqs: [
      {
        q: "My address is hard to find. What should I give dispatch?",
        a: "The full street address plus the nearest cross road or a landmark you can see. For a car parked on a road rather than at a house, say which road and which direction you were heading.",
      },
      {
        q: "Can you put a battery in a pickup or an SUV?",
        a: "Tell dispatch the year, make and model when you request help. Dispatch confirms that your vehicle and battery are eligible and gives you the total before anyone is sent.",
      },
      {
        q: "What if the real problem is not the battery?",
        a: "Then a new battery will not fix it. The driver can advise whether the battery looks like the cause, but we do not do mechanical repair, so a fault in the charging or starting system would need a shop.",
      },
    ],
    primaryKeyword: "car battery replacement Waxahachie TX",
    secondaryKeywords: ["mobile battery replacement Waxahachie", "battery installation Waxahachie", "car battery service Waxahachie TX", "new car battery Waxahachie"],
    longTail: ["car battery keeps dying Waxahachie", "mobile car battery near me Waxahachie TX", "battery replaced at my house Waxahachie"],
    intent: "Commercial, convenience-led, county-seat town with varied vehicles.",
    sourceUrls: [],
  },
  {
    city: "waxahachie",
    service: "lockout",
    h1: "Car Lockout Service in Waxahachie, TX",
    title: "Car Lockout Service Waxahachie TX",
    metaDescription:
      "Locked out in Waxahachie? TRA opens your car without damage downtown, near the square, at home or on a US-77 errand. Request help or call.",
    intro:
      "A quick stop downtown is exactly when keys get left behind: you step out near the courthouse square, the door closes, and the keys are on the seat. When that happens in Waxahachie, a TRA driver comes to the car, confirms it is yours and opens it without damage, using non-destructive entry whenever the vehicle allows. You skip the spare-key run and the tow.",
    scenarios: [
      "Keys on the seat after a quick errand in Downtown Waxahachie.",
      "A fob that died in a driveway just before you left for work.",
      "Keys shut in the trunk after loading, which is a separate job from a door.",
      "A pet shut inside a locked car on a hot afternoon. If they are in danger, call 911 first.",
    ],
    localContext:
      "Downtown Waxahachie and its courthouse square sit inside a road system of I-35E on the west, US-287 across the north and US-77 through downtown. Lockouts there are mostly street or lot calls, so the driver needs the street and the nearest cross street more than a building name. We also cover Midlothian and Red Oak, the cities beside it.",
    faqs: [
      {
        q: "I am by the courthouse square and cannot think of the street. What do I tell dispatch?",
        a: "Share your location from your phone's map if you can, or name the nearest business and cross street. The driver only needs to know where the car is, not an exact address.",
      },
      {
        q: "What does the driver need to see?",
        a: "ID or another way to confirm the vehicle is yours, before anything is opened. If your wallet is locked in the car as well, say so when you call.",
      },
      {
        q: "Is a coat hanger worth trying while I wait?",
        a: "Please do not. A hanger or a wedge can scratch paint or damage the door seal and the lock. The driver uses non-destructive entry whenever the vehicle allows, which is the reason to wait.",
      },
    ],
    primaryKeyword: "car lockout service Waxahachie TX",
    secondaryKeywords: ["locked out of car Waxahachie", "car unlock Waxahachie TX", "auto lockout Waxahachie", "vehicle lockout Waxahachie"],
    longTail: ["locked keys in car Waxahachie TX", "car unlock near me Waxahachie", "locked out downtown Waxahachie square"],
    intent: "Emergency, near-me, downtown street-parking calls.",
    sourceUrls: [],
  },
  {
    city: "waxahachie",
    service: "jump-start",
    h1: "Jump Start Service in Waxahachie, TX",
    title: "Jump Start Service Waxahachie TX",
    metaDescription:
      "Car won't start in Waxahachie? TRA jumps it downtown, in a driveway or at a US-287 stop. Local DFW dispatch, 24/7. Request help or call.",
    intro:
      "The most frustrating dead battery is the one that dies after the car has been fine all day. You come back to the car in Waxahachie, turn the key and get a click. A TRA driver comes with a jump pack and restarts the engine on the spot, so the day carries on without a tow.",
    scenarios: [
      "A car that will not restart after a stop on US-77 downtown.",
      "An interior light left on overnight in a driveway.",
      "A battery weakened by summer heat that fails on the first cold snap.",
      "A car that clicks at the end of a long trip up I-35E.",
    ],
    localContext:
      "Waxahachie's main roads are I-35E on the west side, US-287 across the north and US-77 through downtown. Short stops in Downtown Waxahachie do not give a battery much time to recover, and a car switched off there may not start again. Red Oak and Midlothian are the neighboring cities we cover too.",
    faqs: [
      {
        q: "What should I do before the driver arrives?",
        a: "Switch off all electronics and accessories, release the hood if it is safe to do so, and stay somewhere well lit and visible. Do not keep turning the key, since each try takes more from a battery that is already low.",
      },
      {
        q: "Can a completely drained battery be jumped?",
        a: "Often, if it was drained by something like a light left on. A battery that has failed will not hold the charge, and the driver can tell you whether replacing it makes more sense.",
      },
      {
        q: "Can you jump start a car parked on a street in Downtown Waxahachie?",
        a: "Yes, as long as the driver can reach the battery and work safely beside the car. Give dispatch the street and the nearest cross street, and say if the hood will not open.",
      },
    ],
    primaryKeyword: "jump start service Waxahachie TX",
    secondaryKeywords: ["dead battery Waxahachie", "jump start near me Waxahachie", "car won't start Waxahachie TX", "mobile jump start Waxahachie"],
    longTail: ["24 hour jump start Waxahachie TX", "car battery died downtown Waxahachie", "jump start Waxahachie square"],
    intent: "Emergency, mobile, stop-and-start errands in a county seat.",
    sourceUrls: [],
  },
  {
    city: "waxahachie",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Waxahachie, TX",
    title: "Mobile Tire Repair Waxahachie TX",
    metaDescription:
      "Nail in a tire in Waxahachie? TRA plugs or patches tread punctures where your car is parked, with no spare needed. Request help or call.",
    intro:
      "A tire that needs air every few days is a tire with a leak. In Waxahachie, where a drive can mean the I-35E bypass one day and the courthouse square the next, picking up a nail is easy and finding it is the hard part. Once the puncture is located in the tread, a TRA driver plugs or patches it where the car is parked, and your spare stays untouched.",
    scenarios: [
      "A tire that loses a few pounds every few days with nothing visible.",
      "A nail head found in the tread after a drive along US-287.",
      "A pressure light that came on while the car sat in Downtown Waxahachie after lunch.",
      "A tire that looked fine at night and is low in the morning, in a driveway.",
    ],
    localContext:
      "Debris on I-35E, US-287 or US-77 can leave a tire with a slow leak that shows up hours later, in Downtown Waxahachie or on a driveway. The repair is done at the car in any of those places, in town or in neighboring Midlothian and Red Oak.",
    faqs: [
      {
        q: "Can you repair a tire that has already gone flat?",
        a: "Sometimes. If the tire was driven on while flat, the sidewall may be damaged, and that cannot be repaired. The driver checks and tells you. If it cannot be repaired, you choose between your spare and a replacement tire supplied by us.",
      },
      {
        q: "What should I do with the tire until you arrive?",
        a: "Avoid driving on a visibly low tire, keep the hazards on if you are at a roadside, and note where on the tire the damage is if you can see it.",
      },
      {
        q: "Is it better to repair or replace?",
        a: "If the puncture is in the tread and within repairable limits, a repair is the simpler fix. Sidewall damage or a large hole means the tire has to be replaced.",
      },
    ],
    primaryKeyword: "mobile tire repair Waxahachie TX",
    secondaryKeywords: ["tire plug Waxahachie", "tire patch Waxahachie", "nail in tire Waxahachie", "flat tire repair Waxahachie TX"],
    longTail: ["screw in tire repair near me Waxahachie", "slow leak tire repair Waxahachie TX", "tire pressure light on Waxahachie help"],
    intent: "Commercial-urgent, repair-before-replace, slow-leak awareness.",
    sourceUrls: [],
  },

  // ===================== DUNCANVILLE =====================
  {
    city: "duncanville",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Duncanville, TX",
    title: "Flat Tire Change Duncanville TX",
    metaDescription:
      "Flat tire in Duncanville? TRA puts on your usable spare on I-20, US-67 or at home. Request help online or call, and stay safe while you wait.",
    intro:
      "Duncanville is crossed by two roads that matter for flats: I-20, which runs across the northern part of the city, and US-67 through the eastern part. A tire that fails on either leaves you at speed with traffic close. If the car carries a usable spare, a TRA driver comes to you, changes the tire and sends you on. Flats at home are covered the same way.",
    scenarios: [
      "A tire that let go at highway speed on I-20.",
      "A flat on US-67 on the east side while heading home.",
      "A tire found flat in an apartment parking space, with other cars close on both sides.",
      "A slow leak that finished overnight on a residential street.",
    ],
    localContext:
      "Duncanville sits in southwestern Dallas County, with I-20 across its northern part and US-67 through the eastern part. Dallas, Cedar Hill and DeSoto all share a border with it, so the road that put the nail in your tire may be a city limit away from where you finally notice. We change tires in all four cities, wherever the car is.",
    faqs: [
      {
        q: "I am stopped on the I-20 shoulder. What should I do?",
        a: "If the car is in a live lane, or anyone is in danger, call 911 first. Otherwise turn on the hazards, keep your seatbelt on and stay in the car, then call us. Do not try to change it beside traffic.",
      },
      {
        q: "What do you need to know when I call?",
        a: "Where the car is, its year, make and model, and whether there is a usable spare in the vehicle. If you are not sure the spare is there, say so and dispatch will plan for it.",
      },
      {
        q: "Do you work in apartment complexes?",
        a: "Yes, wherever the car is parked and a driver can work safely. Give the complex name, the building and the space, or the nearest cross street.",
      },
    ],
    primaryKeyword: "flat tire change Duncanville TX",
    secondaryKeywords: ["flat tire service Duncanville", "tire change near me Duncanville", "roadside tire change Duncanville TX", "spare tire installation Duncanville"],
    longTail: ["flat tire on I-20 Duncanville help", "change my flat tire Duncanville TX", "24 hour tire change Duncanville"],
    intent: "Emergency, residential suburb crossed by I-20 and US-67. Thin local data; angle is road type.",
    sourceUrls: [],
  },
  {
    city: "duncanville",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Duncanville, TX",
    title: "Car Battery Replacement Duncanville TX",
    metaDescription:
      "Dying battery in Duncanville? TRA installs a new one at your car, no tow needed. Price covers battery and installation. 1-year warranty.",
    intro:
      "If a battery has already needed a jump, it has told you what comes next. In Duncanville we bring a new battery to the car and install it where it is parked: a driveway, an apartment space, a lot at work. The price on this page covers the battery and installing it, for eligible vehicles and batteries, and dispatch confirms which battery your car takes, and your total, before anyone is sent.",
    scenarios: [
      "A car that needs a jump every few mornings before the I-20 commute.",
      "A battery that died in a shared parking lot where the car is boxed in by others.",
      "A dash full of warning lights after a rough start.",
      "A battery several years old, replaced before the first cold snap instead of after it.",
    ],
    localContext:
      "Duncanville drivers split their time between I-20 across the north and US-67 through the east side, with Dallas, Cedar Hill and DeSoto at the city's borders. Short hops between those roads do not give a battery long to recharge, so a worn one tends to fail at the curb rather than on the highway. Whether the car is at home off US-67 or parked near I-20, we install the battery there.",
    faqs: [
      {
        q: "What if my battery is under the rear seat?",
        a: "Some cars put the battery under a seat or behind panels, which takes longer than one under the hood. That is why dispatch confirms the battery and your total before sending anyone.",
      },
      {
        q: "What does eligible mean?",
        a: "The price applies to eligible vehicles and batteries, and battery pricing varies by vehicle and battery type. Give dispatch the year, make and model, and the VIN if you can reach it, and they confirm compatibility and your total before a driver is sent.",
      },
      {
        q: "What should I do while I wait?",
        a: "Turn off all electronics and accessories so the battery is not drained further, pop the hood if it is safe to do so, and have the year, make and model ready. Battery fit varies by vehicle.",
      },
    ],
    primaryKeyword: "car battery replacement Duncanville TX",
    secondaryKeywords: ["mobile battery replacement Duncanville", "battery installation Duncanville", "car battery service Duncanville TX", "new car battery Duncanville"],
    longTail: ["car battery keeps dying Duncanville", "mobile car battery near me Duncanville TX", "battery replaced at my apartment Duncanville"],
    intent: "Commercial, convenience-led, residential suburb with apartment parking.",
    sourceUrls: [],
  },
  {
    city: "duncanville",
    service: "lockout",
    h1: "Car Lockout Service in Duncanville, TX",
    title: "Car Lockout Service Duncanville TX",
    metaDescription:
      "Locked out in Duncanville? TRA opens your car without damage at home, work, a store or along I-20 and US-67. Request help online or call.",
    intro:
      "When the keys end up on the driver's seat and the door is locked, what happens next depends on who you can reach. In Duncanville, TRA sends a driver to the car to confirm it is yours and open it without damage, so you are not waiting on a spare key from across town or arranging a tow you do not need.",
    scenarios: [
      "Keys locked in the car at a store along US-67 while you ran in.",
      "A door that locked itself at home with the engine running.",
      "A fob with a dead battery and the mechanical key left behind.",
      "A child inside a locked car in the heat. If they are in danger, call 911 first, then call us.",
    ],
    localContext:
      "Duncanville sits in southwestern Dallas County with I-20 across the north and US-67 through the east, and Dallas, Cedar Hill and DeSoto at its borders. Whether the car is at home, at work or at a store along either road, the driver needs a precise place to go to, so give a cross street or the store name when you call.",
    faqs: [
      {
        q: "What if my spare key is a long way away?",
        a: "Opening the car does not depend on having a key. The driver opens the vehicle, and you can be back on the road without the spare.",
      },
      {
        q: "My fob died, not the car. Does that change anything?",
        a: "Not for the lockout. A dead fob is a common reason people call, and the driver opens the vehicle the same way. Replacing the fob battery afterward is up to you.",
      },
      {
        q: "What do I need to show the driver?",
        a: "ID or another way to confirm the vehicle is yours. The driver checks before opening anything, which is why nobody else can have your car opened by calling us.",
      },
    ],
    primaryKeyword: "car lockout service Duncanville TX",
    secondaryKeywords: ["locked out of car Duncanville", "car unlock Duncanville TX", "auto lockout Duncanville", "vehicle lockout Duncanville"],
    longTail: ["locked keys in car Duncanville TX", "car unlock near me Duncanville", "24 hour car lockout Duncanville"],
    intent: "Emergency, near-me, residential and errand lockouts. Thin local data; angle is the call itself.",
    sourceUrls: [],
  },

  // ===================== LANCASTER =====================
  {
    city: "lancaster",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Lancaster, TX",
    title: "Flat Tire Change Lancaster TX",
    metaDescription:
      "Flat tire in Lancaster? If you have a usable spare, TRA puts it on along I-35E, I-20, downtown or at home. Request help online or call.",
    intro:
      "Lancaster is bordered by freeways: I-35E forms its western boundary and I-20 crosses the far north. A flat on either is the kind of problem that is dangerous to solve yourself. If your car has a usable spare, a TRA driver comes to you in Lancaster and changes the tire, whether you are on a freeway shoulder or in a driveway near Downtown Lancaster. We text or call when the driver is on the way.",
    scenarios: [
      "A tire that failed on the I-35E side of town.",
      "A flat on I-20 at the top of the city.",
      "A tire found flat on a street near Downtown Lancaster after a day at work.",
      "A lug nut so rounded off that the wheel will not come off.",
    ],
    localContext:
      "I-35E forms Lancaster's western boundary and I-20 crosses its far north, so a freeway flat here happens at the edge of the city. Dallas, DeSoto and Red Oak all border the city, so a tire that goes down near any of those lines is a call we take. If you are stopped in a live lane, call 911 before anything else.",
    faqs: [
      {
        q: "I am on I-35E and not sure whether I am in Lancaster. Does it matter?",
        a: "No. Share your location pin or the nearest exit or cross street. We cover Lancaster, Dallas, DeSoto and Red Oak, so the city name does not change who comes.",
      },
      {
        q: "A lug nut is rounded off and will not budge. Can you still change the tire?",
        a: "Removing a stripped lug nut is a separate service, and it is what lets the wheel come off. Tell dispatch when you request help so the driver comes prepared.",
      },
      {
        q: "What happens after the spare is on?",
        a: "You can drive on, but most spares are limited in speed and distance, so plan to deal with the damaged tire soon. If you want it done at the car, we can supply a replacement tire.",
      },
    ],
    primaryKeyword: "flat tire change Lancaster TX",
    secondaryKeywords: ["flat tire service Lancaster", "tire change near me Lancaster", "roadside tire change Lancaster TX", "spare tire installation Lancaster"],
    longTail: ["flat tire on I-35E Lancaster help", "change my flat tire Lancaster TX", "flat tire I-20 Lancaster"],
    intent: "Emergency, freeway-edge city, near-me. Angle is the freeway boundary.",
    sourceUrls: [],
  },
  {
    city: "lancaster",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Lancaster, TX",
    title: "Car Battery Replacement Lancaster TX",
    metaDescription:
      "Failing battery in Lancaster? TRA installs a new one where your car is parked, from Downtown Lancaster to I-35E. 1-year warranty.",
    intro:
      "Slow cranking, dim headlights, a clock that resets itself: a battery usually warns you a few days before it quits. If you are seeing those signs in Lancaster, replacing it on your schedule beats replacing it on a freeway shoulder. We bring the battery to the car and install it where it is parked. The price on this page covers the battery and installing it, for eligible vehicles and batteries, and dispatch confirms your total before a driver is sent.",
    scenarios: [
      "A car that struggled to start at the end of a long shift and is now a gamble each morning.",
      "Dim headlights and slow windows on a car that is otherwise running fine.",
      "A battery that died in a Downtown Lancaster parking space after a day of errands.",
      "A car about to go onto I-20 for a long drive, with a battery of unknown age.",
    ],
    localContext:
      "Lancaster is bordered by Dallas, DeSoto and Red Oak, with I-35E as its western edge and I-20 across the far north. A battery that starts the car at home can still fail once the engine has been off for a while, so a bad one often leaves its owner stuck at the destination instead of at home. We install batteries in Downtown Lancaster and across the rest of the city.",
    faqs: [
      {
        q: "Can the battery be replaced on a street near Downtown Lancaster?",
        a: "Yes, as long as the car is somewhere a driver can work safely beside it. Give dispatch the street and the nearest cross street, and the year, make and model of the car.",
      },
      {
        q: "Which batteries are eligible?",
        a: "The price applies to eligible vehicles and batteries, and that depends on the car. Give dispatch the year, make and model, and the VIN if you can reach it, and they confirm before sending a driver.",
      },
      {
        q: "What if the new battery does not fix the problem?",
        a: "If the battery was not the cause, a fault in the charging or starting system would need a shop, because we do not do mechanical repair. The 1-year warranty covers the battery itself, so keep your invoice.",
      },
    ],
    primaryKeyword: "car battery replacement Lancaster TX",
    secondaryKeywords: ["mobile battery replacement Lancaster", "battery installation Lancaster", "car battery service Lancaster TX", "new car battery Lancaster"],
    longTail: ["car battery keeps dying Lancaster", "mobile car battery near me Lancaster TX", "battery replaced at my house Lancaster"],
    intent: "Commercial, convenience-led, early-warning battery symptoms.",
    sourceUrls: [],
  },
  {
    city: "lancaster",
    service: "lockout",
    h1: "Car Lockout Service in Lancaster, TX",
    title: "Car Lockout Service Lancaster TX",
    metaDescription:
      "Locked out in Lancaster? TRA opens your car without damage downtown, at home or near I-35E and I-20. Request help online or call.",
    intro:
      "Some lockouts are a moment of bad luck, and some are a whole evening, depending on where the car is and how far the spare key is. A TRA driver comes to the car in Lancaster, checks that it is yours and opens it without damage. You do not need a tow, a ride home for the key or a broken window.",
    scenarios: [
      "Keys on the seat of a car parked on a Downtown Lancaster street.",
      "A fob that stopped responding in a driveway before a shift.",
      "Keys shut in the trunk while loading up, which is its own job.",
      "A pet shut in a locked car on a warm day. If they are in danger, call 911 first.",
    ],
    localContext:
      "Lancaster has Downtown Lancaster, I-35E along its western boundary and I-20 across its far north, with Dallas, DeSoto and Red Oak next door. Cedar Valley College sits on the border between Lancaster and Dallas, so if you are near that line, tell dispatch which side of it you are on.",
    faqs: [
      {
        q: "I am near the Lancaster and Dallas line. Do you still come?",
        a: "Yes. We cover both Lancaster and Dallas. Give the nearest cross street or share your location pin, and say which side of the line you are on if you know.",
      },
      {
        q: "Does it matter what kind of car it is?",
        a: "Tell dispatch the year, make and model when you request help. Most vehicles can be opened without damage, and if one cannot, the driver tells you before starting.",
      },
      {
        q: "Why is the trunk different from a door?",
        a: "Reaching keys in a trunk takes different tools and longer than opening a door, so it is booked and priced as its own job.",
      },
    ],
    primaryKeyword: "car lockout service Lancaster TX",
    secondaryKeywords: ["locked out of car Lancaster", "car unlock Lancaster TX", "auto lockout Lancaster", "vehicle lockout Lancaster"],
    longTail: ["locked keys in car Lancaster TX", "car unlock near me Lancaster", "locked out downtown Lancaster"],
    intent: "Emergency, near-me, border-city lockout calls.",
    sourceUrls: [],
  },

  // ===================== MIDLOTHIAN =====================
  {
    city: "midlothian",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Midlothian, TX",
    title: "Flat Tire Change Midlothian TX",
    metaDescription:
      "Flat tire in Midlothian? TRA puts on your usable spare along US-67, US-287, near Railport or at home. Request help online or call.",
    intro:
      "Midlothian sits at the junction of US-67 and US-287, and a flat on either leaves you beside fast traffic. If your car carries a usable spare, a TRA driver comes to you and puts it on, whether you are on a highway shoulder or in a driveway. You never have to jack the car up yourself. Request help online or call.",
    scenarios: [
      "A flat on US-287 on the way to Waxahachie.",
      "A tire that went down in a workplace lot near the Railport industrial park.",
      "A blowout on US-67 heading toward Cedar Hill.",
      "A slow leak that finished overnight on a driveway before an early start.",
    ],
    localContext:
      "Midlothian is in northwestern Ellis County at the junction of US-67 and US-287, with the Railport industrial park among its landmarks. Cedar Hill, Grand Prairie and Waxahachie all border the city, so a flat can find you on either road or a few miles over a city line. The driver comes to wherever the car stopped. If you are in a live lane, call 911 first.",
    faqs: [
      {
        q: "What if I do not have a spare?",
        a: "A flat tire change puts on the spare you already carry, so without a usable spare the answer is a replacement tire supplied by us. Tell dispatch when you call so the right help is sent the first time.",
      },
      {
        q: "Is it okay to drive slowly to a safer spot?",
        a: "Only a short distance, and only to get out of the traffic lane. Driving on a flat damages the wheel as well as the tire. Then turn on the hazards and call us.",
      },
      {
        q: "Can you change a tire at a workplace lot?",
        a: "Yes, as long as the car is somewhere a driver can work safely. Give dispatch the company name or the building and the part of the lot, so the driver reaches the car and not the front gate.",
      },
    ],
    primaryKeyword: "flat tire change Midlothian TX",
    secondaryKeywords: ["flat tire service Midlothian", "tire change near me Midlothian", "roadside tire change Midlothian TX", "spare tire installation Midlothian"],
    longTail: ["flat tire on US-287 Midlothian help", "change my flat tire Midlothian TX", "flat tire US-67 Midlothian"],
    intent: "Emergency, edge-of-metro town at a highway junction, near-me.",
    sourceUrls: [],
  },
  {
    city: "midlothian",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Midlothian, TX",
    title: "Car Battery Replacement Midlothian TX",
    metaDescription:
      "Battery failing in Midlothian? TRA installs a new one at home or at work, near US-67 and US-287. Price covers both, with a 1-year warranty.",
    intro:
      "Replacing a battery should not cost you a morning in a shop. In Midlothian we bring a replacement battery to the car, wherever it is parked, and install it there. The price on this page covers the battery and installing it, for eligible vehicles and batteries. Dispatch confirms the battery your car takes, and your total, before a driver is sent.",
    scenarios: [
      "A car that struggles to start after sitting all day in a lot near the Railport industrial park.",
      "A pickup that cranks slowly on every cold morning.",
      "A battery that failed the day after a jump.",
      "A second vehicle that rarely moves and has finally stopped holding a charge.",
    ],
    localContext:
      "Midlothian is in northwestern Ellis County, at the junction of US-67 and US-287, with the Railport industrial park on the map. It borders Cedar Hill, Grand Prairie and Waxahachie, so a daily drive can cross a city line, and a battery that will not hold a charge turns that into a problem at either end. We install at home, in a workplace lot or on a quiet street, wherever the car happens to be.",
    faqs: [
      {
        q: "Can you install a battery on a pickup?",
        a: "Tell dispatch the vehicle when you request help. Dispatch confirms that your vehicle and battery are eligible, and gives you your total, before a driver is sent.",
      },
      {
        q: "Can it be done in my workplace lot?",
        a: "Yes, if the vehicle is somewhere a driver can work safely. Give dispatch the building or company name and where in the lot the car sits.",
      },
      {
        q: "Is there a warranty on the battery?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice, which is what warranty service is processed against.",
      },
    ],
    primaryKeyword: "car battery replacement Midlothian TX",
    secondaryKeywords: ["mobile battery replacement Midlothian", "battery installation Midlothian", "car battery service Midlothian TX", "new car battery Midlothian"],
    longTail: ["car battery keeps dying Midlothian", "mobile car battery near me Midlothian TX", "battery replaced at work Midlothian"],
    intent: "Commercial, convenience-led, workplace and truck owners.",
    sourceUrls: [],
  },
  {
    city: "midlothian",
    service: "lockout",
    h1: "Car Lockout Service in Midlothian, TX",
    title: "Car Lockout Service Midlothian TX",
    metaDescription:
      "Locked out in Midlothian? TRA opens your car or truck without damage near US-67, US-287 or the Railport park. Request help online or call.",
    intro:
      "Keys get locked in vehicles at job sites as easily as in grocery store lots, and the fix is the same: a TRA driver comes to the vehicle, confirms it is yours and opens it without damage. In Midlothian that can mean a car in a driveway, a pickup in a workplace lot or a vehicle parked along US-67 or US-287. Request help online or call.",
    scenarios: [
      "Keys locked in a pickup at a workplace near the Railport industrial park.",
      "A fob that quit before the drive down US-287.",
      "Keys shut in the trunk after loading for a weekend, which is booked as its own job.",
      "A door that locked with the engine running in a driveway.",
    ],
    localContext:
      "Midlothian lies at the junction of US-67 and US-287 in northwestern Ellis County. Cedar Hill, Grand Prairie and Waxahachie sit beside it, so a lockout away from home can leave the spare key a town away. Give dispatch the road, the nearest cross street and whether the car is in a lot or on a street.",
    faqs: [
      {
        q: "Can you open a pickup or a work vehicle?",
        a: "Tell dispatch the vehicle when you request help. Dispatch confirms it before sending a driver, so nobody arrives without the right approach for it.",
      },
      {
        q: "Do I need to be at the car?",
        a: "Yes. The driver confirms on site that the vehicle is yours, so be there with ID when the driver arrives.",
      },
      {
        q: "What if the keys are in the trunk?",
        a: "Keys in a trunk are a separate job from a door, because they take different tools. Say so when you call and dispatch books the right one.",
      },
    ],
    primaryKeyword: "car lockout service Midlothian TX",
    secondaryKeywords: ["locked out of car Midlothian", "car unlock Midlothian TX", "auto lockout Midlothian", "truck lockout Midlothian"],
    longTail: ["locked keys in car Midlothian TX", "car unlock near me Midlothian", "locked keys in pickup Midlothian"],
    intent: "Emergency, near-me, workplace and pickup lockouts.",
    sourceUrls: [],
  },

  // ===================== RED OAK =====================
  {
    city: "red-oak",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Red Oak, TX",
    title: "Flat Tire Change Red Oak TX",
    metaDescription:
      "Flat tire on I-35E or at home in Red Oak? TRA puts on your usable spare where you are. Request help online or call, and stay safe.",
    intro:
      "Red Oak is 18 miles south of downtown Dallas on I-35E, so the drive to the city is a long one. A flat there is a different problem from a flat at the corner store: you may be far from where you started, with traffic at highway speed beside you. If your car carries a usable spare, a TRA driver comes to you and puts it on.",
    scenarios: [
      "A tire that let go on I-35E on the way into Dallas, with traffic at speed.",
      "A flat found when you pull into the driveway after a long day.",
      "A tire that failed between the two Red Oak exits on I-35E.",
      "A flat on US-77 on a local errand.",
    ],
    localContext:
      "Red Oak is on the northern edge of Ellis County, 18 miles south of downtown Dallas on I-35E, which has two exits in town. US-77 is the city's other route. Lancaster and Waxahachie both border Red Oak, so help for a flat on any of those stretches is the same call. If you are stopped in a live lane, call 911 before anything else.",
    faqs: [
      {
        q: "I am already in Dallas when the tire goes. Do you still come?",
        a: "Yes. We cover Dallas and the rest of Dallas-Fort Worth, so a flat on the commute is handled wherever it happens. Share your location pin or the nearest exit.",
      },
      {
        q: "Can I drive the spare all the way to work?",
        a: "Most spares are limited in speed and distance, so a long highway commute is the thing to ask about. The driver tells you what yours is rated for, and a spare is meant as a short-term fix.",
      },
      {
        q: "My tire is low but not flat. Should I wait?",
        a: "Do not keep driving on it. A few more miles on a low tire can ruin it and damage the wheel. Tell dispatch what you see, and the driver can look at whether a repair or the spare is the next step.",
      },
    ],
    primaryKeyword: "flat tire change Red Oak TX",
    secondaryKeywords: ["flat tire service Red Oak", "tire change near me Red Oak", "roadside tire change Red Oak TX", "spare tire installation Red Oak"],
    longTail: ["flat tire on I-35E Red Oak help", "change my flat tire Red Oak TX", "24 hour tire change Red Oak"],
    intent: "Emergency, long-commute town on I-35E, near-me.",
    sourceUrls: [],
  },
  {
    city: "red-oak",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Red Oak, TX",
    title: "Car Battery Replacement Red Oak TX",
    metaDescription:
      "Weak battery in Red Oak? TRA installs a new one at your driveway or workplace, no tow needed. Price covers both, with a 1-year warranty.",
    intro:
      "A battery that starts the car at home but fails in a parking garage downtown is a particular kind of trouble when home is 18 miles away. TRA brings a new battery to the car in Red Oak, or wherever the car sits, and installs it there. The price on this page covers the battery and installing it, for eligible vehicles and batteries, and dispatch confirms the right battery and your total before a driver is sent.",
    scenarios: [
      "A car that started at home and would not restart at the end of a day in Dallas.",
      "Slow cranking when you back out of the driveway, getting worse each week.",
      "A battery that failed after the car sat for a long weekend.",
      "A car pulled out of storage that has not moved in months.",
    ],
    localContext:
      "Red Oak is on the northern edge of Ellis County, 18 miles south of downtown Dallas on I-35E, with two exits in town. A daily drive of that length tends to hide a failing battery until the car sits, and the trouble then shows up in the driveway or in a parking space far from home. We install in Red Oak and in Lancaster and Waxahachie, the cities that border it.",
    faqs: [
      {
        q: "Can you replace the battery where I work instead of at home?",
        a: "Yes. Tell dispatch where the car is, including the building and the level or row. We dispatch across Dallas-Fort Worth, so the car does not have to be in Red Oak.",
      },
      {
        q: "How do I know it is the battery and not the alternator?",
        a: "A car that keeps dying after a jump, or one that starts and then loses power while running, may have a charging fault. The driver can advise, but we do not do mechanical repair, so an alternator would need a shop.",
      },
      {
        q: "Do I need my VIN?",
        a: "No. The year, make and model are enough to identify the right battery. The VIN simply confirms the exact fit if you can reach it easily.",
      },
    ],
    primaryKeyword: "car battery replacement Red Oak TX",
    secondaryKeywords: ["mobile battery replacement Red Oak", "battery installation Red Oak", "car battery service Red Oak TX", "new car battery Red Oak"],
    longTail: ["car battery keeps dying Red Oak", "mobile car battery near me Red Oak TX", "battery replaced at my house Red Oak"],
    intent: "Commercial, convenience-led, long-commute drivers.",
    sourceUrls: [],
  },
  {
    city: "red-oak",
    service: "lockout",
    h1: "Car Lockout Service in Red Oak, TX",
    title: "Car Lockout Service Red Oak TX",
    metaDescription:
      "Locked out in Red Oak? TRA opens your car without damage at home, a store or off I-35E. Request help online or call.",
    intro:
      "A lockout in Red Oak can mean the spare key is a long drive away, since downtown Dallas is 18 miles up I-35E. A TRA driver comes to the car, confirms it is yours and opens it without damage, so the spare key stays where it is. You get back to the day without a tow or a drive to fetch anything.",
    scenarios: [
      "Keys on the seat at a stop off I-35E.",
      "A car that locked itself at home as you left for work.",
      "A fob that died at the end of a long day, with the key blade at home.",
      "Keys shut in the trunk after loading, which is priced as its own job.",
    ],
    localContext:
      "Red Oak sits at the northern edge of Ellis County, with I-35E, which has two exits in town, and US-77 as its routes. Lancaster and Waxahachie both border it. A lockout near an I-35E exit or on a US-77 errand is the same call: give the driver the nearest cross street or exit, and say whether you are in a lot or on a street.",
    faqs: [
      {
        q: "Do I need a spare key for you to open the car?",
        a: "No. Opening the car does not depend on having a key, which is the reason this service exists.",
      },
      {
        q: "Will you need to see my registration or ID?",
        a: "The driver needs ID or another way to confirm the vehicle is yours before opening it. If you are not carrying either, tell dispatch when you call.",
      },
      {
        q: "What if I locked the keys in with the engine still running?",
        a: "It does not change how the car is opened. Mention the running engine when you call so dispatch knows what to expect.",
      },
    ],
    primaryKeyword: "car lockout service Red Oak TX",
    secondaryKeywords: ["locked out of car Red Oak", "car unlock Red Oak TX", "auto lockout Red Oak", "vehicle lockout Red Oak"],
    longTail: ["locked keys in car Red Oak TX", "car unlock near me Red Oak", "24 hour car lockout Red Oak"],
    intent: "Emergency, near-me, spare-key-is-far lockout calls.",
    sourceUrls: [],
  },

  // ===================== FORNEY =====================
  {
    city: "forney",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Forney, TX",
    title: "Flat Tire Change Forney TX",
    metaDescription:
      "Flat tire in Forney? With a usable spare, TRA puts it on along US-80 or at home in Kaufman County. Request help online or call.",
    intro:
      "If your car carries a usable spare, a flat in Forney is a short job for a driver with the right tools. A TRA driver comes to you, whether you are stopped along US-80 or parked in front of your house, and puts the spare on so you never have to jack the car up yourself. Request help online or call, and we text or call when the driver is on the way.",
    scenarios: [
      "A blowout on US-80 where cars pass at highway speed.",
      "A flat found at home on a Forney street before the morning drive.",
      "A tire that let go on the road back from Lake Ray Hubbard.",
      "A spare in the trunk that has never been touched.",
    ],
    localContext:
      "Forney is in northwestern Kaufman County, about 4 miles southeast of Lake Ray Hubbard, and US-80 passes through it as a limited-access highway. No other city we serve borders Forney, so a call from here is a call for Forney itself. On a limited-access highway the shoulder is usually the only place to stop, so if you are in a live lane, call 911 first, and otherwise stay belted in with the hazards on.",
    faqs: [
      {
        q: "How do I tell dispatch where I am on US-80?",
        a: "Share your location pin if you can. Otherwise give the last exit or cross street you passed, the direction you were heading and any landmark you can see. That is usually enough for a driver to find the car.",
      },
      {
        q: "What if the spare is flat or missing?",
        a: "A flat tire change puts on the spare you already carry, so without a usable spare the answer is a replacement tire supplied by us. Tell dispatch when you call, so the right help is sent first time.",
      },
      {
        q: "How far can I drive on the spare?",
        a: "Most spares are limited in speed and distance. The driver tells you what yours is rated for so you can plan the next step instead of guessing.",
      },
    ],
    primaryKeyword: "flat tire change Forney TX",
    secondaryKeywords: ["flat tire service Forney", "tire change near me Forney", "roadside tire change Forney TX", "spare tire installation Forney"],
    longTail: ["flat tire on US-80 Forney help", "change my flat tire Forney TX", "24 hour tire change Forney"],
    intent: "Emergency, standalone edge-of-metro town on US-80. Thin local data; angle is the highway and the isolation from other served cities.",
    sourceUrls: [],
  },
  {
    city: "forney",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Forney, TX",
    title: "Car Battery Replacement Forney TX",
    metaDescription:
      "Weak battery in Forney? TRA installs a new one at your home or work, no tow needed. Price covers battery and installation. 1-year warranty.",
    intro:
      "In Forney, a dead battery does not have to mean arranging a tow. A TRA driver brings a new battery to the car and installs it where it is parked, so there is no trip to a shop and no day without a car. The price on this page covers the battery and installing it, for eligible vehicles and batteries, and dispatch confirms the right battery and your total before a driver is sent.",
    scenarios: [
      "A car that clicks instead of cranking after a week parked at home.",
      "A battery that died in a store lot after the engine was switched off for an errand.",
      "Dim lights and a slow start on the first cold morning of the year.",
      "A second car in the driveway that rarely leaves it.",
    ],
    localContext:
      "Forney is in northwestern Kaufman County, about 4 miles southeast of Lake Ray Hubbard, with US-80 passing through town as a limited-access highway. Long runs on a road like that keep a healthy battery charged, but they also hide a weak one: the car starts every day until it does not. We install the battery wherever the car sits in Forney, at home, at work or in a store lot.",
    faqs: [
      {
        q: "My car died in a store lot. Can you replace the battery there?",
        a: "Yes, if the car is somewhere a driver can work safely. Give dispatch the store and where in the lot the car sits, and have the year, make and model ready, since battery fit varies by vehicle.",
      },
      {
        q: "What happens between my request and the driver coming out?",
        a: "You request help online or call. Dispatch asks for the year, make and model, confirms the battery your car takes and gives you the total, and only then is a driver sent. We text or call when the driver is on the way.",
      },
      {
        q: "How long is the warranty?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice, because that is what warranty service is processed against.",
      },
    ],
    primaryKeyword: "car battery replacement Forney TX",
    secondaryKeywords: ["mobile battery replacement Forney", "battery installation Forney", "car battery service Forney TX", "new car battery Forney"],
    longTail: ["car battery keeps dying Forney", "mobile car battery near me Forney TX", "battery replaced at my house Forney"],
    intent: "Commercial, convenience-led, standalone town. Thin local data; angle is highway driving hiding a weak battery.",
    sourceUrls: [],
  },
  {
    city: "forney",
    service: "lockout",
    h1: "Car Lockout Service in Forney, TX",
    title: "Car Lockout Service Forney TX",
    metaDescription:
      "Locked out in Forney? TRA opens your car without damage at home, a store lot or along US-80. Request help online or call.",
    intro:
      "A locked car is easy to open with the right tools and a real headache without them. A TRA driver comes to the car in Forney, confirms it is yours and opens it using non-destructive entry whenever the vehicle allows. You do not need a tow or a spare key, and the car stays where you parked it.",
    scenarios: [
      "Keys on the seat of a car in a Forney store lot.",
      "A door that locked itself in the driveway while you carried bags inside.",
      "A fob that stopped responding before the morning drive.",
      "Keys shut in the trunk after loading, which is booked as a separate job.",
    ],
    localContext:
      "Forney is in northwestern Kaufman County, and US-80 is the one highway we list for it. A car locked in a driveway and a car locked in a store lot are the same job. Give dispatch the street and the nearest cross street, or the store name, and say where the car sits.",
    faqs: [
      {
        q: "Can you come to a driveway if I am inside the house?",
        a: "Yes. The driver still confirms the vehicle is yours, so have your ID ready when they arrive.",
      },
      {
        q: "Will opening the car damage anything?",
        a: "The driver uses non-destructive entry whenever the vehicle allows. If a particular vehicle cannot be opened safely without damage, the driver tells you before starting.",
      },
      {
        q: "What if a child is locked inside?",
        a: "If a child or pet is in danger, call 911 first. Then call us and tell dispatch what is happening so it is handled as urgent.",
      },
    ],
    primaryKeyword: "car lockout service Forney TX",
    secondaryKeywords: ["locked out of car Forney", "car unlock Forney TX", "auto lockout Forney", "vehicle lockout Forney"],
    longTail: ["locked keys in car Forney TX", "car unlock near me Forney", "24 hour car lockout Forney"],
    intent: "Emergency, near-me, driveway and store-lot lockouts. Thin local data; angle is the call itself.",
    sourceUrls: [],
  },
];
