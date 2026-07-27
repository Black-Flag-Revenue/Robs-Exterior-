interface ReviewCardProps {
  text: string
  name: string
  location: string
  initials: string
  delay?: number
}

export default function ReviewCard({ text, name, location, initials, delay = 0 }: ReviewCardProps) {
  return (
    <div
      className="bg-brand-card border border-brand-border rounded-sm p-8 flex flex-col relative border-b-2 border-b-brand-gold hover:-translate-y-1 transition-transform duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="absolute top-6 left-7 font-serif text-7xl text-brand-gold/10 leading-none select-none">"</span>
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-brand-gold text-lg">★</span>
        ))}
      </div>
      <p className="text-white/60 text-[15px] leading-relaxed italic mb-6 flex-1">"{text}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-brand-dark border border-brand-border flex items-center justify-center font-display font-bold text-brand-gold text-sm">
          {initials}
        </div>
        <div>
          <div className="text-sm font-bold text-white">{name}</div>
          <div className="text-xs text-white/30 tracking-wide uppercase">{location}</div>
        </div>
      </div>
    </div>
  )
}
