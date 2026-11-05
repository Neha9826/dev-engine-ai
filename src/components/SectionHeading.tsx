import type { ReactNode } from 'react'
export default function SectionHeading({ eyebrow, title, text, light = false }: { eyebrow: string; title: ReactNode; text?: string; light?: boolean }) {
  return <div className={`section-heading ${light ? 'section-heading-light' : ''}`}>
    <div className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</div>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
}
