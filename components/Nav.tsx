'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/lib/services'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const navStyle: React.CSSProperties = {
    position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
    height: 76,
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    padding: '0 40px',
    transition: 'background 0.3s, box-shadow 0.3s',
    background: scrolled ? 'rgba(8,8,8,0.97)' : 'transparent',
    backdropFilter: scrolled ? 'blur(12px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(201,168,76,0.25)' : '1px solid transparent',
  }

  const linkStyle: React.CSSProperties = {
    fontFamily: 'Oswald, sans-serif', fontSize: 11, fontWeight: 700,
    letterSpacing: '2.5px', textTransform: 'uppercase',
    color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s',
  }

  return (
    <header style={navStyle}>
      <Link href="/">
        <Image src="/images/logo transparent.png" alt="Rob's Exterior Services"
          width={160} height={65} style={{ height: 52, width: 'auto', objectFit: 'contain' }} priority />
      </Link>

      {/* Desktop nav */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="desktop-nav">
        {/* Services dropdown */}
        <div style={{ position: 'relative' }}
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}>
          <Link href="/services" style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: 4 }}>
            Services
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          {servicesOpen && (
            <div style={{
              position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)',
              marginTop: 12, width: 260,
              background: '#111', border: '1px solid #2a2a2a', borderRadius: 8,
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)', overflow: 'hidden', zIndex: 100,
            }}>
              <div style={{ padding: 8 }}>
                {services.map(s => (
                  <Link key={s.slug} href={`/services/${s.slug}`} style={{
                    display: 'flex', alignItems: 'center', gap: 12,
                    padding: '10px 16px', borderRadius: 6,
                    fontFamily: 'Lato, sans-serif', fontSize: 14, fontWeight: 600,
                    color: 'rgba(255,255,255,0.7)', transition: 'background 0.2s',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#1a1a1a')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <span style={{ fontSize: 18 }}>{s.icon}</span>
                    {s.name}
                  </Link>
                ))}
              </div>
              <div style={{ borderTop: '1px solid #2a2a2a', padding: '10px 16px' }}>
                <Link href="/services" style={{
                  display: 'block', textAlign: 'center',
                  fontFamily: 'Oswald, sans-serif', fontSize: 10, fontWeight: 700,
                  letterSpacing: '2px', textTransform: 'uppercase', color: '#C9A84C',
                }}>View All Services →</Link>
              </div>
            </div>
          )}
        </div>

        <Link href="/about" style={linkStyle}>About</Link>
        <Link href="/gallery" style={linkStyle}>Gallery</Link>
        <Link href="/locations" style={linkStyle}>Service Areas</Link>

        <a href="sms:+18154510106" style={{
          fontFamily: 'Oswald, sans-serif', fontSize: 12, fontWeight: 700,
          letterSpacing: '2px', textTransform: 'uppercase',
          background: '#C9A84C', color: '#0A0A0A',
          padding: '12px 24px', borderRadius: 3, textDecoration: 'none',
          transition: 'background 0.2s',
        }}>Text for a Quote</a>
      </nav>

      {/* Hamburger */}
      <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger-btn"
        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'none', flexDirection: 'column', gap: 5 }}>
        {[0,1,2].map(i => (
          <span key={i} style={{
            display: 'block', width: 24, height: 2, background: 'white', borderRadius: 2,
            transition: 'all 0.3s',
            transform: menuOpen ? (i === 0 ? 'rotate(45deg) translate(5px,5px)' : i === 2 ? 'rotate(-45deg) translate(5px,-5px)' : '') : '',
            opacity: menuOpen && i === 1 ? 0 : 1,
          }} />
        ))}
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: '#0f0f0f', borderTop: '1px solid #2a2a2a',
          padding: '24px 28px', display: 'flex', flexDirection: 'column', gap: 16,
        }} className="mobile-menu">
          {[{href:'/services',label:'Services'},{href:'/about',label:'About'},{href:'/gallery',label:'Gallery'},{href:'/locations',label:'Service Areas'}].map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              fontFamily: 'Oswald, sans-serif', fontSize: 11, fontWeight: 700,
              letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)',
            }}>{l.label}</Link>
          ))}
          <a href="sms:+18154510106" style={{
            fontFamily: 'Oswald, sans-serif', fontSize: 13, fontWeight: 700,
            letterSpacing: '2px', textTransform: 'uppercase',
            background: '#C9A84C', color: '#0A0A0A',
            padding: '16px 24px', borderRadius: 3, textAlign: 'center', marginTop: 8,
          }}>Text for a Quote</a>
        </div>
      )}

      <style>{`
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
