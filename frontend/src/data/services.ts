export interface ServiceInfo {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  features: string[]; // legacy naming kept; displayed as "Key Features"
  useCases: string[];
  faqs: { q: string; a: string }[];
  // New fields for enhanced service page structure & SEO
  metaTitle: string;
  metaDescription: string;
  benefits: { title: string; description: string; icon: string }[]; // icon is a heroicon name or custom key
  testimonials: { client: string; company?: string; quote: string; result?: string }[];
  caseStudies: { title: string; summary: string; result?: string }[];
}

export const services: ServiceInfo[] = [
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    tagline: 'Tailored systems that scale with your business',
    description: 'We build robust, secure and scalable software solutions aligned exactly with your workflows, helping you reduce manual effort and accelerate growth.',
    metaTitle: 'Custom Software Development Services | QUBRIX',
    metaDescription: 'Custom software development services delivering scalable, secure and high-performance systems tailored to your business processes and growth objectives.',
    features: [
      'End-to-end architecture & development',
      'API design & systems integration',
      'Scalable cloud-native deployments',
      'Performance & security best practices',
      'Maintenance & iterative enhancement'
    ],
    useCases: [
      'Internal process automation platforms',
      'Inventory & logistics management',
      'Workflow orchestration tools',
      'Bespoke CRM / ERP extensions',
      'Data dashboards & reporting layers'
    ],
    faqs: [
      { q: 'How long does a custom build take?', a: 'Most MVPs ship in 4–10 weeks depending on scope; we phase delivery for faster ROI.' },
      { q: 'Do you handle maintenance?', a: 'Yes. We offer ongoing support, monitoring, optimization, and feature iteration.' }
    ],
    benefits: [
      { title: 'Faster Time-to-Value', description: 'Phased delivery approach ensures early usable versions and iterative enhancement.', icon: 'rocket' },
      { title: 'Built for Scale', description: 'Cloud-native foundations & modular architecture support future feature growth.', icon: 'scale' },
      { title: 'Security First', description: 'OWASP-aligned coding practices, hardened infrastructure & secure authentication.', icon: 'shield' }
    ],
    testimonials: [
      { client: 'CTO', company: 'LogiCore', quote: 'QUBRIX delivered a platform that cut our manual ops work by 60% in under 3 months.', result: '60% manual task reduction' }
    ],
    caseStudies: [
      { title: 'Logistics Workflow Platform', summary: 'Automated multi-step freight coordination replacing email + spreadsheet chaos.', result: '2.3x process throughput' }
    ]
  },
  {
    slug: 'website-ecommerce-development',
    title: 'Website & E-commerce Development',
    tagline: 'High-converting digital storefronts & brand experiences',
    description: 'From corporate sites to conversion-focused stores, we craft fast, SEO-friendly experiences that engage and sell.',
    metaTitle: 'E-commerce & Website Development Agency | QUBRIX',
    metaDescription: 'High-performance e-commerce & website development focused on conversion, Core Web Vitals, accessibility and scalable architecture.',
    features: [
      'Responsive UX & accessibility',
      'Headless commerce & CMS integration',
      'Performance & Core Web Vitals optimization',
      'Secure payments & checkout flow',
      'SEO & analytics instrumentation'
    ],
    useCases: [
      'Brand & marketing websites',
      'Multi-vendor marketplaces',
      'Subscription & membership platforms',
      'Landing pages for product launches',
      'Localized international storefronts'
    ],
    faqs: [
      { q: 'Which platforms do you support?', a: 'We build custom and integrate Shopify, WooCommerce, headless CMS (Strapi, Contentful) & more.' },
      { q: 'Can you migrate my existing site?', a: 'Yes. We handle audits, content migration, redirects, and performance uplift.' }
    ],
    benefits: [
      { title: 'Conversion Focused', description: 'UI/UX decisions backed by analytics & CRO best practices.', icon: 'trending-up' },
      { title: 'Lightning Fast', description: 'Optimized bundles & caching strategies for top Core Web Vitals scores.', icon: 'zap' },
      { title: 'Search Optimized', description: 'Semantic markup, structured data & performance tuned for organic growth.', icon: 'search' }
    ],
    testimonials: [
      { client: 'Head of Growth', company: 'DigiRetail', quote: 'Organic traffic rose 38% and checkout speed improved dramatically.', result: '+38% organic traffic' }
    ],
    caseStudies: [
      { title: 'Headless Commerce Rebuild', summary: 'Replatformed monolith to headless stack with optimized storefront experience.', result: '18% conversion lift' }
    ]
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    tagline: 'Engaging mobile experiences for iOS & Android',
    description: 'We design and build intuitive mobile applications that delight users and align with business outcomes—supporting native integrations and offline-first workflows.',
    metaTitle: 'Mobile App Development Services | QUBRIX',
    metaDescription: 'Cross-platform and native mobile app development with offline-first design, analytics and scalable architecture.',
    features: [
      'Cross-platform & native strategies',
      'Offline sync & data caching',
      'Push notifications & engagement',
      'App Store & Play Store deployment',
      'Iterative analytics-driven improvements'
    ],
    useCases: [
      'On-demand service platforms',
      'Delivery & logistics tracking',
      'Fitness, health & wellness apps',
      'Productivity & collaboration tools',
      'Customer loyalty & engagement apps'
    ],
    faqs: [
      { q: 'Do you support post-launch updates?', a: 'Yes. We plan release cycles, monitoring, and feature iteration.' },
      { q: 'Can you integrate with existing APIs?', a: 'Absolutely. We design stable integration layers and can extend your current backend.' }
    ],
    benefits: [
      { title: 'User-Centric Design', description: 'We prototype & test flows early to ensure adoption & retention.', icon: 'user-circle' },
      { title: 'Offline Ready', description: 'Robust caching & sync patterns keep apps functional with poor connectivity.', icon: 'cloud-off' },
      { title: 'Analytics Driven', description: 'In-app metrics guide prioritization & iterative improvement.', icon: 'chart-bar' }
    ],
    testimonials: [
      { client: 'Product Manager', company: 'FleetTrack', quote: 'Launch quality was excellent—support tickets dropped vs prior version.', result: 'App rating 4.8 → 4.9' }
    ],
    caseStudies: [
      { title: 'Logistics Tracking App', summary: 'Delivered a cross-platform driver + dispatcher app with real-time telemetry.', result: 'Reduced delivery ETA variance 27%' }
    ]
  },
  {
    slug: 'ai-agents-automation',
    title: 'AI Agents & Automation',
    tagline: 'Intelligent systems that reduce manual workload',
    metaTitle: 'AI Agents & Automation Consulting | QUBRIX',
    metaDescription: 'Design & deployment of AI agents, workflow automation and retrieval augmented generation systems for operational leverage.',
    description: 'We implement AI-driven workflows and agents that augment teams—improving efficiency, accuracy, and decision-making across operations.',
    features: [
      'Process & workflow automation',
      'Retrieval augmented generation (RAG)',
      'Intelligent chat & support agents',
      'Data enrichment & classification',
      'Custom ML model integration'
    ],
    useCases: [
      'Customer support triage & deflection',
      'Document summarization & knowledge bots',
      'Lead qualification & routing',
      'Back-office process automation',
      'Operational monitoring & alerts'
    ],
    faqs: [
      { q: 'Can you integrate AI into existing tools?', a: 'Yes. We embed automation into CRMs, ERPs, ticketing, and internal dashboards.' },
      { q: 'Is data secure?', a: 'We apply encryption, role-based access, and can deploy on private infrastructure.' }
    ],
    benefits: [
      { title: 'Operational Leverage', description: 'Automate repetitive knowledge & decision workflows for scale.', icon: 'cpu' },
      { title: 'Context-Aware', description: 'RAG pipelines connect agents to private domain knowledge safely.', icon: 'book-open' },
      { title: 'Measurable ROI', description: 'Instrumentation to track time saved & deflection rates.', icon: 'target' }
    ],
    testimonials: [
      { client: 'COO', company: 'SupportHive', quote: 'Ticket resolution time dropped significantly after agent deployment.', result: '37% faster resolution' }
    ],
    caseStudies: [
      { title: 'Knowledge Bot Deployment', summary: 'Rolled out retrieval-augmented assistant across internal knowledge base.', result: 'Deflected ~28% of L1 queries' }
    ]
  }
]

export const getServiceBySlug = (slug: string) => services.find(s => s.slug === slug)
