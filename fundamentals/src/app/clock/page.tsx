'use client'
import { useToggle } from '@/hooks/useToggle'
import React, { useEffect, useState } from 'react'
import { X } from 'react-feather'

/* function ClockOwnTime() { */
/*   const [time, setTime] = useState(new Date(Date.now())) */
/**/
/*   useEffect(() => { */
/*     const updateTime = () => { */
/*       const newDate = new Date(Date.now()) */
/*       setTime(newDate) */
/*       console.log(newDate.toLocaleTimeString()) */
/*     } */
/*     // Just another long running process. */
/*     const interval = setInterval(updateTime, 1000) */
/**/
/*     return () => { */
/*       clearInterval(interval) */
/*     } */
/*   }, [time]) */
/**/
/*   return <p>{time.toLocaleTimeString()}</p> */
/* } */

function ClockPassedTime(props: { time: Date }) {
  return <p>{props.time.toLocaleTimeString()}</p>
}

export default function ClockContainer() {
  const [time, setTime] = useState(new Date(Date.now()))
  // TIL: The reason we had to make a change to the `useToggle` hook to memoize
  // `toggleShowingClock` function is because custom hooks are also executed on
  // each re-render of the component. This means it's like copying the custom
  // hook body into the component, so it makes that that on each render we'd get
  // a new instance of `toggleShowingClock` without memoization.
  const [showClock, toggleShowingClock] = useToggle(false)

  useEffect(() => {
    if (!showClock) {
      return
    }

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
  }, [time, showClock])

  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 bg-pink-200 text-black flex flex-col items-center justify-center">
      {showClock && <ClockPassedTime time={time} />}
      <ClockToggle handleToggle={toggleShowingClock} showClock={showClock} />
    </div>
  )
}

const ClockToggle = React.memo(function ClockToggle(props: {
  handleToggle: () => void
  showClock: boolean
}) {
  const { showClock } = props
  return (
    <button
      onClick={props.handleToggle}
      className="px-4 py-2 rounded bg-fuchsia-200"
    >
      {!showClock ? 'Show Clock' : <X />}
      {/* Toggle a clock */}
    </button>
  )
})
