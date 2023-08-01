'use client'
import React from 'react'
import { LinkButton } from './LinkButton'

export default function App() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <LinkButton
          onClick={() => {
            console.log('Exporting data...')
          }}
        >
          Export
        </LinkButton>
      </div>
      <div>
        <LinkButton href="/cards">Cards</LinkButton>
      </div>
      <div>
        <LinkButton href="/country-picker">Country Picker</LinkButton>
      </div>
    </div>
  )
}
