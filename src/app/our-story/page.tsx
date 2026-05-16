import type { Metadata } from 'next'
import StoryClient from '@/components/StoryClient'

export const metadata: Metadata = {
  title: 'Our Story | Raavi Spice - Heritage & Authentic Flavours',
  description: 'Learn about our journey from the banks of the Raavi River in Pakistan to London. Discover our passion for togetherness and authentic Punjabi hospitality.',
  alternates: {
    canonical: '/our-story',
  },
}

export default function OurStoryPage() {
  return <StoryClient />
}
