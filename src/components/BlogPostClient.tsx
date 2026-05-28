'use client'

import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import { BlogPost } from '@/lib/blogData'
import { Calendar, User, ArrowLeft, Tag } from 'lucide-react'

export default function BlogPostClient({ post }: { post: BlogPost }) {
  return (
    <>
      <PageHero
        tagline={post.category}
        title={post.title}
        image={post.image}
        variant={post.heroVariant}
      />

      <section className="section bg-forest-green">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-antique-gold hover:text-champagne-gold transition-colors mb-10 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blog</span>
            </Link>
          </ScrollReveal>

          <article>
            <ScrollReveal delay={0.1}>
              <div className="flex flex-wrap items-center gap-6 text-sm text-cream/50 mb-12 pb-8 border-b border-antique-gold/10">
                <span className="flex items-center gap-2">
                  <Calendar size={16} className="text-antique-gold" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <User size={16} className="text-antique-gold" />
                  By {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Tag size={16} className="text-antique-gold" />
                  {post.category}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div 
                className="prose prose-invert prose-gold max-w-none 
                  prose-headings:font-heading prose-headings:text-antique-gold prose-headings:tracking-wide
                  prose-p:text-cream/80 prose-p:leading-relaxed prose-p:text-lg
                  prose-strong:text-antique-gold
                  prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="mt-20 p-10 bg-deep-green border border-antique-gold/10 text-center">
                <h3 className="font-heading text-2xl text-antique-gold mb-4">
                  Experience the Flavors
                </h3>
                <p className="text-cream/70 mb-8 max-w-lg mx-auto">
                  Inspired by our stories? Join us at Raavi Spice to experience the authenticity of our cuisine firsthand.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link href="/reservations" className="btn-primary">
                    Book a Table
                  </Link>
                  <Link href="/menu" className="btn-secondary">
                    View Menu
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </article>
        </div>
      </section>
    </>
  )
}
