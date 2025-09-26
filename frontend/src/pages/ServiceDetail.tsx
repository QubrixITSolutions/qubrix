import React from 'react';

// LEGACY component kept temporarily; not used in new dynamic routing.
const LegacyServiceDetail: React.FC = () => {
  return (
    <div>
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Web Development</h1>
          <p className="text-xl max-w-3xl">
            Modern, responsive websites and web applications built with cutting-edge technologies
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Offer</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span>Custom website development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span>Responsive design for all devices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span>E-commerce solutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span>CMS integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3">✓</span>
                  <span>SEO optimization</span>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Technologies</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-gray-100 rounded-lg text-center">React</div>
                <div className="p-4 bg-gray-100 rounded-lg text-center">Vue.js</div>
                <div className="p-4 bg-gray-100 rounded-lg text-center">Node.js</div>
                <div className="p-4 bg-gray-100 rounded-lg text-center">Python</div>
                <div className="p-4 bg-gray-100 rounded-lg text-center">Next.js</div>
                <div className="p-4 bg-gray-100 rounded-lg text-center">Express</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegacyServiceDetail;