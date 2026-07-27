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
    description: `Professional exterior cleaning in ${city.name}, IL. Gutter cleaning, soft washing, roof washing, window cleaning, pressure washing & more. Serving ${city.name} and McHenry County.`,
  }
}

const reviews = [
  { text: "Rob was fantastic to work with and did a fantastic job on my house! He was on time, super courteous, detail oriented, and reasonably priced!", name: "Jennifer Fox", location: "Walkup in The Park, IL", initials: "JF" },
  { text: "Rob and his worker hauled, removed and cleaned up two huge piles of debris. He was extremely polite, courteous and respectful of our property.", name: "Cheryl Peterson", location: "Sun City Huntley, IL", initials: "CP" },
  { text: "Great prices and great work ethic. Very honest and family oriented.", name: "Donna Stone", location: "Lilymoor, IL", initials: "DS" },
]

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params
  const city = getCity(slug)
  if (!city) notFound()

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: "/" }, { name: "Locations", url: "/locations" }, { name: `${city.name}, IL`, url: `/locations/${city.slug}` }
      ])) }} />

      <section style={{ padding: '140px 0 80px', background: '#0A0A0A', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,168,76,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ol style={{ display: 'flex', gap: 8, fontSize: 12, color: 'rgba(255,255,255,0.3)', listStyle: 'none', marginBottom: 32, flexWrap: 'wrap' }}>
            <li><Link href="/" style={{ color: 'rgba(255,255,255,0.3)' }}>Home</Link></li>
            <li>/</li>
            <li><Link href="/locations" style={{ color: 'rgba(255,255,255,0.3)' }}>Locations</Link></li>
            <li>/</li>
            <li style={{ color: '#C9A84C' }}>{city.name}, IL</li>
          </ol>
          <p className="eyebrow" style={{ marginBottom: 20 }}>{city.county} · Illinois</p>
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(36px,7vw,86px)', textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: '-1px', color: '#fff', marginBottom: 24 }}>
            Exterior Cleaning in <span className="gold-text">{city.name}, IL</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 40, maxWidth: 620 }}>{city.description}</p>
          <a href="sms:+18154510106" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 14, letterSpacing: '2.5px', textTransform: 'uppercase', background: '#C9A84C', color: '#0A0A0A', padding: '16px 40px', borderRadius: 3, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            📱 Text for a Free Quote
          </a>
        </div>
      </section>

      {/* City context */}
      <section style={{ padding: '80px 0', background: '#0d0d0d' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 48 }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 16 }}>About {city.name}</p>
              <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(28px,4vw,42px)', textTransform: 'uppercase', letterSpacing: '1px', color: '#fff', marginBottom: 24 }}>
                Serving <span className="gold-text">{city.name}</span> Homeowners
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, marginBottom: 32 }}>{city.localContext}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12 }}>
                {[{ v: city.population, l: 'Residents' },{ v: city.medianIncome, l: 'Med. Income' },{ v: city.homeValue, l: 'Home Value' }].map(s => (
                  <div key={s.l} style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 4, padding: '20px 12px', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 18, color: '#C9A84C', lineHeight: 1.2 }}>{s.v}</div>
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 4, padding: '32px 28px' }}>
              <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 24 }}>Quick Info</h3>
              {[
                { label: 'County', value: city.county },
                { label: 'ZIP Code', value: city.zip },
                { label: 'Distance from Base', value: city.distanceFromWoodstock },
              ].map(row => (
                <div key={row.label} style={{ marginBottom: 20 }}>
                  <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: 4 }}>{row.label}</span>
                  <span style={{ fontSize: 15, color: '#fff' }}>{row.value}</span>
                </div>
              ))}
              <div>
                <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '2px', display: 'block', marginBottom: 8 }}>Neighborhoods</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {city.neighborhoods.map(n => (
                    <span key={n} style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', border: '1px solid #2a2a2a', padding: '4px 10px', borderRadius: 3 }}>{n}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All services in this city */}
      <section style={{ padding: '80px 0', background: '#0A0A0A' }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 16 }}>Available in {city.name}</p>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(28px,4vw,44px)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 40 }}>
            All Services in <span className="gold-text">{city.name}</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 14 }}>
            {services.map(service => (
              <Link key={service.slug} href={`/services/${service.slug}/${city.slug}`} style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 4, padding: '24px 20px', textDecoration: 'none' }}>
                <span style={{ fontSize: 26, display: 'block', marginBottom: 12 }}>{service.icon}</span>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 16, textTransform: 'uppercase', letterSpacing: '1px', color: '#fff', marginBottom: 8 }}>{service.name}</h3>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', lineHeight: 1.6, marginBottom: 12 }}>
                  {(city.serviceContext?.[service.slug] ?? service.description).slice(0, 90)}...
                </p>
                <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(201,168,76,0.6)' }}>Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ padding: '80px 0', background: '#0d0d0d' }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 16 }}>What Neighbors Say</p>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(28px,4vw,44px)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 40 }}>
            Real <span className="gold-text">Reviews</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {reviews.map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
        </div>
      </section>

      <CTAStrip heading={`Ready for Exterior Cleaning in ${city.name}?`} sub={`Text Rob today for a free estimate. Serving ${city.name}, IL and all of McHenry County.`} />
    </>
  )
}
