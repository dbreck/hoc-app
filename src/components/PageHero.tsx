import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import styles from './PageHero.module.css';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function PageHero({ title, subtitle, backgroundImage }: PageHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.5 }
      );
    }

    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4 },
        '-=0.2'
      );
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.background}>
        {backgroundImage && (
          <img
            src={backgroundImage}
            alt=""
            className={styles.bgImage}
            aria-hidden="true"
          />
        )}
        <div className={styles.overlay}></div>
      </div>
      <div className={`container ${styles.content}`}>
        <h1 className={styles.title} ref={titleRef}>
          {title}
        </h1>
        {subtitle && (
          <p className={styles.subtitle} ref={subtitleRef}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
