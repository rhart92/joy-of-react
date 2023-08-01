'use client'
import React from "react"
import { useEffect, useState } from 'react'

export default function EffectIntro() {
  const [count, setCount] = useState(1)
  // Without any dependency array, we'll tell React to call this function **after**
  // every re-render. The main reason to wrap this code in `useEffect` vs. just
  // having it in the function body is that `useEffect` gives us control over
  // when the function is called (basically under what circumstances).
  useEffect(
    () => {
      // In strict mode, the effect code will be called twice on the initial
      // render to try to help sus out bugs.
      console.log('hi')
      document.title = `Counter (${count})`
    },
    // List of dependencies (so we are telling React, "only re-render when
    // something in this list changes (state or props)") vs. after **every**
    // render. The effect **ALWAYS** runs at least once on mount.
    [count]
  )

  return (
    <div onClick={() => setCount((count) => count + 1)}>
      I'm a page with an effect!
    </div>
  )
}
