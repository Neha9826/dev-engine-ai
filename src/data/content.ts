import type { LucideIcon } from 'lucide-react'
import { Braces, BrainCircuit, Cloud, Database, Gauge, Layers3, MessageSquareText, Users } from 'lucide-react'

export const services: { number: string; title: string; description: string; items: string[]; icon: LucideIcon; tag: string }[] = [
  { number: '01', title: 'Custom software & product engineering', description: 'Turn business needs into useful digital products, from a focused first release to a mature business application.', items: ['Web applications & business software', 'MVPs and product development', 'Frontend & backend engineering', 'Third-party integrations'], icon: Layers3, tag: 'IDEA → PRODUCT' },
  { number: '02', title: 'SaaS & platform development', description: 'Build dependable cloud platforms and multi-tenant SaaS products designed to support customers and future growth.', items: ['Multi-tenant SaaS architecture', 'Cloud-based platforms', 'Platform integrations', 'Identity & access foundations'], icon: Cloud, tag: 'PLATFORM → SCALE' },
  { number: '03', title: 'AI & intelligent automation', description: 'Apply AI to real workflows, helping teams find information, handle documents and reduce repetitive work.', items: ['LLM integration', 'RAG & vector search', 'Document intelligence', 'AI-powered workflows'], icon: BrainCircuit, tag: 'DATA → INTELLIGENCE' },
  { number: '04', title: 'Backend, API & system modernisation', description: 'Improve the systems behind your product with clearer APIs, stronger foundations and better performance.', items: ['API architecture & integrations', 'Backend and database optimisation', 'Legacy system modernisation', 'Performance & reliability improvements'], icon: Database, tag: 'FOUNDATION → PERFORMANCE' },
  { number: '05', title: 'Engineering extension', description: 'Add dependable engineering capacity for defined workstreams, existing product improvements and ongoing delivery.', items: ['Dedicated engineering support', 'Defined workstream ownership', 'Existing product enhancements', 'Agency delivery partnerships'], icon: Users, tag: 'EXTRA CAPACITY → DELIVERY' },
]

export const principles = [
  { icon: Braces, title: 'Engineering before hype', text: 'We focus on practical solutions that work beyond a prototype—and make sense in the real world.' },
  { icon: BrainCircuit, title: 'AI with purpose', text: 'We bring AI into the picture when it creates genuine value, not simply because it is the latest thing.' },
  { icon: MessageSquareText, title: 'Clear communication', text: 'You stay close to the work, with visible progress, thoughtful decisions, and clear next steps.' },
  { icon: Gauge, title: 'Built for what’s next', text: 'We make considered engineering choices that support maintainability and future growth.' },
]

