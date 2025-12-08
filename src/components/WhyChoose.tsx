import styles from './WhyChoose.module.css';

const reasons = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: 'Licensed & Insured',
    description: 'Fully licensed and insured for your protection and peace of mind.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
    title: 'Premium Materials',
    description: 'We use only top-tier paints from Sherwin-Williams and Benjamin Moore.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: '2-Year Warranty',
    description: 'Confidence in our work means standing behind it with a workmanship warranty.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: 'Transparent Pricing',
    description: 'No hidden fees. Detailed written estimates before any work begins.',
  },
];

export function WhyChoose() {
  return (
    <section className={`section ${styles.whyChoose}`}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>Why Us</span>
          <h2 className={styles.title}>Why Choose Haus of Color?</h2>
          <p className={styles.subtitle}>
            We're not just painters—we're craftspeople committed to exceptional results
            and customer satisfaction.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrap}>
                {reason.icon}
              </div>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardDesc}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
