import React from 'react';

const FeaturedLogos: React.FC = () => {
  const logos = [
    'TechCorp', 'InnovateLabs', 'FutureFlow', 'DataDriven', 'CloudFirst', 'AI Solutions'
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">As Featured On</h2>
          <p className="text-gray-600">Trusted by leading companies worldwide</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {logos.map((logo, index) => (
            <div key={index} className="text-xl font-bold text-gray-700 hover:opacity-100 transition-opacity">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedLogos;