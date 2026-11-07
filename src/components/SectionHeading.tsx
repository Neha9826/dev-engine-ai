import type { ReactNode } from 'react'
export default function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text: string }) {
  return <div className="section-heading"><div className="eyebrow"><span className="eyebrow-line"/>{eyebrow}</div><h2>{title}</h2><p>{text}</p></div>
}
