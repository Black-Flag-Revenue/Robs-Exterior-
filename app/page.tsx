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

const trustItems = ["Locally Owned & Operated", "No Subcontractors", "100% Satisfaction Guaranteed", "Free Estimates", "Serving McHenry County", "Family Owned", "5-Star Rated", "Woodstock, IL Based"]

const galleryPhotos = [
  { src: "/images/front of house 2 .jpeg", alt: "Soft wash result Woodstock IL", label: "Soft Wash · Curb Appeal", featured: true },
  { src: "/images/exterior window 1 .jpeg", alt: "Window cleaning Woodstock IL", label: "Window Cleaning" },
  { src: "/images/gutter 1 .jpeg", alt: "Gutter cleaning before Woodstock IL", label: "Gutter Cleaning · Before" },
  { src: "/images/deckstain2.jpg", alt: "Deck staining result Woodstock IL", label: "Deck Staining · After" },
  { src: "/images/roof_wash_1.jpeg", alt: "Roof washing before and after", label: "Roof Washing" },
  { src: "/images/patio 3 .jpeg", alt: "Pressure washing patio Woodstock IL", label: "Pressure Washing" },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(27,52,97,0.4) 0%, transparent 70%)'
        }} />
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(ellipse 50% 40% at 80% 80%, rgba(201,168,76,0.05) 0%, transparent 60%)'
        }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-32 pb-20">
          <div className="flex justify-center mb-10">
            <Image src="/images/logo transparent.png" alt="Rob's Exterior Services" width={300} height={120}
              className="h-28 md:h-36 w-auto object-contain" priority />
          </div>

          <p className="section-label mb-6 flex items-center justify-center gap-4 text-[#C9A84C]">
            <span className="w-12 h-px bg-[#C9A84C]/40" />
            Woodstock's Exterior Experts
            <span className="w-12 h-px bg-[#C9A84C]/40" />
          </p>

          <h1 className="text-white uppercase leading-[0.92] mb-6 tracking-tight" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(52px,9vw,108px)' }}>
            Your Home.<br />
            <span className="gold-text">Our Standards.</span>
          </h1>

          <div className="flex items-center gap-4 justify-center my-8">
            <span className="w-16 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.5))' }} />
            <span className="text-[#C9A84C]/50 text-[9px] tracking-[4px] uppercase">Woodstock, Illinois</span>
            <span className="w-16 h-px" style={{ background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.5))' }} />
          </div>

          <p className="text-white/50 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Gutter cleaning · Soft washing · Roof washing · Window cleaning · Pressure washing · Deck staining · Lawn care — done right, every time.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="sms:+18154510106"
              className="inline-flex items-center justify-center gap-3 text-[#0A0A0A] font-bold text-[14px] tracking-[2.5px] uppercase px-12 py-5 rounded-sm transition-all hover:-translate-y-0.5"
              style={{ fontFamily: 'Oswald, sans-serif', background: '#C9A84C', boxShadow: '0 4px 24px rgba(201,168,76,0.4)' }}
            >
              📱 Text for a Free Quote
            </a>
            <Link href="/services"
              className="inline-flex items-center justify-center gap-3 text-white font-bold text-[14px] tracking-[2.5px] uppercase px-12 py-5 rounded-sm border border-white/20 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              View Our Services
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
          <span className="text-[9px] tracking-[4px] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#C9A84C]/50 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── TRUST TICKER ── */}
      <div className="bg-[#060606] border-y border-[#C9A84C]/20 py-4 overflow-hidden">
        <div className="flex animate-ticker w-max">
          {[...trustItems, ...trustItems].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-10 whitespace-nowrap">
              <div className="w-1.5 h-1.5 bg-[#C9A84C] rotate-45 flex-shrink-0" />
              <span className="text-white/45 text-[11px] font-bold tracking-[3px] uppercase">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <p className="section-label mb-4">What We Do</p>
            <h2 className="text-white uppercase tracking-wide mb-6 leading-tight" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(36px,5vw,64px)' }}>
              Full-Service <span className="gold-text">Exterior</span> Care
            </h2>
            <p className="text-white/45 text-lg max-w-xl mx-auto leading-relaxed">
              From the roof to the driveway, Rob handles everything on the outside of your home.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}
                className="group bg-[#111] border border-[#1e1e1e] hover:border-[#C9A84C]/40 rounded-sm p-7 flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                style={{ boxShadow: '0 0 0 0 rgba(201,168,76,0)' }}
              >
                <div className="absolute bottom-0 left-0 right-0 h-px bg-[#C9A84C] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <span className="text-3xl">{service.icon}</span>
                <div className="flex-1">
                  <h3 className="font-bold text-[16px] text-white uppercase tracking-wide mb-2 group-hover:text-[#C9A84C] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {service.name}
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed">{service.tagline}</p>
                </div>
                {service.startingPrice && (
                  <div>
                    <span className="text-[9px] text-white/25 uppercase tracking-[2px]">Starting from</span>
                    <div className="font-bold text-2xl text-[#C9A84C]" style={{ fontFamily: 'Oswald, sans-serif' }}>{service.startingPrice}</div>
                  </div>
                )}
                <span className="text-[11px] font-bold tracking-[2px] uppercase text-[#C9A84C]/50 group-hover:text-[#C9A84C] transition-colors" style={{ fontFamily: 'Oswald, sans-serif' }}>
                  Learn More →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-28 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">About Rob</p>
            <h2 className="text-white uppercase tracking-wide leading-tight mb-8" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(36px,5vw,56px)' }}>
              Local. Reliable.<br /><span className="gold-text">Trusted.</span>
            </h2>
            <p className="text-white/55 text-lg leading-relaxed mb-5">
              Robert Morales built Rob's Exterior Services on a simple idea — <strong className="text-white">if your name is on it, you do it right.</strong> As a husband and father of four daughters rooted right here in Woodstock, IL, Rob treats every property like it's his own.
            </p>
            <p className="text-white/55 text-lg leading-relaxed mb-10">
              No subcontractors. No shortcuts. When you hire Rob, <strong className="text-white">Rob shows up.</strong>
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                { num: "100+", label: "Happy Customers" },
                { num: "8", label: "Services Offered" },
                { num: "5★", label: "Rated Locally" },
                { num: "9", label: "Cities Served" },
              ].map(stat => (
                <div key={stat.label} className="border-l-2 border-[#C9A84C] pl-4 py-1">
                  <div className="font-black text-3xl text-white" style={{ fontFamily: 'Oswald, sans-serif' }}>{stat.num}</div>
                  <div className="text-[10px] text-white/30 tracking-[2px] uppercase mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <Link href="/about"
              className="inline-flex items-center gap-3 font-bold text-[13px] tracking-[2px] uppercase text-[#C9A84C] border border-[#C9A84C]/40 px-8 py-4 rounded-sm hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              Meet Rob →
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] relative rounded-sm overflow-hidden border border-[#1e1e1e]">
              <Image src="/images/rob_photo.jpg" alt="Robert Morales — Owner of Rob's Exterior Services Woodstock IL"
                fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.4), transparent)' }} />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C9A84C]" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-full flex items-center justify-center flex-col text-center"
              style={{ background: '#C9A84C', boxShadow: '0 8px 32px rgba(201,168,76,0.5)' }}>
              <span className="font-bold text-[#0A0A0A] text-xs leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>Locally<br/>Owned</span>
              <span className="text-[#0A0A0A]/60 text-[8px] tracking-wide uppercase mt-1">Woodstock IL</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Before & After</p>
            <h2 className="text-white uppercase tracking-wide" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(36px,5vw,64px)' }}>
              The Work <span className="gold-text">Speaks</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {galleryPhotos.map((photo, i) => (
              <div key={i} className={`relative overflow-hidden rounded-sm group ${photo.featured ? 'md:col-span-2 aspect-video' : 'aspect-[4/3]'}`}>
                <Image src={photo.src} alt={photo.alt} fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.8), transparent)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-[10px] font-bold tracking-[2px] uppercase text-[#C9A84C] bg-[#0A0A0A]/70 px-3 py-1.5 rounded-sm"
                    style={{ fontFamily: 'Oswald, sans-serif' }}>
                    {photo.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/gallery"
              className="inline-flex items-center gap-3 border border-[#C9A84C]/40 text-[#C9A84C] font-bold text-[13px] tracking-[2.5px] uppercase px-10 py-4 rounded-sm hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all"
              style={{ fontFamily: 'Oswald, sans-serif' }}
            >
              View All Photos →
            </Link>
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-28 bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">What Neighbors Say</p>
            <h2 className="text-white uppercase tracking-wide" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(36px,5vw,64px)' }}>
              Real <span className="gold-text">Reviews</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => <ReviewCard key={i} {...r} delay={i * 100} />)}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="py-28 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="section-label mb-4">Where We Work</p>
            <h2 className="text-white uppercase tracking-wide mb-4" style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(36px,5vw,64px)' }}>
              Serving All of <span className="gold-text">McHenry County</span>
            </h2>
            <p className="text-white/35 text-lg max-w-lg mx-auto">Rob covers Woodstock and every major community throughout McHenry County, IL.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {cities.map(city => (
              <Link key={city.slug} href={`/locations/${city.slug}`}
                className="font-bold text-[11px] tracking-[2px] uppercase text-white/40 border border-[#2a2a2a] px-5 py-3 rounded-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all"
                style={{ fontFamily: 'Oswald, sans-serif' }}
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
