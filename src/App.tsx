import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown, ArrowUpRight, Check, Linkedin, Mail, Phone, Plus, Send, Sparkles } from 'lucide-react'
import Navbar from './components/Navbar'
import { Brand } from './components/Brand'
import HeroVisual from './components/HeroVisual'
import SectionHeading from './components/SectionHeading'
import { faqs, principles, projects, services } from './data/content'

const lifecycleStages = [
  { n: '01', title: 'IDEA', summary: 'Understand what needs to be built.', labels: ['Discovery', 'Strategy', 'Research'] },
  { n: '02', title: 'PLAN', summary: 'Design the foundation before building.', labels: ['Architecture', 'Design', 'Infrastructure'] },
  { n: '03', title: 'BUILD', summary: 'Turn the blueprint into a real product.', labels: ['Development', 'AI Integration', 'APIs', 'Integrations'] },
  { n: '04', title: 'LAUNCH', summary: 'Make the product production-ready.', labels: ['Quality & Security', 'Testing', 'Deployment', 'Cloud'] },
  { n: '05', title: 'GROW', summary: 'Keep improving as the business evolves.', labels: ['Continuous Evolution', 'Monitoring', 'Optimization', 'Scaling'] },
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
        <div className="eyebrow"><span className="eyebrow-line" /> SOFTWARE & AI ENGINEERING</div>
        <h1>We turn ambitious ideas into <em>intelligent reality.</em></h1>
        <p className="hero-description">From the first product decision to production-ready software, we bring product thinking, deep engineering and practical AI together.</p>
        <div className="hero-actions"><a className="button button-primary" href="#contact">Discuss a project <ArrowUpRight size={17} /></a><a className="button button-glass" href="#work">Explore our work <ArrowDown size={15} /></a></div>
        <div className="hero-proof"><span><i /> Product engineering</span><span><i /> Practical AI</span><span><i /> Production systems</span></div>
      </motion.div>
      
    </div>
    <div className="container hero-foot"><span>IDEAS, ENGINEERED INTO WHAT'S NEXT.</span><a href="#lifecycle">SCROLL TO EXPLORE <ArrowDown size={13} /></a></div>
  </section>
}

function Services() {
  return <section className="section services-section" id="services"><div className="container">
    <div className="section-intro-row"><SectionHeading eyebrow="WHAT WE DO / 04" title={<>Engineering for<br /><em>what's next.</em></>} text="A connected set of capabilities to take your product from a first spark to a platform people can rely on." /><div className="intro-aside">ONE PARTNER<br /><strong>FROM CONCEPT<br />TO CONTINUOUS GROWTH</strong></div></div>
    <div className="service-grid">{services.map((s, i) => { const Icon = s.icon; return <motion.article className="service-card" key={s.number} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: i * .07 }}><div className="service-head"><span>{s.number} / CAPABILITY</span><Icon size={22} strokeWidth={1.5} /></div><div className="service-body"><small>{s.tag}</small><h3>{s.title}</h3><p>{s.description}</p></div><ul>{s.items.map(item => <li key={item}><span />{item}</li>)}</ul><a href="#contact" aria-label={'Discuss ' + s.title}><ArrowUpRight size={18} /></a></motion.article> })}</div>
  </div></section>
}

