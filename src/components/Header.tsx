import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import styles from './Header.module.css';
import logoColor from '../assets/hoc-logo-horiz.svg';
import logoWhite from '../assets/hoc-logo-horiz-white.svg';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we're on the homepage
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking a link
  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Determine if header should use light (white) styling
  // Only on homepage when not scrolled
  const useLightStyle = isHomePage && !isScrolled;

  return (
    <header className={`${styles.header} ${isScrolled || !isHomePage ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link to="/" className={styles.logo} onClick={handleNavClick}>
          <img src={useLightStyle ? logoWhite : logoColor} alt="Haus of Color Painting" />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`${styles.navLink} ${location.pathname === link.href || location.pathname.startsWith(link.href + '/') ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Actions: Theme Toggle + CTA */}
        <div className={styles.actions}>
          <ThemeToggle isScrolled={isScrolled || !isHomePage} />
          <a href="tel:727-266-8012" className={styles.ctaButton}>
          <span className={styles.ctaIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
          </span>
          <span className={styles.ctaText}>727-266-8012</span>
        </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`${styles.mobileMenuBtn} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <nav aria-label="Mobile navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`${styles.mobileNavLink} ${location.pathname === link.href || location.pathname.startsWith(link.href + '/') ? styles.active : ''}`}
              onClick={handleNavClick}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:727-266-8012" className={styles.mobileCtaButton} onClick={handleNavClick}>
            Call 727-266-8012
          </a>
        </nav>
      </div>
    </header>
  );
}
