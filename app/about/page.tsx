import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import ReviewCard from "@/components/ReviewCard"
import CTAStrip from "@/components/CTAStrip"

export const metadata: Metadata = {
  title: "About Rob Morales | Rob's Exterior Services | Woodstock IL",
  description: "Meet Robert Morales — owner of Rob's Exterior Services in Woodstock, IL. A husband, father of four daughters, and Woodstock local who built his business on honesty, hard work, and doing the job right.",
}

const reviews = [
  { text: "Rob was fantastic to work with and did a fantastic job on my house! I would highly recommend working with him. He was on time, super courteous, detail oriented, and reasonably priced!", name: "Jennifer Fox", location: "Walkup in The Park, IL", initials: "JF" },
  { text: "We recently moved into a home that needed extensive cleanup. Rob and his worker hauled, removed and cleaned up two huge piles of debris. He was extremely polite, courteous and respectful of our property. I would definitely hire him again.", name: "Cheryl Peterson", location: "Sun City Huntley, IL", initials: "CP" },
  { text: "Great prices and great work ethic. Very honest and family oriented.", name: "Donna Stone", location: "Lilymoor, IL", initials: "DS" },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-4">Owner & Operator · Woodstock, IL</p>
          <h1 className="font-display font-black text-[clamp(48px,8vw,96px)] uppercase tracking-tight leading-[0.95] mb-6">
            Meet <span className="gold-text">Rob</span>
          </h1>
          <div className="flex items-center gap-4 justify-center mb-6">
            <span className="w-16 h-px bg-brand-gold/40" />
            <span className="text-brand-gold/50 text-[9px] tracking-[4px] uppercase">Robert Morales</span>
            <span className="w-16 h-px bg-brand-gold/40" />
          </div>
          <p className="text-white/55 text-xl leading-relaxed">
            Husband. Father of four daughters. Woodstock local. The guy who shows up, does the work right, and stands behind every single job.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4">The Man Behind the Business</p>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-wide leading-tight mb-8">
              Built on <span className="gold-text">Family Values</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Robert Morales didn't build Rob's Exterior Services on a business plan. He built it on something simpler — <strong className="text-white">the belief that if you're going to put your name on something, you'd better do it right.</strong> When your last name is on the truck and your neighbors are your customers, there's no room for shortcuts.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Rob is a husband and father of four daughters, rooted right here in Woodstock, IL. The same care he puts into his own home — the same standard he holds himself to for his family — is exactly what he brings to every job throughout McHenry County.
            </p>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              What started as a way to serve his community grew into one of Woodstock's most trusted exterior cleaning operations — not through advertising, but through word of mouth from satisfied neighbors who saw the difference firsthand. <strong className="text-white">No subcontractors. No shortcuts. Rob shows up, Rob does the work, and Rob makes sure you're happy before he leaves.</strong>
            </p>

            <blockquote className="border-l-4 border-brand-gold pl-6 py-2 my-8">
              <p className="font-display font-bold text-2xl text-white leading-tight mb-2">
                "When you hire Rob, you're not hiring a company. You're hiring a <span className="gold-text">neighbor</span> who takes pride in his work because his family's name is attached to it."
              </p>
            </blockquote>
          </div>

          <div className="relative">
            <div className="aspect-[3/4] relative rounded-sm overflow-hidden border border-brand-border">
              <Image src="/images/rob_photo.jpg" alt="Robert Morales — Owner of Rob's Exterior Services Woodstock IL" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-brand-gold rounded-full flex items-center justify-center flex-col text-center shadow-[0_8px_32px_rgba(201,168,76,0.5)]">
              <span className="font-display font-bold text-brand-black text-sm leading-tight">Locally<br/>Owned</span>
              <span className="text-brand-black/60 text-[9px] tracking-wide uppercase mt-1">Woodstock IL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="section-label mb-4">What Rob Stands For</p>
            <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-wide">The <span className="gold-text">Standard</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: "🤝", title: "Honesty First", desc: "Rob tells you what your home actually needs — nothing more, nothing less. Fair pricing, straight talk, no upsells you didn't ask for." },
              { icon: "🏠", title: "Treat It Like His Own", desc: "Rob has a home. He has a family. He knows what it means to care about where you live. Every property gets the same attention he'd give his own." },
              { icon: "📍", title: "Rooted in Woodstock", desc: "Rob isn't a franchise. He's not a call center. He lives here, works here, and cares about this community because it's his community." }
            ].map((v, i) => (
              <div key={i} className="bg-brand-card border border-brand-border rounded-sm p-10 hover:border-brand-gold/30 transition-colors group">
                <span className="text-4xl mb-6 block">{v.icon}</span>
                <h3 className="font-display font-bold text-xl uppercase tracking-wide text-white mb-4 group-hover:text-brand-gold transition-colors">{v.title}</h3>
                <p className="text-white/45 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-brand-dark border-y border-brand-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-brand-border">
            {[
              { num: "100+", label: "Happy Customers" },
              { num: "8", label: "Services Offered" },
              { num: "5★", label: "Rated Locally" },
              { num: "9", label: "Cities Served" },
            ].map(s => (
              <div key={s.label} className="bg-brand-dark py-12 text-center">
                <div className="font-display font-black text-5xl text-brand-gold mb-2">{s.num}</div>
                <div className="text-[11px] text-white/30 tracking-[3px] uppercase">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">From the Neighbors</p>
          <h2 className="font-display font-black text-4xl uppercase tracking-wide mb-12">What People <span className="gold-text">Say About Rob</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => <ReviewCard key={i} {...r} />)}
          </div>
        </div>
      </section>

      <CTAStrip heading="Ready to meet Rob in person?" sub="Text him today for a free estimate. You'll get a real response from Rob himself — fast, honest, and no pressure." />
    </>
  )
}
