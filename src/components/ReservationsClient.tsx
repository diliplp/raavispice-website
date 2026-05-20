'use client'

import Link from 'next/link'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import { Phone } from 'lucide-react'

export default function ReservationsClient() {
  return (
    <>
      <PageHero
        tagline="Join Us"
        title="Reserve a Table"
        subtitle="Experience the warmth of Pakistani hospitality"
        image="/images/instafeed/cooking.jpg"
      />

      <section className="section bg-forest-green">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Reservation Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="bg-deep-green p-8 md:p-10 border border-antique-gold/20">
                  <div className="text-center py-12">
                    <h2 className="font-heading text-3xl text-antique-gold mb-6">
                      Reservations
                    </h2>
                    <p className="text-cream/80 text-lg mb-8 max-w-lg mx-auto">
                      Please call us directly to book your table. We look forward to hosting you!
                    </p>
                    <a
                      href="tel:+441895528170"
                      className="btn-primary inline-flex items-center gap-2"
                    >
                      <Phone size={20} />
                      <span>Call +44 1895 528170 to Reserve</span>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal delay={0.3}>
                <div className="bg-deep-green p-8 border border-antique-gold/20">
                  <h3 className="font-subheading text-xl text-antique-gold mb-4">
                    Opening Hours
                  </h3>
                  <div className="space-y-3 text-cream/80">
                    <div className="flex justify-between">
                      <span>Mon - Fri</span>
                      <span>11:00 - 23:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sat - Sun</span>
                      <span>10:00 - 22:00</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <div className="bg-deep-green p-8 border border-antique-gold/20">
                  <h3 className="font-subheading text-xl text-antique-gold mb-4">
                    Private Dining
                  </h3>
                  <p className="text-cream/70 mb-4">
                    Planning a special event? We offer private dining experiences
                    for groups of 10 or more with customised menus.
                  </p>
                  <Link href="/contact" className="text-antique-gold hover:text-champagne-gold transition-colors">
                    Enquire about Private Dining →
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
