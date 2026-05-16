'use client'

import Link from 'next/link'
import Image from 'next/image'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import { blogPosts } from '@/lib/blogData'
import { Calendar, User, ArrowRight } from 'lucide-react'

export default function BlogClient() {
  return (
    <>
      <PageHero
        tagline="Stories & Heritage"
        title="Our Blog"
        subtitle="Exploring the rich culinary landscape of Pakistan and the stories behind our kitchen"
        image="/images/instafeed/cooking.jpg"
      />

      <section className="section bg-forest-green">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1}>
                <article className="group h-full flex flex-col bg-deep-green border border-antique-gold/10 hover:border-antique-gold/30 transition-all duration-300">
                  <Link href={`/blog/${post.id}`} className="block relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-antique-gold text-forest-green px-3 py-1 text-xs font-bold tracking-widest uppercase">
                      {post.category}
                    </div>
                  </Link>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-cream/50 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </span>
                    </div>

                    <h2 className="font-heading text-2xl text-antique-gold mb-4 group-hover:text-champagne-gold transition-colors">
                      <Link href={`/blog/${post.id}`}>
                        {post.title}
                      </Link>
                    </h2>

                    <p className="text-cream/70 text-sm leading-relaxed mb-6 flex-1">
                      {post.excerpt}
                    </p>

                    <Link 
                      href={`/blog/${post.id}`} 
                      className="inline-flex items-center gap-2 text-antique-gold font-medium hover:text-champagne-gold transition-colors group/link"
                    >
                      <span>Read More</span>
                      <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Teaser */}
      <section className="section section-light">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-h1 text-forest-green mb-6">
              Stay in the Loop
            </h2>
            <p className="text-lg text-charcoal/80 mb-8">
              Subscribe to our newsletter to receive recipes, heritage stories, and exclusive offers directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-6 py-3 border border-forest-green/20 focus:border-antique-gold focus:outline-none"
              />
              <button className="btn-primary">
                Subscribe
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