function Studio() {
  return <section className="section studio-section" id="studio"><div className="container studio-layout">
    <div className="studio-copy"><div className="eyebrow"><span className="eyebrow-line" /> THE DEV ENGINE APPROACH / 05</div><h2>Good technology starts with <em>better questions.</em></h2><p>We don't build for the sake of building. We understand the outcome first, choose technology with intent, and make considered decisions that hold up beyond launch.</p><div className="studio-founder-note"><strong>Founder-led engineering.</strong> Your project stays close to a senior full-stack engineer with 5+ years of enterprise experience.</div><a className="text-link" href="#lifecycle">See how we work <ArrowUpRight size={16} /></a></div>
    <div className="principles-grid">{principles.map(({ icon: Icon, title, text }, i) => <article className="principle" key={title}><span className="principle-number">0{i + 1}</span><div className="principle-icon"><Icon size={20} strokeWidth={1.6} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
  </div></section>
}

function Lifecycle() {
  return <section className="section lifecycle-section" id="lifecycle">
    <div className="container">
      <div className="lifecycle-heading">
        <SectionHeading eyebrow="THE SOFTWARE LIFECYCLE / 01" title={<>From first thought<br />to <em>what's next.</em></>} text="One partner to turn an early idea into a product people can use, trust and grow with." />
        <div className="lifecycle-stamp"><Sparkles size={18} /><span>IDEA TO PRODUCT<br />AND BEYOND</span></div>
      </div>
      <div className="journey" aria-label="Five stages: idea, plan, build, launch and grow">
        <div className="journey-track" aria-hidden="true"><span /></div>
        <motion.article className="journey-stage journey-idea" initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.16}} transition={{duration:.55}}>
          <div className="journey-art idea-art" aria-hidden="true">
            <div className="idea-glow" /><div className="idea-bulb"><svg viewBox="0 0 120 140"><path d="M60 12a36 36 0 0 0-22 64c7 6 10 14 11 22h22c1-8 4-16 11-22A36 36 0 0 0 60 12Z" /><path d="M47 106h26M49 116h22M53 125h14M60 30v18M38 42l9 8M82 42l-9 8" /></svg></div>
            <div className="idea-orbit orbit-one" /><div className="idea-orbit orbit-two" />
            <div className="idea-roadmap"><span>01</span><i/><span>02</span><i/><span>03</span></div>
            <span className="art-caption">A CLEAR DIRECTION</span>
          </div>
          <div className="journey-copy"><span className="journey-number">01 / START WITH WHY</span><h3>IDEA</h3><p>{lifecycleStages[0].summary}</p><div className="journey-tags">{lifecycleStages[0].labels.map(x=><span key={x}>{x}</span>)}</div></div>
        </motion.article>
        <motion.article className="journey-stage journey-plan" initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.16}} transition={{duration:.55,delay:.06}}>
          <div className="journey-art plan-art" aria-hidden="true">
            <div className="blueprint-glow" /><div className="blueprint-sheet"><div className="blueprint-top"><i/><i/><i/></div><div className="blueprint-layer layer-front">EXPERIENCE</div><div className="blueprint-link">↕</div><div className="blueprint-layer layer-back">APPLICATION</div><div className="blueprint-branches"><span>DATA</span><span>INFRA</span></div></div>
            <div className="plan-orbit" /><span className="art-caption">A FOUNDATION THAT FITS</span>
          </div>
          <div className="journey-copy"><span className="journey-number">02 / MAKE A PLAN</span><h3>PLAN</h3><p>{lifecycleStages[1].summary}</p><div className="journey-tags">{lifecycleStages[1].labels.map(x=><span key={x}>{x}</span>)}</div></div>
        </motion.article>
        <motion.article className="journey-stage journey-build" initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.16}} transition={{duration:.6,delay:.12}}>
          <div className="build-ribbon">THE PRODUCT TAKES SHAPE <span>✦</span></div>
          <div className="journey-art build-art" aria-hidden="true">
            <div className="build-aura" /><div className="product-window"><div className="product-bar"><i/><i/><i/><span>YOUR PRODUCT</span></div><div className="product-ui"><div className="product-sidebar"><b/><i/><i/><i/></div><div className="product-main"><span className="ui-kicker">OVERVIEW</span><b className="ui-heading"/><div className="ui-metrics"><i/><i/><i/></div><div className="ui-chart"><svg viewBox="0 0 220 65"><path d="M4 52 C30 44 35 49 57 30 S92 43 115 22 S155 34 178 12 S202 18 216 4"/></svg></div><div className="ui-lines"><i/><i/><i/></div></div></div></div>
            <div className="build-node node-api">API</div><div className="build-node node-data">DATA</div><div className="build-node node-ai"><Sparkles size={14}/> AI</div><div className="build-flow flow-a"/><div className="build-flow flow-b"/><div className="build-flow flow-c"/>
            <div className="ai-knowledge"><span>DOCUMENTS</span><i>→</i><b>AI KNOWLEDGE</b><i>→</i><span>ANSWERS</span></div>
          </div>
          <div className="journey-copy"><span className="journey-number">03 / ENGINEER THE PRODUCT</span><h3>BUILD</h3><p>{lifecycleStages[2].summary}</p><div className="journey-tags">{lifecycleStages[2].labels.map(x=><span key={x}>{x}</span>)}</div></div>
        </motion.article>
        <motion.article className="journey-stage journey-launch" initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.16}} transition={{duration:.55,delay:.18}}>
          <div className="journey-art launch-art" aria-hidden="true">
            <div className="launch-cloud"><svg viewBox="0 0 180 120"><path d="M42 87h94a27 27 0 0 0 0-54 39 39 0 0 0-73-7A31 31 0 0 0 42 87Z"/><path d="M90 70V38m-13 13 13-13 13 13"/></svg></div><div className="launch-screen"><span/><b/><i/><i/><i/></div><div className="launch-check">✓</div><span className="art-caption">READY FOR THE REAL WORLD</span>
          </div>
          <div className="journey-copy"><span className="journey-number">04 / GO LIVE</span><h3>LAUNCH</h3><p>{lifecycleStages[3].summary}</p><div className="journey-tags">{lifecycleStages[3].labels.map(x=><span key={x}>{x}</span>)}</div></div>
        </motion.article>
        <motion.article className="journey-stage journey-grow" initial={{opacity:0,y:22}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.16}} transition={{duration:.55,delay:.24}}>
          <div className="journey-art grow-art" aria-hidden="true">
            <div className="growth-glow"/><div className="growth-core">LIVE<br/>PRODUCT</div><div className="growth-ring ring-a"/><div className="growth-ring ring-b"/><div className="growth-point point-a">↗</div><div className="growth-point point-b">+</div><div className="growth-point point-c">↗</div><div className="growth-bars"><i/><i/><i/><i/><i/><i/></div><span className="art-caption">LEARN · IMPROVE · SCALE</span>
          </div>
          <div className="journey-copy"><span className="journey-number">05 / KEEP MOVING</span><h3>GROW</h3><p>{lifecycleStages[4].summary}</p><div className="journey-tags">{lifecycleStages[4].labels.map(x=><span key={x}>{x}</span>)}</div></div>
        </motion.article>
        <div className="journey-feedback" aria-hidden="true"><span>REAL-WORLD FEEDBACK</span><i/> <b>BACK INTO THE NEXT IDEA ↺</b></div>
      </div>
    </div>
  </section>
}

