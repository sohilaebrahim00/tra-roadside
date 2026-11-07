import type { CityServiceContent } from "./city-service-pages";

/** City x Service pages for Collin and Denton counties, and the Park Cities. The rules are at the top of city-service-pages.ts. */
export const PAGES_NORTH: CityServiceContent[] = [
  // ===================== PROSPER =====================
  {
    city: "prosper",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Prosper, TX",
    title: "Flat Tire Change Prosper TX",
    metaDescription:
      "Flat tire in Prosper? If your car carries a usable spare, TRA puts it on where you are, from a driveway to US-380 or Preston Road. Call now.",
    intro:
      "Most Prosper drives begin in a garage, which is why a flat tire so often shows up at the worst moment: the car is loaded, the morning drop-off is waiting, and one corner is sitting low. If the vehicle carries a usable spare, a TRA driver comes to wherever it stopped and swaps the flat for the spare. There is no tow and no wheel-changing beside moving traffic. We text or call when the driver is on the way.",
    scenarios: [
      "A tire found sagging in the driveway of a newer subdivision just before the morning drop-off.",
      "A blowout on US-380 with traffic passing close beside the car.",
      "A flat on Preston Road that you drove into a parking lot to get out of the lane.",
      "A spare you have never touched and are not sure still holds air.",
    ],
    localContext:
      "Prosper lies in Collin and Denton counties and borders Frisco, McKinney, Little Elm and Celina. The Dallas North Tollway ends at First Street here, and US-380 and Preston Road cross the town. If a tire fails on one of those roads, get as far from the traffic lanes as you can before you call, and keep the hazards on.",
    faqs: [
      {
        q: "Can you change a tire on a residential street?",
        a: "Usually, yes. A driver needs room to work safely around the car, so tell dispatch the street and house number and mention anything that limits space, such as cars parked on both sides.",
      },
      {
        q: "I'm on US-380 and can't get clear of the lane. What should I do?",
        a: "If you're in a live traffic lane, or anyone is hurt or in danger, call 911 first. If you can reach a shoulder, turn on your hazards, stay buckled in and call us. Standing beside a car on a busy road is the dangerous part of a flat.",
      },
      {
        q: "What counts as a usable spare?",
        a: "One that is in the vehicle, holds air and is meant for your car. A compact spare counts. If you aren't sure yours is usable, say so when you call and dispatch will tell you whether to ask for a replacement tire instead.",
      },
    ],
    primaryKeyword: "flat tire change Prosper TX",
    secondaryKeywords: ["flat tire service Prosper", "spare tire change Prosper", "roadside tire change Prosper TX"],
    longTail: ["flat tire on US-380 Prosper", "change my flat tire near me Prosper", "flat tire at home Prosper TX"],
    intent: "Emergency, near-me; at-home or road-edge flat in a young, growing Collin County town. No competitor source page; built from the TRA service catalog.",
    sourceUrls: [],
  },
  {
    city: "prosper",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Prosper, TX",
    title: "Car Battery Replacement Prosper TX",
    metaDescription:
      "Weak battery in Prosper? TRA brings a new battery to your driveway or lot and installs it there. Installation included for eligible vehicles.",
    intro:
      "In a garage-first town like Prosper, a failing battery usually shows up at home: the car that clicked this morning and will do it again tomorrow. We bring the replacement to the driveway and install it there, so nobody has to arrange a ride to a shop. On some cars the battery isn't under the hood at all but under the rear seat, which is why dispatch confirms the right battery for your vehicle, and your total, before a driver is sent. The price shown on this page covers the battery and installing it, for eligible vehicles and batteries.",
    scenarios: [
      "A second vehicle that only makes short trips to school and the store and never gets a long recharge.",
      "A car that needed a jump after a weekend away and needs another one now.",
      "Slow windows and a dim dashboard on a hot afternoon.",
      "A battery old enough that you would rather change it in the driveway than in a parking lot.",
    ],
    localContext:
      "Prosper's main routes are the Dallas North Tollway, which ends at First Street in the town, US-380 and Preston Road. The town lies in Collin and Denton counties and borders Frisco, McKinney, Little Elm and Celina. Short hops between home, school and the stores wear on a battery in a way a long commute does not, and the first sign is usually a car that won't wake up after a few days parked.",
    faqs: [
      {
        q: "How do you know which battery my car needs?",
        a: "From the year, make and model you give dispatch. The VIN is optional, but it confirms the exact battery if you can reach it easily. Dispatch confirms compatibility before anyone is sent.",
      },
      {
        q: "Can you do it in my driveway or garage?",
        a: "Yes, as long as the driver can work safely around the car. Tell dispatch whether it is in the driveway, in the garage or on the street.",
      },
      {
        q: "If the car starts after a jump, do I still need a new battery?",
        a: "Not always. A jump start gets a drained battery going, but one that won't hold a charge leaves you stuck again. If you have needed a jump more than once, replacement is usually the better move, and your driver can advise on site.",
      },
    ],
    primaryKeyword: "car battery replacement Prosper TX",
    secondaryKeywords: ["mobile battery replacement Prosper", "battery installation Prosper", "new car battery Prosper TX"],
    longTail: ["car battery replaced at my house Prosper", "battery keeps dying Prosper TX", "mobile battery service near me Prosper"],
    intent: "Commercial, convenience-led; at-home battery swap for garage-based households. Built from the TRA service catalog.",
    sourceUrls: [],
  },
  {
    city: "prosper",
    service: "lockout",
    h1: "Car Lockout Service in Prosper, TX",
    title: "Car Lockout Service Prosper TX",
    metaDescription:
      "Locked out in Prosper? TRA opens your car using non-destructive entry whenever possible, at home or in a lot off US-380. Call for help.",
    intro:
      "With a keyless fob, locking the keys in is easy to do: the fob goes in a bag, the bag goes in the back, and the doors lock behind you. A TRA driver comes to wherever the car is parked in Prosper, confirms you are entitled to the vehicle, and opens it using non-destructive entry whenever possible. Keys shut in the trunk are a different job from keys on the seat.",
    scenarios: [
      "Keys left in the cupholder while unloading groceries at a lot off Preston Road.",
      "Keys shut in the trunk after loading sports gear, which is a separate job from opening a door.",
      "A fob battery that gave out in a parking lot off US-380 with the spare key at home.",
      "A door that locked itself with the engine still running.",
    ],
    localContext:
      "Prosper is a Collin County town with a stretch in Denton County, bordered by Frisco, McKinney, Little Elm and Celina. Preston Road, US-380 and the Dallas North Tollway, which ends at First Street, are the routes between home and the shops. We open cars in parking lots along those roads and on the residential streets and driveways in between.",
    faqs: [
      {
        q: "A child or pet is locked in the car. What do I do?",
        a: "If anyone inside is in danger, call 911 first. Then call us: we treat it as urgent and send the nearest driver first.",
      },
      {
        q: "What do I need to show the driver?",
        a: "ID, or another way to show the vehicle is yours. The driver confirms ownership before opening anything.",
      },
      {
        q: "Can you open a car with keyless entry?",
        a: "Tell dispatch the year, make and model when you request help so the right approach is planned before a driver sets out. The driver uses non-destructive entry whenever possible.",
      },
    ],
    primaryKeyword: "car lockout service Prosper TX",
    secondaryKeywords: ["locked out of car Prosper", "car unlock Prosper TX", "keys locked in car Prosper"],
    longTail: ["locked keys in car near me Prosper", "keyless fob locked in car Prosper", "keys locked in trunk Prosper TX"],
    intent: "Emergency, near-me, keyless-fob lockouts at home and in shopping lots.",
    sourceUrls: [],
  },
  {
    city: "prosper",
    service: "jump-start",
    h1: "Jump Start Service in Prosper, TX",
    title: "Jump Start Service Prosper TX",
    metaDescription:
      "Car won't start in Prosper? TRA brings a jump start to your driveway, or a lot off Preston Road or US-380. Local DFW dispatch, 24/7.",
    intro:
      "A Prosper driver who turns the key and hears clicking, or a slow crank that gives up, usually has a drained battery rather than a broken car. A TRA driver brings a portable jump pack to the vehicle, wherever in town it sits, and gets the engine running so you can drive away under your own power. We text or call when the driver is on the way.",
    scenarios: [
      "A dome light left on overnight in a parking loted in the garage.",
      "A car that won't start in a shopping center lot off Preston Road after a long errand.",
      "The first heat wave of summer finding a battery that was already tired.",
      "A vehicle that sat in the driveway while the family was away.",
    ],
    localContext:
      "We jump start cars across Prosper, which lies in Collin and Denton counties and borders Frisco, McKinney, Little Elm and Celina. US-380 and Preston Road cross the town and the Dallas North Tollway ends at First Street. If the car has stopped in a live lane on any of them, or anyone is in danger, call 911 before you call us.",
    faqs: [
      {
        q: "Is it safe to wait with the hood up on US-380?",
        a: "Only if you are well clear of traffic. Turn on your hazards, stay in a visible spot and raise the hood only if it is safe to do so. If the car is in a live lane, call 911 first.",
      },
      {
        q: "How do I know it's the battery?",
        a: "Clicking, a slow crank, dim lights or a dead dashboard all point to the battery. Dispatch asks what the car is doing when you call, because a jump start helps when the battery is the suspected problem.",
      },
      {
        q: "Can you jump start a hybrid or a truck?",
        a: "Tell us the year, make and model, and add anything unusual in the notes. Dispatch confirms the right equipment before a driver is sent.",
      },
    ],
    primaryKeyword: "jump start service Prosper TX",
    secondaryKeywords: ["car battery jump start Prosper", "dead battery Prosper", "jump start near me Prosper"],
    longTail: ["car won't start Prosper TX help", "mobile jump start Prosper", "dead battery in driveway Prosper"],
    intent: "Emergency, mobile/on-site; driveway and shopping-lot dead batteries.",
    sourceUrls: [],
  },
  {
    city: "prosper",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Prosper, TX",
    title: "Mobile Tire Repair Prosper TX",
    metaDescription:
      "Screw or nail in a tire in Prosper? TRA plugs or patches tread punctures where the car is parked, when the damage allows. Call now.",
    intro:
      "A screw in the tread does not always mean a new tire. When the puncture is in the tread, a TRA driver can plug or patch it where the car is parked, in a driveway, a garage or a lot, so the original tire stays on the car and the spare stays in the trunk. The driver checks the damage first and tells you right away whether it can be repaired.",
    scenarios: [
      "A screw spotted in the tread while loading the car in the garage.",
      "A tire pressure warning that comes back every few days after you top up.",
      "A nail picked up on a street where new homes are still going up.",
      "A tire that looks fine but is low every morning.",
    ],
    localContext:
      "Prosper borders Frisco, McKinney, Little Elm and Celina, and US-380 and Preston Road cross it, with the Dallas North Tollway ending at First Street. We repair tires wherever the car is parked in the Collin and Denton county parts of town, so a slow leak can be handled at home rather than on one of those roads.",
    faqs: [
      {
        q: "Should I keep driving on the tire until you arrive?",
        a: "No. Avoid driving further on a visibly low or flat tire, because it can damage the wheel as well as the tire. If you have to move the car, keep it to the nearest safe spot.",
      },
      {
        q: "There's a screw in the tread. Should I pull it out?",
        a: "Leave it where it is. While it's lodged in the tread it is partly sealing the hole, and pulling it out usually deflates the tire.",
      },
      {
        q: "What happens if the tire can't be repaired?",
        a: "The driver explains what they found. Then the choice is your spare, if it is usable, or a replacement tire supplied by us. Dispatch confirms a tire is available before one is sent.",
      },
    ],
    primaryKeyword: "mobile tire repair Prosper TX",
    secondaryKeywords: ["tire plug Prosper", "tire patch Prosper", "nail in tire Prosper", "flat tire repair Prosper TX"],
    longTail: ["screw in tire repair near me Prosper", "slow leak tire repair Prosper", "tire pressure light on Prosper"],
    intent: "Commercial-urgent, repair-before-replace; at-home slow leaks.",
    sourceUrls: [],
  },

  // ===================== FLOWER MOUND =====================
  {
    city: "flower-mound",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Flower Mound, TX",
    title: "Flat Tire Change Flower Mound TX",
    metaDescription:
      "Flat tire in Flower Mound? If you have a usable spare, TRA puts it on where you are, on FM 1171, US-377 or at home. Call for roadside help.",
    intro:
      "A flat tire in Flower Mound starts with deciding where to stop, because the through roads are busy and the first job is getting the car out of the lane. If it carries a usable spare, a TRA driver comes to you, whether you made it into a lot or are waiting on a shoulder, and puts the spare on. We text or call when the driver is on the way.",
    scenarios: [
      "A flat on Cross Timbers Road (FM 1171) that you slowed down and pulled off.",
      "A tire that failed on FM 2499 or FM 3040 with the spare in the trunk and no safe place to work.",
      "A low tire found at Parker Square after errands.",
      "A slow leak that finished overnight, discovered in the driveway before work in the Lakeside Business District.",
    ],
    localContext:
      "Flower Mound is almost entirely in Denton County, with a small part in Tarrant County. US-377 runs along its western edge, and FM 1171 (Cross Timbers Road), FM 2499 (Long Prairie) and FM 3040 cross the town. It borders Lewisville to the east and Grapevine, and Dallas/Fort Worth International Airport lies about 4 miles south. On any of those roads, hazards on and as far from the lane as you can get.",
    faqs: [
      {
        q: "I'm not sure where I stopped. What do I tell dispatch?",
        a: "Give the road name, the nearest cross street and your direction of travel. In Flower Mound that is usually FM 1171, FM 2499, FM 3040 or US-377, and a cross street narrows it down.",
      },
      {
        q: "Is it safe to change it myself on the shoulder?",
        a: "If you're in a live traffic lane, or anyone is in danger, call 911 first. Otherwise stay buckled in with your hazards on and wait for the driver. Being out beside the car is the risky part.",
      },
      {
        q: "What if my spare is flat or missing?",
        a: "A flat tire change uses the spare already in the vehicle. If the spare is missing or unusable, ask for tire replacement: we supply a tire and install it on site, and dispatch confirms one is available before a driver is sent.",
      },
    ],
    primaryKeyword: "flat tire change Flower Mound TX",
    secondaryKeywords: ["flat tire service Flower Mound", "spare tire change Flower Mound", "tire change near me Flower Mound"],
    longTail: ["flat tire on FM 1171 Flower Mound", "flat tire US-377 Flower Mound", "change my flat tire Flower Mound TX"],
    intent: "Emergency, near-me; road-edge flats on FM routes and US-377.",
    sourceUrls: [],
  },
  {
    city: "flower-mound",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Flower Mound, TX",
    title: "Car Battery Replacement Flower Mound TX",
    metaDescription:
      "Car battery failing in Flower Mound? TRA brings a new one to the office lot or driveway and installs it there. Installation included for eligible vehicles.",
    intro:
      "Plenty of Flower Mound cars spend the workday in an office or retail lot, and a battery on its way out tends to give up in one of them. TRA brings a replacement battery to the car and installs it there. The price shown on this page covers the battery and installing it, for eligible vehicles and batteries, and dispatch confirms the right battery and your total before a driver is sent.",
    scenarios: [
      "A car that needed a jump in a Lakeside Business District lot and needs another two days later.",
      "A battery that struggles after the car sat in the driveway during a flight out of DFW.",
      "Slow windows and a dim dashboard after a long Texas summer.",
      "A weekend car that mostly makes short runs to Parker Square.",
    ],
    localContext:
      "Flower Mound sits in Denton County, with a small part in Tarrant County. The Lakeside Business District, the Denton Creek District and Parker Square are among its named areas, US-377 runs along the western edge, and FM 1171, FM 2499 and FM 3040 cross the town. Dallas/Fort Worth International Airport lies about 4 miles south. We install batteries wherever the car is parked, from an office lot to a home driveway.",
    faqs: [
      {
        q: "Can you replace the battery in an office parking lot?",
        a: "Yes, if the driver can work safely around the car. Give dispatch the building or lot and roughly where the car is parked.",
      },
      {
        q: "Do you need my VIN?",
        a: "No. Year, make and model are enough to start. The VIN confirms the exact battery if you can reach it easily, and dispatch confirms compatibility and your total before a driver is sent.",
      },
      {
        q: "Is there a warranty on the new battery?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice, since that is what warranty service goes through.",
      },
    ],
    primaryKeyword: "car battery replacement Flower Mound TX",
    secondaryKeywords: ["mobile battery replacement Flower Mound", "battery installation Flower Mound", "car battery service Flower Mound"],
    longTail: ["battery replaced at work Flower Mound", "car battery died office parking lot Flower Mound", "mobile car battery near me Flower Mound TX"],
    intent: "Commercial, convenience-led; workplace and driveway battery swaps in a business-district town.",
    sourceUrls: [],
  },
  {
    city: "flower-mound",
    service: "lockout",
    h1: "Car Lockout Service in Flower Mound, TX",
    title: "Car Lockout Service Flower Mound TX",
    metaDescription:
      "Locked out in Flower Mound? TRA opens your car using non-destructive entry whenever possible, at Parker Square, the lake or home. Call now.",
    intro:
      "Keys on the seat, doors locked, and the spare at home: that is how most lockouts begin, and in a spread-out town like Flower Mound the spare is rarely close. A TRA driver comes to the car, checks that it is yours, and opens it using non-destructive entry whenever possible.",
    scenarios: [
      "Keys on the seat and the doors locked after a stop at Parker Square.",
      "A fob battery that died in a lot near Grapevine Lake along the southern edge of town.",
      "Keys shut in the trunk with the groceries, which is a separate job from opening a door.",
      "A child or pet shut inside a hot car, where the first call is 911 if they are in danger.",
    ],
    localContext:
      "Flower Mound is mostly in Denton County, with a small part in Tarrant County, and it borders Lewisville and Grapevine. Parker Square, the Lakeside Business District and the Denton Creek District are among its recognized areas, and Grapevine Lake runs along the southern boundary. US-377, FM 1171, FM 2499 and FM 3040 are the through roads. We open cars in office lots, at its shopping areas and on residential streets alike.",
    faqs: [
      {
        q: "A child is locked in the car and it's hot. What do I do?",
        a: "If they are in danger, call 911 first. Then call us: we treat it as urgent and route it to the nearest driver first.",
      },
      {
        q: "I'm at Parker Square but I'm not sure which lot. What do I tell dispatch?",
        a: "The nearest store name or entrance, and the row if you can see one. The more exactly dispatch knows where the car sits, the easier it is for the driver to find it.",
      },
      {
        q: "Will you need to see ID?",
        a: "Yes. The driver asks for ID, or another way to show the vehicle is yours, before opening it. It takes a moment, and it protects you.",
      },
    ],
    primaryKeyword: "car lockout service Flower Mound TX",
    secondaryKeywords: ["locked out of car Flower Mound", "car unlock Flower Mound TX", "auto lockout Flower Mound"],
    longTail: ["locked keys in car near me Flower Mound", "keys locked in trunk Flower Mound", "emergency car unlock Flower Mound"],
    intent: "Emergency, near-me; shopping-area and lakeside lockouts.",
    sourceUrls: [],
  },
  {
    city: "flower-mound",
    service: "jump-start",
    h1: "Jump Start Service in Flower Mound, TX",
    title: "Jump Start Service Flower Mound TX",
    metaDescription:
      "Car won't start in Flower Mound? TRA brings a jump start to your driveway, office lot or Parker Square. Local DFW dispatch, 24/7. Call now.",
    intro:
      "Anyone who flies out of DFW, about four miles south of Flower Mound, can come home to a car that has sat too long to start. A TRA driver brings a portable jump pack to the vehicle, wherever it is in town, and gets the engine running so you can drive away under your own power. We text or call when the driver is on the way.",
    scenarios: [
      "A car that sat in the driveway while you were away on a flight out of DFW.",
      "Lights left on in a lot at Parker Square.",
      "A cold morning, a slow crank, and a drive to Lewisville waiting.",
      "A second car that is only driven on weekends.",
    ],
    localContext:
      "We jump start vehicles across Flower Mound, in Denton County and the small Tarrant County part, from driveways to the Lakeside and Denton Creek business districts. US-377, FM 1171 (Cross Timbers Road), FM 2499 (Long Prairie) and FM 3040 carry the traffic, and Dallas/Fort Worth International Airport lies about 4 miles south. If the car has stopped in a live lane on any of them, call 911 first.",
    faqs: [
      {
        q: "My car sat for two weeks. Will a jump be enough?",
        a: "Often, yes. A healthy battery that simply drained will take a jump and recharge as you drive. If it is near the end of its life it may not hold the charge, and your driver can advise whether it needs replacing.",
      },
      {
        q: "Should I keep trying to start it while I wait?",
        a: "No. Switch off the lights, stereo and climate control and wait. Repeated attempts use up what little charge is left and make the jump harder.",
      },
      {
        q: "What should I have ready when I call?",
        a: "Your exact location, the year, make and model, and what the car is doing, such as clicking or a slow crank. Raise the hood only if you can do it safely.",
      },
    ],
    primaryKeyword: "jump start service Flower Mound TX",
    secondaryKeywords: ["car battery jump start Flower Mound", "dead battery Flower Mound", "jump start near me Flower Mound"],
    longTail: ["car won't start Flower Mound TX", "mobile jump start Flower Mound", "dead battery after trip Flower Mound"],
    intent: "Emergency, mobile/on-site; sat-too-long batteries tied to airport travel.",
    sourceUrls: [],
  },
  {
    city: "flower-mound",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Flower Mound, TX",
    title: "Mobile Tire Repair Flower Mound TX",
    metaDescription:
      "Nail or screw in your tire in Flower Mound? TRA plugs or patches tread punctures on site when the damage allows. Call now.",
    intro:
      "A tire that needs air every few days is leaking somewhere. When the cause is a puncture in the tread, a TRA driver can plug or patch it where the car is parked, so the original tire stays on and the spare stays where it is. The driver checks the damage before starting and tells you whether it can be repaired.",
    scenarios: [
      "A tire pressure light that returns a day after you top up at the gas station.",
      "A nail found in the tread of a parking loted in a Lakeside Business District lot.",
      "A tire that is low every morning in the driveway with no obvious cause.",
      "A screw spotted in the tread before a longer drive on US-377.",
    ],
    localContext:
      "Flower Mound's through roads are US-377 along the western edge and FM 1171, FM 2499 and FM 3040. A slow leak that is ignored on roads like these can end in a tire that fails altogether, so catching it early matters. We repair tread punctures at the car, whether that is an office lot in the Denton Creek District or a driveway.",
    faqs: [
      {
        q: "How do I tell which tire is leaking?",
        a: "Check the pressure on each one, or brush soapy water over the tread and look for bubbles. Note where on the tire the damage is, if you can see it, and tell dispatch.",
      },
      {
        q: "Can I drive to the office on it first?",
        a: "It's better not to. Avoid driving further on a visibly low or flat tire, since it can damage the wheel as well as the tire. If you already have a spare in the car, say so when you call.",
      },
      {
        q: "What if there's no puncture at all?",
        a: "A tire that loses air with nothing in the tread can have a leaking valve stem, which is a separate service. Describe what you see when you request help and the driver will check.",
      },
    ],
    primaryKeyword: "mobile tire repair Flower Mound TX",
    secondaryKeywords: ["tire plug Flower Mound", "tire patch Flower Mound", "nail in tire Flower Mound", "flat tire repair Flower Mound"],
    longTail: ["slow leak tire repair Flower Mound", "tire pressure light on Flower Mound", "screw in tire near me Flower Mound TX"],
    intent: "Commercial-urgent, repair-before-replace; slow leaks found at work or home.",
    sourceUrls: [],
  },

  // ===================== HIGHLAND PARK =====================
  {
    city: "highland-park",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Highland Park, TX",
    title: "Flat Tire Change Highland Park TX",
    metaDescription:
      "Flat tire in Highland Park? If you have a usable spare, TRA puts it on where you are, on a Park Cities street or near the tollway. Call now.",
    intro:
      "Highland Park covers about 2.2 square miles, held between the Dallas North Tollway on one side and US-75 on the other, with Dallas around the rest. A flat tire here tends to happen in one of a few settings: on a residential street, near Highland Park Village, or on one of the roads that frame the town. If the car carries a usable spare, a TRA driver comes to you and puts it on. We text or call when the driver is on the way.",
    scenarios: [
      "A tire found low on a residential street before the morning commute.",
      "A flat after a stop at Highland Park Village, with the parking loted and loaded.",
      "A blowout on the Dallas North Tollway or US-75 along the edge of town.",
      "A slow leak you noticed on Preston Road and nursed to a safe spot.",
    ],
    localContext:
      "Highland Park is in Dallas County and, together with University Park, forms the Park Cities, an enclave of Dallas. Dallas borders it on the south, east and west, and University Park lies to the north. The Dallas North Tollway and US-75 (Central Expressway) bound the town, and Preston Road runs through it. Whichever you are on, the safest place for you is in the car with the hazards on, not beside it.",
    faqs: [
      {
        q: "I'm on a narrow street with cars parked on both sides. Is that a problem?",
        a: "Usually not, but a driver needs room to work safely around the car. Tell dispatch the street, the house number and what the parking looks like, and say so if the car is wedged in.",
      },
      {
        q: "Can you change a tire near Highland Park Village?",
        a: "Yes, wherever the car is parked and a driver can work safely. Tell dispatch exactly where it is, including the street or lot and the nearest storefront.",
      },
      {
        q: "What if I'm on the tollway or US-75?",
        a: "If you are in a live traffic lane, or anyone is in danger, call 911 first. If you can reach a shoulder, turn on your hazards, stay buckled in and call us.",
      },
    ],
    primaryKeyword: "flat tire change Highland Park TX",
    secondaryKeywords: ["flat tire service Highland Park", "spare tire change Highland Park", "tire change near me Highland Park"],
    longTail: ["flat tire Park Cities Dallas", "flat tire near Highland Park Village", "change my flat tire Highland Park TX"],
    intent: "Emergency, near-me; residential-street and tollway-edge flats in a compact enclave town.",
    sourceUrls: [],
  },
  {
    city: "highland-park",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Highland Park, TX",
    title: "Car Battery Replacement Highland Park TX",
    metaDescription:
      "Battery failing in Highland Park? TRA brings a new one to the driveway or street spot and installs it there. Installation included for eligible vehicles.",
    intro:
      "In a town of about 2.2 square miles, nearly every trip is a short one, and short trips are hard on a battery: the engine rarely runs long enough to put back what starting it took out. When a battery stops holding charge, TRA brings a replacement to the car and installs it there. The price shown on this page covers the battery and installing it, for eligible vehicles and batteries, and dispatch confirms the right battery and your total before a driver is sent.",
    scenarios: [
      "A battery that has needed a jump twice since the weekend.",
      "A car in a driveway that won't start after sitting while the family was away.",
      "A second car used only for short errands inside the Park Cities.",
      "An older battery you would rather replace at home than risk on the tollway.",
    ],
    localContext:
      "Highland Park is in Dallas County, bordered by Dallas on three sides and by University Park to the north. The Dallas North Tollway, US-75 and Preston Road are the roads in and out. We install batteries where the car sits, whether that is a driveway, a garage, or a street space near Highland Park Village.",
    faqs: [
      {
        q: "My battery is under the back seat. Does that change anything?",
        a: "It affects the job, not whether it can be done. On some cars the battery isn't under the hood. Tell dispatch the vehicle and they will confirm the right battery, and your total, before anyone is sent.",
      },
      {
        q: "Is there a warranty on the new battery?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice, which is what warranty service is handled against.",
      },
      {
        q: "Should I just get a jump start instead?",
        a: "If the battery still holds a charge, a jump may be all you need. If it has already failed a jump, or you needed one more than once, replacement usually makes more sense. Your driver can advise on site.",
      },
    ],
    primaryKeyword: "car battery replacement Highland Park TX",
    secondaryKeywords: ["mobile battery replacement Highland Park", "battery installation Highland Park", "new car battery Highland Park"],
    longTail: ["car battery replacement Park Cities", "battery died at home Highland Park", "mobile battery service near me Highland Park TX"],
    intent: "Commercial, convenience-led; short-trip battery wear in a compact residential enclave.",
    sourceUrls: [],
  },
  {
    city: "highland-park",
    service: "lockout",
    h1: "Car Lockout Service in Highland Park, TX",
    title: "Car Lockout Service Highland Park TX",
    metaDescription:
      "Locked out in Highland Park? TRA opens your car using non-destructive entry whenever possible, on a residential street or near the Village. Call now.",
    intro:
      "A lockout turns a one-minute stop into a long wait. A TRA driver comes to the car wherever it is parked in Highland Park, confirms the vehicle is yours, and opens it using non-destructive entry whenever possible. Keys shut in the trunk are a different job from keys left on the seat.",
    scenarios: [
      "Keys left on the seat during a stop at Highland Park Village.",
      "A fob that died on a residential street with the spare inside the house.",
      "Keys shut in the trunk after loading for a trip.",
      "A child or pet inside the locked car, where the first call is 911 if they are in any danger.",
    ],
    localContext:
      "Highland Park is a town of about 2.2 square miles in Dallas County, between the Dallas North Tollway and US-75, with Preston Road crossing it. Dallas borders it on the south, east and west and University Park on the north; together the two towns are the Park Cities. We open cars on its residential streets and around Highland Park Village.",
    faqs: [
      {
        q: "I'm somewhere in the Park Cities and I'm not sure which town. Does it matter?",
        a: "Not to us. We serve both Highland Park and University Park. Give dispatch the street and the nearest cross street, which will tell them more than the town name does.",
      },
      {
        q: "Do I need to be with the car?",
        a: "Yes. The driver confirms ownership before opening anything, so you need ID or another way to show the vehicle is yours.",
      },
      {
        q: "Can you open it if the fob battery is dead?",
        a: "Yes. A dead fob does not change how the vehicle is opened. Give dispatch the year, make and model so the driver comes ready for it.",
      },
    ],
    primaryKeyword: "car lockout service Highland Park TX",
    secondaryKeywords: ["locked out of car Highland Park", "car unlock Highland Park TX", "keys locked in car Highland Park"],
    longTail: ["locked keys in car near me Highland Park", "locked out of my car in the Park Cities", "keys locked in trunk Highland Park TX"],
    intent: "Emergency, near-me; residential-street and shopping-village lockouts.",
    sourceUrls: [],
  },

  // ===================== UNIVERSITY PARK =====================
  {
    city: "university-park",
    service: "flat-tire-change",
    h1: "Flat Tire Change in University Park, TX",
    title: "Flat Tire Change University Park TX",
    metaDescription:
      "Flat tire in University Park? If you have a usable spare, TRA puts it on near SMU, Snider Plaza, Preston Center or the tollway. Call now.",
    intro:
      "A flat tire in University Park can happen on the quiet streets around the SMU campus or on the busy edge where the Dallas North Tollway meets Mockingbird Lane and Lovers Lane. If the car carries a usable spare, a TRA driver comes to wherever it stopped and puts the spare on. We text or call when the driver is on the way.",
    scenarios: [
      "A tire found low in a Snider Plaza parking space after errands.",
      "A flat in a Preston Center lot with the spare buried under bags.",
      "A blowout near the Mockingbird Lane interchange on the Dallas North Tollway.",
      "A car near the SMU campus whose owner has never changed a tire and does not want to start on a busy street.",
    ],
    localContext:
      "University Park is in Dallas County, bordered by Dallas on the north, east and west and by Highland Park to the south; the two towns together are the Park Cities. The Dallas North Tollway has its Mockingbird Lane interchange and Lovers Lane exit here, US-75 (Central Expressway) passes with a small part of the town on its west side, and Preston Road is the third route. Southern Methodist University, Snider Plaza and Preston Center are among the places we cover.",
    faqs: [
      {
        q: "I'm on a tollway ramp near Mockingbird Lane. What do I do?",
        a: "If you are in a live lane, or anyone is in danger, call 911 first. If you can reach a shoulder, put your hazards on, stay buckled in and tell dispatch which ramp or exit you are on.",
      },
      {
        q: "Can you change a tire in a campus-area lot or garage?",
        a: "Usually, if there is room to work safely around the car. Low-clearance garages can limit what is possible, so give dispatch the lot or garage and the level.",
      },
      {
        q: "My spare is a small temporary one. Is that okay?",
        a: "A compact spare counts as long as it holds air. Spares like that are made for limited use, so check the sidewall or your owner's manual for its limits before you plan the rest of the trip.",
      },
    ],
    primaryKeyword: "flat tire change University Park TX",
    secondaryKeywords: ["flat tire service University Park", "spare tire change University Park", "tire change near SMU"],
    longTail: ["flat tire near SMU", "flat tire Snider Plaza University Park", "flat tire Preston Center Dallas"],
    intent: "Emergency, near-me; campus-area and tollway-interchange flats in a compact enclave town.",
    sourceUrls: [],
  },
  {
    city: "university-park",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in University Park, TX",
    title: "Battery Replacement University Park TX",
    metaDescription:
      "Battery failing in University Park? TRA brings a new one to the campus-area lot or driveway and installs it there. Installation included for eligible vehicles.",
    intro:
      "A battery lasts longest in a car that gets a decent run, and a lot of University Park driving is the opposite: a trip to Snider Plaza, to Preston Center, to campus and home again. When a battery stops holding a charge, TRA brings a replacement to the car and installs it there. The price shown on this page covers the battery and installing it, for eligible vehicles and batteries, and dispatch confirms the right battery and your total before a driver is sent.",
    scenarios: [
      "A student's car that sat through the summer break and won't start in August.",
      "A second car used only for short errands to Snider Plaza or Preston Center.",
      "A slow crank every cold morning for a week.",
      "A car that needed a jump in a campus-area lot and needed one again the next day.",
    ],
    localContext:
      "University Park is a Dallas County town bordered by Dallas and Highland Park, with Southern Methodist University, Snider Plaza and Preston Center among its recognized areas. US-75 (Central Expressway), the Dallas North Tollway and Preston Road are the routes. We replace batteries at the car, whether that is a residence, a campus-area lot or a street in the Park Cities.",
    faqs: [
      {
        q: "Can you install it in a campus-area lot or garage?",
        a: "Usually, if the driver can work safely around the car. Give dispatch the lot or garage and the level, and mention any height limit.",
      },
      {
        q: "Is a warranty included?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice, since that is what warranty service is handled against.",
      },
      {
        q: "How do I know it's the battery and not something else?",
        a: "Clicking, a slow crank, dim lights and a dead dashboard all point to the battery. If a jump gets the car going but it dies again later, the battery is likely not holding a charge, and your driver can advise on site.",
      },
    ],
    primaryKeyword: "car battery replacement University Park TX",
    secondaryKeywords: ["mobile battery replacement University Park", "battery installation University Park", "car battery service near SMU"],
    longTail: ["car battery dead after summer break SMU", "battery replacement Park Cities", "mobile battery service near me University Park"],
    intent: "Commercial, convenience-led; campus-area batteries drained by short trips and long breaks.",
    sourceUrls: [],
  },
  {
    city: "university-park",
    service: "lockout",
    h1: "Car Lockout Service in University Park, TX",
    title: "Car Lockout Service University Park TX",
    metaDescription:
      "Locked out in University Park? TRA opens your car using non-destructive entry whenever possible, near SMU, Snider Plaza or Preston Center. Call now.",
    intro:
      "Near a university campus, a lockout usually happens mid-errand: a parent unloading boxes for a student, a fob dropped in a bag, a door that clicked shut behind a friend. A TRA driver comes to the car wherever it is parked in University Park, confirms it is yours, and opens it using non-destructive entry whenever possible.",
    scenarios: [
      "Keys locked in while unloading boxes near the SMU campus.",
      "A fob that stopped responding in a Preston Center lot.",
      "Keys shut in the trunk with everything else after loading, which is a separate job from opening a door.",
      "A child or pet inside a locked car: call 911 first if there is any danger, then call us.",
    ],
    localContext:
      "University Park lies in Dallas County, bordered by Dallas on three sides and Highland Park to the south; together they are the Park Cities. Its recognized areas include Southern Methodist University, Snider Plaza and Preston Center, and the routes are US-75 (Central Expressway), the Dallas North Tollway and Preston Road. We open cars on campus-area lots, at its shopping areas and on residential streets.",
    faqs: [
      {
        q: "It's my student's car and I'm not with it. Can you open it?",
        a: "Ownership is confirmed on site, so the person with the car has to be able to show ID or another proof that the vehicle is theirs. If that person is not at the car, ask dispatch what is possible.",
      },
      {
        q: "What do I tell dispatch about where I am on campus?",
        a: "The lot or street, the nearest building and, in a garage, the level. Campus-area parking looks alike, so one specific landmark helps the driver find the car.",
      },
      {
        q: "What if the keys are in the trunk?",
        a: "That is a different job from opening a door, because it needs different tools. Say so when you call so the right approach is planned.",
      },
    ],
    primaryKeyword: "car lockout service University Park TX",
    secondaryKeywords: ["locked out of car University Park", "car unlock near SMU", "keys locked in car University Park TX"],
    longTail: ["locked out of car near SMU", "locked keys in car Snider Plaza", "locked out Preston Center Dallas"],
    intent: "Emergency, near-me; campus-area and shopping-area lockouts.",
    sourceUrls: [],
  },

  // ===================== LITTLE ELM =====================
  {
    city: "little-elm",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Little Elm, TX",
    title: "Flat Tire Change Little Elm TX",
    metaDescription:
      "Flat tire in Little Elm? If you have a usable spare, TRA puts it on where you are, from The Lakefront to FM 423 and US-380. Call now.",
    intro:
      "Lewisville Lake runs along Little Elm's northern and eastern shores, and the road map bends around it. A flat tire here tends to happen on the through roads between the neighborhoods and the water. If the car carries a usable spare, a TRA driver comes to wherever it stopped and swaps the flat for the spare. We text or call when the driver is on the way.",
    scenarios: [
      "A flat after a day at The Lakefront, found when you return to the lot.",
      "A blowout on US-380 on the way into or out of town.",
      "A slow puncture on FM 423 or FM 720 that finally goes down.",
      "A flat on Eldorado Parkway with the spare buried under lake gear.",
    ],
    localContext:
      "Little Elm is in Denton County, on the northern and eastern shores of Lewisville Lake, and it borders Frisco and Prosper. US-380, FM 423, FM 720 and Eldorado Parkway are the through roads, and The Lakefront is the original downtown. If a tire fails on any of them, get clear of the lane first and keep the hazards on.",
    faqs: [
      {
        q: "Can you change a tire in The Lakefront lot?",
        a: "Yes, as long as a driver can work safely around the car. Tell dispatch the lot or street and the nearest business or entrance.",
      },
      {
        q: "My spare is under a pile of cargo. Does that matter?",
        a: "The spare has to be reachable and usable. If you can clear it out safely, do, and if you can't, say so when you call so the driver comes knowing.",
      },
      {
        q: "What if the tire goes on US-380 and I'm in a lane?",
        a: "If you are in a live traffic lane, or anyone is in danger, call 911 first. Once you are on a shoulder, keep your hazards on, stay buckled in and call us.",
      },
    ],
    primaryKeyword: "flat tire change Little Elm TX",
    secondaryKeywords: ["flat tire service Little Elm", "spare tire change Little Elm", "tire change near me Little Elm"],
    longTail: ["flat tire on FM 423 Little Elm", "flat tire near The Lakefront Little Elm", "change my flat tire Little Elm TX"],
    intent: "Emergency, near-me; lakeside-town flats on FM roads and US-380.",
    sourceUrls: [],
  },
  {
    city: "little-elm",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Little Elm, TX",
    title: "Car Battery Replacement Little Elm TX",
    metaDescription:
      "Car battery failing in Little Elm? TRA brings a new one to your driveway or lot and installs it there. Installation included for eligible vehicles.",
    intro:
      "A parking loted at The Lakefront can sit for hours with a door ajar or the stereo on, and a battery that is already tired may not forgive it. TRA brings a replacement to the car and installs it there, so you are not working out how to get a car that won't start to a shop. The price shown on this page covers the battery and installing it, for eligible vehicles and batteries, and dispatch confirms the right battery and your total before a driver is sent.",
    scenarios: [
      "A car that clicks in the lot at The Lakefront after a long afternoon by the water.",
      "A weekend vehicle that sits in the driveway all week and needs a jump every Saturday.",
      "Dim headlights on the way home along FM 423.",
      "A battery that is old enough that you would rather change it before summer.",
    ],
    localContext:
      "Little Elm is in Denton County, on the northern and eastern shores of Lewisville Lake, bordered by Frisco and Prosper. US-380, FM 423, FM 720 and Eldorado Parkway are the through routes. We install batteries where the car sits, in a lot at The Lakefront, in a driveway or at a workplace.",
    faqs: [
      {
        q: "Where should the car be when the driver arrives?",
        a: "Anywhere a driver can work safely around it. If it is in a driveway or lot, tell dispatch where. If the hood is hard to open or the battery is under a seat, mention that too.",
      },
      {
        q: "Does the new battery come with a warranty?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice, since that is what warranty service is handled against.",
      },
      {
        q: "Do I need to find my VIN?",
        a: "No. Year, make and model are enough to start. The VIN confirms the exact battery if it is easy to reach, but nobody should be crawling around a dashboard for it.",
      },
    ],
    primaryKeyword: "car battery replacement Little Elm TX",
    secondaryKeywords: ["mobile battery replacement Little Elm", "battery installation Little Elm", "car battery service Little Elm"],
    longTail: ["car battery died at the lake Little Elm", "battery replacement near The Lakefront", "mobile battery service near me Little Elm TX"],
    intent: "Commercial, convenience-led; weekend-lake and driveway battery swaps.",
    sourceUrls: [],
  },
  {
    city: "little-elm",
    service: "lockout",
    h1: "Car Lockout Service in Little Elm, TX",
    title: "Car Lockout Service Little Elm TX",
    metaDescription:
      "Locked out in Little Elm? TRA opens your car using non-destructive entry whenever possible, at The Lakefront, the lake or home. Call now.",
    intro:
      "At the lake you carry things: towels, a cooler, bags, a stroller. Keys end up in the wrong one, and the doors lock before anyone notices. A TRA driver comes to the car wherever it is parked in Little Elm, confirms it is yours, and opens it using non-destructive entry whenever possible.",
    scenarios: [
      "Keys in a tote bag in the cabin and the doors locked at The Lakefront.",
      "A fob that died after a day by Lewisville Lake, with the spare at home.",
      "Keys shut in the trunk with the cooler, which is a separate job from opening a door.",
      "A child or pet inside a locked car in the sun: if they are in danger, call 911 first.",
    ],
    localContext:
      "Little Elm is in Denton County on the northern and eastern shores of Lewisville Lake, and it borders Frisco and Prosper. The Lakefront is the original downtown, and US-380, FM 423, FM 720 and Eldorado Parkway are the through roads. We open cars in lakeside lots, in neighborhood driveways and along those roads.",
    faqs: [
      {
        q: "Can you reach a parking loted near the water?",
        a: "Wherever a driver can reach the vehicle safely. Tell dispatch the lot or street and the nearest landmark so the driver can find the exact spot.",
      },
      {
        q: "Will you need to see ID?",
        a: "Yes. The driver asks for ID or another way to show the vehicle is yours before opening it.",
      },
      {
        q: "Do you open trunks as well as doors?",
        a: "Yes, but they are different jobs. Reaching keys shut in a trunk takes longer and needs different tools, so tell dispatch which one you have.",
      },
    ],
    primaryKeyword: "car lockout service Little Elm TX",
    secondaryKeywords: ["locked out of car Little Elm", "car unlock Little Elm TX", "keys locked in car Little Elm"],
    longTail: ["locked keys in car near me Little Elm", "locked out at The Lakefront Little Elm", "keys locked in trunk Little Elm TX"],
    intent: "Emergency, near-me; lakeside-day lockouts in a shoreline town.",
    sourceUrls: [],
  },

  // ===================== CELINA =====================
  {
    city: "celina",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Celina, TX",
    title: "Flat Tire Change Celina TX",
    metaDescription:
      "Flat tire in Celina? If you have a usable spare, TRA puts it on where you are, on Preston Road or near Historic Downtown Celina. Call now.",
    intro:
      "Celina sits toward the northern edge of the metroplex, and its main road is Preston Road (TX-289), with Historic Downtown Celina just to the west of it. A flat tire here often happens between places rather than in front of one. If the vehicle carries a usable spare, a TRA driver comes to wherever it stopped and puts the spare on. We text or call when the driver is on the way.",
    scenarios: [
      "A blowout on Preston Road with the next place to stop still ahead of you.",
      "A tire found flat in the driveway of a newer street before an early start.",
      "A tire that went soft while the car was parked near Historic Downtown Celina.",
      "A screw picked up near a building site on the edge of town that has finally brought the tire down.",
    ],
    localContext:
      "Celina lies in Collin and Denton counties and borders Prosper and McKinney. Preston Road (TX-289) is the road the town is centered on, with Historic Downtown Celina to the west of it. With one main route, the road name plus the nearest cross street or address tells dispatch where you are better than anything else.",
    faqs: [
      {
        q: "How do I describe where I am on a long stretch of road?",
        a: "Give the road name, the nearest cross street or address number, and your direction of travel. A landmark such as a business or a sign helps too.",
      },
      {
        q: "Is it safe to wait in the car on Preston Road?",
        a: "On a shoulder, yes: stay buckled in with the hazards on. If you are in a live traffic lane, or anyone is in danger, call 911 first.",
      },
      {
        q: "I'm not sure my spare has any air in it. Can that be checked?",
        a: "A usable spare holds air and is meant for your car. If yours has been in the trunk for years, tell dispatch when you call. If it turns out to be unusable, tire replacement is the answer: we supply a tire and install it, and dispatch confirms one is available before a driver is sent.",
      },
    ],
    primaryKeyword: "flat tire change Celina TX",
    secondaryKeywords: ["flat tire service Celina", "spare tire change Celina", "tire change near me Celina"],
    longTail: ["flat tire on Preston Road Celina", "flat tire near Historic Downtown Celina", "change my flat tire Celina TX"],
    intent: "Emergency, near-me; single-road, edge-of-metro flats.",
    sourceUrls: [],
  },
  {
    city: "celina",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Celina, TX",
    title: "Car Battery Replacement Celina TX",
    metaDescription:
      "Battery failing in Celina? TRA brings a new one to your driveway, workplace or downtown parking and installs it there.",
    intro:
      "Texas summers are hard on a car battery, and the damage tends to show months later, on the first cool morning, when the engine asks for more than the battery can give. TRA brings a replacement to the car in Celina and installs it there. The price shown on this page covers the battery and installing it, for eligible vehicles and batteries, and dispatch confirms the right battery and your total before a driver is sent.",
    scenarios: [
      "A battery that coped all summer and quit on the first cool morning.",
      "A truck or work vehicle parked at home that needs a jump at the start of every week.",
      "A car in the driveway that clicks and won't start on a weekday morning.",
      "Slow windows and flickering lights on the way in to Historic Downtown Celina.",
    ],
    localContext:
      "Celina lies in Collin and Denton counties and borders Prosper and McKinney. Preston Road (TX-289) is the main road, with Historic Downtown Celina to its west. We install batteries wherever the car sits in town, whether that is a driveway, a workplace lot or a space near downtown.",
    faqs: [
      {
        q: "My truck takes a bigger battery. Does that matter?",
        a: "Yes. Battery type and size vary by vehicle, which is why dispatch confirms compatibility for yours before a driver is sent. Give the year, make and model; the VIN is optional.",
      },
      {
        q: "I think the battery is bad. Should I ask for a jump or a replacement?",
        a: "If it has already failed a jump, ask for a replacement. If you are not sure, request a jump start and your driver can advise on site whether the battery needs replacing.",
      },
      {
        q: "What does the warranty cover?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice, since that is what warranty service goes through.",
      },
    ],
    primaryKeyword: "car battery replacement Celina TX",
    secondaryKeywords: ["mobile battery replacement Celina", "battery installation Celina", "new car battery Celina TX"],
    longTail: ["car battery died Celina TX", "mobile battery replacement near me Celina", "battery replaced at home Celina"],
    intent: "Commercial, convenience-led; heat-worn batteries failing in the first cool weather.",
    sourceUrls: [],
  },
  {
    city: "celina",
    service: "lockout",
    h1: "Car Lockout Service in Celina, TX",
    title: "Car Lockout Service Celina TX",
    metaDescription:
      "Locked out in Celina? TRA opens your car using non-destructive entry whenever possible, near Historic Downtown Celina or on Preston Road. Call now.",
    intro:
      "A lockout near Historic Downtown Celina is usually a short stop gone wrong: a quick errand, a door that locks behind you, keys on the seat. A TRA driver comes to the car wherever it is parked in Celina, confirms you are entitled to it, and opens it using non-destructive entry whenever possible.",
    scenarios: [
      "Keys on the seat after a stop near Historic Downtown Celina.",
      "A fob that died in a driveway with the spare key inside the house.",
      "Keys shut in the trunk while loading for a drive along Preston Road.",
      "A child or pet inside a locked car: if they are in any danger, call 911 first.",
    ],
    localContext:
      "Celina lies in Collin and Denton counties and borders Prosper and McKinney. The town is centered on Preston Road (TX-289), with Historic Downtown Celina to the west. We open cars at the downtown, along Preston Road and at homes across town.",
    faqs: [
      {
        q: "Do I have to stay with the car?",
        a: "Yes. The driver confirms you are entitled to the vehicle before opening it, so you need to be there with ID or another proof that it is yours.",
      },
      {
        q: "Will the lock or the door be damaged?",
        a: "Our drivers use non-destructive entry methods whenever possible. Give dispatch the year, make and model so they can plan the approach for your vehicle.",
      },
      {
        q: "The keys are in the trunk, not the cabin. Is that different?",
        a: "Yes. Reaching keys shut in a trunk is a different job from opening a door, so say which you have when you call.",
      },
    ],
    primaryKeyword: "car lockout service Celina TX",
    secondaryKeywords: ["locked out of car Celina", "car unlock Celina TX", "keys locked in car Celina"],
    longTail: ["locked keys in car near me Celina", "locked out Historic Downtown Celina", "keys locked in trunk Celina TX"],
    intent: "Emergency, near-me; downtown-stop and driveway lockouts in a small edge-of-metro town.",
    sourceUrls: [],
  },

  // ===================== ANNA =====================
  {
    city: "anna",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Anna, TX",
    title: "Flat Tire Change Anna TX",
    metaDescription:
      "Flat tire in Anna? If you have a usable spare, TRA puts it on where you are, from US-75 to TX-5 to your driveway. Call for roadside help.",
    intro:
      "Anna lies in northern Collin County, with US-75 running through its west side and TX-5 serving the rest of the town. Most of the speed in Anna is on US-75, and that is where a tire failure is sudden. If the vehicle carries a usable spare, a TRA driver comes to wherever it stopped, whether that is the highway edge or your driveway, and puts the spare on. We text or call when the driver is on the way.",
    scenarios: [
      "A blowout on US-75 at highway speed.",
      "A flat on TX-5 with no obvious place to pull in.",
      "A soft tire discovered in the driveway on a weekday morning.",
      "A spare that has not been checked since the day the car was bought.",
    ],
    localContext:
      "Anna lies in northern Collin County and borders Melissa, the one served city beside it. US-75 runs through the west side of the town and TX-5 is the other main route. If a tire fails at highway speed on US-75, aim for the shoulder with the hazards on, and call 911 first if you are stuck in a live lane.",
    faqs: [
      {
        q: "How do I tell you where I am on US-75?",
        a: "Give your direction of travel and the nearest exit, cross street or sign. On a highway that locates you better than an address does.",
      },
      {
        q: "Can you change a tire on soft ground or gravel?",
        a: "It depends on the ground. A driver needs firm, level footing to lift the car safely, so tell dispatch what the surface is when you call.",
      },
      {
        q: "Do you cover the whole town, or only along US-75?",
        a: "The whole town, from US-75 and TX-5 to the streets between and the driveways on them.",
      },
    ],
    primaryKeyword: "flat tire change Anna TX",
    secondaryKeywords: ["flat tire service Anna", "spare tire change Anna", "tire change near me Anna"],
    longTail: ["flat tire on US-75 Anna", "flat tire on TX-5 Anna", "change my flat tire Anna TX"],
    intent: "Emergency, near-me; highway-edge and driveway flats at the northern edge of Collin County.",
    sourceUrls: [],
  },
  {
    city: "anna",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Anna, TX",
    title: "Car Battery Replacement Anna TX",
    metaDescription:
      "Car battery failing in Anna? TRA brings a new one to your driveway or work site and installs it there. Installation included for eligible vehicles.",
    intro:
      "Anna drivers put their longer miles on US-75 and TX-5 and their shorter ones on the streets of town. Either way, a battery that is tired gets found out by a cold start after the car has sat. TRA brings a replacement to the vehicle and installs it there. The price shown on this page covers the battery and installing it, for eligible vehicles and batteries, and dispatch confirms the right battery and your total before a driver is sent.",
    scenarios: [
      "A car that sat in the driveway all weekend and won't start on Monday.",
      "Headlights that dim every time the car idles at a stop.",
      "A battery that has been jumped once and given up again.",
      "A battery several years old that has started cranking slowly in the cold.",
    ],
    localContext:
      "Anna lies in northern Collin County and borders Melissa. US-75 runs through its west side and TX-5 serves the town. We install batteries wherever the car is, from a driveway to a work lot along either road.",
    faqs: [
      {
        q: "What if a new battery doesn't solve it?",
        a: "A battery replacement covers the battery. We do not do mechanical repair, so if the car has another fault your driver will tell you what they found and a repair shop is the next step.",
      },
      {
        q: "Do you need my VIN?",
        a: "No. Year, make and model are enough to start. The VIN confirms the exact battery if you can reach it easily.",
      },
      {
        q: "Does it come with a warranty?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice, which is what warranty service is processed against.",
      },
    ],
    primaryKeyword: "car battery replacement Anna TX",
    secondaryKeywords: ["mobile battery replacement Anna", "battery installation Anna", "car battery service Anna"],
    longTail: ["car battery died Anna TX", "battery replacement at my house Anna", "mobile battery near me Anna TX"],
    intent: "Commercial, convenience-led; weekend-sitting and cold-start battery failures.",
    sourceUrls: [],
  },
  {
    city: "anna",
    service: "lockout",
    h1: "Car Lockout Service in Anna, TX",
    title: "Car Lockout Service Anna TX",
    metaDescription:
      "Locked out in Anna? TRA opens your car using non-destructive entry whenever possible, at home, a work site or a stop off US-75. Call now.",
    intro:
      "Anna sits on US-75, and a lockout during a stop along the highway can leave you with plenty of road ahead and no spare key. A TRA driver comes to the car wherever it is parked in Anna, confirms it is yours, and opens it using non-destructive entry whenever possible.",
    scenarios: [
      "Keys locked in at a gas station just off US-75.",
      "Keys left in the cab of a truck at a job or work site.",
      "A fob that stopped responding at home with the spare key at the office.",
      "A child or pet inside a locked car: if they are in danger, call 911 first.",
    ],
    localContext:
      "Anna lies in northern Collin County and borders Melissa. US-75 runs through the west side of the town and TX-5 is the other main route. We open cars at stops along both roads and at homes and work sites across town.",
    faqs: [
      {
        q: "What do I need to have with me?",
        a: "ID, or another way to show the vehicle is yours, and the car's exact location. The driver confirms ownership before opening anything.",
      },
      {
        q: "I'm at a gas station off US-75. What do I tell dispatch?",
        a: "The station's name or brand, which side of the highway it is on, and where on the lot the car is parked. That is usually enough to find the right car.",
      },
      {
        q: "Can you open a truck as well as a car?",
        a: "Tell dispatch the vehicle when you request help. They will confirm it before a driver is sent so nobody arrives without the right approach.",
      },
    ],
    primaryKeyword: "car lockout service Anna TX",
    secondaryKeywords: ["locked out of car Anna", "car unlock Anna TX", "keys locked in car Anna"],
    longTail: ["locked keys in truck Anna TX", "locked out of car near me Anna", "keys locked in trunk Anna TX"],
    intent: "Emergency, near-me; highway-stop and work-site lockouts.",
    sourceUrls: [],
  },

  // ===================== MELISSA =====================
  {
    city: "melissa",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Melissa, TX",
    title: "Flat Tire Change Melissa TX",
    metaDescription:
      "Flat tire in Melissa? If you have a usable spare, TRA puts it on where you are, on US-75, TX-5 or TX-121. Call for roadside help.",
    intro:
      "When you call about a flat tire in Melissa, the first question is which of the three roads you are on. If the vehicle carries a usable spare, a TRA driver comes to wherever it stopped and puts the spare on in place of the flat. We text or call when the driver is on the way.",
    scenarios: [
      "A blowout on US-75 along the western edge of town.",
      "A flat on TX-121 on the east side.",
      "A slow leak that finally went down on TX-5 through the middle of town.",
      "A tire that failed where the roads come together in the southwest of the city.",
    ],
    localContext:
      "Melissa lies in north-central Collin County and borders Anna and McKinney. US-75 runs along its west side, TX-5 through its center and TX-121 through its east side, and the three converge in the southwest, about 6 miles from McKinney. Tell dispatch which road you are on and which way you are headed.",
    faqs: [
      {
        q: "I'm near McKinney but not sure if I'm in Melissa. Does it matter?",
        a: "Melissa and McKinney share a border, so it is easy to cross it without noticing. Give the road and the nearest cross street and dispatch will place you.",
      },
      {
        q: "Which details help the driver find me?",
        a: "The road, your direction of travel, the nearest cross street or business, and a description of the car. If you are in a lot, add where in it.",
      },
      {
        q: "What if I don't have a spare?",
        a: "A flat tire change puts on the spare you already carry. Without one, ask for tire replacement: we supply a tire and install it on site, and dispatch confirms one is available before a driver is sent.",
      },
    ],
    primaryKeyword: "flat tire change Melissa TX",
    secondaryKeywords: ["flat tire service Melissa", "spare tire change Melissa", "tire change near me Melissa"],
    longTail: ["flat tire on US-75 Melissa", "flat tire on TX-5 Melissa TX", "change my flat tire Melissa TX"],
    intent: "Emergency, near-me; three-road town where location detail decides the call.",
    sourceUrls: [],
  },
  {
    city: "melissa",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Melissa, TX",
    title: "Car Battery Replacement Melissa TX",
    metaDescription:
      "Battery failing in Melissa? TRA brings a new one to your driveway or lot and installs it there. Installation included for eligible vehicles.",
    intro:
      "A battery lasts longest when the car gets a proper run, and a town threaded by US-75, TX-5 and TX-121 produces both kinds: the car that makes a long highway drive every day and the one that only does short hops. Either can fail. TRA brings a replacement to the vehicle in Melissa and installs it there. The price shown on this page covers the battery and installing it, for eligible vehicles and batteries, and dispatch confirms the right battery and your total before a driver is sent.",
    scenarios: [
      "A car that makes only short trips on TX-5 and has started to crank slowly.",
      "A commuter car on US-75 whose battery gave out with no warning.",
      "A vehicle that needed a jump on a cold morning and needs another one now.",
      "A battery old enough that you would rather change it in the driveway than wait for it to choose the day.",
    ],
    localContext:
      "Melissa lies in north-central Collin County and borders Anna and McKinney. US-75 runs along its west side, TX-5 through its center and TX-121 through its east, and the three converge in the southwest, about 6 miles from McKinney. We install batteries wherever the car is, at home or in a lot along any of them.",
    faqs: [
      {
        q: "Why replace it rather than jump it again?",
        a: "A jump gets a drained battery going, but one that won't hold a charge will strand you again. After a second jump, replacement is usually the better move, and your driver can advise on site.",
      },
      {
        q: "Does the battery fit my car?",
        a: "That is exactly what dispatch confirms before a driver is sent. Give the year, make and model, and the VIN if you can reach it easily.",
      },
      {
        q: "Is there a warranty?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice, which is what warranty service goes through.",
      },
    ],
    primaryKeyword: "car battery replacement Melissa TX",
    secondaryKeywords: ["mobile battery replacement Melissa", "battery installation Melissa", "new car battery Melissa TX"],
    longTail: ["car battery died Melissa TX", "mobile car battery near me Melissa", "battery replaced at home Melissa"],
    intent: "Commercial, convenience-led; long-run and short-hop batteries in a three-road town.",
    sourceUrls: [],
  },
  {
    city: "melissa",
    service: "lockout",
    h1: "Car Lockout Service in Melissa, TX",
    title: "Car Lockout Service Melissa TX",
    metaDescription:
      "Locked out in Melissa? TRA opens your car using non-destructive entry whenever possible, at home or at a stop on US-75, TX-5 or TX-121. Call now.",
    intro:
      "Keys locked in the car turn a short stop into a long one wherever it happens. A TRA driver comes to the vehicle anywhere in Melissa, confirms you are entitled to it, and opens it using non-destructive entry whenever possible. If a child or pet is inside and in danger, call 911 first.",
    scenarios: [
      "Keys left on the seat at a stop on TX-5.",
      "A fob that died in a lot off US-75 with the spare key at home.",
      "Keys shut in the trunk after loading, which is a different job from opening a door.",
      "A door that locked itself with the engine running at a stop on TX-121.",
    ],
    localContext:
      "Melissa lies in north-central Collin County and borders Anna and McKinney. US-75 runs along its west side, TX-5 through its center and TX-121 through its east. We open cars at stops along all three roads and at homes across town.",
    faqs: [
      {
        q: "What should I tell dispatch about where the car is?",
        a: "The road, the nearest cross street or business, and where on the lot or street the car sits. In a town with three through roads, naming the road matters most.",
      },
      {
        q: "Do you need me there while you work?",
        a: "Yes. The driver confirms ownership before opening the vehicle, so you need to be at the car with ID or another proof that it is yours.",
      },
      {
        q: "Can you open the car if the fob has a dead battery?",
        a: "Yes. A dead fob does not change how the vehicle is opened. Tell dispatch the year, make and model when you call.",
      },
    ],
    primaryKeyword: "car lockout service Melissa TX",
    secondaryKeywords: ["locked out of car Melissa", "car unlock Melissa TX", "keys locked in car Melissa"],
    longTail: ["locked keys in car near me Melissa", "locked out of car on TX-5 Melissa", "keys locked in trunk Melissa TX"],
    intent: "Emergency, near-me; stop-and-home lockouts in a three-road town.",
    sourceUrls: [],
  },

  // ===================== PRINCETON =====================
  {
    city: "princeton",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Princeton, TX",
    title: "Flat Tire Change Princeton TX",
    metaDescription:
      "Flat tire in Princeton? If you have a usable spare, TRA puts it on where you are, on US-380 or at home. Call for roadside help.",
    intro:
      "US-380 is the road through Princeton, and a flat tire on it is a highway problem: traffic at speed, and McKinney about 8 miles west by road. If the vehicle carries a usable spare, a TRA driver comes to wherever it stopped and puts the spare on, so you are not waiting out a flat beside the traffic. We text or call when the driver is on the way.",
    scenarios: [
      "A blowout on US-380 with traffic passing at speed.",
      "A tire found flat in a driveway with a long drive to work ahead.",
      "A flat in a store lot off US-380 after a Saturday errand.",
      "A spare that has never been used and may not hold air.",
    ],
    localContext:
      "Princeton lies just east of the center of Collin County, and US-380 passes through it. No other city we serve touches its border, and McKinney is 8 miles west by road. We come to the car wherever in Princeton it is parked. On US-380, hazards on and as far from the lane as you can get.",
    faqs: [
      {
        q: "I'm on US-380 and traffic is close. What should I do?",
        a: "If you are in a live traffic lane, or anyone is in danger, call 911 first. If you can reach a shoulder, put your hazards on, stay buckled in and call us. Do not stand beside the car.",
      },
      {
        q: "Should I drive the 8 miles to McKinney on the flat?",
        a: "No. Driving on a flat can damage the wheel as well as the tire. Stop in the safest spot you can reach and call us instead.",
      },
      {
        q: "How do I know my spare is usable?",
        a: "It should be in the vehicle, hold air and be meant for your car. If you are not sure, say so when you call and dispatch will tell you whether tire replacement is the better request.",
      },
    ],
    primaryKeyword: "flat tire change Princeton TX",
    secondaryKeywords: ["flat tire service Princeton", "spare tire change Princeton", "tire change near me Princeton"],
    longTail: ["flat tire on US-380 Princeton", "change my flat tire Princeton TX", "flat tire east of McKinney"],
    intent: "Emergency, near-me; single-highway flats in an eastern Collin County town.",
    sourceUrls: [],
  },
  {
    city: "princeton",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Princeton, TX",
    title: "Car Battery Replacement Princeton TX",
    metaDescription:
      "Car battery failing in Princeton? TRA brings a new one to your driveway or lot and installs it there. Installation included for eligible vehicles.",
    intro:
      "A car with a dead battery cannot make the 8 miles to McKinney by road, and it should not have to. TRA brings a replacement battery to the vehicle in Princeton and installs it where it sits. The price shown on this page covers the battery and installing it, for eligible vehicles and batteries, and dispatch confirms the right battery and your total before a driver is sent.",
    scenarios: [
      "A battery that failed in the driveway on the morning of a long drive in to work.",
      "A car that sat all weekend and now only clicks.",
      "A vehicle that needed a jump and then died again the next day.",
      "A battery old enough that you would rather replace it before the cold arrives.",
    ],
    localContext:
      "Princeton lies just east of the center of Collin County, with US-380 passing through. No other city we serve touches its border, and McKinney is 8 miles west by road. We install batteries at the car, in a driveway, at a workplace or in a lot off US-380.",
    faqs: [
      {
        q: "What do you need from me before you come out?",
        a: "The car's location, and its year, make and model. The VIN is optional, but it confirms the exact battery if you can reach it easily.",
      },
      {
        q: "Can the driver install it if the car is in a garage?",
        a: "Usually, as long as the driver can work safely around the vehicle. Tell dispatch whether it is in the garage, the driveway or on the street.",
      },
      {
        q: "How do I use the warranty?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice, since that is what warranty service is handled against.",
      },
    ],
    primaryKeyword: "car battery replacement Princeton TX",
    secondaryKeywords: ["mobile battery replacement Princeton", "battery installation Princeton", "new car battery Princeton TX"],
    longTail: ["car battery died Princeton TX", "mobile car battery near me Princeton", "battery replaced at home Princeton"],
    intent: "Commercial, convenience-led; stranded-by-distance battery swaps in an isolated eastern Collin town.",
    sourceUrls: [],
  },
  {
    city: "princeton",
    service: "lockout",
    h1: "Car Lockout Service in Princeton, TX",
    title: "Car Lockout Service Princeton TX",
    metaDescription:
      "Locked out in Princeton? TRA opens your car using non-destructive entry whenever possible, at home or along US-380. Call now.",
    intro:
      "Princeton is a place where the spare key is a drive away: no other city we serve touches its border, and McKinney is 8 miles west by road. A TRA driver comes to the car wherever it is parked in Princeton, confirms it is yours, and opens it using non-destructive entry whenever possible.",
    scenarios: [
      "Keys on the seat after a stop at a gas station off US-380.",
      "A fob that died in a store lot with the spare key at home.",
      "Keys shut in the trunk, which is a different job from opening a door.",
      "A child or pet inside a locked car: if they are in danger, call 911 first, then call us.",
    ],
    localContext:
      "Princeton lies just east of the center of Collin County, with US-380 passing through. A clear location helps the driver find the car, so give dispatch the road, the nearest cross street and where in the lot or on the street it is parked. We open cars at stops along US-380 and at homes in town.",
    faqs: [
      {
        q: "Do I need to prove the car is mine?",
        a: "Yes. The driver asks for ID, or another way to confirm you are entitled to the vehicle, before opening it.",
      },
      {
        q: "Will opening it damage the door or the lock?",
        a: "Our drivers use non-destructive entry methods whenever possible. Give dispatch the year, make and model so the approach is planned for your vehicle.",
      },
      {
        q: "Can you open it if the keys are in the trunk?",
        a: "Yes, but it is a different job from opening a door, and it needs different tools. Tell dispatch which one you have when you call.",
      },
    ],
    primaryKeyword: "car lockout service Princeton TX",
    secondaryKeywords: ["locked out of car Princeton", "car unlock Princeton TX", "keys locked in car Princeton"],
    longTail: ["locked keys in car near me Princeton", "locked out of car on US-380 Princeton", "keys locked in trunk Princeton TX"],
    intent: "Emergency, near-me; spare-key-is-a-drive-away lockouts in an isolated town.",
    sourceUrls: [],
  },
];
