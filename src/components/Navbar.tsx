import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { Brand } from './Brand'

type Theme = 'light' | 'dark'
const links = [['Studio', '#studio'], ['Services', '#services'], ['Lifecycle', '#lifecycle'], ['Work', '#work'], ['FAQ', '#faq']]
function initialTheme(): Theme {
  if (typeof window === 'undefined') return 'light'
  const saved = window.localStorage.getItem('dev-engine-theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<Theme>(initialTheme)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#0c0812' : '#fdfcfd')
    window.localStorage.setItem('dev-engine-theme', theme)
  }, [theme])
  return <header className="site-header"><nav className="nav-shell container" aria-label="Main navigation">
    <Brand />
    <div className={'nav-links ' + (open ? 'nav-links-open' : '')}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-mobile-cta" href="#contact" onClick={() => setOpen(false)}>Start a project <ArrowUpRight size={15}/></a></div>
    <div className="nav-actions"><button className="theme-toggle" type="button" onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')} aria-label={'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' theme'} title={'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' theme'}>{theme === 'light' ? <Moon size={17}/> : <Sun size={17}/>}</button><a className="button button-primary nav-cta" href="#contact">Start a project <ArrowUpRight size={15}/></a><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? <X/> : <Menu/>}</button></div>
  </nav></header>
}
