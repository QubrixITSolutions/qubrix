import React from 'react';
import PortfolioGrid from '../components/PortfolioGrid';

const Portfolio: React.FC = () => {
  return (
    <div>
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore our latest projects and see how we've helped businesses achieve their goals
          </p>
        </div>
      </section>
      <PortfolioGrid />
    </div>
  );
};

export default Portfolio;