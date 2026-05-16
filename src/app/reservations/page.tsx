import type { Metadata } from 'next'
import ReservationsClient from '@/components/ReservationsClient'

export const metadata: Metadata = {
  title: 'Reservations | Raavi Spice - Authentic Pakistani Cuisine',
  description: 'Book your table at Raavi Spice. Experience the warmth of Pakistani hospitality and enjoy our traditional recipes in West Drayton.',
  alternates: {
    canonical: '/reservations',
  },
}

export default function ReservationsPage() {
  return <ReservationsClient />
}
