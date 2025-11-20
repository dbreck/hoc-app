import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const ExteriorPainting: React.FC = () => {
  return (
    <ServiceLayout
      title="Residential Exterior Painting"
      subtitle="Boost your home's curb appeal and protect it from Florida's harsh elements with professional exterior painting."
      heroImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
      ctaText="Get Your Free Exterior Estimate"
      whatWeDo={[
        "Wood, vinyl, stucco, and fiber cement siding",
        "Trim, shutters, and fascia",
        "Doors, railings, and decks",
        "Fences and gates",
        "Pool cages and screen enclosures"
      ]}
      whyMattersTitle="Florida-Specific Expertise"
      whyMattersContent={[
        "Hurricane Season Prep: Paints that hold up to wind and rain.",
        "Intense Sun Exposure: UV-resistant coatings protect against fading and chalking.",
        "High Humidity & Mold: Mildew-resistant primers keep your home fresh.",
        "Salt Air Corrosion: Specialized coatings for coastal homes."
      ]}
      process={[
        {
          title: "Comprehensive Surface Inspection",
          desc: "We inspect all exterior surfaces for damage, rot, mildew, or peeling paint that needs attention before painting begins."
        },
        {
          title: "Pressure Washing & Surface Prep",
          desc: "Every surface is thoroughly pressure washed to remove dirt, mildew, and loose paint. We then scrape, sand, and prime as needed."
        },
        {
          title: "Repairs & Caulking",
          desc: "Gaps, cracks, and damaged wood are repaired and caulked to prevent water intrusion and ensure a smooth, sealed finish."
        },
        {
          title: "Premium Paint Application",
          desc: "We use high-quality exterior paints designed to withstand UV rays, humidity, salt air, and Florida's unpredictable weather."
        },
        {
          title: "Final Walkthrough & Cleanup",
          desc: "Once complete, we walk the property with you, address any touch-ups, and leave your home looking immaculate."
        }
      ]}
    />
  );
};

export default ExteriorPainting;