import type { Metadata } from 'next'
import MenuClient from '@/components/MenuClient'

export const metadata: Metadata = {
  title: 'Raavi Spice Menu — Pakistani & Punjabi Dishes | West Drayton',
  description: 'Explore our full menu — Karahi specials, biryanis, Lahori starters, fresh breads and more. Dine-in or takeaway at 39 Station Road, West Drayton. Open Mon–Sat 11am–11pm.',
  alternates: {
    canonical: '/menu',
  },
  openGraph: {
    title: 'Raavi Spice Menu — Pakistani & Punjabi Dishes',
    description: 'From Karahi specials to biryanis, breakfast to desserts. Full menu for dine-in and takeaway at 39 Station Road, West Drayton.',
    url: 'https://raavispice.com/menu',
    type: 'website',
    siteName: 'Raavi Spice',
    images: [{ url: '/images/hero-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raavi Spice Menu — Pakistani & Punjabi Dishes',
    description: 'From Karahi specials to biryanis, breakfast to desserts. Full menu for dine-in and takeaway at 39 Station Road, West Drayton.',
    images: ['/images/hero-image.webp'],
  },
}

export default function MenuPage() {
  return <MenuClient />
}
