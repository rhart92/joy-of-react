'use client'
import React, { useState } from 'react'

// TIL: A “context” can be thought of as a channel, a radio frequency we can use to
// broadcast data down through the app.
//
// General flow:
// Create a new context with React.createContext.
//   1. Use the Provider component, from that context, to wrap around the
//   application.
//   2. Pass it a bundle of values that you need in other parts of the app.
//   3. Pluck the data you need from context, with the useContext hook.

// TIL: Context is most commonly used for global state. The term “global state”
// is used for state that is needed across many different parts of the
// application, like the color theme, or the currently-logged-in user. This is
// in contrast to local state, which is only used in a single place within the
// application.
//
// [Josh] Rule of thumb: If I find I keep having to pass a prop through a
// component which isn't using the prop, I should probably use context for it.
const FavoriteColorContext = React.createContext<{
  favoriteColor: string
  setFavoriteColor: ((color: string) => void) | undefined
}>({
  favoriteColor: 'blue',
  setFavoriteColor: undefined,
})

export default function App() {
  const [favoriteColor, setFavoriteColor] = useState('blue')

  // Wrap everything `App` would normally render inside
  // a Provider, and pass our `favoriteColor` state
  // variable as the value:
  //
  // When we render <FavoriteColorContext.Provider>, we start broadcasting a
  // value, making it available to any descendant component. In this case, we're
  // broadcasting the favoriteColor state variable.
  //
  // Remember, value can be any Javascript object, so if we want to include the
  // setter, just include it! In practice, we almost always pass an object as
  // the context value.
  const value = {
    favoriteColor,
    setFavoriteColor,
  }
  return (
    <FavoriteColorContext.Provider value={value}>
      <Home />
      <Home />
    </FavoriteColorContext.Provider>
  )
}

function Home() {
  // useContext is a hook designed to “plug in” to a particular context and pluck
  // out its current value
  // To extend the channel/frequency analogy, useContext is like a radio.
  const { favoriteColor, setFavoriteColor } =
    React.useContext(FavoriteColorContext)
  return (
    <div className="m-4">
      <h1>Home</h1>
      <p>
        Favorite Color:{' '}
        <span style={{ color: favoriteColor }}>{favoriteColor}</span>
      </p>
      <button
        onClick={() => {
          if (!setFavoriteColor) {
            return
          }
          if (favoriteColor === 'yellow') {
            setFavoriteColor('blue')
          } else {
            setFavoriteColor('yellow')
          }
        }}
      >
        Set Color
      </button>
    </div>
  )
}
