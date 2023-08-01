'use client'
import { useState } from 'react'

export default function GradientGenerator() {
  const DEFAULT_COLOR = '#FF0000'

  // Although this solution scales to removing particular colors, we could have
  // also added a new piece of state to track the # of visible colors on screen
  // since our application currently pushes and pops off the end.
  const [colors, setColors] = useState<{ color: string; visible: boolean }[]>([
    { color: DEFAULT_COLOR, visible: true },
    { color: DEFAULT_COLOR, visible: true },
    { color: DEFAULT_COLOR, visible: false },
    { color: DEFAULT_COLOR, visible: false },
    { color: DEFAULT_COLOR, visible: false },
  ])

  return (
    <div className="p-4">
      <button
        className="bg-gray-100 px-4 py-2 border border-black text-black mr-4 disabled:opacity-75"
        onClick={() => {
          if (colors.filter((color) => color.visible).length <= 2) {
            alert("Can't remove more colors")
            return
          }
          const nextColors = [...colors]
          // Sad hack
          const lastVisible = nextColors.filter((color) => color.visible).length
          if (lastVisible === -1) {
            alert('Logical error.')
            return
          }
          nextColors[lastVisible - 1].visible = false
          setColors(nextColors)
        }}
      >
        Remove Color
      </button>
      <button
        className="bg-gray-100 px-4 py-2 border border-black text-black mr-4 disabled:opacity-75"
        onClick={() => {
          if (colors.filter((color) => color.visible).length >= 5) {
            alert("Can't add more colors")
            return
          }
          const nextColors = [...colors]
          const firstInvisible = nextColors.findIndex((color) => !color.visible)
          if (firstInvisible === -1) {
            alert('Logical error.')
            return
          }
          nextColors[firstInvisible].visible = true
          setColors(nextColors)
        }}
      >
        Add Color
      </button>

      <div
        className="min w-full h-96 bg-white my-4"
        style={{
          background: `linear-gradient(45deg, ${colors
            .filter((color) => color.visible)
            .map((color) => color.color)
            .join(', ')})`,
        }}
      ></div>

      <div className="flex gap-4">
        {/* Pretty cool that Chrome just ships with a color picker. */}
        {/* TODO: Build custom color picker. */}
        {colors
          .filter((color) => color.visible)
          .map((color, i) => (
            <input
              className="w-24 h-24 border border-2 border-white"
              onChange={(e) => {
                const newColors = [...colors]
                newColors[i] = { color: e.target.value, visible: true }
                setColors(newColors)
              }}
              type="color"
              value={color.color}
            />
          ))}
      </div>
    </div>
  )
}