export const projects = [
  {
    id: '01',
    engagement: 'CLIENT ENGAGEMENT',
    category: 'FINTECH & DATA PLATFORM',
    title: 'RIA Catalyst',
    description: 'Engineering contributions to a financial-services intelligence platform, with a focus on efficient API delivery for data-heavy product workflows.',
    outcome: 'Reduced client payload size by 25% through GraphQL and gRPC streaming.',
    stack: ['GraphQL', 'gRPC streaming', 'TypeScript'],
    kind: 'platform',
    links: [{ label: 'Explore live platform', href: 'https://riacatalyst.com/' }],
  },
  {
    id: '02',
    engagement: 'CLIENT ENGAGEMENT',
    category: 'TRAVEL & PAYMENTS',
    title: 'CareMyTrip',
    description: 'Travel product workflows spanning itinerary planning, billing and payment gateway integration.',
    outcome: 'Reduced MySQL query execution time by more than 40% through query optimisation.',
    stack: ['PHP', 'Laravel', 'MySQL', 'Payment integration'],
    kind: 'document',
    links: [{ label: 'Explore live website', href: 'https://www.caremytrip.com/' }],
  },
  {
    id: '03',
    engagement: 'CLIENT ENGAGEMENT',
    category: 'MULTI-TENANT MARKETPLACE',
    title: 'SoilnWater',
    description: 'A marketplace platform bringing vendor storefronts, local services, listings and community content together in one multi-tenant experience.',
    outcome: '',
    stack: ['Laravel', 'MySQL', 'Multi-tenant architecture', 'Marketplace'],
    kind: 'studio',
    links: [
      { label: 'Explore marketplace', href: 'https://www.soilnwater.in/' },
      { label: 'View Romya Electronics storefront', href: 'https://www.soilnwater.in/store/romya' },
    ],
  },
  {
    id: '04',
    engagement: 'WEBSITE PROJECT',
    category: 'HOSPITALITY & DIGITAL EXPERIENCE',
    title: 'Shivoham Retreat',
    description: 'A hospitality website presenting accommodation, retreat experiences and useful paths for guests planning a stay in Dehradun.',
    outcome: '',
    stack: ['Website experience', 'Responsive design', 'Content architecture'],
    kind: 'studio',
    links: [{ label: 'Explore live website', href: 'https://shivohamretreat.com/' }],
  },
  {
    id: '05',
    engagement: 'IN-HOUSE PRODUCT',
    category: 'SAAS & ARCHITECTURE',
    title: 'Arch-OS',
    description: 'A collaborative architecture platform with multi-tenant workspaces, schema-first GraphQL, persistent visual workflows and AI-assisted architecture review.',
    outcome: 'Architecture workflows can be exported as Docker Compose configurations for a practical path from design to implementation.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'PostgreSQL'],
    kind: 'platform',
    links: [{ label: 'View product repository', href: 'https://github.com/Neha9826/arch-os/tree/feature/saas-dashboard' }],
  },
  {
    id: '06',
    engagement: 'IN-HOUSE PRODUCT',
    category: 'AI & KNOWLEDGE SYSTEMS',
    title: 'Multi-workspace document assistant',
    description: 'A retrieval-augmented assistant concept for processing documents, finding relevant context with vector search and supporting grounded AI conversations across workspaces.',
    outcome: '',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'pgvector', 'RAG'],
    kind: 'document',
    links: [],
  },
  {
    id: '07',
    engagement: 'IN-HOUSE PRODUCT',
    category: 'DOCUMENT PRODUCTIVITY',
    title: 'Doc Studio',
    description: 'A document-focused workspace exploring structured editing experiences, reusable content workflows and AI-assisted productivity.',
    outcome: '',
    stack: ['Next.js', 'TypeScript', 'AI workflows'],
    kind: 'studio',
    links: [],
  },
]

export const faqs = [
  { q: 'What types of projects does Dev Engine AI work on?', a: 'We work on custom web applications, SaaS products, AI-enabled experiences, backend platforms, APIs, integrations, and improvements to existing software.' },
  { q: 'Can you work with our existing application or engineering team?', a: 'Yes. We can work within an existing codebase, collaborate with your team, take ownership of a defined workstream, or provide focused engineering capacity.' },
  { q: 'Can you integrate AI into an existing product?', a: 'Yes. We can help identify a useful AI use case and implement capabilities such as LLM-powered features, document intelligence, and retrieval-based experiences.' },
  { q: 'Do you work with international clients?', a: 'Yes. We work with businesses in India and internationally, using remote collaboration and clear communication throughout the engagement.' },
  { q: 'How does an engagement work?', a: 'We start with a discovery conversation, agree on scope and milestones, then deliver in clear increments with regular reviews and visible progress.' },
  { q: 'How do you estimate project costs and timelines?', a: 'We first understand the outcome, scope, constraints, and dependencies. Then we propose a practical delivery approach with a clear estimate before work begins.' },
  { q: 'Can we engage you for ongoing engineering support?', a: 'Yes. Ongoing engagements can cover product development, platform improvements, integrations, maintenance, and evolving technical priorities.' },
  { q: 'How do we get started?', a: 'Share a short overview of what you want to build or improve. We will review the context and discuss a sensible next step.' },
]
