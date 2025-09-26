import React from 'react';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  gradient: string;
  slug: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, image, gradient, slug }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    try { sessionStorage.setItem('lastProject', slug) } catch {}
    navigate(`/projects/${slug}`)
  };
  return (
    <div
      data-project-slug={slug}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleClick()}
      aria-label={`${title} project - view details`}
      className={`group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 bg-gradient-to-br ${gradient} aspect-[4/3] flex flex-col will-change-transform`}
    >
      {/* Subtle icon watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-15">
        <div className="text-7xl select-none text-white/30 transform transition-transform duration-1000 ease-[cubic-bezier(.19,1,.22,1)] group-hover:scale-110 group-hover:rotate-1">
          {image}
        </div>
      </div>
      {/* Content */}
  <div className="relative z-20 p-6 flex flex-col h-full transition-transform duration-700 group-hover:translate-y-[-4px]">
        <div className="mb-4">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-wide bg-white/15 px-3 py-1 rounded-full backdrop-blur-sm text-white/90 shadow-sm border border-white/20 group-hover:bg-white/20 transition-colors duration-500">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-white leading-snug mb-3 line-clamp-2 relative">
          <span className="relative z-10 group-hover:drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)] transition-all duration-700">
          {title}
          </span>
          <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white/60 rounded-full transition-all duration-700 group-hover:w-full"></span>
        </h3>
        <div className="mt-auto pt-2">
          <span className="inline-flex items-center text-sm font-semibold text-white/90 group-hover:text-white transition-all">
            <span className="relative flex items-center px-2 py-1 rounded-md">
              <span className="mr-1 relative z-10">View Project</span>
              <span className="relative z-10 inline-block transform transition-transform duration-500 group-hover:translate-x-1">→</span>
              <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 bg-white/15 transition-opacity duration-500 -z-10" />
            </span>
          </span>
        </div>
      </div>
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-700 group-hover:opacity-95 z-10 pointer-events-none" />
      {/* Animated subtle sheen */}
      <div className="pointer-events-none absolute -inset-[40%] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.18),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0" />
      {/* Scale on hover for depth */}
      <div className="absolute inset-0 scale-100 group-hover:scale-[1.02] transition-transform duration-[1100ms] ease-[cubic-bezier(.19,1,.22,1)] z-0" />
    </div>
  );
};

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      image: "🛒",
      gradient: "from-blue-500 to-purple-600",
      slug: 'ecommerce-platform'
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Development",
      image: "📱",
      gradient: "from-green-500 to-teal-600",
      slug: 'mobile-banking-app'
    },
    {
      title: "AI Chatbot System",
      category: "AI & Automation",
      image: "🤖",
      gradient: "from-orange-500 to-red-600",
      slug: 'ai-chatbot-system'
    },
    {
      title: "Healthcare Management",
      category: "Custom Software",
      image: "🏥",
      gradient: "from-cyan-500 to-blue-600",
      slug: 'healthcare-management'
    },
    {
      title: "Restaurant POS System",
      category: "Business Solutions",
      image: "🍽️",
      gradient: "from-purple-500 to-pink-600",
      slug: 'restaurant-pos-system'
    },
    {
      title: "Learning Management System",
      category: "Educational Platform",
      image: "📚",
      gradient: "from-indigo-500 to-purple-600",
      slug: 'learning-management-system'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we've helped businesses transform their digital presence with innovative solutions.
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className={`animate-scale-in animation-delay-${(index + 2) * 200}`}>
              <ProjectCard
                title={project.title}
                category={project.category}
                image={project.image}
                gradient={project.gradient}
                slug={project.slug}
              />
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-1000">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl glow-on-hover group">
            <span className="group-hover:animate-pulse">View All Projects</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;