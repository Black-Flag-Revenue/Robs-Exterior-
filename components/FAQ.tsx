'use client'
import { useState } from 'react'

interface FAQItem { q: string; a: string }

export default function FAQ({ faqs, heading = "Frequently Asked Questions" }: { faqs: FAQItem[]; heading?: string }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section className="py-24 bg-brand-dark">
      <div className="max-w-3xl mx-auto px-6">
        <p className="section-label text-center mb-4">Got Questions?</p>
        <h2 className="font-display font-black text-4xl md:text-5xl uppercase tracking-wide text-center mb-16">
          {heading}
        </h2>
        <div className="flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-brand-border rounded-sm overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                aria-expanded={open === i}
              >
                <h3 className="font-display font-semibold text-[17px] text-white pr-4">{faq.q}</h3>
                <span className={`w-7 h-7 flex-shrink-0 border border-brand-border rounded-full flex items-center justify-center text-brand-gold text-xl font-light transition-all ${open === i ? 'rotate-45 bg-brand-gold border-brand-gold text-brand-black' : ''}`}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-white/55 text-[15px] leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
