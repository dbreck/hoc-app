import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './Hero.module.css';
import heroImage from '../assets/hero-house.webp';

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bgImage = heroRef.current?.querySelector(`.${styles.bgImage}`);
    const headline = headlineRef.current;
    const subhead = subheadRef.current;
    const ctas = ctasRef.current?.children;

    if (!bgImage || !headline || !subhead || !ctas) return;

    // Page load animation timeline
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    tl.fromTo(
      bgImage,
      { scale: 1.1, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1 }
    )
      .fromTo(
        headline,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        subhead,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5 },
        '-=0.3'
      )
      .fromTo(
        ctas,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
        '-=0.2'
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      {/* Background Image */}
      <div className={styles.background}>
        <img
          src={heroImage}
          alt="Beautiful painted home exterior"
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <div className={styles.textBlock}>
          <h1 className={styles.headline} ref={headlineRef}>
            Your Home Deserves Color That Lasts
          </h1>
          <p className={styles.subheadline} ref={subheadRef}>
            Professional residential and commercial painting for Tampa Bay and St. Petersburg.
            Expert prep work, premium finishes, and honest communication from start to finish.
          </p>
          <div className={styles.ctas} ref={ctasRef}>
            <a href="#contact" className={styles.primaryCta}>
              Get a Free Estimate
            </a>
            <a href="tel:727-266-8012" className={styles.secondaryCta}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              727-266-8012
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
