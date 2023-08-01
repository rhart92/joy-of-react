import { useEffect, useState } from 'react'

export type Position = {
  x: number
  y: number
}

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<Position | null>(null)

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return mousePosition
}
