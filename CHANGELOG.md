# Changelog

All notable changes to the Haus of Color website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-12-08

### Added

- **Multi-page React Router setup** with 9 routes:
  - `/` - Homepage with hero, services preview, about, FAQ, contact sections
  - `/services` - Services overview page
  - `/services/interior-painting` - Interior painting service details
  - `/services/exterior-painting` - Exterior painting service details
  - `/services/cabinet-refinishing` - Cabinet refinishing service details
  - `/services/commercial-painting` - Commercial painting service details
  - `/about` - About page with company story
  - `/faq` - FAQ page with expandable questions
  - `/contact` - Contact page with form

- **Dark mode support** with:
  - Paintbrush toggle button in header
  - localStorage persistence (`hoc-theme` key)
  - System preference detection via `prefers-color-scheme`
  - Smooth theme transition animations
  - Complete dark theme color palette

- **GSAP animations**:
  - Hero section: staggered reveal of headline, subhead, and CTAs
  - Services cards: scroll-triggered fade-up animations
  - Page transitions between routes

- **Responsive design**:
  - Mobile hamburger menu
  - Fluid typography and spacing
  - Optimized layouts for all screen sizes

- **SEO component** for managing document head per page

- **PageHero component** for consistent inner page headers

- **ThemeContext** for global theme state management

### Components

- Header with scroll-aware logo swap (color/white versions)
- Footer with dark background (consistent across themes)
- Hero section with local hero image
- Services grid with hover effects
- Contact form
- FAQ accordion
- About section
- Trust bar with credentials
- Service area coverage
- CTA sections

### Technical

- React 19 + TypeScript + Vite
- React Router DOM v7
- CSS Modules with design tokens
- GSAP + ScrollTrigger
- Cloudflare Pages deployment ready
