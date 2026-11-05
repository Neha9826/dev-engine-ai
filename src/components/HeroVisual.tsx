import { ArrowDown, BrainCircuit, Cloud, Code2, Database, Layers3, ShieldCheck, Sparkles } from 'lucide-react'

const nodes = [
  { label: 'INTERFACE', sub: 'React · Next.js', icon: Layers3, x: '8%', y: '16%', cls: 'node-interface' },
  { label: 'APPLICATION', sub: 'Node · GraphQL', icon: Code2, x: '59%', y: '8%', cls: 'node-app' },
  { label: 'DATA LAYER', sub: 'Postgres · Redis', icon: Database, x: '66%', y: '60%', cls: 'node-data' },
  { label: 'AI SYSTEMS', sub: 'LLMs · Retrieval', icon: BrainCircuit, x: '12%', y: '65%', cls: 'node-ai' },
]
export default function HeroVisual() {
  return <div className="hero-visual" aria-label="Illustration of connected software engineering layers">
    <div className="visual-topline"><span>FIG. 01 / SYSTEM OVERVIEW</span><span className="live-indicator"><i /> SYSTEMS CONNECTED</span></div>
    <div className="visual-grid" />
    <svg className="visual-lines" viewBox="0 0 600 470" preserveAspectRatio="none" aria-hidden="true">
      <path d="M130 125 C230 125 220 105 355 95 S420 150 450 175" />
      <path d="M145 330 C245 330 280 350 375 325 S430 275 470 285" />
      <path d="M150 145 C145 235 170 270 205 330" />
      <path d="M420 120 C390 205 420 250 470 285" />
      <path className="line-dash" d="M130 125 C250 220 300 250 470 285" />
      <circle cx="355" cy="95" r="4" /><circle cx="205" cy="330" r="4" /><circle cx="470" cy="285" r="4" />
    </svg>
    {nodes.map(({ label, sub, icon: Icon, x, y, cls }) => <div key={label} className={`architecture-node ${cls}`} style={{ left: x, top: y }}>
      <div className="node-icon"><Icon size={17} /></div><div><strong>{label}</strong><small>{sub}</small></div><span className="node-status" />
    </div>)}
    <div className="core-orbit"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="core-center"><Sparkles size={25} /><span>ENGINE</span></div><span className="orbit-label orbit-label-a">ORCHESTRATION</span><span className="orbit-label orbit-label-b">INTELLIGENCE</span></div>
    <div className="visual-footer"><span><ShieldCheck size={14} /> ARCHITECTED FOR REAL-WORLD SYSTEMS</span><span>01 — 05 <ArrowDown size={13} /></span></div>
    <div className="visual-float"><Cloud size={15} /><span>DEPLOYMENT READY</span><b>+</b></div>
  </div>
}
