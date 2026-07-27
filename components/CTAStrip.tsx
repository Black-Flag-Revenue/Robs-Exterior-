interface CTAStripProps {
  heading?: string
  sub?: string
}

export default function CTAStrip({
  heading = "Ready for a cleaner home?",
  sub = "Text Rob today for a free estimate. Fast response, honest pricing, real results."
}: CTAStripProps) {
  return (
    <section className="bg-[#C9A84C] py-20 relative overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: 'repeating-linear-gradient(-55deg, transparent, transparent 48px, rgba(0,0,0,0.04) 48px, rgba(0,0,0,0.04) 49px)'
      }} />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-[#0A0A0A] uppercase tracking-wide mb-4 leading-tight" style={{ fontFamily: 'Oswald, sans-serif' }}>
          {heading}
        </h2>
        <p className="text-[#0A0A0A]/60 text-lg mb-10">{sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="sms:+18154510106"
            className="bg-[#0A0A0A] text-white font-bold text-[14px] tracking-[2.5px] uppercase px-10 py-5 rounded-sm hover:bg-[#1a1a1a] transition-colors flex items-center justify-center gap-3 shadow-xl"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            📱 Text for a Free Estimate
          </a>
          <a href="tel:+18154510106"
            className="border-2 border-[#0A0A0A] text-[#0A0A0A] font-bold text-[14px] tracking-[2.5px] uppercase px-10 py-5 rounded-sm hover:bg-[#0A0A0A] hover:text-white transition-colors flex items-center justify-center gap-3"
            style={{ fontFamily: 'Oswald, sans-serif' }}
          >
            📞 (815) 451-0106
          </a>
        </div>
      </div>
    </section>
  )
}
