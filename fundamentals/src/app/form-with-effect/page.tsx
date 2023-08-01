'use client'
import { useEffect, useState } from 'react'

export default function FormWithEffect() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')

  // Recommendation is to have as many `useEffect` calls as you need so they
  // each only deal with a single concern.
  useEffect(() => {
    console.log(`Email changed: ${email}`)
  }, [email])

  useEffect(() => {
    console.log(`Name changed: ${name}`)
  }, [name])

  return (
    <div>
      <form
        className="max-w-lg bg-white border border-fuchsia-500 border-dotted shadow-[0px_0px_0px_5px_white] mx-auto mt-16 rounded-sm text-black p-4 flex flex-col gap-y-4"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <div className="flex flex-col">
          <label htmlFor="name">Prefered Name</label>
          <input
            className="border border-gray-600 rounded px-2 py-1"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email Address</label>
          <input
            className="border border-gray-600 rounded px-2 py-1"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col grow">
            <label htmlFor="city">City</label>
            <input
              className="border border-gray-600 rounded px-2 py-1"
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="zipCode">Postal Code</label>
            <input
              className="border border-gray-600 rounded px-2 py-1"
              type="number"
              required={true}
              pattern="[a-zA-Z]{5}"
              title="5 digit zip code"
              id="zipCode"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
          </div>
        </div>
        <button className="px-8 py-4 rounded bg-blue-200 self-center">
          Sign up
        </button>
      </form>
    </div>
  )
}
