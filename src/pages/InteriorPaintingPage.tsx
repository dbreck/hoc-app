import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { ServiceDetail } from '../components/ServiceDetail';
import { CTA } from '../components/CTA';

export function InteriorPaintingPage() {
  return (
    <>
      <SEO
        title="Interior Painting Services | Haus of Color Painting | Tampa Bay"
        description="Transform your home with professional interior painting in Tampa Bay. Expert prep, premium paints, 2-year warranty. Free estimates. Call Haus of Color Painting."
      />
      <PageHero
        title="Interior Painting"
        subtitle="Transform your home's interior with professional painting that brings your vision to life."
        backgroundImage="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80"
      />
      <div className="container" style={{ paddingTop: 'var(--space-12)' }}>
        <ServiceDetail
          heroImage="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80"
          whatWePaint={[
            'Living rooms, dining rooms, bedrooms',
            'Kitchens and bathrooms',
            'Hallways, staircases, and entryways',
            'Ceilings, trim, doors, and molding',
            'Accent walls and specialty finishes',
          ]}
          process={[
            {
              title: 'Free Consultation & Estimate',
              description: 'We visit your home, discuss your goals, assess the space, and provide a detailed written estimate with no hidden costs.',
            },
            {
              title: 'Color Consultation',
              description: "Not sure which color to choose? We'll guide you through options that complement your home's style, lighting, and furnishings.",
            },
            {
              title: 'Thorough Preparation',
              description: 'Great painting starts with great prep. We fill holes, sand rough spots, caulk gaps, repair damaged drywall, and protect your floors and furniture.',
            },
            {
              title: 'Premium Application',
              description: 'Using top-quality paints and proven techniques, we apply smooth, even coats that deliver rich color and long-lasting beauty.',
            },
            {
              title: 'Final Inspection & Walkthrough',
              description: "We don't consider the job done until you're 100% satisfied. We walk through every room with you to ensure perfection.",
            },
          ]}
          benefits={[
            'Clean, straight lines and smooth finishes',
            'Proper surface preparation for long-lasting adhesion',
            'Efficient project completion with minimal disruption',
            'Expert color matching and consistency across all rooms',
          ]}
          benefitsTitle="Why Professional Interior Painting Matters"
          extraSection={{
            title: 'The Haus of Color Difference',
            content: [
              "DIY painting might seem like a money-saver, but the reality is that professional results require professional tools, materials, and expertise. Our team delivers flawless finishes that transform your living spaces.",
              "Most interior painting projects take 2-5 days, depending on the size of the space and the number of rooms. We'll provide a clear timeline during your estimate.",
            ],
          }}
        />
      </div>
      <CTA />
    </>
  );
}
