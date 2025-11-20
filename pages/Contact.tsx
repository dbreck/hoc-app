import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Check } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="bg-white">
      <div className="bg-brand-purple text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's Start Your Project</h1>
          <p className="text-xl text-brand-light">Ready to transform your home? Get your free estimate today.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 -mt-10">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info Card */}
          <div className="lg:w-1/3 bg-white rounded-2xl shadow-xl p-8 h-fit border border-gray-100">
            <h3 className="text-2xl font-bold mb-8 text-gray-900">Get in Touch</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center shrink-0 text-brand-purple">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">Call Us</p>
                  <a href="tel:+15551234567" className="text-xl font-bold text-gray-900 hover:text-brand-purple">(555) 123-4567</a>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri: 8am - 6pm</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center shrink-0 text-brand-purple">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">Email Us</p>
                   <a href="mailto:hello@hausofcolor.com" className="text-lg font-medium text-gray-900 hover:text-brand-purple">hello@hausofcolor.com</a>
                   <p className="text-sm text-gray-500 mt-1">We reply within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-light rounded-full flex items-center justify-center shrink-0 text-brand-purple">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                   <p className="text-sm text-gray-500 font-semibold uppercase tracking-wide">Service Area</p>
                   <p className="text-gray-900 font-medium">Proudly serving Tampa Bay, St. Petersburg, Clearwater, and surrounding areas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3 bg-gray-50 rounded-2xl shadow-lg p-8 md:p-12">
            {formStatus === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                <p className="text-gray-600 text-lg max-w-md">
                  Thank you for contacting Haus of Color. We've received your request and will get back to you within 24 hours to schedule your estimate.
                </p>
                <button 
                  onClick={() => setFormStatus('idle')}
                  className="mt-8 text-brand-purple font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Request a Free Estimate</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-shadow"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-shadow"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-shadow"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Project Type</label>
                    <select 
                      id="service"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-shadow bg-white"
                    >
                      <option>Interior Painting</option>
                      <option>Exterior Painting</option>
                      <option>Cabinet Refinishing</option>
                      <option>Commercial Painting</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Property Address</label>
                  <input 
                    type="text" 
                    id="address" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-shadow"
                    placeholder="123 Main St, Tampa, FL"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Tell us about your project</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-purple focus:border-transparent outline-none transition-shadow resize-none"
                    placeholder="Rooms to be painted, specific colors in mind, timeline, etc."
                  ></textarea>
                </div>

                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
                   <div className="flex gap-4">
                     <label className="flex items-center gap-2 cursor-pointer">
                       <input type="radio" name="contact" className="text-brand-purple focus:ring-brand-purple" defaultChecked />
                       <span>Phone</span>
                     </label>
                     <label className="flex items-center gap-2 cursor-pointer">
                       <input type="radio" name="contact" className="text-brand-purple focus:ring-brand-purple" />
                       <span>Email</span>
                     </label>
                   </div>
                </div>

                <button 
                  type="submit" 
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-brand-orange hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Get Free Estimate'}
                  {!formStatus && <Send className="w-5 h-5" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;