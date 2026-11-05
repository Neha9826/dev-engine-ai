import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { Brand } from './Brand'

const links = [['Services', '#services'], ['Why us', '#why-us'], ['Our work', '#work'], ['Process', '#process'], ['Contact', '#contact']]
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><nav className="nav-shell container" aria-label="Main navigation">
    <Brand />
    <div className={`nav-links ${open ? 'nav-links-open' : ''}`}>
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-mobile-cta" href="#contact" onClick={() => setOpen(false)}>Discuss your project <ArrowUpRight size={15} /></a>
    </div>
    <a className="button button-small button-outline nav-cta" href="#contact">Discuss your project <ArrowUpRight size={15} /></a>
    <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? <X /> : <Menu />}</button>
  </nav></header>
}
