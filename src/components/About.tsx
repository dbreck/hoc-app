import styles from './About.module.css';

export function About() {
  return (
    <section className={`section ${styles.about}`} id="about">
      <div className="container">
        <div className={styles.grid}>
          {/* Image Side */}
          <div className={styles.imageCol}>
            {/* REPLACE: Professional photo of Lillian Haus, or painter at work */}
            <div className={styles.imageWrap}>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80"
                alt="Professional painter at work"
                loading="lazy"
              />
            </div>
            {/* Experience Badge */}
            <div className={styles.badge}>
              <span className={styles.badgeNumber}>20+</span>
              <span className={styles.badgeText}>Years Experience</span>
            </div>
          </div>

          {/* Content Side */}
          <div className={styles.contentCol}>
            <span className={styles.label}>About Us</span>
            <h2 className={styles.title}>
              Built on Craft,<br />
              Driven by Quality
            </h2>
            <div className={styles.text}>
              <p>
                <strong>Haus of Color Painting LLC</strong> was founded by Lillian Haus,
                a seasoned painting professional with over two decades of hands-on experience
                transforming homes and businesses across central Florida.
              </p>
              <p>
                After years as a trusted foreman for one of Tampa Bay's leading painting
                contractors, Lillian built something different—a company where quality
                craftsmanship, honest communication, and customer respect aren't just promises.
                They're the foundation of every project.
              </p>
            </div>

            {/* Values List */}
            <ul className={styles.values}>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Clear Communication—always know what's happening
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Respect for Your Property—we treat it like our own
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                On-Time, On-Budget—promises kept
              </li>
              <li>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                Premium Results—we don't cut corners
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
