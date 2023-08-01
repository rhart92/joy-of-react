'use client'
import React, { useEffect, useState } from 'react'

export default function Dimensions() {
  const [windowDimensions, setWindowDimensions] = useState<{
    x: number
    y: number
  } | null>(null)
  useEffect(() => {
    function handleResize() {
      setWindowDimensions({ x: window.innerWidth, y: window.innerHeight })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])
  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 bg-green-200 text-black flex flex-col items-center justify-center text-5xl font-[monospace]">
      {windowDimensions && (
        <h1>
          {windowDimensions.x} / {windowDimensions.y}
        </h1>
      )}
    </div>
  )
}
