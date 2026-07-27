import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/lib/services'
import { cities } from '@/lib/cities'

const col: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 12 }
const colHead: React.CSSProperties = {
  fontFamily: 'Oswald, sans-serif', fontSize: 11, fontWeight: 600,
  letterSpacing: '4px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 8,
}
const colLink: React.CSSProperties = { fontSize: 14, color: 'rgba(255,255,255,0.35)' }

export default function Footer() {
  return (
    <footer style={{ background: '#060606', borderTop: '2px solid #C9A84C' }}>
      <div className="container" style={{ padding: '72px 32px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 48, marginBottom: 60 }}>
          {/* Brand */}
          <div>
            <Image src="/images/logo transparent.png" alt="Rob's Exterior Services"
              width={160} height={65} style={{ height: 52, width: 'auto', marginBottom: 16, objectFit: 'contain' }} />
            <p style={{ fontSize: 10, fontFamily: 'Oswald, sans-serif', letterSpacing: '4px', textTransform: 'uppercase', color: '#C9A84C', marginBottom: 16 }}>
              Woodstock's Exterior Experts
            </p>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.3)', lineHeight: 1.7, marginBottom: 20 }}>
              Locally owned and operated by Robert Morales. Serving Woodstock, IL and all of McHenry County.
            </p>
            <div style={col}>
              <a href="sms:+18154510106" style={{ ...colLink, color: '#C9A84C', fontWeight: 700 }}>(815) 451-0106</a>
              <a href="mailto:rob@robsexterior.com" style={colLink}>rob@robsexterior.com</a>
              <span style={colLink}>Woodstock, IL 60098</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={colHead}>Services</p>
            <div style={col}>
              {services.map(s => (
                <Link key={s.slug} href={`/services/${s.slug}`} style={{ ...colLink, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 12 }}>{s.icon}</span>{s.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Areas */}
          <div>
            <p style={colHead}>Service Areas</p>
            <div style={col}>
              {cities.map(c => (
                <Link key={c.slug} href={`/locations/${c.slug}`} style={colLink}>{c.name}, IL</Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p style={colHead}>Get a Free Quote</p>
            <p style={{ ...colLink, lineHeight: 1.7, marginBottom: 20 }}>
              Text Rob directly. No sales calls. Honest pricing from a local neighbor.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="sms:+18154510106" style={{
                fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 13,
                letterSpacing: '2px', textTransform: 'uppercase',
                background: '#C9A84C', color: '#0A0A0A',
                padding: '14px 20px', borderRadius: 3, textAlign: 'center',
              }}>📱 Text Rob Now</a>
              <a href="tel:+18154510106" style={{
                fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 13,
                letterSpacing: '2px', textTransform: 'uppercase',
                border: '1px solid #2a2a2a', color: 'rgba(255,255,255,0.4)',
                padding: '14px 20px', borderRadius: 3, textAlign: 'center',
              }}>📞 (815) 451-0106</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.5px' }}>
            © {new Date().getFullYear()} Rob's Exterior Services · Robert Morales · Woodstock, IL
          </p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>robsexterior.com</p>
        </div>
      </div>
    </footer>
  )
}
