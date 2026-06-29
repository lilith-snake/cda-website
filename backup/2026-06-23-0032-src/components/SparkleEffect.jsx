import { useEffect, useRef } from 'react'

export default function SparkleEffect({
  count = 45,
  color = 'rgba(139, 125, 232, 0.4)',
  colorSecondary = 'rgba(139, 125, 232, 0.2)'
}) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId
    let w, h

    const stars = []
    const nebulae = [] // 星雲雲團

    const resize = () => {
      w = canvas.width = canvas.offsetWidth
      h = canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // 生成星雲雲團（大尺寸極低透明度光暈）
    for (let i = 0; i < 4; i++) {
      nebulae.push({
        x: Math.random() * w,
        y: Math.random() * h,
        baseX: Math.random() * w,
        baseY: Math.random() * h,
        radius: 120 + Math.random() * 280,
        alpha: 0.008 + Math.random() * 0.022,
        hue: Math.random() < 0.3 ? 'gold' : Math.random() < 0.5 ? 'indigo' : 'violet',
        driftAmp: 20 + Math.random() * 60,
        driftSpeed: 0.0003 + Math.random() * 0.001,
        driftPhase: Math.random() * Math.PI * 2,
      })
    }

    // 生成不同類型的星星
    for (let i = 0; i < count; i++) {
      const typeRand = Math.random()
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: 0.3 + Math.random() * 3.5,
        speed: 0.002 + Math.random() * 0.015,
        phase: Math.random() * Math.PI * 2,
        twinkle: 0.15 + Math.random() * 0.85,
        type: typeRand < 0.2 ? 'cross'
          : typeRand < 0.45 ? 'dot'
          : typeRand < 0.65 ? 'diamond'
          : typeRand < 0.85 ? 'constellation'
          : 'nebulaDust', // 新增：星雲塵埃（超小點）
        hue: Math.random() < 0.3 ? 'gold' : 'star', // 30% 金色星星
      })
    }

    const drawStar = (x, y, r, alpha, type, hue) => {
      const baseColor = hue === 'gold'
        ? `rgba(201, 169, 110, ${alpha})`
        : `rgba(139, 125, 232, ${alpha})`

      ctx.fillStyle = baseColor

      if (type === 'nebulaDust') {
        // 極微小的星雲塵埃點
        ctx.beginPath()
        ctx.arc(x, y, r * 0.4, 0, Math.PI * 2)
        ctx.fill()
      } else if (type === 'dot') {
        // Simple glowing dot
        ctx.beginPath()
        ctx.arc(x, y, r, 0, Math.PI * 2)
        ctx.fill()
      } else if (type === 'cross') {
        // 4-pointed cross star
        ctx.beginPath()
        ctx.moveTo(x, y - r)
        ctx.lineTo(x + r * 0.25, y - r * 0.25)
        ctx.lineTo(x + r, y)
        ctx.lineTo(x + r * 0.25, y + r * 0.25)
        ctx.lineTo(x, y + r)
        ctx.lineTo(x - r * 0.25, y + r * 0.25)
        ctx.lineTo(x - r, y)
        ctx.lineTo(x - r * 0.25, y - r * 0.25)
        ctx.closePath()
        ctx.fill()
      } else if (type === 'diamond') {
        // 4-pointed sharper diamond
        const s = r * 1.2
        ctx.beginPath()
        ctx.moveTo(x, y - s)
        ctx.lineTo(x + s * 0.3, y)
        ctx.lineTo(x, y + s)
        ctx.lineTo(x - s * 0.3, y)
        ctx.closePath()
        ctx.fill()
      } else if (type === 'constellation') {
        // Small constellation cluster (3 dots connected)
        const sr = r * 0.6
        ctx.globalAlpha = alpha * 0.5
        ctx.strokeStyle = hue === 'gold'
          ? `rgba(201, 169, 110, ${alpha * 0.3})`
          : `rgba(139, 125, 232, ${alpha * 0.3})`
        ctx.lineWidth = 0.5
        ctx.beginPath()
        const dx = r * 2, dy = r * 1.5
        ctx.moveTo(x, y)
        ctx.lineTo(x + dx, y - dy)
        ctx.lineTo(x + dx * 1.5, y + dy * 0.5)
        ctx.stroke()
        // Dots at vertices
        ctx.globalAlpha = alpha
        ctx.fillStyle = baseColor
        ;[[x, y], [x + dx, y - dy], [x + dx * 1.5, y + dy * 0.5]].forEach(([px, py]) => {
          ctx.beginPath()
          ctx.arc(px, py, sr * 0.8, 0, Math.PI * 2)
          ctx.fill()
        })
        ctx.globalAlpha = 1
      }
    }

    const drawNebula = (nebula, time) => {
      // 星雲雲團緩慢漂移
      const dx = Math.sin(time * nebula.driftSpeed + nebula.driftPhase) * nebula.driftAmp
      const dy = Math.cos(time * nebula.driftSpeed * 0.7 + nebula.driftPhase) * nebula.driftAmp * 0.6
      const nx = nebula.baseX + dx
      const ny = nebula.baseY + dy

      let nebulaColor
      if (nebula.hue === 'gold') {
        nebulaColor = `rgba(201, 169, 110, ${nebula.alpha})`
      } else if (nebula.hue === 'indigo') {
        nebulaColor = `rgba(61, 53, 128, ${nebula.alpha * 1.5})`
      } else {
        nebulaColor = `rgba(108, 92, 231, ${nebula.alpha})`
      }

      const gradient = ctx.createRadialGradient(nx, ny, nebula.radius * 0.15, nx, ny, nebula.radius)
      gradient.addColorStop(0, nebulaColor)
      gradient.addColorStop(0.4, nebulaColor.replace(/[\d.]+\)$/, `${nebula.alpha * 0.5})`))
      gradient.addColorStop(1, 'transparent')

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(nx, ny, nebula.radius, 0, Math.PI * 2)
      ctx.fill()
    }

    const draw = (time) => {
      ctx.clearRect(0, 0, w, h)

      // 先繪製星雲雲團（底層）
      nebulae.forEach(n => drawNebula(n, time))

      stars.forEach(s => {
        const alpha = s.twinkle * (0.3 + 0.7 * Math.sin(time * s.speed + s.phase))
        drawStar(s.x, s.y, s.size, Math.min(alpha, 0.9), s.type, s.hue)

        // Glow halo for larger stars (使用 lighter 混合模式讓光暈疊加更自然)
        if (s.size > 1.8 && alpha > 0.4) {
          ctx.save()
          ctx.globalCompositeOperation = 'lighter'
          const glowAlpha = alpha * 0.12
          const gradient = ctx.createRadialGradient(s.x, s.y, s.size * 0.5, s.x, s.y, s.size * 3.5)
          if (s.hue === 'gold') {
            gradient.addColorStop(0, `rgba(201, 169, 110, ${glowAlpha})`)
          } else {
            gradient.addColorStop(0, `rgba(139, 125, 232, ${glowAlpha})`)
          }
          gradient.addColorStop(1, 'transparent')
          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(s.x, s.y, s.size * 3.5, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }
      })

      animationId = requestAnimationFrame(draw)
    }

    animationId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [count, color, colorSecondary])

  return (
    <canvas
      ref={canvasRef}
      className="sparkle-canvas"
      aria-hidden="true"
    />
  )
}
