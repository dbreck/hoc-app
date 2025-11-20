import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

interface Step {
  title: string;
  desc: string;
}

interface ServiceLayoutProps {
  title: string;
  subtitle: string;
  heroImage: string;
  whatWeDo: string[];
  process: Step[];
  whyMattersTitle: string;
  whyMattersContent: string[];
  ctaText: string;
}

const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  title,
  subtitle,
  heroImage,
  whatWeDo,
  process,
  whyMattersTitle,
  whyMattersContent,
  ctaText
}) => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative bg-gray-900 text-white py-24 md:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <img src={heroImage} alt={title} className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-200 max-w-2xl">{subtitle}</p>
        </div>
      </div>

      {/* Content Split */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: What we Paint & Why Matters */}
          <div className="lg:col-span-1 space-y-12">
            <div className="bg-brand-light p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-brand-purple mb-6">What We Cover</h3>
              <ul className="space-y-3">
                {whatWeDo.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{whyMattersTitle}</h3>
              <ul className="space-y-4">
                 {whyMattersContent.map((item, i) => (
                   <li key={i} className="flex gap-3">
                      <div className="w-2 h-2 bg-brand-orange rounded-full mt-2.5"></div>
                      <p className="text-gray-600">{item}</p>
                   </li>
                 ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Process */}
          <div className="lg:col-span-2">
             <h2 className="text-3xl font-bold text-gray-900 mb-10">Our Process</h2>
             <div className="space-y-8">
               {process.map((step, idx) => (
                 <div key={idx} className="flex gap-6">
                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-purple text-white flex items-center justify-center font-bold text-xl shadow-md">
                     {idx + 1}
                   </div>
                   <div>
                     <h4 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h4>
                     <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                   </div>
                 </div>
               ))}
             </div>

             {/* CTA Box */}
             <div className="mt-16 bg-gray-900 rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl">
               <h3 className="text-3xl font-bold mb-6">Ready to start?</h3>
               <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                 Most residential projects include a 2-year workmanship warranty. Let's transform your space today.
               </p>
               <Link 
                 to="/contact"
                 className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-colors"
               >
                 {ctaText} <ArrowRight className="w-5 h-5" />
               </Link>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;