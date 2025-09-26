import React, { useState, useEffect } from 'react';
import { useMutation } from 'convex/react';
import { api } from '../../convex/_generated/api';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  titleText?: string; // override main heading
  subtitleText?: string; // override sub text
  submitLabel?: string; // override submit button label
  successTitle?: string; // override success title
  successMessage?: string; // override success message
  leadSource?: string; // label describing entry point
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: string;
  projectDetails: string;
}

const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  titleText = 'Get a Free Quote',
  subtitleText = "Tell us about your project and we'll provide you with a detailed proposal.",
  submitLabel = 'Get Free Quote',
  successTitle = 'Request Sent!',
  successMessage = "Thank you for your interest. We'll get back to you within 24 hours.",
  leadSource = 'quote-modal'
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    projectDetails: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitLead = useMutation(api.leads.create);

  // Project type options
  const projectTypes = [
    { value: '', label: 'Select Project Type' },
    { value: 'custom-software', label: 'Custom Software Development' },
    { value: 'website', label: 'Website Development' },
    { value: 'ecommerce', label: 'E-commerce Platform' },
    { value: 'mobile-app', label: 'Mobile App Development' },
    { value: 'ai-automation', label: 'AI & Automation Solutions' },
    { value: 'other', label: 'Other' }
  ];

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Handle form input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setError(null);

    try {
      const trimmedPhone = formData.phone.trim();

      await submitLead({
        name: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: trimmedPhone ? trimmedPhone : undefined,
        projectType: formData.projectType,
        projectDetails: formData.projectDetails.trim(),
        source: leadSource,
      });

      setShowSuccess(true);

      // Clear form inputs
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectType: '',
        projectDetails: ''
      });

      // Automatically close modal after success message
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 2500);
    } catch (err) {
      console.error('Failed to submit lead', err);
      setError('Something went wrong while sending your request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-opacity duration-150 ease-out ${
        isOpen ? 'opacity-100 pointer-events-auto bg-black/50' : 'opacity-0 pointer-events-none bg-black/20'
      }`}
      onClick={handleBackdropClick}
    >
      <div
        role="dialog"
        aria-modal={isOpen}
        className={`relative w-full max-w-lg bg-white rounded-2xl shadow-2xl transform transition-all duration-150 ease-out will-change-transform will-change-opacity ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        } max-h-[90vh] overflow-y-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Success Alert */}
        {showSuccess && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-95 rounded-2xl z-10 animate-fade-in">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-scale-in">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{successTitle}</h3>
              <p className="text-gray-600">{successMessage}</p>
            </div>
          </div>
        )}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200 transform hover:scale-110 z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Modal Header */}
        <div className="px-8 pt-8 pb-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{titleText}</h2>
          <p className="text-gray-600">{subtitleText}</p>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="px-8 py-6 space-y-6">
          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 shadow-sm">
              {error}
            </div>
          )}

          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-blue-400 transform focus:scale-105"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
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
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-blue-400 transform focus:scale-105"
              placeholder="Enter your email address"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-blue-400 transform focus:scale-105"
              placeholder="Enter your phone number"
            />
          </div>

          {/* Project Type */}
          <div>
            <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-2">
              Type of Project *
            </label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none hover:border-blue-400 transform focus:scale-105 cursor-pointer"
            >
              {projectTypes.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Project Details */}
          <div>
            <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700 mb-2">
              Project Details *
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 outline-none resize-vertical hover:border-blue-400 transform focus:scale-105"
              placeholder="Please describe your project requirements, timeline, budget range, and any specific features you need..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl glow-on-hover ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Sending Request...
                </div>
              ) : (
                submitLabel
              )}
            </button>
          </div>

          {/* Additional Info */}
          <div className="pt-2 text-center">
            <p className="text-sm text-gray-500">
              We'll review your request and get back to you within 24 hours with a detailed proposal.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;