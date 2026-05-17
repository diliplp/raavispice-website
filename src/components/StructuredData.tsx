import Script from 'next/script'

export default function StructuredData() {
  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    'name': 'Raavi Spice',
    'description': 'Authentic Pakistani and Punjabi cuisine in West Drayton, London. From the banks of the Raavi River to the Thames — traditional recipes crafted with heritage and love.',
    'image': 'https://raavispice.com/images/hero-image.webp',
    '@id': 'https://raavispice.com/#restaurant',
    'url': 'https://raavispice.com',
    'telephone': '+441895528170',
    'email': 'hello@raavispice.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '39 Station Road',
      'addressLocality': 'West Drayton',
      'addressRegion': 'London',
      'postalCode': 'UB7 7LN',
      'addressCountry': 'GB'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 51.5081831,
      'longitude': -0.4731508
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '11:00',
        'closes': '23:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': 'Sunday',
        'opens': '11:00',
        'closes': '22:00'
      }
    ],
    'servesCuisine': ['Pakistani', 'Punjabi', 'Desi', 'Halal'],
    'priceRange': '££',
    'hasMenu': 'https://raavispice.com/menu/',
    'menu': 'https://raavispice.com/menu/',
    'acceptsReservations': 'true',
    'currenciesAccepted': 'GBP',
    'paymentAccepted': 'Cash, Credit Card',
    'sameAs': [
      'https://www.raavispice.com'
    ]
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
    />
  )
}
