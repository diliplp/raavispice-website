'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown, MapPin, Phone, ArrowRight } from 'lucide-react'
import FallingSpices from '@/components/FallingSpices'
import ScrollReveal from '@/components/ScrollReveal'
import SectionHeader from '@/components/SectionHeader'
import SocialFeed from '@/components/SocialFeed'
import { blogPosts } from '@/lib/blogData'
import { Calendar, ArrowRight } from 'lucide-react'

// Featured dishes data
const featuredDishes = [
  {
    name: 'LAMB NIHARI',
    description: 'Slow-cooked lamb in a rich, aromatic gravy, simmered to tender perfection with traditional spices.',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&h=600&fit=crop',
    video: '/videos/lamb-nihari.mp4',
    price: '£14.99',
  },
  {
    name: 'RAHU FISH',
    description: 'Rahu fish fillets seasoned with fragrant spices. Choice of Fried or Grilled Masala.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&h=600&fit=crop',
    video: '/videos/rahu-fish.mp4',
    price: '£19.99 (1/2kg)',
  },
  {
    name: 'BLOOMING ONION',
    description: 'A whole onion sliced into a “flower,” seasoned, battered. Served crispy & golden with our signature dipping sauce.',
    image: 'https://images.unsplash.com/photo-1625938145744-e38051539994?w=800&h=600&fit=crop',
    video: '/videos/blooming-onion.mp4',
    price: '£9.99',
  },
]

