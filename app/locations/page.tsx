import type { Metadata } from "next"
import Link from "next/link"
import { cities } from "@/lib/cities"
import { services } from "@/lib/services"
import CTAStrip from "@/components/CTAStrip"

export const metadata: Metadata = {
  title: "Service Areas | McHenry County IL | Rob's Exterior Services",
  description: "Rob's Exterior Services serves all of McHenry County, IL. Professional exterior cleaning in Woodstock, Crystal Lake, Huntley, Algonquin, Marengo, Harvard, McHenry, Cary & Lake in the Hills.",
}

export default function LocationsPage() {
  return (
    <>
      <section style={{ padding: '140px 0 80px', background: '#0A0A0A', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,168,76,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: 20 }}>McHenry County, Illinois</p>
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(48px,8vw,96px)', textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: '-1px', marginBottom: 24 }}>
            Service <span className="gold-text">Areas</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Rob's Exterior Services covers Woodstock, IL and all surrounding McHenry County communities.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#0d0d0d' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 16 }}>
            {cities.map(city => (
              <Link key={city.slug} href={`/locations/${city.slug}`} style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 4, padding: '36px 28px', textDecoration: 'none', display: 'block' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                  <div>
                    <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 26, textTransform: 'uppercase', letterSpacing: '1px', color: '#fff', marginBottom: 4 }}>{city.name}</h2>
                    <p style={{ fontFamily: 'Oswald, sans-serif', fontSize: 10, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)' }}>{city.county} · {city.zip}</p>
                  </div>
                  <span style={{ fontSize: 10, fontFamily: 'Oswald, sans-serif', fontWeight: 700, color: 'rgba(255,255,255,0.2)', letterSpacing: '1px', textTransform: 'uppercase', textAlign: 'right' }}>{city.distanceFromWoodstock}</span>
                </div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, marginBottom: 20 }}>{city.description.slice(0, 140)}...</p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, marginBottom: 20 }}>
                  {[{ v: city.population, l: 'Population' },{ v: city.medianIncome, l: 'Med. Income' },{ v: city.homeValue, l: 'Home Value' }].map(s => (
                    <div key={s.l} style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 13, color: '#C9A84C' }}>{s.v}</div>
                      <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '1px', marginTop: 2 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {services.slice(0, 4).map(s => (
                    <span key={s.slug} style={{ fontSize: 9, fontFamily: 'Oswald, sans-serif', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)', border: '1px solid #2a2a2a', padding: '3px 8px', borderRadius: 3 }}>{s.shortName}</span>
                  ))}
                  <span style={{ fontSize: 9, fontFamily: 'Oswald, sans-serif', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(201,168,76,0.5)', border: '1px solid rgba(201,168,76,0.2)', padding: '3px 8px', borderRadius: 3 }}>+{services.length - 4} more</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTAStrip />
    </>
  )
}
