import type { LucideIcon } from 'lucide-react'
import { Braces, BrainCircuit, Cloud, Database, Gauge, Layers3, MessageSquareText } from 'lucide-react'

export const services: { number: string; title: string; description: string; items: string[]; icon: LucideIcon; tag: string }[] = [
  { number: '01', title: 'Product engineering', description: 'Build digital products that solve real business problems and are ready to evolve as your business grows.', items: ['Web applications & SaaS', 'MVP development', 'Frontend & backend engineering', 'Third-party integrations'], icon: Layers3, tag: 'IDEA → PRODUCT' },
  { number: '02', title: 'AI & intelligent applications', description: 'Bring practical AI capabilities into your products and workflows—thoughtfully, securely, and with a clear purpose.', items: ['LLM integration', 'RAG & vector search', 'Document intelligence', 'AI-powered workflows'], icon: BrainCircuit, tag: 'DATA → INTELLIGENCE' },
  { number: '03', title: 'Backend & platform engineering', description: 'Build reliable systems behind the scenes, designed for performance, maintainability, and scale.', items: ['API engineering', 'Database architecture', 'Multi-tenant SaaS', 'Identity & access control'], icon: Database, tag: 'FOUNDATION → SCALE' },
  { number: '04', title: 'Cloud & delivery engineering', description: 'Prepare applications for reliable production delivery and the next stage of your business.', items: ['Cloud deployment', 'Docker & CI/CD', 'Production readiness', 'Reliability improvements'], icon: Cloud, tag: 'CODE → PRODUCTION' },
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
  { q: 'How do you estimate project costs and timelines?', a: 'We start by understanding the outcome, scope, constraints, and dependencies. From there, we propose a practical delivery approach with a clear estimate before work begins.' },
  { q: 'Can we engage you for ongoing engineering support?', a: 'Yes. Ongoing engagements can cover product development, platform improvements, integrations, maintenance, and evolving technical priorities.' },
  { q: 'How do we get started?', a: 'Share a short overview of what you want to build or improve. We will review the context and discuss a sensible next step.' },
]
