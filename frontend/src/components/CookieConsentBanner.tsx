import React from 'react'
import { useCookieConsent } from '../context/CookieConsentContext'

const CookieConsentBanner: React.FC = () => {
  const { hasSetPreferences, acceptAll, rejectNonEssential, openPreferences } = useCookieConsent()

  if (hasSetPreferences) return null

  return (
    <div role="dialog" aria-labelledby="cookie-banner-title" aria-modal="false" className="fixed z-50 bottom-4 left-4 right-4 md:left-8 md:right-auto max-w-xl p-6 bg-gray-900 text-white rounded-2xl shadow-2xl ring-1 ring-white/10 backdrop-blur">
      <h2 id="cookie-banner-title" className="text-lg font-semibold mb-2">We Value Your Privacy</h2>
      <p className="text-sm text-gray-300 leading-relaxed mb-5">We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. You can accept all, reject non-essential, or manage preferences.</p>
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
        <button onClick={acceptAll} className="px-5 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400 ring-offset-gray-900 transition">Accept All</button>
        <button onClick={rejectNonEssential} className="px-5 py-2.5 rounded-lg bg-gray-700 hover:bg-gray-600 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ring-offset-gray-900 transition">Reject Non-Essential</button>
        <button onClick={openPreferences} className="px-5 py-2.5 rounded-lg border border-gray-600 hover:bg-gray-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 ring-offset-gray-900 transition">Preferences</button>
      </div>
    </div>
  )
}

export default CookieConsentBanner
