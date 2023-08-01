import { RefObject, useEffect, useRef, useState } from 'react'

// TIL: Design decision here was to expose the ref from inside our custom hook
// vs. having the ref passed in. It all comes down to mental models and who'd
// you expect to "own" the ref.
export function useIsOnScreen<T extends Element>(): [boolean, RefObject<T>] {
  const [isShown, setIsShown] = useState(false)
  const elementRef = useRef<T>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries
      setIsShown(entry.isIntersecting)
    })

    const elementRefCopy = elementRef.current
    if (elementRefCopy) {
      observer.observe(elementRefCopy)
    }

    return () => {
      if (elementRefCopy) {
        observer.disconnect()
      }
    }
  })

  // TIL: The reason we use arrays vs. objects when returning from Custom Hooks
  // is that it makes re-naming MUCH easier when using the hook.
  return [isShown, elementRef]
}