export default function HomeClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-end justify-center">
        {/* H1 for SEO - Visually Hidden but accessible */}
        <h1 className="sr-only">Raavi Spice - Authentic Pakistani & Punjabi Cuisine in West Drayton</h1>
        
        {/* Video Background */}
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hidden md:block absolute inset-0 w-full h-full object-cover opacity-60 blur-2xl scale-125"
          >
            <source src="/videos/hero-desktop.mp4" type="video/mp4" />
          </video>

          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-desktop-poster.webp"
            className="hidden md:block absolute inset-0 w-full h-full object-contain object-center z-10"
          >
            <source src="/videos/hero-desktop.mp4" type="video/mp4" />
          </video>

          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/images/hero-mobile-poster.webp"
            className="block md:hidden absolute inset-0 w-full h-full object-cover object-center z-10"
          >
            <source src="/videos/hero-mobile.mp4" type="video/mp4" />
          </video>

          <div className="hero-overlay absolute inset-0 z-20" />
        </div>

        {/* Falling Spices Effect */}
        <div className="hidden md:block absolute inset-0 pointer-events-none z-10">
          <FallingSpices />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 w-full px-6 pb-24 md:pb-32 flex flex-col items-center justify-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg"
          >
            <Link href="/reservations" className="btn-primary w-full sm:w-auto text-center">
              Reserve a Table
            </Link>
            <Link href="/menu" className="btn-secondary w-full sm:w-auto text-center">
              View Menu
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-antique-gold"
          >
            <ChevronDown size={32} />
          </motion.div>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="section section-light">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            subtitle="Our Beginning"
            title="Where Food Brings People Together"
            light
          />
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
              Our story began over 25 years ago in a restaurant where two people met —
              one with a lifelong passion for cooking, the other drawn in by its warmth —
              and together, we discovered the magic that happens when food brings people together.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-lg text-charcoal/80 leading-relaxed mb-8">
              What started as a simple moment became a lifelong journey, with food always at its heart.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <Link href="/our-story" className="inline-flex items-center gap-2 text-forest-green font-medium hover:text-antique-gold transition-colors group">
              <span>Discover Our Story</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="section bg-deep-green">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="Signature Dishes"
            title="Crafted with Heritage"
            description="Each dish is a celebration of authentic recipes, prepared with traditional techniques and the finest ingredients."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish, index) => (
              <ScrollReveal key={dish.name} delay={index * 0.15}>
                <div className="card group">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    {dish.video && (
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster={dish.image}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      >
                        <source src={dish.video} type="video/mp4" />
                      </video>
                    )}
                    {!dish.video && (
                      <Image
                        src={dish.image}
                        alt={`Authentic Pakistani ${dish.name} at Raavi Spice`}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-green/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-subheading text-xl text-antique-gold">
                        {dish.name}
                      </h3>
                      <span className="text-antique-gold font-medium">
                        {dish.price}
                      </span>
                    </div>
                    <p className="text-cream/70 text-sm">
                      {dish.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.5}>
            <div className="text-center mt-12">
              <Link href="/menu" className="btn-secondary">
                Explore Full Menu
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Teaser Section */}
      <section className="section bg-forest-green overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-[4/5]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/our-heritage.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 border border-antique-gold/30" />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal>
                <p className="font-accent text-2xl text-champagne-gold mb-4">
                  Our Heritage
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-h1 text-antique-gold mb-6">
                  The Journey from Pakistan to London
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="gold-line gold-line-left mb-8" />
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-cream/80 mb-6 leading-relaxed">
                  The Raavi River has nourished the lands of Pakistan for millennia,
                  giving life to a cuisine rich in flavour and tradition. Our journey
                  began in the bustling markets of Lahore, where the art of spice
                  blending was passed from father to son.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className="text-cream/80 mb-8 leading-relaxed">
                  Today, we bring that same passion and authenticity to West Drayton,
                  honouring our roots while welcoming you to become part of our story.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.5}>
                <Link href="/our-story" className="btn-primary">
                  Read Our Story
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA Section */}
      <section className="section section-light border-y border-antique-gold/30">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            subtitle="Join Us"
            title="Reserve Your Table"
            description="Experience the warmth of Pakistani hospitality. Book your table today for an unforgettable culinary journey."
            light
          />
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:+441895528170" className="btn-primary flex items-center gap-2 bg-forest-green text-antique-gold border-forest-green hover:bg-transparent hover:text-forest-green">
                <Phone size={18} />
                <span>+44 1895 528170</span>
              </a>
              <Link href="/reservations" className="btn-secondary border-forest-green text-forest-green hover:bg-forest-green hover:text-antique-gold">
                Book Online
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Social Feed */}
      <SocialFeed />

      {/* Blog Preview Section */}
      <section className="section bg-forest-green border-t border-antique-gold/10">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader
            subtitle="Our Stories"
            title="Latest from the Blog"
            description="Explore the rich culinary landscape of Pakistan and the heritage behind our flavors."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1}>
                <Link href={`/blog/${post.id}`} className="group block h-full flex flex-col bg-deep-green border border-antique-gold/10 hover:border-antique-gold/30 transition-all duration-300">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-xs text-cream/50 mb-3 uppercase tracking-widest">
                      <Calendar size={14} className="text-antique-gold" />
                      {post.date}
                    </div>
                    <h3 className="font-heading text-xl text-antique-gold mb-3 group-hover:text-champagne-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-cream/70 text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-antique-gold font-medium text-sm group-hover:gap-3 transition-all">
                      <span>Read Story</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <Link href="/blog" className="btn-secondary">
                View All Stories
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Location Section */}
      <section className="section bg-dark-green">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <ScrollReveal>
                <p className="font-accent text-2xl text-champagne-gold mb-4">
                  Find Us
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-h1 text-antique-gold mb-6">
                  Visit Raavi Spice
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="gold-line gold-line-left mb-8" />
              </ScrollReveal>

              <div className="space-y-6">
                <ScrollReveal delay={0.3}>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-antique-gold flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-subheading text-lg text-antique-gold mb-1">Address</h4>
                      <p className="text-cream/80">
                        39 Station Road<br />
                        West Drayton, UB7 7LN
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <div className="flex items-start gap-4">
                    <Phone className="text-antique-gold flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-subheading text-lg text-antique-gold mb-1">Phone</h4>
                      <a href="tel:+441895528170" className="text-cream/80 hover:text-antique-gold transition-colors">
                        +44 1895 528170
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.5}>
                  <a
                    href="https://maps.google.com/maps/dir//Raavi+Spice+39+Station+Rd+Yiewsley+West+Drayton+UB7+7LN,+United+Kingdom/@51.5081817,-0.4729724,20z/data=!4m5!4m4!1m0!1m2!1m1!1s0x487671034baa6b85:0x5d7738b8aed07339"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex mt-4"
                  >
                    Get Directions
                  </a>
                </ScrollReveal>
              </div>
            </div>

            <ScrollReveal direction="right">
              <div className="relative aspect-video rounded-sm overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155.2046448818774!2d-0.47315076939424244!3d51.508183132558926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487671034baa6b85%3A0x5d7738b8aed07339!2sRaavi%20Spice!5e0!3m2!1sen!2sin!4v1770738706117!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '400px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                  title="Raavi Spice Location Map"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
