# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

React 19 + TypeScript + Vite single-page application for Haus of Color Painting, a Tampa Bay painting company. This is a marketing website showcasing services (interior/exterior painting, cabinet refinishing, commercial painting) with contact forms and company information.

## Tech Stack

- **Framework**: React 19.2.0 with TypeScript 5.8.2
- **Build Tool**: Vite 6.2.0
- **Routing**: React Router DOM 7.9.6 (HashRouter)
- **Styling**: Tailwind CSS (CDN) with custom brand colors
- **Icons**: Lucide React 0.554.0

## Development Commands

```bash
npm install        # Install dependencies
npm run dev        # Start dev server (port 3000, host 0.0.0.0)
npm run build      # Build for production
npm run preview    # Preview production build locally
```

**Note**: No test, lint, or format commands are configured in this project.

## High-Level Architecture

### Entry Point Flow
1. `/index.html` - HTML entry with Tailwind CDN config and import maps
2. `/index.tsx` - React bootstrap, renders App into #root
3. `/App.tsx` - HashRouter setup and route definitions

### Directory Structure
- `/pages/` - Page-level components (Home, About, Contact, FAQ, services/*)
- `/components/` - Reusable UI components (Layout, ServiceLayout, SectionHeader, TestimonialCard)
- `/public/` - Static assets including `_redirects` for SPA hosting

### Key Architectural Patterns

**Layout Pattern**:
- `Layout.tsx` component wraps all pages via React Router's `<Outlet />`
- Provides sticky header with responsive navigation (desktop dropdown menus, mobile hamburger)
- Consistent footer across all pages

**Service Page Pattern**:
- All service pages (`/pages/services/*`) use the `ServiceLayout` component
- Props-driven content structure: title, subtitle, heroImage, process steps, benefits
- Consistent sections: Hero → What We Cover → Process Steps → CTA
- Keeps service pages DRY with minimal code duplication

**Routing Strategy**:
- Uses `HashRouter` (not BrowserRouter) for client-side routing
- Custom `ScrollToTop` component ensures pages start at top on navigation
- `_redirects` file in public folder for deployment to Netlify/similar hosts

### Styling Conventions

**Brand Colors** (defined in index.html Tailwind config):
- Purple (`#7C3AED`) - Primary brand color
- Orange (`#F97316`) - Accent/CTA color
- Green (`#10B981`) - Success states
- Light Purple (`#F5F3FF`) - Background tints

**Common Patterns**:
- Utility-first Tailwind approach with responsive breakpoints (md:, lg:)
- Rounded corners: `rounded-2xl`, `rounded-full`
- Shadows for depth: `shadow-lg`, `shadow-xl`
- Smooth transitions: `transition-all`, `transition-colors`

### Configuration

**Path Alias**: `@/*` maps to project root (configured in vite.config.ts)

**Vite Server**: Runs on port 3000 with host 0.0.0.0 (allows external access)

**TypeScript**: All components use TypeScript with React.FC types and interface definitions for props

## Important Context

**Contact Form**: The contact form in `/pages/Contact.tsx` currently uses a simulated submission with `setTimeout`. This needs backend integration for real form handling.

**Images**: All images are external URLs from Unsplash/Pexels. There are no local image assets in the repository.

**HashRouter Limitation**: Using HashRouter instead of BrowserRouter means URLs have `#` in them (e.g., `/#/about`). This approach works without server configuration but is not SEO-friendly.

**API Key Reference**: The README mentions `GEMINI_API_KEY` from the original AI Studio template, but this key is not actively used in the application code.

## Routes

```
/ (Home)
├── /about
├── /faq
├── /contact
└── /services/
    ├── /interior
    ├── /exterior
    ├── /cabinets
    └── /commercial
```
