import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getServiceBySlug } from '../data/services'

// Simple icon mapping using Heroicons-like names (placeholder svg paths)
const Icon: React.FC<{ name: string; className?: string }> = ({ name, className = 'w-6 h-6' }) => {
  const common = 'stroke-current';
  switch (name) {
    case 'rocket': return <svg className={className} fill="none" strokeWidth={1.7} viewBox="0 0 24 24"><path className={common} strokeLinecap="round" strokeLinejoin="round" d="M5 15l-2 6 6-2 9.5-9.5a3.536 3.536 0 10-5-5L4 14v0z" /><path className={common} strokeLinecap="round" strokeLinejoin="round" d="M12 7.5l4 4" /></svg>
    case 'scale': return <svg className={className} fill="none" strokeWidth={1.7} viewBox="0 0 24 24"><path className={common} strokeLinecap="round" strokeLinejoin="round" d="M12 3v4m0 0l3 3m-3-3L9 10m9 2a6 6 0 11-12 0 6 6 0 0112 0z" /></svg>
    case 'shield': return <svg className={className} fill="none" strokeWidth={1.7} viewBox="0 0 24 24"><path className={common} strokeLinecap="round" strokeLinejoin="round" d="M12 3l8 4v5c0 5-3.5 9-8 9s-8-4-8-9V7l8-4z" /></svg>
    case 'trending-up': return <svg className={className} fill="none" strokeWidth={1.7} viewBox="0 0 24 24"><path className={common} strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 7-7" /><path className={common} strokeLinecap="round" strokeLinejoin="round" d="M14 5h7v7" /></svg>
    case 'zap': return <svg className={className} fill="none" strokeWidth={1.7} viewBox="0 0 24 24"><path className={common} strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" /></svg>
    case 'search': return <svg className={className} fill="none" strokeWidth={1.7} viewBox="0 0 24 24"><circle className={common} cx="11" cy="11" r="7" /><path className={common} strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" /></svg>
    case 'user-circle': return <svg className={className} fill="none" strokeWidth={1.7} viewBox="0 0 24 24"><circle className={common} cx="12" cy="8" r="4" /><path className={common} strokeLinecap="round" strokeLinejoin="round" d="M4 20c1.5-4 6.5-6 8-6s6.5 2 8 6" /></svg>
    case 'cloud-off': return <svg className={className} fill="none" strokeWidth={1.7} viewBox="0 0 24 24"><path className={common} strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M9.5 5.5a6 6 0 018.25 6.75M7 17a4 4 0 01-.6-7.96" /></svg>
    case 'chart-bar': return <svg className={className} fill="none" strokeWidth={1.7} viewBox="0 0 24 24"><path className={common} strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M8 16v-5M12 16V8M16 16v-3" /></svg>
    case 'cpu': return <svg className={className} fill="none" strokeWidth={1.7} viewBox="0 0 24 24"><rect className={common} x="5" y="5" width="14" height="14" rx="2" /><rect className={common} x="9" y="9" width="6" height="6" rx="1" /><path className={common} strokeLinecap="round" d="M9 1v3m6-3v3M9 20v3m6-3v3M1 9h3m-3 6h3m16-6h3m-3 6h3" /></svg>
    case 'book-open': return <svg className={className} fill="none" strokeWidth={1.7} viewBox="0 0 24 24"><path className={common} strokeLinecap="round" strokeLinejoin="round" d="M3 5a4 4 0 014-4h4v18H7a4 4 0 00-4 4V5zM13 1h4a4 4 0 014 4v18a4 4 0 00-4-4h-4V1z" /></svg>
    case 'target': return <svg className={className} fill="none" strokeWidth={1.7} viewBox="0 0 24 24"><circle className={common} cx="12" cy="12" r="9" /><circle className={common} cx="12" cy="12" r="5" /><circle className={common} cx="12" cy="12" r="2" /></svg>
    default: return <span className={className}>•</span>
  }
}

interface ServiceDetailsProps { onOpenQuote: () => void }

