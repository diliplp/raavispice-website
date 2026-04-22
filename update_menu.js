const fs = require('fs');

const menuContent = fs.readFileSync('src/lib/menuData.ts.backup', 'utf-8');

let newContent = menuContent;

// Remove items by name
const itemsToRemove = [
  'Haryali Boti',
  'Peshawari Chapli Kebab (Beef)',
  'Paneer Tikka',
  'Crispy Okra Fries',
  'Lamb Nihari',
  'Kabuli Pilau',
  'Peri Peri Chips',
  'Kachumer Salad',
  'Milky Rogni Naan',
  'Chapati',
  'Mint Raita',
  // Indo-Chinese items
  'Chicken Chow Mein',
  'Chicken Corn Soup',
  'Chicken Manchurian',
  'Egg Fried Rice',
];

for (const item of itemsToRemove) {
  const r = new RegExp(`\\s*\\{\\s*name:\\s*'${item.replace(/([()])/g, '\\$1')}'[\\s\\S]*?\\},`, 'g');
  newContent = newContent.replace(r, '');
}

// Remove seafood category completely
const sfStart = newContent.indexOf("id: 'seafood'");
if (sfStart !== -1) {
  const startIdx = newContent.lastIndexOf('{', sfStart) - 2;
  // Find the end array `    ],\n  },`
  let endIdx = newContent.indexOf('    ],\n  },', sfStart);
  if (endIdx !== -1) {
    newContent = newContent.substring(0, startIdx) + newContent.substring(endIdx + 11);
  }
}

// Rename 'Burgers & Indo-Chinese' to 'Burgers'
newContent = newContent.replace(/name:\s*'Burgers & Indo-Chinese'/, "name: 'Burgers'");

// Add Lunch Special category before the closing bracket of menuCategories
const lunchSpecial = `  {
    id: 'lunch-special',
    name: 'Lunch Special',
    description: 'Lunch is served only between 12:00–15:00, Monday - Friday. Add Chips and a Can of Drink for £3.00',
    items: [
      { name: 'Chicken Tikka Roll', description: 'Juicy chicken tikka wrapped in your choice of soft naan or flaky paratha, layered with fresh salad and flavourful chutney.', price: '£9.99', dietary: ['H'] },
      { name: 'Lamb Kebab Roll', description: 'Succulent lamb kebabs wrapped in your choice of soft naan or flaky paratha, layered with fresh salad and flavourful chutney.', price: '£9.99', dietary: ['H'] },
      { name: 'Mix Kebab Roll', description: 'A flavour-packed roll with a mix of chicken tikka & lamb kebab, wrapped in your choice of soft naan or flaky paratha.', price: '£12.99', dietary: ['H'] },
      { name: 'Chicken Karahi Roll', description: 'Tender chicken karahi wrapped in your choice of soft naan or flaky paratha.', price: '£9.99', dietary: ['H'] },
      { name: 'Malai Chicken Roll', description: 'Creamy malai chicken wrapped in your choice of soft naan or flaky paratha.', price: '£9.99', dietary: ['H'] },
      { name: 'Chilli Paneer Roll', description: 'Spicy chilli paneer wrapped in your choice of soft naan or flaky paratha.', price: '£9.99', dietary: ['V', 'GF'] }
    ],
  },
];

export const dietaryInfo = {`;

newContent = newContent.replace(/\]\n\nexport const dietaryInfo = \{/, lunchSpecial);

fs.writeFileSync('src/lib/menuData.ts', newContent);
console.log("Menu updated successfully (V4)!");
