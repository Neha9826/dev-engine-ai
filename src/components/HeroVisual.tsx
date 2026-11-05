import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type HeroVisualProps = { theme: Theme }

const videoSources: Record<Theme, string> = {
  light: '/videos/Dev-Engine-AI-Hero-bg-video.mp4',
  dark: '/videos/Dev-Engine-AI-Hero-bg-dark-video.mp4',
}

const posterSources: Record<Theme, string> = {
  light: '/videos/Dev-Engine-AI-Hero-bg-video-poster.jpg',
  dark: '/videos/Dev-Engine-AI-Hero-bg-dark-video-poster.jpg',
}

export default function HeroVisual({ theme }: HeroVisualProps) {
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  // Readiness is tied to the active theme so a newly mounted video can never
  // inherit the previous video's ready state during a theme switch.
  const [readyTheme, setReadyTheme] = useState<Theme | null>(null)
  const [failedTheme, setFailedTheme] = useState<Theme | null>(null)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(preference.matches)
    preference.addEventListener('change', updatePreference)
    return () => preference.removeEventListener('change', updatePreference)
  }, [])

  return (
    <div
      className={`entity-stage hero-video-stage theme-${theme}`}
      role="img"
      aria-label="Dev Engine AI animated hero artwork"
    >
      <div
        className="hero-video-fallback"
        style={{ backgroundImage: `url("${posterSources[theme]}")` }}
        aria-hidden="true"
      />
      {!reducedMotion && failedTheme !== theme && (
        <video
          key={theme}
          className={`hero-background-video${readyTheme === theme ? ' is-ready' : ''}`}
          src={videoSources[theme]}
          autoPlay
          muted
          playsInline
          loop
          preload="auto"
          aria-hidden="true"
          disablePictureInPicture
          controls={false}
          onCanPlay={() => setReadyTheme(theme)}
          onError={() => setFailedTheme(theme)}
        />
      )}
    </div>
  )
}
