const fs = require('fs');

let tsCode = fs.readFileSync('src/lib/menuData.ts', 'utf8');

// Strip out TypeScript specific definitions
tsCode = tsCode.replace(/export interface[\s\S]*?}\n\n/g, '');
tsCode = tsCode.replace('export const menuCategories: MenuCategory[] =', 'const menuCategories =');
tsCode = tsCode.replace(/export const dietaryInfo[\s\S]*$/, '');

tsCode += '\nmodule.exports = menuCategories;\n';

const tempFile = 'temp_menu_parse.js';
fs.writeFileSync(tempFile, tsCode);

try {
    const menuCategories = require('./' + tempFile);

    let csvContent = '\uFEFF'; // Add BOM for Excel compatibility with special characters like £
    csvContent += 'Category,Item Name,Price,Description,Spice Level (0-3),Dietary (V/VG/GF/H),Signature\n';

    for (const cat of menuCategories) {
      for (const item of cat.items) {
          const escape = (str) => {
              if (str === null || str === undefined) return '';
              let s = str.toString();
              return '"' + s.replace(/"/g, '""') + '"';
          };
          
          const dietary = item.dietary ? item.dietary.join(', ') : '';
          const signature = item.signature ? 'Yes' : '';
          const spice = item.spiceLevel !== undefined ? item.spiceLevel : '';
          
          csvContent += `${escape(cat.name)},${escape(item.name)},${escape(item.price)},${escape(item.description)},${spice},${escape(dietary)},${signature}\n`;
      }
    }

    fs.writeFileSync('RAAVI_MASTER_MENU.csv', csvContent);
    console.log('Successfully generated RAAVI_MASTER_MENU.csv');
} catch (e) {
    console.error("Error evaluating menu data:", e);
} finally {
    if (fs.existsSync(tempFile)) {
        fs.unlinkSync(tempFile);
    }
}
