# Migration Audit: Framer Astro to Next.js (App Router)

## 1. Project Overview & Architecture
- **Source Project**: Astro 6 (Server output via `@astrojs/vercel`) hosting Framer-exported HTML & SSR-compiled pages, alongside static Astro routes and server-side API handlers.
- **Target Stack**: Next.js 15+ (App Router), React 19, TypeScript, Tailwind CSS, Framer Motion.
- **Design & Rendering Goal**: Pixel-perfect parity with **ZERO visual change** across all breakpoints (1440px, 1024px, 810px, 390px).

---

## 2. Inventory of Pages & Routes

| Route | Source File | Type | Description |
|---|---|---|---|
| `/` | `src/pages/index.astro` | Redirect | 302 Redirect to `/esper` |
| `/index.html` | `src/pages/index.html.astro` | Redirect | 301 Redirect to `/esper` |
| `/esper` | `src/pages/esper/index.html` | Landing Page | ESPER '27 Flagship Science Day & Awards Ceremony homepage |
| `/esper/inter` | `src/pages/esper/inter/index.html` | Subpage | Inter School Awards category overview & cards grid |
| `/esper/inter/register` | `src/pages/esper/inter/register.html` | Portal | Inter School Awards registration form portal |
| `/esper/intra` | `src/pages/esper/intra/index.html` | Subpage | Intra School Awards category overview & cards grid |
| `/esper/intra/register` | `src/pages/esper/intra/register.html` | Portal | Intra School Awards registration form portal |
| `/esper/open` | `src/pages/esper/open/index.html` | Subpage | Open Awards category overview & cards grid |
| `/esper/open/register` | `src/pages/esper/open/register.html` | Portal | Open Awards registration form portal |
| `/esper/popular/register` | `src/pages/esper/popular/register.html` | Portal | Popular Awards registration form |
| `/igniterc` | `src/pages/igniterc/index.astro` | Landing Page | IgniteRC Robothon & Tech Competition homepage |
| `/igniterc/register` | `src/pages/igniterc/register.astro` | Portal | IgniteRC registration portal |
| `/evo` | `src/pages/evo/index.html` | Landing Page | EVO tech conference |
| `/evo/register` | `src/pages/evo/register.html` | Portal | EVO registration portal |

---

## 3. Backend & API Routes

| Endpoint | Source File | Method | Description / Database |
|---|---|---|---|
| `/api/esper/register` | `src/pages/api/esper/register.js` | `POST` | Supabase registration handler with multi-part file uploads (`esper-uploads` bucket) to `esper_inter_registrations`, `esper_intra_registrations`, and `esper_open_registrations` (fallback: `esper_registrations`). |
| `/api/igniterc/register` | `src/pages/api/igniterc/register.js` | `POST` | IgniteRC team registration with email confirmations via Resend. |
| `/api/igniterc/upload-urls` | `src/pages/api/igniterc/upload-urls.js` | `POST` | Presigned upload URLs for submission files. |
| `/api/evo/register` | `src/pages/api/evo/register.js` | `POST` | EVO delegate & participant registration handler. |

---

## 4. Breakpoint Architecture (Framer Tokens & Layouts)

The source Framer CSS uses four explicit breakpoints:

| Breakpoint Name | Media Query | Target Viewport | Layout Shift Characteristics |
|---|---|---|---|
| **Desktop Large** (`193nlgj`) | `min-width: 1440px` | 1440px - 4K | Full 1320px container, 4-cards-per-row grid, inline nav, docked brands ticker at bottom of hero. |
| **Desktop Standard** (`72rtr7`) | `(min-width: 1200px) and (max-width: 1439.98px)` | 1200px - 1439px | 1160px container, 3/4-cards grid, standard desktop spacing. |
| **Tablet** (`ebiaht`) | `(min-width: 810px) and (max-width: 1199.98px)` | 810px - 1199px | 810px max-width container, 2-cards-per-row grid, adjusted hero scales. |
| **Mobile** (`9w4hrp`) | `max-width: 809.98px` | 320px - 809px | Mobile hamburger menu (`.esper-mobile-toggle`), single-column card stacking, 100% viewport width, 0px horizontal scroll (`<= 375px/390px`). |

### Tailwind Breakpoint Configuration Mapping:
```javascript
screens: {
  'sm': '600px',
  'md': '810px',    // Framer ebiaht breakpoint
  'lg': '1200px',   // Framer 72rtr7 breakpoint
  'xl': '1440px',   // Framer 193nlgj breakpoint
}
```

---

## 5. Typography & Font Assets

1. **Constantine** (`/esper/font/Constantine.ttf`):
   - Primary Luxury Display Serif for headings (`H1`, `H2`, `ALL AWARDS`, `It Embarks At Monarch Imperial`, Section titles).
2. **Nebula** (`/esper/font/Nebula-Regular.otf`):
   - Futuristic Geometric Caps for navigation links, eyebrow badges, button labels, and tags.
3. **Playfair Display**:
   - Secondary Editorial Serif (`nufrd-...woff2`).
4. **Inter & Inter Display**:
   - Clean UI font for card titles, stats, and metadata (`5vvr9vy74if2i6bqbjvbw7sy1pq.woff2`, etc.).
5. **Plus Jakarta Sans**:
   - High-legibility Body font for descriptions, rules, paragraphs, and registration inputs.

---

## 6. Media & Assets

1. **Videos**:
   - `public/esper/hero-video.mp4` (Flagship cosmic hero cover video for homepage `/esper`)
   - `public/esper/subheader-vid.mp4` (Dedicated inner subheader video background for `/esper/inter`, `/esper/intra`, `/esper/open`)
   - `public/esper/images/u8envoaruzs1o3fwmebitz5gdu.mp4` (Ada Derana 24 Broadcast Feature episode video)
2. **Images & Artwork**:
   - Over 100+ optimized PNGs, WebPs, SVGs in `/public/esper/images/`, `/public/igniterc/`, `/public/evo/`.
   - Bounding-box cropped uncropped logo: `/esper/images/nskh2pvc8h3ex4zhjyptc6eau.png`.
   - Category trophy artwork cards (`Aesthetikos.png`, `Agora.png`, `Clavis.png`, `Optikos.png`, etc.).
3. **Rules Documents**:
   - `Esper_Inter_School_Awards_Rules.pdf`
   - `Esper_Intra_School_Awards_Rules.pdf`
   - `Esper_Open_Awards_Rules.pdf`

---

## 7. Interactive Features & Animation Specifications

1. **Header**:
   - Transparent gradient blur backdrop (`rgba(4, 4, 4, 0.85)` to `0.15`, `backdrop-filter: blur(12px)`).
   - Hairline gold bottom border (`rgba(255, 213, 126, 0.15)`).
   - Active route indicator with glowing gold bottom underline.
   - Mobile animated 2-bar hamburger menu with smooth drop-down drawer.
2. **Infinite Sponsor Brands Ticker**:
   - Seamless continuous horizontal marquee loop of sponsor logos (`SLTMOBITEL`, `Ada Derana 24`, `Sirasa TV`, `JANINDU LEELANANDA`, `ESOFT`, `EVENTS AVENUE`, `Digitized.ik`).
3. **Ada Derana 24 Video Player**:
   - Interactive custom gold play button over poster thumbnail with smooth transition to HTML5 native video playback.
4. **All Awards Carousel**:
   - Auto-sliding continuous luxury card track on the homepage.
5. **Countdown Timer**:
   - Dynamic real-time countdown to ESPER '27.
6. **Registration Portals**:
   - Multi-category conditional form fields, client-side validation, direct Supabase storage upload, and submission feedback.
