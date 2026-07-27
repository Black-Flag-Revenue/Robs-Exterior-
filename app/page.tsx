import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { services } from "@/lib/services"
import { cities } from "@/lib/cities"
import ReviewCard from "@/components/ReviewCard"
import CTAStrip from "@/components/CTAStrip"

export const metadata: Metadata = {
  title: "Rob's Exterior Services | Woodstock's Exterior Experts | McHenry County IL",
  description: "Rob's Exterior Services — Woodstock IL's most trusted exterior cleaning company. Gutter cleaning, soft washing, roof washing, window cleaning, pressure washing, deck staining & lawn care. Family owned. No subcontractors.",
}

const reviews = [
  { text: "Rob was fantastic to work with and did a fantastic job on my house! He was on time, super courteous, detail oriented, and reasonably priced! I would highly recommend working with him.", name: "Jennifer Fox", location: "Walkup in The Park, IL", initials: "JF" },
  { text: "We recently moved into a home that needed extensive cleanup. Rob hauled, removed and cleaned up two huge piles of debris. He was extremely polite, courteous and respectful of our property.", name: "Cheryl Peterson", location: "Sun City Huntley, IL", initials: "CP" },
  { text: "Great prices and great work ethic. Very honest and family oriented.", name: "Donna Stone", location: "Lilymoor, IL", initials: "DS" },
]

const trustItems = ["Locally Owned & Operated","No Subcontractors","100% Satisfaction Guaranteed","Free Estimates","Serving McHenry County","Family Owned","5-Star Rated","Woodstock, IL Based"]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: '#0A0A0A', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.03) 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 60% at 50% 0%,rgba(27,52,97,0.45),transparent 70%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 40% at 80% 80%,rgba(201,168,76,0.05),transparent 60%)' }} />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '120px 24px 80px', maxWidth: 900, margin: '0 auto', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
            <Image src="/images/logo transparent.png" alt="Rob's Exterior Services"
              width={320} height={130} style={{ height: 'clamp(100px,15vw,140px)', width: 'auto', objectFit: 'contain' }} priority />
          </div>

          <p className="eyebrow" style={{ marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
            <span style={{ width: 48, height: 1, background: 'rgba(201,168,76,0.4)', display: 'inline-block' }} />
            Woodstock's Exterior Experts
            <span style={{ width: 48, height: 1, background: 'rgba(201,168,76,0.4)', display: 'inline-block' }} />
          </p>

          <h1 style={{
            fontFamily: 'Oswald, sans-serif', fontWeight: 900,
            fontSize: 'clamp(52px,10vw,110px)',
            lineHeight: 0.92, textTransform: 'uppercase', letterSpacing: '-1px',
            color: '#fff', marginBottom: 24,
          }}>
            Your Home.<br />
            <span className="gold-text">Our Standards.</span>
          </h1>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center', margin: '28px 0' }}>
            <span style={{ width: 64, height: 1, background: 'linear-gradient(to right,transparent,rgba(201,168,76,0.5))' }} />
            <span style={{ fontSize: 9, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(201,168,76,0.5)', fontFamily: 'Oswald, sans-serif' }}>Woodstock, Illinois</span>
            <span style={{ width: 64, height: 1, background: 'linear-gradient(to left,transparent,rgba(201,168,76,0.5))' }} />
          </div>

          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 48, maxWidth: 600, margin: '0 auto 48px' }}>
            Gutter cleaning · Soft washing · Roof washing · Window cleaning · Pressure washing · Deck staining · Lawn care
          </p>

          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="sms:+18154510106" style={{
              fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 14,
              letterSpacing: '2.5px', textTransform: 'uppercase',
              background: '#C9A84C', color: '#0A0A0A',
              padding: '18px 48px', borderRadius: 3, display: 'inline-flex', alignItems: 'center', gap: 10,
              boxShadow: '0 4px 24px rgba(201,168,76,0.4)',
            }}>📱 Text for a Free Quote</a>
            <Link href="/services" style={{
              fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 14,
              letterSpacing: '2.5px', textTransform: 'uppercase',
              border: '1px solid rgba(255,255,255,0.2)', color: '#fff',
              padding: '18px 48px', borderRadius: 3, display: 'inline-flex', alignItems: 'center', gap: 10,
            }}>View Our Services</Link>
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.2)' }}>
          <span style={{ fontSize: 9, letterSpacing: '4px', textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom,rgba(201,168,76,0.5),transparent)' }} />
        </div>
      </section>

      {/* TRUST TICKER */}
      <div style={{ background: '#060606', borderTop: '1px solid rgba(201,168,76,0.15)', borderBottom: '1px solid rgba(201,168,76,0.15)', padding: '14px 0', overflow: 'hidden' }}>
        <div className="ticker-track" style={{ display: 'flex', width: 'max-content' }}>
          {[...trustItems,...trustItems].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '0 40px', whiteSpace: 'nowrap' }}>
              <div style={{ width: 6, height: 6, background: '#C9A84C', transform: 'rotate(45deg)', flexShrink: 0 }} />
              <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section style={{ padding: '100px 0', background: '#0A0A0A' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 72 }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>What We Do</p>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(36px,5vw,64px)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 20 }}>
              Full-Service <span className="gold-text">Exterior</span> Care
            </h2>
            <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.4)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
              From the roof to the driveway, Rob handles everything on the outside of your home.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
            {services.map(service => (
              <Link key={service.slug} href={`/services/${service.slug}`} style={{
                background: '#111', border: '1px solid #1e1e1e', borderRadius: 4,
                padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: 16,
                transition: 'border-color 0.2s, transform 0.2s',
                textDecoration: 'none',
              }}>
                <span style={{ fontSize: 32 }}>{service.icon}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 18, textTransform: 'uppercase', letterSpacing: '1px', color: '#fff', marginBottom: 8 }}>
                    {service.name}
                  </h3>
                  <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>{service.tagline}</p>
                </div>
                {service.startingPrice && (
                  <div>
                    <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.25)', textTransform: 'uppercase', letterSpacing: '2px', fontFamily: 'Oswald, sans-serif', display: 'block', marginBottom: 2 }}>Starting from</span>
                    <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 28, color: '#C9A84C' }}>{service.startingPrice}</span>
                  </div>
                )}
                <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 11, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(201,168,76,0.6)' }}>Learn More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: '100px 0', background: '#0d0d0d' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 72, alignItems: 'center' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 16 }}>About Rob</p>
              <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(36px,5vw,56px)', textTransform: 'uppercase', letterSpacing: '1px', lineHeight: 1.0, marginBottom: 32 }}>
                Local. Reliable.<br /><span className="gold-text">Trusted.</span>
              </h2>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, marginBottom: 16 }}>
                Robert Morales built Rob's Exterior Services on a simple idea — <strong style={{ color: '#fff' }}>if your name is on it, you do it right.</strong> As a husband and father of four daughters rooted right here in Woodstock, IL, Rob treats every property like it's his own.
              </p>
              <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, marginBottom: 40 }}>
                No subcontractors. No shortcuts. When you hire Rob, <strong style={{ color: '#fff' }}>Rob shows up.</strong>
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 40 }}>
                {[{ num: '100+', label: 'Happy Customers' },{ num: '8', label: 'Services Offered' },{ num: '5★', label: 'Rated Locally' },{ num: '9', label: 'Cities Served' }].map(s => (
                  <div key={s.label} style={{ borderLeft: '2px solid #C9A84C', paddingLeft: 16, paddingTop: 4, paddingBottom: 4 }}>
                    <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 36, color: '#fff', lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/about" style={{
                fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 13,
                letterSpacing: '2px', textTransform: 'uppercase', color: '#C9A84C',
                border: '1px solid rgba(201,168,76,0.4)', padding: '14px 32px', borderRadius: 3, display: 'inline-block',
              }}>Meet Rob →</Link>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', borderRadius: 4, overflow: 'hidden', border: '1px solid #1e1e1e', aspectRatio: '4/5' }}>
                <Image src="/images/rob_photo.jpg" alt="Robert Morales — Rob's Exterior Services Woodstock IL"
                  fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 50vw" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(10,10,10,0.3),transparent)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: '#C9A84C' }} />
              </div>
              <div style={{
                position: 'absolute', bottom: -20, right: -20, width: 112, height: 112,
                borderRadius: '50%', background: '#C9A84C',
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                textAlign: 'center', boxShadow: '0 8px 32px rgba(201,168,76,0.5)',
              }}>
                <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 13, color: '#0A0A0A', lineHeight: 1.3 }}>Locally<br/>Owned</span>
                <span style={{ fontSize: 8, color: 'rgba(10,10,10,0.6)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: 4 }}>Woodstock IL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section style={{ padding: '100px 0', background: '#0A0A0A' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Before & After</p>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(36px,5vw,64px)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              The Work <span className="gold-text">Speaks</span>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: 'auto auto', gap: 12, marginBottom: 40 }}>
            {[
              { src: '/images/front of house 2 .jpeg', alt: 'Soft wash curb appeal Woodstock IL', label: 'Soft Wash · Curb Appeal', col: 'span 2' },
              { src: '/images/exterior window 1 .jpeg', alt: 'Window cleaning Woodstock IL', label: 'Window Cleaning', col: 'span 1' },
              { src: '/images/gutter 1 .jpeg', alt: 'Gutter cleaning Woodstock IL', label: 'Gutter Cleaning', col: 'span 1' },
              { src: '/images/deckstain2.jpg', alt: 'Deck staining Woodstock IL', label: 'Deck Staining', col: 'span 1' },
              { src: '/images/roof_wash_1.jpeg', alt: 'Roof washing before after', label: 'Roof Washing', col: 'span 1' },
            ].map((photo, i) => (
              <div key={i} style={{
                gridColumn: photo.col, position: 'relative', overflow: 'hidden',
                borderRadius: 4, aspectRatio: photo.col === 'span 2' ? '16/9' : '4/3',
              }}>
                <Image src={photo.src} alt={photo.alt} fill
                  style={{ objectFit: 'cover', transition: 'transform 0.5s' }}
                  sizes="(max-width: 768px) 100vw, 50vw" />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px',
                  background: 'linear-gradient(to top,rgba(10,10,10,0.85),transparent)',
                }}>
                  <span style={{
                    fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 10,
                    letterSpacing: '2px', textTransform: 'uppercase', color: '#C9A84C',
                  }}>{photo.label}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/gallery" style={{
              fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 13,
              letterSpacing: '2.5px', textTransform: 'uppercase', color: '#C9A84C',
              border: '1px solid rgba(201,168,76,0.4)', padding: '14px 40px', borderRadius: 3, display: 'inline-block',
            }}>View All Photos →</Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: '100px 0', background: '#0d0d0d' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>What Neighbors Say</p>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(36px,5vw,64px)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Real <span className="gold-text">Reviews</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {reviews.map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section style={{ padding: '100px 0', background: '#0A0A0A' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Where We Work</p>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(36px,5vw,64px)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 16 }}>
              Serving All of <span className="gold-text">McHenry County</span>
            </h2>
            <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.35)', maxWidth: 480, margin: '0 auto' }}>
              Rob covers Woodstock and every major community throughout McHenry County, IL.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
            {cities.map(city => (
              <Link key={city.slug} href={`/locations/${city.slug}`} style={{
                fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 11,
                letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
                border: '1px solid #2a2a2a', padding: '10px 20px', borderRadius: 3,
              }}>{city.name}, IL</Link>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  )
}
