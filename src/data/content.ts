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
  { id: '01', category: 'AI PRODUCT ENGINEERING', title: 'Multi-workspace document assistant', description: 'An AI-powered document workspace bringing document processing, vector search, and intelligent conversations together.', stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'pgvector'], kind: 'document' },
  { id: '02', category: 'AI-ASSISTED PRODUCTIVITY', title: 'Doc Studio', description: 'A productivity-focused document workspace exploring a considered editing experience and AI-assisted workflows.', stack: ['Next.js', 'TypeScript', 'AI workflows'], kind: 'studio' },
  { id: '03', category: 'PLATFORM ENGINEERING', title: 'Arch-OS', description: 'A sophisticated collaborative platform with real-time application architecture, structured data visualization, and scalable foundations.', stack: ['TypeScript', 'Next.js', 'GraphQL', 'PostgreSQL'], kind: 'platform' },
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
