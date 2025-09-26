import React, { useState } from 'react';
import QuoteModal from './QuoteModal';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const closeQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <a href="#" className="flex items-center group cursor-pointer select-none" aria-label="QUBRIX Home">
            <img
              src="/logoqubrix.png"
              alt="QUBRIX Logo"
              className="h-10 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
              decoding="async"
            />
            <span className="ml-0.5 text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight group-hover:opacity-90 transition-opacity font-brand">
              QUBRIX
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium transform hover:scale-110 hover:-translate-y-1 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium transform hover:scale-110 hover:-translate-y-1 relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium transform hover:scale-110 hover:-translate-y-1 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium transform hover:scale-110 hover:-translate-y-1 relative group">
              Portfolio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-primary-600 transition-all duration-300 font-medium transform hover:scale-110 hover:-translate-y-1 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button 
              onClick={openQuoteModal}
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-all duration-300 font-semibold transform hover:scale-105 hover:shadow-lg group glow-on-hover"
            >
              <span className="group-hover:animate-pulse">Get a Quote</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-primary-600 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-200">
              <a
                href="#"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md font-medium"
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md font-medium"
              >
                About
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md font-medium"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md font-medium"
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <button 
                  onClick={openQuoteModal}
                  className="w-full bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                >
                  Get a Quote
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

  {/* Quote Modal */}
  <QuoteModal isOpen={isQuoteModalOpen} onClose={closeQuoteModal} leadSource="navbar" />
    </nav>
  );
};

export default Navbar;