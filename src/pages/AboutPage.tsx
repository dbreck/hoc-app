import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SEO } from '../components/SEO';
import { PageHero } from '../components/PageHero';
import { CTA } from '../components/CTA';
import styles from './AboutPage.module.css';

gsap.registerPlugin(ScrollTrigger);

const commitments = [
  {
    title: 'Clear Communication',
    description: "You'll always know what's happening, when it's happening, and why.",
  },
  {
    title: 'Respect for Your Property',
    description: 'We protect your belongings, clean up daily, and treat your home or business like our own.',
  },
  {
    title: 'On-Time, On-Budget',
    description: 'We provide accurate estimates and stick to agreed-upon timelines.',
  },
  {
    title: 'Premium Results',
    description: "We don't cut corners. Ever.",
  },
];

const differentiators = [
  {
    title: 'Experience You Can Trust',
    description: "With 20+ years in the painting industry, we've seen it all: challenging weather conditions, complex surface prep, intricate color matching, and tight deadlines. That depth of experience means we can anticipate issues before they become problems and deliver results that exceed expectations.",
  },
  {
    title: 'Foreman-Level Quality on Every Job',
    description: "At Haus of Color, you're not getting a crew supervised by someone learning on the job. You're getting foreman-level expertise applied to every detail—from surface preparation to final touch-ups.",
  },
  {
    title: 'Built for Central Florida',
    description: "We understand the unique demands of painting in Florida's climate: intense UV exposure, high humidity, salt air, and hurricane season. Every project is approached with this local knowledge in mind, ensuring finishes that look great and last.",
  },
  {
    title: 'Your Satisfaction Is Our Reputation',
    description: "As a locally owned and operated business, our reputation is everything. We're not a faceless franchise—we're your neighbors, and we're invested in delivering work we're proud to stand behind.",
  },
];

export function AboutPage() {
  const storyRef = useRef<HTMLDivElement>(null);
  const diffsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = diffsRef.current?.querySelectorAll(`.${styles.diffCard}`);
    if (cards) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: diffsRef.current,
            start: 'top 75%',
          },
        }
      );
    }
  }, []);

  return (
    <>
      <SEO
        title="About Us | Haus of Color Painting | Tampa Bay"
        description="Meet Haus of Color Painting—Tampa Bay's trusted painting professionals. 20+ years experience, foreman-level quality, local expertise. Learn our story."
      />
      <PageHero
        title="About Us"
        subtitle="Built on craft, driven by quality"
        backgroundImage="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&q=80"
      />

      {/* Our Story */}
      <section className={`section ${styles.story}`} ref={storyRef}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyImage}>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Professional painter at work"
                loading="lazy"
              />
              <div className={styles.badge}>
                <span className={styles.badgeNumber}>20+</span>
                <span className={styles.badgeText}>Years Experience</span>
              </div>
            </div>
            <div className={styles.storyContent}>
              <h2 className={styles.sectionTitle}>Our Story</h2>
              <p>
                <strong>Haus of Color Painting LLC</strong> was founded by Lillian Haus, a seasoned painting professional with over two decades of hands-on experience transforming homes and businesses across central Florida.
              </p>
              <p>
                After years as a trusted foreman for one of Tampa Bay's leading painting contractors, Lillian saw an opportunity to build something different—a company where quality craftsmanship, honest communication, and customer respect aren't just promises, they're the foundation of every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className={`section ${styles.differentiators}`}>
        <div className="container">
          <h2 className={styles.sectionTitleCenter}>What Makes Us Different</h2>
          <div className={styles.diffGrid} ref={diffsRef}>
            {differentiators.map((diff, index) => (
              <div key={index} className={styles.diffCard}>
                <h3 className={styles.diffTitle}>{diff.title}</h3>
                <p className={styles.diffDesc}>{diff.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className={`section ${styles.commitment}`}>
        <div className="container">
          <h2 className={styles.sectionTitleCenter}>Our Commitment to You</h2>
          <div className={styles.commitGrid}>
            {commitments.map((item, index) => (
              <div key={index} className={styles.commitCard}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <div>
                  <h3 className={styles.commitTitle}>{item.title}</h3>
                  <p className={styles.commitDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Lillian */}
      <section className={`section ${styles.founder}`}>
        <div className="container">
          <div className={styles.founderGrid}>
            <div className={styles.founderContent}>
              <h2 className={styles.sectionTitle}>Meet Lillian Haus</h2>
              <p className={styles.founderRole}>Owner & Lead Painter</p>
              <p>
                Lillian brings a rare combination of technical skill, leadership experience, and genuine care for every client. Before launching Haus of Color Painting, she spent years leading crews on high-end residential and commercial projects, earning a reputation for exceptional craftsmanship and reliability.
              </p>
              <p>
                As a Central Florida native, Lillian understands the unique challenges of painting in our climate and brings that local expertise to every project.
              </p>
            </div>
            <div className={styles.founderImage}>
              {/* REPLACE: Professional photo of Lillian */}
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                alt="Lillian Haus, Owner of Haus of Color Painting"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
