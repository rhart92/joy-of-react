'use client'
import React, { useEffect, useRef, useState } from 'react'

export default function Foogle() {
  const searchRef = useRef<HTMLInputElement>(null)
  const [tracking, setTracking] = useState(true)

  useEffect(() => {
    // Run on mount: Use a useEffect with an empty dependency array
    // This can be used for any logic that you want to run right after the first
    // render.
    // Note: `autofocus` for text inputs isn't safe to use in React since it's
    // meant to work on page load but with React, very little exists on page
    // load and all the content is dynamically injected afterwards.
    searchRef.current?.focus()
  }, [])

  /* useEffect(() => { */
  /*   console.log({ ...mousePosition }) */
  /* }, [mousePosition]) */

  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 bg-white text-black flex flex-col items-center justify-center">
      <img
        className="pb-4"
        alt="Foobar"
        src="https://sandpack-bundler.vercel.app/img/foogle.svg"
      />
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="drop-shadow-xl rounded-full">
          <input
            type="text"
            className="rounded-l-full border border-r-0 border-gray-200 w-80 px-2 py-1"
            ref={searchRef}
          />
          <button className="rounded-r-full border border-l-0 border-gray-200 px-4 py-1 bg-white text-md">
            Search
          </button>
        </div>
      </form>
      <div className="mt-4 bg-gray-100 w-60 p-4 rounded">
        <p className="font-semibold">Debugging Info:</p>
        <button
          className="px-4 py-2 bg-red-500 rounded"
          onClick={() => {
            setTracking((tracking) => !tracking)
          }}
        >
          {tracking ? 'Stop' : 'Start'} Tracking
        </button>
        {tracking && <MouseTracking />}
      </div>
    </div>
  )
}

function MouseTracking() {
  const [subEnabled, setSubEnabled] = useState(false)
  const [mousePosition, setMousePosition] = useState<{
    x: number
    y: number
  } | null>(null)

  useEffect(() => {
    function handleMouseMove(e: MouseEvent): void {
      const nextPosition = { x: e.clientX, y: e.clientY }
      setMousePosition(nextPosition)
      console.log(nextPosition)
    }

    if (subEnabled) {
      // Only want to add the "subscription" once when the component mounts. This
      // is true for other subscriptions like interval timers, websockets, etc.
      // and a similar pattern can be used.
      window.addEventListener('mousemove', handleMouseMove)

      return () => {
        // Clean up the handler
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [subEnabled])
  return (
    <p className="text-black text-md">
      <button
        className="px-4 py-2 bg-green-500 rounded block mt-4"
        onClick={() => setSubEnabled((e) => !e)}
      >
        (Sub) {subEnabled ? 'Disable' : 'Enable'}
      </button>
      <span>Mouse Position: </span>
      {mousePosition ? (
        <span>
          {mousePosition?.x} / {mousePosition?.y}
        </span>
      ) : (
        <span></span>
      )}
    </p>
  )
}
