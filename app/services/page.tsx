import type { Metadata } from "next"
import Link from "next/link"
import { services } from "@/lib/services"
import CTAStrip from "@/components/CTAStrip"

export const metadata: Metadata = {
  title: "Exterior Cleaning Services Woodstock IL | Rob's Exterior Services",
  description: "Professional exterior cleaning services in Woodstock, IL. Gutter cleaning, soft washing, roof washing, window cleaning, pressure washing, deck staining & lawn care. Serving McHenry County.",
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <nav aria-label="Breadcrumb" className="flex justify-center mb-6">
            <ol className="flex items-center gap-2 text-xs text-white/30 tracking-wide">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-brand-gold">Services</li>
            </ol>
          </nav>
          <p className="section-label mb-4">Woodstock, IL · McHenry County</p>
          <h1 className="font-display font-black text-[clamp(48px,8vw,96px)] uppercase tracking-tight leading-[0.95] mb-6">
            Our <span className="gold-text">Services</span>
          </h1>
          <div className="flex items-center gap-4 justify-center mb-8">
            <span className="w-16 h-px bg-brand-gold/40" />
            <span className="text-brand-gold/50 text-[9px] tracking-[4px] uppercase">Professional Exterior Cleaning</span>
            <span className="w-16 h-px bg-brand-gold/40" />
          </div>
          <p className="text-white/50 text-xl leading-relaxed max-w-2xl mx-auto">
            From the roof to the driveway, Rob handles everything on the outside of your home — with honest pricing, no subcontractors, and results you'll notice immediately.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-brand-card border border-brand-border hover:border-brand-gold/40 rounded-sm p-10 flex gap-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(201,168,76,0.08)] relative overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-brand-dark border border-brand-border rounded-sm flex items-center justify-center text-3xl group-hover:border-brand-gold/40 transition-colors">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="font-display font-bold text-2xl text-white uppercase tracking-wide group-hover:text-brand-gold transition-colors">
                      {service.name}
                    </h2>
                    {service.startingPrice && (
                      <span className="font-display font-bold text-xl text-brand-gold ml-4 flex-shrink-0">
                        {service.startingPrice}+
                      </span>
                    )}
                  </div>
                  <p className="text-brand-gold/70 text-sm font-semibold uppercase tracking-wide mb-3">{service.tagline}</p>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{service.heroDesc}</p>
                  <span className="text-[11px] font-bold tracking-[2px] uppercase text-brand-gold/60 group-hover:text-brand-gold transition-colors">
                    Full Details →
                  </span>
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
