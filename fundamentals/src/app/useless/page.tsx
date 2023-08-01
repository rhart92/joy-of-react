'use client'
import React, { useEffect, useState } from 'react'

export default function ClockContainer() {
  const [checked, setChecked] = useState(true)

  useEffect(() => {
    // TIL: Interesting here that we are saying not only do we have a dependency
    // on `checked` but also only if the value is false. 🤔
    if (checked) {
      return
    }
    const handle = setTimeout(() => {
      console.log('flip')
      setChecked(e => !e)
    }, 500)

    return () => {
      clearTimeout(handle)
    }
  }, [checked])

  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 bg-pink-200 text-black flex flex-col items-center justify-center">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
        className='scale-[8]'
          type="checkbox"
          value="checked"
          checked={checked}
          onChange={() => setChecked((c) => !c)}
        />
      </form>
    </div>
  )
}
