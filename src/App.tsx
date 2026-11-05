import { useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion, type Variants } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Check, CircleDot, Code2, Database, Layers3, Plus, Send, Sparkles, Workflow } from 'lucide-react'
import Navbar from './components/Navbar'
import { Brand } from './components/Brand'
import SectionHeading from './components/SectionHeading'
import HeroVisual from './components/HeroVisual'
import { faqs, principles, projects, services } from './data/content'

const reveal: Variants = { hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } } }

function Hero() {
  return <section className="hero section-pad" id="top"><div className="container hero-layout">
    <motion.div className="hero-copy" initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.12 } } }}>
      <motion.div className="eyebrow" variants={reveal}><span className="eyebrow-dot" /> DEV ENGINE AI <span className="eyebrow-slash">/</span> SOFTWARE ENGINEERING STUDIO</motion.div>
      <motion.h1 variants={reveal}>Your next big idea deserves <em>better engineering.</em></motion.h1>
      <motion.p className="hero-description" variants={reveal}>We design and build scalable software products, powerful backend systems, and practical AI solutions—helping businesses move from ideas and prototypes to production-ready applications.</motion.p>
      <motion.div className="hero-actions" variants={reveal}><a className="button button-primary" href="#contact">Discuss your project <ArrowUpRight size={17} /></a><a className="text-link" href="#work">Explore our work <ArrowDown size={15} /></a></motion.div>
      <motion.div className="hero-capabilities" variants={reveal}><span><i /> Product engineering</span><span><i /> AI integration</span><span><i /> Scalable systems</span></motion.div>
    </motion.div>
    <motion.div className="hero-art" initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .8, delay: .25 }}><HeroVisual /></motion.div>
  </div><div className="container hero-bottom"><span>INDEPENDENT BY DESIGN. ENGINEERED TO DELIVER.</span><a href="#services">SCROLL TO EXPLORE <ArrowDown size={13} /></a></div></section>
}

function Services() {
  return <section className="section-pad services-section" id="services"><div className="container">
    <SectionHeading eyebrow="WHAT WE DO / 01" title={<>Strong foundations.<br /><span>Intelligent outcomes.</span></>} text="From the first product decision to the systems that power it, we bring the right engineering disciplines together." />
    <div className="services-grid">{services.map((service, i) => { const Icon = service.icon; return <motion.article className="service-card" key={service.number} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: .18 }} transition={{ delay: i * .06 }}>
      <div className="service-card-top"><span className="mono-label">{service.number} / CAPABILITY</span><span className="service-icon"><Icon size={19} /></span></div>
      <div className="service-content"><div className="service-tag">{service.tag}</div><h3>{service.title}</h3><p>{service.description}</p></div>
      <ul>{service.items.map(item => <li key={item}><span className="list-dash" />{item}</li>)}</ul>
      <a className="card-arrow" href="#contact" aria-label={`Discuss ${service.title}`}><ArrowUpRight size={18} /></a>
    </motion.article> })}</div>
  </div></section>
}

function WhyUs() {
  return <section className="section-pad why-section" id="why-us"><div className="container why-layout">
    <div className="why-intro"><div className="eyebrow"><span className="eyebrow-dot" /> THE DEV ENGINE APPROACH / 02</div><h2>Good software is built on <em>good decisions.</em></h2><p>Technology is only part of the equation. The real work is understanding what matters, choosing the right approach, and delivering something your business can depend on.</p><a href="#process" className="text-link">How we work <ArrowUpRight size={15} /></a></div>
    <div className="principles-grid">{principles.map(({ icon: Icon, title, text }, i) => <motion.div className="principle" key={title} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * .08 }}><div className="principle-index">0{i + 1}</div><div className="principle-icon"><Icon size={19} /></div><h3>{title}</h3><p>{text}</p></motion.div>)}</div>
  </div></section>
}

