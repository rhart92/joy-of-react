'use client'
import React, { useId } from 'react'

import { useState } from 'react'

export default function FunctionalLogin() {
  const [loggedIn, setLoggedIn] = useState(false)
  if (loggedIn) {
    return (
      <div>
        <span>You are logged in!</span>
        <button className="px-2 py-1 bg-green-500 rounded ml-4" onClick={() => setLoggedIn(false)}>Logout</button>
      </div>
    )
  }
  return <LoginForm onSubmit={() => setLoggedIn(true)} />
}

function LoginForm(props: { onSubmit?: () => void }) {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  // The reason we prefer `useId` vs. something like just setting this to
  // `crypto.randomUUID()` is that we need this ID to persist between re-renders
  // to maintain performance. Without it, we'd have to use something like
  // `useRef` or `useState`. `useId` also has the benefit of working well with
  // SSR so you get the same ID on the server + client.
  const id = useId()

  // Example: `:r0:`, `:r1:` which correspond to the number of instances of this component
  // console.log({ id })

  const usernameId = `${id}-username`
  const passwordId = `${id}-password`

  return (
    <form
      className="p-4"
      onSubmit={(e) => {
        e.preventDefault()
        props.onSubmit ? props.onSubmit() : alert('Logging in!')
      }}
    >
      <label htmlFor={usernameId}>Username: </label>
      <input
        className="px-4 py-2 rounded mr-4"
        type="text"
        id={usernameId}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <label htmlFor={passwordId}>Password: </label>
      <input
        className="px-4 py-2 rounded mr-4"
        type="password"
        id={passwordId}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="bg-green-500 rounded px-2 py-1">Submit</button>
    </form>
  )
}
