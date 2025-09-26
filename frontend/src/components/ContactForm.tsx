import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500"
              placeholder="John"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500"
              placeholder="Doe"
            />
          </div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500"
            placeholder="john@example.com"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Subject
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500"
            placeholder="Project inquiry"
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-primary-500"
            placeholder="Tell us about your project..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-primary-600 text-white py-3 rounded-lg hover:bg-primary-700 font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;