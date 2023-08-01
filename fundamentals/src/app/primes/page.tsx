'use client'
import { useTime } from '@/hooks/useTime'
import React, { useMemo, useState } from 'react'

export default function Primes() {
  const [input, setInput] = useState('')
  const [selectedNumber, setSelectedNumber] = useState(0)
  // If we add the `useTime` hook, this component with re-render every second
  // which wll cause our expensive prime calculations to re-run as well 😬 To
  // avoid this we can use the `useMemo` hook which will memoize the results of
  // the computation and only run when the dependencies change 🥳
  const time = useTime()

  // We calculate all of the prime numbers between 0 and the
  // user's chosen number, `selectedNum`:
  // const allPrimes = []
  // console.log("Calculating primes...")
  // This code can require a significant amount of compute time depending on how
  // large the input is 😬
  /* for (let counter = 2; counter < selectedNumber; counter++) { */
  /*   if (isPrime(counter)) { */
  /*     allPrimes.push(counter) */
  /*   } */
  /* } */

  // By wrapping our expensive logic in a `useMemo`, it will ONLY re-run when
  // selectedNumber changes, otherwise it will use the cached value and skip the
  // calculation entirely.
  // The two memoization hooks in react are similar, but serve different
  // purposes:
  // ** React.memo memoizes the result of rendering a component, only re-running
  // when the props change.
  // ** React.useMemo memoizes the result of a computation, only re-running when
  // the dependencies change.
  const allPrimes = useMemo(() => {
    const results: number[] = []
    console.log('Calculating primes...')

    for (let counter = 2; counter < selectedNumber; counter++) {
      if (isPrime(counter)) {
        results.push(counter)
      }
    }
    return results
  }, [selectedNumber])

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="absolute right-3 top-3">{time?.toLocaleTimeString()}</div>
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
    </div>
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
