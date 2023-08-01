'use client'
import React, { useEffect, useState } from 'react'
import styles from './style.module.css'
import useSWR from 'swr'

const endpoint = '/api/get-temperature'
/* const endpoint = '/api/get-temperature?simulatedError=true' */

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Wrapper() {
  return (
    <div className="flex absolute top-0 left-0 bottom-0 right-0 items-center justify-center bg-orange-200 text-black">
      {/* <Temperature /> */}
      <TemperatureNoSwr />
    </div>
  )
}

async function fetchJson(endpoint: string) {
  const response = await fetch(endpoint)
  const data = await response.json()
  if (!response.ok) {
    // TIL: SWR requires you to throw in order for it to count the request as an
    // error. Interesting that you can throw non-errors 🤔 But apparently it's
    // valid JS.
    throw data
  }

  return data
}

async function getTemperature() {
  return await fetchJson(endpoint)
}

type Success = {
  ok: true
  temperature: number
}

type Failure = {
  ok: false
  message: string
}

function TemperatureNoSwr() {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)
  const [data, setData] = useState<Success | Failure>()

  /**
    * If you try to use an `async` function in a `useEffect`, you'll get this
    * lint warning:

    Effect callbacks are synchronous to prevent race conditions. Put the async function inside:

    useEffect(() => {
      async function fetchData() {
        // You can await here
        const response = await MyAPI.getData(someId);
        // ...
      }
      fetchData();
  }, [someId]);

  * To solve, we can refactor as suggested.
  *
  * This is one of the many weird data fetching problems that a library like
  * SWR solves for us 🙌
  *
  * One of the reasons React doesn't allow this is that React expects us to
  * return a cleanup function from our effect, but if it's async then we'll
  * return a Promise<function> not a function. It gets worse though. Let's say
  * that we have a long running process in our `useEffect` and the component
  * unmounts while it's running. In that case, React wouldn't have the clean up
  * function yet since we were awaiting the result of the long running process
  * 😬. These types of situations are why the React team determined that effects
  * must be synchronous.
  */
  useEffect(() => {
    async function runEffect() {
      try {
        const data = await getTemperature()
        setData(data)
      } catch (e) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }
    setIsLoading(true)
    runEffect()
  }, [])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Somthing went wrong.</div>
  }

  console.log(data, error)

  return (
    <p className="text-center">
      Current temperature:
      {data && data.ok && (
        <span className="block text-9xl">{data.temperature}°C</span>
      )}
    </p>
  )
}

function Temperature() {
  // TIL: Custom hook from SWR library. Another great thing about custom hooks is
  // that we can import them from 3rd party libraries.
  // The first argument is the `key` for the call (guessing this is the cache
  // key) and then the second argument is the fetching function.
  // SWR stands for "Stale While Revalidate" which refers to an HTTP caching
  // strategy. SWR handles things like remaking the network request when the
  // user leaves the tab and returns to it 😮. Fancy. With SWR, we generally
  // prefer showing the stale data vs loading spinners.
  const { data, error, isLoading } = useSWR<Success, Failure>(
    endpoint,
    getTemperature
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Somthing went wrong.</div>
  }

  console.log(data, error)

  return (
    <p className="text-center">
      Current temperature:
      {data && <span className="block text-9xl">{data.temperature}°C</span>}
    </p>
  )
}
