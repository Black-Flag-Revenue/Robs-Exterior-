import type { Metadata } from "next"
import Link from "next/link"
import { services } from "@/lib/services"
import CTAStrip from "@/components/CTAStrip"

export const metadata: Metadata = {
  title: "Exterior Cleaning Services Woodstock IL | Rob's Exterior Services",
  description: "Professional exterior cleaning services in Woodstock, IL. Gutter cleaning, soft washing, roof washing, window cleaning, pressure washing, deck staining & lawn care. Serving McHenry County.",
}

export default function ServicesPage() {
  return (
    <>
      <section style={{ padding: '140px 0 80px', background: '#0A0A0A', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,168,76,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <nav style={{ marginBottom: 32 }}>
            <ol style={{ display: 'flex', gap: 8, fontSize: 12, color: 'rgba(255,255,255,0.3)', listStyle: 'none' }}>
              <li><Link href="/" style={{ color: 'rgba(255,255,255,0.3)' }}>Home</Link></li>
              <li>/</li>
              <li style={{ color: '#C9A84C' }}>Services</li>
            </ol>
          </nav>
          <p className="eyebrow" style={{ marginBottom: 20 }}>Woodstock, IL · McHenry County</p>
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(48px,8vw,96px)', textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: '-1px', marginBottom: 24 }}>
            Our <span className="gold-text">Services</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.45)', maxWidth: 580, lineHeight: 1.7 }}>
            From the roof to the driveway, Rob handles everything on the outside of your home — with honest pricing, no subcontractors, and results you'll notice immediately.
          </p>
        </div>
      </section>

      <section style={{ padding: '80px 0', background: '#0d0d0d' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(480px,1fr))', gap: 16 }}>
            {services.map(service => (
              <Link key={service.slug} href={`/services/${service.slug}`} style={{
                background: '#111', border: '1px solid #1e1e1e', borderRadius: 4,
                padding: '40px 36px', display: 'flex', gap: 28, textDecoration: 'none',
                transition: 'border-color 0.2s',
              }}>
                <div style={{
                  width: 64, height: 64, background: '#1a1a1a', border: '1px solid #2a2a2a',
                  borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 28, flexShrink: 0,
                }}>{service.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                    <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 22, textTransform: 'uppercase', letterSpacing: '1px', color: '#fff' }}>
                      {service.name}
                    </h2>
                    {service.startingPrice && (
                      <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 22, color: '#C9A84C' }}>{service.startingPrice}+</span>
                    )}
                  </div>
                  <p style={{ fontSize: 13, color: '#C9A84C', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 10 }}>{service.tagline}</p>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, marginBottom: 16 }}>{service.heroDesc}</p>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(201,168,76,0.6)' }}>Full Details →</span>
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
