import { Link } from 'react-router-dom';
import { navLinks, serviceLinks, HOME_PATH } from '../config/routes';
import styles from './Footer.module.css';
import logoSrc from '../assets/hoc-logo-horiz.svg';

const areas = [
  'Tampa Bay', 'St. Petersburg', 'Clearwater', 'Largo',
  'Pinellas Park', 'Dunedin', 'Gulfport', 'South Pasadena',
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Main Footer Grid */}
        <div className={styles.grid}>
          {/* Brand Column */}
          <div className={styles.brandCol}>
            <Link to={HOME_PATH} className={styles.logo}>
              <img src={logoSrc} alt="Haus of Color Painting" />
            </Link>
            <p className={styles.tagline}>
              Professional painting services for Tampa Bay homeowners and businesses.
              Quality craftsmanship, honest communication.
            </p>
          </div>

          {/* Navigation Column */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linkList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linkList}>
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contact</h4>
            <div className={styles.contactInfo}>
              <a href="tel:727-266-8012" className={styles.phone}>
                727-266-8012
              </a>
              <p className={styles.hours}>
                Mon–Fri: 8am–6pm<br />
                Sat: 9am–4pm
              </p>
            </div>
            <div className={styles.serviceAreas}>
              <span className={styles.areasLabel}>Serving:</span>
              <span className={styles.areasText}>{areas.join(' • ')}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Haus of Color Painting LLC. All rights reserved.
          </p>
          <p className={styles.license}>
            Licensed & Insured • Florida State License
          </p>
        </div>
      </div>
    </footer>
  );
}
