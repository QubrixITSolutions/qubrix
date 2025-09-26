import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy: React.FC = () => {
  return (
    <article className="relative py-24 bg-white">
      <div className="absolute -top-40 -right-32 w-96 h-96 bg-primary-500/5 blur-3xl rounded-full" />
      <div className="container mx-auto px-4 max-w-4xl relative">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">This Privacy Policy explains how we collect, use, disclose and safeguard your information when you visit our website or engage our services.</p>
          <p className="mt-4 text-sm text-gray-500">Last Updated: <time dateTime="2025-09-23">September 23, 2025</time></p>
          <div className="mt-6">
            <Link to="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white transition group">
              <span className="transition-transform group-hover:-translate-x-0.5">←</span>
              <span>Back to Home</span>
            </Link>
          </div>
        </header>

        <nav aria-label="On this page" className="mb-10 border border-gray-200 rounded-xl p-5 bg-gray-50">
          <h2 className="text-sm font-semibold text-gray-700 mb-3">Contents</h2>
          <ol className="space-y-2 text-sm list-decimal list-inside text-gray-600">
            <li><a href="#scope" className="hover:text-primary-600 transition">Scope & Definitions</a></li>
            <li><a href="#data-we-collect" className="hover:text-primary-600 transition">Data We Collect</a></li>
            <li><a href="#use-of-data" className="hover:text-primary-600 transition">How We Use Data</a></li>
            <li><a href="#legal-bases" className="hover:text-primary-600 transition">Legal Bases</a></li>
            <li><a href="#retention" className="hover:text-primary-600 transition">Data Retention</a></li>
            <li><a href="#sharing" className="hover:text-primary-600 transition">Sharing & Transfers</a></li>
            <li><a href="#security" className="hover:text-primary-600 transition">Security Measures</a></li>
            <li><a href="#rights" className="hover:text-primary-600 transition">Your Rights</a></li>
            <li><a href="#contact" className="hover:text-primary-600 transition">Contact</a></li>
          </ol>
        </nav>

        <section id="scope" className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-4">1. Scope & Definitions</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">This Policy applies to personal data we process in relation to visitors, prospects, customers and end-users of solutions we develop. “Personal Data” means any information relating to an identified or identifiable natural person.</p>
        </section>

        <section id="data-we-collect" className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-4">2. Data We Collect</h2>
          <ul className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed list-disc list-inside">
            <li>Contact data (name, email, phone)</li>
            <li>Business context (company, role, industry)</li>
            <li>Usage data (pages viewed, referring URLs, device attributes)</li>
            <li>Engagement metadata (support requests, quote inquiries)</li>
            <li>Technical logs (IP address, browser type, session identifiers)</li>
          </ul>
        </section>

        <section id="use-of-data" className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Data</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">We process personal data to:</p>
          <ul className="space-y-2 text-gray-700 text-sm md:text-base list-disc list-inside">
            <li>Provide, operate and improve our services</li>
            <li>Respond to inquiries and deliver proposals</li>
            <li>Analyze website performance & optimize experience</li>
            <li>Enforce agreements & protect against fraud/abuse</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section id="legal-bases" className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-4">4. Legal Bases (EEA/UK)</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">Where GDPR applies, our processing is grounded in: performance of contract, legitimate interests (e.g. securing & improving services), legal compliance and consent (for analytics/marketing).</p>
        </section>

        <section id="retention" className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">We retain personal data only as long as necessary for the purposes described or as required by applicable law, then delete or irreversibly anonymize it.</p>
        </section>

        <section id="sharing" className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-4">6. Sharing & International Transfers</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">We may share data with vetted sub-processors (cloud hosting, analytics, communications) under DPA and transfer safeguards (e.g. SCCs) where required.</p>
        </section>

        <section id="security" className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-4">7. Security Measures</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">Controls include role-based access, encryption in transit, network isolation, secure SDLC practices, monitoring & incident response procedures.</p>
        </section>

        <section id="rights" className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-4">8. Your Rights</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base mb-4">Subject to jurisdiction you may have rights to access, rectify, delete, restrict, object, port data, or withdraw consent. Requests are verified and processed within statutory timelines.</p>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">To exercise rights, email <a href="mailto:privacy@qubrix.com" className="text-primary-600 hover:underline">privacy@qubrix.com</a>.</p>
        </section>

        <section id="contact" className="mb-10 scroll-mt-24">
          <h2 className="text-2xl font-semibold mb-4">9. Contact</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">Questions or concerns? Reach our Data Protection contact at <a href="mailto:privacy@qubrix.com" className="text-primary-600 hover:underline">privacy@qubrix.com</a>.</p>
        </section>
      </div>
    </article>
  )
}

export default PrivacyPolicy
