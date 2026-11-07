import type { ServiceTypeSlug } from "@/lib/types/domain";

/**
 * Plain-English definitions of the words drivers meet on a roadside call, for
 * /glossary. General automotive facts that hold for any car; where a term
 * touches a TRA service, `service` links it. Prices only through tokens.
 */
export interface GlossaryTerm {
  term: string;
  /** Anchor id, lowercase with hyphens. */
  id: string;
  definition: string;
  service?: ServiceTypeSlug;
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    term: "CCA",
    id: "cca",
    definition:
      "CCA stands for cold cranking amps. It is the number printed on a battery label that says how much starting power the battery can deliver in cold weather. A higher number generally means stronger cold starts. Your owner's manual or the old battery's label shows the rating your vehicle needs, and a battery that falls short is a common reason for a no-start.",
    service: "battery-replacement",
  },
  {
    term: "Cold cranking amps",
    id: "cold-cranking-amps",
    definition:
      "Cold cranking amps measure how much current a battery can supply to turn the engine over when it is cold. Engines are harder to turn in low temperatures, so this rating matters most on a freezing morning. When you replace a battery, matching or exceeding the rating your car calls for is the safe choice.",
    service: "battery-replacement",
  },
  {
    term: "Reserve capacity",
    id: "reserve-capacity",
    definition:
      "Reserve capacity is a battery rating that shows how long the battery can keep supplying power to the car's basic systems if the alternator stops charging. It is measured in minutes. It helps explain why a battery with a good starting rating can still leave you stuck when you run lights and accessories with the engine off.",
  },
  {
    term: "AGM battery",
    id: "agm-battery",
    definition:
      "AGM stands for absorbent glass mat. In this type of battery the liquid inside is held in fiber mats, so it is sealed and spill resistant. Many newer cars, especially those with start-stop engines, call for an AGM battery. Swapping in a different type can cause charging problems, so the replacement should match what the car came with.",
    service: "battery-replacement",
  },
  {
    term: "EFB battery",
    id: "efb-battery",
    definition:
      "EFB stands for enhanced flooded battery. It is an upgraded version of the traditional liquid-filled battery, built to handle the frequent restarts of cars with start-stop systems. If your car came with one, the replacement should be the same type rather than a basic budget battery, or it may wear out early.",
    service: "battery-replacement",
  },
  {
    term: "Flooded battery",
    id: "flooded-battery",
    definition:
      "A flooded battery is the traditional car battery, with lead plates sitting in liquid electrolyte. It has been used for decades and works well in many vehicles. Some versions have caps for adding water, though most today are sealed. Heat can shorten any battery's life, which is worth knowing in a Texas summer.",
    service: "battery-replacement",
  },
  {
    term: "Group size",
    id: "group-size",
    definition:
      "Group size is a standard code that tells you a battery's physical dimensions, where the posts sit, and which side is positive. A battery of the wrong group size may not fit the tray or reach the cables. The right size for your car is listed in the owner's manual or on the old battery.",
    service: "battery-replacement",
  },
  {
    term: "Top post battery",
    id: "top-post-battery",
    definition:
      "A top post battery has its two terminals on the top surface, sticking up like small round posts. The cable clamps slip over them and tighten with a bolt. It is the most common layout, and it makes it easy to attach jumper cables or a jump pack when the battery is dead.",
    service: "jump-start",
  },
  {
    term: "Side post battery",
    id: "side-post-battery",
    definition:
      "A side post battery has its terminals on the side wall, with threaded holes that the cable bolts screw into. You see them on some vehicles from certain makers. Clamps made for top posts do not fit, so a jump on one may need an adapter or the car's dedicated jump point under the hood.",
    service: "jump-start",
  },
  {
    term: "Battery terminal",
    id: "battery-terminal",
    definition:
      "A battery terminal is the metal contact where a cable connects to the battery. There are two, positive and negative. A loose or dirty terminal can stop current from flowing even when the battery itself is healthy, so a car that clicks or will not start sometimes just needs a clean, tight connection.",
  },
  {
    term: "Corrosion",
    id: "corrosion",
    definition:
      "Corrosion is the crusty white, green, or blue buildup you sometimes see around battery terminals. It acts like a layer of insulation and blocks current. Heavy buildup can make a good battery seem dead. Cleaning it off can restore the connection, but if the battery is old, the buildup is often a warning sign.",
    service: "battery-replacement",
  },
  {
    term: "Parasitic drain",
    id: "parasitic-drain",
    definition:
      "A parasitic drain is something that keeps pulling power from the battery after the car is off. A small draw is normal for the clock and computer memory. A larger one, from a stuck light, an add-on accessory, or a faulty module, can drain a battery completely overnight and leave you stranded.",
    service: "jump-start",
  },
  {
    term: "Alternator",
    id: "alternator",
    definition:
      "The alternator is the part driven by the engine that recharges the battery and powers the electrical system while you drive. If it fails, the car runs on battery power alone until that runs out. A battery that keeps dying even after a jump often points to the alternator rather than the battery.",
    service: "jump-start",
  },
  {
    term: "Starter",
    id: "starter",
    definition:
      "The starter is a small electric motor that spins the engine to get it running when you turn the key or press the button. A single loud click or a grinding sound can point to the starter, while rapid clicking usually means a weak battery. A jump-start only helps if the battery is the problem.",
    service: "jump-start",
  },
  {
    term: "Battery registration",
    id: "battery-registration",
    definition:
      "Battery registration is the step of telling a newer car's computer that a new battery has been installed. Some vehicles use this to adjust how they charge the battery over time. Whether your car needs it depends on the make and model, so check the owner's manual or ask the technician before the swap.",
    service: "battery-replacement",
  },
  {
    term: "12-volt battery in EVs and hybrids",
    id: "12-volt-battery-ev-hybrid",
    definition:
      "Electric cars and hybrids carry a large high-voltage battery for driving, but they also have an ordinary 12-volt battery. It powers the computers, locks, and the systems that wake up the car. When that small battery goes flat, the vehicle can act completely dead even though the big battery is full.",
    service: "jump-start",
  },
  {
    term: "Jump pack",
    id: "jump-pack",
    definition:
      "A jump pack is a portable battery with short cables attached, used to start a car with a dead battery without needing a second vehicle. You connect it to the dead battery, start the engine, and then disconnect it. It is handy when no other car is nearby to help.",
    service: "jump-start",
  },
  {
    term: "Jumper cables",
    id: "jumper-cables",
    definition:
      "Jumper cables are a pair of heavy cables with clamps on each end, used to carry power from a working battery to a dead one. The order of connection matters, and the clamps must never touch each other. Done wrong, they can cause sparks or damage the electronics.",
    service: "jump-start",
  },
  {
    term: "Ground point",
    id: "ground-point",
    definition:
      "A ground point is a bare metal spot on the engine or frame where the last jumper cable clamp connects. Using it instead of the dead battery's negative terminal keeps any spark away from the battery, which can give off flammable gas. Many cars also have a marked jump point under the hood.",
    service: "jump-start",
  },
  {
    term: "Surface charge",
    id: "surface-charge",
    definition:
      "Surface charge is a temporary extra voltage on a battery right after it has been charged, such as after a drive. It can make a weak battery look healthy on a quick voltage check. That is why a proper load test, rather than a simple voltage reading, gives a truer picture of a battery's condition.",
    service: "battery-replacement",
  },
  {
    term: "Load test",
    id: "load-test",
    definition:
      "A load test checks a battery by drawing current from it, the way starting an engine does, and watching how well the voltage holds up. It shows whether a battery can still do its job under real demand. A battery can read normal at rest and still fail this test.",
    service: "battery-replacement",
  },
  {
    term: "Date code",
    id: "date-code",
    definition:
      "A date code is a short mark on a battery, usually a sticker or stamp, showing when it was made. Batteries do not last forever, so the age is a helpful clue when a car starts to struggle. In hot climates like Texas, older batteries tend to wear out sooner.",
    service: "battery-replacement",
  },
  {
    term: "Core charge",
    id: "core-charge",
    definition:
      "A core charge is a deposit added to a new battery that is refunded when you hand back the old one. Old batteries contain lead and acid and are recycled rather than thrown away. If you see this line item on a battery purchase, it is tied to returning the used battery.",
    service: "battery-replacement",
  },
  {
    term: "Compact spare",
    id: "compact-spare",
    definition:
      "A compact spare is a small, lightweight spare tire, often called a donut, meant for short-term use. It is narrower than your regular tires. Most carry a lower speed limit and a distance limit printed on the sidewall, so it is for getting to a tire shop, not for everyday driving.",
    service: "flat-tire-change",
  },
  {
    term: "Full-size spare",
    id: "full-size-spare",
    definition:
      "A full-size spare matches the size of the other tires on your car. Because it is the same size, you can generally drive on it normally until the damaged tire is fixed or replaced. Check whether it fits your wheels, since some cars carry a full-size spare on a different type of wheel.",
    service: "flat-tire-change",
  },
  {
    term: "Run-flat tire",
    id: "run-flat-tire",
    definition:
      "A run-flat tire has reinforced sidewalls that let it keep rolling for a limited distance after losing air. Cars that use them often have no spare at all. The maker's limits on speed and distance apply, and a run-flat that was driven on while flat may not be repairable, so replacement is common.",
    service: "tire-replacement",
  },
  {
    term: "Tire sealant kit",
    id: "tire-sealant-kit",
    definition:
      "A tire sealant kit is a can of sticky liquid and an air pump that some cars carry in place of a spare. It can seal a small puncture in the tread long enough to get to a shop. It is a temporary measure and usually will not fix a sidewall tear or a large hole.",
    service: "tire-repair-plug-patch",
  },
  {
    term: "TPMS",
    id: "tpms",
    definition:
      "TPMS stands for tire pressure monitoring system. It uses a sensor in each wheel and lights a warning on your dash when a tire is low on air. The light is an early heads-up about a slow leak, but it does not tell you what kind of damage caused it.",
    service: "tire-repair-plug-patch",
  },
  {
    term: "Valve stem",
    id: "valve-stem",
    definition:
      "The valve stem is the small tube sticking out of the wheel that you add air through. A cap protects it and a spring valve inside holds the pressure in. A cracked, leaking, or damaged stem can cause a slow leak that looks like a bad tire, and it can be replaced.",
    service: "valve-stem-replacement",
  },
  {
    term: "Tread depth",
    id: "tread-depth",
    definition:
      "Tread depth is how deep the grooves in a tire are. Those grooves push water out from under the tire, so worn tread gives less grip on wet Texas roads. Shallow tread also makes a flat more likely and can affect whether a tire is worth repairing.",
    service: "tire-replacement",
  },
  {
    term: "Sidewall",
    id: "sidewall",
    definition:
      "The sidewall is the side of the tire between the tread and the wheel. It flexes constantly and is much thinner than the tread. Information such as the size and load rating is printed on it. Damage there, like a bulge or cut, usually means the tire cannot be safely repaired.",
    service: "tire-replacement",
  },
  {
    term: "Bead",
    id: "bead",
    definition:
      "The bead is the reinforced edge of the tire that seals against the wheel rim. It holds the air in. If the bead is damaged or does not seat properly, a tire can leak around the rim even though the tread is fine, and the leak will not show up as a puncture.",
    service: "tire-repair-plug-patch",
  },
  {
    term: "Plug",
    id: "plug",
    definition:
      "A plug is a sticky rubber strip pushed into a puncture from outside the tire to seal the hole. It is quick, but on its own it is considered a limited fix. A plug alone does not let a technician inspect the inside of the tire, which is why many shops prefer a plug-patch.",
    service: "tire-repair-plug-patch",
  },
  {
    term: "Patch",
    id: "patch",
    definition:
      "A patch is a piece of rubber glued to the inside of the tire over a puncture. It seals the inner liner, which is what holds the air. A patch generally needs the tire taken off the wheel so the inside can be checked first for hidden damage.",
    service: "tire-repair-plug-patch",
  },
  {
    term: "Plug-patch",
    id: "plug-patch",
    definition:
      "A plug-patch combines a stem that fills the hole with a patch that seals the inside of the tire, installed as one piece from the inside. It is the more thorough type of puncture repair because the technician can also inspect the inner tire for hidden damage.",
    service: "tire-repair-plug-patch",
  },
  {
    term: "Lug nut",
    id: "lug-nut",
    definition:
      "A lug nut is the nut that threads onto a stud and holds the wheel on the car. Most wheels use four to six of them. They need to be tightened evenly and to the right level, because loose ones can let a wheel wobble or even come off.",
    service: "flat-tire-change",
  },
  {
    term: "Lug bolt",
    id: "lug-bolt",
    definition:
      "A lug bolt does the same job as a lug nut, but the bolt threads into the hub instead of a nut threading onto a stud. Many European makes use them. They need the right socket and the right tightness, and they can be damaged if forced.",
    service: "flat-tire-change",
  },
  {
    term: "Wheel lock",
    id: "wheel-lock",
    definition:
      "A wheel lock is a special lug nut or bolt with an unusual pattern, meant to deter wheel theft. A regular socket will not grip it. You need the matching key to loosen it, which makes it a common reason a simple flat becomes hard to change.",
    service: "rim-lock-removal",
  },
  {
    term: "Wheel lock key",
    id: "wheel-lock-key",
    definition:
      "A wheel lock key is the small adapter that fits the pattern on your wheel lock. It usually lives in the glove box, the trunk, or the spare tire well. If the key is lost or broken, the locked nut cannot be removed with ordinary tools.",
    service: "rim-lock-removal",
  },
  {
    term: "Stripped lug nut",
    id: "stripped-lug-nut",
    definition:
      "A stripped lug nut has damaged edges or threads, so a socket slips instead of gripping. It often comes from over-tightening, cross-threading, or rounded corners from a poor tool. It can keep you from taking a wheel off, and it needs a special removal method.",
    service: "stripped-lug-nut-removal",
  },
  {
    term: "Torque",
    id: "torque",
    definition:
      "Torque is the amount of twisting force applied when tightening a nut or bolt. Lug nuts have a recommended torque listed in the owner's manual. Too loose and a wheel can work free, while too tight can damage the studs, which is why a torque wrench is used for the final tightening.",
    service: "flat-tire-change",
  },
  {
    term: "Jack point",
    id: "jack-point",
    definition:
      "A jack point is a reinforced spot under the car, marked by the maker, where a jack can lift safely. Lifting anywhere else can bend the body or cause the car to slip. The owner's manual shows where these spots are for your vehicle.",
    service: "flat-tire-change",
  },
  {
    term: "Scissor jack",
    id: "scissor-jack",
    definition:
      "A scissor jack is the small, screw-driven jack that comes with most cars. It lifts the vehicle by turning a handle and opening a diamond-shaped frame. It is made for an occasional tire change on level, firm ground, not for working under the car.",
    service: "flat-tire-change",
  },
  {
    term: "Floor jack",
    id: "floor-jack",
    definition:
      "A floor jack is a larger, wheeled jack with a long handle that lifts a car faster and more steadily than a scissor jack. Shops and roadside technicians use them. It lifts the car but should never be the only thing holding it up, so a secure setup is used.",
    service: "flat-tire-change",
  },
  {
    term: "DOT date code",
    id: "dot-date-code",
    definition:
      "The DOT date code is a series of characters on the tire sidewall that includes four digits showing the week and year it was made. Rubber ages even when a tire is barely used, so this tells you how old a tire is. It is worth checking on a spare that has sat for years.",
    service: "tire-replacement",
  },
  {
    term: "PSI",
    id: "psi",
    definition:
      "PSI stands for pounds per square inch, the unit used for tire air pressure. The correct number for your car is on a sticker in the driver's door jamb, not on the tire itself. Too little air wears a tire out faster and makes it more likely to overheat on a hot highway.",
    service: "tire-repair-plug-patch",
  },
  {
    term: "Load rating",
    id: "load-rating",
    definition:
      "A load rating, shown as a number on the tire sidewall, tells you how much weight one tire can carry. A replacement tire should meet or exceed what your car needs. Choosing one with too low a rating can be unsafe, especially with passengers and cargo on board.",
    service: "tire-replacement",
  },
  {
    term: "Blowout",
    id: "blowout",
    definition:
      "A blowout is a sudden, rapid loss of air from a tire. If it happens, hold the steering wheel firmly, ease off the gas, avoid slamming the brakes, and steer gently to a safe stop. Afterward, a tire damaged in a blowout often cannot be repaired and needs replacing.",
    service: "tire-replacement",
  },
  {
    term: "Stuck screw in tire",
    id: "stuck-screw-in-tire",
    definition:
      "A screw or nail stuck in the tread can hold air for a while, then leak slowly. Leaving it in is usually the best move until help arrives, since pulling it out can make the tire go flat quickly. Once it is removed, a puncture in the tread can often be repaired.",
    service: "stuck-screw-in-tire",
  },
  {
    term: "Key fob",
    id: "key-fob",
    definition:
      "A key fob is the small remote that locks and unlocks your car with buttons. Many also act as the key itself. Its battery eventually runs down, which can stop it from working and is a common cause of a locked-out or no-start situation.",
    service: "lockout",
  },
  {
    term: "Push-button start",
    id: "push-button-start",
    definition:
      "Push-button start lets you start the engine by pressing a button while the key fob is inside the car, with no key turned in an ignition. If the fob battery is low or the fob is locked inside, the car may not respond the way you expect.",
    service: "lockout",
  },
  {
    term: "Smart key",
    id: "smart-key",
    definition:
      "A smart key is a fob that the car detects nearby, so you can unlock the doors and start the engine without taking it out of your pocket. It is convenient, but it also makes it easy to leave the fob in the car and lock yourself out.",
    service: "lockout",
  },
  {
    term: "Auto-lock",
    id: "auto-lock",
    definition:
      "Auto-lock is a feature that locks the doors on its own, either when you start driving or when you walk away from the car. It can help security, but it also contributes to lockouts if you step out with the keys still inside.",
    service: "lockout",
  },
  {
    term: "Non-destructive entry",
    id: "non-destructive-entry",
    definition:
      "Non-destructive entry means opening a locked car without breaking the window, drilling the lock, or damaging the door. Technicians use specialized tools to do this. It is the standard way to get into a locked vehicle while leaving it exactly as it was.",
    service: "lockout",
  },
  {
    term: "Trunk release",
    id: "trunk-release",
    definition:
      "A trunk release is the lever, button, or fob control that opens the trunk. Many cars also have an interior pull or an emergency release inside the trunk. If your keys are locked in the trunk, or the release is not working, you can end up locked out of your own things.",
    service: "lockout",
  },
  {
    term: "Valet key",
    id: "valet-key",
    definition:
      "A valet key is a limited key that opens the doors and starts the car but not the trunk or glove box. It is meant for handing to a parking attendant. If you own one, it can sometimes get you back into the car when your main key is locked inside.",
    service: "lockout",
  },
  {
    term: "Dispatch fee",
    id: "dispatch-fee",
    definition:
      "A dispatch fee is the charge for sending a technician to your location, separate from the work itself. TRA's dispatch fee is {{dispatchFee}}. Knowing it up front helps you compare what a roadside call will cost, since the job is a separate matter from getting someone out to you.",
  },
  {
    term: "Roadside assistance",
    id: "roadside-assistance",
    definition:
      "Roadside assistance is help that comes to you when your car has a problem on the road, such as a dead battery, a flat tire, or a lockout. The aim is to get you moving again on the spot, so you do not have to leave the car or find a shop on your own.",
  },
  {
    term: "Membership roadside plan",
    id: "membership-roadside-plan",
    definition:
      "A membership roadside plan is a subscription that gives you covered roadside help for a yearly or monthly fee. Instead of paying each time, you pay in advance and call when needed. Plans differ in what they cover, so read the details before you rely on one.",
  },
  {
    term: "Mile marker",
    id: "mile-marker",
    definition:
      "A mile marker is a small green sign on the side of a highway that shows how far you are along that road. Giving the highway name, direction of travel, and the nearest mile marker helps a dispatcher or a 911 operator find you quickly.",
  },
  {
    term: "Frontage road",
    id: "frontage-road",
    definition:
      "A frontage road runs alongside a major highway, giving access to businesses and neighborhoods. In Texas they are common and often one-way. If you break down, getting onto a frontage road can put you in a safer, easier spot to meet a technician.",
  },
  {
    term: "Service road",
    id: "service-road",
    definition:
      "A service road is another name for a frontage road, a side road that runs parallel to a highway. Texans use both terms. When you give your location, mention whether you are on the main lanes or the service road, since the two can be quite far apart.",
  },
  {
    term: "Tollway",
    id: "tollway",
    definition:
      "A tollway is a road that charges a fee to use, often collected electronically. The Dallas-Fort Worth area has many. Breakdowns there can be harder to reach, so give your exact location and direction of travel when you call for help.",
  },
  {
    term: "Managed or express lanes",
    id: "managed-express-lanes",
    definition:
      "Managed or express lanes are separate lanes alongside a highway, often with tolls or access rules and barriers between them and the regular lanes. If your car stops in one, it can be hard for anyone to reach you, so tell the dispatcher exactly which lanes you are in.",
  },
  {
    term: "Hazard lights",
    id: "hazard-lights",
    definition:
      "Hazard lights are the flashing amber lights on all four corners of the car, switched on with the triangle button. Turn them on as soon as you realize you have a problem, so other drivers see you and give you room while you wait for help.",
  },
  {
    term: "Move Over law",
    id: "move-over-law",
    definition:
      "Texas law generally requires drivers to move over a lane or slow down when they pass stopped emergency vehicles and certain other roadside vehicles with flashing lights. It protects people working next to traffic. Even when you are not sure it applies, slowing down and giving room is the safe thing to do.",
  },
  {
    term: "911",
    id: "911",
    definition:
      "911 is the number to call for emergencies such as injuries, a fire, or a car in a dangerous spot. A dead battery or flat tire alone is not an emergency, but if you feel unsafe or the car is blocking traffic, call 911 first.",
  },
  {
    term: "Courtesy patrol",
    id: "courtesy-patrol",
    definition:
      "A courtesy patrol is a public program in some areas where trucks cruise busy highways to help stranded drivers with simple problems. Availability, coverage, and what they do vary by place and time. Do not count on one showing up; call for help if you need it.",
  },
  {
    term: "Semi truck",
    id: "semi-truck",
    definition:
      "A semi truck is a large tractor that pulls a trailer, and it usually runs on a much larger electrical system than a car. Its batteries are bigger and often come in sets, so starting one takes different equipment than a regular jump.",
    service: "semi-truck-jump-start",
  },
  {
    term: "18-wheeler",
    id: "18-wheeler",
    definition:
      "An 18-wheeler is a common name for a tractor-trailer, the big rig you see on Texas highways. The name comes from its total number of wheels. Breakdowns involving one often need heavy-duty equipment and extra attention to passing traffic while the work is done.",
    service: "semi-truck-jump-start",
  },
  {
    term: "Box truck",
    id: "box-truck",
    definition:
      "A box truck is a medium or large truck with an enclosed cargo area, like the ones used for moving or deliveries. It is bigger and heavier than a car, so its tires, batteries, and lifting needs differ. Tell the dispatcher what you are driving when you call.",
  },
];
