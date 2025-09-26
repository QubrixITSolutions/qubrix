// Centralized company contact details
const COUNTRY_CODE = "+91"; // India
const LOCAL_NUMBER = "9464742314";

// Display-friendly phone number (with space)
export const COMPANY_PHONE = `${COUNTRY_CODE} ${LOCAL_NUMBER}`; // +91 9464742314

// E.164 format for tel: links (+<country><number>)
export const COMPANY_PHONE_E164 = `${COUNTRY_CODE}${LOCAL_NUMBER}`; // +919464742314
export const COMPANY_PHONE_TEL = `tel:${COMPANY_PHONE_E164}`;

// WhatsApp requires international number without '+'
export const COMPANY_WHATSAPP = COMPANY_PHONE_E164.replace("+", ""); // 919464742314
export const COMPANY_WHATSAPP_LINK = `https://wa.me/${COMPANY_WHATSAPP}?text=Hello%20QUBRIX%2C%20I%20have%20a%20project%20inquiry.`;
