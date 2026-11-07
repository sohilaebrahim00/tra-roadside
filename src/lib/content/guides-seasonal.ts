import type { Guide } from "./guides";

/** Seasonal and event guides. The rules are in guides.ts. */

const UPDATED = "2026-11-04";

/** Portrait field photos for the guide cards, all 1080 x 1350. */
const card = (name: string) => ({ src: `/images/field/${name}.webp`, width: 1080, height: 1350 });

export const GUIDES_SEASONAL: Guide[] = [
  {
    slug: "state-fair-of-texas-car-trouble",
    title: "State Fair of Texas Car Trouble: What to Do",
    h1: "Car trouble after a day at the State Fair of Texas",
    metaDescription:
      "Dead battery, flat tire or keys locked in after a day at Fair Park in Dallas? What to tell dispatch, what to expect, and when to call 911 first.",
    topic: "Seasonal guide",
    dek: "The State Fair of Texas fills Fair Park in Dallas for several weeks every fall. By the time you walk back to the car it has sat in a big lot for hours, the light is going and your arms are full. If it won't start, has a flat or has your keys locked inside, here is how to get help without wandering the lot for an hour.",
    updated: UPDATED,
    cardImage: card("field-arrival-gear"),
    sections: [
      {
        heading: "Work out exactly where the car is",
        paragraphs: [
          "Fair Park parking is a lot of open asphalt where one row looks like the next, and after dark it looks worse. Before you do anything else, photograph the nearest light pole, row marker or sign, and drop a pin in your phone's map. Note the street or gate the lot faces. Dispatch can use every bit of that, and the driver won't have to guess which row is yours.",
          "A crowd can slow phones down. If a call won't connect, walk a few steps away from the busiest spot and try again, or send a request through our website instead. We text or call when the driver is on the way.",
        ],
      },
      {
        heading: "A dead battery after hours in the sun",
        paragraphs: [
          "A car that sat in a lot from noon until dark has a tired battery, and a fair day often adds to the load: phones charging, a dome light a kid left on, a hatch that never quite latched. If the engine only clicks, or the dash lights come on dim and nothing turns over, the battery needs a jump.",
          "A jump start is {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once for the job. While you wait, switch off the lights, radio and climate control, and pop the hood if you can do it without blocking a lane. A battery that quits after a warm day is often an old one, so let the driver tell you what they saw when it started.",
        ],
      },
      {
        heading: "A flat tire, or keys locked inside",
        paragraphs: [
          "Rows are tight, so tell dispatch if other cars are packed in around yours. A tire change needs room to open the doors and set a jack. With a good spare in the car, a flat tire change is {{price:flat-tire-change}}, plus the {{dispatchFee}} dispatch fee. Without a usable spare, we can supply and install a tire. Tire replacement is {{price:tire-replacement}}, plus the fee, once dispatch confirms one is available.",
          "Opening a locked car is {{price:lockout}}, and keys locked in the trunk are a separate job at {{price2:lockout}}, each plus the fee. The driver confirms the car is yours before opening it, so have ID ready. If a child or a pet is locked inside, call 911 first. Don't wait for a service truck.",
        ],
      },
      {
        heading: "How long it takes, and who controls the lot",
        paragraphs: [
          "We send the nearest available driver as soon as possible. When a big fair night lets out, the streets around Fair Park back up, so allow longer than that.",
          "TRA has no connection to the State Fair or to Fair Park, and the fair's own rules may limit where any driver can go. That is why an exact spot matters more here than it would at a driveway. If any part of the car is in a lane of traffic, or anyone feels unsafe, call 911 before anything else.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I leave the car at the fair overnight if help is slow?",
        a: "That is for the fair and whoever runs the lot to say, not us. Ask staff before you walk away, and let dispatch know if you decide to wait with the car instead.",
      },
      {
        q: "My jump worked. Will the car start again tomorrow?",
        a: "Maybe not. A battery that gave out after a day of heat is often old, and a short drive may not recharge it. If it won't restart, ask dispatch about a battery replacement, which is {{price:battery-replacement}} for eligible vehicles and batteries.",
      },
      {
        q: "My phone is nearly dead from taking photos. What matters most on the call?",
        a: "Where the car is, the year, make and model, and what it is doing. Put the phone on low power mode and keep the ringer on, so you hear the call or text when the driver is on the way.",
      },
    ],
    services: ["jump-start", "lockout", "flat-tire-change"],
  },
  {
    slug: "att-stadium-game-day-car-trouble",
    title: "AT&T Stadium Car Trouble on Game Day",
    h1: "Car trouble on game day or concert night around AT&T Stadium",
    metaDescription:
      "Dead battery, flat tire or locked keys after a game or concert in Arlington? How to describe your spot in event traffic and what to expect from help.",
    topic: "Seasonal guide",
    dek: "AT&T Stadium sits in Arlington's entertainment district, close to Globe Life Field, Choctaw Stadium and Texas Live!, so on a Cowboys game day or a concert night the whole area is full at once. A car that won't start there is a small problem inside a very big one, and the plan has to account for the crowd as well as the car.",
    updated: UPDATED,
    cardImage: card("field-arrival-van"),
    sections: [
      {
        heading: "Say where you are in lot terms",
        paragraphs: [
          "On an event day the lots around the stadium can be a long walk from the nearest street, and the streets themselves may be closed, one-way or backed up. Before you call, work out which side of the stadium you parked on and read the lot letter, number or color off the nearest sign. A photo of that sign beats any description.",
          "Add the street or gate you would use to leave. The stadium's own staff and rules decide where vehicles may go on event days, and TRA has no arrangement with the stadium or the city. If a driver can't get to your lot, dispatch will talk it through with you.",
        ],
      },
      {
        heading: "A dead battery after the tailgate",
        paragraphs: [
          "A lot of game-day battery trouble starts hours before kickoff: doors open, speakers on, interior lights glowing while people eat out of the back of the car. Add a warm afternoon in the sun, and a battery that was borderline stops being enough. If the engine only clicks when you try to leave, a jump start is {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once.",
          "People nearby will offer their own jumper cables. If you know what you're doing and the battery looks normal, that is your call. If the battery case is swollen, leaking or smells like rotten eggs, don't let anyone try it. Wait for a driver.",
        ],
      },
      {
        heading: "Flat tires and locked keys on the way out",
        paragraphs: [
          "Everyone leaves at once, and traffic around the stadium can crawl for a long time after the game. A tire that is low or flat is far better fixed in the lot than on the road, so don't drive on it to reach an exit. That ruins the wheel. A flat tire change using the spare you carry is {{price:flat-tire-change}}, plus the dispatch fee.",
          "If the keys are in the car, opening it is {{price:lockout}}, and keys locked in the trunk are a separate job at {{price2:lockout}}, again plus the fee. The driver checks that the car is yours first.",
        ],
      },
      {
        heading: "Waiting for the crowd and for the driver",
        paragraphs: [
          "We send the nearest available driver as soon as possible. In heavy event traffic, expect it to take longer. We text or call when the driver is on the way, so keep your ringer on and your phone charged.",
          "If the car is parked safely out of the way, there is nothing wrong with letting the exits clear before the driver comes in. If any part of the car is in a lane of traffic, or anyone is in danger, call 911 first.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a driver come into the stadium lot?",
        a: "That depends on the stadium's rules for that event, which we don't control. Tell dispatch exactly where the car is, and they will tell you if getting to it looks like a problem.",
      },
      {
        q: "My map pin puts me on the wrong side of the stadium. Now what?",
        a: "GPS can drift near big structures. Give dispatch the sign photo, the lot letter or number, and the nearest street, and trust those over the pin.",
      },
      {
        q: "What if it isn't the battery?",
        a: "If the lights are bright and the engine won't turn, the starter may be the problem, and a jump won't fix it. We don't tow or do mechanical repair, so that would be a tow company and a shop. The driver can tell you what they found.",
      },
    ],
    services: ["jump-start", "flat-tire-change", "lockout"],
  },
  {
    slug: "american-airlines-center-car-trouble",
    title: "Car Trouble at American Airlines Center",
    h1: "Car trouble after a night at American Airlines Center in Victory Park",
    metaDescription:
      "Dead battery, flat tire or keys locked in after a Mavericks, Stars or concert night in Victory Park? How to find your spot in a garage and get help.",
    topic: "Seasonal guide",
    dek: "American Airlines Center sits in the Victory Park neighborhood of downtown Dallas. When a Mavericks or Stars game or a big concert lets out, a whole arena of people heads for the same few exits at once. If your car won't start, the hard part usually isn't the car. It is telling someone how to find it in a concrete garage.",
    updated: UPDATED,
    cardImage: card("field-tire-spare-lot"),
    sections: [
      {
        heading: "Give the level, the column and a photo",
        paragraphs: [
          "A garage has many floors that look the same, and a dropped map pin is nearly useless inside concrete. Read the level number and the nearest column or section marker, then photograph it. Add the nearest elevator or stair, and the street the garage fronts. If you parked on a surface lot instead, give the street and the nearest corner.",
          "Phone signal drops inside a garage and slows when a crowd is on the network. If a call won't go through, walk to a ramp or street level where signal returns, or send a request through our website. Take the photo before you leave the car.",
        ],
      },
      {
        heading: "A cold night and a tired battery",
        paragraphs: [
          "The basketball and hockey seasons run through the cold months, and cold is when a worn battery finally shows it. After a few hours parked, an older battery may have just enough left to light the dash and not enough to crank the engine.",
          "A jump start costs {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee that is charged once. Once the car is running, don't sit with the engine going in a closed garage for long, since a garage holds exhaust. Ask the driver how long to run the car, and where.",
        ],
      },
      {
        heading: "Ramps, slopes and a flat tire",
        paragraphs: [
          "A tire change goes best on flat ground. If the car is on a ramp or a sloped level, tell dispatch, so the driver knows what to expect. A flat tire change using the spare in your vehicle is {{price:flat-tire-change}}, and a tread puncture that can be repaired is {{price:tire-repair-plug-patch}}. Both are plus the {{dispatchFee}} dispatch fee.",
          "Keys end up locked in after a night out: a coat on the seat, the fob still in its pocket. Opening the car is {{price:lockout}}, and keys locked in the trunk are {{price2:lockout}}, both plus the dispatch fee. Expect the driver to confirm ownership before opening it.",
        ],
      },
      {
        heading: "Leaving the car, and leaving the area",
        paragraphs: [
          "If you'd rather not wait around, DART's Green and Orange Lines stop at Victory station near the arena, so the rest of your group can get home while one person waits with the car. Check with the garage before leaving a car overnight, since its rules are its own.",
          "We send the nearest available driver as soon as possible. TRA has no connection with the arena or the garages around it, so a garage's gates and height limits may decide how a driver reaches you. You'll get a text or a call from us once the driver is on the way. If the car dies in an exit lane with traffic behind you, put the hazards on and call 911 if anyone is at risk.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will my phone's location find my car inside a garage?",
        a: "Often not. Concrete blocks GPS, and the pin can land in the street or on another level. The level number and a photo of the nearest sign are more reliable.",
      },
      {
        q: "How do I find my car again if I walk off to get signal?",
        a: "Photograph the level sign and a nearby column before you go, and note which ramp or elevator you took. Then you can describe the way back to a driver as well as to yourself.",
      },
      {
        q: "What should I do while I wait?",
        a: "Stay somewhere well lit, near other people and away from ramps where cars are moving. Turn off the lights and the radio in the car so the battery doesn't get any worse.",
      },
    ],
    services: ["jump-start", "lockout", "flat-tire-change"],
  },
  {
    slug: "texas-motor-speedway-race-weekend",
    title: "Car Trouble at Texas Motor Speedway",
    h1: "Car trouble on a race weekend at Texas Motor Speedway",
    metaDescription:
      "Dead battery, flat tire or lockout around Texas Motor Speedway in north Fort Worth? What to tell dispatch, and how I-35W traffic affects help.",
    topic: "Seasonal guide",
    dek: "Texas Motor Speedway sits where Interstate 35W meets State Highway 114 in north Fort Worth. On its NASCAR weekend, which its own schedule puts in the spring, the lots fill with vehicles that arrived hours early and will all leave at once. Getting in is slow, getting out is slower, and a car that won't cooperate in the middle of it needs a plan.",
    updated: UPDATED,
    cardImage: card("field-tire-shoulder-night"),
    sections: [
      {
        heading: "Huge lots, few landmarks",
        paragraphs: [
          "A speedway lot is the opposite of a driveway. It is huge, flat and open, with few landmarks. Photograph the nearest sign, gate number or light tower, and take a wide shot that shows what's around the car. Say which gate you came in through, and whether you're in a parking area or a camping area, since camping is part of race weekend here.",
          "The track's own staff, gates and rules decide where outside vehicles can go, and TRA has no connection with the speedway. A driver who can't reach your spot will need to talk it over with you, so keep the phone close.",
        ],
      },
      {
        heading: "A battery that sat all weekend",
        paragraphs: [
          "If you arrived early in the weekend and the car sat in the sun, with a cooler, a speaker and phone chargers running off it, the battery may have been drawn down before the green flag. The jump itself is {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee, charged once.",
          "Anything plugged into the car's outlet with the engine off is working against the battery. Unplug it all, switch off the lights and the climate control, and pop the hood if it's safe. After the jump, let the driver say how long to run the engine.",
        ],
      },
      {
        heading: "A flat on the way out, and I-35W",
        paragraphs: [
          "Roads around a speedway pick up sharp debris, and a tire can go flat in the lot or on the highway home. Pull as far from the lane as you can, put on the hazards and get everyone out on the side away from traffic. If any part of the car is in a lane, or traffic is passing close, call 911 first. The shoulder of a freeway is a bad place to wait.",
          "In a lot or on a quiet road, a flat tire change using your spare is {{price:flat-tire-change}}, plus the {{dispatchFee}} dispatch fee, charged once. Tire repair, for a puncture in the tread, is {{price:tire-repair-plug-patch}}, plus the same fee. A cut in the sidewall can't be repaired, and that tire has to be replaced.",
        ],
      },
      {
        heading: "Waiting out the traffic",
        paragraphs: [
          "We send the nearest available driver as soon as possible. Race-weekend traffic on I-35W and the roads near the track can stretch that a lot, and a driver may need extra time to reach you. Once a driver is on the way, you will get a text or a call from us.",
          "If the car is parked safely and nobody is stuck, let the lot empty first. A half-empty lot is easier for anyone to drive through. Keep the phone charged, because a long day of photos and texts is how phones die at the worst moment.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it safe to wait inside the car on a hot race weekend?",
        a: "With the engine off and no air conditioning, a closed car heats up quickly. Wait in the shade away from moving traffic, and call 911 if anyone feels ill.",
      },
      {
        q: "Can a nail in the tire be plugged?",
        a: "If the puncture is in the tread, often yes. Damage in or near the sidewall can't be safely repaired. The driver checks before starting and tells you which it is.",
      },
      {
        q: "I'm camping at the track. Does that change anything?",
        a: "Only in how you describe the spot. Say it's a camping area, give the section or the nearest sign, and mention if the car is parked close to other vehicles.",
      },
    ],
    services: ["jump-start", "flat-tire-change", "lockout"],
  },
  {
    slug: "fort-worth-stock-show-rodeo",
    title: "Stock Show & Rodeo Car Trouble in Fort Worth",
    h1: "Car trouble at the Fort Worth Stock Show & Rodeo",
    metaDescription:
      "Cold-morning dead batteries, low tires and locked keys at the Fort Worth Stock Show & Rodeo. What to tell dispatch from a busy lot.",
    topic: "Seasonal guide",
    dek: "The Fort Worth Stock Show & Rodeo runs from mid-January into early February at the Will Rogers Memorial Center and Dickies Arena. Those are some of the coldest weeks in North Texas, and the lots fill early on weekends. A weak battery picks a morning like that to quit.",
    updated: UPDATED,
    cardImage: card("field-jump-start-hood"),
    sections: [
      {
        heading: "Why cold mornings find weak batteries",
        paragraphs: [
          "Cold slows the chemistry inside a battery, so it can deliver less at the exact moment a cold engine needs more. The wear that weakened it usually happened last summer. A battery that has been fine all fall can fail on the first hard-freeze morning of the show.",
          "If the engine cranks slowly and then clicks, a jump start is {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once. If the car needed a jump and the battery is more than about three years old, ask dispatch about replacing it. Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, and dispatch confirms the fit and your total before a driver is sent.",
        ],
      },
      {
        heading: "Which venue, which lot, which gate",
        paragraphs: [
          "The show spreads over two main venues and several lots, and the rodeo is in a different building from the exhibits. Tell dispatch which one you came for, the name or color on the lot sign, and the gate or street nearest the car. A photo of that sign is worth more than a description of the row.",
          "The show's own staff and rules decide who can drive onto the grounds, and TRA has no arrangement with the show or the venues. Lots can fill early on weekends and cars get parked tight, so say if yours is boxed in.",
        ],
      },
      {
        heading: "Low tires and flat tires after a cold night",
        paragraphs: [
          "Air in a tire contracts when it gets cold, so a tire that looked fine in the afternoon can be noticeably low by morning. If the pressure warning light is on, check before you drive off. A tire that is merely low can be filled. One that has gone flat needs a spare or a repair.",
          "A flat tire change with the spare you carry is {{price:flat-tire-change}}, plus the dispatch fee. A tread puncture that can be repaired is {{price:tire-repair-plug-patch}}, plus the same fee. Don't drive far on a tire that is losing air. It damages the wheel as well as the tire.",
        ],
      },
      {
        heading: "Coats, keys and waiting in the cold",
        paragraphs: [
          "Winter coats are where keys disappear: a fob in a pocket, the coat tossed on the seat, the door shut behind it. Opening the car is {{price:lockout}} and keys locked in the trunk are {{price2:lockout}}, each plus the dispatch fee. Have ID handy, because the driver confirms the car is yours before opening it. A child or a pet locked in the car is an emergency in the cold too, and the call goes to 911 first.",
          "We send the nearest available driver as soon as possible. You'll hear from us by text or call once the driver is on the way. While you wait, stay somewhere warm and near the car, and keep the phone charged.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a driver come onto the stock show grounds?",
        a: "That is up to the show and the venues, whose rules we don't control. Tell dispatch exactly where the car is, and they will say if reaching it looks difficult.",
      },
      {
        q: "How long should I run the engine after a jump?",
        a: "Ask the driver. A battery that was run down needs time to recover, and a short trip across the lot may not be enough.",
      },
      {
        q: "Is a weak battery the only thing that makes a car click and not start?",
        a: "No. A loose or corroded connection at the battery terminals can do the same, usually with a crust of white or blue-green buildup on the posts. The driver will look and tell you what they find.",
      },
    ],
    services: ["jump-start", "battery-replacement", "lockout"],
  },
  {
    slug: "scarborough-renaissance-festival-car-trouble",
    title: "Scarborough Renaissance Festival Car Trouble",
    h1: "Car trouble at the Scarborough Renaissance Festival near Waxahachie",
    metaDescription:
      "Flat tire, dead battery or keys locked in after a day at the Scarborough Renaissance Festival? How to describe a field lot and get help.",
    topic: "Seasonal guide",
    dek: "The Scarborough Renaissance Festival is outside Waxahachie, south of Dallas, and it runs on weekends each spring from April through Memorial Day. A day there ends back at the car, which may be on grass or gravel well away from any street. Here is how to get help from a spot like that.",
    updated: UPDATED,
    cardImage: card("field-tire-jack"),
    sections: [
      {
        heading: "Describe the ground, not just the address",
        paragraphs: [
          "A festival's street address won't find a car in a field. Take a photo of the nearest landmark: a gate, a light pole, a flagpole, a row of trees, a banner. Drop a pin on your phone's map, and tell dispatch what the car is sitting on: grass, gravel or dirt, dry or soft. That last part matters, because a jack needs firm ground.",
          "We don't tow or pull cars out of mud. If the car is stuck, that is a call to a tow company. If it also has a flat or a dead battery, say so, because that changes the job.",
        ],
      },
      {
        heading: "Flat tires on rough ground",
        paragraphs: [
          "Gravel, ruts, stakes and the odd stray nail are hard on tires, and a tire can pick up a puncture well before it goes flat. A flat tire change using the spare you carry is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once. If the puncture is in the tread, tire repair is {{price:tire-repair-plug-patch}}, plus the same fee.",
          "Check the spare before the day starts. A compact spare is meant for a short drive at reduced speed, with the limit printed on it, and it should be replaced with a proper tire soon after.",
        ],
      },
      {
        heading: "A battery that gave out in the field, and locked keys",
        paragraphs: [
          "A long afternoon with the hatch open, a phone charging off the car and the dome light on can drain a battery. If the engine only clicks, a jump start is {{price:jump-start}}, plus the dispatch fee. If cars are packed close on both sides, tell dispatch, since the hood has to open and the driver needs to reach the battery.",
          "A car parked unlocked for a picnic can also end up locked with the keys in it. Opening the car is {{price:lockout}}, and keys locked in the trunk are {{price2:lockout}}, each plus the dispatch fee. The driver confirms ownership before opening anything, so keep your ID on you.",
        ],
      },
      {
        heading: "Weather, distance and who sets the rules",
        paragraphs: [
          "Spring in North Texas can bring storms with little warning. If lightning is close, wait in a vehicle or a shelter. Never drive into water over a road, and if a low spot in the field or on the way out floods, stay out of it and wait for help from higher ground.",
          "We send the nearest available driver as soon as possible. The real time depends on where you are and the traffic, and a country road with a festival letting out is slower than most, so allow longer. We text or call as soon as the driver is headed your way. The festival's own staff and rules decide where drivers can go, and TRA has no connection with the festival.",
        ],
      },
    ],
    faqs: [
      {
        q: "What if I can't give dispatch an address?",
        a: "Describe it. Say which entrance you used, what is nearby and what the ground is like, and read out the text on the nearest sign. A photo helps if dispatch asks for one.",
      },
      {
        q: "Can you pull my car out of mud?",
        a: "No. We don't tow or recover stuck vehicles, so a tow company is the right call. If the car also has a dead battery or a flat tire, mention it.",
      },
      {
        q: "Is it okay to drive home on a compact spare?",
        a: "Usually, if you keep to the speed printed on it and don't go far. It is built to get you to a tire shop, not to be driven for weeks. Have the flat repaired or replaced soon.",
      },
    ],
    services: ["flat-tire-change", "jump-start", "lockout"],
  },
  {
    slug: "holiday-road-trip-car-check-texas",
    title: "Holiday Road Trip Car Check for Texas Drivers",
    h1: "What to check on your car before a Thanksgiving or Christmas drive",
    metaDescription:
      "A short pre-trip car check before a Thanksgiving or Christmas drive from DFW: tires, spare, battery, and what to do if the car lets you down.",
    topic: "Seasonal guide",
    dek: "Thanksgiving and Christmas send a lot of cars onto long highway drives, and many of them haven't been looked at since summer. Twenty minutes in the driveway the weekend before can head off most of what leaves families on the shoulder. Here is what to look at, in the order that matters.",
    updated: UPDATED,
    cardImage: card("field-tire-spare-lot"),
    sections: [
      {
        heading: "Tires first, then the spare",
        paragraphs: [
          "Walk around each tire and look for cracks, bulges and anything stuck in the tread. Check the pressure with a gauge while the tires are cold, and use the number on the sticker in the driver's door jamb, not the one molded into the sidewall.",
          "Then open the trunk. Is the spare there, and does it hold air? Are the jack and lug wrench there? If your wheels have locking lug nuts, find the key and keep it in the car. A flat tire change with the spare you carry is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once, but it only works if the spare is usable.",
        ],
      },
      {
        heading: "The battery, and what belongs with a shop",
        paragraphs: [
          "Most car batteries last three to five years, and Texas heat pushes that toward the short end. If yours is past three years, starts slowly or has needed a jump lately, get it tested before a long drive instead of after. Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed where the car is parked, and dispatch confirms the fit and your total first.",
          "Belts, hoses, brakes, coolant and oil are for a repair shop. We don't do mechanical repair, so if anything on that list has been bothering you, take it in before you leave, not on the way.",
        ],
      },
      {
        heading: "Pack for a wait",
        paragraphs: [
          "A breakdown is mostly waiting, and a small kit makes it more bearable:",
          "Long stretches of Texas highway have thin phone coverage in places, so know your exit or mile marker. On a highway, that is your address.",
        ],
        list: [
          "A phone charger that works in the car.",
          "A flashlight and a blanket.",
          "Water and a snack for everyone in the car, pets included.",
          "Reflective triangles, if you have them.",
          "The year, make and model written down, with the VIN if it is easy to reach.",
        ],
      },
      {
        heading: "If the car quits close to home",
        paragraphs: [
          "Our service area is the Dallas–Fort Worth Metroplex. We send the nearest available driver as soon as possible. On the busiest travel days, traffic can make it longer. We text or call as the driver heads to you. If you are in a lane of traffic, or anyone is in danger, call 911 first.",
          "Loading the trunk is also when keys get locked inside. Unlocking the car is {{price:lockout}}, and a trunk lockout is {{price2:lockout}}, each plus the dispatch fee.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I know if my battery will make it through a long drive?",
        a: "You can't be sure, but slow cranking, dim lights or a jump start in the past few weeks are warnings. An auto parts store or a shop can test a battery, and past three years it is worth doing before a trip.",
      },
      {
        q: "Is a compact spare fine for a long highway drive?",
        a: "It is meant to get you to a tire shop, and most carry a speed limit printed on them. If you use one on a long trip, plan to replace the damaged tire in the next town.",
      },
      {
        q: "Can you help if I break down in another city?",
        a: "We dispatch across the Dallas–Fort Worth area. Outside it, your insurer's or car maker's roadside plan, or a local company, is the one to call.",
      },
    ],
    services: ["battery-replacement", "flat-tire-change", "jump-start"],
  },
  {
    slug: "car-wont-start-after-airport-parking",
    title: "Car Won't Start After Airport Parking",
    h1: "Your car won't start after a trip: dead batteries and airport parking",
    metaDescription:
      "Back from a trip at DFW Airport or Love Field and the car won't start? Why a parked car loses its charge and what to tell dispatch.",
    topic: "Seasonal guide",
    dek: "You land late, ride the shuttle to the lot, find the car, and it clicks or does nothing. A car left alone for a week or two is a classic way to meet a dead battery, whether it sat at DFW Airport or at Love Field. Here is why it happens and how to get help from a lot or garage at night.",
    updated: UPDATED,
    cardImage: card("field-jump-start-hood"),
    sections: [
      {
        heading: "Why a parked car runs down",
        paragraphs: [
          "A parked car is never completely off. The clock, the alarm, the keyless entry and the computers all keep drawing a little power. A healthy battery covers that for a while. A battery that is already weak, worn down by Texas summers, covers it for less time, and a lot in July is hard on batteries.",
          "So when a car won't start after a trip, it isn't always the trip. Often the battery was close to done and the time away finished it. Tires can lose a little air while a car sits too, so glance at them while you're out there.",
        ],
      },
      {
        heading: "Telling dispatch where the car is",
        paragraphs: [
          "Airport lots are large, and the same lot can be a long shuttle ride from the terminal. Tell dispatch:",
          "A good habit for next time is to photograph the row sign when you park. The airport's own staff and rules decide where an outside driver can go in its lots, and TRA has no connection with either airport, so the more exactly you can say where the car is, the better.",
        ],
        list: [
          "Which airport, and which lot or garage. DFW Airport has terminal parking beside the terminals, Express parking near the north entrance and Remote parking served by shuttle. Love Field's parking includes garages near its terminal.",
          "The level, section or row, read off the nearest sign or pole.",
          "The terminal you flew from, if you aren't sure of the lot's name.",
          "Whether the car is a hybrid or electric, if it is.",
        ],
      },
      {
        heading: "What happens after the jump",
        paragraphs: [
          "A jump start is {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once. It gets the car running, but it can't make a worn battery hold a charge. Ask the driver whether the battery looked like it would last. If it didn't, battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, and the new battery is installed where the car is parked.",
          "After a jump, don't shut the engine off at the first stop. Drive a while, and have the battery tested if you've needed a jump twice. If the lights are bright and nothing turns, or the engine turns but never catches, it isn't the battery. A jump won't fix that, and we don't tow or do mechanical repair.",
        ],
      },
      {
        heading: "Waiting in a lot at night",
        paragraphs: [
          "We send the nearest available driver as soon as possible. Airport roads can add time. A text or call from us tells you the driver is on the way.",
          "Wait somewhere well lit with other people around, near the shuttle stop or an entrance, and keep your luggage with you. If there is a gate or a ticket at the exit that a driver would have to pass, mention it to dispatch.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long can a car sit before the battery dies?",
        a: "There is no fixed number. Many healthy batteries get through a week or two, but age, heat and how many electronics the car has all change it. If you'll be gone longer than that, ask a shop to test the battery before you leave.",
      },
      {
        q: "Does it matter which airport I used?",
        a: "Not to the service, since DFW Airport and Love Field are both in cities we serve. It matters for directions, because the lots are laid out differently, so give the lot name, the level and the row.",
      },
      {
        q: "The car started, but the radio and windows act strangely. Is that the battery?",
        a: "It is common after the power drops very low, and it usually settles after some driving. If it keeps happening, the battery is likely failing.",
      },
    ],
    services: ["jump-start", "battery-replacement"],
  },
  {
    slug: "north-texas-storm-season-car-trouble",
    title: "North Texas Storm Season Car Trouble",
    h1: "Spring storms in North Texas: flooded roads, hail and debris in your tires",
    metaDescription:
      "What to do about flooded roads, hail and storm debris in North Texas: when to turn around, when to call 911, and which car problems we handle.",
    topic: "Seasonal guide",
    dek: "Severe weather peaks in North Texas in the spring, and April is the usual high point. For a driver that means hail, streets that fill with water in minutes, and roads littered with whatever the wind dropped. Most of this guide is about staying safe. The car comes second.",
    updated: UPDATED,
    cardImage: card("field-tire-shoulder-night"),
    sections: [
      {
        heading: "Water on the road: turn around",
        paragraphs: [
          "The National Weather Service's rule is 'Turn Around, Don't Drown,' and it says it is never safe to drive into flood water. It takes just 12 inches of rushing water to carry away most cars, and about two feet to carry away SUVs and trucks. You can't tell by looking how deep it is, or whether the road underneath is still there.",
          "Don't drive around a barrier on a flooded road. If the car stalls in water, don't try to restart it, since water in the engine can wreck it. If water is rising around the car, get out to higher ground and call 911. A car that took in water needs a tow company and a shop, because towing and mechanical repair are not part of what we do.",
        ],
      },
      {
        heading: "Hail, and staying put",
        paragraphs: [
          "If hail starts while you're driving, slow down and get off the road at the first safe place. If you are already parked, stay inside or under cover until it stops, and don't go out to look at the car in the middle of a storm.",
          "Afterward, photograph the damage before you move anything. Dents are a body shop and insurance matter, and we don't do body or glass work. If a windshield is badly cracked or glass is broken, the car may not be safe to drive. If it won't start after a long wait with the radio and lights on, a jump start is {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once.",
        ],
      },
      {
        heading: "Debris in your tires",
        paragraphs: [
          "After a storm the road carries roofing nails, shingle scraps, broken glass and branches. A tire can pick up a screw or a nail long before it goes flat, so check your tires the next morning, not only right after the storm. If you see something in the tread, leave it in place. Pulling it out usually turns a slow leak into a flat.",
          "A flat tire change using your spare is {{price:flat-tire-change}}. Tire repair, for a puncture in the tread, is {{price:tire-repair-plug-patch}}. A tire damaged beyond repair has to be replaced, and tire replacement is {{price:tire-replacement}} once dispatch confirms a tire is available. Each is plus the {{dispatchFee}} dispatch fee.",
        ],
      },
      {
        heading: "Getting help after a storm",
        paragraphs: [
          "A car in a lane of traffic, or anyone in danger, means a call to 911 first. We send the nearest available driver as soon as possible. The real time depends on location and traffic, and we text or call when the driver is on the way.",
          "A driver can't get through a flooded or closed road, so tell dispatch if water or debris sits between you and the nearest dry street. Keep the phone charged, since a power outage can mean you can't recharge it at home.",
        ],
      },
    ],
    faqs: [
      {
        q: "How deep is too deep to drive through?",
        a: "Any depth where you can't see the bottom. Flowing water can lift a car at depths that look shallow, and the road under it may have washed out. Turn around and find another route.",
      },
      {
        q: "Should I move my car after hail?",
        a: "Photograph it first, for your insurer. Then check the tires and the glass before you drive. If a windshield is cracked across your view, or glass is broken, don't drive it.",
      },
      {
        q: "Do you fix hail dents or broken glass?",
        a: "No. We handle jump starts, battery replacement, lockouts and tire work such as flat tire changes, repairs and replacements. Dents and glass go to a body shop or a glass shop.",
      },
    ],
    services: ["flat-tire-change", "tire-repair-plug-patch", "tire-replacement"],
  },
  {
    slug: "back-to-school-car-trouble-dfw",
    title: "Back-to-School Car Trouble in DFW",
    h1: "Back-to-school car trouble in DFW: pickup lines, heat and a car that dies in the lot",
    metaDescription:
      "School starts in August, the heat is still on, and the pickup line is long. What to do if the car won't start, a tire goes flat or keys get locked in.",
    topic: "Seasonal guide",
    dek: "School starts in August across Dallas–Fort Worth, when the heat is at its worst and the pickup line is at its longest. A car that dies at the front of that line, or with a child in the back seat, feels different from a normal dead battery. Here is what to do, in the order that matters.",
    updated: UPDATED,
    cardImage: card("field-arrival-van"),
    sections: [
      {
        heading: "If the car won't restart in the line",
        paragraphs: [
          "Many parents sit in the pickup line for a long time with the fan on and a phone charging. Some switch the engine off to save gas and run the fan from the battery. A weak battery will manage that for a while and then fail, with a row of cars behind you.",
          "Put the hazard lights on and tell the staff directing the line, then let cars go around if they can. The school's own staff decide where a stopped car can wait, and TRA has no arrangement with any school or school district. A jump start runs {{price:jump-start}}, with a {{dispatchFee}} dispatch fee added once.",
        ],
      },
      {
        heading: "Children, heat and locked doors",
        paragraphs: [
          "A closed car heats up in minutes on an August afternoon. If a child or a pet is inside a locked car and in any danger, call 911 first. Do not wait for a service truck. Once everyone is safe, opening the car is {{price:lockout}} and keys locked in the trunk are {{price2:lockout}}, each plus the dispatch fee.",
          "If a child is with you while the car waits for help, move them to shade, or into the school office or another air-conditioned building. Never leave a child alone in a car, even for a few minutes.",
        ],
      },
      {
        heading: "A battery weakened by the summer",
        paragraphs: [
          "The first week of school is when a battery worn down by a hot summer, or one that sat while the family traveled, finally gives up. Slow cranking, dim dash lights and a clock that resets are the warning signs. A battery more than three years old that shows any of them is worth replacing.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, and dispatch confirms the fit and your total before a driver is sent. A flat tire change using the spare in the vehicle is {{price:flat-tire-change}}, plus the {{dispatchFee}} dispatch fee. In a school lot, tell dispatch if the car is next to a curb, a bus lane or a fence, since that changes how a driver can work around it.",
        ],
      },
      {
        heading: "Timing around pickup",
        paragraphs: [
          "Streets around a school clog at drop-off and pickup, and a driver is stuck in them too. We send the nearest available driver as soon as possible. Expect a text or a call from us when the driver is on the way.",
          "Give dispatch the school's cross street and the side of the building the car is on, such as the east parking lot or the bus loop, and say if the lot is gated. If a driver can't get onto campus, the school's rules may be why.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a driver come onto school property?",
        a: "That is up to the school, whose rules we don't control. Tell dispatch where the car is, and ask the front office what a visitor needs to get onto campus.",
      },
      {
        q: "The battery light was on last week, but the car is fine now. Should I wait?",
        a: "A warning light is the time to act, not to wait for a pickup line. A battery more than three years old with warning signs is worth replacing before it fails. If the light stays on while the engine runs, the alternator may be the cause, and a repair shop should look at it.",
      },
      {
        q: "Can I leave the car at school until a driver arrives?",
        a: "Ask the school office. Parking rules on campus belong to the school, and a car left in a bus lane or fire lane can be a problem for them. Tell dispatch where it is either way.",
      },
    ],
    services: ["jump-start", "battery-replacement", "lockout"],
  },
  {
    slug: "shopping-mall-parking-lot-car-trouble",
    title: "Car Trouble in a Crowded Mall Parking Lot",
    h1: "Keys locked in, a flat tire or a dead battery in a crowded mall lot",
    metaDescription:
      "Holiday shopping and a car that won't cooperate? Locked keys, a flat or a dead battery in a packed mall parking lot, and what to tell dispatch.",
    topic: "Seasonal guide",
    dek: "From the day after Thanksgiving until Christmas Eve, DFW mall lots fill up in a way they don't the rest of the year. Cars sit bumper to bumper, carts roll between them and everyone is in a hurry. That is also how keys end up in the trunk with the bags, and how a long afternoon of errands ends with a click instead of an engine.",
    updated: UPDATED,
    cardImage: card("field-tire-jack"),
    sections: [
      {
        heading: "Keys in the trunk with the bags",
        paragraphs: [
          "The usual way it happens: arms full, the trunk lid drops, and the fob is in a coat pocket on the seat. Before calling anyone, check every door and the trunk release. Now and then one is unlocked. If not, opening the car is {{price:lockout}}, and keys locked in the trunk are a separate job at {{price2:lockout}}, each plus a {{dispatchFee}} dispatch fee charged once.",
          "The driver confirms the car is yours before opening it, so have ID or another way to show it. If a child or a pet is inside a locked car, call 911 first. That call can't wait for a service truck.",
        ],
      },
      {
        heading: "A flat tire between two parked cars",
        paragraphs: [
          "Mall rows are tight, and a tire change needs room to open the doors and set a jack. Tell dispatch if cars are packed in around yours. A flat tire change using the spare in your vehicle is {{price:flat-tire-change}}, plus the dispatch fee. If a nail in the tread caused it, tire repair is {{price:tire-repair-plug-patch}}, plus the same fee.",
          "Don't drive on a flat to find a better spot, since that ruins the wheel. Put the hazards on and leave the car where it is. If it is blocking an aisle, tell mall security.",
        ],
      },
      {
        heading: "A dead battery after hours in the lot",
        paragraphs: [
          "A few hours in a lot is plenty to run down a battery that has little to spare, especially with a dome light on, a charger plugged in or a hatch that did not latch. A jump start is {{price:jump-start}}, plus the dispatch fee. Tell dispatch whether the front of the car faces a wall, a curb or another car, since the driver has to reach the battery.",
          "Before you call, rule out the fob's own battery. A weak fob can leave a push-button car locked or refusing to start. Many fobs hide a metal key blade, and many cars have a spot to hold the fob against for starting. The owner's manual shows where.",
        ],
      },
      {
        heading: "Waiting out the rush",
        paragraphs: [
          "Give dispatch the nearest store entrance or numbered light pole, and photograph it. If the mall has a garage, give the level. Mall security can help with things like where to wait, but the lot's rules are the property's, not ours, and TRA has no connection with any mall.",
          "We send the nearest available driver as soon as possible. Watch for a text or call from us when the driver is on the way. Wait inside the mall with your bags and keep your phone on.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you open a car if my wallet and phone are locked inside?",
        a: "The driver needs to confirm the car is yours, usually with ID, though another way of showing it works too. Tell dispatch what you do have with you, and borrow a phone from a store or a friend if yours is inside.",
      },
      {
        q: "Can I leave a car with a flat in the lot until tomorrow?",
        a: "That is the property's decision. Ask mall security first, and tell dispatch where the car is either way.",
      },
      {
        q: "Does it matter if the mall has a garage?",
        a: "It matters for the driver. Say whether you are in a garage or an open lot, give the level, and mention any height limit or gate you know about, so dispatch can plan.",
      },
    ],
    services: ["lockout", "flat-tire-change", "jump-start"],
  },
  {
    slug: "college-student-car-trouble-dfw",
    title: "College Student Car Trouble in DFW",
    h1: "Car trouble for college students around DFW: a dead battery after break and a first flat tire",
    metaDescription:
      "A dead battery after break, a first flat tire or keys locked in around a campus in Dallas–Fort Worth: what to do and what to tell dispatch.",
    topic: "Seasonal guide",
    dek: "Campuses around Dallas–Fort Worth are full of cars that sit for weeks at a time. Then a student comes back from winter break or a summer away, turns the key and gets a click. Or hits a pothole on the way to class and learns where the spare is for the first time. Both are common, and neither is a disaster.",
    updated: UPDATED,
    cardImage: card("field-arrival-gear"),
    sections: [
      {
        heading: "The car that sat over break",
        paragraphs: [
          "A car in a dorm or apartment lot for a month is a battery problem waiting to happen. The clock, the alarm and the computers keep drawing a little power, a hot summer wears the battery, and a cold January shows it. If the engine only clicks or the dash is dim, a jump start is {{price:jump-start}}, plus a {{dispatchFee}} dispatch fee charged once.",
          "A jump gets the car running but won't fix a worn battery. If it needed one after a long break, the battery is probably old. Replacing the battery is {{price:battery-replacement}} for eligible vehicles and batteries, and dispatch confirms the fit and your total before anyone is sent.",
        ],
      },
      {
        heading: "Your first flat tire",
        paragraphs: [
          "Find the spare, the jack and the lug wrench before you need them. In most cars they are under the cargo floor, and the owner's manual shows where. If your wheels have locking lug nuts, find the key too. Without it, the lock has to come off before the wheel can.",
          "A flat tire change using the spare in the vehicle is {{price:flat-tire-change}}, plus the dispatch fee. A puncture in the tread may be repairable, and tire repair is {{price:tire-repair-plug-patch}}, plus the same fee. Don't try to change a tire on a slope or close to traffic. If cars are passing near you, call 911 first.",
        ],
      },
      {
        heading: "On campus, in the complex, in a garage",
        paragraphs: [
          "Say exactly where the car is: the lot name or number, the building, the level of the garage. Campus and apartment lots have their own parking rules, permits and gates, and TRA has no connection with any school or complex. If a gate needs a code, tell dispatch, or ask someone to meet the driver.",
          "A lockout has one extra step. The driver confirms the car is yours before opening it. If the car is in a parent's name, say so when you call, so dispatch can tell you what to have ready. A door lockout is {{price:lockout}}, and keys left in the trunk are {{price2:lockout}}, each plus the dispatch fee.",
        ],
      },
      {
        heading: "Before you call",
        paragraphs: [
          "Check whether your car insurance, your parents' policy or a credit card includes roadside help. If it does, it might cost you nothing, so it can be worth a few minutes. If the wait is long or it doesn't cover the problem, call us. We send the nearest available driver as soon as possible. We'll text or call when the driver is on the way.",
          "Have the year, make and model ready, plus a photo of where the car is. If the problem might be more than a battery or a tire, say what the car is doing. We don't tow or do mechanical repair.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does it matter whose name the car is in?",
        a: "For a lockout, yes, because the driver confirms ownership before opening the car. If it is in a family member's name, mention that on the call so dispatch can tell you what to have ready.",
      },
      {
        q: "How do I tell a dead battery from something worse?",
        a: "Rapid clicking, or a slow crank with dim lights, points to the battery. Bright lights and an engine that won't turn may be the starter, and an engine that turns but never starts may have a fuel or ignition problem. A jump only helps in the first case, and we don't do mechanical repair.",
      },
      {
        q: "Should I start the car now and then while I'm away?",
        a: "It isn't required, but a real drive now and then tops up the battery better than a few minutes of idling in the lot. A friend with a key can do that for you.",
      },
    ],
    services: ["jump-start", "flat-tire-change", "battery-replacement"],
  },
];
