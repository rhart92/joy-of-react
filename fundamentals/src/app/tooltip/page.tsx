'use client'
import React from 'react'
import Asterisk from './Asterisk'
import * as Tooltip from '@radix-ui/react-tooltip'

function App() {
  return (
    <Tooltip.Provider>
      <p>
        This paragraph has some additional context
        <Asterisk delay={200}>I’m the additional context!</Asterisk> held in an
        asterisk <Asterisk delay={1000}>I’m the additional context!</Asterisk>     </p>
    </Tooltip.Provider>
  )
}

export default App
