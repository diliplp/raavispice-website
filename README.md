# Raavi Spice - Restaurant Website

A luxury restaurant website for **Raavi Spice** - Authentic Pakistani & Punjabi Cuisine in West Drayton, London.

Built with Next.js 14, Tailwind CSS, and Framer Motion.

## Features

- ✨ Beautiful animations with Framer Motion
- 🎨 Luxury dark theme with gold accents
- 📱 Fully responsive design
- ⚡ Lightning-fast static export
- 🍽️ Complete menu with categories
- 📅 Online reservation form
- 📍 Google Maps integration
- 🔍 SEO optimized

## Pages

- **Home** - Hero with falling spices animation, featured dishes, story teaser
- **Our Story** - Brand heritage and philosophy
- **Menu** - Full menu with sticky navigation, dietary icons, spice levels
- **Reservations** - Online booking form
- **Contact** - Contact form with map

## Quick Start

### 1. Install Dependencies

```bash
cd D:\Projects\raavi-nextjs
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build for Production

```bash
npm run build
```

This creates a static export in the `out/` folder.

## Deploy to Hostinger

### Option 1: Upload Static Files (Recommended)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Find the output:**
   - The `out/` folder contains all static files

3. **Upload to Hostinger:**
   - Log in to Hostinger → hPanel
   - Go to **File Manager**
   - Navigate to `public_html`
   - Delete existing files (backup if needed)
   - Upload all contents from the `out/` folder
   - Ensure `index.html` is in the root

4. **Configure domain:**
   - In Hostinger, go to **Domains**
   - Point `raavispice.com` to your hosting

### Option 2: Git + Node.js Hosting

If your Hostinger plan supports Node.js:

1. **Push to Git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **In Hostinger:**
   - Go to **Git** section
   - Connect repository
   - Set build command: `npm run build`
   - Set output directory: `out`

## Customization

### Update Contact Info

Edit these files:
- `src/components/Footer.tsx` - Footer contact details
- `src/app/contact/page.tsx` - Contact page info
- `src/app/reservations/page.tsx` - Reservation page

### Update Menu

Edit `src/lib/menuData.ts` to modify:
- Categories
- Items
- Prices
- Dietary info
- Descriptions

### Colors

Edit `tailwind.config.ts` to change the color scheme:
- `forest-green` - Primary dark background
- `antique-gold` - Primary accent
- `cream` - Light text

### Add Real Images

Replace placeholder image URLs in:
- `src/app/page.tsx` - Homepage images
- `src/app/our-story/page.tsx` - Story page images
- Components with Unsplash URLs

### Add Logo

1. Add logo file to `public/images/logo.png`
2. Update `src/components/Header.tsx` to use `<Image>` component

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Google Fonts (Cormorant Garamond, Playfair Display, Work Sans, Birthstone)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

Private - Raavi Spice © 2026
"# raavispice" 
