import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { services } from "@/lib/services"
import { cities } from "@/lib/cities"
import ReviewCard from "@/components/ReviewCard"
import CTAStrip from "@/components/CTAStrip"

export const metadata: Metadata = {
  title: "Rob's Exterior Services | Woodstock's Exterior Experts | McHenry County IL",
  description: "Rob's Exterior Services — Woodstock, IL's most trusted exterior cleaning company. Gutter cleaning, soft washing, roof washing, window cleaning, pressure washing, deck staining & lawn care. Family owned. No subcontractors. Text for a free quote.",
}

const reviews = [
  { text: "Rob was fantastic to work with and did a fantastic job on my house! I would highly recommend working with him. He was on time, super courteous, detail oriented, and reasonably priced!", name: "Jennifer Fox", location: "Walkup in The Park, IL", initials: "JF" },
  { text: "We recently moved into a home that needed extensive cleanup. Rob and his worker hauled, removed and cleaned up two huge piles of debris. He was extremely polite, courteous and respectful of our property.", name: "Cheryl Peterson", location: "Sun City Huntley, IL", initials: "CP" },
  { text: "Great prices and great work ethic. Very honest and family oriented.", name: "Donna Stone", location: "Lilymoor, IL", initials: "DS" },
]

const trustItems = [
  "Locally Owned & Operated", "No Subcontractors", "100% Satisfaction Guaranteed",
  "Free Estimates", "Serving McHenry County", "Family Owned", "5-Star Rated", "Woodstock, IL Based"
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black">
        {/* Grid texture */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(27,52,97,0.5)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(201,168,76,0.06)_0%,transparent_60%)]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-32 pb-20">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <Image
              src="/images/logo transparent.png"
              alt="Rob's Exterior Services"
              width={320}
              height={130}
              className="h-28 md:h-36 w-auto"
              priority
            />
          </div>

          {/* Eyebrow */}
          <p className="section-label mb-6 flex items-center justify-center gap-4">
            <span className="w-16 h-px bg-brand-gold/40" />
            Woodstock's Exterior Experts
            <span className="w-16 h-px bg-brand-gold/40" />
          </p>

          {/* Headline */}
          <h1 className="font-display font-black text-white uppercase leading-[0.95] mb-6">
            <span className="block text-[clamp(52px,9vw,110px)] tracking-tight">Your Home.</span>
            <span className="block text-[clamp(52px,9vw,110px)] tracking-tight gold-text">Our Standards.</span>
          </h1>

          {/* Divider */}
          <div className="flex items-center gap-4 justify-center my-8">
            <span className="w-20 h-px bg-gradient-to-r from-transparent to-brand-gold/60" />
            <span className="text-brand-gold/50 text-[9px] tracking-[4px] uppercase">Woodstock, Illinois</span>
            <span className="w-20 h-px bg-gradient-to-l from-transparent to-brand-gold/60" />
          </div>

          <p className="text-white/55 text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Gutter cleaning · Soft washing · Roof washing · Window cleaning · Pressure washing · Deck staining · Lawn care — done right, every time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="sms:+18154510106"
              className="bg-brand-gold text-brand-black font-display font-bold text-[15px] tracking-[2.5px] uppercase px-12 py-5 rounded-sm hover:bg-brand-gold-light transition-all hover:-translate-y-0.5 shadow-[0_4px_24px_rgba(201,168,76,0.35)] flex items-center justify-center gap-3"
            >
              📱 Text for a Free Quote
            </a>
            <Link
              href="/services"
              className="border border-white/20 text-white font-display font-bold text-[15px] tracking-[2.5px] uppercase px-12 py-5 rounded-sm hover:border-brand-gold hover:text-brand-gold transition-all flex items-center justify-center gap-3"
            >
              View Our Services
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
          <span className="text-[9px] tracking-[4px] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand-gold/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* TRUST TICKER */}
      <div className="bg-[#080808] border-y border-brand-gold/20 py-4 overflow-hidden">
        <div className="flex animate-[ticker_25s_linear_infinite] w-max">
          {[...trustItems, ...trustItems].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-12 whitespace-nowrap">
              <div className="w-1.5 h-1.5 bg-brand-gold rotate-45 flex-shrink-0" />
              <span className="text-white/50 text-[11px] font-bold tracking-[3px] uppercase">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES SECTION */}
      <section className="py-28 bg-brand-black relative">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(27,52,97,0.4),transparent)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="section-label mb-4">What We Do</p>
            <h2 className="font-display font-black text-[clamp(36px,5vw,64px)] uppercase tracking-wide text-white mb-6">
              Full-Service <span className="gold-text">Exterior</span> Care
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
              From the roof to the driveway, Rob handles everything on the outside of your home — so you don't have to.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-brand-card border border-brand-border hover:border-brand-gold/40 rounded-sm p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(201,168,76,0.1)] relative overflow-hidden"
              >
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-400 origin-left" />
                <span className="text-3xl">{service.icon}</span>
                <div>
                  <h3 className="font-display font-bold text-[17px] text-white uppercase tracking-wide mb-2 group-hover:text-brand-gold transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">{service.description}</p>
                </div>
                {service.startingPrice && (
                  <div className="mt-auto">
                    <span className="text-[10px] text-white/30 uppercase tracking-[2px]">Starting from</span>
                    <div className="font-display font-bold text-2xl text-brand-gold">{service.startingPrice}</div>
                  </div>
                )}
                <span className="text-[11px] font-bold tracking-[2px] uppercase text-brand-gold/60 group-hover:text-brand-gold transition-colors">
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">About Rob</p>
            <h2 className="font-display font-black text-[clamp(36px,5vw,56px)] uppercase tracking-wide leading-tight mb-8">
              Local. Reliable. <span className="gold-text">Trusted.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Robert Morales built Rob's Exterior Services on a simple idea — <strong className="text-white">if your name is on it, you do it right.</strong> As a husband and father of four daughters rooted right here in Woodstock, IL, Rob treats every property like it's his own.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              No subcontractors. No shortcuts. When you hire Rob, Rob shows up — and doesn't leave until the job meets his standard, which happens to be the same standard he holds for his own home.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { num: "100+", label: "Happy Customers" },
                { num: "8", label: "Services Offered" },
                { num: "5★", label: "Rated Locally" },
                { num: "9", label: "Cities Served" },
              ].map(stat => (
                <div key={stat.label} className="border-l-2 border-brand-gold pl-4 py-2">
                  <div className="font-display font-black text-3xl text-white">{stat.num}</div>
                  <div className="text-xs text-white/40 tracking-[2px] uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 font-display font-bold text-[13px] tracking-[2px] uppercase text-brand-gold border border-brand-gold/40 px-8 py-4 rounded-sm hover:bg-brand-gold hover:text-brand-black transition-all"
            >
              Meet Rob →
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] relative rounded-sm overflow-hidden border border-brand-border">
              <Image
                src="/images/rob_photo.jpg"
                alt="Robert Morales — Owner of Rob's Exterior Services Woodstock IL"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-brand-gold rounded-full flex items-center justify-center flex-col text-center shadow-[0_8px_32px_rgba(201,168,76,0.5)]">
              <span className="font-display font-bold text-brand-black text-sm leading-tight">Locally<br/>Owned</span>
              <span className="text-brand-black/60 text-[9px] tracking-wide uppercase mt-1">Woodstock IL</span>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Before & After</p>
            <h2 className="font-display font-black text-[clamp(36px,5vw,64px)] uppercase tracking-wide">
              The Work <span className="gold-text">Speaks</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {[
              { src: "/images/front of house 2 .jpeg", alt: "Soft wash curb appeal result Woodstock IL", label: "Soft Wash · Curb Appeal", featured: true },
              { src: "/images/exterior window 1 .jpeg", alt: "Professional window cleaning Woodstock IL", label: "Window Cleaning", featured: false },
              { src: "/images/gutter 1 .jpeg", alt: "Gutter cleaning before Woodstock IL", label: "Gutter Cleaning · Before", featured: false },
              { src: "/images/roof_wash_1.jpeg", alt: "Deck staining result Woodstock IL", label: "Deck Staining · After", featured: false },
              { src: "/images/roof_wash_1.jpeg", alt: "Roof washing before and after", label: "Roof Washing", featured: false },
              { src: "/images/patio 3 .jpeg", alt: "Pressure washing patio Woodstock IL", label: "Pressure Washing", featured: false },
            ].map((photo, i) => (
              <div key={i} className={`relative overflow-hidden rounded-sm group cursor-pointer ${photo.featured ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/3]'}`}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-[10px] font-bold tracking-[2px] uppercase text-brand-gold bg-brand-black/70 px-3 py-1.5 rounded-sm">
                    {photo.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 border border-brand-gold/40 text-brand-gold font-display font-bold text-[13px] tracking-[2.5px] uppercase px-10 py-4 rounded-sm hover:bg-brand-gold hover:text-brand-black transition-all"
            >
              View All Photos →
            </Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="py-28 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">What Neighbors Say</p>
            <h2 className="font-display font-black text-[clamp(36px,5vw,64px)] uppercase tracking-wide">
              Real <span className="gold-text">Reviews</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <ReviewCard key={i} {...r} delay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-28 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Where We Work</p>
            <h2 className="font-display font-black text-[clamp(36px,5vw,64px)] uppercase tracking-wide">
              Serving All of <span className="gold-text">McHenry County</span>
            </h2>
            <p className="text-white/40 mt-4 text-lg max-w-xl mx-auto">
              Rob covers Woodstock and every major community throughout McHenry County, IL.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {cities.map(city => (
              <Link
                key={city.slug}
                href={`/locations/${city.slug}`}
                className="font-display font-semibold text-[12px] tracking-[2px] uppercase text-white/50 border border-brand-border px-5 py-3 rounded-sm hover:border-brand-gold hover:text-brand-gold transition-all"
              >
                {city.name}, IL
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  )
}
