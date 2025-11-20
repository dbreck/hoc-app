import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Shield, Clock, UserCheck, Paintbrush } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';
import TestimonialCard from '../components/TestimonialCard';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/16553831/pexels-photo-16553831.jpeg?auto=compress&cs=tinysrgb&w=1920" 
            alt="Bright yellow vacation cottage with white trim" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>
        </div>

        <div className="relative container mx-auto px-4 text-center text-white">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-purple/90 text-xs font-bold tracking-wider uppercase mb-6 animate-fade-in-up">
            Serving the Greater Tampa Bay Area
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Your Home Deserves <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-400">Color That Lasts</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed">
            Professional residential painting. Expert prep work, premium finishes, and honest communication from start to finish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-brand-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              Get a Free Estimate
            </Link>
            <a 
              href="tel:+15551234567" 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold transition-all"
            >
              Call: (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-20 bg-white relative -mt-16 z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: UserCheck,
                title: "Proven Expertise",
                desc: "20+ years combined experience with major painting projects across Florida. Former foreman supervision on every job."
              },
              {
                icon: Shield,
                title: "Quality Without Compromise",
                desc: "We believe great painting starts with great prep. Properly cleaned, repaired, and primed surfaces for lasting results."
              },
              {
                icon: Clock,
                title: "Respectful & Reliable",
                desc: "Your home is your sanctuary. We show up on time, communicate clearly, and leave nothing behind but beautiful walls."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 text-center hover:border-brand-purple/30 transition-colors">
                <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center mx-auto mb-6 text-brand-purple">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader 
            title="Our Services" 
            subtitle="Comprehensive painting solutions for every need."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Residential Interior",
                desc: "Transform your living spaces with fresh, vibrant color. Single rooms to whole homes.",
                img: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&q=80",
                link: "/services/interior"
              },
              {
                title: "Residential Exterior",
                desc: "Boost curb appeal and protect your home from Florida's elements.",
                img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80",
                link: "/services/exterior"
              },
              {
                title: "Cabinet Refinishing",
                desc: "Give your kitchen a complete refresh without the high cost of replacement.",
                img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80",
                link: "/services/cabinets"
              },
              {
                title: "Commercial Painting",
                desc: "Keep your business looking sharp with minimal disruption and maximum results.",
                img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
                link: "/services/commercial"
              }
            ].map((service, idx) => (
              <Link to={service.link} key={idx} className="group relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4] hover:shadow-2xl transition-all">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {service.desc}
                  </p>
                  <span className="inline-flex items-center text-brand-orange font-semibold text-sm">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-light rounded-full z-0"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-orange-100 rounded-full z-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" 
                  alt="Painter working on a wall" 
                  className="relative z-10 rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="text-brand-purple font-bold tracking-wider uppercase text-sm mb-2 block">The Haus Difference</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Why Choose Haus of Color?</h2>
              
              <div className="space-y-6">
                {[
                  { title: "Licensed & Insured", text: "Fully licensed and insured for your protection and peace of mind." },
                  { title: "Premium Materials", text: "Top-tier paints from Sherwin-Williams and Benjamin Moore." },
                  { title: "2-Year Warranty", text: "Confidence in our work means standing behind it." },
                  { title: "Transparent Pricing", text: "No hidden fees. Detailed, written estimates before work begins." },
                  { title: "Local Expertise", text: "Natives who understand painting in Florida's unique climate." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-green flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area CTA */}
      <section className="py-16 bg-brand-purple text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Proudly Serving the Greater Tampa Bay Area and Beyond</h2>
          <p className="text-brand-light text-lg mb-8 max-w-3xl mx-auto">
            Clearwater | Largo | Seminole | Pinellas Park | Dunedin | Gulfport | South Pasadena
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-brand-purple px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors"
          >
            Check Availability in Your Area
          </Link>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader title='"Paint Lives, Not Just Houses"' subtitle="See what our customers are saying." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="Absolutely thrilled with the transformation. The team was punctual, clean, and the attention to detail was incredible. Highly recommend!"
              author="Sarah Jenkins"
              location="St. Petersburg, FL"
            />
            <TestimonialCard 
              quote="Lillian and her crew are true professionals. They prepped our cabinets meticulously and the finish looks factory-new. Saved us thousands on a remodel."
              author="Mike & Tina R."
              location="Tampa, FL"
            />
            <TestimonialCard 
              quote="Finally a contractor that communicates! No surprises, fair pricing, and the exterior of our home looks brand new despite the Florida sun."
              author="David Alvarez"
              location="Clearwater, FL"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Ready to Bring New Life to Your Space?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Whether you're preparing to sell or ready for a change, Haus of Color Painting delivers professional results without the hassle.
          </p>
          <Link 
            to="/contact" 
            className="bg-brand-orange hover:bg-orange-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all inline-flex items-center gap-2"
          >
            Get Your Free Estimate <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;