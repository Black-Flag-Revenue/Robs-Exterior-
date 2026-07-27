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
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#080808]/95 backdrop-blur-md border-b border-[#C9A84C]/30 shadow-[0_4px_40px_rgba(0,0,0,0.6)]' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <Link href="/" aria-label="Rob's Exterior Services">
          <Image
            src="/images/logo transparent.png"
            alt="Rob's Exterior Services"
            width={180}
            height={70}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          <div className="relative group"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link href="/services" className="flex items-center gap-1.5 text-[11px] font-bold tracking-[2.5px] uppercase text-white/70 hover:text-white transition-colors">
              Services
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-64 bg-[#111] border border-[#2a2a2a] rounded-lg shadow-2xl overflow-hidden z-50">
                <div className="p-2">
                  {services.map(s => (
                    <Link key={s.slug} href={`/services/${s.slug}`}
                      className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-[#1a1a1a] transition-colors group/item"
                    >
                      <span className="text-lg">{s.icon}</span>
                      <span className="text-sm font-semibold text-white/70 group-hover/item:text-white transition-colors">{s.name}</span>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-[#2a2a2a] p-3">
                  <Link href="/services" className="block text-center text-[10px] font-bold tracking-[2px] uppercase text-[#C9A84C] hover:text-[#E8C96A] transition-colors py-1">
                    View All Services →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {[
            { href: '/about', label: 'About' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/locations', label: 'Service Areas' },
          ].map(link => (
            <Link key={link.href} href={link.href}
              className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/70 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}

          <a href="sms:+18154510106"
            className="bg-[#C9A84C] text-[#0A0A0A] font-bold text-[12px] tracking-[2px] uppercase px-6 py-3 rounded-sm hover:bg-[#E8C96A] transition-colors"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            Text for a Quote
          </a>
        </nav>

        {/* Hamburger */}
        <button className="lg:hidden p-2 flex flex-col gap-[5px]" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0f0f0f] border-t border-[#2a2a2a]">
          <div className="px-6 py-6 flex flex-col gap-4">
            <Link href="/services" onClick={() => setMenuOpen(false)} className="text-[11px] font-bold tracking-[3px] uppercase text-white/60 py-2">Services</Link>
            {services.map(s => (
              <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 pl-4 text-sm text-white/40 hover:text-white py-1"
              >
                <span>{s.icon}</span><span>{s.name}</span>
              </Link>
            ))}
            <div className="border-t border-[#2a2a2a] pt-4 flex flex-col gap-4">
              <Link href="/about" onClick={() => setMenuOpen(false)} className="text-[11px] font-bold tracking-[3px] uppercase text-white/60">About</Link>
              <Link href="/gallery" onClick={() => setMenuOpen(false)} className="text-[11px] font-bold tracking-[3px] uppercase text-white/60">Gallery</Link>
              <Link href="/locations" onClick={() => setMenuOpen(false)} className="text-[11px] font-bold tracking-[3px] uppercase text-white/60">Service Areas</Link>
              <a href="sms:+18154510106" className="bg-[#C9A84C] text-[#0A0A0A] font-bold text-[12px] tracking-[2px] uppercase px-6 py-4 rounded-sm text-center mt-2"
                style={{ fontFamily: 'Oswald, sans-serif' }}>
                Text for a Quote
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
