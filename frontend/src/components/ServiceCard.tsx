import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  gradient?: string;
  slug?: string; // optional explicit slug override
}

const titleToSlug = (title: string) => {
  return title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/\s+/g, '-')
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, gradient, slug }) => {
  const navigate = useNavigate();
  const resolvedSlug = slug || titleToSlug(title);

  const goToDetails = () => {
    navigate(`/services/${resolvedSlug}`);
  };

  return (
    <div
      onClick={goToDetails}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToDetails(); } }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-500 group cursor-pointer transform hover:scale-105 hover:-translate-y-2 border border-gray-100 hover:border-primary-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
    >
      <div className={`text-4xl mb-4 p-3 rounded-lg bg-gradient-to-r ${gradient || 'from-blue-500 to-blue-600'} text-white inline-block transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-all duration-300">
        {title}
      </h3>
      <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); goToDetails(); }}
        className="text-primary-600 font-semibold hover:text-primary-700 transition-all duration-300 group-hover:translate-x-2 inline-flex items-center"
      >
        Learn More
        <span className="ml-1 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
      </button>
    </div>
  );
};

export default ServiceCard;