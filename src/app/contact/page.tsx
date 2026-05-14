'use client'

import { useState } from 'react'
import PageHero from '@/components/PageHero'
import ScrollReveal from '@/components/ScrollReveal'
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook } from 'lucide-react'
import TikTokIcon from '@/components/TikTokIcon'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()
      if (response.ok && result.status === 'success') {
        setSubmitted(true)
      } else {
        console.error('Submission failed:', result)
        alert('Something went wrong. Please try again or call us directly.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Something went wrong. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <PageHero
        tagline="Get in Touch"
        title="Contact Us"
        subtitle="We'd love to hear from you"
        image="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920&h=1080&fit=crop"
      />

      <section className="section bg-forest-green">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <ScrollReveal>
                <h2 className="text-h1 text-antique-gold mb-6">
                  Visit Us
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="gold-line gold-line-left mb-10" />
              </ScrollReveal>

              <div className="space-y-8">
                <ScrollReveal delay={0.2}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-antique-gold/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-antique-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-subheading text-lg text-antique-gold mb-1">
                        Address
                      </h3>
                      <p className="text-cream/80">
                        39 Station Road<br />
                        West Drayton<br />
                        UB7 7LN
                      </p>
                      <a
                        href="https://maps.app.goo.gl/WBkBopLoGYhtArut9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-antique-gold hover:text-champagne-gold transition-colors text-sm"
                      >
                        Get Directions →
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.3}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-antique-gold/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-antique-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-subheading text-lg text-antique-gold mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:+441895528170"
                        className="text-cream/80 hover:text-antique-gold transition-colors"
                      >
                        +44 1895 528170
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.4}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-antique-gold/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-antique-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-subheading text-lg text-antique-gold mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:hello@raavispice.com"
                        className="text-cream/80 hover:text-antique-gold transition-colors"
                      >
                        hello@raavispice.com
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.5}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-antique-gold/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-antique-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="font-subheading text-lg text-antique-gold mb-3">
                        Opening Hours
                      </h3>
                      <div className="space-y-2 text-cream/80">
                        <div className="flex justify-between gap-8">
                          <span>Monday - Saturday</span>
                          <span>11:00 AM - 11:00 PM</span>
                        </div>
                        <div className="flex justify-between gap-8">
                          <span>Sunday</span>
                          <span>11:00 AM - 10:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.6}>
                  <div className="flex items-center gap-4 pt-4">
                    <span className="text-cream/70">Follow Us:</span>
                    <a
                      href="https://www.facebook.com/profile.php?id=61577859524244"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-antique-gold/10 flex items-center justify-center text-antique-gold hover:bg-antique-gold hover:text-forest-green transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href="https://www.instagram.com/raavispiceofficial/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-antique-gold/10 flex items-center justify-center text-antique-gold hover:bg-antique-gold hover:text-forest-green transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="https://www.tiktok.com/@raavispiceofficial"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-antique-gold/10 flex items-center justify-center text-antique-gold hover:bg-antique-gold hover:text-forest-green transition-colors"
                      aria-label="TikTok"
                    >
                      <TikTokIcon size={20} />
                    </a>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Contact Form */}
            <ScrollReveal direction="right">
              <div className="bg-deep-green p-8 md:p-10 border border-antique-gold/20">
                <h2 className="text-h2 text-antique-gold mb-2">
                  Send Us a Message
                </h2>
                <p className="text-cream/70 mb-8">
                  Have a question or feedback? We'd love to hear from you.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-antique-gold/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="text-antique-gold" size={32} />
                    </div>
                    <h3 className="font-subheading text-xl text-antique-gold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-cream/70">
                      Thank you for contacting us. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-cream/80 text-sm mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-forest-green border border-antique-gold/30 text-cream focus:border-antique-gold focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-cream/80 text-sm mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-forest-green border border-antique-gold/30 text-cream focus:border-antique-gold focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-cream/80 text-sm mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-forest-green border border-antique-gold/30 text-cream focus:border-antique-gold focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-cream/80 text-sm mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-forest-green border border-antique-gold/30 text-cream focus:border-antique-gold focus:outline-none transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="reservation">Reservation Inquiry</option>
                          <option value="private-dining">Private Dining</option>
                          <option value="catering">Catering</option>
                          <option value="feedback">Feedback</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-cream/80 text-sm mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-forest-green border border-antique-gold/30 text-cream focus:border-antique-gold focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[400px] md:h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155.2046448818774!2d-0.47315076939424244!3d51.508183132558926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487671034baa6b85%3A0x5d7738b8aed07339!2sRaavi%20Spice!5e0!3m2!1sen!2sin!4v1770738706117!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0"
        />
      </section>
    </>
  )
}
