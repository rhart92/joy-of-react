import { useCallback, useState } from 'react'

export function useToggle(
  initialValue: boolean | (() => boolean)
): [boolean, () => void] {
  const [isOn, setIsOn] = useState(initialValue)

  // Since our hook is returning a function, we should memoize it to avoid
  // callers having to worry about it. Otherwise any components that the toggle
  // function is passed to will re-render whenever this hook is re-run (so every
  // render of the component which used this hook 😢)
  // TIL: Whenever creating functions in re-usable hooks, it's almost always a
  // good idea to memoize them because you never know where the hook will be
  // used. It could be used by a component very high up in the React tree which
  // might cause 10s or 100s of descendant components to re-render
  // unnecessarily.
  const toggle = useCallback(function toggle() {
    // TIL: When writing custom hooks, you probably want to use the callback
    // version of the setter just in case your hook is used in an effect where
    // the state could be stale.
    setIsOn((isOn) => !isOn)
  }, [])

  return [isOn, toggle]
}
