export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  date: string
  image: string
  heroVariant?: 'image' | 'accent'
  category: 'Heritage' | 'Cuisine' | 'Community'
  author: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 'the-five-rivers-story',
    title: 'The Five Rivers: A Journey through Punjabi Heritage',
    excerpt: 'Discover the historical and cultural significance of the Raavi River and how it shapes the flavors of our kitchen.',
    content: `
      <p>The name 'Punjab' literally translates to 'The Land of Five Waters'. These five rivers — the Jhelum, Chenab, Ravi, Beas, and Sutlej — have not only nourished the physical landscape of the region but have also served as the lifeblood of its culture, its history, and its food. To understand Punjabi cooking is to first understand the land that made it.</p>

      <p>For thousands of years, civilisations rose along these riverbanks. The Indus Valley people farmed here. Empires passed through, each leaving something behind in the soil and in the kitchen. The Mughals brought Persian techniques and a love of slow-cooked meat. The Sikhs brought communal cooking — the langar — where food was offered freely to anyone who arrived, regardless of faith or status. The British brought tea, and the Punjabis promptly made it their own.</p>

      <h3>The Raavi River and What It Represents</h3>
      <p>At Raavi Spice, our name is a tribute to the Ravi River — spelled 'Raavi' in its more traditional, poetic form. This river flows directly through the heart of Lahore, Pakistan's cultural capital. For centuries, it has been the backdrop to poetry, to romance, to harvest festivals, and to some of the most significant moments in South Asian history.</p>

      <p>The Ravi is not merely a geographical feature. In Punjabi poetry and folk songs, it represents longing, separation, and the ache of distance from home. The great Punjabi poets — Bulleh Shah, Waris Shah — wrote beside rivers like this one. There is something about moving water that makes people think about where they have come from and where they are going. When we named our restaurant, we were thinking about exactly that.</p>

      <h3>The Flavor of the Riverbanks</h3>
      <p>The fertile lands surrounding the Raavi have historically produced some of the world's finest basmati rice, durum wheat, mustard, and seasonal vegetables. The agricultural richness of the Punjab is not accidental — it is the direct result of millennia of river-fed irrigation. When people ask why Punjabi food tastes the way it does, part of the answer lies in what the soil produces.</p>

      <p>The culinary traditions of this region are characterised by robustness. Dishes are built for people who work hard and eat together. Pure ghee, not oil. Whole spices, not powder blends from a jar. Slow cooking over low heat, not shortcuts. The flavours are bold but never one-dimensional — there is always a layering, a depth, that comes from technique passed down rather than recipes written down.</p>

      <h3>The Journey from Lahore to London</h3>
      <p>Our founders left Lahore carrying the same thing most immigrants carry: a memory of how food is supposed to taste. Not the vague idea of it, but the specific, visceral memory — the way a particular karahi smelled when the lid came off, the texture of fresh naan from a tandoor at 7 in the morning, the weight of a clay pot of nihari that had been cooking since midnight.</p>

      <p>That memory is not something you can recreate from a cookbook. It lives in the hands of the person who cooked it, in the spices they chose, in the order they added things to the pan. It is passed person to person, kitchen to kitchen. When we cook at Raavi Spice, we are trying to honour that chain of knowledge — to serve food that connects people to something real, even if they have never been to Lahore.</p>

      <h3>What the Name Means to Us Every Day</h3>
      <p>When we chose the name Raavi, we were not just picking something that sounded good. We were making a commitment. A commitment to the standard of cooking those riverbanks produced. A commitment to the generosity and hospitality that Punjabi culture considers a basic duty, not an optional extra. And a commitment to carrying that heritage with integrity — not diluting it for an audience that might not recognise it, but trusting that the food itself would do the explaining.</p>

      <p>The river flows regardless of who is watching. The cooking continues regardless of who is eating. That constancy is what the name means to us.</p>

      <h3>Visit Us</h3>
      <p>If you have never eaten food from the Punjab — genuinely Punjabi food, cooked the way it was meant to be cooked — we would like to be your introduction. Come to Raavi Spice in West Drayton, sit down, and let the kitchen tell the story that a thousand miles and a river started.</p>
    `,
    date: 'May 10, 2026',
    image: '/images/instafeed/from-the-heart-of-punjab.jpg',
    heroVariant: 'accent',
    category: 'Heritage',
    author: 'The Raavi Family'
  },
  {
    id: 'art-of-nihari',
    title: 'The Art of Nihari: A Slow-Cooked Masterpiece',
    excerpt: 'Learn about the history of Lamb Nihari, our signature dish that takes hours of slow-cooking to perfect.',
    content: `
      <p>Nihari is more than just a curry. It is a labor of love — a dish with a history that stretches back centuries, a cooking process that cannot be rushed, and a flavour that rewards patience in a way that few dishes in any cuisine can match. If you want to understand Pakistani cooking at its most serious, start here.</p>

      <p>The word 'Nihari' comes from the Arabic word 'Nahar', meaning 'morning'. The dish originated in the royal kitchens of the Mughal Empire, likely in the late 18th century, and was served as a pre-dawn meal before the morning prayer, Fajr. It was sustaining food — rich, warming, built for long days. Laborers and royals ate it side by side, which tells you something important about what the dish is: it does not belong to any single class. It belongs to everyone who has the patience to wait for it.</p>

      <h3>What Goes Into Nihari</h3>
      <p>The base of a proper Nihari is lamb — specifically slow-cooking cuts. Shank, neck, and bone-in pieces from the shoulder are traditional, because the bones matter as much as the meat. As the dish cooks over many hours, the marrow dissolves into the gravy, creating a silkiness and body that simply cannot be achieved any other way. It is not a shortcut you can take or fake.</p>

      <p>The spice blend for Nihari is specific and non-negotiable. Fennel seeds, dried ginger powder, black cardamom, bay leaves, cloves, and a measured amount of red chilli. These spices are often pre-blended into what is called 'Nihari masala' — a proprietary mix that varies family by family and cook by cook. The blend at Raavi Spice is our own, developed and refined over time, and we do not compromise on it.</p>

      <h3>The Raavi Technique: Six Hours, No Shortcuts</h3>
      <p>At Raavi Spice, our Lamb Nihari is prepared using methods that have not changed significantly in two hundred years. The meat is seared first — this is not always done, but we believe it adds a layer of caramelised depth to the final dish. Then it goes into a heavy-based pot with the spice base, water, and whole aromatics, and it stays there for a minimum of six hours over a very gentle flame.</p>

      <p>During those six hours, several things happen. The collagen in the bone breaks down into gelatin, which is what gives the gravy its body. The fat renders slowly and rises to the surface, carrying the oil-soluble flavour compounds from the spices with it — this is why traditional Nihari has a sheen of orange-red oil on top that is not just cosmetic, it is flavour. The meat fibres relax over time and eventually become tender enough to fall apart with very little pressure.</p>

      <p>An hour before service, we adjust the seasoning, add the finishing touches to the gravy, and then — critically — we allow the Nihari to rest. This resting period is not optional. It allows the flavours to settle and the gravy to thicken to the right consistency.</p>

      <h3>The Thickening</h3>
      <p>Traditional Nihari is thickened with whole wheat flour (atta), stirred in carefully to avoid lumps and cooked out fully so there is no raw flour taste. This technique is less common now — many cooks skip it or use alternatives — but it is the authentic method and it produces a gravy with a particular texture that nothing else replicates. The atta also helps the spiced oil to emulsify into the broth rather than sitting on top, creating a more unified gravy.</p>

      <h3>Serving Tradition</h3>
      <p>A true Nihari experience is incomplete without its garnishes, and the garnishes are not decorative. They are functional. Fresh ginger slivers add a sharp, clean heat that cuts through the richness of the gravy. Chopped green chillies bring brightness and a different kind of heat to the warmth of the dried spices. Fresh coriander adds an herbal note that the dish itself cannot provide. A squeeze of lemon ties everything together.</p>

      <p>These garnishes are not afterthoughts. They are part of the dish's flavour architecture — the cook's way of ensuring that the richness of six hours of slow cooking does not become overwhelming. Eat the Nihari without them and it is good. Eat it with them, properly mixed in, and it is complete.</p>

      <p>Paired with a hot, fluffy naan — or kulcha, the slightly richer bread traditionally served with Nihari — it is a meal that honors centuries of culinary history and reminds you exactly why some things are worth waiting for.</p>

      <h3>Come Try It</h3>
      <p>Our Lamb Nihari is on the menu at Raavi Spice. It is one of the dishes we are proudest of, and one that takes the most from us in terms of time and attention. We think you will taste the difference. Come and see us in West Drayton.</p>
    `,
    date: 'May 12, 2026',
    image: '/images/instafeed/nihari.jpg',
    heroVariant: 'accent',
    category: 'Cuisine',
    author: 'Head Chef'
  },
  {
    id: 'halal-hospitality',
    title: 'Halal Hospitality: The Heart of Pakistani Dining',
    excerpt: 'What makes Pakistani hospitality unique? We explore the concept of "Mehmaan Nawazi" and its role at Raavi Spice.',
    content: `
      <p>There is a concept in Pakistani culture that does not translate neatly into English. 'Mehmaan Nawazi' — sometimes written as Mehmaan Nawazi — means, roughly, the nurturing of guests. But the word 'nurturing' is not quite right either, because it implies effort, and for a Pakistani host, looking after a guest is not experienced as effort. It is experienced as purpose.</p>

      <p>The tradition runs deep. There is a saying — 'Atithi Devo Bhava' in Sanskrit, echoed across South Asian cultures — that translates as 'the guest is God'. In Pakistani Muslim tradition this is reinforced further: the Prophet Muhammad is recorded as saying that 'whoever believes in God and the Last Day, let him honour his guest.' Hospitality is not merely a social nicety in this culture. It is a moral and spiritual obligation.</p>

      <p>What this means in practice is that a guest is never made to feel like an inconvenience, no matter how unexpected their arrival. Extra food is always made. The best of what is available is always offered first. The host eats last, if at all. And the guest is pressed, repeatedly, to have more — not out of performance, but out of genuine concern that they might leave hungry.</p>

      <h3>What This Looks Like at a Pakistani Table</h3>
      <p>If you have ever been invited to a Pakistani home for a meal, you will recognise this immediately. The table is always set for more people than are expected. There are always more dishes than anyone could possibly finish — because running out would be a source of deep shame for the host. Tea arrives before you have asked for it. Dessert arrives whether you wanted it or not.</p>

      <p>This is not excess for its own sake. It is the physical expression of a value system in which the comfort of your guest comes before your own. The meal is not about the food alone — it is about making another person feel genuinely welcome, seen, and cared for.</p>

      <h3>The Communal Table</h3>
      <p>Traditional Pakistani meals are designed to be shared. Dishes are placed in the centre of the table and everyone reaches in. There is no starter, main, dessert sequence in the way a European dining culture structures it — everything arrives together, and the table is full from the beginning. This communal style of eating has a practical effect: it creates conversation. People point to dishes, recommend combinations, argue good-naturedly about which karahi is better. The food becomes a reason for connection rather than just sustenance.</p>

      <p>At Raavi Spice, our menu is built with this in mind. Our 'Mix Grill Sizzlers', full Karahis, and sharing platters are designed for groups to order together and pass around. You are welcome to order individually, but we think you will have a better time — and eat better — if you treat the table the way a Pakistani family would.</p>

      <h3>Bringing This to West Drayton</h3>
      <p>When we opened Raavi Spice, the question we asked ourselves was not 'what dishes should we serve?' It was 'how do we make someone feel the way you feel when you walk into a home in Lahore?' That feeling is specific. It is warm without being overwhelming, generous without being performative, and attentive without being intrusive.</p>

      <p>We have tried to build that into everything — the way the restaurant is designed, the way our staff are trained, the way we approach the table when you arrive. Every element of the experience, from the aroma of charcoal-grilled kebabs that greets you at the door to the way your tea is brought without asking, is intended to honour this tradition.</p>

      <h3>Halal — More Than a Certification</h3>
      <p>Being fully halal is not just a practical decision for us — it is an expression of the same values that underpin Mehmaan Nawazi. Halal, at its root, means 'permissible' or 'lawful', and it applies not just to how meat is prepared but to how business is conducted, how people are treated, and how food is offered. When we say we are halal, we are also saying something about the care that goes into everything we do.</p>

      <p>Our meat is sourced from certified halal suppliers. There is no alcohol on the premises. But beyond the certification, what halal means to us practically is a standard of quality and conscientiousness that runs through every part of the kitchen. No shortcuts. No compromises. The same standard whether the restaurant is full or quiet, whether the inspector is watching or not.</p>

      <h3>Come as You Are</h3>
      <p>Raavi Spice is for everyone. Our customers include Pakistani families celebrating milestones, non-Muslim neighbours curious about the food, business lunches, first dates, and large birthday dinners. The tradition of Mehmaan Nawazi does not distinguish between guests — it simply asks that everyone who arrives is treated as though their presence is a gift.</p>

      <p>That is how we try to approach every person who walks through our door in West Drayton. We would love to look after you.</p>
    `,
    date: 'May 14, 2026',
    image: '/images/instafeed/lahore-to-you.jpg',
    heroVariant: 'accent',
    category: 'Community',
    author: 'The Raavi Family'
  },
  {
    id: 'karahi-the-kings-dish',
    title: 'Karahi: The King of Pakistani Cooking',
    excerpt: 'From the streets of Peshawar to our kitchen in West Drayton — the story of Pakistan\'s most beloved dish.',
    content: `
      <p>If there is one dish that unites Pakistan from the mountains of the north to the shores of the south, it is the Karahi. Named after the thick, circular iron pot it is cooked in, Karahi is not just a recipe — it is a cooking philosophy. High heat, bold spices, and a confidence in the process that only comes from having made it correctly a thousand times.</p>

      <p>Unlike many great dishes that developed in royal kitchens or through long historical evolution, Karahi is fundamentally a street food. Its origins are in the dhabas — the roadside cook-shops of the North-West Frontier and Punjab — where meat was cooked fast and hot over wood fires for travellers, labourers, and truck drivers who needed a real meal and needed it quickly. The dish carries that energy. Eating a good Karahi should feel like something is happening.</p>

      <h3>The Vessel Is Not Decorative</h3>
      <p>The karai itself matters enormously, and this is something that is often underestimated. The traditional karahi is made from thick, seasoned iron. It retains heat at a level that stainless steel and non-stick pans cannot match. When you add meat to a properly heated iron karahi, the sear is immediate and violent — you get a crust on the outside of the meat before the inside has begun to cook, and it is exactly this crust that gives a Karahi its characteristic texture and the slightly charred depth that defines the flavour.</p>

      <p>The shape matters too. The rounded base of the karahi concentrates the heat at the bottom and allows the sauce to reduce rapidly at the edges. A flat-bottomed pan distributes heat differently and produces a different result. It is one of the oldest cooking vessels in South Asian culinary history, designed specifically for this style of cooking over a century ago. We use it for a simple reason: nothing else produces the same dish.</p>

      <h3>The Raavi Karahi Special</h3>
      <p>At Raavi Spice, our Karahi is cooked to order. Every portion goes into a freshly heated karahi over a fierce flame — we do not batch-cook and hold it. This means each serving is the product of active cooking, not reheating, and you can taste the difference immediately.</p>

      <p>We start with whole spices — black peppercorns, dried red chillies, cumin seeds — toasted directly in the pan with oil before any meat goes in. This step blooms the spices and infuses the cooking fat with flavour compounds that will carry through the entire dish. Then the meat goes in, and the heat stays high. The tomatoes follow — fresh, not tinned — and they are worked into the base until they break down completely and the oil begins to separate from the sauce, which is the signal that the base is cooked.</p>

      <p>This separation of oil from masala — known as 'tarka' or 'bhunaoing' — is the single most important moment in making a Karahi. It tells you the raw flavour has cooked out of the spices and the sauce is ready for the final stage. Rushing past this point is the most common mistake, and it produces a Karahi that tastes unfinished — slightly acidic and one-dimensional. We do not rush it.</p>

      <h3>Chicken or Lamb?</h3>
      <p>The great Karahi debate, and one we refuse to settle definitively. Both are correct. Both are on our menu. What is true is that they are different dishes, not the same dish made with different meat.</p>

      <p>Chicken Karahi is lighter, faster to cook, and the meat absorbs the spiced tomato base with more immediacy. The flavour is cleaner, the heat more direct. It is the version to order when you want something that eats quickly and brightly.</p>

      <p>Lamb Karahi takes considerably longer — the meat needs time to become genuinely tender — but rewards that patience with a richness and a depth of flavour that chicken cannot provide. The fat in the lamb renders slowly and enriches the sauce in a way that is unmistakable. The marrow from any bone-in pieces does the same. It is a heavier, more complex eating experience.</p>

      <p>At Raavi Spice, we take both versions equally seriously. We would suggest chicken if you are new to Karahi. We would suggest lamb if you are coming back.</p>

      <h3>Regional Differences Worth Knowing</h3>
      <p>Karahi varies significantly across Pakistan, and the differences are not trivial. Peshwari Karahi, from Khyber Pakhtunkhwa in the north, is typically simpler — meat, tomato, green chillies, and almost nothing else. The flavour comes almost entirely from the quality of the meat and the fire. Lahori Karahi is more spiced, with a richer, darker sauce. Karachi Karahi tends to be looser in consistency and often includes cream or yoghurt to soften the heat.</p>

      <p>Our version draws primarily from Lahori tradition, which is where our founders are from. It is a fully spiced, bold Karahi — not shy with chilli, not shy with pepper — but built with balance in mind. The heat should be present and lively without being aggressive. The spice should be complex, not just hot.</p>

      <h3>How to Eat a Karahi Properly</h3>
      <p>Tear a piece of naan, use it to scoop meat and sauce together, and eat it while it is still sizzling. The karahi arrives at your table still active — still cooking slightly from the residual heat of the iron. The first few minutes are the best. Do not let it sit too long before you begin. Ask for extra naan. You will need it.</p>

      <p>We serve our Karahi in individual woks at Raavi Spice, which means the dish stays hot throughout the meal and every portion is freshly made. Come and try it — it is the dish that tells you most about who we are as a kitchen.</p>
    `,
    date: 'April 28, 2026',
    image: '/images/instafeed/from-the-heart-of-punjab.jpg',
    heroVariant: 'accent',
    category: 'Cuisine',
    author: 'Head Chef'
  },
  {
    id: 'nashta-the-pakistani-breakfast',
    title: 'Nashta: The Pakistani Breakfast That Changes Everything',
    excerpt: 'Why Pakistani breakfast is unlike anything else in the world — and how we bring it to West Drayton every morning.',
    content: `
      <p>In Pakistan, breakfast — nashta — is not a casual affair. It is not something grabbed on the way out the door or eaten alone at a desk. It is the meal that sets the tone for the day, shared with family, neighbours, and anyone who happens to knock on the door before 9am. The table is never small. The chai is never weak. And nobody is turned away.</p>

      <p>If you have only ever eaten a continental breakfast or a full English, the Pakistani equivalent will recalibrate your understanding of what morning food can be. It is rich, complex, and completely unapologetic. Dishes that would serve as dinner in most other cultures appear at a Pakistani breakfast table as a matter of course. The assumption is that you are hungry, you have time, and you are with people worth cooking for.</p>

      <h3>The Anchor Dish: Halwa Puri</h3>
      <p>No Pakistani nashta discussion begins anywhere other than halwa puri. This is the ceremonial breakfast, served on weekends and celebrations, and it consists of several distinct components that are eaten together. Puri — deep-fried, puffed bread made from plain flour — hot and golden from the oil. Halwa — semolina cooked in ghee with sugar and cardamom until it is soft, slightly sticky, and a deep amber colour. Channa masala — spiced chickpeas cooked with tomatoes, ginger, and green chilli. And aloo bhujia — thin-cut potatoes fried with onions and cumin.</p>

      <p>The combination sounds chaotic but works perfectly. The sweetness of the halwa against the spice of the channa, cut by the neutral fried dough of the puri, is one of the great breakfast flavour combinations in the world. It is not subtle food. It is joyful, generous, occasion food — even on an ordinary Sunday morning.</p>

      <h3>Paye: The Overnight Commitment</h3>
      <p>Paye are slow-cooked trotters, and they represent a level of commitment to breakfast that most of the world has not yet reached. The preparation begins the night before — or in the early hours of the morning — with the trotters simmering in a pot with ginger, garlic, whole spices, and water for anywhere between six and ten hours. By morning, the broth is rich, thick with dissolved collagen, and the meat is falling off the bone.</p>

      <p>In Lahore, paye shops open at midnight and close when the pot empties. People line up before dawn. The dish is nourishing in the way that only very long cooking can achieve — it warms you from the inside and stays with you. In London winters, paye is exactly what a cold morning needs. We serve it at Raavi Spice and we make no apologies for how intensely good it is.</p>

      <h3>The Omelette, Done Properly</h3>
      <p>Pakistani nashta omelettes are not the same as a French omelette. They are not delicate. They are cooked in desi ghee over a high flame, made with eggs beaten with finely chopped onion, green chilli, fresh coriander, and tomato, and they are cooked until the outside is properly golden and slightly crisp at the edges. The interior stays soft. The whole thing tastes like something a grandmother made specifically for you.</p>

      <p>This is the simpler, faster end of the nashta spectrum — the weekday version when there is less time but no willingness to compromise entirely. At Raavi Spice, our breakfast omelette is made fresh to order, cooked in ghee, and served with fresh naan and ketchup on the side because some traditions are non-negotiable.</p>

      <h3>Paratha: The Everyday Bread</h3>
      <p>Paratha is the bread of Pakistani morning. A whole wheat flatbread layered with ghee, folded, and cooked on a tawa until the layers are distinct and the surface is golden and slightly crisp. It is eaten with everything — with eggs, with yoghurt and pickle, with leftover curry from the night before. A plain paratha with dahi (yoghurt) and achaar (pickle) is a breakfast that requires nothing else and satisfies completely.</p>

      <p>The quality of a paratha is in the layering and the ghee. Too little ghee and it is dry and flat. Too much and it becomes greasy. The right amount produces something that is flaky, rich, and deeply satisfying in the way that simple things made well always are. We use desi ghee at Raavi Spice because there is no acceptable alternative.</p>

      <h3>The Chai</h3>
      <p>No Pakistani breakfast exists without desi chai, and Pakistani chai is not English tea with milk added. It is an entirely different thing. Desi chai is made by simmering tea leaves with water and then adding full-fat milk and simmering again — boiling, not brewing. The result is strong, slightly cloudy, and has a body that bag-in-cup tea simply cannot produce. Sugar goes in during cooking, not after. Cardamom is standard. In some households, a small piece of cinnamon or a few strands of saffron join the pot.</p>

      <p>The taste of Pakistani chai is the taste of almost every important conversation. Business dealings, wedding negotiations, arguments, reconciliations, lazy mornings when nobody needs to be anywhere — chai is present at all of them. It is not a background drink. It is an active participant in Pakistani social life, and any nashta without it is incomplete.</p>

      <p>At Raavi Spice, we prepare our chai the traditional way. Come for breakfast and let us make you a proper cup. You may find that mornings improve significantly.</p>

      <h3>Our Breakfast Menu</h3>
      <p>We serve nashta at Raavi Spice — freshly made, properly cooked, and available every morning. Whether you want the full halwa puri experience, a plate of paye, our ghee omelette with paratha, or simply a cup of chai before the day begins, we are here. Come and eat breakfast the way it was meant to be eaten.</p>
    `,
    date: 'April 10, 2026',
    image: '/images/instafeed/tum-mein-aur-chai.jpg',
    heroVariant: 'accent',
    category: 'Cuisine',
    author: 'Head Chef'
  },
  {
    id: 'eid-at-raavi-spice',
    title: 'Eid at Raavi Spice: Celebrating Together in West Drayton',
    excerpt: 'How we celebrated Eid ul-Fitr with our community — and the dishes that made the table unforgettable.',
    content: `
      <p>Eid ul-Fitr marks the end of Ramadan and the beginning of celebration. After a month of fasting from dawn to dusk, the first meal of Eid morning carries a significance that goes far beyond food. It is relief, gratitude, and joy expressed through what you eat and who you eat it with. There is no meal in the Pakistani calendar that carries more emotional weight than this one.</p>

      <p>At Raavi Spice, we took Eid seriously this year. Not as an opportunity, but as a responsibility — to be a place where our community could celebrate properly, surrounded by the flavours and the feeling of something that matters.</p>

      <h3>The Morning: Sheer Khurma</h3>
      <p>In Pakistani tradition, Eid morning begins before the food. People dress in their best clothes, go to mosque for the Eid prayer, and then — finally — break the extended fast of Ramadan with something sweet. The dish is almost always sheer khurma: fine vermicelli cooked slowly in full-fat milk with dates, sugar, cardamom, and saffron. Topped with pistachios and sometimes dried rose petals.</p>

      <p>The sweetness of sheer khurma is intentional and specific. After thirty days of restraint, the first taste of Eid should be joyful. Sheer khurma is not a dessert — it is a declaration that the difficult part is over. At Raavi Spice this year, we served it to every guest who came through the door on Eid morning, free of charge. It felt like the right thing to do.</p>

      <h3>Opening Our Doors to the Community</h3>
      <p>Eid is not celebrated alone, and it should not be eaten alone. This year, we opened Raavi Spice for an Eid lunch that welcomed the whole of West Drayton — Muslim and non-Muslim alike. Long tables were set outside and inside. Families who had prayed together at the local mosque came directly to us afterwards. Neighbours who had never eaten Pakistani food before joined in because someone invited them.</p>

      <p>What happened in those hours was exactly what we hoped for when we opened this restaurant. People who do not normally sit at the same table were sharing dishes, asking questions about what they were eating, laughing about how much food there was. Eid has a way of making that happen naturally — the generosity of the day is contagious.</p>

      <h3>The Eid Menu</h3>
      <p>The food had to be right. This was not a day for a reduced menu or a simplified service. We cooked for Eid the way you cook for Eid at home — too much of everything, made with care.</p>

      <p>The centrepiece was a whole lamb Karahi, cooked in our largest karais in full view of the restaurant. The drama of it — the heat, the smoke, the smell of the whole spices hitting the oil — set the tone for the entire meal. Alongside it was a biryani cooked in the dum style: layers of marinated lamb and aged basmati rice sealed in a pot with dough, then cooked slowly so the steam carries the fragrance through every grain. The pot is only opened at the table, and the moment it is — the steam, the colour, the aroma — is one of the great theatrical moments in Pakistani cooking.</p>

      <p>We also served daal makhani, slow-cooked black lentils with butter and cream that had been on the stove since the previous evening. Seekh kebabs from the charcoal grill. Fresh naan and tandoori roti from the oven all day. And for dessert, our Shahi Tukray — fried bread soaked in sweetened milk, topped with thick cream and crushed pistachios. A dish that was served at Mughal banquets and that, on Eid, felt entirely appropriate.</p>

      <h3>What Eid Means to Us</h3>
      <p>For a family restaurant built on the values of Mehmaan Nawazi — the Pakistani tradition of honouring your guests — Eid is the day when those values are most visible. Hospitality becomes easiest when the whole culture is doing it at the same time. Everyone is generous on Eid. Everyone's door is open. The food flows and nobody keeps track of what it cost.</p>

      <p>We try to carry that spirit through the whole year, not just on this one day. But on Eid itself, the restaurant felt most completely like the place we always wanted it to be. Full of people, full of food, and full of something that is harder to name but unmistakable when you are in the room.</p>

      <h3>Join Us Next Year</h3>
      <p>We will celebrate Eid again next year at Raavi Spice, and we would like you to be there — whatever your background, whatever your faith. The table is big enough. The food is always more than enough. You are welcome.</p>
    `,
    date: 'March 31, 2026',
    image: '/images/instafeed/lahore-to-you.jpg',
    heroVariant: 'accent',
    category: 'Community',
    author: 'The Raavi Family'
  },
  {
    id: 'biryani-secrets',
    title: 'The Secrets of a Perfect Biryani',
    excerpt: 'Long-grain rice, whole spices, and a patience most people underestimate — the truth behind Pakistan\'s most iconic rice dish.',
    content: `
      <p>Biryani is the dish that starts arguments. Every family has the definitive version. Every region has its own claim. Every cook who has made it properly — really properly, the long way, the right way — knows that the difference between a great biryani and a mediocre one comes down to a handful of decisions made at exactly the right moment. There is no room to hide in a biryani. Every stage of it is visible in the finished dish.</p>

      <p>This post is not a recipe. It is an account of what biryani actually requires, written by people who make it seriously, so that the next time you order one at Raavi Spice — or anywhere else — you understand what went into it.</p>

      <h3>The Rice: Age Matters</h3>
      <p>Long-grain basmati rice, aged for at least one year, is not a preference — it is a requirement. Fresh basmati has a higher moisture content and a different starch structure. When cooked, it tends to become sticky and the grains clump. Aged basmati has had time for its moisture to reduce and its starches to change. When cooked correctly, the grains stay completely separate, each one distinct, each one carrying its own flavour.</p>

      <p>We source our basmati specifically for biryani. We taste it before buying, because rice varies significantly even within the aged basmati category, and a biryani is only as good as its rice. This might seem excessive. It is not. The rice is half the dish.</p>

      <p>Before cooking, the rice is washed three times to remove excess surface starch, then soaked for thirty minutes. This pre-soaking reduces the cooking time and ensures the grains are uniform in texture. Unsoaked rice cooks unevenly — some grains become overcooked and break while others remain hard in the centre. The soak removes that variable.</p>

      <h3>The Meat Marinade</h3>
      <p>The meat — lamb, in our case, bone-in pieces for the marrow — is marinated for a minimum of four hours. Ideally overnight. The marinade is yoghurt-based, which does two things: the acidity tenderises the meat fibres, and the protein in the yoghurt helps the spices bind to the surface of the meat rather than washing off during cooking.</p>

      <p>Into the marinade goes garam masala, red chilli, turmeric, ginger paste, garlic paste, fried onions (birista), and fresh mint. The mint is not optional — it is one of the flavours that defines Pakistani biryani and distinguishes it from the Hyderabadi and Kolkata styles. When you lift the lid of a dum pot and smell mint rising with the steam, you know it is going to be right.</p>

      <h3>The Birista: Forty Minutes of Patience</h3>
      <p>Birista — deeply caramelised onions — are the soul of a Pakistani biryani and the element that most shortcuts destroy. They are made by slicing onions very thinly, then frying them in oil over medium heat, stirring constantly, for thirty to forty minutes until they are a deep mahogany brown and have reduced to approximately a quarter of their original volume.</p>

      <p>This is not 'cook the onions until golden'. That takes five minutes and produces a completely different result. Birista takes forty minutes and produces a sweetness, a depth, and a colour that cannot be replicated any other way. Commercial biryani mixes include dried fried onion — it is not the same. Pre-made birista from jars — not the same. There is no alternative to standing at the stove and watching onions slowly transform over real heat.</p>

      <p>The birista is scattered over the rice layers before the pot is sealed. It dissolves slightly during dum cooking, flavouring the steam and colouring the top layer of rice to the characteristic golden-brown that a proper biryani should have.</p>

      <h3>The Dum: The Defining Technique</h3>
      <p>Dum cooking is what separates biryani from a rice dish with curry on top. The word 'dum' comes from the Persian for 'breath' or 'steam', and it refers to the technique of sealing the pot completely and cooking over very low heat so that the food cooks in its own steam without any steam escaping.</p>

      <p>The layering happens before the seal: meat goes on the bottom of the pot, then a layer of par-cooked rice (cooked to about seventy percent doneness), then saffron-steeped milk for colour, then birista, then fresh mint and coriander, then the second layer of rice, then more saffron. The pot is then sealed — traditionally with a rope of dough pressed around the lid — and placed over a very low flame. A heavy tawa (griddle) is often placed under the pot to distribute the heat and prevent the bottom from burning.</p>

      <p>At Raavi Spice, we seal the pot with dough. The seal breaks during cooking as steam pressure builds inside, but by the time it breaks, the cooking is nearly complete. The moment of opening the pot at the table — the rush of fragrant steam, the sight of the saffron-stained top layer — is one of the most satisfying moments in cooking. Nothing is better.</p>

      <h3>The Whole Spices</h3>
      <p>Bay leaves, black cardamom, green cardamom, cinnamon sticks, star anise, cloves, and mace go into the oil before the meat, before the onions, before anything else. They bloom in the heat, releasing essential oils that infuse the cooking fat and form the aromatic base of the entire dish. These spices should be removed before eating — they are flavour vehicles, not food, and biting into a whole clove mid-meal is unpleasant.</p>

      <p>The combination of these whole spices is what produces the particular aroma of Pakistani biryani — warm, complex, slightly sweet, and completely impossible to replicate with ground spice blends.</p>

      <h3>What You Are Actually Ordering</h3>
      <p>When you order a biryani at Raavi Spice, you are ordering something that took the better part of a day to prepare. The marinating, the birista, the par-cooking of the rice, the layering, the sealing, the dum — none of it is fast and none of it is easy. Every element matters. We make no apologies for the time it takes to arrive, because what arrives is worth the wait.</p>

      <p>Come and let us make you a proper biryani. Reserve a table at Raavi Spice in West Drayton, and order the one you have never quite been able to find anywhere else.</p>
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
      <p>People who have never eaten Pakistani food often assume it is simply very spicy. Hot. Overwhelming. This misses the point entirely. Pakistani cooking is not about heat for its own sake — it is about complexity. The goal is a flavour that you cannot quite identify but cannot stop eating. The heat is one instrument in an orchestra. It is not the whole performance.</p>

      <p>Understanding what makes Pakistani spice different from, say, Indian or Middle Eastern spice requires understanding how spices are used — not just which ones are present. The same ingredients can produce entirely different results depending on when they are added, how they are prepared, and what proportion they appear in. Pakistani cooking uses all of these variables consciously and with great precision.</p>

      <h3>The Foundation Spices</h3>
      <p>Cumin, coriander, turmeric, and red chilli powder form the foundation of most Pakistani dishes. But the ratio matters more than the ingredient list, and this is where most home cooks go wrong when they try to recreate restaurant food. They add too much turmeric and the dish turns bitter and medicinal. They add too little cumin and it loses its earthiness — the low, warm note that anchors everything else. They add too much chilli too early and the heat becomes one-dimensional rather than building.</p>

      <p>Pakistani cooks learn these ratios through repetition over years, not through recipes. A recipe can tell you 'one teaspoon of cumin'. It cannot tell you that the particular batch of cumin you have is old and has lost its potency, and you should use more. That kind of calibration lives in the cook's hands and nose, not on paper.</p>

      <h3>Garam Masala — Not From a Jar</h3>
      <p>At Raavi Spice, we blend our own garam masala. This is not a marketing detail — it is a culinary necessity. The commercial garam masala available in supermarkets is made for convenience and shelf life, which means it is pre-ground, often blended from older spices, and standardised to a flavour profile that is acceptable but not exceptional. It smells like garam masala. It does not taste like garam masala should taste.</p>

      <p>Our blend includes: green cardamom (for its bright, floral note), black cardamom (for its smoky, camphor-like depth), cloves (for warmth and a slight numbing sensation), cinnamon (for sweetness), black pepper (for heat with a different character to chilli), nutmeg (in very small quantities — it is powerful and slightly dangerous in excess), and mace (the outer covering of nutmeg, with a softer, more floral version of its flavour).</p>

      <p>These spices are toasted whole in a dry pan until fragrant — a matter of two to three minutes over medium heat — then cooled completely and ground fresh. The difference between this and a pre-ground commercial blend is immediate and striking. The aroma alone is different in kind, not degree. Freshly ground garam masala smells alive. Pre-ground smells like a memory of spice.</p>

      <h3>Whole vs. Ground: Two Different Tools</h3>
      <p>This is a distinction that Pakistani cooking takes seriously and that is frequently misunderstood. Whole spices added at the start of cooking behave completely differently to ground spices added mid-cook, and Pakistani dishes typically use both at different stages of the same recipe — not interchangeably, but specifically.</p>

      <p>Whole spices — bay leaves, black cardamom, cinnamon sticks, cloves — go into the hot oil at the very beginning, before any other ingredient. They bloom in the fat, releasing their essential oils slowly over the next several minutes. These oil-soluble compounds form the aromatic base of the entire dish. Everything else you add will be flavoured by what has already infused the oil. This is why the order of spice addition in Pakistani cooking is not arbitrary — the whole spices first is not tradition for tradition's sake. It produces a different dish.</p>

      <p>Ground spices — cumin powder, coriander powder, chilli powder, turmeric — are added during the cooking of the onion and tomato base, mid-recipe. They add a sharper, more immediate flavour. The difference in flavour profile between a dish cooked with only ground spices and a dish that uses whole spices first is significant and consistent. Pakistani cooking uses both because it needs both: the slow, deep base from whole spices and the sharper, brighter notes from ground.</p>

      <h3>Kashmiri Chilli: Colour Without Fire</h3>
      <p>One of the spices that surprises people most about Pakistani cooking is Kashmiri chilli powder. It is a variety of dried red chilli from the Kashmir region that has a lower heat level but produces an intense, deep red colour when cooked. This is the spice responsible for the vivid colour of a good karahi or tikka masala — not food colouring, not paprika, but Kashmiri chilli.</p>

      <p>In Pakistani cooking, the colour of a dish carries information. A deep red indicates the tomato and chilli base has been cooked properly and long enough. A pale colour tells you the dish was rushed. Kashmiri chilli allows the cook to achieve the right colour without making the dish intolerably hot, which is why it appears in dishes served to a wide range of heat preferences.</p>

      <h3>Fresh Aromatics: The Other Half of the Flavour</h3>
      <p>Pakistani cooking relies equally on fresh aromatics — ginger, garlic, green chillies, fresh coriander — and dried spices, and confusing or conflating these two categories misrepresents the cuisine. Ginger and garlic are almost always used together, added in paste form after the onions have softened, and cooked out until their raw smell has completely disappeared. This cooking-out stage is essential. Under-cooked ginger and garlic are distinctive and unpleasant. Properly cooked, they become the quiet base notes that support everything else.</p>

      <p>Fresh coriander appears twice in most dishes — a small amount goes in during cooking, and then a generous handful is added just before serving. The cooked coriander gives an earthier, more integrated flavour. The fresh coriander at the end provides brightness and a herbal note that the dish cannot have from dried spices alone. Both are necessary.</p>

      <h3>What We Do Not Use</h3>
      <p>No artificial colours. No flavour enhancers or MSG. No pre-made curry sauces or pastes bought in bulk. No shortcuts that trade quality for speed. Pakistani cooking at its finest is a direct relationship between good ingredients and time — and that is the standard we hold ourselves to at Raavi Spice, every service, every day.</p>

      <p>If you taste something at our table and cannot quite explain why it is so good, this is part of the reason. Come in and let the kitchen explain the rest.</p>
    `,
    date: 'February 14, 2026',
    image: '/images/instafeed/from-the-heart-of-punjab.jpg',
    heroVariant: 'accent',
    category: 'Heritage',
    author: 'Head Chef'
  },
  {
    id: 'charcoal-grill-story',
    title: 'Why We Cook Over Charcoal',
    excerpt: 'Gas is faster. Charcoal is better. The reason our kebabs taste the way they do.',
    content: `
      <p>Most restaurants switched to gas decades ago. It is controllable, instant, consistent, and convenient. You turn a dial and you have fire. You turn the same dial and the fire is gone. There is no waiting, no management, no skill required to operate it. We use charcoal. Not as a marketing decision. As a culinary one. The difference in the finished kebab is not subtle — it is the difference between something good and something that you think about on the way home.</p>

      <p>This is not nostalgia for its own sake. We are not using charcoal because it is traditional, though it is. We are using it because every time we have made the same kebab over gas and over charcoal in the same session, the charcoal version is better. That is the only argument we need.</p>

      <h3>What Charcoal Does to Meat That Gas Cannot</h3>
      <p>Charcoal — specifically lump charcoal, not briquettes — burns hotter than a standard gas flame. More importantly, it produces radiant heat: infrared radiation that penetrates the surface of the meat and cooks it differently to convective heat from a gas flame. Radiant heat from charcoal creates a crust on the outside of the meat faster and more completely than gas. This crust is not just aesthetic — it is the Maillard reaction, the browning of proteins and sugars that produces hundreds of distinct flavour compounds that do not exist in raw meat.</p>

      <p>Gas heat is primarily convective — it heats the air around the meat, which then heats the meat. This is less efficient at crust formation and produces a more even, gentler cook. For some things, that is preferable. For a seekh kebab or a lamb chop that should be charred at the surface and juicy within, it is a significant disadvantage.</p>

      <h3>The Smoke: The Flavour You Cannot Manufacture</h3>
      <p>When fat and meat juices drip from the kebab onto burning charcoal, they combust and produce smoke. This smoke immediately rises back onto the meat surface, depositing compounds from the combustion — polycyclic aromatics, phenols, carbonyl compounds — that are responsible for the characteristic smoky flavour of charcoal-grilled meat. This flavour is completely specific to this process. There is no way to add it later, no way to simulate it in a pan, no gas attachment that replicates it.</p>

      <p>The slightly smoky, faintly bitter edge of a properly charcoal-grilled seekh kebab is what people mean when they say it tastes like it does in Pakistan. Street food in Lahore, Peshawar, Karachi — it all shares this flavour because it is all cooked over charcoal or wood. When someone eats our mixed grill and says 'this reminds me of home', that smoke is a significant part of what is doing the reminding.</p>

      <h3>Managing the Grill: The Skill That Gas Removes</h3>
      <p>Charcoal requires management in a way that gas does not. We light the grill before service — this is not a five-minute process. Quality lump charcoal takes twenty to thirty minutes to reach the right temperature, moving through the flaming stage (too hot, too uncontrolled) to the grey-ash stage where the surface is covered with grey ash and the coal beneath is glowing orange. This is the correct cooking temperature. Getting there takes time, and there is no dial to skip ahead.</p>

      <p>During service, the grill needs constant attention. Different sections of the grill run at different temperatures. The centre, directly over the deepest bed of coal, is hottest — for items that need a fast, fierce sear. The edges are cooler — for items that need longer cooking at lower temperatures, like whole fish or large lamb chops. Moving items between zones during cooking is a skill, not an accident, and it requires a cook who understands the grill they are working with.</p>

      <p>When more coal needs to be added, the temperature drops temporarily and the cook must account for this. Ash management matters — too much ash insulates the coal and reduces heat, too little and the temperature spikes. All of this is happening simultaneously with the cooking itself, and it is why our grill section is staffed by people who do this and only this during service.</p>

      <h3>Our Charcoal Grill Menu</h3>
      <p>The grill section at Raavi Spice covers: seekh kebabs — minced lamb with fresh chillies, coriander, onion and our own spice blend, moulded onto flat skewers and cooked until the exterior is charred and the interior is just done; chicken tikka — boneless chicken thigh marinated for hours in yoghurt, ginger, garlic, Kashmiri chilli and whole spices, then cooked until blistered and slightly charred at the edges; lamb chops — bone-in, marinated overnight, cooked over a high charcoal flame until the outside is deeply caramelised; and whole fish — seasoned simply so that the fish itself is the focus, the smoke and the char providing everything else.</p>

      <p>The mixed grill platter is the one to order if you want to understand everything the grill can do in a single sitting. It is generous. It is designed for sharing, though we will not stop you from ordering it alone.</p>

      <h3>The Patience Required, and Why It Is Worth It</h3>
      <p>Charcoal takes time to reach temperature. It requires more attention throughout service than turning a dial. At the end of the night, it requires cleaning and proper disposal in a way that gas does not. In purely operational terms, gas would be easier in every respect. We have chosen the harder option because it produces the better result, and because the difference matters to us and — we believe — to you.</p>

      <p>Come and sit near the grill if you can. The smell alone is worth the visit. Order the mixed platter, eat it with fresh naan and the mint chutney, and tell us it is not better than anything you have had from a gas kitchen. We will be at the grill when you arrive.</p>
    `,
    date: 'January 22, 2026',
    image: '/images/instafeed/charcol grill chef.jpg',
    heroVariant: 'accent',
    category: 'Cuisine',
    author: 'Head Chef'
  },
  {
    id: 'lahore-food-capital',
    title: 'Lahore: The Food Capital of Pakistan',
    excerpt: 'From Food Street to home kitchens — why Lahore\'s culinary identity is unlike anywhere else in the world.',
    content: `
      <p>There is a saying in Pakistan: 'Lahore, Lahore hai' — Lahore is Lahore. No translation fully captures it. The city is its own category. Its own argument. A place that people who have left it spend the rest of their lives talking about with a particular mixture of pride and longing that residents of other cities simply do not understand. And nowhere is this quality more concentrated, more alive, and more accessible to a stranger than in its food.</p>

      <p>Lahore is the second largest city in Pakistan, the cultural capital of Punjab, and — without much serious competition — the food capital of the country. This is not a claim that Lahoris make modestly, because modesty is not the city's characteristic quality. But the claim is also not without basis. The variety, the quality, the density of food culture in Lahore is extraordinary by any international comparison.</p>

      <h3>Food Street: The Culinary Cathedral</h3>
      <p>Gawalmandi Food Street in Lahore is one of the most important food destinations in South Asia. It occupies a stretch of historic street in the old walled city, where 18th and 19th-century buildings now serve as the backdrop to rows of restaurants, carts, and charcoal grills that operate from late afternoon until the early hours of the morning. The smells arrive before you can see the stalls — charcoal smoke, frying onions, the particular warm smell of a pot of nihari that has been going since the previous night.</p>

      <p>The dishes served on Food Street are the classic Lahori canon: paye and nihari in the early morning hours, charcoal-grilled chops and seekh kebabs all evening, hareesa (a wheat-and-meat porridge of extraordinary depth), dahi bhalle (lentil dumplings in spiced yoghurt), and lassi — sweet or salty — poured from great height into clay cups to aerate it. Every stall has been refining its single dish for decades. Some have been at the same spot for generations.</p>

      <p>It is impossible to visit Food Street and not feel that food is the primary cultural activity here, the lens through which Lahori society organises itself, celebrates, mourns, argues, and reconciles. In London, food is often something you do while doing something else. In Lahore, food is the thing itself.</p>

      <h3>The Lahori Palate: Bold Without Apology</h3>
      <p>Lahoris eat boldly. Large portions, strong spices, and a preference for meat that most other cities would consider excessive. The assumption is abundance — the table should be full, and it is a host's failure, not a guest's virtue, if anyone leaves hungry. A Lahori breakfast alone — halwa puri, channa masala, paye, and lassi — would serve as lunch and dinner anywhere else. This is not excess. It is hospitality expressed through generosity.</p>

      <p>The flavour profile of Lahori food is distinctively robust. More garam masala than you might expect. More ghee than you thought was reasonable. A confidence with whole spices — black cardamom, star anise, cinnamon — that can seem overwhelming to an unfamiliar palate but resolves, over the course of a meal, into something completely coherent. The heat is usually present but rarely the point. The complexity is the point.</p>

      <p>Lahori food is also seasonal in a way that is easy to miss if you are looking at a fixed menu. Winters in Lahore mean sarson da saag and makki di roti — mustard greens with cornbread, made more frequently in December than any other time. Summers mean dahi raita and fresh mint chutney alongside everything, because the freshness cuts through the heat of the weather as much as the heat of the food. The kitchen pays attention to the season.</p>

      <h3>The Street Food Hierarchy</h3>
      <p>Beyond Food Street, Lahore's food culture lives in its street corners, its morning markets, and its neighbourhood dhabas. Each area of the city has its own speciality and its own reputation. The old Anarkali Bazaar area is known for its bun kebabs — Pakistani-style hamburgers made with spiced beef patties, egg, and chutney. The Liberty Market area has some of the best nihari in the city. The Model Town suburb is where you find the finest home cooking — the food that exists nowhere publicly because it has never needed to leave the kitchen.</p>

      <p>The dhaba — the roadside restaurant, often with plastic chairs and a menu written in Urdu on a board — is where Lahori food has always been at its most honest. The cook does one or two things and does them better than anywhere else. There is no menu-planning ambition, no trend-chasing. Just the dish, cooked the same way it has always been cooked, for whoever shows up.</p>

      <h3>Bringing Lahore to West Drayton</h3>
      <p>Our founders came from Lahore. Not from the idea of Lahore — from specific streets, specific kitchens, specific smells that are still present in memory with a clarity that decades do not diminish. The recipes we use, the way we season, the importance we place on getting the charcoal right, the commitment to slow cooking and proper technique — all of it traces back to that city and those kitchens.</p>

      <p>The Pakistani community in West London carries Lahore with it in a thousand ways, many of them invisible to anyone who is not looking. The food is one of the visible ones. When you eat at Raavi Spice, you are eating a version of Lahore that we have carried across continents and adapted for a new home, without losing what made it worth bringing in the first place. The city changes. The cooking does not have to.</p>

      <p>Come and eat with us. We will introduce you to Lahore, one dish at a time.</p>
    `,
    date: 'December 20, 2025',
    image: '/images/instafeed/lahore-to-you.jpg',
    heroVariant: 'accent',
    category: 'Heritage',
    author: 'The Raavi Family'
  },
  {
    id: 'winter-comfort-food-pakistan',
    title: 'Pakistani Winter Food: What We Cook When It Gets Cold',
    excerpt: 'Slow-cooked, warming, and built for cold nights — the dishes Pakistanis turn to when the temperature drops.',
    content: `
      <p>Pakistan has winters. The north — Murree, Islamabad, the Kaghan Valley, Kashmir — gets genuinely, severely cold. Snow falls, roads close, families gather inside around food that has been cooking for hours. But even in the milder winters of Lahore and Karachi, there is a seasonal shift in Pakistani cooking that is distinct and deliberate. The kitchen changes. The dishes change. The relationship between the cook and the stove intensifies.</p>

      <p>Pakistani winter food is not a mood or a marketing category. It is a response to actual cold, developed over centuries in a climate where warmth was a practical necessity. The dishes are designed to raise body temperature, sustain energy, and comfort in a way that lighter food cannot. They are also, without exception, dishes that require time — slow cooking is the mechanism through which winter food achieves both its warmth and its depth.</p>

      <p>In London in December, the cold is different to Lahore in December. It is greyer, damper, and in some ways more relentless. But the need for warming, sustaining food is exactly the same, and the Pakistani solution works just as well here as it does at home.</p>

      <h3>Paye: The Overnight Commitment</h3>
      <p>Paye are slow-cooked trotters — the feet and ankles of lamb or beef, which sound, in the abstract, like an unusual ingredient for a dish. In practice, what the long bones and dense connective tissue of trotters produce when cooked overnight is extraordinary. The collagen dissolves completely over eight to ten hours of very gentle simmering, transforming the broth from water with spices into something that has the body and richness of a full stock. The gelatin gives the gravy a silkiness that no amount of cornflour or cream can replicate.</p>

      <p>The spice blend for paye is warming in the specific sense: ginger — both fresh and dried — black pepper, cloves, cinnamon, and black cardamom. These are not just flavour spices. In the Unani and Ayurvedic medical traditions that have always existed alongside Pakistani cooking, these spices are considered heat-generating — they literally raise the body's temperature slightly. Whether you believe the pharmacology or not, eating a bowl of paye on a cold morning produces an unmistakable sensation of warmth that radiates outward.</p>

      <p>In Lahore, the great paye shops open at midnight. They cook all night and serve from before dawn until the pot empties, which on a cold morning is before 8am. There is a line before sunrise. People who have had a good paye from a Lahori midnight shop carry the memory of it for years. We serve paye at Raavi Spice when the weather calls for it, and it is one of our most requested winter dishes.</p>

      <h3>Sarson Da Saag: The Punjab Winter</h3>
      <p>Sarson da saag — mustard greens slow-cooked with butter — is the dish of the Punjabi winter, the one that appears in Punjabi poetry and folk songs as a symbol of the season, the homeland, and the particular warmth of a cold kitchen. It is eaten with makki di roti: a flatbread made from maize flour, coarser and denser than wheat naan, and entirely correct with the rich, slightly bitter greens.</p>

      <p>The preparation of sarson da saag is not complex, but it takes time. The fresh mustard leaves are cleaned, roughly chopped, and cooked down slowly — very slowly — with spinach and sometimes bathua (lamb's quarters, a wild green) to balance the bitterness of the mustard. After an hour of cooking, the greens are broken down with a wooden masher (a bhatta), not puréed, but reduced to a rough, thick consistency. Then the critical finishing: a generous quantity of desi ghee is added, along with fried onions and ginger, and everything is cooked together for another twenty minutes. The result tastes of winter in the Punjab — slightly bitter, deeply rich, and warming in a way that stays with you for hours.</p>

      <p>White butter is placed on top just before serving. It melts over the hot greens and creates a pool of richness at the centre of the dish. A cold winter night, a plate of sarson da saag, and a stack of makki di roti: this is what Pakistani winter means at its most elemental.</p>

      <h3>Haleem: The Great Equaliser</h3>
      <p>Haleem is wheat, lentils, and meat cooked together for hours — sometimes six, sometimes eight — until they become a single, unified dish of extraordinary depth and a texture unlike anything else in the cuisine. It is thick, almost porridge-like, rich with the marrow and fat of bone-in meat, and seasoned with a masala that is specific to this dish and this dish alone.</p>

      <p>Haleem is known as the great equaliser of Pakistani cooking because the same dish — made to the same standard — appears at street stalls and at wedding banquets. It does not belong to any social class or economic bracket. It is too fundamental, too universal, too deeply embedded in the culture to be owned by anyone. The version at the roadside dhaba may be rougher, more aggressively seasoned. The version at the wedding may be garnished more lavishly. But the dish itself is the same dish.</p>

      <p>Garnishes for haleem are not optional. Fried onions, fresh ginger julienned very thinly, fresh coriander, green chillies, a squeeze of lemon, and a drizzle of oil infused with whole spices. These garnishes are not decorative. The lemon cuts the richness. The fresh ginger adds a sharp, clean note that contrasts with the soft, slow-cooked depth. The fried onions add texture. Without the garnishes, haleem is good. With them, it is complete.</p>

      <h3>Nihari in Winter</h3>
      <p>Nihari appears elsewhere on this blog in its own dedicated post, but in the context of winter food it deserves a separate mention. Nihari is a winter dish in its origins — it was served to manual labourers before the morning prayer, in the pre-dawn cold, as a warming and sustaining meal that would carry them through heavy work until midday. The marrow in the broth, the slow-cooked lamb, the warming spice blend — all of it is calibrated to that purpose.</p>

      <p>In winter, we serve more nihari than any other time of year. It is ordered by people coming in from the cold who want something that will genuinely warm them, not just feed them. Six hours of slow cooking produce something that a cold day demands, and we make it every morning so that it is ready for lunch and carries through the evening.</p>

      <h3>Come In From the Cold</h3>
      <p>West Drayton in a grey December morning is not Lahore in a grey December morning, but the remedy is the same. Pakistani kitchens have been dealing with cold for centuries with patience, slow cooking, and good spices. We have brought those remedies here.</p>

      <p>Come into Raavi Spice when the weather turns. Let us feed you properly. The stove has been on since before we opened, and whatever you need to get warm is already cooking.</p>
    `,
    date: 'November 30, 2025',
    image: '/images/menu-hero.jpeg',
    category: 'Cuisine',
    author: 'Head Chef'
  },
  {
    id: 'palak-gosht-the-green-curry',
    title: 'Palak Gosht: The Green Curry Pakistan Does Better Than Anyone',
    excerpt: 'Spinach and lamb — two ingredients that become something entirely greater than the sum of their parts.',
    content: `
      <p>Palak gosht — spinach and meat — is one of the most underestimated dishes in Pakistani cooking. It looks simple. On a menu, it reads simply. Two ingredients: spinach, lamb. The combination does not sound like the result of centuries of culinary development. But getting it right — genuinely right, with the correct texture of the spinach, the precise balance of spice, and the lamb cooked to the point where it is tender but still has presence in the dish — requires skill that comes from cooking it correctly a hundred times and incorrectly another hundred before that.</p>

      <p>Palak gosht is a dish that reveals the cook. There is nowhere to hide in it. Unlike a biryani, where the aromatic complexity of birista and whole spices can carry a competent version, palak gosht succeeds or fails on technique. The colour, the texture, the balance — all of it is the direct result of decisions made in the kitchen, and a diner who knows the dish can read those decisions immediately.</p>

      <h3>The Spinach: Colour, Texture, and Timing</h3>
      <p>Fresh spinach is the only option. Frozen spinach releases too much water and produces a dish that is wet and pale — the green drains out of it along with the liquid. Fresh spinach, properly handled, retains its colour and its slightly bitter, mineral character through the entire cooking process.</p>

      <p>The spinach is wilted quickly in a very hot pan — two to three minutes, no more. It should be bright green when it comes off the heat. If it has gone dull or grey, it has been cooked too long and the chlorophyll has broken down. At this stage, the wilted spinach is blended until it is just smooth — not completely puréed to a baby food consistency, but smooth enough to form a cohesive sauce. Some texture is intentional. Small visible pieces of spinach in the finished sauce is correct. Complete, glossy homogeneity is not.</p>

      <p>The timing of when the spinach joins the lamb is critical. It should not go in until the lamb is nearly cooked through — if the spinach cooks for too long with the meat, it loses its colour and its character. The two components need enough time together for their flavours to merge, but not so long that the spinach becomes the sacrifice that the lamb demands.</p>

      <h3>The Lamb: Bone-In, Slowly</h3>
      <p>Bone-in pieces are the only correct choice for palak gosht, for the same reason they are correct for nihari and biryani: the marrow. As bone-in lamb cooks in the spiced base, the marrow slowly dissolves into the sauce, enriching it with fat and flavour compounds that make the gravy noticeably more complex and satisfying than a dish made with boneless meat. You can taste the difference immediately and unambiguously.</p>

      <p>The lamb is cooked first — in the spice base, with tomatoes and fried onions — until it is about eighty percent done. This means the connective tissue has relaxed and the meat is beginning to yield, but it still has some resistance when pressed. If you cook the lamb fully before adding the spinach, it will become dry during the final stage when the spinach cooks through. The residual cooking time with the spinach finishes the job, and the result is lamb that is completely tender without being overcooked.</p>

      <p>The marrow bones should be cracked slightly before cooking — either by your butcher or carefully at home — so that the marrow has a direct route into the sauce. This is a detail that makes a measurable difference.</p>

      <h3>The Spice Balance: Green Must Dominate</h3>
      <p>Palak gosht uses a lighter, more restrained spice hand than a karahi or a lamb curry, and this restraint is not timidity — it is precision. The green of the spinach must remain visually and aromatically dominant. Too much red chilli powder and the colour shifts to an unappetising brown-green. Too much turmeric and the dish becomes yellow and tastes medicinal. Too much garam masala and the warming spice notes overwhelm the clean, slightly bitter character of the spinach itself.</p>

      <p>The spices that belong in palak gosht are: cumin seeds (whole, bloomed in oil at the start), a moderate amount of coriander powder, black pepper (which provides heat without the colour impact of red chilli), a small amount of green chilli for freshness, and ginger. Garlic is used but subtly — too much garlic turns the dish pungent in a way that fights with the spinach rather than supporting it.</p>

      <p>We add no cream to our palak gosht. Cream is used in some restaurant versions to soften the dish for audiences unfamiliar with the bitterness of mustard spinach, but it also makes the dish richer and heavier than it should be. Palak gosht should be vibrant and relatively light on the palate — a dish that makes you feel good rather than a dish that weighs you down.</p>

      <h3>The Final Stage: Coming Together</h3>
      <p>When the lamb is nearly done and the spinach has been prepared, the two are combined and cooked together for a final thirty minutes over a medium flame. During this time, the sauce will tighten as moisture evaporates and the flavours of the meat and spinach integrate. We adjust the seasoning at this point — more salt, sometimes a little more black pepper — and check the consistency. The finished dish should be thick enough to coat a spoon but not so reduced that it has become a paste. There should be visible oil separating slightly at the edges of the pan, which tells you the masala has cooked fully and the dish is done.</p>

      <p>Just before serving, we add a small handful of fresh coriander — not stirred in, but placed on top and allowed to wilt slightly from the heat of the dish. This last addition is the final brightness, the element that reminds you the dish is made from fresh things and not from a jar.</p>

      <h3>How to Eat It</h3>
      <p>With fresh naan. Always. The naan should be torn and used to scoop the spinach and meat together — the ratio of bread to filling is a personal preference, but more spinach sauce than you might instinctively use is the right answer. A squeeze of fresh lemon over the top just before eating changes the dish: it brightens every flavour and provides an acidity that makes the spice land differently. Do not skip it.</p>

      <p>At Raavi Spice, palak gosht is on our mains menu and is one of the dishes our regulars return for most specifically. It is quieter than a karahi, less dramatic than a biryani, but it is cooking that demands respect — from the person making it and from the person eating it.</p>

      <p>Come in and try it. Order fresh naan with it. Remember the lemon. We will see you at the table.</p>
    `,
    date: 'November 8, 2025',
    image: '/images/instafeed/palak gosht.jpg',
    heroVariant: 'accent',
    category: 'Cuisine',
    author: 'Head Chef'
  },
]
