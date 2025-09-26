import React from 'react'
import { Link } from 'react-router-dom'

const TermsOfService: React.FC = () => {
  return (
    <article className="relative py-24 bg-white">
      <div className="absolute -top-40 -left-32 w-96 h-96 bg-primary-500/5 blur-3xl rounded-full" />
      <div className="container mx-auto px-4 max-w-4xl relative">
        <header className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Service</h1>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">These Terms govern access to and use of our website, products, and related services. By using our site you agree to these Terms.</p>
          <p className="mt-4 text-sm text-gray-500">Last Updated: <time dateTime="2025-09-23">September 23, 2025</time></p>
          <div className="mt-6">
            <Link to="/" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-white transition group">
              <span className="transition-transform group-hover:-translate-x-0.5">←</span>
              <span>Back to Home</span>
            </Link>
          </div>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">Use of the site constitutes acceptance of these Terms and any referenced policies (Privacy Policy, Cookie Policy, Acceptable Use). If you do not agree, discontinue use.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">2. Services</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">We provide software consulting, design, engineering and support services. Specific terms may be defined in a separate Master Services Agreement or Statement of Work.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">3. Acceptable Use</h2>
          <ul className="space-y-2 text-gray-700 text-sm md:text-base list-disc list-inside">
            <li>No unauthorized access, probing or disruption</li>
            <li>No unlawful, infringing or harmful content</li>
            <li>No misuse of confidential or proprietary information</li>
            <li>No impersonation or misrepresentation</li>
            <li>Maintain security of authentication credentials</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">4. Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">All code, designs, and deliverables produced during engagements are owned per governing agreement. Absent an agreement, all site content is © QUBRIX. Trademarks belong to respective owners.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">5. Confidentiality</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">Both parties agree to protect non-public information disclosed under an engagement with a commercially reasonable standard of care and not to use it beyond agreed purposes.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">6. Disclaimers</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">Site content is provided “as is”. We disclaim warranties of merchantability, fitness for a particular purpose and non-infringement to the fullest extent permitted by law.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">To the maximum extent permitted, QUBRIX is not liable for indirect, incidental, consequential, special or punitive damages, or lost profits, revenues or data arising from use of the site.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">8. Termination</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">We may suspend or terminate access for suspected violations. Provisions relating to ownership, confidentiality, liability, and governing law survive termination.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">These Terms are governed by the laws of the jurisdiction in which QUBRIX is established, excluding conflict of law rules.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">10. Contact</h2>
          <p className="text-gray-700 leading-relaxed text-sm md:text-base">For questions email <a href="mailto:legal@qubrix.com" className="text-primary-600 hover:underline">legal@qubrix.com</a>.</p>
        </section>
      </div>
    </article>
  )
}

export default TermsOfService
