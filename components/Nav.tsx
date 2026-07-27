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
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-brand-black/97 backdrop-blur-md shadow-[0_2px_0_#C9A84C,0_4px_40px_rgba(0,0,0,0.5)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Rob's Exterior Services home">
          <Image
            src="/images/logo.png"
            alt="Rob's Exterior Services"
            width={160}
            height={60}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Link
              href="/services"
              className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/70 hover:text-white transition-colors flex items-center gap-1"
            >
              Services
              <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-72 bg-brand-dark border border-brand-border rounded-lg shadow-2xl overflow-hidden">
                <div className="p-2">
                  {services.map(s => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-brand-card transition-colors group"
                    >
                      <span className="text-xl">{s.icon}</span>
                      <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                        {s.name}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-brand-border p-3">
                  <Link
                    href="/services"
                    className="block text-center text-[10px] font-bold tracking-[2px] uppercase text-brand-gold hover:text-brand-gold-light transition-colors py-1"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/about" className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/70 hover:text-white transition-colors">
            About
          </Link>
          <Link href="/gallery" className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/70 hover:text-white transition-colors">
            Gallery
          </Link>
          <Link href="/locations" className="text-[11px] font-bold tracking-[2.5px] uppercase text-white/70 hover:text-white transition-colors">
            Service Areas
          </Link>

          <a
            href="sms:+18154510106"
            className="bg-brand-gold text-brand-black font-display font-bold text-[13px] tracking-[2px] uppercase px-6 py-3 rounded-sm hover:bg-brand-gold-light transition-colors"
          >
            Text for a Quote
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-brand-border">
          <div className="px-6 py-6 flex flex-col gap-5">
            <Link href="/services" onClick={() => setMenuOpen(false)} className="text-[11px] font-bold tracking-[3px] uppercase text-white/70">Services</Link>
            {services.map(s => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 pl-4 text-sm text-white/50 hover:text-white"
              >
                <span>{s.icon}</span>
                <span>{s.name}</span>
              </Link>
            ))}
            <Link href="/about" onClick={() => setMenuOpen(false)} className="text-[11px] font-bold tracking-[3px] uppercase text-white/70">About</Link>
            <Link href="/gallery" onClick={() => setMenuOpen(false)} className="text-[11px] font-bold tracking-[3px] uppercase text-white/70">Gallery</Link>
            <Link href="/locations" onClick={() => setMenuOpen(false)} className="text-[11px] font-bold tracking-[3px] uppercase text-white/70">Service Areas</Link>
            <a
              href="sms:+18154510106"
              className="bg-brand-gold text-brand-black font-display font-bold text-[13px] tracking-[2px] uppercase px-6 py-4 rounded-sm text-center"
            >
              Text for a Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
