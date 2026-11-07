import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, MessageCircle, Moon, Sun, X } from 'lucide-react'
import { Brand } from './Brand'

type Theme = 'light' | 'dark'
const whatsappUrl = 'https://wa.me/919259073818?text=Hello%20Dev%20Engine%20AI%2C%20I%27d%20like%20to%20discuss%20a%20project.'
const links = [['Lifecycle', '#lifecycle'], ['AI', '#intelligence'], ['Work', '#work'], ['Services', '#services'], ['Approach', '#studio'], ['FAQ', '#faq']]

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
    <div className={'nav-links ' + (open ? 'nav-links-open' : '')}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-mobile-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with Dev Engine AI on WhatsApp" onClick={() => setOpen(false)}><MessageCircle size={16}/> WhatsApp <ArrowUpRight size={14}/></a><a className="nav-mobile-cta" href="#contact" onClick={() => setOpen(false)}>Discuss a project <ArrowUpRight size={15}/></a></div>
    <div className="nav-actions"><a className="button button-glass nav-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with Dev Engine AI on WhatsApp"><MessageCircle size={15}/> WhatsApp</a><a className="button button-primary nav-cta" href="#contact">Discuss a project <ArrowUpRight size={15}/></a><button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' theme'} title={'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' theme'}>{theme === 'light' ? <Moon size={17}/> : <Sun size={17}/>}</button><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? <X/> : <Menu/>}</button></div>
  </nav></header>
}