const ServiceDetails: React.FC<ServiceDetailsProps> = ({ onOpenQuote }) => {
  const { slug } = useParams()
  const navigate = useNavigate()
  const service = slug ? getServiceBySlug(slug) : undefined

  useEffect(() => {
    if (service) {
      document.title = service.metaTitle
      const metaDesc = document.querySelector('meta[name="description"]') || (() => {
        const m = document.createElement('meta');
        m.name = 'description';
        document.head.appendChild(m);
        return m;
      })();
      metaDesc.setAttribute('content', service.metaDescription)
      // Basic JSON-LD structured data injection
      const ld = document.getElementById('service-jsonld');
      const script = ld || Object.assign(document.createElement('script'), { id: 'service-jsonld', type: 'application/ld+json' });
      const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.metaDescription,
        areaServed: 'Global',
        provider: { '@type': 'Organization', name: 'QUBRIX' },
        serviceType: service.title,
        offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' }
      };
      script.textContent = JSON.stringify(jsonLd);
      if (!ld) document.head.appendChild(script);
    }
  }, [service])

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="text-gray-600 mb-6">The service you are looking for may have been renamed or moved.</p>
        <button onClick={() => navigate('/')} className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition font-semibold">Go Home</button>
      </div>
    )
  }

  return (
    <div className="service-details">
      {/* Hero */}
      <section className="relative overflow-hidden py-28 bg-gradient-to-br from-primary-700 via-primary-800 to-[#0f172a] text-white">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent_60%)]" />
        <div className="absolute -top-32 -right-32 w-[34rem] h-[34rem] bg-primary-500/10 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 max-w-6xl relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-white/10 backdrop-blur text-sm font-medium tracking-wide border border-white/20">{service.tagline}</div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-6">{service.title}</h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl">{service.description}</p>
            <div className="mt-10 flex flex-wrap gap-4">
              <button onClick={onOpenQuote} className="group relative overflow-hidden bg-white text-primary-700 font-semibold px-8 py-4 rounded-lg shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-white/30">
                <span className="relative z-10">Get a Quote</span>
                <span className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
              <button onClick={() => navigate('/#services')} className="px-8 py-4 rounded-lg font-semibold border border-white/40 hover:bg-white/10 backdrop-blur transition">Back</button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12 mb-12">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Why This Matters</h2>
              <p className="text-gray-600 text-lg leading-relaxed">We focus on business impact. Each engagement is engineered for measurable outcomes — resilience, scalability, and accelerated delivery cycles.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {service.benefits.map((b, i) => (
              <div key={i} className="group relative p-8 rounded-2xl border border-gray-100 shadow-sm bg-white hover:shadow-lg transition-all overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-primary-600 text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-105 transition-transform">
                    <Icon name={b.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900">{b.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-8">
            <h2 className="text-3xl font-bold tracking-tight">Key Capabilities</h2>
            <p className="text-gray-600 max-w-xl">Our delivery approach balances architectural rigor with iterative velocity — avoiding over-engineering while protecting long-term extensibility.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((f, i) => (
              <div key={i} className="group p-6 rounded-xl bg-white border border-gray-200 hover:border-primary-300 shadow-sm hover:shadow-md transition-all">
                <div className="text-sm font-semibold text-primary-700 mb-2 tracking-wide uppercase">Capability {i + 1}</div>
                <p className="text-gray-700 leading-relaxed text-sm">{f}</p>
                <div className="mt-4 h-1 w-0 group-hover:w-16 bg-primary-600 transition-all rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-8">
            <h2 className="text-3xl font-bold tracking-tight">Industry Use Cases</h2>
            <p className="text-gray-600 max-w-xl">Representative domains where this service unlocks operational leverage and strategic differentiation.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.useCases.map((c, i) => (
              <div key={i} className="relative p-6 rounded-xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md hover:border-primary-200 transition-all">
                <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-[radial-gradient(circle_at_30%_30%,rgba(59,130,246,0.12),transparent_65%)] transition-opacity" />
                <p className="relative z-10 text-gray-700 text-sm leading-relaxed">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      {service.caseStudies.length > 0 && (
        <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
          <div className="container mx-auto px-4 max-w-6xl relative">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-8">
              <h2 className="text-3xl font-bold tracking-tight">Mini Case Study</h2>
              <p className="text-gray-300 max-w-xl text-sm leading-relaxed">Proof of execution: a snapshot of measurable outcomes from related engagements.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.caseStudies.map((cs, i) => (
                <div key={i} className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all">
                  <h3 className="font-semibold text-lg mb-3 tracking-tight">{cs.title}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4">{cs.summary}</p>
                  {cs.result && <div className="inline-flex items-center text-xs font-medium px-3 py-1 rounded-full bg-primary-500/20 text-primary-200 border border-primary-400/30">{cs.result}</div>}
                  <div className="absolute inset-0 border border-transparent group-hover:border-primary-400/40 rounded-2xl transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      {service.testimonials.length > 0 && (
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-8">
              <h2 className="text-3xl font-bold tracking-tight">What Clients Say</h2>
              <p className="text-gray-600 max-w-xl text-sm leading-relaxed">Outcome-focused feedback from stakeholders we partner with.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.testimonials.map((t, i) => (
                <blockquote key={i} className="group relative p-8 rounded-2xl border border-gray-100 bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition-all">
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center text-xl font-serif">“</div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-5">{t.quote}</p>
                  <footer className="text-xs font-semibold text-gray-900 tracking-wide">{t.client}{t.company && <span className="text-gray-500 font-normal">, {t.company}</span>}</footer>
                  {t.result && <div className="mt-3 text-[11px] inline-flex px-2.5 py-1 rounded-full bg-primary-100 text-primary-700 font-medium">{t.result}</div>}
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-8">
            <h2 className="text-3xl font-bold tracking-tight">FAQ</h2>
            <p className="text-gray-600 max-w-xl text-sm leading-relaxed">Answers to common commercial & delivery questions.</p>
          </div>
          <div className="divide-y divide-gray-200 bg-white rounded-2xl shadow-sm border border-gray-100">
            {service.faqs.map((faq, i) => (
              <details key={i} className="group p-6 cursor-pointer">
                <summary className="flex items-start justify-between font-semibold text-gray-800 focus:outline-none list-none">
                  <span className="pr-4 group-open:text-primary-600 transition-colors text-sm md:text-base">{faq.q}</span>
                  <span className="ml-4 text-primary-600 transform transition-transform group-open:rotate-90">→</span>
                </summary>
                <div className="mt-4 text-gray-600 leading-relaxed text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.12),transparent_60%)]" />
        <div className="container mx-auto px-4 max-w-4xl relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready to Accelerate Your Roadmap?</h2>
          <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">Engage a delivery partner obsessed with clarity, velocity and measurable product impact.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={onOpenQuote} className="group relative overflow-hidden bg-white text-primary-700 font-semibold px-10 py-4 rounded-lg shadow-lg transition-all focus:outline-none focus:ring-4 focus:ring-white/30">
              <span className="relative z-10">Get a Quote</span>
              <span className="absolute inset-0 bg-gradient-to-r from-white via-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button onClick={() => navigate('/#contact')} className="px-10 py-4 rounded-lg font-semibold border border-white/40 hover:bg-white/10 backdrop-blur transition">Book a Call</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceDetails
