import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import { Heart, Award, Sun, Users } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Painting supplies" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">More Than Just Painters</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We are craftsmen, neighbors, and perfectionists dedicated to transforming Tampa Bay homes.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="md:w-1/2">
               <h2 className="text-3xl font-bold mb-6 text-brand-purple">Our Story</h2>
               <p className="text-gray-600 mb-4 leading-relaxed">
                 Haus of Color Painting LLC was founded by Lillian Haus, a seasoned painting professional with over two decades of hands-on experience transforming homes and businesses across central Florida.
               </p>
               <p className="text-gray-600 mb-4 leading-relaxed">
                 After years as a trusted foreman for one of Tampa Bay's leading painting contractors, Lillian saw an opportunity to build something different—a company where quality craftsmanship, honest communication, and customer respect aren't just promises, they're the foundation of every project.
               </p>
             </div>
             <div className="md:w-1/2 relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gray-100">
                  {/* Placeholder for Lillian's photo */}
                  <img src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&q=80" alt="Lillian Haus" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-brand-orange text-white p-6 rounded-xl shadow-lg max-w-xs">
                  <p className="font-bold text-lg">"We paint lives, not just houses."</p>
                  <p className="text-sm mt-2 opacity-90">- Lillian Haus, Founder</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeader title="What Makes Us Different" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: Award, title: "Experience You Can Trust", desc: "20+ years in the industry dealing with complex prep and tight deadlines." },
               { icon: Users, title: "Foreman-Level Quality", desc: "Expert supervision on every job. No cutting corners, ever." },
               { icon: Sun, title: "Built for Florida", desc: "We understand UV exposure, salt air, and humidity management." },
               { icon: Heart, title: "Locally Owned", desc: "We're not a franchise. We're your neighbors in Central Florida." },
             ].map((item, i) => (
               <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-brand-purple">
                 <item.icon className="w-10 h-10 text-brand-orange mb-4" />
                 <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                 <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-20 bg-brand-purple text-white">
         <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-bold mb-12">Our Commitment to You</h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-2 text-brand-orange">Clear Communication</h3>
                <p className="text-gray-100">You'll always know what's happening, when it's happening, and why.</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-2 text-brand-orange">Respect for Property</h3>
                <p className="text-gray-100">We protect your belongings, clean up daily, and treat your home like our own.</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-2 text-brand-orange">On-Time, On-Budget</h3>
                <p className="text-gray-100">Accurate estimates and strict adherence to agreed-upon timelines.</p>
              </div>
              <div className="bg-white/10 backdrop-blur p-6 rounded-xl">
                <h3 className="font-bold text-xl mb-2 text-brand-orange">Premium Results</h3>
                <p className="text-gray-100">We don't cut corners. Ever. We use the best materials for the best finish.</p>
              </div>
           </div>
           <div className="mt-12">
             <Link to="/contact" className="bg-white text-brand-purple px-8 py-3 rounded-full font-bold shadow-lg hover:bg-gray-100 transition-colors">
               Ready to Work Together?
             </Link>
           </div>
         </div>
      </section>
    </div>
  );
};

export default About;