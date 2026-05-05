# Tesla Homepage Clone — Next.js + Tailwind CSS

A pixel-perfect replica of the Tesla homepage, built with Next.js 14 (App Router) and Tailwind CSS. Fully mobile responsive.

## Features

- ✅ Exact Tesla navbar with logo, nav links, globe & account icons
- ✅ Hero slider with auto-play, prev/next arrows, dot indicators
- ✅ Vehicle sections (Model Y L, Model S, Model 3, Model X, Cybertruck)
- ✅ Energy sections (Solar Panels, Solar Roof, Powerwall)
- ✅ "Schedule a Drive" floating button
- ✅ Fully mobile responsive with hamburger menu
- ✅ Smooth slide transitions
- ✅ Footer
- ✅ TypeScript

## Setup

### 1. Install dependencies

```bash
cd tesla-clone
npm install
```

### 2. Run development server

```bash
add .env
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
tesla-clone/
├── app/
│   ├── api/
│   │   └── cars/
│   │       ├── route.ts          # GET all cars API
│   │       └── [id]/
│   │           └── route.ts      # GET car by ID API
│   │
│   ├── cars/
│   │   ├── page.tsx             # Cars listing page
│   │   └── [slug]/
│   │       └── page.tsx         # Car details page (dynamic route)
│   │
│   ├── data/
│   │   └── car.ts               # Static car data (fallback / seed data)
│   │
│   ├── lib/
│   │   ├── mongodb.ts           # MongoDB connection setup
│   │   └── security.ts          # CORS, headers, rate limiting
│   │
│   ├── models/
│   │   └── Car.ts               # Mongoose schema/model
│   │
│   ├── scripts/
│   │   └── seed.ts              # Seed database script
│   │
│   ├── globals.css              # Global styles (Tailwind)
│   ├── layout.tsx               # Root layout
│   └── page.tsx                # Homepage
│
├── components/
│   └── common/
│       ├── Navbar.tsx           # Top navigation bar
│       ├── Slider.tsx           # Hero carousel / banner slider
│       ├── VehicleGrid.tsx      # Vehicle listing grid
│       ├── EnergySection.tsx    # Energy / solar section
│       └── Footer.tsx           # Footer
│
├── store/
│   ├── provider.tsx             # Redux provider setup
│   ├── index.ts                 # Store configuration
│   └── slices/
│       └── carSlice.ts          # Car state (with persist)
│
├── types/
│   └── common.ts                # TypeScript interfaces/types
│
├── public/                      # Static assets
├── src/                         # (optional/unused - can be removed if not needed)
│
├── .env                         # Environment variables
├── .env.local
├── .env.sample                  # Sample env for setup
├── .dockerignore
├── docker-compose.yml           # Docker compose config
├── Dockerfile                   # Docker setup
├── next.config.js               # Next.js config
├── tailwind.config.js           # Tailwind config
├── tsconfig.json                # TypeScript config
├── package.json
├── package-lock.json
└── README.md
```

## Key Design Decisions

- **Full-height sections**: Each section uses `h-[100svh]` for perfect viewport-height slides
- **Car images**: Loaded from Tesla's official CDN (`digitalassets.tesla.com`)
- **Mountain background**: SVG-generated mountain silhouettes matching the original
- **Navbar transparency**: Fixed position with transparent background over hero imagery
- **Slider**: Auto-advances every 6 seconds with smooth opacity transitions

## Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| Mobile (`< 768px`) | Hamburger menu, smaller text, compact buttons |
| Tablet (`768px+`) | Full nav links visible |
| Desktop (`1024px+`) | Full layout, larger hero text |

## Notes

- Car images are fetched from Tesla's public CDN. If they fail to load, the `img` tag gracefully hides.
- The `schedule-btn` uses `backdrop-filter: blur` for the frosted glass effect.
- Dot indicators use a pill shape for the active slide (matches Tesla's actual design).
