'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface Particle {
  id: number
  x: number
  delay: number
  duration: number
  size: number
  color: string
}

const spiceColors = [
  '#E6A817', // Saffron
  '#D4A84B', // Turmeric
  '#C41E3A', // Chili
  '#7B8B6F', // Cardamom
  '#8B4513', // Cinnamon
]

export default function FallingSpices() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    // Only run on desktop
    if (window.innerWidth < 768) return

    const newParticles: Particle[] = []
    for (let i = 0; i < 20; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 8 + Math.random() * 6,
        size: 3 + Math.random() * 4,
        color: spiceColors[Math.floor(Math.random() * spiceColors.length)],
      })
    }
    setParticles(newParticles)
  }, [])

  if (particles.length === 0) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          initial={{ y: -20, opacity: 0 }}
          animate={{
            y: '100vh',
            opacity: [0, 0.6, 0.6, 0],
            x: [0, 30, -20, 10, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  )
}
