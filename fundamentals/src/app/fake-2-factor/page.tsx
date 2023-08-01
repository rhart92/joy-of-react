'use client'
import { useState } from 'react'

const CORRECT_CODE = '123456'

export default function TwoFactor() {
  const [code, setCode] = useState('')

  return (
    <div className="bg-fuchsia-200 p-16 text-black">
      <form onSubmit={(e) => {
        e.preventDefault()
        const valid = code === CORRECT_CODE
        if (valid) {
          alert("Valid code.")
        } else {
          alert("Please try again.")
        }
      }}>
        <label className="block" htmlFor="code">
          Enter authorization code:{' '}
        </label>
        <input
          className="px-4 py-2 rounded-l-lg"
          id="code"
          name="code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button className="px-4 py-2 bg-green-500 rounded-r-lg">Validate</button>
      </form>
    </div>
  )
}
