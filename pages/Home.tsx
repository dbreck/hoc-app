import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-4xl w-full text-center">
        {/* Logo - 50% smaller */}
        <div className="mb-16 animate-fade-in">
          <img
            src="/hoc-logo.svg"
            alt="Haus of Color Residential Painting"
            className="w-full max-w-xl mx-auto drop-shadow-2xl"
          />
        </div>

        {/* Coming Soon Message with Gradient */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-brand-orange to-yellow-400">
            Something Beautiful is Coming Soon
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
