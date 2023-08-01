'use client'
import React, { useEffect, useState } from 'react'

export default function MouseTracker() {
  const mousePosition = useMousePosition()
  return (
    <div className="flex absolute left-0 right-0 top-0 bottom-0 bg-fuchsia-200 items-center justify-center">
      <p className="text-black text-7xl font-[monospace]">
        {mousePosition ? (
          <span>
            {mousePosition?.x} / {mousePosition?.y}
          </span>
        ) : (
          <span></span>
        )}
      </p>
    </div>
  )
}

// Custom hooks to encapsulate business logic for mouse tracking.
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<{
    x: number
    y: number
  } | null>(null)

  useEffect(() => {
    function handleMouseMove(e: MouseEvent): void {
      const nextPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(nextPosition)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      // Clean up the handler
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return mousePosition
}
