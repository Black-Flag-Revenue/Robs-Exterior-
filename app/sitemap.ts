import { MetadataRoute } from 'next'
import { services } from '@/lib/services'
import { cities } from '@/lib/cities'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://robsexterior.com'
  const now = new Date()

  const staticPages = [
    { url: base, lastModified: now, changeFrequency: 'monthly' as const, priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.7 },
    { url: `${base}/services`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${base}/gallery`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${base}/locations`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.8 },
  ]

  const servicePages = services.map(s => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const locationPages = cities.map(c => ({
    url: `${base}/locations/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const comboPpages = services.flatMap(s =>
    cities.map(c => ({
      url: `${base}/services/${s.slug}/${c.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    }))
  )

  return [...staticPages, ...servicePages, ...locationPages, ...comboPpages]
}
