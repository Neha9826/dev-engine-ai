import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { Brand } from './Brand'

const links = [['Services', '#services'], ['Why us', '#why-us'], ['Our work', '#work'], ['Process', '#process'], ['Contact', '#contact']]
type Theme = 'light' | 'dark'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light'
    return window.localStorage.getItem('dev-engine-theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111018' : '#fdfcfd')
    window.localStorage.setItem('dev-engine-theme', theme)
  }, [theme])

  return <header className="site-header"><nav className="nav-shell container" aria-label="Main navigation">
    <Brand />
    <div className={`nav-links ${open ? 'nav-links-open' : ''}`}>
      {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-mobile-cta" href="#contact" onClick={() => setOpen(false)}>Discuss your project <ArrowUpRight size={15} /></a>
    </div>
    <div className="nav-actions">
      <button className="theme-toggle" type="button" aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`} onClick={() => setTheme(current => current === 'light' ? 'dark' : 'light')}>{theme === 'light' ? <Moon /> : <Sun />}</button>
      <a className="button button-small button-outline nav-cta" href="#contact">Discuss your project <ArrowUpRight size={15} /></a>
      <button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? <X /> : <Menu />}</button>
    </div>
  </nav></header>
}
