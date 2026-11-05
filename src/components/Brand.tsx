import { ArrowUpRight } from 'lucide-react'

export function Brand({ footer = false }: { footer?: boolean }) {
  return <a className={`brand ${footer ? 'brand-footer' : ''}`} href="#top" aria-label="Dev Engine AI home">
    <span className="brand-mark"><span /><span /><span /></span>
    <span className="brand-wordmark"><strong>DEV ENGINE</strong><small>AI / ENGINEERING STUDIO</small></span>
    {footer && <ArrowUpRight size={15} className="brand-arrow" />}
  </a>
}
