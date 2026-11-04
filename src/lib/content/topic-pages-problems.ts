import type { TopicPage } from "./topic-pages";

/** Problem and driver pages at /roadside/<slug>. The rules are in topic-pages.ts. */
export const TOPICS_PROBLEMS: TopicPage[] = [
  {
    slug: "flat-tire-help",
    kind: "problem",
    title: "Flat Tire Help Near Me",
    h1: "Flat tire help in Dallas–Fort Worth",
    metaDescription:
      "{{price:flat-tire-change}} + {{dispatchFee}} dispatch. A driver comes to your flat tire and puts on your spare. Call or request help 24/7.",
    eyebrow: "Flat tire",
    intro:
      "A flat tire doesn't have to mean a trip to a shop. Call or send a request, tell us where you are, and a driver comes to the car. If you carry a usable spare, we put it on; if you don't, we can supply a tire and install it.",
    service: "flat-tire-change",
    alsoServices: ["tire-repair-plug-patch", "tire-replacement"],
    sections: [
      {
        heading: "What to check before you call",
        paragraphs: [
          "Get clear of moving traffic and turn on your hazard lights. If you're in a live traffic lane, or anyone is in danger, call 911 first. Once you're safe, a minute of looking tells us which help to send.",
        ],
        list: [
          "Which tire is down, and whether it's completely flat or still holding some air.",
          "Whether the car has a spare. Check under the trunk floor and underneath the vehicle.",
          "Whether your wheels have locking nuts, and where the key is.",
          "The vehicle's year, make and model.",
        ],
      },
      {
        heading: "Which fix matches your flat",
        paragraphs: [
          "Three different jobs get a car off a flat, and which one you need depends on the tire. Each one adds a {{dispatchFee}} dispatch fee, charged once, for sending the driver to you.",
        ],
        list: [
          "A usable spare in the car: a flat tire change, {{price:flat-tire-change}}. We put on the spare you already carry.",
          "A small puncture in the tread: a plug or patch, {{price:tire-repair-plug-patch}}, when the damage allows it.",
          "No spare, or a tire too damaged to repair: tire replacement, {{price:tire-replacement}}. We supply the tire and install it.",
        ],
      },
      {
        heading: "If you can't tell which one you need",
        paragraphs: [
          "Choose the closest match and describe what you see. The price for your vehicle is confirmed before a driver is sent. If you ask for a repair, the driver checks the tire before starting and tells you whether it can be done. Damage in or near the sidewall can't be repaired safely.",
          "Please don't keep driving on the flat to reach a shop. It ruins the tire and can damage the wheel, which turns a small bill into a bigger one.",
          "You'll get a text or a call when the driver is on the way. Our average arrival is 30 minutes, and the actual time depends on your location and traffic.",
        ],
      },
      {
        heading: "What a flat tire change includes",
        paragraphs: [
          "The change is the job of swapping the flat for the spare you already carry. It does not include a new tire. If the flat itself needs replacing, or the spare is unusable, ask for tire replacement instead and say why when you request.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a spare for you to help?",
        a: "Not necessarily. A flat tire change puts on the spare you already carry, but without one we can supply a tire and install it, {{price:tire-replacement}} plus the {{dispatchFee}} dispatch fee. Dispatch confirms a tire is available before a driver is sent.",
      },
      {
        q: "Can you fix the flat instead of swapping it?",
        a: "Often, yes, when the puncture is in the tread. A plug or patch is {{price:tire-repair-plug-patch}} plus the {{dispatchFee}} dispatch fee. Damage in or near the sidewall can't be safely repaired.",
      },
      {
        q: "I'm only a few blocks from a shop. Can I drive on it?",
        a: "Don't. Even a short drive on a flat can damage the wheel as well as the tire, and a tire that could have been plugged becomes one that has to be replaced.",
      },
      {
        q: "Do I need a membership?",
        a: "No. There's no membership and no account. Call or send a request.",
      },
    ],
  },
  {
    slug: "emergency-tire-change",
    kind: "problem",
    title: "Emergency Tire Change",
    h1: "Emergency tire change, wherever you're stuck",
    metaDescription:
      "{{price:flat-tire-change}} + {{dispatchFee}} dispatch. Stuck on a flat in a bad spot? Call 911 if you're in a lane, then call us to change the tire.",
    eyebrow: "Emergency flat",
    intro:
      "This page is for a flat tire in a place you shouldn't be: a narrow shoulder, a busy road, a dark lot. Get safe first, then call or send a request and a driver comes to change the tire. You don't have to jack up a car next to traffic.",
    service: "flat-tire-change",
    alsoServices: ["tire-replacement", "rim-lock-removal"],
    sections: [
      {
        heading: "First, get out of harm's way",
        paragraphs: [
          "If you're in a live traffic lane, or anyone is hurt or in danger, call 911 before you call us. Everything else waits for that.",
          "If the car can still roll, a slow drive to the next exit, a parking lot or a wide shoulder is worth it. A damaged wheel can be replaced; a stopped car in a lane is the bigger danger.",
        ],
      },
      {
        heading: "Once you're stopped",
        paragraphs: ["Park as far from moving traffic as you can, then work through this list:"],
        list: [
          "Hazard lights on, car in park, parking brake set.",
          "Reflective triangles behind the car, if you carry them and can set them out safely.",
          "Everyone out on the side away from traffic and well clear of the car. If the shoulder is too narrow to stand on safely, stay buckled in with the hazards on instead.",
          "Don't jack the car up yourself beside moving traffic.",
          "If it's safe, find where the spare is stored, so you can tell the driver.",
        ],
      },
      {
        heading: "Tell us exactly where you are",
        paragraphs: [
          "On a road, landmarks beat addresses. Give dispatch the road name, which direction you're facing, the nearest exit or cross street, and any mile marker you can read. Say that you're on a shoulder or in a hazard, and say whether there's a spare in the car.",
          "If your wheels have locking nuts, say whether you have the key. A missing key means the lock has to come off before the wheel can, which is {{price:rim-lock-removal}} plus the dispatch fee. It is better to tell dispatch now than to find out when the driver arrives.",
          "We text or call you when the driver is on the way. Our average arrival is 30 minutes, though the real time depends on where you are and the traffic. Stay somewhere safe until then.",
        ],
      },
      {
        heading: "What the change costs",
        paragraphs: [
          "Putting on the spare you already carry is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee for sending the driver. With no usable spare, we can supply a tire and install it for {{price:tire-replacement}}, plus the same fee, once dispatch confirms a tire is available.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I change the tire myself on the shoulder?",
        a: "Not beside moving traffic. Jacking up a car on a narrow shoulder puts you and the car a few feet from passing vehicles. Get to a safer spot, or let a driver do it.",
      },
      {
        q: "I'm stopped in a lane. Do I call you or 911?",
        a: "Call 911 first. Once you're out of the lane and safe, call or send a request to us for the tire.",
      },
      {
        q: "How soon can a driver get to me?",
        a: "Our average arrival is 30 minutes. The actual time depends on your location and traffic, and we text or call you when the driver is on the way.",
      },
      {
        q: "Will you work on a highway shoulder?",
        a: "Yes. The car gets fixed where it sits, whether that's a shoulder, a parking lot or a driveway. Give dispatch the road, the direction and the nearest exit or mile marker.",
      },
      {
        q: "What if I don't have a spare?",
        a: "Tell dispatch. We can supply a tire and install it, {{price:tire-replacement}} plus the {{dispatchFee}} dispatch fee. Tire availability varies, so dispatch confirms one is available before a driver is sent.",
      },
    ],
  },
  {
    slug: "mobile-tire-service",
    kind: "problem",
    title: "Mobile Tire Service",
    h1: "Mobile tire service across Dallas–Fort Worth",
    metaDescription:
      "{{price:flat-tire-change}} + {{dispatchFee}} dispatch. Mobile tire service: spare swaps, repairs and new tires at your location. No shop trip.",
    eyebrow: "Mobile tires",
    intro:
      "Mobile tire service means the tire job comes to the car, not the other way around. We change flats, repair punctures and supply and install new tires at your home, your workplace or the roadside. Call or send a request and we send a driver.",
    service: "flat-tire-change",
    alsoServices: ["tire-repair-plug-patch", "tire-replacement", "stuck-screw-in-tire"],
    sections: [
      {
        heading: "Mobile, not a shop",
        paragraphs: [
          "TRA doesn't run a garage with bays or a walk-in counter. We're a dispatch service for the Dallas–Fort Worth Metroplex, so the work happens wherever the car is parked: a driveway, a parking lot, a garage or the shoulder.",
          "That matters with a bad tire. You don't have to drive on it, arrange a tow or a ride, or leave the car at a shop and come back for it.",
          "The steps are the same wherever the car is: you tell us where it is, dispatch confirms the job and the price, and a driver heads out.",
        ],
      },
      {
        heading: "The tire jobs we do",
        paragraphs: ["Each job has its own price, and a {{dispatchFee}} dispatch fee is added once per job."],
        list: [
          "Spare tire change, {{price:flat-tire-change}}: we put on the spare already in your car.",
          "Plug or patch repair, {{price:tire-repair-plug-patch}}: for a puncture in the tread.",
          "Stuck screw or nail, {{price:stuck-screw-in-tire}}: the object removed and the tire made safe.",
          "New tire, {{price:tire-replacement}}: we supply the tire and install it.",
        ],
      },
      {
        heading: "What a mobile visit doesn't include",
        paragraphs: [
          "We don't tow and we don't do mechanical repair, so a damaged wheel or a problem beyond the tire itself is a job for a shop. For a replacement, tire availability varies, so dispatch confirms a tire is available before sending a driver.",
        ],
      },
      {
        heading: "Have this ready when you call",
        paragraphs: [
          "Your exact location, the vehicle's year, make and model, and which tire is affected. If you can read the wheel size off the sidewall, add it. If your wheels have locking nuts and the key is missing, say so. Wheel lock removal is {{price:rim-lock-removal}} plus the dispatch fee, and the wheel has to come off before any tire work can start.",
          "If you can't tell which job you need, describe what you see. A puncture gets checked by the driver before any repair starts, and damage in or near the sidewall can't be repaired safely, so that tire is replaced. A flat with no usable spare behind it is a replacement job too.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you come to my home or workplace?",
        a: "Yes. The job happens where the car is parked: a driveway, a work parking lot, a garage or the roadside.",
      },
      {
        q: "Is there a shop I can drive to?",
        a: "No. TRA is a service-area business without a walk-in location. The driver comes to you.",
      },
      {
        q: "I don't know what's wrong with the tire. Which service do I pick?",
        a: "Choose the closest match and describe what you see. Dispatch confirms the right job, and the price for your vehicle, before a driver is sent.",
      },
      {
        q: "Do I need an account or a membership?",
        a: "No. There's no account and no membership. Call or send a request.",
      },
    ],
  },
  {
    slug: "24-hour-tire-service",
    kind: "problem",
    title: "24 Hour Tire Service",
    h1: "24-hour tire service that comes to you",
    metaDescription:
      "{{price:flat-tire-change}} + {{dispatchFee}} dispatch. 24-hour tire service in Dallas–Fort Worth, open every day. We come to your car.",
    eyebrow: "24/7 tires",
    intro:
      "If you searched for a 24 hour tire shop, here is the short answer: we're not a shop. We're a dispatch service that's open 24/7, 365 days a year, and a driver comes to the flat instead of you hunting for a place that's open. Call or send a request at any hour.",
    service: "flat-tire-change",
    alsoServices: ["tire-replacement", "tire-repair-plug-patch"],
    sections: [
      {
        heading: "A driver instead of a shop that's open",
        paragraphs: [
          "Even a shop that stays open all night needs your car to get there, and a flat tire doesn't roll well. We do it the other way around. We're open 24/7, 365 days a year, and the work happens where the car is parked.",
          "Dispatch is local to Dallas–Fort Worth, not an out-of-state call center. Weekends, holidays and the small hours make no difference to us: we're open every day of the year.",
          "That also means you can call from the roadside, from a home driveway, or from a work lot after the building has emptied for the night.",
        ],
      },
      {
        heading: "What you can ask for at any hour",
        paragraphs: ["These are the tire jobs, with the service price for each. A {{dispatchFee}} dispatch fee is added once per job."],
        list: [
          "A flat tire change, {{price:flat-tire-change}}, if you carry a usable spare.",
          "A plug or patch repair, {{price:tire-repair-plug-patch}}, for a puncture in the tread.",
          "A new tire, supplied and installed, {{price:tire-replacement}}, when there's no spare or the tire is too damaged to repair.",
        ],
      },
      {
        heading: "What to expect when you call",
        paragraphs: [
          "Tell us where the car is, the year, make and model, and what's wrong with the tire. Dispatch confirms the service price and the dispatch fee for your vehicle before a driver is sent. We text or call when the driver is on the way. Our average arrival is 30 minutes, and the actual time depends on where you are and the traffic.",
          "Not sure what to ask for at that hour? Say what you see: a tire that's completely flat, one that's losing air slowly, a nail in the tread. That's enough for dispatch to pick the right job.",
        ],
      },
      {
        heading: "What there is no counter for",
        paragraphs: [
          "Because we're a service-area business, there's no address to walk up to and no rack of tires to browse. We don't tow or do mechanical repair either. For a replacement, tire availability varies by size, so dispatch checks that a tire is available before anyone sets out. Anything beyond the tire itself, such as a bent wheel, is a job for a shop during its opening hours.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are you really open all night?",
        a: "Yes. We're open 24/7, 365 days a year. Call or send a request at any hour.",
      },
      {
        q: "Can I come to you for a tire?",
        a: "No. We don't operate a walk-in location. A driver comes to you.",
      },
      {
        q: "What if I need a new tire in the middle of the night?",
        a: "Give dispatch your vehicle and, if you can read it, the wheel size. We supply the tire and install it, {{price:tire-replacement}} plus the {{dispatchFee}} dispatch fee. Tire availability varies, so dispatch confirms one is available before a driver is sent.",
      },
      {
        q: "Do I need a spare for your tire service?",
        a: "A spare tire change uses the spare you already carry. Without one, ask for a replacement tire instead.",
      },
    ],
  },
  {
    slug: "flat-tire-at-night",
    kind: "problem",
    title: "Flat Tire at Night",
    h1: "Flat tire at night, and the shops are closed",
    metaDescription:
      "{{price:flat-tire-change}} + {{dispatchFee}} dispatch. Flat tire after dark and the shops closed? We're open 24/7 and a driver comes to you.",
    eyebrow: "Night flat",
    intro:
      "A flat after dark with every shop closed is a different problem from a flat at noon. You don't have to wait for morning, and you don't have to work on the car alone in the dark. We're open 24/7, and a driver comes to you.",
    service: "flat-tire-change",
    alsoServices: ["tire-replacement", "rim-lock-removal"],
    sections: [
      {
        heading: "Make sure drivers can see you",
        paragraphs: [
          "At night, other drivers notice a stopped car late. Hazard lights on, and pull as far from the lane as you can. Put reflective triangles behind the car if you carry them and can walk back safely.",
          "If you're in a live traffic lane, or anyone is in danger or feels unsafe, call 911 first.",
        ],
      },
      {
        heading: "Where to wait",
        paragraphs: [
          "In a parking lot or on a quiet street, wait inside the car with the doors locked. On a highway shoulder where you can't get well clear of the road, stay buckled in with the hazards on.",
          "If the spot makes you uneasy, say so when you call. Tell dispatch what you can see around you: a gas station sign, a storefront, an exit number. Street names and cross streets are easier to read after dark than house numbers.",
          "Keep your phone charged for the wait. If the car still runs, you can charge the phone from it, and turn the screen brightness down so the battery lasts.",
        ],
      },
      {
        heading: "Don't change it in the dark",
        paragraphs: [
          "Breaking loose lug nuts and jacking up a car on dark, uneven ground is a bad job to do by phone light. A driver changes the tire for {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee, using the spare you already carry. No usable spare? We supply a tire and install it, {{price:tire-replacement}}, once dispatch confirms one is available.",
          "Look at the tire if you can do it safely. A nail or a small hole in the tread, with the tire still holding some air, may be a plug or patch job at {{price:tire-repair-plug-patch}} plus the dispatch fee. Say so when you call.",
        ],
      },
      {
        heading: "Don't drive on it to find a shop",
        paragraphs: [
          "The shops are closed, and driving on a flat toward one that might be open ruins the tire and can damage the wheel. We text or call you when the driver is on the way. Our average arrival is 30 minutes; the actual time depends on your location and traffic.",
          "That text or call is also your cue. If you're alone in the dark, you'll know to expect someone before anyone walks up to the car.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can someone really come out at night?",
        a: "Yes. We're open 24/7, 365 days a year, and a driver comes to wherever the car is.",
      },
      {
        q: "Should I wait until morning to deal with it?",
        a: "You don't have to. Waiting in a dark spot for a shop to open isn't necessary, and driving on a flat to find one damages the wheel.",
      },
      {
        q: "Is it safe to change the tire myself at night?",
        a: "Only on flat, firm ground in a well-lit place away from traffic. On a shoulder or a dark road, let a driver do it.",
      },
      {
        q: "What if I'm alone and feel unsafe?",
        a: "If you feel you're in danger, call 911 first. Otherwise call us, give your exact location, and stay in the locked car until the driver arrives, if you're in a lot or on a quiet street.",
      },
    ],
  },
  {
    slug: "tire-blowout-help",
    kind: "problem",
    title: "Tire Blowout Help",
    h1: "Tire blowout: what to do now, and who to call",
    metaDescription:
      "{{price:tire-replacement}} + {{dispatchFee}} dispatch. Tire blew out? Get safe, then we supply a new tire and install it where you stopped.",
    eyebrow: "Blowout",
    intro:
      "A blowout is loud, sudden and over fast. This page covers the first few seconds, then what comes after: a tire that has blown out is usually torn open, so the car needs its spare or a new tire. We come to wherever you stopped.",
    service: "tire-replacement",
    alsoServices: ["flat-tire-change", "rim-lock-removal"],
    sections: [
      {
        heading: "In the first few seconds",
        paragraphs: [
          "Keep both hands on the wheel and hold the car steady. Ease off the gas instead of stamping on the brake, because hard braking can swing the car sideways. Let the speed fall away, then steer gently toward the shoulder with your hazard lights on.",
          "A blowout pulls the car toward the side with the bad tire, and the steering feels heavy and loose. The pull is strongest in the first second or two. Don't fight it with big, sudden corrections.",
        ],
      },
      {
        heading: "Once you've stopped",
        paragraphs: [
          "In a live traffic lane, or if anyone is hurt, call 911 first. Otherwise get everyone clear of the car and away from traffic.",
          "Once you're off the road, don't drive any further. The wheel is probably damaged already, and more miles on it make that worse.",
          "Take a breath before you dial. Shaking hands and a racing pulse are normal after a blowout. Give dispatch your location first, because that is the one thing we can't send help without.",
        ],
      },
      {
        heading: "What the tire needs now",
        paragraphs: [
          "A blown-out tire is usually torn open or in pieces, and that can't be plugged or patched. From here there are two ways forward. If you carry a usable spare, we put it on, {{price:flat-tire-change}}. If you don't, we supply a new tire and install it, {{price:tire-replacement}}. Either job adds a {{dispatchFee}} dispatch fee, once.",
          "Many spares are the small temporary kind, built for a short, slower drive. Plan on a proper tire soon after.",
          "If you think something struck the wheel or the car as the tire let go, mention it. We handle the tire itself, and we don't do mechanical repair, so anything beyond the tire is a job for a shop.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "A tire has to be available before a driver is dispatched, and availability varies by size, so dispatch checks first and gives you your total. These details speed that up:",
        ],
        list: [
          "Where you are: the road, the direction and the nearest exit or cross street.",
          "The year, make and model.",
          "Whether there's a usable spare in the car.",
          "The wheel size, if you can read it. A blown tire's sidewall may be shredded, so the sticker on the driver's door jamb is the safer place to look.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can a blown tire be patched?",
        a: "A plug or patch only works on a puncture in the tread. A blowout usually tears the tire open, which can't be safely repaired, so the car needs its spare or a replacement.",
      },
      {
        q: "How do I find my tire size if the sidewall is destroyed?",
        a: "Look at the sticker on the driver's door jamb, or at the matching tire on the other side of the same axle, if you can do so safely.",
      },
      {
        q: "Is it safe to drive a short way on a blown tire?",
        a: "No. Once you're off the road, stay put. A blown tire can come apart further, and the wheel takes the damage.",
      },
      {
        q: "Can you put the spare on after a blowout?",
        a: "Yes, if there's a usable spare in the car: {{price:flat-tire-change}} plus the {{dispatchFee}} dispatch fee. If there isn't, ask for tire replacement instead.",
      },
    ],
  },
  {
    slug: "mobile-tire-repair",
    kind: "problem",
    title: "Mobile Tire Repair",
    h1: "Mobile tire repair: plug or patch at your car",
    metaDescription:
      "{{price:tire-repair-plug-patch}} + {{dispatchFee}} dispatch. We repair a tread puncture with a plug or patch at your car, when the damage allows it.",
    eyebrow: "Tire repair",
    intro:
      "A puncture in the tread can often be repaired without a new tire or the spare. We come to the car and do a plug or patch repair on site. Call or send a request and tell us where the damage is, if you can see it.",
    service: "tire-repair-plug-patch",
    alsoServices: ["stuck-screw-in-tire", "flat-tire-change", "tire-replacement"],
    sections: [
      {
        heading: "When a repair works",
        paragraphs: [
          "A plug or patch is for a puncture in the tread, the flat part of the tire that meets the road. Damage in or near the sidewall can't be repaired safely, and neither can a hole beyond a certain size. In those cases the tire has to be replaced instead.",
          "A tire that has been driven on while flat often can't be repaired anymore, even when the original hole was in the tread, because the sidewall takes the damage. That is why stopping early matters more than the size of the hole.",
        ],
      },
      {
        heading: "Plug or patch, in plain terms",
        paragraphs: [
          "A plug fills the hole. A patch covers it on the inside of the tire. You don't have to choose between them: your driver looks at the damage before starting and tells you what's possible.",
          "When the driver arrives, the first step is to find the puncture and check it. If it can be repaired, that's the job you asked for. If it can't, the driver tells you before anything is done, so you know whether the next step is the spare or a new tire.",
        ],
      },
      {
        heading: "Keep a repairable tire repairable",
        paragraphs: ["Driving on a low tire is what turns a fixable puncture into a ruined one."],
        list: [
          "Stop driving as soon as you know the tire is losing air.",
          "Keep your hazard lights on if you've pulled over.",
          "Note where the damage is, if you can see it.",
          "If you have a gauge, check the pressure and tell dispatch the number.",
          "If a nail or screw is still in the tread, leave it there.",
        ],
      },
      {
        heading: "What it costs, and what if it can't be fixed",
        paragraphs: [
          "A repair is {{price:tire-repair-plug-patch}}, plus a {{dispatchFee}} dispatch fee charged once per job. If the tire turns out to be beyond repair, the next steps are the spare you carry ({{price:flat-tire-change}}) or a new tire we supply and install ({{price:tire-replacement}}). Dispatch confirms your total before a driver is sent.",
          "A repair keeps the tire you already have on the car, which is why it's worth asking for whenever the damage allows it.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I know if my tire can be plugged?",
        a: "A puncture in the tread usually can be. Anything in or near the sidewall can't. Tell dispatch where the damage is, and the driver confirms before starting.",
      },
      {
        q: "What's the difference between this and stuck screw removal?",
        a: "Stuck screw removal, {{price:stuck-screw-in-tire}} plus the {{dispatchFee}} dispatch fee, is for a nail or screw that is still in the tire: it takes the object out and makes the tire safe. A plug or patch repair is for a puncture in the tread when nothing is stuck in it.",
      },
      {
        q: "Can I drive on the tire while it leaks?",
        a: "Avoid it. A visibly low or flat tire shouldn't be driven any further. It damages the tire, and a repair may no longer be possible.",
      },
      {
        q: "What if the tire can't be repaired?",
        a: "Your driver tells you before starting. From there it's the spare you carry, {{price:flat-tire-change}}, or a new tire, {{price:tire-replacement}}. The dispatch fee is {{dispatchFee}}, charged once per job, and dispatch confirms your total.",
      },
    ],
  },
  {
    slug: "no-spare-tire",
    kind: "problem",
    title: "Flat Tire With No Spare",
    h1: "Flat tire and no spare? We bring the tire",
    metaDescription:
      "{{price:tire-replacement}} + {{dispatchFee}} dispatch. No spare in the car? We supply a tire and install it where you're parked. Open 24/7.",
    eyebrow: "No spare",
    intro:
      "A flat with no spare feels like the end of the road, but it isn't: we supply a tire and install it where the car is parked, so you don't need a spare to get moving again. Call or send a request and say there's no usable spare.",
    service: "tire-replacement",
    alsoServices: ["flat-tire-change", "rim-lock-removal"],
    sections: [
      {
        heading: "Look once more before you give up on the spare",
        paragraphs: [
          "Plenty of cars carry a spare you haven't seen in years. It's often under the trunk floor or the cargo mat, or hung underneath the vehicle. Some newer cars have no spare at all, only an air pump and a sealant kit. Treat it as no spare if:",
        ],
        list: [
          "There's no spare wheel anywhere in the car.",
          "The spare is flat, badly worn or damaged.",
          "All you have is a sealant and inflator kit. Those are a stopgap for small tread punctures, not a replacement for the tire.",
        ],
      },
      {
        heading: "What we do when there's no spare",
        paragraphs: [
          "A flat tire change puts on the spare you already carry, so with no usable spare you want tire replacement. We supply the tire and install it on site, {{price:tire-replacement}}, plus the {{dispatchFee}} dispatch fee.",
          "You don't have to find or buy a tire first. Tire availability varies by size, so dispatch confirms a tire is available, and your total, before a driver is sent.",
        ],
      },
      {
        heading: "What to have ready",
        paragraphs: ["A few details let dispatch confirm a tire quickly:"],
        list: [
          "The year, make and model.",
          "The wheel size, read off the flat tire's sidewall or the sticker on the driver's door jamb.",
          "Where the car is, with a cross street or landmark.",
          "Whether the wheels have locking nuts, and whether you have the key. If the key is gone, the lock has to come off before the wheel can: {{price:rim-lock-removal}} plus the dispatch fee.",
        ],
      },
      {
        heading: "When a repair could save the tire",
        paragraphs: [
          "If the damage is a small puncture in the tread, a plug or patch is {{price:tire-repair-plug-patch}}, plus the {{dispatchFee}} dispatch fee, and needs neither a spare nor a new tire. Say where the damage is when you request, and the driver checks before starting.",
          "If your flat is a slow leak rather than a full flat, say so. A tire that still holds air has a better chance of being repaired and kept than one that has been driven on flat.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I have to buy the tire first?",
        a: "No. We supply the tire. The price covers the tire and installing it, so you don't need to source one yourself.",
      },
      {
        q: "What if you don't have my tire size?",
        a: "Tire availability varies. Dispatch confirms a tire is available before a driver is sent, so you'll know before anyone is on the way.",
      },
      {
        q: "Is it cheaper if I do have a spare?",
        a: "Usually. A spare tire change is {{price:flat-tire-change}} plus the {{dispatchFee}} dispatch fee, since you already have the tire.",
      },
      {
        q: "My car only has a sealant kit. Can you still help?",
        a: "Yes. With no usable spare, ask for tire replacement. Give dispatch the wheel size and they confirm a tire is available.",
      },
    ],
  },
  {
    slug: "mobile-tire-replacement",
    kind: "problem",
    title: "Mobile Tire Replacement",
    h1: "Mobile tire replacement, installed at your car",
    metaDescription:
      "{{price:tire-replacement}} + {{dispatchFee}} dispatch. A new tire, supplied by TRA and installed at your location. Tire availability varies.",
    eyebrow: "New tire",
    intro:
      "We supply a tire and install it where your car is parked, whether that's your driveway, a work lot or the roadside. You don't have to find a tire, load a wheel into the trunk or sit in a waiting room. Call or send a request.",
    service: "tire-replacement",
    alsoServices: ["flat-tire-change", "tire-repair-plug-patch"],
    sections: [
      {
        heading: "When a tire has to be replaced",
        paragraphs: [
          "Replacement is for a tire that can't be repaired safely. A small puncture in the tread is a different job, a plug or patch at {{price:tire-repair-plug-patch}} plus the dispatch fee.",
          "Signs a tire is past repair: a bulge or a tear in the sidewall, a tire in pieces after a blowout, a hole bigger than a plug can close, or a tire that has been driven on while flat. If you're not sure, ask for a repair first. The driver checks the tire before starting and tells you which it is.",
        ],
      },
      {
        heading: "What the price covers",
        paragraphs: [
          "{{price:tire-replacement}} covers the tire, supplied by TRA, and installing it. The {{dispatchFee}} dispatch fee is added once, for sending the driver to you.",
          "Availability varies by tire, so dispatch confirms it, along with your total, before a driver heads out. If more than one tire is damaged, say so in your request.",
          "Nothing beyond the tire is covered, because we don't do mechanical repair. Whichever job you choose, the price for your vehicle is confirmed before anyone is sent.",
        ],
      },
      {
        heading: "Set the car up for the install",
        paragraphs: ["A little preparation helps the visit go smoothly:"],
        list: [
          "If you can, park on level ground with room around the wheel. If the car is in a garage or a tight space, say so when you request.",
          "Read the wheel size off the sidewall or the sticker on the driver's door jamb.",
          "Find the wheel lock key if your wheels have locking nuts. If it's missing, removal is {{price:rim-lock-removal}} plus the dispatch fee.",
          "Keep your phone nearby: we text or call when the driver is on the way.",
        ],
      },
      {
        heading: "Replacement or the spare?",
        paragraphs: [
          "If your car carries a usable spare, swapping it on is usually the cheaper way to get moving: {{price:flat-tire-change}} plus the dispatch fee. A new tire is the right call when there's no usable spare.",
          "If the tire is only leaking slowly and the damage is in the tread, ask about a repair first. Keeping the tire you have costs less than a new one.",
        ],
      },
    ],
    faqs: [
      {
        q: "Where do you install the tire?",
        a: "Where the car is: a driveway, a parking lot, a garage or the roadside. There's no shop to go to.",
      },
      {
        q: "Do I need to bring or buy a tire?",
        a: "No. The tire is supplied by us, and the price covers installing it.",
      },
      {
        q: "What do you need from me?",
        a: "Your location, the vehicle's year, make and model, and the wheel size if you can read it. Dispatch confirms a tire is available, and your total, before a driver is sent.",
      },
      {
        q: "How much does a tire replacement cost?",
        a: "{{price:tire-replacement}} for the tire and installing it, plus the {{dispatchFee}} dispatch fee, charged once per job.",
      },
    ],
  },
  {
    slug: "nail-in-tire-help",
    kind: "problem",
    title: "Nail or Screw in Tire",
    h1: "Nail or screw in your tire: leave it, call us",
    metaDescription:
      "{{price:stuck-screw-in-tire}} + {{dispatchFee}} dispatch. Nail or screw in your tire? Don't pull it. We remove it and make the tire safe.",
    eyebrow: "Nail in tire",
    intro:
      "If you can see a nail or screw head in the tread, don't pull it out. Call or send a request and a driver removes it and makes the tire safe at your car, so a slow leak doesn't turn into a flat.",
    service: "stuck-screw-in-tire",
    alsoServices: ["tire-repair-plug-patch", "flat-tire-change", "tire-replacement"],
    sections: [
      {
        heading: "Why you should leave it in",
        paragraphs: [
          "While it's lodged in the tread, the nail or screw is partly sealing the hole it made. Pull it out with no plug or patch ready and the air usually goes quickly, which turns a slow leak into a flat on the spot.",
          "A nail or screw in the tread is one of the few flat-tire situations you can catch early. Plenty of drivers find one when the tire pressure warning comes on, or when one tire looks lower than the others. If you've spotted the head, you probably have time to call before the air runs out.",
        ],
      },
      {
        heading: "Until we get there",
        paragraphs: ["A few small things keep the tire repairable:"],
        list: [
          "Check the pressure with a gauge, if you have one.",
          "Avoid long drives, and stop if the tire starts dropping.",
          "Don't pull, twist or tap the object.",
          "Keep your hazard lights on if you've stopped at the roadside.",
          "Note which tire it is and roughly where in the tread.",
          "If the pressure is dropping fast, treat it as a flat: stay put and ask for help instead of driving on it.",
          "No gauge? Look at the tire. If it sits lower than the others, assume it's leaking.",
        ],
      },
      {
        heading: "The job and what it costs",
        paragraphs: [
          "Stuck screw removal is {{price:stuck-screw-in-tire}}, plus a {{dispatchFee}} dispatch fee charged once. It covers removing the screw or nail and making the tire safe.",
          "Usually the tire can still be repaired if the object is in the tread. If it's in or near the sidewall, that damage can't be safely repaired, and your driver tells you on site if a replacement is needed instead.",
        ],
      },
      {
        heading: "If the tire has already gone flat",
        paragraphs: [
          "A tire that is already flat is a different request. With a usable spare, a flat tire change is {{price:flat-tire-change}}. A puncture in the tread with nothing stuck in it can be plugged or patched for {{price:tire-repair-plug-patch}}. Dispatch gives you the price for your vehicle before anyone is sent.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I pull the nail out myself?",
        a: "No. While it's in the tread it's partly sealing the hole. Pulling it without a plug or patch ready usually turns a slow leak into a flat.",
      },
      {
        q: "Can I drive to a shop with a nail in the tire?",
        a: "If the tire is holding pressure, a short, careful drive may be possible, but long drives are a bad idea. Stop if it starts losing air.",
      },
      {
        q: "Will the tire always be repairable afterwards?",
        a: "Usually, if the object is in the tread. Damage in or near the sidewall can't be safely repaired, and your driver tells you on site if the tire needs replacing.",
      },
      {
        q: "How much does it cost?",
        a: "{{price:stuck-screw-in-tire}} for removing the screw or nail and making the tire safe, plus the {{dispatchFee}} dispatch fee, charged once per job.",
      },
    ],
  },
  {
    slug: "car-wont-start",
    kind: "problem",
    title: "Car Won't Start",
    h1: "Car won't start? Find out if it's the battery",
    metaDescription:
      "{{price:jump-start}} + {{dispatchFee}} dispatch. Car won't start? If it's a dead battery, a driver jump starts it where it's parked, 24/7.",
    eyebrow: "Won't start",
    intro:
      "A car that won't start has more than one possible cause, and a jump start fixes only one of them. This page helps you tell whether it's the battery. If it is, a driver comes and gets the engine running where the car is parked.",
    service: "jump-start",
    alsoServices: ["battery-replacement", "lockout"],
    sections: [
      {
        heading: "Two minutes of checks first",
        paragraphs: ["Rule out the simple things before you call:"],
        list: [
          "Automatic transmission: make sure the gear selector is in Park or Neutral.",
          "Push-button start: press the brake firmly while you press the button.",
          "Smart key: try a spare fob, in case this one's battery is weak.",
          "Steering wheel locked: turn the wheel left and right while you turn the key.",
          "Fuel gauge: an empty tank looks a lot like a no-start.",
        ],
      },
      {
        heading: "What the car is telling you",
        paragraphs: ["The sound it makes points at the cause."],
        list: [
          "Rapid clicking, or dim lights that go out when you try: usually a weak or dead battery. A jump start is the fix.",
          "A slow, dragging crank: a battery low on charge.",
          "A dark dashboard and no sound at all: usually a drained battery.",
          "The engine turns over at normal speed but never catches: not a battery problem. A jump start won't help.",
        ],
      },
      {
        heading: "What we can and can't do",
        paragraphs: [
          "We jump start the battery. We don't tow, we don't deliver fuel, and we don't do mechanical repair, so if the engine cranks but won't fire, or the tank is empty, you need a mechanic, a tow service or fuel from elsewhere.",
          "A jump start is {{price:jump-start}}, plus the {{dispatchFee}} dispatch fee, charged once per job. If the battery won't hold a charge afterward, the driver can advise whether it needs replacing. Battery replacement is done on site too, {{price:battery-replacement}} for eligible vehicles and batteries.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Describe what you saw and heard: clicking, dim lights, a dark dashboard. Give your exact location and the vehicle's year, make and model, and say you think the battery is the cause, since that is what a jump start fixes.",
          "If you hear clicking, say how fast it is. Rapid clicking points at a weak battery. A single loud click with bright lights points elsewhere, and a jump may not help. Either way, it is better to tell dispatch than to guess.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I know it's the battery and not the starter?",
        a: "Dim lights, clicking or a dark dashboard when you try to start point to the battery. If the lights stay bright and the car clicks once, or the engine cranks but never catches, a jump may not help. Tell dispatch what you heard.",
      },
      {
        q: "What if the jump doesn't start the car?",
        a: "Then the problem is probably not a drained battery. We don't do mechanical repair or tow, so you'd need a mechanic or a tow service.",
      },
      {
        q: "My car ran out of gas. Can you help?",
        a: "No. We don't deliver fuel.",
      },
      {
        q: "Will I need a new battery?",
        a: "Not always. A jump start is for a drained battery. If it won't hold a charge afterward, the driver can advise whether to replace it.",
      },
    ],
  },
  {
    slug: "dead-battery-help",
    kind: "problem",
    title: "Dead Battery Help",
    h1: "Dead battery help: get it running, then decide",
    metaDescription:
      "{{price:jump-start}} + {{dispatchFee}} dispatch. Dead battery? We jump start it where you're parked, and a driver can advise if it needs replacing.",
    eyebrow: "Dead battery",
    intro:
      "A dead battery is a common reason a car won't start, and it's usually fixable on the spot. A driver comes with jump equipment, gets the engine running, and can advise whether the battery needs replacing. Call or send a request.",
    service: "jump-start",
    alsoServices: ["battery-replacement", "lockout"],
    sections: [
      {
        heading: "While you wait",
        paragraphs: ["A few things help the jump go quickly:"],
        list: [
          "Turn off the lights, radio, A/C and anything plugged in, so nothing else drains the battery.",
          "Pop the hood if it's safe and the battery is under it.",
          "Wait somewhere well lit and visible if it's dark.",
          "Stop trying to start it. Every attempt pulls a little more out of what's left in the battery.",
          "Check where the battery is. On some cars it's in the trunk or under a seat, not under the hood, and the owner's manual shows the spot.",
        ],
      },
      {
        heading: "Why it died matters",
        paragraphs: [
          "Lights left on, extreme heat or cold, and an aging battery are the usual causes. Lights left on is a one-time mistake, and a jump usually settles it. Heat and age are different: a battery that's wearing out will die again. A long Texas summer is hard on an old one.",
          "A door left ajar, a dome light or a plugged-in accessory can drain a battery overnight without anyone noticing. If you can't think of a reason it died, tell the driver. Not knowing why is a reason to ask about replacing it.",
        ],
      },
      {
        heading: "After the jump",
        paragraphs: [
          "Don't shut the car off right away. Drive it instead of idling in the lot so it can put some charge back, and know that a short trip may not fully recharge a weak battery.",
          "A battery that has already failed a jump start usually needs replacing rather than another jump. We bring a new one and install it on site: {{price:battery-replacement}} for eligible vehicles and batteries, plus a {{dispatchFee}} dispatch fee.",
        ],
      },
      {
        heading: "What the jump costs",
        paragraphs: [
          "A jump start is {{price:jump-start}}, plus the {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the price for your vehicle before a driver is sent.",
          "When you call, give your exact location and the vehicle's year, make and model, and say you think the battery is dead. If it's a hybrid or an electric car, say that too, so the right equipment comes.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I jump it again if it dies tomorrow?",
        a: "If it dies again after a jump, the battery probably isn't holding a charge, and that is a replacement job rather than a second jump.",
      },
      {
        q: "Can I turn the car off right after the jump?",
        a: "You can, but it may not restart. Drive it rather than idling, because a weak battery needs more than a few minutes of charge.",
      },
      {
        q: "Do you jump start hybrids and electric cars?",
        a: "Add the vehicle type and any details to your request so we can dispatch the right equipment. On an electric car the 12-volt battery is the one that gets the jump; its main battery needs a charger.",
      },
      {
        q: "Can the driver tell me if the battery is bad?",
        a: "Your driver can advise whether the battery needs replacement. Let dispatch know if you'd like that discussed on site.",
      },
    ],
  },
  {
    slug: "jump-start-near-me",
    kind: "problem",
    title: "Jump Start Near Me",
    h1: "Jump start near you in Dallas–Fort Worth",
    metaDescription:
      "{{price:jump-start}} + {{dispatchFee}} dispatch. A driver brings the jump equipment to your car, 24/7. No other car or cables needed.",
    eyebrow: "Jump start",
    intro:
      "Need a jump and nobody to ask? A driver comes to your car with the equipment, so you don't need cables or a second car. Call or send a request and we send a driver from our local Dallas–Fort Worth dispatch.",
    service: "jump-start",
    alsoServices: ["battery-replacement", "flat-tire-change"],
    sections: [
      {
        heading: "Local dispatch, open any hour",
        paragraphs: [
          "Dispatch is local to Dallas–Fort Worth, not an out-of-state call center, and we're open 24/7, 365 days a year. Average arrival is 30 minutes; the real time depends on where you are and the traffic. We text or call you when the driver is on the way.",
          "We don't have a walk-in location, so there's nothing to drive to. Near me, here, means a driver sent to wherever you are.",
          "Traffic and weather change how long any drive takes, which is why the 30 minutes is an average, not a promise for your call.",
        ],
      },
      {
        heading: "Anywhere the car is sitting",
        paragraphs: [
          "Your driveway, an apartment lot, a work garage, a shoulder. If it's a tight spot, tell dispatch, and say whether there's room to open the doors and the hood so the driver knows what to expect. In a parking garage, give the level and the nearest exit as well as the address.",
          "There are few steps. You tell dispatch where the car is, dispatch confirms the price, and a driver arrives with the jump equipment and gets the engine running. The driver can also advise whether the battery needs replacing. Once it's running, don't switch the car off right away.",
        ],
      },
      {
        heading: "What to have ready",
        paragraphs: ["These details are what dispatch needs:"],
        list: [
          "Your exact location.",
          "The vehicle's year, make and model.",
          "What happened: clicking, dim lights, a dark dashboard, lights left on.",
          "The vehicle type, if it's a hybrid, an electric car or a semi truck.",
          "Whether the hood opens normally. A hood that's stuck or a battery that isn't under it is worth knowing about before the driver arrives.",
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          "A jump start is {{price:jump-start}}, labor included, plus a {{dispatchFee}} dispatch fee charged once per job. A semi truck or 18-wheeler is {{price2:jump-start}} plus the fee; choose that vehicle type when you request.",
          "There's no membership and no account. You don't need to have signed up for anything before you call.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need jumper cables or another car?",
        a: "No. The driver brings the jump equipment.",
      },
      {
        q: "What if the jump doesn't hold?",
        a: "If the battery won't hold a charge, the driver can advise whether it needs replacing. A new battery installed on site is {{price:battery-replacement}} for eligible vehicles and batteries, plus the dispatch fee.",
      },
      {
        q: "Do you jump start at night?",
        a: "Yes. We're open 24/7, 365 days a year.",
      },
      {
        q: "What areas do you cover?",
        a: "We dispatch across the Dallas–Fort Worth Metroplex. Give dispatch your exact location when you call or send a request.",
      },
    ],
  },
  {
    slug: "mobile-battery-replacement",
    kind: "problem",
    title: "Mobile Battery Replacement",
    h1: "Car battery replacement at your location",
    metaDescription:
      "{{price:battery-replacement}} + {{dispatchFee}} dispatch. A new car battery, installed where you're parked, for eligible vehicles and batteries.",
    eyebrow: "New battery",
    intro:
      "We bring a new battery to your car and install it on site, in your driveway, at work or wherever it stopped. Give dispatch the year, make and model, and they confirm the battery is compatible, and your total, before a driver is sent.",
    service: "battery-replacement",
    alsoServices: ["jump-start", "lockout"],
    sections: [
      {
        heading: "Replace it, or jump it again?",
        paragraphs: [
          "A battery that won't hold a charge, or one that has already failed a jump start, usually needs replacing rather than another jump. If you're not sure which you need, ask for a jump start first. Your driver can advise on site whether a replacement turns out to be needed.",
          "Signs a battery is on its way out: slow cranking, dim headlights at idle, a battery warning light, or a car that needed a jump recently and is asking for another. Batteries wear out with age, and the heat speeds that up.",
        ],
      },
      {
        heading: "The price and what it covers",
        paragraphs: [
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, and it covers the new battery and installing it. Battery pricing varies by vehicle and battery type. With the {{dispatchFee}} dispatch fee added once, the expected total is {{total:battery-replacement}}.",
          "A replacement battery carries a 1-year warranty. Keep your invoice for warranty service.",
          "The price is for the battery and its installation. It doesn't cover other work on the car, since we don't do mechanical repair, so a problem beyond the battery is a job for a shop.",
        ],
      },
      {
        heading: "What dispatch will ask",
        paragraphs: ["Three things let dispatch confirm the right battery:"],
        list: [
          "The year, make and model.",
          "Your VIN, if you can reach it. It confirms the exact battery, but it's optional.",
          "Where the car is parked, and whether there is room to open the doors and the hood.",
        ],
      },
      {
        heading: "Why the price is a range",
        paragraphs: [
          "On some cars the battery sits under the hood and comes out in minutes. On others it's under the rear seat, in the trunk or behind a panel, and trim or a seat has to come out first. That's part of why battery pricing varies by vehicle.",
          "You don't need tools or a garage. You need the car, the details above, and a phone that can take a text or a call when the driver is on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is installation included in the price?",
        a: "Yes. For eligible vehicles and batteries, {{price:battery-replacement}} covers the battery and installing it. The {{dispatchFee}} dispatch fee is separate, charged once per job.",
      },
      {
        q: "Is there a warranty?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice for warranty service.",
      },
      {
        q: "What does eligible vehicles and batteries mean?",
        a: "Battery pricing varies by vehicle and battery type. Dispatch confirms the battery is compatible with your vehicle, and your total cost, before a driver is sent.",
      },
      {
        q: "What if my car only needs a jump?",
        a: "Ask for a jump start instead, {{price:jump-start}} plus the dispatch fee. Your driver can advise on site if a replacement turns out to be needed.",
      },
    ],
  },
  {
    slug: "24-hour-battery-service",
    kind: "problem",
    title: "24 Hour Car Battery Service",
    h1: "24-hour car battery service, any time of night",
    metaDescription:
      "{{price:battery-replacement}} + {{dispatchFee}} dispatch. 24-hour car battery service: a new battery installed at your car, any hour.",
    eyebrow: "24/7 battery",
    intro:
      "Batteries don't wait for business hours. We're open 24/7, 365 days a year, and a driver comes to the car with a new battery and installs it, or jump starts it if that will do. Call or send a request at any hour.",
    service: "battery-replacement",
    alsoServices: ["jump-start", "flat-tire-change"],
    sections: [
      {
        heading: "Dead before sunrise, or after a late shift",
        paragraphs: [
          "Overnight is when a weak battery gets found out: the car that won't start before an early shift, or after a late one, or in a parking lot long after everyone else has gone. You don't have to wait for morning, and you don't have to find a store that's open.",
          "Dallas–Fort Worth summers are hard on batteries, and the first real cold snap shows up the ones that were already weak. Neither waits for a convenient hour.",
        ],
      },
      {
        heading: "Jump or replace, decided quickly",
        paragraphs: [
          "Pick whichever fits what you know. Each job adds a {{dispatchFee}} dispatch fee, once. A jump costs less, and it's the right call when the battery is healthy and something simply drained it.",
        ],
        list: [
          "The battery is fairly new and the lights were left on: ask for a jump start, {{price:jump-start}}.",
          "The battery is old, slow to crank, or has died before: ask for a replacement, {{price:battery-replacement}}, for eligible vehicles and batteries.",
          "Not sure: ask for the jump. The driver can advise on site whether a replacement is needed.",
        ],
      },
      {
        heading: "What to have ready at any hour",
        paragraphs: [
          "The year, make and model, where the car is, and the VIN if you can reach it. Dispatch confirms the battery is compatible, and your total, before a driver is sent. We text or call when the driver is on the way. Average arrival is 30 minutes, depending on location and traffic.",
          "While you wait, turn off the lights and accessories, and stay somewhere well lit and visible. After dark, keep the doors locked until you know the driver has arrived.",
        ],
      },
      {
        heading: "Warranty, and what's not here",
        paragraphs: [
          "Every replacement battery comes with a 1-year warranty. Keep your invoice, because a warranty claim is checked against it.",
          "There's no battery shop to visit at 3 a.m. and no counter to walk up to. The battery comes to the car, and we don't do mechanical repair, so a car that won't start for some other reason needs a shop.",
        ],
      },
    ],
    faqs: [
      {
        q: "Are you open 24 hours a day?",
        a: "Yes. We're open 24/7, 365 days a year.",
      },
      {
        q: "Is a jump start cheaper than a replacement?",
        a: "Yes: {{price:jump-start}} against {{price:battery-replacement}}, each plus the {{dispatchFee}} dispatch fee. But a jump only helps if the battery can hold a charge.",
      },
      {
        q: "I'm not sure what battery my car takes. Is that a problem?",
        a: "No. Give dispatch the year, make and model, and the VIN if you can reach it. They confirm which battery is compatible before a driver is sent.",
      },
      {
        q: "How do I know the battery is the problem?",
        a: "Clicking, slow cranking, dim lights or a dark dashboard when you try to start usually point to the battery. If the engine cranks normally but won't catch, it isn't the battery.",
      },
    ],
  },
  {
    slug: "locked-keys-in-car",
    kind: "problem",
    title: "Locked Keys in Car",
    h1: "Locked your keys in the car? We'll get you in",
    metaDescription:
      "{{price:lockout}} + {{dispatchFee}} dispatch. Keys locked in your car? A driver opens it with non-destructive entry whenever possible, 24/7.",
    eyebrow: "Lockout",
    intro:
      "You shut the door and the keys are on the seat. A driver comes to the car and gets it open, using non-destructive entry methods whenever possible, so you don't end up with a broken window. Call or send a request.",
    service: "lockout",
    alsoServices: ["jump-start", "battery-replacement"],
    sections: [
      {
        heading: "Check these before you call",
        paragraphs: [
          "A jammed door or a dead fob can leave you outside the car too, so tell dispatch exactly what you're facing. Skip the coat hanger and the shoelace: they scratch paint, tear door seals and can set off the alarm. First, a few quick checks:",
        ],
        list: [
          "Try every door, and the trunk or hatch, in case one isn't locked.",
          "Make sure the keys really are inside, and not in a coat or back where you last stopped.",
          "If someone can bring a spare key quickly, that may be the fastest way in.",
          "If your car has a phone app that unlocks it, try that before you call.",
          "If the engine is running, tell dispatch.",
        ],
      },
      {
        heading: "Proving the car is yours",
        paragraphs: [
          "The driver confirms the car is yours before opening anything, for everyone's safety. Have your ID ready, or another way to show the vehicle is yours. Dispatch will also ask for the year, make and model, and where the car is parked.",
          "The goal is to get in without leaving a mark. That is why drivers reach for non-destructive entry first, rather than breaking a window.",
        ],
      },
      {
        heading: "Keys in the cabin or in the trunk",
        paragraphs: [
          "Opening the vehicle so you can reach keys in the cabin is {{price:lockout}}, plus a {{dispatchFee}} dispatch fee charged once. If the keys are locked in the trunk, that is a separate job at {{price2:lockout}} plus the fee, so tell dispatch which one you have.",
          "The two prices differ because they are two different jobs. Trunk access takes longer and needs different tools than opening a door, and the price matches the work. Dispatch confirms the figure for your vehicle before a driver is sent.",
        ],
      },
      {
        heading: "If anyone is inside the car",
        paragraphs: [
          "A child or pet locked inside is an emergency. If they're in danger, call 911 first, before you call us. For anything else, tell dispatch what you can see and where the car is parked, and we text or call when the driver is on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will opening the door damage my car?",
        a: "Drivers use non-destructive entry methods whenever possible.",
      },
      {
        q: "What do I need to show the driver?",
        a: "ID, or another way to prove the vehicle is yours. For everyone's safety the driver confirms ownership before unlocking anything.",
      },
      {
        q: "My key fob battery died. Is that a lockout?",
        a: "A dead fob can leave you stuck, yes. Tell dispatch what's happening and what the car does when you use the door handle or the fob.",
      },
      {
        q: "A child or pet is locked inside. What should I do?",
        a: "If they're in danger, call 911 first. Don't wait for a driver.",
      },
      {
        q: "Why is there a dispatch fee on top of the price?",
        a: "It covers sending a technician to your location. It's {{dispatchFee}}, charged once per job.",
      },
    ],
  },
  {
    slug: "keys-locked-in-trunk",
    kind: "problem",
    title: "Keys Locked in the Trunk",
    h1: "Keys locked in the trunk: what it takes",
    metaDescription:
      "{{price2:lockout}} + {{dispatchFee}} dispatch. Keys locked in the trunk are a separate job from a door lockout. We come to your car, 24/7.",
    eyebrow: "Trunk lockout",
    intro:
      "Keys locked in the trunk are a different job from keys left on the front seat. It takes longer and needs different tools, so it has its own price. Call or send a request, say the keys are in the trunk, and a driver comes to the car.",
    service: "lockout",
    alsoServices: ["jump-start", "flat-tire-change"],
    sections: [
      {
        heading: "Why it's a separate job",
        paragraphs: [
          "Opening a door gets you into the cabin. Getting into a trunk is another job: it takes longer and needs different tools. That's why keys locked in the trunk are {{price2:lockout}}, plus a {{dispatchFee}} dispatch fee, instead of the {{price:lockout}} for opening the vehicle.",
          "Say trunk in your request, not just lockout, so the right price is on the table from the start. Dispatch confirms it before a driver is sent.",
        ],
      },
      {
        heading: "Look for a way in from inside",
        paragraphs: [
          "If the cabin isn't locked, you may not need us. Look for a trunk release lever near the driver's seat or inside the glove box, or for a rear seat that folds down into the trunk. If one of those works, you're done.",
          "Driving a hatchback or an SUV? The cargo area is usually open to the cabin, so keys left in the back may be a standard lockout rather than a trunk job. Tell dispatch what you drive, and they confirm the job and its price.",
          "Don't pry at the trunk lid with a screwdriver or a coat hanger. You'll scratch the paint and can bend the latch, which turns a simple job into a harder one.",
        ],
      },
      {
        heading: "If the doors are locked too",
        paragraphs: [
          "Tell dispatch whether the doors are locked as well as the trunk, and whether there's any other key, so the driver comes prepared. Dispatch confirms the job and the price before a driver is sent.",
          "Before opening anything, the driver confirms the car is yours. Bring ID, or another way to show the vehicle is yours.",
          "If the car locked itself with the keys in the trunk, say that. It tells dispatch the doors are probably locked too, and it explains why you're standing outside a car with no way in.",
        ],
      },
      {
        heading: "What to have ready",
        paragraphs: ["These details cover it:"],
        list: [
          "Where the car is parked.",
          "The year, make and model.",
          "Whether the doors are locked too.",
          "Your ID.",
          "Whether anyone or any pet is inside the car. If they're in danger, call 911 first.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why does the trunk cost more than a door?",
        a: "Trunk access takes longer and needs different tools, so it's priced separately: {{price2:lockout}} plus the {{dispatchFee}} dispatch fee.",
      },
      {
        q: "Can't you just open the door and grab them?",
        a: "Not always. Opening the cabin doesn't necessarily open the trunk. Describe your car, and dispatch confirms the job and the price before a driver is sent.",
      },
      {
        q: "Will it damage the trunk lock?",
        a: "Drivers use non-destructive entry methods whenever possible.",
      },
      {
        q: "What if the keys are in the cabin, not the trunk?",
        a: "That's the standard lockout, {{price:lockout}} plus the dispatch fee. Tell dispatch which one it is.",
      },
    ],
  },
  {
    slug: "emergency-car-lockout",
    kind: "problem",
    title: "Emergency Car Lockout",
    h1: "Emergency car lockout: what to do right now",
    metaDescription:
      "{{price:lockout}} + {{dispatchFee}} dispatch. Locked out and it can't wait? Call 911 if anyone's in danger, then call us for entry, 24/7.",
    eyebrow: "Emergency lockout",
    intro:
      "Some lockouts can't wait: a child or pet inside, a car left running, a dark lot, a roadside. This page is for those. Call 911 first if anyone is in danger, then call or send a request and a driver comes to open the car.",
    service: "lockout",
    alsoServices: ["battery-replacement", "jump-start"],
    sections: [
      {
        heading: "Call 911 first if anyone is in danger",
        paragraphs: [
          "A child or pet locked in a car is an emergency, especially in Texas heat, where the inside of a car gets dangerous fast. If they're in danger, call 911 first. Don't wait for us.",
          "Tell the 911 operator the make, color and location of the car, and stay with it. Calling first is what gets help moving; talking to someone through the glass does not.",
        ],
      },
      {
        heading: "If you're in an unsafe place",
        paragraphs: [
          "Locked out on a roadside, in a dark lot, or somewhere that doesn't feel right? Move yourself first, to a lit store or a gas station with people around. The car can wait; you shouldn't wait beside it. Then call us, and tell dispatch where the car is and where you're waiting.",
          "Text a friend or family member where you are while you wait, and keep your phone charged. If you're alone at night, being findable matters more than being next to the car.",
        ],
      },
      {
        heading: "What to have ready",
        paragraphs: [
          "The driver confirms the car is yours before opening it, so have ID in hand. If your wallet is locked inside, tell dispatch when you call: the driver needs ID or another way to show the vehicle is yours.",
          "Say if the engine is running. Locking the keys in with the engine on is an easy way to end up here, and the car keeps running while you stand outside it. Make sure it isn't blocking a lane or a driveway, and if it's in a closed garage, stay out of the exhaust and call 911.",
        ],
      },
      {
        heading: "How fast, and what it costs",
        paragraphs: [
          "We're open 24/7, 365 days a year. Our average arrival is 30 minutes, though the real time depends on your location and traffic, and we text or call when the driver is on the way.",
          "Opening the vehicle is {{price:lockout}}, plus the {{dispatchFee}} dispatch fee, charged once. Keys locked in the trunk are a different job at {{price2:lockout}}. Dispatch confirms your price before a driver is sent.",
        ],
      },
    ],
    faqs: [
      {
        q: "A child is locked in the car. What do I do?",
        a: "Call 911 immediately. Don't wait for a driver to reach you.",
      },
      {
        q: "How fast can you get here?",
        a: "Our average arrival is 30 minutes. The actual time depends on your location and traffic, and we text or call you when the driver is on the way.",
      },
      {
        q: "What if my ID is locked inside?",
        a: "Tell dispatch when you call. The driver confirms the vehicle is yours before opening it, using ID or another way to prove it.",
      },
      {
        q: "Is it safe to wait by the car?",
        a: "If you feel unsafe, don't. Go somewhere lit with people around, and tell dispatch where the car is and where you'll be.",
      },
    ],
  },
  {
    slug: "wheel-lock-key-removal",
    kind: "problem",
    title: "Wheel Lock Key Removal",
    h1: "Lost your wheel lock key? We take the lock off",
    metaDescription:
      "{{price:rim-lock-removal}} + {{dispatchFee}} dispatch. Wheel lock key lost or rounded off? We remove the locking nut so the wheel can come off.",
    eyebrow: "Wheel lock",
    intro:
      "A locking lug nut needs its own key, and the key goes missing right when you need the wheel off. We remove the wheel lock at your car so the wheel can come off. Call or send a request.",
    service: "rim-lock-removal",
    alsoServices: ["flat-tire-change", "tire-replacement"],
    sections: [
      {
        heading: "Look for the key first",
        paragraphs: [
          "Before you call, check the places it likes to hide: the glove box, the trunk well, the spare tire compartment, the door pockets and the center console.",
          "Once the wheel is back on, look for a card or a code that came with the wheel locks. Some sets carry a code on the key or a card, and the maker or a dealer can order a replacement from it. That won't help today, but it makes the next flat easier.",
        ],
      },
      {
        heading: "A key that won't turn is a missing key",
        paragraphs: [
          "A key that has rounded off, snapped or slips in the lock nut is the same problem as a lost one. If it slips, stop turning it. Forcing it can strip the pattern further.",
          "Don't hammer a socket onto the lock or grip it with pliers either. That rounds the nut and can scar the wheel around it.",
        ],
      },
      {
        heading: "What removal does",
        paragraphs: [
          "Without the key, the wheel can't come off at all. A flat can't be changed, even with a perfectly good spare in the trunk, until the lock is dealt with.",
          "The locking nut itself is sacrificed in the process. That can't be avoided. Your driver works to protect the wheel and the surrounding studs.",
          "Wheel lock removal is {{price:rim-lock-removal}}, plus the {{dispatchFee}} dispatch fee charged once per job. It covers removing the lock so the wheel can come off. It doesn't include changing the tire.",
          "Tell dispatch which wheel needs to come off. Locking sets usually put one lock nut on each wheel, so the wheel in question is the one that matters.",
        ],
      },
      {
        heading: "If a flat is why you need the wheel off",
        paragraphs: [
          "Mention both jobs in your request so the driver arrives ready for both. A flat tire change, putting on the spare you carry, is {{price:flat-tire-change}}; with no usable spare, a tire we supply and install is {{price:tire-replacement}}. Dispatch gives you the total before a driver is sent. If all you need is the lock off, ask for that alone.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will you damage my wheel?",
        a: "The locking nut itself is sacrificed, which can't be avoided. Your driver works to protect the wheel and the studs around it.",
      },
      {
        q: "Do I need this if I just lost the key?",
        a: "Only when the wheel has to come off, such as for a flat or a tire swap. Removal is what lets that happen.",
      },
      {
        q: "The key broke off in the lock nut. Is that the same?",
        a: "Yes. A broken or rounded key is the same problem as a missing one. Mention it in your request.",
      },
      {
        q: "Can you also change my flat at the same visit?",
        a: "Yes, if there's a usable spare in the car. Mention both jobs when you request so the driver comes ready for both.",
      },
    ],
  },
  {
    slug: "roadside-assistance-near-me",
    kind: "problem",
    title: "Roadside Assistance Near Me",
    h1: "Roadside assistance near you, any hour",
    metaDescription:
      "{{price:jump-start}} + {{dispatchFee}} dispatch. Jump starts, flats, lockouts and batteries across Dallas–Fort Worth. Open 24/7, no membership.",
    eyebrow: "Roadside help",
    intro:
      "If you're stopped and need help now, this page shows exactly what a driver can do for you in the Dallas–Fort Worth area, and what we don't do. We're open 24/7, with no membership required. Call or send a request.",
    service: "jump-start",
    alsoServices: ["flat-tire-change", "lockout", "battery-replacement"],
    sections: [
      {
        heading: "What we handle",
        paragraphs: ["Each price below is for the service. The {{dispatchFee}} dispatch fee goes on top of each one, once per job."],
        list: [
          "Dead battery: a jump start, {{price:jump-start}}, or a new battery installed, {{price:battery-replacement}} for eligible vehicles and batteries.",
          "Flat tire: a spare tire change, {{price:flat-tire-change}}; a plug or patch repair, {{price:tire-repair-plug-patch}}; or a new tire supplied and installed, {{price:tire-replacement}}.",
          "Nail or screw in a tire: {{price:stuck-screw-in-tire}}.",
          "Locked out: {{price:lockout}}, or {{price2:lockout}} for keys in the trunk.",
          "Missing wheel lock key: {{price:rim-lock-removal}}.",
        ],
      },
      {
        heading: "What we don't do",
        paragraphs: [
          "We don't tow, we don't deliver fuel, and we don't do mechanical repair. If the problem is an engine or transmission, an empty tank, or a car that has to be moved to a shop, you need a mechanic or a tow service. We'd rather tell you that than send a driver who can't help.",
        ],
      },
      {
        heading: "How to ask for help",
        paragraphs: [
          "Call or send a request online. Give your exact location, the vehicle's year, make and model, and what's wrong. Dispatch confirms the service price and the dispatch fee for your vehicle before a driver is sent, and we text or call you when the driver is on the way.",
          "Dispatch is based in Dallas–Fort Worth rather than in an out-of-state call center. Our average arrival is 30 minutes; the actual time depends on where you are and the traffic.",
          "Not sure how to describe it? Pick the symptom that sounds closest: the car won't start, a tire is flat, you're locked out, or a wheel lock won't open. Dispatch works out the job from there.",
        ],
      },
      {
        heading: "While you wait",
        paragraphs: [
          "In a live traffic lane, or if anyone is in danger, call 911 before you call us. Otherwise, get clear of traffic, turn on your hazard lights and wait where you can be seen. In the dark, stay in a lit spot if you have a choice, and keep the doors locked until the driver is there.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a membership or an account?",
        a: "No. There's no membership and no account.",
      },
      {
        q: "Do you tow?",
        a: "No. We don't tow, deliver fuel or do mechanical repair.",
      },
      {
        q: "What if I'm not sure which service I need?",
        a: "Tell dispatch what happened. They confirm the right job, and the price for your vehicle, before a driver is sent.",
      },
      {
        q: "Are you open on weekends and holidays?",
        a: "We're open 24/7, 365 days a year.",
      },
    ],
  },
  {
    slug: "roadside-assistance-no-membership",
    kind: "problem",
    title: "Roadside Help, No Membership",
    h1: "Roadside help without a membership",
    metaDescription:
      "{{price:jump-start}} + {{dispatchFee}} dispatch. No membership, no account: call when you're stuck, and the job has a published price.",
    eyebrow: "No membership",
    intro:
      "You don't need a membership to get a driver. There's nothing to join, no account to set up, and nothing to have signed up for before the car stops. Call or send a request, and the job has a published price.",
    service: "jump-start",
    alsoServices: ["battery-replacement", "tire-replacement", "lockout"],
    sections: [
      {
        heading: "Nothing to sign up for",
        paragraphs: [
          "A membership is something you buy ahead of time, in case. Here, you ask when you need help. There's no account and no membership, and you can call about any problem we handle, whether it's your first time or not. With nothing to join, there's no renewal date to remember either.",
          "You don't need a member number or a membership card to call. What dispatch needs is the car's location and what's wrong with it.",
        ],
      },
      {
        heading: "You pay for the job",
        paragraphs: [
          "Every job has a published service price, plus a {{dispatchFee}} dispatch fee for sending a driver to your location, charged once per job. Dispatch confirms both for your vehicle before a driver is sent, so you hear the figure first. A jump start, for example, comes to {{total:jump-start}} in expected total.",
        ],
        list: [
          "Jump start: {{price:jump-start}} (semi trucks and 18-wheelers, {{price2:jump-start}}).",
          "Spare tire change: {{price:flat-tire-change}}.",
          "Lockout: {{price:lockout}} (keys in the trunk, {{price2:lockout}}).",
          "Battery replacement: {{price:battery-replacement}}, for eligible vehicles and batteries.",
        ],
      },
      {
        heading: "What to tell us when you call",
        paragraphs: [
          "Where the car is, the year, make and model, and what happened. That's all dispatch needs to pick the right job. For a semi truck, choose that vehicle type, because it has its own jump start price.",
          "A text or a call tells you when the driver is on the way. Our average arrival is 30 minutes, and the actual time depends on your location and traffic.",
        ],
      },
      {
        heading: "What not having a membership doesn't change",
        paragraphs: [
          "The list of what we do is the same for everyone: jump starts, batteries, lockouts and tire work. We don't tow, deliver fuel or do mechanical repair, so a problem that needs one of those still needs a tow service or a mechanic. Some roadside plans include towing. We don't, and that is worth knowing before you call.",
          "What you do get is a driver at any hour. We're open 24/7, 365 days a year, with dispatch based here in Dallas–Fort Worth, so there's no business-hours window you have to catch.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I have to create an account?",
        a: "No. There's no account and no membership.",
      },
      {
        q: "What does it cost without a membership?",
        a: "Each job has a published service price plus the {{dispatchFee}} dispatch fee, charged once per job. A jump start is {{price:jump-start}}, for example.",
      },
      {
        q: "Can I call at night without being a member?",
        a: "Yes. We're open 24/7, 365 days a year, and no membership is needed.",
      },
      {
        q: "What if my problem isn't one of your services?",
        a: "Dispatch tells you. We don't tow, deliver fuel or do mechanical repair, so for those you'd need a tow service or a mechanic.",
      },
    ],
  },
  {
    slug: "semi-truck-jump-start",
    kind: "driver",
    title: "Semi Truck Jump Start",
    h1: "Semi truck and 18-wheeler jump start in DFW",
    metaDescription:
      "{{price2:jump-start}} + {{dispatchFee}} dispatch. Heavy-duty jump start for a semi truck, 18-wheeler or other big rig, at your yard or truck stop.",
    eyebrow: "Semi trucks",
    intro:
      "A dead battery on a tractor-trailer shouldn't cost you a day. We do heavy-duty jump starts for semi trucks and 18-wheelers wherever the truck sits: a yard, a truck stop, a mile marker on the highway. Call or send a request and choose Semi truck as the vehicle type.",
    service: "jump-start",
    alsoServices: ["lockout", "battery-replacement"],
    sections: [
      {
        heading: "What we need to find the truck",
        paragraphs: ["Saying only that the truck is at the yard won't get a driver to the right spot. Have these ready when you request:"],
        list: [
          "Semi truck chosen as the vehicle type in your request.",
          "The unit number.",
          "Exactly where it's parked: the yard, truck stop or mile marker.",
          "Gate or entrance instructions, if it's a secured yard.",
          "The tractor's year, make and model.",
          "What the truck is doing: a slow crank, clicking, dead dash lights, or lights left on overnight. If you run a refrigerator or an inverter off the batteries, say so.",
          "Whether the hood or a battery box is locked or hard to reach. On many tractors the batteries sit in a box along the frame.",
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          "A semi truck jump start is {{price2:jump-start}}, plus the {{dispatchFee}} dispatch fee, charged once per job. That is its own price, separate from the {{price:jump-start}} that applies to other vehicles. Dispatch confirms the price before a driver is sent.",
          "There's no contract and no account. It's one job at one price, and you can call again for the next truck.",
        ],
      },
      {
        heading: "Is it really the battery?",
        paragraphs: [
          "Big rigs often carry more than one battery, so a weak start can come from one bad battery in a set. A jump start gets a drained set turning over. If the truck keeps dying, the batteries need a closer look from a truck shop.",
          "If the engine cranks but won't fire, that is not a battery problem and a jump won't help. We don't do mechanical repair, tow or deliver fuel.",
        ],
      },
      {
        heading: "If you're on the road",
        paragraphs: [
          "Parked on a shoulder or a ramp? If the truck is in a live traffic lane, or anyone is in danger, call 911 first. Otherwise, hazard lights on, warning triangles out if it's safe to set them, and give dispatch the road, your direction of travel and the mile marker. We text or call when the driver is on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "How much is a semi truck jump start?",
        a: "{{price2:jump-start}}, plus the {{dispatchFee}} dispatch fee, charged once per job.",
      },
      {
        q: "What vehicle type do I pick?",
        a: "Semi truck. That is how the request carries the semi truck price, and it tells dispatch what kind of jump you need.",
      },
      {
        q: "Can you come to a truck stop or a yard?",
        a: "Yes. Give dispatch the unit number and exactly where the truck is parked: the yard, truck stop or mile marker.",
      },
      {
        q: "Do you tow semi trucks?",
        a: "No. We don't tow, deliver fuel or do mechanical repair.",
      },
    ],
  },
  {
    slug: "tesla-ev-jump-start",
    kind: "driver",
    title: "Tesla and EV Jump Start",
    h1: "Tesla and EV jump start: the 12-volt battery",
    metaDescription:
      "{{price:jump-start}} + {{dispatchFee}} dispatch. Dead 12-volt battery in a Tesla or EV? A driver can jump it. The main battery needs a charger.",
    eyebrow: "EV",
    intro:
      "An electric car carries two batteries, and only the small 12-volt one gets jumped. When it runs down, the car may not unlock or switch on even with a full main battery. We help with the 12-volt system, so tell us it's electric when you request.",
    service: "jump-start",
    alsoServices: ["lockout", "battery-replacement"],
    sections: [
      {
        heading: "Two batteries, one we can help with",
        paragraphs: [
          "The big high-voltage battery drives the wheels and is refilled at a charger. We don't work on it, and a roadside jump doesn't charge it. The small 12-volt battery wakes the car up and runs the locks and the screens, and it's the one a jump start is for.",
          "Once the car is on, the main battery keeps the 12-volt battery charged again. If the small battery keeps running down anyway, it may be worn out. Ask the driver whether it needs replacing; a battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, plus the dispatch fee.",
        ],
      },
      {
        heading: "Signs it's the 12-volt battery",
        paragraphs: ["Any of these points at the small battery rather than the big one:"],
        list: [
          "The car won't unlock with the key fob or the phone app.",
          "The screens stay dark when you get in.",
          "A low 12-volt or low-voltage battery warning showed up in the days before.",
          "On a hybrid, the car won't switch on and the ready light never comes on.",
        ],
      },
      {
        heading: "When a jump won't help",
        paragraphs: [
          "If the car shows a low main battery, or it has simply run out of range, a jump does nothing for it. That needs a charger, or a tow to one, and we provide neither. We also don't do mechanical repair.",
          "The two look different. A low main battery shows up as a low charge level or a range warning on a screen that still works. A drained 12-volt battery shows up as a car that does nothing at all.",
        ],
      },
      {
        heading: "How to ask, and what it costs",
        paragraphs: [
          "Note the vehicle type in your request, and add the year, make and model and that it's electric in the notes, so we can dispatch the right equipment. Whether it's a Tesla or another make, the 12-volt jump start is {{price:jump-start}}, plus the {{dispatchFee}} dispatch fee, once per job.",
          "Dispatch confirms the price for your vehicle before a driver is sent, and we text or call when the driver is on the way. A hybrid goes through the same steps; just note that it's a hybrid.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will a jump start charge my EV's main battery?",
        a: "No. A jump only helps the 12-volt battery. A low main battery needs a charger, or a tow to one.",
      },
      {
        q: "Do you jump start Teslas?",
        a: "We help with the 12-volt system on electric cars, Teslas included. Note the vehicle type and details in your request so the right equipment is dispatched.",
      },
      {
        q: "Is a hybrid the same?",
        a: "The idea is the same: the 12-volt battery is what gets the jump. Note that it's a hybrid in your request.",
      },
      {
        q: "Can you tow it to a charger?",
        a: "No. We don't tow.",
      },
    ],
  },
  {
    slug: "tesla-ev-lockout",
    kind: "driver",
    title: "Tesla and EV Lockout",
    h1: "Locked out of a Tesla or other EV",
    metaDescription:
      "{{price:lockout}} + {{dispatchFee}} dispatch. Locked out of a Tesla or EV? A driver gets you in with non-destructive entry whenever possible, 24/7.",
    eyebrow: "EV lockout",
    intro:
      "Many electric cars have no traditional key to lock inside: a phone, a key card or a fob stands in for it, and any of them can end up on the wrong side of a locked door. Tell us the make and model and that it's electric, and a driver comes to open it.",
    service: "lockout",
    alsoServices: ["jump-start", "tire-replacement"],
    sections: [
      {
        heading: "Lockout, or a drained 12-volt battery?",
        paragraphs: ["From the sidewalk these look alike, and they need different fixes."],
        list: [
          "The car wakes up when you touch the handle or use the app, but the key is inside: that's a lockout.",
          "The car does nothing at all, with no response from the fob or app and dark screens: the 12-volt battery may be drained. That's a jump start, {{price:jump-start}} plus the dispatch fee. Say so when you request.",
          "The car responds, but the doors still won't open: a dead battery in the fob or a failing latch can cause that. Describe it to dispatch exactly as it happens.",
        ],
      },
      {
        heading: "Say what's locked in",
        paragraphs: [
          "Tell dispatch exactly what is inside: the phone, the card, the fob. Some EVs are set to lock themselves when the key walks away, which is how a phone-as-key owner ends up outside.",
          "Opening the vehicle is {{price:lockout}}, plus a {{dispatchFee}} dispatch fee charged once. If the keys are locked in the trunk, that's a separate job at {{price2:lockout}}.",
        ],
      },
      {
        heading: "Proving it's yours",
        paragraphs: [
          "The driver confirms the car is yours before opening anything. Have ID ready, or another way to show the vehicle is yours. If your phone is the key and it's locked inside, your wallet may be too, so say so when you call.",
          "If someone else has the car's app, or a second key card, they may be able to unlock it. A quick call to them can save you the lockout fee.",
        ],
      },
      {
        heading: "What to expect",
        paragraphs: [
          "Non-destructive entry methods are used whenever possible. Give the year, make and model, and note that it's electric, so dispatch knows what it's sending a driver to. Dispatch confirms the price before a driver is sent, and we text or call when the driver is on the way.",
          "Don't force a door or pry at the window while you wait. Modern doors and their sensors are easy to damage, and it won't get you in any faster.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you open a Tesla without damaging it?",
        a: "Drivers use non-destructive entry methods whenever possible. Tell dispatch the year, make and model, and that it's electric.",
      },
      {
        q: "My phone is the key and it's locked inside. What do I need?",
        a: "ID or another way to prove the vehicle is yours. The driver confirms ownership before unlocking anything.",
      },
      {
        q: "The car won't respond at all. Is that a lockout?",
        a: "It might be a drained 12-volt battery instead, which is a jump start job. Tell dispatch what the car does when you touch the handle or use the app.",
      },
      {
        q: "How much is an EV lockout?",
        a: "{{price:lockout}} for opening the vehicle, plus the {{dispatchFee}} dispatch fee, charged once per job. Keys locked in the trunk are {{price2:lockout}}.",
      },
    ],
  },
  {
    slug: "tesla-ev-flat-tire",
    kind: "driver",
    title: "Tesla and EV Flat Tire",
    h1: "Flat tire on a Tesla or EV, and no spare",
    metaDescription:
      "{{price:tire-replacement}} + {{dispatchFee}} dispatch. No spare in your Tesla or EV? We supply a tire and install it where you're parked.",
    eyebrow: "EV tires",
    intro:
      "Many electric cars come without a spare, so a flat can leave you with nothing to put on. We supply a tire and install it on site. Note that it's an EV when you request, and give us the tire size.",
    service: "tire-replacement",
    alsoServices: ["tire-repair-plug-patch", "flat-tire-change", "rim-lock-removal"],
    sections: [
      {
        heading: "Check what the car carries",
        paragraphs: [
          "Many EVs have no spare wheel, only an inflator and sealant kit or nothing at all. Look in the trunk and under the floor before you assume. If there is a usable spare, a flat tire change puts it on for {{price:flat-tire-change}}, plus the dispatch fee.",
          "An inflator and sealant kit is a stopgap for a small puncture in the tread. If the tire is torn, or the damage is on the sidewall, a kit won't save it and the tire needs replacing.",
        ],
      },
      {
        heading: "Don't drive on it",
        paragraphs: [
          "Not even to the nearest charger or shop. A flat destroys the tire and can damage the wheel, and an electric car is heavy enough that the weight is hard on a tire with no air in it. If you're in a live traffic lane, or anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "What to give dispatch",
        paragraphs: [
          "Dispatch checks that a tire for your car is available before a driver is sent, and tells you the total. These details make that quick:",
        ],
        list: [
          "The year, make and model, and that it's electric.",
          "The tire size, read exactly as printed on the sidewall, or from the sticker on the driver's door jamb. If the sidewall carries extra markings, read those out too.",
          "Where the car is.",
          "Whether your wheels have locking nuts, and where the key is. If it's missing, the lock has to come off before the wheel can: {{price:rim-lock-removal}} plus the dispatch fee.",
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          "Tire replacement is {{price:tire-replacement}}, plus a {{dispatchFee}} dispatch fee charged once per job. It covers the tire, supplied by us, and installing it. If the puncture is a small one in the tread, a plug or patch is {{price:tire-repair-plug-patch}}, plus the dispatch fee, and the tire stays on the car. A repair is the cheaper job, so it's worth describing the damage.",
          "Nothing in a tire job involves the high-voltage battery.",
        ],
      },
    ],
    faqs: [
      {
        q: "My EV has no spare. Can you still help?",
        a: "Yes. We supply a tire and install it, {{price:tire-replacement}} plus the {{dispatchFee}} dispatch fee.",
      },
      {
        q: "Will you have my tire?",
        a: "Tire availability varies. Dispatch confirms a tire is available, with your total, before a driver is sent.",
      },
      {
        q: "Can the flat be repaired instead?",
        a: "If it's a small puncture in the tread, often yes: {{price:tire-repair-plug-patch}} plus the dispatch fee. Damage in or near the sidewall can't be safely repaired.",
      },
      {
        q: "Do you work on the main battery?",
        a: "No. A tire job doesn't involve the high-voltage battery, and we don't work on it.",
      },
    ],
  },
  {
    slug: "rideshare-driver-roadside-help",
    kind: "driver",
    title: "Rideshare Driver Roadside Help",
    h1: "Roadside help for rideshare and delivery drivers",
    metaDescription:
      "{{price:jump-start}} + {{dispatchFee}} dispatch. Car down mid-shift? Jump starts, flats and lockouts where you're parked, 24/7, no membership.",
    eyebrow: "Drivers on shift",
    intro:
      "When the car stops, the shift stops. If you drive for a living and the car won't start, has a flat or has your keys locked inside, we come to wherever you're parked. Call or send a request and say what's wrong.",
    service: "jump-start",
    alsoServices: ["flat-tire-change", "lockout", "battery-replacement"],
    sections: [
      {
        heading: "If someone is in the car",
        paragraphs: [
          "People first. If a passenger is on board, make sure everyone is safe and clear of traffic before you do anything about the car. In a live traffic lane, or if anyone is in danger, call 911.",
          "If you're stopped on a freeway shoulder with a rider, they should stand well clear of the road, or stay buckled in if there's no safe place to stand. Then give dispatch your exact spot and what the car is doing. A clear description in the first minute is worth more than a long one later.",
        ],
      },
      {
        heading: "Match the problem to the fastest fix",
        paragraphs: ["Each fix adds a {{dispatchFee}} dispatch fee once per job, and dispatch confirms the price before a driver is sent."],
        list: [
          "Won't start, clicking or dim lights: a jump start, {{price:jump-start}}.",
          "Flat tire with a usable spare: a spare change, {{price:flat-tire-change}}.",
          "Flat tire, no spare: a tire supplied and installed, {{price:tire-replacement}}.",
          "Keys locked in the car: {{price:lockout}}, or {{price2:lockout}} if they're in the trunk.",
        ],
      },
      {
        heading: "Don't let it happen twice",
        paragraphs: [
          "A jump gets you moving. It doesn't make an old battery new. A battery that has already failed a jump start usually needs replacing rather than another jump, and a replacement is {{price:battery-replacement}} for eligible vehicles and batteries, plus the {{dispatchFee}} dispatch fee, with a 1-year warranty. For a car you earn in, it's worth asking the driver whether the battery should be replaced, because a second breakdown costs more hours.",
        ],
      },
      {
        heading: "Keep the details ready",
        paragraphs: [
          "Save the car's year, make and model, and the tire size (it's on the sticker in the driver's door jamb) in a note on your phone. When the car stops, you can send the whole request in a minute. Give an exact location, such as a cross street or a store name, not just a neighborhood.",
          "We text or call when your driver is on the way. Average arrival is 30 minutes; the actual time depends on location and traffic. No membership needed.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a membership?",
        a: "No. There's no membership and no account.",
      },
      {
        q: "Can you come to a parking lot or a curb?",
        a: "Yes. The car gets fixed where it sits: a parking lot, a curb, a driveway or a shoulder.",
      },
      {
        q: "Can you tow me to a shop?",
        a: "No. We don't tow, deliver fuel or do mechanical repair. If the car can't be fixed on site, you'll need a tow service.",
      },
      {
        q: "Do you work at night?",
        a: "Yes. We're open 24/7, 365 days a year.",
      },
    ],
  },
  {
    slug: "work-truck-fleet-roadside-help",
    kind: "driver",
    title: "Work Truck Roadside Help",
    h1: "Roadside help for work trucks, vans and box trucks",
    metaDescription:
      "{{price:jump-start}} + {{dispatchFee}} dispatch. Work truck, van or box truck down? We come to the job site or yard, per job, no contract.",
    eyebrow: "Work vehicles",
    intro:
      "When a work vehicle is down, the crew is waiting. We serve pickups, vans, box trucks and semi trucks one job at a time, with no contract. Call or send a request and tell us the vehicle type and where it is.",
    service: "jump-start",
    alsoServices: ["lockout", "flat-tire-change", "battery-replacement"],
    sections: [
      {
        heading: "One job at a time",
        paragraphs: [
          "There's no contract, no account to open and nothing to sign before a driver goes out. Each call is its own job with its own price. If you're calling from the office, give dispatch the number of whoever is with the vehicle, so we know who to text or call when the driver is on the way.",
          "Two vehicles down at the same site? Request each one, so dispatch can confirm the job and the price for each vehicle before anyone is sent.",
        ],
      },
      {
        heading: "What to tell us",
        paragraphs: ["The more dispatch knows, the less back and forth:"],
        list: [
          "The vehicle type: pickup truck, van, box truck or semi truck. Choose it in the request.",
          "The year, make and model, and your unit number if you use one.",
          "Exactly where it is: the job site address, the yard, or the road, direction and cross street. A job site often has no address that maps well, so add a landmark or the name on the gate. Say too if the vehicle is blocking a loading area or an entrance.",
          "Whether it's loaded, and whether there's a gate or a locked yard.",
          "The best number to text or call when the driver is on the way.",
        ],
      },
      {
        heading: "What it costs",
        paragraphs: [
          "A jump start is {{price:jump-start}} for most vehicles and {{price2:jump-start}} for a semi truck or 18-wheeler. A lockout is {{price:lockout}} and a spare tire change is {{price:flat-tire-change}}. Each job adds a {{dispatchFee}} dispatch fee. Choose the vehicle type in the request, and dispatch confirms the price for your vehicle before a driver is sent. Each job is priced on its own.",
        ],
      },
      {
        heading: "What a work vehicle should know",
        paragraphs: [
          "For a lockout, the driver confirms the vehicle is yours before opening it, so whoever is at the truck needs ID or another way to show it. We don't tow, deliver fuel or do mechanical repair, so a truck that needs a mechanic goes to a shop.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need a contract?",
        a: "No. Work vehicles are served per job, with no contract.",
      },
      {
        q: "Can you jump start a box truck or a van?",
        a: "Yes. Pick Box truck or Van as the vehicle type in your request, and dispatch confirms the price for it before a driver is sent.",
      },
      {
        q: "What about a flat tire on a work truck?",
        a: "A spare tire change uses the spare the vehicle already carries. Without a usable spare, we supply a tire and install it, {{price:tire-replacement}} plus the {{dispatchFee}} dispatch fee. Tire availability varies, so dispatch confirms a tire is available before a driver is sent.",
      },
      {
        q: "Do you tow work trucks?",
        a: "No. We don't tow, deliver fuel or do mechanical repair.",
      },
    ],
  },
];
