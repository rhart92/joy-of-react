import { useEffect, useState } from 'react'

// TODO: Checkout https://github.com/react-hookz/web for more hooks
// TODO: Josh also created https://www.joshwcomeau.com/react/boop/. Rebuild it!
// TODO: Blog post on boop -- https://www.joshwcomeau.com/react/boop/
export function useTime() {
  // Since Next.js does some initial hydration on the server, we need the initial
  // renders to match to avoid errors. This pushes the state setting to the
  // effect so it only runs on the client.
  const [time, setTime] = useState<Date | undefined>(undefined)

  useEffect(() => {
    const handle = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(handle)
    }
  }, [])

  return time
}
