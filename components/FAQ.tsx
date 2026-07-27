'use client'
import { useState } from 'react'

interface FAQItem { q: string; a: string }

export default function FAQ({ faqs, heading = "Frequently Asked Questions" }: { faqs: FAQItem[]; heading?: string }) {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section style={{ padding: '80px 0', background: '#0d0d0d' }}>
      <div className="container">
        <p className="eyebrow" style={{ textAlign: 'center', marginBottom: 16 }}>Got Questions?</p>
        <h2 style={{
          fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(32px,5vw,52px)',
          textTransform: 'uppercase', textAlign: 'center', marginBottom: 56, letterSpacing: '1px',
        }}>{heading}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, maxWidth: 760, margin: '0 auto' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ border: '1px solid #1e1e1e', borderRadius: 4, overflow: 'hidden' }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', gap: 20,
                }}>
                <h3 style={{ fontFamily: 'Oswald, sans-serif', fontWeight: 600, fontSize: 17, color: '#fff' }}>{faq.q}</h3>
                <span style={{
                  width: 28, height: 28, flexShrink: 0, border: '1px solid #2a2a2a', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: open === i ? '#0A0A0A' : '#C9A84C', fontSize: 20, fontWeight: 300,
                  background: open === i ? '#C9A84C' : 'transparent',
                  transform: open === i ? 'rotate(45deg)' : 'none', transition: 'all 0.3s',
                }}>+</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 24px 20px' }}>
                  <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.5)', lineHeight: 1.8 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
