import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-light via-white to-orange-50 flex items-center justify-center px-4">
      <div className="max-w-3xl w-full text-center">
        {/* Logo */}
        <div className="mb-12 animate-fade-in">
          <img
            src="/hoc-logo.svg"
            alt="Haus of Color Residential Painting"
            className="w-full max-w-2xl mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Coming Soon Message */}
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Something Beautiful is Coming Soon
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Professional residential and commercial painting for the Greater Tampa Bay Area
          </p>
        </div>

        {/* Contact Info */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 max-w-xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

          <div className="space-y-4">
            <a
              href="tel:+15551234567"
              className="flex items-center justify-center gap-3 bg-brand-purple hover:bg-purple-700 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              (555) 123-4567
            </a>

            <a
              href="mailto:hello@hausofcolor.com"
              className="flex items-center justify-center gap-3 bg-brand-orange hover:bg-orange-600 text-white px-6 py-4 rounded-xl font-semibold text-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              <Mail className="w-5 h-5" />
              hello@hausofcolor.com
            </a>
          </div>

          <p className="mt-8 text-gray-600 text-sm">
            Serving Tampa Bay, St. Petersburg, Clearwater, and surrounding areas
          </p>
        </div>

        {/* Footer Note */}
        <p className="mt-12 text-gray-500 text-sm">
          Licensed & Insured | 2-Year Warranty
        </p>
      </div>
    </div>
  );
};

export default Home;
