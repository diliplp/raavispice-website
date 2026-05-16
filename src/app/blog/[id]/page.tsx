import { Metadata } from 'next'
import { blogPosts } from '@/lib/blogData'
import BlogPostClient from '@/components/BlogPostClient'
import { notFound } from 'next/navigation'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.id === params.id)
  
  if (!post) return { title: 'Post Not Found' }

  return {
    title: `${post.title} | Raavi Spice Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
    },
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }))
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.id === params.id)

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}
