import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'
type HeroVisualProps = { theme: Theme }

const videoSources: Record<Theme, string> = {
  light: '/videos/Dev-Engine-AI-Hero-bg-video.mp4',
  dark: '/videos/Dev-Engine-AI-Hero-bg-dark-video.mp4',
}

export default function HeroVisual({ theme }: HeroVisualProps) {
  const [reducedMotion, setReducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const [videoReady, setVideoReady] = useState(false)
  const [videoFailed, setVideoFailed] = useState(false)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(preference.matches)
    preference.addEventListener('change', updatePreference)
    return () => preference.removeEventListener('change', updatePreference)
  }, [])

  // The theme-keyed video below mounts only the active source. The CSS fallback
  // remains visible until that source can play, so switching themes never exposes
  // an empty frame or downloads both full videos at once.
  useEffect(() => {
    setVideoReady(false)
    setVideoFailed(false)
  }, [theme])

  return (
    <div
      className={`entity-stage hero-video-stage theme-${theme}`}
      role="img"
      aria-label="Dev Engine AI animated hero artwork"
    >
      <div className="hero-video-fallback" aria-hidden="true" />
      {!reducedMotion && !videoFailed && (
        <video
          key={theme}
          className={`hero-background-video${videoReady ? ' is-ready' : ''}`}
          src={videoSources[theme]}
          autoPlay
          muted
          playsInline
          loop
          preload="metadata"
          aria-hidden="true"
          disablePictureInPicture
          controls={false}
          onCanPlay={() => setVideoReady(true)}
          onError={() => setVideoFailed(true)}
        />
      )}
    </div>
  )
}
