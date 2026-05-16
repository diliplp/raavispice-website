export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  image: string
  category: 'Heritage' | 'Cuisine' | 'Community'
  author: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'the-five-rivers-story',
    title: 'The Five Rivers: A Journey through Punjabi Heritage',
    excerpt: 'Discover the historical and cultural significance of the Raavi River and how it shapes the flavors of our kitchen.',
    content: `
      <p>The name 'Punjab' literally translates to 'The Land of Five Waters'. These five rivers—the Jhelum, Chenab, Ravi, Beas, and Sutlej—have not only nourished the physical landscape of the region but have also served as the lifeblood of its culture, history, and cuisine.</p>
      
      <p>At Raavi Spice, our name is a tribute to the Ravi River (spelled 'Raavi' in traditional scripts). This river, which flows through the heart of Lahore, represents more than just a body of water. it is a symbol of connection, persistence, and the rich heritage of the Punjabi people.</p>
      
      <h3>The Flavor of the Riverbanks</h3>
      <p>The fertile lands surrounding the Raavi have historically produced some of the world's finest basmati rice, wheat, and seasonal vegetables. The culinary traditions of this region are characterized by robustness, the use of pure ghee, and a sophisticated understanding of slow-cooking techniques.</p>
      
      <h3>From Lahore to London</h3>
      <p>Our journey began on these very banks, where the art of spice blending was a family secret passed down through generations. Today, in West Drayton, we use those same techniques to bring you an experience that is as deep and timeless as the river itself.</p>
    `,
    date: 'May 10, 2026',
    image: '/images/instafeed/from-the-heart-of-punjab.jpg',
    category: 'Heritage',
    author: 'The Raavi Family'
  },
  {
    id: 'art-of-nihari',
    title: 'The Art of Nihari: A Slow-Cooked Masterpiece',
    excerpt: 'Learn about the history of Lamb Nihari, our signature dish that takes hours of slow-cooking to perfect.',
    content: `
      <p>Nihari is more than just a curry; it is a labor of love. Originating in the royal kitchens of the Mughal Empire, the word 'Nihari' comes from the Arabic word 'Nahar', meaning 'morning'. It was traditionally served to laborers and royals alike as a hearty breakfast after morning prayers.</p>
      
      <h3>The Raavi Technique</h3>
      <p>At Raavi Spice, our Lamb Nihari is prepared using traditional methods. We slow-cook tender cuts of lamb in a rich, aromatic gravy for over 6 hours. This slow simmering allows the marrow to infuse the sauce, creating a silky texture and a depth of flavor that cannot be achieved by any other means.</p>
      
      <h3>Serving Tradition</h3>
      <p>A true Nihari experience is incomplete without its garnishes. Fresh ginger slivers, chopped green chilies, fresh coriander, and a squeeze of lemon are essential to cut through the richness of the gravy. Paired with a hot, fluffy naan, it is a meal that honors centuries of culinary history.</p>
    `,
    date: 'May 12, 2026',
    image: '/images/instafeed/nihari.jpg',
    category: 'Cuisine',
    author: 'Head Chef'
  },
  {
    id: 'halal-hospitality',
    title: 'Halal Hospitality: The Heart of Pakistani Dining',
    excerpt: 'What makes Pakistani hospitality unique? We explore the concept of "Mehmaan Nawazi" and its role at Raavi Spice.',
    content: `
      <p>In Pakistani culture, a guest is considered a blessing. This philosophy, known as 'Mehmaan Nawazi', is the cornerstone of everything we do at Raavi Spice. It's not just about serving food; it's about creating an atmosphere of warmth, respect, and generosity.</p>
      
      <h3>The Communal Table</h3>
      <p>Traditional Pakistani meals are designed to be shared. From our 'Mix Grill Sizzlers' to our 'Full Karahis', our menu encourages groups to gather and enjoy a variety of dishes together. This communal aspect of dining is what transforms a simple meal into a celebration of community.</p>
      
      <h3>Authentic Experience</h3>
      <p>When you walk through our doors in West Drayton, we want you to feel the same warmth you would experience in a home in Lahore. Whether it's the aroma of charcoal-grilled kebabs or the decorative details of our luxury interior, every element is chosen to honor our roots and welcome our guests.</p>
    `,
    date: 'May 14, 2026',
    image: '/images/instafeed/lahore-to-you.jpg',
    category: 'Community',
    author: 'The Raavi Family'
  }
]
