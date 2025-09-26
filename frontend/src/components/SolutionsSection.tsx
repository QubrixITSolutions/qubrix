import React from 'react';

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      title: 'E-commerce Solutions',
      description: 'Complete online store development and management',
    },
    {
      title: 'Enterprise Software',
      description: 'Custom business applications and workflows',
    },
    {
      title: 'Healthcare Tech',
      description: 'HIPAA-compliant healthcare management systems',
    },
    {
      title: 'Fintech Solutions',
      description: 'Secure financial technology applications',
    },
  ];

  const industries = [
    'Healthcare', 'Finance', 'E-commerce', 'Education', 
    'Real Estate', 'Manufacturing', 'Logistics', 'Entertainment'
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Solutions</h2>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="p-4 border-l-4 border-primary-500 bg-gray-50">
                  <h3 className="font-semibold text-gray-800">{solution.title}</h3>
                  <p className="text-gray-600 text-sm">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Industries</h2>
            <div className="grid grid-cols-2 gap-4">
              {industries.map((industry, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg text-center hover:bg-primary-50 transition-colors">
                  <span className="text-gray-700 font-medium">{industry}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;