/* ================================================================================

  Scroll to the bottom of the page and you'll see boxes.

================================================================================ */

'use client'
import { useIsOnScreen } from '@/hooks/useIsOnScreen'
import React from 'react'

// TODO: Checkout https://www.joshwcomeau.com/react/animated-sparkles-in-react/
// to learn more about these types of hooks.
export default function ToastGhost() {
  const [isYellowShown, yellowRef] = useIsOnScreen<HTMLDivElement>()
  const [isPurpleShown, purpleRef] = useIsOnScreen<HTMLDivElement>()

  return (
    <div className="flex flex-col gap-6 font-[monospace] pt-[2000px] pb-[2000px]">
      <div className="fixed top-0 left-0 right-0 bg-gray-100 text-black p-4 text-right">
        <div>Yellow box visible: {isYellowShown? 'Yes' : 'No'}</div>
        <div>Purple box visible: {isPurpleShown ? 'Yes' : 'No'}</div>
      </div>
      <div
        ref={yellowRef}
        className="flex flex-col gap-8 items-center justify-center"
      >
        <div className="h-48 w-48 bg-yellow-200"></div>
      </div>
      <div
        ref={purpleRef}
        className="flex flex-col gap-8 items-center justify-center"
      >
        <div className="h-48 w-48 bg-purple-300"></div>
      </div>
    </div>
  )
}
