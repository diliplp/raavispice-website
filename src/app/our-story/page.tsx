import type { Metadata } from 'next'
import StoryClient from '@/components/StoryClient'

export const metadata: Metadata = {
  title: 'Our Story | Raavi Spice - From the Raavi River to West Drayton',
  description: 'From the banks of the Raavi River in Pakistan to 39 Station Road, West Drayton — discover the heritage and passion behind every dish at Raavi Spice.',
  alternates: {
    canonical: '/our-story',
  },
  openGraph: {
    title: 'Our Story | Raavi Spice - From the Raavi River to West Drayton',
    description: 'From the banks of the Raavi River in Pakistan to 39 Station Road, West Drayton — discover the heritage and passion behind every dish at Raavi Spice.',
    url: 'https://raavispice.com/our-story',
    type: 'website',
    siteName: 'Raavi Spice',
    images: [{ url: '/images/hero-image.webp', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Story | Raavi Spice - From the Raavi River to West Drayton',
    description: 'From the banks of the Raavi River in Pakistan to 39 Station Road, West Drayton — discover the heritage and passion behind every dish at Raavi Spice.',
    images: ['/images/hero-image.webp'],
  },
}

export default function OurStoryPage() {
  return <StoryClient />
}
