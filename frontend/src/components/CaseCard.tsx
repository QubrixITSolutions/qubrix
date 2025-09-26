import React from 'react';

import { useNavigate } from 'react-router-dom'

interface CaseCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  slug: string;
}

const CaseCard: React.FC<CaseCardProps> = ({ title, description, image, category, slug }) => {
  const navigate = useNavigate()
  const handleClick = () => navigate(`/projects/${slug}`)
  return (
    <div role="button" tabIndex={0} onClick={handleClick} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer group focus:outline-none focus:ring-2 focus:ring-primary-500">
      <div className="h-48 bg-gray-100 flex items-center justify-center text-6xl">
        {image}
      </div>
      <div className="p-6">
        <span className="text-sm text-primary-600 font-semibold">{category}</span>
        <h3 className="text-xl font-semibold text-gray-800 mt-2 mb-3 group-hover:text-primary-700 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <span className="text-primary-600 font-semibold group-hover:text-primary-700 inline-flex items-center">View Project →</span>
      </div>
    </div>
  );
};

export default CaseCard;