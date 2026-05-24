export interface LocationInfo {
  slug: string
  name: string
  description: string
  keywords: string[]
  distance: string
  drivingTime: string
}

export const locations: Record<string, LocationInfo> = {
  'uxbridge': {
    slug: 'uxbridge',
    name: 'Uxbridge',
    description: 'Looking for the best Pakistani restaurant near Uxbridge? Just a short drive away, Raavi Spice offers authentic charcoal-grilled delicacies and traditional Punjabi flavors.',
    keywords: ['Pakistani restaurant Uxbridge', 'Halal food Uxbridge', 'Charcoal grill near Uxbridge'],
    distance: '3.5 miles',
    drivingTime: '10-12 minutes'
  },
  'slough': {
    slug: 'slough',
    name: 'Slough',
    description: 'Experience authentic Lahori taste near Slough. Raavi Spice is the premier destination for those seeking high-quality Pakistani cuisine in the Slough area.',
    keywords: ['Pakistani restaurant Slough', 'Halal dining Slough', 'Best Nihari near Slough'],
    distance: '5 miles',
    drivingTime: '15 minutes'
  },
  'hayes': {
    slug: 'hayes',
    name: 'Hayes',
    description: 'Conveniently located for residents of Hayes, Raavi Spice brings the heart of Lahore to your doorstep with our signature Karahis and grilled specialties.',
    keywords: ['Pakistani food Hayes', 'Best restaurant Hayes', 'Halal grill Hayes'],
    distance: '2 miles',
    drivingTime: '8 minutes'
  },
  'southall': {
    slug: 'southall',
    name: 'Southall',
    description: 'While Southall is famous for its food, Raavi Spice offers a luxury Pakistani dining experience that is worth the short journey to West Drayton.',
    keywords: ['Pakistani restaurant near Southall', 'Luxury Halal dining Southall', 'Authentic Punjabi food Southall'],
    distance: '4 miles',
    drivingTime: '12-15 minutes'
  },
  'hounslow': {
    slug: 'hounslow',
    name: 'Hounslow',
    description: 'For those in Hounslow seeking the true taste of the Raavi River banks, our West Drayton restaurant provides an unmatched authentic experience.',
    keywords: ['Pakistani restaurant Hounslow', 'Halal food Hounslow', 'Desi restaurant Hounslow'],
    distance: '6 miles',
    drivingTime: '18 minutes'
  },
  'hillingdon': {
    slug: 'hillingdon',
    name: 'Hillingdon',
    description: 'The best Pakistani and Punjabi cuisine is just minutes away from Hillingdon. Visit Raavi Spice for our famous Lamb Nihari and slow-cooked Karahis.',
    keywords: ['Restaurant Hillingdon', 'Halal food Hillingdon', 'Pakistani grill Hillingdon'],
    distance: '2.5 miles',
    drivingTime: '10 minutes'
  },
  'harrow': {
    slug: 'harrow',
    name: 'Harrow',
    description: 'Harrow residents can now enjoy the finest Pakistani charcoal grill experience at Raavi Spice, located just a short drive away in West Drayton.',
    keywords: ['Pakistani restaurant Harrow', 'Halal dining Harrow', 'Best Karahi near Harrow'],
    distance: '8 miles',
    drivingTime: '25 minutes'
  },
  'northolt': {
    slug: 'northolt',
    name: 'Northolt',
    description: 'Looking for authentic Desi food near Northolt? Raavi Spice offers a traditional menu that captures the essence of Lahori street food.',
    keywords: ['Pakistani restaurant Northolt', 'Halal food Northolt', 'Desi grill Northolt'],
    distance: '5.5 miles',
    drivingTime: '15-20 minutes'
  },
  'iver': {
    slug: 'iver',
    name: 'Iver',
    description: 'Located right on the doorstep of Iver, Raavi Spice is the perfect spot for a local luxury dinner featuring authentic Pakistani recipes.',
    keywords: ['Restaurant Iver', 'Halal food Iver', 'Pakistani grill Iver'],
    distance: '1.5 miles',
    drivingTime: '5 minutes'
  },
  'yiewsley': {
    slug: 'yiewsley',
    name: 'Yiewsley',
    description: 'As your local Pakistani restaurant in the Yiewsley and West Drayton area, Raavi Spice is committed to serving the most authentic Punjabi dishes.',
    keywords: ['Restaurant Yiewsley', 'Pakistani food Yiewsley', 'Halal grill Yiewsley'],
    distance: '0.5 miles',
    drivingTime: '2 minutes'
  },
  'hayes-and-harlington': {
    slug: 'hayes-and-harlington',
    name: 'Hayes & Harlington',
    description: 'Just a stone\'s throw from Hayes & Harlington station, Raavi Spice is the ideal destination for authentic Pakistani hospitality and cuisine.',
    keywords: ['Restaurant Hayes & Harlington', 'Halal food Hayes & Harlington', 'Pakistani grill Hayes & Harlington'],
    distance: '2 miles',
    drivingTime: '8 minutes'
  }
}
