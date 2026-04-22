export interface MenuItem {
  name: string
  description: string
  price: string
  spiceLevel?: 0 | 1 | 2 | 3
  dietary?: ('V' | 'VG' | 'GF' | 'H')[]
  signature?: boolean
}

export interface MenuCategory {
  id: string
  name: string
  description: string
  items: MenuItem[]
}

export const menuCategories: MenuCategory[] = [
  {
    id: 'breakfast',
    name: 'Breakfast',
    description: 'Traditional Desi Breakfast',
    items: [
      { name: 'HALVA PURI (weekends only, served 10.00-15.00)', description: 'Golden puri paired with silky semolina halva, Lahori-style channa, savoury potato bhujia, pickled onions and meethay.', price: '£9.99' },
      { name: 'OMELETTE AND PARATHA', description: 'A fluffy desi-style omelette with onions, tomatoes, green chillies and coriander, served with a warm, flaky paratha.', price: '£7.99' },
      { name: 'CHEESE  OMELETTE AND PARATHA', description: 'A fluffy desi-style omelette with melted cheese,onions, tomatoes, green chillies and coriander, served with a warm, flaky paratha.', price: '£8.99' },
      { name: 'ALOO BHUJIA', description: 'Soft potatoes cooked with onions, green chillies, and warm spices.', price: '£7.99' },
      { name: 'RAAVI CHANNA MASALA', description: 'Chickpeas cooked in a rich tomato and onion masala with warm, balanced spices, made using a unique Lahori recipe for authentic flavour.', price: '£9.99', spiceLevel: 2, dietary: ['V', 'VG', 'GF'] },
      { name: 'LAMB NIHARI', description: 'Slow-cooked lamb in a rich, aromatic gravy, simmered to tender perfection with traditional spices.', price: '£14.99', spiceLevel: 2, dietary: ['H', 'GF'], signature: true },
      { name: 'PAYA', description: 'Slow-cooked trotters in a rich, spiced broth, full of traditional flavour.', price: '£12.99', spiceLevel: 2, dietary: ['H', 'GF'] },
      { name: 'HALVA', description: 'Sweet semolina halva cooked in ghee with cardamon, garnished with nuts.', price: '£4.99' },
      { name: 'MEETHAY POORAY', description: 'Sweet semolina pancakes cooked in ghee and lightly flavoured with cardamon.', price: '£6.99' }
    ],
  },
  {
    id: 'vegetarian-starters',
    name: 'Vegetarian Starters',
    description: '',
    items: [
      { name: 'LAHORI LADOO PITHI', description: 'Classic savoury lentil dumplings, fried golden and served with a garnish of shredded white radish and our signature sauces.', price: '£8.99', dietary: ['V'], signature: true },
      { name: 'PUNJABI VEGETABLE SAMOSA', description: 'Crispy homemade style pastry filled with a spiced potato and pea mix. Served with tamarind and mint chutneys.', price: '£4.50', dietary: ['V', 'VG'] },
      { name: 'PAKORA (ONION BHAJI)', description: 'Crispy, golden fritters made with seasonal vegetables in a spiced gram flour batter, cooked until perfectly crunchy and served hot with our signature chutneys.', price: '£4.50', dietary: ['V', 'VG', 'GF'] },
      { name: 'GOL GAPPE (PANI PURI)', description: 'Crunchy puris served with spiced chickpea-potato filling and tangy tamarind water.', price: '£4.99', dietary: ['V', 'VG'] },
      { name: 'CHILLI PANEER', description: 'Crispy paneer cubes tossed in a spicy sauce with peppers, onions, and green chillies, served on a sizzling hot plate.', price: '£8.99', spiceLevel: 2, dietary: ['V'] },
      { name: 'PANEER TIKKA', description: 'BBQ paneer cubes marinated in yoghurt, lemon, and secret spices, then grilled over open flame with onions and peppers. Smoky, spicy, and packed with flavours.', price: '£9.99', spiceLevel: 1, dietary: ['V', 'GF'] },
      { name: 'PAPRI CHAAT', description: 'A classic street-food favourite: crisp papri wafers topped with soft potatoes, chickpeas, whipped yoghurt and our signature tamarind sauce & mint chutneys.', price: '£8.99', dietary: ['V'] },
      { name: 'SAMOSA  CHAAT', description: 'Golden crispy Punjabi samosas crushed and topped with warm spiced chickpeas, whipped yoghurt and our signature tamarind sauce & mint chutneys, finished with onions, coriander and our special masala for the perfect mix of flavours.', price: '£8.99', dietary: ['V'] },
      { name: 'CRISPY OKRA FRIES (Kurkuri Bhindi)', description: 'Finely sliced okra coated in our secret spices with a lightly golden crunch. A delicate, flavour-packed appetiser with an irresistible crisp finish.', price: '£9.99', dietary: ['V', 'VG', 'GF'] }
    ],
  },
  {
    id: 'non-vegetarian-starters',
    name: 'Non-Vegetarian Starters',
    description: '',
    items: [
      { name: 'BBQ LAMB SEEKH KEBAB', description: 'Juicy minced lamb mixed with fresh coriander, green chillies, and our secret aromatic spices, grilled over real charcoal.', price: '£5.99', spiceLevel: 2, dietary: ['H', 'GF'] },
      { name: 'BBQ CHICKEN SEEKH KEBAB', description: 'Juicy minced chicken mixed with fresh coriander, green chillies, and our secret aromatic spices, grilled for a juicy, smoky finish.', price: '£4.99', spiceLevel: 1, dietary: ['H', 'GF'] },
      { name: 'BBQ LAMB CHOPS', description: 'Tender lamb chops marinated in a rich blend of yogurt, garlic, and our special herbs & spices, charcoal-grilled.', price: '£11.99', spiceLevel: 1, dietary: ['H', 'GF'], signature: true },
      { name: 'DUM KEBAB CHICKEN', description: 'Juicy minced meat kebabs seasoned with our secret herbs & spices, shaped by hand and slow-cooked on a hot plate, garnished with caramelised onions & tomatoes.', price: '£10.99', spiceLevel: 1, dietary: ['H', 'GF'] },
      { name: 'RAAVI BBQ CHICKEN WINGS', description: 'Juicy wings marinated in a bold Raavi spice mix, then charcoal grilled for deep smoky flavour and a perfectly caramelised finish.', price: '£7.99', spiceLevel: 2, dietary: ['H', 'GF'] },
      { name: 'MALAI CHICKEN BOTI', description: 'Succulent creamy chicken cubes marinated in our secret spices, then charcoal grilled until melt-in-the-mouth tender.', price: '£11.99', spiceLevel: 0, dietary: ['H', 'GF'] },
      { name: 'DYNAMITE PRAWNS', description: 'Prawns marinated with Raavi secret herbs & spices, glazed with our Dynamite sauce.', price: '£12.99', spiceLevel: 2, dietary: ['H', 'GF'] },
      { name: 'RAAVI SPECIAL CRISPY FISH', description: 'Tender fish fillets coated in our Raavi spice blend and fried until perfectly crisp.', price: '£9.99', spiceLevel: 1, dietary: ['H', 'GF'], signature: true },
      { name: 'BBQ CHICKEN TIKKA', description: 'Succulent chicken cubes marinated in a rich blend of yoghurt, herbs and aromatic spices, charcoal grilled to perfection.', price: '£9.99', spiceLevel: 2, dietary: ['H', 'GF'] },
      { name: 'HARYALI BOTI', description: 'Tender chicken pieces marinated in a vibrant green blend of herbs, yoghurt and spices, grilled for a flavour-packed finish.', price: '£11.99', spiceLevel: 1, dietary: ['H', 'GF'] },
      { name: 'PESHAWARI CHAPLI KEBAB (beef)', description: 'Bold, flavour-packed minced meat kebabs infused with tomatoes, green chillies, fresh herbs and roasted spices, shallow-fried for a signature crisp edge and juicy centre.', price: '£5.99', spiceLevel: 2, dietary: ['H', 'GF'] },
      { name: 'RAAVI MIX GRILL BBQ SIZZLER FOR 2', description: 'Chops, Kebabs, Wings, Chicken boti', price: '£22.99', spiceLevel: 2, dietary: ['H', 'GF'] },
      { name: 'RAAVI MIX GRILL BBQ SIZZLER FOR 4', description: 'Chops, Kebabs, Wings, Chicken boti', price: '£44.99', spiceLevel: 2, dietary: ['H', 'GF'] }
    ],
  },
  {
    id: 'chicken-dishes',
    name: 'Chicken Dishes',
    description: '',
    items: [
      { name: 'BUTTER CHICKEN', description: 'Tender chicken simmered in a silky tomato and buttery creamy sauce, enriched with aromatic spices.', price: '£12.99', spiceLevel: 0, dietary: ['H', 'GF'], signature: true },
      { name: 'CHICKEN TIKKA MASALA', description: 'Tender chicken tikka simmered in a rich, creamy tomato masala sauce, bursting with aromatic spices.', price: '£12.99', spiceLevel: 1, dietary: ['H', 'GF'] },
      { name: 'CHICKEN JALFREZI', description: 'Juicy chicken pieces cooked with peppers, onions and tomatoes in a bold, tangy, medium-hot sauce.', price: '£12.99' },
      { name: 'PALAK CHICKEN', description: 'Succulent chicken cooked in a velvety spinach sauce enriched with aromatic spices and a subtle depth of Lahori flavour.', price: '£12.99', spiceLevel: 1, dietary: ['H', 'GF'] },
      { name: 'ACHARI CHICKEN', description: 'Juicy chicken pieces simmered in a vibrant achari (Pickles) sauce.', price: '£12.99', spiceLevel: 2, dietary: ['H', 'GF'] }
    ],
  },
  {
    id: 'lamb-dishes',
    name: 'Lamb Dishes',
    description: '',
    items: [
      { name: 'PALAK GOSHT', description: 'Succulent lamb cooked in a velvety spinach sauce enriched with aromatic spices and a subtle depth of Lahori flavour.', price: '£14.99', spiceLevel: 1, dietary: ['H', 'GF'] },
      { name: 'LAMB CHOPS MASALA', description: 'Grilled lamb chops simmered in a masala of tomatoes, onions and warm aromatic spices.', price: '£14.99', spiceLevel: 2, dietary: ['H', 'GF'] },
      { name: 'ACHARI LAMB', description: 'Tender lamb pieces simmered in a vibrant achari (Pickles) sauce.', price: '£14.99', spiceLevel: 2, dietary: ['H', 'GF'] },
      { name: 'CHILLI GOSHT', description: 'Juicy lamb cooked with green chillies in a hot, flavourful masala.', price: '£14.99', spiceLevel: 3, dietary: ['H', 'GF'] }
    ],
  },
  {
    id: 'raavi-karahi-specials',
    name: 'Raavi Karahi Specials',
    description: '',
    items: [
      { name: 'CHICKEN KARAHI ON THE BONE', description: 'Succulent chicken on the bone, cooked in a rich tomato and ginger with fresh green chillies & coarse black pepper, garnished with finely sliced ginger and coriander leaves.', price: '£25.99 (Half) / £32.99 (Full)', spiceLevel: 2, dietary: ['H', 'GF'], signature: true },
      { name: 'RAAVI BONELESS CHICKEN KARAHI (THIGH)', description: 'Juicy  boneless chicken thigh cooked in a rich tomato and ginger masala with fresh green chillies.', price: '£27.99 (Half) / £39.99 (Full)', spiceLevel: 2, dietary: ['H', 'GF'] },
      { name: 'LAMB KARAHI ON THE BONE', description: 'Traditional lamb on the bone cooked in a rich tomato, ginger and green chilli masala.', price: '£29.99 (Half) / £44.99 (Full)', spiceLevel: 2, dietary: ['H', 'GF'] },
      { name: 'LAMB KARAHI BONELESS', description: 'Tender boneless lamb cooked in a rich tomato, ginger and green chilli karahi masala.', price: '£35.99 (Half) / £49.99 (Full)', spiceLevel: 2, dietary: ['H', 'GF'] },
      { name: 'FISH KARAHI (BONELESS)', description: 'Succulent flaky skinless & boneless fish, cooked in a rich tomato and ginger sauce with fresh green chillies & coarse black pepper, garnished with finely sliced ginger and coriander leaves.', price: '£29.99 (Half) / £44.99 (Full)', spiceLevel: 2, dietary: ['H', 'GF'] }
    ],
  },
  {
    id: 'seafood',
    name: 'Seafood',
    description: '',
    items: [
      { name: 'KING PRAWN KARAHI', description: 'Plump king prawns simmered in a rich karahi masala of tomatoes, ginger and aromatic spices.', price: '£15.99', spiceLevel: 2, dietary: ['H', 'GF'] },
      { name: 'CHILLI PRAWN', description: 'Crispy Prawns tossed in a spicy sauce with peppers, onions, and green chillies, served on a sizzling hot plate.', price: '£15.99', spiceLevel: 2, dietary: ['H', 'GF'] },
      { name: 'ACHARI PRAWN KARAHI', description: 'Juicy king prawns cooked in a vibrant achari (Pickles) sauce.', price: '£15.99', spiceLevel: 2, dietary: ['H', 'GF'] }
    ],
  },
  {
    id: 'vegetarian-mains',
    name: 'Vegetarian Mains',
    description: '',
    items: [
      { name: 'RAAVI CHANNA MASALA', description: 'Chickpeas cooked in a rich tomato and onion masala with warm, balanced spices, made using a unique Lahori recipe for authentic flavour.', price: '£9.99', spiceLevel: 2, dietary: ['V', 'VG', 'GF'] },
      { name: 'BHINDI MASALA', description: 'Okra cooked with onions, tomatoes and spices in a traditional, flavourful masala.', price: '£9.99' },
      { name: 'DAAL MAKHNI', description: 'Creamy, slow-cooked black lentils with buttery, aromatic spices.', price: '£9.99', spiceLevel: 0, dietary: ['V', 'GF'] },
      { name: 'TARKA DAAL', description: 'Yellow lentils cooked to a smooth finish and topped with a fragrant tarka of onion, garlic and spices.', price: '£9.99', spiceLevel: 1, dietary: ['V', 'GF'] },
      { name: 'PALAK PANEER', description: 'Soft paneer cubes cooked in a velvety spinach sauce enriched with aromatic spices and a subtle depth of Lahori flavour.', price: '£9.99', spiceLevel: 1, dietary: ['V', 'GF'] },
      { name: 'BUTTER PANEER', description: 'Soft paneer cubes simmered in a creamy, buttery tomato sauce & our secret spices.', price: '£9.99', spiceLevel: 0, dietary: ['V', 'GF'] }
    ],
  },
  {
    id: 'biryani-and-rice',
    name: 'Biryani And Rice',
    description: '',
    items: [
      { name: 'CHICKEN BIRYANI', description: 'Fragrant basmati rice layered with tender chicken, slow-cooked with traditional spices, herbs and fried onions for a rich, aromatic flavour.', price: '£10.99', spiceLevel: 2, dietary: ['H', 'GF'] },
      { name: 'LAMB BIRYANI', description: 'Fragrant basmati rice layered with tender lamb pieces, slow-cooked with traditional spices, herbs and fried onions for a rich, aromatic flavour.', price: '£12.99', spiceLevel: 2, dietary: ['H', 'GF'] },
      { name: 'CHICKEN TIKKA BIRYANI', description: 'Flavourful basmati rice layered with smoky, chargrilled chicken tikka, infused with aromatic spices, herbs, and caramelised onions.', price: '£11.99', spiceLevel: 2, dietary: ['H', 'GF'] },
      { name: 'PRAWN BIRYANI', description: 'Fragrant basmati rice cooked with succulent prawns, aromatic spices, herbs, and caramelised onions for a rich flavour.', price: '£13.99', spiceLevel: 2, dietary: ['H', 'GF'] },
      { name: 'STEAMED RICE', description: 'Light and fluffy basmati rice, perfectly steamed to accompany any curry or main dish.', price: '£3.99', dietary: ['V', 'VG', 'GF'] },
      { name: 'PILAU RICE', description: 'Aromatic basmati rice lightly cooked with spices for a subtle, flavourful accompaniment to any main dish.', price: '£4.99', dietary: ['V', 'VG', 'GF'] },
      { name: 'RAAVI SPECIAL RICE', description: 'Dum Pukht style fragrant rice cooked in a Raavi secret herbs & spices.', price: '£5.99', dietary: ['V', 'VG', 'GF'], signature: true }
    ],
  },
  {
    id: 'breads',
    name: 'Breads',
    description: '',
    items: [
      { name: 'PLAIN NAAN', description: '', price: '£1.49', dietary: ['V'] },
      { name: 'LAMB KEEMA NAAN', description: '', price: '£5.99', dietary: ['H'] },
      { name: 'CHICKEN KEEMA NAAN', description: '', price: '£4.99', dietary: ['H'] },
      { name: 'KULCHA', description: '', price: '£2.49' },
      { name: 'GARLIC NAAN', description: '', price: '£2.49', dietary: ['V'] },
      { name: 'KALONJI NAAN', description: '', price: '£2.49', dietary: ['V'] },
      { name: 'TANDOORI ROTI', description: '', price: '£1.49', dietary: ['V', 'VG'] },
      { name: 'TAWA LACHHA PARATHA', description: '', price: '£2.99', dietary: ['V'] },
      { name: 'CHAPATI', description: '', price: '£1.49' },
      { name: 'BUTTER NAAN', description: '', price: '£1.99', dietary: ['V'] },
      { name: 'CHILLI NAAN', description: '', price: '£2.49', dietary: ['V', 'VG'] },
      { name: 'ALOO PARATHA', description: '', price: '£3.99', dietary: ['V'] }
    ],
  },
  {
    id: 'veg-sides',
    name: 'Veg Sides',
    description: '',
    items: [
      { name: 'MASALA CHIPS', description: 'Crispy golden chips tossed in a fragrant blend of spices for a flavourful kick.', price: '£6.99', dietary: ['V', 'VG'] },
      { name: 'CHIPS', description: 'Crispy golden chips, lightly salted.', price: '£3.99', dietary: ['V', 'VG'] }
    ],
  },
  {
    id: 'chutneys',
    name: 'Chutneys',
    description: '',
    items: [
      { name: 'ALOO BUKHARA CHUTNEY', description: 'Sweet & tangy dried plum chutney, gently spiced for a rich, fruity finish.', price: '£8.99', dietary: ['V', 'VG', 'GF'] },
      { name: 'ZEERA RAITA', description: 'Cooling yoghurt raita flavoured with roasted cumin and mild spices.', price: '£2.99', dietary: ['V', 'GF'] },
      { name: 'MINT RAITA', description: 'Cooling yoghurt blended with fresh cucumber and mild spices.', price: '£2.99', dietary: ['V', 'GF'] }
    ],
  },
  {
    id: 'raavi-specialities',
    name: 'Raavi Specialities',
    description: '',
    items: [
      { name: 'KUNNA GOSHT', description: 'Lamb pieces slow-cooked to perfection in a luxurious, spice-infused gravy, delivering rich, traditional flavours.', price: '£22.99', spiceLevel: 1, dietary: ['H', 'GF'], signature: true },
      { name: 'LAMB NIHARI', description: 'Slow-cooked lamb in a rich, aromatic gravy, simmered to tender perfection with traditional spices.', price: '£14.99', spiceLevel: 2, dietary: ['H', 'GF'], signature: true },
      { name: 'HALEEM', description: 'Rich, slow-cooked haleem with tender lamb, lentils and wheat, infused with warming spices.', price: '£12.99', spiceLevel: 1, dietary: ['H'] },
      { name: 'PAYA', description: 'Slow-cooked trotters in a rich, spiced broth, full of traditional flavour.', price: '£12.99', spiceLevel: 2, dietary: ['H', 'GF'] },
      { name: 'KABULI PILAU', description: 'Fragrant basmati rice cooked with tender lamb, carrots, raisins and a blend of aromatic spices, creating a subtly sweet and savoury Afghan-style pilau.', price: '£18.99', spiceLevel: 1, dietary: ['H', 'GF'] },
      { name: 'RAAVI CHICKEN KEBAB PLATTER (Serves 1)', description: 'Two juicy chicken minced charcoal grilled kebabs, served with aromatic rice and fresh salad.', price: '£21.99', spiceLevel: 1, dietary: ['H', 'GF'] },
      { name: 'RAAVI LAMB KEBAB PLATTER (Serves 1)', description: 'Two flame-grilled minced lamb kebabs served with aromatic rice and fresh salad.', price: '£24.99', spiceLevel: 1, dietary: ['H', 'GF'] }
    ],
  },
  {
    id: 'burgers',
    name: 'Burgers',
    description: '',
    items: [
      { name: 'RS LAMB BURGER + STEAK CHIPS', description: 'Double juicy lamb patties seasoned with aromatic spices, served in a soft bun with fresh toppings, accompanied by golden, crispy steak-cut chips.', price: '£17.99', dietary: ['H'] },
      { name: 'RS FISH BURGER + STEAK', description: 'Crispy double fish fillets served in a soft bun with fresh toppings, accompanied by golden, crispy steak-cut chips.', price: '£17.99' },
      { name: 'CHAPLI KEBAB BURGER', description: 'Traditional chapli kebab made with seasoned minced beef, fresh herbs and spices, served in a toasted bun with chutney.', price: '£17.99', dietary: ['H'] }
    ],
  },
  {
    id: 'kids-menu',
    name: 'Kids Menu',
    description: 'All dishes can be prepared with ghee for an additional £3.99',
    items: [
      { name: 'CHICKEN MINI FILLETS WITH CHIPS AND DRINK', description: '', price: '£9.99' },
      { name: 'CHICKEN BURGER WITH CHIPS AND DRINK', description: '', price: '£9.99' },
      { name: 'LAMB BURGER CHIPS AND DRINK', description: '', price: '£9.99' }
    ],
  },
  {
    id: 'lunch-special',
    name: 'Lunch Special',
    description: 'LUNCH IS SERVED ONLY BETWEEN 11:00–15:00, MONDAY TO FRIDAY. ROLLS - ADD CHIPS AND A CAN OF DRINK (£2.49). BURGERS - ADD A CAN OF DRINK (£1.00). ADD 2 MINI SAMOSAS (£2.00).',
    items: [
      { name: 'RS LAMB BURGER & STEAK CHIPS', description: 'Juicy lamb patty seasoned with aromatic spices, served in a soft bun with fresh toppings, accompanied by golden, crispy steak-cut chips.', price: '£9.99', dietary: ['H'] },
      { name: 'RS FISH BURGER & CHIPS', description: 'Crispy fried fish fillet served in a soft bun with fresh toppings, accompanied by golden, crispy steak-cut chips.', price: '£9.99' },
      { name: 'CHICKEN TIKKA ROLL', description: 'Juicy chicken tikka wrapped in your choice of soft naan or flaky paratha, layered with fresh salad and flavourful chutney.', price: '£9.99', dietary: ['H'] },
      { name: 'LAMB KEBAB ROLL', description: 'Succulent lamb kebabs wrapped in your choice of soft naan or flaky paratha, layered with fresh salad and flavourful chutney.', price: '£9.99', dietary: ['H'] },
      { name: 'MIX KEBAB ROLL', description: 'A flavour-packed roll with a mix of chicken tikka and lamb kebab, wrapped in your choice of soft naan or flaky paratha, with fresh salad and chutney.', price: '£12.99', dietary: ['H'] },
      { name: 'CHICKEN KARAHI ROLL', description: 'Tender chicken karahi wrapped in your choice of soft naan or flaky paratha, paired with fresh salad and chutney.', price: '£9.99', dietary: ['H'] },
      { name: 'MALAI CHICKEN ROLL', description: 'Creamy malai chicken wrapped in your choice of soft naan or flaky paratha, served with fresh salad and chutney.', price: '£9.99', dietary: ['H'] },
      { name: 'PANEER TIKKA ROLL', description: 'Tender paneer tikka wrapped in your choice of soft naan or flaky paratha, paired with fresh salad and chutney.', price: '£9.99', spiceLevel: 1, dietary: ['V', 'GF'] },
      { name: 'CHILLI PANEER ROLL', description: 'Spicy chilli paneer wrapped in your choice of soft naan or flaky paratha, with fresh salad and chutney.', price: '£9.99', spiceLevel: 2, dietary: ['V'] },
      { name: 'LAHORI NAAN PAKORA', description: 'Crispy Lahori-style gram flour fritters stuffed inside a soft naan and served with mint chutney.', price: '£9.99', dietary: ['V'] },
      { name: 'CHAPLI KEBAB BURGER & CHIPS', description: 'Traditional chapli kebab made with seasoned minced beef, fresh herbs and spices, served in a toasted bun with chutney.', price: '£9.99', dietary: ['H'] }
    ],
  },
  {
    id: 'desserts',
    name: 'Desserts',
    description: 'Sweet endings',
    items: [
      { name: 'GULAB JAMUN', description: 'Soft, warm milk dumplings soaked in fragrant cardamon syrup.', price: '£4.49', dietary: ['V'] },
      { name: 'GULAB JAMUN WITH ICE CREAM', description: 'Soft, warm milk dumplings soaked in fragrant cardamon syrup, served with a scoop of creamy vanilla ice cream.', price: '£5.99', dietary: ['V'] },
      { name: 'GAJAR HALWA', description: 'Slow-cooked grated carrots simmered in milk, ghee, and sugar, infused with cardamom and topped with roasted nuts.', price: '£5.49', dietary: ['V'] },
      { name: 'GAJAR HALWA WITH ICE CREAM', description: 'Slow-cooked grated carrots simmered in milk, ghee, and sugar, infused with cardamom and topped with roasted nuts, served with a scoop of creamy vanilla ice cream..', price: '£6.99', dietary: ['V'] },
      { name: 'MATKA', description: 'Special blend of finest dairy kulfi made using rabdi (concentrated milk), topped with saffron sauce with almond and pistachio pieces.', price: '£7.99', dietary: ['V'] },
      { name: 'HAZELNUT CRUNCH', description: 'Vanilla ice cream rippled in caramel sauce and rolled in roasted mixed nuts.', price: '£7.99', dietary: ['V'] },
      { name: 'CARAMEL FANTASTICA', description: 'Vanilla and caramel ice cream with chocolate balls, toffee pieces and caramel sauce.', price: '£7.99', dietary: ['V'] },
      { name: 'COCONUT SUPREME', description: 'Coconut ice cream with coconut shreddings served in a half coconut shell.', price: '£7.99', dietary: ['V'] },
      { name: 'ORANGE SORBET', description: 'Made with real orange juice in a real orange shell.', price: '£6.99', dietary: ['V'] },
      { name: 'STRAWBERRY GOBLET', description: 'A rich strawberry and cream ice cream with strawberry sauce topped with a real strawberry.', price: '£8.99', dietary: ['V'] },
      { name: 'KULFI', description: 'Specially created ice cream using exotic ingredients to give its unique flavour. Available in Pistachio, Mango and Malai flavours.', price: '£4.99', dietary: ['V'] },
      { name: 'TRIO OF ICE CREAMS', description: 'A classic selection of vanilla, strawberry, and chocolate scoops.', price: '£5.99', dietary: ['V'] },
      { name: 'BIRDIE ICE CREAM', description: 'A fun kids’ treat — creamy vanilla ice cream served in a colourful bird-shaped toy cup they can take home.', price: '£6.49', dietary: ['V'] }
    ],
  },
  {
    id: 'mocktails',
    name: 'Mocktails',
    description: '',
    items: [
      { name: 'LYCHEE ROSE ROYALE', description: 'A fragrant blend of lychee and rose, lifted with citrus and finished with a crisp sparkle. Light, floral and refreshing.', price: '£7.99' },
      { name: 'PINA COLADA', description: 'Classic coconut–pineapple perfection, blended smooth for the ultimate tropical refresh.', price: '£7.99' },
      { name: 'VIRGIN MOJITO', description: 'A fresh blend of mint, lime and sparkling soda — crisp, cool and endlessly refreshing.', price: '£7.99' },
      { name: 'STRAWBERRY MOJITO', description: 'A refreshing blend of mint, fresh lime and sweet strawberry, topped with sparkling soda for a bright, fruity twist on a classic mojito.', price: '£7.99' },
      { name: 'RAAVI BLUE MANGO', description: 'A refreshing layered mix of sweet mango and bright blue citrus.', price: '£7.99' },
      { name: 'RAAVI SUNSET SHIMMER', description: 'A vibrant layered blend of pomegranate, orange and pineapple juice, topped with a golden sparkling shimmer.', price: '£7.99' }
    ]
  },
  {
    id: 'lassi',
    name: 'Lassi',
    description: '',
    items: [
      { name: 'SWEET LASSI', description: 'Creamy traditional yoghurt drink, lightly sweetened.', price: '£4.99 (Glass) / £11.99 (Jug)' },
      { name: 'SALTY LASSI', description: 'Smooth, cooling yoghurt drink seasoned lightly with salt.', price: '£4.99 (Glass) / £11.99 (Jug)' },
      { name: 'MANGO LASSI', description: 'Creamy yoghurt drink mixed with juicy mango purée.', price: '£4.99 (Glass) / £11.99 (Jug)' },
      { name: 'PEACH LASSI', description: 'A smooth, creamy yoghurt drink enriched with the gentle sweetness of peach.', price: '£4.99 (Glass) / £11.99 (Jug)' }
    ],
  },
  {
    id: 'soft-drinks',
    name: 'Soft Drinks',
    description: '',
    items: [
      { name: 'COKE / DIET COKE / FANTA / SPRITE', description: '', price: '£2.49' },
      { name: 'RUBICON FIZZY DRINK', description: '', price: '£2.49' },
      { name: 'STILL WATER 0.5l', description: '', price: '£2.49' },
      { name: 'STILL WATER 0.75l', description: '', price: '£3.99' },
      { name: 'SPARKLING WATER 0.5l', description: '', price: '£2.99' },
      { name: 'SPARKLING WATER 0.75l', description: '', price: '£4.99' }
    ],
  },
  {
    id: 'hot-drinks',
    name: 'Hot Drinks',
    description: '',
    items: [
      { name: 'KARAK CHAI', description: '', price: '£2.99' },
      { name: 'ENGLISH TEA', description: '', price: '£2.49' },
      { name: 'PEPPERMINT TEA', description: '', price: '£2.49' },
      { name: 'LEMON & GINGER', description: '', price: '£2.49' },
      { name: 'CHAMOMILE', description: '', price: '£2.49' }
    ],
  }
];

export const dietaryInfo = {
  V: { label: 'Vegetarian', color: 'bg-sage-green' },
  VG: { label: 'Vegan', color: 'bg-green-700' },
  GF: { label: 'Gluten Free', color: 'bg-antique-gold text-forest-green' },
  H: { label: 'Halal', color: 'bg-amber-800' },
}
