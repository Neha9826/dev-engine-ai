import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { Brand } from './Brand'

type Theme = 'light' | 'dark'
const links = [['Studio', '#studio'], ['Services', '#services'], ['Lifecycle', '#lifecycle'], ['Work', '#work'], ['FAQ', '#faq']]

type NavbarProps = { theme: Theme; onToggleTheme: () => void }

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setScrolled(window.scrollY > 24)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  return <header className={'site-header' + (scrolled ? ' site-header-scrolled' : '')}><nav className="nav-shell container" aria-label="Main navigation">
    <Brand />
    <div className={'nav-links ' + (open ? 'nav-links-open' : '')}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-mobile-cta" href="#contact" onClick={() => setOpen(false)}>Start a project <ArrowUpRight size={15}/></a></div>
    <div className="nav-actions"><a className="button button-primary nav-cta" href="#contact">Start a project <ArrowUpRight size={15}/></a><button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' theme'} title={'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' theme'}>{theme === 'light' ? <Moon size={17}/> : <Sun size={17}/>}</button><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? <X/> : <Menu/>}</button></div>
  </nav></header>
}
