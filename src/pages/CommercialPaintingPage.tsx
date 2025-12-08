import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { ServiceDetail } from '../components/ServiceDetail';
import { CTA } from '../components/CTA';

export function CommercialPaintingPage() {
  return (
    <>
      <SEO
        title="Commercial Painting Services | Haus of Color Painting | Tampa Bay"
        description="Reliable commercial painting services in Tampa Bay & St. Petersburg. Minimal disruption, flexible scheduling, professional results. Free estimates."
      />
      <PageHero
        title="Commercial Painting"
        subtitle="Keep your business looking professional with reliable commercial painting services."
        backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
      />
      <div className="container" style={{ paddingTop: 'var(--space-12)' }}>
        <ServiceDetail
          heroImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80"
          whatWePaint={[
            'Office buildings and complexes',
            'Retail stores and shopping centers',
            'Restaurants and hospitality venues',
            'Medical and dental offices',
            'Warehouses and industrial facilities',
            'Property management companies and HOAs',
          ]}
          process={[
            {
              title: 'Initial Consultation & Assessment',
              description: 'We evaluate your space, discuss your business needs, timeline constraints, and provide a comprehensive estimate.',
            },
            {
              title: 'Custom Scheduling',
              description: 'We work around your business hours—evenings, weekends, or off-hours—to minimize disruption to your operations.',
            },
            {
              title: 'Professional Preparation',
              description: 'All surfaces are properly prepared, furniture and equipment are protected, and work areas are secured.',
            },
            {
              title: 'Efficient Execution',
              description: 'Our experienced team works quickly and efficiently without sacrificing quality, meeting agreed-upon deadlines.',
            },
            {
              title: 'Final Inspection & Handoff',
              description: 'We conduct a thorough walkthrough, address any concerns, and ensure your space is ready for business.',
            },
          ]}
          benefits={[
            'Minimal Disruption: We work around your schedule to keep your business running smoothly',
            'Fast, Efficient Turnaround: Time is money. We complete projects on time and on budget',
            'Professional Appearance: A fresh coat of paint signals professionalism to your customers',
            'Flexible Scheduling: Whether you need a one-time refresh or ongoing maintenance, we tailor our services to your needs',
          ]}
          benefitsTitle="Why Businesses Choose Haus of Color"
          extraSection={{
            title: 'Commercial Services We Offer',
            content: [
              'Interior office painting, exterior building painting, storefront refresh and rebranding, tenant turnover painting, and ongoing maintenance programs.',
              "First impressions matter. A fresh coat of paint signals professionalism, cleanliness, and attention to detail to your customers and clients. Let us help you make the right impression.",
            ],
          }}
        />
      </div>
      <CTA />
    </>
  );
}
