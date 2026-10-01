/**
 * Editorial content for the City x Service landing pages.
 *
 * WHAT THIS FILE IS
 * One entry per (city, service) pair. The page component supplies structure;
 * every word of prose lives here and is written for that specific combination
 * of city, service and search intent. There is deliberately no shared template
 * string with the city name interpolated — a page that reads the same with
 * "Dallas" swapped for "Plano" is a doorway page, and Google treats it as one.
 *
 * RULES FOR EDITING
 *  - Geographic facts come from local-data.ts and NOWHERE else. If a corridor,
 *    district or neighbouring city is not in that file, it must not appear
 *    here.
 *  - Prices are NOT written into prose. The page renders them from SERVICES so
 *    a price change propagates; duplicating a figure here would create a
 *    second source of truth that silently goes stale.
 *  - `sourceUrls` records which competitor pages were analysed for search
 *    intent. It is research provenance only — internal, never rendered, and
 *    no competitor wording, pricing, phone number or claim is reproduced.
 *  - `primaryKeyword` and the keyword sets are for auditing which intent a
 *    page targets. They are not rendered as a keyword list.
 */

export interface CityServiceContent {
  city: string;
  service: string;
  /** Visible H1. */
  h1: string;
  /** <title>, before the site-wide template suffix. */
  title: string;
  metaDescription: string;
  /** Opening paragraph — what this is, who it helps, how to get it. */
  intro: string;
  /** Situations a driver in THIS city actually finds themselves in. */
  scenarios: string[];
  /** Local paragraph built strictly from verified local-data.ts facts. */
  localContext: string;
  faqs: { q: string; a: string }[];
  // ---- internal research metadata, never rendered ----
  primaryKeyword: string;
  secondaryKeywords: string[];
  longTail: string[];
  intent: string;
  sourceUrls: string[];
}

