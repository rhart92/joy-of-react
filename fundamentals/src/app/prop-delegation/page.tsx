'use client'
import React, { useState } from 'react'
import TextInput from './TextInput'
import SliderInput from './Slider'

export default function App() {
  const [volume, setVolume] = useState(10)
  return (
    <div className="p-24">
      <TextInput label={'Name:'} style={{ color: 'blue' }} />
      <TextInput label={'Email:'} />
      <SliderInput
        label={`🔉 Volume (${volume})`}
        min={10}
        max={100}
        step={10}
        value={volume}
        onChange={(e) => setVolume(parseInt(e.target.value))}
      />
    </div>
  )
}
