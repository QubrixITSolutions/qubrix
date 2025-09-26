import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_PHONE, COMPANY_PHONE_TEL, COMPANY_WHATSAPP_LINK } from '../config/company';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info & Logo */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4 select-none">
              <img
                src="/logoqubrix.png"
                alt="QUBRIX Logo"
                className="h-12 w-auto object-contain mr-1.5 drop-shadow-md"
                loading="lazy"
                decoding="async"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent tracking-tight font-brand">
                QUBRIX
              </h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your Vision, Our Innovation. Transforming businesses through cutting-edge digital solutions and AI-powered technology.
            </p>
            
            {/* Social: Only WhatsApp */}
            <div className="flex space-x-4">
              <a
                href={COMPANY_WHATSAPP_LINK}
                className="bg-gray-800 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-green-600 transition-all duration-300"
                title="WhatsApp"
                aria-label="Chat with us on WhatsApp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.5 0 .2 5.3.2 11.86c0 2.1.56 4.14 1.63 5.94L0 24l6.36-1.67a11.83 11.83 0 005.7 1.46h.01c6.56 0 11.86-5.3 11.86-11.86 0-3.17-1.24-6.16-3.41-8.39zM12.06 21.3h-.01a9.4 9.4 0 01-4.8-1.32l-.34-.2-3.77 1 1.01-3.67-.22-.35a9.44 9.44 0 01-1.46-5.12c0-5.2 4.23-9.42 9.44-9.42 2.52 0 4.88.98 6.66 2.76a9.38 9.38 0 012.77 6.66c-.01 5.2-4.24 9.42-9.44 9.42zm5.39-7.05c-.29-.14-1.71-.84-1.98-.93-.27-.1-.47-.14-.67.14-.2.29-.77.93-.95 1.12-.17.19-.35.21-.64.07-.29-.14-1.22-.45-2.32-1.45-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.12-.59.12-.12.29-.31.43-.47.14-.16.19-.27.29-.45.1-.19.05-.35-.02-.5-.07-.14-.67-1.62-.92-2.23-.24-.58-.49-.5-.67-.51l-.57-.01c-.19 0-.5.07-.76.35-.26.29-1 1-1 2.44s1.02 2.83 1.16 3.02c.14.19 2.02 3.09 4.89 4.34.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.71-.7 1.95-1.38.24-.69.24-1.28.17-1.39-.07-.11-.26-.18-.55-.32z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services/custom-software-development" className="text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block">
                  Custom Software Development
                </Link>
              </li>
              <li>
                <Link to="/services/website-ecommerce-development" className="text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block">
                  Website & E-commerce
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link to="/services/ai-agents-automation" className="text-gray-300 hover:text-white hover:translate-x-1 transform transition-all duration-300 inline-block">
                  AI Agents & Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href={COMPANY_PHONE_TEL} className="text-gray-300 text-sm hover:underline" aria-label="Call us">
                  {COMPANY_PHONE}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-purple-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-300 text-sm">hello@qubrix.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 QUBRIX. All rights reserved. Made with ❤️ for innovation.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;