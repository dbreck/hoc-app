import { ContactForm } from './ContactForm';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section className={`section ${styles.contact}`} id="contact-form">
      <div className="container">
        <div className={styles.grid}>
          {/* Info Side */}
          <div className={styles.infoCol}>
            <span className={styles.label}>Get In Touch</span>
            <h2 className={styles.title}>Let's Start Your Project</h2>
            <p className={styles.subtitle}>
              Ready to transform your home or business? Fill out the form and we'll
              get back to you within 24 hours with a free estimate.
            </p>

            {/* Contact Info Cards */}
            <div className={styles.contactCards}>
              <a href="tel:727-266-8012" className={styles.contactCard}>
                <div className={styles.cardIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.cardLabel}>Call Us</span>
                  <span className={styles.cardValue}>727-266-8012</span>
                </div>
              </a>

              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.cardLabel}>Hours</span>
                  <span className={styles.cardValue}>Mon–Fri: 8am–6pm</span>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.cardIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className={styles.cardContent}>
                  <span className={styles.cardLabel}>Service Area</span>
                  <span className={styles.cardValue}>Tampa Bay & St. Pete</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className={styles.formCol}>
            <div className={styles.formWrapper}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
