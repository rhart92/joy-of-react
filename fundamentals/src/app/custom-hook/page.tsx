'use client'
import React, { useEffect, useState } from 'react'
import { X } from 'react-feather'

// Our custom hook was leveraged to pull out the time logic from our component.
// The 2 major benefits of custom hooks are:
// - Code structure: Now we can pull out some complex hooks into their own
// function which can lead to better code readability
// - [BIG ONE] Code re-use: We can re-use this `useTime` hook in other
// components! You _could_ do this with standard JS functions, but the nice
// thing about custom hooks is that we can do *React* things like stopping an
// interval on unmount which would be **very** hard or impossible without this
// construct.
function useTime() {
  const [time, setTime] = useState(new Date(Date.now()))

  useEffect(() => {
    const updateTime = () => {
      const newDate = new Date(Date.now())
      setTime(newDate)
      console.log(newDate.toLocaleTimeString())
    }
    // Just another long running process.
    const interval = setInterval(updateTime, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [time])

  // We can return whatever we want from a custom hook.
  return time
}

// TIL: Think of custom hooks as "combos"! 🤔
function ClockWithCustomHook() {
  const time = useTime()
  return <p>{time.toLocaleTimeString()}</p>
}

export default function ClockContainer() {
  const [showClock, setShowClock] = useState(false)

  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 bg-pink-200 text-black flex flex-col items-center justify-center">
      {showClock && <ClockWithCustomHook />}
      <button
        onClick={() => setShowClock((v) => !v)}
        className="px-4 py-2 rounded bg-fuchsia-200"
      >
        {!showClock ? 'Show Clock' : <X />}
      </button>
    </div>
  )
}
