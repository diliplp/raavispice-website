const xlsx = require('xlsx');
const fs = require('fs');
const wb = xlsx.readFile('MENU VERSION 3.xlsx');
let output = '';
Object.keys(wb.Sheets).forEach(sn => {
  output += `\n--- SHEET: ${sn} ---\n`;
  output += xlsx.utils.sheet_to_csv(wb.Sheets[sn]).trim();
  output += '\n';
});
fs.writeFileSync('sheets.txt', output);
