import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { ServiceDetail } from '../components/ServiceDetail';
import { CTA } from '../components/CTA';

export function CabinetRefinishingPage() {
  return (
    <>
      <SEO
        title="Cabinet Painting & Refinishing | Haus of Color Painting | Tampa Bay"
        description="Save thousands with professional cabinet painting & refinishing in Tampa Bay. Transform your kitchen or bath without replacement. Free estimates."
      />
      <PageHero
        title="Cabinet Refinishing"
        subtitle="Transform your kitchen or bathroom without the cost and hassle of a full remodel."
        backgroundImage="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80"
      />
      <div className="container" style={{ paddingTop: 'var(--space-12)' }}>
        <ServiceDetail
          heroImage="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80"
          whatWePaint={[
            'Kitchen cabinet painting',
            'Bathroom vanity refinishing',
            'Cabinet color changes',
            'Cabinet staining and clear coating',
            'Hardware installation',
          ]}
          process={[
            {
              title: 'Detailed Consultation',
              description: "We discuss your vision, color preferences, and functional needs. We'll show you samples and finishes to help you choose the perfect look.",
            },
            {
              title: 'Removal & Preparation',
              description: 'Cabinet doors and drawer fronts are carefully removed, labeled, and taken to our workspace for professional prep and painting.',
            },
            {
              title: 'Surface Cleaning & Sanding',
              description: 'All surfaces are degreased, cleaned, and sanded to ensure proper paint adhesion and a smooth finish.',
            },
            {
              title: 'Premium Coating Application',
              description: 'We use durable, high-quality paints or stains designed specifically for cabinetry—resistant to chips, scratches, and daily wear.',
            },
            {
              title: 'Reassembly & Installation',
              description: 'Once fully cured, doors and drawer fronts are reinstalled with precision, and new hardware is added if desired.',
            },
          ]}
          benefits={[
            'Factory-Quality Finish: Smooth, professional results that rival new cabinetry',
            'Durable Coatings: Paints designed to handle daily kitchen use, moisture, and cleaning',
            'Fast Turnaround: Most projects completed in 3-5 days with minimal disruption',
            'Affordable Transformation: A fraction of the cost of replacement',
          ]}
          benefitsTitle="The Haus of Color Cabinet Difference"
          extraSection={{
            title: 'Why Paint Cabinets Instead of Replacing Them?',
            content: [
              'Cabinet replacement is expensive, messy, and time-consuming. Professional cabinet painting delivers stunning results at a fraction of the cost—often saving homeowners $10,000 or more.',
              'Our cabinet refinishing process uses the same techniques and materials used by high-end cabinet manufacturers, giving you a factory-fresh look without the factory price.',
            ],
          }}
        />
      </div>
      <CTA />
    </>
  );
}
