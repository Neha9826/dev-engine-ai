import { useEffect, useRef, useState } from 'react'

type Theme = 'light' | 'dark'

type HeroVisualProps = { theme: Theme }

const sources: Record<Theme, string> = {
  light: '/videos/Dev-Engine-AI-Hero-bg-video.mp4',
  dark: '/videos/Dev-Engine-AI-Hero-bg-dark-video.mp4',
}

const posters: Record<Theme, string> = {
  light: '/videos/Dev-Engine-AI-Hero-bg-video-poster.jpg',
  dark: '/videos/Dev-Engine-AI-Hero-bg-dark-video-poster.jpg',
}

export default function HeroVisual({ theme }: HeroVisualProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [failed, setFailed] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReducedMotion(query.matches)
    query.addEventListener('change', update)
    return () => query.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    setFailed(false)
    const video = videoRef.current
    if (!video || reducedMotion) return
    video.pause()
    video.load()
    const play = () => { void video.play().catch(() => setFailed(true)) }
    if (video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) play()
    else video.addEventListener('canplay', play, { once: true })
    return () => video.removeEventListener('canplay', play)
  }, [theme, reducedMotion])

  return <div className="entity-stage hero-video-stage" role="img" aria-label="Dev Engine AI animated hero artwork">
    <div className="hero-video-fallback" style={{ backgroundImage: `url("${posters[theme]}")` }} aria-hidden="true" />
    {!reducedMotion && !failed && <video
      ref={videoRef}
      key={theme}
      className="hero-background-video"
      src={sources[theme]}
      poster={posters[theme]}
      autoPlay
      muted
      playsInline
      loop
      preload="metadata"
      aria-hidden="true"
      disablePictureInPicture
      controls={false}
      onError={() => setFailed(true)}
    />}
  </div>
}
