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
      "A slow puncture that finally went down overnight on the drive.",
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
