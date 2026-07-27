import type { Metadata } from "next"
import Link from "next/link"
import { cities } from "@/lib/cities"
import { services } from "@/lib/services"
import CTAStrip from "@/components/CTAStrip"

export const metadata: Metadata = {
  title: "Service Areas | McHenry County IL | Rob's Exterior Services",
  description: "Rob's Exterior Services serves all of McHenry County, IL. Professional exterior cleaning in Woodstock, Crystal Lake, Huntley, Algonquin, Marengo, Harvard, McHenry, Cary & Lake in the Hills.",
}

export default function LocationsPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-4">McHenry County, Illinois</p>
          <h1 className="font-display font-black text-[clamp(48px,8vw,96px)] uppercase tracking-tight leading-[0.95] mb-6">
            Service <span className="gold-text">Areas</span>
          </h1>
          <p className="text-white/50 text-xl leading-relaxed max-w-2xl mx-auto">
            Rob's Exterior Services covers Woodstock, IL and all surrounding McHenry County communities with professional exterior cleaning and maintenance.
          </p>
        </div>
      </section>

      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map(city => (
              <Link key={city.slug} href={`/locations/${city.slug}`} className="group bg-brand-card border border-brand-border hover:border-brand-gold/40 rounded-sm p-8 transition-all hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="font-display font-bold text-2xl text-white uppercase tracking-wide group-hover:text-brand-gold transition-colors">{city.name}</h2>
                    <p className="text-brand-gold/60 text-[11px] tracking-[2px] uppercase mt-1">{city.county} · {city.zip}</p>
                  </div>
                  <span className="text-[10px] font-bold tracking-[2px] text-white/20 uppercase">{city.distanceFromWoodstock}</span>
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-6">{city.description.slice(0, 150)}...</p>
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="text-center">
                    <div className="font-display font-bold text-sm text-brand-gold">{city.population}</div>
                    <div className="text-[9px] text-white/25 uppercase tracking-wide">Population</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display font-bold text-sm text-brand-gold">{city.medianIncome}</div>
                    <div className="text-[9px] text-white/25 uppercase tracking-wide">Med. Income</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display font-bold text-sm text-brand-gold">{city.homeValue}</div>
                    <div className="text-[9px] text-white/25 uppercase tracking-wide">Home Value</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {services.slice(0, 4).map(s => (
                    <span key={s.slug} className="text-[9px] font-bold tracking-[1px] uppercase text-white/25 border border-brand-border px-2 py-1 rounded-sm">
                      {s.shortName}
                    </span>
                  ))}
                  <span className="text-[9px] font-bold tracking-[1px] uppercase text-brand-gold/40 border border-brand-gold/20 px-2 py-1 rounded-sm">+{services.length - 4} more</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTAStrip />
    </>
  )
}
