# Science Society of D.S. Senanayake College (SSDSSC) Web Platform

Official web platform for the Science Society of D.S. Senanayake College, hosting the ESPER Awards '27 innovation platform, Evolvion'27, and IgniteRC.

## Stack & Architecture

- **Framework**: Next.js 16 (App Router)
- **UI & Animation**: React 19, Tailwind CSS v4, Framer Motion, Lenis Smooth Scroll
- **Database & Storage**: Supabase (PostgreSQL, Storage buckets)
- **Email Delivery**: Resend
- **Integrations**: Google Sheets Webhook real-time synchronization
- **Deployment Target**: Vercel

## System Requirements

- **Node.js**: `>= 20.0.0`
- **Package Manager**: npm (`8.x` or higher)

## Getting Started

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/ssdssc/ssdssc.com.git
cd ssdssc.com
npm install
```

### 2. Configure Environment Variables

Copy the example environment template and configure your secrets:

```bash
cp .env.example .env.local
```

Required variables:
- `ESPER_SUPABASE_URL`: Supabase project URL for ESPER.
- `ESPER_SUPABASE_SERVICE_ROLE_KEY`: Service role key for ESPER registrations.
- `ESPER_GOOGLE_SHEET_WEBHOOK_URL`: (Optional) Apps Script webhook for real-time sheet sync.
- `SUPABASE_URL`: Main Supabase project URL for EVO/IgniteRC.
- `SUPABASE_SERVICE_ROLE_KEY`: Service role key for EVO/IgniteRC registrations.
- `RESEND_API_KEY`: Resend API key for automated contestant confirmations.

### 3. Database Setup

Database migrations are located in `supabase/migrations/`:
- `supabase/migrations/20260811000000_create_igniterc_registrations.sql`: IgniteRC schema and storage bucket configuration.

Apply migrations using the Supabase CLI or the Supabase SQL editor.

### 4. Running Locally

```bash
# Start development server
npm run dev

# Run type check
npm run typecheck

# Run linter
npm run lint

# Production build
npm run build

# Start production server
npm run start
```

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js dev server with Webpack |
| `npm run build` | Builds optimized production bundle |
| `npm run start` | Runs Next.js production server locally |
| `npm run lint` | Runs ESLint across all TypeScript and JavaScript files |
| `npm run typecheck` | Validates TypeScript types with `tsc --noEmit` |

## Project Structure

```
├── public/                 # Static assets (fonts, video, images, audio, PDFs, sitemap)
│   ├── esper/              # ESPER assets, images, audio, and rules PDFs
│   ├── evo/                # EVO static bundle assets
│   ├── igniterc/           # IgniteRC static bundle assets
│   ├── robots.txt          # Crawler instructions
│   └── sitemap.xml         # XML sitemap
├── src/
│   ├── app/                # Next.js App Router pages and API routes
│   │   ├── api/            # Serverless API endpoints
│   │   │   ├── esper/      # ESPER registration handler
│   │   │   ├── evo/        # EVO registration handler
│   │   │   ├── health/     # Service health check endpoint
│   │   │   └── igniterc/   # IgniteRC registration & signed upload URLs
│   │   ├── esper/          # ESPER landing & award subpages (Inter, Intra, Open)
│   │   ├── evo/            # EVO subsite route handlers
│   │   ├── igniterc/       # IgniteRC subsite route handlers
│   │   ├── error.tsx       # Error boundary
│   │   ├── global-error.tsx# Fallback root error boundary
│   │   ├── not-found.tsx   # Custom 404 page
│   │   └── layout.tsx      # Root application layout
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Header, Footer, SmoothScroll, SponsorMarquee
│   │   └── esper/          # HeroSection, AwardsSection, Countdown, etc.
│   ├── config/             # Application configuration
│   └── lib/                # Utility helpers and database client wrappers
├── supabase/               # Supabase database migrations
└── vercel.json             # Vercel deployment configuration
```

## Deployment

Deployments are automated through GitHub Actions (`.github/workflows/vercel-deploy.yml`) on push to `main`:
1. Production environment variables are pulled from Vercel.
2. Next.js creates an optimized production build via Vercel CLI.
3. Prebuilt artifacts are deployed to the production edge network.
