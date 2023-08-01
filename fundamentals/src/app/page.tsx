'use client'
import React, { useState } from 'react'

export default function Home() {
  const numbers = [1, 2, 3].map((n) => <li key={'hello'}>{n}</li>)
  return (
    <form className="m-4">
      <label htmlFor="search-input" className="pr-4">
        Search:
      </label>
      <input id="search-input" type="text" className="p-2 rounded-l-sm" />
      <button className="rounded-r-sm bg-orange-400 p-2">Submit</button>
    </form>
  )
}
