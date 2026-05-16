import type { Metadata } from 'next'
import HomeClient from '@/components/HomeClient'

export const metadata: Metadata = {
  title: 'Raavi Spice | Authentic Pakistani & Punjabi Cuisine in West Drayton',
  description: 'Discover the true taste of Pakistan at Raavi Spice. Traditional recipes, charcoal-grilled delicacies, and authentic Punjabi flavours in the heart of West Drayton.',
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  return <HomeClient />
}
