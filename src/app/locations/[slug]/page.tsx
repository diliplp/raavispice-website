import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageHero from '@/components/PageHero'
import SectionHeader from '@/components/SectionHeader'
import { locations } from '@/lib/locationData'
import Link from 'next/link'
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const location = locations[slug]
  if (!location) return {}

  return {
    title: `Best Pakistani Restaurant in ${location.name} | Raavi Spice`,
    description: location.description,
    keywords: location.keywords.join(', '),
    alternates: {
      canonical: `https://raavispice.com/locations/${slug}`,
    },
  }
}

export async function generateStaticParams() {
  return Object.keys(locations).map((slug) => ({
    slug,
  }))
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params
  const location = locations[slug]

  if (!location) {
    notFound()
  }

  return (
    <main className="bg-forest-green min-h-screen pb-20">
      <PageHero
        title={location.name}
        tagline="Authentic Pakistani Cuisine"
        subtitle={`Proudly serving the ${location.name} community with traditional Punjabi flavours and luxury hospitality.`}
        image="/images/menu-hero.jpeg"
      />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              title={`The Finest Pakistani Dining Near ${location.name}`}
              subtitle="A short journey to the heart of Lahore"
              align="left"
            />
            
            <div className="space-y-6 text-cream/80 text-lg leading-relaxed mb-8">
              <p>
                At Raavi Spice, we believe that authentic food is worth the journey. While we are located in West Drayton, we have become the go-to destination for residents of <strong>{location.name}</strong> who are seeking something beyond the ordinary.
              </p>
              <p>
                Our kitchen is led by chefs who grew up on the banks of the Raavi River, bringing family recipes and traditional charcoal-grilling techniques to West London. Whether you're craving our 6-hour slow-cooked Lamb Nihari or our signature Sizzling Mix Grill, we promise a taste that is as deep and timeless as our heritage.
              </p>
              
              <div className="bg-dark-green/50 border border-antique-gold/20 p-6 rounded-lg space-y-4">
                <h3 className="text-antique-gold font-subheading text-xl">Travel Information</h3>
                <div className="flex items-center gap-3">
                  <MapPin className="text-antique-gold" size={20} />
                  <span>Distance from {location.name}: <strong>{location.distance}</strong></span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="text-antique-gold" size={20} />
                  <span>Driving time: <strong>{location.drivingTime}</strong></span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/menu" className="btn-primary flex items-center gap-2">
                View Full Menu <ArrowRight size={18} />
              </Link>
              <Link href="/reservations" className="btn-secondary">
                Book a Table
              </Link>
            </div>
          </div>

          <div className="relative aspect-square rounded-2xl overflow-hidden border border-antique-gold/30">
            <img
              src="/images/instafeed/lahore-to-you.jpg"
              alt={`Authentic Pakistani Food for ${location.name}`}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-green/80 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <p className="font-accent text-3xl text-antique-gold mb-2">Heritage on a Plate</p>
              <p className="text-cream/90">Experience the true taste of Pakistani hospitality.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <section className="bg-dark-green py-24 border-y border-antique-gold/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeader
            title="Why Residents of West London Choose Raavi Spice"
            subtitle="The standard for Pakistani cuisine in the area"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Charcoal Authentic',
                desc: 'We use traditional live charcoal for all our grills, ensuring that smoky, authentic flavour you can\'t get with gas.'
              },
              {
                title: 'Heritage Recipes',
                desc: 'Our recipes aren\'t just instructions; they are family secrets passed down from the heart of Punjab.'
              },
              {
                title: 'Luxury Ambiance',
                desc: 'We provide a fine-dining atmosphere that makes every meal feel like a special occasion.'
              }
            ].map((item, index) => (
              <div key={index} className="p-8 border border-antique-gold/20 rounded-xl hover:border-antique-gold/50 transition-colors bg-forest-green/30">
                <h3 className="text-antique-gold font-subheading text-xl mb-4">{item.title}</h3>
                <p className="text-cream/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h2 className="text-h2 text-antique-gold mb-6">Join Us Tonight</h2>
        <p className="text-cream/80 text-lg mb-10">
          We are open late and ready to welcome our neighbors from {location.name}. Whether it's a family dinner or a quick takeaway, we look forward to serving you.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <a href="tel:+441895528170" className="flex items-center gap-3 text-antique-gold hover:text-cream transition-colors text-xl">
            <Phone size={24} />
            <span>01895 528170</span>
          </a>
          <div className="flex items-center gap-3 text-cream/70">
            <MapPin size={24} className="text-antique-gold" />
            <span>39 Station Road, West Drayton, UB7 7LN</span>
          </div>
        </div>
      </section>
    </main>
  )
}
