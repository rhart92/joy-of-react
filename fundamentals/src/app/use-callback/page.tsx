'use client'
import { Button } from '@/components/button'
import React, { useCallback, useMemo, useState } from 'react'

export default function LearnUseCallback() {
  const [count, setCount] = useState(1)
  function handleClick() {
    setCount(count + 1)
  }

  // Note: We could have solved this using `useMemo` and just return a memoized
  // function as shown below but React provides a specialized hook called
  // `useCallback` to handle memozing functions 🥳
  /* const handleMegaClick = useMemo(() => { */
  /*   return () => setCount((count) => count + 1000) */
  /* }, []) */

  // Now we have a memoized version of our megaClick that will be threaded
  // through renders of the `LearnUseCallback` component.
  const handleMegaClick = useCallback(() => {
    // In order to keep Mega button pure, we need to use the callback version.
    setCount((count) => count + 1000)
  }, [])
  const megaButtonLog = useCallback(
    () => console.log('Mega button re-rendering...'),
    []
  )
  // Similarly, since children are generated on each call of `render` we need to
  // memoize these too 😓
  const megaContent = useMemo(() => <span>Mega!</span>, [])

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p>Count: {count}</p>
      <div>
        <Button variant="plain" onClick={handleClick}>
          <span>Click Me</span>
        </Button>
      </div>
      <div>
        <PureButton
          variant="mega"
          onClick={handleMegaClick}
          logOnRender={megaButtonLog}
        >
          {megaContent}
        </PureButton>
      </div>
    </div>
  )
}

const PureButton = React.memo(Button)
