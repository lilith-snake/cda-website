import { useEffect, useRef } from 'react'
import './PetalEffect.css'

export default function PetalEffect() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const stars = []
    const cosmicSymbols = ['✦', '✧', '⭑', '·', '◦', '◌', '✶', '⁂', '•', '∘']

    for (let i = 0; i < 30; i++) {
      const star = document.createElement('span')
      star.className = 'star-dust'
      star.textContent = cosmicSymbols[Math.floor(Math.random() * cosmicSymbols.length)]
      star.style.left = `${Math.random() * 100}%`
      star.style.fontSize = `${3 + Math.random() * 10}px`
      star.style.opacity = `${0.03 + Math.random() * 0.08}`
      star.style.animationDuration = `${18 + Math.random() * 36}s`
      star.style.animationDelay = `${Math.random() * 20}s`
      const colors = ['#8b7de8', '#6c5ce7', '#9d93c9', '#c9a96e', '#a098d0', '#5045b0']
      star.style.color = colors[Math.floor(Math.random() * colors.length)]
      container.appendChild(star)
      stars.push(star)
    }

    return () => stars.forEach(p => p.remove())
  }, [])

  return <div ref={containerRef} className="star-dust-container" aria-hidden="true" />
}
