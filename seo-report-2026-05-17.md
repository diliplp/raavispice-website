# SEO Report — raavispice.com
*2026-05-17 · GSC data: 2026-02-13 to 2026-05-14 (90 days) · First audit*

> **Note**: Raavi Spice is a **Pakistani** restaurant (not Indian). The name Raavi refers to the Raavi River in Pakistan. While Punjabi and Pakistani traditions share similarities, the brand and content should always lead with Pakistani identity.

---

## ⚡ Top Priority Actions

### #1 — Fix www vs non-www canonical (duplicate homepage)
🔴 Critical | **Impact**: ~+5 clicks/mo | **Effort**: Low | **Status**: ✅ Fixed

**What**: `www.raavispice.com` was flagged by Google as "Duplicate without user-selected canonical" — authority was split across two versions of every page.

**Evidence**: Top pages showed `https://www.raavispice.com/` (7 clicks, 107 imp) and `https://raavispice.com/` (5 clicks, 164 imp) as separate entries.

**Fix applied**: Added 301 redirects in `next.config.js`:
- `www.raavispice.com` → `raavispice.com` (permanent)
- `raavispice.co.uk` → `raavispice.com` (permanent)
- `www.raavispice.co.uk` → `raavispice.com` (permanent)

---

### #2 — Fix the menu page: 89 impressions, 0 clicks
🔴 Critical | **Impact**: ~+7 clicks/mo | **Effort**: Low | **Status**: ✅ Fixed

**What**: `/menu/` ranked at position 3.6 but had 0% CTR across 89 impressions. Generic title, no meta description, no OG tags.

**Evidence**: `raavi spice menu` — 11 impressions, pos 2, 0 clicks. At pos 3.6, expected CTR ~8%.

**Fix applied** in `src/app/menu/page.tsx`:
- Title: `Raavi Spice Menu — Pakistani & Punjabi Dishes | West Drayton`
- Description: `Explore our full menu — Karahi specials, biryanis, Lahori starters, fresh breads and more. Dine-in or takeaway at 39 Station Road, West Drayton. Open Mon–Sat 11am–11pm.`
- Added full OG tags and Twitter card tags

---

### #3 — Add Restaurant schema to the homepage
🟡 High | **Impact**: Rich result eligibility | **Effort**: Med | **Status**: ✅ Already existed + Enhanced

**What**: Restaurant schema was already implemented in `StructuredData.tsx`. Enhanced with:
- Added `description` field
- Added `email` field
- Added `addressRegion: London`
- Added `hasMenu` (in addition to `menu`)
- Fixed menu URL to `/menu/` (with trailing slash for consistency)
- Added `sameAs` array
- Added `currenciesAccepted` and `paymentAccepted`
- Added `Halal` to `servesCuisine`

---

### #4 — Fix homepage mobile LCP (7.2s — score 5/100)
🟡 High | **Impact**: Rankings + reduced bounce | **Effort**: Med | **Status**: 🔴 Pending

**What**: Homepage mobile LCP is 7.2 seconds (score 5/100). Total network payload was 72MB — almost certainly unoptimised hero images.

**Fix needed**:
1. Audit images in the hero section — convert to WebP/AVIF, resize to display dimensions
2. Ensure Next.js `<Image>` component with `priority` prop is used on the hero image
3. Add `loading="lazy"` to all below-fold images
4. Target: LCP < 2.5s

---

### #5 — Add meta descriptions + OG tags sitewide
🟢 Medium | **Impact**: ~+2-3% CTR | **Effort**: Low | **Status**: ✅ Fixed

**Fix applied**:
- `src/app/menu/page.tsx` — added meta description + OG/Twitter tags
- `src/app/our-story/page.tsx` — improved title + added OG/Twitter tags
- Homepage (`layout.tsx`) — already had full OG tags ✅

---

## Traffic Snapshot (90-day period)

| Metric | Value |
|--------|-------|
| Total Clicks | 12 |
| Impressions | 201 |
| Avg CTR | 5.97% |
| Avg Position | 5.4 |

| Segment | Clicks | Impressions | CTR | Notes |
|---------|--------|-------------|-----|-------|
| Branded | 3 | 196 | 1.53% | Most branded clicks go to Google Maps/GBP |
| Non-branded | 6 | 81 | 7.41% | Healthy CTR — grow impression volume |

