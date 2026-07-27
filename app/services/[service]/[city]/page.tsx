import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { services, getService } from "@/lib/services"
import { cities, getCity } from "@/lib/cities"
import { serviceSchema, breadcrumbSchema, faqSchema } from "@/lib/schema"
import CTAStrip from "@/components/CTAStrip"
import FAQ from "@/components/FAQ"

export async function generateStaticParams() {
  const params = []
  for (const service of services) {
    for (const city of cities) {
      params.push({ service: service.slug, city: city.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: { params: Promise<{ service: string; city: string }> }): Promise<Metadata> {
  const { service: serviceSlug, city: citySlug } = await params
  const service = getService(serviceSlug)
  const city = getCity(citySlug)
  if (!service || !city) return {}
  return {
    title: `${service.name} in ${city.name}, IL | Rob's Exterior Services`,
    description: `Professional ${service.name.toLowerCase()} in ${city.name}, IL. ${service.description} Serving ${city.name} and all of McHenry County. Text Rob for a free estimate.`,
    keywords: [...service.keywords, `${service.name.toLowerCase()} ${city.name} IL`, `${service.name.toLowerCase()} ${city.name} Illinois`],
    openGraph: {
      title: `${service.name} in ${city.name}, IL | Rob's Exterior Services`,
      description: `Professional ${service.name.toLowerCase()} in ${city.name}, IL. Text Rob for a free estimate.`,
      url: `https://robsexterior.com/services/${serviceSlug}/${citySlug}`,
    },
  }
}

export default async function ServiceCityPage({ params }: { params: Promise<{ service: string; city: string }> }) {
  const { service: serviceSlug, city: citySlug } = await params
  const service = getService(serviceSlug)
  const city = getCity(citySlug)
  if (!service || !city) notFound()

  const localContext = city.serviceContext[service.slug] ?? service.description
  const otherCities = cities.filter(c => c.slug !== city.slug).slice(0, 6)
  const relatedServices = service.relatedServices.map(r => services.find(s => s.slug === r)).filter(Boolean)

  // City-specific FAQs
  const cityFaqs = [
    ...service.faqs.slice(0, 3),
    {
      q: `Do you service ${city.name}, IL for ${service.name.toLowerCase()}?`,
      a: `Yes — Rob's Exterior Services provides professional ${service.name.toLowerCase()} throughout ${city.name} and all of McHenry County, IL. Text Rob at (815) 451-0106 for a free estimate.`
    },
    {
      q: `How far is ${city.name} from your base in Woodstock?`,
      a: `${city.name} is ${city.distanceFromWoodstock} from Rob's home base in Woodstock, IL. Rob regularly serves ${city.name} and the surrounding area with the same quality and care he brings to every job throughout McHenry County.`
    }
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(service, city)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(cityFaqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", url: "/" },
        { name: "Services", url: "/services" },
        { name: service.name, url: `/services/${service.slug}` },
        { name: city.name, url: `/services/${service.slug}/${city.slug}` }
      ])) }} />

      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <nav aria-label="Breadcrumb" className="flex mb-8">
            <ol className="flex items-center gap-2 text-xs text-white/30 tracking-wide flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li>/</li>
              <li><Link href={`/services/${service.slug}`} className="hover:text-white transition-colors">{service.name}</Link></li>
              <li>/</li>
              <li className="text-brand-gold">{city.name}, IL</li>
            </ol>
          </nav>
          <p className="section-label mb-4">{city.name}, IL · McHenry County</p>
          <h1 className="font-display font-black text-[clamp(40px,7vw,88px)] uppercase tracking-tight leading-[0.95] mb-6 text-white">
            {service.name} in <span className="gold-text">{city.name}, IL</span>
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
          <div>
            <p className="section-label mb-4">{service.name} · {city.name}, IL</p>
            <h2 className="font-display font-black text-4xl uppercase tracking-wide mb-6 text-white">
              Why {city.name} Homeowners Choose <span className="gold-text">Rob</span>
            </h2>

            {/* City-specific context */}
            <p className="text-white/60 text-lg leading-relaxed mb-6">{localContext}</p>
            <p className="text-white/60 text-lg leading-relaxed mb-6">{city.localContext}</p>

            {/* City stats */}
            <div className="grid grid-cols-3 gap-4 my-8">
              <div className="bg-brand-card border border-brand-border rounded-sm p-4 text-center">
                <div className="font-display font-black text-xl text-brand-gold">{city.population}</div>
                <div className="text-[10px] text-white/30 tracking-[2px] uppercase mt-1">Residents</div>
              </div>
              <div className="bg-brand-card border border-brand-border rounded-sm p-4 text-center">
                <div className="font-display font-black text-xl text-brand-gold">{city.medianIncome}</div>
                <div className="text-[10px] text-white/30 tracking-[2px] uppercase mt-1">Median Income</div>
              </div>
              <div className="bg-brand-card border border-brand-border rounded-sm p-4 text-center">
                <div className="font-display font-black text-xl text-brand-gold">{city.homeValue}</div>
                <div className="text-[10px] text-white/30 tracking-[2px] uppercase mt-1">Avg Home Value</div>
              </div>
            </div>

            {/* Long description */}
            <div className="prose-dark mt-8">
              {service.longDescription.split('\n\n').map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>
          </div>

          {/* Image + benefits */}
          <div className="flex flex-col gap-8">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-brand-border">
              <Image src={service.image} alt={`${service.name} ${city.name} IL — Rob's Exterior Services`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
              <div className="absolute bottom-4 left-4 bg-brand-black/80 backdrop-blur-sm px-4 py-2 rounded-sm">
                <p className="text-[10px] font-bold tracking-[2px] uppercase text-brand-gold">{service.name} · {city.name}, IL</p>
              </div>
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

            {/* Nearby areas */}
            <div className="bg-brand-card border border-brand-border rounded-sm p-6">
              <h3 className="font-display font-bold text-sm uppercase tracking-[3px] text-brand-gold mb-4">Also Serving Near {city.name}</h3>
              <div className="flex flex-wrap gap-2">
                {otherCities.map(c => (
                  <Link key={c.slug} href={`/services/${service.slug}/${c.slug}`} className="text-[11px] font-bold tracking-[1.5px] uppercase text-white/40 border border-brand-border px-3 py-1.5 rounded-sm hover:border-brand-gold hover:text-brand-gold transition-all">
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Our Process</p>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-wide">Simple. Fast. <span className="gold-text">Done Right.</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <div key={i} className="bg-brand-card border border-brand-border rounded-sm p-8 text-center hover:border-brand-gold/30 transition-colors">
                <div className="font-display font-black text-6xl text-brand-gold/10 mb-4 leading-none">{step.step}</div>
                <h3 className="font-display font-bold text-lg uppercase tracking-wide text-white mb-3">{step.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ faqs={cityFaqs} heading={`${service.name} in ${city.name} — FAQs`} />

      {/* Related services */}
      {relatedServices.length > 0 && (
        <section className="py-20 bg-brand-dark">
          <div className="max-w-7xl mx-auto px-6">
            <p className="section-label mb-4">Also Available in {city.name}</p>
            <h2 className="font-display font-black text-3xl uppercase tracking-wide mb-10">Related <span className="gold-text">Services</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map(s => s && (
                <Link key={s.slug} href={`/services/${s.slug}/${city.slug}`} className="group bg-brand-card border border-brand-border border-t-2 border-t-brand-gold rounded-sm p-8 hover:-translate-y-1 transition-all">
                  <span className="text-3xl mb-4 block">{s.icon}</span>
                  <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white mb-3 group-hover:text-brand-gold transition-colors">
                    {s.name} in {city.name}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">{s.description}</p>
                  <span className="text-[11px] font-bold tracking-[2px] uppercase text-brand-gold">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTAStrip heading={`Ready for ${service.name} in ${city.name}?`} sub={`Text Rob today for a free estimate. Serving ${city.name} and all of McHenry County.`} />
    </>
  )
}
