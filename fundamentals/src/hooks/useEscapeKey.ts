import { useCallback } from 'react'
import { useKeydown } from './useKeydown'

// Custom hook to handle running a handler when the escape key is pressed.
// e.g. Closing a modal
export function useEscapeKey(handler: () => void) {
  const runOnEscape = useCallback(
    (e: KeyboardEvent): void => {
      if (e.code === 'Escape') {
        handler()
      }
    },
    [handler]
  )

  useKeydown(runOnEscape)
}
