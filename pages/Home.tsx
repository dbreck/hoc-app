import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        {/* Logo - 50% smaller */}
        <div className="mb-16 animate-fade-in">
          <img
            src="/hoc-logo-final.svg"
            alt="Haus of Color Residential Painting"
            className="w-full max-w-xl mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Coming Soon Message */}
        <h1 className="text-5xl md:text-7xl font-light italic mb-8 leading-tight text-gray-100">
          Something Beautiful is Coming Soon
        </h1>
      </div>
    </div>
  );
};

export default Home;
