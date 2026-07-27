import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { services, getService } from "@/lib/services"
import { cities } from "@/lib/cities"
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema"
import CTAStrip from "@/components/CTAStrip"
import FAQ from "@/components/FAQ"

export async function generateStaticParams() {
  return services.map(s => ({ service: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service: slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDesc,
    keywords: service.keywords,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDesc,
      url: `https://robsexterior.com/services/${slug}`,
    },
  }
}

export default async function ServicePage({ params }: { params: Promise<{ service: string }> }) {
  const { service: slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  const relatedServices = service.relatedServices
    .map(r => services.find(s => s.slug === r))
    .filter(Boolean)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(service.faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: service.name, url: `/services/${service.slug}` }
      ])) }} />

      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="flex mb-8">
            <ol className="flex items-center gap-2 text-xs text-white/30 tracking-wide">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li>/</li>
              <li className="text-brand-gold">{service.name}</li>
            </ol>
          </nav>
          <p className="section-label mb-4">Woodstock, IL · McHenry County</p>
          <h1 className="font-display font-black text-[clamp(48px,8vw,96px)] uppercase tracking-tight leading-[0.95] mb-6 text-white">
            {service.name.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="gold-text">{service.name.split(' ').slice(-1)}</span>
          </h1>
          <p className="text-brand-gold font-semibold text-lg mb-4 tracking-wide">{service.tagline}</p>
          <p className="text-white/55 text-xl leading-relaxed mb-10 max-w-2xl">{service.heroDesc}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="sms:+18154510106" className="bg-brand-gold text-brand-black font-display font-bold text-[14px] tracking-[2.5px] uppercase px-10 py-5 rounded-sm hover:bg-brand-gold-light transition-all flex items-center justify-center gap-3">
              📱 Text for a Free Quote
            </a>
            <a href="tel:+18154510106" className="border border-white/20 text-white font-display font-bold text-[14px] tracking-[2.5px] uppercase px-10 py-5 rounded-sm hover:border-brand-gold hover:text-brand-gold transition-all flex items-center justify-center gap-3">
              📞 (815) 451-0106
            </a>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text content */}
          <div>
            <p className="section-label mb-4">{service.name} · Woodstock, IL</p>
            <h2 className="font-display font-black text-4xl uppercase tracking-wide mb-8 text-white">
              {service.name} in <span className="gold-text">Woodstock, IL</span>
            </h2>
            <div className="prose-dark">
              {service.longDescription.split('\n\n').map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: para.replace(/<strong>/g, '<strong>').replace(/<\/strong>/g, '</strong>') }} />
              ))}
            </div>
          </div>

          {/* Image + benefits */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-brand-border">
              <Image src={service.image} alt={`${service.name} Woodstock IL — Rob's Exterior Services`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
            </div>

            <div className="bg-brand-card border border-brand-border rounded-sm p-8">
              <h3 className="font-display font-bold text-lg uppercase tracking-wide text-white mb-6">What's Included</h3>
              <ul className="flex flex-col gap-3">
                {service.benefits.map((b, i) => (
                  <li key={i} className="flex gap-3 text-sm text-white/60 leading-relaxed">
                    <span className="w-5 h-5 bg-brand-gold rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-2.5 h-2.5 text-brand-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">How It Works</p>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-wide">Simple. Fast. <span className="gold-text">Done Right.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <div key={i} className="bg-brand-card border border-brand-border rounded-sm p-8 text-center relative overflow-hidden group hover:border-brand-gold/30 transition-colors">
                <div className="font-display font-black text-6xl text-brand-gold/10 mb-4 leading-none">{step.step}</div>
                <h3 className="font-display font-bold text-lg uppercase tracking-wide text-white mb-3">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area cities */}
      <section className="py-20 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="section-label mb-3">Where We Work</p>
            <h2 className="font-display font-black text-3xl uppercase tracking-wide">
              {service.name} Throughout <span className="gold-text">McHenry County</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {cities.map(city => (
              <Link
                key={city.slug}
                href={`/services/${service.slug}/${city.slug}`}
                className="font-display font-semibold text-[11px] tracking-[2px] uppercase text-white/50 border border-brand-border px-4 py-2.5 rounded-sm hover:border-brand-gold hover:text-brand-gold transition-all"
              >
                {city.name}, IL
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={service.faqs} heading={`${service.name} FAQs`} />

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-brand-dark">
          <div className="max-w-7xl mx-auto px-6">
            <p className="section-label mb-4">Also Available</p>
            <h2 className="font-display font-black text-3xl uppercase tracking-wide mb-10">Related <span className="gold-text">Services</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map(s => s && (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group bg-brand-card border border-brand-border border-t-2 border-t-brand-gold rounded-sm p-8 hover:-translate-y-1 transition-all">
                  <span className="text-3xl mb-4 block">{s.icon}</span>
                  <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white mb-3 group-hover:text-brand-gold transition-colors">{s.name}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">{s.description}</p>
                  <span className="text-[11px] font-bold tracking-[2px] uppercase text-brand-gold">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTAStrip heading={`Ready for Professional ${service.name}?`} />
    </>
  )
}
