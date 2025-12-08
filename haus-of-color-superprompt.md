# Haus of Color Painting — Complete Website Build

## THE VISION

A **photography-forward** website for a professional painting contractor. This is NOT a creative agency portfolio. NOT a spa. NOT a tech startup. This is a trusted local business that paints houses for regular people—many of them older homeowners making a significant investment in their property.

**The vibe:** Confident. Established. Premium but approachable. Like a high-end home services company that's been around for 20 years (because the owner has).

**Core tension to resolve:** Bold and memorable WITHOUT sacrificing usability, readability, or trust. Grandma needs to be able to navigate this site and feel confident calling.

---

## PHASE 1: Design System & Foundation

Before writing any component code, establish:

### Typography
- **Display font:** Bold, confident, but READABLE. Not decorative. Not quirky. Think architectural signage, not festival poster.
- **Body font:** Clean, generous x-height, comfortable at 16-18px. Older eyes need to read this.
- **Hierarchy:** Clear distinction between H1 → H2 → H3 → body. No ambiguity.

### Color System
Pull from the logo but use restraint:
- **Primary backgrounds:** White, warm off-white, light warm gray
- **Accent colors:** Logo purple, green, orange as ACCENTS—not full-bleed section backgrounds
- **Text:** Near-black on light backgrounds. High contrast always.

### Photography Strategy
This is a photography-heavy site. Use Unsplash images with these search terms:
- "house exterior painted" 
- "home interior living room"
- "painter working" or "house painting contractor"
- "beautiful home exterior"
- "kitchen cabinets painted"

Mark each image with a comment: `<!-- REPLACE: [description of final photo needed] -->`

Photography should feel:
- Bright, natural light
- Real homes (not mansions, not staged catalog perfection)
- Florida/Southern aesthetic where possible (palm trees, stucco, bright sun)

---

## PHASE 2: Layout Architecture

### Navigation
- Fixed top nav, clean and minimal
- Logo left, links center or right
- Prominent "Call" or "Get Estimate" button—always visible
- Mobile: hamburger menu with full-screen overlay

### Homepage Structure
1. **Hero:** Full-width photography with overlay text. Show a beautiful painted home. Headlines should be benefit-focused, not clever.
2. **Trust bar:** Licensed & Insured • 20+ Years Experience • 2-Year Warranty • Free Estimates
3. **Services grid:** 4 services with photos, short descriptions, links to detail
4. **About preview:** Photo of Lillian (placeholder), brief story, link to full About
5. **Why choose us:** 3-4 value props with icons or imagery
6. **Service area:** List of cities served, possibly a simple map graphic
7. **CTA section:** Strong call to action with phone number and form link
8. **Footer:** Contact info, nav links, service area, business hours

### Inner Pages
- **Services pages:** Hero image, clear process steps, what's included, CTA
- **About:** Lillian's story, company values, credentials
- **FAQ:** Accordion style, organized by category
- **Contact:** Form, phone, email, service area, hours

---

## PHASE 3: Build Core Components

Build these as reusable React components with TypeScript:

1. `Header` — Fixed nav with scroll behavior
2. `Hero` — Full-width image with text overlay, flexible for each page
3. `ServiceCard` — Photo, title, brief description, link
4. `TrustBar` — Horizontal strip of trust signals
5. `SectionHeader` — Consistent section title treatment
6. `FAQ` — Accordion component
7. `ContactForm` — Full form with validation
8. `Footer` — Complete footer
9. `Button` — Primary and secondary variants
10. `Container` — Max-width wrapper with consistent padding

---

## PHASE 4: GSAP Animation Layer

Use GSAP (import from CDN or npm) for:

### Page Load
- Staggered fade-up for hero elements (image first, then headline, then subhead, then CTA)
- Trust bar slides in from bottom

### Scroll Animations
- Sections fade and slide up as they enter viewport (use ScrollTrigger)
- Service cards stagger in
- Stats or numbers count up when visible

### Micro-interactions
- Button hover: subtle scale + shadow
- Nav links: underline slides in
- Cards: lift on hover

### Page Transitions (if using React Router)
- Fade out current page, fade in new page
- Keep transitions FAST (300ms max)—don't make users wait

**Animation principles:**
- Nothing should delay content visibility on initial load
- All animations should feel quick and confident, not floaty
- Easing: power2.out or power3.out—snappy, not bouncy
- Duration: 0.3-0.6s for most elements

---

## PHASE 5: Responsive & Polish

### Breakpoints
- Mobile: 0-768px
- Tablet: 768-1024px  
- Desktop: 1024px+

### Mobile Priorities
- Touch-friendly tap targets (min 44px)
- Phone number is tap-to-call
- Form is easy to complete on mobile
- Images scale appropriately, don't crop important content

### Accessibility
- All images have descriptive alt text
- Form inputs have visible labels
- Focus states are visible
- Color contrast meets WCAG AA
- Semantic HTML throughout

### Performance
- Lazy load images below the fold
- Optimize image sizes
- Minimize layout shift

---

## ASSETS

**Logo files:** `~/DB/Huas of Color Painting/Logo Final/`
- `hoc-logo-horiz.svg` — Horizontal, for navigation
- `hoc-logo-final.svg` — Stacked version

**Content:** `website-content.md` in project folder

**Tech Stack:** React 19 + TypeScript + Vite

---

## WHAT SUCCESS LOOKS LIKE

A 55-year-old homeowner in St. Petersburg lands on this site from a Google search. Within 5 seconds they understand:
- This is a painting company
- They serve my area
- They look professional and established
- I can easily call or request a quote

The site feels premium but not pretentious. Confident but not aggressive. The photography makes them imagine their own home looking that good. They call.

---

## BEGIN

Start with Phase 1. Show me the design system decisions (fonts, colors, photography direction) before building. Then proceed through phases sequentially.
