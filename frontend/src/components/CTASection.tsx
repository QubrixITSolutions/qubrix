import React, { useState } from 'react';
import QuoteModal from './QuoteModal';
import { COMPANY_WHATSAPP } from '../config/company';

const CTASection: React.FC = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const scheduleMessage = "Hi QUBRIX, I'd like to schedule a meeting to discuss my project.";
  const scheduleUrl = `https://wa.me/${COMPANY_WHATSAPP}?text=${encodeURIComponent(scheduleMessage)}`;

  return (
    <section className="py-16 bg-primary-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Turn Your Vision Into Reality?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let's discuss how our custom software, websites, apps and AI agents can scale your business
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setIsQuoteOpen(true)}
            className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100"
          >
            Get a Quote
          </button>
          <a
            href={scheduleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 inline-flex items-center justify-center"
            aria-label="Schedule a meeting on WhatsApp"
            title="Schedule Meeting"
          >
            Schedule Meeting
          </a>
        </div>
      </div>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        leadSource="cta-section"
      />
    </section>
  );
};

export default CTASection;