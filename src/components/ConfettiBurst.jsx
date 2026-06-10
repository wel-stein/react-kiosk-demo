import { useEffect, useRef, useState } from 'react'

const COLORS = ['#006767', '#00a3a3', '#99e8e5', '#ffb703', '#fb8500', '#ef476f', '#ffd166']

// One-shot full-screen confetti burst, then unmounts its canvas.
export default function ConfettiBurst({ duration = 3200, count = 150 }) {
  const canvasRef = useRef(null)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDone(true)
      return undefined
    }
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const dpr = window.devicePixelRatio || 1
    const resize = () => {
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
    }
    resize()
    window.addEventListener('resize', resize)

    // Launch from just above the success icon, fanning outward and up
    const originX = () => canvas.width / 2
    const originY = () => Math.min(canvas.height * 0.25, 260 * dpr)
    const pieces = Array.from({ length: count }, () => {
      const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.1
      const speed = (7 + Math.random() * 9) * dpr
      return {
        x: originX(),
        y: originY(),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: (5 + Math.random() * 6) * dpr,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotation: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.3,
        wobble: Math.random() * Math.PI * 2,
      }
    })

    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = (now - start) / duration
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      if (t >= 1) {
        setDone(true)
        return
      }
      const fade = t < 0.75 ? 1 : 1 - (t - 0.75) / 0.25
      pieces.forEach((p) => {
        p.vy += 0.22 * dpr
        p.vx *= 0.985
        p.wobble += 0.1
        p.x += p.vx + Math.sin(p.wobble) * dpr
        p.y += p.vy
        p.rotation += p.spin
        ctx.save()
        ctx.globalAlpha = fade
        ctx.translate(p.x, p.y)
        ctx.rotate(p.rotation)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6)
        ctx.restore()
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [duration, count])

  if (done) return null

  return <canvas ref={canvasRef} className="confetti-canvas" aria-hidden="true" />
}
