import styles from './CTA.module.css';

export function CTA() {
  return (
    <section className={styles.cta} id="contact">
      {/* Background Image */}
      {/* REPLACE: Beautiful painted home or painted room, warm lighting */}
      <div className={styles.background}>
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80"
          alt="Beautifully painted home interior"
        />
        <div className={styles.overlay}></div>
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.inner}>
          <h2 className={styles.title}>
            Ready to Bring New Life to Your Space?
          </h2>
          <p className={styles.subtitle}>
            Whether you're preparing to sell, moving into a new home, or simply ready
            for a change, Haus of Color Painting delivers professional results without the hassle.
          </p>
          <div className={styles.actions}>
            <a href="#contact-form" className={styles.primaryBtn}>
              Get Your Free Estimate
            </a>
            <a href="tel:727-266-8012" className={styles.secondaryBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call 727-266-8012
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
