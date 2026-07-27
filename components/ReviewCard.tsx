interface ReviewCardProps { text: string; name: string; location: string; initials: string; delay?: number }

export default function ReviewCard({ text, name, location, initials }: ReviewCardProps) {
  return (
    <div style={{
      background: '#111', border: '1px solid #1e1e1e', borderBottom: '2px solid #C9A84C',
      borderRadius: 4, padding: '36px 32px', display: 'flex', flexDirection: 'column',
      position: 'relative',
    }}>
      <div style={{ position: 'absolute', top: 16, left: 24, fontFamily: 'Georgia, serif', fontSize: 80, color: 'rgba(201,168,76,0.08)', lineHeight: 1, userSelect: 'none' }}>"</div>
      <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
        {[...Array(5)].map((_, i) => <span key={i} style={{ color: '#C9A84C', fontSize: 18 }}>★</span>)}
      </div>
      <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: 24, flex: 1 }}>"{text}"</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 42, height: 42, borderRadius: '50%', background: '#1a1a1a',
          border: '1px solid #2a2a2a', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Oswald, sans-serif', fontWeight: 700, color: '#C9A84C', fontSize: 14, flexShrink: 0,
        }}>{initials}</div>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{name}</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', letterSpacing: '1px', textTransform: 'uppercase' }}>{location}</div>
        </div>
      </div>
    </div>
  )
}
