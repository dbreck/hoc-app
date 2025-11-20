import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const InteriorPainting: React.FC = () => {
  return (
    <ServiceLayout
      title="Residential Interior Painting"
      subtitle="Transform your home's interior with professional painting that brings your vision to life."
      heroImage="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80"
      ctaText="Get Your Free Interior Estimate"
      whatWeDo={[
        "Living rooms, dining rooms, bedrooms",
        "Kitchens and bathrooms",
        "Hallways, staircases, and entryways",
        "Ceilings, trim, doors, and molding",
        "Accent walls and specialty finishes"
      ]}
      whyMattersTitle="Why Professional Interior Painting Matters"
      whyMattersContent={[
        "DIY painting might seem like a money-saver, but professional results require professional tools.",
        "Clean, straight lines and smooth finishes.",
        "Proper surface preparation for long-lasting adhesion.",
        "Expert color matching and consistency across all rooms."
      ]}
      process={[
        {
          title: "Free Consultation & Estimate",
          desc: "We visit your home, discuss your goals, assess the space, and provide a detailed written estimate with no hidden costs."
        },
        {
          title: "Color Consultation",
          desc: "Not sure which color to choose? We'll guide you through options that complement your home's style, lighting, and furnishings."
        },
        {
          title: "Thorough Preparation",
          desc: "Great painting starts with great prep. We fill holes, sand rough spots, caulk gaps, repair damaged drywall, and protect your floors and furniture."
        },
        {
          title: "Premium Application",
          desc: "Using top-quality paints and proven techniques, we apply smooth, even coats that deliver rich color and long-lasting beauty."
        },
        {
          title: "Final Inspection & Walkthrough",
          desc: "We don't consider the job done until you're 100% satisfied. We walk through every room with you to ensure perfection."
        }
      ]}
    />
  );
};

export default InteriorPainting;