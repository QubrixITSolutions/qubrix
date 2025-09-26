export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role?: string;
}

export interface ProjectTechnology {
  name: string;
  logo?: string; // path to logo asset (optional)
  icon?: string; // fallback emoji/icon
}

export interface ProjectFeature {
  title: string;
  description: string;
  icon?: string; // emoji/icon
}

export interface Project {
  slug: string;
  shortTitle: string; // used on the card
  heroTitle: string;  // large detailed page title
  category: string;
  excerpt: string;
  description: string;
  heroDescription: string;
  gradientFrom: string; // tailwind from-* class
  gradientTo: string;   // tailwind to-* class
  gradientVia?: string; // optional via-* class
  features: ProjectFeature[];
  challenges: ProjectChallenge[];
  technologies: ProjectTechnology[];
  testimonial?: ProjectTestimonial;
  heroImage?: string; // path or placeholder
  gallery?: string[];
}

// Initial seed project data (can be expanded later)
export const projects: Project[] = [
  {
    slug: 'ecommerce-platform',
    shortTitle: 'AI-Powered E-commerce Platform',
    heroTitle: 'Best E-commerce Mobile App Development Company',
    category: 'Custom Software + AI',
    excerpt: 'Custom shopping platform with intelligent recommendations and automated customer engagement.',
    description: 'A scalable e-commerce ecosystem featuring AI-driven product recommendations, automated customer service via chat agents, real-time inventory synchronization, and advanced analytics dashboards for conversion optimization.',
    heroDescription: 'We engineered a next-gen e-commerce platform integrating AI recommendations, conversational automation, and performance-focused architecture to help merchants increase AOV and retention.',
  gradientFrom: 'from-blue-500',
  gradientTo: 'to-purple-600',
    features: [
      { title: 'AI Recommendations', description: 'Personalized product feeds powered by user behavior & similarity models.', icon: '🧠' },
      { title: 'Conversational Support', description: 'Integrated AI chat assistant resolving 60% of queries instantly.', icon: '💬' },
      { title: 'Headless Architecture', description: 'Decoupled front-end + API layer for multi-channel storefront delivery.', icon: '🧩' },
      { title: 'Real-time Inventory', description: 'WebSocket + queue based sync across warehouses and sales channels.', icon: '⚡' },
    ],
    challenges: [
      { challenge: 'Low conversion from product views to cart.', solution: 'Implemented vector similarity ranking + contextual bundles raising CTR by 18%.' },
      { challenge: 'High customer support load during peak hours.', solution: 'Deployed AI agent triaging FAQs and automating returns initiation.' },
      { challenge: 'Fragmented inventory data across locations.', solution: 'Built event-driven inventory sync microservice with eventual consistency.' },
      { challenge: 'Slow page loads on mobile networks.', solution: 'Adopted image optimization pipeline + code splitting; improved LCP to <2.1s.' },
    ],
    technologies: [
      { name: 'React', icon: '⚛️' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Tailwind CSS', icon: '🎨' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Redis', icon: '🧰' },
      { name: 'Docker', icon: '🐳' },
      { name: 'OpenAI API', icon: '🤖' },
    ],
    testimonial: {
      quote: 'The AI features transformed our retention metrics. The platform feels enterprise-grade yet agile.',
      author: 'Sarah Malik',
      role: 'Head of Digital Commerce'
    },
    heroImage: '/projects/ecommerce/hero-mock.png',
    gallery: ['/projects/ecommerce/screen1.png', '/projects/ecommerce/screen2.png']
  },
  {
    slug: 'mobile-banking-app',
    shortTitle: 'Mobile Banking App',
    heroTitle: 'Secure & Scalable Mobile Banking Application',
    category: 'Mobile Development + FinTech',
    excerpt: 'Cross‑platform mobile banking solution with biometric auth, real-time transactions, and fraud analytics.',
    description: 'A high-performance mobile banking platform enabling users to manage accounts, execute instant transfers, pay bills, monitor spending analytics, and receive proactive fraud alerts. Built with a security-first architecture and offline resilience.',
    heroDescription: 'We delivered a compliant, secure mobile banking experience featuring biometric authentication, encrypted real-time transaction processing, and intelligent fraud monitoring dashboards.',
  gradientFrom: 'from-green-500',
  gradientTo: 'to-teal-600',
    features: [
      { title: 'Biometric Login', description: 'Face ID / Fingerprint auth with secure device-bound key storage.', icon: '🔐' },
      { title: 'Real-time Ledger', description: 'Event-driven transaction engine with sub-second balance updates.', icon: '⚡' },
      { title: 'Spending Analytics', description: 'Categorization & visual insights using ML-based merchant tagging.', icon: '📊' },
      { title: 'Fraud Detection', description: 'Anomaly scoring model reduces false positives with adaptive thresholds.', icon: '🛡️' },
    ],
    challenges: [
      { challenge: 'Legacy core banking API latency.', solution: 'Introduced async aggregation layer + caching, cutting avg response from 900ms to 220ms.' },
      { challenge: 'High friction onboarding drop-off.', solution: 'Implemented progressive KYC with staged data capture increasing completion by 27%.' },
      { challenge: 'Security compliance overhead.', solution: 'Automated audit logging + encryption key rotation workflows.' },
      { challenge: 'Fraud false positives frustrating users.', solution: 'Adaptive anomaly model tuned with feedback loop reduced false positives by 35%.' },
    ],
    technologies: [
      { name: 'React Native', icon: '📱' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'GraphQL', icon: '🕸️' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Redis', icon: '🧰' },
      { name: 'Kafka', icon: '🧵' },
      { name: 'Vault', icon: '🔒' },
    ],
    testimonial: {
      quote: 'Security, speed, and usability finally in one app. Our mobile engagement doubled post-launch.',
      author: 'Daniel Khan',
      role: 'Chief Product Officer'
    },
    heroImage: '/projects/mobile-banking/hero-mock.png',
    gallery: ['/projects/mobile-banking/screen1.png', '/projects/mobile-banking/screen2.png']
  },
  {
    slug: 'ai-chatbot-system',
    shortTitle: 'AI Chatbot System',
    heroTitle: 'Enterprise AI Chatbot & Automation Platform',
    category: 'AI & Automation',
    excerpt: 'Multi-channel conversational AI that automates support, lead qualification, and internal workflows.',
    description: 'An extensible conversational AI platform supporting web, WhatsApp, and in-app channels. Features intent recognition, sentiment analysis, knowledge base retrieval, and workflow automation. Admins manage dialogue flows, monitor conversations, and push improvements via an adaptive training console.',
    heroDescription: 'We built a production-grade AI chatbot platform that reduces support load, accelerates response times, and automates routine processes—while staying aligned with brand tone and compliance requirements.',
  gradientFrom: 'from-orange-500',
  gradientTo: 'to-red-600',
    features: [
      { title: 'Omnichannel Support', description: 'Unified bot across Web, WhatsApp & in-app with shared context.', icon: '🌐' },
      { title: 'Retrieval-Augmented Responses', description: 'Hybrid RAG pipeline blends vector search + curated FAQ rules.', icon: '📚' },
      { title: 'Workflow Automation', description: 'Trigger ticket creation, CRM updates, and escalations automatically.', icon: '⚙️' },
      { title: 'Sentiment & Intent Analytics', description: 'Real-time dashboards improve training & CSAT forecasting.', icon: '📈' },
    ],
    challenges: [
      { challenge: 'High first-response times in peak hours.', solution: 'Implemented intent triage + auto-draft replies cutting median response from 90s to 12s.' },
      { challenge: 'Inconsistent answers from static FAQ pages.', solution: 'Deployed RAG pipeline with embedding refresh jobs for freshness.' },
      { challenge: 'Hard to escalate to humans seamlessly.', solution: 'Context handoff module passes full dialogue + sentiment summary.' },
      { challenge: 'Difficult KPI visibility for leadership.', solution: 'Built analytics layer tracking containment, CSAT proxy, resolution speed.' },
    ],
    technologies: [
      { name: 'React', icon: '⚛️' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Vector DB', icon: '🧠' },
      { name: 'Redis Queue', icon: '📨' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'OpenAI API', icon: '🤖' },
      { name: 'Docker', icon: '🐳' },
    ],
    testimonial: {
      quote: 'Containment jumped past 70% without hurting user satisfaction. The automation ROI was immediate.',
      author: 'Lina Chow',
      role: 'VP Customer Operations'
    },
    heroImage: '/projects/ai-chatbot/hero-mock.png',
    gallery: ['/projects/ai-chatbot/screen1.png', '/projects/ai-chatbot/screen2.png']
  },
  {
    slug: 'healthcare-management',
    shortTitle: 'Healthcare Management',
    heroTitle: 'Intelligent Healthcare Management & Telemedicine Suite',
    category: 'Healthcare Software',
    excerpt: 'Unified patient, scheduling, telehealth, and analytics platform improving clinical efficiency and care outcomes.',
    description: 'A modular healthcare platform providing secure patient records, virtual consultations, prescription management, appointment orchestration, and AI-powered triage support. Built with interoperability (FHIR-friendly) and audit-grade compliance at the core.',
    heroDescription: 'We delivered a privacy-first, scalable healthcare management system enabling providers to streamline workflows, improve patient engagement, and unlock actionable clinical insights.',
  gradientFrom: 'from-cyan-500',
  gradientTo: 'to-blue-600',
    features: [
      { title: 'Telemedicine Module', description: 'Encrypted low-latency video consultations with doctor notes integration.', icon: '💻' },
      { title: 'Smart Scheduling', description: 'Automated slot optimization reducing no-shows & resource bottlenecks.', icon: '🗓️' },
      { title: 'AI Triage Assistant', description: 'Pre-consult symptom intake & priority scoring for faster routing.', icon: '🩺' },
      { title: 'E-Prescriptions', description: 'Digital prescription workflows with pharmacy integration & tracking.', icon: '📄' },
    ],
    challenges: [
      { challenge: 'Inefficient appointment utilization.', solution: 'Implemented predictive scheduling + cancellation reshuffle improving utilization by 22%.' },
      { challenge: 'Fragmented patient communication channels.', solution: 'Unified messaging + notifications across SMS, in-app, and email.' },
      { challenge: 'Manual triage delays.', solution: 'AI-assisted intake reduced average pre-consult processing time by 40%.' },
      { challenge: 'Compliance & audit overhead.', solution: 'Centralized immutable audit trail with role-based access policies.' },
    ],
    technologies: [
      { name: 'React', icon: '⚛️' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'GraphQL', icon: '🕸️' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Redis', icon: '🧰' },
      { name: 'WebRTC', icon: '📹' },
      { name: 'Docker', icon: '🐳' },
    ],
    testimonial: {
      quote: 'Virtual care adoption skyrocketed after launch. Scheduling efficiency and triage speed noticeably improved.',
      author: 'Dr. Ayesha Rahman',
      role: 'Chief Medical Officer'
    },
    heroImage: '/projects/healthcare/hero-mock.png',
    gallery: ['/projects/healthcare/screen1.png', '/projects/healthcare/screen2.png']
  },
  {
    slug: 'restaurant-pos-system',
    shortTitle: 'Restaurant POS System',
    heroTitle: 'Unified Restaurant POS & Operations Platform',
    category: 'Hospitality Tech',
    excerpt: 'Cloud-based POS with table management, KDS routing, inventory, and real-time sales intelligence.',
    description: 'A modern restaurant management platform combining fast offline-capable POS terminals, kitchen display system (KDS) routing, dynamic menu configuration, staff performance analytics, inventory depletion tracking, and multi-location reporting into a single cohesive system.',
    heroDescription: 'We engineered a resilient POS + operations layer that helps restaurants reduce order friction, eliminate stockouts, and surface actionable performance metrics in real time.',
  gradientFrom: 'from-purple-500',
  gradientTo: 'to-pink-600',
    features: [
      { title: 'Offline Resilience', description: 'Local-first queue + sync engine keeps orders flowing during outages.', icon: '📡' },
      { title: 'Kitchen Display Routing', description: 'Smart course & station assignment improves prep sequencing.', icon: '👨‍🍳' },
      { title: 'Inventory Autotrack', description: 'Recipe-level consumption deducts stock with predictive restock alerts.', icon: '📦' },
      { title: 'Real-time Sales Dashboard', description: 'Multi-location KPI visibility with anomaly flagging.', icon: '📊' },
    ],
    challenges: [
      { challenge: 'Order delays during peak load.', solution: 'Implemented in-memory batching + WebSocket push reducing average ticket latency by 31%.' },
      { challenge: 'Manual inventory reconciliation errors.', solution: 'Recipe mapping + automatic deduction pipeline cut variance by 45%.' },
      { challenge: 'Connectivity instability causing POS lockups.', solution: 'Local write-behind cache + sync retries enabled seamless offline continuity.' },
      { challenge: 'Fragmented reporting across branches.', solution: 'Centralized analytics aggregator with hourly materialized metrics.' },
    ],
    technologies: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Redis', icon: '🧰' },
      { name: 'WebSockets', icon: '🔌' },
      { name: 'Docker', icon: '🐳' },
      { name: 'Kubernetes', icon: '☸️' },
    ],
    testimonial: {
      quote: 'Ticket times dropped and stockouts practically vanished. Operational clarity we never had before.',
      author: 'Imran Siddiqui',
      role: 'Franchise Operations Director'
    },
    heroImage: '/projects/restaurant-pos/hero-mock.png',
    gallery: ['/projects/restaurant-pos/screen1.png', '/projects/restaurant-pos/screen2.png']
  },
  {
    slug: 'learning-management-system',
    shortTitle: 'Learning Management System',
    heroTitle: 'Modern AI-Assisted Learning Management Platform',
    category: 'EdTech Platform',
    excerpt: 'Adaptive e-learning platform with content authoring, analytics, personalized paths, and engagement tools.',
    description: 'A scalable LMS enabling institutions and training providers to deliver interactive courses, track learner progress, and personalize experiences through adaptive modules, AI-generated practice, and real-time performance dashboards.',
    heroDescription: 'We built an extensible LMS that increases learner retention through personalization, gamification, and intelligent progress interventions.',
  gradientFrom: 'from-indigo-500',
  gradientTo: 'to-purple-600',
    features: [
      { title: 'Adaptive Learning Paths', description: 'Dynamic content sequencing based on performance & mastery signals.', icon: '🧭' },
      { title: 'Content Authoring Studio', description: 'Rich WYSIWYG + quiz builder with media embedding & versioning.', icon: '✍️' },
      { title: 'AI Practice Generation', description: 'Auto-generated formative questions aligned to taxonomy levels.', icon: '🤖' },
      { title: 'Progress & Engagement Analytics', description: 'Cohort heatmaps, dropout predictors, and intervention triggers.', icon: '📈' },
    ],
    challenges: [
      { challenge: 'Low completion rates in long-form courses.', solution: 'Adaptive segmentation surfaced micro-goals, boosting completion by 19%.' },
      { challenge: 'Manual quiz creation slowed content rollout.', solution: 'AI-assisted generator reduced assessment authoring time by 60%.' },
      { challenge: 'Instructors lacked early risk indicators.', solution: 'Predictive churn model flagged silent disengagement patterns.' },
      { challenge: 'Fragmented reporting across departments.', solution: 'Unified analytics warehouse with drill-down dashboards.' },
    ],
    technologies: [
      { name: 'React', icon: '⚛️' },
      { name: 'TypeScript', icon: '📘' },
      { name: 'Node.js', icon: '🟢' },
      { name: 'GraphQL', icon: '🕸️' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'Redis', icon: '🧰' },
      { name: 'Docker', icon: '🐳' },
      { name: 'OpenAI API', icon: '🤖' },
    ],
    testimonial: {
      quote: 'Learner engagement turned around dramatically—personalized pacing changed everything.',
      author: 'Nadia Hussain',
      role: 'Director of Digital Learning'
    },
    heroImage: '/projects/lms/hero-mock.png',
    gallery: ['/projects/lms/screen1.png', '/projects/lms/screen2.png']
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(p => p.slug === slug)
}

export function listProjects(): Project[] { return projects }
