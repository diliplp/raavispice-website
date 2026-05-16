import Script from 'next/script'

export default function StructuredData() {
  const restaurantSchema = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    'name': 'Raavi Spice',
    'image': 'https://raavispice.com/images/hero-image.webp',
    '@id': 'https://raavispice.com',
    'url': 'https://raavispice.com',
    'telephone': '+441895528170',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': '39 Station Road',
      'addressLocality': 'West Drayton',
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
        'dayOfWeek': [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
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
    'servesCuisine': ['Pakistani', 'Punjabi', 'Desi'],
    'priceRange': '££',
    'menu': 'https://raavispice.com/menu',
    'acceptsReservations': 'true'
  }

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
    />
  )
}
