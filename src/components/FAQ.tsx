import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: 'How much does it cost to paint a house in Tampa Bay?',
    answer: 'Costs vary depending on the size of your home, the condition of the surfaces, and the type of paint used. On average, exterior painting for a single-family home in our area ranges from $3,500 to $12,000. Interior painting typically costs $1,500 to $6,000. We provide free, detailed estimates with no hidden fees.',
  },
  {
    question: 'How long does it take to paint the interior of a home?',
    answer: 'Most interior painting projects take 2-5 days, depending on the size of the space and the number of rooms. We\'ll provide a clear timeline during your estimate.',
  },
  {
    question: 'What type of paint do you use?',
    answer: 'We use premium paints from Sherwin-Williams and Benjamin Moore—trusted brands known for superior coverage, color retention, and durability. We select the right product for each surface and environment.',
  },
  {
    question: 'Do I need to be home during the painting?',
    answer: 'Not necessarily. Many clients prefer to be present during the initial consultation and final walkthrough, but you don\'t need to be home while we work. We\'ll discuss access and scheduling during your estimate.',
  },
  {
    question: 'What kind of prep work do you do?',
    answer: 'Thorough prep is our specialty. Depending on the project, this includes: pressure washing, scraping loose paint, sanding rough surfaces, filling holes and cracks, caulking gaps, repairing drywall, and priming.',
  },
  {
    question: 'Do you offer a warranty?',
    answer: 'Yes. Most residential painting projects include a 2-year workmanship warranty. We stand behind our work.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`section ${styles.faq}`} id="faq">
      <div className="container container--narrow">
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.label}>FAQ</span>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.subtitle}>
            Have questions? We've got answers. If you don't see what you're looking for,
            give us a call.
          </p>
        </div>

        {/* Accordion */}
        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
            >
              <button
                className={styles.question}
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <span className={styles.icon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19" className={styles.iconVertical} />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className={styles.answer}
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
