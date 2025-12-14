import { useEffect, useRef } from "react"

function CursorTrail() {
  const trail = useRef([])
  const sparks = useRef([])

  useEffect(() => {
    const canvas = document.createElement("canvas")
    canvas.style.position = "fixed"
    canvas.style.inset = "0"
    canvas.style.pointerEvents = "none"
    canvas.style.zIndex = "9999"
    document.body.appendChild(canvas)

    const ctx = canvas.getContext("2d")

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    // ===== MAIN RENDER LOOP =====
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const now = performance.now()

      // ---- TRAIL (short-lived) ----
      trail.current = trail.current.filter(p => now - p.t < 80)

      if (trail.current.length > 1) {
        ctx.strokeStyle = "rgba(56, 189, 248, 0.6)"
        ctx.lineWidth = 10
        ctx.lineCap = "round"

        ctx.beginPath()
        ctx.moveTo(trail.current[0].x, trail.current[0].y)
        for (let i = 1; i < trail.current.length; i++) {
          ctx.lineTo(trail.current[i].x, trail.current[i].y)
        }
        ctx.stroke()
      }

      // ---- SPARKS (line rays) ----
      sparks.current = sparks.current.filter(s => now - s.t < 120)

      sparks.current.forEach(s => {
        const life = 1 - (now - s.t) / 120

        ctx.strokeStyle = `rgba(52, 211, 153, ${life})`
        ctx.lineWidth = 1.2

        ctx.beginPath()
        ctx.moveTo(s.x, s.y)
        ctx.lineTo(
          s.x + Math.cos(s.a) * 8,
          s.y + Math.sin(s.a) * 8
        )
        ctx.stroke()
      })

      requestAnimationFrame(render)
    }

    render()

    // ===== EVENTS =====
    const handleMove = e => {
      trail.current.push({
        x: e.clientX,
        y: e.clientY,
        t: performance.now(),
      })
    }

    const handleClick = e => {
      for (let i = 0; i < 6; i++) {
        sparks.current.push({
          x: e.clientX,
          y: e.clientY,
          a: (Math.PI * 2 * i) / 6,
          t: performance.now(),
        })
      }
    }

    const reset = () => {
      trail.current = []
    }

    window.addEventListener("mousemove", handleMove)
    window.addEventListener("click", handleClick)
    window.addEventListener("mouseleave", reset)

    return () => {
      window.removeEventListener("mousemove", handleMove)
      window.removeEventListener("click", handleClick)
      window.removeEventListener("mouseleave", reset)
      window.removeEventListener("resize", resize)
      canvas.remove()
    }
  }, [])

  return null
}

export default CursorTrail
