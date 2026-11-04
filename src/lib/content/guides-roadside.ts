import type { Guide } from "./guides";

/** Tire, lockout, safety and cost guides. The rules are in guides.ts. */

const UPDATED = "2026-11-04";

/** Portrait field photos for the guide cards, all 1080 x 1350. */
const card = (name: string) => ({ src: `/images/field/${name}.webp`, width: 1080, height: 1350 });

export const GUIDES_ROADSIDE: Guide[] = [
  {
    slug: "who-to-call-flat-tire-dallas",
    title: "Flat Tire in Dallas: Who to Call First",
    h1: "Flat tire in Dallas: who to call, and in what order",
    metaDescription:
      "Flat tire in Dallas or Fort Worth? Who to call and in what order, from 911 when you're in traffic to a mobile tire change once you're safe.",
    topic: "Tire guide",
    dek: "The first call depends on where the car stopped, not on what is wrong with the tire. If you're in a lane or traffic is passing close, it goes to 911. Once you're safe, the order is short: look at what you're carrying, then call whoever can use it.",
    updated: UPDATED,
    cardImage: card("field-tire-shoulder-night"),
    sections: [
      {
        heading: "Where the car stopped decides the first call",
        paragraphs: [
          "If any part of the car is still in a lane, or the shoulder is so narrow that traffic passes within a few feet, call 911 before anyone else. Give the road, the direction you were headed and the nearest exit or mile marker. The tire can wait. On a DFW freeway the real danger is being hit by another vehicle, and a 911 dispatcher can send help that protects the scene, which no tire company can do.",
          "If you're in a parking lot, a driveway, a quiet side street or well clear of the road on a wide shoulder, you have time to think. Turn on the hazard lights, set the parking brake, and get everyone out on the side away from traffic before you pick up the phone.",
        ],
      },
      {
        heading: "Look at what you're carrying",
        paragraphs: [
          "The quickest fix is usually already in the car. Find the spare (under the cargo floor on most cars, under the rear of many trucks and some SUVs), the jack and the lug wrench. If your wheels have locking lug nuts, find the key too, because the wheel stays on without it. Then look at the tire itself, since what you see decides who you call.",
        ],
        list: [
          "A small puncture in the tread, with the tire still holding some air: it may be repairable, and a mobile tire repair comes to you.",
          "A tire that is completely flat or torn, and a good spare in the car: a spare tire change.",
          "No spare, or a tire damaged beyond repair: a replacement tire has to be brought to you, or the car has to be towed to a shop.",
          "A locking lug nut and no key: the lock has to come off before the wheel can.",
        ],
      },
      {
        heading: "A sensible order for the calls",
        paragraphs: ["Once you're safe, work down this list and stop at the first one that gets you moving."],
        list: [
          "Your insurer, or the roadside benefit that came with your car or credit card, if you have one. It may cost you nothing, so it's worth two minutes to check.",
          "A mobile tire service, which comes to where the car is and does the work there.",
          "A friend or relative who can change it with you, but only if the spot is level and clear of traffic.",
          "A tow, if the car can't be driven and none of the above applies.",
        ],
      },
      {
        heading: "What TRA does for a flat",
        paragraphs: [
          "TRA dispatches from Dallas–Fort Worth around the clock. A flat tire change puts on the spare you already carry and is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. A repair for a tread puncture is {{price:tire-repair-plug-patch}}, and a tire supplied and installed is {{price:tire-replacement}}. Dispatch confirms a tire is available before a driver is sent.",
          "Our average arrival is 30 minutes, though the actual time depends on where you are and the traffic. We text or call when the driver is on the way. We don't tow, so if the car can't be driven, you'll need a tow company.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I call 911 for a flat tire?",
        a: "Only if you can't get the car out of traffic, or someone is hurt or in danger. A flat on a quiet street isn't an emergency. A flat in a live lane or on a narrow shoulder with fast traffic is, because the risk is a passing vehicle, not the tire.",
      },
      {
        q: "Can I drive to a tire shop on a flat?",
        a: "No. Even a short distance can ruin the sidewall of a tire that could have been repaired, and it can bend the wheel. If the car has to move, keep it to a few car lengths at walking pace, just far enough to get somewhere safer.",
      },
      {
        q: "What if I'm not sure I have a spare?",
        a: "Look under the cargo floor panel and check the owner's manual. Many newer cars don't carry one. Tell dispatch what you found when you request help, and we'll point you to the right service.",
      },
    ],
    services: ["flat-tire-change", "tire-repair-plug-patch", "tire-replacement"],
  },
  {
    slug: "how-to-change-a-flat-tire-safely",
    title: "How to Change a Flat Tire Safely",
    h1: "How to change a flat tire safely, step by step, and when not to try",
    metaDescription:
      "The steps for changing a flat tire safely, the conditions where you shouldn't try it, and the mistakes that cause most roadside injuries.",
    topic: "Tire guide",
    dek: "Changing a tire is a ten-minute job in a driveway and a very different job on a freeway shoulder. The steps are the same in both places. What changes is whether it's safe to start at all.",
    updated: UPDATED,
    cardImage: card("field-tire-jack"),
    sections: [
      {
        heading: "Decide first whether to try it",
        paragraphs: [
          "Most of the danger in a tire change has nothing to do with the wheel. It comes from where the car is sitting. Leave the jack in the trunk and make a call if any of these are true:",
        ],
        list: [
          "The car is on a shoulder with fast traffic and less than a full car width of clearance.",
          "The ground is soft, sloped or loose, such as grass, gravel or a ramp.",
          "It's dark and you don't have a good light, or the weather is bad.",
          "The spare is flat, missing or damaged, or the locking lug nut has no key.",
          "You can't find the lifting points, or the lug nuts won't move with steady force.",
        ],
      },
      {
        heading: "The steps",
        paragraphs: ["On level, firm ground such as concrete or asphalt, with the hazard lights on, the parking brake set and the car in Park (or in gear for a manual):"],
        list: [
          "Take out the spare, jack and lug wrench. Check the manual for the lifting point. It's a reinforced spot on the frame near the flat wheel, not the plastic trim.",
          "Loosen each lug nut about half a turn while the tire is still on the ground, turning counterclockwise. Don't remove them yet.",
          "Raise the car until the flat is just off the ground. No part of you goes under the car, at any point.",
          "Remove the nuts, pull the wheel straight toward you and lay it flat so it can't roll away.",
          "Lift the spare onto the studs, thread the nuts on by hand, and snug them in a star pattern.",
          "Lower the car, then tighten the nuts fully, again in a star pattern, and put the flat and the tools away.",
        ],
      },
      {
        heading: "Mistakes that cause injuries",
        paragraphs: [
          "The common ones are lifting the car on soft ground so the jack tips, loosening nuts after the wheel is already in the air so the wheel spins, and reaching under the car to retrieve a dropped nut. A factory jack is meant for a short, careful change on flat ground and nothing more.",
          "Lug nuts are also tightened to a specific torque. A roadside wrench can't measure it, so after you've driven a short way, have a shop check them with a torque wrench. Nuts that are too loose can work free, and nuts that are too tight can warp parts.",
        ],
      },
      {
        heading: "When it's better to call",
        paragraphs: [
          "If you decide not to change it yourself, TRA does the job with the spare already in your vehicle. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Without a usable spare, we supply a tire and install it on site, and tire replacement is {{price:tire-replacement}}. If the locking nut key is missing, say so in your request, because the lock has to come off first.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which way do lug nuts turn?",
        a: "Counterclockwise to loosen and clockwise to tighten on nearly every modern car. If one is stuck, lean steady body weight on the wrench instead of jerking it, and don't hammer on it.",
      },
      {
        q: "Can I change a tire on a hill?",
        a: "Don't. A car on a slope can slip off the jack. Move it, slowly, to level ground if you can do that without driving far on the flat. If you can't, call for help.",
      },
      {
        q: "Do I need to check anything after the change?",
        a: "Yes. Check the spare's air pressure as soon as you can, and get the lug nuts checked with a torque wrench after a short drive. Then get the flat repaired or replaced.",
      },
    ],
    services: ["flat-tire-change", "rim-lock-removal", "tire-replacement"],
  },
  {
    slug: "how-far-can-you-drive-on-a-spare",
    title: "How Far Can You Drive on a Spare Tire?",
    h1: "How far and how fast you can drive on a spare tire",
    metaDescription:
      "A compact spare is made to get you to a tire shop, not to replace a tire. Typical speed and distance limits, and why the sticker on yours matters.",
    topic: "Tire guide",
    dek: "A compact spare is built to get you to a tire shop, not to carry on as normal. The sticker on the spare and your owner's manual give the real limits, and they're lower than most drivers expect.",
    updated: UPDATED,
    cardImage: card("field-tire-spare-lot"),
    sections: [
      {
        heading: "Compact spare or full-size spare",
        paragraphs: [
          "Most cars that carry a spare carry a compact one, often called a donut: narrow, small and light, made to save trunk space and weight. Some trucks and SUVs carry a full-size spare that matches the other wheels, though even those can differ in tire type from the set on the car.",
          "You can tell which you have by size and by the sticker. A compact spare usually has a bright label on the wheel or sidewall with its speed and pressure limits printed on it.",
        ],
      },
      {
        heading: "Speed and distance",
        paragraphs: [
          "Most compact spares are marked for no more than 50 miles per hour. Distance limits vary by manufacturer and are often in the range of 50 to 70 miles, so read your manual's figure instead of trusting a rule of thumb. Think of the limit as how far the tire can be driven safely, not a distance to aim for.",
          "A compact spare is smaller than the other tires, so the car handles differently. It grips less, braking distances grow, and stability and traction systems can behave oddly because one wheel turns at a different rate. Leave extra room, avoid hard braking, and take it easy in the rain.",
          "Some manuals also say to keep the load light, since a compact spare is rated for less weight than a full tire. A trunk full of luggage or a car full of passengers asks more of it than it was made for, so lighten the load or split the trip if you can.",
        ],
      },
      {
        heading: "Check the pressure before you need it",
        paragraphs: [
          "Compact spares often call for a much higher pressure than regular tires, commonly around 60 psi, but the sticker on yours is the number to use. A spare that has sat untouched for years loses air, and a flat spare is no help when you're on the side of the road.",
          "Put a pressure check on the spare on your calendar twice a year. If you've just put it on, check its pressure before you pull away. The number to use is on the spare itself, then in the manual. Any gas station air pump will do, and a small compressor that plugs into the car's power outlet is a cheap thing to keep in the trunk.",
        ],
      },
      {
        heading: "Plan the next step before you drive off",
        paragraphs: [
          "Metro Dallas–Fort Worth is big. A drive across it can eat most of a spare's rated distance, so decide where the flat is going before you leave. A tread puncture can often be repaired, which gets you back on a full tire quickly. Anything else means a replacement, and a spare shouldn't stay on the car for weeks.",
          "TRA can do either at your location. A tire repair for a puncture in the tread is {{price:tire-repair-plug-patch}}, and a tire supplied and installed is {{price:tire-replacement}}, plus a {{dispatchFee}} dispatch fee charged once per job. Tire availability varies, and dispatch confirms a tire is available before a driver is sent.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I take the highway on a spare?",
        a: "You can if the speed rating allows it, but many compact spares are marked for 50 mph, well below freeway speeds in DFW. If yours is, stay on slower roads where you can, and keep to the right.",
      },
      {
        q: "Is a full-size spare safe to drive on normally?",
        a: "If it matches the other tires in size and type, usually yes, for as long as it takes to repair or replace the flat. Some all-wheel-drive vehicles need all four tires to be nearly the same size, so check the manual.",
      },
      {
        q: "My spare is flat too. What now?",
        a: "Then it can't be used, and a spare tire change won't work. We can supply a tire and install it on site instead, which is the tire replacement service.",
      },
    ],
    services: ["flat-tire-change", "tire-repair-plug-patch", "tire-replacement"],
  },
  {
    slug: "plug-or-patch-tire-repair",
    title: "Plug or Patch? Tire Repair Explained",
    h1: "Plug or patch: how a punctured tire is repaired, and which ones can be",
    metaDescription:
      "The difference between a plug and a patch, which punctures can safely be repaired and which can't, and what to expect from a roadside tire repair.",
    topic: "Tire guide",
    dek: "A plug and a patch are both ways of closing a puncture, but they work differently, and neither fixes damage in the wrong part of the tire. Where the hole is matters more than what's used to fill it.",
    updated: UPDATED,
    cardImage: card("field-tire-wheel"),
    sections: [
      {
        heading: "What a plug is, and what a patch is",
        paragraphs: [
          "A plug is a sticky rubber cord pushed into the hole from the outside. It's fast, and it can often be done with the tire on the car. A patch is a piece of rubber bonded to the inside of the tire. To apply one, the tire has to be off the wheel so the inside can be cleaned and checked.",
          "Combination repairs do both with one unit: a stem fills the hole and a patch seals the inner liner. Tire makers and repair guidelines favor a repair that seals the inside of the tire, which is why a plug used alone is often called a temporary fix.",
          "A plug kit from a parts store does the outside-only version of the job. Plenty of drivers carry one, and it can get you to a proper repair, but treat it as a way to get there, not as the repair itself.",
        ],
      },
      {
        heading: "The punctures that can be repaired",
        paragraphs: ["The general rules are the same for any car:"],
        list: [
          "The hole is in the tread, the flat center part that touches the road, not near the edge.",
          "It's small, roughly a quarter inch or less across, and was made by something like a nail or screw.",
          "It isn't close to another repair, since repairs shouldn't overlap.",
          "The tire wasn't driven on while it was flat, which can destroy the inside even if the outside looks fine.",
        ],
      },
      {
        heading: "The ones that can't",
        paragraphs: [
          "Anything in or near the sidewall can't be safely repaired, because that part of the tire flexes constantly and a repair can't be relied on to hold. A hole larger than the limit, a slash, a bulge, and a tire that has been run flat all point to a replacement instead.",
          "It can feel like bad luck to be told a tire can't be fixed. The driver isn't being cautious for fun. A repair that fails at highway speed is far worse than a new tire.",
          "Age matters too. A tire with cracked rubber or tread worn down to its wear bars may hold a repair, but it isn't worth putting money into. A repair brings a tire back to as sound as it was, not better.",
        ],
      },
      {
        heading: "What a roadside repair looks like with TRA",
        paragraphs: [
          "TRA's tire repair is for a puncture in the tread. It's {{price:tire-repair-plug-patch}}, plus a {{dispatchFee}} dispatch fee charged once per job. Your driver checks the tire before starting and tells you whether it can be repaired. If it can't, the options are putting on your spare, which is {{price:flat-tire-change}}, or a replacement tire supplied and installed, which is {{price:tire-replacement}}.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a tire repair last?",
        a: "A repair to a tread puncture that's done properly is meant to last the rest of the tire's life. It's worth asking your driver what repair your tire is getting and where the hole is.",
      },
      {
        q: "Can the same tire be repaired twice?",
        a: "Sometimes, if the holes are in the tread and far enough apart that the repairs don't overlap. Your driver decides when they look at the tire.",
      },
      {
        q: "Why won't a repair work on the sidewall?",
        a: "The sidewall bends with every rotation, and the repair material can't be counted on to stay sealed while it does that. The same goes for the shoulder, where the tread curves into the sidewall.",
      },
    ],
    services: ["tire-repair-plug-patch", "flat-tire-change", "tire-replacement"],
  },
  {
    slug: "nail-in-tire-what-to-do",
    title: "Nail in Your Tire? Leave It or Pull It?",
    h1: "A nail or screw in your tire: leave it in or pull it out?",
    metaDescription:
      "Found a nail or screw in a tire? Why you should usually leave it where it is, how to check for a leak, and when it's safe to drive to a repair.",
    topic: "Tire guide",
    dek: "Leave it in. A nail or screw that's lodged in the tread is partly plugging its own hole, and pulling it out is often what turns a slow leak into a flat tire. What you do next depends on how fast the tire is losing air.",
    updated: UPDATED,
    cardImage: card("field-tire-wheel-tools"),
    sections: [
      {
        heading: "Why you shouldn't pull it out",
        paragraphs: [
          "While the nail sits in the rubber, the tire is pinching the hole shut around it. Once it's out, nothing is left to hold the hole closed, and the air can escape fast. Pull a screw out in a parking lot with no air supply and no spare, and you've turned a slow leak into a tire you can't drive on.",
          "It also tells whoever repairs the tire exactly where the hole is. That's easier to see with the object still in place than after the air has gone and the tire is down on the rim.",
        ],
      },
      {
        heading: "Check how fast it's losing air",
        paragraphs: [
          "Use a tire gauge if you have one, or look at the tire's pressure on the dash if the car shows it. Compare it with the number on the sticker in the driver's door jamb. If the pressure is close, mark the tire with chalk or tape so you remember which one it is, and check it again in an hour.",
        ],
        list: [
          "Holding steady or dropping a little: it's a slow leak. You can usually drive a short way to a repair, if you go gently and check again before you leave.",
          "Dropping noticeably, or you can hear air hissing: don't drive on it. Put the spare on or call for help.",
          "Visibly low or flat: treat it as a flat. Driving on it will ruin the tire.",
        ],
      },
      {
        heading: "Where the nail is matters",
        paragraphs: [
          "A nail in the middle of the tread is usually repairable. A nail near the edge, in the shoulder or in the sidewall isn't, because that part of the tire can't be safely repaired and the tire will need replacing.",
          "Construction debris lands on roads in any fast-growing metro, so a nail or screw in a tire is one of the more common things a DFW driver finds. Look at the tires when you park, especially after driving through a work zone.",
          "If you can't tell whether the object is in the tread or the shoulder, look at the tire straight on from the front of the car. The tread is the flat part that meets the road. Anything in the rounded corner or the side of the tire is outside it, and that matters for whether the tire can be fixed.",
        ],
      },
      {
        heading: "How we handle it",
        paragraphs: [
          "TRA's stuck screw service takes the object out and makes the tire safe in the same visit, so the hole is never left open. It's {{price:stuck-screw-in-tire}}, plus a {{dispatchFee}} dispatch fee charged once per job. If the tire turns out to be damaged beyond repair, the driver tells you on site, and your options are your spare or a replacement tire.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long can I drive with a nail in my tire?",
        a: "There's no safe number of miles. If the tire holds its pressure, a short, gentle drive to get it repaired is usually fine. A tire that's losing air shouldn't be driven at all.",
      },
      {
        q: "Will a nail always cause a flat?",
        a: "No. Plenty of nails sit in the tread for days before the tire loses much air. But the nail moves a little with every rotation, so the hole doesn't improve with time, and it's best not to wait.",
      },
      {
        q: "Can any tire with a screw in it be repaired?",
        a: "If the screw is in the tread and the hole is small, usually yes. If it's in the sidewall or the shoulder, no. Your driver tells you which it is.",
      },
    ],
    services: ["stuck-screw-in-tire", "tire-repair-plug-patch", "flat-tire-change"],
  },
  {
    slug: "tire-sidewall-damage",
    title: "Why Sidewall Tire Damage Can't Be Repaired",
    h1: "Tire sidewall damage: why it generally can't be repaired",
    metaDescription:
      "Cuts, bulges and bubbles in a tire sidewall generally mean replacement, not repair. How to spot the damage and what to do about it.",
    topic: "Tire guide",
    dek: "A tread puncture can usually be repaired. Damage to the sidewall generally can't. The reason is how the tire is built, and it's worth knowing before you spend money or miles on a tire that won't hold.",
    updated: UPDATED,
    cardImage: card("field-tire-wheel"),
    sections: [
      {
        heading: "What the sidewall does",
        paragraphs: [
          "The sidewall is the side of the tire between the tread and the wheel. It's thin compared with the tread, it carries much of the car's weight, and it bends with every turn of the wheel. Cords run through it that give the tire its shape and strength.",
          "That's the reason a repair doesn't work there. A patch or plug needs a stable spot to bond to, and the sidewall never stops moving. A repair there can work loose, and a failed sidewall at speed means a blowout.",
          "That's also why tire shops treat sidewall damage differently from a puncture, and why they aren't just being picky. A tread puncture is a small hole in a thick part of the tire that stays put. A sidewall cut is a wound in a part that never gets to rest.",
        ],
      },
      {
        heading: "Signs the sidewall is damaged",
        paragraphs: ["Run a hand along the inside and outside of each tire when you check it. Look and feel for:"],
        list: [
          "A bulge or bubble. This usually means the cords inside have broken and only the outer rubber is holding the air.",
          "A cut or gouge deep enough to show fabric or cord.",
          "Cracking, or deep scrapes from rubbing a curb.",
          "A tire that keeps losing air with no puncture you can find in the tread.",
        ],
      },
      {
        heading: "After a hard hit",
        paragraphs: [
          "Hitting a pothole, a curb or road debris can damage a sidewall without flattening the tire. The tire may look fine and then fail days later. If you hit something hard, look at the sides of the tire afterward, and ask a tire shop to look if anything seems off, including a new vibration or a car that pulls to one side.",
          "A bulge is the one to take seriously. A tire with a bulge shouldn't be driven on, even slowly, and shouldn't wait for the weekend.",
          "When a damaged sidewall does fail, it fails suddenly, and usually when the tire is hot and loaded, with the weak spot flexing on every rotation. A summer drive on a DFW freeway is exactly that.",
        ],
      },
      {
        heading: "What to do about it",
        paragraphs: [
          "The fix is a replacement tire. If the tire is flat, put the spare on and get a new tire as soon as you can. If you have no spare, TRA supplies a tire and installs it on site. Tire replacement is {{price:tire-replacement}}, plus a {{dispatchFee}} dispatch fee charged once per job. Tire availability varies by size, so give dispatch the size from the tire's sidewall or the driver's door jamb sticker, and dispatch confirms a tire is available before a driver is sent.",
          "If your car is all-wheel drive, mention it. Some of them need all four tires to have about the same wear, and a mismatched new tire can matter.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a small cut in the sidewall safe to drive on?",
        a: "Not reliably. A cut that goes through the outer rubber can be the start of a failure, and there's no way to repair it safely. Have it looked at by a tire shop before you drive any real distance.",
      },
      {
        q: "Can a sealant or a plug kit fix a sidewall puncture?",
        a: "No. Those are meant for small punctures in the tread. Sidewall damage can't be sealed in a way you should trust.",
      },
      {
        q: "Do I need to replace all four tires?",
        a: "Usually not. One tire is the normal replacement. All-wheel-drive vehicles can be an exception, so check the manual or ask the tire shop.",
      },
      {
        q: "Is a bulge in the sidewall an emergency?",
        a: "It's a reason not to drive on the tire. A bulge means the cords inside have given way, so the tire could fail at any moment. Put the spare on, or call for help, before you move the car any distance.",
      },
    ],
    services: ["tire-replacement", "flat-tire-change"],
  },
  {
    slug: "no-spare-tire-what-to-do",
    title: "No Spare Tire? Here Are Your Options",
    h1: "No spare tire in the car: what your options are",
    metaDescription:
      "Many newer cars have no spare. What a sealant kit and run-flat tires can and can't do, and how to get a tire brought to you and installed.",
    topic: "Tire guide",
    dek: "Plenty of newer cars leave the factory without a spare. If you have a flat and nothing to put on, there are still a few ways out. Which one fits depends on what's wrong with the tire and what the car came with.",
    updated: UPDATED,
    cardImage: card("field-tire-wheel-tools"),
    sections: [
      {
        heading: "Make sure there really isn't a spare",
        paragraphs: [
          "Look under the cargo floor panel first, then behind the side trim in the trunk. On many trucks and SUVs the spare hangs under the rear of the vehicle and is lowered with a crank. The owner's manual shows where it is and how to lower it.",
          "If it isn't anywhere, you probably have a car that skipped the spare to save weight and room. Carmakers usually replace it with an inflator and sealant kit, or with run-flat tires.",
          "While you're looking, read the size off the tire's sidewall. It's a string like P225/65R17, and it's the one detail a supplier needs to find a match. A photo of it on your phone saves a trip back out to the car later.",
        ],
      },
      {
        heading: "If your car has a sealant and inflator kit",
        paragraphs: [
          "The kit is meant for a small puncture in the tread. You attach it, run the compressor and the sealant coats the hole from the inside. It's a short-term fix, with speed and distance limits printed on the kit, and the sealant has an expiration date that people forget to check.",
          "It can't help with a sidewall cut, a torn tire or a large hole. If you use it, tell whoever repairs the tire afterward, because the sealant coats the inside and can complicate the repair.",
        ],
      },
      {
        heading: "If your car has run-flat tires",
        paragraphs: [
          "Run-flat tires have reinforced sidewalls that hold the car up for a limited distance after the air is gone, commonly around 50 miles at no more than 50 mph. The manual gives your car's numbers. The tire warning light is how you find out.",
          "A run-flat that has been driven low or flat often has to be replaced instead of repaired. Check with the tire maker or a shop before assuming it can be saved.",
        ],
      },
      {
        heading: "Having a tire brought to you",
        paragraphs: [
          "With no spare and a tire that can't be sealed, the choices are a replacement tire delivered to you or a tow to a shop. TRA's tire replacement supplies the tire and installs it where you're parked, so you don't need a usable spare in the vehicle. It's {{price:tire-replacement}}, plus a {{dispatchFee}} dispatch fee charged once per job.",
          "Tire availability varies, and dispatch confirms a tire is available, and your total, before a driver is sent. Have the tire size ready. It's printed on the sidewall, and the driver's door jamb sticker lists it too. We don't tow, so if the wheel itself is damaged or the car can't be driven for another reason, you'll need a tow company.",
          "Don't drive to a shop on a flat to avoid the wait. A car sitting where it is can wait for a tire to come to it, and a tire driven flat is often ruined, and sometimes the wheel too.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you change my flat if I have no spare?",
        a: "A flat tire change puts on the spare you already carry, so it needs one. Without a usable spare, ask for tire replacement instead, where we supply a tire and install it.",
      },
      {
        q: "What should I tell dispatch?",
        a: "The year, make and model, your exact location, the tire size if you can read it, and whether the car has run-flat tires. Those details help dispatch confirm that a tire is available.",
      },
      {
        q: "Is it okay to drive with sealant in a tire?",
        a: "For a short distance at the kit's speed limit, to get to a repair. It isn't a permanent fix, and the tire should be looked at soon.",
      },
    ],
    services: ["tire-replacement", "tire-repair-plug-patch", "flat-tire-change"],
  },
  {
    slug: "tire-blowout-on-the-highway",
    title: "Tire Blowout on the Highway: What to Do",
    h1: "A tire blowout on the highway: the first ten seconds, and what comes after",
    metaDescription:
      "What to do in the first ten seconds of a tire blowout at highway speed, how to get to safety, and what to do once the car has stopped.",
    topic: "Safety guide",
    dek: "A blowout is loud, sudden and frightening, and the instinct to stomp the brake is the wrong one. What you do in the first ten seconds matters more than anything that comes after.",
    updated: UPDATED,
    cardImage: card("field-tire-shoulder-night"),
    sections: [
      {
        heading: "The first ten seconds",
        paragraphs: [
          "A blowout usually comes with a bang or a heavy flapping sound, and the car pulls toward the side of the bad tire. Expect that. The car is almost always still controllable if you stay calm.",
        ],
        list: [
          "Keep both hands on the wheel and hold the car straight. Don't jerk it back.",
          "Ease your foot off the gas. Let the car slow down on its own.",
          "Don't slam the brakes, which can upset the car further and swing the back end around.",
          "Turn on the hazard lights.",
          "Once the car has slowed and feels steady, brake gently and steer to the shoulder.",
        ],
      },
      {
        heading: "Getting off the road",
        paragraphs: [
          "Pick the nearest clear spot, which on a lot of DFW freeways means a narrow shoulder, a barrier, or none at all in a construction zone. Don't try for an exit that's a long way off. If the only clear spot is a little further on, go there slowly. The tire is already gone, and the aim now is simply to be out of the lane.",
          "If there is nowhere to go and you stop in a lane, leave the hazards on, stay buckled in the car and call 911. Don't get out onto a live roadway.",
        ],
      },
      {
        heading: "Once you've stopped",
        paragraphs: [
          "If the shoulder is wide and you can move well clear of traffic, get everyone out on the side away from the road and stand behind a barrier or well back from the traffic. If the shoulder is narrow, staying belted inside the car is often safer than standing next to fast traffic.",
          "Look at the damage from a safe spot. A burst tire can tear fender liners, wires and brake lines as it comes apart. Don't drive it any further than you have to. Changing the tire on a narrow shoulder isn't worth the risk, even though the spare is right there.",
        ],
      },
      {
        heading: "Getting the wheel back on",
        paragraphs: [
          "A blown tire can't be repaired, so the choices are the spare or a new tire. TRA's flat tire change puts on the spare you already carry. It's {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. If there's no usable spare, we supply a tire and install it on site, and that's {{price:tire-replacement}}.",
          "Tell dispatch the road, the direction, the nearest exit or mile marker, and which side of the road you're on. We text or call when the driver is on the way. Our average arrival is 30 minutes, with the actual time depending on location and traffic.",
          "Afterward, take a second look at the other tires. A tire that blew was sometimes underinflated or worn, and the rest may be in the same shape. Check the pressure and tread on all four, and on the spare, before you drive on.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why shouldn't I brake right away?",
        a: "Hard braking shifts weight and can turn a pull into a spin, especially at speed. Lifting off the gas and letting the car slow first keeps it steadier.",
      },
      {
        q: "Should I keep driving to the next exit?",
        a: "Only if it's close. A blown tire damages the wheel and parts around it with every yard, so get off the road at the first safe spot.",
      },
      {
        q: "Can a blown tire be repaired?",
        a: "No. The tire has failed structurally. You'll need the spare or a replacement tire.",
      },
    ],
    services: ["flat-tire-change", "tire-replacement"],
  },
  {
    slug: "driving-on-a-flat-tire",
    title: "Driving on a Flat Tire: What It Does",
    h1: "What driving on a flat tire does to the tire and the wheel",
    metaDescription:
      "How driving on a flat tire ruins the tire and can bend the wheel, how short a distance can do it, and what to do if you have to move the car.",
    topic: "Tire guide",
    dek: "It feels harmless to roll a few more blocks on a flat tire to get to a better spot. The tire pays for it. A tire that could have been fixed for a modest amount can become a total loss in less distance than you'd think.",
    updated: UPDATED,
    cardImage: card("field-tire-wheel"),
    sections: [
      {
        heading: "What happens inside the tire",
        paragraphs: [
          "A tire holds its shape with air. Take the air away and the sidewall folds under the weight of the car and gets pinched between the road and the wheel rim. Every rotation grinds the inside of it. The cords break, the rubber heats up and the inner liner can tear, even when the outside still looks all right.",
          "That's why a flat tire that has been driven on usually can't be repaired, even if the original puncture was a tiny hole in the tread. A technician has to look at the inside, and what they often find is damage that wasn't there before.",
        ],
      },
      {
        heading: "What happens to the wheel",
        paragraphs: [
          "Once the tire is crushed, the metal rim starts taking the hits. A wheel can bend or crack, especially on a bump or a pothole, and an alloy wheel is less forgiving than a steel one. A bent wheel can cause a vibration and may not hold air at the bead. The tire-pressure sensor inside the wheel can be damaged as well.",
          "A shredding tire can also whip against the fender liner, wiring and brake lines. On some cars the flailing rubber is the more expensive problem.",
        ],
      },
      {
        heading: "How far is too far",
        paragraphs: [
          "There's no distance that's safe to promise. A few hundred yards at a walking pace to get out of a lane is a different matter from a mile at 40 mph. If the tire is only low, with air still in it, a slow drive to a nearby pump or shop can be reasonable. If it's flat to the rim, treat every yard as damage.",
          "Speed makes it worse. The heat that builds up inside the tire climbs with speed, and a flat tire driven at highway speed can come apart quickly. Run-flat tires are built for a limited distance at reduced speed, so the rule is different for them. Your manual gives the figures.",
        ],
      },
      {
        heading: "If you've already driven on it",
        paragraphs: [
          "Don't assume the tire is repairable. Let the tire be inspected from the inside before anyone plugs or patches it, and have the wheel checked if the car has started to shake. TRA doesn't repair wheels. If the wheel is bent, that's a shop job.",
          "Seen next to each other, the numbers are clear. A tire repair for a tread puncture is {{price:tire-repair-plug-patch}}, and a replacement tire is {{price:tire-replacement}}, each plus the {{dispatchFee}} dispatch fee charged once per job. The gap between those two is roughly what a few extra blocks on the flat can cost you. If you have a spare, the quickest route back on the road is a spare tire change, which is {{price:flat-tire-change}}.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I drive a flat tire to a shop that's close by?",
        a: "It's a bad idea even when the shop is close. The tire will likely be ruined and the wheel can be damaged. A mobile repair or a spare change avoids both.",
      },
      {
        q: "Can I tell whether I've damaged the tire?",
        a: "Not reliably from the outside. Signs include a sidewall that looks creased or scuffed, a bulge, a vibration when you drive, and a rim with scrapes. The inside is what matters, and only a technician can inspect that.",
      },
      {
        q: "What if I have to move the car out of the road?",
        a: "Move it as little as possible, slowly, with the hazard lights on, and only to a place that's safer. Safety comes before the tire.",
      },
    ],
    services: ["flat-tire-change", "tire-repair-plug-patch", "tire-replacement"],
  },
  {
    slug: "tire-pressure-light-texas-heat",
    title: "Tire Pressure Light in Texas: Why It Comes On",
    h1: "Why your tire pressure light comes on when the Texas temperature swings",
    metaDescription:
      "Why the tire pressure light comes on after a cold front, what a hot day does to pressure, and how to tell a temperature swing from a real leak.",
    topic: "Tire guide",
    dek: "The light usually shows up on the first cold morning after a warm week. That's not a coincidence, and it's not always a leak. Here's how to tell a weather problem from a tire problem.",
    updated: UPDATED,
    cardImage: card("field-tire-wheel-tools"),
    sections: [
      {
        heading: "What the light is telling you",
        paragraphs: [
          "The tire pressure warning light is the horseshoe-shaped symbol with an exclamation point inside. It comes on when a sensor reads a tire well below the recommended pressure. Many systems are set to warn when a tire is about a quarter below where it should be, so by the time the light shows, the tire is already noticeably low.",
        ],
      },
      {
        heading: "How temperature moves the number",
        paragraphs: [
          "Air pressure follows temperature. As a rule of thumb, a tire loses about 1 psi for every 10 degrees the air gets colder. North Texas is a place where a cold front can drop the temperature 30 degrees or more in a day, so a tire that sat a little low when it was warm can cross the warning line overnight. A tire at 35 psi on a 70-degree afternoon is closer to 32 on a 40-degree morning. That's three pounds with no leak at all.",
          "That's why the light often comes on in the morning and goes out later. Driving heats the tires and raises the pressure a few pounds. The light going out doesn't mean the tire is fine. It means the weather helped.",
        ],
      },
      {
        heading: "What heat does",
        paragraphs: [
          "Heat does the opposite. A tire's pressure rises as it warms, which is normal and which the recommended pressure already allows for. The summer risk is a tire that's low to begin with. It flexes more, runs hotter and wears faster, and a hot freeway is where an underinflated tire fails.",
          "So a summer light is more likely to mean a real leak or a tire that was neglected than a swing in the weather.",
        ],
      },
      {
        heading: "What to do",
        paragraphs: [
          "Check the pressure with a gauge while the tires are cold, either before you drive or after the car has sat for a few hours. Use the number on the sticker in the driver's door jamb, not the larger number molded into the sidewall, which is the tire's maximum. Add air to match the sticker.",
          "A basic gauge costs very little and lives in the glove box. Gas station air pumps often have a gauge built in, but a pump that's been dragged around for years can be off, so trust your own. Check all four tires, not only the one the light seems to point at.",
          "If the light is back within a day or two, or one tire keeps dropping, the tire is leaking. A screw or nail in the tread is the usual cause. TRA removes it and makes the tire safe for {{price:stuck-screw-in-tire}}, and repairs a tread puncture for {{price:tire-repair-plug-patch}}, each plus the {{dispatchFee}} dispatch fee charged once per job. If a light flashes for about a minute and then stays on, the system itself may be at fault, and that's a question for a shop.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it okay to drive with the tire pressure light on?",
        a: "Check the tires first. If one is visibly low or flat, don't drive on it. If they're only a little low, fill them to the door jamb number at the next stop.",
      },
      {
        q: "Why is the light still on after I added air?",
        a: "Some systems take a few miles of driving to reset. If it stays on after that, a tire may still be low, or one of the sensors may need a shop to look at it.",
      },
      {
        q: "How often should I check tire pressure?",
        a: "Once a month, and after a big temperature change. It takes a couple of minutes with a gauge and is the cheapest tire maintenance there is.",
      },
    ],
    services: ["tire-repair-plug-patch", "stuck-screw-in-tire", "flat-tire-change"],
  },
  {
    slug: "locked-keys-in-car-what-to-do",
    title: "Locked Keys in Your Car? What to Do",
    h1: "Locked your keys in the car: what to do first, and what not to try",
    metaDescription:
      "Keys locked inside? What to check first, why a coat hanger or a wedge can do real damage, and what to have ready when you call for help.",
    topic: "Lockout guide",
    dek: "It happens to careful people. The keys go in the cup holder, the door shuts, and the lock does what it was built to do. What you do in the next five minutes decides whether this costs you a short wait or a repair bill.",
    updated: UPDATED,
    cardImage: card("field-arrival-gear"),
    sections: [
      {
        heading: "Check these before you call",
        paragraphs: [
          "First, if a child or a pet is inside the car, stop and call 911. Everything else on this page can wait.",
          "If not, walk around the car and try every door, including the back doors and the trunk or hatch. Sometimes one door simply didn't lock. Check for a keypad on the door pillar or an app from the manufacturer that can unlock the car from your phone, which some cars have. And think about a spare key: at home, at work, or with a family member who can bring it.",
          "Look at the windows and the sunroof too. If one was left open, you may be able to reach a lock button, but only if you can do it without forcing anything. Don't push on a window that's meant to be closed.",
        ],
      },
      {
        heading: "What not to try",
        paragraphs: [
          "A coat hanger, a long strip of metal or a wedge pushed into the door frame looks easy on video. In a modern door it can bend the frame, tear the weatherstripping, scratch the paint and catch wiring that runs through the door, including the wires for the side airbag. A broken window leaves you with glass in the seats and a bill that's higher than the cost of a lockout.",
          "If it works, you may still have caused damage you'll find later. If it doesn't, the person you call next starts with a more damaged car.",
        ],
      },
      {
        heading: "While you wait",
        paragraphs: [
          "In a DFW summer, find shade and water if the wait will be long, and keep clear of the road if you're at the curb. If the engine is still running with the keys inside, say so when you call, and stay close to the car. It's burning fuel the whole time you wait.",
        ],
      },
      {
        heading: "Getting it opened",
        paragraphs: [
          "When you call, have your exact location, the year, make and model, and whether the keys are in the cabin or the trunk ready. Keep your ID handy. For everyone's safety, the driver confirms the vehicle is yours before unlocking it.",
          "Our average arrival is 30 minutes, and how long it takes to reach you depends on where you are and the traffic between us and you. We text or call when the driver is on the way, so keep your phone with you instead of leaving it inside the car with the keys.",
          "TRA's drivers use non-destructive entry methods whenever possible. A vehicle lockout is {{price:lockout}}, plus a {{dispatchFee}} dispatch fee charged once per job. Keys in the trunk are a separate, longer job at {{price2:lockout}}, plus the dispatch fee. We open vehicles. We don't cut or program keys.",
        ],
      },
    ],
    faqs: [
      {
        q: "What do I need to show to prove the car is mine?",
        a: "ID, or another way to show the vehicle is yours. The driver confirms ownership before opening anything.",
      },
      {
        q: "Will opening the door damage my car?",
        a: "Our drivers use non-destructive entry methods whenever possible, so the car isn't marked up. That's the main reason not to try a coat hanger yourself.",
      },
      {
        q: "What if my keys aren't in the car but lost?",
        a: "Then it isn't a lockout. You need a replacement key, which comes from a locksmith or the dealer. We open vehicles, and we don't make keys.",
      },
      {
        q: "What if the engine is still running?",
        a: "Tell dispatch when you call, and stay close to the car. A locked, running car with the keys inside is burning fuel, and you don't want to lose sight of it.",
      },
    ],
    services: ["lockout"],
  },
  {
    slug: "keys-locked-in-trunk",
    title: "Keys Locked in the Trunk: Why It's Different",
    h1: "Keys locked in the trunk: why it's a different job from a locked door",
    metaDescription:
      "Why getting into a trunk with your keys inside is a longer job than opening a door, what to try first, and how to keep it from happening again.",
    topic: "Lockout guide",
    dek: "Opening a door lock is a job most vehicles are built to allow from outside. A trunk is a different story. Many newer cars don't have a way in from outside at all, and that's why this job is priced separately.",
    updated: UPDATED,
    cardImage: card("field-arrival-gear"),
    sections: [
      {
        heading: "Why a trunk is harder",
        paragraphs: [
          "A door is made to be opened with a key or a fob from the outside, so it has a lock the driver can work with. Many newer cars have no key cylinder on the trunk at all. They release it with a button inside, with the fob, or by electric latch, and with the keys inside the trunk and the doors locked, there's nothing to press.",
          "So the job isn't just opening a lid. Getting to the release usually means getting into the cabin first, then reaching the trunk from the inside, and the tools and the time are different. That's what sets it apart from a door lockout.",
          "A fold-down rear seat is sometimes a way through, since on some cars the seat back can be released from inside the cabin. That isn't true of every model, and some can only be released from the trunk side, so don't count on it.",
        ],
      },
      {
        heading: "What to check before you call",
        paragraphs: ["A couple of minutes of looking can change the answer:"],
        list: [
          "Whether the rear seat folds, and if the release is inside the cabin. On some sedans it is, and a folded seat gives access to the trunk.",
          "Whether there's a spare key or fob at home or with someone nearby.",
          "Whether the car has a trunk release button on the dash or on the driver's door, and whether the doors are locked or just shut.",
          "Whether the keys are really in the trunk, or in the cargo area of an SUV or hatchback that connects to the seats. That can be a different job, so tell dispatch which it is.",
        ],
      },
      {
        heading: "What it costs and why",
        paragraphs: [
          "Keys in the trunk are priced as their own job, because the trunk is harder to get into and takes longer: {{price2:lockout}}, plus a {{dispatchFee}} dispatch fee charged once per job. A lockout where the keys are in the cabin is {{price:lockout}}, plus the dispatch fee. Tell dispatch exactly where the keys are, in the cabin, the trunk or the cargo area, and we tell you which job it is.",
          "The driver confirms the vehicle is yours before starting, so have ID or other proof of ownership with you.",
        ],
      },
      {
        heading: "How to keep it from happening again",
        paragraphs: [
          "Most trunk lockouts happen when you're loading something. You put the keys on top of the bags, set the bags in the trunk and close the lid. Keep the keys in your pocket until the lid is closed, and don't hand them to a child to hold while you load.",
          "Keep a spare key or fob somewhere you can get to when the car is locked, such as at home or with someone you trust. A glove box doesn't count, since that's inside the car with everything else.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why does it cost more than a regular lockout?",
        a: "Trunk access is a different job from opening a door. It takes longer and needs different tools, so it's priced separately.",
      },
      {
        q: "Does my SUV or hatchback count as a trunk?",
        a: "Often the cargo area is open to the rear seats, so it may be handled as a normal lockout. Tell dispatch where the keys are and the vehicle, and they'll tell you which job it is.",
      },
      {
        q: "Can I get a trunk opened without the keys?",
        a: "Yes, that's the job. How it's done depends on the vehicle, and the driver tells you what's possible with yours once they've seen it.",
      },
    ],
    services: ["lockout"],
  },
  {
    slug: "child-or-pet-locked-in-car",
    title: "Child or Pet Locked in a Car: Call 911",
    h1: "A child or pet locked in a car: call 911 first",
    metaDescription:
      "If a child or pet is locked inside a car, call 911 first. What to say, what to do until help arrives, and why Texas heat makes every minute count.",
    topic: "Safety guide",
    dek: "If anyone, a child or an animal, is locked in a car, call 911 before you call a roadside company or anyone else. In Texas heat the minutes count, and a roadside driver can't send what 911 can.",
    updated: UPDATED,
    cardImage: card("field-arrival-van"),
    sections: [
      {
        heading: "Call 911 first",
        paragraphs: [
          "Tell the dispatcher there's a child, or a pet, locked in a vehicle. Give the exact place: the store, the lot, the row, the color and make of the car. Describe what you can see, such as whether the person is awake, moving or responding. Then stay on the line.",
          "The dispatcher can tell you what to do while responders are on the way, including whether it's appropriate to try to open or break a window. Follow what they say. Don't leave the car to look for the owner, and don't hang up to call anyone else.",
        ],
      },
      {
        heading: "Why Texas heat makes this urgent",
        paragraphs: [
          "A closed car heats up far faster than people expect, and the inside can get well beyond the temperature outside within minutes. Cracking a window does very little. Even a day that feels mild can turn a parked car into a danger.",
          "Children's bodies heat up faster than an adult's, and animals can't cool themselves the way people do. Warning signs include flushed or very pale skin, heavy panting or drooling, drowsiness, limpness, vomiting, or not responding. Tell the dispatcher what you see.",
          "Nobody should have to judge whether it's hot enough to matter. If a child or an animal is alone in a closed car and you can't get to them, that's already enough to call.",
        ],
      },
      {
        heading: "While you wait for help",
        paragraphs: [
          "Stay beside the car, and keep the child or animal in sight. Try every door in case one was left unlocked. If you're at a store, ask staff to page the owner, but do it in parallel with the 911 call, not instead of it. If you can talk to a child through the glass, keep them calm and awake.",
          "This applies if the car is your own and the keys are inside, too. A running engine or an air conditioner doesn't change it. Engines stall and fuel runs out, and the person is still locked in.",
        ],
      },
      {
        heading: "After everyone is safe",
        paragraphs: [
          "Once the emergency is over, if the keys are still inside and the car is still locked, that's an ordinary lockout. TRA opens vehicles, and a lockout is {{price:lockout}}, plus a {{dispatchFee}} dispatch fee charged once per job. We're not an emergency service, and we don't promise to be quicker than 911. If anyone is inside a locked car, call 911 and don't wait for us.",
        ],
      },
      {
        heading: "How to keep it from happening",
        paragraphs: [
          "Never leave a child or a pet in a parked car, even for a minute, and even with the windows down. Put something you need, such as a bag, a shoe or your phone, in the back seat, so you have to look there before you walk away. Keep keys and fobs out of children's reach, and lock the car at home so a child can't climb in and get stuck.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I call a lockout company instead?",
        a: "Not as a first step. When anyone is inside, call 911. If 911 tells you responders are coming, let them handle it.",
      },
      {
        q: "How long can a child or pet be left in a car?",
        a: "No amount of time is safe in Texas heat. The inside of a car can become dangerous within minutes, so the only safe time is none.",
      },
      {
        q: "What if I see someone else's child or pet in a locked car?",
        a: "Call 911 and say what you see and where. Don't wait for the owner to come back.",
      },
    ],
    services: ["lockout"],
  },
  {
    slug: "locksmith-or-roadside-for-a-lockout",
    title: "Locksmith or Roadside Service for a Lockout?",
    h1: "Locksmith or roadside service for a car lockout: how to choose",
    metaDescription:
      "Locked out of your car? How a roadside lockout differs from a locksmith visit, which one fits your problem, and what to ask before anyone is sent.",
    topic: "Lockout guide",
    dek: "Both can get you back into your car, so the question is really about the rest of the problem. If the keys are sitting on the seat, either works. If the keys are gone, broken or never worked right, you want someone who can make a key.",
    updated: UPDATED,
    cardImage: card("field-arrival-van"),
    sections: [
      {
        heading: "What each one does",
        paragraphs: [
          "A roadside lockout service does one thing well: it gets you into the vehicle when the keys are inside, usually without leaving a mark, and comes to wherever the car is. It's quick and it's narrow.",
          "A locksmith does that too, and also works on the keys and locks themselves: cutting and programming keys, repairing a lock that's stuck or damaged, working on an ignition. The overlap is why the choice can be confusing.",
          "A third source is worth a call before you pay anyone: your insurer, your car maker's roadside program or the dealer. A dealer can make keys for your model, and some roadside programs include lockouts.",
        ],
      },
      {
        heading: "Match the service to the problem",
        paragraphs: ["The easiest way to choose is to ask what's actually wrong:"],
        list: [
          "The keys are inside the car and you can see them: either one works. Choose on price and how soon someone can arrive.",
          "The keys are lost or stolen, or you only ever had one: you need a new key made, which is a locksmith or dealer job.",
          "A key broke off in the door lock or the ignition: that's a locksmith job.",
          "The fob works, but the lock won't turn, or the key turns but the door won't open: the lock itself probably needs repair.",
          "The keys are in the trunk: a lockout service handles it, as a longer job priced separately.",
        ],
      },
      {
        heading: "Questions to ask any provider",
        paragraphs: [
          "Before anyone is sent, ask for the total, including the trip fee, not just the price of the job. Ask whether they'll need proof the car is yours, because a legitimate provider will. Ask for the company's name and where it's based, and be cautious if the answers are vague or the person won't say.",
          "A very low phone quote that grows once someone arrives is a pattern worth watching for. A straight answer about the total, given before anyone is dispatched, is the thing to look for. And ask how they'll open the car, since the answer should be a non-destructive method.",
          "When someone arrives, check that the name on the vehicle or the invoice matches the business you called. Ask for an invoice when the work is done, and keep it.",
        ],
      },
      {
        heading: "What TRA does",
        paragraphs: [
          "TRA's dispatch is local to Dallas–Fort Worth, not an out-of-state call center. A lockout is {{price:lockout}}, plus a {{dispatchFee}} dispatch fee charged once per job, and keys locked in the trunk are {{price2:lockout}}, plus the dispatch fee. The driver confirms the vehicle is yours before opening it.",
          "We open vehicles. We don't cut or program keys. If the real problem is a missing or broken key, that's a locksmith's job, and it's better to know before anyone is sent.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a locksmith always more expensive?",
        a: "Not always, and not always cheaper. The job decides the price, so compare the total, with every fee included, before you agree.",
      },
      {
        q: "Does my insurance or car warranty include a lockout?",
        a: "Some roadside coverage does. It takes two minutes to check your policy, your warranty paperwork and any card benefits before you pay out of pocket.",
      },
      {
        q: "What should I have ready when I call?",
        a: "Your exact location, the year, make and model, whether the keys are in the cabin or the trunk, and ID or other proof the car is yours.",
      },
    ],
    services: ["lockout"],
  },
  {
    slug: "car-broke-down-on-the-highway-dfw",
    title: "Car Broke Down on a DFW Highway? Do This",
    h1: "Your car broke down on I-35, I-30, LBJ or a tollway: what to do",
    metaDescription:
      "Broke down on I-35, I-30, LBJ or a DFW tollway? How to get off the road, who to call, and what to tell dispatch so help can find you.",
    topic: "Safety guide",
    dek: "On a DFW freeway the car isn't the main problem. Traffic is. Everything below is about getting you and the car away from it, and then getting the right help sent to the right spot.",
    updated: UPDATED,
    cardImage: card("field-tire-shoulder-night"),
    sections: [
      {
        heading: "Get off the road",
        paragraphs: [
          "Turn on the hazard lights as soon as something feels wrong, before the car has even stopped. Let it slow and steer for the nearest shoulder. That's usually the right shoulder. Some DFW freeways also have a left shoulder along the median or the managed lanes, and it's an option when you can't safely cross traffic to reach the right one.",
          "Stop as far from the traffic lane as you can, turn the wheels away from the road, and set the parking brake. In a work zone with barriers on both sides, a slow crawl on the shoulder to a clear spot beats stopping in a lane, if the car allows it.",
        ],
      },
      {
        heading: "Stay in the car or get out",
        paragraphs: [
          "Where you wait depends on the shoulder. If it's wide and there's a barrier or guardrail you can stand behind, well away from the road, get everyone out on the side away from traffic. If the shoulder is narrow, staying belted inside the car, with the hazards on, is often safer than standing beside fast traffic.",
          "If you can't get out of a lane, or anyone is hurt, call 911. Don't try to flag down passing drivers, and don't accept a ride from a stranger.",
          "Keep children buckled in the car until you've decided where everyone will wait. Fast traffic and hot asphalt are a bad mix for small children, and for a dog on a leash.",
        ],
      },
      {
        heading: "Who to call",
        paragraphs: [
          "On an NTTA toll road, dial #999. NTTA describes its roadside help as free. On the LBJ and North Tarrant Express TEXpress lanes the number is #789. For everyone else, call your insurer's or car maker's roadside number if you have one, or a private service like ours.",
          "There are also free sheriff-run patrols on many DFW highways. We have a separate guide on those and what they do and don't cover.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: ["Whoever you call, the first thing they need is where you are:"],
        list: [
          "The road and direction, such as southbound I-35E.",
          "The nearest exit, cross street or mile marker, which you can usually see on a green sign.",
          "Whether you're on the left or right shoulder.",
          "What happened: a flat, a car that won't start, a warning light, smoke.",
          "The year, make and model and the color.",
        ],
      },
      {
        heading: "What TRA can and can't do",
        paragraphs: [
          "TRA can put on your spare, which is {{price:flat-tire-change}}, or jump a dead battery, which is {{price:jump-start}}, each plus a {{dispatchFee}} dispatch fee charged once per job. Arrival averages 30 minutes, with the actual time set by your location and the traffic. We text or call when the driver is on the way.",
          "We don't tow and we don't repair engines. If the car overheated, lost power or has a failed transmission, you'll need a tow company.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I stop on the shoulder?",
        a: "A shoulder is there for emergencies and breakdowns. Pull as far over as you can, and call for help right away.",
      },
      {
        q: "Should I raise the hood?",
        a: "Only if you can do it from a safe spot. Staying clear of the roadway matters more than showing the hood is up. The hazard lights already say you're stopped.",
      },
      {
        q: "What if my phone has no signal?",
        a: "Stay with the car and keep trying. Phones can usually place a 911 call over any available network, even when your own carrier shows no bars.",
      },
    ],
    services: ["flat-tire-change", "jump-start"],
  },
  {
    slug: "roadside-assistance-vs-auto-club",
    title: "Roadside Assistance vs. an Auto Club",
    h1: "Pay per use or an annual membership: which kind of roadside help fits you",
    metaDescription:
      "Pay for roadside help only when you need it, or pay a yearly fee? How each works, how to compare them, and what to check before you sign up.",
    topic: "Cost guide",
    dek: "There are two ways to pay for roadside help: a membership you pay for every year whether you use it or not, and a service you pay for only when you need it. Neither is always cheaper. It depends on how often your car lets you down.",
    updated: UPDATED,
    cardImage: card("field-arrival-van"),
    sections: [
      {
        heading: "How each one works",
        paragraphs: [
          "A membership charges a yearly fee. In return it covers a number of calls, usually including some towing, and often adds extras such as discounts. You've paid before anything goes wrong.",
          "Pay per use works the other way. You pay when you call, for the job you ask for. TRA is priced this way: a published service price, plus a {{dispatchFee}} dispatch fee charged once per job.",
        ],
      },
      {
        heading: "Doing the math",
        paragraphs: [
          "Take the yearly fee and divide it by what a single call would cost you. The answer is how many calls a year it takes for the membership to pay for itself. For reference, a jump start is {{price:jump-start}}, a flat tire change is {{price:flat-tire-change}}, and a lockout is {{price:lockout}}, each plus the {{dispatchFee}} dispatch fee.",
          "If you've called for help once in the last three years, a yearly fee is a lot to pay for the chance. If the car is older, the commute is long or you drive for work, the odds change. Count only what the membership gives you that you'd really use, such as towing, and leave out the rest.",
        ],
      },
      {
        heading: "What a membership can include that we don't",
        paragraphs: [
          "Towing is the big one. Many memberships include some towing, up to a set distance. TRA doesn't tow. If the likeliest way your car lets you down is a failure that needs a tow, a plan with towing may be what you want, and you can still call us for jump starts, spare changes and lockouts. The two aren't exclusive.",
        ],
      },
      {
        heading: "Who tends to come out ahead",
        paragraphs: [
          "Pay per use tends to suit a driver with a newer, reliable car who rarely calls for help, and who already has some coverage through an insurance policy, a card or the manufacturer. A membership tends to suit a driver whose car is older, whose commute is long on I-35 or I-30, or who wants a tow built in. It's a rough guide, not a rule.",
          "Two drivers in one household can land in different places. The one with the twelve-year-old car on the daily drive across the metroplex and the one with a new car and a short trip to work don't face the same odds, and the plan that suits one may be wasted on the other.",
        ],
      },
      {
        heading: "Read the terms before you pay",
        paragraphs: ["Whichever plan you look at, check these before signing:"],
        list: [
          "How many calls a year are covered, and what a call that goes over costs.",
          "The towing limit in miles, and what happens past it.",
          "Whether it covers you in any car, or only one vehicle.",
          "Any waiting period before the coverage starts.",
          "Whether you already have roadside help through your insurer, your car's warranty or a credit card. Paying twice for the same cover is an easy way to waste money.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is a membership worth it for an older car?",
        a: "It can be, since older cars call for help more often, and it's more likely to need a tow. Work through the math in this guide with your own numbers.",
      },
      {
        q: "Can I use both a membership and pay-per-use service?",
        a: "Yes. If a job isn't covered by your plan, or you've used up your calls for the year, you can still call a pay-per-use service.",
      },
      {
        q: "Are there any hidden fees with pay-per-use?",
        a: "Ask any provider for the total before they dispatch. With TRA, the service price and the dispatch fee are both published, and the fee is charged once per job.",
      },
    ],
    services: ["jump-start", "flat-tire-change", "lockout"],
  },
  {
    slug: "does-car-insurance-cover-roadside-assistance",
    title: "Does Car Insurance Cover Roadside Help?",
    h1: "Does your car insurance cover roadside assistance? How to find out",
    metaDescription:
      "Roadside assistance is often an optional add-on to car insurance. How to check your own policy, the questions to ask, and how reimbursement works.",
    topic: "Cost guide",
    dek: "Sometimes. On many policies roadside help is an optional add-on, not a default, so the only way to know is to look. This guide is general information. Your policy's own wording is what counts.",
    updated: UPDATED,
    cardImage: card("field-arrival-gear"),
    sections: [
      {
        heading: "Where to look in your policy",
        paragraphs: [
          "Roadside coverage can be listed as roadside assistance, emergency road service, or towing and labor, and the name varies by insurer. Start with the declarations page, which lists each coverage you're paying for. If you don't see it, it may not be on the policy.",
          "Your insurer's app or online account usually shows the same list, and a call to your agent gets a straight answer in a few minutes. Ask before you need it, not on the shoulder.",
          "If it isn't on the declarations page, ask whether it's a separate line or bundled with another coverage. Policies and insurers differ, and the same words can mean different things from one company to the next.",
        ],
      },
      {
        heading: "What to ask",
        paragraphs: ["If you do have it, the details decide how useful it is:"],
        list: [
          "Which services are included: a jump start, a spare tire change, a lockout, a delivery of fuel, a tow.",
          "The limits, such as a dollar cap per call, a number of calls a year, or a maximum towing distance.",
          "Whether you must use the insurer's own provider, or can use someone else and be reimbursed.",
          "Whether using it counts as a claim, and whether it affects your premium.",
        ],
      },
      {
        heading: "What it usually does and doesn't pay for",
        paragraphs: [
          "Roadside coverage is generally for the service call itself: getting you started or moving again. Policies commonly pay for the call and not for parts, so a new battery or tire may still be your cost even when the labor is covered. Check the wording on yours.",
          "Some policies ask you to call them first, or to use their own provider, before they pay anything. If you'd rather hire your own, ask first whether that changes what they'll pay.",
        ],
      },
      {
        heading: "Other places roadside cover hides",
        paragraphs: [
          "Insurance isn't the only source. A new car often comes with roadside help from the manufacturer for a set number of years. Some credit cards include it as a card benefit, and some memberships and employers do too. Check them all before you pay for another.",
        ],
      },
      {
        heading: "How reimbursement usually works",
        paragraphs: [
          "If your policy reimburses an outside provider, the insurer will usually want proof. Ask what they need, but expect an itemized invoice with the date, the service and the amount charged, plus the details of the vehicle. There's often a deadline to file and a limit on what they'll pay. Keep the invoice from any roadside job, because you may need it.",
          "TRA's pricing is the service price plus a {{dispatchFee}} dispatch fee charged once per job, for example {{price:flat-tire-change}} for a flat tire change or {{price:jump-start}} for a jump start. Whether your insurer reimburses a provider like ours is a question for them, and it's worth asking before you pay.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is roadside assistance included in basic car insurance?",
        a: "Not usually by default. On many policies it's an optional add-on you pay for. Check your own declarations page, because policies and insurers differ.",
      },
      {
        q: "Can I use a roadside company my insurer didn't send?",
        a: "Some policies allow it and reimburse you, within limits, and some don't. Ask your insurer before you hire one.",
      },
      {
        q: "Will I get a receipt for a roadside job?",
        a: "Ask for an itemized invoice from any provider, and keep it. An insurer or a warranty claim may need it.",
      },
    ],
    services: ["flat-tire-change", "jump-start"],
  },
  {
    slug: "free-roadside-help-dfw",
    title: "Free Roadside Help in DFW: What Exists",
    h1: "Free roadside help in Dallas–Fort Worth: the public patrols, and where they stop",
    metaDescription:
      "North Texas has free patrols for stranded drivers, run by counties and the NTTA. What they do, how to reach them, and where their help ends.",
    topic: "Cost guide",
    dek: "North Texas does have free help for drivers stuck on the road. It's run by different agencies on different roads, and none of it is a promise that someone is nearby. Here's what the published sources say, who to call, and where it stops.",
    updated: UPDATED,
    cardImage: card("field-arrival-van"),
    sections: [
      {
        heading: "Who runs the patrols",
        paragraphs: [
          "The North Central Texas Council of Governments describes a regional Mobility Assistance Patrol Program that provides free assistance to stalled and stranded motorists on regional highways, toll roads and managed lanes. It covers Dallas and Tarrant counties and parts of Collin, Denton, Ellis, Parker, Johnson and Rockwall counties.",
          "The patrols are operated by the Dallas County Sheriff's Office, the Tarrant County Sheriff's Office and the North Texas Tollway Authority, with private partners serving the LBJ TEXpress and NTE TEXpress corridors. The council also says it's studying patrol routes and hours, so details can change.",
        ],
      },
      {
        heading: "What they do",
        paragraphs: [
          "Tarrant County's Sheriff's Office says its Courtesy Patrol roams the major highways in the county and gives minor help: changing a flat tire, limited fuel, or a jump start. It also clears obstructions from the road and directs traffic at crash scenes. Its staff aren't deputies and have no law enforcement authority. Dallas County describes its Courtesy Patrol as helping stranded motorists with disabled vehicles and clearing roadway incidents.",
          "NTTA says its roadside crews change flat tires, jump-start dead batteries and bring a little gas, free, on its toll roads. None of the published descriptions promise towing, and the repairs they mention are minor.",
        ],
      },
      {
        heading: "How to reach them",
        paragraphs: ["Always call 911 first for an emergency, an injury, or a car stopped in a lane. For non-emergency help:"],
        list: [
          "NTTA toll roads: dial #999 on your phone, or use Free Roadside Help in the TollMate app. NTTA says the help is available 24 hours a day on its roads.",
          "LBJ and North Tarrant Express TEXpress lanes: dial #789.",
          "Dallas County Courtesy Patrol: call 214-320-4444, or dial 511.",
          "Tarrant County Courtesy Patrol: the Sheriff's Office lists a non-emergency line on its Courtesy Patrol page. Have your location, a mile marker and a description of the vehicle ready.",
        ],
      },
      {
        heading: "Where the free help stops",
        paragraphs: [
          "These patrols are described as serving highways, toll roads and managed lanes. A dead battery in an apartment lot, a flat in a parking garage and a locked door anywhere are outside what they describe. The council's page and Tarrant County's page don't list patrol hours or a response time for the county patrols, so don't count on one being close by.",
          "Programs, routes and phone numbers change. Confirm the one for your road with the agency before you rely on it.",
        ],
      },
      {
        heading: "Where TRA fits",
        paragraphs: [
          "TRA is a paid service for the times a free patrol isn't an option: you're off the highway, no patrol is nearby, or you'd rather book a driver. We dispatch across Dallas–Fort Worth around the clock. A jump start is {{price:jump-start}} and a flat tire change using your spare is {{price:flat-tire-change}}, each plus a {{dispatchFee}} dispatch fee charged once per job. We don't tow.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the Courtesy Patrol really free?",
        a: "The regional council describes its patrol program as free assistance to stalled and stranded motorists, and NTTA describes its roadside help as free. Check the agency's page for the road you're on.",
      },
      {
        q: "Can a patrol tow my car?",
        a: "The published descriptions focus on minor help: flat tires, jump starts, limited fuel and clearing the roadway. They don't promise towing. For a car that can't be driven, you'll need a tow company.",
      },
      {
        q: "What if I'm not sure which road I'm on?",
        a: "Read the nearest exit sign or mile marker, and use a map app on your phone. If you're in danger, call 911 and tell them what you can see.",
      },
    ],
    services: ["jump-start", "flat-tire-change"],
  },
  {
    slug: "how-much-does-roadside-assistance-cost-dallas",
    title: "Roadside Assistance Cost in Dallas, Explained",
    h1: "How much roadside assistance costs in Dallas, and what makes up the bill",
    metaDescription:
      "What a roadside call in Dallas–Fort Worth costs: a service price plus a {{dispatchFee}} dispatch fee charged once per job, and what to ask before you agree.",
    topic: "Cost guide",
    dek: "A roadside bill has two parts: the price of the job, and a fee for sending someone to you. Once you know which job you need, the total is simple arithmetic. A provider who can't give you that total before they come isn't giving you a price.",
    updated: UPDATED,
    cardImage: card("field-arrival-gear"),
    sections: [
      {
        heading: "The two parts of the bill",
        paragraphs: [
          "The first part is the dispatch fee, {{dispatchFee}}, which covers sending a technician to where your car is. It's added once per job, and it's not the cost of the work. The second part is the service price, which depends on the job: what's wrong and what it takes to fix it.",
          "The service prices below don't include the dispatch fee. Add it once to get your total.",
        ],
      },
      {
        heading: "What each job costs",
        paragraphs: ["TRA's published service prices are below. The {{dispatchFee}} dispatch fee is added to each one, once per job:"],
        list: [
          "Jump start: {{price:jump-start}}. A semi truck or 18-wheeler is {{price2:jump-start}}.",
          "Flat tire change, using the spare you already carry: {{price:flat-tire-change}}.",
          "Tire repair for a puncture in the tread: {{price:tire-repair-plug-patch}}.",
          "A stuck screw or nail removed and the tire made safe: {{price:stuck-screw-in-tire}}.",
          "A tire supplied and installed: {{price:tire-replacement}}.",
          "Vehicle lockout: {{price:lockout}}. Keys locked in the trunk: {{price2:lockout}}.",
          "Battery replacement, installed, for eligible vehicles and batteries: {{price:battery-replacement}}.",
        ],
      },
      {
        heading: "The total, worked out",
        paragraphs: [
          "Add the dispatch fee once. A jump start comes to {{total:jump-start}} in all, and a battery replacement to {{total:battery-replacement}}. A flat tire change is {{total:flat-tire-change}} in all. Dispatch confirms your total when you request help, so you know what you're agreeing to.",
          "Take a flat tire as an example. With a good spare in the car, the change is {{price:flat-tire-change}}, plus the {{dispatchFee}} dispatch fee. If the tire can't be repaired and there's no spare, a replacement tire supplied and installed is {{price:tire-replacement}}, plus the fee. It's the same flat tire with two different bills, and the difference is the spare.",
        ],
      },
      {
        heading: "What moves the number",
        paragraphs: [
          "Mostly, it's the job. A flat tire change is cheaper than a replacement tire, because the spare is already in the car. A tread puncture that can be repaired costs far less than a tire that can't be. A lockout where the keys are in the trunk is a longer job than one where they're on the seat.",
          "Vehicle and parts matter too. A semi truck needs a heavier jump than a car. A battery's price follows the battery your vehicle takes and where it sits. Tire availability varies by size.",
        ],
      },
      {
        heading: "What to ask any provider",
        paragraphs: ["Prices you can compare are worth more than the lowest number on the phone. These aren't trick questions, just ones any honest provider can answer in a breath, and slow or shifting answers are information too:"],
        list: [
          "What's the total, with every fee included?",
          "Is there a minimum charge, or an added fee for the time of day, the distance or the type of vehicle?",
          "What does the price cover: the labor, the parts, the trip?",
          "What happens if the job can't be done on site?",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the dispatch fee charged every time?",
        a: "It's charged once per job. It covers the trip to where your car is, and it isn't charged a second time for the same job.",
      },
      {
        q: "Does the service price include the dispatch fee?",
        a: "No. The service price is for the work, and the {{dispatchFee}} dispatch fee is added once on top of it.",
      },
      {
        q: "Does TRA charge extra for towing?",
        a: "We don't tow, so there's no towing charge. If your car needs a tow, you'll need to call a tow company.",
      },
      {
        q: "Is a repair cheaper than a new tire?",
        a: "A repair to a tread puncture is {{price:tire-repair-plug-patch}} and a replacement tire is {{price:tire-replacement}}, each plus the {{dispatchFee}} dispatch fee. Only a puncture in the tread can be repaired, so the choice isn't always yours.",
      },
    ],
    services: ["jump-start", "flat-tire-change"],
  },
  {
    slug: "do-i-need-a-tow-or-roadside-help",
    title: "Do I Need a Tow or Roadside Help?",
    h1: "Do you need a tow truck or roadside help? How to tell",
    metaDescription:
      "Which car problems a roadside driver can fix on the spot and which ones need a tow, and how to decide when you're stuck and not sure.",
    topic: "Safety guide",
    dek: "Some breakdowns end with the car driving away. Others end with it on a flatbed. Knowing which kind you have saves you a wasted call and a long wait, and keeps you from being talked into the wrong service.",
    updated: UPDATED,
    cardImage: card("field-arrival-van"),
    sections: [
      {
        heading: "The short test",
        paragraphs: [
          "Ask two questions. Can the problem be fixed right where the car is, with a tool or part a driver can bring? And once it's fixed, is the car safe to drive? If both answers are yes, roadside help can do it. If either is no, you probably need a tow.",
          "A third question helps when you aren't sure: would a mechanic need to put the car on a lift? If so, it's a tow, since that's work a roadside driver can't do at the curb.",
        ],
      },
      {
        heading: "Problems a roadside driver can fix",
        paragraphs: ["These are quick and local, and the car drives away afterward:"],
        list: [
          "A dead battery that needs a jump start, or a replacement battery installed on site.",
          "A flat tire with a good spare in the car.",
          "A small puncture in the tread, which can be repaired, or a screw or nail that can be removed.",
          "Keys locked inside the car, including in the trunk.",
          "A locking lug nut with no key.",
          "A flat tire with no spare, when a replacement tire can be brought and installed.",
        ],
      },
      {
        heading: "Problems that need a tow",
        paragraphs: ["These need a shop, a lift or parts, so the car has to go to them:"],
        list: [
          "An overheated engine, with steam, a high temperature gauge or lost coolant.",
          "A car that turns over but won't start, or won't turn over when the battery is known to be good.",
          "Failed transmission, grinding noises or a car that won't shift.",
          "Brakes that feel soft or have failed, or steering that doesn't respond.",
          "Smoke, a burning smell or an oil-pressure warning light.",
          "Damage from a crash, a bent axle or a wheel that's cracked or came off.",
          "A car that's stuck in mud, a ditch or a drop-off.",
        ],
      },
      {
        heading: "The gray area",
        paragraphs: [
          "Some problems start out looking easy. If a jump gets the car running but it dies again when the cables come off, or the battery light came on while you were driving, the battery may not be the problem. That points to the alternator, and a new battery won't fix it. A car with two bad tires, or a flat plus a damaged wheel, may be beyond a spare change.",
          "When in doubt, ask whether you'd be comfortable driving it down I-35 afterward. If the answer is no, tow it.",
        ],
      },
      {
        heading: "What TRA does and doesn't",
        paragraphs: [
          "TRA doesn't tow, and we don't do mechanical repair. We do the first list. A jump start is {{price:jump-start}}, a flat tire change is {{price:flat-tire-change}} and a lockout is {{price:lockout}}, each plus a {{dispatchFee}} dispatch fee charged once per job. If what you describe sounds like the second list, the honest answer is that you need a tow company, and it's better to know before anyone is sent.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can you tow my car?",
        a: "No. TRA doesn't tow. We handle jump starts, tire services, battery replacement, lockouts and wheel lock removal, where the car can drive away afterward.",
      },
      {
        q: "My car won't start. Is it the battery?",
        a: "If the engine turns over slowly, or you hear rapid clicking and the lights dim, the battery is the likely cause. If the lights are bright and the engine won't turn, it may be the starter, and a jump won't help.",
      },
      {
        q: "Does my insurance pay for a tow?",
        a: "Some policies include towing, and some roadside memberships do. Check your coverage before you pay for one.",
      },
    ],
    services: ["jump-start", "flat-tire-change", "lockout"],
  },
  {
    slug: "rideshare-driver-car-trouble",
    title: "Rideshare Car Trouble Mid-Shift: First Steps",
    h1: "Car trouble in the middle of a rideshare or delivery shift: what to do first",
    metaDescription:
      "A breakdown during a rideshare or delivery shift: protect your passenger, tell the platform, check your coverage and get back on the road.",
    topic: "Safety guide",
    dek: "A breakdown while you're driving for a living costs you twice, once for the fix and once for the time you aren't earning. What you do in the first few minutes decides how bad either one gets.",
    updated: UPDATED,
    cardImage: card("field-arrival-van"),
    sections: [
      {
        heading: "Passengers and orders come first",
        paragraphs: [
          "If someone is in the car, get to the safest spot you can, turn on the hazard lights and tell them plainly what's happening. On a freeway shoulder, keep everyone belted inside unless there's a safe place to stand well away from traffic. If the car is in a lane, or anyone feels unsafe, call 911.",
          "Let the platform know through the app's help screen, so the trip can be handled properly. Don't send a rider off on foot along a highway. If there's a safe place to wait, such as a parking lot or a business, the platform can help sort out another ride from there. If the car has food orders in it, tell the customer or the restaurant, because the bag won't stay hot or cold for long in a car with no air conditioning.",
        ],
      },
      {
        heading: "Then check what covers you",
        paragraphs: [
          "Roadside coverage on a personal policy may work differently while you're working, and the platform may have its own rules. It's worth asking your insurer and the platform, before you need it, what roadside help you have while you're logged in, and what it covers.",
          "If you do end up paying out of pocket, keep the invoice. If you keep records of your driving expenses, a roadside bill belongs in them.",
          "Write down what you find out and keep it with the car's papers. The middle of a shift is a bad time to be reading policy language on your phone.",
        ],
      },
      {
        heading: "Getting back on the road",
        paragraphs: [
          "Think about which kind of problem you have. A dead battery, a flat tire with a good spare, a screw in a tire or a locked door can all be fixed where the car sits, and the shift can resume. An overheated engine or a failed transmission can't, and means a tow. We don't tow, so for those you'll need a tow company or the one your insurer sends.",
          "For the jobs we do, the prices are published. A jump start is {{price:jump-start}} and a flat tire change is {{price:flat-tire-change}}, each plus a {{dispatchFee}} dispatch fee charged once per job. When you call, give the exact location, the year, make and model, and what the car is doing. We text or call when the driver is on the way. On average a driver arrives in about 30 minutes, though the actual time depends on your location and the traffic.",
        ],
      },
      {
        heading: "Habits that make the next one easier",
        paragraphs: ["A few small things keep a breakdown short:"],
        list: [
          "Carry a tire pressure gauge and a portable jump pack, and know where the spare and jack are.",
          "Save your vehicle's year, make, model and tire size in your phone's notes.",
          "Check your battery's age. If it's three years old or more and showing signs of wear, replace it on your own schedule, not mid-shift.",
          "Keep your phone charged. A cable and a power bank in the glove box cost little.",
        ],
      },
    ],
    faqs: [
      {
        q: "Should I cancel the trip myself?",
        a: "Use the app's help or support option so the trip is closed out properly and your rider is taken care of. Don't just drive off or leave them.",
      },
      {
        q: "Is a battery replacement something I can have done on site?",
        a: "Yes, for eligible vehicles and batteries. Battery replacement is {{price:battery-replacement}}, plus the {{dispatchFee}} dispatch fee. Dispatch confirms compatibility and your total before a driver is sent.",
      },
      {
        q: "Will my personal roadside coverage apply while I'm working?",
        a: "It might not. Policies treat work driving differently, so ask your insurer directly and get the answer before you need it.",
      },
    ],
    services: ["jump-start", "flat-tire-change", "battery-replacement"],
  },
  {
    slug: "car-trouble-in-a-parking-garage",
    title: "Car Trouble in a Parking Garage: What to Do",
    h1: "Car trouble in a parking garage: no signal, low clearance, and telling dispatch which level",
    metaDescription:
      "Car won't start or has a flat in a garage? How to get a signal, what to tell dispatch about your level, and why low clearance matters.",
    topic: "Safety guide",
    dek: "A garage adds three problems a street doesn't: a low ceiling, a phone with no bars, and a building where 'I'm in the garage' doesn't tell anyone where you are. Handle those three and the rest is an ordinary breakdown.",
    updated: UPDATED,
    cardImage: card("field-arrival-gear"),
    sections: [
      {
        heading: "Get a signal first",
        paragraphs: [
          "Concrete and steel eat cell signal. If you can't get a call out, walk to the entrance or exit ramp, the open edge of a level or the top deck, where the signal is usually better. A text can go through when a call won't. If the building has guest Wi-Fi, calling over Wi-Fi can work too.",
          "Most garages also have a help intercom, a call box or an attendant. Use them. And before you walk away from the car, note where you are, so you can find your way back and tell someone exactly where it is.",
          "A photo helps. Take one of the pillar or level sign nearest the car before you go looking for signal. It's the fastest way to remember where you left the car, and the easiest thing to read out to dispatch.",
        ],
      },
      {
        heading: "Say exactly where you are",
        paragraphs: ["'In the garage' is not an address. Give dispatch as much of this as you can:"],
        list: [
          "The name of the building or garage and the street address.",
          "The entrance or street you drove in from.",
          "The level, by number, letter or color.",
          "The nearest pillar number, row, stairwell or elevator.",
          "Whether the garage is gated or needs a code or a ticket to get in.",
        ],
      },
      {
        heading: "Low clearance",
        paragraphs: [
          "Most garages post a maximum height at the entrance, on a bar or a sign. A tall vehicle may not fit under it. Read the number, and tell dispatch when you request help, so the driver knows what to expect and can plan the job.",
          "Some garages have their own rules for outside service providers, particularly at airports, hospitals and large buildings. If yours is one, ask the attendant or building security what they require, and tell dispatch.",
        ],
      },
      {
        heading: "Don't idle in a closed garage",
        paragraphs: [
          "In a closed or underground garage, don't leave a running engine going for long. Exhaust builds up, and carbon monoxide is dangerous and hard to notice. If you need to wait for help, wait outside the car near an open side of the garage, well away from where cars are driving.",
        ],
      },
      {
        heading: "The jobs that happen in garages",
        paragraphs: [
          "The common ones are a dead battery from a light left on, a flat tire and keys left inside. A jump start is {{price:jump-start}}, a flat tire change using your spare is {{price:flat-tire-change}} and a lockout is {{price:lockout}}, each plus a {{dispatchFee}} dispatch fee charged once per job. We text or call when the driver is on the way, so keep your phone with you.",
          "Cars in a garage are often parked close together. Tell dispatch whether there's room to open the doors and the hood, and whether another car is parked in front of or behind yours.",
        ],
      },
    ],
    faqs: [
      {
        q: "What if I can't reach anyone from inside the garage?",
        a: "Move toward an exit, or use the garage's help phone or attendant. Don't wander far from the car without noting where you left it.",
      },
      {
        q: "Does the driver need to know the garage's height limit?",
        a: "Yes. Tell dispatch the posted clearance when you request help, so the driver has it before arriving.",
      },
      {
        q: "Should I wait inside the car?",
        a: "If you have to run the engine for the heat or the air conditioner, don't do it for long in a closed garage. Wait near an open side or a stairwell, away from moving cars, and find shade if it's hot.",
      },
    ],
    services: ["jump-start", "flat-tire-change", "lockout"],
  },
  {
    slug: "car-emergency-kit-texas",
    title: "Car Emergency Kit for North Texas",
    h1: "What to keep in your car for North Texas: a kit that fits the weather",
    metaDescription:
      "What belongs in a car emergency kit in North Texas: the basics, extras for summer heat and ice, and how to check the gear your car already has.",
    topic: "Safety guide",
    dek: "North Texas can hand a driver a 100-degree afternoon and an ice storm in the same year. A good kit doesn't need to be big. It needs to cover the few things that turn a breakdown into a bad day.",
    updated: UPDATED,
    cardImage: card("field-arrival-gear"),
    sections: [
      {
        heading: "The basics, all year",
        paragraphs: ["Keep these together in one bag or box, and keep the bag where you can reach it without unloading the car. A kit buried under luggage isn't much help at midnight:"],
        list: [
          "A portable jump pack, or jumper cables if you'd rather. A pack doesn't need a second car.",
          "A tire pressure gauge.",
          "A flashlight with fresh batteries, or a headlamp that leaves both hands free.",
          "Reflective triangles or LED flares, so other drivers see you from far away.",
          "A first-aid kit, with the dates checked.",
          "A phone charging cable and a power bank.",
          "Work gloves and a few rags or paper towels.",
        ],
      },
      {
        heading: "For the summer",
        paragraphs: [
          "Water is the item that matters most, and the one that gets forgotten. Keep several bottles, and swap them out as the season goes on, because a hot trunk is hard on them. A hat and a snack that won't melt help if you end up waiting in the sun.",
          "Don't leave things in the car that don't like heat, such as medications, a phone or a power bank on the dash.",
          "A cheap windshield sunshade keeps the steering wheel and the seat belt buckle from burning your hands, and it keeps the cabin cooler for the wait. A towel over the driver's seat helps too.",
        ],
      },
      {
        heading: "For the cold snaps and ice",
        paragraphs: [
          "A blanket or an old coat, gloves, a hat and an ice scraper are enough for most North Texas winter days. If a freeze is forecast, keep the tank at least half full, since a car that's stuck in a traffic jam on an icy road needs fuel for the heater.",
        ],
      },
      {
        heading: "Check what the car already carries",
        paragraphs: [
          "The best kit includes the equipment that came with your car. Check that the spare is there and inflated, that the jack and lug wrench are in place, and that you know where the locking lug nut key is. Keep the owner's manual in the glove box, along with a paper copy of your insurance card and registration.",
          "Twice a year, go through it. Replace the water, test the flashlight, and look at the dates on anything that expires. Put the number of a roadside service in your phone and on a card in the glove box, in case the phone dies.",
        ],
      },
      {
        heading: "When the kit isn't enough",
        paragraphs: [
          "A jump pack handles a dead battery if the battery will take a charge. For anything else, TRA can help around the clock across Dallas–Fort Worth. A jump start is {{price:jump-start}}, a flat tire change is {{price:flat-tire-change}} and a lockout is {{price:lockout}}, each plus a {{dispatchFee}} dispatch fee charged once per job.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need flares, or are reflective triangles enough?",
        a: "Reflective triangles are enough for most drivers, and LED flares are a good alternative that doesn't burn. Either gives other drivers warning from a distance.",
      },
      {
        q: "How often should I check the spare tire's pressure?",
        a: "Twice a year, and before a long trip. A spare that has sat for years is often low on air.",
      },
      {
        q: "Should I keep a gas can in the car?",
        a: "Most drivers are better off without one, since fuel and fumes in a hot trunk are a hazard. TRA doesn't deliver fuel either, so the better plan is to refuel before the gauge gets low.",
      },
    ],
    services: ["jump-start", "flat-tire-change"],
  },
  {
    slug: "dfw-summer-breakdown-safety",
    title: "Breakdown in Texas Summer Heat: Stay Safe",
    h1: "Broken down in the DFW summer: how to wait safely in the heat",
    metaDescription:
      "Stuck on the road in a DFW summer? How to wait safely in the heat, the signs of heat illness, and what to do if the engine overheated.",
    topic: "Safety guide",
    dek: "In a DFW summer, the breakdown isn't the dangerous part. The waiting is. A car that won't run is also a car with no air conditioning, and the next hour can matter more than the repair.",
    updated: UPDATED,
    cardImage: card("field-arrival-van"),
    sections: [
      {
        heading: "Plan for the wait",
        paragraphs: [
          "A parked car in the sun heats up fast, and asphalt and concrete give off heat too. If the engine and air conditioner still run, you can wait inside with the A/C on, as long as the car is in a safe place and the engine isn't overheating. If the engine is dead, the inside will warm up quickly.",
          "Before you do anything else, tell whoever you call that it's hot and who's with you, especially children, older adults or anyone with a health condition. Keep water where you can reach it, not in a trunk that has turned into an oven.",
        ],
      },
      {
        heading: "Where to wait",
        paragraphs: [
          "Shade is the goal, but not at any cost. On a freeway shoulder, the safest place is often still inside the car, with the hazard lights on and your seat belt fastened. Crack the windows if the A/C is off. If it's getting dangerously hot inside and there's a wide shoulder with a patch of shade well away from traffic, behind a barrier for example, that's the better place to wait.",
          "In a parking lot, move into a building or a patch of shade. Walk only if the path is short and safe. Don't walk along a live freeway to look for shade or a gas station. And never leave a child or a pet in a parked car, not even briefly.",
        ],
      },
      {
        heading: "Signs of heat trouble",
        paragraphs: [
          "Heat exhaustion can come on quickly. Watch yourself and anyone with you for heavy sweating, pale and clammy skin, dizziness, headache, nausea, cramps or unusual tiredness. Move to a cooler place if you can, loosen tight clothing, and sip water.",
          "Heat stroke is an emergency. A very high body temperature, hot skin, confusion, passing out or a seizure means call 911 right away, even before the breakdown is dealt with.",
        ],
      },
      {
        heading: "If the engine overheated",
        paragraphs: [
          "If the temperature gauge climbs or steam comes from under the hood, pull over when you can, turn the engine off and wait. Don't open the radiator cap or the coolant reservoir while it's hot, because the pressure can spray scalding coolant. Waiting for it to cool takes a while in a Texas afternoon, so plan on that.",
          "An overheated engine often means a leak or a failed part. TRA doesn't do mechanical repair or towing, so this is one for a tow company.",
        ],
      },
      {
        heading: "Heat and the usual suspects",
        paragraphs: [
          "Heat is hard on batteries and on tires that are already low, and summer is when both fail. A dead battery gets a jump start, which is {{price:jump-start}}, and a flat tire gets a spare change, which is {{price:flat-tire-change}}, each plus a {{dispatchFee}} dispatch fee charged once per job. We're open around the clock, and our average arrival is 30 minutes, with the actual time depending on location and traffic.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is it okay to leave the engine running with the A/C on?",
        a: "In the open, if the engine isn't overheating and you aren't in a closed space, yes. Don't do it in an enclosed garage, and watch the temperature gauge.",
      },
      {
        q: "How much water should I have?",
        a: "More than you'd think. Keep several bottles in the car in summer. Sip regularly and don't wait until you're thirsty.",
      },
      {
        q: "Should I wait for help or walk to a gas station?",
        a: "Stay with the car unless there's a safe, short route to shade or a business, and never walk along a live freeway. Tell dispatch if you move.",
      },
    ],
    services: ["jump-start", "flat-tire-change"],
  },
];
