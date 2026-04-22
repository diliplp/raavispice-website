const xlsx = require('xlsx');
const fs = require('fs');

// 1. Extract metadata from OLD menuData.ts
const oldMenuDataStr = fs.readFileSync('src/lib/menuData.ts.backup', 'utf-8');
const metadataMap = new Map();

const itemRegex = /{\s*name:\s*(['"`])(.*?)\1[\s\S]*?}/g;
let match;
while ((match = itemRegex.exec(oldMenuDataStr)) !== null) {
  const name = match[2].trim().toLowerCase();
  const block = match[0];
  const meta = {};
  
  let dietaryMatch = block.match(/dietary:\s*\[(.*?)\]/);
  if (dietaryMatch) meta.dietaryRaw = dietaryMatch[1];
  
  let spiceMatch = block.match(/spiceLevel:\s*(\d)/);
  if (spiceMatch) meta.spiceLevel = spiceMatch[1];
  
  let signatureMatch = block.match(/signature:\s*(true|false)/);
  if (signatureMatch) meta.signature = signatureMatch[1];
  
  metadataMap.set(name, meta);
  metadataMap.set(name.replace(/[^a-z0-9]/g, ''), meta);
}

// 2. Read the files
const wb = xlsx.readFile('MENU VERSION 3.xlsx');
let newCategories = [];

function getMetaCode(name) {
  let metaStr = '';
  let cleanName = name.toLowerCase().trim();
  let superCleanName = cleanName.replace(/[^a-z0-9]/g, '');
  
  let meta = metadataMap.get(cleanName) || metadataMap.get(superCleanName);
  
  if (!meta) {
      for (const [key, val] of metadataMap.entries()) {
          if (key.length > 5 && superCleanName.includes(key)) {
              meta = val;
              break;
          }
      }
  }

  if (meta) {
    if (meta.spiceLevel) metaStr += `, spiceLevel: ${meta.spiceLevel}`;
    if (meta.dietaryRaw) metaStr += `, dietary: [${meta.dietaryRaw}]`;
    if (meta.signature) metaStr += `, signature: ${meta.signature}`;
  }
  return metaStr;
}

function processData(data, idPrefix, titlePrefix = '') {
  let currentCat = null;
  
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    if (!row || row.length === 0) continue;
    
    // Check for Category (usually in col 0, often uppercase)
    let c0 = row[0] ? row[0].toString().trim() : '';
    let c1 = row[1] ? row[1].toString().trim() : '';
    
    if (c0 && c0 === c0.toUpperCase() && c0.length > 2 && !c0.includes('LUNCH IS SERVED') && !c0.includes('DESSERTS') && c1 === '') {
        if (currentCat) {
          newCategories.push(currentCat);
        }
        currentCat = {
          id: idPrefix + '-' + c0.toLowerCase().replace(/[^a-z]+/g, '-'),
          name: titlePrefix + c0.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' '),
          description: '',
          items: [] // array of objects
        };
        continue;
    }
    
    if (!currentCat) continue;
    
    // Identify item name (Col 0 or 1)
    let nameIdx = c0 ? 0 : (c1 ? 1 : -1);
    if (nameIdx === -1) continue;
    
    let name = row[nameIdx].toString().trim();
    if (name.includes('Option with Pure GHEE')) continue; // Hardcode filtering non-items if needed
    if (name.includes('ROLLS - ADD') || name.includes('BURGERS - ADD') || name.includes('ADD 2 MINI SAMOSAS')) {
        currentCat.description += (currentCat.description ? ' ' : '') + name + '.';
        continue;
    }
    
    let priceMatchStr = null;
    let priceIdx = -1;
    for (let col = nameIdx + 1; col < row.length; col++) {
        if (row[col]) {
            let val = row[col].toString().trim();
            if (val.includes('£') || !isNaN(parseFloat(val))) {
                priceMatchStr = val.includes('£') ? val : '£' + val;
                priceIdx = col;
                break;
            }
        }
    }
    
    // Check if it's a description row (no price, length > 25)
    if (priceIdx === -1 && name.length > 25) {
       if (currentCat.items.length === 0) {
           currentCat.description = name;
       } else {
           currentCat.items[currentCat.items.length - 1].description = name;
       }
       continue;
    }
    
    if (priceIdx !== -1) {
        let price = priceMatchStr;
        let variant = row[nameIdx + 1] && (nameIdx + 1 !== priceIdx) ? row[nameIdx + 1].toString().trim() : '';
        
        let desc = '';
        if (data[i+1]) {
            let nextC = data[i+1][nameIdx] ? data[i+1][nameIdx].toString().trim() : '';
            if (nextC && nextC.length > 25 && nextC.indexOf('£') === -1 && isNaN(parseFloat(nextC))) {
                desc = nextC;
                i++;
            }
        }
        
        if (name.includes('LASSI') && variant === 'glass') {
            price = '£4.99 (Glass) / £11.99 (Jug)';
            i++; 
        } 
        if (variant.toLowerCase() === 'half') price = price + ' (Half)';
        
        // Handle full price
        if (data[i+1] && data[i+1][nameIdx + 1] && data[i+1][nameIdx + 1].toString().trim().toLowerCase() === 'full') {
            let fullPriceRow = data[i+1];
            let fullPriceStr = '';
            for(let j=nameIdx+2; j<fullPriceRow.length; j++) {
                if(fullPriceRow[j] && (fullPriceRow[j].toString().includes('£') || !isNaN(parseFloat(fullPriceRow[j])))) {
                    fullPriceStr = fullPriceRow[j].toString().replace(/[^0-9.]/g, '');
                    break;
                }
            }
            if (fullPriceStr) {
                price += ` / £${parseFloat(fullPriceStr)} (Full)`;
            }
            i++;
            // Check for description AFTER full
            if (data[i+1]) {
               let nextC = data[i+1][nameIdx] ? data[i+1][nameIdx].toString().trim() : '';
               if (nextC && nextC.length > 25 && nextC.indexOf('£') === -1 && isNaN(parseFloat(nextC))) {
                   desc = nextC;
                   i++;
               }
            }
        }
        
        name = name.replace(/'/g, "\\'");
        desc = desc.replace(/'/g, "\\'");
        let meta = getMetaCode(name);
        
        currentCat.items.push({
           str: `      { name: '${name}', description: '${desc}', price: '${price}'${meta} }`,
           name: name,
           price: price,
           meta: meta
        });
    } else if (name && currentCat.id.includes('lunch-is-served')) {
        currentCat.description = name;
    }
  }
  
  if (currentCat && currentCat.items.length > 0) {
    newCategories.push(currentCat);
  }
}

function processSheet(sheetName, idPrefix, titlePrefix = '') {
  if (!wb.Sheets[sheetName]) return;
  const data = xlsx.utils.sheet_to_json(wb.Sheets[sheetName], { header: 1, raw: false });
  processData(data, idPrefix, titlePrefix);
}

function processCSV(csvPath, idPrefix, titlePrefix = '') {
  const csvWb = xlsx.readFile(csvPath);
  const data = xlsx.utils.sheet_to_json(csvWb.Sheets[csvWb.SheetNames[0]], { header: 1, raw: false });
  processData(data, idPrefix, titlePrefix);
}

// 1. Breakfast
newCategories.push({ id: 'breakfast', name: 'Breakfast', description: 'Traditional Desi Breakfast', items: [] });
let catIndex = newCategories.length - 1;
function processBreakfast(sheetName) {
  if (!wb.Sheets[sheetName]) return;
  const data = xlsx.utils.sheet_to_json(wb.Sheets[sheetName], { header: 1, raw: false });
  for (let i = 0; i < data.length; i++) {
        const row = data[i];
        if (!row || !row[0]) continue;
        let name = row[0].toString().trim();
        if (name.toLowerCase() === 'breakfast') continue;
        let price = row[1] ? row[1].toString().trim() : '';
        if (price && !price.includes('£')) price = '£' + price;
        let desc = '';
        if (data[i+1] && data[i+1][0] && data[i+1][0].toString().length > 25 && !data[i+1][1]) {
            desc = data[i+1][0].toString().trim();
            i++;
        }
        if (price) {
           name = name.replace(/'/g, "\\'");
           desc = desc.replace(/'/g, "\\'");
           newCategories[catIndex].items.push({ str: `      { name: '${name}', description: '${desc}', price: '${price}'${getMetaCode(name)} }` });
        }
  }
}
processBreakfast('BREAKFAST MENU');

// 2. Full Menu (from CSV!)
processCSV('MENU VERSION 3-fullmenu.csv', 'fm', '');

// 3. Lunch
newCategories.push({ id: 'lunch-special', name: 'Lunch Special', description: 'LUNCH IS SERVED ONLY BETWEEN 11:00–15:00, MONDAY TO FRIDAY', items: [] });
let lnIndex = newCategories.length - 1;
function processLunch(sheetName) {
  if (!wb.Sheets[sheetName]) return;
  const data = xlsx.utils.sheet_to_json(wb.Sheets[sheetName], { header: 1, raw: false });
  for (let i = 0; i < data.length; i++) {
        const row = data[i];
        if (!row || !row[0]) continue;
        let name = row[0].toString().trim();
        if (name.includes('LUNCH IS SERVED')) continue;
        if (name.includes('ROLLS - ADD') || name.includes('BURGERS - ADD') || name.includes('ADD 2 MINI SAMOSAS')) {
            newCategories[lnIndex].description += ' ' + name + (row[1] ? ' (£'+parseFloat(row[1]) +')' : '') + '.';
            continue;
        }
        let priceCol = row.length - 1;
        let price = row[priceCol] ? row[priceCol].toString().trim() : '';
        if (price && !price.includes('£')) price = '£' + price;
        let desc = '';
        if (data[i+1] && data[i+1][0] && data[i+1][0].toString().length > 25 && !data[i+1][1]) {
            desc = data[i+1][0].toString().trim();
            i++;
        }
        if (price && price.includes('£')) {
           name = name.replace(/'/g, "\\'");
           desc = desc.replace(/'/g, "\\'");
           let meta = getMetaCode(name);
           if (!meta && name.includes('CHILLI PANEER')) meta = ", dietary: ['V', 'GF']";
           if (!meta && name.includes('PANEER')) meta = ", dietary: ['V']";
           if (!meta && name.includes('PAKORA')) meta = ", dietary: ['V']";
           if (!meta && name.includes('ROLL') && !name.includes('PANEER')) meta = ", dietary: ['H']";
           if (!meta && name.includes('BURGER') && !name.includes('FISH')) meta = ", dietary: ['H']";
           newCategories[lnIndex].items.push({ str: `      { name: '${name}', description: '${desc}', price: '${price}'${meta} }` });
        }
  }
}
processLunch('LUNCH MENU');

// 4. Desserts
newCategories.push({ id: 'desserts', name: 'Desserts', description: 'Sweet endings', items: [] });
let dsIndex = newCategories.length - 1;
function processDesserts(sheetName) {
  if (!wb.Sheets[sheetName]) return;
  const data = xlsx.utils.sheet_to_json(wb.Sheets[sheetName], { header: 1, raw: false });
  for (let i = 0; i < data.length; i++) {
        const row = data[i];
        if (!row || !row[0]) continue;
        let name = row[0].toString().trim();
        if (name.toLowerCase() === 'desserts') continue;
        let price = row[1] ? row[1].toString().trim() : '';
        if (price && !price.includes('£')) price = '£' + price;
        let desc = '';
        if (data[i+1] && data[i+1][0] && data[i+1][0].toString().length > 25 && !data[i+1][1]) {
            desc = data[i+1][0].toString().trim();
            i++;
        }
        if (price && price.includes('£')) {
           name = name.replace(/'/g, "\\'");
           desc = desc.replace(/'/g, "\\'");
           newCategories[dsIndex].items.push({ str: `      { name: '${name}', description: '${desc}', price: '${price}', dietary: ['V'] }`});
        }
  }
}
processDesserts('DESSERTS');

// 5. Drinks
processSheet('DRINKS MENU', 'dr', '');

let code = `export interface MenuItem {
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
`;

for (let cat of newCategories) {
    if (cat.items.length === 0 || cat.id.startsWith('fm-vegetarian') && cat.name === 'Vegetarian') {
       if (cat.name === 'Vegetarian') {
           cat.name = 'Vegetarian Mains';
           cat.id = 'vegetarian-mains';
       } else if (cat.items.length === 0) continue;
    }
    
    // Overrides for objects having dynamically added descriptions
    let itemsStr = cat.items.map(it => {
        if (it.description && it.str) {
            // Rebuild string if modified
            let newDesc = it.description.replace(/'/g, "\\'");
            return `      { name: '${it.name}', description: '${newDesc}', price: '${it.price}'${it.meta} }`;
        }
        return it.str;
    });
    
    // Drop prefix ID
    cat.id = cat.id.replace(/^[a-z]{2}-/, '');
    
    let finalName = cat.name;
    if (finalName === 'Non Vegetarian Starters') finalName = 'Non-Vegetarian Starters';
    
    code += `  {
    id: '${cat.id}',
    name: '${finalName.replace(/'/g, "\\'")}',
    description: '${cat.description.replace(/'/g, "\\'")}',
    items: [
${itemsStr.join(',\n')}
    ],
  },
`;
}

code += `];

export const dietaryInfo = {
  V: { label: 'Vegetarian', color: 'bg-sage-green' },
  VG: { label: 'Vegan', color: 'bg-green-700' },
  GF: { label: 'Gluten Free', color: 'bg-antique-gold text-forest-green' },
  H: { label: 'Halal', color: 'bg-amber-800' },
}
`;

fs.writeFileSync('src/lib/menuData.ts', code);
console.log("Menu synced fully with all sheets, using CSV for FULL MENU!");
