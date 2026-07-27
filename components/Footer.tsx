import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/lib/services'
import { cities } from '@/lib/cities'

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t-2 border-brand-gold">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Image src="/images/logo transparent.png" alt="Rob's Exterior Services" width={180} height={70} className="h-16 w-auto mb-4" />
            <p className="text-[10px] text-brand-gold tracking-[4px] uppercase mb-4">Woodstock's Exterior Experts</p>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Locally owned and operated by Robert Morales. Serving Woodstock, IL and all of McHenry County with professional exterior cleaning and maintenance.
            </p>
            <div className="flex flex-col gap-2">
              <a href="sms:+18154510106" className="text-sm text-brand-gold font-bold hover:text-brand-gold-light transition-colors">
                (815) 451-0106
              </a>
              <a href="mailto:rob@robsexterior.com" className="text-sm text-white/40 hover:text-white transition-colors">
                rob@robsexterior.com
              </a>
              <span className="text-sm text-white/30">Woodstock, IL 60098</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-[11px] tracking-[4px] uppercase text-brand-gold mb-6">Services</h3>
            <ul className="flex flex-col gap-3">
              {services.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-xs">{s.icon}</span>
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-display font-semibold text-[11px] tracking-[4px] uppercase text-brand-gold mb-6">Service Areas</h3>
            <ul className="flex flex-col gap-3">
              {cities.map(c => (
                <li key={c.slug}>
                  <Link href={`/locations/${c.slug}`} className="text-sm text-white/40 hover:text-white transition-colors">
                    {c.name}, IL
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-display font-semibold text-[11px] tracking-[4px] uppercase text-brand-gold mb-6">Get a Free Quote</h3>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Text Rob directly for a fast, fair quote. No sales calls. No pressure. Just honest pricing from a local neighbor.
            </p>
            <a
              href="sms:+18154510106"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-black font-display font-bold text-[13px] tracking-[2px] uppercase px-6 py-4 rounded-sm hover:bg-brand-gold-light transition-colors w-full justify-center"
            >
              📱 Text Rob Now
            </a>
            <a
              href="tel:+18154510106"
              className="mt-3 inline-flex items-center gap-2 border border-brand-border text-white/50 font-display font-bold text-[13px] tracking-[2px] uppercase px-6 py-4 rounded-sm hover:border-brand-gold hover:text-white transition-colors w-full justify-center"
            >
              📞 Call (815) 451-0106
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/20 tracking-wide">
            © {new Date().getFullYear()} Rob's Exterior Services · Robert Morales · Woodstock, IL · All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <Link href="/sitemap.xml" className="text-xs text-white/20 hover:text-white/40 transition-colors">Sitemap</Link>
            <span className="text-xs text-white/20">robsexterior.com</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
