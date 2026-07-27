import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/lib/services'
import { cities } from '@/lib/cities'

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t-2 border-[#C9A84C]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Image src="/images/logo transparent.png" alt="Rob's Exterior Services" width={160} height={65} className="h-14 w-auto mb-5 object-contain" />
            <p className="text-[10px] text-[#C9A84C] tracking-[4px] uppercase mb-5" style={{ fontFamily: 'Oswald, sans-serif' }}>Woodstock's Exterior Experts</p>
            <p className="text-sm text-white/35 leading-relaxed mb-6">Locally owned and operated by Robert Morales. Serving Woodstock, IL and all of McHenry County.</p>
            <div className="flex flex-col gap-2.5">
              <a href="sms:+18154510106" className="text-sm font-bold text-[#C9A84C] hover:text-[#E8C96A] transition-colors">(815) 451-0106</a>
              <a href="mailto:rob@robsexterior.com" className="text-sm text-white/35 hover:text-white transition-colors">rob@robsexterior.com</a>
              <span className="text-sm text-white/25">Woodstock, IL 60098</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[4px] uppercase text-[#C9A84C] mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>Services</h3>
            <ul className="flex flex-col gap-2.5">
              {services.map(s => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-sm text-white/35 hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-xs">{s.icon}</span>{s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[4px] uppercase text-[#C9A84C] mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>Service Areas</h3>
            <ul className="flex flex-col gap-2.5">
              {cities.map(c => (
                <li key={c.slug}>
                  <Link href={`/locations/${c.slug}`} className="text-sm text-white/35 hover:text-white transition-colors">{c.name}, IL</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-[4px] uppercase text-[#C9A84C] mb-6" style={{ fontFamily: 'Oswald, sans-serif' }}>Get a Free Quote</h3>
            <p className="text-sm text-white/35 leading-relaxed mb-6">Text Rob directly. No sales calls. Honest pricing from a local neighbor.</p>
            <a href="sms:+18154510106"
              className="flex items-center justify-center gap-2 bg-[#C9A84C] text-[#0A0A0A] font-bold text-[13px] tracking-[2px] uppercase px-6 py-4 rounded-sm hover:bg-[#E8C96A] transition-colors w-full mb-3"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              📱 Text Rob Now
            </a>
            <a href="tel:+18154510106"
              className="flex items-center justify-center gap-2 border border-[#2a2a2a] text-white/40 font-bold text-[13px] tracking-[2px] uppercase px-6 py-4 rounded-sm hover:border-[#C9A84C] hover:text-white transition-colors w-full"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              📞 (815) 451-0106
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-white/20 tracking-wide">© {new Date().getFullYear()} Rob's Exterior Services · Robert Morales · Woodstock, IL</p>
          <p className="text-xs text-white/20">robsexterior.com</p>
        </div>
      </div>
    </footer>
  )
}
