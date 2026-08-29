import './CosmicHeroVideo.css'

export default function CosmicHeroVideo({ className = '' }) {
  return (
    <video
      className={`page-hero-video ${className}`.trim()}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
    >
      <source src={`${import.meta.env.BASE_URL}videos/home-cosmic-hero.mp4`} type="video/mp4" />
    </video>
  )
}