function ProjectVisual({ kind }: { kind: string }) {
  if (kind === 'document') return <div className="project-visual visual-document"><div className="mock-window"><div className="mock-top"><span /><span /><span /><small>workspace / research-notes</small></div><div className="mock-doc"><div className="mock-sidebar"><i /><i /><i /><i /></div><div className="mock-page"><span className="mock-kicker">KNOWLEDGE BASE / 04</span><b>Research that<br />moves forward.</b><i /><i /><i className="short" /><div className="mock-answer"><Sparkles size={12} /> AI SUMMARY <span>3 sources connected</span></div></div></div></div><div className="floating-chip chip-source"><CircleDot size={12} /> 12 SOURCES INDEXED</div><div className="floating-chip chip-vector">VECTOR SEARCH <span>0.94</span></div></div>
  if (kind === 'studio') return <div className="project-visual visual-studio"><div className="studio-window"><div className="studio-toolbar"><span>Untitled document</span><div><i /><i /><i /></div></div><div className="studio-body"><div className="studio-rail"><i /><i /><i /></div><div className="studio-paper"><small>MONDAY, 09:41 AM</small><b>Make space<br />for better work.</b><span /><span /><span className="wide" /><div className="ai-suggestion"><Sparkles size={13} /> Refine this paragraph <ArrowUpRight size={12} /></div></div></div></div><div className="studio-orb"><Sparkles size={24} /></div><span className="studio-caption">A MORE THOUGHTFUL WORKSPACE</span></div>
  return <div className="project-visual visual-platform"><div className="platform-canvas"><div className="platform-top"><span>LIVE SYSTEM MAP</span><span className="platform-live"><i /> SYNCED</span></div><div className="platform-map"><div className="platform-node node-a"><Layers3 size={15} /> APPLICATION</div><div className="platform-node node-b"><Workflow size={15} /> WORKFLOWS</div><div className="platform-node node-c"><Database size={15} /> DATA MODEL</div><div className="platform-node node-d"><Code2 size={15} /> API LAYER</div><svg viewBox="0 0 400 230"><path d="M90 60 195 110 310 58M195 110 100 185M195 110 310 185" /></svg></div></div><div className="platform-label">STRUCTURE / CONNECTION / CLARITY</div></div>
}

function SelectedWork() {
  return <section className="section-pad work-section" id="work"><div className="container"><div className="work-heading"><SectionHeading eyebrow="SELECTED WORK / 03" title={<>Thoughtful engineering.<br /><span>Real-world applications.</span></>} text="A look at the kinds of products and platforms we build. Some work is shared at a high level to respect confidentiality." /><div className="work-note"><span className="note-line" />PROJECT SNAPSHOTS<br />CAPABILITIES OVER CLAIMS</div></div>
    <div className="projects-list">{projects.map((project) => <motion.article className={`project-row project-${project.kind}`} key={project.id} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }}><div className="project-meta"><span>{project.id}</span><span>{project.category}</span></div><div className="project-info"><h3>{project.title}</h3><p>{project.description}</p><div className="tech-list">{project.stack.map(tech => <span key={tech}>{tech}</span>)}</div><div className="project-confidential">{project.kind === 'platform' ? <><span className="confidential-dot" /> SHARED AT A HIGH LEVEL</> : <><span className="confidential-dot" /> SELECTED CAPABILITIES</>}</div></div><ProjectVisual kind={project.kind} /></motion.article>)}</div>
  </div></section>
}

function Process() {
  const steps = [{ n: '01', title: 'Discover', text: 'Understand the business goals, users, requirements, and constraints.' }, { n: '02', title: 'Define', text: 'Agree on scope, technical approach, deliverables, timeline, and price.' }, { n: '03', title: 'Build', text: 'Develop the solution, share progress, and validate against agreed requirements.' }, { n: '04', title: 'Deliver & evolve', text: 'Hand over the completed work and discuss ongoing improvements or maintenance.' }]
  return <section className="section-pad process-section" id="process"><div className="container"><SectionHeading eyebrow="A CLEAR WAY FORWARD / 04" title={<>From first conversation<br /><span>to confident delivery.</span></>} text="A straightforward process, built around clarity and collaboration at every stage." />
    <div className="process-track">{steps.map((step, i) => <motion.div className="process-step" key={step.n} variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: i * .1 }}><div className="process-marker"><span>{step.n}</span><i /></div><h3>{step.title}</h3><p>{step.text}</p></motion.div>)}</div>
  </div></section>
}

function Engagement() {
  const models = [{ n: '01', title: 'Project-based delivery', text: 'For defined software projects, product features, integrations, and engineering milestones.', label: 'CLEAR SCOPE / DEFINED OUTCOME' }, { n: '02', title: 'Ongoing engineering', text: 'For businesses that need consistent development support and a partner who understands the product.', label: 'CONTINUITY / MOMENTUM' }, { n: '03', title: 'Engineering partnership', text: 'For software agencies that need additional engineering capacity or specialist implementation support.', label: 'COLLABORATION / CAPACITY' }]
  return <section className="section-pad engagement-section"><div className="container engagement-layout"><div><SectionHeading eyebrow="WAYS TO WORK TOGETHER / 05" title={<>The right model<br /><span>for the work.</span></>} text="Flexible ways to bring the engineering support your next milestone needs." /></div><div className="engagement-list">{models.map(m => <a className="engagement-item" href="#contact" key={m.n}><span className="engagement-number">{m.n}</span><div><h3>{m.title}</h3><p>{m.text}</p><small>{m.label}</small></div><ArrowUpRight size={20} /></a>)}</div></div></section>
}

