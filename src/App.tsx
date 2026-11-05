import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Plus, Send, Sparkles } from 'lucide-react'
import Navbar from './components/Navbar'
import { Brand } from './components/Brand'
import HeroVisual from './components/HeroVisual'
import SectionHeading from './components/SectionHeading'
import { faqs, principles, projects, services } from './data/content'

const lifecycle = [
  { n: '01', title: 'Idea & discovery', short: 'Find the signal in the idea.', desc: 'We turn an early ambition into a shared understanding of the problem, the people it serves, and the opportunity worth pursuing.', work: ['Stakeholder conversations', 'Problem framing & user needs', 'Business requirements', 'Opportunity definition'], output: 'A clear product brief and a problem worth solving.', tools: 'Discovery · Research · Product strategy' },
  { n: '02', title: 'Strategy & planning', short: 'Make the path deliberate.', desc: 'We shape a realistic route from ambition to delivery, balancing user value, technical feasibility, time, and investment.', work: ['Product roadmap & milestones', 'Feature prioritisation', 'Technical feasibility', 'Delivery planning'], output: 'A prioritised roadmap with an achievable first release.', tools: 'Roadmapping · Estimation · Agile planning' },
  { n: '03', title: 'System architecture', short: 'Design the foundations.', desc: 'We define the boundaries, data, interfaces, and safeguards that let a product grow without becoming fragile.', work: ['Application & service boundaries', 'Data and database modelling', 'API contracts', 'Security and scalability design'], output: 'An architecture blueprint built for change.', tools: 'System design · GraphQL · PostgreSQL · Cloud' },
  { n: '04', title: 'Product design', short: 'Make complexity feel simple.', desc: 'We translate product intent into intuitive journeys and a coherent interface system that works across devices.', work: ['User journeys & interaction design', 'Information architecture', 'Design systems', 'Prototypes and validation'], output: 'Validated experiences and a reusable design language.', tools: 'UX · UI systems · Prototyping' },
  { n: '05', title: 'Development', short: 'Turn the blueprint into a product.', desc: 'We build the product end to end, connecting polished interfaces with dependable application logic and data.', work: ['Frontend & backend engineering', 'API and database implementation', 'Authentication & authorisation', 'Multi-tenant foundations'], output: 'Working product increments, reviewed and tested.', tools: 'React · Next.js · Node.js · TypeScript' },
  { n: '06', title: 'Intelligent integration', short: 'Add intelligence with intent.', desc: 'We connect the product to the wider ecosystem and introduce AI where it creates measurable value for users.', work: ['Third-party APIs & integrations', 'LLM and agent workflows', 'RAG and vector retrieval', 'Data processing pipelines'], output: 'Connected systems and useful, grounded AI capabilities.', tools: 'LLMs · RAG · pgvector · Workflow orchestration' },
  { n: '07', title: 'Testing & quality', short: 'Prove it works under pressure.', desc: 'We validate behaviour, security, accessibility, and performance before the product reaches real users.', work: ['Unit & integration tests', 'End-to-end validation', 'Security and permission checks', 'Performance optimisation'], output: 'A release candidate with confidence behind it.', tools: 'Jest · Playwright · CI checks · Observability' },
  { n: '08', title: 'Delivery & operations', short: 'Launch with a steady hand.', desc: 'We prepare infrastructure, automate delivery, and establish the visibility needed to operate reliably in production.', work: ['Cloud infrastructure', 'Docker & CI/CD pipelines', 'Deployment and release strategy', 'Monitoring and reliability'], output: 'A production-ready release and operational baseline.', tools: 'AWS · Docker · CI/CD · Monitoring' },
  { n: '09', title: 'Evolution', short: 'Keep making it better.', desc: 'We use real-world feedback and product signals to improve the experience, strengthen the platform, and plan what comes next.', work: ['Product analytics & feedback', 'Iteration and enhancements', 'Scaling and cost review', 'Continuous improvement'], output: 'A living product that keeps creating value.', tools: 'Analytics · Experimentation · Performance' },
]

type Theme = 'light' | 'dark'

function initialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  const current = document.documentElement.dataset.theme
  if (current === 'light' || current === 'dark') return current
  const saved = window.localStorage.getItem('dev-engine-theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function Hero({ theme }: { theme: Theme }) {
  return <section className="hero" id="top">
    <HeroVisual theme={theme} />
    <div className="hero-atmosphere" aria-hidden="true"><span className="haze haze-a" /><span className="haze haze-b" /><span className="glass-ribbon ribbon-a" /><span className="glass-ribbon ribbon-b" /></div>
    <div className="container hero-layout">
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75 }}>
        <div className="eyebrow"><span className="eyebrow-line" /> INDEPENDENT AI ENGINEERING STUDIO</div>
        <h1>We turn ambitious ideas into <em>intelligent reality.</em></h1>
        <p className="hero-description">From the first product decision to production-ready software, we bring product thinking, deep engineering and practical AI together.</p>
        <div className="hero-actions"><a className="button button-primary" href="#contact">Start a conversation <ArrowUpRight size={17} /></a><a className="button button-glass" href="#work">Explore our work <ArrowDown size={15} /></a></div>
        <div className="hero-proof"><span><i /> Product engineering</span><span><i /> Practical AI</span><span><i /> Production systems</span></div>
      </motion.div>
      
    </div>
    <div className="container hero-foot"><span>IDEAS, ENGINEERED INTO WHAT'S NEXT.</span><a href="#studio">SCROLL TO EXPLORE <ArrowDown size={13} /></a></div>
  </section>
}

function Services() {
  return <section className="section services-section" id="services"><div className="container">
    <div className="section-intro-row"><SectionHeading eyebrow="WHAT WE DO / 01" title={<>Engineering for<br /><em>what's next.</em></>} text="A connected set of capabilities to take your product from a first spark to a platform people can rely on." /><div className="intro-aside">ONE PARTNER<br /><strong>FROM CONCEPT<br />TO CONTINUOUS GROWTH</strong></div></div>
    <div className="service-grid">{services.map((s, i) => { const Icon = s.icon; return <motion.article className="service-card" key={s.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: i * .07 }}><div className="service-head"><span>{s.number} / CAPABILITY</span><Icon size={22} strokeWidth={1.5} /></div><div className="service-body"><small>{s.tag}</small><h3>{s.title}</h3><p>{s.description}</p></div><ul>{s.items.map(item => <li key={item}><span />{item}</li>)}</ul><a href="#contact" aria-label={'Discuss ' + s.title}><ArrowUpRight size={18} /></a></motion.article> })}</div>
  </div></section>
}

