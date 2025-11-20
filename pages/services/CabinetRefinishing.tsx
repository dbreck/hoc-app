import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const CabinetRefinishing: React.FC = () => {
  return (
    <ServiceLayout
      title="Cabinet Painting & Refinishing"
      subtitle="Transform your kitchen or bathroom without the cost and hassle of a full remodel."
      heroImage="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80"
      ctaText="Get Your Free Cabinet Estimate"
      whatWeDo={[
        "Kitchen cabinet painting",
        "Bathroom vanity refinishing",
        "Cabinet color changes",
        "Cabinet staining and clear coating",
        "Hardware installation"
      ]}
      whyMattersTitle="The Haus of Color Difference"
      whyMattersContent={[
        "Factory-Quality Finish: Smooth results that rival new cabinetry.",
        "Durable Coatings: Resistant to chips, scratches, and moisture.",
        "Fast Turnaround: Most projects completed in 3-5 days.",
        "Affordable Transformation: Save $10,000+ compared to replacement."
      ]}
      process={[
        {
          title: "Detailed Consultation",
          desc: "We discuss your vision, color preferences, and functional needs. We'll show you samples and finishes to help you choose the perfect look."
        },
        {
          title: "Removal & Preparation",
          desc: "Cabinet doors and drawer fronts are carefully removed, labeled, and taken to our workspace for professional prep and painting."
        },
        {
          title: "Surface Cleaning & Sanding",
          desc: "All surfaces are degreased, cleaned, and sanded to ensure proper paint adhesion and a smooth finish."
        },
        {
          title: "Premium Coating Application",
          desc: "We use durable, high-quality paints or stains designed specifically for cabinetry—resistant to chips, scratches, and daily wear."
        },
        {
          title: "Reassembly & Installation",
          desc: "Once fully cured, doors and drawer fronts are reinstalled with precision, and new hardware is added if desired."
        }
      ]}
    />
  );
};

export default CabinetRefinishing;