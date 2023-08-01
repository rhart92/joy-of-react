import { useEffect } from 'react'

// Custom hook to handle running a handler when any key is pressed.
export function useKeydown(handler: (e: KeyboardEvent) => void) {
  useEffect(() => {
    window.addEventListener('keydown', handler)

    return () => {
      window.removeEventListener('keydown', handler)
    }
  }, [handler])
}
