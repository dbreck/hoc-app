import { SEO } from '../components/SEO';
import { Hero } from '../components/Hero';
import { TrustBar } from '../components/TrustBar';
import { Services } from '../components/Services';
import { About } from '../components/About';
import { WhyChoose } from '../components/WhyChoose';
import { ServiceArea } from '../components/ServiceArea';
import { CTA } from '../components/CTA';

export function HomePage() {
  return (
    <>
      <SEO
        title="Haus of Color Painting | Professional Painting in Tampa Bay & St. Petersburg"
        description="Professional residential and commercial painting in Tampa Bay & St. Petersburg. Expert prep, premium finishes, 2-year warranty. Licensed & insured. Free estimates."
      />
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <WhyChoose />
      <ServiceArea />
      <CTA />
    </>
  );
}
