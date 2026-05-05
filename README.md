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
│   ├── globals.css       # Base styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── components/
│   ├── Navbar.tsx        # Top navigation bar
│   ├── HeroSlider.tsx    # Hero carousel (Model Y L + Model 3)
│   ├── VehicleGrid.tsx   # All vehicle sections
│   ├── EnergySection.tsx # Solar & energy sections
│   └── Footer.tsx        # Bottom footer
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
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
