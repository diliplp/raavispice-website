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
  },
  {
    id: 'karahi-the-kings-dish',
    title: 'Karahi: The King of Pakistani Cooking',
    excerpt: 'From the streets of Peshawar to our kitchen in West Drayton — the story of Pakistan\'s most beloved dish.',
    content: `
      <p>If there is one dish that unites Pakistan from the mountains of the north to the shores of the south, it is the Karahi. Named after the thick, circular iron pot it is cooked in, Karahi is not just a recipe — it is a cooking philosophy. High heat, bold spices, and confidence.</p>

      <h3>The Raavi Karahi Special</h3>
      <p>At Raavi Spice, our Karahi is cooked to order in individual woks over a fierce flame. We use whole spices — black peppercorns, dried red chillies, cumin seeds — toasted in the pan before the meat goes in. The result is a dish with layers of heat and aroma that a slow-cooked curry simply cannot replicate.</p>

      <h3>Chicken or Lamb?</h3>
      <p>The great Karahi debate. Chicken Karahi is lighter, faster to cook, and absorbs the spiced tomato base beautifully. Lamb Karahi takes longer but rewards patience with a richness that clings to every piece of bread you tear. At Raavi Spice, we do both — with equal pride.</p>

      <h3>Why the Iron Wok Matters</h3>
      <p>The karai itself is not decorative. The seasoned iron retains heat evenly, creates the slight charring on the meat that defines an authentic Karahi, and allows the tomato base to reduce quickly without burning. It is one of the oldest cooking vessels in South Asian history, and we use it for good reason.</p>
    `,
    date: 'April 28, 2026',
    image: '/images/instafeed/from-the-heart-of-punjab.jpg',
    category: 'Cuisine',
    author: 'Head Chef'
  },
  {
    id: 'nashta-the-pakistani-breakfast',
    title: 'Nashta: The Pakistani Breakfast That Changes Everything',
    excerpt: 'Why Pakistani breakfast is unlike anything else in the world — and how we bring it to West Drayton every morning.',
    content: `
      <p>In Pakistan, breakfast — nashta — is not a casual affair. It is the meal that sets the tone for the day, shared with family, neighbours, and anyone who happens to arrive at the door. The table is never small and the chai is never weak.</p>

      <h3>What Goes on the Table</h3>
      <p>A proper Pakistani nashta might include halwa puri — deep-fried bread served with semolina halwa and spiced chickpeas. Or a plate of paye, slow-cooked trotters in a warming broth that has been simmering since midnight. Alongside these sits a mountain of fresh naan, a pot of strong desi chai, and always, always, freshly cut green chillies.</p>

      <h3>At Raavi Spice</h3>
      <p>Our breakfast menu brings this tradition to West Drayton. From our full desi breakfast to individual dishes like omelettes cooked in desi ghee, every item is made fresh to order. If you have not tried a Pakistani breakfast, you have not truly started the day properly.</p>

      <h3>The Chai</h3>
      <p>No Pakistani breakfast is complete without desi chai — tea simmered with milk, cardamom, and a confidence in sweetness that English tea culture has never quite matched. At Raavi Spice, we prepare it the traditional way: boiled, not brewed.</p>
    `,
    date: 'April 10, 2026',
    image: '/images/instafeed/tum-mein-aur-chai.jpg',
    category: 'Cuisine',
    author: 'Head Chef'
  },
  {
    id: 'eid-at-raavi-spice',
    title: 'Eid at Raavi Spice: Celebrating Together in West Drayton',
    excerpt: 'How we celebrated Eid ul-Fitr with our community — and the dishes that made the table unforgettable.',
    content: `
      <p>Eid ul-Fitr marks the end of Ramadan and the beginning of celebration. After a month of fasting from dawn to dusk, the first meal of Eid morning carries a significance that goes far beyond food. It is relief, gratitude, and joy on a plate.</p>

      <h3>The Eid Table</h3>
      <p>In Pakistani tradition, Eid morning begins with sheer khurma — vermicelli cooked in sweetened milk with dates and cardamom. The sweetness of this dish is intentional; it is the first thing you taste after the restraint of Ramadan, and it should be joyful. At Raavi Spice, we served it to every guest who came through our doors on Eid morning.</p>

      <h3>A Community Meal</h3>
      <p>Eid is not celebrated alone. This year, we opened our doors to the West Drayton community — Muslim and non-Muslim alike — for a shared Eid lunch. Long tables, full karahis, and the kind of noise that only comes from people who are genuinely happy to be in the same room.</p>

      <h3>The Dishes That Defined the Day</h3>
      <p>Our Eid menu featured a whole lamb Karahi, biryani cooked in the dum style with caramelised onions, and our special Shahi Tukray dessert — fried bread soaked in sweetened milk and topped with cream. Every dish was made to be shared, because that is what Eid is about.</p>
    `,
    date: 'March 31, 2026',
    image: '/images/instafeed/lahore-to-you.jpg',
    category: 'Community',
    author: 'The Raavi Family'
  },
  {
    id: 'biryani-secrets',
    title: 'The Secrets of a Perfect Biryani',
    excerpt: 'Long-grain rice, whole spices, and a patience most people underestimate — the truth behind Pakistan\'s most iconic rice dish.',
    content: `
      <p>Biryani is the dish that starts arguments. Every family has the definitive version. Every region has its own claim. And every cook who has made it properly knows that the difference between a great biryani and a mediocre one comes down to a handful of decisions made at exactly the right moment.</p>

      <h3>The Rice</h3>
      <p>Long-grain basmati rice, aged for at least a year, is non-negotiable. Fresh rice is too moist and cooks unevenly. Aged rice has lower moisture content, which means the grains stay separate even after absorbing all the flavour of the meat and spice base below. We source our rice specifically for this purpose.</p>

      <h3>The Dum</h3>
      <p>Dum cooking — sealing the pot and cooking over a very low flame — is what separates biryani from a rice dish topped with curry. The steam trapped inside the pot carries the aromatics upward through the rice, layer by layer, without making it wet. The pot is sealed with dough at Raavi Spice, the traditional method.</p>

      <h3>The Whole Spices</h3>
      <p>Bay leaves, black cardamom, cinnamon sticks, star anise, and cloves go into the oil before anything else. They bloom in the heat, releasing oils that form the aromatic base of the entire dish. Remove them before eating — they are flavour vehicles, not food.</p>

      <h3>The Caramelised Onions</h3>
      <p>Birista — deeply caramelised onions — take forty minutes of patience and a willingness to stand at the stove. They are scattered over the rice before the pot is sealed and are entirely responsible for the sweetness and colour of the finished dish. There are no shortcuts.</p>
    `,
    date: 'March 8, 2026',
    image: '/images/instafeed/rice.jpg',
    category: 'Cuisine',
    author: 'Head Chef'
  },
  {
    id: 'spices-of-pakistan',
    title: 'The Spice Cabinet: What Makes Pakistani Flavour Different',
    excerpt: 'Not all spice is the same. A guide to the blends, techniques, and ingredients that define Pakistani cooking.',
    content: `
      <p>People who have never eaten Pakistani food often assume it is simply very spicy. This misses the point entirely. Pakistani cooking is not about heat for its own sake — it is about complexity. The goal is a flavour that you cannot quite identify but cannot stop eating.</p>

      <h3>The Base Spices</h3>
      <p>Cumin, coriander, turmeric, and red chilli powder form the foundation of most Pakistani dishes. But the ratio matters more than the ingredients. Too much turmeric and the dish turns bitter. Too little cumin and it loses its earthiness. Pakistani cooks learn these ratios over years, not recipes.</p>

      <h3>Garam Masala — Not From a Jar</h3>
      <p>At Raavi Spice, we blend our own garam masala. The commercial version is a convenience that costs flavour. Our blend includes green cardamom, black cardamom, cloves, cinnamon, black pepper, nutmeg, and mace — toasted whole and ground fresh. The difference is immediate and significant.</p>

      <h3>Whole vs Ground</h3>
      <p>Whole spices added at the start of cooking behave completely differently to ground spices added mid-cook. Whole spices infuse the oil slowly, creating a base. Ground spices added later add a sharper, more immediate flavour. Pakistani cooking uses both at different stages of the same dish. This layering is what creates depth.</p>

      <h3>What We Do Not Use</h3>
      <p>No artificial colours. No flavour enhancers. No pre-made curry sauces. Pakistani cooking at its finest requires nothing but good meat, good spices, and time. That is the standard we hold ourselves to at Raavi Spice, every service, every day.</p>
    `,
    date: 'February 14, 2026',
    image: '/images/instafeed/from-the-heart-of-punjab.jpg',
    category: 'Heritage',
    author: 'Head Chef'
  },
  {
    id: 'charcoal-grill-story',
    title: 'Why We Cook Over Charcoal',
    excerpt: 'Gas is faster. Charcoal is better. The reason our kebabs taste the way they do.',
    content: `
      <p>Most restaurants switched to gas decades ago. It is controllable, consistent, and convenient. We use charcoal. Not as a marketing decision — as a culinary one. The difference in the finished kebab is not subtle.</p>

      <h3>What Charcoal Does to Meat</h3>
      <p>Charcoal burns at a higher temperature than gas and creates radiant heat from below rather than convective heat from a flame. This means the exterior of the meat chars quickly — forming the crust that seals in moisture — while the interior cooks more gently. The result is a kebab that is slightly crisp outside and genuinely juicy inside.</p>

      <h3>The Smoke</h3>
      <p>Fat dripping onto burning charcoal creates smoke. That smoke rises and coats the meat with compounds that gas simply cannot replicate. The slightly smoky, faintly bitter edge of a charcoal-grilled seekh kebab is not achievable any other way. It is the taste people mean when they say it reminds them of Pakistan.</p>

      <h3>Our Charcoal Grill Menu</h3>
      <p>Our grill section covers seekh kebabs, chicken tikka, lamb chops, and whole fish — all marinated in house-blended spice mixes and cooked to order over live charcoal. The mixed grill platter is the one to order if you want to understand everything the grill can do in a single sitting.</p>

      <h3>The Patience Required</h3>
      <p>Charcoal takes time to reach the right temperature. We start the grill before service. We manage the heat throughout the evening. It requires more attention than turning a dial. We think it is worth it. We think you will too.</p>
    `,
    date: 'January 22, 2026',
    image: '/images/instafeed/charcol grill chef.jpg',
    category: 'Cuisine',
    author: 'Head Chef'
  },
  {
    id: 'lahore-food-capital',
    title: 'Lahore: The Food Capital of Pakistan',
    excerpt: 'From Food Street to home kitchens — why Lahore\'s culinary identity is unlike anywhere else in the world.',
    content: `
      <p>There is a saying in Pakistan: "Lahore, Lahore hai" — Lahore is Lahore. No translation fully captures it. The city is its own category. And nowhere is this more true than in its food.</p>

      <h3>Food Street</h3>
      <p>Gawalmandi Food Street in Lahore is the closest thing to a culinary pilgrimage site that Pakistan has. Rows of restaurants spilling onto the street, charcoal smoke rising into the night air, the sound of tawa frying and crowds talking. The dishes here — paye, nihari, hareesa, charcoal-grilled chops — are the same ones our kitchen draws inspiration from every day.</p>

      <h3>The Lahori Palate</h3>
      <p>Lahoris eat boldly. Large portions, strong spices, and a preference for meat that most other cities would consider excessive. A Lahori breakfast alone — halwa puri, channa masala, and dahi bhalla — would serve as lunch and dinner anywhere else. This is not excess; it is hospitality expressed through abundance.</p>

      <h3>Bringing Lahore to West Drayton</h3>
      <p>Our founders came from Lahore. The recipes we use, the way we season, the importance we place on getting the charcoal right — all of it traces back to that city. When you eat at Raavi Spice, you are eating a version of Lahore that we have carried across continents and adapted for a new home, without losing what made it worth bringing in the first place.</p>
    `,
    date: 'December 20, 2025',
    image: '/images/instafeed/lahore-to-you.jpg',
    category: 'Heritage',
    author: 'The Raavi Family'
  },
  {
    id: 'winter-comfort-food-pakistan',
    title: 'Pakistani Winter Food: What We Cook When It Gets Cold',
    excerpt: 'Slow-cooked, warming, and built for cold nights — the dishes Pakistanis turn to when the temperature drops.',
    content: `
      <p>Pakistan has winters. The north — Murree, Islamabad, Kashmir — gets genuinely cold. And Pakistani cooking responds to cold the way it responds to everything: with patience, heat, and generosity.</p>

      <h3>Paye — The Overnight Dish</h3>
      <p>Paye are slow-cooked trotters, simmered overnight with ginger, garlic, and a blend of warming spices until the collagen dissolves and the broth becomes thick and sustaining. In Lahore, paye shops open at midnight and close when the pot empties. It is the most warming food we know, and we serve it at Raavi Spice for exactly this reason.</p>

      <h3>Sarson Da Saag</h3>
      <p>Mustard greens slow-cooked with butter and served with makki di roti — cornbread. This is the dish of the Punjab winter. The bitterness of the mustard is tamed by long cooking and generous amounts of desi ghee. It is a dish that tastes of cold fields and warm kitchens simultaneously.</p>

      <h3>Haleem</h3>
      <p>Wheat, lentils, and meat cooked together for hours until they become a single, unified dish of extraordinary depth. Haleem is the great equaliser of Pakistani cooking — the same dish appears at street stalls and wedding banquets. At Raavi Spice, it is made fresh when on the menu and worth every minute of the wait.</p>

      <h3>Why These Dishes Work in London Winters</h3>
      <p>West Drayton in December is not Lahore in December, but the need for warming, sustaining food is the same. These dishes were designed for cold and they work just as well here as they do at home. Come in from the grey and let the kitchen do what Pakistani kitchens have always done.</p>
    `,
    date: 'November 30, 2025',
    image: '/images/instafeed/cold-morning.jpg',
    category: 'Cuisine',
    author: 'Head Chef'
  },
  {
    id: 'palak-gosht-the-green-curry',
    title: 'Palak Gosht: The Green Curry Pakistan Does Better Than Anyone',
    excerpt: 'Spinach and lamb — two ingredients that become something entirely greater than the sum of their parts.',
    content: `
      <p>Palak gosht — spinach and meat — is one of the most underestimated dishes in Pakistani cooking. It looks simple. It is not. Getting the spinach right, the spice balance precise, and the meat tender without losing its texture requires skill that comes from cooking it a hundred times.</p>

      <h3>The Spinach</h3>
      <p>Fresh spinach, wilted quickly in a hot pan, then blended until just smooth — not completely puréed. You want texture in the sauce, not baby food. The spinach should taste green and slightly bitter as a counterpoint to the richness of the meat and the warmth of the spices.</p>

      <h3>The Lamb</h3>
      <p>Bone-in pieces, because the marrow enriches the sauce. Slow-cooked first in the spice base until almost tender, then combined with the spinach and cooked together for the final thirty minutes. The two components need time together to become one dish rather than two things in a bowl.</p>

      <h3>The Spice Balance</h3>
      <p>Palak gosht uses a lighter spice hand than a Karahi. The green of the spinach should remain visually dominant; too much red chilli or turmeric and you lose the colour and the dish loses its identity. Black pepper, cumin, and a moderate amount of fresh green chilli are what the dish needs.</p>

      <h3>How to Eat It</h3>
      <p>With fresh naan, always. The bread should scoop the sauce and the meat together. A squeeze of fresh lemon over the top just before eating brightens every flavour. At Raavi Spice, palak gosht is on our mains menu and is one of the dishes our regulars return for specifically.</p>
    `,
    date: 'November 8, 2025',
    image: '/images/instafeed/palak gosht.jpg',
    category: 'Cuisine',
    author: 'Head Chef'
  },
]