function FAQ() {
  const [active, setActive] = useState<number | null>(0)
  return <section className="section-pad faq-section"><div className="container faq-layout"><div><SectionHeading eyebrow="GOOD QUESTIONS / 06" title={<>A few things<br /><span>you might be wondering.</span></>} text="If your question isn't covered here, tell us a little about your project and we'll take it from there." /></div><div className="faq-list">{faqs.map((faq, i) => <div className={`faq-item ${active === i ? 'faq-active' : ''}`} key={faq.q}><button aria-expanded={active === i} onClick={() => setActive(active === i ? null : i)}><span className="faq-number">0{i + 1}</span><strong>{faq.q}</strong><span className="faq-toggle"><Plus size={17} /></span></button><AnimatePresence initial={false}>{active === i && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: .25 }}><p>{faq.a}</p></motion.div>}</AnimatePresence></div>)}</div></div></section>
}

function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'unconfigured'>('idle')
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!endpoint) { setStatus('unconfigured'); return }
    setStatus('sending')
    const form = event.currentTarget
    try {
      const response = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } })
      if (!response.ok) throw new Error('Submission failed')
      form.reset(); setStatus('success')
    } catch { setStatus('error') }
  }
  return <section className="section-pad contact-section" id="contact"><div className="container"><div className="contact-panel"><div className="contact-copy"><div className="eyebrow"><span className="eyebrow-dot" /> LET'S BUILD SOMETHING / 07</div><h2>Have something worth building? <em>Let's make it real.</em></h2><p>Tell us what you're working on, where you're stuck, or what you want to improve. We'll review your requirements and discuss the most practical next step.</p><div className="contact-aside"><div className="contact-aside-icon"><Send size={17} /></div><div><strong>A direct line to engineering.</strong><span>Thoughtful conversations. Clear next steps.</span></div></div><div className="contact-index">DEV ENGINE AI <span>—</span> OPEN FOR THE RIGHT PROJECTS</div></div>
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading"><span>PROJECT ENQUIRY</span><span>01 — 05</span></div>
      <div className="form-grid"><label>Your name<input name="name" placeholder="Jane Smith" required minLength={2} /></label><label>Work email<input name="email" type="email" placeholder="jane@company.com" required /></label></div>
      <label>Company name <span className="optional">OPTIONAL</span><input name="company" placeholder="Your company" /></label>
      <label>What do you need help with?<select name="projectType" required defaultValue=""><option value="" disabled>Select a project type</option><option>New software product</option><option>AI integration</option><option>Backend / API engineering</option><option>Existing product improvements</option><option>Agency partnership</option><option>Something else</option></select></label>
      <label>A little about your project<textarea name="message" placeholder="A short overview of what you're looking to build or improve..." rows={4} required minLength={15} /></label>
      <button className="button button-primary form-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Start a conversation'} <ArrowUpRight size={17} /></button>
      {status === 'success' && <p className="form-feedback success"><Check size={15} /> Your message has been sent. Thank you—we'll be in touch.</p>}
      {status === 'error' && <p className="form-feedback error">Something went wrong. Please try again in a moment.</p>}
      {status === 'unconfigured' && <p className="form-feedback notice">The form is ready, but delivery is not configured yet. Add your Formspree endpoint to <code>.env</code> as <code>VITE_FORMSPREE_ENDPOINT</code>, then restart the dev server.</p>}
      <p className="form-privacy">Your details are used only to respond to this enquiry. No mailing lists or unnecessary follow-ups.</p>
    </form>
    </div></div></section>
}

function Footer() {
  return <footer className="site-footer"><div className="container"><div className="footer-main"><div className="footer-brand-col"><Brand footer /><p>Engineering ambitious ideas into production-ready software.</p><span className="footer-location">INDEPENDENT ENGINEERING STUDIO <i /> WORKING GLOBALLY</span></div><div className="footer-links"><div><span className="footer-label">EXPLORE</span><a href="#services">Services</a><a href="#why-us">Why us</a><a href="#work">Our work</a><a href="#process">Process</a></div><div><span className="footer-label">CAPABILITIES</span><a href="#services">Product engineering</a><a href="#services">AI applications</a><a href="#services">Backend platforms</a><a href="#services">Cloud delivery</a></div><div><span className="footer-label">START A CONVERSATION</span><a href="#contact" className="footer-contact-link">Discuss a project <ArrowUpRight size={14} /></a><span className="footer-muted">Official contact email to be added.</span></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} DEV ENGINE AI. ALL RIGHTS RESERVED.</span><span>BUILT WITH INTENTION <span className="footer-heart">✳</span></span><a href="#top">BACK TO TOP ↑</a></div></div></footer>
}

export default function App() {
  return <><Navbar /><main><Hero /><Services /><WhyUs /><SelectedWork /><Process /><Engagement /><FAQ /><Contact /></main><Footer /></>
}