function Studio() {
  return <section className="section studio-section" id="studio"><div className="container studio-layout">
    <div className="studio-copy"><div className="eyebrow"><span className="eyebrow-line" /> THE DEV ENGINE APPROACH / 02</div><h2>Good technology starts with <em>better questions.</em></h2><p>We don't build for the sake of building. We understand the outcome first, choose technology with intent, and make considered decisions that hold up beyond launch.</p><a className="text-link" href="#lifecycle">See how we work <ArrowUpRight size={16} /></a></div>
    <div className="principles-grid">{principles.map(({ icon: Icon, title, text }, i) => <article className="principle" key={title}><span className="principle-number">0{i + 1}</span><div className="principle-icon"><Icon size={20} strokeWidth={1.6} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
  </div></section>
}

const lifecycleFlows = [
  { label: 'DISCOVERY WORKFLOW', nodes: [['Stakeholders','Goals & context'],['User needs','Research signals'],['Problem brief','Opportunity'],['Success metrics','Shared outcomes']] },
  { label: 'PRODUCT ROADMAP', nodes: [['Product vision','Desired outcome'],['Prioritisation','Value × effort'],['Milestones','Release slices'],['Delivery plan','Owners & timing']] },
  { label: 'SYSTEM ARCHITECTURE', nodes: [['Client apps','Web · mobile'],['API layer','Contracts · auth'],['Services','Domain logic'],['Data layer','SQL · cache']] },
  { label: 'EXPERIENCE DESIGN', nodes: [['Research','User signals'],['User journeys','Flows & states'],['Prototype','Test assumptions'],['Design system','Reusable UI']] },
  { label: 'APPLICATION BUILD', nodes: [['Frontend','React · Next.js'],['API services','Node · TypeScript'],['Data models','Postgres · Redis'],['Test suite','Jest · Playwright']] },
  { label: 'RETRIEVAL-AUGMENTED GENERATION', nodes: [['Source docs','PDF · HTML · DB'],['Chunk & embed','Text vectors'],['Vector store','Indexed context'],['Retrieve','Top-k matches'],['LLM prompt','Grounded answer']] },
  { label: 'QUALITY GATES', nodes: [['Unit tests','Logic'],['Integration','Contracts'],['E2E tests','User journeys'],['Security & perf','Release gates']] },
  { label: 'PRODUCTION DELIVERY', nodes: [['Git commit','Reviewed change'],['CI pipeline','Build · test'],['Container','Docker image'],['Cloud deploy','AWS · runtime'],['Observe','Logs · metrics']] },
  { label: 'CONTINUOUS IMPROVEMENT', nodes: [['Product signals','Usage data'],['User feedback','Real-world needs'],['Experiments','Measure impact'],['Iteration','Next release']] },
]

function Lifecycle() {
  const [active, setActive] = useState(0)
  const stage = lifecycle[active]
  const flow = lifecycleFlows[active]
  return <section className="section lifecycle-section" id="lifecycle"><div className="container">
    <div className="lifecycle-heading"><SectionHeading eyebrow="THE SOFTWARE LIFECYCLE / 03" title={<>From first thought<br />to <em>what's next.</em></>} text="A complete engineering journey, shaped around your goals. Explore each stage to see how an idea becomes a dependable, intelligent product." /><div className="lifecycle-stamp"><Sparkles size={18} /><span>ONE CONTINUOUS<br />ENGINEERING PARTNERSHIP</span></div></div>
    <div className="lifecycle-shell">
      <div className="lifecycle-rail" role="tablist" aria-label="Software lifecycle stages">{lifecycle.map((item, i) => <button key={item.n} className={active === i ? 'active' : ''} role="tab" aria-selected={active === i} aria-controls="lifecycle-detail" onClick={() => setActive(i)}><span className="rail-number">{item.n}</span><span className="rail-title">{item.title}</span><span className="rail-dot" /></button>)}</div>
      <div className="lifecycle-detail" id="lifecycle-detail" role="tabpanel">
        <div className="lifecycle-stage-top"><span>STAGE {stage.n} / 09</span><span>DEV ENGINE METHOD</span></div>
        <div className="lifecycle-flow-wrap">
          <div className="flow-heading"><span>{flow.label}</span><span>LIVE SYSTEM MAP <i /></span></div>
          <div className="lifecycle-flow" style={{'--flow-count': flow.nodes.length} as React.CSSProperties}>
            {flow.nodes.map(([title, detail], i) => <div className="flow-step-group" key={title}>
              <motion.div className="flow-node" key={stage.n + title} initial={{opacity:0,y:10,scale:.97}} animate={{opacity:1,y:0,scale:1}} transition={{duration:.28,delay:i*.075}}>
                <span className="flow-node-index">0{i+1}</span><strong>{title}</strong><small>{detail}</small><span className="flow-node-status"><Check size={11}/></span>
              </motion.div>
              {i < flow.nodes.length - 1 && <div className="flow-link" aria-hidden="true"><span /></div>}
            </div>)}
          </div>
          {active === 2 && <div className="architecture-security"><span>SECURITY BOUNDARIES</span><div><i>Session</i><i>JWT</i><i>OAuth</i><i>API keys</i><i>SSO</i><i>mTLS</i></div></div>}
          {active === 5 && <div className="architecture-security"><span>GROUNDING LAYER</span><div><i>Metadata filters</i><i>Semantic search</i><i>Source citations</i><i>Access control</i></div></div>}
        </div>
        <AnimatePresence mode="wait"><motion.div className="stage-copy" key={stage.n} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .22 }}>
          <div className="stage-summary"><span className="stage-kicker">{stage.short}</span><h3>{stage.title}</h3><p>{stage.desc}</p><div className="stage-output"><span>THE OUTPUT</span><strong>{stage.output}</strong></div></div>
          <div className="stage-work"><strong>WHAT HAPPENS HERE</strong><ul>{stage.work.map(w => <li key={w}><Check size={14} />{w}</li>)}</ul><div className="stage-tools">{stage.tools}</div></div>
        </motion.div></AnimatePresence>
        <div className="lifecycle-controls"><button onClick={() => setActive(v => Math.max(0, v - 1))} disabled={active === 0}>PREVIOUS</button><span>{String(active + 1).padStart(2, '0')} <i /> 09</span><button onClick={() => setActive(v => Math.min(8, v + 1))} disabled={active === 8}>NEXT STAGE <ArrowRight size={14} /></button></div>
      </div>
    </div>
  </div></section>
}

function Intelligence() {
  return <section className="section intelligence-section"><div className="container intelligence-layout"><div className="intelligence-visual"><div className="intelligence-glow" /><div className="intelligence-core"><div className="core-inner"><Sparkles size={30} /><span>AI</span></div></div><span className="int-label label-a">RETRIEVAL</span><span className="int-label label-b">REASONING</span><span className="int-label label-c">AUTOMATION</span><span className="int-label label-d">CONTEXT</span><div className="intelligence-note">INTELLIGENCE, APPLIED WITH PURPOSE</div></div><div className="intelligence-copy"><div className="eyebrow"><span className="eyebrow-line" /> PRACTICAL AI / 04</div><h2>AI that earns its place in the <em>product.</em></h2><p>We connect language models, retrieval, structured data and intelligent workflows to solve specific problems—not to add AI for the headline.</p><div className="ai-capabilities"><span>LLM-powered experiences</span><span>RAG & document intelligence</span><span>AI agents & workflows</span><span>Vector search & data pipelines</span></div><a className="text-link" href="#contact">Explore an AI use case <ArrowUpRight size={16} /></a></div></div></section>
}

function SelectedWork() {
  return <section className="section work-section" id="work"><div className="container"><div className="work-heading"><SectionHeading eyebrow="SELECTED WORK / 05" title={<>Built with intent.<br /><em>Made for the real world.</em></>} text="A glimpse into the products and platforms we engineer. Some work is shared at a high level to respect confidentiality." /><span className="work-index">CAPABILITIES<br />OVER CLAIMS</span></div>
    <div className="projects-list">{projects.map((p, i) => <article className="project-row" key={p.id}><div className="project-number">{p.id}<span>{p.category}</span></div><div className="project-info"><h3>{p.title}</h3><p>{p.description}</p><div className="tech-list">{p.stack.map(t => <span key={t}>{t}</span>)}</div></div><div className={'project-art project-art-' + p.kind}><div className="project-art-glow" /><div className="project-window"><div className="window-bar"><i /><i /><i /><span>{p.kind === 'platform' ? 'architecture / overview' : p.kind === 'studio' ? 'document / workspace' : 'workspace / knowledge-base'}</span></div><div className="window-content"><div className="window-side"><i /><i /><i /><i /></div><div className="window-main"><small>{p.category}</small><strong>{i === 0 ? 'Knowledge that\nmoves forward.' : i === 1 ? 'Make space for\nbetter work.' : 'Systems that\nwork together.'}</strong><span /><span /><span className="short" /><div className="window-chip"><Sparkles size={12} /> {i === 0 ? 'AI SUMMARY' : i === 1 ? 'SMART WORKFLOW' : 'LIVE SYSTEM MAP'}</div></div></div></div><span className="project-art-label">DEV ENGINE AI / PRODUCT STUDY 0{ i + 1 }</span></div></article>)}</div>
  </div></section>
}

function Process() {
  const steps = [{ n: '01', title: 'Listen & understand', text: 'We learn about your goals, users, constraints and what success should look like.' }, { n: '02', title: 'Shape the approach', text: 'We align on scope, architecture, milestones and the right engagement model.' }, { n: '03', title: 'Build together', text: 'We deliver in clear increments, sharing progress and validating decisions as we go.' }, { n: '04', title: 'Launch & evolve', text: 'We prepare for production, hand over with clarity and help plan what comes next.' }]
  return <section className="section process-section" id="process"><div className="container"><SectionHeading eyebrow="A CLEAR WAY FORWARD / 06" title={<>Clarity at every<br /><em>step of the journey.</em></>} text="A collaborative process that keeps decisions visible and delivery moving." /><div className="process-grid">{steps.map((s) => <article className="process-step" key={s.n}><span>{s.n}</span><div className="process-connector" /><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></div></section>
}

function FAQ() {
  const [active, setActive] = useState<number | null>(0)
  return <section className="section faq-section" id="faq"><div className="container faq-layout"><SectionHeading eyebrow="GOOD QUESTIONS / 07" title={<>A few things<br /><em>you might be wondering.</em></>} text="If your question isn't covered here, tell us a little about your project and we'll take it from there." /><div className="faq-list">{faqs.map((f, i) => <div className={'faq-item ' + (active === i ? 'faq-active' : '')} key={f.q}><button aria-expanded={active === i} onClick={() => setActive(active === i ? null : i)}><span>0{i + 1}</span><strong>{f.q}</strong><Plus size={18} /></button><AnimatePresence initial={false}>{active === i && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}><p>{f.a}</p></motion.div>}</AnimatePresence></div>)}</div></div></section>
}

function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'unconfigured'>('idle')
  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!endpoint) { setStatus('unconfigured'); return }
    setStatus('sending')
    const form = event.currentTarget
    try { const response = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } }); if (!response.ok) throw new Error('Submission failed'); form.reset(); setStatus('success') }
    catch { setStatus('error') }
  }
  return <section className="section contact-section" id="contact"><div className="container"><div className="contact-panel"><div className="contact-copy"><div className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT CHAPTER / 08</div><h2>Have something worth building? <em>Let's make it real.</em></h2><p>Tell us what you're working on, where you're stuck, or what you want to bring to life. We'll help you find the most practical next step.</p><div className="contact-promise"><div className="promise-icon"><Send size={18} /></div><div><strong>A direct line to engineering.</strong><span>Thoughtful conversations. Clear next steps.</span></div></div><div className="contact-footnote">DEV ENGINE AI <i /> OPEN FOR THE RIGHT PROJECTS</div></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-top"><span>PROJECT ENQUIRY</span><span>01 — 05</span></div><div className="form-row"><label>Your name<input name="name" placeholder="Jane Smith" required minLength={2} /></label><label>Work email<input name="email" type="email" placeholder="jane@company.com" required /></label></div><label>Company name <small>OPTIONAL</small><input name="company" placeholder="Your company" /></label><label>What do you need help with?<select name="projectType" required defaultValue=""><option value="" disabled>Select a project type</option><option>New software product</option><option>AI integration</option><option>Backend / API engineering</option><option>Existing product improvements</option><option>Agency partnership</option><option>Something else</option></select></label><label>A little about your project<textarea name="message" placeholder="A short overview of what you're looking to build..." required minLength={15} /></label><button className="button button-primary form-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send project enquiry'} <ArrowUpRight size={16} /></button>{status === 'success' && <p className="form-feedback success"><Check size={15} /> Thanks — your enquiry has been sent.</p>}{status === 'error' && <p className="form-feedback error">Something went wrong. Please try again.</p>}{status === 'unconfigured' && <p className="form-feedback notice">The enquiry form is not connected yet. Please configure VITE_FORMSPREE_ENDPOINT.</p>}<p className="form-privacy">Your information is only used to respond to your enquiry.</p></form></div></div></section>
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(initialTheme)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0c0812' : '#fdfcfd')
    window.localStorage.setItem('dev-engine-theme', theme)
  }, [theme])
  return <><Navbar theme={theme} onToggleTheme={() => setTheme(current => current === 'light' ? 'dark' : 'light')} /><main><Hero theme={theme} /><Services /><Studio /><Lifecycle /><Intelligence /><SelectedWork /><Process /><FAQ /><Contact /></main><footer className="site-footer"><div className="container footer-main"><div><Brand footer /><p>Thoughtful engineering for ambitious ideas. Software, platforms and practical AI built for the real world.</p></div><div className="footer-nav"><a href="#services">Services</a><a href="#lifecycle">Our approach</a><a href="#work">Selected work</a><a href="#contact">Start a project <ArrowUpRight size={14} /></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} DEV ENGINE AI</span><span>INDEPENDENT BY DESIGN. ENGINEERED TO DELIVER.</span><a href="#top">BACK TO TOP ↑</a></div></footer></>
}
