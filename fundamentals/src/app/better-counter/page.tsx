'use client'
import React, { useState } from 'react'
import {
  Camera,
  ChevronDown,
  ChevronsDown,
  ChevronsUp,
  ChevronUp,
  Hash,
  RotateCcw,
} from 'react-feather'

export default function BetterCounter() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="p-4 bg-violet-300 flex justify-center">
      <div className="rounded-xl bg-white text-black p-4 flex flex-col items-center drop-shadow-lg">
        <span className="text-gray-800 text-xs">Current Value:</span>
        <span className="text-7xl text-indigo-700 font-semibold mb-8">{count}</span>
        <div className="flex gap-4">
          <Button onClick={() => setCount(count => count + 1)}>
            <ChevronUp />
          </Button>
          <Button onClick={() => setCount(count => count + 10)}>
            <ChevronsUp />
          </Button>
          <Button onClick={() => setCount(0)}>
            <RotateCcw />
          </Button>
          <Button onClick={() => setCount(Math.floor(Math.random() * 100))}>
            <Hash />
          </Button>
          <Button onClick={() => setCount(count => count - 10)}>
            <ChevronsDown />
          </Button>
          <Button onClick={() => setCount(count => count - 1)}>
            <ChevronDown />
          </Button>
        </div>
      </div>
    </div>
  )
}

function Button(props: { onClick: () => void, children: React.JSX.Element }) {
  return <button className="bg-gray-100 p-2 border border-black rounded" onClick={props.onClick}>{props.children}</button>
}
