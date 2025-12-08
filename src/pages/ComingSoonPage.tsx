import { SEO } from '../components/SEO';
import styles from './ComingSoonPage.module.css';
import logoSrc from '../assets/hoc-logo-horiz.svg';

export function ComingSoonPage() {
  return (
    <>
      <SEO
        title="Coming Soon | Haus of Color Painting"
        description="Haus of Color Painting - Professional residential and commercial painting for Tampa Bay and St. Petersburg. Coming soon."
      />
      <div className={styles.page}>
        <div className={styles.content}>
          <img
            src={logoSrc}
            alt="Haus of Color Painting"
            className={styles.logo}
          />
          <h1 className={styles.heading}>Coming Soon</h1>
          <p className={styles.tagline}>
            Professional painting for Tampa Bay
          </p>
          <a href="tel:727-266-8012" className={styles.phone}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            727-266-8012
          </a>
        </div>
      </div>
    </>
  );
}
