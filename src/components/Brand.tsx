export function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className={'brand ' + (footer ? 'brand-footer' : '')} href="#top" aria-label="Dev Engine AI home">
      <img
        className="brand-logo brand-logo-horizontal"
        src="/images/brand/dev-engine-ai-primary-horizontal.png"
        alt="DEV ENGINE AI"
        width="220"
        height="73"
      />
      <span className="brand-dark-lockup" aria-label="DEV ENGINE AI">
        <img
          className="brand-symbol"
          src="/images/brand/dev-e-symbol.png"
          alt=""
          width="54"
          height="54"
        />
        <span className="brand-wordmark">
          <span className="brand-wordmark-main">DEV ENGINE</span>
          <span className="brand-wordmark-ai">AI</span>
        </span>
      </span>
    </a>
  )
}
