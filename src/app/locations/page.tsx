import { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import { locations } from '@/lib/locationData'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Our Service Areas | Best Pakistani Restaurant West London',
  description: 'Raavi Spice serves authentic Pakistani and Punjabi cuisine to residents across West London, including Uxbridge, Slough, Hayes, and beyond.',
  alternates: {
    canonical: 'https://raavispice.com/locations',
  },
}

export default function LocationsIndexPage() {
  return (
    <main className="bg-forest-green min-h-screen pb-20">
      <PageHero
        title="Our Locations"
        tagline="Authentic Taste, Everywhere"
        subtitle="Bringing the heart of Lahore to communities across West London and beyond."
        image="/images/menu-hero.jpeg"
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <SectionHeader
          title="Areas We Proudly Serve"
          subtitle="Discover authentic Pakistani dining in your neighborhood"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Flagship Location */}
          <Link 
            href="/"
            className="group p-8 border border-antique-gold rounded-xl bg-dark-green/40 hover:bg-dark-green/60 transition-all shadow-[0_0_20px_rgba(212,175,55,0.1)]"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-medium text-antique-gold uppercase tracking-widest mb-1 block">Flagship Location</span>
                <h3 className="text-2xl text-antique-gold font-subheading group-hover:text-cream transition-colors">
                  West Drayton
                </h3>
              </div>
              <MapPin size={24} className="text-antique-gold" />
            </div>
            <p className="text-cream/70 mb-6">
              Our main restaurant in the heart of West Drayton, where the Raavi Spice journey begins. Traditional charcoal grills and luxury dining.
            </p>
            <div className="flex items-center gap-2 text-antique-gold font-medium group-hover:gap-4 transition-all">
              Visit Homepage <ArrowRight size={18} />
            </div>
          </Link>

          {Object.values(locations).map((loc) => (
            <Link 
              key={loc.slug} 
              href={`/locations/${loc.slug}`}
              className="group p-8 border border-antique-gold/20 rounded-xl bg-dark-green/30 hover:bg-dark-green/50 hover:border-antique-gold transition-all"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl text-antique-gold font-subheading group-hover:text-cream transition-colors">
                  {loc.name}
                </h3>
                <MapPin size={24} className="text-antique-gold opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-cream/70 mb-6 line-clamp-2">
                {loc.description}
              </p>
              <div className="flex items-center gap-2 text-antique-gold font-medium group-hover:gap-4 transition-all">
                Learn More <ArrowRight size={18} />
              </div>
            </Link>
          ))}
        </div>
      </div>

      <section className="bg-dark-green py-24 border-y border-antique-gold/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-h2 text-antique-gold mb-6">Can't Find Your Area?</h2>
          <p className="text-cream/80 text-lg mb-10">
            We are always looking to expand our heritage. Even if your area isn't listed, we welcome you to visit us at our flagship West Drayton restaurant for an unforgettable dining experience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/reservations" className="btn-primary">
              Book a Table
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
