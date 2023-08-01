'use client'
import React from 'react'

import Toggle from './Toggle'
import { useToggle } from '@/hooks/useToggle'
// Kinda sketchy to re-use styles like this 😬 He has them in globals so it's
// less sketchy.
import styles from './toggle.module.css'

function App() {
  const [enableWifi, toggleEnableWifi] = useToggle(true)
  const [lowPowerMode, toggleLowPowerMode] = useToggle(false)

  return (
    <main className="position absolute left-0 bottom-0 right-0 top-0 bg-white text-black">
      <Toggle
        label="Enable Wi-Fi"
        checked={enableWifi}
        onClick={toggleEnableWifi}
      />
      <Toggle
        className={styles['green-toggle']}
        data-label={'low-power'}
        label="Low Power Mode"
        checked={lowPowerMode}
        onClick={toggleLowPowerMode}
      />
    </main>
  )
}

export default App