function Intelligence({ theme }: { theme: Theme }) {
  const artworkRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const artworkInView = useInView(artworkRef, { amount: 0.2 })
  const prefersReducedMotion = useReducedMotion()
  const [videoFailed, setVideoFailed] = useState<Record<Theme, boolean>>({ light: false, dark: false })
  const currentVideoFailed = videoFailed[theme]

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    if (prefersReducedMotion || currentVideoFailed) {
      video.pause()
      return
    }

    // The artwork node is replaced when the theme changes. Load and start the
    // newly mounted source directly instead of waiting for a stale in-view observer.
    video.muted = true
    video.loop = true
    video.playsInline = true
    video.load()
    const playback = video.play()
    playback?.catch(() => {
      // A transient autoplay rejection is not a media failure. onCanPlay retries.
    })
    return () => video.pause()
  }, [theme, prefersReducedMotion, currentVideoFailed])

  return <section id="intelligence" className={theme === 'light' ? 'section intelligence-section intelligence-section-light' : 'section intelligence-section'}><div className="container intelligence-layout">
    {theme === 'light' ? (
      <motion.div
        ref={artworkRef}
        className="intelligence-artwork"
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18, scale: 0.985 }}
        whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {prefersReducedMotion || currentVideoFailed ? (
          <img
            src="/images/Information-to-Intelligent-Outcomes.png"
            alt="From information to intelligent outcomes"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <video
            ref={videoRef}
            className="intelligence-artwork-video"
            key="light-intelligence-video"
            autoPlay
            muted
            loop
            playsInline
            preload={artworkInView ? 'auto' : 'metadata'}
            poster="/images/Information-to-Intelligent-Outcomes.png"
            aria-label="Animated information-to-intelligence artwork"
            onCanPlay={() => { if (!prefersReducedMotion) videoRef.current?.play().catch(() => {}) }}
            onError={() => setVideoFailed(current => ({ ...current, [theme]: true }))}
          >
            <source src="/videos/information-to-intelligent-outcomes.mp4" type="video/mp4" />
          </video>
        )}
      </motion.div>
    ) : (
      prefersReducedMotion || currentVideoFailed ? (
        <div className="intelligence-artwork intelligence-artwork-dark"><img src="/videos/information-to-intelligent-outcomes-dark.png" alt="From information to intelligent outcomes, in the dark theme" loading="lazy" decoding="async" /></div>
      ) : (
        <motion.div
          ref={artworkRef}
          className="intelligence-artwork intelligence-artwork-dark"
          key="dark-intelligence-artwork"
          initial={{ opacity: 0, y: 18, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <video
            ref={videoRef}
            className="intelligence-artwork-video intelligence-artwork-video-dark"
            key="dark-intelligence-video"
            muted
            loop
            playsInline
            preload={artworkInView ? 'auto' : 'metadata'}
            poster="/videos/information-to-intelligent-outcomes-dark.png"
            aria-label="Animated dark-theme information-to-intelligence artwork"
            onError={() => setVideoFailed(current => ({ ...current, [theme]: true }))}
          >
            <source src="/videos/information-to-intelligent-outcomes-dark.mp4" type="video/mp4" />
          </video>
        </motion.div>
      )
    )}
    <div className="intelligence-copy"><div className="eyebrow"><span className="eyebrow-line" /> PRACTICAL AI / 02</div><h2>From information to <em>intelligence.</em></h2><p>We connect your data, systems, and workflows to intelligent experiences that solve real business problems.</p><div className="ai-capabilities"><span>LLM-powered experiences</span><span>RAG & knowledge systems</span><span>AI agents & automation</span><span>Intelligent data pipelines</span></div><a className="text-link" href="#contact">Explore AI capabilities <ArrowUpRight size={16} /></a></div>
  </div></section>
}

