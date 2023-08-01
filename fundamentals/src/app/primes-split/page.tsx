// src/app/primes/page.tsx but split into multiple components
'use client'
import { useTime } from '@/hooks/useTime'
import React, { useMemo, useState } from 'react'

export default function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Clock />
      <Primes />
    </div>
  )
}

function Clock() {
  const time = useTime()
  return (
    <div className="absolute right-3 top-3">{time?.toLocaleTimeString()}</div>
  )
}

function Primes() {
  const [input, setInput] = useState('')
  const [selectedNumber, setSelectedNumber] = useState(0)

  // No more memoization because we aren't mixing our concerns with the clock
  // state 🙌
  // TIL: Always be thinking about whether it's better to memoize a whole
  // component vs. memoizing part of a component. If we neeedd to lift the `time`
  // up to App, then it updating would causes App to re-render which would cause
  // Primes to re-render. We _could_ go back to memoizing `allPrimes`, we could
  // just memoize the `Primes` component which also works. Remember pure
  // components aren't affected by state in parent components (e.g. components
  // wrapped in React.memo). They ONLY re-render when their state or props
  // change.
  //
  // TODO: Read more about this https://overreacted.io/before-you-memo/
  // and https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023#react-optimizing-compiler
  //  and https://www.youtube.com/watch?v=lGEMwh32soc
  const allPrimes: number[] = []
  console.log('Calculating primes...')

  for (let counter = 2; counter < selectedNumber; counter++) {
    if (isPrime(counter)) {
      allPrimes.push(counter)
    }
  }

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center justify-center"
      >
        <label htmlFor="input" className="mb-2">
          Number:{' '}
        </label>
        <input
          className="px-4 py-2 border border-white text-black mb-2"
          id="input"
          type="text"
          value={input}
          onChange={(e) => {
            const enteredValue = parseInt(e.target.value, 10)
            if (isNaN(enteredValue)) {
              setInput('')
              setSelectedNumber(0)
              return
            }
            setInput(e.target.value)
            setSelectedNumber(Math.min(enteredValue, 100_000))
          }}
        />
        <button className="bg-green-500 px-4 py-2 rounded">
          Check if prime!
        </button>
      </form>
      <div className="text-center mt-4">
        <p>
          There are {allPrimes.length} prime numbers between 1 and{' '}
          {selectedNumber}.
        </p>
        <p>{allPrimes.join(', ')}</p>
      </div>
    </>
  )
}

// Helper function that calculates whether a given
// number is prime or not.
// Reminder: A value is prime if it's only divisible by itself and 1.
function isPrime(n: number) {
  const max = Math.ceil(Math.sqrt(n))

  // Special case
  if (n === 2) {
    return true
  }

  for (let counter = 2; counter <= max; counter++) {
    if (n % counter === 0) {
      return false
    }
  }

  return true
}
