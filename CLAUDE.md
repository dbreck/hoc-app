# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Haus of Color Painting LLC website - a professional, modern site for a Tampa Bay/St. Petersburg painting company. Features multi-page routing, dark mode support, and smooth GSAP animations.

## Tech Stack

- React 19 + TypeScript + Vite
- React Router DOM v7 for multi-page navigation
- CSS Modules for component styling
- GSAP + ScrollTrigger for animations
- ThemeContext for dark/light mode with localStorage persistence
- Deployment: Cloudflare Pages
- Domain: hausofcolor.com

## Build Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server at localhost:5173
npm run build        # Production build to dist/
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Architecture

### Staged Deployment

The site uses a preview route structure for staged deployment:

- `/` - Coming Soon page (minimal: logo, "Coming Soon", phone number)
- `/preview/*` - Full site preview for client review

When ready to go live, change `BASE_PATH` in `src/config/routes.ts` from `'/preview'` to `''`.

### Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | ComingSoonPage | Minimal coming soon placeholder |
| `/preview` | HomePage | Hero, services preview, about, FAQ, contact |
| `/preview/services` | ServicesPage | Services overview with all service cards |
| `/preview/services/interior-painting` | InteriorPaintingPage | Interior painting service details |
| `/preview/services/exterior-painting` | ExteriorPaintingPage | Exterior painting service details |
| `/preview/services/cabinet-refinishing` | CabinetRefinishingPage | Cabinet refinishing service details |
| `/preview/services/commercial-painting` | CommercialPaintingPage | Commercial painting service details |
| `/preview/about` | AboutPage | Company story and values |
| `/preview/faq` | FAQPage | Frequently asked questions |
| `/preview/contact` | ContactPage | Contact form and info |

### Route Configuration

All internal links use the centralized route config in `src/config/routes.ts`:

```typescript
import { path, HOME_PATH, navLinks, serviceLinks } from './config/routes';

// Use path() helper for any route
<Link to={path('/contact')}>Contact</Link>

// Use HOME_PATH for logo/home links
<Link to={HOME_PATH}>Home</Link>

// Use pre-built link arrays for navigation
navLinks.map(link => <Link to={link.href}>{link.label}</Link>)
```

### File Structure

```
src/
├── components/       # Reusable UI components
│   ├── Header.tsx    # Navigation with logo swap on scroll
│   ├── Footer.tsx    # Site footer
│   ├── Hero.tsx      # Homepage hero section
│   ├── PageHero.tsx  # Reusable hero for inner pages
│   ├── Services.tsx  # Services grid section
│   ├── ThemeToggle.tsx # Dark/light mode toggle button
│   ├── SEO.tsx       # Document head management
│   └── ...
├── contexts/
│   └── ThemeContext.tsx # Theme state management
├── hooks/
│   └── useScrollAnimation.ts # GSAP scroll animations
├── pages/            # Route page components
│   ├── HomePage.tsx
│   ├── ServicesPage.tsx
│   └── ...
├── styles/
│   ├── global.css    # Global styles
│   └── design-tokens.css # CSS custom properties
└── assets/           # Images and SVGs
```

## Design System

### Typography
- Display: **Dela Gothic One** - bold, distinctive headings
- Body: **Space Grotesk** - modern, readable body text

### Color Palette
- Primary (Violet): `#7218e8` / Light mode: `#9b6dd4`
- Coral: `#e95f62`
- Blue: `#3e55fc`
- Red: `#ee4a59`
- Green: `#4bff29`
- Yellow: `#fad860`
- Orange: `#f76e1e`

### Theme System
- Theme stored in localStorage as `hoc-theme`
- `data-theme="light"` or `data-theme="dark"` attribute on `<html>`
- System preference detection via `prefers-color-scheme`
- Smooth transition effect via `.theme-transition` class
- Paintbrush icon toggle in header

### CSS Variables
All design tokens in `src/styles/design-tokens.css`:
- Colors: `--color-primary`, `--color-text-primary`, etc.
- Spacing: `--space-1` through `--space-20`
- Typography: `--text-xs` through `--text-5xl`
- Shadows: `--shadow-sm` through `--shadow-2xl`

## Key Components

### Header (`Header.tsx`)
- Fixed navigation with scroll detection
- Logo swaps between color and white versions based on scroll
- Mobile hamburger menu
- ThemeToggle button

### ThemeToggle (`ThemeToggle.tsx`)
- Paintbrush SVG icon
- Accepts `isScrolled` prop for visibility styling
- Uses ThemeContext for state

### Services (`Services.tsx`)
- Card grid with GSAP ScrollTrigger animations
- Hover effects with image zoom and card lift
- Dark mode styling with visible borders

### Footer (`Footer.tsx`)
- Dark background (hardcoded for consistency across themes)
- Contact info, service areas, quick links

## GSAP Animations

- **Hero**: Staggered reveal of headline, subhead, and CTAs
- **Services cards**: Fade up on scroll into view
- **Page transitions**: Fade effects between routes

ScrollTrigger setup requires 100ms delay to avoid race conditions with React's render cycle.

## Content Source

Business copy and service descriptions are in `website-content.md`.

## Development Notes

- Use `:global([data-theme="dark"])` selector in CSS Modules for theme-specific styles
- Pass `isScrolled` prop to components that need scroll-aware styling
- Clean up GSAP timelines and ScrollTriggers in useEffect return
