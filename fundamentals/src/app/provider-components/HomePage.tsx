'use client'
import React from 'react'

// Better practice to have small well defined contexts vs. having something like
// `AppContext` for performance reasons.
//
// TIL: Essentially, you can think of context as “internal props”. It follows all the
// same rules as props. If the value held in context changes, this component
// will re-render.
//
// So we'll need to amend out definition of when a pure (memoized) component
// will re-render:
//
// > A pure component will re-render if a prop, state variable, or context value
// > changes.
//
// See more in context-performance.
import { UserContext } from './UserProvider'
import { ThemeContext } from './ThemeProvider'
import { PlaybackRateContext } from './PlaybackRateProvider'

function Homepage() {
  const { user } = React.useContext(UserContext)
  const { theme, toggleTheme } = React.useContext(ThemeContext)
  const { playbackRate, setPlaybackRate, resetPlaybackRate } =
    React.useContext(PlaybackRateContext)

  return (
    <div className="flex flex-col gap-4 items-center p-4">
      <p>User: {user ? user.email : 'None'}</p>
      <p>Theme: {theme}</p>
      <button
        className="px-2 py-1 bg-green-500 rounded"
        onClick={() => {
          toggleTheme()
        }}
      >
        Change theme!
      </button>
      <p>Playback Rate: {playbackRate}x</p>
      <button
        className="px-2 py-1 bg-purple-500 rounded mr-4"
        onClick={() => {
          setPlaybackRate(2)
        }}
      >
        Change playback!
      </button>
      <button
        className="px-2 py-1 bg-red-500 rounded"
        onClick={() => {
          resetPlaybackRate()
        }}
      >
        Reset playback!
      </button>
    </div>
  )
}

export default Homepage
