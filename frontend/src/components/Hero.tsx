import React from 'react';

const Hero: React.FC = () => {
  // Quote modal trigger removed from Hero; modal now opened via Navbar only

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (!servicesSection) return;

    // Calculate navbar height
    const navbar = document.querySelector('nav');
    const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
    
    // Simple buffer for spacing
    const buffer = window.innerWidth < 768 ? 20 : 30;
    
    // Calculate target position
    const elementPosition = servicesSection.offsetTop;
    const targetPosition = Math.max(0, elementPosition - navbarHeight - buffer);
    
    // Ensure we don't scroll past the bottom
    const maxScrollPosition = document.documentElement.scrollHeight - window.innerHeight;
    const finalPosition = Math.min(targetPosition, maxScrollPosition);

    // Single smooth scroll call - no jerky multiple animations
    window.scrollTo({
      top: finalPosition,
      behavior: 'smooth'
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (!contactSection) return;

    // Calculate navbar height
    const navbar = document.querySelector('nav');
    const navbarHeight = navbar ? navbar.getBoundingClientRect().height : 80;
    
    // Simple buffer for spacing
    const buffer = window.innerWidth < 768 ? 20 : 30;
    
    // Calculate target position
    const elementPosition = contactSection.offsetTop;
    const targetPosition = Math.max(0, elementPosition - navbarHeight - buffer);
    
    // Ensure we don't scroll past the bottom
    const maxScrollPosition = document.documentElement.scrollHeight - window.innerHeight;
    const finalPosition = Math.min(targetPosition, maxScrollPosition);

    // Single smooth scroll call - no jerky multiple animations
    window.scrollTo({
      top: finalPosition,
      behavior: 'smooth'
    });
  };

  return (
    <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20 lg:py-28 animate-fade-in">
      <div className="container mx-auto px-4">
        {/* Two Column Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left animate-slide-in-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up animation-delay-200">
          <span className="font-brand bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">QUBRIX</span> – Your Partner for Custom Software, Websites, and AI Solutions
        </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed animate-fade-in-up animation-delay-400">
              We transform your vision into powerful digital solutions that drive growth and innovation for your business.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10 text-sm animate-fade-in-up animation-delay-600">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <span className="font-semibold text-lg">5+</span>
                <span className="ml-2 text-blue-100">Years of Experience</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <span className="font-semibold text-lg">100+</span>
                <span className="ml-2 text-blue-100">Projects Completed</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                <span className="font-semibold text-lg">100+</span>
                <span className="ml-2 text-blue-100">Trusted Clients</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-800">
              <button 
                onClick={scrollToServices}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg group"
              >
                <span className="group-hover:animate-pulse">Get Started</span>
              </button>
              <button 
                onClick={scrollToContact}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl group"
              >
                <span className="group-hover:animate-pulse">Contact Us</span>
              </button>
            </div>
          </div>

          {/* Right Column - Illustration Placeholder */}
          <div className="hidden lg:block animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-96 flex items-center justify-center border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
              <div className="text-center">
                {/* Professional Illustration Placeholder */}
                <div className="w-64 h-48 bg-gradient-to-br from-white/20 to-white/5 rounded-xl mb-6 flex items-center justify-center mx-auto">
                  <div className="text-6xl opacity-50">💼</div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-blue-100">Professional Solutions</h3>
                <p className="text-blue-200 text-sm">Custom-built technology that scales with your business</p>
                
                {/* Feature Icons */}
                <div className="flex justify-center gap-4 mt-6">
                  {/* Website & E-commerce Development */}
                  <div
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12 relative group"
                    aria-label="Website & E-commerce Development"
                    title="Website & E-commerce Development"
                  >
                    <span className="text-2xl">🌐</span>
                    <div className="absolute -top-2 -translate-y-full left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                      Website & E-commerce
                    </div>
                  </div>

                  {/* Mobile App Development */}
                  <div
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12 relative group"
                    aria-label="Mobile App Development"
                    title="Mobile App Development"
                  >
                    <span className="text-2xl">📱</span>
                    <div className="absolute -top-2 -translate-y-full left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                      Mobile App Development
                    </div>
                  </div>

                  {/* AI Agents & Automation */}
                  <div
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12 relative group"
                    aria-label="AI Agents & Automation"
                    title="AI Agents & Automation"
                  >
                    <span className="text-2xl">🤖</span>
                    <div className="absolute -top-2 -translate-y-full left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                      AI Agents & Automation
                    </div>
                  </div>

                  {/* Custom Software Development */}
                  <div
                    className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-110 hover:rotate-12 relative group"
                    aria-label="Custom Software Development"
                    title="Custom Software Development"
                  >
                    <span className="text-2xl">💻</span>
                    <div className="absolute -top-2 -translate-y-full left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                      Custom Software Development
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Illustration - Shows on smaller screens */}
        <div className="lg:hidden mt-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="flex justify-center gap-6 mb-4">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center" title="Website & E-commerce Development" aria-label="Website & E-commerce Development">
                <span className="text-3xl">🌐</span>
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center" title="Mobile App Development" aria-label="Mobile App Development">
                <span className="text-3xl">📱</span>
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center" title="AI Agents & Automation" aria-label="AI Agents & Automation">
                <span className="text-3xl">🤖</span>
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center" title="Custom Software Development" aria-label="Custom Software Development">
                <span className="text-3xl">💻</span>
              </div>
            </div>
            <p className="text-blue-200 text-sm">Web • Mobile • AI • Software</p>
          </div>
        </div>
      </div>

  {/* QuoteModal removed from Hero (centralized in Navbar) */}
    </section>
  );
};

export default Hero;