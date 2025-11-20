import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const CommercialPainting: React.FC = () => {
  return (
    <ServiceLayout
      title="Commercial Painting"
      subtitle="Keep your business looking professional with reliable commercial painting services."
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
      ctaText="Get Your Commercial Estimate"
      whatWeDo={[
        "Office buildings and complexes",
        "Retail stores and shopping centers",
        "Restaurants and hospitality venues",
        "Warehouses and industrial facilities",
        "Property management companies and HOAs"
      ]}
      whyMattersTitle="Why Businesses Choose Haus"
      whyMattersContent={[
        "Minimal Disruption: Evening/weekend work available.",
        "Fast Turnaround: On time and on budget.",
        "Professional Appearance: First impressions matter.",
        "Flexible Scheduling: Tailored to your business needs."
      ]}
      process={[
        {
          title: "Consultation & Scheduling",
          desc: "We assess your facility and create a schedule that works around your business hours to minimize downtime."
        },
        {
          title: "Site Protection",
          desc: "We mask off all areas not being painted and cover furniture/equipment to ensure your assets are protected."
        },
        {
          title: "Efficient Execution",
          desc: "Our experienced crews work efficiently using commercial-grade equipment to complete large areas quickly."
        },
        {
          title: "Safety Compliance",
          desc: "We adhere to all safety regulations and standards to ensure a safe working environment for your staff and our team."
        },
        {
          title: "Final Handover",
          desc: "We walk through the completed project with you to ensure it meets your standards before we sign off."
        }
      ]}
    />
  );
};

export default CommercialPainting;