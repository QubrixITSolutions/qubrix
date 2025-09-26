import React from 'react'
import { Link } from 'react-router-dom'
import { useCookieConsent } from '../context/CookieConsentContext'

const CookiePolicy: React.FC = () => {
  const { preferences, lastUpdated, openPreferences } = useCookieConsent()
  return (
    <article className="relative py-24 bg-white">
      <div className="absolute -top-52 -right-32 w-96 h-96 bg-primary-500/5 blur-3xl rounded-full" />
      <div className="container mx-auto px-4 max-w-4xl relative">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Cookie Policy</h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">This Cookie Policy explains how and why we use cookies and similar technologies and how you can manage your preferences.</p>
          <p className="mt-4 text-sm text-gray-500">Last Updated: <time dateTime="2025-09-23">September 23, 2025</time></p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white transition group">
              <span className="transition-transform group-hover:-translate-x-0.5">←</span>
              <span>Back to Home</span>
            </Link>
          </div>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">1. What Are Cookies?</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">Cookies are small text files stored on your device when you visit a website. They help the site function, enhance performance, and enable analytics or personalization.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">2. Categories We Use</h2>
          <table className="w-full text-left text-sm mb-6 border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50 text-gray-700 uppercase text-xs tracking-wide">
              <tr>
                <th className="p-3">Category</th>
                <th className="p-3">Purpose</th>
                <th className="p-3 w-32">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-3 font-medium text-gray-900">Essential</td>
                <td className="p-3 text-gray-600">Core site operation, security & load balancing</td>
                <td className="p-3 text-green-600 font-semibold">Always Active</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-gray-900">Functional</td>
                <td className="p-3 text-gray-600">Preference retention & enhanced features</td>
                <td className="p-3">{preferences.functional ? <span className="text-green-600 font-medium">Enabled</span> : <span className="text-gray-400">Disabled</span>}</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-gray-900">Analytics</td>
                <td className="p-3 text-gray-600">Traffic insights & performance measurement</td>
                <td className="p-3">{preferences.analytics ? <span className="text-green-600 font-medium">Enabled</span> : <span className="text-gray-400">Disabled</span>}</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-gray-900">Marketing</td>
                <td className="p-3 text-gray-600">Audience segmentation & campaign attribution</td>
                <td className="p-3">{preferences.marketing ? <span className="text-green-600 font-medium">Enabled</span> : <span className="text-gray-400">Disabled</span>}</td>
              </tr>
            </tbody>
          </table>
          <button onClick={openPreferences} className="px-5 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary-400">Update Preferences</button>
          {lastUpdated && <p className="text-xs text-gray-500 mt-2">Preferences last updated: {new Date(lastUpdated).toLocaleString()}</p>}
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">3. Third-Party Tools</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">Where enabled, analytics or marketing cookies are served by third parties that may process aggregated usage metrics. We only load these after consent.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">4. Managing Cookies</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">You can also adjust browser settings to block or delete cookies. Disabling some may affect site functionality. You may revisit this page anytime to update your preferences.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">5. Contact</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">Questions? Email <a href="mailto:privacy@qubrix.com" className="text-primary-600 hover:underline">privacy@qubrix.com</a>.</p>
        </section>
      </div>
    </article>
  )
}

export default CookiePolicy
