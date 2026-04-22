'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface PageHeroProps {
  title: string
  subtitle?: string
  tagline?: string
  image: string
}

export default function PageHero({ title, subtitle, tagline, image }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-green via-forest-green/70 to-forest-green/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 pt-20">
        {tagline && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-accent text-2xl md:text-3xl text-champagne-gold mb-4"
          >
            {tagline}
          </motion.p>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-h1 md:text-display text-antique-gold mb-4"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="gold-line mt-8"
        />
      </div>
    </section>
  )
}
