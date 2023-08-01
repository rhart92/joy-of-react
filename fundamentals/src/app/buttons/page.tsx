'use client'
import React from 'react'
import Button from './button'

export default function App() {
  const ref = React.useRef<HTMLButtonElement>(null)

  const handleMouseEvent: React.MouseEventHandler = React.useCallback((e) => {
    console.log(`Event:`, e)
    console.log(`Captured ref:`, ref)
  }, [])

  const handleFocusEvent: React.FocusEventHandler = React.useCallback((e) => {
    console.log(`Event:`, e)
    console.log(`Captured ref:`, ref)
  }, [])

  // As an alternative, we could pass as delegated properties
  /* useEffect(() => { */
  /*   // TODO: How do I fix the sketchy types?? */
  /*   const buttonRef = ref && 'current' in ref ? ref?.current : undefined */
  /*   buttonRef?.addEventListener('mouseenter', handleMouseEvent) */
  /*   buttonRef?.addEventListener('focus', handleMouseEvent) */
  /**/
  /*   return () => { */
  /*     buttonRef?.removeEventListener('mouseenter', handleMouseEvent) */
  /*     buttonRef?.removeEventListener('focus', handleMouseEvent) */
  /*   } */
  /* }, [handleMouseEvent, ref]) */

  return (
    <div className="p-8">
      <Button
        ref={ref}
        onMouseEnter={handleMouseEvent}
        onFocus={handleFocusEvent}
      >
        <span>Hover or focus me!</span>
      </Button>
    </div>
  )
}
