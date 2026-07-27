import type { Metadata } from "next"
import "./globals.css"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import { localBusinessSchema } from "@/lib/schema"

export const metadata: Metadata = {
  metadataBase: new URL("https://robsexterior.com"),
  title: {
    default: "Rob's Exterior Services | Woodstock's Exterior Experts | McHenry County IL",
    template: "%s | Rob's Exterior Services",
  },
  description: "Rob's Exterior Services — Woodstock's most trusted exterior cleaning company. Gutter cleaning, soft washing, roof washing, window cleaning, pressure washing, deck staining & lawn care. Serving all of McHenry County, IL.",
  keywords: ["exterior cleaning Woodstock IL","gutter cleaning Woodstock","soft washing McHenry County","pressure washing Woodstock Illinois","roof washing Woodstock IL","window cleaning McHenry County","deck staining Woodstock IL"],
  authors: [{ name: "Rob's Exterior Services" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://robsexterior.com",
    siteName: "Rob's Exterior Services",
    title: "Rob's Exterior Services | Woodstock's Exterior Experts",
    description: "Professional exterior cleaning in Woodstock, IL and all of McHenry County.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&family=Lato:wght@300;400;700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
        />
      </head>
      <body className="bg-brand-black text-brand-white antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
