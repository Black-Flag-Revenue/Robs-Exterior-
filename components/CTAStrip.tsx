export default function CTAStrip({ heading = "Ready for a cleaner home?", sub = "Text Rob today for a free estimate. Fast response, honest pricing, real results." }) {
  return (
    <section className="bg-brand-gold py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[repeating-linear-gradient(-55deg,transparent,transparent_48px,rgba(0,0,0,0.04)_48px,rgba(0,0,0,0.04)_49px)]" />
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-display font-black text-4xl md:text-5xl text-brand-black uppercase tracking-wide mb-4">
          {heading}
        </h2>
        <p className="text-brand-black/60 text-lg mb-10">{sub}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="sms:+18154510106"
            className="bg-brand-black text-white font-display font-bold text-[14px] tracking-[2.5px] uppercase px-10 py-5 rounded-sm hover:bg-[#1a1a1a] transition-colors flex items-center justify-center gap-3 shadow-xl"
          >
            📱 Text for a Free Estimate
          </a>
          <a
            href="tel:+18154510106"
            className="border-2 border-brand-black text-brand-black font-display font-bold text-[14px] tracking-[2.5px] uppercase px-10 py-5 rounded-sm hover:bg-brand-black hover:text-white transition-colors flex items-center justify-center gap-3"
          >
            📞 (815) 451-0106
          </a>
        </div>
      </div>
    </section>
  )
}
