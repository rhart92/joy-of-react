/**
 * Example of cascading refs accross components all the way down the tree
 */
'use client'
import React from 'react'

import SquareSlider from './SquareSlider'

function App() {
  const sliderRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    // Log the value on mount
    console.log(sliderRef.current)
  }, [])

  return (
    <main>
      <SquareSlider ref={sliderRef} label="Intensity" min={0} max={10} />
    </main>
  )
}

export default App
