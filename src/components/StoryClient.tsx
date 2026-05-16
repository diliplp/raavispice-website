'use client'

import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'

export default function StoryClient() {
  return (
    <>
      <PageHero
        tagline="Our Heritage"
        title="Our Story"
        subtitle="A culinary journey from the banks of the Raavi River to the heart of London"
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&h=1080&fit=crop"
      />

      {/* The Beginning */}
      <section className="section bg-forest-green">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="font-accent text-2xl text-champagne-gold mb-4 text-center">
              The Beginning
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-h1 text-antique-gold mb-6 text-center">
              Where Food Brings People Together
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="gold-line mb-12" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="relative aspect-square">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/Slowmotion_spices_being_mobile.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 border border-antique-gold/30" />
              </div>
            </ScrollReveal>

            <div>
              <ScrollReveal delay={0.2}>
                <p className="text-cream/80 mb-6 leading-relaxed text-lg">
                  Our story began over 25 years ago in a restaurant where two people met —
                  one with a lifelong passion for cooking, the other drawn in by its warmth —
                  and together, we discovered the magic that happens when food brings people together.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-cream/80 mb-6 leading-relaxed text-lg">
                  What started as a simple moment became a lifelong journey, with food always
                  at its heart. Through the years, we've shared meals, created memories, and
                  nurtured a dream of creating something meaningful — a place where heritage
                  meets hospitality.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* The Name */}
      <section className="section section-light">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-accent text-2xl text-antique-gold mb-4">
              The Name
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-h1 text-forest-green mb-6">
              Why "Raavi"?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="gold-line mb-12" />
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-charcoal/80 mb-8 leading-relaxed text-lg">
              Inspired by the Raavi River, that flows from India into Pakistan, crossing
              borders and uniting lands, histories and generations. For centuries, the
              Raavi has been a lifeline of the Pakistan region, nourishing communities on
              both sides.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="text-charcoal/80 mb-8 leading-relaxed text-lg">
              To us, it represents connection beyond boundaries — a reminder that culture,
              food and humanity are meant to be shared, not divided. The river carries
              within it the essence of Pakistan, where our culinary
              traditions were born and perfected over generations.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.5}>
            <p className="text-charcoal/80 leading-relaxed text-lg">
              Just as the Raavi's waters flow deep and timeless, our flavours carry warmth,
              soul and meaning to every table we serve.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Vision */}
      <section className="section bg-deep-green">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="font-accent text-2xl text-champagne-gold mb-4 text-center">
              Our Vision
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-h1 text-antique-gold mb-6 text-center">
              More Than a Restaurant
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="gold-line mb-12" />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ScrollReveal delay={0.2}>
                <p className="text-cream/80 mb-6 leading-relaxed text-lg">
                  With Raavi Spice, our dream is simple: to create a space built on
                  authenticity, respect and togetherness — where people gather, cultures
                  meet, and communities grow stronger.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <p className="text-cream/80 mb-6 leading-relaxed text-lg">
                  More than a restaurant, Raavi Spice is a shared story that honours
                  heritage and celebrates unity, inviting everyone to connect through
                  food and experience.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.4}>
                <p className="text-cream/80 leading-relaxed text-lg">
                  Like the river that inspires our name, our flavours flow deep and
                  timeless, carrying warmth, soul and meaning to every table. We welcome
                  you to become part of our story.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal direction="right" className="order-1 lg:order-2">
              <div className="relative aspect-[4/5]">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                >
                  <source src="/videos/restaurant-ambiance.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 border border-antique-gold/30" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="section bg-forest-green">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <p className="font-accent text-2xl text-champagne-gold mb-4">
              Our Philosophy
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="text-h1 text-antique-gold mb-6">
              What We Believe
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="gold-line mb-12" />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ScrollReveal delay={0.3}>
              <div className="p-8 border border-antique-gold/20 hover:border-antique-gold/50 transition-colors">
                <h3 className="font-subheading text-xl text-antique-gold mb-4">
                  Authenticity
                </h3>
                <p className="text-cream/70">
                  We honour our roots with recipes passed down through generations,
                  prepared with traditional techniques and the finest ingredients
                  from Pakistan and India.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="p-8 border border-antique-gold/20 hover:border-antique-gold/50 transition-colors">
                <h3 className="font-subheading text-xl text-antique-gold mb-4">
                  Togetherness
                </h3>
                <p className="text-cream/70">
                  Food has always brought us together. We create a space where
                  families gather, friends connect, and communities grow stronger
                  around the table.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="p-8 border border-antique-gold/20 hover:border-antique-gold/50 transition-colors">
                <h3 className="font-subheading text-xl text-antique-gold mb-4">
                  Respect
                </h3>
                <p className="text-cream/70">
                  Every dish is prepared with care and intention. We respect our
                  heritage, our ingredients, and every guest who walks through
                  our doors.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="section section-light border-y border-antique-gold/30">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <blockquote className="font-heading text-2xl md:text-3xl text-forest-green leading-relaxed tracking-wide">
              "Culture, food and humanity are meant to be shared, not divided.
              Like the Raavi River, our flavours flow deep and timeless,
              carrying warmth, soul and meaning to every table."
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="mt-6 text-antique-gold font-subheading text-lg">
              — The Raavi Spice Family
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
