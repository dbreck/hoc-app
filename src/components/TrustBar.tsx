import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './TrustBar.module.css';

const trustItems = [
  { icon: '🛡️', text: 'Licensed & Insured' },
  { icon: '⭐', text: '20+ Years Experience' },
  { icon: '✓', text: '2-Year Warranty' },
  { icon: '📋', text: 'Free Estimates' },
];

export function TrustBar() {
  const barRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const items = barRef.current?.querySelectorAll(`.${styles.item}`);
    if (!items) return;

    // Slide up from below after hero animation
    gsap.fromTo(
      items,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        stagger: 0.08,
        ease: 'power2.out',
        delay: 0.8, // After hero animation
      }
    );
  }, []);

  return (
    <section className={styles.trustBar} ref={barRef}>
      <div className={`container ${styles.inner}`}>
        {trustItems.map((item, index) => (
          <div key={index} className={styles.item}>
            <span className={styles.icon} aria-hidden="true">{item.icon}</span>
            <span className={styles.text}>{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