export const CITY_SERVICE_PAGES: CityServiceContent[] = [
  // ===================== DALLAS =====================
  {
    city: "dallas",
    service: "lockout",
    h1: "Car Lockout Service in Dallas, TX",
    title: "Car Lockout Service Dallas TX",
    metaDescription:
      "Locked out of your car in Dallas? TRA sends a driver to you for non-destructive entry, day or night, anywhere from Downtown to Oak Cliff. Call now.",
    intro:
      "Being locked out of your own car is a small problem that turns into a long evening if nobody comes. A TRA driver comes to wherever the car is parked, opens it without drilling or breaking anything, and is gone in minutes. There is no need to arrange a tow or leave the vehicle overnight.",
    scenarios: [
      "Keys visible on the driver's seat after a door locked itself behind you.",
      "Fob battery dead in a parking garage where the spare is at home.",
      "Keys shut in the trunk after loading it — a different job from opening a door, and priced separately.",
      "A child or pet inside the car, which we treat as urgent and route to the nearest driver first.",
    ],
    localContext:
      "Dallas spreads across five counties and our drivers work the whole city, from the Arts District and West End through Deep Ellum, Uptown, Bishop Arts, the Design District, Fair Park, Lakewood, Lake Highlands and Oak Cliff. Street parking downtown, garage levels near Love Field and the long approaches off I-35E, I-30, US-75 and the Dallas North Tollway are all routine calls.",
    faqs: [
      {
        q: "Will opening the car damage the door or lock?",
        a: "Our drivers use non-destructive entry wherever the vehicle allows it, which is the overwhelming majority of the time. If a particular vehicle cannot be opened safely without damage, the driver tells you before starting rather than after.",
      },
      {
        q: "Do I have to prove the car is mine?",
        a: "Yes. The driver will ask for ID or another way to confirm you are entitled to the vehicle before opening it. It takes a moment and it is the reason you can trust that nobody else can call us about your car.",
      },
      {
        q: "Why does the trunk cost more than the doors?",
        a: "Reaching keys shut in a trunk is a different job from opening a cabin door — it takes longer and needs different tools — so it is quoted separately rather than folded into the door price.",
      },
    ],
    primaryKeyword: "car lockout service Dallas TX",
    secondaryKeywords: ["locked out of car Dallas", "car unlock Dallas", "auto lockout Dallas", "vehicle lockout Dallas TX"],
    longTail: ["locked keys in car Dallas 24 hour", "car unlock near me Dallas", "locked keys in trunk Dallas"],
    intent: "Emergency, immediate-dispatch, near-me. High urgency, low research.",
    sourceUrls: ["allhoursroadside.com/dallas-auto-lockout-help/"],
  },
  {
    city: "dallas",
    service: "jump-start",
    h1: "Jump Start Service in Dallas, TX",
    title: "Jump Start Service Dallas TX",
    metaDescription:
      "Car won't start in Dallas? TRA brings a jump start to you on US-75, I-35E, the Tollway or wherever you're parked. Local DFW dispatch, 24/7. Call now.",
    intro:
      "A car that turns over slowly and then gives up is usually a battery that has run flat rather than a car that has failed. A jump start gets most vehicles running again within minutes of the driver arriving, and you can drive away under your own power instead of waiting on a tow truck.",
    scenarios: [
      "Interior light or headlights left on through a workday in a downtown garage.",
      "A cold snap after a mild week — the first genuinely cold morning is our busiest.",
      "Short trips around the city that never let the alternator fully recharge the battery.",
      "A car left standing for a fortnight while you were away through Love Field.",
    ],
    localContext:
      "We dispatch across the whole Dallas footprint, including the commuter spine of US-75 Central Expressway, I-35E, I-30, I-45, I-20 and the LBJ Freeway, plus the Dallas North Tollway. Calls come in from office garages Uptown, from residential streets in Lakewood and Lake Highlands, and from the retail lots either side of Oak Cliff.",
    faqs: [
      {
        q: "What if the car starts and then dies again later?",
        a: "That usually means the battery is no longer holding charge rather than that it was simply drained. Your driver can tell you what they saw, and battery replacement is a separate service we can bring out to you.",
      },
      {
        q: "Can you jump start a hybrid or electric vehicle?",
        a: "Tell us the year, make and model when you request help and add anything unusual in the notes. Dispatch confirms the right equipment before a driver is sent rather than discovering a mismatch on arrival.",
      },
      {
        q: "Should I keep trying the ignition while I wait?",
        a: "No — repeated attempts drain what little charge is left and make the jump harder. Switch everything off, including climate control and the stereo, and wait for the driver.",
      },
    ],
    primaryKeyword: "jump start service Dallas TX",
    secondaryKeywords: ["car battery jump start Dallas", "dead battery Dallas", "jump start near me Dallas", "24 hour jump start Dallas"],
    longTail: ["car won't start Dallas TX help", "mobile jump start Dallas", "battery died in parking garage Dallas"],
    intent: "Emergency, mobile/on-site, 24-hour. Immediate need.",
    sourceUrls: ["allhoursroadside.com/dallas-jump-start-service/"],
  },
  {
    city: "dallas",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Dallas, TX",
    title: "Car Battery Replacement Dallas TX",
    metaDescription:
      "Need a car battery in Dallas? TRA brings the battery to you and fits it where the car sits — no tow, no waiting room. Installation quoted for your vehicle.",
    intro:
      "When a battery has stopped holding charge, jumping it again only buys you until the next cold morning. We bring a replacement to the car and fit it there, whether that is a driveway in Lakewood or a garage level downtown. The battery price is published; installation depends on how the battery is mounted in your particular vehicle, so dispatch quotes that before a driver sets off.",
    scenarios: [
      "A battery that needed a jump twice in the same week.",
      "A car that has sat at Love Field long-term parking and will not wake up.",
      "Dashboard electrics behaving strangely — dim lights, slow windows, a clock that resets.",
      "A battery old enough that you would rather replace it before a trip than after a failure.",
    ],
    localContext:
      "Dallas drivers cover long daily distances on I-635, I-30 and the Dallas North Tollway, and a marginal battery tends to fail at the least convenient point of that run. We fit batteries across the city, from the Design District and Fair Park to Bishop Arts and the residential streets of Oak Cliff.",
    faqs: [
      {
        q: "Why is installation quoted separately?",
        a: "Because it genuinely varies. Some batteries sit on top of the engine and take minutes; others are under a seat or behind panelling and take considerably longer. Quoting it for your vehicle is more honest than publishing one figure that would be wrong for half the cars we see.",
      },
      {
        q: "Do I need to know which battery my car takes?",
        a: "Give us the year, make and model and we will work it out. If you can reach the VIN it confirms the exact fit, but it is optional — nobody should be crawling around a dashboard at the roadside to find one.",
      },
      {
        q: "Is there a warranty?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice, as that is what warranty service is processed against.",
      },
    ],
    primaryKeyword: "car battery replacement Dallas TX",
    secondaryKeywords: ["mobile battery replacement Dallas", "battery installation Dallas", "car battery service Dallas", "new car battery Dallas"],
    longTail: ["mobile car battery replacement near me Dallas", "battery replaced at my house Dallas", "car battery keeps dying Dallas"],
    intent: "Commercial, comparison-aware, mobile/on-site convenience.",
    sourceUrls: ["allhoursroadside.com/dallas-battery-replacement-service/"],
  },
  {
    city: "dallas",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Dallas, TX",
    title: "Flat Tire Change Dallas TX",
    metaDescription:
      "Flat tire in Dallas? If you have a usable spare, TRA fits it where you are and gets you moving. Freeway shoulders, garages and side streets across the city.",
    intro:
      "If there is a serviceable spare in the vehicle, changing a flat at the roadside is usually the quickest way out of the situation. A driver comes to you, fits the spare properly and torques it, and you drive on. No tow, and no changing a wheel yourself on the edge of a live traffic lane.",
    scenarios: [
      "A blowout on a freeway shoulder where getting out of the car is the dangerous part.",
      "A flat found in a parking garage at the end of the working day.",
      "A slow puncture that has finally gone flat overnight outside the house.",
      "A spare you would rather have fitted and torqued properly than guess at yourself.",
    ],
    localContext:
      "Dallas has more freeway miles than anywhere else we cover — I-35E, I-30, I-45, I-20, the LBJ Freeway, US-75 and the Dallas North Tollway all run through the city — and shoulder calls on those roads are a large share of our tire work. If you are on a shoulder, stay belted in with hazards on and let the driver come to you.",
    faqs: [
      {
        q: "What if I don't have a spare?",
        a: "Then a spare cannot be fitted, and the options are a replacement tire supplied by us or a tow. Tell dispatch when you call so the right thing is sent the first time.",
      },
      {
        q: "Is it safe to wait on the shoulder?",
        a: "Stay inside the vehicle with your seatbelt fastened and hazards on if you are on a highway shoulder. Standing beside a car on a live freeway is the most dangerous part of a flat tire, which is much of why this service exists.",
      },
      {
        q: "How far can I drive on the spare afterwards?",
        a: "Most spares are limited in both speed and distance. Your driver will tell you what your specific spare is rated for so you can plan the next step rather than guess.",
      },
    ],
    primaryKeyword: "flat tire change Dallas TX",
    secondaryKeywords: ["flat tire service Dallas", "tire change near me Dallas", "roadside tire change Dallas", "spare tire fitted Dallas"],
    longTail: ["flat tire on highway Dallas help", "24 hour tire change Dallas", "change my flat tire Dallas TX"],
    intent: "Emergency, roadside-safety, near-me.",
    sourceUrls: ["allhoursroadside.com/dallas-tire-change-service/"],
  },

  // ===================== GARLAND =====================
  {
    city: "garland",
    service: "lockout",
    h1: "Car Lockout Service in Garland, TX",
    title: "Car Lockout Service Garland TX",
    metaDescription:
      "Locked out in Garland? TRA opens your car without damage, from Firewheel to Historic Downtown Garland. Local DFW dispatch, day or night. Call now.",
    intro:
      "Locked keys are rarely a crisis and almost always an inconvenience with a deadline attached — a shift starting, a child to collect, groceries going warm in the back. A TRA driver comes to the car, opens it without damage, confirms it is yours, and you carry on with the day.",
    scenarios: [
      "Keys locked in while loading shopping at a Firewheel-area retail lot.",
      "A door that locked itself while the engine was running on a cold morning.",
      "Keys shut in the trunk after a trip to the lake — a separately priced job.",
      "A worn fob that stopped responding in an apartment lot after dark.",
    ],
    localContext:
      "Garland spans Dallas, Collin and Rockwall counties, and we cover all of it — Historic Downtown Garland, the Travis College Hill neighborhood and the Firewheel area, plus the approaches off I-30, I-635, TX-66, TX-78, the President George Bush Turnpike and Belt Line Road.",
    faqs: [
      {
        q: "How quickly can somebody reach me in Garland?",
        a: "Dispatch is local to DFW rather than an out-of-state call center, so the driver sent to you is the nearest one actually working Garland. You will be told what to expect when you call rather than given a number that ignores where you are.",
      },
      {
        q: "Can you open the car if the fob battery is dead?",
        a: "Yes. A dead fob is one of the more common reasons people call, and it does not change how the vehicle is opened.",
      },
      {
        q: "Do you open commercial vans and work vehicles?",
        a: "Tell us the vehicle when you request help. Dispatch confirms it before sending a driver so nobody arrives without the right approach for it.",
      },
    ],
    primaryKeyword: "car lockout service Garland TX",
    secondaryKeywords: ["locked out of car Garland", "car unlock Garland TX", "auto lockout Garland", "24 hour lockout Garland"],
    longTail: ["locked keys in car Garland TX", "car unlock near me Garland", "emergency car unlock Garland"],
    intent: "Emergency, near-me, 24-hour.",
    sourceUrls: ["allhoursroadside.com/garland-lockout-service/"],
  },
  {
    city: "garland",
    service: "jump-start",
    h1: "Jump Start Service in Garland, TX",
    title: "Jump Start Service Garland TX",
    metaDescription:
      "Dead battery in Garland? TRA brings a jump start to your car on I-635, the Bush Turnpike or at home. Local dispatch across Garland, 24/7.",
    intro:
      "Most cars that refuse to start have a flat battery rather than a real fault, and a jump start settles it on the spot. We come to the vehicle, start it, and let you drive away rather than putting it on a truck.",
    scenarios: [
      "A commuter car that sat unused over a long weekend.",
      "Lights left on in a driveway overnight.",
      "The first hard frost of the season finding a battery that was already marginal.",
      "A car that has needed a longer crank each morning for a fortnight.",
    ],
    localContext:
      "Garland's traffic runs on I-635 and the President George Bush Turnpike for commuters, and on TX-66, TX-78 and Belt Line Road for everything local. We take jump start calls from all of them, as well as from driveways around Historic Downtown Garland and Travis College Hill.",
    faqs: [
      {
        q: "Is a jump start enough, or will I need a new battery?",
        a: "A jump start gets you moving now. Whether the battery will hold that charge is a different question, and your driver will tell you honestly what they observed rather than selling you a battery on the spot.",
      },
      {
        q: "What should I do before the driver arrives?",
        a: "Switch off the stereo, climate control and lights, and stop turning the key. Each failed attempt takes more out of a battery that is already low.",
      },
      {
        q: "Do you come out to apartment and shared parking?",
        a: "Yes. Give dispatch the building and the spot or level when you request help so the driver reaches the car rather than the gate.",
      },
    ],
    primaryKeyword: "jump start service Garland TX",
    secondaryKeywords: ["dead battery Garland", "jump start near me Garland", "car won't start Garland", "mobile jump start Garland"],
    longTail: ["24 hour jump start Garland TX", "battery boost Garland", "car battery died Garland TX"],
    intent: "Emergency, mobile, 24-hour.",
    sourceUrls: ["allhoursroadside.com/garland-jump-start-service/"],
  },
  {
    city: "garland",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Garland, TX",
    title: "Car Battery Replacement Garland TX",
    metaDescription:
      "Car battery failing in Garland? TRA brings the battery to you and fits it on site, with installation quoted for your vehicle. 1-year warranty included.",
    intro:
      "A battery that has been jumped more than once is telling you something. Rather than have the car recovered to a workshop and wait, we bring the replacement to wherever it is standing and fit it there. The battery itself is published pricing; installation is quoted for your vehicle because access differs so much between models.",
    scenarios: [
      "A second jump start inside a week on the same car.",
      "A vehicle that has stood unused in a driveway through a long trip.",
      "Electrical oddities — dim headlights, slow windows, a resetting clock.",
      "An ageing battery you would rather replace on a Saturday than on a January morning.",
    ],
    localContext:
      "Garland's daily driving mixes long turnpike runs on the President George Bush Turnpike and I-635 with short local trips on TX-78 and Belt Line Road. Short trips are particularly hard on a battery, because the alternator never gets long enough to put back what starting took out.",
    faqs: [
      {
        q: "Can you fit the battery at my workplace?",
        a: "Yes, as long as the vehicle is somewhere a driver can safely work on it. Plenty of our Garland battery jobs happen in employee lots during a shift rather than at home.",
      },
      {
        q: "What does the warranty cover?",
        a: "A battery replacement includes a 1-year warranty. Keep the invoice — that is what any warranty claim is handled against.",
      },
      {
        q: "Do I need the VIN?",
        a: "No. Year, make and model are enough to get the right battery on the truck. The VIN simply confirms the exact fit if you can reach it easily.",
      },
    ],
    primaryKeyword: "car battery replacement Garland TX",
    secondaryKeywords: ["mobile battery replacement Garland", "battery installation Garland", "car battery service Garland TX"],
    longTail: ["mobile car battery Garland TX", "battery replacement at home Garland", "car battery keeps dying Garland"],
    intent: "Commercial, convenience-led, comparison-aware.",
    sourceUrls: ["allhoursroadside.com/garland-battery-replacement-service/"],
  },
  {
    city: "garland",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Garland, TX",
    title: "Flat Tire Change Garland TX",
    metaDescription:
      "Flat tire in Garland? If you have a usable spare, TRA fits it where you are — driveway, retail lot or the shoulder of I-635. Call for roadside help.",
    intro:
      "A flat with a good spare in the trunk is a twenty-minute problem for somebody with the right tools and a safe way to lift the car. We come out, fit the spare, torque it correctly, and you are on your way without touching a jack yourself.",
    scenarios: [
      "A flat discovered in a retail lot with shopping already in the car.",
      "A blowout on a turnpike shoulder where changing it yourself is not safe.",
      "A slow leak that finished overnight on the driveway.",
      "A locking wheel nut you have no key for, which we can deal with separately.",
    ],
    localContext:
      "Garland's tire calls cluster on the faster roads — I-30, I-635 and the President George Bush Turnpike — where debris does the most damage at speed. Local calls on TX-66, TX-78 and Belt Line Road tend to be slow punctures found at home rather than sudden failures.",
    faqs: [
      {
        q: "What if my spare is flat too?",
        a: "It happens more often than people expect, since spares sit for years untouched. Tell dispatch if you are unsure and we will plan for it rather than send a driver who cannot finish the job.",
      },
      {
        q: "Can you repair the flat instead of fitting the spare?",
        a: "Often yes, if the damage is in the tread rather than the sidewall. Tire repair is a separate service and your driver can advise which makes sense once they see the tire.",
      },
      {
        q: "Will you refit my original wheel later?",
        a: "This service fits the spare so you can drive. Getting the original wheel repaired or replaced afterwards is a separate job you can arrange with us or elsewhere.",
      },
    ],
    primaryKeyword: "flat tire change Garland TX",
    secondaryKeywords: ["flat tire service Garland", "tire change near me Garland", "roadside tire change Garland TX"],
    longTail: ["change flat tire Garland TX", "24 hour tire change Garland", "flat tire help Garland"],
    intent: "Emergency, roadside, near-me.",
    sourceUrls: ["allhoursroadside.com/garland-tire-change-service/"],
  },
  {
    city: "garland",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Garland, TX",
    title: "Mobile Tire Repair Garland TX",
    metaDescription:
      "Picked up a nail in Garland? TRA repairs punctures on site with a plug or patch where the damage allows, so your spare stays where it is.",
    intro:
      "A nail or screw in the tread does not always mean a tire change. Where the damage allows it, a plug or patch repairs the tire where it sits, which keeps your spare untouched and saves fitting a wheel you would only have to swap back later.",
    scenarios: [
      "A screw picked up near roadworks that has started losing pressure.",
      "A tire that needs topping up every few days.",
      "A tire pressure warning that keeps returning after being reset.",
      "A puncture found at home where you would rather repair than run on the spare.",
    ],
    localContext:
      "Construction and heavy commercial traffic along the President George Bush Turnpike, I-635 and TX-78 are a steady source of road debris in Garland, and screws and nails picked up from those corridors account for most of the punctures we repair here.",
    faqs: [
      {
        q: "Can every puncture be repaired?",
        a: "No. Damage in or near the sidewall, or beyond a certain size in the tread, cannot be repaired safely. If your driver sees that, they will tell you and the options become a tire change or a replacement tire.",
      },
      {
        q: "Should I pull the screw out before you arrive?",
        a: "No — leave it in. While it is in the tread it is partly sealing the hole. Pulling it out usually turns a slow leak into a flat before anyone reaches you.",
      },
      {
        q: "Is a repaired tire as good as a new one?",
        a: "A correctly placed tread repair is a durable, normal repair. If your driver has any doubt about whether the tire should stay in service, they will say so rather than patch it and leave.",
      },
    ],
    primaryKeyword: "mobile tire repair Garland TX",
    secondaryKeywords: ["tire repair Garland", "puncture repair Garland TX", "tire plug patch Garland", "roadside tire repair Garland"],
    longTail: ["nail in tire Garland TX", "mobile tire repair near me Garland", "fix puncture at home Garland"],
    intent: "Non-emergency but time-sensitive; mobile/on-site convenience.",
    sourceUrls: ["allhoursroadside.com/garland-mobile-tire-service/"],
  },

  // ===================== IRVING =====================
  {
    city: "irving",
    service: "lockout",
    h1: "Car Lockout Service in Irving, TX",
    title: "Car Lockout Service Irving TX",
    metaDescription:
      "Locked out in Irving? TRA opens your car without damage — Las Colinas garages, Valley Ranch, or the airport approaches. Local dispatch, day or night.",
    intro:
      "Irving generates a particular kind of lockout: people between places, often with a flight or a meeting attached. We come to the car wherever it is standing, open it without damage once ownership is confirmed, and get you moving again.",
    scenarios: [
      "Keys locked in an office garage in Las Colinas during the working day.",
      "A fob that stopped working at a hotel or long-stay lot near the airport.",
      "Keys shut in the trunk with luggage already loaded — priced separately from a door.",
      "A rental or unfamiliar vehicle whose doors locked behind you.",
    ],
    localContext:
      "Part of Dallas/Fort Worth International Airport lies inside Irving's city limits, and the city's road network — TX-114 John Carpenter Freeway, TX-183 Airport Freeway, I-635 and the President George Bush Turnpike — is built around moving people to and from it. We cover Las Colinas and Valley Ranch as well as the airport approaches.",
    faqs: [
      {
        q: "Can you reach me in a multi-storey garage?",
        a: "Yes. Tell dispatch the building and the level when you request help, because that is usually the difference between a driver finding you in two minutes and circling for ten.",
      },
      {
        q: "I'm in a rental car — can you still open it?",
        a: "We will still ask you to show you are entitled to the vehicle, which for a rental normally means the rental agreement and your ID. The check protects the car's owner, whoever that is.",
      },
      {
        q: "Do you work on the airport site itself?",
        a: "We serve Irving and the surrounding area including the approaches to the airport. We hold no special airport access or authorisation, so tell dispatch exactly where the vehicle is and they will tell you plainly whether a driver can reach it.",
      },
    ],
    primaryKeyword: "car lockout service Irving TX",
    secondaryKeywords: ["locked out of car Irving", "car unlock Irving TX", "auto lockout Las Colinas", "vehicle lockout Irving"],
    longTail: ["locked keys in car Irving TX", "car unlock near me Irving", "locked out near DFW airport Irving"],
    intent: "Emergency, near-me, traveller-adjacent urgency.",
    sourceUrls: ["allhoursroadside.com/irving-lockout-service/"],
  },
  {
    city: "irving",
    service: "jump-start",
    h1: "Jump Start Service in Irving, TX",
    title: "Jump Start Service Irving TX",
    metaDescription:
      "Car won't start in Irving? TRA brings a jump start to Las Colinas, Valley Ranch or the airport approaches. Local DFW dispatch, 24/7. Call now.",
    intro:
      "Cars that sit still go flat, and Irving has more cars sitting still than most places — airport parking, office garages, hotel lots. A jump start brings the vehicle back without a tow, and you drive out under your own power.",
    scenarios: [
      "A car left in long-stay parking while you were away for a week or more.",
      "A vehicle that sat in an office garage through several remote-working days.",
      "Headlights or an interior light left on during a long meeting.",
      "A battery that has been cranking slowly each morning and finally gave up.",
    ],
    localContext:
      "Irving's traffic moves on TX-114, TX-183 Airport Freeway, I-635 and the President George Bush Turnpike, which cross the city and feed the airport. Long-stay parking is the defining local factor for jump starts here: a battery that would have been fine on a daily commute goes flat sitting for ten days.",
    faqs: [
      {
        q: "My car has been parked for two weeks — is a jump enough?",
        a: "Usually, yes. A healthy battery that simply discharged while standing will take a jump and then recharge as you drive. A battery near the end of its life often will not, and your driver will tell you which it looked like.",
      },
      {
        q: "Can you get to me inside airport-area parking?",
        a: "Tell dispatch exactly where the vehicle is — operator, lot and level. We hold no special airport access, so dispatch will tell you honestly whether a driver can reach that spot before you wait on one.",
      },
      {
        q: "Will a jump start damage the car's electronics?",
        a: "Done properly, no. Our drivers connect in the correct order with the right equipment, which is the main reason to call rather than accept a jump from a stranger's cables.",
      },
    ],
    primaryKeyword: "jump start service Irving TX",
    secondaryKeywords: ["dead battery Irving", "jump start near me Irving", "car won't start Irving TX", "mobile jump start Las Colinas"],
    longTail: ["car battery died at airport parking Irving", "24 hour jump start Irving TX", "jump start Las Colinas garage"],
    intent: "Emergency, mobile, traveller-adjacent.",
    sourceUrls: ["allhoursroadside.com/irving-jump-start-service/"],
  },
  {
    city: "irving",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Irving, TX",
    title: "Car Battery Replacement Irving TX",
    metaDescription:
      "Need a battery in Irving? TRA brings it to the car and fits it on site — Las Colinas, Valley Ranch or the airport approaches. Installation quoted per vehicle.",
    intro:
      "If a battery has already failed once after standing, replacing it is usually cheaper than repeating the exercise every time the car is parked for a week. We bring the battery to the vehicle and fit it there. The battery price is published; installation is quoted for your specific vehicle, because how the battery is mounted varies enormously.",
    scenarios: [
      "A car that needed a jump on returning from a trip, and again a few days later.",
      "A vehicle regularly left for long periods in airport-area parking.",
      "A battery several years old that you would rather change before the next trip.",
      "Electrical symptoms — dim lights, sluggish windows, a clock that keeps resetting.",
    ],
    localContext:
      "Irving's pattern of use is unusual: a large share of vehicles here spend days standing rather than driving, between the airport whose grounds partly lie inside the city and the office parking of Las Colinas and Valley Ranch. Standing is what kills batteries, so replacement work is a steady part of what we do in this city.",
    faqs: [
      {
        q: "Can you fit a battery in a parking garage?",
        a: "Usually yes, provided the driver can work safely around the vehicle. Tell dispatch the level and bay when you request help.",
      },
      {
        q: "Why isn't installation included in the price?",
        a: "Because the job is not the same on every car. Some batteries are reached in minutes; others sit under a seat or behind trim. We quote it for your vehicle rather than publish an average that would be wrong for many customers.",
      },
      {
        q: "How long does it take?",
        a: "On most vehicles the fitting itself is short. Dispatch will tell you what to expect for your specific car when they quote the installation.",
      },
    ],
    primaryKeyword: "car battery replacement Irving TX",
    secondaryKeywords: ["mobile battery replacement Irving", "car battery service Irving TX", "battery installation Las Colinas"],
    longTail: ["mobile car battery Irving TX", "battery replacement near DFW airport", "car battery dead after trip Irving"],
    intent: "Commercial, convenience-led.",
    sourceUrls: [
      "allhoursroadside.com/irving-battery-replacement-service/",
      "allhoursroadside.com/irving-car-battery-service/",
    ],
  },
  {
    city: "irving",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Irving, TX",
    title: "Flat Tire Change Irving TX",
    metaDescription:
      "Flat tire in Irving? If you have a usable spare, TRA fits it on site — TX-114, Airport Freeway, Las Colinas garages. Call for roadside help.",
    intro:
      "A flat on the way to a flight is a different kind of problem from a flat at home. If there is a usable spare in the vehicle, we fit it where you are and get you moving, rather than adding a tow and a workshop wait to an already tight morning.",
    scenarios: [
      "A flat found in a hotel or long-stay lot on the morning of a flight.",
      "A blowout on TX-114 or the Airport Freeway with nowhere safe to work.",
      "A flat in a Las Colinas office garage at the end of the day.",
      "A slow puncture that has gone down overnight in Valley Ranch.",
    ],
    localContext:
      "Irving's main routes — TX-114 John Carpenter Freeway, TX-183 Airport Freeway, I-635 and the President George Bush Turnpike — carry heavy airport-bound traffic, and shoulder space on them is limited. That combination is why we would rather come to you than have you attempt a wheel change beside moving traffic.",
    faqs: [
      {
        q: "I have a flight — how fast can you get here?",
        a: "Tell dispatch when you call. They will tell you honestly what is achievable rather than give you a reassuring number, because a wrong estimate is worse than an inconvenient truth when you have a departure time.",
      },
      {
        q: "What if there's no spare in the car?",
        a: "Then fitting one is not an option and you need either a replacement tire supplied by us or a tow. Say so when you call so the right vehicle is sent first time.",
      },
      {
        q: "Can you change a tire inside a parking garage?",
        a: "Usually yes, if there is room to work safely around the car. Low-clearance garages can be a constraint, so mention it to dispatch.",
      },
    ],
    primaryKeyword: "flat tire change Irving TX",
    secondaryKeywords: ["flat tire service Irving", "tire change near me Irving", "roadside tire change Las Colinas"],
    longTail: ["flat tire before flight Irving", "24 hour tire change Irving TX", "flat tire on TX-114 help"],
    intent: "Emergency, time-critical, near-me.",
    sourceUrls: ["allhoursroadside.com/irving-tire-change-service/"],
  },
  {
    city: "irving",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Irving, TX",
    title: "Mobile Tire Repair Irving TX",
    metaDescription:
      "Nail in your tire in Irving? TRA repairs punctures on site with a plug or patch where the damage allows — Las Colinas, Valley Ranch and airport approaches.",
    intro:
      "A tire losing pressure slowly is worth repairing rather than replacing, and repairing it where the car stands means you keep your spare and skip the workshop. Where the damage is in the tread and within repairable limits, a plug or patch is a proper fix rather than a stopgap.",
    scenarios: [
      "A pressure warning that keeps coming back after being reset.",
      "A screw found in the tread during a pre-trip check before flying.",
      "A tire that needs air every few days but never quite goes flat.",
      "A puncture you would rather have repaired than run on a speed-limited spare.",
    ],
    localContext:
      "Irving's airport-bound traffic on TX-114, TX-183 and the President George Bush Turnpike means a high volume of vehicles covering short, repeated trips over the same stretches of road, and debris on those corridors is the usual source of the punctures we repair here.",
    faqs: [
      {
        q: "Will a repair hold for a long drive?",
        a: "A correct tread repair is a normal, durable repair rather than a temporary one. If your driver is not confident the tire should stay in service, they will tell you instead of patching it and leaving.",
      },
      {
        q: "Can you repair a tire in a parking garage?",
        a: "Usually yes, provided there is safe space around the vehicle. Give dispatch the level and bay when you call.",
      },
      {
        q: "What if the puncture is in the sidewall?",
        a: "Sidewall damage cannot be repaired safely at any price. Your driver will show you why and talk through a replacement tire or fitting your spare instead.",
      },
    ],
    primaryKeyword: "mobile tire repair Irving TX",
    secondaryKeywords: ["tire repair Irving", "puncture repair Irving TX", "roadside tire repair Las Colinas"],
    longTail: ["nail in tire Irving TX", "mobile tire repair near me Irving", "tire losing air Irving TX"],
    intent: "Time-sensitive, convenience-led, mobile.",
    sourceUrls: [
      "allhoursroadside.com/irving-mobile-tire-service/",
      "allhoursroadside.com/irving-roadside-tire-service/",
    ],
  },

  // ===================== PLANO =====================
  {
    city: "plano",
    service: "lockout",
    h1: "Car Lockout Service in Plano, TX",
    title: "Car Lockout Service Plano TX",
    metaDescription:
      "Locked out in Plano? TRA opens your car without damage — Legacy corporate lots, US-75 and Preston Road. Local DFW dispatch, day or night.",
    intro:
      "Most Plano lockouts happen in a parking lot in the middle of a working day, with something waiting at the other end. A driver comes to the vehicle, confirms it is yours, and opens it without damage so the rest of the day proceeds roughly as planned.",
    scenarios: [
      "Keys locked in a corporate lot along the Legacy Drive corridor.",
      "A fob that has stopped responding at a shopping center off Preston Road.",
      "Keys shut in the trunk after loading, which is quoted separately from a door.",
      "A second vehicle that sat long enough for its fob battery to die.",
    ],
    localContext:
      "Plano is the largest city in Texas without an interstate running through it — the traffic instead moves on US-75 Central Expressway, the Dallas North Tollway, the Sam Rayburn Tollway, the President George Bush Turnpike and Preston Road. Those tollways bound the city, and most of our lockout calls come from the commercial parking they feed, particularly around the Legacy Drive corporate corridor.",
    faqs: [
      {
        q: "Can you come to an office parking lot?",
        a: "Yes, and a good share of our Plano lockout work is exactly that. Give dispatch the building and the row or level so the driver reaches the car rather than the entrance.",
      },
      {
        q: "Will you need to see identification?",
        a: "Yes. The driver confirms you are entitled to the vehicle before opening it. It is quick, and it is the reason a stranger cannot have your car opened.",
      },
      {
        q: "What if my spare key is at home?",
        a: "You do not need a key present. Opening the vehicle does not depend on having one — it is the reason this service exists.",
      },
    ],
    primaryKeyword: "car lockout service Plano TX",
    secondaryKeywords: ["locked out of car Plano", "car unlock Plano TX", "auto lockout Plano", "vehicle lockout Legacy Plano"],
    longTail: ["locked keys in car Plano TX", "car unlock near me Plano", "24 hour car lockout Plano"],
    intent: "Emergency, workday-urgent, near-me.",
    sourceUrls: ["allhoursroadside.com/plano-lockout-service/"],
  },
  {
    city: "plano",
    service: "jump-start",
    h1: "Jump Start Service in Plano, TX",
    title: "Jump Start Service Plano TX",
    metaDescription:
      "Car won't start in Plano? TRA brings a jump start to Legacy, Preston Road or your driveway. Local DFW dispatch, 24/7. Call now.",
    intro:
      "A car that clicks instead of starting is usually a flat battery, not a broken engine. We come to the vehicle, jump it, and let you drive on — which on a working day in Plano is generally the difference between a delay and a write-off.",
    scenarios: [
      "A car that sat in a corporate lot through several days of remote work.",
      "Lights left on during a long meeting off Legacy Drive.",
      "The first properly cold morning of the season finding a tired battery.",
      "A second family car that only gets driven at weekends.",
    ],
    localContext:
      "Plano's commuting runs on US-75 and the Dallas North Tollway, with the Sam Rayburn Tollway and the President George Bush Turnpike bounding the city north and south. Long tollway commutes are kind to batteries; the corporate parking at the end of them, where cars stand for days, is not.",
    faqs: [
      {
        q: "How long will the charge last after a jump?",
        a: "If the battery is healthy, driving will recharge it. If it is failing, it may not survive being switched off. Your driver will tell you which it looked like so you are not caught out the next morning.",
      },
      {
        q: "Should I keep cranking until you arrive?",
        a: "No. Each attempt takes more from a battery that is already low, and it makes the jump harder. Switch everything off and wait.",
      },
      {
        q: "Can you jump start in a parking garage?",
        a: "Yes. Tell dispatch the building and level when you call so the driver comes straight to the vehicle.",
      },
    ],
    primaryKeyword: "jump start service Plano TX",
    secondaryKeywords: ["dead battery Plano", "jump start near me Plano", "car won't start Plano TX", "mobile jump start Plano"],
    longTail: ["24 hour jump start Plano TX", "jump start Legacy Plano", "car battery died at work Plano"],
    intent: "Emergency, workday-urgent, mobile.",
    sourceUrls: ["allhoursroadside.com/plano-jump-start-service/"],
  },
  {
    city: "plano",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Plano, TX",
    title: "Car Battery Replacement Plano TX",
    metaDescription:
      "Car battery failing in Plano? TRA brings the battery to you and fits it where the car is parked. Installation quoted per vehicle, 1-year warranty.",
    intro:
      "Replacing a battery normally means surrendering the car for half a day. We bring the battery to the vehicle instead and fit it where it stands, which for most Plano customers means it happens during a working day rather than instead of one. The battery price is published; installation is quoted for your vehicle.",
    scenarios: [
      "A battery that has now needed jumping more than once.",
      "A car that fails to start after standing over a long weekend.",
      "Warning lights or electrical behaviour that points at charging rather than the engine.",
      "A battery old enough that replacing it beats being stranded by it.",
    ],
    localContext:
      "Plano's long tollway commutes on the Dallas North Tollway and US-75 mask a weakening battery for months, because a long daily drive keeps putting charge back. The failure usually appears the first time the car stands for several days in a Legacy-area lot rather than on the road.",
    faqs: [
      {
        q: "Can this be done while I'm at work?",
        a: "Yes, if the car is somewhere a driver can work safely. Give dispatch the building, level and bay and you can carry on with the day.",
      },
      {
        q: "Why quote installation instead of publishing one price?",
        a: "Access differs hugely between vehicles — some batteries take minutes, others need trim or a seat removed. A single published figure would be wrong for a large share of cars, so we quote yours.",
      },
      {
        q: "What warranty comes with it?",
        a: "A battery replacement includes a 1-year warranty. Keep the invoice, which is what any claim is handled against.",
      },
    ],
    primaryKeyword: "car battery replacement Plano TX",
    secondaryKeywords: ["mobile battery replacement Plano", "car battery service Plano TX", "battery installation Plano"],
    longTail: ["mobile car battery Plano TX", "battery replaced at office Plano", "car battery keeps dying Plano"],
    intent: "Commercial, convenience-led, comparison-aware.",
    sourceUrls: [
      "allhoursroadside.com/plano-battery-replacement-service/",
      "allhoursroadside.com/plano-car-battery-service/",
    ],
  },
  {
    city: "plano",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Plano, TX",
    title: "Flat Tire Change Plano TX",
    metaDescription:
      "Flat tire in Plano? If you have a usable spare, TRA fits it on site — tollway shoulders, Preston Road or a corporate lot. Call for roadside help.",
    intro:
      "If there is a serviceable spare in the car, a roadside change is the fastest route back to normal. A driver comes to you, fits it properly and torques it to spec, and you drive away without having knelt beside a tollway in work clothes.",
    scenarios: [
      "A blowout on a tollway shoulder with traffic at speed alongside.",
      "A flat found in a corporate lot at the end of the working day.",
      "A slow puncture that finally went down overnight in the driveway.",
      "A wheel you cannot shift because the locking nut key is missing.",
    ],
    localContext:
      "Because Plano has no interstate, its fast traffic sits on the Dallas North Tollway, the Sam Rayburn Tollway and the President George Bush Turnpike, with US-75 carrying the rest. Tollway shoulders are narrow and fast, which is exactly where we would rather you stayed in the car and let a driver come to you.",
    faqs: [
      {
        q: "Is it safe to change it myself on a tollway shoulder?",
        a: "We would strongly advise not to. Stay belted in with hazards on. The most dangerous part of a flat tire is standing beside the car while traffic passes at speed.",
      },
      {
        q: "What if I don't have a spare?",
        a: "Then the spare cannot be fitted, and the answer is a replacement tire supplied by us or a tow. Tell dispatch when you call so the right help is sent first time.",
      },
      {
        q: "How long can I drive on the spare?",
        a: "Most spares are limited in speed and distance. Your driver will tell you what yours is rated for so you can plan rather than guess.",
      },
    ],
    primaryKeyword: "flat tire change Plano TX",
    secondaryKeywords: ["flat tire service Plano", "tire change near me Plano", "roadside tire change Plano TX"],
    longTail: ["flat tire on Dallas North Tollway", "24 hour tire change Plano TX", "change flat tire Plano"],
    intent: "Emergency, roadside-safety, near-me.",
    sourceUrls: ["allhoursroadside.com/plano-tire-change-service/"],
  },
  {
    city: "plano",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Plano, TX",
    title: "Mobile Tire Repair Plano TX",
    metaDescription:
      "Nail in your tire in Plano? TRA repairs punctures on site with a plug or patch where damage allows, so your spare stays in the trunk.",
    intro:
      "A tire that keeps needing air is worth repairing before it strands you. Where the puncture is in the tread and within repairable limits, we fix it where the car is parked, which keeps your spare unused and avoids a workshop appointment you would have to sit through.",
    scenarios: [
      "A tire pressure light that returns a day or two after being cleared.",
      "A screw picked up on a tollway that has begun to weep air.",
      "A tire noticeably softer than the others each morning.",
      "A puncture found before a long drive that you would rather fix than risk.",
    ],
    localContext:
      "Plano's traffic is concentrated on tollways and US-75 rather than an interstate, and sustained speed on those roads is what turns a small tread puncture into a rapid deflation. Catching it while it is still a slow leak is the difference between a repair and a shoulder call.",
    faqs: [
      {
        q: "How do I know if it can be repaired?",
        a: "Tread punctures within a certain size are repairable; sidewall damage is not. Your driver assesses it at the car and tells you before doing anything.",
      },
      {
        q: "Should I remove the screw myself?",
        a: "No. Leave it in place. It is partly sealing the hole, and pulling it out usually turns a manageable slow leak into a flat tire.",
      },
      {
        q: "Can you do this at my office?",
        a: "Yes, as long as the car is somewhere a driver can work safely. Most of our Plano tire repairs happen in workplace parking during the day.",
      },
    ],
    primaryKeyword: "mobile tire repair Plano TX",
    secondaryKeywords: ["tire repair Plano", "puncture repair Plano TX", "roadside tire repair Plano"],
    longTail: ["nail in tire Plano TX", "mobile tire repair near me Plano", "tire keeps losing air Plano"],
    intent: "Time-sensitive, convenience-led, mobile.",
    sourceUrls: [
      "allhoursroadside.com/plano-mobile-tire-service/",
      "allhoursroadside.com/plano-roadside-tire-service/",
    ],
  },

  // ===================== McKINNEY =====================
  {
    city: "mckinney",
    service: "lockout",
    h1: "Car Lockout Service in McKinney, TX",
    title: "Car Lockout Service McKinney TX",
    metaDescription:
      "Locked out in McKinney? TRA opens your car without damage — Historic Downtown, US-75 or US-380. Local DFW dispatch, day or night.",
    intro:
      "A lockout in McKinney is often a long way from a spare key, because the city sits at the northern edge of the metroplex and the second set is usually at home. A driver comes to the vehicle, checks it is yours, and opens it without damage.",
    scenarios: [
      "Keys locked in while parked around the historic downtown square.",
      "A fob that died in a lot off US-75 with no spare nearby.",
      "Keys shut in the trunk after loading — quoted separately from a door.",
      "A vehicle locked with the engine running on a cold morning.",
    ],
    localContext:
      "McKinney is the county seat of Collin County, and its traffic runs on US-75 and US-380, with TX-5 through the older part of town and the Sam Rayburn Tollway along the Allen boundary. Historic Downtown McKinney and Chestnut Square draw visitors who park once and walk, which is where a surprising share of lockout calls originate.",
    faqs: [
      {
        q: "How far out do you cover?",
        a: "McKinney is within our service area and dispatch is local to DFW rather than an out-of-state call center. When you call, you will be told what is realistic for your location rather than a generic promise.",
      },
      {
        q: "Can you open the car if the fob battery is flat?",
        a: "Yes. A dead fob is one of the most common reasons people call and it does not change how the vehicle is opened.",
      },
      {
        q: "Do I need to be with the car?",
        a: "Yes — somebody who can show entitlement to the vehicle needs to be there when the driver arrives, because that check happens before it is opened.",
      },
    ],
    primaryKeyword: "car lockout service McKinney TX",
    secondaryKeywords: ["locked out of car McKinney", "car unlock McKinney TX", "auto lockout McKinney"],
    longTail: ["locked keys in car McKinney TX", "car unlock near me McKinney", "24 hour lockout McKinney"],
    intent: "Emergency, near-me, edge-of-metro.",
    sourceUrls: ["allhoursroadside.com/mckinney-lockout-service/"],
  },
  {
    city: "mckinney",
    service: "jump-start",
    h1: "Jump Start Service in McKinney, TX",
    title: "Jump Start Service McKinney TX",
    metaDescription:
      "Dead battery in McKinney? TRA brings a jump start to you on US-75, US-380 or at home. Local DFW dispatch, 24/7. Call now.",
    intro:
      "A car that will not turn over is usually a flat battery rather than a serious fault, and a jump start resolves it where the vehicle stands. In McKinney that matters more than most places, because the alternative is a recovery run back down US-75.",
    scenarios: [
      "A vehicle that stood for a week at an airfield or while travelling.",
      "Lights left on overnight on a residential street.",
      "A battery that has cranked slowly each morning through a cold week.",
      "A weekend car that only moves every few weeks.",
    ],
    localContext:
      "US-75 and US-380 carry most of McKinney's traffic, with the Sam Rayburn Tollway running along the McKinney–Allen border and TX-5 serving the older parts of town. McKinney National Airport also sits within the city, and vehicles left standing there while owners travel are a recurring source of flat batteries.",
    faqs: [
      {
        q: "My car has been parked for a fortnight — will a jump fix it?",
        a: "Usually. A sound battery that simply discharged while standing will take a jump and recharge as you drive. One at the end of its life often will not, and your driver will say which it appeared to be.",
      },
      {
        q: "Do you cover the airport parking areas?",
        a: "Tell dispatch exactly where the vehicle is standing. We hold no special airport access or authorisation, so they will tell you plainly whether a driver can reach that particular spot.",
      },
      {
        q: "Is it worth just buying jump leads?",
        a: "Leads only help if there is another vehicle and somebody who knows the correct connection order. A wrong connection can be an expensive mistake on a modern car.",
      },
    ],
    primaryKeyword: "jump start service McKinney TX",
    secondaryKeywords: ["dead battery McKinney", "jump start near me McKinney", "car won't start McKinney TX"],
    longTail: ["24 hour jump start McKinney TX", "mobile jump start McKinney", "car battery died McKinney"],
    intent: "Emergency, mobile, edge-of-metro.",
    sourceUrls: ["allhoursroadside.com/mckinney-jump-start-service/"],
  },
  {
    city: "mckinney",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in McKinney, TX",
    title: "Car Battery Replacement McKinney TX",
    metaDescription:
      "Need a car battery in McKinney? TRA brings it to you and fits it on site, with installation quoted for your vehicle and a 1-year warranty.",
    intro:
      "Replacing a battery usually means getting the car to a workshop, which is awkward when the car is the thing that will not start. We bring the replacement to the vehicle and fit it there. The battery itself is published pricing; installation is quoted for your car, because access varies so much between models.",
    scenarios: [
      "A battery that has already been jumped once this month.",
      "A car that will not start reliably after standing while you travelled.",
      "Electrical symptoms pointing at charging rather than the engine itself.",
      "A battery you would rather replace before winter than during it.",
    ],
    localContext:
      "McKinney sits at the northern end of the US-75 corridor, and a battery that fails here fails further from a workshop than it would further south. Bringing the replacement to the car rather than the car to the battery is the practical difference, whether you are near the historic downtown or out along US-380.",
    faqs: [
      {
        q: "Do you come out to residential addresses?",
        a: "Yes — most of our McKinney battery work is at home addresses, where the car has failed to start in the morning.",
      },
      {
        q: "Why is installation quoted separately from the battery?",
        a: "Because the work genuinely differs by vehicle. Some batteries are reached in minutes and some need panels or a seat removed. Quoting yours is more honest than an average figure.",
      },
      {
        q: "What does the warranty cover?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice — warranty service is processed against it.",
      },
    ],
    primaryKeyword: "car battery replacement McKinney TX",
    secondaryKeywords: ["mobile battery replacement McKinney", "car battery service McKinney TX", "battery installation McKinney"],
    longTail: ["mobile car battery McKinney TX", "battery replaced at home McKinney", "car battery keeps dying McKinney"],
    intent: "Commercial, convenience-led.",
    sourceUrls: [
      "allhoursroadside.com/mckinney-battery-replacement-service/",
      "allhoursroadside.com/mckinney-car-battery-service/",
    ],
  },
  {
    city: "mckinney",
    service: "flat-tire-change",
    h1: "Flat Tire Change in McKinney, TX",
    title: "Flat Tire Change McKinney TX",
    metaDescription:
      "Flat tire in McKinney? If you have a usable spare, TRA fits it where you are — US-75, US-380 or at home. Call for roadside help.",
    intro:
      "With a usable spare in the car, a flat is a short delay rather than a lost afternoon. A driver comes to you, fits the spare and torques it correctly, and you continue — no tow, and no wheel-changing beside a fast road.",
    scenarios: [
      "A blowout on US-75 or US-380 where the shoulder is no place to work.",
      "A flat found at home after a nail picked up the previous day.",
      "A slow puncture that gave up overnight before an early start.",
      "A locking wheel nut with no key, which needs dealing with before the wheel moves.",
    ],
    localContext:
      "McKinney's flat tire calls split between the fast corridors — US-75, US-380 and the Sam Rayburn Tollway along the Allen boundary — where failures are sudden, and residential streets around the historic downtown, where they are usually discovered rather than experienced.",
    faqs: [
      {
        q: "What if my spare has gone flat sitting in the trunk?",
        a: "It is common, since spares go years untouched. Mention it to dispatch if you are unsure so a driver is not sent for a job that cannot be finished.",
      },
      {
        q: "Could the tire be repaired instead?",
        a: "Often, if the damage is in the tread rather than the sidewall. Tire repair is a separate service and your driver can advise which is sensible once they see it.",
      },
      {
        q: "Is it safe to wait on the shoulder of US-75?",
        a: "Stay in the vehicle with your seatbelt on and hazards running. Standing beside a car on a fast road is the genuinely dangerous part of a flat tire.",
      },
    ],
    primaryKeyword: "flat tire change McKinney TX",
    secondaryKeywords: ["flat tire service McKinney", "tire change near me McKinney", "roadside tire change McKinney TX"],
    longTail: ["flat tire on US-75 McKinney", "24 hour tire change McKinney", "change flat tire McKinney TX"],
    intent: "Emergency, roadside-safety.",
    sourceUrls: ["allhoursroadside.com/mckinney-tire-change-service/"],
  },
  {
    city: "mckinney",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in McKinney, TX",
    title: "Mobile Tire Repair McKinney TX",
    metaDescription:
      "Picked up a nail in McKinney? TRA repairs punctures on site with a plug or patch where the damage allows, so your spare stays put.",
    intro:
      "Catching a puncture while it is still a slow leak is much better than meeting it as a flat tire on US-75 at speed. Where the damage is in the tread and within repairable limits, we repair the tire where the car is standing and leave your spare untouched.",
    scenarios: [
      "A pressure warning that keeps returning after being reset.",
      "A screw or nail spotted in the tread during a routine check.",
      "One tire that always reads lower than the rest.",
      "A puncture found before a long drive south down US-75.",
    ],
    localContext:
      "McKinney has been building steadily for years, and construction traffic along US-380 and the US-75 corridor puts a reliable supply of screws and nails on the road. Those are the punctures we repair here most often.",
    faqs: [
      {
        q: "Can every puncture be plugged or patched?",
        a: "No. Sidewall damage and punctures beyond a certain size cannot be repaired safely. Your driver will tell you what they find rather than repair something that should not be repaired.",
      },
      {
        q: "Should I pull the nail out first?",
        a: "No. Leave it where it is — it is partly sealing the hole. Removing it normally turns a slow leak into a flat before help arrives.",
      },
      {
        q: "How long does a repair take?",
        a: "The repair itself is short once the driver has assessed the tire. The time you should plan for is the drive out to you, and dispatch will be straight with you about that.",
      },
    ],
    primaryKeyword: "mobile tire repair McKinney TX",
    secondaryKeywords: ["tire repair McKinney", "puncture repair McKinney TX", "roadside tire repair McKinney"],
    longTail: ["nail in tire McKinney TX", "mobile tire repair near me McKinney", "tire losing air McKinney"],
    intent: "Time-sensitive, convenience-led.",
    sourceUrls: [
      "allhoursroadside.com/mckinney-mobile-tire-service/",
      "allhoursroadside.com/mckinney-roadside-tire-service/",
    ],
  },

  // ===================== MESQUITE =====================
  {
    city: "mesquite",
    service: "lockout",
    h1: "Car Lockout Service in Mesquite, TX",
    title: "Car Lockout Service Mesquite TX",
    metaDescription:
      "Locked out of your car in Mesquite? TRA opens it without damage, from the US-80 corridor to Belt Line Road. Local DFW dispatch, day or night.",
    intro:
      "A locked car is a short problem that gets long if nobody comes out. We send a driver to wherever the vehicle is standing, confirm it is yours, and open it without drilling or breaking anything. You keep the key you already have and the door you already had.",
    scenarios: [
      "Keys shut in a work vehicle at a yard off the Skyline Industrial Park.",
      "A door that locked itself while the engine idled on a cold morning.",
      "Keys locked in the trunk after loading, which is quoted separately from a door.",
      "A fob that stopped responding in a parking lot after a shift.",
    ],
    localContext:
      "Mesquite sits where several freeways meet — I-635 bisects the city, with I-30 along the north side, I-20 to the south and US-80 running east to west through the northern half. TX-352 and Belt Line Road carry the local traffic. Lockout calls here come from both ends of that: freight and work vehicles near the industrial park, and family cars on residential streets.",
    faqs: [
      {
        q: "Do you open commercial and work vehicles?",
        a: "Tell dispatch the vehicle when you call. Mesquite has a lot of work traffic and vans and trucks are routine for us, but confirming the vehicle first means the driver arrives with the right approach rather than discovering it on site.",
      },
      {
        q: "How do you prove the car is mine?",
        a: "The driver asks for ID or another way to show you are entitled to the vehicle before opening it. For a company vehicle that may mean paperwork rather than a personal licence — mention it when you call.",
      },
      {
        q: "Can you come out to a freeway shoulder?",
        a: "We would rather you were somewhere safer, but if the car is immobile on a shoulder, say so when you call and stay inside the vehicle with hazards on until the driver reaches you.",
      },
    ],
    primaryKeyword: "car lockout service Mesquite TX",
    secondaryKeywords: ["locked out of car Mesquite", "car unlock Mesquite TX", "auto lockout Mesquite", "vehicle lockout Mesquite"],
    longTail: ["locked keys in car Mesquite TX", "car unlock near me Mesquite", "24 hour car lockout Mesquite"],
    intent: "Emergency, near-me, 24-hour.",
    sourceUrls: ["allhoursroadside.com/mesquite-lockout-service/"],
  },
  {
    city: "mesquite",
    service: "jump-start",
    h1: "Jump Start Service in Mesquite, TX",
    title: "Jump Start Service Mesquite TX",
    metaDescription:
      "Dead battery in Mesquite? TRA brings a jump start to you on I-635, US-80 or at home. Local DFW dispatch, 24/7. Call now.",
    intro:
      "A car that cranks slowly and then gives up has almost always run its battery down rather than broken something. A jump start settles it where the vehicle sits, and you drive on under your own power instead of waiting for a tow truck you did not need.",
    scenarios: [
      "A vehicle that sat through a long weekend without being started.",
      "Lights or an interior lamp left on overnight on a driveway.",
      "A battery that has cranked a little slower every morning for a fortnight.",
      "A work truck that stood at a yard over a shutdown period.",
    ],
    localContext:
      "Mesquite's drivers rack up freeway miles — I-635 through the middle of the city, I-30 to the north, I-20 to the south and US-80 east to west. Long freeway running usually keeps a battery healthy, which is why the failures here tend to show up after a car has been standing rather than after a drive.",
    faqs: [
      {
        q: "Will a jump start fix it for good?",
        a: "It fixes it for now. Whether the battery holds that charge depends on its condition, and your driver will tell you what they saw rather than guess on your behalf.",
      },
      {
        q: "What should I do before the driver arrives?",
        a: "Stop turning the key, and switch off the stereo, lights and climate control. Repeated attempts take more out of a battery that is already low and make the jump harder.",
      },
      {
        q: "Can you jump start a diesel truck?",
        a: "Give dispatch the vehicle details when you request help. Larger diesel engines need more from the equipment, so we would rather confirm it up front than send a driver who cannot finish the job.",
      },
    ],
    primaryKeyword: "jump start service Mesquite TX",
    secondaryKeywords: ["dead battery Mesquite", "jump start near me Mesquite", "car won't start Mesquite TX", "mobile jump start Mesquite"],
    longTail: ["24 hour jump start Mesquite TX", "battery boost Mesquite", "car battery died Mesquite TX"],
    intent: "Emergency, mobile, 24-hour.",
    sourceUrls: ["allhoursroadside.com/mesquite-jump-start-service/"],
  },
  {
    city: "mesquite",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Mesquite, TX",
    title: "Car Battery Replacement Mesquite TX",
    metaDescription:
      "Car battery failing in Mesquite? TRA brings the battery to you and fits it on site, with installation quoted for your vehicle and a 1-year warranty.",
    intro:
      "Once a battery has stopped holding charge, jumping it again only delays the next failure. We bring the replacement to the vehicle and fit it where it stands. The battery price is published; installation is quoted for your specific vehicle, because reaching the battery is a five-minute job on some cars and a much longer one on others.",
    scenarios: [
      "A second jump start on the same vehicle inside a month.",
      "A car that will not start after standing through a holiday.",
      "Dim headlights, slow windows or a clock that resets — charging symptoms rather than engine ones.",
      "A battery old enough that you would rather replace it on your terms than on a freeway shoulder.",
    ],
    localContext:
      "A weakening battery can hide for months behind a daily freeway commute on I-635 or US-80, because a long drive keeps putting charge back in. It usually reveals itself the first time the car stands for several days, which is why so many Mesquite battery calls come on a Monday rather than mid-week.",
    faqs: [
      {
        q: "Can you replace the battery at my workplace?",
        a: "Yes, provided the vehicle is somewhere a driver can work safely. A good share of our Mesquite battery work happens in employee parking during a shift.",
      },
      {
        q: "Why is installation quoted rather than published?",
        a: "Because the job genuinely differs by vehicle. Some batteries sit on top of the engine; others are under a seat or behind trim. A single published figure would be wrong for a large share of the cars we see.",
      },
      {
        q: "What warranty comes with the battery?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice — that is what any warranty claim is handled against.",
      },
    ],
    primaryKeyword: "car battery replacement Mesquite TX",
    secondaryKeywords: ["mobile battery replacement Mesquite", "car battery service Mesquite TX", "battery installation Mesquite"],
    longTail: ["mobile car battery Mesquite TX", "battery replaced at home Mesquite", "car battery keeps dying Mesquite"],
    intent: "Commercial, convenience-led.",
    sourceUrls: ["allhoursroadside.com/mesquite-battery-replacement-service/"],
  },
  {
    city: "mesquite",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Mesquite, TX",
    title: "Flat Tire Change Mesquite TX",
    metaDescription:
      "Flat tire in Mesquite? If you have a usable spare, TRA fits it where you are — I-635, US-80 or your driveway. Call for roadside help.",
    intro:
      "With a serviceable spare in the vehicle, a flat is a short delay rather than a lost day. A driver comes to you, fits the spare and torques it properly, and you carry on. Nobody has to kneel beside a freeway with traffic passing a metre away.",
    scenarios: [
      "A blowout on a freeway shoulder where getting out of the car is the real hazard.",
      "A flat found in a parking lot at the end of a shift.",
      "A slow puncture that finally went down overnight at home.",
      "A wheel that will not come off because the locking nut key is missing.",
    ],
    localContext:
      "Mesquite is a freeway city — I-635 bisects it and I-30, I-20 and US-80 bound or cross it — and heavy freight running those routes, including the rail intermodal traffic around the Skyline Industrial Park, puts a steady supply of debris on the road. Most of our sudden flats here happen at freeway speed rather than on a side street.",
    faqs: [
      {
        q: "Is it safe to change it myself on the shoulder of I-635?",
        a: "We would strongly advise against it. Stay belted in with hazards on and let the driver come to you. Standing beside a vehicle on a busy freeway is the genuinely dangerous part of a flat tire.",
      },
      {
        q: "What if there is no spare in the car?",
        a: "Then fitting one is not an option, and the answer is a replacement tire supplied by us or a tow. Tell dispatch when you call so the right help is sent first time.",
      },
      {
        q: "How far can I drive on the spare?",
        a: "Most spares are limited in both speed and distance. Your driver will tell you what yours is rated for so you can plan the next step rather than guess at it.",
      },
    ],
    primaryKeyword: "flat tire change Mesquite TX",
    secondaryKeywords: ["flat tire service Mesquite", "tire change near me Mesquite", "roadside tire change Mesquite TX"],
    longTail: ["flat tire on I-635 Mesquite", "24 hour tire change Mesquite", "change flat tire Mesquite TX"],
    intent: "Emergency, roadside-safety, near-me.",
    sourceUrls: ["allhoursroadside.com/mesquite-tire-change-service/"],
  },
  {
    city: "mesquite",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Mesquite, TX",
    title: "Mobile Tire Repair Mesquite TX",
    metaDescription:
      "Nail in your tire in Mesquite? TRA repairs punctures on site with a plug or patch where the damage allows, so your spare stays where it is.",
    intro:
      "A tire losing air slowly is worth repairing before it becomes a flat at freeway speed. Where the damage is in the tread and within repairable limits, we fix it where the vehicle is parked and leave your spare untouched.",
    scenarios: [
      "A screw picked up near a freight yard that has started weeping air.",
      "A tire that needs topping up every few days.",
      "A pressure warning that keeps coming back after being cleared.",
      "A puncture found at home that you would rather repair than run on the spare.",
    ],
    localContext:
      "The freight traffic that makes Mesquite's freeways busy also makes them a reliable source of road debris — nails, screws and fragments shed around the US-80 and I-635 corridors and the industrial traffic near Skyline. Catching one while it is still a slow leak is the difference between a repair and a shoulder call.",
    faqs: [
      {
        q: "Should I pull the screw out first?",
        a: "No — leave it in place. While it sits in the tread it is partly sealing the hole. Pulling it out usually turns a slow leak into a flat tire before anyone reaches you.",
      },
      {
        q: "Can every puncture be repaired?",
        a: "No. Damage in or near the sidewall, or beyond a certain size in the tread, cannot be repaired safely. Your driver will tell you what they find rather than patch something that should not be patched.",
      },
      {
        q: "Will the repair hold at freeway speed?",
        a: "A correctly placed tread repair is a proper, durable repair rather than a temporary one. If your driver has doubts about the tire staying in service, they will say so.",
      },
    ],
    primaryKeyword: "mobile tire repair Mesquite TX",
    secondaryKeywords: ["tire repair Mesquite", "puncture repair Mesquite TX", "roadside tire repair Mesquite"],
    longTail: ["nail in tire Mesquite TX", "mobile tire repair near me Mesquite", "tire losing air Mesquite"],
    intent: "Time-sensitive, convenience-led, mobile.",
    sourceUrls: ["allhoursroadside.com/mesquite-mobile-tire-service/"],
  },

  // ===================== RICHARDSON =====================
  {
    city: "richardson",
    service: "lockout",
    h1: "Car Lockout Service in Richardson, TX",
    title: "Car Lockout Service Richardson TX",
    metaDescription:
      "Locked out in Richardson? TRA opens your car without damage — Telecom Corridor lots, Galatyn Park, or anywhere off US-75. Local dispatch, day or night.",
    intro:
      "Most Richardson lockouts happen in the middle of a working day, in a company lot, with a meeting or a school pickup already slipping. A driver comes to the vehicle, confirms you are entitled to it, and opens it without damage so the day carries on roughly as planned.",
    scenarios: [
      "Keys locked in a car in a Telecom Corridor office lot during the day.",
      "A fob that stopped responding at a Galatyn Park garage after an event.",
      "Keys shut in the trunk, which is a different job from a door and priced separately.",
      "A second vehicle that sat long enough for its fob battery to die.",
    ],
    localContext:
      "Richardson runs north to south along US-75 Central Expressway, with I-635 at the southern end and the President George Bush Turnpike along the northern border. Between them sit the Telecom Corridor and Galatyn Park, where a large share of the city's cars spend the working day parked rather than moving — which is exactly where lockouts happen.",
    faqs: [
      {
        q: "Can you reach me in a corporate parking garage?",
        a: "Yes, and much of our Richardson lockout work is exactly that. Give dispatch the building and the level, because that is usually the difference between a driver finding you quickly and circling the site.",
      },
      {
        q: "Do I need to be with the car?",
        a: "Yes. Somebody who can show entitlement to the vehicle needs to be present, because that check happens before it is opened.",
      },
      {
        q: "Will the car alarm go off?",
        a: "It can, depending on the vehicle. It is not a problem — your driver will talk you through it, and it stops once the car is open and the key or fob is present.",
      },
    ],
    primaryKeyword: "car lockout service Richardson TX",
    secondaryKeywords: ["locked out of car Richardson", "car unlock Richardson TX", "auto lockout Richardson", "vehicle lockout Telecom Corridor"],
    longTail: ["locked keys in car Richardson TX", "car unlock near me Richardson", "24 hour lockout Richardson"],
    intent: "Emergency, workday-urgent, near-me.",
    sourceUrls: ["allhoursroadside.com/richardson-auto-lockout-help/"],
  },
  {
    city: "richardson",
    service: "jump-start",
    h1: "Jump Start Service in Richardson, TX",
    title: "Jump Start Service Richardson TX",
    metaDescription:
      "Car won't start in Richardson? TRA brings a jump start to Telecom Corridor lots, Galatyn Park or your driveway. Local DFW dispatch, 24/7.",
    intro:
      "A car that clicks instead of starting at five o'clock is a flat battery far more often than it is a fault. We come to the vehicle, start it, and let you drive home rather than arranging a recovery you do not need.",
    scenarios: [
      "A car that sat in an office lot through several days of remote working.",
      "Headlights left on during a long day at a campus off US-75.",
      "The first properly cold morning finding a battery that was already marginal.",
      "A vehicle that has needed a longer crank each morning for a week.",
    ],
    localContext:
      "Richardson's working pattern is unusual for the metroplex: a dense concentration of office parking in the Telecom Corridor and around Galatyn Park, fed by US-75 and the President George Bush Turnpike. Cars that commute daily tend to keep their charge. Cars that sit in a company lot for three days while someone works from home do not.",
    faqs: [
      {
        q: "My car sat all week — will a jump be enough?",
        a: "Usually, yes. A sound battery that simply discharged while standing will take a jump and recharge as you drive. One near the end of its life often will not, and your driver will tell you which it appeared to be.",
      },
      {
        q: "Can you get to a car on an upper garage level?",
        a: "Yes. Tell dispatch the building and level when you call so the driver comes straight to the vehicle rather than hunting for it.",
      },
      {
        q: "Is it bad to keep trying the ignition?",
        a: "Yes. Each attempt draws more from a battery that is already low, and it makes the eventual jump harder. Switch everything off and wait.",
      },
    ],
    primaryKeyword: "jump start service Richardson TX",
    secondaryKeywords: ["dead battery Richardson", "jump start near me Richardson", "car won't start Richardson TX", "mobile jump start Richardson"],
    longTail: ["24 hour jump start Richardson TX", "jump start Telecom Corridor", "car battery died at work Richardson"],
    intent: "Emergency, workday-urgent, mobile.",
    sourceUrls: ["allhoursroadside.com/richardson-jump-start-service/"],
  },
  {
    city: "richardson",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Richardson, TX",
    title: "Car Battery Replacement Richardson TX",
    metaDescription:
      "Need a car battery in Richardson? TRA brings it to you and fits it on site — office lots off US-75 or at home. Installation quoted per vehicle.",
    intro:
      "Replacing a battery normally means surrendering the car for half a day, which is awkward when the car is the thing that will not start. We bring the battery to the vehicle instead. The battery price is published; installation is quoted for your specific car because access varies so much between models.",
    scenarios: [
      "A battery that has now needed jumping more than once.",
      "A car that fails to start after standing in a company lot over a long weekend.",
      "Electrical behaviour pointing at charging rather than the engine.",
      "A battery you would rather replace during a working day than on a January morning.",
    ],
    localContext:
      "Richardson's commute along US-75 and the President George Bush Turnpike is long enough to keep a tired battery looking healthy. The failure usually appears in a Telecom Corridor or Galatyn Park lot after the car has stood for a few days, which is also the easiest place for us to come and fit a replacement while you work.",
    faqs: [
      {
        q: "Can this be done while I am at work?",
        a: "Yes, as long as the car is somewhere a driver can work safely. Give dispatch the building, level and bay and you can carry on with the day.",
      },
      {
        q: "Do you need my VIN?",
        a: "No. Year, make and model are enough to bring the right battery. The VIN simply confirms the exact fit if you can reach it without effort.",
      },
      {
        q: "What does the warranty cover?",
        a: "A battery replacement includes a 1-year warranty. Keep the invoice, as that is what warranty service is processed against.",
      },
    ],
    primaryKeyword: "car battery replacement Richardson TX",
    secondaryKeywords: ["mobile battery replacement Richardson", "car battery service Richardson TX", "battery installation Richardson"],
    longTail: ["mobile car battery Richardson TX", "battery replaced at office Richardson", "car battery keeps dying Richardson"],
    intent: "Commercial, convenience-led, comparison-aware.",
    sourceUrls: [
      "allhoursroadside.com/richardson-battery-replacement-service/",
      "allhoursroadside.com/richardson-car-battery-service/",
    ],
  },
  {
    city: "richardson",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Richardson, TX",
    title: "Flat Tire Change Richardson TX",
    metaDescription:
      "Flat tire in Richardson? If you have a usable spare, TRA fits it where you are — US-75 shoulders, office lots or at home. Call for roadside help.",
    intro:
      "If there is a usable spare in the vehicle, a roadside change is the quickest route back to normal. A driver fits it properly and torques it to specification, and you drive on — without changing a wheel in work clothes beside Central Expressway.",
    scenarios: [
      "A blowout on a US-75 shoulder in moving traffic.",
      "A flat found in an office lot at the end of the working day.",
      "A slow puncture that gave up overnight on a residential street.",
      "A locking wheel nut with no key, which has to be dealt with before the wheel moves.",
    ],
    localContext:
      "US-75 Central Expressway carries most of Richardson's through-traffic, with the President George Bush Turnpike across the north and I-635 at the southern end. Shoulder space on US-75 through the city is tight, which is much of why we would rather come to you than have you attempt a change beside it.",
    faqs: [
      {
        q: "Is it safe to wait on the shoulder of US-75?",
        a: "Stay inside the vehicle with your seatbelt on and hazards running. Standing beside a car on Central Expressway is the most dangerous part of a flat tire, by a wide margin.",
      },
      {
        q: "Could the tire be repaired instead of changed?",
        a: "Often, if the damage is in the tread rather than the sidewall. Tire repair is a separate service and your driver can advise which makes sense once they see the tire.",
      },
      {
        q: "What if my spare has gone flat in the trunk?",
        a: "It happens, since spares sit untouched for years. If you are unsure, say so when you call and we will plan for it rather than send a driver who cannot finish the job.",
      },
    ],
    primaryKeyword: "flat tire change Richardson TX",
    secondaryKeywords: ["flat tire service Richardson", "tire change near me Richardson", "roadside tire change Richardson TX"],
    longTail: ["flat tire on US-75 Richardson", "24 hour tire change Richardson", "change flat tire Richardson TX"],
    intent: "Emergency, roadside-safety.",
    sourceUrls: ["allhoursroadside.com/richardson-tire-change-service/"],
  },
  {
    city: "richardson",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Richardson, TX",
    title: "Mobile Tire Repair Richardson TX",
    metaDescription:
      "Picked up a nail in Richardson? TRA repairs punctures on site with a plug or patch where damage allows — office lots, driveways, anywhere off US-75.",
    intro:
      "A tire that keeps needing air is worth repairing before it strands you. Where the puncture is in the tread and within repairable limits, we repair it where the car is parked, which keeps your spare unused and saves a workshop appointment you would have to sit through.",
    scenarios: [
      "A pressure warning that returns a day or two after being cleared.",
      "A screw found in the tread during a check before a long drive.",
      "One tire that always reads lower than the other three.",
      "A puncture you would rather fix than run on a speed-limited spare.",
    ],
    localContext:
      "Richardson's tire work is mostly slow leaks rather than sudden failures: cars that spend the day parked in Telecom Corridor and Galatyn Park lots give their owners time to notice a tire going down, rather than discovering it at speed on US-75.",
    faqs: [
      {
        q: "Can you repair it in my office parking lot?",
        a: "Yes, provided there is safe space around the vehicle. Most of our Richardson tire repairs happen in workplace parking during the day.",
      },
      {
        q: "How do I know if it can be repaired?",
        a: "Tread punctures within a certain size are repairable; sidewall damage is not. Your driver assesses it at the car and tells you before doing anything.",
      },
      {
        q: "Is a repaired tire safe for a long trip?",
        a: "A correct tread repair is a normal, durable repair. If your driver is not confident the tire should stay in service, they will tell you instead of repairing it and leaving.",
      },
    ],
    primaryKeyword: "mobile tire repair Richardson TX",
    secondaryKeywords: ["tire repair Richardson", "puncture repair Richardson TX", "roadside tire repair Richardson"],
    longTail: ["nail in tire Richardson TX", "mobile tire repair near me Richardson", "tire keeps losing air Richardson"],
    intent: "Time-sensitive, convenience-led.",
    sourceUrls: [
      "allhoursroadside.com/richardson-mobile-tire-service/",
      "allhoursroadside.com/richardson-roadside-tire-service/",
    ],
  },

  // ===================== FRISCO =====================
  {
    city: "frisco",
    service: "lockout",
    h1: "Car Lockout Service in Frisco, TX",
    title: "Car Lockout Service Frisco TX",
    metaDescription:
      "Locked out in Frisco? TRA opens your car without damage — anywhere off the Dallas North Tollway, Preston Road or US-380. Local dispatch, day or night.",
    intro:
      "Frisco is a driving city with very little within walking distance of where you parked, so a locked car tends to strand you properly rather than merely annoy you. A driver comes out, confirms the vehicle is yours and opens it without damage.",
    scenarios: [
      "Keys locked in while unloading at a sports or event venue.",
      "A fob battery that died in a parking lot off Preston Road.",
      "Keys shut in the trunk after loading, which is quoted separately from a door.",
      "A door that locked itself with the engine running on a cold morning.",
    ],
    localContext:
      "Frisco is bounded and crossed by toll roads rather than interstates: the Dallas North Tollway runs north to south, the Sam Rayburn Tollway cuts across the south of the city, and Preston Road and US-380 carry much of the rest. We cover all of it, and the city borders four other areas we serve — Plano, The Colony, McKinney and Allen — so a driver is rarely far away.",
    faqs: [
      {
        q: "How long will it take to reach me in Frisco?",
        a: "Dispatch is local to DFW rather than an out-of-state call center, and Frisco borders four other areas we cover, so the driver sent is the nearest one genuinely working the area. You will be told what to expect when you call.",
      },
      {
        q: "Can you open the car if the fob battery is dead?",
        a: "Yes. A dead fob is among the most common reasons people call and it does not change how the vehicle is opened.",
      },
      {
        q: "Will opening it damage anything?",
        a: "Our drivers use non-destructive entry wherever the vehicle allows. If a particular car cannot be opened safely without damage, the driver tells you before starting rather than afterwards.",
      },
    ],
    primaryKeyword: "car lockout service Frisco TX",
    secondaryKeywords: ["locked out of car Frisco", "car unlock Frisco TX", "auto lockout Frisco", "vehicle lockout Frisco"],
    longTail: ["locked keys in car Frisco TX", "car unlock near me Frisco", "24 hour car lockout Frisco"],
    intent: "Emergency, near-me, 24-hour.",
    sourceUrls: ["allhoursroadside.com/frisco-lockout-service/"],
  },
  {
    city: "frisco",
    service: "jump-start",
    h1: "Jump Start Service in Frisco, TX",
    title: "Jump Start Service Frisco TX",
    metaDescription:
      "Dead battery in Frisco? TRA brings a jump start to you on the Tollway, Preston Road or at home. Local DFW dispatch, 24/7. Call now.",
    intro:
      "A car that will not turn over is usually a flat battery rather than a serious fault, and a jump start resolves it where the vehicle stands. In a city built around driving, that is the difference between a delay and a lost afternoon.",
    scenarios: [
      "A second family car that only moves at weekends.",
      "Lights left on during a long event at a venue.",
      "A vehicle that stood through a week away.",
      "A battery that has cranked slower every morning through a cold spell.",
    ],
    localContext:
      "Frisco has no interstate: its traffic moves on the Dallas North Tollway and the Sam Rayburn Tollway, with Preston Road, US-380 and FM 423 carrying the rest. Tollway commuting is long and steady, which is kind to a battery — so the failures here usually follow a period of standing rather than a period of driving.",
    faqs: [
      {
        q: "Will the charge last once you have gone?",
        a: "If the battery is healthy, driving will recharge it. If it is failing, it may not survive the next time the car is switched off. Your driver will tell you which it looked like so you are not caught out tomorrow.",
      },
      {
        q: "Should I keep trying to start it?",
        a: "No. Every failed attempt takes more from a battery that is already low. Switch off the lights, stereo and climate control and wait for the driver.",
      },
      {
        q: "Do you come out to event and venue parking?",
        a: "Yes. Tell dispatch which lot and roughly where in it the vehicle is, because large event parking is easy to get lost in.",
      },
    ],
    primaryKeyword: "jump start service Frisco TX",
    secondaryKeywords: ["dead battery Frisco", "jump start near me Frisco", "car won't start Frisco TX", "mobile jump start Frisco"],
    longTail: ["24 hour jump start Frisco TX", "battery boost Frisco", "car battery died Frisco TX"],
    intent: "Emergency, mobile, 24-hour.",
    sourceUrls: ["allhoursroadside.com/frisco-jump-start-service/"],
  },
  {
    city: "frisco",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Frisco, TX",
    title: "Car Battery Replacement Frisco TX",
    metaDescription:
      "Need a car battery in Frisco? TRA brings it to the car and fits it on site. Installation quoted for your vehicle, 1-year warranty included.",
    intro:
      "Getting a car with a dead battery to a workshop is the hard part of replacing a battery. We remove that part by bringing the replacement to the vehicle and fitting it where it stands. The battery price is published; installation is quoted for your car, because access differs enormously between models.",
    scenarios: [
      "A battery that has already been jumped once this month.",
      "A car that will not start reliably after standing for a week.",
      "Charging symptoms — dim lights, slow windows, a resetting clock.",
      "An ageing battery you would rather change before a long trip than during one.",
    ],
    localContext:
      "Frisco's roads are tollways and arterials rather than interstates — the Dallas North Tollway, the Sam Rayburn Tollway, Preston Road, US-380 and FM 423 — and the long steady runs they carry tend to mask a declining battery. The first real sign is usually a car that will not wake up after a few days parked.",
    faqs: [
      {
        q: "Do you come out to residential addresses?",
        a: "Yes — a large share of our Frisco battery work is at home, where the car has failed to start in the morning.",
      },
      {
        q: "Why is installation not included in the published price?",
        a: "Because it genuinely varies by vehicle. Some batteries are reached in minutes and others need trim or a seat removed. Quoting yours is more honest than an average that would be wrong for many cars.",
      },
      {
        q: "What does the warranty cover?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice, as warranty service is processed against it.",
      },
    ],
    primaryKeyword: "car battery replacement Frisco TX",
    secondaryKeywords: ["mobile battery replacement Frisco", "car battery service Frisco TX", "battery installation Frisco"],
    longTail: ["mobile car battery Frisco TX", "battery replaced at home Frisco", "car battery keeps dying Frisco"],
    intent: "Commercial, convenience-led.",
    sourceUrls: [
      "allhoursroadside.com/frisco-battery-replacement-service/",
      "allhoursroadside.com/frisco-car-battery-service/",
    ],
  },
  {
    city: "frisco",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Frisco, TX",
    title: "Flat Tire Change Frisco TX",
    metaDescription:
      "Flat tire in Frisco? If you have a usable spare, TRA fits it on site — Tollway shoulders, Preston Road or at home. Call for roadside help.",
    intro:
      "A flat with a good spare in the trunk is a short job for someone with the right tools and a safe way to lift the car. We come to you, fit the spare and torque it correctly, so you are moving again without having worked beside a toll road.",
    scenarios: [
      "A blowout on a tollway shoulder at speed.",
      "A flat discovered in a venue lot after an event.",
      "A slow puncture that went down overnight on the driveway.",
      "A wheel that will not come off without a locking nut key you no longer have.",
    ],
    localContext:
      "Because Frisco has no interstate, its fast traffic sits on the Dallas North Tollway and the Sam Rayburn Tollway, with US-380 carrying heavy east-west movement through a city that has been under construction for years. Those construction corridors are where most of the sudden tire damage here originates.",
    faqs: [
      {
        q: "What if I do not have a spare?",
        a: "Then the spare cannot be fitted, and the options are a replacement tire supplied by us or a tow. Say so when you call so the right help is sent first time.",
      },
      {
        q: "Is it safe to change a wheel on a tollway shoulder?",
        a: "We would rather you did not. Stay in the vehicle with your seatbelt on and hazards running, and let the driver do it with proper equipment and awareness of the traffic.",
      },
      {
        q: "How long can I run on the spare?",
        a: "Most spares are limited in speed and distance. Your driver will tell you what yours is rated for so you can plan rather than guess.",
      },
    ],
    primaryKeyword: "flat tire change Frisco TX",
    secondaryKeywords: ["flat tire service Frisco", "tire change near me Frisco", "roadside tire change Frisco TX"],
    longTail: ["flat tire on Dallas North Tollway Frisco", "24 hour tire change Frisco", "change flat tire Frisco TX"],
    intent: "Emergency, roadside-safety, near-me.",
    sourceUrls: ["allhoursroadside.com/frisco-tire-change-service/"],
  },
  {
    city: "frisco",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Frisco, TX",
    title: "Mobile Tire Repair Frisco TX",
    metaDescription:
      "Nail in your tire in Frisco? TRA repairs punctures on site with a plug or patch where the damage allows, so your spare stays in the trunk.",
    intro:
      "Frisco has been a construction site for the better part of a decade, and construction means screws and nails on the road. Where the damage is in the tread and within repairable limits, we repair the tire where the car is parked rather than fitting a spare you would only swap back later.",
    scenarios: [
      "A screw picked up near roadworks on US-380.",
      "A tire that needs air every few days without ever going flat.",
      "A pressure warning that keeps returning after being reset.",
      "A puncture spotted before a long drive that you would rather fix than risk.",
    ],
    localContext:
      "US-380 and the tollway corridors carry Frisco's heaviest construction and delivery traffic, and that is where most of the punctures we repair here are picked up. A slow leak caught in a driveway is a repair; the same puncture discovered at tollway speed is a shoulder call.",
    faqs: [
      {
        q: "Should I remove the nail myself?",
        a: "No. Leave it where it is — it is partly sealing the hole. Pulling it out normally turns a manageable slow leak into a flat tire.",
      },
      {
        q: "Can every puncture be plugged or patched?",
        a: "No. Sidewall damage and punctures beyond a certain size cannot be repaired safely. Your driver will tell you what they find rather than repair something that should not be repaired.",
      },
      {
        q: "Can you do this at my house?",
        a: "Yes. Most of our Frisco tire repairs happen on a driveway, where the leak was noticed rather than suffered.",
      },
    ],
    primaryKeyword: "mobile tire repair Frisco TX",
    secondaryKeywords: ["tire repair Frisco", "puncture repair Frisco TX", "roadside tire repair Frisco"],
    longTail: ["nail in tire Frisco TX", "mobile tire repair near me Frisco", "tire losing air Frisco"],
    intent: "Time-sensitive, convenience-led, mobile.",
    sourceUrls: [
      "allhoursroadside.com/frisco-mobile-tire-service/",
      "allhoursroadside.com/frisco-roadside-tire-service/",
    ],
  },

  // ===================== LEWISVILLE =====================
  {
    city: "lewisville",
    service: "lockout",
    h1: "Car Lockout Service in Lewisville, TX",
    title: "Car Lockout Service Lewisville TX",
    metaDescription:
      "Locked out in Lewisville? TRA opens your car without damage — off I-35E, Main Street or near the lake. Local DFW dispatch, day or night.",
    intro:
      "Lewisville sits on the main road north out of the metroplex, and a good share of the people locked out here are partway through a journey rather than at home. We come to the vehicle wherever it has stopped, confirm it is yours, and open it without damage.",
    scenarios: [
      "Keys locked in at a stop off I-35E partway through a drive.",
      "A fob that stopped working in a lot along Main Street.",
      "Keys shut in the trunk after loading for a trip to the lake.",
      "A door that locked itself while the engine was running.",
    ],
    localContext:
      "I-35E runs the length of Lewisville and is the main artery between Dallas and Denton, which makes the city a natural stopping point rather than only a destination. The Sam Rayburn Tollway crosses the south, FM 1171 carries Main Street east to west, and FM 407 and FM 3040 handle the rest. Lewisville Lake forms the northern edge of the city.",
    faqs: [
      {
        q: "I am passing through on I-35E — can you still help?",
        a: "Yes. A good share of our Lewisville work is for people partway through a journey rather than local residents. Tell dispatch where you have stopped and they will route the nearest driver.",
      },
      {
        q: "Do I need proof the car is mine if it is a rental?",
        a: "Yes, and for a rental that normally means the rental agreement along with your ID. The check protects whoever owns the vehicle.",
      },
      {
        q: "Can you come out to a lakeside parking area?",
        a: "Tell dispatch exactly where the vehicle is. Access around the lake varies, and they would rather establish that on the call than have a driver arrive at the wrong side of the water.",
      },
    ],
    primaryKeyword: "car lockout service Lewisville TX",
    secondaryKeywords: ["locked out of car Lewisville", "car unlock Lewisville TX", "auto lockout Lewisville", "vehicle lockout Lewisville"],
    longTail: ["locked keys in car Lewisville TX", "car unlock near me Lewisville", "locked out on I-35E Lewisville"],
    intent: "Emergency, through-traffic, near-me.",
    sourceUrls: ["allhoursroadside.com/lewisville-lockout-service/"],
  },
  {
    city: "lewisville",
    service: "jump-start",
    h1: "Jump Start Service in Lewisville, TX",
    title: "Jump Start Service Lewisville TX",
    metaDescription:
      "Car won't start in Lewisville? TRA brings a jump start to you on I-35E, Main Street or at home. Local DFW dispatch, 24/7. Call now.",
    intro:
      "A flat battery on a journey is worse than a flat battery at home, because you are somewhere you did not plan to stop. We come to the vehicle, jump it, and get you moving again under your own power.",
    scenarios: [
      "A car that will not restart after a stop partway up I-35E.",
      "A boat-towing vehicle left standing after a weekend at the lake.",
      "Lights left on in a lot along Main Street.",
      "A battery that has struggled each cold morning for a week.",
    ],
    localContext:
      "Lewisville is defined by I-35E running straight through it — the city is as much a through-route between Dallas and Denton as a destination. The Sam Rayburn Tollway crosses the south, and FM 1171, FM 407 and FM 3040 connect the rest. Seasonal traffic to Lewisville Lake on the northern edge adds vehicles that sit for days at a time.",
    faqs: [
      {
        q: "Can you reach me on the shoulder of I-35E?",
        a: "Yes, and it is a common call here. Stay inside the vehicle with your seatbelt fastened and hazards on, and give dispatch the nearest exit number so the driver finds you quickly.",
      },
      {
        q: "My car sat at the lake all weekend — is a jump enough?",
        a: "Usually. A healthy battery that discharged while standing will take a jump and recharge as you drive. One at the end of its life often will not, and your driver will say which it appeared to be.",
      },
      {
        q: "Will a jump start harm the car's electronics?",
        a: "Done properly, no. Our drivers connect in the correct order with the right equipment, which is the main reason to call rather than accept a jump from a stranger's cables.",
      },
    ],
    primaryKeyword: "jump start service Lewisville TX",
    secondaryKeywords: ["dead battery Lewisville", "jump start near me Lewisville", "car won't start Lewisville TX", "mobile jump start Lewisville"],
    longTail: ["24 hour jump start Lewisville TX", "jump start on I-35E", "car battery died Lewisville TX"],
    intent: "Emergency, through-traffic, 24-hour.",
    sourceUrls: ["allhoursroadside.com/lewisville-jump-start-service/"],
  },
  {
    city: "lewisville",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Lewisville, TX",
    title: "Car Battery Replacement Lewisville TX",
    metaDescription:
      "Car battery failing in Lewisville? TRA brings the battery to you and fits it on site, with installation quoted for your vehicle and a 1-year warranty.",
    intro:
      "A battery that has been jumped more than once is telling you it will not survive the next cold snap. We bring the replacement to the vehicle and fit it where it stands, which matters when the car is sitting at the side of a road you were only passing along. The battery price is published; installation is quoted for your vehicle.",
    scenarios: [
      "A battery jumped once on the road and again a few days later.",
      "A towing vehicle that only comes out for lake trips and will not start.",
      "Dim lights and sluggish electrics pointing at charging rather than the engine.",
      "A battery you would rather replace before a long drive north.",
    ],
    localContext:
      "Lewisville's traffic is dominated by I-35E, the main north-south artery between Dallas and Denton. A long highway run keeps a weak battery looking adequate; the failures tend to show up on seasonal vehicles that stand between trips to Lewisville Lake, or on cars that stop somewhere on the highway and will not restart.",
    faqs: [
      {
        q: "Can you fit a battery at the roadside rather than at home?",
        a: "Yes, provided the vehicle is somewhere a driver can work safely. On a live highway shoulder we will assess the situation first — sometimes moving the vehicle is the safer first step.",
      },
      {
        q: "Why quote installation separately?",
        a: "Because access genuinely differs. Some batteries are reached in minutes; others sit under a seat or behind panels. Quoting yours is more honest than publishing an average that is wrong for half the cars we see.",
      },
      {
        q: "Do I need the VIN?",
        a: "No. Year, make and model are enough. The VIN simply confirms the exact fit if you can reach it easily.",
      },
    ],
    primaryKeyword: "car battery replacement Lewisville TX",
    secondaryKeywords: ["mobile battery replacement Lewisville", "car battery service Lewisville TX", "battery installation Lewisville"],
    longTail: ["mobile car battery Lewisville TX", "battery replaced at home Lewisville", "car battery keeps dying Lewisville"],
    intent: "Commercial, convenience-led.",
    sourceUrls: ["allhoursroadside.com/lewisville-battery-replacement-service/"],
  },
  {
    city: "lewisville",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Lewisville, TX",
    title: "Flat Tire Change Lewisville TX",
    metaDescription:
      "Flat tire in Lewisville? If you have a usable spare, TRA fits it where you are — I-35E shoulders, Main Street or at home. Call for roadside help.",
    intro:
      "A flat on I-35E is one of the least pleasant places to find yourself, because the shoulder is narrow and the traffic is fast and constant. If there is a serviceable spare in the vehicle, we fit it for you while you stay safely inside the car.",
    scenarios: [
      "A blowout on I-35E partway between Dallas and Denton.",
      "A trailer or towing vehicle with a flat after a lake trip.",
      "A slow puncture that finally went down in a lot off Main Street.",
      "A locking wheel nut whose key went missing years ago.",
    ],
    localContext:
      "I-35E runs the full length of Lewisville and carries both metroplex commuting and longer-distance traffic heading north, which is why so many of the flats we attend here are sudden failures at speed rather than tires found soft in the morning. FM 1171, FM 407 and FM 3040 account for most of the rest.",
    faqs: [
      {
        q: "Can you reach a vehicle on the I-35E shoulder?",
        a: "Yes. Give dispatch the nearest exit number and the direction of travel — on a highway that is far more useful than a street address, and it gets a driver to you sooner.",
      },
      {
        q: "What if the flat is on a trailer rather than the car?",
        a: "Tell dispatch when you call. Trailer wheels differ from car wheels and we would rather confirm what is needed before a driver sets off.",
      },
      {
        q: "Should I get out and look at the damage?",
        a: "Not on a live highway shoulder. Stay belted in with hazards on and describe what you felt or heard to dispatch instead. Your driver will assess it when they arrive.",
      },
    ],
    primaryKeyword: "flat tire change Lewisville TX",
    secondaryKeywords: ["flat tire service Lewisville", "tire change near me Lewisville", "roadside tire change Lewisville TX"],
    longTail: ["flat tire on I-35E Lewisville", "24 hour tire change Lewisville", "change flat tire Lewisville TX"],
    intent: "Emergency, highway-safety, through-traffic.",
    sourceUrls: ["allhoursroadside.com/lewisville-tire-change-service/"],
  },
  {
    city: "lewisville",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in Lewisville, TX",
    title: "Mobile Tire Repair Lewisville TX",
    metaDescription:
      "Nail in your tire in Lewisville? TRA repairs punctures on site with a plug or patch where the damage allows, so your spare stays in the trunk.",
    intro:
      "On a road like I-35E, a slow leak you have been topping up for a fortnight is a blowout waiting for a moment that suits it. Where the damage is in the tread and within repairable limits, we repair the tire where the car is parked and leave the spare where it belongs.",
    scenarios: [
      "A tire that needs air before every longer drive.",
      "A screw picked up on the highway that has started to weep.",
      "A pressure warning that will not stay cleared.",
      "A puncture found before heading north on I-35E.",
    ],
    localContext:
      "Lewisville's share of I-35E carries constant heavy traffic between Dallas and Denton, and highway debris is the usual source of the punctures we repair here. Catching one as a slow leak in a driveway is a far better outcome than meeting it at highway speed on a narrow shoulder.",
    faqs: [
      {
        q: "Is it worth repairing rather than replacing?",
        a: "If the damage is in the tread and within repairable limits, a proper repair is durable and much cheaper than a new tire. Your driver will tell you honestly which situation you are in.",
      },
      {
        q: "Should I pull the screw out?",
        a: "No. While it sits in the tread it is partly sealing the hole. Removing it usually turns a slow leak into a flat before help arrives.",
      },
      {
        q: "Can you repair a trailer tire?",
        a: "Mention it when you call. Trailer tires are not always the same proposition as car tires, and dispatch would rather confirm it before sending a driver.",
      },
    ],
    primaryKeyword: "mobile tire repair Lewisville TX",
    secondaryKeywords: ["tire repair Lewisville", "puncture repair Lewisville TX", "roadside tire repair Lewisville"],
    longTail: ["nail in tire Lewisville TX", "mobile tire repair near me Lewisville", "tire losing air Lewisville"],
    intent: "Time-sensitive, preventive, mobile.",
    sourceUrls: ["allhoursroadside.com/lewisville-mobile-tire-service/"],
  },

  // ===================== THE COLONY =====================
  {
    city: "the-colony",
    service: "lockout",
    h1: "Car Lockout Service in The Colony, TX",
    title: "Car Lockout Service The Colony TX",
    metaDescription:
      "Locked out in The Colony? TRA opens your car without damage — along FM 423, the Sam Rayburn Tollway or near the lake. Local dispatch, day or night.",
    intro:
      "The Colony is a long, narrow city wrapped around the edge of a lake, and that shape means a locked car can leave you some distance from anywhere useful. A driver comes to the vehicle, confirms it is yours, and opens it without damage.",
    scenarios: [
      "Keys locked in at a lakeside parking area after an afternoon out.",
      "A fob that stopped responding in a lot along FM 423.",
      "Keys shut in the trunk after loading for a day on the water.",
      "A second vehicle whose fob battery died while it sat in the driveway.",
    ],
    localContext:
      "The Colony has around 23 miles of Lewisville Lake shoreline inside its boundaries, and the road network reflects that: the Sam Rayburn Tollway runs across the city and FM 423 serves as its spine. Those two routes carry nearly everything, so telling dispatch which one you are near usually narrows your position considerably.",
    faqs: [
      {
        q: "How do I describe where I am near the lake?",
        a: "Give dispatch the nearest cross street on FM 423 or the tollway, or the name of the parking area. Shoreline access points can look alike from a map, so a landmark helps more than coordinates here.",
      },
      {
        q: "Do I have to prove the car is mine?",
        a: "Yes. The driver will ask for ID or another way to confirm you are entitled to the vehicle before opening it — a short check that is the reason nobody else can have your car opened.",
      },
      {
        q: "Can you open the car if the fob is dead?",
        a: "Yes. A dead fob is one of the most common reasons people call and it does not change how the vehicle is opened.",
      },
    ],
    primaryKeyword: "car lockout service The Colony TX",
    secondaryKeywords: ["locked out of car The Colony", "car unlock The Colony TX", "auto lockout The Colony"],
    longTail: ["locked keys in car The Colony TX", "car unlock near me The Colony", "24 hour lockout The Colony"],
    intent: "Emergency, near-me, lakeside access.",
    sourceUrls: ["allhoursroadside.com/the-colony-auto-lockout-help/"],
  },
  {
    city: "the-colony",
    service: "jump-start",
    h1: "Jump Start Service in The Colony, TX",
    title: "Jump Start Service The Colony TX",
    metaDescription:
      "Dead battery in The Colony? TRA brings a jump start to you along FM 423, the Sam Rayburn Tollway or at home. Local DFW dispatch, 24/7.",
    intro:
      "Cars that only come out at weekends go flat, and The Colony has a lot of them — boats, trailers and second vehicles that sit between trips to the water. A jump start brings the vehicle back where it stands, without a recovery truck.",
    scenarios: [
      "A towing vehicle that has not moved since the last trip to the lake.",
      "A second car that only gets driven at weekends.",
      "Lights left on at a shoreline parking area.",
      "A battery that has cranked slowly every cold morning this week.",
    ],
    localContext:
      "With roughly 23 miles of Lewisville Lake shoreline inside the city, The Colony has an unusual share of vehicles that stand still for long stretches — the trailer tow car, the weekend vehicle, the boat hauler. Standing is what flattens batteries. The Sam Rayburn Tollway and FM 423 carry the daily traffic that does not.",
    faqs: [
      {
        q: "The car has not moved in a month — will a jump work?",
        a: "Often it will. A sound battery that discharged from standing takes a jump and recharges as you drive. One at the end of its life usually will not, and your driver will tell you which it looked like.",
      },
      {
        q: "Can you jump start a vehicle with a trailer attached?",
        a: "Tell dispatch when you call so the driver knows what they are coming to. Access around a hitched trailer is different from a car on its own, especially at a boat ramp.",
      },
      {
        q: "Should I keep cranking while I wait?",
        a: "No. Each attempt takes more from a battery that is already low and makes the jump harder. Switch everything off and wait for the driver.",
      },
    ],
    primaryKeyword: "jump start service The Colony TX",
    secondaryKeywords: ["dead battery The Colony", "jump start near me The Colony", "car won't start The Colony TX"],
    longTail: ["24 hour jump start The Colony TX", "mobile jump start The Colony", "car battery died The Colony"],
    intent: "Emergency, mobile, seasonal-vehicle.",
    sourceUrls: ["allhoursroadside.com/the-colony-jump-start-service/"],
  },
  {
    city: "the-colony",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in The Colony, TX",
    title: "Car Battery Replacement The Colony TX",
    metaDescription:
      "Need a car battery in The Colony? TRA brings it to you and fits it on site, with installation quoted for your vehicle and a 1-year warranty.",
    intro:
      "Batteries on vehicles that stand still age differently from batteries on daily drivers — they are rarely fully charged, and they fail earlier. We bring the replacement to the vehicle and fit it where it is parked. The battery price is published; installation is quoted for your specific car.",
    scenarios: [
      "A weekend or towing vehicle that now needs jumping every time it comes out.",
      "A car that failed to start twice in the same month.",
      "Charging symptoms — dim lights, slow windows, a resetting clock.",
      "A battery you would rather replace before the season starts than during it.",
    ],
    localContext:
      "The Colony's mix of daily commuting on the Sam Rayburn Tollway and FM 423 alongside seasonal vehicles that sit for weeks between trips to Lewisville Lake produces more battery failures than a purely commuter suburb would. A battery that is never fully recharged does not last as long as one that runs a highway commute every day.",
    faqs: [
      {
        q: "Can you fit a battery to a vehicle with a trailer attached?",
        a: "Usually yes, but tell dispatch so the driver knows the situation before arriving. Working space around a hitched vehicle is different from a car parked in a driveway.",
      },
      {
        q: "Why is installation quoted rather than published?",
        a: "Because access varies so much between vehicles. Some batteries take minutes to reach and others need panels or a seat removed, so we quote the job for your car rather than publish an average.",
      },
      {
        q: "What warranty is included?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice — that is what warranty service is processed against.",
      },
    ],
    primaryKeyword: "car battery replacement The Colony TX",
    secondaryKeywords: ["mobile battery replacement The Colony", "car battery service The Colony TX", "battery installation The Colony"],
    longTail: ["mobile car battery The Colony TX", "battery replaced at home The Colony", "car battery keeps dying The Colony"],
    intent: "Commercial, convenience-led, seasonal-vehicle.",
    sourceUrls: [
      "allhoursroadside.com/the-colony-battery-replacement-service/",
      "allhoursroadside.com/the-colony-car-battery-service/",
    ],
  },
  {
    city: "the-colony",
    service: "flat-tire-change",
    h1: "Flat Tire Change in The Colony, TX",
    title: "Flat Tire Change The Colony TX",
    metaDescription:
      "Flat tire in The Colony? If you have a usable spare, TRA fits it where you are — FM 423, the tollway or near the lake. Call for roadside help.",
    intro:
      "With a serviceable spare in the vehicle, a flat is a short delay. A driver comes to you, fits the spare and torques it correctly, and you carry on — which matters more than usual here, because the places people get flats are not always places you can comfortably wait.",
    scenarios: [
      "A flat at a lakeside parking area some way from the main road.",
      "A blowout on the Sam Rayburn Tollway at speed.",
      "A trailer tire that has gone down after a day on the water.",
      "A slow puncture that finished overnight in the driveway.",
    ],
    localContext:
      "The Colony's road network is unusually simple — the Sam Rayburn Tollway across the city and FM 423 running its length — so describing where you are is normally easy. Access to shoreline parking along the 23 miles of Lewisville Lake within the city is the part worth being precise about when you call.",
    faqs: [
      {
        q: "Can you reach a vehicle at a boat ramp or shoreline lot?",
        a: "Usually yes, but tell dispatch exactly which access point you used. Lakeside parking areas can be hard to distinguish from one another, and that detail saves real time.",
      },
      {
        q: "What if the flat is on the trailer?",
        a: "Say so when you call. Trailer wheels are not always the same job as car wheels and dispatch would rather confirm it before a driver sets off.",
      },
      {
        q: "What if there is no usable spare?",
        a: "Then fitting one is not an option and the answer is a replacement tire supplied by us or a tow. Tell dispatch so the right help is sent first time.",
      },
    ],
    primaryKeyword: "flat tire change The Colony TX",
    secondaryKeywords: ["flat tire service The Colony", "tire change near me The Colony", "roadside tire change The Colony TX"],
    longTail: ["flat tire The Colony TX help", "24 hour tire change The Colony", "change flat tire The Colony"],
    intent: "Emergency, access-sensitive, near-me.",
    sourceUrls: ["allhoursroadside.com/the-colony-tire-change-service/"],
  },
  {
    city: "the-colony",
    service: "tire-repair-plug-patch",
    h1: "Mobile Tire Repair in The Colony, TX",
    title: "Mobile Tire Repair The Colony TX",
    metaDescription:
      "Nail in your tire in The Colony? TRA repairs punctures on site with a plug or patch where the damage allows, so your spare stays in the trunk.",
    intro:
      "A tire that has been losing air slowly is worth dealing with before it becomes a flat somewhere inconvenient. Where the puncture is in the tread and within repairable limits, we repair it where the vehicle is standing and leave your spare untouched.",
    scenarios: [
      "A tire on a towing vehicle that is always a little soft.",
      "A screw picked up along FM 423 that has started to weep air.",
      "A pressure warning that returns every few days.",
      "A puncture noticed before hitching up for a trip.",
    ],
    localContext:
      "Most of The Colony's traffic funnels onto the Sam Rayburn Tollway and FM 423, which concentrates both the wear and the debris. Vehicles that tow regularly tend to notice a soft tire before a daily driver would, because the handling change is more obvious under load.",
    faqs: [
      {
        q: "Can you repair a tire on a trailer?",
        a: "Mention it when you call. Trailer tires are not always the same proposition as car tires, and dispatch would rather establish that before sending a driver.",
      },
      {
        q: "Should I pull the screw out first?",
        a: "No — leave it in. It is partly sealing the hole, and removing it usually turns a slow leak into a flat tire before anyone arrives.",
      },
      {
        q: "Will a repaired tire be safe for towing?",
        a: "A correct tread repair is durable under normal loads. If your driver has any doubt about the tire staying in service, especially on a vehicle that tows, they will tell you rather than repair it and leave.",
      },
    ],
    primaryKeyword: "mobile tire repair The Colony TX",
    secondaryKeywords: ["tire repair The Colony", "puncture repair The Colony TX", "roadside tire repair The Colony"],
    longTail: ["nail in tire The Colony TX", "mobile tire repair near me The Colony", "tire losing air The Colony"],
    intent: "Time-sensitive, preventive, towing-aware.",
    sourceUrls: [
      "allhoursroadside.com/the-colony-mobile-tire-service/",
      "allhoursroadside.com/the-colony-roadside-tire-service/",
    ],
  },

  // ===================== ADDISON =====================
  // Three pages only: All Hours has no Addison battery or tire-repair page,
  // so there was no source intent to analyse for those two.
  {
    city: "addison",
    service: "lockout",
    h1: "Car Lockout Service in Addison, TX",
    title: "Car Lockout Service Addison TX",
    metaDescription:
      "Locked out in Addison? TRA opens your car without damage — Belt Line Road, the Dallas North Tollway or near Addison Airport. Local dispatch, day or night.",
    intro:
      "Addison packs a great deal of parking into a small town, and a locked car in one of those lots tends to happen when you are already due somewhere. A driver comes to the vehicle, confirms it is yours and opens it without damage.",
    scenarios: [
      "Keys locked in a restaurant or office lot along Belt Line Road.",
      "A fob that stopped responding at a parking garage off the Dallas North Tollway.",
      "Keys shut in the trunk, which is a different job from a door and priced separately.",
      "A vehicle left at Addison Airport whose fob died while you were away.",
    ],
    localContext:
      "Addison is a small town almost entirely surrounded by Dallas, with Carrollton to the west and Farmers Branch to the west and south. The Dallas North Tollway runs through it, with Belt Line Road and Keller Springs Road carrying the local traffic, and Addison Airport — a business-aviation field — takes up roughly an eighth of the town's area.",
    faqs: [
      {
        q: "Can you reach a car parked at Addison Airport?",
        a: "Tell dispatch exactly where the vehicle is standing. We hold no special airport access or authorization, so they will tell you plainly whether a driver can reach that particular spot before you wait on one.",
      },
      {
        q: "Do you come out to restaurant and bar parking?",
        a: "Yes, and in Addison that is a good share of the calls. Give dispatch the lot and roughly where in it the car is parked.",
      },
      {
        q: "Will I need to prove the car is mine?",
        a: "Yes. The driver asks for ID or another way to confirm you are entitled to the vehicle before opening it — a short check, and the reason nobody else can have your car opened.",
      },
    ],
    primaryKeyword: "car lockout service Addison TX",
    secondaryKeywords: ["locked out of car Addison", "car unlock Addison TX", "auto lockout Addison"],
    longTail: ["locked keys in car Addison TX", "car unlock near me Addison", "24 hour lockout Addison"],
    intent: "Emergency, near-me, dense-parking.",
    sourceUrls: ["allhoursroadside.com/addison-auto-lockout-help/"],
  },
  {
    city: "addison",
    service: "jump-start",
    h1: "Jump Start Service in Addison, TX",
    title: "Jump Start Service Addison TX",
    metaDescription:
      "Dead battery in Addison? TRA brings a jump start to Belt Line Road, the Dallas North Tollway or Addison Airport parking. Local DFW dispatch, 24/7.",
    intro:
      "A car that will not turn over at the end of an evening is almost always a flat battery rather than a fault. We come to the vehicle, jump it, and let you drive home instead of leaving it where it stands overnight.",
    scenarios: [
      "A car left at Addison Airport while you travelled.",
      "Lights left on through a long dinner along Belt Line Road.",
      "A vehicle that sat in an office lot across a long weekend.",
      "A battery that has cranked slowly each cold morning this week.",
    ],
    localContext:
      "Addison's defining feature for this kind of call is Addison Airport, which occupies around an eighth of the town and leaves vehicles standing for days at a time. The Dallas North Tollway and Belt Line Road carry everything else.",
    faqs: [
      {
        q: "My car sat while I was away — will a jump be enough?",
        a: "Usually. A sound battery that discharged from standing will take a jump and recharge as you drive. One near the end of its life often will not, and your driver will say which it looked like.",
      },
      {
        q: "Can you get to a vehicle in airport parking?",
        a: "Tell dispatch exactly where it is. We have no special airport access, so they will be straight with you about whether a driver can reach that spot.",
      },
      {
        q: "Should I keep trying the ignition?",
        a: "No. Each attempt draws more from a battery that is already low and makes the jump harder. Switch the lights and stereo off and wait.",
      },
    ],
    primaryKeyword: "jump start service Addison TX",
    secondaryKeywords: ["dead battery Addison", "jump start near me Addison", "car won't start Addison TX"],
    longTail: ["24 hour jump start Addison TX", "mobile jump start Addison", "car battery died Addison"],
    intent: "Emergency, mobile, standing-vehicle.",
    sourceUrls: ["allhoursroadside.com/addison-jump-start-service/"],
  },
  {
    city: "addison",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Addison, TX",
    title: "Flat Tire Change Addison TX",
    metaDescription:
      "Flat tire in Addison? If you have a usable spare, TRA fits it where you are — Belt Line Road, the Tollway or a parking garage. Call for roadside help.",
    intro:
      "With a serviceable spare in the vehicle, a flat is a short delay rather than a ruined evening. A driver comes to you, fits the spare and torques it correctly, and you drive on.",
    scenarios: [
      "A flat found in a Belt Line Road lot after dinner.",
      "A blowout on the Dallas North Tollway at speed.",
      "A tire that went down while the car stood at the airport.",
      "A locking wheel nut with no key, which has to come off before the wheel will.",
    ],
    localContext:
      "The Dallas North Tollway is the fast road through Addison and the one where sudden failures happen; Belt Line Road and Keller Springs Road account for most of the rest, usually as tires found flat rather than tires that failed.",
    faqs: [
      {
        q: "Can you change a tire inside a parking garage?",
        a: "Usually yes, if there is room to work safely around the car. Low-clearance garages can be a constraint, so mention it to dispatch when you call.",
      },
      {
        q: "What if there is no spare in the car?",
        a: "Then fitting one is not an option, and the answer is a replacement tire supplied by us or a tow. Say so when you call so the right help is sent first time.",
      },
      {
        q: "How far can I drive on the spare?",
        a: "Most spares are limited in speed and distance. Your driver will tell you what yours is rated for so you can plan the next step.",
      },
    ],
    primaryKeyword: "flat tire change Addison TX",
    secondaryKeywords: ["flat tire service Addison", "tire change near me Addison", "roadside tire change Addison TX"],
    longTail: ["flat tire Addison TX help", "24 hour tire change Addison", "change flat tire Addison"],
    intent: "Emergency, near-me.",
    sourceUrls: ["allhoursroadside.com/addison-tire-change-service/"],
  },

  // ===================== ALLEN =====================
  // Three pages: no All Hours jump start or tire-repair page for Allen.
  // Allen also has the thinnest verified local data in this batch — two
  // corridors, no districts, no airport — so its local sections are short by
  // design rather than padded out to match the other cities.
  {
    city: "allen",
    service: "lockout",
    h1: "Car Lockout Service in Allen, TX",
    title: "Car Lockout Service Allen TX",
    metaDescription:
      "Locked out in Allen? TRA opens your car without damage, anywhere off US-75 or the Sam Rayburn Tollway. Local DFW dispatch, day or night.",
    intro:
      "A locked car in Allen usually means a wait somewhere with little around it, because the spare key is at home and home is not walking distance. A driver comes to the vehicle, checks it is yours, and opens it without damage.",
    scenarios: [
      "Keys locked in at a retail lot off US-75.",
      "A fob battery that died while the car sat through a working day.",
      "Keys shut in the trunk after loading, which is quoted separately from a door.",
    ],
    localContext:
      "Allen sits in Collin County between Plano, McKinney and Frisco, with US-75 Central Expressway running north to south and the Sam Rayburn Tollway crossing the top of the city along the McKinney border.",
    faqs: [
      {
        q: "How quickly can a driver reach Allen?",
        a: "Allen borders three other areas we cover, so the driver sent is usually already working nearby. Dispatch is local to DFW and will tell you what to expect rather than quote a number that ignores where you are.",
      },
      {
        q: "Can you open it if the fob battery is dead?",
        a: "Yes. A dead fob is one of the most common reasons people call, and it does not change how the vehicle is opened.",
      },
      {
        q: "Does opening the car damage the lock?",
        a: "Our drivers use non-destructive entry wherever the vehicle allows it. If a car cannot be opened safely without damage, the driver tells you before starting rather than after.",
      },
    ],
    primaryKeyword: "car lockout service Allen TX",
    secondaryKeywords: ["locked out of car Allen", "car unlock Allen TX", "auto lockout Allen"],
    longTail: ["locked keys in car Allen TX", "car unlock near me Allen", "24 hour lockout Allen"],
    intent: "Emergency, near-me.",
    sourceUrls: ["allhoursroadside.com/allen-auto-lockout-help/"],
  },
  {
    city: "allen",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Allen, TX",
    title: "Car Battery Replacement Allen TX",
    metaDescription:
      "Need a car battery in Allen? TRA brings it to you and fits it on site, with installation quoted for your vehicle and a 1-year warranty.",
    intro:
      "The awkward part of replacing a battery is getting a car that will not start to a workshop. We remove that by bringing the replacement to the vehicle. The battery price is published; installation is quoted for your specific car, because reaching the battery is quick on some models and slow on others.",
    scenarios: [
      "A battery that has already needed jumping once this month.",
      "A car that will not start after standing over a long weekend.",
      "Dim lights or slow windows pointing at charging rather than the engine.",
      "An ageing battery you would rather replace before a cold snap than during one.",
    ],
    localContext:
      "Allen's driving is mostly US-75 commuting with the Sam Rayburn Tollway across the north of the city. A long daily run keeps a weak battery looking healthy, so the failure usually shows up the first morning after the car has stood for a few days.",
    faqs: [
      {
        q: "Do you come out to home addresses?",
        a: "Yes — most battery work in Allen happens on a driveway, where the car has failed to start first thing.",
      },
      {
        q: "Why is installation quoted rather than published?",
        a: "Because the work genuinely differs by vehicle. Some batteries are reached in minutes, others need trim or a seat removed. Quoting yours is more honest than an average figure.",
      },
      {
        q: "What does the warranty cover?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice — warranty service is processed against it.",
      },
    ],
    primaryKeyword: "car battery replacement Allen TX",
    secondaryKeywords: ["mobile battery replacement Allen", "car battery service Allen TX", "battery installation Allen"],
    longTail: ["mobile car battery Allen TX", "battery replaced at home Allen", "car battery keeps dying Allen"],
    intent: "Commercial, convenience-led.",
    sourceUrls: ["allhoursroadside.com/allen-battery-replacement-service/"],
  },
  {
    city: "allen",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Allen, TX",
    title: "Flat Tire Change Allen TX",
    metaDescription:
      "Flat tire in Allen? If you have a usable spare, TRA fits it where you are — US-75 shoulders, retail lots or at home. Call for roadside help.",
    intro:
      "If there is a usable spare in the car, a flat is a short job for someone with the right equipment. We come to you, fit it and torque it properly, so you are not changing a wheel beside Central Expressway.",
    scenarios: [
      "A blowout on a US-75 shoulder in moving traffic.",
      "A flat found in a retail lot with the car already loaded.",
      "A slow puncture that finally went down overnight.",
    ],
    localContext:
      "US-75 carries Allen's fast traffic, with the Sam Rayburn Tollway along the northern edge. Sudden failures tend to happen on those two; tires found soft in the morning come from everywhere else.",
    faqs: [
      {
        q: "Is it safe to change a wheel on the US-75 shoulder?",
        a: "We would advise against it. Stay belted in with hazards on and let the driver come to you — standing beside a car on Central Expressway is the genuinely dangerous part.",
      },
      {
        q: "Could the tire be repaired instead?",
        a: "Often, if the damage is in the tread rather than the sidewall. Tire repair is a separate service and your driver can advise once they see it.",
      },
      {
        q: "What if the spare is flat too?",
        a: "It happens, since spares sit untouched for years. If you are unsure, tell dispatch so a driver is not sent for a job that cannot be finished.",
      },
    ],
    primaryKeyword: "flat tire change Allen TX",
    secondaryKeywords: ["flat tire service Allen", "tire change near me Allen", "roadside tire change Allen TX"],
    longTail: ["flat tire on US-75 Allen", "24 hour tire change Allen", "change flat tire Allen TX"],
    intent: "Emergency, roadside-safety.",
    sourceUrls: ["allhoursroadside.com/allen-tire-change-service/"],
  },

  // ===================== CARROLLTON =====================
  // Four pages: no All Hours tire-repair page for Carrollton.
  {
    city: "carrollton",
    service: "lockout",
    h1: "Car Lockout Service in Carrollton, TX",
    title: "Car Lockout Service Carrollton TX",
    metaDescription:
      "Locked out in Carrollton? TRA opens your car without damage — off I-35E, the Bush Turnpike or the Sam Rayburn Tollway. Local dispatch, day or night.",
    intro:
      "Carrollton straddles three counties and several major roads, which means a locked car here could be almost anywhere. A driver comes to wherever the vehicle has stopped, confirms it is yours and opens it without damage.",
    scenarios: [
      "Keys locked in at a stop off I-35E partway through a journey.",
      "A fob that stopped responding in a workplace lot during a shift.",
      "Keys shut in the trunk after loading, which is priced separately from a door.",
      "A door that locked itself with the engine running on a cold morning.",
    ],
    localContext:
      "Carrollton spans Dallas, Denton and Collin counties — more than any other city we serve except Dallas itself — and is connected by I-35E, the President George Bush Turnpike and the Sam Rayburn Tollway at the far north of the city. It also borders five areas we cover: The Colony, Farmers Branch, Coppell, Addison and Lewisville.",
    faqs: [
      {
        q: "How quickly can a driver reach Carrollton?",
        a: "Carrollton borders five other areas we cover, so there is usually a driver working nearby. Dispatch is local to DFW rather than an out-of-state call center and will tell you what is realistic for your location.",
      },
      {
        q: "Can you come to a workplace parking lot?",
        a: "Yes. Give dispatch the building and the row or level so the driver reaches the car rather than the entrance.",
      },
      {
        q: "Do I have to be with the vehicle?",
        a: "Yes — somebody who can show entitlement to it needs to be there, because that check happens before the car is opened.",
      },
    ],
    primaryKeyword: "car lockout service Carrollton TX",
    secondaryKeywords: ["locked out of car Carrollton", "car unlock Carrollton TX", "auto lockout Carrollton"],
    longTail: ["locked keys in car Carrollton TX", "car unlock near me Carrollton", "24 hour lockout Carrollton"],
    intent: "Emergency, near-me, 24-hour.",
    sourceUrls: ["allhoursroadside.com/carrollton-auto-lockout-help/"],
  },
  {
    city: "carrollton",
    service: "jump-start",
    h1: "Jump Start Service in Carrollton, TX",
    title: "Jump Start Service Carrollton TX",
    metaDescription:
      "Car won't start in Carrollton? TRA brings a jump start to you on I-35E, the Bush Turnpike or at home. Local DFW dispatch, 24/7. Call now.",
    intro:
      "A car that clicks instead of starting has run its battery down far more often than it has broken anything. A jump start settles it where the vehicle stands, and you drive on rather than waiting for a recovery truck.",
    scenarios: [
      "A vehicle that sat through a long weekend without being started.",
      "Lights left on in a workplace lot during a shift.",
      "A car that will not restart after a stop on I-35E.",
      "A battery that has cranked a little slower every morning this week.",
    ],
    localContext:
      "Carrollton's traffic runs on I-35E through the middle of the city, with the President George Bush Turnpike crossing it and the Sam Rayburn Tollway at the northern end. Long highway commuting usually keeps a battery healthy, so the failures here tend to follow a period of standing rather than a period of driving.",
    faqs: [
      {
        q: "Can you reach me on an I-35E shoulder?",
        a: "Yes. Give dispatch the nearest exit number and your direction of travel — on a highway that locates you far better than a street address.",
      },
      {
        q: "Will the charge hold after you leave?",
        a: "If the battery is sound, driving recharges it. If it is failing, it may not survive being switched off again. Your driver will tell you which it appeared to be.",
      },
      {
        q: "What should I do before the driver arrives?",
        a: "Stop turning the key and switch off the lights, stereo and climate control. Repeated attempts take more from a battery that is already low.",
      },
    ],
    primaryKeyword: "jump start service Carrollton TX",
    secondaryKeywords: ["dead battery Carrollton", "jump start near me Carrollton", "car won't start Carrollton TX"],
    longTail: ["24 hour jump start Carrollton TX", "mobile jump start Carrollton", "car battery died Carrollton"],
    intent: "Emergency, mobile, 24-hour.",
    sourceUrls: ["allhoursroadside.com/carrollton-jump-start-service/"],
  },
  {
    city: "carrollton",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Carrollton, TX",
    title: "Car Battery Replacement Carrollton TX",
    metaDescription:
      "Car battery failing in Carrollton? TRA brings the battery to you and fits it on site, with installation quoted for your vehicle and a 1-year warranty.",
    intro:
      "Once a battery has been jumped more than once, it is telling you it will not last the winter. We bring the replacement to the vehicle and fit it where it stands. The battery price is published; installation is quoted for your car, because access differs enormously between models.",
    scenarios: [
      "A second jump start on the same vehicle inside a month.",
      "A car that will not start after standing over a holiday.",
      "Electrical symptoms — dim headlights, slow windows, a resetting clock.",
      "A battery old enough that you would rather replace it on your own schedule.",
    ],
    localContext:
      "Carrollton's position across Dallas, Denton and Collin counties means a lot of its drivers commute some distance on I-35E or the Bush Turnpike. Those long runs hide a declining battery for months; it usually announces itself the first time the car stands for several days.",
    faqs: [
      {
        q: "Can you fit it at my workplace?",
        a: "Yes, provided the vehicle is somewhere a driver can work safely. A good share of Carrollton battery work happens in employee parking during a shift.",
      },
      {
        q: "Why is installation quoted separately?",
        a: "Because it genuinely varies. Some batteries sit on top of the engine; others are under a seat or behind panels. A single published figure would be wrong for a large share of cars.",
      },
      {
        q: "Do you need the VIN?",
        a: "No. Year, make and model are enough to bring the right battery. The VIN only confirms the exact fit if you can reach it easily.",
      },
    ],
    primaryKeyword: "car battery replacement Carrollton TX",
    secondaryKeywords: ["mobile battery replacement Carrollton", "car battery service Carrollton TX", "battery installation Carrollton"],
    longTail: ["mobile car battery Carrollton TX", "battery replaced at home Carrollton", "car battery keeps dying Carrollton"],
    intent: "Commercial, convenience-led.",
    sourceUrls: ["allhoursroadside.com/carrollton-battery-replacement-service/"],
  },
  {
    city: "carrollton",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Carrollton, TX",
    title: "Flat Tire Change Carrollton TX",
    metaDescription:
      "Flat tire in Carrollton? If you have a usable spare, TRA fits it where you are — I-35E shoulders, the Tollway or at home. Call for roadside help.",
    intro:
      "A flat with a good spare in the trunk is a short job for somebody with the right tools and a safe way to lift the car. We come to you, fit it and torque it to specification, and you carry on.",
    scenarios: [
      "A blowout on I-35E where the shoulder is narrow and the traffic constant.",
      "A flat found in a workplace lot at the end of a shift.",
      "A slow puncture that gave up overnight in a driveway.",
      "A wheel that will not move because the locking nut key is missing.",
    ],
    localContext:
      "I-35E and the President George Bush Turnpike carry Carrollton's fast traffic, with the Sam Rayburn Tollway at the top of the city. Sudden tire failures here are mostly highway events; the ones found in the morning come from quieter streets.",
    faqs: [
      {
        q: "Can you reach a car on the I-35E shoulder?",
        a: "Yes. Give dispatch the nearest exit number and direction of travel, and stay inside the vehicle with hazards on until the driver arrives.",
      },
      {
        q: "What if I have no spare?",
        a: "Then the spare cannot be fitted, and the options are a replacement tire supplied by us or a tow. Tell dispatch so the right help is sent first time.",
      },
      {
        q: "How long can I run on the spare afterwards?",
        a: "Most spares are limited in speed and distance. Your driver will tell you what yours is rated for so you can plan rather than guess.",
      },
    ],
    primaryKeyword: "flat tire change Carrollton TX",
    secondaryKeywords: ["flat tire service Carrollton", "tire change near me Carrollton", "roadside tire change Carrollton TX"],
    longTail: ["flat tire on I-35E Carrollton", "24 hour tire change Carrollton", "change flat tire Carrollton TX"],
    intent: "Emergency, highway-safety.",
    sourceUrls: ["allhoursroadside.com/carrollton-tire-change-service/"],
  },

  // ===================== COPPELL =====================
  // Three pages: no All Hours jump start or tire-repair page for Coppell.
  {
    city: "coppell",
    service: "lockout",
    h1: "Car Lockout Service in Coppell, TX",
    title: "Car Lockout Service Coppell TX",
    metaDescription:
      "Locked out in Coppell? TRA opens your car without damage, anywhere inside the ring of freeways that bound the city. Local dispatch, day or night.",
    intro:
      "Coppell is unusual among the cities we serve: no freeway actually runs through it. That makes it quiet to live in and slightly awkward to reach quickly, which is worth knowing when you are standing beside a locked car. A driver comes out, confirms the vehicle is yours and opens it without damage.",
    scenarios: [
      "Keys locked in at a distribution or office site near the airport boundary.",
      "A fob that stopped responding in a residential lot after dark.",
      "Keys shut in the trunk after loading, which is quoted separately from a door.",
    ],
    localContext:
      "No freeway crosses Coppell. Instead it is bounded by them: TX-121 and the Sam Rayburn Tollway to the west and north, I-635 to the south, and the President George Bush Turnpike and I-35E to the east. Part of Dallas/Fort Worth International Airport property lies within the city limits, and Coppell borders Grapevine, Lewisville, Carrollton, Irving and Dallas.",
    faqs: [
      {
        q: "Does it take longer to reach Coppell?",
        a: "Because no freeway runs through the city, a driver comes in from one of the roads that bound it. Dispatch is local and will tell you honestly what to expect rather than quote an optimistic number.",
      },
      {
        q: "Can you reach a car on airport property?",
        a: "Part of the airport lies inside Coppell's limits, but we hold no special airport access or authorization. Tell dispatch exactly where the vehicle is and they will say plainly whether a driver can reach it.",
      },
      {
        q: "Will opening the car damage it?",
        a: "Our drivers use non-destructive entry wherever the vehicle allows. If yours cannot be opened safely without damage, you will be told before anything starts.",
      },
    ],
    primaryKeyword: "car lockout service Coppell TX",
    secondaryKeywords: ["locked out of car Coppell", "car unlock Coppell TX", "auto lockout Coppell"],
    longTail: ["locked keys in car Coppell TX", "car unlock near me Coppell", "24 hour lockout Coppell"],
    intent: "Emergency, near-me, access-aware.",
    sourceUrls: ["allhoursroadside.com/coppell-auto-lockout-help/"],
  },
  {
    city: "coppell",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Coppell, TX",
    title: "Car Battery Replacement Coppell TX",
    metaDescription:
      "Need a car battery in Coppell? TRA brings it to the car and fits it on site. Installation quoted for your vehicle, 1-year warranty included.",
    intro:
      "Getting a car that will not start to a workshop is the hard part of a battery replacement, and it is harder in a city with no freeway through it. We bring the battery to the vehicle instead. The battery price is published; installation is quoted for your car.",
    scenarios: [
      "A battery that has needed jumping more than once recently.",
      "A car that will not start after standing through a trip away.",
      "Charging symptoms — dim lights, sluggish windows, a clock that resets.",
      "A battery you would rather replace before winter than during it.",
    ],
    localContext:
      "Coppell sits inside a ring of major roads rather than on one — TX-121 and the Sam Rayburn Tollway, I-635, the President George Bush Turnpike and I-35E all bound the city without crossing it. Commutes out to those roads are long enough to keep a tired battery looking healthy until the car stands for a few days.",
    faqs: [
      {
        q: "Do you come out to home addresses in Coppell?",
        a: "Yes — most battery work here happens on a driveway, where the car has failed to start in the morning.",
      },
      {
        q: "Why is installation quoted rather than published?",
        a: "Because the job differs by vehicle. Some batteries take minutes to reach; others need panels or a seat removed. We quote yours rather than publish an average that would be wrong for many cars.",
      },
      {
        q: "What warranty is included?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice, as warranty service is processed against it.",
      },
    ],
    primaryKeyword: "car battery replacement Coppell TX",
    secondaryKeywords: ["mobile battery replacement Coppell", "car battery service Coppell TX", "battery installation Coppell"],
    longTail: ["mobile car battery Coppell TX", "battery replaced at home Coppell", "car battery keeps dying Coppell"],
    intent: "Commercial, convenience-led.",
    sourceUrls: ["allhoursroadside.com/coppell-battery-replacement-service/"],
  },
  {
    city: "coppell",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Coppell, TX",
    title: "Flat Tire Change Coppell TX",
    metaDescription:
      "Flat tire in Coppell? If you have a usable spare, TRA fits it where you are — residential streets or the freeways that bound the city.",
    intro:
      "With a usable spare in the vehicle, a flat is a short delay. A driver comes to you, fits the spare and torques it properly, and you carry on without working at the roadside yourself.",
    scenarios: [
      "A flat found on a residential street in the morning.",
      "A blowout on one of the freeways bounding the city, on the way in or out.",
      "A tire that went down while the car stood near the airport boundary.",
    ],
    localContext:
      "Because no freeway runs through Coppell, sudden tire failures tend to happen on the roads that bound it — I-635, I-35E, the Bush Turnpike and TX-121 — rather than inside the city, where flats are usually discovered rather than experienced.",
    faqs: [
      {
        q: "What if I do not have a usable spare?",
        a: "Then fitting one is not possible, and the answer is a replacement tire supplied by us or a tow. Tell dispatch when you call so the right help comes first time.",
      },
      {
        q: "Could the tire be repaired instead?",
        a: "Often, if the damage is in the tread rather than the sidewall. Tire repair is a separate service and your driver can advise once they see it.",
      },
      {
        q: "Is it safe to wait on a freeway shoulder?",
        a: "Stay inside the vehicle with your seatbelt on and hazards running. Standing beside a car on a live freeway is the most dangerous part of a flat tire.",
      },
    ],
    primaryKeyword: "flat tire change Coppell TX",
    secondaryKeywords: ["flat tire service Coppell", "tire change near me Coppell", "roadside tire change Coppell TX"],
    longTail: ["flat tire Coppell TX help", "24 hour tire change Coppell", "change flat tire Coppell"],
    intent: "Emergency, roadside-safety.",
    sourceUrls: ["allhoursroadside.com/coppell-tire-change-service/"],
  },

  // ===================== EULESS =====================
  // Three pages: no All Hours jump start or tire-repair page for Euless.
  {
    city: "euless",
    service: "lockout",
    h1: "Car Lockout Service in Euless, TX",
    title: "Car Lockout Service Euless TX",
    metaDescription:
      "Locked out in Euless? TRA opens your car without damage — along the Airport Freeway, TX-360 or near the DFW boundary. Local dispatch, day or night.",
    intro:
      "Euless sits right against the south-western edge of the airport, and a lot of its lockouts involve somebody on a schedule they cannot move. A driver comes to the vehicle, confirms it is yours and opens it without damage.",
    scenarios: [
      "Keys locked in at a hotel or long-stay lot near the airport boundary.",
      "A fob that stopped working at the end of a shift.",
      "Keys shut in the trunk with luggage already loaded, which is priced separately.",
    ],
    localContext:
      "The south-western portion of Dallas/Fort Worth International Airport lies inside Euless city limits, and the city's two main routes — TX-183 Airport Freeway and TX-360 — exist largely to move traffic around it. Euless borders Bedford, Hurst, Grapevine and Irving.",
    faqs: [
      {
        q: "I have a flight — how fast can someone get here?",
        a: "Tell dispatch when you call. They will give you a realistic answer rather than a reassuring one, because a wrong estimate is worse than an inconvenient truth when you have a departure time.",
      },
      {
        q: "Can you reach a car on airport property?",
        a: "Part of the airport lies inside Euless, but we hold no special airport access or authorization. Tell dispatch exactly where the vehicle is and they will say whether a driver can reach that spot.",
      },
      {
        q: "I am in a rental car — can you open it?",
        a: "Yes, but you will still be asked to show entitlement to the vehicle, which for a rental usually means the agreement alongside your ID.",
      },
    ],
    primaryKeyword: "car lockout service Euless TX",
    secondaryKeywords: ["locked out of car Euless", "car unlock Euless TX", "auto lockout Euless"],
    longTail: ["locked keys in car Euless TX", "car unlock near me Euless", "locked out near DFW airport Euless"],
    intent: "Emergency, traveller-adjacent, near-me.",
    sourceUrls: ["allhoursroadside.com/euless-auto-lockout-help/"],
  },
  {
    city: "euless",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Euless, TX",
    title: "Car Battery Replacement Euless TX",
    metaDescription:
      "Need a car battery in Euless? TRA brings it to the car and fits it on site near the airport or at home. Installation quoted for your vehicle.",
    intro:
      "Cars parked near an airport stand still for days at a time, and standing is what finishes a battery that was already weak. We bring the replacement to the vehicle and fit it there. The battery price is published; installation is quoted for your car.",
    scenarios: [
      "A car that would not start on returning from a trip, and struggled again days later.",
      "A vehicle parked long-term near the airport boundary.",
      "Dim lights or slow electrics pointing at charging rather than the engine.",
      "A battery you would rather replace before travelling than after.",
    ],
    localContext:
      "With the south-western portion of DFW International inside its city limits, Euless has an unusual share of vehicles that sit rather than drive. TX-183 Airport Freeway and TX-360 carry the traffic that does move.",
    faqs: [
      {
        q: "Can you fit a battery in long-stay parking?",
        a: "Tell dispatch exactly where the vehicle is — operator, lot and level. We have no special airport access, so they will confirm whether a driver can reach it before you wait.",
      },
      {
        q: "Why is installation quoted separately?",
        a: "Because access genuinely differs between vehicles. Some batteries take minutes and others need trim removed, so we quote the job for your car rather than publish an average.",
      },
      {
        q: "What warranty comes with it?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice — that is what any claim is handled against.",
      },
    ],
    primaryKeyword: "car battery replacement Euless TX",
    secondaryKeywords: ["mobile battery replacement Euless", "car battery service Euless TX", "battery installation Euless"],
    longTail: ["mobile car battery Euless TX", "battery dead after trip Euless", "car battery keeps dying Euless"],
    intent: "Commercial, traveller-adjacent.",
    sourceUrls: ["allhoursroadside.com/euless-battery-replacement-service/"],
  },
  {
    city: "euless",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Euless, TX",
    title: "Flat Tire Change Euless TX",
    metaDescription:
      "Flat tire in Euless? If you have a usable spare, TRA fits it on site — Airport Freeway, TX-360 or a hotel lot. Call for roadside help.",
    intro:
      "A flat on the way to a flight is a different problem from a flat at home. With a usable spare in the vehicle, we fit it where you are rather than adding a tow and a workshop wait to a morning that has no slack in it.",
    scenarios: [
      "A flat found in a hotel lot on the morning of a flight.",
      "A blowout on TX-360 or the Airport Freeway with little shoulder to work on.",
      "A slow puncture that went down while the car stood for a week.",
    ],
    localContext:
      "TX-183 Airport Freeway and TX-360 carry heavy airport-bound traffic through Euless, and shoulder space on both is limited. That is much of why we would rather come out than have you change a wheel beside them.",
    faqs: [
      {
        q: "I am due at the airport — can you be quick?",
        a: "Say so when you call. Dispatch will tell you what is genuinely achievable rather than what you would like to hear, so you can decide whether to wait or make other arrangements.",
      },
      {
        q: "What if there is no spare in the car?",
        a: "Then it cannot be fitted, and the options are a replacement tire from us or a tow. Mention it on the call so the right help is sent.",
      },
      {
        q: "Is it safe to change it on the TX-360 shoulder?",
        a: "We would rather you did not. Stay in the vehicle with hazards on and let the driver handle it with proper equipment and awareness of the traffic.",
      },
    ],
    primaryKeyword: "flat tire change Euless TX",
    secondaryKeywords: ["flat tire service Euless", "tire change near me Euless", "roadside tire change Euless TX"],
    longTail: ["flat tire before flight Euless", "24 hour tire change Euless", "change flat tire Euless TX"],
    intent: "Emergency, time-critical.",
    sourceUrls: ["allhoursroadside.com/euless-tire-change-service/"],
  },

  // ===================== GRAPEVINE =====================
  // Three pages: no All Hours jump start or tire-repair page for Grapevine.
  {
    city: "grapevine",
    service: "lockout",
    h1: "Car Lockout Service in Grapevine, TX",
    title: "Car Lockout Service Grapevine TX",
    metaDescription:
      "Locked out in Grapevine? TRA opens your car without damage — TX-114, TX-121 or near the airport. Local DFW dispatch, day or night.",
    intro:
      "Grapevine holds more of the airport than any other city, and a great many of the cars parked here belong to people who are mid-journey rather than at home. A driver comes to the vehicle, confirms it is yours and opens it without damage.",
    scenarios: [
      "Keys locked in at a hotel lot before an early departure.",
      "A fob that died while the car stood in long-stay parking.",
      "Keys shut in the trunk with luggage loaded, which is a separately priced job.",
      "A rental vehicle whose doors locked behind you.",
    ],
    localContext:
      "Grapevine contains a larger share of Dallas/Fort Worth International Airport than any other city, and it spans three counties — Tarrant, with minor portions in Dallas and Denton. Six major routes cross or bound it: TX-114, TX-121, TX-26, TX-360, I-635 and FM 2499. It borders Euless, Hurst, Coppell and Irving.",
    faqs: [
      {
        q: "Can you reach a car on airport property?",
        a: "Grapevine contains more of the airport than any other city, but we hold no special access or authorization there. Tell dispatch exactly where the vehicle is standing and they will tell you plainly whether a driver can reach it.",
      },
      {
        q: "I am in a rental — will you still open it?",
        a: "Yes, with the usual check. For a rental that normally means the rental agreement along with your ID, which protects whoever owns the vehicle.",
      },
      {
        q: "How do I describe where I am?",
        a: "Give dispatch the hotel, lot or nearest of the main routes. Grapevine has six major roads through it and a great deal of similar-looking parking, so a specific landmark saves real time.",
      },
    ],
    primaryKeyword: "car lockout service Grapevine TX",
    secondaryKeywords: ["locked out of car Grapevine", "car unlock Grapevine TX", "auto lockout Grapevine"],
    longTail: ["locked keys in car Grapevine TX", "car unlock near me Grapevine", "locked out near DFW airport Grapevine"],
    intent: "Emergency, traveller-adjacent, near-me.",
    sourceUrls: ["allhoursroadside.com/grapevine-auto-lockout-help/"],
  },
  {
    city: "grapevine",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Grapevine, TX",
    title: "Car Battery Replacement Grapevine TX",
    metaDescription:
      "Need a car battery in Grapevine? TRA brings it to the car and fits it on site — hotels, long-stay lots or at home. Installation quoted per vehicle.",
    intro:
      "A battery that failed once after a week of standing will fail again after the next one. We bring the replacement to the vehicle and fit it where it sits, which matters when the car is in a lot rather than a driveway. The battery price is published; installation is quoted for your car.",
    scenarios: [
      "A car that needed a jump on returning from a trip and struggled again soon after.",
      "A vehicle regularly left in long-stay parking for a week at a time.",
      "Charging symptoms — dim headlights, slow windows, a resetting clock.",
      "A battery you would rather change before a trip than discover on return.",
    ],
    localContext:
      "Grapevine's share of the airport is the largest of any city, and that shapes the work: a high proportion of vehicles here stand for days rather than commute. Standing is what finishes batteries. TX-114, TX-121, TX-26, TX-360, I-635 and FM 2499 carry the traffic that keeps moving.",
    faqs: [
      {
        q: "Can you fit a battery in a hotel or long-stay lot?",
        a: "Usually yes, provided the driver can work safely around the vehicle. Give dispatch the operator, lot and level when you call.",
      },
      {
        q: "Why is installation not included in the published price?",
        a: "Because reaching the battery is a short job on some vehicles and a long one on others. Quoting it for your car is more honest than an average figure that would be wrong for many.",
      },
      {
        q: "What warranty is included?",
        a: "A battery replacement includes a 1-year warranty. Keep the invoice — warranty service is processed against it.",
      },
    ],
    primaryKeyword: "car battery replacement Grapevine TX",
    secondaryKeywords: ["mobile battery replacement Grapevine", "car battery service Grapevine TX", "battery installation Grapevine"],
    longTail: ["mobile car battery Grapevine TX", "battery dead after trip Grapevine", "car battery keeps dying Grapevine"],
    intent: "Commercial, traveller-adjacent.",
    sourceUrls: ["allhoursroadside.com/grapevine-battery-replacement-service/"],
  },
  {
    city: "grapevine",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Grapevine, TX",
    title: "Flat Tire Change Grapevine TX",
    metaDescription:
      "Flat tire in Grapevine? If you have a usable spare, TRA fits it on site — TX-114, TX-121 or a hotel lot. Call for roadside help.",
    intro:
      "With a serviceable spare in the vehicle, a flat is a delay rather than a cancelled journey. A driver comes to you, fits the spare and torques it correctly, which is worth a great deal when there is a departure time attached to the morning.",
    scenarios: [
      "A flat found in a hotel lot before an early start.",
      "A blowout on TX-114 or TX-121 in heavy airport-bound traffic.",
      "A tire that went down while the car stood in long-stay parking.",
      "A locking wheel nut whose key is at home rather than in the car.",
    ],
    localContext:
      "Six major routes run through or around Grapevine — TX-114, TX-121, TX-26, TX-360, I-635 and FM 2499 — and most carry airport traffic at speed with limited shoulder. Sudden failures here are usually highway events rather than tires found soft on a quiet street.",
    faqs: [
      {
        q: "I have a flight — can you make it in time?",
        a: "Tell dispatch when you call and they will be straight with you about what is achievable. A hopeful estimate is worse than an honest one when you have a departure time.",
      },
      {
        q: "What if there is no spare?",
        a: "Then it cannot be fitted, and the answer is a replacement tire supplied by us or a tow. Say so on the call so the right help is sent first time.",
      },
      {
        q: "Can you change a tire in a parking garage?",
        a: "Usually yes, if there is room to work safely. Low-clearance garages can be a constraint, so mention it to dispatch.",
      },
    ],
    primaryKeyword: "flat tire change Grapevine TX",
    secondaryKeywords: ["flat tire service Grapevine", "tire change near me Grapevine", "roadside tire change Grapevine TX"],
    longTail: ["flat tire before flight Grapevine", "24 hour tire change Grapevine", "change flat tire Grapevine TX"],
    intent: "Emergency, time-critical, traveller-adjacent.",
    sourceUrls: ["allhoursroadside.com/grapevine-tire-change-service/"],
  },

  // ===================== HURST =====================
  // Three pages: no All Hours jump start or tire-repair page for Hurst.
  {
    city: "hurst",
    service: "lockout",
    h1: "Car Lockout Service in Hurst, TX",
    title: "Car Lockout Service Hurst TX",
    metaDescription:
      "Locked out in Hurst? TRA opens your car without damage — along TX-183, TX-26 or Loop 820. Local DFW dispatch, day or night.",
    intro:
      "Hurst is a mid-cities town with a lot of retail parking and a lot of people passing through on their way somewhere else. A driver comes to the vehicle, confirms it is yours and opens it without damage.",
    scenarios: [
      "Keys locked in while loading shopping at a retail lot.",
      "A fob that stopped responding at the end of a shift.",
      "Keys shut in the trunk after loading, which is quoted separately from a door.",
    ],
    localContext:
      "Hurst sits in the middle of the mid-cities, bordered by Bedford, Euless, North Richland Hills and Grapevine. TX-183 Airport Freeway and TX-26 run through it with Loop 820 along the western side, and the airport is about thirteen miles away.",
    faqs: [
      {
        q: "Do you cover retail and shopping parking?",
        a: "Yes, and in Hurst that is a large share of the calls. Give dispatch the lot and roughly where the car is standing in it.",
      },
      {
        q: "Can you open the car if the fob battery is dead?",
        a: "Yes. A dead fob is among the most common reasons people call, and it does not change how the vehicle is opened.",
      },
      {
        q: "Do I need to be there?",
        a: "Yes — somebody who can show entitlement to the vehicle needs to be present, because that check happens before it is opened.",
      },
    ],
    primaryKeyword: "car lockout service Hurst TX",
    secondaryKeywords: ["locked out of car Hurst", "car unlock Hurst TX", "auto lockout Hurst"],
    longTail: ["locked keys in car Hurst TX", "car unlock near me Hurst", "24 hour lockout Hurst"],
    intent: "Emergency, near-me, retail-parking.",
    sourceUrls: ["allhoursroadside.com/hurst-auto-lockout-help/"],
  },
  {
    city: "hurst",
    service: "battery-replacement",
    h1: "Mobile Battery Replacement in Hurst, TX",
    title: "Car Battery Replacement Hurst TX",
    metaDescription:
      "Car battery failing in Hurst? TRA brings the battery to you and fits it on site, with installation quoted for your vehicle and a 1-year warranty.",
    intro:
      "A battery that has been jumped twice is not going to improve on its own. We bring the replacement to the vehicle and fit it where it stands, so the car never has to be recovered anywhere. The battery price is published; installation is quoted for your specific car.",
    scenarios: [
      "A second jump start on the same vehicle within a few weeks.",
      "A car that will not start after standing over a long weekend.",
      "Dim lights and sluggish windows pointing at charging rather than the engine.",
      "A battery old enough that replacing it beats being stranded by it.",
    ],
    localContext:
      "Hurst's driving is mid-cities driving — short hops on TX-26 and TX-183 and around Loop 820, rather than long highway runs. Short trips are hard on a battery, because the alternator never gets long enough to replace what starting took out.",
    faqs: [
      {
        q: "Can you replace it at a retail lot while I shop?",
        a: "Yes, provided the car is somewhere a driver can work safely. Tell dispatch which lot and roughly where the vehicle is.",
      },
      {
        q: "Why do short trips wear a battery out?",
        a: "Starting the engine takes a large amount out of the battery, and it takes sustained driving to put it back. A pattern of short local trips never quite catches up, which is why mid-cities batteries often fail earlier than commuter ones.",
      },
      {
        q: "What warranty comes with the battery?",
        a: "A battery replacement includes a 1-year warranty. Keep your invoice, as that is what warranty service is processed against.",
      },
    ],
    primaryKeyword: "car battery replacement Hurst TX",
    secondaryKeywords: ["mobile battery replacement Hurst", "car battery service Hurst TX", "battery installation Hurst"],
    longTail: ["mobile car battery Hurst TX", "battery replaced at home Hurst", "car battery keeps dying Hurst"],
    intent: "Commercial, convenience-led.",
    sourceUrls: ["allhoursroadside.com/hurst-battery-replacement-service/"],
  },
  {
    city: "hurst",
    service: "flat-tire-change",
    h1: "Flat Tire Change in Hurst, TX",
    title: "Flat Tire Change Hurst TX",
    metaDescription:
      "Flat tire in Hurst? If you have a usable spare, TRA fits it where you are — Loop 820, TX-183 or a retail lot. Call for roadside help.",
    intro:
      "With a usable spare in the vehicle, a flat is a short job. A driver comes to you, fits it and torques it correctly, and you carry on rather than kneeling in a parking lot with the shopping still in the car.",
    scenarios: [
      "A flat found in a retail lot with the car already loaded.",
      "A blowout on Loop 820 or the Airport Freeway at speed.",
      "A slow puncture that finally went down overnight in a driveway.",
    ],
    localContext:
      "Loop 820 and TX-183 carry Hurst's fast traffic and are where sudden failures happen; TX-26 and the retail parking around it account for most of the flats that are simply found rather than experienced.",
    faqs: [
      {
        q: "Is it safe to change a wheel on Loop 820?",
        a: "We would advise against it. Stay belted in with hazards on and let the driver do it — standing beside a car on a busy loop is the genuinely dangerous part of a flat tire.",
      },
      {
        q: "What if my spare is flat as well?",
        a: "It is common, since spares sit untouched for years. If you are unsure, say so when you call so a driver is not sent for a job that cannot be finished.",
      },
      {
        q: "Could the tire be repaired instead?",
        a: "Often, if the damage is in the tread rather than the sidewall. Your driver can advise once they have seen it.",
      },
    ],
    primaryKeyword: "flat tire change Hurst TX",
    secondaryKeywords: ["flat tire service Hurst", "tire change near me Hurst", "roadside tire change Hurst TX"],
    longTail: ["flat tire on Loop 820 Hurst", "24 hour tire change Hurst", "change flat tire Hurst TX"],
    intent: "Emergency, roadside-safety, retail-parking.",
    sourceUrls: ["allhoursroadside.com/hurst-tire-change-service/"],
  },
];

const BY_KEY = new Map(CITY_SERVICE_PAGES.map((p) => [`${p.city}/${p.service}`, p]));

export function getCityServicePage(city: string, service: string): CityServiceContent | undefined {
  return BY_KEY.get(`${city}/${service}`);
}

/** Every (city, service) pair with published content — drives generateStaticParams and the sitemap. */
export function cityServicePairs(): { city: string; service: string }[] {
  return CITY_SERVICE_PAGES.map((p) => ({ city: p.city, service: p.service }));
}

/** Pilot service pages published for a given city, for linking from the city hub. */
export function servicesForCity(city: string): CityServiceContent[] {
  return CITY_SERVICE_PAGES.filter((p) => p.city === city);
}