function SelectedWork() {
  return <section className="section work-section" id="work"><div className="container"><div className="work-heading"><SectionHeading eyebrow="SELECTED WORK / 03" title={<>Real products.<br /><em>Practical outcomes.</em></>} text="A cross-section of software, platforms and AI-enabled products across fintech, travel, marketplaces and SaaS. Some product details stay high-level where work is private." /><span className="work-index">CLIENT WORK<br />& IN-HOUSE PRODUCTS</span></div>
    <div className="projects-list">{projects.map((p) => <article className="project-row" key={p.id}><div className="project-number">{p.id}<span>{p.category}</span></div><div className="project-info"><span className="project-engagement">{p.engagement}</span><h3>{p.title}</h3><p>{p.description}</p>{p.outcome && <div className="project-outcome"><span>DELIVERY OUTCOME</span><strong>{p.outcome}</strong></div>}<div className="tech-list">{p.stack.map(t => <span key={t}>{t}</span>)}</div>{p.links.length > 0 && <div className="project-links">{p.links.map(link => <a className="project-link" key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label} <ArrowUpRight size={15} /></a>)}</div>}</div><div className={'project-art project-art-' + p.kind} aria-label={'Illustrative interface concept for ' + p.title}><div className="project-art-glow" /><div className="project-window"><div className="window-bar"><i /><i /><i /><span>{p.kind === 'platform' ? 'platform / overview' : p.kind === 'studio' ? 'workspace / editor' : 'workspace / intelligence'}</span></div><div className="window-content"><div className="window-side"><i /><i /><i /><i /></div><div className="window-main"><small>{p.category}</small><strong>{p.kind === 'document' ? 'Knowledge that\nmoves forward.' : p.kind === 'studio' ? 'Make space for\nbetter work.' : 'Systems that\nwork together.'}</strong><span /><span /><span className="short" /><div className="window-chip"><Sparkles size={12} /> {p.kind === 'document' ? 'AI SUMMARY' : p.kind === 'studio' ? 'SMART WORKFLOW' : 'SYSTEM MAP'}</div></div></div></div><span className="project-art-label">ILLUSTRATIVE VIEW · {p.title.toUpperCase()}</span></div></article>)}</div>
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
  const submittingRef = useRef(false)
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submittingRef.current) return

    const form = event.currentTarget
    if (!accessKey?.trim()) {
      setStatus('unconfigured')
      return
    }

    submittingRef.current = true
    setStatus('sending')

    const formData = new FormData(form)
    const service = String(formData.get('service') ?? '')
    formData.set('access_key', accessKey.trim())
    formData.set('subject', `New project enquiry — ${service}`)
    formData.set('from_name', 'Dev Engine AI')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData,
      })
      const result = await response.json() as { success?: boolean }
      if (!response.ok || result.success !== true) throw new Error('Web3Forms rejected the submission')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      submittingRef.current = false
    }
  }

  return <section className="section contact-section" id="contact"><div className="container"><div className="contact-panel"><div className="contact-copy"><div className="eyebrow"><span className="eyebrow-line" /> YOUR NEXT CHAPTER / 08</div><h2>Have something worth building? <em>Let's make it real.</em></h2><p>Tell us what you're working on, where you're stuck, or what you want to bring to life. We'll help you find the most practical next step.</p><div className="contact-promise"><div className="promise-icon"><Send size={18} /></div><div><strong>A direct line to engineering.</strong><span>Thoughtful conversations. Clear next steps.</span></div></div><div className="contact-footnote">DEV ENGINE AI <i /> OPEN FOR THE RIGHT PROJECTS</div></div><form className="contact-form" onSubmit={handleSubmit}><div className="form-top"><span>PROJECT ENQUIRY</span><span>01 — 05</span></div><input type="text" name="botcheck" className="form-honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" /><div className="form-row"><label>Your name<input name="name" placeholder="Jane Smith" required minLength={2} /></label><label>Work email<input name="email" type="email" placeholder="jane@company.com" required /></label></div><label>Company name <small>OPTIONAL</small><input name="company" placeholder="Your company" /></label><label>What do you need help with?<select name="service" required defaultValue=""><option value="" disabled>Select a project type</option><option>Custom software product</option><option>SaaS / platform development</option><option>AI integration & automation</option><option>Backend / API modernisation</option><option>Engineering extension / team support</option><option>Existing product improvements</option><option>Agency partnership</option><option>Something else</option></select></label><label>A little about your project<textarea name="message" placeholder="A short overview of what you're looking to build..." required minLength={15} /></label><button className="button button-primary form-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send project enquiry'} <ArrowUpRight size={16} /></button>{status === 'success' && <p className="form-feedback success"><Check size={15} /> Thanks — your enquiry has been sent.</p>}{status === 'error' && <p className="form-feedback error">We couldn't send your enquiry. Please try again.</p>}{status === 'unconfigured' && <p className="form-feedback notice">The enquiry form is not configured yet. Please add VITE_WEB3FORMS_ACCESS_KEY to your local environment.</p>}<p className="form-privacy">Your information is only used to respond to your enquiry.</p></form></div><div className="direct-contact" aria-label="Direct contact options"><a className="direct-contact-card" href="mailto:ai.devengine@gmail.com?subject=Project%20Enquiry%20-%20Dev%20Engine%20AI"><span className="direct-contact-icon"><Mail size={18}/></span><span><strong>Email us</strong><small>ai.devengine@gmail.com</small></span><ArrowUpRight size={15}/></a><a className="direct-contact-card" href="tel:+919259073818"><span className="direct-contact-icon"><Phone size={18}/></span><span><strong>Call us</strong><small>+91 92590 73818</small></span><ArrowUpRight size={15}/></a><a className="direct-contact-card" href="https://wa.me/919259073818?text=Hello%20Dev%20Engine%20AI%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer"><span className="direct-contact-icon direct-contact-whatsapp" aria-hidden="true"><svg viewBox="0 0 32 32" focusable="false"><path d="M16 3.2A12.2 12.2 0 0 0 5.5 21.6L4 28l6.6-1.7A12.2 12.2 0 1 0 16 3.2Z" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round"/><path d="M12.1 10.2c-.3-.7-.7-.7-1-.7h-.8c-.3 0-.8.1-1.2.6-.4.4-1.6 1.5-1.6 3.7s1.7 4.3 1.9 4.6c.2.3 3.2 5.1 7.8 6.9 3.8 1.5 4.6 1.2 5.4 1.1.8-.1 2.6-1.1 3-2.1.4-1 .4-1.9.3-2.1-.1-.2-.4-.3-.9-.6s-2.6-1.3-3-1.4c-.4-.2-.7-.2-1 .2-.3.4-1.1 1.4-1.4 1.7-.3.3-.5.4-1 .1-.5-.2-1.9-.7-3.6-2.2-1.3-1.1-2.2-2.5-2.5-2.9-.3-.5 0-.7.2-1 .2-.2.5-.6.7-.8.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.1-.2-.9-2.3-1.3-3.1Z" fill="currentColor" transform="translate(2 -1) scale(.88)"/></svg></span><span><strong>WhatsApp</strong><small>Start a conversation</small></span><ArrowUpRight size={15}/></a><a className="direct-contact-card" href="https://www.linkedin.com/company/dev-engine-ai/" target="_blank" rel="noopener noreferrer"><span className="direct-contact-icon"><Linkedin size={18}/></span><span><strong>Connect on LinkedIn</strong><small>Dev Engine AI</small></span><ArrowUpRight size={15}/></a></div></div></section>
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(initialTheme)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0B0D1D' : '#F5F6FF')
    window.localStorage.setItem('dev-engine-theme', theme)
  }, [theme])
  return <><Navbar theme={theme} onToggleTheme={() => setTheme(current => current === 'light' ? 'dark' : 'light')} /><main><Hero theme={theme} /><Lifecycle /><Intelligence theme={theme} /><SelectedWork /><Services /><Studio /><Process /><FAQ /><Contact /></main><footer className="site-footer"><div className="container footer-main"><div><Brand footer /><p>Thoughtful engineering for ambitious ideas. Software, platforms and practical AI built for the real world.</p></div><div className="footer-nav"><a href="#services">Services</a><a href="#lifecycle">Our approach</a><a href="#work">Selected work</a><a href="#contact">Start a project <ArrowUpRight size={14} /></a><a href="mailto:ai.devengine@gmail.com?subject=Project%20Enquiry%20-%20Dev%20Engine%20AI">Email</a><a href="https://wa.me/919259073818?text=Hello%20Dev%20Engine%20AI%2C%20I%27d%20like%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer">WhatsApp</a><a href="https://www.linkedin.com/company/dev-engine-ai/" target="_blank" rel="noopener noreferrer">LinkedIn</a><a href="tel:+919259073818">Call</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} DEV ENGINE AI</span><span>SOFTWARE · SAAS · PRACTICAL AI</span><a href="#top">BACK TO TOP ↑</a></div></footer></>
}
