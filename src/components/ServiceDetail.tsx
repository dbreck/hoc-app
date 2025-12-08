import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './ServiceDetail.module.css';

gsap.registerPlugin(ScrollTrigger);

interface ProcessStep {
  title: string;
  description: string;
}

interface ServiceDetailProps {
  heroImage: string;
  whatWePaint?: string[];
  process: ProcessStep[];
  benefits: string[];
  benefitsTitle?: string;
  extraSection?: {
    title: string;
    content: string[];
  };
}

export function ServiceDetail({
  heroImage,
  whatWePaint,
  process,
  benefits,
  benefitsTitle = 'Why Choose Us',
  extraSection,
}: ServiceDetailProps) {
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const steps = processRef.current?.querySelectorAll(`.${styles.step}`);
    if (!steps) return;

    gsap.fromTo(
      steps,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: processRef.current,
          start: 'top 75%',
        },
      }
    );
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Image */}
      <section className={styles.heroImage}>
        <img src={heroImage} alt="" loading="eager" />
      </section>

      {/* What We Paint */}
      {whatWePaint && whatWePaint.length > 0 && (
        <section className={`section ${styles.whatWePaint}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>What We Paint</h2>
            <ul className={styles.paintList}>
              {whatWePaint.map((item, index) => (
                <li key={index}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Our Process */}
      <section className={`section ${styles.process}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Our Process</h2>
          <div className={styles.processGrid} ref={processRef}>
            {process.map((step, index) => (
              <div key={index} className={styles.step}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className={`section ${styles.benefits}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>{benefitsTitle}</h2>
          <ul className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <li key={index}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Extra Section (optional) */}
      {extraSection && (
        <section className={`section ${styles.extra}`}>
          <div className="container">
            <h2 className={styles.sectionTitle}>{extraSection.title}</h2>
            <div className={styles.extraContent}>
              {extraSection.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Warranty */}
      <section className={styles.warranty}>
        <div className="container">
          <div className={styles.warrantyCard}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <div>
              <h3 className={styles.warrantyTitle}>2-Year Workmanship Warranty</h3>
              <p className={styles.warrantyText}>
                We stand behind our work. Most residential projects include a 2-year warranty on workmanship.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
