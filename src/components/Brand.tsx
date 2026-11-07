export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={'brand ' + (footer ? 'brand-footer' : '')} href="#top" aria-label="Dev Engine AI home">
      <img
        className="brand-logo brand-logo-light"
        src="/images/brand/dev-engine-ai-primary-horizontal-light.png"
        alt="DEV ENGINE AI"
        width="220"
        height="74"
      />
      <img
        className="brand-logo brand-logo-dark"
        src="/images/brand/dev-engine-ai-primary-horizontal-dark.png"
        alt="DEV ENGINE AI"
        width="220"
        height="74"
      />
    </a>
  )
}
