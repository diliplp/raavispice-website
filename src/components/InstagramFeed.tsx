'use client'

import { Instagram } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

// Instagram posts - these would ideally be fetched from Instagram API
// For now, we'll use placeholder images that you can replace with screenshots/thumbnails from your videos
const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop',
    caption: 'Sizzling lamb karahi fresh from the wok 🔥',
    link: 'https://www.instagram.com/raavispiceofficial/',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&h=400&fit=crop',
    caption: 'Aromatic chicken biryani layered with love 🍚',
    link: 'https://www.instagram.com/raavispiceofficial/',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=400&fit=crop',
    caption: 'Seekh kebabs straight from the tandoor 🍢',
    link: 'https://www.instagram.com/raavispiceofficial/',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=400&fit=crop',
    caption: 'Our secret spice blend ✨',
    link: 'https://www.instagram.com/raavispiceofficial/',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=400&fit=crop',
    caption: 'Freshly baked naan from the tandoor 🫓',
    link: 'https://www.instagram.com/raavispiceofficial/',
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop',
    caption: 'Creamy butter chicken perfection 🧈',
    link: 'https://www.instagram.com/raavispiceofficial/',
  },
]

export default function InstagramFeed() {
  return (
    <section className="section bg-deep-green">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <a
              href="https://www.instagram.com/raavispiceofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-antique-gold hover:text-champagne-gold transition-colors group"
            >
              <Instagram size={28} />
              <span className="font-heading text-2xl">@raavispiceofficial</span>
            </a>
            <p className="text-cream/70 mt-2">Follow us for the latest updates and behind-the-scenes content</p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
          {instagramPosts.map((post, index) => (
            <ScrollReveal key={post.id} delay={index * 0.1}>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-square overflow-hidden group"
              >
                <img
                  src={post.image}
                  alt={post.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-forest-green/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Instagram className="text-antique-gold" size={32} />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.6}>
          <div className="text-center mt-10">
            <a
              href="https://www.instagram.com/raavispiceofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <Instagram size={18} />
              <span>Follow Us on Instagram</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
