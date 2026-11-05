import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Check, Plus, Send, Sparkles } from 'lucide-react'
import Navbar from './components/Navbar'
import { Brand } from './components/Brand'
import HeroVisual from './components/HeroVisual'
import SectionHeading from './components/SectionHeading'
import { faqs, principles, projects, services } from './data/content'

const lifecycleStages = [
  { n: '01', title: 'Discovery & strategy', items: ['Business idea', 'Requirements', 'User journeys', 'Product roadmap'] },
  { n: '02', title: 'System architecture', items: ['Frontend', 'Backend & APIs', 'Database', 'Auth & infrastructure'] },
  { n: '03', title: 'Experience & design', items: ['UI / UX', 'Design systems', 'Reusable components', 'Responsive interfaces'] },
  { n: '04', title: 'Full-stack development', items: ['Frontend apps', 'Backend services', 'Business logic', 'Data & integrations'] },
  { n: '05', title: 'AI engineering', items: ['LLMs & agents', 'RAG pipelines', 'Embeddings & vector search', 'Grounded responses'] },
  { n: '06', title: 'Quality & security', items: ['Unit & integration', 'End-to-end tests', 'Security validation', 'Performance checks'] },
  { n: '07', title: 'Cloud & deployment', items: ['CI / CD', 'Containers', 'Cloud runtime', 'Monitoring'] },
  { n: '08', title: 'Continuous evolution', items: ['Product signals', 'Optimization', 'Scaling', 'New capabilities'] },
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

function FlowToken({ children }: { children: React.ReactNode }) {
  return <span className="lifecycle-token">{children}</span>
}

function MiniFlow({ items }: { items: string[] }) {
  return <div className="mini-flow">{items.map((item, i) => <span className="mini-flow-node" key={item}>{item}{i < items.length - 1 && <i aria-hidden="true" />}</span>)}</div>
}

function Lifecycle() {
  return <section className="section lifecycle-section" id="lifecycle">
    <div className="container">
      <div className="lifecycle-heading">
        <SectionHeading eyebrow="THE SOFTWARE LIFECYCLE / 03" title={<>From first thought<br />to <em>what's next.</em></>} text="One connected engineering journey—from the first product idea to a system that keeps learning, scaling and improving." />
        <div className="lifecycle-stamp"><Sparkles size={18} /><span>IDEA TO PRODUCTION<br />AND BEYOND</span></div>
      </div>
      <div className="lifecycle-blueprint" aria-label="Complete software engineering lifecycle diagram">
        <div className="blueprint-origin"><span className="origin-orbit"><Sparkles size={19} /></span><div><small>THE STARTING POINT</small><strong>IDEA</strong><span>Business opportunity</span></div><i aria-hidden="true" /></div>
        <div className="lifecycle-grid">
          <motion.article className="life-stage life-discovery" initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.45}}>
            <StageHeading stage={lifecycleStages[0]} />
            <div className="discovery-map"><div className="discovery-input">BUSINESS SIGNAL</div><div className="discovery-branches"><span>USER NEEDS</span><span>REQUIREMENTS</span><span>OPPORTUNITY</span></div><div className="discovery-output">PRODUCT ROADMAP <b>→</b></div></div>
            <StageFooter items={lifecycleStages[0].items} />
          </motion.article>
          <motion.article className="life-stage life-architecture" initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.45,delay:.04}}>
            <StageHeading stage={lifecycleStages[1]} />
            <div className="architecture-map">
              <div className="arch-client">FRONTEND <small>Web · Mobile</small></div><div className="arch-api">API LAYER <small>REST · GraphQL</small></div>
              <div className="arch-services"><span>AUTH</span><span>BACKEND</span><span>INTEGRATIONS</span></div>
              <div className="arch-data">DATABASE <small>SQL · Cache · Storage</small></div>
              <div className="arch-infra">CLOUD INFRASTRUCTURE</div>
              <svg viewBox="0 0 300 112" preserveAspectRatio="none" aria-hidden="true"><path d="M150 12 V29 M150 48 V61 M150 80 V91 M150 91 H45 V101 M150 91 H255 V101" /><path d="M150 48 H45 V61 M150 48 H255 V61" /></svg>
            </div>
            <StageFooter items={lifecycleStages[1].items} />
          </motion.article>
          <motion.article className="life-stage life-design" initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.45,delay:.08}}>
            <StageHeading stage={lifecycleStages[2]} />
            <div className="design-map"><div className="design-screen"><span/><span/><span/><b/><i/><i/><i/></div><div className="design-kit"><span>TYPE</span><b/><span>COLOUR</span><b/><span>COMPONENTS</span><div><i/><i/><i/></div></div><div className="design-breakpoints"><span>DESKTOP</span><span>TABLET</span><span>MOBILE</span></div></div>
            <StageFooter items={lifecycleStages[2].items} />
          </motion.article>
          <motion.article className="life-stage life-development" initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.45,delay:.12}}>
            <StageHeading stage={lifecycleStages[3]} />
            <div className="stack-map"><div className="stack-front">FRONTEND <small>React · Next.js</small></div><div className="stack-connection">↕ API / EVENTS ↕</div><div className="stack-back">BACKEND <small>Services · Logic</small></div><div className="stack-data">DATA LAYER <small>Postgres · Redis</small></div></div>
            <StageFooter items={lifecycleStages[3].items} />
          </motion.article>
          <motion.article className="life-stage life-ai" initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.45,delay:.16}}>
            <StageHeading stage={lifecycleStages[4]} />
            <div className="rag-map">
              <div className="rag-lane"><b>OFFLINE / KNOWLEDGE INGESTION</b><MiniFlow items={['Documents','Extract','Chunk','Embeddings','Vector DB']} /></div>
              <div className="rag-lane rag-online"><b>ONLINE / QUERY & RESPONSE</b><MiniFlow items={['User query','Query vector','Retrieve','Context','LLM','Answer']} /></div>
              <div className="rag-link"><span>INDEXED VECTORS + METADATA</span><i/> <span>TOP-K CONTEXT</span></div>
            </div>
            <StageFooter items={lifecycleStages[4].items} />
          </motion.article>
          <motion.article className="life-stage life-quality" initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.45,delay:.2}}>
            <StageHeading stage={lifecycleStages[5]} />
            <div className="quality-map"><div className="quality-gate"><span>01</span><b>UNIT</b><i>✓</i></div><div className="quality-gate"><span>02</span><b>INTEGRATION</b><i>✓</i></div><div className="quality-gate"><span>03</span><b>E2E</b><i>✓</i></div><div className="quality-gate"><span>04</span><b>SECURITY + PERF</b><i>✓</i></div></div>
            <StageFooter items={lifecycleStages[5].items} />
          </motion.article>
          <motion.article className="life-stage life-deploy" initial={{opacity:0,y:14}} whileInView={{once:true,amount:.12}} animate={{opacity:1,y:0}} transition={{duration:.45,delay:.24}}>
            <StageHeading stage={lifecycleStages[6]} />
            <div className="deploy-map"><MiniFlow items={['Commit','Build','Test','Container','Cloud']} /><div className="deploy-cloud"><span>LIVE PRODUCTION</span><b>◉</b><small>Logs · Metrics · Traces</small></div></div>
            <StageFooter items={lifecycleStages[6].items} />
          </motion.article>
          <motion.article className="life-stage life-evolution" initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.45,delay:.28}}>
            <StageHeading stage={lifecycleStages[7]} />
            <div className="evolution-map"><div className="evolution-core">LIVE<br/>SYSTEM</div><span className="evo-node evo-a">SIGNALS</span><span className="evo-node evo-b">INSIGHTS</span><span className="evo-node evo-c">OPTIMIZE</span><span className="evo-node evo-d">SCALE</span><svg viewBox="0 0 260 112" aria-hidden="true"><path d="M130 14 C245 14 250 92 130 96 C10 100 15 20 130 14" /></svg></div>
            <StageFooter items={lifecycleStages[7].items} />
          </motion.article>
        </div>
        <div className="blueprint-return"><span>OBSERVE</span><i/><span>LEARN</span><i/><span>IMPROVE</span><i/><strong>FEEDBACK INTO THE NEXT IDEA ↺</strong></div>
      </div>
      <div className="lifecycle-legend"><span><i/> ENGINEERING FLOW</span><span><i/> DATA / API CONNECTION</span><span><i/> CONTINUOUS FEEDBACK</span><span>ONE PARTNER · IDEA TO EVOLUTION</span></div>
    </div>
  </section>
}

function StageHeading({ stage }: { stage: { n: string; title: string } }) {
  return <div className="life-stage-heading"><span>{stage.n}</span><h3>{stage.title}</h3><i aria-hidden="true"/></div>
}

function StageFooter({ items }: { items: string[] }) {
  return <div className="life-stage-footer">{items.map(item => <FlowToken key={item}>{item}</FlowToken>)}</div>
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
