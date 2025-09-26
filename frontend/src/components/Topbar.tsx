import React from 'react';
import { COMPANY_PHONE, COMPANY_PHONE_TEL, COMPANY_WHATSAPP_LINK } from '../config/company';

const Topbar: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white py-2 px-4">
      <div className="container mx-auto flex justify-between items-center text-sm">
        <div className="flex space-x-4">
          <a href={COMPANY_PHONE_TEL} className="hover:underline" aria-label="Call us">
            📞 {COMPANY_PHONE}
          </a>
          <span>✉️ info@qubrix.com</span>
        </div>
        <div className="flex space-x-3">
          <a
            href={COMPANY_WHATSAPP_LINK}
            className="hover:text-primary-400 inline-flex items-center gap-2"
            title="WhatsApp"
            aria-label="Chat with us on WhatsApp"
          >
            <svg aria-hidden="true" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.52 3.48A11.94 11.94 0 0012.06 0C5.5 0 .2 5.3.2 11.86c0 2.1.56 4.14 1.63 5.94L0 24l6.36-1.67a11.83 11.83 0 005.7 1.46h.01c6.56 0 11.86-5.3 11.86-11.86 0-3.17-1.24-6.16-3.41-8.39zM12.06 21.3h-.01a9.4 9.4 0 01-4.8-1.32l-.34-.2-3.77 1 1.01-3.67-.22-.35a9.44 9.44 0 01-1.46-5.12c0-5.2 4.23-9.42 9.44-9.42 2.52 0 4.88.98 6.66 2.76a9.38 9.38 0 012.77 6.66c-.01 5.2-4.24 9.42-9.44 9.42zm5.39-7.05c-.29-.14-1.71-.84-1.98-.93-.27-.1-.47-.14-.67.14-.2.29-.77.93-.95 1.12-.17.19-.35.21-.64.07-.29-.14-1.22-.45-2.32-1.45-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.12-.59.12-.12.29-.31.43-.47.14-.16.19-.27.29-.45.1-.19.05-.35-.02-.5-.07-.14-.67-1.62-.92-2.23-.24-.58-.49-.5-.67-.51l-.57-.01c-.19 0-.5.07-.76.35-.26.29-1 1-1 2.44s1.02 2.83 1.16 3.02c.14.19 2.02 3.09 4.89 4.34.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.71-.7 1.95-1.38.24-.69.24-1.28.17-1.39-.07-.11-.26-.18-.55-.32z"/>
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;