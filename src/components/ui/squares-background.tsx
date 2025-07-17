
"use client"

import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface SquaresProps {
  direction?: "right" | "left" | "up" | "down" | "diagonal"
  speed?: number
  borderColor?: string
  squareSize?: number
  hoverFillColor?: string
  className?: string
}

export function Squares({
  direction = "right",
  speed = 1,
  borderColor = "#333",
  squareSize = 40,
  hoverFillColor = "#222",
  className,
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let numSquaresX = Math.ceil(canvas.width / squareSize) + 1
    let numSquaresY = Math.ceil(canvas.height / squareSize) + 1
    const gridOffset = { x: 0, y: 0 }
    let hoveredSquare: { x: number; y: number } | null = null

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      numSquaresX = Math.ceil(canvas.width / squareSize) + 1
      numSquaresY = Math.ceil(canvas.height / squareSize) + 1
    }

    resizeCanvas()

    const drawGrid = () => {
      if(!ctx) return
      
      const bgColor = getComputedStyle(document.documentElement).getPropertyValue('--background').trim()
      ctx.fillStyle = `hsl(${bgColor})`
      ctx.fillRect(0, 0, canvas.width, canvas.height);


      const startX = Math.floor(gridOffset.x / squareSize) * squareSize
      const startY = Math.floor(gridOffset.y / squareSize) * squareSize

      ctx.lineWidth = 0.5

      for (let x = startX; x < canvas.width + squareSize; x += squareSize) {
        for (let y = startY; y < canvas.height + squareSize; y += squareSize) {
          const squareX = x - (gridOffset.x % squareSize)
          const squareY = y - (gridOffset.y % squareSize)

          if (
            hoveredSquare &&
            Math.floor((x - startX) / squareSize) === hoveredSquare.x &&
            Math.floor((y - startY) / squareSize) === hoveredSquare.y
          ) {
            ctx.fillStyle = hoverFillColor
            ctx.fillRect(squareX, squareY, squareSize, squareSize)
          }

          ctx.strokeStyle = borderColor
          ctx.strokeRect(squareX, squareY, squareSize, squareSize)
        }
      }
    }

    let animationFrameId: number;
    const updateAnimation = () => {
      const effectiveSpeed = Math.max(speed, 0.1)

      switch (direction) {
        case "right":
          gridOffset.x = (gridOffset.x - effectiveSpeed + squareSize) % squareSize
          break
        case "left":
          gridOffset.x = (gridOffset.x + effectiveSpeed + squareSize) % squareSize
          break
        case "up":
          gridOffset.y = (gridOffset.y + effectiveSpeed + squareSize) % squareSize
          break
        case "down":
          gridOffset.y = (gridOffset.y - effectiveSpeed + squareSize) % squareSize
          break
        case "diagonal":
          gridOffset.x = (gridOffset.x - effectiveSpeed + squareSize) % squareSize
          gridOffset.y = (gridOffset.y - effectiveSpeed + squareSize) % squareSize
          break
      }

      drawGrid()
      animationFrameId = requestAnimationFrame(updateAnimation)
    }

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      const startX = Math.floor(gridOffset.x / squareSize) * squareSize
      const startY = Math.floor(gridOffset.y / squareSize) * squareSize

      const hoveredSquareX = Math.floor(
        (mouseX + (gridOffset.x % squareSize) - (startX % squareSize)) / squareSize
      );
      
      const hoveredSquareY = Math.floor(
        (mouseY + (gridOffset.y % squareSize) - (startY % squareSize)) / squareSize
      );
      
      hoveredSquare = { x: hoveredSquareX, y: hoveredSquareY };
    }

    const handleMouseLeave = () => {
      hoveredSquare = null;
    }

    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    updateAnimation()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMounted, direction, speed, borderColor, hoverFillColor, squareSize])

  return (
    <canvas
      ref={canvasRef}
      className={cn("w-full h-full border-none block", className)}
    />
  )
}
