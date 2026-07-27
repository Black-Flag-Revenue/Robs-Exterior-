export interface Service {
  slug: string
  name: string
  shortName: string
  icon: string
  tagline: string
  heroDesc: string
  description: string
  longDescription: string
  benefits: string[]
  process: { step: string; title: string; desc: string }[]
  faqs: { q: string; a: string }[]
  image: string
  metaTitle: string
  metaDesc: string
  keywords: string[]
  startingPrice?: string
  serviceContext?: Record<string, string>
  relatedServices: string[]
}

export const services: Service[] = [
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    shortName: "Gutters",
    icon: "🏠",
    tagline: "Protect Your Home From the Top Down",
    heroDesc: "Full debris removal, downspout flushing, and inspection — the most overlooked home maintenance service that prevents thousands in water damage.",
    description: "Professional gutter cleaning service in Woodstock, IL and McHenry County. Complete debris removal, downspout flushing, and inspection.",
    longDescription: `Clogged gutters are one of the most overlooked and most costly problems a homeowner can ignore. When debris blocks water flow, it backs up under your roofline, saturates your fascia boards, pools against your foundation, and in Illinois winters, freezes into ice dams that can lift your shingles and split your gutters wide open.\n\nWater that overflows from blocked gutters doesn't just disappear — it saturates the soil directly against your foundation, seeps into your basement or crawl space, and slowly undermines the structural integrity of your home. What starts as a $150 gutter cleaning job becomes a $5,000 foundation repair when left unaddressed.\n\nRob's gutter cleaning service in Woodstock, IL eliminates all of that. Every job includes full debris removal — leaves, twigs, seed pods, shingle grit, and whatever else has accumulated — followed by complete downspout flushing to verify full water flow, and a visual inspection of your entire gutter system. Rob flags any loose hangers, sagging sections, or developing leaks so you know exactly what's going on before a small issue becomes a big repair.\n\nMost McHenry County homes benefit from two cleanings per year — late spring after the seed pods and tree blooms finish, and late fall after the leaves have fully dropped. Homes surrounded by heavy tree coverage often need a third. Rob can set you up on a recurring schedule so you never have to think about it again.`,
    benefits: [
      "Complete debris removal — leaves, twigs, seed pods, shingle grit, and roof buildup",
      "Downspout flushing — we confirm full water flow through every downspout",
      "Gutter inspection included — loose hangers, sagging sections, and leaks flagged",
      "Roof edge and fascia board check at no extra charge",
      "Prevents foundation damage, basement flooding, and ice dam formation",
      "One-time service or seasonal maintenance scheduling available",
      "Safe ladder practices — no damage to your landscaping or property",
      "Available for single-story and two-story homes throughout McHenry County"
    ],
    process: [
      { step: "01", title: "Text Rob", desc: "Text (815) 451-0106 with your address. Rob gives you a straight price fast — no sales calls, no runaround." },
      { step: "02", title: "Schedule", desc: "Pick a day that works. Rob shows up on time, every time. No vague arrival windows." },
      { step: "03", title: "Full Clean", desc: "Complete debris removal from every gutter section, downspout flushing, and full system inspection." },
      { step: "04", title: "Done Right", desc: "Rob walks the job with you. You see the results before he leaves. No surprises on the invoice." }
    ],
    faqs: [
      { q: "How much does gutter cleaning cost in Woodstock, IL?", a: "Most single-story homes in Woodstock range from $100–$175 depending on linear footage and accessibility. Two-story homes typically run $150–$250. Text Rob at (815) 451-0106 for a free, no-obligation quote specific to your home." },
      { q: "How often should I have my gutters cleaned in Illinois?", a: "Twice a year is ideal for most McHenry County homes — late spring after seed pods and tree blooms finish, and late fall after leaves drop. Homes with heavy tree coverage may need a third cleaning. Illinois winters make blocked gutters especially dangerous due to ice dam formation." },
      { q: "What happens if I don't clean my gutters?", a: "Water overflow saturates your fascia, soffit, and foundation. In winter, standing water freezes and expands, cracking gutters and lifting shingles. Long-term neglect leads to foundation damage, basement flooding, and mold — repairs that cost thousands of dollars." },
      { q: "Do you clean gutters on two-story homes in Woodstock?", a: "Yes. Rob has full ladder equipment and experience working safely on two-story homes throughout Woodstock and McHenry County." },
      { q: "Can you put me on a recurring schedule?", a: "Absolutely. Rob can set you up on a bi-annual schedule so your gutters get cleaned every spring and fall automatically. Just text him and he'll get you set up." }
    ],
    image: "/images/gutter 1 .jpeg",
    metaTitle: "Gutter Cleaning Woodstock IL | Rob's Exterior Services | Free Quote",
    metaDesc: "Professional gutter cleaning in Woodstock, IL. Full debris removal, downspout flushing & inspection. Serving all of McHenry County. Text Rob for a free estimate.",
    keywords: ["gutter cleaning Woodstock IL", "gutter cleaning McHenry County", "gutter cleanout Illinois", "downspout cleaning Woodstock"],
    startingPrice: "$100",
    relatedServices: ["roof-washing", "soft-washing", "pressure-washing"]
  },
  {
    slug: "soft-washing",
    name: "Soft Washing",
    shortName: "Soft Wash",
    icon: "💧",
    tagline: "Kill It at the Root. Not Just the Surface.",
    heroDesc: "Low-pressure house washing that eliminates mold, mildew, and algae at the root — results that last 4–6x longer than pressure washing alone.",
    description: "Professional soft washing in Woodstock, IL. Safe low-pressure house washing removes mold, mildew & algae from siding without damage.",
    longDescription: `If your home's siding looks dingy, streaked, or green — it's not dirt. It's living organisms. Mold, mildew, algae, and bacteria colonize your siding and gradually break it down, eating into the material and creating a surface that holds moisture, accelerates weathering, and looks terrible from the street.\n\nStandard pressure washing blasts the surface clean but leaves the root systems of mold and algae alive in the material. Within months, it comes back — sometimes worse than before. It also forces water behind your panels, cracks caulk, strips paint, and can void siding warranties. For most home exteriors, pressure washing is the wrong tool.\n\nSoft washing solves the problem properly. Using low water pressure and professional-grade biodegradable cleaning solutions, we kill mold and algae at the root and rinse it away safely. The results last 4–6 times longer than pressure washing because we're treating the cause, not masking the symptom. It's the method recommended by most siding manufacturers, and it's what Rob uses on every house wash in Woodstock and McHenry County.\n\nEvery soft wash job starts with pre-wetting all landscaping and plants to protect them from the cleaning solution. Rob uses biodegradable, eco-safe products that break down quickly and won't harm your lawn, garden, pets, or the surrounding environment. After application and dwell time, a low-pressure rinse removes everything — leaving your siding bright, clean, and protected.`,
    benefits: [
      "Safe for vinyl, wood, stucco, brick, Hardie board, and fiber cement siding",
      "Kills mold, mildew, and algae at the root — not just surface cleaning",
      "Removes black streaks, green staining, oxidation, and years of buildup",
      "Results last 4–6x longer than pressure washing alone",
      "No damage to paint, caulk, window seals, or siding warranty",
      "Biodegradable solutions — safe for lawn, garden, and pets",
      "Pre-wet landscaping protection on every job",
      "Recommended by most major siding manufacturers"
    ],
    process: [
      { step: "01", title: "Free Quote", desc: "Text Rob your address. He'll assess your home and give you a fast, fair quote with no pressure." },
      { step: "02", title: "Protect", desc: "All plants and landscaping are pre-wet and protected before any solution is applied." },
      { step: "03", title: "Soft Wash", desc: "Professional solution applied at low pressure, allowed to dwell, killing organisms at the root." },
      { step: "04", title: "Rinse & Done", desc: "Gentle rinse reveals bright, clean siding. Results are immediate and last for years." }
    ],
    faqs: [
      { q: "Is soft washing safe for my vinyl siding?", a: "Yes — soft washing is actually safer than pressure washing for vinyl siding. The low pressure won't crack, warp, or force water behind your panels. The cleaning solutions are biodegradable and safe for all common siding types." },
      { q: "How long does soft washing last?", a: "Soft washing results typically last 2–4 years depending on your home's sun exposure, tree coverage, and local moisture levels. Because it kills the organisms at the root rather than just blasting the surface, regrowth is significantly slower than after pressure washing." },
      { q: "Will soft washing damage my plants or lawn?", a: "Rob takes care to pre-wet all landscaping before applying solutions, and uses biodegradable products that break down quickly. Your lawn, garden, and plants are protected throughout the process." },
      { q: "How much does house washing cost in Woodstock IL?", a: "Most single-story homes range from $200–$350. Two-story homes typically run $300–$500. Text Rob at (815) 451-0106 for a free quote specific to your property." },
      { q: "What's the difference between soft washing and pressure washing?", a: "Pressure washing uses high water pressure to blast surfaces clean. Soft washing uses low pressure combined with professional cleaning solutions that kill mold and algae at the root. Soft washing lasts 4–6x longer and is safe for all siding types." }
    ],
    image: "/images/housewash 1.jpeg",
    metaTitle: "Soft Washing Woodstock IL | House Washing | Rob's Exterior Services",
    metaDesc: "Professional soft washing in Woodstock, IL. Safe low-pressure house washing removes mold, mildew & algae from siding without damage. McHenry County. Free quote.",
    keywords: ["soft washing Woodstock IL", "house washing Woodstock", "exterior cleaning Woodstock Illinois", "mold removal siding McHenry County"],
    startingPrice: "$200",
    relatedServices: ["roof-washing", "gutter-cleaning", "window-cleaning"]
  },
  {
    slug: "roof-washing",
    name: "Roof Washing",
    shortName: "Roof Wash",
    icon: "🏚",
    tagline: "Those Black Streaks Are Destroying Your Roof.",
    heroDesc: "ARMA-approved soft wash roof cleaning removes black streaks, algae, and moss safely — without the pressure washing that voids your warranty.",
    description: "Professional roof washing in Woodstock, IL. Safe soft wash method removes black streaks, algae & moss without damaging shingles. McHenry County.",
    longDescription: `Those dark black streaks running down your roof aren't just cosmetic — they're a living bacteria called Gloeocapsa Magma that feeds on the limestone filler in asphalt shingles. Every year it goes untreated, it eats deeper into your shingles, shortens your roof's lifespan, and quietly drives down your home's value and curb appeal.\n\nLeft long enough, algae growth leads to moss and lichen colonization — organisms that physically lift shingle tabs, break the granule bond, and accelerate the deterioration that leads to early roof replacement. A roof that should last 25–30 years can fail in 15 if algae growth goes unchecked.\n\nRob's roof washing service uses the ARMA-approved soft wash method — low pressure and professional cleaning solutions — to kill the bacteria and wash it away safely. No high-pressure blasting that granules your shingles, strips protective coating, or voids your roofing manufacturer's warranty. Just a clean, restored roof that looks years younger and lasts years longer.\n\nThis isn't a DIY job. Working on roofs requires the right equipment, the right chemistry, and the experience to do it safely without causing damage. Rob handles every roof wash himself, assesses the extent of algae and moss growth before starting, and uses the appropriate treatment for your specific shingle type.`,
    benefits: [
      "Removes black streaks (Gloeocapsa Magma), moss, lichen, and green algae",
      "ARMA-approved soft wash method — recommended by shingle manufacturers",
      "Will not void your roofing warranty — unlike pressure washing",
      "Preserves shingle granules and extends roof lifespan significantly",
      "Dramatically improves curb appeal and home resale value",
      "Treats the root cause — not just surface appearance",
      "Safe for all asphalt shingle types",
      "Results last 2–5 years depending on tree coverage and shade"
    ],
    process: [
      { step: "01", title: "Assessment", desc: "Rob evaluates your roof's condition, algae coverage, and shingle type before starting." },
      { step: "02", title: "Protect", desc: "Landscaping, gutters, and surrounding areas protected before treatment begins." },
      { step: "03", title: "Soft Wash Treatment", desc: "ARMA-approved solution applied at low pressure to kill bacteria and algae at the root." },
      { step: "04", title: "Clean Results", desc: "Black streaks eliminated. Roof looks clean, restored, and years younger." }
    ],
    faqs: [
      { q: "Is roof washing safe for asphalt shingles?", a: "Yes — when done with the soft wash method. The Asphalt Roofing Manufacturers Association (ARMA) recommends low-pressure cleaning with appropriate solutions. High-pressure washing strips shingle granules and can void your warranty. Rob uses only the soft wash method on every roof." },
      { q: "How long does roof cleaning last?", a: "Most roofs stay clean for 2–5 years after a professional soft wash treatment depending on tree coverage, shade, and local moisture. Shaded north-facing roofs tend to see faster regrowth than sun-exposed roofs." },
      { q: "Will roof washing damage my gutters?", a: "No. Rob protects your gutters during the cleaning process and rinses them out as part of the service. This is also a great time to combine roof washing with a gutter cleaning for maximum value." },
      { q: "How much does roof washing cost in Woodstock IL?", a: "Most residential roofs range from $250–$500 depending on size, pitch, and condition. Text Rob at (815) 451-0106 for a free quote." },
      { q: "What are the black streaks on my roof?", a: "Black streaks are caused by Gloeocapsa Magma, a bacteria that feeds on the limestone filler in asphalt shingles. It spreads across your roof over time and — if left untreated — leads to moss and lichen growth that physically damages shingles." }
    ],
    image: "/images/roof_wash_1.jpeg",
    metaTitle: "Roof Washing Woodstock IL | Soft Wash Roof Cleaning | Rob's Exterior Services",
    metaDesc: "Professional roof washing in Woodstock, IL. Safe soft wash method removes black streaks, algae & moss without damaging shingles. McHenry County. Free quote.",
    keywords: ["roof washing Woodstock IL", "roof cleaning McHenry County", "black streak removal roof Illinois", "algae roof cleaning Woodstock"],
    startingPrice: "$250",
    relatedServices: ["gutter-cleaning", "soft-washing", "curb-appeal-packages"]
  },
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    shortName: "Windows",
    icon: "🪟",
    tagline: "Streak-Free. Inside and Out.",
    heroDesc: "Professional window cleaning for homes and businesses in Woodstock, IL — crystal clear results that let the light back into every room.",
    description: "Professional window cleaning in Woodstock, IL. Streak-free interior & exterior window washing for homes and businesses. Serving McHenry County.",
    longDescription: `Dirty windows make a clean home look neglected. Hard water spots, oxidation, dust, pollen, and spider webs accumulate on your glass year-round — and standard cleaning rarely gets them fully clear. The difference between clean windows and professionally cleaned windows is immediately visible from both inside and outside your home.\n\nRob's window cleaning service delivers crystal-clear, streak-free results inside and out. Every job includes interior and exterior glass cleaning, screen removal and cleaning, and a full wipe-down of frames, tracks, and sills. Nothing is left behind — every window gets the same attention from the first to the last.\n\nFor homes with hard water staining or mineral deposit buildup, Rob uses professional-grade mineral deposit removers that cut through calcification that regular glass cleaner won't touch. For second-story windows, Rob brings full ladder and pole equipment — no window is out of reach.\n\nRob also serves commercial properties throughout Woodstock and McHenry County — storefront glass, office buildings, and retail locations. If it has windows and they need to be clean, Rob handles it.`,
    benefits: [
      "Interior and exterior cleaning — fully streak-free results guaranteed",
      "Screens removed, cleaned, and carefully reinstalled",
      "Window frames, tracks, and sills wiped down completely",
      "Hard water spot and mineral deposit removal",
      "Residential and commercial properties — all sizes welcome",
      "Single and multi-story — full ladder and pole equipment",
      "Professional solutions — not store-bought glass cleaner",
      "Same attention to every window from first to last"
    ],
    process: [
      { step: "01", title: "Text Rob", desc: "Text your address and number of windows. Rob gives you a fast, fair quote." },
      { step: "02", title: "Interior First", desc: "Interior glass cleaned and dried streak-free. Frames and sills wiped down." },
      { step: "03", title: "Exterior Next", desc: "Exterior glass, frames, and screens cleaned from the outside with professional solution." },
      { step: "04", title: "Spot Check", desc: "Every window inspected before Rob calls the job done. Zero streaks, zero misses." }
    ],
    faqs: [
      { q: "Do you clean both inside and outside windows?", a: "Yes. Rob cleans both interior and exterior glass as a standard part of his window cleaning service. Screens are removed, cleaned, and reinstalled as part of every job." },
      { q: "Can you remove hard water stains from windows?", a: "Yes. Rob uses professional mineral deposit removers for hard water staining and oxidation that regular cleaning won't touch. Severely etched glass may require specialty treatment — Rob will let you know upfront if that's the case." },
      { q: "How much does window cleaning cost in Woodstock IL?", a: "Most homes in Woodstock range from $150–$350 depending on the number of windows, stories, and condition. Commercial properties are quoted by the job. Text Rob at (815) 451-0106 for a fast, specific quote." },
      { q: "Do you clean commercial windows in Woodstock?", a: "Yes — Rob cleans both residential and commercial windows including storefront glass, office buildings, and retail locations throughout Woodstock and McHenry County." }
    ],
    image: "/images/exterior window 1 .jpeg",
    metaTitle: "Window Cleaning Woodstock IL | Streak-Free | Rob's Exterior Services",
    metaDesc: "Professional window cleaning in Woodstock, IL. Streak-free interior & exterior window washing for homes and businesses. Serving McHenry County. Text for a free quote.",
    keywords: ["window cleaning Woodstock IL", "window washing McHenry County", "residential window cleaning Woodstock", "commercial window cleaning Illinois"],
    startingPrice: "$150",
    relatedServices: ["soft-washing", "gutter-cleaning", "curb-appeal-packages"]
  },
  {
    slug: "pressure-washing",
    name: "Pressure Washing",
    shortName: "Pressure Wash",
    icon: "🚿",
    tagline: "Years of Buildup. Gone in Hours.",
    heroDesc: "Driveways, patios, sidewalks, and decks blasted clean — restoring concrete, brick, and wood surfaces to like-new condition.",
    description: "Professional pressure washing in Woodstock, IL. Driveways, patios, sidewalks, decks & more. Serving McHenry County. Text Rob for a free estimate.",
    longDescription: `Years of Illinois weather, road salt, oil stains, mildew, and foot traffic grind into your driveways, patios, and sidewalks. It builds up slowly and then one day you realize your concrete looks twenty years older than it is. One professional pressure washing session can completely reverse that.\n\nRob's pressure washing service covers all exterior hard surfaces — driveways, patios, sidewalks, pool decks, retaining walls, steps, fences, and more. It's one of the highest-return improvements you can make to your property's appearance, and one of the fastest jobs Rob offers. Most driveways and patios are done in under two hours with results that are immediately dramatic.\n\nFor stubborn oil stains, Rob pre-treats the surface with professional degreaser before pressure washing begins. For wood and composite decks, he adjusts pressure carefully to clean thoroughly without raising the wood grain or causing splintering. For concrete, brick, and pavers, the difference between before and after is often shocking — years of embedded grime lifting away in seconds.\n\nPressure washing is also an essential prep step before deck staining, concrete sealing, or painting any exterior surface. Clean surfaces bond better and results last longer. Rob can handle the wash and the finish work as a bundled service for maximum value.`,
    benefits: [
      "Driveways — oil stains, tire marks, salt deposits, and years of weathering removed",
      "Patios and pool decks — algae, mildew, and ground-in dirt blasted clean",
      "Sidewalks and walkways — safe, bright, and presentable",
      "Wood and composite decks — prep for staining, sealing, or painting",
      "Retaining walls, steps, and fences",
      "Professional degreaser pre-treatment for oil stains",
      "Adjustable pressure — right setting for each surface type",
      "Before-and-after results visible immediately"
    ],
    process: [
      { step: "01", title: "Text Rob", desc: "Tell Rob what surfaces you need cleaned. Fast quote, no hassle." },
      { step: "02", title: "Pre-Treat", desc: "Stubborn oil stains and heavy buildup pre-treated before pressure washing begins." },
      { step: "03", title: "Pressure Wash", desc: "Professional-grade equipment removes years of buildup quickly and thoroughly." },
      { step: "04", title: "Inspect", desc: "Rob walks the surface with you to confirm everything meets your expectations." }
    ],
    faqs: [
      { q: "How much does driveway pressure washing cost in Woodstock IL?", a: "Most single-car driveways run $75–$150. Two-car driveways typically range from $125–$225. Patios and larger surfaces are priced by square footage. Text Rob for a quick quote." },
      { q: "Can pressure washing remove oil stains from my driveway?", a: "Yes — Rob pre-treats oil stains with degreaser before pressure washing. Most fresh-to-moderate oil stains are significantly reduced or fully removed. Very old, deeply set stains may lighten but not disappear completely." },
      { q: "Should I pressure wash my deck?", a: "Pressure washing is great for concrete, brick, and pavers. For wood decks, Rob adjusts pressure carefully to avoid splintering or grain-raising. If you're planning to stain or seal your deck afterward, pressure washing first is an important prep step." },
      { q: "How long does pressure washing take?", a: "Most driveways take 45–90 minutes. Patios vary by size but are typically done in under two hours. Rob can combine driveway, patio, and sidewalk cleaning in a single efficient visit." }
    ],
    image: "/images/patio 3 .jpeg",
    metaTitle: "Pressure Washing Woodstock IL | Driveways, Patios & More | Rob's Exterior Services",
    metaDesc: "Professional pressure washing in Woodstock, IL. Driveways, patios, sidewalks, decks & more. Serving McHenry County. Text Rob for a free estimate today.",
    keywords: ["pressure washing Woodstock IL", "driveway cleaning Woodstock", "patio pressure washing McHenry County", "concrete cleaning Illinois"],
    startingPrice: "$75",
    relatedServices: ["deck-wash-staining", "soft-washing", "gutter-cleaning"]
  },
  {
    slug: "deck-wash-staining",
    name: "Deck Wash & Staining",
    shortName: "Deck Staining",
    icon: "🪵",
    tagline: "Restore It. Protect It. Love It Again.",
    heroDesc: "Professional deck washing and staining that restores weathered wood and protects it from every Illinois season.",
    description: "Professional deck washing and staining in Woodstock, IL. Restore and protect your deck with professional-grade stain and sealer. McHenry County.",
    longDescription: `Your deck takes more abuse than almost any surface on your property. UV rays, moisture, foot traffic, and Illinois winters all break down unprotected wood fast — leaving it gray, cracked, and slippery. A deck that's overdue for cleaning and sealing isn't just an eyesore, it's a liability.\n\nRob's deck wash and staining service starts with a thorough pressure wash to strip dirt, mold, mildew, and old failing stain down to clean, bare wood. Then Rob applies professional-grade stain or sealer that soaks deep into the wood fibers and protects from the inside out — not a surface coating that peels in a season.\n\nThe difference between professional deck staining and a DIY job is the preparation and the product. Big-box store stains are consumer-grade — they sit on top of the wood, peel when the surface flexes, and need to be reapplied every year or two. Professional products penetrate the wood fibers and bond at a molecular level, providing protection that lasts 3–5 years and looks dramatically better throughout.\n\nRob also handles the critical prep work that most homeowners skip — cleaning between deck boards, treating any mold or mildew before staining, and ensuring the wood is fully dry before application. These steps are the difference between a stain job that lasts and one that fails before the next season.`,
    benefits: [
      "Full pressure wash to remove dirt, mold, mildew, and old failing stain",
      "Professional-grade penetrating stain or sealer — not big-box consumer product",
      "Restores color, grain, and natural beauty of weathered wood",
      "Protects against UV damage, moisture, and freeze-thaw cracking",
      "Lasts 3–5 years with proper preparation and professional product",
      "Available for wood and composite decking surfaces",
      "Between-board cleaning and mold treatment included",
      "Can be bundled with patio pressure washing for full outdoor refresh"
    ],
    process: [
      { step: "01", title: "Text Rob", desc: "Text your address. Rob will assess your deck and provide a straightforward quote." },
      { step: "02", title: "Pressure Wash", desc: "Full deck wash to strip dirt, mold, mildew, and old failing stain down to clean wood." },
      { step: "03", title: "Stain & Seal", desc: "Professional-grade stain or sealer applied evenly to protect and restore the wood." },
      { step: "04", title: "Done Right", desc: "Rob walks the deck with you. You see the transformation firsthand before he leaves." }
    ],
    faqs: [
      { q: "How long does deck staining last in Illinois?", a: "A professionally applied deck stain typically lasts 3–5 years depending on the wood type, stain product, sun exposure, and foot traffic. Illinois freeze-thaw cycles are tough on decks — regular maintenance every 2–3 years keeps the wood protected." },
      { q: "Do I need to pressure wash before staining?", a: "Yes — always. Applying stain over a dirty or mildewed deck is the number one reason stain fails early. Rob pressure washes first to open the wood grain and remove everything that would prevent the stain from properly penetrating and bonding." },
      { q: "Can you stain a composite deck?", a: "Composite decks generally don't accept traditional wood stain, but they do benefit from a professional wash to remove mold, mildew, and oxidation buildup. Rob will assess your deck and recommend the right service for the material." },
      { q: "How much does deck staining cost in Woodstock IL?", a: "Pricing depends on the size of your deck, its condition, and whether it needs one or two coats. Text Rob at (815) 451-0106 for a straight, fair quote." }
    ],
    image: "/images/deckstain2.jpg",
    metaTitle: "Deck Wash & Staining Woodstock IL | Rob's Exterior Services",
    metaDesc: "Professional deck washing and staining in Woodstock, IL. Restore and protect your deck for lasting beauty. Serving McHenry County. Free quote.",
    keywords: ["deck washing Woodstock IL", "deck staining Woodstock", "deck cleaning McHenry County", "wood deck sealing Illinois"],
    startingPrice: "$300",
    relatedServices: ["pressure-washing", "soft-washing", "curb-appeal-packages"]
  },
  {
    slug: "lawn-cleanup",
    name: "Lawn Clean-Up & Trimming",
    shortName: "Lawn Care",
    icon: "🌿",
    tagline: "Curb Appeal Doesn't Stop at the Front Door.",
    heroDesc: "Spring and fall lawn clean-ups, debris hauling, trimming, and edging that keep your property sharp year-round.",
    description: "Professional lawn clean-up and yard cleanup in Woodstock, IL. Seasonal debris removal, trimming, edging & hauling. Serving McHenry County.",
    longDescription: `A clean home exterior means nothing if the yard looks overgrown or neglected. After a long Illinois winter, most properties are left with dead branches, leaf buildup, overgrown shrubs, and debris that accumulated during fall and freeze-thaw cycles. Rob's lawn clean-up service handles all of it.\n\nRob's lawn clean-up and trimming service in Woodstock, IL covers the full scope of seasonal outdoor work — from spring clean-ups that get your yard ready for the warmer months, to fall clean-ups that protect your property heading into winter. Whether it's hauling away a pile of dead branches or trimming back overgrown hedges, Rob gets the job done.\n\nEvery clean-up job includes debris removal and hauling. Nothing gets left at the curb — Rob takes it away completely so you're not left managing bags and piles after he leaves. Shrub trimming, edging along driveways and walkways, and general yard tidying round out the service for a property that looks genuinely well-maintained.\n\nRob has handled everything from basic seasonal clean-ups to major overgrowth situations where shrubs had grown completely out of control. He assesses the scope of work with you upfront, gives you a clear quote, and gets it done in a single visit whenever possible.`,
    benefits: [
      "Spring and fall seasonal clean-ups — full-service yard refresh",
      "All debris hauled away completely — nothing left at the curb",
      "Shrub and bush trimming — overgrowth cut back and shaped",
      "Edging along driveways, walkways, garden beds, and curbs",
      "General property cleanup — clear the clutter and restore curb appeal",
      "One-time or recurring service available",
      "Handles everything from basic clean-ups to major overgrowth",
      "Single-visit completion whenever scope allows"
    ],
    process: [
      { step: "01", title: "Text Rob", desc: "Tell Rob what your yard needs. He'll give you a fair quote fast." },
      { step: "02", title: "Walk the Property", desc: "Rob walks the property and confirms the scope of work with you upfront. No surprises." },
      { step: "03", title: "Full Clean-Up", desc: "Debris removal, trimming, edging, and cleanup completed efficiently." },
      { step: "04", title: "Haul Away", desc: "All debris hauled away and disposed of. You're left with a clean property." }
    ],
    faqs: [
      { q: "Do you haul away the debris?", a: "Yes. Rob hauls away all debris as part of the lawn clean-up service — branches, leaves, trimmings, and yard waste are removed from your property completely." },
      { q: "What's included in a spring clean-up?", a: "Spring clean-up typically includes debris removal (winter branches, dead leaves), trimming overgrown shrubs, edging along beds and walkways, and general yard tidying to get your property ready for the season." },
      { q: "How much does lawn clean-up cost in Woodstock IL?", a: "Pricing depends on property size and scope of work. Most residential jobs range from $150–$400. Text Rob at (815) 451-0106 with what you need — he'll give you a straight number." },
      { q: "Can you handle large debris piles?", a: "Yes. Rob and his crew have handled large debris removal jobs including hauling away multiple piles of dead branches and brush. No job is too big." }
    ],
    image: "/images/lawn_cleanup_6.jpg",
    metaTitle: "Lawn Clean-Up & Yard Cleanup Woodstock IL | Rob's Exterior Services",
    metaDesc: "Professional lawn clean-up and yard cleanup in Woodstock, IL. Seasonal debris removal, trimming, edging & hauling. Serving McHenry County. Text for a free quote.",
    keywords: ["lawn cleanup Woodstock IL", "yard cleanup McHenry County", "seasonal cleanup Illinois", "debris removal Woodstock"],
    startingPrice: "$150",
    relatedServices: ["soft-washing", "pressure-washing", "curb-appeal-packages"]
  },
  {
    slug: "curb-appeal-packages",
    name: "Curb Appeal Packages",
    shortName: "Packages",
    icon: "✨",
    tagline: "Total Exterior Transformation. One Visit.",
    heroDesc: "Bundle multiple services and transform your home's entire exterior in a single visit — for less than you'd expect.",
    description: "Curb appeal packages in Woodstock, IL. Bundle gutter cleaning, soft washing, window cleaning & pressure washing for maximum results. McHenry County.",
    longDescription: `The biggest mistake homeowners make is booking one service at a time. Clean gutters with dirty siding. Spotless windows next to a filthy driveway. Piecemeal work gets piecemeal results. A full exterior clean — done right, done at once — is a completely different outcome.\n\nRob's curb appeal packages let you bundle the services your home needs into a single visit, with bundled pricing that saves you money over booking separately. Whether you're preparing to list your home, getting ready for a summer party, or just want to take pride in your property again — Rob will build you a custom package that covers it all.\n\nFor homeowners preparing to sell, a full exterior clean is one of the highest-ROI investments you can make before listing. Professional real estate photos with a clean, bright exterior versus a dingy, streaked one can mean thousands of dollars in perceived value and days off the market. Rob can typically turn around a full exterior package within a week of contact.\n\nFor homeowners who just want to love where they live, there's nothing like pulling up to a home that looks like it just came off a magazine shoot. Clean gutters, bright siding, spotless windows, clean driveway — it changes how the whole neighborhood sees your property.`,
    benefits: [
      "Combine any services — gutters, soft wash, windows, pressure washing, lawn cleanup",
      "Single visit — Rob handles everything top to bottom in one efficient trip",
      "Best pricing — bundled services cost less than booking separately",
      "Custom quotes — every home is different, pricing is tailored to yours",
      "Perfect for pre-listing home prep — maximize curb appeal before photos",
      "No subcontractors — Rob does the work himself, every time",
      "Can include deck staining and roof washing for complete transformation",
      "Flexible scheduling — available throughout McHenry County"
    ],
    process: [
      { step: "01", title: "Text Rob", desc: "Describe your home and what you need. Rob builds a custom package on the spot." },
      { step: "02", title: "Custom Quote", desc: "Transparent bundled pricing — no hidden fees, no upsells on the day of service." },
      { step: "03", title: "One Visit", desc: "Rob arrives and works through every service top to bottom, start to finish." },
      { step: "04", title: "Total Transformation", desc: "Your home looks completely different. Guaranteed to notice the results." }
    ],
    faqs: [
      { q: "What services can I include in a curb appeal package?", a: "Any combination of Rob's services: gutter cleaning, soft washing, roof washing, window cleaning, pressure washing, deck staining, and lawn clean-up. Text Rob and tell him what your home needs." },
      { q: "Is it cheaper to bundle services?", a: "Yes. Bundling services into a single visit saves Rob setup and travel time, and he passes those savings on to you. Most customers who bundle 3+ services save significantly compared to booking each separately." },
      { q: "I'm selling my home — what do you recommend?", a: "For pre-listing, Rob typically recommends a full exterior soft wash, gutter cleaning, window cleaning, and driveway pressure wash. It makes a dramatic difference in listing photos and first impressions." },
      { q: "How far in advance should I book?", a: "Rob is often available within the week for individual services. For full packages, 1–2 weeks advance notice is recommended, especially in spring and fall when demand is highest." }
    ],
    image: "/images/front of house 2 .jpeg",
    metaTitle: "Curb Appeal Packages Woodstock IL | Bundled Exterior Cleaning | Rob's Exterior Services",
    metaDesc: "Curb appeal packages in Woodstock, IL. Bundle gutter cleaning, soft washing, window cleaning & pressure washing for maximum results and best pricing. McHenry County.",
    keywords: ["curb appeal Woodstock IL", "exterior cleaning package McHenry County", "home exterior cleaning bundle Woodstock"],
    relatedServices: ["gutter-cleaning", "soft-washing", "pressure-washing"]
  }
]

export function getService(slug: string): Service | undefined {
  return services.find(s => s.slug === slug)
}
