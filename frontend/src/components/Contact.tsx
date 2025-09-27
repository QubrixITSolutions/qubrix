import React, { useState } from 'react';
import { COMPANY_PHONE, COMPANY_PHONE_TEL } from '../config/company';
import { useMutation } from 'convex/react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '' // honeypot
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [serverError, setServerError] = useState<string | null>(null);

  // Using string path; ensure `npx convex dev` has generated api including contact.submit
  const submitMutation = useMutation('contact.submit:submit' as any);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const validate = () => {
    const fieldErrors: { name?: string; email?: string; message?: string } = {};
    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();
    if (name.length < 2 || name.length > 100) fieldErrors.name = 'Name must be 2-100 characters';
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) fieldErrors.email = 'Invalid email format';
    if (message.length < 10 || message.length > 5000) fieldErrors.message = 'Message must be 10-5000 characters';
    setErrors(fieldErrors);
    return Object.keys(fieldErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;
    if (formData.company) { // honeypot filled
      setStatus('error');
      setServerError('Submission rejected.');
      return;
    }
    setStatus('submitting');
    try {
      const res: any = await submitMutation({
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        company: formData.company,
        userAgent: navigator.userAgent,
      });
      if (res?.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', company: '' });
        setErrors({});
      } else {
        if (res.code === 'VALIDATION_ERROR') {
          setErrors(res.fieldErrors || {});
        } else if (res.code === 'RATE_LIMIT') {
          setServerError('Too many submissions. Please try again later.');
        } else {
          setServerError('Something went wrong. Please try again.');
        }
        setStatus('error');
      }
    } catch (err) {
      setServerError('Network or server error. Please retry.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with innovative digital solutions? Let's discuss your project and bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-2xl animate-slide-in-left hover:shadow-lg transition-all duration-500">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {status === 'success' && (
                <div className="p-4 rounded-lg bg-green-100 text-green-800 text-sm">Thank you! Your message has been sent.</div>
              )}
              {status === 'error' && serverError && (
                <div className="p-4 rounded-lg bg-red-100 text-red-800 text-sm" role="alert">{serverError}</div>
              )}
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none hover:border-blue-400 focus:scale-105 shadow-sm"
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none hover:border-blue-400 focus:scale-105 shadow-sm"
                  placeholder="Enter your email address"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 outline-none resize-vertical hover:border-blue-400 focus:scale-105 shadow-sm"
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </div>

              {/* Honeypot (visually hidden) */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl glow-on-hover group ${status === 'submitting' ? 'opacity-60 cursor-not-allowed' : 'hover:from-blue-700 hover:to-purple-700 transform hover:scale-105'}`}
              >
                <span className="group-hover:animate-pulse">{status === 'submitting' ? 'Sending…' : 'Send Message'}</span>
              </button>
            </form>
          </div>

          {/* Office Information */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                {/* Address removed as requested */}

                {/* Phone */}
                <div className="flex items-start space-x-4 hover:transform hover:scale-105 transition-all duration-300 group">
                  <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Phone Number</h4>
                    <a href={COMPANY_PHONE_TEL} className="text-gray-600 mt-1 hover:underline">{COMPANY_PHONE}</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 hover:transform hover:scale-105 transition-all duration-300 group">
                  <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Email Address</h4>
                    <p className="text-gray-600 mt-1">hello@qubrix.com</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4 hover:transform hover:scale-105 transition-all duration-300 group">
                  <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 transition-colors duration-300">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600 mt-1">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;