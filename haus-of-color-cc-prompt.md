# Claude Code Prompt: Haus of Color Painting Website

## Project Brief

Create a complete website for **Haus of Color Painting LLC**, a residential and commercial painting company launching in Tampa Bay, Florida.

## Business Context

- **Owner:** Lillian Haus — 20+ years painting experience, former foreman for a leading Tampa Bay painting contractor
- **Service Area:** Tampa Bay, St. Petersburg, Clearwater, Largo, Seminole, Pinellas Park, Dunedin, Gulfport, South Pasadena
- **Services:** Interior painting, exterior painting, cabinet refinishing, commercial painting
- **Target Audience:** Homeowners 35-65, property managers, small commercial clients
- **Brand Personality:** Professional but approachable, expert craftsmanship, Florida-native knowledge (hurricane prep, UV exposure, humidity, salt air)

## Assets

**Logo files located at:** `~/DB/Huas of Color Painting/Logo Final/`

- `hoc-logo-horiz.svg` — Horizontal version, ideal for top-left navigation placement
- `hoc-logo-final.svg` — Square version with artwork stacked above text

**Logo description:** Colorful paintbrush with house silhouette, dripping paint in vibrant purple, green, red, blue, and orange. Text reads "HAUS OF COLOR PAINTING LLC" with gradient purple-to-red treatment.

## Tech Stack

- React 19 + TypeScript + Vite
- Deploying to Cloudflare Pages
- Domain: hausofcolor.com

## Design Direction

Create something **distinctive** that avoids generic contractor/painting website templates. 

The logo features vibrant, playful colors—let that inform the palette while maintaining professionalism appropriate for a service business.

**Aesthetic inspiration:** Geometric / Art Deco Modern — the dripping paint shapes in the logo suggest bold geometric forms. Think confident lines, intentional shapes, strong visual rhythm. Not retro pastiche, but modern interpretation of art deco principles: symmetry with purpose, decorative elements that feel structural, typography as graphic element.

**Avoid:**
- Generic contractor website templates
- Purple gradients on white backgrounds (the "AI slop" look)
- Inter, Roboto, Arial, system fonts
- Cookie-cutter card layouts
- Stock photo aesthetic

## Site Structure

Build complete pages for:
1. **Homepage** — Hero, value propositions, services overview, trust signals, CTA
2. **About** — Lillian's story, company values, differentiators
3. **Services** (can be single page with sections or separate pages):
   - Residential Interior Painting
   - Residential Exterior Painting
   - Cabinet Painting & Refinishing
   - Commercial Painting
4. **FAQ** — Common questions with Florida-specific content
5. **Contact** — Form, phone, email, service area map/list

## Requirements

- Fully responsive (mobile-first)
- Contact form with fields: Name, Phone, Email, Address, Project Type (dropdown), Message, Preferred Contact Method
- Smooth scroll navigation
- Entrance animations / page load reveals
- Hover states with intention
- Accessible (ARIA labels, focus states, sufficient contrast)
- SEO-friendly semantic HTML

## Content

All website copy is provided in `website-content.md` in this project folder. This includes:
- Homepage sections (hero, value props, services overview, CTAs)
- About page copy
- All service page content
- FAQ questions and answers
- Contact page copy
- SEO meta descriptions

Use this content verbatim for the site—it's already optimized for local SEO and the target audience.

---

**Begin by:**
1. Reviewing the logo files to understand the brand's color palette
2. Committing to a bold aesthetic direction
3. Proposing typography choices (display + body fonts)
4. Building out the complete site
