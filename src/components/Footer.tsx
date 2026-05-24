import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react'
import TikTokIcon from './TikTokIcon'

export default function Footer() {
  return (
    <footer className="bg-dark-green border-t border-antique-gold">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/logo.png"
              alt="Raavi Spice"
              width={180}
              height={60}
              className="mb-4"
            />
            <p className="text-cream/80 mb-6 font-accent text-2xl text-champagne-gold">
              From the Five Rivers to the Thames
            </p>
            <p className="text-cream/70 text-sm leading-relaxed">
              Authentic Pakistani cuisine, crafted with heritage
              recipes passed down through generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-subheading text-lg text-antique-gold mb-6">
              Explore
            </h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-cream/70 hover:text-antique-gold transition-colors">
                Home
              </Link>
              <Link href="/our-story" className="text-cream/70 hover:text-antique-gold transition-colors">
                Our Story
              </Link>
              <Link href="/menu" className="text-cream/70 hover:text-antique-gold transition-colors">
                Menu
              </Link>
              <Link href="/blog" className="text-cream/70 hover:text-antique-gold transition-colors">
                Blog
              </Link>
              <Link href="/reservations" className="text-cream/70 hover:text-antique-gold transition-colors">
                Reservations
              </Link>
              <Link href="/contact" className="text-cream/70 hover:text-antique-gold transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-subheading text-lg text-antique-gold mb-6">
              Service Areas
            </h4>
            <nav className="grid grid-cols-1 gap-x-4 gap-y-3">
              <Link href="/" className="text-antique-gold hover:text-cream transition-colors text-sm font-medium">West Drayton (Flagship)</Link>
              <Link href="/locations/uxbridge" className="text-cream/70 hover:text-antique-gold transition-colors text-sm">Uxbridge</Link>
              <Link href="/locations/slough" className="text-cream/70 hover:text-antique-gold transition-colors text-sm">Slough</Link>
              <Link href="/locations/hayes" className="text-cream/70 hover:text-antique-gold transition-colors text-sm">Hayes</Link>
              <Link href="/locations/southall" className="text-cream/70 hover:text-antique-gold transition-colors text-sm">Southall</Link>
              <Link href="/locations/hounslow" className="text-cream/70 hover:text-antique-gold transition-colors text-sm">Hounslow</Link>
              <Link href="/locations/hillingdon" className="text-cream/70 hover:text-antique-gold transition-colors text-sm">Hillingdon</Link>
              <Link href="/locations/iver" className="text-cream/70 hover:text-antique-gold transition-colors text-sm">Iver</Link>
              <Link href="/locations/harrow" className="text-cream/70 hover:text-antique-gold transition-colors text-sm">Harrow</Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-subheading text-lg text-antique-gold mb-6">
              Contact
            </h4>
            <div className="flex flex-col gap-4">
              <a
                href="https://maps.app.goo.gl/WBkBopLoGYhtArut9"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-cream/70 hover:text-antique-gold transition-colors"
              >
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span>39 Station Road,<br />West Drayton, UB7 7LN</span>
              </a>
              <a
                href="tel:+441895528170"
                className="flex items-center gap-3 text-cream/70 hover:text-antique-gold transition-colors"
              >
                <Phone size={20} />
                <span>+44 1895 528170</span>
              </a>
              <a
                href="mailto:hello@raavispice.com"
                className="flex items-center gap-3 text-cream/70 hover:text-antique-gold transition-colors"
              >
                <Mail size={20} />
                <span>hello@raavispice.com</span>
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="font-subheading text-lg text-antique-gold mb-6">
              Opening Hours
            </h4>
            <div className="flex flex-col gap-3 text-cream/70">
              <div className="flex items-start gap-3">
                <Clock size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-cream">Mon - Fri</p>
                  <p>11:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5" />
                <div>
                  <p className="font-medium text-cream">Sat - Sun</p>
                  <p>10:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-cream/50 text-sm" suppressHydrationWarning>
              &copy; {new Date().getFullYear()} Raavi Spice. All rights reserved.
            </p>
            <span className="hidden md:inline text-cream/20">|</span>
            <p className="text-cream/50 text-sm">
              Designed by{' '}
              <a 
                href="https://webadish.co.uk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-antique-gold transition-colors underline decoration-cream/20 underline-offset-4"
              >
                webadish.co.uk
              </a>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61577859524244"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/50 hover:text-antique-gold transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>

            <a
              href="https://www.instagram.com/raavispiceofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/50 hover:text-antique-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>

            <a
              href="https://www.tiktok.com/@raavispiceofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/50 hover:text-antique-gold transition-colors"
              aria-label="TikTok"
            >
              <TikTokIcon size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
