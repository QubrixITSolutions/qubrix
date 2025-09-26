import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Amit Verma',
      company: 'RetailMax Solutions',
  text: 'QUBRIX built us a custom e-commerce platform with AI recommendations that increased our sales by 40%. Their vision became our success.',
      rating: 5,
    },
    {
      name: 'Neha Sharma',
      company: 'HealthFirst Clinics',
      text: 'The mobile app and AI diagnostic tools they developed revolutionized how we serve our patients. Exceptional quality and support.',
      rating: 5,
    },
    {
      name: 'Jaspreet Singh',
      company: 'Manufacturing Pro',
      text: 'Their custom software and AI agents automated our entire production line. ROI was achieved in just 6 months. Outstanding work!',
      rating: 5,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;