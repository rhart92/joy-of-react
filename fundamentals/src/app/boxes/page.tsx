'use client'
import React, { useEffect, useState } from 'react'

export default function Stuff() {
  const [name, setName] = useState('')
  const [boxWidth, setBoxWidth] = useState(1)

  // If we generate the `boxes` array like this, even memoizing the `Boxes`
  // component won't help because it's a new array on each render which React
  // will take as the props changed (even though it's the same content, just not
  // the same array). So to resolve, we need to have React persist the array
  // across re-renders and `useMemo` can help us!
  // Now React will ONLY re-build the array when `boxWidth` changes.
  // This is a slightly different use-case for `useMemo`. We aren't trying to
  // save an expensive calculation, we are trying to preserve the reference to
  // our array across renders.
  const boxes = React.useMemo(() => {
    return [
      {
        id: crypto.randomUUID(),
        flex: boxWidth,
        backgroundClass: 'bg-yellow-500',
      },
      { id: crypto.randomUUID(), flex: 3, backgroundClass: 'bg-red-500' },
      { id: crypto.randomUUID(), flex: 1, backgroundClass: 'bg-blue-500' },
    ]
  }, [boxWidth])

  return (
    <div>
      <PureBoxes boxes={boxes} />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col items-center justify-center"
      >
        <label htmlFor="input" className="mb-2">
          Name:{' '}
        </label>
        <input
          className="px-4 py-2 border border-white text-black mb-2"
          id="input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="range"
          max={10}
          min={1}
          step={0.01}
          value={boxWidth}
          onChange={(e) => setBoxWidth(parseInt(e.target.value))}
        />
      </form>
    </div>
  )
}
function Boxes(props: {
  boxes: { id: string; flex: number; backgroundClass: string }[]
}) {
  const { boxes } = props
  return (
    <div className="flex gap-16">
      {boxes.map((box) => {
        const style = { flex: `${box.flex} 1 0%` }
        return (
          <div
            key={box.id}
            className={`block ${box.backgroundClass} h-48`}
            style={style}
          ></div>
        )
      })}
    </div>
  )
}

const PureBoxes = React.memo(Boxes)
