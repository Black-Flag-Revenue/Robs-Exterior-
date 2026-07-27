export interface City {
  slug: string
  name: string
  state: string
  zip: string
  county: string
  population: string
  medianIncome: string
  homeValue: string
  description: string
  localContext: string
  neighborhoods: string[]
  nearbyCity: string
  distanceFromWoodstock: string
  lat: number
  lng: number
  serviceContext: Record<string, string>
}

export const cities: City[] = [
  {
    slug: "woodstock-il",
    name: "Woodstock",
    state: "IL",
    zip: "60098",
    county: "McHenry County",
    population: "26,000+",
    medianIncome: "$91,062",
    homeValue: "$276,900",
    description: "Rob's hometown and primary service area. Woodstock is McHenry County's seat — a charming small city with a historic downtown square, strong community roots, and a housing stock that ranges from century-old Victorian homes to newer subdivisions on the city's edges.",
    localContext: "Woodstock's mix of older homes and newer construction means a wide range of exterior maintenance needs. Older homes in the historic district deal with aged siding, mature tree coverage that fills gutters fast, and decades of buildup on concrete. Newer subdivisions on the outskirts have younger landscaping that's now fully grown and gutters that see their first major cleaning cycles. Rob knows every neighborhood in Woodstock and has cleaned homes throughout the city.",
    neighborhoods: ["Historic Downtown", "Walkup in The Park", "Applewood", "Lilymoor", "Bull Valley"],
    nearbyCity: "Crystal Lake",
    distanceFromWoodstock: "0 miles (home base)",
    lat: 42.3147,
    lng: -88.4487,
    serviceContext: {
      "gutter-cleaning": "Woodstock's mature tree canopy — especially in the historic neighborhoods — means gutters fill faster than average. Many homes near the downtown square have large oaks and maples that drop heavily in fall and send seed pods all spring.",
      "soft-washing": "Woodstock's older housing stock means a lot of siding that hasn't been professionally cleaned in years. Mold and algae thrive in the shade of mature trees throughout the city's established neighborhoods.",
      "roof-washing": "Black streak algae is common throughout Woodstock, especially on north-facing rooflines that stay shaded and damp. Rob has treated roofs across every neighborhood in the city.",
      "window-cleaning": "Woodstock's downtown and historic district homes have beautiful original windows that benefit tremendously from professional cleaning — removing decades of buildup and oxidation.",
      "pressure-washing": "Woodstock's harsh winters leave driveways and sidewalks stained with road salt and showing years of freeze-thaw damage. Spring pressure washing is one of the most common requests Rob gets from Woodstock homeowners.",
      "deck-wash-staining": "Woodstock's variable climate — hot summers and freezing winters — is particularly hard on decks. Most wood decks in the area need professional maintenance every 2–3 years to stay protected.",
      "lawn-cleanup": "Woodstock's mature trees make fall cleanup a major undertaking for most homeowners. Spring cleanup after Illinois winters means dealing with downed branches and debris that accumulated through the freeze-thaw season.",
      "curb-appeal-packages": "Woodstock homeowners preparing to sell in the competitive McHenry County market consistently report that a full exterior clean dramatically improves showing results and perceived value."
    }
  },
  {
    slug: "crystal-lake-il",
    name: "Crystal Lake",
    state: "IL",
    zip: "60014",
    county: "McHenry County",
    population: "40,000+",
    medianIncome: "$88,000",
    homeValue: "$285,000",
    description: "McHenry County's largest city and a major suburban hub with excellent schools, a vibrant downtown, and lakefront properties that require premium exterior maintenance.",
    localContext: "Crystal Lake is one of the most desirable communities in McHenry County — and homeowners here take their property maintenance seriously. The city's lakefront properties, newer subdivisions, and established neighborhoods all present unique exterior cleaning needs. High humidity near the lake accelerates mold and algae growth on siding and roofs, making regular professional cleaning essential rather than optional.",
    neighborhoods: ["Downtown Crystal Lake", "Lakewood", "The Hollows", "Boulder Ridge"],
    nearbyCity: "Woodstock",
    distanceFromWoodstock: "12 miles east",
    lat: 42.2411,
    lng: -88.3162,
    serviceContext: {
      "gutter-cleaning": "Crystal Lake's lakefront properties and heavily wooded subdivisions create some of the fastest-filling gutters in McHenry County. Moisture from the lake also accelerates organic growth inside gutters.",
      "soft-washing": "Higher humidity near Crystal Lake means accelerated mold and algae growth on home exteriors. Many Crystal Lake homeowners need soft washing more frequently than homes further from water.",
      "roof-washing": "Crystal Lake rooftops — especially those shaded by mature trees or facing the lake — develop algae streaks faster than average. Early treatment extends roof life significantly.",
      "window-cleaning": "Crystal Lake's lakefront homes benefit enormously from professional window cleaning — removing mineral deposits, water spots, and oxidation that accumulate from the humid lake environment.",
      "pressure-washing": "Crystal Lake driveways and patios take a beating from the city's harsh winters. Professional pressure washing each spring removes road salt damage and prepares surfaces for the season.",
      "deck-wash-staining": "Lakefront decks in Crystal Lake face accelerated weathering from humidity and UV exposure. Regular washing and staining is critical to maintaining both appearance and structural integrity.",
      "lawn-cleanup": "Crystal Lake's larger lot sizes and mature tree coverage make professional lawn cleanup a significant time-saver for busy homeowners in the spring and fall.",
      "curb-appeal-packages": "Crystal Lake's competitive real estate market makes exterior curb appeal critically important. Rob's full exterior packages have helped Crystal Lake homeowners achieve better listing results."
    }
  },
  {
    slug: "huntley-il",
    name: "Huntley",
    state: "IL",
    zip: "60142",
    county: "McHenry County",
    population: "28,000+",
    medianIncome: "$95,000",
    homeValue: "$295,000",
    description: "One of McHenry County's fastest-growing communities with large planned developments, newer homes, and a strong homeowner base that values property maintenance.",
    localContext: "Huntley has seen explosive growth over the past two decades, with large planned communities like Sun City Huntley bringing an affluent, maintenance-conscious homeowner base to the area. Newer homes here are now hitting the age where exterior surfaces need their first professional attention — and homeowners in Huntley's active adult communities particularly value reliable, professional service providers.",
    neighborhoods: ["Sun City Huntley", "Del Webb", "Southwind", "Talamore"],
    nearbyCity: "Algonquin",
    distanceFromWoodstock: "14 miles southeast",
    lat: 42.1728,
    lng: -88.4270,
    serviceContext: {
      "gutter-cleaning": "Huntley's newer homes are hitting their first major gutter maintenance cycles. Many homeowners in Huntley's planned communities are discovering they need regular professional gutter service for the first time.",
      "soft-washing": "Huntley's newer vinyl and fiber cement siding develops algae and mildew as homes age. Rob has completed numerous soft wash jobs throughout Huntley's major subdivisions.",
      "roof-washing": "Huntley's newer roofs are beginning to show algae streaks as the homes mature. Early treatment in communities like Sun City extends roof warranties and prevents premature replacement.",
      "window-cleaning": "Huntley's active adult communities have a strong demand for professional window cleaning — homeowners who want pristine results without the safety risks of ladder work.",
      "pressure-washing": "Huntley driveways and community sidewalks show significant road salt and winter damage each spring. Pressure washing is one of the most requested services throughout the city's subdivisions.",
      "deck-wash-staining": "Huntley's newer decks are reaching the age where first-time staining and sealing is critical to protect the investment homeowners made when their homes were built.",
      "lawn-cleanup": "Huntley's HOA communities have high landscaping standards. Rob's lawn cleanup service helps homeowners maintain the curb appeal their community expects.",
      "curb-appeal-packages": "Huntley's active real estate market and high homeowner pride make full exterior packages extremely popular — particularly in the Sun City community where home presentation is a point of pride."
    }
  },
  {
    slug: "algonquin-il",
    name: "Algonquin",
    state: "IL",
    zip: "60102",
    county: "McHenry County",
    population: "30,000+",
    medianIncome: "$92,000",
    homeValue: "$290,000",
    description: "A well-established McHenry County community along the Fox River with a mix of established neighborhoods and newer developments and strong property values.",
    localContext: "Algonquin sits along the Fox River, giving it both scenic beauty and the maintenance challenges that come with waterfront proximity. Higher humidity, faster mold growth, and mineral deposits from water are common issues for Algonquin homeowners. The city's mix of older established neighborhoods and newer Fox River subdivisions means a wide range of exterior cleaning needs.",
    neighborhoods: ["Downtown Algonquin", "Fox River neighborhoods", "Willoughby Farms", "Tunbridge"],
    nearbyCity: "Crystal Lake",
    distanceFromWoodstock: "18 miles southeast",
    lat: 42.1658,
    lng: -88.2948,
    serviceContext: {
      "gutter-cleaning": "Algonquin's mature trees and proximity to the Fox River mean gutters fill quickly and develop organic growth faster than in drier areas. Regular professional cleaning is essential.",
      "soft-washing": "Fox River humidity makes Algonquin siding particularly prone to mold and algae growth. Rob has completed extensive soft washing throughout Algonquin's riverside neighborhoods.",
      "roof-washing": "River proximity means higher ambient moisture in Algonquin — and faster algae growth on rooftops. Homes near the Fox River benefit from more frequent roof treatment.",
      "window-cleaning": "Algonquin's riverfront homes deal with mineral deposits and water spots from high humidity. Professional window cleaning removes buildup that standard cleaning can't touch.",
      "pressure-washing": "Algonquin's combination of winter road salt and riverside moisture creates significant buildup on driveways and patios. Spring pressure washing is essential for most homes in the area.",
      "deck-wash-staining": "Algonquin's riverside environment is particularly harsh on decks. Higher moisture levels accelerate wood decay — making regular washing and sealing critical to protect the investment.",
      "lawn-cleanup": "Algonquin's larger lot sizes along the Fox River corridor make professional seasonal cleanup a significant undertaking. Rob handles both regular cleanup and major overgrowth situations.",
      "curb-appeal-packages": "Algonquin's competitive housing market along the Fox River makes exterior presentation critical. Full package cleanings help Algonquin homes stand out in a strong market."
    }
  },
  {
    slug: "marengo-il",
    name: "Marengo",
    state: "IL",
    zip: "60152",
    county: "McHenry County",
    population: "8,000+",
    medianIncome: "$72,000",
    homeValue: "$210,000",
    description: "A small, close-knit McHenry County community with a strong agricultural heritage, older housing stock, and homeowners who appreciate honest, reliable local contractors.",
    localContext: "Marengo is a smaller community with a different character than the larger McHenry County suburbs — more rural, more agricultural, and with older housing stock that often hasn't had professional exterior maintenance in years. Homeowners here value honest pricing and reliable work over flashy marketing. Rob's straightforward approach and fair pricing resonates strongly with the Marengo community.",
    neighborhoods: ["Historic Downtown Marengo", "Raintree", "The Preserves"],
    nearbyCity: "Woodstock",
    distanceFromWoodstock: "9 miles west",
    lat: 42.2489,
    lng: -88.6073,
    serviceContext: {
      "gutter-cleaning": "Marengo's older homes and mature tree coverage mean gutters that haven't been professionally cleaned in years — and often show significant buildup, sagging, and minor damage that Rob identifies during his inspection.",
      "soft-washing": "Marengo's older housing stock has decades of mold and algae buildup on siding. Professional soft washing transforms the appearance of these homes dramatically.",
      "roof-washing": "Many Marengo roofs have never been professionally cleaned. Black streak algae has often spread across entire roof surfaces — making Rob's soft wash treatment all the more impactful.",
      "window-cleaning": "Marengo's older homes often have original windows with decades of buildup. Professional cleaning removes oxidation and hard water deposits that have accumulated over years.",
      "pressure-washing": "Marengo driveways and concrete surfaces show significant weathering. Rob's pressure washing service is particularly dramatic on older Marengo properties where the difference before and after is striking.",
      "deck-wash-staining": "Many Marengo decks are overdue for professional care. Weathered, graying wood that looks beyond saving often comes back beautifully with a professional wash and stain.",
      "lawn-cleanup": "Marengo's larger lots and mature landscaping make seasonal cleanup a major project for most homeowners. Rob's full-service approach handles everything from debris to shrub trimming.",
      "curb-appeal-packages": "Marengo homeowners looking to sell often find that a full exterior clean dramatically increases buyer interest — particularly when competing against newer construction in the broader market."
    }
  },
  {
    slug: "harvard-il",
    name: "Harvard",
    state: "IL",
    zip: "60033",
    county: "McHenry County",
    population: "9,000+",
    medianIncome: "$65,000",
    homeValue: "$185,000",
    description: "McHenry County's northernmost city with a strong community identity, older housing stock, and homeowners who value reliable local service providers.",
    localContext: "Harvard sits at the northern edge of McHenry County — close enough to the Wisconsin border that it has a slightly different character than the county's southern suburbs. Older homes, established neighborhoods, and a tight-knit community where word travels fast. Rob's reputation for honest work and showing up when promised resonates strongly here.",
    neighborhoods: ["Downtown Harvard", "East Harvard", "Country Club"],
    nearbyCity: "Woodstock",
    distanceFromWoodstock: "16 miles north",
    lat: 42.4228,
    lng: -88.6126,
    serviceContext: {
      "gutter-cleaning": "Harvard's northern location means slightly longer winters and more freeze-thaw cycles — making proper gutter function even more critical to prevent ice dam formation and foundation damage.",
      "soft-washing": "Harvard's older housing stock has significant mold and algae accumulation. Rob's soft wash service is particularly impactful on older Harvard homes where professional cleaning hasn't been done in years.",
      "roof-washing": "Harvard's longer winter season and mature tree coverage create ideal conditions for algae and moss growth on rooftops. Early professional treatment prevents accelerated shingle deterioration.",
      "window-cleaning": "Harvard homeowners appreciate Rob's thorough window cleaning service — particularly on older homes with original windows that have years of buildup.",
      "pressure-washing": "Harvard driveways and sidewalks take significant road salt damage through the long northern Illinois winter. Spring pressure washing is one of the most valuable services for Harvard homeowners.",
      "deck-wash-staining": "Harvard's colder, longer winters are particularly hard on unprotected wood. Professional deck washing and staining is critical to prevent the accelerated deterioration that comes from extended freeze-thaw exposure.",
      "lawn-cleanup": "Harvard's mature neighborhoods and larger lots make spring and fall cleanup major undertakings. Rob's full-service approach handles debris, trimming, and hauling in a single visit.",
      "curb-appeal-packages": "Harvard homeowners preparing to sell benefit significantly from a full exterior clean — particularly when positioning against newer construction in nearby communities."
    }
  },
  {
    slug: "mchenry-il",
    name: "McHenry",
    state: "IL",
    zip: "60050",
    county: "McHenry County",
    population: "27,000+",
    medianIncome: "$80,000",
    homeValue: "$245,000",
    description: "The county's namesake city sitting along the Fox River with a vibrant downtown, strong waterfront community, and diverse housing stock from historic to contemporary.",
    localContext: "McHenry is one of the county's larger cities with a strong identity built around the Fox River, its historic downtown, and a housing market that spans everything from river cottages to newer subdivisions. River proximity means elevated humidity and faster exterior deterioration — making professional maintenance more important than in drier inland communities.",
    neighborhoods: ["Downtown McHenry", "Riverside Drive", "Whispering Oaks", "Legend Lakes"],
    nearbyCity: "Crystal Lake",
    distanceFromWoodstock: "11 miles east",
    lat: 42.3314,
    lng: -88.2626,
    serviceContext: {
      "gutter-cleaning": "McHenry's Fox River location and mature tree coverage mean gutters that fill quickly and develop organic growth. Riverside properties in particular need more frequent professional cleaning.",
      "soft-washing": "McHenry's river proximity creates elevated humidity that accelerates mold and algae growth on home exteriors. Soft washing is particularly impactful for McHenry homes.",
      "roof-washing": "McHenry rooftops facing the river or sitting under mature trees develop algae and moss faster than average. Rob's soft wash treatment addresses the root cause rather than just the surface appearance.",
      "window-cleaning": "McHenry's river environment creates mineral deposits and water spots on windows, particularly for homes near the Fox River. Professional cleaning removes buildup that standard cleaning can't address.",
      "pressure-washing": "McHenry driveways and riverfront patios show significant weathering. Spring pressure washing is one of the most dramatic transformations Rob performs throughout the city.",
      "deck-wash-staining": "McHenry's riverside decks face some of the harshest conditions in the county. Regular professional washing and staining is critical to maintaining both appearance and structural integrity.",
      "lawn-cleanup": "McHenry's larger river-adjacent properties make professional seasonal cleanup an efficient choice — particularly for riverside homes with significant debris from overhanging trees.",
      "curb-appeal-packages": "McHenry's active real estate market — driven in part by Fox River appeal — makes exterior presentation critical for homeowners looking to sell or simply take pride in their property."
    }
  },
  {
    slug: "cary-il",
    name: "Cary",
    state: "IL",
    zip: "60013",
    county: "McHenry County",
    population: "18,000+",
    medianIncome: "$89,000",
    homeValue: "$270,000",
    description: "A family-friendly McHenry County community with excellent schools, established neighborhoods, and strong homeowner pride throughout the village.",
    localContext: "Cary is a tight-knit community where neighbors know each other and word-of-mouth matters. Homeowners here take their properties seriously — the village's quiet, established character reflects a community that values maintenance and curb appeal. Rob's approach of showing up when he says, doing what he promises, and being fair with pricing fits perfectly with Cary's community values.",
    neighborhoods: ["Downtown Cary", "Fox River Shores", "Fieldstone", "Tanglewood"],
    nearbyCity: "Crystal Lake",
    distanceFromWoodstock: "14 miles east",
    lat: 42.2119,
    lng: -88.2390,
    serviceContext: {
      "gutter-cleaning": "Cary's established neighborhoods have mature tree canopies that fill gutters heavily each fall. Spring seed pod season adds a second significant buildup period for most homes.",
      "soft-washing": "Cary's mature tree coverage and established neighborhoods mean many homes have significant mold and algae accumulation on siding — particularly on north-facing and shaded walls.",
      "roof-washing": "Cary's shaded rooftops develop algae and moss at above-average rates. Rob's soft wash treatment is particularly effective for Cary homes with significant tree coverage.",
      "window-cleaning": "Cary homeowners appreciate meticulous window cleaning — the village's community pride means residents want their properties to look their best from the street.",
      "pressure-washing": "Cary driveways and patios show significant road salt and winter damage each spring. Professional pressure washing restores surfaces to like-new condition efficiently.",
      "deck-wash-staining": "Cary's family-oriented community means decks that get used heavily. Regular washing and staining protects the investment and keeps outdoor living spaces looking great.",
      "lawn-cleanup": "Cary's mature landscaping and HOA-influenced community standards make professional lawn cleanup valuable for homeowners who want their properties to stand out.",
      "curb-appeal-packages": "Cary's strong community identity and homeowner pride make full exterior packages popular — residents here genuinely care how their homes look from the street."
    }
  },
  {
    slug: "lake-in-the-hills-il",
    name: "Lake in the Hills",
    state: "IL",
    zip: "60156",
    county: "McHenry County",
    population: "29,000+",
    medianIncome: "$94,000",
    homeValue: "$285,000",
    description: "One of McHenry County's fastest-growing communities with newer construction, high household incomes, and homeowners who expect professional-quality exterior maintenance.",
    localContext: "Lake in the Hills has grown rapidly over the past two decades into one of McHenry County's most desirable communities. High household incomes, newer construction, and a homeowner base that expects quality service make LITH one of the strongest markets for professional exterior cleaning in the county. Homes here are well-maintained — and owners notice immediately when something doesn't meet their standards.",
    neighborhoods: ["Turnberry", "Chesapeake", "Lake in the Hills Estates", "Terrace Hill"],
    nearbyCity: "Algonquin",
    distanceFromWoodstock: "20 miles southeast",
    lat: 42.1875,
    lng: -88.3434,
    serviceContext: {
      "gutter-cleaning": "Lake in the Hills' newer homes are entering their first major maintenance cycles. Homeowners here expect professional, thorough service — and Rob delivers exactly that.",
      "soft-washing": "LITH's newer vinyl and fiber cement siding develops mold and algae as homes age. Soft washing restores the bright, clean appearance these homeowners expect from their properties.",
      "roof-washing": "Newer LITH roofs are showing early algae growth. Professional soft wash treatment now prevents the accelerated deterioration that comes from letting algae establish itself.",
      "window-cleaning": "Lake in the Hills homeowners expect pristine results. Rob's thorough, streak-free window cleaning service matches the quality expectations of this community.",
      "pressure-washing": "LITH driveways and patios maintain their appearance with annual or bi-annual professional pressure washing. Homeowners here invest in maintenance as a matter of pride and property value.",
      "deck-wash-staining": "Lake in the Hills' newer decks are reaching the age where professional maintenance delivers the most impact. Staining now protects the investment and keeps decks looking new.",
      "lawn-cleanup": "LITH's larger lot sizes and manicured landscaping make professional seasonal cleanup a standard part of property maintenance for many homeowners in the community.",
      "curb-appeal-packages": "Lake in the Hills' high homeowner standards and strong property values make full exterior packages a natural fit. Homeowners here invest in their properties — and expect professional results."
    }
  }
]

export function getCity(slug: string): City | undefined {
  return cities.find(c => c.slug === slug)
}

export function getCityName(slug: string): string {
  return cities.find(c => c.slug === slug)?.name ?? slug
}
