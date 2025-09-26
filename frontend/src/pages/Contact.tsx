import React from 'react';
import ContactForm from '../components/ContactForm';
import { COMPANY_PHONE, COMPANY_PHONE_TEL } from '../config/company';

const Contact: React.FC = () => {
  return (
    <div>
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Let's discuss your project and how we can help bring your vision to life
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-primary-600 mr-4 mt-1">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">123 Business Street, Suite 100<br />City, State 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary-600 mr-4 mt-1">📞</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <a href={COMPANY_PHONE_TEL} className="text-gray-600 hover:underline">{COMPANY_PHONE}</a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary-600 mr-4 mt-1">✉️</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@qubrix.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="text-primary-600 mr-4 mt-1">🕒</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map placeholder */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-600">Interactive Map Coming Soon</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;