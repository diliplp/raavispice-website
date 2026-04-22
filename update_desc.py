import re
import json

def update_descriptions():
    with open('pdf_output.txt', 'r', encoding='utf-8') as f:
        pdf_lines = [line.strip() for line in f.read().splitlines() if line.strip()]

    with open('src/lib/menuData.ts', 'r', encoding='utf-8') as f:
        ts_content = f.read()

    # Find all items in ts_content
    # Each item looks like:
    # { name: 'Lahori Ladoo Pithi', description: '...', price: '...', ... }
    
    # We will iterate through lines in pdf_output.txt
    # When we see a line that matches an item name (ignoring case), the following lines until a £... or another ALL CAPS line are the description.
    
    # Parse ts_content to find names
    names = re.findall(r"name:\s*'([^']+)'", ts_content)
    
    # Let's map name to new description
    new_desc_map = {}
    
    for name in names:
        if name in ['Vegetarian Starters', 'Non-Vegetarian Starters', 'Raavi Specialties', 'Chicken Dishes', 'Lamb Dishes', 'Raavi Karahi Specials', 'Raavi Dum Pukht', 'Vegetarian Mains', 'Biryani & Rice', 'Breads', 'Sides & Chutneys', 'Burgers', 'Desserts', 'Drinks', 'Lunch Special']:
            continue
            
        # Search for name in pdf_lines
        name_clean = name.replace('(Boneless)', '').replace('(Fried/Grilled)', '').strip()
        
        found_idx = -1
        for i, line in enumerate(pdf_lines):
            if name_clean.lower() in line.lower() and len(line) < len(name_clean) + 15:
                found_idx = i
                break
                
        if found_idx != -1:
            # Gather description
            desc_lines = []
            for j in range(found_idx + 1, min(found_idx + 10, len(pdf_lines))):
                item_line = pdf_lines[j]
                if '£' in item_line or item_line.isupper() or 'Options' in item_line or 'Extra' in item_line or 'Half ' in item_line or 'Full ' in item_line:
                    break
                desc_lines.append(item_line)
            
            if desc_lines:
                new_desc_map[name] = ' '.join(desc_lines).replace('\xad', '').replace('ﬁ', 'fi').replace('ﬂ', 'fl')
                
    for name, new_desc in new_desc_map.items():
        # Replace the description in ts_content
        # Regex to match description for this specific name
        # We need to find the block for this name and replace its description.
        pattern = r"(name:\s*'" + re.escape(name) + r"',\s*description:\s*)'([^']*)'"
        
        def repl(m):
            return m.group(1) + "'" + new_desc.replace("'", "\\'") + "'"
            
        ts_content = re.sub(pattern, repl, ts_content)
        
    with open('src/lib/menuData.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)
        
    print(f"Updated {len(new_desc_map)} descriptions.")

if __name__ == '__main__':
    update_descriptions()
