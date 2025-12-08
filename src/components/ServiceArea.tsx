import styles from './ServiceArea.module.css';

const areas = [
  'Tampa Bay',
  'St. Petersburg',
  'Clearwater',
  'Largo',
  'Seminole',
  'Pinellas Park',
  'Dunedin',
  'Gulfport',
  'South Pasadena',
  'Safety Harbor',
  'Palm Harbor',
  'Tarpon Springs',
];

export function ServiceArea() {
  return (
    <section className={`section ${styles.serviceArea}`}>
      <div className="container">
        <div className={styles.inner}>
          {/* Map/Visual Side */}
          <div className={styles.visual}>
            {/* REPLACE: Simple map graphic of Tampa Bay area or Florida west coast */}
            <div className={styles.mapPlaceholder}>
              <svg viewBox="0 0 200 200" className={styles.mapIcon}>
                <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
                <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                <circle cx="100" cy="100" r="20" fill="currentColor" opacity="0.3" />
                <circle cx="100" cy="100" r="8" fill="currentColor" />
              </svg>
              <span className={styles.mapLabel}>Tampa Bay Area</span>
            </div>
          </div>

          {/* Content Side */}
          <div className={styles.content}>
            <span className={styles.label}>Service Area</span>
            <h2 className={styles.title}>Proudly Serving Tampa Bay</h2>
            <p className={styles.subtitle}>
              We serve homeowners and businesses throughout the Tampa Bay metro area.
              Not sure if we cover your location? Give us a call—we'd love to help!
            </p>

            {/* Areas List */}
            <div className={styles.areasList}>
              {areas.map((area) => (
                <span key={area} className={styles.area}>{area}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
