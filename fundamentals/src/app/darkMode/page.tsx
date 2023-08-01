'use client'
import React from "react"
import { useEffect, useId, useState } from 'react'
import style from './style.module.css'

const localStorageKeys = {
  isDarkMode: "is-dark-mode"
}

// React Hooks are special functions that allow us to “hook” into React internals.
// The 2 Rules of Hooks are:
// 1. Hooks have to be called within the scope of a React application.
//    We can't call them outside of our React components (other than in other
//    hooks)
// 2. We have to call our hooks at the top level of the component.

// TIL: Hook order matters and can't change in React **because** we don't give it any
// information about the hook like a name. We just provide the value. So the
// only option for React is to track by order 🤔
export default function DarkMode() {
  // Automatically pull dark mode preference from local storage, defaulting to
  // light no preference is set.
  // TIL: Localstorage ONLY stores strings so be careful.
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    // Default to light for SSR
    if (typeof window === 'undefined') {
      return 'light'
    }
    const mode = window.localStorage.getItem(localStorageKeys.isDarkMode)
    if (mode && (mode === 'light' || mode === 'dark')) {
      return mode
    }
    return 'light'
  })
  const id = useId()

  useEffect(() => {
    // Save the mode (dark or light) in local storage so we can pull it on load.
    window.localStorage.setItem(localStorageKeys.isDarkMode, mode)
  }, [mode])

  const classes =
    mode === 'dark'
      ? `${style.fullPage} ${style.dark}`
      : `${style.fullPage} ${style.light}`

  const ballDiameter = 16
  const buttonBorder = 2

  return (
    <div className={`${classes} flex items-center justify-center`}>
      <label className="cursor-pointer" htmlFor={id}>
        Dark Mode
      </label>
      <button
        id={id}
        className="ml-4 relative"
        onClick={() => {
          setMode((mode) => (mode === 'light' ? 'dark' : 'light'))
        }}
      >
        <span
          className={style.line}
          style={{
            background: mode === 'dark' ? 'white' : 'black',
            right: -1 * ballDiameter,
            width: 2 * ballDiameter,
            height: buttonBorder,
            bottom: (ballDiameter - buttonBorder) / 2,
          }}
        ></span>
        <span
          className={style.ball}
          style={{
            transform:
              mode === 'dark' ? `translateX(${ballDiameter}px)` : undefined,
            transition: 'transform 200ms ease-in-out',
            borderWidth: buttonBorder,
            borderStyle: 'solid',
            borderColor: mode === 'dark' ? 'white' : 'black',
            background: mode === 'dark' ? 'black' : 'white',
            boxShadow: `0 0 0 2px ${mode === 'dark' ? 'black' : 'white'}`,
            width: ballDiameter,
            height: ballDiameter,
          }}
        ></span>
      </button>
    </div>
  )
}