**Key insight**: Branded impressions (196) far outnumber non-branded (81) but branded CTR is only 1.53% — people searching "raavi spice" are clicking the Google Business Profile / Maps result instead of the website. Richer SERP snippets (schema, OG tags) will help recapture these.

---

## Supporting Findings

### Indexing Issues (from URL Inspection)

| Page | Coverage State | Last Crawl | Fix |
|------|---------------|------------|-----|
| `www.raavispice.com/` | Duplicate without canonical | 2026-05-13 | ✅ 301 redirect added |
| `raavispice.com/menu/` | Indexed — no referring sitemaps | 2026-05-10 | Sitemap.ts includes `/menu` — Google will pick up |
| `www.raavispice.com/our-story/` | Indexed | 2026-03-31 (47 days) | Will recrawl after redirect fixes |

### Content Gaps (queries with impressions, no dedicated page)

| Query | Position | Impr/mo | Recommended Action |
|-------|----------|--------|--------------------|
| raavi spice reviews | 2.9 | ~9 | Add reviews/testimonials section to homepage; link to Google reviews |
| raavi spice photos | 3.7 | ~3 | Add photo gallery page or food image section |
| west drayton restaurants | 9.3 | ~1 | Expand homepage copy for "restaurant in West Drayton" |
| indian restaurant west drayton | 4.0 | ~0.3 | Skip — position as Pakistani, not Indian |
| restaurants near me | 6.7 | ~1 | Improve Google Business Profile signals (not a website fix) |

### Schema Audit

| Page | Schema | Status |
|------|--------|--------|
| `/` | Restaurant, LocalBusiness, GeoCoordinates, OpeningHoursSpecification | ✅ Enhanced |
| `/menu/` | None | 🟡 Consider adding Menu/MenuItem schema |
| Sitewide | BreadcrumbList | 🟢 Nice-to-have — not urgent |

### PageSpeed & Core Web Vitals (lab data)

| Page | Mobile Score | LCP mobile | CLS | Top Issue |
|------|-------------|-----------|-----|-----------|
| `/` | 74/100 | **7.2s 🔴** | 0 ✅ | 72MB payload — unoptimised images |
| `/menu/` | 85/100 | 3.9s 🟡 | 0 ✅ | Unused JS (49KB) |
| `/menu/` desktop | 76/100 | 1.6s ✅ | 0 ✅ | Main-thread work 3.0s |

Homepage mobile LCP of 7.2s is the critical remaining performance issue.

---

## Visitor Personas

| Persona | Searches like... | Goal |
|---------|-----------------|------|
| The Local Food Seeker | "food near me", "restaurants near me", "west drayton restaurants" | Find a nearby Pakistani restaurant with visible menu & reviews |
| The Returning/Referred Customer | "raavi spice menu", "raavi spice reviews", "raavi spice photos" | Check menu, hours, or make a reservation |

---

## What to Ignore (For Now)

- **Tablet traffic**: 0 clicks, 1 impression — irrelevant noise
- **"ravi restaurant london" / "ravi restaurant menu"**: Different restaurant, not worth optimising for
- **Desktop PageSpeed timeout**: Re-test after image optimisation is done

---

## Files Changed

| File | Change |
|------|--------|
| `next.config.js` | Added www → non-www and .co.uk → .com redirects |
| `src/app/menu/page.tsx` | Improved title, added description + OG/Twitter tags |
| `src/app/our-story/page.tsx` | Improved title, added OG/Twitter tags |
| `src/components/StructuredData.tsx` | Enhanced Restaurant schema (description, email, hasMenu, Halal cuisine, sameAs) |

---

## Remaining Actions

1. **Fix homepage hero image** — investigate and optimise the image(s) causing 72MB payload (LCP 7.2s)
2. **Google Business Profile** — ensure GBP is complete with photos, hours, and Pakistani cuisine category to capture "near me" searches
3. **Reviews** — add a homepage section linking to Google reviews; aim for 20+ reviews to unlock AggregateRating rich results
4. **Photo gallery** — 10 impressions/month for "raavi spice photos" with 0 clicks; a `/gallery/` page or food photo section would capture these
