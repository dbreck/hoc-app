import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { path } from '../config/routes';
import styles from './Services.module.css';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 'interior-painting',
    title: 'Interior Painting',
    description: 'Transform your living spaces with fresh, vibrant color. From single rooms to whole-home makeovers, we handle all the details.',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    link: path('/services/interior-painting'),
  },
  {
    id: 'exterior-painting',
    title: 'Exterior Painting',
    description: 'Boost your curb appeal and protect your home from Florida\'s sun, humidity, and storms with durable exterior coatings.',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80',
    link: path('/services/exterior-painting'),
  },
  {
    id: 'cabinet-refinishing',
    title: 'Cabinet Refinishing',
    description: 'Give your kitchen or bathroom a complete refresh without the cost of replacement. Professional-grade cabinet painting.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    link: path('/services/cabinet-refinishing'),
  },
  {
    id: 'commercial-painting',
    title: 'Commercial Painting',
    description: 'Keep your business looking sharp with reliable commercial interior and exterior painting. Minimal disruption, maximum results.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    link: path('/services/commercial-painting'),
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(`.${styles.card}`);
    if (!cards) return;

    // Small delay to ensure page transition has completed
    const timeout = setTimeout(() => {
      // Set initial state
      gsap.set(cards, { opacity: 0, y: 40 });

      gsap.to(cards, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, 100);

    return () => {
      clearTimeout(timeout);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className={`section ${styles.services}`} id="services" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.label}>What We Do</span>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            From interior refreshes to complete exterior transformations, we bring
            professional quality to every project.
          </p>
        </div>

        {/* Services Grid */}
        <div className={styles.grid} ref={gridRef}>
          {services.map((service) => (
            <article key={service.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
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
  );
}
