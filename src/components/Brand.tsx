import { ArrowUpRight } from 'lucide-react'
export function Brand({ footer = false }: { footer?: boolean }) {
  return <a className={'brand ' + (footer ? 'brand-footer' : '')} href="#top" aria-label="Dev Engine AI home"><span className="brand-symbol"><i/><i/><i/></span><span className="brand-wordmark"><strong>DEV ENGINE AI</strong><small>INDEPENDENT ENGINEERING STUDIO</small></span>{footer && <ArrowUpRight size={15} className="brand-arrow"/>}</a>
}
