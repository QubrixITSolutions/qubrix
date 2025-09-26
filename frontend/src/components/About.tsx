import React, { useState } from 'react';
import QuoteModal from './QuoteModal';

const About: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Placeholder - Left Side */}
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <div className="aspect-square bg-white/20 rounded-lg flex items-center justify-center">
                    <div className="text-white text-6xl">🚀</div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-green-400 rounded-full opacity-15"></div>
            </div>
          </div>

          {/* Content - Right Side */}
          <div className="order-1 lg:order-2 animate-slide-in-right">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up animation-delay-200">
                Who We Are
              </h2>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                QUBRIX is a reliable technology company dedicated to transforming businesses through innovative digital solutions. We specialize in creating custom software that perfectly aligns with your unique business needs and drives sustainable growth.
              </p>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our comprehensive services include custom software development, advanced billing systems, modern websites, mobile applications, and cutting-edge AI automation solutions. We pride ourselves on delivering high-quality, scalable solutions that help businesses stay competitive in today's digital landscape.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Our Expertise:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    Custom Software Development
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Advanced Billing Systems
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                    Modern Websites & E-commerce
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                    Mobile Applications
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    AI Automation Solutions
                  </li>
                </ul>
              </div>
              
              <button 
                onClick={openQuoteModal}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl glow-on-hover group animate-fade-in-up animation-delay-800"
              >
                <span className="group-hover:animate-pulse">Book a Free Demo</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Modal (Demo variant) */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={closeQuoteModal}
        titleText="Book a Free Demo"
        subtitleText="Tell us what you want to see and we'll prepare a personalized walk-through."
        submitLabel="Book Free Demo"
        successTitle="Demo Request Sent!"
        successMessage="Thanks! Our team will reach out shortly to schedule your live demo."
        leadSource="book-demo"
      />
    </section>
  );
};

export default About;