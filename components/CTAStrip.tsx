export default function CTAStrip({ heading = "Ready for a cleaner home?", sub = "Text Rob today for a free estimate. Fast response, honest pricing, real results." }: { heading?: string; sub?: string }) {
  return (
    <section style={{ background: '#C9A84C', padding: '80px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'repeating-linear-gradient(-55deg, transparent, transparent 48px, rgba(0,0,0,0.04) 48px, rgba(0,0,0,0.04) 49px)',
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h2 style={{
          fontFamily: 'Oswald, sans-serif', fontWeight: 900, fontSize: 'clamp(32px,5vw,52px)',
          textTransform: 'uppercase', letterSpacing: '1px', color: '#0A0A0A',
          marginBottom: 12, lineHeight: 1.1,
        }}>{heading}</h2>
        <p style={{ fontSize: 17, color: 'rgba(10,10,10,0.6)', marginBottom: 40 }}>{sub}</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="sms:+18154510106" style={{
            fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 14,
            letterSpacing: '2.5px', textTransform: 'uppercase',
            background: '#0A0A0A', color: '#fff',
            padding: '18px 44px', borderRadius: 3, display: 'inline-flex', alignItems: 'center', gap: 10,
            boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
          }}>📱 Text for a Free Estimate</a>
          <a href="tel:+18154510106" style={{
            fontFamily: 'Oswald, sans-serif', fontWeight: 700, fontSize: 14,
            letterSpacing: '2.5px', textTransform: 'uppercase',
            background: 'transparent', color: '#0A0A0A',
            padding: '18px 44px', borderRadius: 3, display: 'inline-flex', alignItems: 'center', gap: 10,
            border: '2px solid #0A0A0A',
          }}>📞 (815) 451-0106</a>
        </div>
      </div>
    </section>
  )
}
