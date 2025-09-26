import React from 'react';
import CaseCard from './CaseCard';

const PortfolioGrid: React.FC = () => {
  const cases = [
    {
      title: 'AI-Powered E-commerce Platform',
      description: 'Custom shopping platform with intelligent product recommendations and automated customer service',
      image: '🛒',
      category: 'Custom Software + AI',
      slug: 'ecommerce-platform'
    },
    {
      title: 'Healthcare Management System',
      description: 'Comprehensive patient management app with telemedicine and AI diagnostic assistance',
      image: '🏥',
      category: 'Mobile App + AI',
      slug: 'healthcare-management-system'
    },
    {
      title: 'Real Estate Investment Portal',
      description: 'Advanced analytics dashboard with AI market predictions and automated reporting',
      image: '🏢',
      category: 'Web Application + AI',
      slug: 'real-estate-investment-portal'
    },
    {
      title: 'Manufacturing Automation Suite',
      description: 'Custom software solution with IoT integration and predictive maintenance AI',
      image: '🏭',
      category: 'Custom Software',
      slug: 'manufacturing-automation-suite'
    },
    {
      title: 'EdTech Learning Platform',
      description: 'Interactive educational platform with AI-powered personalized learning paths',
      image: '�',
      category: 'Web App + Mobile',
      slug: 'edtech-learning-platform'
    },
    {
      title: 'Logistics Optimization System',
      description: 'Smart routing and inventory management with AI-driven demand forecasting',
      image: '🚚',
      category: 'AI Agent + Software',
      slug: 'logistics-optimization-system'
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Work</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing our latest projects and success stories
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <CaseCard key={index} {...caseItem} />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioGrid;