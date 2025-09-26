import React from 'react';

const About: React.FC = () => {
  const team = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in tech industry',
    },
    {
      name: 'Jane Smith',
      role: 'CTO',
      description: 'Technical expert specializing in AI and cloud architecture',
    },
    {
      name: 'Mike Johnson',
      role: 'Head of Design',
      description: 'Creative director with expertise in user experience design',
    },
  ];

  return (
    <div>
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 font-brand">About QUBRIX</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're a team of passionate technologists dedicated to transforming businesses through innovative digital solutions
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                At QUBRIX, we turn your vision into reality through innovative technology solutions. 
                With over 5 years of experience and 100+ successful projects, we've helped businesses 
                across industries scale and thrive in the digital landscape.
              </p>
              <p className="text-gray-600 mb-6">
                Our expertise spans custom software development, web applications, mobile apps, and cutting-edge 
                AI agents. We don't just build technology – we craft solutions that drive real business growth 
                and transformation.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-600">100+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">100+</div>
                  <div className="text-gray-600">Trusted Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-600">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Company Image Placeholder</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the talented individuals who make QUBRIX a success
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;