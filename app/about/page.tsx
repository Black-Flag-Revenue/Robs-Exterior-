import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import ReviewCard from "@/components/ReviewCard"
import CTAStrip from "@/components/CTAStrip"

export const metadata: Metadata = {
  title: "About Rob Morales | Rob's Exterior Services | Woodstock IL",
  description: "Meet Robert Morales — owner of Rob's Exterior Services in Woodstock, IL. A husband, father of four daughters, and Woodstock local who built his business on honesty, hard work, and doing the job right.",
}

const reviews = [
  { text: "Rob was fantastic to work with and did a fantastic job on my house! He was on time, super courteous, detail oriented, and reasonably priced!", name: "Jennifer Fox", location: "Walkup in The Park, IL", initials: "JF" },
  { text: "We recently moved into a home that needed extensive cleanup. Rob and his worker hauled, removed and cleaned up two huge piles of debris. He was extremely polite, courteous and respectful of our property.", name: "Cheryl Peterson", location: "Sun City Huntley, IL", initials: "CP" },
  { text: "Great prices and great work ethic. Very honest and family oriented.", name: "Donna Stone", location: "Lilymoor, IL", initials: "DS" },
]

export default function AboutPage() {
  const textMuted: React.CSSProperties = { fontSize: 17, color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, marginBottom: 20 }

  return (
    <>
      <section style={{ padding: '140px 0 80px', background: '#0A0A0A', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(201,168,76,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: 20 }}>Owner & Operator · Woodstock, IL</p>
          <h1 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(48px,8vw,96px)', textTransform: 'uppercase', lineHeight: 0.95, letterSpacing: '-1px', marginBottom: 24 }}>
            Meet <span className="gold-text">Rob</span>
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
            <span style={{ width: 48, height: 1, background: 'rgba(201,168,76,0.4)', display: 'inline-block' }} />
            <span style={{ fontFamily: 'Oswald, sans-serif', fontSize: 10, letterSpacing: '4px', textTransform: 'uppercase', color: 'rgba(201,168,76,0.6)' }}>Robert Morales</span>
            <span style={{ width: 48, height: 1, background: 'rgba(201,168,76,0.4)', display: 'inline-block' }} />
          </div>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.5)', maxWidth: 600, margin: '0 auto', lineHeight: 1.75 }}>
            Husband. Father of four daughters. Woodstock local. The guy who shows up, does the work right, and stands behind every single job.
          </p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '100px 0', background: '#0d0d0d' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(360px,1fr))', gap: 72, alignItems: 'center' }}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 16 }}>The Man Behind the Business</p>
              <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(32px,5vw,52px)', textTransform: 'uppercase', letterSpacing: '1px', lineHeight: 1.0, marginBottom: 32 }}>
                Built on <span className="gold-text">Family Values</span>
              </h2>
              <p style={textMuted}>Robert Morales didn't build Rob's Exterior Services on a business plan. He built it on something simpler — <strong style={{ color: '#fff' }}>the belief that if you're going to put your name on something, you'd better do it right.</strong></p>
              <p style={textMuted}>Rob is a husband and father of four daughters, rooted right here in Woodstock, IL. The same care he puts into his own home is exactly what he brings to every job throughout McHenry County.</p>
              <p style={textMuted}><strong style={{ color: '#fff' }}>No subcontractors. No shortcuts. Rob shows up, Rob does the work, and Rob makes sure you're happy before he leaves.</strong></p>

              <blockquote style={{ borderLeft: '3px solid #C9A84C', paddingLeft: 24, margin: '36px 0' }}>
                <p style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff', lineHeight: 1.4 }}>
                  "When you hire Rob, you're not hiring a company. You're hiring a <span className="gold-text">neighbor</span> who takes pride in his work because his family's name is attached to it."
                </p>
              </blockquote>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ position: 'relative', borderRadius: 4, overflow: 'hidden', border: '1px solid #1e1e1e', aspectRatio: '3/4' }}>
                <Image src="/images/rob_photo.jpg" alt="Robert Morales — Owner of Rob's Exterior Services Woodstock IL"
                  fill style={{ objectFit: 'cover' }} sizes="(max-width: 1024px) 100vw, 50vw" />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(10,10,10,0.3),transparent)' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: '#C9A84C' }} />
              </div>
              <div style={{ position: 'absolute', bottom: -20, right: -20, width: 120, height: 120, borderRadius: '50%', background: '#C9A84C', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', boxShadow: '0 8px 32px rgba(201,168,76,0.5)' }}>
                <span style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 13, color: '#0A0A0A', lineHeight: 1.3 }}>Locally<br/>Owned</span>
                <span style={{ fontSize: 8, color: 'rgba(10,10,10,0.6)', letterSpacing: '1px', textTransform: 'uppercase', marginTop: 4 }}>Woodstock IL</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '100px 0', background: '#0A0A0A' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p className="eyebrow" style={{ marginBottom: 16 }}>What Rob Stands For</p>
            <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(32px,5vw,52px)', textTransform: 'uppercase', letterSpacing: '1px' }}>
              The <span className="gold-text">Standard</span>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 16 }}>
            {[
              { icon: '🤝', title: 'Honesty First', desc: "Rob tells you what your home actually needs — nothing more, nothing less. Fair pricing, straight talk, no upsells you didn't ask for." },
              { icon: '🏠', title: 'Treat It Like His Own', desc: "Rob has a home. He has a family. He knows what it means to care about where you live. Every property gets the same attention he'd give his own." },
              { icon: '📍', title: 'Rooted in Woodstock', desc: "Rob isn't a franchise. He lives here, works here, and cares about this community because it's his community. When you hire Rob, Rob shows up." },
            ].map(v => (
              <div key={v.title} style={{ background: '#111', border: '1px solid #1e1e1e', borderRadius: 4, padding: '44px 36px' }}>
                <span style={{ fontSize: 36, display: 'block', marginBottom: 20 }}>{v.icon}</span>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 20, textTransform: 'uppercase', letterSpacing: '1px', color: '#fff', marginBottom: 16 }}>{v.title}</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '60px 0', background: '#0d0d0d', borderTop: '1px solid #1e1e1e', borderBottom: '1px solid #1e1e1e' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 0 }}>
            {[{ num: '100+', label: 'Happy Customers' },{ num: '8', label: 'Services Offered' },{ num: '5★', label: 'Rated Locally' },{ num: '9', label: 'Cities Served' }].map((s, i) => (
              <div key={s.label} style={{ textAlign: 'center', padding: '40px 20px', borderRight: i < 3 ? '1px solid #1e1e1e' : 'none' }}>
                <div style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 52, color: '#C9A84C', lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '3px', textTransform: 'uppercase' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section style={{ padding: '100px 0', background: '#0A0A0A' }}>
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 16 }}>From the Neighbors</p>
          <h2 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(28px,4vw,44px)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 48 }}>
            What People <span className="gold-text">Say About Rob</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
            {reviews.map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
        </div>
      </section>

      <CTAStrip heading="Ready to meet Rob in person?" sub="Text him today for a free estimate. Fast, honest, and no pressure." />
    </>
  )
}
