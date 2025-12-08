import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { FAQ } from '../components/FAQ';
import { CTA } from '../components/CTA';

export function FAQPage() {
  return (
    <>
      <SEO
        title="Frequently Asked Questions | Haus of Color Painting | Tampa Bay"
        description="Get answers to common questions about painting services in Tampa Bay. Learn about costs, timelines, paint types, and our process. Haus of Color Painting."
      />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Get answers to common questions about our painting services"
        backgroundImage="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920&q=80"
      />
      <FAQ />
      <CTA />
    </>
  );
}
