import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { services, getService } from "@/lib/services"
import { cities, getCity } from "@/lib/cities"
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema"
import CTAStrip from "@/components/CTAStrip"
import FAQ from "@/components/FAQ"

export async function generateStaticParams() {
  return services.flatMap(s => cities.map(c => ({ service: s.slug, city: c.slug })))
}

export async function generateMetadata({ params }: { params: Promise<{ service: string; city: string }> }): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params
  const service = getService(serviceSlug)
  const city = getCity(citySlug)
  if (!service || !city) return {}
  return {
    title: `${service.name} in ${city.name}, IL | Rob's Exterior Services`,
    description: `Professional ${service.name.toLowerCase()} in ${city.name}, IL. ${service.description} Text Rob for a free estimate.`,
  }
}

export default async function ServiceCityPage({ params }: { params: Promise<{ service: string; city: string }> }) {
  const { service: serviceSlug, city: citySlug } = await params
  const service = getService(serviceSlug)
  const city = getCity(citySlug)
  if (!service || !city) notFound()

  const localContext = city.serviceContext?.[service.slug] ?? service.description
  const otherCities = cities.filter(c => c.slug !== city.slug).slice(0, 6)
  const related = service.relatedServices.map(r => services.find(x => x.slug === r)).filter(Boolean)
  const cityFaqs = [
    ...service.faqs.slice(0, 3),
    { q: `Do you service ${city.name}, IL for ${service.name.toLowerCase()}?`, a: `Yes — Rob's Exterior Services provides professional ${service.name.toLowerCase()} throughout ${city.name} and all of McHenry County, IL. Text Rob at (815) 451-0106 for a free estimate.` },
    { q: `How far is ${city.name} from your base in Woodstock?`, a: `${city.name} is ${city.distanceFromWoodstock} from Rob's home base in Woodstock, IL. Rob regularly serves ${city.name} with the same quality he brings to every job throughout McHenry County.` },
  ]

  const textMuted: React.CSSProperties = { fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, marginBottom: 20 }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service, city)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(cityFaqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: "/" }, { name: "Services", url: "/services" },
        { name: service.name, url: `/services/${service.slug}` },
        { name: city.name, url: `/services/${service.slug}/${city.slug}` }
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
            <li><Link href={`/services/${service.slug}`} style={{ color: 'rgba(255,255,255,0.3)' }}>{service.name}</Link></li>
            <li>/</li>
            <li style={{ color: '#C9A84C' }}>{city.name}, IL</li>
          </ol>
          <p className="eyebrow" style={{ marginBottom: 20 }}>{city.name}, IL · {city.county}</p>
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(36px,7vw,86px)', textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: '-1px', color: '#fff', marginBottom: 20 }}>
            {service.name} in <span className="gold-text">{city.name}, IL</span>
          </h1>
          <p style={{ fontSize: 20, color: '#C9A84C', fontWeight: 600, marginBottom: 16 }}>{service.tagline}</p>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, marginBottom: 40, maxWidth: 620 }}>{service.heroDesc}</p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <a href="sms:+18154510106" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 14, letterSpacing: '2.5px', textTransform: 'uppercase', background: '#C9A84C', color: '#0A0A0A', padding: '16px 40px', borderRadius: 3, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              📱 Text for a Free Quote
            </a>
            <a href="tel:+18154510106" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 14, letterSpacing: '2.5px', textTransform: 'uppercase', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '16px 40px', borderRadius: 3 }}>
              📞 (815) 451-0106
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '80px 0', background: '#0d0d0d' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(380px,1fr))', gap: 64, alignItems: 'start' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 16 }}>{service.name} · {city.name}, IL</p>
              <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(28px,4vw,42px)', textTransform: 'uppercase', letterSpacing: '1px', color: '#fff', marginBottom: 28 }}>
                Why {city.name} Homeowners Choose <span className="gold-text">Rob</span>
              </h2>
              <p style={textMuted}>{localContext}</p>
              <p style={textMuted}>{city.localContext}</p>

              {/* City stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 12, margin: '32px 0' }}>
                {[{ v: city.population, l: 'Residents' },{ v: city.medianIncome, l: 'Med. Income' },{ v: city.homeValue, l: 'Home Value' }].map(stat => (
                  <div key={stat.l} style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 4, padding: '16px 12px', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 15, color: '#C9A84C', lineHeight: 1.2 }}>{stat.v}</div>
                    <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.3)', letterSpacing: '1.5px', textTransform: 'uppercase', marginTop: 4 }}>{stat.l}</div>
                  </div>
                ))}
              </div>

              {service.longDescription.split('\n\n').map((para, i) => (
                <p key={i} style={textMuted} dangerouslySetInnerHTML={{ __html: para.replace(/<strong>/g,'<strong style="color:#fff;font-weight:700">') }} />
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ position: 'relative', borderRadius: 4, overflow: 'hidden', border: '1px solid #1e1e1e', aspectRatio: '4/3' }}>
                <Image src={service.image} alt={`${service.name} ${city.name} IL`} fill style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 100vw, 50vw" />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: '#C9A84C' }} />
                <div style={{ position: 'absolute', bottom: 12, left: 12, background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(8px)', padding: '6px 12px', borderRadius: 3 }}>
                  <p style={{ fontFamily: 'Oswald, sans-serif', fontSize: 10, fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#C9A84C' }}>{service.name} · {city.name}, IL</p>
                </div>
              </div>

              <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 4, padding: '28px 24px' }}>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 14, textTransform: 'uppercase', letterSpacing: '3px', color: '#fff', marginBottom: 20 }}>What's Included</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {service.benefits.map((b, i) => (
                    <li key={i} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                      <span style={{ width: 18, height: 18, background: '#C9A84C', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 4, padding: '20px 24px' }}>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 11, textTransform: 'uppercase', letterSpacing: '3px', color: '#C9A84C', marginBottom: 14 }}>Also Serving Near {city.name}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {otherCities.map(c => (
                    <Link key={c.slug} href={`/services/${service.slug}/${c.slug}`} style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 10, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', border: '1px solid #2a2a2a', padding: '6px 12px', borderRadius: 3 }}>
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '80px 0', background: '#0A0A0A' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Our Process</p>
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

      <FAQ faqs={cityFaqs} heading={`${service.name} in ${city.name} — FAQs`} />

      {related.length > 0 && (
        <section style={{ padding: '80px 0', background: '#0d0d0d' }}>
          <div className="container">
            <p className="eyebrow" style={{ marginBottom: 16 }}>Also Available in {city.name}</p>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(28px,4vw,44px)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 40 }}>
              Related <span className="gold-text">Services</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
              {related.map(rel => rel && (
                <Link key={rel.slug} href={`/services/${rel.slug}/${city.slug}`} style={{ background: '#111', borderTop: '2px solid #C9A84C', border: '1px solid #1e1e1e', borderRadius: 4, padding: '32px 28px', textDecoration: 'none' }}>
                  <span style={{ fontSize: 28, display: 'block', marginBottom: 16 }}>{rel.icon}</span>
                  <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 18, textTransform: 'uppercase', letterSpacing: '1px', color: '#fff', marginBottom: 10 }}>{rel.name} in {city.name}</h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, marginBottom: 16 }}>{rel.description}</p>
                  <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: '#C9A84C' }}>Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTAStrip heading={`Ready for ${service.name} in ${city.name}?`} sub={`Text Rob today for a free estimate. Serving ${city.name} and all of McHenry County.`} />
    </>
  )
}
