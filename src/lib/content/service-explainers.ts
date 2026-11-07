import type { ServiceTypeSlug } from "@/lib/types/domain";
import type { GuideSection } from "./guides";

/**
 * The long explanation on each service page: how the job goes, how to tell
 * you need it, what it covers and what it doesn't, plus the questions drivers
 * ask most. Owner, 2026-11-07: explain as much as the competitor does, with
 * nothing made up.
 *
 * RULES FOR EDITING
 *  - Prices only through tokens: {{price:<slug>}}, {{total:<slug>}},
 *    {{price2:jump-start}}, {{price2:lockout}}, {{dispatchFee}}.
 *  - Describe the job as it is done on any car, and what TRA offers as
 *    services.ts states it. No equipment brands, certifications, warranties
 *    beyond services.ts, after-hours pricing or arrival times: the nearest
 *    driver is sent as soon as possible, and customers pay in cash.
 *  - Customers do not follow the driver: we text or call when they are on the way.
 *  - US English, plain sentences.
 */
export interface ServiceExplainer {
  sections: GuideSection[];
  faqs: { q: string; a: string }[];
}

export const SERVICE_EXPLAINERS: Partial<Record<ServiceTypeSlug, ServiceExplainer>> = {
  "jump-start": {
    sections: [
      {
        heading: "How a jump start works",
        paragraphs: [
          "A dead battery can't turn the starter, but a second power source can. The driver connects that source to your battery with a set of cables, lets it supply the power the engine needs, and then you start the car. It is the same job on every vehicle, whatever the make.",
          "The order of the connections matters, because the last one is made away from the battery on purpose. A battery gives off gas, and a spark at the moment of connection could ignite it, so the final clamp goes on bare metal well clear of the battery. The steps are:",
        ],
        list: [
          "Red clamp on the positive terminal of your dead battery.",
          "The other red clamp on the positive terminal of the power source.",
          "Black clamp on the negative terminal of the power source.",
          "The last black clamp on a bare, unpainted metal part of your engine or frame, away from the battery.",
          "Start the car, then take the clamps off in the reverse order.",
        ],
      },
      {
        heading: "Is it the battery or something else?",
        paragraphs: [
          "A battery that is out of charge has a few familiar signs. The engine turns over slowly or not at all, you hear a fast clicking when you turn the key or press the button, the dashboard lights are dim or flicker, and the interior lights and the radio are weak or dead.",
          "If the engine cranks strongly but never catches, the battery is probably doing its job and the trouble is somewhere else, such as fuel or ignition. A jump won't help with that. We don't deliver fuel and we don't do mechanical repair, so a car like that needs a shop.",
          "If you are not sure, say what you hear and see when you request help. Dispatch will tell you whether a jump start fits.",
        ],
      },
      {
        heading: "What you pay for a jump",
        paragraphs: [
          "A jump start is {{price:jump-start}}, labor included. A {{dispatchFee}} dispatch fee is added once for sending the driver to you, so the total for a car is {{total:jump-start}}. Both are confirmed before a driver is sent.",
          "A heavy-duty jump start for a semi truck is {{price2:jump-start}}, plus the same {{dispatchFee}} dispatch fee, and it has its own page. The price covers the jump itself. It does not cover a new battery, a repair, or anything else found along the way.",
        ],
      },
      {
        heading: "What can slow a jump down",
        paragraphs: [
          "Most jumps go quickly, but a few things can make one take longer or call for something more than a jump. Dispatch confirms any change with you before the work goes ahead.",
        ],
        list: [
          "Corroded terminals. Crusty buildup blocks the current and has to be cleaned off before a clamp will grip.",
          "A battery that is worn out. It may take the jump and then die again soon after, which means it needs replacing.",
          "A hybrid or electric vehicle. Tell us in the notes so the right equipment comes. We do nothing with a high-voltage pack.",
          "A car parked where the hood or the battery is hard to reach.",
        ],
      },
      {
        heading: "After the car starts",
        paragraphs: [
          "Don't switch the engine off the moment it catches. The alternator recharges the battery while the engine runs, so go for a proper drive rather than a quick trip around the block. Short trips and idling in the driveway put back very little.",
          "If the car won't start again the next day, or the battery is several years old, the battery is the likely cause and it needs testing or replacing. You can then book a battery replacement, and the price is confirmed for your vehicle before dispatch.",
          "Until the driver arrives, don't keep cranking the engine, because every try drains what charge is left.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a jump start take once the driver arrives?",
        a: "Usually only a few minutes. Connecting the cables and starting the car is quick. A badly drained or corroded battery can take longer.",
      },
      {
        q: "Will a jump start damage my car's electronics?",
        a: "Done in the right order, no. The connections are made in a set sequence precisely to avoid sparks and surges near the battery.",
      },
      {
        q: "How long should I drive after a jump start?",
        a: "Drive for a good while rather than a short hop. The alternator charges the battery as the engine runs, and a very short trip leaves it little charge.",
      },
      {
        q: "Can you jump start a car in a parking garage or a driveway?",
        a: "Yes, as long as the driver can reach the car. Give the level or the spot number so we find it fast.",
      },
      {
        q: "Why did my battery die when I only left the lights on a little while?",
        a: "An older battery holds less charge, so a small drain can finish it off. If it has happened before, have the battery tested.",
      },
      {
        q: "Does cold or heat kill a battery?",
        a: "Both strain it. Heat wears a battery down over time, and cold makes it harder for a weak battery to turn the engine. Often a battery gives out the first time the weather turns.",
      },
      {
        q: "Will I be told when the driver is on the way?",
        a: "Yes. We text or call you when the driver is on the way. We send the nearest available driver as soon as possible.",
      },
    ],
  },

  "semi-truck-jump-start": {
    sections: [
      {
        heading: "Why a big rig needs heavy-duty equipment",
        paragraphs: [
          "A tractor carries a large diesel engine and runs several batteries wired together. Turning that engine over takes far more current than a car does, so equipment sized for a sedan won't get it going. The driver brings heavy-duty jump equipment made for trucks.",
          "The basic idea is the same as on any vehicle. A second power source is connected to the truck's batteries, the engine gets the power it needs to crank, and you start it. The clamps go on in a set order, and the last one goes on bare metal away from the batteries so any spark happens clear of the gas a battery gives off.",
        ],
      },
      {
        heading: "Are dead batteries really the problem?",
        paragraphs: [
          "The signs are familiar. The starter turns slowly or only clicks, the dash lights are dim, and the truck may have sat for days or died after a long stop with the lights or the cab running.",
          "If the engine cranks hard but does not fire, the batteries are probably fine. That points to fuel or another problem, and we don't deliver fuel or do mechanical repair. If you can't tell, describe what you hear when you request help and dispatch will say whether a jump fits.",
        ],
      },
      {
        heading: "Before the driver arrives at the truck",
        paragraphs: [
          "A few quick steps save time and keep you safe while you wait.",
        ],
        list: [
          "Turn off the lights, the heater or air conditioning, and everything else that draws power.",
          "Write down your unit number and exactly where the truck is: the yard, the dock door, the truck stop or the mile marker.",
          "Note whether the truck died while running or has been sitting.",
          "If you are on a shoulder, put out your warning triangles only if you can do it safely. In a live lane, or if anyone is in danger, call 911 first.",
          "Leave the hood or battery access clear so the driver can reach the connections.",
        ],
      },
      {
        heading: "Price for a big-rig jump",
        paragraphs: [
          "A heavy-duty jump start is {{price:semi-truck-jump-start}}, labor included. The {{dispatchFee}} dispatch fee is added once for the trip, so the total is {{total:semi-truck-jump-start}}.",
          "The price depends on the truck and on how many batteries it carries, so dispatch confirms it before a driver is sent. The price covers the jump itself. It does not cover new batteries or repairs.",
        ],
      },
      {
        heading: "After the engine fires",
        paragraphs: [
          "Let the truck run and don't shut it down right away. The alternator recharges the batteries while the engine runs, so keep it going and take a proper run before you stop again.",
          "A jump gets the truck running. It can't bring back batteries that are worn out. If the truck dies again at your next stop, or struggles to turn over the following morning, the batteries or the charging system need a shop.",
          "If you drive for a fleet, tell your dispatcher or shop what happened so they can have the batteries tested. Corroded terminals are worth checking too, since a crusty connection starves the starter even when the batteries are fine.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need to tell you how many batteries the truck has?",
        a: "It helps, but the make and model are enough to start. Dispatch uses them to send the right equipment and to confirm your price.",
      },
      {
        q: "Can you jump a truck that is loaded or has a trailer attached?",
        a: "The jump goes to the truck's batteries, so a trailer or a load doesn't change the job. Say where it is parked so the driver can reach it.",
      },
      {
        q: "Will the driver need access to the engine?",
        a: "Yes, to reach the battery connections. If the hood or a battery box is locked or blocked, tell dispatch so the driver comes ready.",
      },
      {
        q: "Can you jump a truck parked in a crowded lot or at a dock?",
        a: "As long as a driver can reach the truck safely, yes. Give the dock number or row so we find the right unit.",
      },
      {
        q: "Why does my truck keep dying after being jumped?",
        a: "Usually the batteries can't hold a charge any more, or the alternator isn't charging them. Either one needs a shop, since we don't do mechanical repair.",
      },
      {
        q: "Will I be told when the driver is on the way?",
        a: "Yes. We text or call when the driver is on the way. We send the nearest available driver as soon as possible.",
      },
    ],
  },

  "battery-replacement": {
    sections: [
      {
        heading: "How a battery gets replaced at your car",
        paragraphs: [
          "Swapping a battery is the same job on any car, and it follows the same order. The driver disconnects the negative cable first, then the positive, releases whatever holds the battery down, lifts the old one out, and sets the new one in its tray. The new battery is then secured, the positive cable goes on first, the negative last, and the terminals are tightened.",
          "Negative comes off first and goes on last so a wrench can't bridge the live terminal to the metal body of the car. The driver also checks the new battery once it is in.",
        ],
      },
      {
        heading: "Signs you need a new battery, not another jump",
        paragraphs: [
          "A jump start fixes a battery that was drained. A replacement is for one that can't hold a charge. These are the common signs:",
        ],
        list: [
          "The car starts after a jump and then dies again within a day or two.",
          "The engine turns over slowly, especially on cold mornings or in summer heat.",
          "The battery is several years old.",
          "The case is swollen, cracked or leaking, or the terminals are caked with crust.",
          "A battery warning light stays on after the car is running.",
        ],
      },
      {
        heading: "Why the fit depends on your vehicle",
        paragraphs: [
          "Batteries are not one size. They differ in physical size, terminal position and power rating, and cars keep them in different places. Many sit under the hood, but some are in the trunk or under a seat, which means a seat or a cover has to come out first.",
          "That is why we ask for the year, make and model, and for the VIN if you can reach it. It lets dispatch pick the battery that suits the car. The VIN is on a plate at the base of the windshield on the driver's side, and on the sticker in the driver's door jamb.",
        ],
      },
      {
        heading: "What the battery price includes",
        paragraphs: [
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries. That covers the new battery, the core charge and installing it.",
          "Pricing varies by vehicle and battery type, so dispatch confirms that the battery is compatible, and your total cost, before a driver is sent. If your vehicle or battery type isn't eligible, dispatch tells you at that point.",
        ],
      },
      {
        heading: "Before and after the new battery goes in",
        paragraphs: [
          "While you wait, turn off the lights and accessories and have your vehicle details ready. Some cars lose settings like the radio presets or the clock when the power is cut, and you may need to set them again.",
          "Once the new battery is in, keep the invoice, since warranty service depends on it. If the car shows a warning light or acts oddly after a replacement, mention it to the driver before they leave. And if the car still won't start with a good battery, the fault is somewhere else and needs a shop.",
        ],
      },
    ],
    faqs: [
      {
        q: "How long does a car battery usually last?",
        a: "Often several years, though heat shortens it. Texas summers are hard on a battery, so one that is a few years old is worth testing before it fails.",
      },
      {
        q: "Will I lose my radio and clock settings?",
        a: "Possibly. Some cars forget presets or the clock when the battery is disconnected. They are quick to set again.",
      },
      {
        q: "What if the new battery doesn't fix the problem?",
        a: "A bad battery is one cause of a no-start. If the car still won't start afterward, the fault is elsewhere, such as the charging system or the starter, and needs a shop.",
      },
      {
        q: "Can you replace a battery that is under the seat or in the trunk?",
        a: "Yes, where the battery is eligible. Tell dispatch your year, make and model so they know where yours is and confirm the price.",
      },
      {
        q: "Is a replacement cheaper than more jump starts?",
        a: "Jumping a battery that can't hold a charge is only a stopgap, and every jump is another call. Once a battery has failed more than once, a replacement usually makes more sense.",
      },
      {
        q: "Do you replace batteries in hybrid or electric vehicles?",
        a: "Tell dispatch your vehicle when you request help. We do nothing with a high-voltage pack, and dispatch confirms whether the battery you need is eligible.",
      },
      {
        q: "Will I be told when the driver is on the way?",
        a: "Yes. We text or call when the driver is on the way. We send the nearest available driver as soon as possible.",
      },
    ],
  },

  lockout: {
    sections: [
      {
        heading: "How a locked car gets opened",
        paragraphs: [
          "The aim is to open the car without damaging it. The driver confirms you own the vehicle first, then uses non-destructive entry methods to reach the lock or the handle, working at the door frame without scratching the paint or the glass.",
          "Once the door is open you can get your keys. The work is over in minutes on most cars. The method depends on the vehicle, which is why we ask for the year, make and model.",
        ],
      },
      {
        heading: "Why we ask for proof of ownership",
        paragraphs: [
          "Opening a car for the wrong person would be a serious problem, so the driver checks before unlocking anything. Have your ID ready, and the registration or insurance card if you can reach them, or another way to show the vehicle is yours.",
          "This protects you as much as anyone. Nobody wants a stranger getting into their car with a few friendly words.",
          "If the car belongs to a family member or an employer, say so when you request help, so the driver knows what to ask for. Dispatch explains what to have on hand before anyone is sent.",
        ],
      },
      {
        heading: "Keys in the cabin or in the trunk",
        paragraphs: [
          "These are two different jobs. Keys left inside the cabin mean opening a door. Keys locked in the trunk need a different way in and take longer.",
          "Look through the window if you can. Keys on a seat, in the ignition or in a cupholder are all cabin jobs, while keys that have fallen behind the rear seat or into the trunk may be the trunk job.",
          "A lockout is {{price:lockout}}. Keys locked in the trunk are {{price2:lockout}}. A {{dispatchFee}} dispatch fee is added once to either job. Tell dispatch where the keys are when you request help so the right price is confirmed first.",
          "We open the car. We don't make keys, so a lost key is not something we can fix.",
        ],
      },
      {
        heading: "Things to check before the driver comes",
        paragraphs: [
          "A little checking can save the call, or at least speed things up.",
        ],
        list: [
          "Walk around and try every door and the trunk, in case one is unlocked.",
          "Check whether a spare key is with someone nearby who can bring it.",
          "Look through the glass to see exactly where the keys are, and tell dispatch.",
          "If a child or a pet is locked inside, or anyone is in danger, call 911 first. Do not wait for us.",
          "Do not pry the door or force the window, as it risks damage that costs far more than a lockout.",
        ],
      },
      {
        heading: "What can add time to a lockout",
        paragraphs: [
          "Some cars are harder to open than others, and a damaged lock or a door that is jammed shut adds time. Dispatch confirms any change with you before the work goes ahead.",
          "After you are in, take the keys with you. A spare in your wallet or with someone you trust is a small habit that prevents a repeat.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will opening my car scratch it?",
        a: "The methods we use are non-destructive and meant to leave the car as it was. The driver works to avoid marking the paint or the weather stripping.",
      },
      {
        q: "What if I don't have my ID with me?",
        a: "Tell dispatch. The driver needs some way to confirm the car is yours, and they will explain what works.",
      },
      {
        q: "Can you open a car that is still running?",
        a: "Tell dispatch the engine is running so the driver knows. A running car with the doors locked should be opened as soon as possible.",
      },
      {
        q: "My key fob battery died. Is that a lockout?",
        a: "If the doors are locked and you can't get in, yes, we can open the car. Many fobs also hold a physical key, so check yours.",
      },
      {
        q: "Can you make me a new key?",
        a: "No. We open the car but don't make keys, so a lost key needs a locksmith or the dealer.",
      },
      {
        q: "A child or pet is locked in the car. What should I do?",
        a: "Call 911 first. Do not wait for a driver, since a closed car in Texas heat becomes dangerous fast.",
      },
      {
        q: "Will I be told when the driver is on the way?",
        a: "Yes. We text or call when the driver is on the way. We send the nearest available driver as soon as possible.",
      },
    ],
  },

  "tire-repair-plug-patch": {
    sections: [
      {
        heading: "How a plug and patch repair goes",
        paragraphs: [
          "The driver first finds the hole and checks where it is. A repair is only for a puncture in the tread, the flat part that meets the road. If the damage is in or near the sidewall, or the hole is too large, the tire can't be safely repaired and needs replacing.",
          "When the puncture is in the tread, the usual order is:",
        ],
        list: [
          "Remove whatever made the hole, such as a nail or screw.",
          "Clean and ream the hole so the repair material grips.",
          "Put in a plug or patch to seal it.",
          "Fill the tire to the correct pressure and check that it holds.",
        ],
      },
      {
        heading: "Puncture, valve or something else?",
        paragraphs: [
          "A tire that goes down slowly over days often has a small puncture, but it can also be a leaking valve stem or a poor seal at the rim. Soapy water brushed over the tire and valve shows the leak by bubbling at the spot.",
          "If the bubbles come from the valve, you need a valve stem replacement instead. If a nail or screw is stuck in the tread and you want it taken out and the tire made safe, there is a stuck screw service for that.",
          "A tire that is cut open or split along the side usually can't be repaired. Choose a tire replacement or a flat tire change, depending on whether you carry a usable spare.",
        ],
      },
      {
        heading: "Repair cost and what it covers",
        paragraphs: [
          "A plug or patch repair is {{price:tire-repair-plug-patch}} when the puncture is in the tread. A {{dispatchFee}} dispatch fee is added once for the trip, so the total is {{total:tire-repair-plug-patch}}. The price covers the repair.",
          "If the tire turns out not to be repairable, your driver tells you before doing anything, and you can choose a replacement or a spare change instead. Dispatch confirms the price of that service first.",
          "The repair is done roadside, wherever the car is parked, so you don't need to get to a shop with a low tire.",
        ],
      },
      {
        heading: "What to avoid while you wait",
        paragraphs: [
          "A tire that is flat or low can be ruined by driving on it, and the wheel can be damaged as well.",
        ],
        list: [
          "Don't drive any farther than you have to on a low or flat tire. Even a short distance can turn a repairable puncture into a ruined sidewall.",
          "Don't pull out the nail or screw. It is partly sealing the hole.",
          "Keep your hazard lights on while you wait.",
          "If you are in a live lane, or anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "After the tire is repaired",
        paragraphs: [
          "Check the tire pressure over the next few days. If it drops again, mention it to a shop, because there may be a second leak you couldn't see. The correct pressure is on the sticker in the driver's door jamb, not on the tire itself.",
          "A repaired tire is a normal tire. Keep an eye on the tread over time, and replace the tire when the tread wears low.",
          "A repair means the spare stays where it is, ready for the next time.",
        ],
      },
    ],
    faqs: [
      {
        q: "What is the difference between a plug and a patch?",
        a: "A plug fills the hole from the outside, while a patch seals it from the inside. The driver chooses the method that suits the puncture.",
      },
      {
        q: "Can a tire be repaired more than once?",
        a: "That depends on where the damage is and how it was repaired before. The driver checks the tire and tells you.",
      },
      {
        q: "Do I need my spare for this?",
        a: "No. A repair means you don't touch the spare at all.",
      },
      {
        q: "The tire is completely flat. Can it still be fixed?",
        a: "Sometimes. If the damage is in the tread, a flat tire can still be repaired. If it was driven on flat, the sidewall may be damaged, and the driver will tell you.",
      },
      {
        q: "How do I find where the air is leaking?",
        a: "Brush soapy water over the tread and the valve. Bubbles show where air is escaping.",
      },
      {
        q: "Is it worth repairing an old tire?",
        a: "If the tread is worn low, a new tire may serve you better than a repair. The driver can tell you what they see.",
      },
      {
        q: "Will I be told when the driver is on the way?",
        a: "Yes. We text or call when the driver is on the way. We send the nearest available driver as soon as possible.",
      },
    ],
  },

  "flat-tire-change": {
    sections: [
      {
        heading: "How a spare tire change is done",
        paragraphs: [
          "A spare change uses the spare already in your vehicle. It is the same on any car, and the order matters, because the nuts are loosened before the car is lifted.",
        ],
        list: [
          "Loosen the lug nuts a little while the wheel is still on the ground.",
          "Place the jack at the lifting point and raise the car until the flat is off the ground.",
          "Take the nuts off and remove the wheel.",
          "Mount the spare and tighten the nuts by hand.",
          "Lower the car and tighten the nuts in a star pattern, working across the wheel.",
        ],
      },
      {
        heading: "Check the spare before you rely on it",
        paragraphs: [
          "Many cars carry a compact spare, sometimes called a donut, meant only for short, slower trips. It is not made to stay on for long. The pressure and the speed limit are printed on the spare itself or in the owner's manual.",
          "If you can safely reach it, look at the spare. A spare that is flat or cracked after sitting for years can't be used, and we only put on a spare that is in the vehicle. Tell dispatch if you aren't sure the spare is good.",
          "If there is no usable spare, a tire replacement is the answer: we supply the tire and install it.",
        ],
      },
      {
        heading: "Spare change cost",
        paragraphs: [
          "A spare tire change is {{price:flat-tire-change}}, using the spare carried in your vehicle. A {{dispatchFee}} dispatch fee is added once, so the total is {{total:flat-tire-change}}.",
          "The price covers putting the spare on. It does not cover a new tire or repairing the flat, which are separate services.",
        ],
      },
      {
        heading: "What can slow a tire change down",
        paragraphs: [
          "Most changes are routine, but a few things add time. A lug nut that is rounded off or rusted tight may need a stripped lug nut service. A locking nut with no key needs a rim lock removal. Dispatch confirms the extra work and its price with you before the driver is sent.",
          "Mention these when you request help, so the driver arrives with the extra work already planned. A car parked on soft ground or a steep slope may also need to be moved to firm, level ground first, if that can be done safely.",
        ],
      },
      {
        heading: "Staying safe while you wait",
        paragraphs: [
          "Pull as far from traffic as you can and turn on your hazard lights. Put reflective triangles out if you carry them and it is safe to do so. Stay well away from the roadway, ideally behind a barrier.",
          "If you are stopped in a live lane, or anyone is in danger, call 911 first.",
          "Keep everyone out of the car and well back from the road while it is jacked up, and never put any part of yourself under it.",
          "After the change, check the spare's pressure and have the flat repaired or replaced soon. A compact spare is a temporary fix.",
        ],
      },
    ],
    faqs: [
      {
        q: "Can I drive normally on the spare?",
        a: "Not if it's a compact spare. Check the speed and distance limits printed on it or in your manual, and replace the flat soon.",
      },
      {
        q: "Where is my spare tire?",
        a: "Often under the trunk floor, under the vehicle, or on the back door. Your owner's manual shows where.",
      },
      {
        q: "Do I need to find the jack myself?",
        a: "No, you don't need to do the work. If you can safely locate the spare, that helps, but the driver handles the change.",
      },
      {
        q: "Why should the lug nuts be checked again later?",
        a: "Nuts can settle after the first few miles of driving. Having them checked at a shop gives you peace of mind after any wheel change.",
      },
      {
        q: "My car has no spare, only a repair kit. What now?",
        a: "Tell dispatch. A tire replacement can supply and install a tire, or a repair may be possible if the puncture is in the tread.",
      },
      {
        q: "The spare has a wheel lock. Does that matter?",
        a: "The wheel locks need their key. If you can't find it, a rim lock removal is a separate service.",
      },
      {
        q: "Will I be told when the driver is on the way?",
        a: "Yes. We text or call when the driver is on the way. We send the nearest available driver as soon as possible.",
      },
    ],
  },

  "tire-replacement": {
    sections: [
      {
        heading: "When a tire has to be replaced",
        paragraphs: [
          "Some damage can't be repaired safely. A tear in the sidewall, a blowout, a bulge, a cut or a hole too big to fix means the tire is finished. Driving on it, even a short way, can also ruin a tire that might have been saved.",
          "A tire can also be finished without an obvious hole. Cracks across the sidewall, a bulge in the side, cords showing through the rubber and tread worn down flat are all reasons to replace it. A bulge means the inside of the tire has failed, and it can burst without warning.",
          "If the damage is only a small puncture in the tread, a plug or patch repair is cheaper. The driver checks the tire and tells you which it is.",
        ],
      },
      {
        heading: "Tire replacement or a spare change?",
        paragraphs: [
          "A spare tire change puts on the spare you already carry. It is the quicker, cheaper way to get moving if you have a good spare. A tire replacement is for when you have no usable spare, or when you want a proper tire on the car instead of a temporary one.",
          "A compact spare is a short-term fix, so a replacement is the better choice when you can get one.",
        ],
      },
      {
        heading: "Finding your tire size",
        paragraphs: [
          "To supply the right tire, dispatch needs the size. It is printed on the sidewall as a string of numbers and letters, and a sticker in the driver's door jamb lists the size your car came with. You don't need to understand it. Read it out or send a photo of the sidewall.",
          "Read the size only if you can do it safely, away from traffic. If you can't, the year, make and model are enough to begin with, and dispatch works out the likely size from there and checks it with you.",
        ],
      },
      {
        heading: "Replacement cost and tire availability",
        paragraphs: [
          "Tire replacement is {{price:tire-replacement}}, with the tire supplied by us and installed on site. A {{dispatchFee}} dispatch fee is added once, so the total is {{total:tire-replacement}}.",
          "Tire availability varies by size, so dispatch confirms a tire is available, and your total, before a driver is sent. If the tire you need isn't available, they tell you then, not at the roadside.",
        ],
      },
      {
        heading: "How the swap goes and what comes next",
        paragraphs: [
          "The driver takes the wheel off the car, removes the damaged tire from the rim and puts the new one on. The wheel is then put back and the nuts are tightened in a star pattern.",
          "Afterward, check the tire pressure against the sticker in the door jamb, and have a shop look at the nuts after the first few miles if you want to be sure.",
          "While you wait, don't drive on the flat, and turn on your hazards. If you are in a live lane, or anyone is in danger, call 911 first.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do I need to replace all four tires?",
        a: "Not usually. One damaged tire is often replaced alone. A shop can advise if your tires are badly mismatched.",
      },
      {
        q: "How do I read the size on my tire?",
        a: "Look at the sidewall for a string of numbers and letters. Send it as it appears, or a photo of it, and dispatch will make sense of it.",
      },
      {
        q: "Is it safe to drive on a tire that looks fine but is low?",
        a: "Not for long. A tire that has lost air and been driven on can be damaged inside even if it looks normal.",
      },
      {
        q: "Can you replace a tire on a truck or an SUV?",
        a: "Give dispatch the year, make and model and the tire size. They confirm whether a tire is available for it.",
      },
      {
        q: "Why replace a tire instead of repairing it?",
        a: "Damage in or near the sidewall, or a hole beyond a certain size, can't be safely repaired. The driver checks and tells you which it is.",
      },
      {
        q: "What if my tire size isn't available?",
        a: "Dispatch tells you before a driver is sent. Availability varies, which is why it is confirmed first.",
      },
      {
        q: "Will I be told when the driver is on the way?",
        a: "Yes. We text or call when the driver is on the way. We send the nearest available driver as soon as possible.",
      },
    ],
  },

  "stuck-screw-in-tire": {
    sections: [
      {
        heading: "Why a screw in the tire needs care",
        paragraphs: [
          "A screw or nail in the tread often seals the hole it made, so the tire loses air slowly or not at all. Pull it out and the hole opens. A tire that seemed fine can go flat within minutes.",
          "That is why we take the screw out and repair the tire in the same visit. Removing it and sealing the hole are one job, not two.",
        ],
      },
      {
        heading: "How the screw comes out",
        paragraphs: [
          "The driver checks the tire and where the screw sits. The repair only applies to the tread. If it is in or near the sidewall, the tire can't be safely repaired and needs replacing.",
          "When it is in the tread, the usual order is:",
        ],
        list: [
          "Check the position and angle of the screw.",
          "Remove the screw and seal the hole right away.",
          "Make the repair with a plug or patch, as the damage allows.",
          "Fill the tire to the correct pressure and check it holds.",
        ],
      },
      {
        heading: "Is it a screw, a valve or a hidden puncture?",
        paragraphs: [
          "If you can see the head of a screw or a nail in the tread, you know. If the tire keeps losing air and you see nothing, it may be a puncture you can't see, or the valve stem.",
          "Brush soapy water over the tread and the valve. Bubbles show the leak. A leaking valve is a different job, and a puncture with nothing stuck in it is a plug and patch repair.",
          "Screws and nails are easy to miss, so walk around the car and look at all four tires, including the inside edge of the tread that faces the car. When you request help, tell dispatch which tire it is and what you can see sticking out of it.",
        ],
      },
      {
        heading: "Cost of removing the screw",
        paragraphs: [
          "Removing the screw and making the tire safe is {{price:stuck-screw-in-tire}}. A {{dispatchFee}} dispatch fee is added once for the trip, so the total is {{total:stuck-screw-in-tire}}.",
          "If the tire can't be repaired, your driver tells you first. You can then choose a spare change or a tire replacement, and dispatch confirms that price before the work.",
        ],
      },
      {
        heading: "Waiting with a screw in the tread",
        paragraphs: [
          "Leave the screw alone. Avoid long drives, and if the tire is losing air fast, don't drive on it at all, since a flat tire damages the wheel as well as the tire.",
          "Keep the car out of traffic and your hazard lights on if you have stopped on a roadside. If you are in a live lane, or anyone is in danger, call 911 first.",
          "Afterward, check the pressure again in a day or two. If it drops, tell a shop, because there may be a second puncture.",
          "If the tire is holding air and you must move the car, go slowly and only as far as needed to reach a safe spot. Do not take it on the highway while it has a screw in it.",
        ],
      },
    ],
    faqs: [
      {
        q: "How can I tell if the screw is in the tread or the sidewall?",
        a: "The tread is the flat part that touches the road. The sidewall is the side of the tire. Tell dispatch where it is, and the driver confirms it on arrival.",
      },
      {
        q: "Can I keep driving with the screw in?",
        a: "Only a short way, if the tire is holding air. Longer drives risk the tire going flat or the damage growing.",
      },
      {
        q: "Why didn't the tire go flat right away?",
        a: "The screw plugs its own hole. That seal can hold for days, and then give way.",
      },
      {
        q: "What if there is more than one screw?",
        a: "Tell dispatch. Each one is checked, and the driver confirms what the tire needs.",
      },
      {
        q: "How do I tell the pressure is dropping?",
        a: "Use a tire gauge and compare with the sticker in the door jamb. A reading well below it means air is escaping.",
      },
      {
        q: "Will I be told when the driver is on the way?",
        a: "Yes. We text or call when the driver is on the way. We send the nearest available driver as soon as possible.",
      },
    ],
  },

  "rim-lock-removal": {
    sections: [
      {
        heading: "What a wheel lock is",
        paragraphs: [
          "A wheel lock, also called a locking lug nut, takes the place of one ordinary nut on each wheel. Its head has a special pattern that only the matching key fits, so a thief with a regular wrench can't take the wheel.",
          "The key is the catch. If it is lost, or if a past tire shop rounded the pattern off, the wheel won't come off and a tire change is blocked.",
          "The key usually comes as a small socket with a matching pattern, and it is meant to be kept with the car. Most drivers never use it until a flat tire, and by then it has often been moved, lost or left at home.",
        ],
      },
      {
        heading: "How a stuck wheel lock gets removed",
        paragraphs: [
          "Without the key, the lock has to be taken off another way. The nut is removed, and it is not reused. The driver works to protect the wheel and the surrounding studs while doing it.",
          "Removing a lock without its key can leave marks around the lug hole, and the driver works to keep them to a minimum.",
          "Once the lock is off, the wheel comes off like any other, and the tire job goes ahead. You will want a replacement lock, or a standard nut, afterward.",
        ],
      },
      {
        heading: "Look for the key first",
        paragraphs: [
          "It is worth a few minutes to check, because it can save a service call. Look in these places:",
        ],
        list: [
          "The glove box and the center console.",
          "The trunk well, near the spare and the jack.",
          "A small pouch with the spare tire tools.",
          "The owner's manual pocket.",
          "Ask anyone else who drives the car if they have it.",
        ],
      },
      {
        heading: "Lock removal cost",
        paragraphs: [
          "Wheel lock removal is {{price:rim-lock-removal}}. It covers removing the lock so the wheel can come off. A {{dispatchFee}} dispatch fee is added once for the trip, so the total is {{total:rim-lock-removal}}.",
          "The lock removal does not include the tire work. If you need a flat changed or a tire replaced, that is a separate service, and you can ask for both in one request. Dispatch confirms your total before a driver is sent.",
          "If the lock is on a wheel with a flat, say so in the same request, so one visit can handle both.",
        ],
      },
      {
        heading: "Spotting a wheel lock on your car",
        paragraphs: [
          "One lug nut on each wheel looks different from the rest. It may be rounded, a different shape or have a patterned head, and it will not fit a standard wrench or socket.",
          "A plain nut that spins under the wrench and won't grip is a stripped lug nut, which is a different service. If you aren't sure which you have, describe it when you request help.",
          "Stay well clear of the roadway while you wait. If you are in a live lane, or anyone is in danger, call 911 first.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will I need a new lock afterward?",
        a: "The removed lock is used up. You will need a replacement lock or a standard nut for that wheel.",
      },
      {
        q: "Can I drive with the lock still on?",
        a: "Yes, if the wheel is fine. The lock only matters when a wheel has to come off.",
      },
      {
        q: "Does every wheel have a lock?",
        a: "Usually one nut per wheel is a lock, though some cars have none. Check by looking at the nuts on each wheel.",
      },
      {
        q: "Can the lock be removed without damaging the wheel?",
        a: "The driver works to protect the wheel and the studs. The lock nut itself is the part that is lost.",
      },
      {
        q: "I found the key, but it won't turn the lock. What now?",
        a: "A worn or damaged pattern can stop the key from gripping. Describe it when you request help, and dispatch confirms the right service.",
      },
      {
        q: "Will I be told when the driver is on the way?",
        a: "Yes. We text or call when the driver is on the way. We send the nearest available driver as soon as possible.",
      },
    ],
  },

  "stripped-lug-nut-removal": {
    sections: [
      {
        heading: "Why lug nuts strip",
        paragraphs: [
          "A lug nut strips when its hex shape wears round, so a wrench has nothing to grip. Common causes are an impact gun used too hard at a past tire job, rust, a wrench that doesn't fit, and nuts tightened far past what they need.",
          "It is also common after a socket that fits loosely has been used on the nut, since the loose fit rounds the corners as it turns. A nut run on hard with an impact gun and no torque wrench is often the one that fights back later.",
          "Once it is rounded, the more you force it the worse it gets. Extra pressure can also snap the stud, which turns a small job into a repair.",
        ],
      },
      {
        heading: "How to tell a nut is stripped",
        paragraphs: [
          "The wrench slips and spins around the nut without turning it. The corners of the nut look smooth, chewed up or rounded. Other nuts on the same wheel loosen without trouble.",
          "If every nut is stuck tight but still has sharp corners, it may only be rust or over-tightening, and the driver will tell you which when they arrive.",
          "A nut with a special pattern that needs its own key is a wheel lock, a different service.",
        ],
      },
      {
        heading: "How the damaged nut comes off",
        paragraphs: [
          "The driver chooses a method that fits the damage, working to protect the stud and the wheel. The nut is a casualty here, so it does not come off in one piece, and you will need a replacement for it.",
          "Once it is off, the wheel comes off normally, and the tire job can go ahead. A set of clean, correct nuts afterward matters, since a mismatched or worn nut can work loose over time.",
        ],
      },
      {
        heading: "Removal cost for a stripped nut",
        paragraphs: [
          "Removing a stripped lug nut is {{price:stripped-lug-nut-removal}}. That covers getting the damaged nut off so the wheel can come off. A {{dispatchFee}} dispatch fee is added once for the trip, so the total is {{total:stripped-lug-nut-removal}}.",
          "If several nuts are damaged, dispatch confirms the price before a driver is sent. The removal doesn't include the tire work. A flat change or a replacement is a separate service, and you can request them together.",
        ],
      },
      {
        heading: "Mistakes to avoid, and what to do next",
        paragraphs: [
          "Stop turning the wrench. Don't hammer the nut or use a bigger bar, as that is how studs break. Count how many nuts on the wheel look damaged, and which wheel it is. That detail lets dispatch confirm the price and send a driver who is ready for the job.",
          "Stay clear of the roadway while you wait. If you are in a live lane, or anyone is in danger, call 911 first.",
          "Afterward, ask the shop that does your next tire work to use a torque wrench. Nuts tightened to the maker's value come off easily and stay on safely.",
        ],
      },
    ],
    faqs: [
      {
        q: "Will the stud be damaged?",
        a: "The driver works to protect it. Heavy forcing before we arrive is the main way a stud gets broken.",
      },
      {
        q: "What if the nut is rusted rather than rounded?",
        a: "Describe it when you request help. A rusted nut with sharp corners may come off more easily, and the driver tells you what they find.",
      },
      {
        q: "Do I need a whole new set of nuts?",
        a: "Often just the damaged one. Ask a shop to check the rest, particularly if they look worn.",
      },
      {
        q: "Why did my nut strip after a tire shop visit?",
        a: "Too much force, or a socket that doesn't fit well, can round the corners over time.",
      },
      {
        q: "Does this cover a broken stud?",
        a: "No. A broken stud is a mechanical repair, which we don't do. The price covers removing the damaged nut.",
      },
      {
        q: "How many damaged nuts change the price?",
        a: "If several are damaged, dispatch confirms the price before a driver is sent. Tell them how many you see.",
      },
      {
        q: "Will I be told when the driver is on the way?",
        a: "Yes. We text or call when the driver is on the way. We send the nearest available driver as soon as possible.",
      },
    ],
  },

  "valve-stem-replacement": {
    sections: [
      {
        heading: "What a valve stem does",
        paragraphs: [
          "The valve stem is the small tube you unscrew the cap from to add air. It holds the air in and lets it in when needed. On many wheels it is a rubber stem, and on others a metal one held in place by a nut.",
          "Rubber dries out and cracks with age, heat and sun, and the stem can also be damaged by dirt or a hard knock. A cracked stem leaks around its base or through the valve, without any puncture in the tire.",
        ],
      },
      {
        heading: "Telling a valve leak from a puncture",
        paragraphs: [
          "Mix some soapy water and brush it on the stem and the center of the valve. Bubbles that grow there show the stem is leaking. Then do the same over the tread, in case there is a puncture too.",
          "If the bubbles come from a nail or screw in the tread, you need a puncture service instead. Say what you find when you request help, and dispatch confirms the right job. These are signs it may be the stem:",
        ],
        list: [
          "A tire that loses air slowly with no visible damage.",
          "A hiss at the valve when you press on it.",
          "Cracks or a dried-out look around the base of the stem.",
          "A pressure warning that keeps coming back for the same wheel.",
        ],
      },
      {
        heading: "How a new stem goes on",
        paragraphs: [
          "To replace a stem, the tire has to be let down and the old stem taken out of the wheel. The new one goes in, the tire is filled to the correct pressure, and the driver checks it holds.",
          "The details depend on the wheel and the type of stem. The job stops the leak without replacing the tire.",
          "Because the tire is let down for this job, the driver also checks the pressure on the way back up, so you leave with the tire at the pressure listed on the door jamb sticker.",
        ],
      },
      {
        heading: "Pressure sensors and stem price",
        paragraphs: [
          "Many newer cars have a tire pressure sensor built into the stem, and these stems differ. Tell dispatch your year, make and model so they can confirm the price for your type.",
          "A valve stem replacement is {{price:valve-stem-replacement}}. That covers replacing the leaking stem. A {{dispatchFee}} dispatch fee is added once, so the total is {{total:valve-stem-replacement}}.",
        ],
      },
      {
        heading: "Before and after the visit",
        paragraphs: [
          "Don't drive far on a tire that is losing air quickly. A tire run low can be damaged inside and may no longer be repairable. Tell dispatch how fast the tire is losing air, since a fast leak is a reason to stay put.",
          "After the stem is replaced, check the pressure against the sticker in the door jamb. Always put the valve cap back on, as it keeps dirt and water out of the valve.",
          "Stay clear of the roadway while you wait. If you are in a live lane, or anyone is in danger, call 911 first.",
        ],
      },
    ],
    faqs: [
      {
        q: "How often do valve stems need replacing?",
        a: "Rubber stems age, and many shops replace them when a tire is changed. A cracked one is worth replacing right away.",
      },
      {
        q: "Does the tire need replacing too?",
        a: "Not if the leak is only the stem. Replacing the stem stops the leak without replacing the tire.",
      },
      {
        q: "Can I just tighten the valve core?",
        a: "A loose core can leak, and tightening it is a quick check. A cracked stem will keep leaking, though.",
      },
      {
        q: "Will my tire pressure light go off?",
        a: "It may after the pressure is correct. If the warning stays on, the sensor may need attention from a shop.",
      },
      {
        q: "Why does only one tire keep losing air?",
        a: "The valve, a puncture, or the seal between tire and wheel are the common causes. Soapy water helps find which.",
      },
      {
        q: "Will I be told when the driver is on the way?",
        a: "Yes. We text or call when the driver is on the way. We send the nearest available driver as soon as possible.",
      },
    ],
  },
};
