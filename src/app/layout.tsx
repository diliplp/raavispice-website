import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  title: 'Raavi Spice | Authentic Pakistani Cuisine in West Drayton',
  description: 'Experience the authentic flavours of Pakistan at Raavi Spice. From the Five Rivers to the Thames, we bring you traditional recipes crafted with love and heritage.',
  keywords: 'Pakistani restaurant, Pakistani food, Pakistani cuisine, West Drayton, halal restaurant, authentic curry, tandoori, biryani, Raavi Spice, Punjabi food London',
  metadataBase: new URL("https://raavispice.com"),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Raavi Spice | Authentic Pakistani Cuisine',
    description: 'From the Five Rivers to the Thames - Experience authentic Pakistani cuisine in West Drayton, London.',
    url: 'https://raavispice.com',
    type: 'website',
    locale: 'en_GB',
    siteName: 'Raavi Spice',
    images: [{ url: '/images/hero-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raavi Spice | Authentic Pakistani Cuisine',
    description: 'From the Five Rivers to the Thames - Experience authentic Pakistani cuisine in West Drayton, London.',
    images: ['/images/hero-image.webp'],
  },
  icons: {
    icon: '/images/favicon-raavispice.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
