"use client"

import { useEffect, useRef } from "react"

interface DotGridBackgroundProps {
  dotColor?: string
  dotSize?: number
  dotSpacing?: number
  animationSpeed?: number
  className?: string
}

export function DotGridBackground({
  dotColor = "rgba(120, 120, 120, 0.2)",
  dotSize = 1,
  dotSpacing = 30,
  animationSpeed = 0.5,
  className = "",
}: DotGridBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const timeRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Initial size
    updateCanvasSize()

    // Update on resize
    window.addEventListener("resize", updateCanvasSize)

    // Animation function
    const animate = (timestamp: number) => {
      if (!timeRef.current) timeRef.current = timestamp
      const elapsed = timestamp - timeRef.current

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY)

      const cols = Math.ceil(canvas.width / dotSpacing)
      const rows = Math.ceil(canvas.height / dotSpacing)
      const offsetX = (canvas.width - (cols - 1) * dotSpacing) / 2
      const offsetY = (canvas.height - (rows - 1) * dotSpacing) / 2

      // Animation params
      const pulseDuration = 1200 // ms for a full pulse cycle
      const delayStep = 80 // ms between each dot

      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const x = offsetX + i * dotSpacing
          const y = offsetY + j * dotSpacing

          // Calculate distance from center for opacity
          const dx = x - centerX
          const dy = y - centerY
          const distance = Math.sqrt(dx * dx + dy * dy)
          const opacity = 1 - (distance / maxDistance) * 0.85

          // Pulse animation with delay per dot (left to right, top to bottom)
          const dotIndex = i + j * cols
          const delay = dotIndex * delayStep
          const localTime = (elapsed - delay + pulseDuration) % pulseDuration
          // Animation: scale up (1) -> max (1.7) -> back to 1
          const progress = localTime / pulseDuration
          const scale = 1 + 0.7 * Math.sin(Math.PI * progress)
          const finalSize = dotSize * scale

          ctx.fillStyle =
            dotColor.replace("rgba(", "").replace(")", "").split(",").slice(0, 3).join(",") +
            `, ${opacity})`

          ctx.beginPath()
          ctx.arc(x, y, finalSize, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", updateCanvasSize)
      cancelAnimationFrame(animationRef.current)
    }
  }, [dotColor, dotSize, dotSpacing, animationSpeed])

  return <canvas ref={canvasRef} className={`fixed top-0 left-0 w-full h-full -z-10 ${className}`} aria-hidden="true" />
}
