import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { Contact } from '../components/Contact';
import { ServiceArea } from '../components/ServiceArea';

export function ContactPage() {
  return (
    <>
      <SEO
        title="Contact Us | Haus of Color Painting | Tampa Bay"
        description="Get a free painting estimate in Tampa Bay & St. Petersburg. Call 727-266-8012 or fill out our contact form. Haus of Color Painting - Licensed & Insured."
      />
      <PageHero
        title="Contact Us"
        subtitle="Ready to transform your space? Let's start your project."
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
      />
      <Contact />
      <ServiceArea />
    </>
  );
}
