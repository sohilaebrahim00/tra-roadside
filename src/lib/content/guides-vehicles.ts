import type { Guide } from "./guides";

/** Guides for one vehicle: its battery, spare and common roadside problems. The rules are in guides.ts. */

const UPDATED = "2026-11-04";

/** Portrait field photos for the guide cards, all 1080 x 1350. */
const card = (name: string) => ({ src: `/images/field/${name}.webp`, width: 1080, height: 1350 });

const SERVICES: Guide["services"] = ["battery-replacement", "flat-tire-change", "jump-start"];

export const GUIDES_VEHICLES: Guide[] = [
  {
    slug: "ford-f-150-battery-and-flat-tire",
    title: "Ford F-150 Battery and Flat Tire Help",
    h1: "Ford F-150 battery and flat tire help in Dallas–Fort Worth",
    metaDescription:
      "Which battery a Ford F-150 takes by year, the signs it is failing, how the spare is stowed, and what to tell dispatch for a battery or flat tire in DFW.",
    topic: "Vehicle guide",
    dek: "The F-150 has been sold for so long that the battery changes a lot from one year to the next, and the spare rides under the truck instead of in it. Both facts matter when you are stuck in a parking lot and need the right answer fast.",
    updated: UPDATED,
    cardImage: card("field-tire-jack"),
    sections: [
      {
        heading: "Which battery an F-150 takes",
        paragraphs: [
          "Our fitment table splits the F-150 into four stretches of model years. The group size is the physical size of the battery, and for the newest trucks the type matters just as much.",
          "In the 2018 to 2025 trucks, Ford used an H6 or an H7 depending on how the truck was built, and an AGM battery is required. The 3.0-liter diesel and the PowerBoost hybrid are confirmed from the VIN instead of from the table. The 2015 to 2017 trucks also take an H6 or an H7, and some need AGM: trucks with auto start-stop need the AGM version.",
        ],
        list: [
          "2018 to 2025: group H6 or H7, AGM required.",
          "2015 to 2017: group H6 or H7, AGM on some trucks.",
          "2009 to 2014: group 65.",
          "2005 to 2008: group 59 or 65.",
        ],
      },
      {
        heading: "Signs the battery is going",
        paragraphs: [
          "The usual warnings apply: the engine turns over slowly, the dash lights dim while cranking, or you hear clicking and nothing else. A big truck needs a lot of current to turn over, so a tired battery tends to show up here before it does in a small car.",
          "On a truck with auto start-stop, a battery that has to be jumped a second time in a few weeks should be replaced, not jumped again. With AGM required on the newer trucks, the replacement has to be the AGM type. The Battery Finder on this site gives the size for your exact year, and dispatch confirms the battery before anyone is sent.",
        ],
      },
      {
        heading: "The spare and changing a tire",
        paragraphs: [
          "On the 2009 to 2014 trucks, Ford's manual describes the spare as stowed underneath the vehicle on a winch cable, lying flat against the frame. The same manual warns that stowing it badly can lead to the cable failing and the tire being lost. Later trucks and trims can differ, and some Ford vehicles carry a tire inflator and sealant kit instead of a spare, so look under the truck and check the owner's manual for yours before you count on one.",
          "A flat tire change uses the spare already in the truck. If your truck has a sealant kit and no spare, there is nothing to put on, and the answer is a tire repair for a puncture in the tread or a replacement tire. Dispatch will tell you which fits the situation.",
          "If the truck is in a live lane, or anyone is in danger, call 911 first. The tire can wait.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Give the year, cab and engine, plus the trim if you know it. If it is a diesel or a PowerBoost hybrid, say so, because those are matched from the VIN.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send the nearest available driver as soon as possible. We text or call when the driver is on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a 2018 or newer F-150 need an AGM battery?",
        a: "Per our fitment table, yes: AGM is required for 2018 to 2025 trucks. Dispatch confirms the exact battery before a driver is sent.",
      },
      {
        q: "Where do I find the F-150 spare?",
        a: "Ford's manual for the 2009 to 2014 trucks says it is stowed underneath the vehicle. Check the manual for your year, and look for a sealant kit if you cannot find a spare.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "chevrolet-silverado-1500-battery-and-flat-tire",
    title: "Chevy Silverado 1500 Battery and Flat Tire",
    h1: "Chevrolet Silverado 1500 battery and flat tire help in DFW",
    metaDescription:
      "The battery group a Silverado 1500 takes by year, including the diesel and start-stop exceptions, plus spare tire basics and what to tell dispatch in DFW.",
    topic: "Vehicle guide",
    dek: "A Silverado 1500 can take one of two battery sizes in the same model year, and the diesel takes a third. Knowing which applies to your truck saves a wrong-battery trip, and so does knowing your spare situation before the tire goes flat.",
    updated: UPDATED,
    cardImage: card("field-tire-spare-lot"),
    sections: [
      {
        heading: "Which battery a Silverado 1500 takes",
        paragraphs: [
          "Our table covers the 1500 by generation. From 2014 to 2021 the size depends on the engine and trim, so it lists H6 or H7. From 2022 to 2026 it lists an H7. Trucks with auto stop/start need an AGM battery, and the 3.0-liter Duramax diesel uses an AGM H8 (49) instead of either.",
        ],
        list: [
          "2022 to 2026: group H7, AGM on some (stop/start trucks need it).",
          "2019 to 2021: group H6 or H7, AGM on some.",
          "2014 to 2018: group H6 or H7, depending on engine and trim.",
          "2007 to 2013: group H6. The 2007 Silverado Classic is confirmed from the VIN.",
          "1999 to 2006: group 78.",
        ],
      },
      {
        heading: "What a weak battery looks like on a half-ton",
        paragraphs: [
          "A truck this size asks a lot of its battery, especially with a long idle and the air conditioning running in July. Slow cranking, a stumble on the first start of the day, or a dash that flickers while the engine turns are the warnings to take seriously.",
          "If your truck has stop/start and the battery is weak, the AGM requirement is the reason a cheap standard battery is the wrong answer. The Battery Finder on this site gives the size for your exact year.",
        ],
      },
      {
        heading: "Before you need the spare",
        paragraphs: [
          "Full-size pickups commonly carry the spare under the bed, lowered with a tool through an access point at the rear. Whether yours does, and where the lowering tool and jack are kept, depends on year and trim, so the owner's manual is the place to confirm it. Some trucks come with a sealant kit rather than a spare.",
          "Do the check on a quiet day. Find the tool, see whether the spare lowers freely, and look at the spare's air pressure, since a spare that has sat for years is often soft.",
          "A flat tire change uses the spare already in the truck. If there is no usable spare, tire repair covers a tread puncture and a replacement tire covers the rest. If you are in a lane of traffic or anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Say the year, engine and cab, and mention it if the truck is a diesel or has stop/start. Say where the truck is parked and whether the spare is under the bed.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. Dispatch confirms the battery and your total before a driver is sent. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. We send a driver as soon as possible, and we text or call you when they are on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does the Duramax diesel use the same battery as the gas engines?",
        a: "No. Our table lists an AGM H8 (49) for the 3.0-liter Duramax diesel, instead of the H6 or H7 on gas trucks.",
      },
      {
        q: "Is a Silverado 1500 battery the same for every year?",
        a: "No. It runs from group 78 on the oldest trucks to H6 and H7 on newer ones, so the year matters. Check the Battery Finder on this site.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "ram-1500-battery-and-flat-tire",
    title: "Ram 1500 Battery and Flat Tire Help",
    h1: "Ram 1500 battery and flat tire help in Dallas–Fort Worth",
    metaDescription:
      "The battery group for a Ram 1500 from 2011 to 2024, the H8 exception dispatch checks by VIN, and what to know about the spare before a flat in DFW.",
    topic: "Vehicle guide",
    dek: "On paper the Ram 1500 is simple: one battery group for 14 model years. In practice some trucks are listed with a larger one, so the VIN decides, and the spare question is worth settling before the tire goes down.",
    updated: UPDATED,
    cardImage: card("field-jump-start-hood"),
    sections: [
      {
        heading: "The battery group, and the exception",
        paragraphs: [
          "Our fitment table lists group H7 for the Ram 1500 from 2013 to 2024, and also from 2011 to 2012. That is one of the shortest lists we carry for a full-size truck.",
          "The catch is in the 2013 to 2024 row. Some trucks are listed with the larger H8 (49), so the technician confirms yours from the VIN. Two trucks of the same year can need different batteries, and that is the reason to give dispatch the VIN if you can reach it.",
        ],
        list: [
          "2013 to 2024: group H7. Some trucks are listed with the larger H8 (49).",
          "2011 to 2012: group H7.",
        ],
      },
      {
        heading: "Signs it is time",
        paragraphs: [
          "Slow cranking on a hot afternoon, a click without a start, or a battery light that stays on are the common ones. A truck that needed a jump once and then needed another within the week has told you the battery will not hold a charge.",
          "Because the group is the same across so many years, it is tempting to buy the same battery you saw on a friend's truck. Do not. Use the Battery Finder on this site for your exact year, and let dispatch check the VIN.",
        ],
      },
      {
        heading: "The spare",
        paragraphs: [
          "Where a Ram carries its spare, and whether it has one, depends on the year, cab and trim. Many full-size pickups keep it under the bed on a cable, but check the owner's manual for your truck rather than assuming. The manual also shows where the jack and lug wrench are stored.",
          "A flat tire change puts on the spare you already carry. If the spare is missing, flat or damaged, say so when you call, because the job then becomes a tire repair or a replacement tire instead.",
          "If the truck is stopped in a live lane, or anyone is in danger, call 911 before anything else.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, cab style and engine, and the VIN if it is easy to read from the dash or the door jamb. Tell us whether the truck is in a driveway, a lot or on a roadside.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job, using the spare already in the truck. Dispatch confirms the battery and your total before a driver is sent. We send a driver as soon as possible, and we text or call you when they are on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why does dispatch ask for the VIN on a Ram 1500?",
        a: "Because some 2013 to 2024 trucks are listed with the larger H8 (49) instead of the usual H7, and the VIN settles which one yours takes.",
      },
      {
        q: "Does the Ram 1500 come with a spare?",
        a: "It depends on the year and trim, so check your owner's manual. If there is no usable spare, tire repair or a replacement tire is the way forward.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "gmc-sierra-1500-battery-and-flat-tire",
    title: "GMC Sierra 1500 Battery and Flat Tire",
    h1: "GMC Sierra 1500 battery and flat tire help in DFW",
    metaDescription:
      "Which battery a GMC Sierra 1500 takes from 2007 on, when AGM is needed, the Duramax diesel exception, and what to know about the spare before a flat.",
    topic: "Vehicle guide",
    dek: "A Sierra 1500 from 2019 can need an AGM battery, and the diesel needs a different size from the gas engines. If you have a Sierra and a dead truck, these are the three things to have ready when you call.",
    updated: UPDATED,
    cardImage: card("field-tire-spare-lugs"),
    sections: [
      {
        heading: "Which battery a Sierra 1500 takes",
        paragraphs: [
          "The table for the Sierra 1500 runs from the redesigned 2007 body to 2026. The newest trucks take an H7. Trucks with auto stop/start need AGM, and the 3.0-liter Duramax diesel uses an AGM H8 (49) instead.",
        ],
        list: [
          "2022 to 2026: group H7, AGM on some.",
          "2019 to 2021: group H6 or H7. The size depends on the engine and trim, and stop/start trucks need AGM.",
          "2014 to 2018: group H6 or H7, depending on the engine and trim.",
          "2007 to 2013: group H6. The 2007 Sierra Classic is confirmed from the VIN.",
        ],
      },
      {
        heading: "What to watch for",
        paragraphs: [
          "Trucks with stop/start restart the engine many times on a stop-and-go commute, and that is hard on a battery that is already weak. A lazy restart at a light, or a slow crank after the truck sat overnight, is the early sign.",
          "Do not guess between the H6 and the H7 from a photo. The right one depends on the engine and trim, and the wrong size may not sit in the tray. The Battery Finder on this site gives the size for your exact year.",
        ],
      },
      {
        heading: "The spare and the tire change",
        paragraphs: [
          "Many full-size pickups carry the spare below the bed on a cable and lower it with a tool. Your Sierra's owner's manual shows whether yours does, how the lowering tool works, and where the jack is kept. Trims differ, so do not assume.",
          "If the spare has been under there for years, it may be low on air. A flat tire change uses the spare already in the truck, so a soft spare is worth knowing about before you need it.",
          "A tread puncture may be repairable, and a torn sidewall means a replacement tire. In a live traffic lane, or if anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, engine, cab and trim, plus a note if the truck is a diesel or has stop/start. Add your location and whether a wheel lock key is in the truck.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send the nearest available driver as soon as possible. We text or call when the driver is on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the Sierra 1500 battery the same as the Silverado's?",
        a: "Our table lists the same groups for both trucks in the years it covers, but the size still depends on engine and trim, so dispatch confirms yours.",
      },
      {
        q: "What battery does the Duramax diesel need?",
        a: "Our table lists an AGM H8 (49) for the 3.0-liter Duramax diesel.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "toyota-tacoma-battery-and-flat-tire",
    title: "Toyota Tacoma Battery and Flat Tire Help",
    h1: "Toyota Tacoma battery and flat tire help in DFW",
    metaDescription:
      "The battery group a Toyota Tacoma takes by year and engine, how the spare lowers from under the bed, and what to tell dispatch in Dallas–Fort Worth.",
    topic: "Vehicle guide",
    dek: "The Tacoma's battery group depends on the engine as well as the year, and its spare lives under the bed on a lowering screw. Neither is obvious when you are in a parking lot with a dead start or a flat.",
    updated: UPDATED,
    cardImage: card("field-tire-jack"),
    sections: [
      {
        heading: "Which battery a Tacoma takes",
        paragraphs: [
          "The newest Tacoma is the one with the most to sort out. For 2024 and 2025, our table lists H6 on most gas trucks and H7 on trucks with the power outlet inverter or start-stop. The i-FORCE MAX hybrids are confirmed from the VIN.",
          "Earlier trucks depend on the engine. The 2016 to 2023 row is for V6 models, and some 4-cylinder trucks use group 35.",
        ],
        list: [
          "2024 to 2025: group H6 or H7 (see above).",
          "2016 to 2023: group 24F on V6 models. Some 4-cylinder trucks use group 35.",
          "2009 to 2015: V6 models came with a 27F, and the table also lists 24F. Some 4-cylinder trucks use group 35.",
          "2005 to 2008: group 24F on V6 models. Some 4-cylinder trucks use group 35.",
        ],
      },
      {
        heading: "Signs it is on the way out",
        paragraphs: [
          "Slow cranking is the first one, usually on a cold morning or after a hot day of short drives. After that comes clicking, then a truck that will not start at all.",
          "Because a V6 and a 4-cylinder Tacoma of the same year can take different battery sizes, tell dispatch your engine. The Battery Finder on this site gives the size for your exact year.",
        ],
      },
      {
        heading: "The spare under the bed",
        paragraphs: [
          "Toyota's 2015 Tacoma manual says the spare is stored under the truck's bed. To get it down, you put the jack handle extension into the lowering screw and turn it counterclockwise. Once the tire is on the ground, you remove the holding bracket. Other years can differ, so read the manual for yours.",
          "The spare is easy to forget about because you never see it. Lower it once on a quiet day so you know the tool is there and the mechanism turns.",
          "If the truck is in a live lane, or anyone is in danger, call 911 first. A flat tire change uses the spare already in the truck.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, engine (V6 or 4-cylinder, or hybrid on the newest trucks), cab and trim. Tell us where the truck is and whether the spare is in place.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send a driver as soon as possible, and we text or call you when they are on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a 4-cylinder Tacoma use a different battery?",
        a: "Our table notes that some 4-cylinder trucks use group 35 where V6 trucks use a 24F or 27F. Give dispatch your engine and year.",
      },
      {
        q: "How does the Tacoma spare come down?",
        a: "Per Toyota's 2015 manual, with the jack handle extension turned counterclockwise in the lowering screw. Check the manual for your year.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "toyota-tundra-battery-and-flat-tire",
    title: "Toyota Tundra Battery and Flat Tire Help",
    h1: "Toyota Tundra battery and flat tire help in DFW",
    metaDescription:
      "Toyota Tundra battery groups for 2007 to 2023, the gap for newer trucks, and what to know about the spare before a battery or flat tire call in DFW.",
    topic: "Vehicle guide",
    dek: "The Tundra changed batteries when it was redesigned for 2022. If yours is newer than our table, or sits in the long 2007 to 2021 stretch, the VIN is how dispatch makes sure the battery is right.",
    updated: UPDATED,
    cardImage: card("field-battery-under-seat"),
    sections: [
      {
        heading: "Which battery a Tundra takes",
        paragraphs: [
          "Our table lists two stretches. For 2007 to 2021 it lists group 24F or 27F, and it does not say which truck takes which, so dispatch confirms yours rather than guessing. For 2022 to 2023 it lists an H7.",
          "There is no row for 2024 or newer trucks. If you own one, give dispatch the VIN and the battery is matched from there.",
        ],
        list: [
          "2022 to 2023: group H7.",
          "2007 to 2021: group 24F or 27F.",
          "2024 and newer: not in our table, so the battery is confirmed from the VIN.",
        ],
      },
      {
        heading: "Signs the battery is tired",
        paragraphs: [
          "A big V8 or turbo truck turns over hard, so the first sign of a weak battery is often a slow, labored crank. A battery light, a flickering dash during starting, or a click without a start follow.",
          "A truck that sits at a worksite or in a long-term lot for days will drain a battery that was already weak. If yours has been jumped once and needs it again, replace it. The Battery Finder on this site gives the size for your exact year.",
        ],
      },
      {
        heading: "The spare and the tire",
        paragraphs: [
          "Toyota's Tacoma manual describes a spare stored under the bed on a lowering screw. For the Tundra, check your own owner's manual, because the location, the lowering tool and what you get all depend on the year and trim.",
          "A flat tire change puts on the spare already in the truck. A truck this heavy deserves a spare with proper air in it, so check it once a season. A spare that has gone soft turns a ten-minute job into a longer one.",
          "If the truck is in a live traffic lane or anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, engine, cab and trim, and the VIN if you can reach it. Say where the truck is parked.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send a driver as soon as possible, and we text or call you when they are on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "What battery does a 2024 Tundra need?",
        a: "Our table has no row for 2024 or newer, so dispatch matches the battery from your VIN before sending a driver.",
      },
      {
        q: "Why does the table list two groups for 2007 to 2021?",
        a: "It lists 24F and 27F for those years without saying which goes with which truck, so we confirm yours instead of guessing.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "toyota-camry-battery-and-flat-tire",
    title: "Toyota Camry Battery and Flat Tire Help",
    h1: "Toyota Camry battery and flat tire help in DFW",
    metaDescription:
      "Toyota Camry battery groups by year, why hybrids and V6 models differ, how to check for a spare or a repair kit, and what to tell dispatch in DFW.",
    topic: "Vehicle guide",
    dek: "A Camry is a sedan that gets driven hard by commuters and rideshare drivers alike, and a battery that quits on the way to work is a bad start to the day. The group size depends on the year, the engine and whether the car is a hybrid.",
    updated: UPDATED,
    cardImage: card("field-jump-start-hood"),
    sections: [
      {
        heading: "Which battery a Camry takes",
        paragraphs: [
          "Our table has five rows for the Camry. The newest, a 2025, lists an H5. For 2020 to 2024 it lists H5 or H6, with the H6 going to the 3.5-liter V6. For 2018 to 2019 it lists H6 or H5, with the H5 going to the hybrid.",
          "Hybrids are the part to be careful with. Our table says the 2012 to 2017 and 2008 to 2011 hybrids use a different 12-volt battery, matched from the VIN, so a hybrid owner should not assume the gas-engine group applies.",
        ],
        list: [
          "2025: group H5.",
          "2020 to 2024: group H5, or H6 on the 3.5-liter V6.",
          "2018 to 2019: group H6, or H5 on the hybrid.",
          "2012 to 2017: group 24F. Hybrids use a different battery, matched from the VIN.",
          "2008 to 2011: group 24F. Hybrids use a different battery.",
        ],
      },
      {
        heading: "Signs yours is failing",
        paragraphs: [
          "A Camry usually warns first with a slower crank on the first start of the day, then a click or two, and then a day when it will not start. Interior lights that look weak with the door open are another early tell.",
          "Rideshare and delivery drivers put a lot of short, stop-and-go miles on a battery, and a battery that never gets a long drive to recharge wears sooner. If you are already on the second jump, replace the battery. The Battery Finder on this site gives the size for your exact year.",
        ],
      },
      {
        heading: "Spare, kit or neither",
        paragraphs: [
          "Look before you need it. On many sedans the spare, if there is one, sits under the trunk floor panel, and some cars carry a tire repair kit instead. Which one a Camry has depends on the year, trim and whether it is a hybrid, so check the owner's manual and lift the trunk floor once.",
          "A flat tire change uses the spare already in the car, so if you have only a repair kit, the next step is a tire repair for a tread puncture, or a replacement tire. Tell dispatch what you found.",
          "If the car is stopped in a live lane, or anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, engine (4-cylinder, V6 or hybrid) and trim. For a hybrid, add the VIN if you can reach it.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send the nearest available driver as soon as possible. We text or call when the driver is on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a Camry Hybrid use the same battery?",
        a: "Our table says a hybrid uses a different 12-volt battery in some years, matched from the VIN, and lists an H5 for the 2018 to 2019 hybrid.",
      },
      {
        q: "Can you change a flat if my Camry has no spare?",
        a: "A flat tire change uses the spare already in the car. Without one, a tire repair or a replacement tire is the option, and dispatch will tell you which.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "toyota-corolla-battery-and-flat-tire",
    title: "Toyota Corolla Battery and Flat Tire Help",
    h1: "Toyota Corolla battery and flat tire help in DFW",
    metaDescription:
      "Toyota Corolla battery groups by year and engine, the H5 and H4 split from 2020, and what to check about the spare before a flat in DFW.",
    topic: "Vehicle guide",
    dek: "The Corolla is small and simple, yet its battery depends on the engine: since 2020 the 2.0-liter and the 1.8-liter or hybrid take different sizes. Two Corollas of the same year can need two different batteries.",
    updated: UPDATED,
    cardImage: card("field-tire-spare-lot"),
    sections: [
      {
        heading: "Which battery a Corolla takes",
        paragraphs: [
          "From 2020 to 2025, our table lists H5 on the 2.0-liter models and H4 on the 1.8-liter and hybrid models. The 2026 row lists H5 or H4 with the hybrid taking the H4. Before that the Corolla used older group sizes.",
        ],
        list: [
          "2026: group H5, or H4 on the hybrid.",
          "2020 to 2025: group H5 on 2.0-liter models, H4 on 1.8-liter and hybrid models.",
          "2014 to 2019: group 35.",
          "2009 to 2013: group 35, or 24F on 2.4-liter models.",
          "2005 to 2008: group 35.",
        ],
      },
      {
        heading: "What a failing Corolla battery does",
        paragraphs: [
          "It turns over slowly, then clicks, then does nothing. A small engine does not take much to start, so a Corolla can seem fine until the battery is nearly gone, and then it fails with little warning.",
          "That is why a battery that is three or four years old and has been jumped is worth replacing on your schedule. Check the Battery Finder on this site for the size for your exact year, and remember the engine matters on a 2020 or newer car.",
        ],
      },
      {
        heading: "The spare",
        paragraphs: [
          "Some Corollas have a compact spare and some have a repair kit, and which you have depends on the year, body style and trim. Check the owner's manual and look under the trunk floor or cargo floor to see what you actually have.",
          "Do not drive far on a compact spare, and do not push it fast. It is there to get you to a tire shop. A flat tire change uses the spare already in the car; if there is only a repair kit, a tread puncture can often be repaired, and a damaged sidewall means a new tire.",
          "In a live traffic lane, or if anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, engine size or hybrid, and sedan or hatchback. Mention if you are in a garage or a tight spot.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send a driver as soon as possible, and we text or call you when they are on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why do two 2022 Corollas use different batteries?",
        a: "Per our table, the 2.0-liter takes an H5 and the 1.8-liter and hybrid take an H4. Give dispatch the engine along with the year.",
      },
      {
        q: "Is the spare on a Corolla full size?",
        a: "Check your owner's manual. We would not say either way without it, since it depends on the year and trim.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "toyota-rav4-battery-and-flat-tire",
    title: "Toyota RAV4 Battery and Flat Tire Help",
    h1: "Toyota RAV4 battery and flat tire help in DFW",
    metaDescription:
      "Toyota RAV4 battery groups from 2006 on, the start-stop and hybrid differences since 2019, and what to check about the cargo-floor spare before a flat.",
    topic: "Vehicle guide",
    dek: "Since 2019 a RAV4 can take one of three battery groups depending on whether it has auto start-stop and whether it is a hybrid. That makes the RAV4 one of the vehicles where the exact trim matters more than the year.",
    updated: UPDATED,
    cardImage: card("field-battery-under-seat-detail"),
    sections: [
      {
        heading: "Which battery a RAV4 takes",
        paragraphs: [
          "From 2019 to 2025, our table lists H5 on gas models without auto start-stop, H6 on models with it, and H4 on hybrids. AGM is needed on some.",
          "Before 2019 the RAV4 was simpler: group 35 for 2013 to 2018, and 24F for 2006 to 2012.",
        ],
        list: [
          "2019 to 2025: H5 (gas, no start-stop), H6 (with start-stop), H4 (hybrid). AGM on some.",
          "2013 to 2018: group 35.",
          "2006 to 2012: group 24F.",
        ],
      },
      {
        heading: "Signs it is on the way out",
        paragraphs: [
          "A crossover that sits in a parking lot all day in July will cook its battery. The signs are the usual ones: slow cranking, clicks, a dash that dims at start-up, or a car that needs a second jump.",
          "On a model with start-stop, a failing battery can show up as a car that behaves oddly at a light before it refuses to start. The Battery Finder on this site gives the size for your exact year, and dispatch confirms the trim.",
        ],
      },
      {
        heading: "The spare under the cargo floor",
        paragraphs: [
          "Lift the cargo floor panel to see what your RAV4 carries. A crossover like this commonly keeps its spare, if it has one, under that panel, but the year, trim and hybrid models can differ, and some come with a repair kit. The owner's manual says what yours has and where the jack and wrench are.",
          "A flat tire change uses the spare already in the vehicle. If there is no spare, a tire repair covers a tread puncture and a replacement tire covers the rest. In a live traffic lane, or if anyone is in danger, call 911 before anything else.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, whether it is a hybrid, and trim. If you know it has start-stop, say so.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send the nearest available driver as soon as possible. We text or call when the driver is on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "How do I know if my RAV4 needs the H5 or the H6?",
        a: "Per our table, H5 goes on gas models without auto start-stop and H6 on models with it. Dispatch confirms yours.",
      },
      {
        q: "Does a RAV4 Hybrid use a different battery?",
        a: "Yes, our table lists an H4 for the hybrid from 2019 to 2025.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "honda-civic-battery-and-flat-tire",
    title: "Honda Civic Battery and Flat Tire Help",
    h1: "Honda Civic battery and flat tire help in DFW",
    metaDescription:
      "Honda Civic battery groups by year, why 2022 and newer need AGM, the Type R and hybrid exceptions, and whether your Civic has a spare or a repair kit.",
    topic: "Vehicle guide",
    dek: "The Civic changed battery types with the 2022 redesign. If you own an older one, the standard 51R group still applies, but a 2022 or newer Civic needs AGM. Many Civics also carry a repair kit instead of a spare.",
    updated: UPDATED,
    cardImage: card("field-tire-spare-lugs"),
    sections: [
      {
        heading: "Which battery a Civic takes",
        paragraphs: [
          "Our table lists H5 for the 2022 to 2025 Civic, and AGM is required. Type R models came with a standard H5. For 2006 to 2021 it lists a 51R, with two exceptions: 2017 to 2021 Type R models use group H5, and 2006 to 2015 Civic Hybrid models use group 151R.",
        ],
        list: [
          "2022 to 2025: group H5, AGM required. Type R models came with a standard H5.",
          "2006 to 2021: group 51R.",
          "2017 to 2021 Type R: group H5.",
          "2006 to 2015 Civic Hybrid: group 151R.",
        ],
      },
      {
        heading: "Signs the battery is tired",
        paragraphs: [
          "A slow start, a click, headlights that dim as you crank, or a battery light. Civics often get used for short trips, which never lets the battery recharge fully.",
          "On a 2022 or newer Civic, a standard battery is the wrong answer because AGM is required. The Battery Finder on this site gives the size for your exact year.",
        ],
      },
      {
        heading: "Spare or repair kit",
        paragraphs: [
          "Honda has sold Civics with a temporary tire repair kit, a compressor and sealant, instead of a spare. A 2014 Civic manual says that model has no spare tire. Check your owner's manual for your year and trim, and look in the trunk to see what is actually there.",
          "A flat tire change puts on the spare already in the car. If you have a kit and no spare, it is a stopgap for a small puncture: the manual warns not to run the compressor for more than 15 minutes. A tire repair or a replacement tire is the real fix.",
          "In a live lane, or if anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, trim, and whether it is a Type R or a hybrid. Say whether you found a spare or a kit.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send a driver as soon as possible, and we text or call you when they are on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a 2023 Civic need an AGM battery?",
        a: "Our table says AGM is required for 2022 to 2025 Civics, with an H5.",
      },
      {
        q: "My Civic has no spare. Can you still help with a flat?",
        a: "A flat tire change uses the spare already in the car. Without one, tire repair or a replacement tire is the option. Dispatch confirms what applies.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "honda-accord-battery-and-flat-tire",
    title: "Honda Accord Battery and Flat Tire Help",
    h1: "Honda Accord battery and flat tire help in DFW",
    metaDescription:
      "Honda Accord battery groups by year, engine and cylinder count, from the 51R and 24F era to the H5 and H6 turbo models, plus spare tire basics for DFW.",
    topic: "Vehicle guide",
    dek: "The Accord has the longest list of battery rules of any car we cover. Cylinders, turbo size and start-stop all change the answer, so the year alone is not enough to pick a battery.",
    updated: UPDATED,
    cardImage: card("field-jump-start-hood"),
    sections: [
      {
        heading: "Which battery an Accord takes",
        paragraphs: [
          "From 2023 to 2025 our table lists an H5, with AGM required. For 2021 to 2022 it lists H5 on the 1.5-liter turbo, which has auto start-stop, and H6 on the 2.0-liter turbo. For 2018 to 2020 the same split applies, H5 on the 1.5-liter and H6 on the 2.0-liter.",
          "Older Accords depend on the number of cylinders: a 51R on 4-cylinder models and a 24F on V6 models from 2013 to 2017.",
        ],
        list: [
          "2023 to 2025: group H5, AGM required.",
          "2021 to 2022: H5 (1.5-liter turbo) or H6 (2.0-liter turbo), AGM on some.",
          "2018 to 2020: H5 (1.5-liter turbo) or H6 (2.0-liter turbo).",
          "2013 to 2017: 51R on 4-cylinder, 24F on V6.",
          "2008 to 2012: 51R on 4-cylinder (35 on California-emission automatics), 24F on V6.",
          "2005 to 2007: 51R on 4-cylinder, 35 on V6.",
        ],
      },
      {
        heading: "Signs it is time",
        paragraphs: [
          "Slow cranking, clicking, and dim lights at start-up are the same on an Accord as on anything else. The difference is how many ways to get the replacement wrong: an Accord of the same year can take an H5 or an H6, or a 51R or a 24F.",
          "Tell dispatch the engine, not just the year. The Battery Finder on this site gives the size for your exact year.",
        ],
      },
      {
        heading: "The spare",
        paragraphs: [
          "Whether your Accord has a spare, a compact spare or only a repair kit depends on the year, trim and powertrain. Check the owner's manual and lift the trunk floor to see.",
          "A flat tire change uses the spare already in the car. A tread puncture can often be repaired, and a damaged sidewall needs a new tire. In a live lane, or if anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, engine (1.5-liter, 2.0-liter, 4-cylinder or V6) and trim.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send the nearest available driver as soon as possible. We text or call when the driver is on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why does my Accord's engine matter for the battery?",
        a: "Because our table splits several years by engine: H5 or H6 on turbo models, and 51R or 24F on 4-cylinder or V6 models in older years.",
      },
      {
        q: "Do newer Accords need AGM?",
        a: "Our table says AGM is required for 2023 to 2025 and on some 2021 to 2022 models.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "honda-cr-v-battery-and-flat-tire",
    title: "Honda CR-V Battery and Flat Tire Help",
    h1: "Honda CR-V battery and flat tire help in DFW",
    metaDescription:
      "Honda CR-V battery groups: H5 with AGM from 2020, 51R before, the hybrid exception, and what to check about the spare and repair kit in DFW.",
    topic: "Vehicle guide",
    dek: "A 2020 or newer CR-V takes an AGM H5, and a hybrid takes something else again. Older ones use the 51R. If you are not sure which side of 2020 you are on, the VIN settles it.",
    updated: UPDATED,
    cardImage: card("field-battery-under-seat"),
    sections: [
      {
        heading: "Which battery a CR-V takes",
        paragraphs: [
          "Our table lists two stretches. From 2020 to 2025 it lists H5 with AGM required. Hybrid models use a different 12-volt battery, matched from the VIN. From 2007 to 2019 it lists a 51R.",
        ],
        list: [
          "2020 to 2025: group H5, AGM required. Hybrids are matched from the VIN.",
          "2007 to 2019: group 51R.",
        ],
      },
      {
        heading: "What a failing battery looks like",
        paragraphs: [
          "A slow crank on the first start, a click when you press the button, interior lights that dim, or an electronics reset after a start. A CR-V that gets parked at an airport or a stadium for a week is a common victim.",
          "If you have an AGM battery, replace it with another AGM. A CR-V that has been parked for a week at an airport lot, with the key fob still inside the house, is also worth a look afterward: a battery drained that deeply may have lost capacity even if the car starts again. The Battery Finder on this site gives the size for your exact year, and dispatch confirms it.",
        ],
      },
      {
        heading: "Spare, repair kit, or neither",
        paragraphs: [
          "Some CR-Vs carry a temporary spare under the cargo floor and some come with a tire repair kit, and hybrids can differ from gas models. We have not confirmed which years and trims have which, so check your owner's manual and lift the cargo floor panel.",
          "A flat tire change uses the spare already in the vehicle. With a kit only, a tire repair or a replacement tire is the way forward. In a live lane, or if anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, trim and whether it is a hybrid. Add the VIN if you can reach it, because it is what lets the technician match a hybrid's different 12-volt battery. Tell us where the car is parked and whether you can open the hood.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send a driver as soon as possible, and we text or call you when they are on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a CR-V Hybrid use the same battery as the gas model?",
        a: "Our table says hybrid models use a different 12-volt battery, matched from the VIN.",
      },
      {
        q: "Is a 51R battery right for a 2021 CR-V?",
        a: "No. Our table lists an AGM H5 for 2020 to 2025 and the 51R for 2007 to 2019.",
      },
      {
        q: "What should I do if my CR-V clicks but will not start?",
        a: "A click with no crank usually points to a weak battery. A jump start may get it going, and the driver can tell you on site whether the battery looks likely to hold a charge or needs replacing.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "nissan-altima-battery-and-flat-tire",
    title: "Nissan Altima Battery and Flat Tire Help",
    h1: "Nissan Altima battery and flat tire help in DFW",
    metaDescription:
      "Nissan Altima battery groups: H5 from 2019, group 35 before, the hybrid exception, and what to check about the spare before a flat tire in DFW.",
    topic: "Vehicle guide",
    dek: "The Altima moved from group 35 to the H5 with the 2019 redesign, so a battery bought for an older one will not suit a newer one. The year of the car is the first thing dispatch needs.",
    updated: UPDATED,
    cardImage: card("field-tire-jack"),
    sections: [
      {
        heading: "Which battery an Altima takes",
        paragraphs: [
          "Our table lists three stretches. 2019 to 2025 is an H5. 2013 to 2018 is a group 35, and so is 2008 to 2012, with a note that the Altima Hybrid from 2008 to 2011 uses a different battery.",
        ],
        list: [
          "2019 to 2025: group H5.",
          "2013 to 2018: group 35.",
          "2008 to 2012: group 35. The 2008 to 2011 Altima Hybrid uses a different battery.",
        ],
      },
      {
        heading: "Signs the battery is going",
        paragraphs: [
          "Slow cranking, a click, dim dash lights and a battery warning are the usual ones. Altimas do a lot of commuting, and a car that makes the same stop-and-go drive every day wears its battery in a predictable way.",
          "An Altima that gets one long highway drive a week and short trips otherwise never fully recharges, so the battery fades sooner than the calendar suggests. If you have a hybrid from 2008 to 2011, tell dispatch before anything else, because that battery is different. The Battery Finder on this site gives the size for your exact year.",
        ],
      },
      {
        heading: "Before you need the spare",
        paragraphs: [
          "Where an Altima keeps its spare, and whether yours has a full spare, a compact one or a repair kit, depends on the year and trim. Check the owner's manual and lift the trunk floor to see.",
          "A flat tire change uses the spare already in the car. If a compact spare is what you have, treat it as a way to reach a tire shop, not a replacement. If you are in a live lane, or anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, trim and engine. Say whether it is a hybrid, and where the car is parked, including whether it is in a garage or against a curb.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send the nearest available driver as soon as possible. We text or call when the driver is on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a 2019 Altima use the same battery as a 2018?",
        a: "No. Our table lists an H5 for 2019 and newer, and a group 35 for 2013 to 2018.",
      },
      {
        q: "Is the Altima Hybrid different?",
        a: "Our table notes that the 2008 to 2011 Altima Hybrid uses a different battery, so dispatch confirms it.",
      },
      {
        q: "Can a jump start fix an Altima that will not start?",
        a: "If the battery is only drained, yes. A jump gets you running, but a battery that needed one jump usually needs replacing soon, and the driver can advise on site.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "nissan-rogue-battery-and-flat-tire",
    title: "Nissan Rogue Battery and Flat Tire Help",
    h1: "Nissan Rogue battery and flat tire help in DFW",
    metaDescription:
      "Nissan Rogue battery groups: H6 with AGM from 2021, group 35 for earlier years, how the VIN settles it, and spare tire basics for DFW drivers.",
    topic: "Vehicle guide",
    dek: "The Rogue went from a group 35 to an H6 in 2021, and the replacements listed for the newer one are AGM. Whether your car came with an AGM battery is something the technician checks from the VIN.",
    updated: UPDATED,
    cardImage: card("field-tire-spare-lot"),
    sections: [
      {
        heading: "Which battery a Rogue takes",
        paragraphs: [
          "From 2021 to 2025 our table lists an H6. It says the replacement batteries listed for this generation are AGM, so the technician checks from the VIN whether yours came with one. From 2014 to 2020, and again from 2008 to 2013, it lists a group 35.",
        ],
        list: [
          "2021 to 2025: group H6, AGM on some (checked from the VIN).",
          "2014 to 2020: group 35.",
          "2008 to 2013: group 35.",
        ],
      },
      {
        heading: "Signs yours is dying",
        paragraphs: [
          "The Rogue is a family car, so it is often the vehicle that gets left with the interior light on or a charger plugged in all night. A battery that has been drained that way once is weaker afterward, and the second time it may not recover.",
          "Slow cranking and clicking are the usual signs. If the car needed a jump and then needed one again, replace the battery. Heat is hard on any battery, and a Rogue parked outdoors through a Texas summer works its battery harder than one kept in a garage. The Battery Finder on this site gives the size for your exact year.",
        ],
      },
      {
        heading: "The spare",
        paragraphs: [
          "Whether a Rogue has a spare, and where, depends on the year and trim. Many crossovers keep one under the cargo floor, but check your owner's manual and look rather than assume, since some come with a repair kit.",
          "A flat tire change uses the spare already in the vehicle. In a live lane, or if anyone is in danger, call 911 first. Otherwise turn on the hazard lights and get everyone away from traffic.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, trim and, if you can reach it, the VIN. It lets the technician confirm AGM on a 2021 or newer car. Also say where the car is parked, and whether you can open the hood and the doors.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send a driver as soon as possible, and we text or call you when they are on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a 2022 Rogue need an AGM battery?",
        a: "Our table lists AGM on some, and says the technician checks from the VIN whether yours came with one.",
      },
      {
        q: "Is a 2020 Rogue battery the same as a 2021?",
        a: "No. Our table lists group 35 through 2020 and an H6 from 2021.",
      },
      {
        q: "Which year is the cutoff between group 35 and the H6?",
        a: "Our table lists group 35 through 2020 and the H6 from 2021. If you are unsure of your model year, the VIN or the door jamb sticker settles it.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "hyundai-elantra-battery-and-flat-tire",
    title: "Hyundai Elantra Battery and Flat Tire Help",
    h1: "Hyundai Elantra battery and flat tire help in DFW",
    metaDescription:
      "Hyundai Elantra battery groups by year and engine, when H6 or AGM applies, the 2008 to 2010 exception, and spare tire basics for DFW drivers.",
    topic: "Vehicle guide",
    dek: "No car on our list has a messier battery history than the Elantra. Some years take an H5, some an H6, and some of those need AGM depending on the engine. Give dispatch the year and the engine.",
    updated: UPDATED,
    cardImage: card("field-jump-start-hood"),
    sections: [
      {
        heading: "Which battery an Elantra takes",
        paragraphs: [
          "From 2021 to 2025 our table lists an H5. Listings differ on whether the 2.0-liter needs AGM, so the technician confirms it from the VIN, and hybrid models use a different 12-volt battery.",
          "For 2019 to 2020 it lists H5 or H6. The 2.0-liter and the 1.4-liter turbo came with AGM, and some of these take an H6. For 2017 to 2018, an AGM H6 goes on the 2.0-liter and 1.4-liter turbo, while the 1.6-liter turbo Sport takes a standard H5.",
          "For 2014 to 2016 most models take an H5, and the 1.8-liter automatic takes an AGM H6. The 2011 to 2013 Elantra takes an H5, and the 2008 to 2010 takes a 121R.",
        ],
        list: [
          "2021 to 2025: H5, AGM on some (confirmed from the VIN).",
          "2019 to 2020: H5 or H6, AGM on some.",
          "2017 to 2018: AGM H6 (2.0-liter and 1.4-liter turbo) or standard H5 (1.6-liter turbo Sport).",
          "2014 to 2016: H5 on most, AGM H6 on the 1.8-liter automatic.",
          "2011 to 2013: H5.",
          "2008 to 2010: 121R.",
        ],
      },
      {
        heading: "Signs it is time",
        paragraphs: [
          "A slow crank, a click, and a dash that dims are the usual signs. With several years needing AGM, a new standard battery is a mistake on some of them. The Battery Finder on this site gives the size for your exact year.",
        ],
      },
      {
        heading: "The spare",
        paragraphs: [
          "Some Elantras carry a spare and some carry a tire mobility kit, depending on year and trim. Check your owner's manual and the trunk floor to see which one yours has.",
          "A flat tire change uses the spare already in the car. If you only have a kit, tire repair covers a tread puncture and a replacement tire covers the rest. In a live traffic lane, or if anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, engine size, whether it is a turbo, and a hybrid note if it applies.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send the nearest available driver as soon as possible. We text or call when the driver is on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why does the Elantra have so many battery sizes?",
        a: "Because our table splits the car by year and engine: H5, H6 and 121R, some of them AGM. Dispatch confirms yours.",
      },
      {
        q: "Does a hybrid Elantra use the same battery?",
        a: "Our table says hybrid models use a different 12-volt battery.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "hyundai-tucson-battery-and-flat-tire",
    title: "Hyundai Tucson Battery and Flat Tire Help",
    h1: "Hyundai Tucson battery and flat tire help in DFW",
    metaDescription:
      "Hyundai Tucson battery groups: H6 from 2017, the 2016 split, 124R before, and how dispatch confirms AGM and hybrids, with spare tire basics for DFW.",
    topic: "Vehicle guide",
    dek: "From 2017 on the Tucson takes an H6, which makes the choice easy until you ask whether the newest ones need AGM. Listings disagree, so the VIN decides.",
    updated: UPDATED,
    cardImage: card("field-battery-under-seat-detail"),
    sections: [
      {
        heading: "Which battery a Tucson takes",
        paragraphs: [
          "For 2022 to 2025 our table lists an H6. Listings differ on whether gas models need AGM, so the technician confirms it from the VIN, and hybrid and plug-in models are matched separately.",
        ],
        list: [
          "2022 to 2025: group H6, AGM on some. Hybrid and plug-in models are matched separately.",
          "2017 to 2021: group H6.",
          "2016: group H6 or 124R.",
          "2008 to 2015: group 124R.",
        ],
      },
      {
        heading: "Signs it is on the way out",
        paragraphs: [
          "Slow cranking, a click, interior lights that dim and a battery warning. The Tucson's change in 2016 from the 124R to the H6 means a 2016 car could take either, and our table does not say which, so tell dispatch the build date if it is on the door jamb sticker.",
          "The Battery Finder on this site gives the size for your exact year.",
          "A Tucson that runs the air conditioning hard in July and makes short trips will wear a battery faster than the calendar suggests. If yours is slow to start in the morning and then fine all day, do not wait for it to fail completely.",
        ],
      },
      {
        heading: "Spare or mobility kit",
        paragraphs: [
          "Hyundai calls its tire repair kit a tire mobility kit, and some models carry one in place of a spare. Whether your Tucson has a spare or a kit depends on year and trim, so check the owner's manual and the cargo floor.",
          "A flat tire change uses the spare already in the vehicle. Without one, tire repair or a replacement tire is the option. In a live lane, or if anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, trim, and whether it is a hybrid or plug-in. Add the VIN if you can reach it, because it lets the technician settle the AGM question on a newer car. Tell us where the car is parked and what you found when you looked for a spare or a kit.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send a driver as soon as possible, and we text or call you when they are on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "What battery does a 2016 Tucson take?",
        a: "Our table lists H6 or 124R for 2016 without saying which, so dispatch confirms it before a driver is sent.",
      },
      {
        q: "Does a new Tucson need AGM?",
        a: "Listings differ on gas models, so the technician confirms it from the VIN.",
      },
      {
        q: "Does a Tucson Hybrid use the same battery as the gas model?",
        a: "Our table says hybrid and plug-in models are matched separately, so the technician matches yours from the VIN rather than from the gas-model row.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "kia-sorento-battery-and-flat-tire",
    title: "Kia Sorento Battery and Flat Tire Help",
    h1: "Kia Sorento battery and flat tire help in DFW",
    metaDescription:
      "Kia Sorento battery groups: AGM H6 from 2021, AGM H7 for 2016 to 2020, the 124R before that, and spare tire basics for three-row drivers in DFW.",
    topic: "Vehicle guide",
    dek: "Both generations of the newer Sorento require an AGM battery, but in different sizes. An H7 for 2016 to 2020 and an H6 from 2021 are not interchangeable.",
    updated: UPDATED,
    cardImage: card("field-tire-spare-lugs"),
    sections: [
      {
        heading: "Which battery a Sorento takes",
        paragraphs: [
          "Our table lists AGM as required for both of the newer rows. Hybrid and plug-in models are matched from the VIN. Older Sorentos used a 124R, and the oldest in our table, 2008 to 2009, a 124.",
        ],
        list: [
          "2021 to 2025: group H6, AGM required. Hybrid and plug-in models are matched from the VIN.",
          "2016 to 2020: group H7, AGM required.",
          "2011 to 2015: group 124R.",
          "2008 to 2009: group 124.",
        ],
      },
      {
        heading: "Signs it is time",
        paragraphs: [
          "A three-row SUV has plenty of electronics to run, and a failing battery will show up as a slow crank, odd warning lights or a click. If you leave a phone charger and a dash cam on while the car is parked, a weak battery feels it first.",
          "Our table does not cover 2010. If you have that year, give dispatch the VIN. The Battery Finder on this site gives the size for your exact year.",
          "Because both newer Sorento generations are AGM-only, a standard battery from a parts store is the wrong choice. If a previous owner or a shop put a different type in, mention it, since dispatch confirms the battery that fits your vehicle before sending anyone.",
        ],
      },
      {
        heading: "The spare",
        paragraphs: [
          "Where a Sorento carries its spare, or whether it carries a mobility kit instead, depends on the year and trim, so check the owner's manual. Do not assume it is under the cargo floor, as some SUVs mount the spare beneath the vehicle.",
          "A flat tire change uses the spare already in the vehicle. In a live lane, or if anyone is in danger, call 911 first. Otherwise get everyone out on the side away from traffic.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, trim and whether it is a hybrid or plug-in. Say where the car is parked, and add the VIN if it is easy to reach.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send the nearest available driver as soon as possible. We text or call when the driver is on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does the Sorento need an AGM battery?",
        a: "Our table says AGM is required for 2016 to 2020 and for 2021 to 2025.",
      },
      {
        q: "Is the 2020 Sorento battery the same as the 2021?",
        a: "No. Our table lists an H7 for 2016 to 2020 and an H6 for 2021 to 2025.",
      },
      {
        q: "Is a Sorento hybrid battery the same as the gas model's?",
        a: "Our table says hybrid and plug-in models are matched from the VIN, so dispatch confirms the battery for yours before a driver is sent.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "chevrolet-tahoe-battery-and-flat-tire",
    title: "Chevy Tahoe Battery and Flat Tire Help",
    h1: "Chevrolet Tahoe battery and flat tire help in DFW",
    metaDescription:
      "Chevrolet Tahoe battery groups: H7 from 2015 with AGM on newer ones, the second battery some carry, and what to know about the spare in DFW.",
    topic: "Vehicle guide",
    dek: "A Tahoe can carry a second battery, and the sources do not agree on its size, so the technician reads its label instead of guessing. That is the main reason to describe your Tahoe carefully when you call.",
    updated: UPDATED,
    cardImage: card("field-tire-spare-lot"),
    sections: [
      {
        heading: "Which battery a Tahoe takes",
        paragraphs: [
          "Our table lists an H7 for 2015 to 2025 and an H6 for 2010 to 2014. For 2021 to 2025 it notes that every listing we found for that generation is an AGM battery, and the technician confirms it from the VIN. Diesel models are confirmed separately.",
          "For 2015 to 2020, some trucks also have a second battery. Sources disagree on its size, so the technician reads its label. For 2010 to 2014, trucks with a second battery use the same size for it, and hybrid models are confirmed from the VIN.",
        ],
        list: [
          "2021 to 2025: group H7, AGM listed. Diesel models confirmed separately.",
          "2015 to 2020: group H7. Some have a second battery whose size the technician reads from its label.",
          "2010 to 2014: group H6. A second battery uses the same size. Hybrids are confirmed from the VIN.",
        ],
      },
      {
        heading: "What to look for",
        paragraphs: [
          "A big SUV that sits in a driveway most of the week and then makes a long school or airport run is a classic case for a battery that fails on a Monday. Slow cranking, a click, and electronics that reset after a start are the signs.",
          "If your Tahoe has a second battery, say so on the call. It changes what the technician brings. The Battery Finder on this site gives the size for your exact year.",
        ],
      },
      {
        heading: "The spare",
        paragraphs: [
          "Large SUVs often keep the spare beneath the rear of the vehicle on a cable, lowered with a tool, but whether yours does, and what the spare is, depends on year and trim. Check the owner's manual. Some trims may come with a sealant kit.",
          "A flat tire change uses the spare already in the vehicle. If it is missing, tire repair covers a tread puncture and a replacement tire covers the rest. In a live lane, or if anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, trim, engine, and whether you know of a second battery. Say whether it is a diesel or a hybrid.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send a driver as soon as possible, and we text or call you when they are on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a Tahoe have two batteries?",
        a: "Some do. Our table notes a second battery on some trucks, and the technician reads its label for the size.",
      },
      {
        q: "Does a 2023 Tahoe need AGM?",
        a: "Every listing we found for 2021 to 2025 is an AGM battery, and the technician confirms it from the VIN.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "ford-explorer-battery-and-flat-tire",
    title: "Ford Explorer Battery and Flat Tire Help",
    h1: "Ford Explorer battery and flat tire help in DFW",
    metaDescription:
      "Ford Explorer battery groups: H6 with AGM from 2020, group 65 for 2011 to 2019, the 2025 ST exception, and spare tire basics for DFW drivers.",
    topic: "Vehicle guide",
    dek: "The Explorer's redesign for 2020 changed its battery from a group 65 to an AGM H6, and the 2025 ST takes an H7. Two Explorers a few years apart will not share a battery.",
    updated: UPDATED,
    cardImage: card("field-battery-under-seat"),
    sections: [
      {
        heading: "Which battery an Explorer takes",
        paragraphs: [
          "For 2020 to 2024 our table lists an H6, AGM required, for gas models. Hybrid and Police Interceptor models are confirmed from the VIN. For 2025 it lists H6 or H7, and the 3.0L V6 (ST) takes an H7.",
          "For 2011 to 2019 it lists a group 65, though some builds use a group 59 battery, confirmed from the VIN. The 2005 to 2010 Explorer takes a group 65.",
        ],
        list: [
          "2025: group H6, or H7 on the 3.0L V6 (ST). AGM required.",
          "2020 to 2024: group H6 on gas models, AGM required.",
          "2011 to 2019: group 65. Some builds use a group 59.",
          "2005 to 2010: group 65.",
        ],
      },
      {
        heading: "Signs it is time",
        paragraphs: [
          "Slow cranking, a click, dash lights that dim, or a car that needs a second jump. A family Explorer that spends hours in a hot school pickup line with the air conditioning running is hard on its battery.",
          "Because of the AGM requirement on 2020 and newer cars, do not accept a standard battery as a substitute. The Battery Finder on this site gives the size for your exact year.",
        ],
      },
      {
        heading: "The spare",
        paragraphs: [
          "Some Ford vehicles carry a tire inflator and sealant kit instead of a spare, and Ford says the kit can be in the trunk, the luggage compartment or under the front passenger seat. Whether your Explorer has a spare or a kit depends on year and trim, so look and check the owner's manual.",
          "A flat tire change uses the spare already in the vehicle. With a kit only, a tire repair or a replacement tire is the way forward. In a live lane, or if anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, engine and trim. Say if it is a hybrid, a Police Interceptor or an ST.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send the nearest available driver as soon as possible. We text or call when the driver is on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does an Explorer ST use a different battery?",
        a: "Our table lists an H7 for the 2025 3.0L V6 (ST), where other 2025 Explorers take an H6.",
      },
      {
        q: "Is a group 65 battery right for a 2021 Explorer?",
        a: "No. Our table lists an AGM H6 for 2020 to 2024 and the group 65 for 2011 to 2019.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "jeep-grand-cherokee-battery-and-flat-tire",
    title: "Jeep Grand Cherokee Battery and Tire Help",
    h1: "Jeep Grand Cherokee battery and flat tire help in DFW",
    metaDescription:
      "Jeep Grand Cherokee battery groups: vented AGM H7 for 2011 to 2021, H6 or H7 for 2022 to 2023, the diesel H8, and spare tire basics for DFW drivers.",
    topic: "Vehicle guide",
    dek: "A Grand Cherokee's battery vents outside the cabin, so a replacement has to be a vented AGM. It is one of the reasons to let a technician match the battery instead of buying one off a shelf.",
    updated: UPDATED,
    cardImage: card("field-jump-start-hood"),
    sections: [
      {
        heading: "Which battery a Grand Cherokee takes",
        paragraphs: [
          "For 2011 to 2021 our table lists an H7, AGM required, with the note that the battery vents outside the cabin, so the replacement must be a vented AGM. For 2022 to 2023 it lists H6 or H7, AGM required: the 5.7L V8 and 4xe with the tow package use an H7, and start-stop models also have a small auxiliary battery.",
          "For 2007 to 2010 it lists H7 or H8, and diesel models from 2007 to 2009 use an H8. The 2005 to 2006 model takes an H7. There is no row for 2024 or newer.",
        ],
        list: [
          "2022 to 2023: group H6 or H7, AGM required. H7 on the 5.7L V8 and the 4xe with the tow package.",
          "2011 to 2021: group H7, vented AGM required.",
          "2007 to 2010: H7, or H8 on 2007 to 2009 diesels.",
          "2005 to 2006: group H7.",
        ],
      },
      {
        heading: "Signs it is on the way out",
        paragraphs: [
          "Slow cranking, a click, or a dash that behaves strangely on startup. With start-stop and an auxiliary battery on some 2022 and 2023 cars, a weak battery can also show up as electronics that reset.",
          "The Battery Finder on this site gives the size for your exact year. For a 2024 or newer Grand Cherokee, give dispatch the VIN, since our table has no row for it.",
        ],
      },
      {
        heading: "The spare",
        paragraphs: [
          "Whether your Grand Cherokee has a spare, and what kind, depends on year and trim, so check the owner's manual. We have not confirmed which years carry which, so we leave it to the manual and a look under the cargo floor.",
          "A flat tire change uses the spare already in the vehicle. With no spare, a tire repair or a replacement tire is the way forward. In a live lane, or if anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, engine, and whether it is a 4xe, a diesel or has start-stop.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send a driver as soon as possible, and we text or call you when they are on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Why does a Grand Cherokee need a vented battery?",
        a: "Our table notes the battery vents outside the cabin, so the replacement must be a vented AGM.",
      },
      {
        q: "Does a 2024 Grand Cherokee have a row in your table?",
        a: "No. Give dispatch the VIN and the battery is matched from there.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "dodge-charger-battery-and-flat-tire",
    title: "Dodge Charger Battery and Flat Tire Help",
    h1: "Dodge Charger battery and flat tire help in DFW",
    metaDescription:
      "Dodge Charger battery groups: H7 from 2006 to 2023, AGM on some, the police package H8, and spare tire basics before a flat tire call in DFW.",
    topic: "Vehicle guide",
    dek: "The Charger takes an H7 across 18 model years, which makes it look easy. The catch is that AGM applies to some of them, and police package cars from 2006 to 2010 use a larger H8.",
    updated: UPDATED,
    cardImage: card("field-tire-jack"),
    sections: [
      {
        heading: "Which battery a Charger takes",
        paragraphs: [
          "Our table lists an H7 for 2011 to 2023, with AGM on some, and an H7 for 2006 to 2010, with the note that police package cars use an H8. It does not say which 2011 to 2023 cars need AGM, so dispatch confirms it for yours.",
        ],
        list: [
          "2011 to 2023: group H7, AGM on some.",
          "2006 to 2010: group H7. Police package cars use H8.",
        ],
      },
      {
        heading: "Signs it is time",
        paragraphs: [
          "A big V6 or V8 needs a strong start, and a tired battery shows up as a long, labored crank. If the car sits for a week between drives, a weak battery will not recover from it. A Charger driven only on weekends is a good candidate, because a battery that is rarely recharged by a long drive loses capacity gradually, then fails on a hot afternoon.",
          "Do not assume the same battery type goes in every Charger. The Battery Finder on this site gives the size for your exact year, and dispatch confirms whether AGM applies.",
        ],
      },
      {
        heading: "The spare",
        paragraphs: [
          "Whether a Charger has a spare, a compact spare or a repair kit depends on year, trim and engine, so check the owner's manual and look under the trunk floor. We have not confirmed which trims carry which.",
          "If you have a performance trim with wide tires, a replacement tire is not always an item every shop has, and tire availability varies. A flat tire change uses the spare already in the car. In a live lane, or if anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, engine and trim. If it is a police package car, say so, because those use a larger battery. Add where the car is parked and whether you can open the hood.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send the nearest available driver as soon as possible. We text or call when the driver is on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a Charger need an AGM battery?",
        a: "Our table lists AGM on some 2011 to 2023 cars. Dispatch confirms whether yours needs it.",
      },
      {
        q: "What battery does a police package Charger take?",
        a: "Our table says police package cars from 2006 to 2010 use an H8.",
      },
      {
        q: "Can I use a battery from a Challenger or another Dodge?",
        a: "Do not assume so. Use the Battery Finder on this site for your exact year, and dispatch confirms the battery that fits your Charger before a driver is sent.",
      },
    ],
    services: SERVICES,
  },
  {
    slug: "mercedes-benz-c-class-battery-and-flat-tire",
    title: "Mercedes-Benz C-Class Battery and Tire Help",
    h1: "Mercedes-Benz C-Class battery and flat tire help in DFW",
    metaDescription:
      "The Mercedes-Benz C-Class battery for 2015 to 2021 is an AGM H7 per our table. Where to look for the battery and the spare, and what to tell dispatch.",
    topic: "Vehicle guide",
    dek: "Our table covers the C-Class from 2015 to 2021 with one answer: an AGM H7. For a different year, or a hybrid, the battery is matched from the VIN. Where the battery sits is a question to settle in the owner's manual.",
    updated: UPDATED,
    cardImage: card("field-battery-under-seat"),
    sections: [
      {
        heading: "Which battery a C-Class takes",
        paragraphs: [
          "Our table has one row for the C-Class: 2015 to 2021, group H7, AGM required. There is no row for other years, so for a 2022 or newer C-Class, or one older than 2015, dispatch matches the battery from the VIN.",
        ],
        list: [
          "2015 to 2021: group H7, AGM required.",
          "Other years: confirmed from the VIN.",
        ],
      },
      {
        heading: "Where the battery is, and why it matters",
        paragraphs: [
          "Not every C-Class has its battery in the same place. Mercedes manuals for older models put it in the engine compartment, and owners of some later cars, including hybrids, report it in the trunk. We cannot tell you which applies to your car, so check the owner's manual, which also shows where the jump-start terminal is.",
          "If the battery is in the trunk, the trunk lid must open, and a dead battery can complicate that. Tell dispatch if you cannot get in.",
          "Slow cranking, a click and warning messages on the display are the usual signs. The Battery Finder on this site gives the size for your exact year.",
        ],
      },
      {
        heading: "Spare, sealant or run-flats",
        paragraphs: [
          "Many Mercedes models are sold with a tire sealant kit, or run-flat tires, instead of a spare. We have not confirmed what each C-Class year and trim has, so check your owner's manual and look in the trunk before you assume you have a spare.",
          "A flat tire change uses the spare already in the car. If you have no spare, tire repair covers a tread puncture and a replacement tire covers the rest. Tire availability varies, and dispatch confirms a tire is available before a driver is sent. In a live lane, or if anyone is in danger, call 911 first.",
        ],
      },
      {
        heading: "What to tell dispatch",
        paragraphs: [
          "Year, model (C 300, AMG or a hybrid), and what you found when you looked for the spare. The VIN, if you can reach it.",
          "Battery replacement is {{price:battery-replacement}} for eligible vehicles and batteries, installed. A flat tire change is {{price:flat-tire-change}}, plus a {{dispatchFee}} dispatch fee charged once per job. Dispatch confirms the battery and your total before a driver is sent. We send a driver as soon as possible, and we text or call you when they are on the way.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does a C-Class need an AGM battery?",
        a: "Our table lists AGM as required for 2015 to 2021.",
      },
      {
        q: "Does a C-Class come with a spare?",
        a: "It depends on the year and trim. Check your owner's manual rather than assume.",
      },
    ],
    services: SERVICES,
  },
];
