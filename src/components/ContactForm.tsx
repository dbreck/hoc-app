import { useState, type FormEvent } from 'react';
import styles from './ContactForm.module.css';

const projectTypes = [
  'Interior Painting',
  'Exterior Painting',
  'Cabinet Refinishing',
  'Commercial Painting',
  'Other',
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        </div>
        <h3 className={styles.successTitle}>Thank You!</h3>
        <p className={styles.successText}>
          We've received your message and will get back to you within 24 hours.
        </p>
        <button
          type="button"
          className={styles.resetBtn}
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Name & Phone Row */}
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name" className={styles.label}>Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your name"
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="phone" className={styles.label}>Phone *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="(555) 123-4567"
            className={styles.input}
          />
        </div>
      </div>

      {/* Email & Project Type Row */}
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="email" className={styles.label}>Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="you@email.com"
            className={styles.input}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="project-type" className={styles.label}>Project Type</label>
          <select
            id="project-type"
            name="project-type"
            className={styles.select}
          >
            <option value="">Select a project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Address */}
      <div className={styles.field}>
        <label htmlFor="address" className={styles.label}>Property Address</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="123 Main St, Tampa, FL"
          className={styles.input}
        />
      </div>

      {/* Message */}
      <div className={styles.field}>
        <label htmlFor="message" className={styles.label}>Tell Us About Your Project</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Describe your project, timeline, or any questions you have..."
          className={styles.textarea}
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className={styles.submitBtn}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Get My Free Estimate'}
        {!isSubmitting && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        )}
      </button>

      <p className={styles.disclaimer}>
        By submitting this form, you agree to be contacted about your project.
        We respect your privacy and will never share your information.
      </p>
    </form>
  );
}
