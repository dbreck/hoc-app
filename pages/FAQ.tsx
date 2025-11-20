import React from 'react';
import SectionHeader from '../components/SectionHeader';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        {isOpen ? <Minus className="text-brand-purple w-5 h-5" /> : <Plus className="text-brand-purple w-5 h-5" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How much does it cost to paint a house in Tampa Bay?",
      answer: "Costs vary depending on size and condition. On average, exterior painting for a single-family home ranges from $3,500 to $12,000. Interior painting typically costs $1,500 to $6,000. We provide free, detailed estimates with no hidden fees."
    },
    {
      question: "How long does a project take?",
      answer: "Most interior projects take 2-5 days. Exterior projects typically take 3-7 days, depending on weather and size. We provide a clear timeline with your estimate."
    },
    {
      question: "What type of paint do you use?",
      answer: "We use premium paints from Sherwin-Williams and Benjamin Moore—trusted brands known for superior coverage, color retention, and durability."
    },
    {
      question: "Do I need to be home during the painting?",
      answer: "Not necessarily. You don't need to be home while we work. We'll discuss access and scheduling during your estimate."
    },
    {
      question: "Do you offer a warranty?",
      answer: "Yes. Most residential painting projects include a 2-year workmanship warranty. We stand behind our work."
    },
    {
      question: "Can you match an existing paint color?",
      answer: "Absolutely. We can match nearly any existing color using advanced color-matching technology."
    },
    {
      question: "Do you move furniture?",
      answer: "We move small items and cover large pieces. For very heavy or valuable items, we recommend moving them beforehand or discussing it during the estimate."
    },
    {
      question: "Do you paint during hurricane season?",
      answer: "We monitor weather closely. If a storm is approaching, we pause work and secure the site to protect your property."
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <SectionHeader title="Frequently Asked Questions" subtitle="Everything you need to know about your painting project." />
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>

        <div className="text-center mt-12">
           <p className="text-gray-600 mb-4">Still have questions?</p>
           <Link to="/contact" className="text-brand-purple font-bold hover:underline text-lg">Contact Us Today</Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;