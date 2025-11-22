import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown, Instagram, Facebook, Mail } from 'lucide-react';

const Layout: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { name: 'Home', path: '/preview' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Interior Painting', path: '/services/interior' },
    { name: 'Exterior Painting', path: '/services/exterior' },
    { name: 'Cabinet Refinishing', path: '/services/cabinets' },
    { name: 'Commercial Painting', path: '/services/commercial' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 transition-all duration-300">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group" onClick={closeMenu}>
              <img
                src="/hoc-logo-horiz-1.png"
                alt="Haus of Color Residential Painting"
                className="h-12 w-auto group-hover:scale-105 transition-transform"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/preview"
                className={`text-sm font-medium transition-colors hover:text-brand-purple ${isActive('/preview') ? 'text-brand-purple' : 'text-gray-600'}`}
              >
                Home
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-brand-purple transition-colors py-2">
                  Services <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top mt-1 p-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-brand-light hover:text-brand-purple rounded-lg transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                to="/about" 
                className={`text-sm font-medium transition-colors hover:text-brand-purple ${isActive('/about') ? 'text-brand-purple' : 'text-gray-600'}`}
              >
                About
              </Link>
              <Link 
                to="/faq" 
                className={`text-sm font-medium transition-colors hover:text-brand-purple ${isActive('/faq') ? 'text-brand-purple' : 'text-gray-600'}`}
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                className={`text-sm font-medium transition-colors hover:text-brand-purple ${isActive('/contact') ? 'text-brand-purple' : 'text-gray-600'}`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center gap-4">
               <a href="tel:+15551234567" className="flex items-center gap-2 text-gray-600 hover:text-brand-purple transition-colors font-medium text-sm">
                  <Phone className="w-4 h-4" />
                  (555) 123-4567
               </a>
               <Link 
                to="/contact" 
                className="bg-brand-orange hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
               >
                Get Free Estimate
               </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-600 hover:text-brand-purple"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg overflow-y-auto max-h-[calc(100vh-5rem)]">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/preview"
                onClick={closeMenu}
                className={`block text-lg font-medium ${isActive('/preview') ? 'text-brand-purple' : 'text-gray-800'}`}
              >
                Home
              </Link>
              
              <div>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-800"
                >
                  Services
                  <ChevronDown className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-3 border-l-2 border-brand-light ml-1">
                    {serviceLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={closeMenu}
                        className="block text-base text-gray-600 hover:text-brand-purple py-1"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/about" 
                onClick={closeMenu}
                className={`block text-lg font-medium ${isActive('/about') ? 'text-brand-purple' : 'text-gray-800'}`}
              >
                About
              </Link>
              <Link 
                to="/faq" 
                onClick={closeMenu}
                className={`block text-lg font-medium ${isActive('/faq') ? 'text-brand-purple' : 'text-gray-800'}`}
              >
                FAQ
              </Link>
              <Link 
                to="/contact" 
                onClick={closeMenu}
                className={`block text-lg font-medium ${isActive('/contact') ? 'text-brand-purple' : 'text-gray-800'}`}
              >
                Contact
              </Link>

              <hr className="border-gray-100 my-4" />
              
              <a href="tel:+15551234567" className="flex items-center gap-3 text-gray-600 font-medium mb-4">
                <Phone className="w-5 h-5 text-brand-purple" />
                (555) 123-4567
              </a>
              
              <Link 
                to="/contact"
                onClick={closeMenu}
                className="block w-full text-center bg-brand-orange text-white py-3 rounded-xl font-semibold shadow-md"
              >
                Get Free Estimate
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Info */}
            <div>
              <div className="mb-6">
                <img
                  src="/hoc-logo-horiz-1.png"
                  alt="Haus of Color Residential Painting"
                  className="h-10 w-auto brightness-0 invert"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Professional residential and commercial painting for Tampa Bay. We bring color to life with expert prep, premium finishes, and respect for your home.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-purple transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-purple transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Our Services</h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-gray-400 hover:text-brand-orange transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Area */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Service Area</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Tampa Bay</li>
                <li>St. Petersburg</li>
                <li>Clearwater</li>
                <li>Largo & Seminole</li>
                <li>Pinellas Park</li>
                <li>Dunedin & Gulfport</li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand-orange shrink-0" />
                  <span className="text-gray-400 text-sm">(555) 123-4567</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand-orange shrink-0" />
                  <span className="text-gray-400 text-sm">hello@hausofcolor.com</span>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="inline-block mt-2 bg-brand-purple hover:bg-brand-darkPurple text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Schedule Estimate
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Haus of Color Painting LLC. All rights reserved.
            </p>
            <div className="flex gap-6">
               <span className="text-gray-500 text-sm">Licensed & Insured</span>
               <Link to="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;