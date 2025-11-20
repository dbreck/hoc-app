import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  location: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, location }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
      </div>
      <p className="text-gray-700 italic mb-6 leading-relaxed">"{quote}"</p>
      <div>
        <p className="font-bold text-gray-900">{author}</p>
        <p className="text-sm text-brand-purple">{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;