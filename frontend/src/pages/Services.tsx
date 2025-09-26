import React from 'react';
import { ServicesGrid } from '../components';

const Services: React.FC = () => {
  return (
    <div>
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>
      </section>
      <ServicesGrid />
    </div>
  );
};

export default Services;