'use client'
import React from 'react'

import { useRef } from 'react'

export default function CanvasWithRef() {
  // Refs are like boxes. We can put whatever we want in the box and React will
  // thread this value through different renders of this component.
  // Refs are OK to mutate and actually require it since you set the `current`
  // property 🤔 
  // TIL: In order to let TS know the ref if mutable, you add `... | null` as
  // part of the type.
  const canvasRef = useRef<HTMLCanvasElement | null>(null) // { current: null }
  const otherCanvasRef = useRef<HTMLCanvasElement | null>(null)

  function drawPokeball() {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) {
      throw new Error('Expected to find Canvas')
    }
    ctx.clearRect(0, 0, 200, 200)
    ctx.beginPath()
    ctx.rect(30, 90, 140, 20)
    ctx.fillStyle = 'black'
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.arc(100, 97, 75, 1 * Math.PI, 2 * Math.PI)
    ctx.fillStyle = 'tomato'
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.arc(100, 103, 75, 0, 1 * Math.PI)
    ctx.fillStyle = 'white'
    ctx.fill()
    ctx.closePath()

    ctx.beginPath()
    ctx.arc(100, 100, 25, 0, 2 * Math.PI)
    ctx.fillStyle = 'black'
    ctx.fill()
    ctx.closePath()
    ctx.beginPath()
    ctx.arc(100, 100, 19, 0, 2 * Math.PI)
    ctx.fillStyle = 'white'
    ctx.fill()
    ctx.closePath()
  }

  return (
    <div className="bg-white border border-amber-500 text-black">
      <div className="bg-blue-500 inline-block">
        <canvas
          className="border border-amber-500"
          ref={canvasRef}
          width={200}
          height={200}
        />
      </div>
      <div className="bg-blue-500 inline-block">
        <canvas
          className="border border-amber-500"
          ref={canvas => {
            // Another way do this might to be think about this assignment
            // occuring in the function we provide to `ref` but in TS types,
            // this isn't possible since it's readonly 🤔 Turns out I had to add
            // `... | null` to the types.
            otherCanvasRef.current = canvas
          }}
          width={200}
          height={200}
        />
      </div>
      <canvas
        className="border border-amber-500"
        ref={(canvas) => {
          // We can pass a function to `ref` which will be called with the HTML
          // element related to this ReactNode similar to using
          // `document.querySelector`.
          console.log(canvas)
          // We _could_ go as far as to assign this variable to a variabe like
          // `canvasRef` in our compoent, but although this works, React
          // provides a slightly better way using `useRef`.
        }}
        width={200}
        height={200}
      />
      <button
        className="m-4 px-2 py-1 bg-green-500 rounded"
        onClick={drawPokeball}
      >
        Draw
      </button>
    </div>
  )
}
