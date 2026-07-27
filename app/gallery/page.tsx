import type { Metadata } from "next"
import Image from "next/image"
import CTAStrip from "@/components/CTAStrip"

export const metadata: Metadata = {
  title: "Gallery | Before & After Photos | Rob's Exterior Services",
  description: "View before and after photos of Rob's Exterior Services work in Woodstock, IL and McHenry County. Gutter cleaning, soft washing, roof washing, window cleaning, pressure washing & deck staining results.",
}

const photos = [
  { src: "/images/front of house 2 .jpeg", alt: "Soft wash curb appeal Woodstock IL", label: "Soft Wash · Curb Appeal", w: 900, h: 1200 },
  { src: "/images/exterior window 1 .jpeg", alt: "Window cleaning Woodstock IL", label: "Window Cleaning", w: 900, h: 1200 },
  { src: "/images/gutter 1 .jpeg", alt: "Gutter cleaning before Woodstock IL", label: "Gutter Cleaning · Before", w: 900, h: 1200 },
  { src: "/images/roof_wash_1.jpeg", alt: "Roof washing before and after", label: "Roof Washing · Before & After", w: 900, h: 600 },
  { src: "/images/patio 3 .jpeg", alt: "Pressure washing patio Woodstock IL", label: "Pressure Washing", w: 900, h: 1200 },
  { src: "/images/housewash 1.jpeg", alt: "House soft wash Woodstock IL", label: "House Wash · After", w: 900, h: 1200 },
  { src: "/images/front of house 3 .jpeg", alt: "Curb appeal Woodstock IL", label: "Curb Appeal · After", w: 900, h: 1200 },
  { src: "/images/gutter 2 .jpeg", alt: "Clogged gutters before", label: "Gutter Cleaning · Before", w: 900, h: 1200 },
  { src: "/images/exterior window 2 .jpeg", alt: "Window cleaning residential", label: "Window Cleaning", w: 900, h: 1200 },
  { src: "/images/lawn_cleanup_6.jpg", alt: "Lawn cleanup Woodstock IL", label: "Lawn Clean-Up · After", w: 900, h: 1200 },
  { src: "/images/roof_wash_3.jpeg", alt: "Roof washing in progress", label: "Roof Washing · In Progress", w: 900, h: 600 },
  { src: "/images/siding 9.jpeg", alt: "Siding before soft wash", label: "Soft Wash · Before", w: 900, h: 1200 },
  { src: "/images/patio 1.jpeg", alt: "Patio pressure washing", label: "Pressure Washing · Patio", w: 900, h: 1200 },
  { src: "/images/siding 1 .jpeg", alt: "Siding after soft wash", label: "Soft Wash · After", w: 900, h: 1200 },
  { src: "/images/front of house 1 .jpeg", alt: "Home exterior Woodstock IL", label: "Soft Wash · Curb Appeal", w: 900, h: 1200 },
  { src: "/images/lawn_cleanup_1.jpeg", alt: "Lawn cleanup trimming", label: "Lawn Clean-Up", w: 900, h: 1200 },
  { src: "/images/lawn_cleanup_2.jpg", alt: "Shrub trimming before", label: "Shrub Trimming · Before", w: 900, h: 1200 },
  { src: "/images/lawn_cleanup_4.jpg", alt: "Yard cleanup before", label: "Lawn Clean-Up · Before", w: 900, h: 1200 },
  { src: "/images/roof_wash_2.jpg", alt: "Roof wash before after", label: "Roof Washing · Before & After", w: 900, h: 600 },
  { src: "/images/exterior window 3 .jpeg", alt: "Commercial window cleaning", label: "Commercial Windows", w: 900, h: 1200 },
  { src: "/images/housewash 2 .jpeg", alt: "House wash after", label: "House Wash · After", w: 900, h: 1200 },
  { src: "/images/patio 2 .jpeg", alt: "Patio pressure washed", label: "Pressure Washing · After", w: 900, h: 1200 },
  { src: "/images/siding 6.jpeg", alt: "Siding mold before soft wash", label: "Soft Wash · Before", w: 900, h: 1200 },
  { src: "/images/siding 3 .jpeg", alt: "Siding after soft wash", label: "Soft Wash · After", w: 900, h: 1200 },
  { src: "/images/garage 1.jpeg", alt: "Gutter detail inspection", label: "Gutter Detail", w: 900, h: 1200 },
  { src: "/images/e99a34d5-e4f9-45f4-873d-17003588d4db.jpeg", alt: "Severely clogged gutters before", label: "Gutter Cleaning · Before", w: 900, h: 1200 },
  { src: "/images/patio 4.jpeg", alt: "Patio before pressure washing", label: "Pressure Washing · Before", w: 900, h: 1200 },
  { src: "/images/lawn_cleanup_5.jpg", alt: "Shrub trimming during", label: "Shrub Trimming · During", w: 900, h: 1200 },
  { src: "/images/lawn_cleanup_3.jpg", alt: "Overgrown bushes before cleanup", label: "Shrub Trimming · Before", w: 900, h: 1200 },
  { src: "/images/deckstain2.jpg", alt: "Deck staining before and after Woodstock IL", label: "Deck Stain · Before & After", w: 900, h: 1200 },
  { src: "/images/deckstain.jpg", alt: "Deck staining result Woodstock IL", label: "Deck Staining · After", w: 900, h: 1200 },
  { src: "/images/deckstain3.jpg", alt: "Deck staining in progress", label: "Deck Staining · During", w: 900, h: 1200 },
  { src: "/images/deckstain4.jpg", alt: "Deck staining Woodstock IL", label: "Deck Staining", w: 900, h: 1200 },
  { src: "/images/deckwash2.jpg", alt: "Deck wash before and after", label: "Deck Wash · Before & After", w: 900, h: 1200 },
  { src: "/images/deckwash3.jpg", alt: "Deck wash mold removal", label: "Deck Wash · Before & After", w: 900, h: 1200 },
  { src: "/images/Deck wash.jpg", alt: "Deck pressure washing before after", label: "Deck Wash · Before & After", w: 900, h: 600 },
  { src: "/images/siding 10.jpeg", alt: "Siding algae before soft wash", label: "Soft Wash · Before", w: 900, h: 1200 },
]

export default function GalleryPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 bg-brand-black overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(201,168,76,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(201,168,76,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-4">Real Results · Real Homes</p>
          <h1 className="font-display font-black text-[clamp(48px,8vw,96px)] uppercase tracking-tight leading-[0.95] mb-6">
            Our <span className="gold-text">Work</span>
          </h1>
          <p className="text-white/50 text-xl max-w-xl mx-auto">Every photo is a real job completed by Rob in Woodstock and the surrounding McHenry County communities.</p>
        </div>
      </section>

      <section className="py-16 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {photos.map((photo, i) => (
              <div key={i} className="break-inside-avoid relative group overflow-hidden rounded-sm border border-brand-border hover:border-brand-gold/40 transition-colors">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.w}
                  height={photo.h}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={i < 6 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-[10px] font-bold tracking-[2px] uppercase text-brand-gold bg-brand-black/70 px-3 py-1.5 rounded-sm">{photo.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip heading="Like what you see?" sub="Text Rob today for a free estimate on your home." />
    </>
  )
}
