'use client'
import React from 'react'
import { useToggle } from '@/hooks/useToggle'

export default function ToggleButton() {
  const [on, toggle] = useToggle(false)

  const backgroundClass = on ? 'bg-red-200' : 'bg-blue-200'

  return (
    <div
      className={`absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center ${backgroundClass}`}
    >
      <button className="px-4 py-2 bg-white border border-gray-200 text-black rounded"
      onClick={() => toggle()}>
        Hello
      </button>
    </div>
  )
}
