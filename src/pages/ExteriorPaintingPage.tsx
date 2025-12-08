import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { ServiceDetail } from '../components/ServiceDetail';
import { CTA } from '../components/CTA';

export function ExteriorPaintingPage() {
  return (
    <>
      <SEO
        title="Exterior Painting Services | Haus of Color Painting | Tampa Bay"
        description="Boost curb appeal with expert exterior painting in St. Petersburg & Tampa Bay. UV-resistant coatings, thorough prep, licensed & insured. Free estimates."
      />
      <PageHero
        title="Exterior Painting"
        subtitle="Boost your home's curb appeal and protect it from Florida's harsh elements with professional exterior painting."
        backgroundImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80"
      />
      <div className="container" style={{ paddingTop: 'var(--space-12)' }}>
        <ServiceDetail
          heroImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
          whatWePaint={[
            'Wood, vinyl, stucco, and fiber cement siding',
            'Trim, shutters, and fascia',
            'Doors, railings, and decks',
            'Fences and gates',
            'Pool cages and screen enclosures',
          ]}
          process={[
            {
              title: 'Comprehensive Surface Inspection',
              description: 'We inspect all exterior surfaces for damage, rot, mildew, or peeling paint that needs attention before painting begins.',
            },
            {
              title: 'Pressure Washing & Surface Prep',
              description: 'Every surface is thoroughly pressure washed to remove dirt, mildew, and loose paint. We then scrape, sand, and prime as needed.',
            },
            {
              title: 'Repairs & Caulking',
              description: 'Gaps, cracks, and damaged wood are repaired and caulked to prevent water intrusion and ensure a smooth, sealed finish.',
            },
            {
              title: 'Premium Paint Application',
              description: "We use high-quality exterior paints designed to withstand UV rays, humidity, salt air, and Florida's unpredictable weather.",
            },
            {
              title: 'Final Walkthrough & Cleanup',
              description: 'Once complete, we walk the property with you, address any touch-ups, and leave your home looking immaculate.',
            },
          ]}
          benefits={[
            'Hurricane Season: We schedule projects strategically and use paints that hold up to wind and rain',
            'Intense Sun Exposure: UV-resistant coatings protect against fading and chalking',
            'High Humidity & Mold: Mildew-resistant primers and paints keep your home looking fresh longer',
            'Salt Air Corrosion: We select coatings that resist salt damage for coastal homes',
          ]}
          benefitsTitle="Florida-Specific Exterior Painting Expertise"
          extraSection={{
            title: "Increase Your Home's Value",
            content: [
              "A professional exterior paint job can add thousands of dollars to your home's resale value while making it the envy of the neighborhood.",
              "Exterior projects typically take 3-7 days, depending on the size and complexity of the home. Weather can impact timelines, but we'll keep you updated throughout the process.",
              "The best time for exterior painting in Florida is during the cooler, drier months—typically October through May. However, we can work year-round with proper planning around weather conditions.",
            ],
          }}
        />
      </div>
      <CTA />
    </>
  );
}
