'use client'
import { useState } from 'react'
import { LoginForm } from '../basicLogin/page'

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
