# Raavi Spice Project Context

This project is a luxury restaurant website for **Raavi Spice**, specializing in authentic Pakistani and Punjabi cuisine. It is built as a high-performance, statically exported Next.js application designed for hosting on Hostinger.

## 🛠 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Data Management:** Custom scripts for syncing menu data from Excel/CSV
- **Hosting:** Hostinger (Static Export)

## 📁 Project Structure

- `src/app/`: Next.js App Router pages (Home, Menu, Our Story, Reservations, Contact).
- `src/components/`: Reusable UI components (Header, Footer, FallingSpices, InstagramFeed, etc.).
- `src/lib/`: Data and utility functions. `menuData.ts` is the central source for the menu.
- `public/`: Static assets including images, videos, and favicon.
- `scripts/` (Root): Utility scripts for menu management:
  - `sync_menu.js`: Updates `menuData.ts` from `MENU VERSION 3.xlsx` and `MENU VERSION 3-fullmenu.csv`.
  - `generate_csv.js`: Likely used for internal data processing.
  - `fix_ids.js`: Utility to maintain ID consistency in the menu.

## 🚀 Key Workflows

### 1. Development
- **Start Dev Server:** `npm run dev`
- **Build & Preview:** `npm run build && npm run start`

### 2. Menu Management
The menu is managed externally via Excel/CSV and synced into the codebase to keep the UI up-to-date without manual JSON editing.
- **Sync Command:** `node sync_menu.js`
- **Process:**
  1. Modify `MENU VERSION 3.xlsx`.
  2. Run the sync script.
  3. The script preserves metadata (dietary info, spice levels, signature status) by referencing `src/lib/menuData.ts.backup`.

### 3. Deployment (Vercel)
- **Method:** Automated deployment via GitHub integration.
- **Process:** 
  1. Push changes to the `main` branch.
  2. Vercel automatically detects the push and triggers a production build.
  3. Environment variables (if any) are managed in the Vercel Dashboard.
- **Domain:** Primary domain is `raavispice.com`. Redirects for `.co.uk` are handled in `next.config.js` and Vercel domain settings.

## 🎨 Design System

- **Primary Colors:**
  - `forest-green`: Backgrounds (#0A1A10)
  - `antique-gold`: Accents, headings (#D4AF37)
  - `cream`: Text, light elements (#F5F5DC)
- **Typography:**
  - `Cormorant Garamond` & `Playfair Display`: Elegant headings.
  - `Work Sans`: Clean body text.
  - `Birthstone`: Decorative script.

## 📝 Conventions

- **Animations:** Use `Framer Motion` for all transitions and the signature "Falling Spices" effect.
- **Images:** Prefer `.webp` format for performance.
- **Components:** Maintain a clear separation between layout components and interactive ones.
- **Types:** Strictly use TypeScript interfaces defined in `src/lib/menuData.ts` for any menu-related work.
