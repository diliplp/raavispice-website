'use client'

import { useState } from 'react'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import { menuCategories, MenuItem } from '@/lib/menuData'

function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <div className={`menu-item ${item.signature ? 'relative' : ''}`}>
      {item.signature && (
        <span className="absolute -top-3 left-0 text-xs font-medium tracking-wider uppercase text-champagne-gold">
          ★ Signature
        </span>
      )}
      <div className="flex-1 pr-6">
        <h4 className="font-subheading text-lg text-antique-gold mb-1">
          {item.name}
        </h4>
        <p className="text-cream/70 text-sm mb-3">
          {item.description}
        </p>
      </div>
      <div className="text-antique-gold font-medium text-lg whitespace-nowrap">
        {item.price}
      </div>
    </div>
  )
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id)

  const scrollToCategory = (id: string) => {
    setActiveCategory(id)
    const element = document.getElementById(id)
    if (element) {
      const offset = 180
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <>
      <PageHero
        tagline="Culinary Excellence"
        title="Our Menu"
        subtitle="Traditional recipes crafted with the finest ingredients"
        image="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1920&h=1080&fit=crop"
      />

      {/* Sticky Category Navigation */}
      <nav className="sticky top-[72px] z-40 bg-forest-green/95 backdrop-blur-sm border-b border-antique-gold/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto py-4 gap-2 md:gap-4 scrollbar-hide">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`px-4 py-2 text-sm font-medium tracking-wider uppercase whitespace-nowrap transition-colors
                  ${activeCategory === category.id
                    ? 'text-forest-green bg-antique-gold'
                    : 'text-cream/70 hover:text-antique-gold'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </nav>


      {/* Menu Categories */}
      <section className="bg-forest-green py-12">
        <div className="max-w-4xl mx-auto px-6">
          {menuCategories.map((category, catIndex) => (
            <div
              key={category.id}
              id={category.id}
              className="mb-20 last:mb-0 scroll-mt-48"
            >
              <ScrollReveal>
                <div className="text-center mb-12">
                  <h2 className="text-h1 text-antique-gold mb-2">
                    {category.name}
                  </h2>
                  <p className="text-cream/70">
                    {category.description}
                  </p>
                  <div className="gold-line mt-6" />
                </div>
              </ScrollReveal>

              <div>
                {category.items.map((item, itemIndex) => (
                  <ScrollReveal key={item.name} delay={itemIndex * 0.05}>
                    <MenuItemCard item={item} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Allergen Notice */}
      <section className="bg-deep-green py-12 border-t border-antique-gold/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-cream/60 text-sm space-y-6">
            <p>
              <strong className="text-cream/80 block mb-1">Allergens & General Notice:</strong>
              If you have a food allergy or intolerance, please speak to a member of our staff before ordering.
            </p>
            <p>
              <strong className="text-cream/80 block mb-1">Catering & Events:</strong>
              We offer off-site catering for weddings, and catering or venue hire for parties<br />
              and special occasions at our Raavi Royale.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
