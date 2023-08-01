'use client'
import React from 'react'

import { useId, useState } from 'react'

export default function BasicLogin() {
  return (
    <>
      <LoginForm />
      <div className="bg-violet-300 text-black p-4">
        <h2 className="text-2xl font-semibold mb-2">Some Website</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
      {/* We can run into issues with IDs if we use the same component multiple times on a page. */}
      <LoginForm />
    </>
  )
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
