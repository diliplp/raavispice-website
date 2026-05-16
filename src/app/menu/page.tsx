import type { Metadata } from 'next'
import MenuClient from '@/components/MenuClient'

export const metadata: Metadata = {
  title: 'Menu | Raavi Spice - Authentic Pakistani Cuisine',
  description: 'Explore the rich flavours of Pakistan. From traditional Breakfast and Lahori Starters to our signature Lamb Karahi and Grill Specials.',
  alternates: {
    canonical: '/menu',
  },
}

export default function MenuPage() {
  return <MenuClient />
}
