import React from 'react';
import ServiceCard from './ServiceCard';

const ServicesGrid: React.FC = () => {
  const services = [
    {
      title: 'Custom Software Development',
      description: 'Tailored solutions designed to meet your unique business needs and drive growth.',
      icon: '💻',
      gradient: 'from-blue-500 to-blue-600',
      slug: 'custom-software-development'
    },
    {
      title: 'Website & E-commerce Development',
      description: 'Modern, responsive websites and online stores that convert visitors into customers.',
      icon: '🌐',
      gradient: 'from-green-500 to-green-600',
      slug: 'website-ecommerce-development'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱',
      gradient: 'from-purple-500 to-purple-600',
      slug: 'mobile-app-development'
    },
    {
      title: 'AI Agents & Automation',
      description: 'Intelligent automation solutions to streamline your business processes.',
      icon: '🤖',
      gradient: 'from-orange-500 to-orange-600',
      slug: 'ai-agents-automation'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`animate-fade-in-up animation-delay-${(index + 2) * 200}`}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                gradient={service.gradient}
                slug={service.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;