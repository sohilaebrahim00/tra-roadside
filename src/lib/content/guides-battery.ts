import type { Guide } from "./guides";

/** Battery, jump start and EV guides. The rules are in guides.ts. */

const UPDATED = "2026-11-04";

/** Portrait photo for a guide's card on /guides, from public/images/field. */
const card = (name: string) => ({ src: `/images/field/${name}.webp`, width: 1080, height: 1350 });

export const GUIDES_BATTERY: Guide[] = [
  {
    slug: "how-long-do-car-batteries-last-in-texas",
    title: "How Long Do Car Batteries Last in Texas?",
    h1: "How long a car battery lasts in Texas, and why it's shorter here",
    metaDescription:
      "Most car batteries last three to five years, and Texas heat pushes that toward the short end. What shortens a battery's life and when to replace it.",
    topic: "Battery guide",
    dek: "A car battery has no expiration date printed on it, but in North Texas it does come with a hot summer, and the summer decides more than the calendar does. Here is what to expect, what speeds the wear up, and how to tell when yours is close to done.",
    updated: UPDATED,
    cardImage: card("field-battery-under-seat-detail"),
    sections: [
      {
        heading: "The short answer",
        paragraphs: [
          "Across the country, a car battery usually lasts somewhere between three and five years. In the Dallas–Fort Worth area, plan on the short end of that range. A battery that gives out in its third or fourth summer here is not unusual, and one that reaches five has had an easy life.",
          "That is a general figure, not a promise. A well-made battery that lives in a garage and gets driven every day can outlast it. One that sits in an open lot all summer, in a car used only for short errands, can fall well short.",
        ],
      },
      {
        heading: "What heat does inside the battery",
        paragraphs: [
          "A battery makes electricity through a chemical reaction between lead plates and acid. Heat speeds that reaction up, including the slow side reactions that eat away at the plates. It also drives water out of the acid in batteries that aren't fully sealed. None of that wear can be undone.",
          "Under the hood it is worse than the weather report suggests. The battery sits close to an engine that was just running, so on a 100-degree afternoon it is a good deal hotter than the air around the car. Summer does the wearing. The first cold morning is when it shows.",
        ],
      },
      {
        heading: "What shortens it, and what stretches it",
        paragraphs: ["Heat sets the pace, but a few other things move the number up or down:"],
        list: [
          "Short trips. Starting the engine takes a lot out of the battery, and a ten-minute drive may not put it back.",
          "Where the car is parked. A garage or shade keeps the battery cooler than an open lot.",
          "Hardwired accessories. A dash cam or an alarm keeps drawing a little power while the car sits.",
          "A loose hold-down. A battery that can move around in its tray takes damage from vibration.",
          "Weeks of not driving. A car that goes unused lets the battery drain down over time.",
        ],
      },
      {
        heading: "How to find out how old yours is",
        paragraphs: [
          "Most batteries carry a date code, either on a sticker or stamped into the case or a post. The format depends on the maker. Often a letter stands for the month and a number for the year, but not every brand does it that way. If the code doesn't make sense to you, the receipt or the shop that installed it will have the date.",
          "Once a battery is past three years, treat a slow start as a warning, not a quirk of the car. That holds even if the car starts every single day. A battery near the end of its life can hide it right up until the weather changes.",
        ],
      },
      {
        heading: "When to replace it",
        paragraphs: [
          "The easy time to replace a battery is before it fails. If it is turning over slowly, or it is four years old heading into another summer, pick a day that suits you instead of waiting for it to pick one for you.",
          "We replace batteries where the car is parked. Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, with the new battery and the installation included, plus the {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery that fits your car, and your total, before a driver is sent.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a garage really help a battery last longer?",
        a: "It helps. A garage keeps the battery out of the afternoon sun, so it runs cooler and wears more slowly. It won't make a battery last forever, but it is one of the few things within a driver's control.",
      },
      {
        q: "Is there a way to make a car battery last longer?",
        a: "Keep the terminals clean, make sure the hold-down is tight, and take a longer drive now and then instead of only short hops. Don't leave lights or chargers running with the engine off.",
      },
      {
        q: "My battery is four years old and the car starts fine. Should I replace it?",
        a: "You don't have to, but in DFW heat that is the age where batteries tend to fail without much notice. If you depend on the car every day, replacing it before the next summer is a reasonable call.",
      },
    ],
    services: ["battery-replacement", "jump-start"],
  },
  {
    slug: "texas-heat-car-battery",
    title: "Why Texas Heat Kills Car Batteries",
    h1: "Why Texas heat wears out a car battery faster than cold does",
    metaDescription:
      "Cold gets blamed when a car won't start, but heat does most of the damage. How a hot summer ages a battery, and what helps in North Texas.",
    topic: "Battery guide",
    dek: "A battery usually quits on the first cold morning, so winter takes the blame. The damage was done months earlier, on afternoons when the thermometer in Dallas read over 100.",
    updated: UPDATED,
    cardImage: card("field-jump-start-hood"),
    sections: [
      {
        heading: "Cold and heat hurt in different ways",
        paragraphs: [
          "Cold doesn't wear a battery out. It slows the chemistry, so the battery delivers less current at the same moment that thick, cold engine oil makes the engine harder to turn. A healthy battery copes with that. A weak one can't.",
          "Heat does the real aging. It speeds up the reactions inside, including the ones that corrode the plates, and it evaporates water from the acid in batteries that have removable caps. Each hot summer takes a little capacity away for good, and a cool morning doesn't give it back.",
        ],
      },
      {
        heading: "Why the engine bay makes it worse",
        paragraphs: [
          "The battery isn't sitting in 100-degree air. It is sitting beside an engine that just ran, under a closed hood, with the sun on the paint above it. The temperature around it can be well past what the weather report says.",
          "Many cars have a plastic shield or an insulating wrap around the battery to slow that heat down. If yours has one and it was taken off during some service and never put back, it should go back on.",
          "Parking matters here more than people expect. A car that spends the day in an open lot has its hood baking in direct sun for hours, and the engine bay holds that heat long after you shut the car off. A garage or even a shaded spot keeps the starting point lower.",
        ],
      },
      {
        heading: "What a hot summer leaves behind",
        paragraphs: [
          "By October the battery may look fine from the outside and start the car every day. But with less capacity left, it is starting the car with very little to spare. Then a cold front comes through, the engine needs more, and the battery has nothing extra to give.",
          "That is why a failure in November or January so often traces back to July. The cold didn't kill it. It found it.",
          "There is a second reason the damage hides. A battery doesn't fail all at once. Its capacity shrinks a little each summer, and the car keeps starting normally until the margin is gone. Nothing on the dash tells you how much is left, so a car that starts fine every day can still be a few cold nights from refusing.",
        ],
      },
      {
        heading: "What helps",
        paragraphs: ["None of this makes a battery last forever, but it can buy some time:"],
        list: [
          "Park in a garage or in shade when you can, especially in summer.",
          "Check that the hold-down bracket is tight and the terminals are clean.",
          "Take a longer drive once in a while so the alternator can bring the battery back up.",
          "Don't let the car sit unused for weeks in the heat.",
          "If your battery has removable caps, the fluid level is worth a look. Top it off only with distilled water, and wear safety glasses. Most modern batteries are sealed and have no caps.",
        ],
      },
      {
        heading: "When it is worth replacing",
        paragraphs: [
          "If the battery is three years old or more and the car started cranking slowly after a hot summer, replacing it before the first freeze beats a no-start in a cold parking lot.",
          "If the car already won't start, a jump start gets it moving, and the driver can advise whether the battery looks worn out. A jump start is {{price:jump-start}}, plus the {{dispatchFee}} dispatch fee, added once to the job.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it true that cold weather kills batteries?",
        a: "Cold exposes the batteries that are already weak. It slows the chemistry and stiffens the oil, which is the extra load that finishes off a battery the summer wore down.",
      },
      {
        q: "Does parking in the shade matter?",
        a: "Yes. Shade lowers the temperature under the hood, and a cooler battery wears more slowly. A garage is better, but even a shaded spot helps.",
      },
      {
        q: "How can I tell if heat has weakened my battery?",
        a: "Slow cranking on the first cool mornings, dash lights that dim while the engine turns over, and a battery older than three years are the usual signs.",
      },
    ],
    services: ["battery-replacement", "jump-start"],
  },
  {
    slug: "car-wont-start-clicking-noise",
    title: "Car Won't Start and Clicks? What It Means",
    h1: "Car won't start and only clicks: what the clicking is telling you",
    metaDescription:
      "Rapid clicking, one loud click, or a slow crank: what each sound usually points to, a headlight check you can do yourself, and what a jump start can fix.",
    topic: "Jump start guide",
    dek: "The sound a car makes when it won't start is a clue. A fast ticking and a single click are different problems, and a headlight check you can do in the driveway tells you which one you have.",
    updated: UPDATED,
    cardImage: card("field-jump-start-booster"),
    sections: [
      {
        heading: "Rapid clicking",
        paragraphs: [
          "A fast tick-tick-tick-tick when you turn the key or press start is the classic low battery sound. The starter's solenoid pulls in and tries to engage. The battery's voltage sags under the load, the solenoid lets go, the voltage recovers, and it tries again, several times a second.",
          "So the clicking isn't a broken part. It is what a battery with too little charge sounds like. If the dash lights also dim or flicker while you try, that points the same way.",
          "It also doesn't mean the battery is ruined. A battery drained by a light left on overnight clicks exactly like one that is worn out. The sound can't tell you which you have, and that is the question a jump start helps answer.",
        ],
      },
      {
        heading: "One click, then nothing",
        paragraphs: [
          "A single click is less clear. It can still be the battery, if it is too far gone to try more than once. More often, when the dash lights stay bright while you turn the key, the battery is delivering and the trouble is further down the line, in the starter motor or its wiring.",
          "A starter often gives some warning before it quits: a hesitation, or a day when the car only started on the second try. If that sounds familiar, the starter is more likely than the battery.",
        ],
      },
      {
        heading: "The headlight check",
        paragraphs: [
          "Turn the headlights on, then try to start the car while you watch them. If they dim a lot or go out, the battery or a poor connection is the problem. If they stay bright and you only get a click, the battery is probably fine and the starter is the suspect.",
          "That second case is one a jump start won't fix. Starter work is a job for a repair shop, because we don't do mechanical repair.",
        ],
      },
      {
        heading: "A good battery with a bad connection",
        paragraphs: [
          "Clicking can also come from a battery that is fine but badly connected. A loose clamp or a crust of corrosion chokes the current. With the engine off, try to twist each battery clamp by hand. If one moves, the connection is loose. Don't touch any white or blue-green crust with bare skin.",
          "The cables matter as much as the clamps. A cable can corrode inside its insulation where you can't see it, and a ground strap from the battery to the body that has worked loose acts like any other bad connection.",
        ],
      },
      {
        heading: "A slow crank is a warning",
        paragraphs: [
          "If the engine turns over, but slowly, in a long drawn-out rurr-rurr-rurr, the battery is weak but not finished. That is the sound to act on before it turns into clicking. Weeks of slow cranking are the best warning you will get, and replacing a battery on a day you choose beats doing it in a parking lot at night.",
          "If the car clicks and you'd like it running, a jump start is {{price:jump-start}}, plus the {{dispatchFee}} dispatch fee, which covers sending the driver to you. Average arrival is 30 minutes, and the actual time depends on your location and traffic. Tell dispatch what the lights did, so the driver knows whether a jump is likely to work.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I keep trying to start it?",
        a: "A few tries are fine. After that, a battery that is barely hanging on gets drained further, and cranking again and again heats the starter. If it hasn't started after several attempts, stop.",
      },
      {
        q: "Why does it click only some mornings?",
        a: "A battery near the end of its life can have just enough to start the car on a warm afternoon and not enough on a cold morning. Clicking that comes and goes is often an early warning.",
      },
      {
        q: "Does clicking always mean I need a new battery?",
        a: "No. A jump start answers that quickly. If the car starts and keeps running, the battery was drained, and the question becomes why. If it keeps clicking even with a jump, the trouble is somewhere else.",
      },
    ],
    services: ["jump-start", "battery-replacement"],
  },
  {
    slug: "car-wont-start-no-sound",
    title: "Car Won't Start and Makes No Sound",
    h1: "Nothing happens when you turn the key or press start: what to check",
    metaDescription:
      "Turn the key or press start and get silence. Quick checks you can do in a minute: dash lights, shifter, brake pedal, fob and battery clamps.",
    topic: "Jump start guide",
    dek: "Silence is different from clicking. When there is no sound and no response at all, the cause is usually one of a handful of things, and several of them take a minute to rule out.",
    updated: UPDATED,
    cardImage: card("field-arrival-van"),
    sections: [
      {
        heading: "Start with the dash lights",
        paragraphs: ["Before anything else, see what the car does when you open the door or switch on the ignition. There are three common pictures:"],
        list: [
          "No dome light, no dash, no chime, nothing. The battery is completely drained, or a connection at the battery has come loose.",
          "The dash lights up but looks dim, or flickers and goes dark when you try to start. That is a weak battery.",
          "The dash is bright and normal, but the engine does nothing. The battery is probably fine, and the problem is in the starting circuit or a safety lockout.",
        ],
      },
      {
        heading: "The quick checks",
        paragraphs: ["Cars won't crank until a few conditions are met, and each one can pass for a dead car when it isn't:"],
        list: [
          "Automatic transmission: make sure the shifter is fully in Park, or try Neutral. A shifter that isn't seated in Park can block the start.",
          "Push-button start: press the brake pedal firmly while you press the button. A light foot on the pedal gets no response on many cars.",
          "Manual transmission: push the clutch pedal all the way to the floor.",
          "Key ignition: turn the steering wheel left and right while you turn the key, in case the steering lock is binding it.",
          "Push-button start with no response at all: a weak fob battery can do this. Hold the fob against the start button, or in the spot your manual shows.",
        ],
      },
      {
        heading: "Look at the battery clamps",
        paragraphs: [
          "Open the hood and look at the clamps on the battery posts. If someone was working in there recently, or a clamp turns by hand, the car can look completely dead even with a full battery. A thick crust of corrosion can do the same thing.",
          "Check the ground cable too, the thick one that bolts to the car's body or the engine. If that one is loose, the whole car goes quiet. Some cars keep the battery in the trunk or under a seat. If yours does, the manual will point you to a jump terminal under the hood instead.",
        ],
      },
      {
        heading: "When it is the battery",
        paragraphs: [
          "A battery that is fully drained gives you no dome light, no chime and not even a click. A jump start brings that back, provided the battery can still take a charge. If the car starts and then fails again the next day, the battery needs replacing, not another jump.",
          "A fully drained battery is also the one most likely to be damaged. If the car sat for weeks, or the battery was already old, a jump may wake the car and then fail to hold, which is worth knowing before you plan the rest of your day around it.",
        ],
      },
      {
        heading: "When it isn't",
        paragraphs: [
          "If the lights are bright and the car is still silent, a jump start won't help. A starter relay, an ignition switch, a blown fuse or a shifter switch can all do this, and finding which one is a repair shop job. We don't do mechanical repair.",
          "If the car is dark, a jump start is {{price:jump-start}}, plus the {{dispatchFee}} dispatch fee added on top. Tell dispatch what the dash lights did when you tried. It helps the driver judge whether a jump is likely to wake the car.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why does my car have power but won't crank?",
        a: "Bright lights with no cranking point away from the battery. The shifter, the brake or clutch switch, the starter relay or the starter itself is more likely. A jump start won't help in that case.",
      },
      {
        q: "Can a dead battery make the car completely silent?",
        a: "Yes. With a fully drained battery there is nothing to run the dash, the locks, or even a click from the starter.",
      },
      {
        q: "Will a jump start work if my dash lights are bright?",
        a: "Probably not. Bright lights mean the battery is doing its job, and the fault is somewhere else in the starting circuit.",
      },
    ],
    services: ["jump-start", "battery-replacement"],
  },
  {
    slug: "battery-or-alternator",
    title: "Battery or Alternator? How to Tell",
    h1: "Is it the battery or the alternator? How to tell without any tools",
    metaDescription:
      "A bad battery and a failing alternator look alike. Tell them apart with the jump test, the headlight test and a few signs, no special tools needed.",
    topic: "Battery guide",
    dek: "Both give you a car that won't start, so people replace the battery and the trouble comes back, or replace the alternator when the battery was the culprit. The difference is in when the car quits.",
    updated: UPDATED,
    cardImage: card("field-battery-under-seat"),
    sections: [
      {
        heading: "What each one does",
        paragraphs: [
          "The battery starts the car. The alternator, which a belt turns off the engine, runs the electrical system and recharges the battery while the engine is running. Once the engine is going, the car runs on the alternator, not the battery. That fact is the key to telling them apart.",
          "It also explains why the two failures feel different. A bad battery tends to strand you before you leave, when you turn the key. A bad alternator tends to strand you after you leave, a few miles down the road, when the stored power finally runs out. When the car quit tells you a lot.",
        ],
      },
      {
        heading: "Clues that point to the battery",
        paragraphs: ["These usually mean the battery is the weak link:"],
        list: [
          "Slow cranking or clicking when you start, worse on cool mornings.",
          "After a jump the car runs normally, and it starts on its own again later in the day.",
          "The battery is more than three or four years old.",
          "The battery case is swollen, or the terminals are crusted over.",
        ],
      },
      {
        heading: "Clues that point to the alternator",
        paragraphs: ["These usually mean the charging side has failed:"],
        list: [
          "The battery light comes on while you are driving.",
          "Headlights and dash lights dim at idle and brighten when you rev the engine.",
          "A whine or grinding from the front of the engine that changes with engine speed.",
          "A smell of hot wiring or burning rubber.",
          "The car runs for a while and then dies on the road, and won't restart without a jump.",
        ],
      },
      {
        heading: "Two ways to test it",
        paragraphs: [
          "The first needs a jump start, from a friend or from us. Once the car is running, the jumper cables or jump pack come off. If the car keeps running, the alternator is doing its job, and the battery was the problem. If the engine stumbles and dies within a minute or so, nothing is charging, and the car was running on borrowed power.",
          "Never disconnect the car's own battery to see if the engine keeps running. On modern cars that can damage the electronics.",
          "The second way needs a multimeter, and it puts numbers on it. A healthy, rested battery reads about 12.6 volts across its posts. With the engine running, a working alternator pushes that to roughly 13.5 to 14.5 volts. If the reading stays near 12 while the engine runs, the alternator isn't charging. If it reads well below 12.6 with the engine off, the battery is low, but that alone doesn't say why.",
        ],
      },
      {
        heading: "What we can do",
        paragraphs: [
          "If it is the battery, we can jump it, at {{price:jump-start}} plus the {{dispatchFee}} dispatch fee added on top, or replace it for {{price:battery-replacement}} on eligible vehicles and batteries, which covers the new battery and installing it. If it looks like the alternator, a new battery won't cure it, and that needs a repair shop. We don't repair alternators.",
          "If you can't tell, say so when you request help and describe what happened and when. The driver can advise on site whether the battery looks like the problem.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a bad alternator ruin a new battery?",
        a: "It can. An alternator that isn't charging lets a new battery run down just like the old one. That is why a battery that keeps dying deserves a charging system check before you buy a second one.",
      },
      {
        q: "How long can I drive with a bad alternator?",
        a: "Only as long as the battery has charge left, which could be minutes. There is no safe number, and the headlights, wipers and blower all shorten it.",
      },
    ],
    services: ["jump-start", "battery-replacement"],
  },
  {
    slug: "car-died-again-after-jump-start",
    title: "Car Died Again After a Jump Start",
    h1: "Your car died again after a jump start: what that usually means",
    metaDescription:
      "A jump start worked, then the car wouldn't start the next day. The usual causes, what to check, and why a second jump isn't the fix.",
    topic: "Jump start guide",
    dek: "A jump that works once and fails by the next morning isn't bad luck. Either the battery can't hold a charge, something is draining it, or the alternator isn't putting power back.",
    updated: UPDATED,
    cardImage: card("field-jump-start-booster"),
    sections: [
      {
        heading: "What the jump actually did",
        paragraphs: [
          "A jump start doesn't charge a battery. It lends the engine enough power to start, and from there the alternator takes over. If the battery was drained by one forgotten dome light, a long drive can bring it back. If it was drained because it is worn out, nothing about the jump changed that.",
          "That is also why the car can seem fine for the rest of the day. While it keeps running, the alternator carries the load. The real test is the next cold start, hours later, when the car has to start on the battery alone.",
        ],
      },
      {
        heading: "The battery can't hold a charge",
        paragraphs: [
          "This is the likeliest answer. A battery that is three or more years old, that has been through a Texas summer, and that went completely dead once, often won't recover fully. It takes a jump, runs fine all day, and is empty again by morning. A car that starts fine right after a drive but fails after sitting overnight points here.",
          "Draining a battery all the way down does lasting harm. Lead plates left drained build up hard crystals of lead sulfate, and that buildup often can't be fully reversed. It is why a battery that has been dead once is rarely quite the same afterward, and why one that was already old often doesn't survive it.",
        ],
      },
      {
        heading: "The alternator isn't putting enough back",
        paragraphs: [
          "If the car died while you were driving, or the battery light came on, suspect the charging system. The jump got the engine going, but nothing was refilling the battery, so it ran down again. Replacing the battery won't fix that, and it needs a repair shop.",
        ],
      },
      {
        heading: "Something is draining it while parked",
        paragraphs: [
          "A light that stays on, a door that isn't fully latched, or a gadget wired in after the car was built can empty even a good battery overnight. Look around the car at night for glowing lights, and unplug anything left in the sockets before you try again.",
          "If the battery is healthy and the alternator is charging, a drain is what is left. Some are easy, like a trunk light that never goes out. Others are electronic modules that don't go to sleep, and those take a shop with a meter to find.",
        ],
      },
      {
        heading: "Why a second jump isn't the answer",
        paragraphs: [
          "Every time a lead-acid battery is drained all the way down it loses some of its life, so a second jump on a battery that keeps dying brings it closer to the end. Ask what happened. Did it die while driving, or only after sitting? Did anything stay on? How old is the battery? If it is old, replace it.",
          "If a battery is the answer, replacement is {{price:battery-replacement}} for eligible vehicles and batteries, with the installation covered, plus the {{dispatchFee}} dispatch fee, charged once. If you need a jump just to get moving first, that is {{price:jump-start}}, plus the same fee. Tell dispatch it is a repeat, and they will confirm the battery that fits your car and your total before a driver is sent.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long should a battery hold after a jump start?",
        a: "A healthy battery that was drained by something obvious should start the car normally the next day after a good drive. If it doesn't, the battery is damaged or something else is wrong.",
      },
      {
        q: "Should I just buy a battery charger?",
        a: "A proper charger fills a battery more completely than driving does, and it can bring back a battery that was drained once. It can't bring back one that is worn out.",
      },
      {
        q: "Is it the alternator if the car dies while I'm driving?",
        a: "That is the likelier cause. Once the engine is running, the car depends on the alternator. If it dies on the road, the alternator isn't keeping up.",
      },
    ],
    services: ["battery-replacement", "jump-start"],
  },
  {
    slug: "how-long-to-drive-after-jump-start",
    title: "How Long to Drive After a Jump Start",
    h1: "How long to drive after a jump start, and why idling doesn't do it",
    metaDescription:
      "After a jump start, plan on about half an hour of steady driving. Why idling in the driveway won't recharge the battery, and what to avoid on the way.",
    topic: "Jump start guide",
    dek: "The jump gets the engine running. The drive afterward is what puts some charge back, and it has to be longer than most people expect.",
    updated: UPDATED,
    cardImage: card("field-arrival-gear"),
    sections: [
      {
        heading: "A rough rule: half an hour or more",
        paragraphs: [
          "There is no exact number, because it depends on the car and on how drained the battery was. Plan on at least 30 minutes of steady driving after a jump, and understand that even that may not fill a battery that went completely dead.",
          "A short errand is the usual mistake. Ten minutes to the gas station or the grocery store feels like a drive, but most of it is slow, and the start itself just took a big bite out of the battery. A trip like that can put back less than the start took out.",
        ],
      },
      {
        heading: "Why idling doesn't work",
        paragraphs: [
          "At idle the engine turns the alternator slowly, so it puts out about the least current it ever does. The car is also using that current to run the engine computers, the pumps, the cooling fans and the air conditioning blower. What is left over for the battery is small.",
          "At road speed the alternator spins much faster and has current to spare. That is why driving does more for the battery than sitting in the driveway with the engine running.",
        ],
      },
      {
        heading: "Where to drive",
        paragraphs: [
          "Steady speed beats stop-and-go. A loop on the freeway or a tollway is better than ten minutes of traffic lights. If you can't drive far, do it in two longer trips instead of several short ones.",
          "If you know why the battery died, like a dome light left on, the drive may be all it needs. If you don't know why, watch the headlights as you stop at a light. Lights that dim at idle and brighten as you pull away point to a charging problem, not just a drained battery.",
        ],
      },
      {
        heading: "Go easy on the battery while you do",
        paragraphs: ["Anything extra the car runs comes out of the same current. While it recharges:"],
        list: [
          "Switch off what you can do without, like seat heaters, the rear defroster and a loud stereo. In a DFW summer you will want the air conditioning, and that is fine. The point is not to add more.",
          "Unplug phone chargers and other accessories you don't need.",
          "Try not to shut the engine off at your first stop. Starting is the hardest thing you ask of the battery, and it only just got its boost.",
        ],
      },
      {
        heading: "A drained battery is not a charged battery",
        paragraphs: [
          "An alternator is built to keep a battery topped off, not to bring a dead one back to full. After a long drive the battery will be partly charged. A battery charger is the right tool for a full recharge.",
          "Think about the next start, too. Park somewhere you could get help if it doesn't catch, and don't set out on a long trip the next morning with a battery that only just came back.",
          "If the car starts fine the next morning, good. If it doesn't, the battery isn't holding a charge. A jump start is {{price:jump-start}}, plus the {{dispatchFee}} dispatch fee, charged once, and the driver can advise on site whether the battery looks worn out. Replacement is {{price:battery-replacement}} on eligible vehicles and batteries, battery and installation together.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I turn the car off right after the jump?",
        a: "You can, but expect that it may not start again. Restarting takes more from the battery than anything else, and it has barely recovered.",
      },
      {
        q: "Does revving the engine charge the battery faster?",
        a: "A little, since the alternator spins faster, but it isn't a substitute for a drive. Steady driving does the job better.",
      },
      {
        q: "Will the car start tomorrow?",
        a: "If the battery is healthy and the drive was long enough, yes. If it isn't starting after a good drive, the battery probably can't hold a charge anymore.",
      },
    ],
    services: ["jump-start", "battery-replacement"],
  },
  {
    slug: "jump-start-in-the-rain",
    title: "Can You Jump Start a Car in the Rain?",
    h1: "Jump starting in the rain: is it safe, and what to do differently",
    metaDescription:
      "A 12-volt jump start in the rain is safe if you keep the connections dry and out of puddles. What changes, and when it is better to wait.",
    topic: "Jump start guide",
    dek: "Rain doesn't stop a battery from dying, and it rarely stops a jump start. The voltage is low. What changes is where the cables lie, how dry the clamps are, and a few cases where you should wait.",
    updated: UPDATED,
    cardImage: card("field-jump-start-hood"),
    sections: [
      {
        heading: "Is it safe?",
        paragraphs: [
          "Generally yes. A car's electrical system runs at 12 volts, which is not enough to push a shock through your skin the way household current can, wet or dry. The real hazards in a jump start are sparks and short circuits, when a clamp touches the other clamp or the wrong piece of metal. A battery also gives off hydrogen gas that a spark can ignite. Rain doesn't remove those hazards, and it can make them harder to see.",
          "A light or steady rain is not a problem. Water pooling in the engine bay, or running across a fuse box where a jump terminal sits, is a reason to wait for the rain to ease or to find cover first.",
        ],
      },
      {
        heading: "What to do differently in the rain",
        paragraphs: ["The steps are the same. These are the extra things that matter when it is wet:"],
        list: [
          "Wipe the top of the battery and the terminals with a dry rag before you connect anything.",
          "Keep the cable ends and the clamps out of puddles. Don't let a clamp rest in standing water.",
          "Keep the clamps from touching each other. Wet, slippery clamps are easier to drop.",
          "Wear gloves, since cold, wet hands lose their grip on metal.",
          "Keep the hood open only as long as you need it.",
        ],
      },
      {
        heading: "The connection order doesn't change",
        paragraphs: [
          "Red clamp to the dead battery's positive post, the other red clamp to the good battery's positive post, black to the good battery's negative post, and the last black clamp to bare, unpainted metal on the dead car, away from the battery. That last connection is where a small spark is most likely, which is why it goes away from the battery.",
          "Wet clamps can be slick enough to slip off a post. Give each one a firm wiggle after you attach it, so it has bitten into the metal, and keep the cable ends from resting against the hood or a fender. When the car starts, take the cables off in the reverse order, starting with the black clamp on the bare metal, and don't let the clamps touch as they come off.",
        ],
      },
      {
        heading: "When to wait instead",
        paragraphs: ["Some conditions are reasons to hold off, rain or not:"],
        list: [
          "Lightning nearby. Wait it out in a closed car instead of standing under an open hood.",
          "Standing water. If water has been over the floorboards or into the engine, don't try to start or jump the car. Water pulled into an engine can wreck it when it cranks over.",
          "A cracked, swollen or leaking battery. That one shouldn't be jumped in any weather.",
        ],
      },
      {
        heading: "If you'd rather not do it in the rain",
        paragraphs: [
          "You don't have to. A jump start is {{price:jump-start}}, plus the {{dispatchFee}} dispatch fee, which covers sending the driver to you. We text or call when the driver is on the way. On average a driver arrives in 30 minutes, though the actual time depends on your location and traffic. Wait in the car with the hazard lights on if you are somewhere that isn't safe to stand. Mention the rain when you request help, so the driver knows what to expect when they get there.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I get shocked jump starting a car in the rain?",
        a: "Not by the 12-volt battery in any realistic way. The risks are sparks near the battery and short circuits, so keep the connections dry and the clamps apart.",
      },
      {
        q: "Does rain make a jump start less likely to work?",
        a: "Not by itself. Wet or corroded clamps can make a poor connection, so wipe the posts and clamps and make sure they bite into clean metal.",
      },
      {
        q: "Should I jump a car that was caught in a flood?",
        a: "No. A car that has had water in the engine or the cabin shouldn't be started until someone has checked it. Cranking it can do serious damage.",
      },
    ],
    services: ["jump-start"],
  },
  {
    slug: "jump-start-or-new-battery",
    title: "Jump Start or New Battery? How to Decide",
    h1: "Jump start or a new battery: how to decide which one you need",
    metaDescription:
      "A jump start fixes a drained battery. A replacement fixes a worn one. Questions that tell you which you have, and how the costs compare.",
    topic: "Jump start guide",
    dek: "A jump start and a new battery solve different problems. One revives a battery that ran down. The other replaces one that can't hold a charge. The skill is working out which one you have.",
    updated: UPDATED,
    cardImage: card("field-jump-start-booster"),
    sections: [
      {
        heading: "Five questions that sort it out",
        paragraphs: ["Answer these honestly and the choice usually makes itself:"],
        list: [
          "Do you know why it died? A dome light, headlights left on or a door left ajar is an explanation. A battery that dies for no reason you can name is a different story.",
          "How old is the battery? Under about three years, a one-time drain is probably a one-time problem. Past four years, it is suspect.",
          "Has it happened before? Once is a jump. Twice in a few weeks is a battery.",
          "How did the car start before it quit? Slow cranking or hesitation on cool mornings means the battery was already fading.",
          "What does the battery look like? A swollen case, a leak, heavy corrosion or a rotten-egg smell means replace it.",
        ],
      },
      {
        heading: "When a jump is enough",
        paragraphs: [
          "If you know the cause, the battery is young, and the car started normally until that one incident, a jump and a good drive is a reasonable fix. See whether it starts the next morning. If it does, carry on.",
          "Be honest about the one-time cause, though. People often count a battery's first failure as a freak event when it had been fading for months. If you remember slow starts in the weeks before it died, that was the battery telling you.",
        ],
      },
      {
        heading: "When to go straight to a new battery",
        paragraphs: [
          "A battery that is old, has needed jumps before, shows physical damage, or sat completely dead for days or weeks probably won't come back. Jumping it again buys you a day. A swollen or leaking battery shouldn't be jumped at all.",
          "Heat history counts too. A battery that has lived through three or four DFW summers has had a harder life than the same battery in a cooler state, so the age at which it becomes suspect arrives sooner here.",
        ],
      },
      {
        heading: "How the two compare in cost",
        paragraphs: [
          "A jump start is {{price:jump-start}}. Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, with the new battery and the installation included. Each one carries the {{dispatchFee}} dispatch fee, charged once per job, so the expected total for a replacement is {{total:battery-replacement}}.",
          "The jump is cheaper on the day. Over a few months, the replacement costs less than a jump every few weeks on a battery that keeps dying.",
          "If you already suspect the battery is finished, a jump is a trip you pay for that leaves the problem exactly where it was. That is the situation where going straight to a replacement saves money.",
        ],
      },
      {
        heading: "If you can't tell",
        paragraphs: [
          "Request the jump start and tell dispatch what has been happening. The driver can advise on site if a replacement turns out to be needed. If you already suspect the battery, request the replacement instead, and dispatch will confirm which battery fits your car, and your total, before a driver is sent.",
          "A rough rule for the moment itself: if the answer to why it died is something you did, like a light left on, jump it. If the answer is that you don't know, plan on replacing it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it cheaper to keep jumping an old battery?",
        a: "Not for long. Each jump is a separate trip with its own dispatch fee, and the battery is no closer to being fixed. A few jumps in a row add up to roughly what a replacement costs, and the battery is still on its way out.",
      },
      {
        q: "Can a drained battery be recharged instead of replaced?",
        a: "Sometimes. A battery that was drained once and is otherwise healthy often recovers with a full charge. One that is worn out, or that sat drained for a long time, may not.",
      },
      {
        q: "What if I'm not sure my battery is the problem?",
        a: "A jump start is a quick way to find out. If the car starts and keeps running, the battery was the issue. If it doesn't, the trouble is elsewhere.",
      },
    ],
    services: ["jump-start", "battery-replacement"],
  },
  {
    slug: "agm-vs-regular-car-battery",
    title: "AGM vs Regular Car Battery: What to Know",
    h1: "AGM vs regular car batteries: what the difference is and why it matters",
    metaDescription:
      "AGM batteries are built differently, and some cars require one. What AGM means, which cars need it, and what goes wrong when the type is wrong.",
    topic: "Battery guide",
    dek: "Most batteries look alike from the outside, and the label on the case is the only clue to what's inside. For many newer cars, which type goes in matters a lot.",
    updated: UPDATED,
    cardImage: card("field-battery-under-seat"),
    sections: [
      {
        heading: "What AGM means",
        paragraphs: [
          "AGM stands for absorbent glass mat. In a regular, or flooded, battery the lead plates sit in liquid acid. In an AGM battery the acid is soaked into fiberglass mats pressed between the plates, and the case is sealed. Nothing sloshes and nothing gets topped off. It also handles repeated draining and recharging, and vibration, better than a regular battery does.",
          "You can't always tell by looking. An AGM case is sealed with no removable caps, but some regular batteries are sealed too, so the label is what settles it.",
        ],
      },
      {
        heading: "Why some cars need one",
        paragraphs: [
          "A start-stop system shuts the engine off at a red light and restarts it when you lift off the brake. That asks a lot of a battery, which has to restart the engine many times in one drive and run the car while the engine is off. Cars with heavy electrical loads, or with systems that recover energy when braking, ask a lot too. Many of those cars come from the factory with an AGM battery.",
          "A middle type called EFB, short for enhanced flooded battery, shows up in some start-stop cars with lighter demands. The rule for both is the same: replace what the car came with.",
          "A start-stop battery works harder on every drive, and a Texas summer adds to that, so it is worth keeping an eye on as it ages.",
        ],
      },
      {
        heading: "How to tell what your car has",
        paragraphs: ["A few places will tell you:"],
        list: [
          "The label on the battery now in the car. It may say AGM, or VRLA, which stands for valve-regulated lead-acid.",
          "The battery section of the owner's manual.",
          "The dash. A car that shuts its engine off at stops almost certainly has an AGM or EFB battery.",
          "Dispatch. Give them the year, make and model, and the VIN if it is easy to reach.",
        ],
      },
      {
        heading: "Wrong type, right type",
        paragraphs: [
          "Putting a regular flooded battery into a car that came with AGM can go wrong. The charging system is set up for AGM, and in a start-stop car a regular battery tends to wear out far sooner than it should.",
          "The other direction is usually fine. An AGM battery in a car that came with a regular one generally works, but you pay more for capability the car may not use. Some cars, mostly European makes, also expect a new battery to be registered with the car's computer so the charging system knows its type and age. Whether yours does is worth asking about before the old battery comes out.",
          "The common mistake when buying a battery is to go by price and group size alone. Group size tells you it will sit in the tray. It doesn't tell you it suits the car.",
        ],
      },
      {
        heading: "Price and fit",
        paragraphs: [
          "AGM costs more than a regular battery, which is part of why battery pricing varies by vehicle and battery type. Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installation included, plus the {{dispatchFee}} dispatch fee charged once per job. Tell dispatch your year, make and model, and whether the car has start-stop. Dispatch confirms the battery is compatible and tells you the total cost before a driver is sent.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I tell an AGM battery by looking at it?",
        a: "Not reliably. Look for AGM or VRLA printed on the label, or check the owner's manual. Don't guess from the shape of the case.",
      },
      {
        q: "Is AGM better than a regular battery?",
        a: "It is better at certain jobs, like repeated draining and recharging, vibration and start-stop use. In a plain older car, a regular battery does the work and costs less.",
      },
      {
        q: "Can an AGM battery be jump started?",
        a: "Yes. The jump itself works the same as it does on any other 12-volt battery.",
      },
    ],
    services: ["battery-replacement", "jump-start"],
  },
  {
    slug: "battery-warning-light",
    title: "Battery Warning Light: How Far Can You Drive?",
    h1: "The battery warning light is on: what it means and how far you can drive",
    metaDescription:
      "The battery light usually points to the charging system, not just a weak battery. What to do right away, and why there's no safe distance to count on.",
    topic: "Battery guide",
    dek: "The red battery symbol on the dash looks like it is about the battery. Most of the time it is about the charging system, and the car is running on stored power that won't last.",
    updated: UPDATED,
    cardImage: card("field-arrival-van"),
    sections: [
      {
        heading: "What the light is telling you",
        paragraphs: [
          "The light is a charging system warning. The car's computer has noticed that the system voltage is outside the expected range, usually too low. The most common reason is that the alternator has stopped recharging the battery. It can also be a loose or broken belt that turns the alternator, a bad connection, or a failed battery.",
          "It isn't a battery gauge. A battery can be weak while the light stays off, and the light can come on with a perfectly good battery, because what it watches is the charging system. Treat it as a charging alarm.",
        ],
      },
      {
        heading: "How far can you drive?",
        paragraphs: [
          "Nobody can honestly give you a number. The car is running on the battery's stored charge, and how long that lasts depends on how full the battery was, how old it is, and what the car is using. It could be a few minutes. It could be a good deal longer. Assume it is short.",
          "Night driving, wipers and a hot day with the air conditioning on all pull more current and shorten it.",
        ],
      },
      {
        heading: "What to do right away",
        paragraphs: ["Don't treat the light as something for later:"],
        list: [
          "Head for a safe place to stop, ideally one where you can leave the car.",
          "Shed what you can: the stereo, seat heaters, phone chargers and the rear defroster.",
          "Don't shut the engine off while you are still moving toward that spot. A car running on its battery may not start again.",
          "Watch the temperature gauge. On many cars the belt that turns the alternator also turns the water pump. If it broke, the engine can overheat within minutes, and the steering can get heavy. If the gauge climbs, pull over.",
        ],
      },
      {
        heading: "Other things the light can mean",
        paragraphs: [
          "Most cars show the light for a second or two at startup as a bulb check, and that is normal. A light that flickers on and off points to a loose connection or an alternator that is starting to fail. Some cars add a message about the charging system or the 12-volt battery, which is worth reading.",
          "If the light came on soon after someone worked on the car, a loose connection at the battery or the alternator is a good first suspect, and the shop that did the work should hear about it. If it comes on along with a rising temperature gauge or heavy steering, the belt is the likely culprit, and you should stop driving.",
        ],
      },
      {
        heading: "If the car quits",
        paragraphs: [
          "Once the battery runs out, the car stops and won't restart without a jump. A jump gets it moving again, but if the alternator isn't charging, the car will stop again soon after. That is a charging system repair, and we don't do mechanical repair.",
          "What we can do is deal with the battery. A jump start is {{price:jump-start}}, plus the {{dispatchFee}} dispatch fee, charged once. A battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, and it includes the installation. Just keep in mind that a new battery doesn't cure a charging fault.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I drive to work with the battery light on?",
        a: "It is a gamble. If the commute is short and the battery is strong you may make it, but a car that stops in traffic or on a freeway is a much worse day than a stop in your own driveway.",
      },
      {
        q: "Why did the battery light come on and then go off?",
        a: "A light that flickers can come from a loose connection or an alternator that is starting to fail. It is an early warning, so get the charging system checked before it turns into a breakdown.",
      },
      {
        q: "Is it safe to keep driving at night with the light on?",
        a: "It is riskier. Headlights draw a lot of current, so the battery runs down faster. If the light comes on after dark, don't push it.",
      },
    ],
    services: ["jump-start", "battery-replacement"],
  },
  {
    slug: "car-battery-dies-overnight",
    title: "Why Your Car Battery Dies Overnight",
    h1: "Why a car battery keeps dying overnight, and where the drain usually is",
    metaDescription:
      "A battery that is fine at night and dead by morning has a drain or is worn out. The usual causes, and what you can check yourself.",
    topic: "Battery guide",
    dek: "Every car draws a little power while parked, enough to keep the clock, the memory and the alarm alive. When the battery is dead by morning, either that draw has grown or the battery can no longer cover it.",
    updated: UPDATED,
    cardImage: card("field-battery-under-seat-detail"),
    sections: [
      {
        heading: "Normal draw versus a drain",
        paragraphs: [
          "A parked car keeps a few small things awake: the clock, the alarm, the memory in the computers, the receiver that listens for the key fob. That draw is tiny, and a healthy battery covers it for weeks. A parasitic drain is something pulling far more than that, and it can empty a battery in a night or two.",
          "Heat makes it worse, because a hot battery loses charge on its own faster than a cool one, even with nothing connected to it.",
        ],
      },
      {
        heading: "The usual causes",
        paragraphs: ["Roughly in the order worth checking:"],
        list: [
          "A light that stays on. The glove box, the trunk, a vanity mirror or a dome light switch that is stuck.",
          "A door or trunk that isn't fully latched, so the car thinks it is open and keeps the lights and modules awake.",
          "Something added after the car was built: a hardwired dash cam, an aftermarket alarm or remote starter, an amplifier, or a charger in a socket that stays powered.",
          "A module or relay that fails to shut down after the car is locked. This is common on newer cars and the hardest to find.",
          "A fault inside the alternator. A bad diode can let current leak back out while the engine is off.",
          "A worn-out battery that can't hold a charge overnight. This is very often the actual answer.",
        ],
      },
      {
        heading: "What you can check yourself",
        paragraphs: [
          "Walk around the car after dark and look for glows: under the dash, in the glove box, and in the trunk. Open the trunk and see whether its light goes off when you close it. Shut every door firmly and make sure the dash doesn't still show a door-ajar warning. Unplug everything from the sockets and USB ports, then leave the car overnight and see how it starts.",
          "Notice the pattern, too. A battery that is dead after a single night points to a real drain or a very weak battery. One that only fails after three or four days of sitting is more often a tired battery meeting a normal draw. That narrows it down before anyone picks up a wrench.",
        ],
      },
      {
        heading: "What takes a shop",
        paragraphs: [
          "If none of that turns it up, locating a hidden drain means measuring the current with the car asleep and pulling fuses one at a time until the number drops. That takes a meter and patience, and it is work for an auto electrical shop.",
        ],
      },
      {
        heading: "The battery is the usual suspect",
        paragraphs: [
          "If the car is more than three years old on the same battery, and the dying started during the summer or the first cold snap, the battery is the likeliest cause. A jump start gets you moving. It will not tell you why the battery emptied.",
          "We can do either job. A jump start is {{price:jump-start}}, and battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, with the installation included. Each job carries the {{dispatchFee}} dispatch fee, charged once. Before anyone is sent, dispatch confirms the right battery for your car and your total.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long can a car sit before the battery dies?",
        a: "A healthy battery in a car with a normal draw can often sit for a few weeks. A weak one, or a car with a drain, may not last a night. Hot weather shortens it.",
      },
      {
        q: "Can a new battery die overnight too?",
        a: "If something is draining the car, yes. A new battery that dies again within days points to a drain or a charging problem, not a bad battery.",
      },
      {
        q: "Should I disconnect the battery overnight?",
        a: "That stops a drain, but it is a workaround. You lose radio presets and some settings, and it doesn't find the cause.",
      },
    ],
    services: ["battery-replacement", "jump-start"],
  },
  {
    slug: "corroded-battery-terminals",
    title: "Corroded Battery Terminals: How to Clean",
    h1: "White or blue crust on your battery terminals: what it is and how to clean it",
    metaDescription:
      "The crust on a battery's terminals is corrosion from acid vapor. Why it forms, how to clean it safely with baking soda, and when to replace instead.",
    topic: "Battery guide",
    dek: "The white, blue or green crust around the battery posts is more than a cosmetic problem. It can choke off the current the car needs to start, and sometimes it means the battery is seeping. It is also something you can often clean off yourself, carefully.",
    updated: UPDATED,
    cardImage: card("field-battery-under-seat-detail"),
    sections: [
      {
        heading: "What the crust is",
        paragraphs: [
          "Batteries vent a little acid vapor and hydrogen gas around the posts, especially when they are hot or charging. That vapor reacts with the metal of the terminals and clamps and leaves a crust. White or gray powder is mostly from the lead and acid. Blue-green points to the copper in the cable end corroding as well. Heat speeds all of it up, which is one reason it is common in Texas.",
          "A little crust at the posts after a few years is ordinary wear. A lot of it, or fresh crust on a battery that was clean a month ago, can mean the battery is venting harder than it should, from age or from overcharging.",
        ],
      },
      {
        heading: "Why it matters",
        paragraphs: [
          "Corrosion conducts poorly. A heavy crust can leave a car clicking or cranking slowly even with a good battery, or make the lights flicker. Corrosion that returns quickly right at the base of a post can also mean the seal is leaking.",
          "It is worth cleaning even while the car still starts. Corrosion adds resistance, and a charging system that has to push through it can leave the battery undercharged without anyone noticing.",
        ],
      },
      {
        heading: "How to clean it",
        paragraphs: ["Take your time, and treat the crust as acid residue:"],
        list: [
          "Put on safety glasses and gloves. Turn the car off and keep sparks and flames away from the battery.",
          "Loosen and remove the black negative cable first, then the red positive one. Never let a wrench touch the positive terminal and the car's body at the same time.",
          "Stir about a tablespoon of baking soda into a cup of water. Brush it onto the crust with an old toothbrush or a terminal brush. It fizzes as it neutralizes the acid.",
          "Scrub the posts and the insides of the clamps until bare metal shows. Wipe them with a damp rag, keep water from running around the engine bay, and dry everything well.",
          "Reconnect the positive cable first, then the negative. Snug is enough. Lead posts are soft, and overtightening damages them.",
          "Finish with a thin coat of dielectric grease or a terminal protector to slow it coming back.",
        ],
      },
      {
        heading: "Before you disconnect anything",
        paragraphs: [
          "Some cars lose radio presets, window settings or learned idle settings when the battery is disconnected, and a few need to relearn things afterward. Check the manual first, especially on a newer car with start-stop or one that needs its battery registered.",
          "Keep a rag handy, too. If any crust or baking soda mixture lands on the paint, wipe it off right away, since acid dulls the finish.",
        ],
      },
      {
        heading: "When cleaning isn't enough",
        paragraphs: [
          "Don't expect clean terminals to save a worn-out battery. Replace the battery if the case is swollen, cracked or wet, if there is a rotten-egg smell, if the cable ends are green under the insulation, or if the crust is back within weeks. A leaking battery shouldn't be jumped.",
          "If the car won't start and you aren't sure whether it is the battery, a jump start is {{price:jump-start}}, plus the {{dispatchFee}} dispatch fee, charged once. A battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, including the installation.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the crust dangerous to touch?",
        a: "Treat it as acid residue. Don't touch it with bare hands or rub your eyes afterward, and rinse any skin it touches with plenty of water.",
      },
      {
        q: "Does corrosion mean I need a new battery?",
        a: "Not by itself. Cleaning can bring a car back if the corrosion was the whole problem. If the car is still slow to start, or the battery is old, the battery is the next suspect.",
      },
      {
        q: "Can I clean the terminals with the cables connected?",
        a: "Don't. Disconnect the negative cable first. A metal tool that bridges a battery terminal and the car's body makes sparks, and the battery gives off a flammable gas.",
      },
    ],
    services: ["battery-replacement", "jump-start"],
  },
  {
    slug: "car-battery-group-size",
    title: "Car Battery Group Size: What the Number Means",
    h1: "What the group number on a car battery means",
    metaDescription:
      "A battery's group size, such as 24F or 65, sets its case size and terminal layout so it fits your car. How to read it and where to find yours.",
    topic: "Battery guide",
    dek: "Look at the label on a car battery and you will find a number like 24F, 35, 51R or 65. That is the group size, and it is the first thing that has to match when you replace a battery.",
    updated: UPDATED,
    cardImage: card("field-battery-under-seat"),
    sections: [
      {
        heading: "What the number covers",
        paragraphs: [
          "The group number comes from a standard set by the Battery Council International, or BCI. It describes the physical battery: the length, width and height of the case, the type of terminals, and where the positive and negative posts sit. It does not tell you how powerful the battery is. Two batteries in the same group share a footprint and can still differ in power.",
          "That is why the label on the battery matters more than the car's model name. Batteries from different brands that carry the same group number drop into the same tray and reach the same cables.",
        ],
      },
      {
        heading: "The letters after it",
        paragraphs: [
          "A letter on the end, like R or F, usually means the terminals are arranged differently from the plain version. A 51 and a 51R are the same size of case with the positive and negative posts on opposite ends. Put the wrong one in and the cables don't reach the right posts. Forcing them to reach is how you end up with a short or a reversed connection, which can damage the car's electronics.",
        ],
      },
      {
        heading: "Power is a separate number",
        paragraphs: [
          "Cold cranking amps, or CCA, says how much current a battery can deliver in the cold. Reserve capacity says how long it can run the car's electronics if the alternator quits. Match the group, then choose a battery that meets or beats the CCA your car's maker specifies.",
          "Meeting the spec is what matters. Paying for far more cranking power than the car calls for rarely pays off in a place where hard freezes are brief.",
        ],
      },
      {
        heading: "Where to find yours",
        paragraphs: ["Any of these will give you the group:"],
        list: [
          "The label on the battery now in the car. It may read Group 24F, or just 24F.",
          "The specifications section of the owner's manual.",
          "Your year, make, model and engine. The same model can take different groups depending on the engine, which is why the engine matters.",
          "On many European cars, a different code such as H6 or H8, which covers the same idea, the size and layout, written another way.",
        ],
      },
      {
        heading: "Other things that have to match",
        paragraphs: [
          "Terminal type matters too: top posts or side posts. A battery in the trunk or inside the cabin usually has a vent tube that carries gas outside, and the replacement has to have the matching vent port. The hold-down has to grip it, and it has to clear whatever sits above it. If you are comparing prices, compare the group first. A battery in the wrong group isn't a bargain at any price.",
          "You don't need to know your group number to request a replacement. Year, make and model are enough to start, and the VIN helps if it is easy to reach. Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, which covers the battery and installing it, plus the {{dispatchFee}} dispatch fee, added once to the job. Dispatch will confirm the battery is compatible with your vehicle and tell you the total before a driver is sent.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I use a different group size if it will fit?",
        a: "Sometimes. The terminals have to land in the right place, the height has to clear, and the hold-down has to secure it. If you aren't sure, stay with the original group.",
      },
      {
        q: "Is a higher CCA battery better?",
        a: "More than the minimum doesn't hurt, but it is no substitute for the right group size. A battery that doesn't sit properly in the tray causes its own trouble.",
      },
      {
        q: "Does the group size change from year to year on the same model?",
        a: "It can, especially when the maker redesigns the car or offers a different engine. That is why a year and engine matter when you look one up.",
      },
    ],
    services: ["battery-replacement"],
  },
  {
    slug: "mobile-battery-replacement-vs-shop",
    title: "Mobile Battery Replacement vs a Shop",
    h1: "Mobile battery replacement, a shop or doing it yourself: what to compare",
    metaDescription:
      "Compare a repair shop, a DIY swap and an installation where the car is parked, on total cost, warranty, time and fit, before you pick.",
    topic: "Battery guide",
    dek: "There are three ways to get a new battery into a car, and the lowest sticker price isn't always the cheapest day. Here is what to compare before you choose.",
    updated: UPDATED,
    cardImage: card("field-arrival-van"),
    sections: [
      {
        heading: "Start with whether the car runs",
        paragraphs: [
          "If the car starts and you can drive it safely, all three options are open. If it won't start, a trip to a shop needs a jump, a ride or a tow first, and that cost belongs in the comparison.",
          "Think about timing too. A shop keeps business hours, so a battery that dies at night or on a Sunday has to wait. Our dispatch is open 24/7, 365 days a year.",
        ],
      },
      {
        heading: "Questions to ask any of them",
        paragraphs: ["Whoever installs it, the same questions apply:"],
        list: [
          "What is the total, with the battery, the installation and any fees?",
          "What does the warranty cover, for how long, and what do you need to bring to make a claim?",
          "Is it the right battery for your car? That means the group size, regular or AGM, and whether the car needs the new battery registered.",
          "What happens to the old battery? It shouldn't go in the household trash.",
          "How long will it take, and when can it happen?",
        ],
      },
      {
        heading: "A shop",
        paragraphs: [
          "A shop has the tools, a lift and a mechanic who can look at the charging system while the hood is up. You also have the drive, the wait and some of your day. It makes sense when the car runs and you would like a general check at the same time.",
          "A shop can also look at things a battery swap doesn't: the alternator, the belt, a hidden drain. If your battery died for no reason you can name, that is worth having looked at.",
        ],
      },
      {
        heading: "Doing it yourself",
        paragraphs: [
          "It can be the cheapest, and on many cars it is a short job with a couple of wrenches. But a battery weighs more than it looks, often 30 pounds or more, and the terminals need cleaning. On some cars it sits under a seat or in the trunk, and some cars lose their settings or need the new battery registered. Some apartment complexes and HOAs also have rules about car work in the parking lot.",
          "Count the small costs, too: a wrench set, a terminal brush, gloves and safety glasses, and the trip to get rid of the old battery. If you already own the tools and the battery sits under the hood, it can be a good deal. If not, the savings shrink.",
        ],
      },
      {
        heading: "Having it installed where the car is",
        paragraphs: [
          "This is built for the days when the car won't start and a shop isn't practical: at home, in the office lot, in a parking garage. We are a service-area business with no walk-in location, so the driver comes to you.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, with the new battery and the installation included, plus the {{dispatchFee}} dispatch fee charged once per job. The expected total is {{total:battery-replacement}}. The new battery carries a 1-year warranty, so keep your invoice. The trade-off is a short conversation first, since dispatch confirms compatibility, and your total, before a driver is sent.",
          "A simple way to choose: if the car runs and the afternoon is yours, a shop or a DIY swap is fine. If the car doesn't run, or the afternoon isn't yours, it makes sense to bring the battery to the car.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is mobile replacement more expensive than a shop?",
        a: "It depends on the shop and the battery. Compare the all-in totals instead of the battery's sticker price. Ours is a published price that includes installation, with a dispatch fee added once per job.",
      },
      {
        q: "Can every battery be replaced on site?",
        a: "The published price is for eligible vehicles and batteries, and battery pricing varies by vehicle and battery type. Dispatch confirms compatibility before a driver is sent.",
      },
      {
        q: "What do I need to have ready when I request it?",
        a: "The year, make and model, the VIN if it is easy to reach, and where the car is parked, including whether there is room to open the doors and the hood.",
      },
    ],
    services: ["battery-replacement"],
  },
  {
    slug: "key-fob-battery-dead-car-wont-start",
    title: "Dead Key Fob and Car Won't Start",
    h1: "Push-button car won't start: dead key fob or dead car battery?",
    metaDescription:
      "A push-button car that won't start has either a weak fob battery or a dead car battery. How to tell, how to start with a dead fob, and what to do.",
    topic: "Jump start guide",
    dek: "On a push-button car the key is a small radio, and a dead fob can leave you with a perfectly good car that refuses to start. A dead car battery looks similar, and the fix is completely different.",
    updated: UPDATED,
    cardImage: card("field-arrival-van"),
    sections: [
      {
        heading: "Which one is it?",
        paragraphs: [
          "Look at what the car itself does. If the interior lights come on, the dash lights up and the horn works, the car's battery is alive and the fob is the likely problem. If the car shows nothing at all, no lights, no chime and no screen, the car's battery is the problem.",
          "A message on the dash saying the key isn't detected means the car is awake and can't hear the fob.",
        ],
      },
      {
        heading: "Starting a car with a dead fob",
        paragraphs: [
          "Cars are built to start even when the fob's battery is dead. Most fobs have a passive chip that the car can read when it is held very close. Where you hold it depends on the car: against the start button, against a marked spot on the steering column, or in a slot or tray in the console. Then press the brake and press the button as usual.",
          "Your owner's manual shows the spot, usually in a section about a weak fob battery.",
          "Some cars are fussy about position. If the car still can't find the key, try again with the fob pressed right on the spot, and keep your foot firmly on the brake until the car responds.",
        ],
      },
      {
        heading: "Getting in when the fob is dead",
        paragraphs: [
          "Most fobs hide a small metal key. A little release button or latch slides it out. On many cars the keyhole on the driver's door is hidden under a cap on the handle, and you can pry the cap off with the key.",
          "Opening a door with the metal key can set off the alarm on some cars. It usually quiets down once the car recognizes the fob or you start the engine.",
        ],
      },
      {
        heading: "Replacing the fob battery",
        paragraphs: [
          "Most fobs take a small coin cell, often a CR2032, though some use other sizes. Open the fob (the manual shows how), note which way the old cell faces, and drop in the new one. It takes a couple of minutes.",
          "Fob batteries usually warn you first: the range shrinks, the buttons don't respond every time, and you have to stand right at the car before it notices you. Read the number on the old cell before you shop, because coin cells that look alike differ in size and thickness.",
        ],
      },
      {
        heading: "When it is the car's battery",
        paragraphs: [
          "If the car's battery is the one that is dead, a new fob battery won't help, and the remote may not unlock the doors either. Use the metal key for the door, then get the car jumped. A car battery that is close to dead can behave strangely first, with a start button that needs several presses or a dash that restarts itself, and that is easy to mistake for a fob problem. A jump start is {{price:jump-start}}, plus the {{dispatchFee}} dispatch fee, charged once.",
          "If you can't get into the car at all, because the metal key is missing or the lock won't turn, tell dispatch. We also do vehicle lockouts, and the driver confirms you own the car before unlocking it.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I know the fob battery is dying?",
        a: "The range shrinks, buttons stop responding every time, and the car sometimes doesn't see the key until you stand right next to it. Many cars also show a low key battery message.",
      },
      {
        q: "Will a jump start fix a dead fob?",
        a: "No. The fob and the car have separate batteries. A jump start only helps when the car's battery is the one that is drained.",
      },
      {
        q: "Does a dead fob battery drain the car's battery?",
        a: "No. They are separate. A fob can go dead on a car whose own battery is perfectly healthy.",
      },
    ],
    services: ["jump-start", "lockout"],
  },
  {
    slug: "tesla-12-volt-battery",
    title: "Tesla 12-Volt Battery Warning: What to Do",
    h1: "Tesla 12-volt battery warning: what it is and what to do",
    metaDescription:
      "A Tesla can show a 12-volt battery warning, or refuse to wake, even with a full main battery. What the small battery does and what to do about it.",
    topic: "EV and hybrid guide",
    dek: "A Tesla with a full main battery can still be stuck. The small 12-volt battery wakes the car up, and when it fails you get a dead screen, doors that won't open, or a warning on the display.",
    updated: UPDATED,
    cardImage: card("field-arrival-gear"),
    sections: [
      {
        heading: "What the 12-volt battery does in a Tesla",
        paragraphs: [
          "The big battery pack drives the car, but a separate 12-volt battery runs the computers, the screen, the door handles and locks, the lights, and the relays that connect the pack to the rest of the car. In normal driving the pack keeps the 12-volt battery topped up. When the 12-volt battery is weak, the car can act as if it has no power at all, however full the pack is.",
          "That is why owners sometimes meet a car that shows plenty of range in the app and still won't open its doors. The range number belongs to the pack. Opening the doors and waking the car belongs to the small battery.",
        ],
      },
      {
        heading: "What the warning looks like",
        paragraphs: [
          "The car may put a message on the screen about the 12-volt or low-voltage battery, often well before it fails. A warning that appears while the car still works is your chance to deal with it on your own schedule, before the car is parked somewhere and won't wake up. When it gets worse, you may see:",
        ],
        list: [
          "The phone key or key card no longer unlocks the car.",
          "The screen stays black, or keeps restarting.",
          "The car won't shift out of Park.",
          "Several error messages at once, or none at all because nothing wakes up.",
        ],
      },
      {
        heading: "Why it wears out",
        paragraphs: [
          "It is a battery like any other. Age and heat wear it down, and a Texas summer is hard on it. The warning can come in the days beforehand, but it can also arrive with very little notice.",
        ],
      },
      {
        heading: "Which kind of 12-volt battery you have",
        paragraphs: [
          "Tesla has used different kinds of 12-volt battery: lead-acid in some cars and lithium-ion in others. According to the Model 3 owner's manual, the jump procedure differs depending on which one the car has, and the screen shows it under Controls, Software, Additional Vehicle Information. Read the manual for your model. The jump points and the way to open the car when power is out vary from one Tesla to another.",
          "One more thing from the manual: don't use a Tesla to jump start another vehicle.",
          "Also don't force a door or the front trunk when the car has lost power. Cars like this usually have a manual release, and forcing a panel can cost far more than the battery does.",
        ],
      },
      {
        heading: "What we do and don't do",
        paragraphs: [
          "We help with the 12-volt system only. We do nothing with the high-voltage battery. A jump start for the 12-volt system is {{price:jump-start}}, plus the {{dispatchFee}} dispatch fee, added once to the job. If the 12-volt battery itself is worn out, ask about battery replacement, which is {{price:battery-replacement}} for eligible vehicles and batteries, installation included. Dispatch confirms whether your car's battery is eligible, and your total, before a driver is sent.",
          "When you request help, say that it is a Tesla, give the model and year, and describe what the screen says. Put those details in the notes field so the driver comes with the right equipment.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the 12-volt battery the same as the main battery?",
        a: "No. The main pack moves the car. The 12-volt battery wakes the car up and powers its electronics. They fail for different reasons.",
      },
      {
        q: "Will the car warn me before the 12-volt battery fails?",
        a: "Often there is a message in the days before, but it can also fail with little notice. Don't ignore a low-voltage message.",
      },
      {
        q: "Does a dead 12-volt battery mean my main battery is empty?",
        a: "No. The main pack can be full and the car can still be dead, which is what makes it confusing.",
      },
    ],
    services: ["jump-start", "battery-replacement"],
  },
  {
    slug: "hybrid-12-volt-battery",
    title: "Hybrid 12-Volt Battery: Why It Dies",
    h1: "Why a hybrid has a 12-volt battery, and what happens when it dies",
    metaDescription:
      "A hybrid's big battery doesn't switch the car on by itself. The small 12-volt battery does the waking. What a dead one looks like and how it's handled.",
    topic: "EV and hybrid guide",
    dek: "People assume the large hybrid battery does everything. It doesn't. A hybrid also carries an ordinary 12-volt battery, and when that one dies the car goes dark even though the big one may be fine.",
    updated: UPDATED,
    cardImage: card("field-battery-under-seat"),
    sections: [
      {
        heading: "Two batteries, two jobs",
        paragraphs: [
          "A hybrid's high-voltage battery supplies the electric motor. The 12-volt battery runs everything else: the computers, the lights, the locks, the radio, and the relays that connect the big battery to the car when you press the power button. Without the 12-volt battery those relays never close, so the car can't power up, and the big battery just sits there.",
          "Many hybrids also start their engine through the hybrid system instead of a conventional starter motor. That means a dead 12-volt battery often doesn't give you the clicking you may expect from a regular car. You get silence, or a dash that barely wakes up.",
        ],
      },
      {
        heading: "What a dead one looks like",
        paragraphs: ["The signs are the same ones a dead battery causes in any car, with one hybrid twist:"],
        list: [
          "The dash is dark or only partly lit.",
          "The car won't switch on, and the Ready light never comes on.",
          "The remote or the door handles respond oddly, or not at all.",
          "A burst of warning lights, then nothing.",
        ],
      },
      {
        heading: "Why it fails",
        paragraphs: [
          "It is an ordinary battery doing an ordinary job, so it ages like any other, and heat is hard on it. The usual triggers are a car that sits for weeks, a lot of short trips, and leaving the car in accessory mode with the doors open, so the radio and lights run while the car isn't charging anything.",
          "A hybrid is quiet, which makes that last one easy to do. With no engine running to remind you the car is awake, it is simple to walk away from it in accessory mode or with a door ajar.",
        ],
      },
      {
        heading: "Where it is",
        paragraphs: [
          "It isn't always under the hood. Many hybrids put it in the trunk, under the rear seat or beneath the cargo floor, and provide a jump terminal under the hood in the fuse box. The manual shows both. Many of these are sealed batteries, sometimes AGM, so replace like with like.",
          "If you can't find the jump terminal, don't clamp onto anything else under the hood. Check the manual, or ask dispatch. And leave anything with orange cabling alone. That is the high-voltage system, and none of this needs it.",
        ],
      },
      {
        heading: "What we do",
        paragraphs: [
          "We help with the 12-volt system only, and we do nothing with the high-voltage battery. A jump start is {{price:jump-start}}, plus the {{dispatchFee}} dispatch fee, added once to the job. If the 12-volt battery is worn out, battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, the new battery and installation both included. Dispatch confirms compatibility and tells you your total before a driver is sent.",
          "Say in your request that it is a hybrid, and put the details in the notes field so the driver brings the right equipment.",
          "A jump only helps the small battery. If the Ready light still doesn't come on after the jump, or the dash shows a warning about the hybrid system itself, the cause is somewhere we don't work, and a dealer or a hybrid specialist is the next call.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will a jump start charge my hybrid's big battery?",
        a: "No. A jump only helps the 12-volt battery. A hybrid recharges its big battery as you drive, and that has nothing to do with the jump.",
      },
      {
        q: "Can I jump a hybrid with ordinary cables?",
        a: "Follow the manual. It shows which terminal to use, often under the hood and not at the battery itself, and a clamp on the wrong spot can damage the electronics.",
      },
      {
        q: "Does a dead 12-volt battery mean the hybrid battery is bad?",
        a: "Not necessarily. They are separate batteries. A hybrid can have a perfectly good big battery and a dead small one.",
      },
    ],
    services: ["jump-start", "battery-replacement"],
  },
  {
    slug: "semi-truck-wont-start",
    title: "Semi Truck Won't Start: Dead Batteries",
    h1: "Semi truck won't start: dead batteries on a big rig, and what to have ready",
    metaDescription:
      "A big rig with dead batteries needs a heavy-duty jump. What to check first, what to tell dispatch, and the price of a semi or 18-wheeler jump start.",
    topic: "Jump start guide",
    dek: "A heavy diesel needs far more cranking power than a car does, and a dead battery bank can leave a tractor stuck in a yard or a truck stop. Here is what to check, and what makes the call go quickly.",
    updated: UPDATED,
    cardImage: card("field-arrival-gear"),
    sections: [
      {
        heading: "Why big rigs go dead",
        paragraphs: [
          "Most heavy trucks run a 12-volt system with several batteries wired together, though a few use 24 volts, so say which if you know. A heavy diesel needs a lot of current to turn over. Trucks also run loads while parked: sleeper heating or cooling, a refrigerator, an inverter, lights. Add a weak alternator, loose or corroded cable ends, or batteries that have aged, and the truck won't turn over.",
          "Cold makes both halves of the problem worse, since the engine is harder to turn and the batteries are weaker. The first cold morning of the year is when a bank of aging batteries tends to give out.",
        ],
      },
      {
        heading: "What to check first",
        paragraphs: ["Before you call, a few minutes with the truck can save a trip:"],
        list: [
          "The battery disconnect switch, if the truck has one. It is easy to leave it off after maintenance.",
          "The cable ends at the batteries, which may be loose or corroded.",
          "The dash lights. Dim means weak batteries. Dark means a disconnect or batteries that are fully dead.",
          "Any battery that looks damaged: swollen, cracked or leaking, especially after a cold night.",
        ],
      },
      {
        heading: "Why a small jump pack isn't enough",
        paragraphs: [
          "A starter on a heavy diesel pulls far more current than the one on a sedan. A small jump pack that works on a car may not turn a big diesel over. That is why a semi gets a heavy-duty jump start, and why the truck should be requested as a semi, not as a car.",
          "For the same reason, a passenger car is a poor donor for a big diesel. It usually can't supply enough current, and it strains its own electrical system trying.",
        ],
      },
      {
        heading: "What to have ready when you call",
        paragraphs: ["Choose Semi truck as the vehicle type when you request help, and have these ready:"],
        list: [
          "The unit number.",
          "Exactly where the truck is: the yard, the truck stop, or the mile marker, with the nearest exit.",
          "Whether it is a tractor alone or hooked to a trailer, and whether it is blocking a lane or a dock door.",
          "The year and make, and whether the system is 12-volt or 24-volt, if you know.",
        ],
      },
      {
        heading: "The price, and what happens next",
        paragraphs: [
          "A heavy-duty jump start for a semi truck, an 18-wheeler or another big rig is {{price2:jump-start}}, plus the {{dispatchFee}} dispatch fee charged once per job. That is a separate price from a car's jump start, which is {{price:jump-start}}, so request it as a semi truck. Our average arrival is 30 minutes, and the actual time depends on the location and traffic. We text or call when the driver is on the way.",
          "Once it is running, give the air pressure time to build before you try to move, since the spring brakes won't release until it does. Don't shut it off at the first stop. A truck that needed a jump had a reason, so have the batteries and the charging system checked.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a semi jump start the same price as a car's?",
        a: "No. A semi, 18-wheeler or other big rig is {{price2:jump-start}}, plus the {{dispatchFee}} dispatch fee. A car or pickup is {{price:jump-start}}, plus the same fee. Choose Semi truck as the vehicle type so the right one applies.",
      },
      {
        q: "What if I don't know exactly where the truck is?",
        a: "Give the truck stop name, the nearest exit, the mile marker, or the address of the yard. The more exact it is, the faster the driver finds you.",
      },
      {
        q: "Should I check anything else before the driver arrives?",
        a: "Make sure the disconnect switch, if the truck has one, is on, and look over the cable ends. Then keep the lights off and the sleeper loads switched off so there is nothing else drawing on the batteries.",
      },
    ],
    services: ["jump-start"],
  },
  {
    slug: "dfw-winter-freeze-car-battery",
    title: "Car Battery in a DFW Hard Freeze",
    h1: "A North Texas hard freeze and a battery that summer already wore out",
    metaDescription:
      "Why the first hard freeze in DFW kills batteries that look fine, how to start a weak car safely, and when a frozen battery should not be jumped.",
    topic: "Battery guide",
    dek: "North Texas doesn't get long winters, so the car is rarely ready for a few nights in the teens or 20s. The batteries that fail on those mornings were usually worn down by the summer before.",
    updated: UPDATED,
    cardImage: card("field-jump-start-hood"),
    sections: [
      {
        heading: "Why the first freeze finds the weak ones",
        paragraphs: [
          "Cold slows the chemistry, so a battery delivers less power at 20 degrees than it does at 80. At the same time, cold oil makes the engine harder to turn. A strong battery has plenty of margin. A battery that came out of a 100-degree summer with much less capacity doesn't. It started the car all fall and gives up on the first hard-freeze morning.",
          "It also explains why weak batteries tend to fail on the same morning. They all face the same cold at the same time, and the ones the summer wore down are the ones with no margin left.",
        ],
      },
      {
        heading: "Starting a weak battery on a freezing morning",
        paragraphs: ["If the car is slow, a few habits give it its best chance:"],
        list: [
          "Turn everything off first: the heater fan, the defroster, seat heaters, lights and the radio. Let the starter have all of the battery's power.",
          "Crank for about ten seconds at most. If it doesn't catch, wait around half a minute before you try again. Long cranks overheat the starter and drain what is left.",
          "Stop after a few attempts. Cranking again and again on a weak battery usually makes it worse.",
          "If it starts, don't shut it off right away. Let it run, then drive it instead of idling, to put some charge back.",
        ],
      },
      {
        heading: "When a frozen battery shouldn't be jumped",
        paragraphs: [
          "A badly discharged battery can freeze in a hard freeze. Its liquid has more water in it than a full battery's does, so it freezes at a higher temperature. A frozen battery can crack or bulge.",
          "If the case looks swollen, cracked or wet, or you can see ice, don't try to jump or charge it. It needs to be replaced.",
        ],
      },
      {
        heading: "Getting ahead of the freeze",
        paragraphs: [
          "When a freeze is in the forecast, take stock. If the battery is three years old or more and has been slow to start, replace it on a day that suits you instead of at 6 a.m. on an icy driveway. Park in a garage if you have one. A longer drive once a week keeps the battery charged between cold nights.",
          "Check the basics while you are under the hood. Clean, tight terminals matter more in the cold, because a poor connection costs the starter current at the moment it needs every bit. Cold-weather problems rarely come from one cause. A weak battery, a loose clamp and an unused car stack up.",
        ],
      },
      {
        heading: "If it won't start anyway",
        paragraphs: [
          "Dispatch is open 24/7, 365 days a year. A jump start is {{price:jump-start}}, plus the {{dispatchFee}} dispatch fee, charged once, and a battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installation included. Arrival averages 30 minutes, with the actual time depending on location and traffic. We text or call when the driver is on the way. Wait inside the car where it is safe, and hold off on more cranking in the meantime. Each long attempt drains what the battery has left and makes the jump harder.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a car battery freeze in Texas?",
        a: "Yes, a badly discharged one can if the temperature drops far enough. A fully charged battery is much harder to freeze.",
      },
      {
        q: "Why does my car start in the afternoon but not in the morning?",
        a: "A battery delivers more power when it is warm. A weak one can manage on a mild afternoon and fail at dawn, when the temperature is lowest.",
      },
      {
        q: "Is it okay to jump start a car in freezing weather?",
        a: "Usually, if the battery isn't frozen or damaged. A cold battery takes a charge slowly, so a longer drive afterward matters more than usual.",
      },
    ],
    services: ["jump-start", "battery-replacement"],
  },
];
