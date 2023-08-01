'use client'
import React from 'react'

import { useState } from 'react'
import { COUNTRIES } from './country-data'

export default function CountrySelect() {
  const [countryCode, setCountryCode] = useState('')

  return (
    <>
      <form
        className="flex flex-col items-center bg-slate-200 p-8 text-black"
        onSubmit={(e) => {
          e.preventDefault()
          alert(`You selected: ${COUNTRIES[countryCode]}`)
        }}
      >
        <fieldset className="border border-black min-w-full px-4 py-2 mb-8">
          <legend className="ml-4 px-2">Select Country:</legend>
          <label htmlFor="country">Country: </label>
          <select
            name="country"
            id="country"
            required={true}
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
          >
            <option value="">&mdash; Select Country &mdash;</option>
            <optgroup label="Countries">
              {Object.entries(COUNTRIES).map(([code, name]) => {
                return (
                  <option key={code} value={code}>
                    {name}
                  </option>
                )
              })}
            </optgroup>
          </select>
        </fieldset>
        <span className="p-4 bg-amber-100 mb-4 min-w-full">Selected Country: {COUNTRIES[countryCode]}</span>
        <button className="px-4 py-2 bg-green-500 rounded">Submit</button>
      </form>
    </>
  )
}
