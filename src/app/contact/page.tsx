import type { Metadata } from 'next'
import ContactClient from '@/components/ContactClient'

export const metadata: Metadata = {
  title: 'Contact Us | Raavi Spice - Authentic Pakistani Cuisine',
  description: 'Visit us in West Drayton or get in touch for reservations, catering inquiries, and feedback. We are open 7 days a week for the finest Pakistani food experience.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return <ContactClient />
}
