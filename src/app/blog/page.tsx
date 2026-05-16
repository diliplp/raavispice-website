import type { Metadata } from 'next'
import BlogClient from '@/components/BlogClient'

export const metadata: Metadata = {
  title: 'Blog | Raavi Spice - Stories of Pakistani Heritage & Cuisine',
  description: 'Explore the stories behind our flavors. From the history of the Raavi River to the secrets of slow-cooked Nihari and authentic Punjabi hospitality.',
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogPage() {
  return <BlogClient />
}
