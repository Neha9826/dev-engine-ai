import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react'
import { Brand } from './Brand'

type Theme = 'light' | 'dark'
const whatsappUrl = 'https://wa.me/919259073818?text=Hello%20Dev%20Engine%20AI%2C%20I%27d%20like%20to%20discuss%20a%20project.'
const links = [['How we work', '#lifecycle'], ['Intelligence', '#intelligence'], ['Work', '#work'], ['Services', '#services'], ['Approach', '#studio'], ['FAQ', '#faq']]

function WhatsAppMark() {
  return <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M16 3.2A12.2 12.2 0 0 0 5.5 21.6L4 28l6.6-1.7A12.2 12.2 0 1 0 16 3.2Z" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round"/><path d="M12.1 10.2c-.3-.7-.7-.7-1-.7h-.8c-.3 0-.8.1-1.2.6-.4.4-1.6 1.5-1.6 3.7s1.7 4.3 1.9 4.6c.2.3 3.2 5.1 7.8 6.9 3.8 1.5 4.6 1.2 5.4 1.1.8-.1 2.6-1.1 3-2.1.4-1 .4-1.9.3-2.1-.1-.2-.4-.3-.9-.6s-2.6-1.3-3-1.4c-.4-.2-.7-.2-1 .2-.3.4-1.1 1.4-1.4 1.7-.3.3-.5.4-1 .1-.5-.2-1.9-.7-3.6-2.2-1.3-1.1-2.2-2.5-2.5-2.9-.3-.5 0-.7.2-1 .2-.2.5-.6.7-.8.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8-.1-.2-.9-2.3-1.3-3.1Z" fill="currentColor" transform="translate(2 -1) scale(.88)"/></svg>
}

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
    <div className={'nav-links ' + (open ? 'nav-links-open' : '')}>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-mobile-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with Dev Engine AI on WhatsApp" title="Chat with Dev Engine AI on WhatsApp" onClick={() => setOpen(false)}><WhatsAppMark /></a><a className="nav-mobile-cta" href="#contact" onClick={() => setOpen(false)}>Discuss a project <ArrowUpRight size={15}/></a></div>
    <div className="nav-actions"><a className="button button-glass nav-whatsapp" href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="Chat with Dev Engine AI on WhatsApp" title="Chat with Dev Engine AI on WhatsApp"><WhatsAppMark /></a><a className="button button-primary nav-cta" href="#contact">Discuss a project <ArrowUpRight size={15}/></a><button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label={'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' theme'} title={'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' theme'}>{theme === 'light' ? <Moon size={17}/> : <Sun size={17}/>}</button><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(v => !v)}>{open ? <X/> : <Menu/>}</button></div>
  </nav></header>
}
