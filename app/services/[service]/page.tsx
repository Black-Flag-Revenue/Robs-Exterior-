import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { services, getService } from "@/lib/services"
import { cities } from "@/lib/cities"
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema"
import CTAStrip from "@/components/CTAStrip"
import FAQ from "@/components/FAQ"

export async function generateStaticParams() {
  return services.map(s => ({ service: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDesc,
    keywords: service.keywords,
  }
}

const s = { color: 'rgba(255,255,255,0.55)', fontSize: 17, lineHeight: '1.9' }

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params
  const service = getService(slug)
  if (!service) notFound()
  const related = service.relatedServices.map(r => services.find(x => x.slug === r)).filter(Boolean)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(service.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: "/" }, { name: "Services", url: "/services" }, { name: service.name, url: `/services/${service.slug}` }
      ])) }} />

      {/* Hero */}
      <section style={{ padding: '140px 0 80px', background: '#0A0A0A', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,168,76,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <ol style={{ display: 'flex', gap: 8, fontSize: 12, color: 'rgba(255,255,255,0.3)', listStyle: 'none', marginBottom: 32, flexWrap: 'wrap' }}>
            <li><Link href="/" style={{ color: 'rgba(255,255,255,0.3)' }}>Home</Link></li>
            <li>/</li>
            <li><Link href="/services" style={{ color: 'rgba(255,255,255,0.3)' }}>Services</Link></li>
            <li>/</li>
            <li style={{ color: '#C9A84C' }}>{service.name}</li>
          </ol>
          <p className="eyebrow" style={{ marginBottom: 20 }}>Woodstock, IL · McHenry County</p>
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(44px,8vw,92px)', textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: '-1px', color: '#fff', marginBottom: 20 }}>
            {service.name}
          </h1>
          <p style={{ fontSize: 20, color: '#C9A84C', fontWeight: 600, marginBottom: 16, letterSpacing: '0.5px' }}>{service.tagline}</p>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 40, maxWidth: 620 }}>{service.heroDesc}</p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="sms:+18154510106" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 14, letterSpacing: '2.5px', textTransform: 'uppercase', background: '#C9A84C', color: '#0A0A0A', padding: '16px 40px', borderRadius: 3, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              📱 Text for a Free Quote
            </a>
            <a href="tel:+18154510106" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 14, letterSpacing: '2.5px', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '16px 40px', borderRadius: 3, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              📞 (815) 451-0106
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section style={{ padding: '80px 0', background: '#0d0d0d' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(380px,1fr))', gap: 64, alignItems: 'start' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 16 }}>{service.name} · Woodstock, IL</p>
              <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(28px,4vw,44px)', textTransform: 'uppercase', letterSpacing: '1px', color: '#fff', marginBottom: 32 }}>
                {service.name} in <span className="gold-text">Woodstock, IL</span>
              </h2>
              {service.longDescription.split('\n\n').map((para, i) => (
                <p key={i} style={{ ...s, marginBottom: 20 }} dangerouslySetInnerHTML={{ __html: para.replace(/<strong>/g,'<strong style="color:#fff;font-weight:700">') }} />
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div style={{ position: 'relative', borderRadius: 4, overflow: 'hidden', border: '1px solid #1e1e1e', aspectRatio: '4/3' }}>
                <Image src={service.image} alt={`${service.name} Woodstock IL`} fill style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 100vw, 50vw" />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: '#C9A84C' }} />
              </div>
              <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 4, padding: '32px 28px' }}>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 16, textTransform: 'uppercase', letterSpacing: '2px', color: '#fff', marginBottom: 24 }}>What's Included</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {service.benefits.map((b, i) => (
                    <li key={i} style={{ display: 'flex', gap: 12, fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                      <span style={{ width: 20, height: 20, background: '#C9A84C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '80px 0', background: '#0A0A0A' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>How It Works</p>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(32px,5vw,52px)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Simple. Fast. <span className="gold-text">Done Right.</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 16 }}>
            {service.process.map((step, i) => (
              <div key={i} style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 4, padding: '36px 28px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 56, color: 'rgba(201,168,76,0.1)', lineHeight: 1, marginBottom: 16 }}>{step.step}</div>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 17, textTransform: 'uppercase', letterSpacing: '1px', color: '#fff', marginBottom: 12 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service in other cities */}
      <section style={{ padding: '60px 0', background: '#0d0d0d' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p className="eyebrow" style={{ marginBottom: 12 }}>Where We Work</p>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(24px,4vw,40px)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {service.name} Throughout <span className="gold-text">McHenry County</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {cities.map(city => (
              <Link key={city.slug} href={`/services/${service.slug}/${city.slug}`} style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', border: '1px solid #2a2a2a', padding: '9px 18px', borderRadius: 3 }}>
                {city.name}, IL
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FAQ faqs={service.faqs} heading={`${service.name} FAQs`} />

      {/* Related */}
      {related.length > 0 && (
        <section style={{ padding: '80px 0', background: '#0d0d0d' }}>
          <div className="container">
            <p className="eyebrow" style={{ marginBottom: 16 }}>Also Available</p>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(28px,4vw,44px)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 40 }}>
              Related <span className="gold-text">Services</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
              {related.map(rel => rel && (
                <Link key={rel.slug} href={`/services/${rel.slug}`} style={{ background: '#111', borderTop: '2px solid #C9A84C', borderLeft: '1px solid #1e1e1e', borderRight: '1px solid #1e1e1e', borderBottom: '1px solid #1e1e1e', borderRadius: 4, padding: '32px 28px', textDecoration: 'none' }}>
                  <span style={{ fontSize: 28, display: 'block', marginBottom: 16 }}>{rel.icon}</span>
                  <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 20, textTransform: 'uppercase', letterSpacing: '1px', color: '#fff', marginBottom: 12 }}>{rel.name}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, marginBottom: 16 }}>{rel.description}</p>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: '#C9A84C' }}>Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTAStrip heading={`Ready for Professional ${service.name}?`} />
    </>
  )
}
