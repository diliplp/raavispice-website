const fs = require('fs');
let code = fs.readFileSync('src/lib/menuData.ts', 'utf8');
code = code.replace(/id: '([a-z]{2})-(.*?)'/g, "id: '$2'");
fs.writeFileSync('src/lib/menuData.ts', code);
console.log("IDs fixed.");
