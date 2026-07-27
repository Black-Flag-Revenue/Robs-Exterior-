import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { cities, getCity } from "@/lib/cities"
import { services } from "@/lib/services"
import { breadcrumbSchema } from "@/lib/schema"
import ReviewCard from "@/components/ReviewCard"
import CTAStrip from "@/components/CTAStrip"

export async function generateStaticParams() {
  return cities.map(c => ({ city: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city: slug } = await params
  const city = getCity(slug)
  if (!city) return {}
  return {
    title: `Exterior Cleaning ${city.name}, IL | Rob's Exterior Services`,
    description: `Professional exterior cleaning in ${city.name}, IL. Gutter cleaning, soft washing, roof washing, window cleaning, pressure washing & more. Rob's Exterior Services — McHenry County's trusted local experts.`,
    keywords: [`exterior cleaning ${city.name} IL`, `gutter cleaning ${city.name}`, `soft washing ${city.name} Illinois`, `pressure washing ${city.name} IL`],
  }
}

const reviews = [
  { text: "Rob was fantastic to work with and did a fantastic job on my house! He was on time, super courteous, detail oriented, and reasonably priced!", name: "Jennifer Fox", location: "Walkup in The Park, IL", initials: "JF" },
  { text: "Rob and his worker hauled, removed and cleaned up two huge piles of debris. Extremely polite, courteous and respectful of our property.", name: "Cheryl Peterson", location: "Sun City Huntley, IL", initials: "CP" },
  { text: "Great prices and great work ethic. Very honest and family oriented.", name: "Donna Stone", location: "Lilymoor, IL", initials: "DS" },
]

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params
  const city = getCity(slug)
  if (!city) notFound()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Locations", url: "/locations" },
        { name: `${city.name}, IL`, url: `/locations/${city.slug}` }
      ])) }} />

      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="flex mb-8">
            <ol className="flex items-center gap-2 text-xs text-white/30 tracking-wide">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/locations" className="hover:text-white transition-colors">Locations</Link></li>
              <li>/</li>
              <li className="text-brand-gold">{city.name}, IL</li>
            </ol>
          </nav>
          <p className="section-label mb-4">{city.county} · {city.state}</p>
          <h1 className="font-display font-black text-[clamp(40px,7vw,88px)] uppercase tracking-tight leading-[0.95] mb-6 text-white">
            Exterior Cleaning in <span className="gold-text">{city.name}, IL</span>
          </h1>
          <p className="text-white/55 text-xl leading-relaxed mb-10 max-w-2xl">{city.description}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="sms:+18154510106" className="bg-brand-gold text-brand-black font-display font-bold text-[14px] tracking-[2.5px] uppercase px-10 py-5 rounded-sm hover:bg-brand-gold-light transition-all flex items-center justify-center gap-3">
              📱 Text for a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* City context */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="section-label mb-4">About {city.name}</p>
              <h2 className="font-display font-black text-4xl uppercase tracking-wide mb-6 text-white">
                Serving <span className="gold-text">{city.name}</span> Homeowners
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-6">{city.localContext}</p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-brand-card border border-brand-border rounded-sm p-5 text-center">
                  <div className="font-display font-black text-2xl text-brand-gold">{city.population}</div>
                  <div className="text-[10px] text-white/30 tracking-[2px] uppercase mt-1">Residents</div>
                </div>
                <div className="bg-brand-card border border-brand-border rounded-sm p-5 text-center">
                  <div className="font-display font-black text-2xl text-brand-gold">{city.medianIncome}</div>
                  <div className="text-[10px] text-white/30 tracking-[2px] uppercase mt-1">Med. Income</div>
                </div>
                <div className="bg-brand-card border border-brand-border rounded-sm p-5 text-center">
                  <div className="font-display font-black text-2xl text-brand-gold">{city.homeValue}</div>
                  <div className="text-[10px] text-white/30 tracking-[2px] uppercase mt-1">Home Value</div>
                </div>
              </div>
            </div>
            <div className="bg-brand-card border border-brand-border rounded-sm p-8">
              <h3 className="font-display font-bold text-sm uppercase tracking-[3px] text-brand-gold mb-6">Quick Info</h3>
              <div className="flex flex-col gap-4">
                <div><span className="text-[10px] text-white/30 uppercase tracking-[2px] block mb-1">County</span><span className="text-white text-sm">{city.county}</span></div>
                <div><span className="text-[10px] text-white/30 uppercase tracking-[2px] block mb-1">ZIP Code</span><span className="text-white text-sm">{city.zip}</span></div>
                <div><span className="text-[10px] text-white/30 uppercase tracking-[2px] block mb-1">Distance from Base</span><span className="text-white text-sm">{city.distanceFromWoodstock}</span></div>
                <div><span className="text-[10px] text-white/30 uppercase tracking-[2px] block mb-1">Neighborhoods</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {city.neighborhoods.map(n => <span key={n} className="text-[10px] text-white/40 border border-brand-border px-2 py-1 rounded-sm">{n}</span>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in this city */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Available in {city.name}</p>
          <h2 className="font-display font-black text-4xl uppercase tracking-wide mb-12">
            All Services in <span className="gold-text">{city.name}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(service => (
              <Link key={service.slug} href={`/services/${service.slug}/${city.slug}`} className="group bg-brand-card border border-brand-border hover:border-brand-gold/40 rounded-sm p-6 transition-all hover:-translate-y-1">
                <span className="text-2xl mb-3 block">{service.icon}</span>
                <h3 className="font-display font-bold text-base uppercase tracking-wide text-white group-hover:text-brand-gold transition-colors mb-2">{service.name}</h3>
                <p className="text-white/35 text-xs leading-relaxed mb-4">{city.serviceContext[service.slug]?.slice(0, 100) ?? service.description.slice(0, 100)}...</p>
                <span className="text-[10px] font-bold tracking-[2px] uppercase text-brand-gold/60 group-hover:text-brand-gold transition-colors">Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">What Neighbors Say</p>
          <h2 className="font-display font-black text-4xl uppercase tracking-wide mb-12">
            Real <span className="gold-text">Reviews</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
        </div>
      </section>

      <CTAStrip heading={`Ready for Exterior Cleaning in ${city.name}?`} sub={`Text Rob today for a free estimate. Serving ${city.name}, IL and all of McHenry County.`} />
    </>
  )
}
