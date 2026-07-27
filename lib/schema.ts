import { Service } from './services'
import { City } from './cities'

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Rob's Exterior Services",
    "description": "Professional exterior cleaning services in Woodstock, IL. Gutter cleaning, soft washing, roof washing, window cleaning, pressure washing, deck staining & lawn care. Serving all of McHenry County.",
    "url": "https://robsexterior.com",
    "telephone": "+18154510106",
    "email": "rob@robsexterior.com",
    "founder": { "@type": "Person", "name": "Robert Morales" },
    "priceRange": "$$",
    "image": "https://robsexterior.com/images/og-image.jpg",
    "logo": "https://robsexterior.com/images/logo.png",
    "slogan": "Woodstock's Exterior Experts",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Woodstock",
      "addressRegion": "IL",
      "postalCode": "60098",
      "addressCountry": "US"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 42.3147, "longitude": -88.4487 },
    "areaServed": [
      "Woodstock, IL", "Crystal Lake, IL", "Huntley, IL", "Algonquin, IL",
      "Marengo, IL", "Harvard, IL", "McHenry, IL", "Cary, IL", "Lake in the Hills, IL"
    ],
    "sameAs": ["https://www.facebook.com/robsexteriorservices"],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "12" }
  }
}

export function serviceSchema(service: Service, city?: City) {
  const cityName = city ? `${city.name}, IL` : "Woodstock, IL and McHenry County"
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${service.name}${city ? ` in ${city.name}, IL` : ''}`,
    "description": city ? service.serviceContext?.[service.slug] ?? service.description : service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Rob's Exterior Services",
      "telephone": "+18154510106",
      "url": "https://robsexterior.com"
    },
    "areaServed": { "@type": "City", "name": cityName },
    "url": `https://robsexterior.com/services/${service.slug}${city ? `/${city.slug}` : ''}`,
    ...(service.startingPrice && {
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": service.startingPrice.replace('$', ''),
        "description": `Starting price for ${service.name}`
      }
    })
  }
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  }
}

export function breadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": crumb.name,
      "item": `https://robsexterior.com${crumb.url}`
    }))
  }
}
