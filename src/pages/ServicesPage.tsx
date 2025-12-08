import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { CTA } from '../components/CTA';
import styles from './ServicesPage.module.css';

const services = [
  {
    id: 'interior-painting',
    title: 'Interior Painting',
    description: 'Transform your living spaces with fresh, vibrant color. From single rooms to whole-home makeovers, we handle all the details.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    link: '/services/interior-painting',
  },
  {
    id: 'exterior-painting',
    title: 'Exterior Painting',
    description: "Boost your curb appeal and protect your home from Florida's sun, humidity, and storms with durable exterior coatings.",
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    link: '/services/exterior-painting',
  },
  {
    id: 'cabinet-refinishing',
    title: 'Cabinet Refinishing',
    description: 'Give your kitchen or bathroom a complete refresh without the cost of replacement. Professional-grade cabinet painting.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    link: '/services/cabinet-refinishing',
  },
  {
    id: 'commercial-painting',
    title: 'Commercial Painting',
    description: 'Keep your business looking sharp with reliable commercial interior and exterior painting. Minimal disruption, maximum results.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    link: '/services/commercial-painting',
  },
];

export function ServicesPage() {
  return (
    <>
      <SEO
        title="Our Painting Services | Haus of Color Painting"
        description="Professional painting services in Tampa Bay: interior painting, exterior painting, cabinet refinishing, and commercial painting. Free estimates."
      />
      <PageHero
        title="Our Services"
        subtitle="From interior refreshes to complete exterior transformations, we bring professional quality to every project."
        backgroundImage="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920&q=80"
      />

      <section className={`section ${styles.services}`}>
        <div className="container">
          <div className={styles.grid}>
            {services.map((service) => (
              <article key={service.id} className={styles.card}>
                <div className={styles.imageWrap}>
                  <img src={service.image} alt={service.title} loading="lazy" />
                </div>
                <div className={styles.cardContent}>
                  <h2 className={styles.cardTitle}>{service.title}</h2>
                  <p className={styles.cardDesc}>{service.description}</p>
                  <Link to={service.link} className={styles.cardLink}>
                    Learn More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
