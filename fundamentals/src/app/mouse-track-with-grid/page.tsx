'use client'
import { Grid } from '@/components/grid'
import { useMousePosition } from '@/hooks/useMousePosition'
import _ from 'lodash'
import { parseInt } from 'lodash'
import React, { useId, useState } from 'react'

export default function App() {
  const position = useMousePosition()
  const [numberOfRows, setNumberOfRows] = useState(10)
  const [numberOfColumns, setNumberOfColumns] = useState(10)

  const rowId = useId()
  const columnId = useId()

  return (
    <div className="text-white p-16">
      {/* TODO: Figure out why these range sliders don't work 😢 */}
      <div className="flex justify-between">
        <div className="flex flex-col">
          <label htmlFor={`${rowId}-input`}>Rows</label>
          <input
            id={`${rowId}-input`}
            type="range"
            min={1}
            max={10}
            step={1}
            value={numberOfRows}
            onChange={(e) => {
              const parsed = parseInt(e.target.value, 10)
              setNumberOfRows(parsed)
            }}
          />
        </div>
        <span>
          {position && (
            <div>
              {position.x} / {position.y}
            </div>
          )}
        </span>
        <div className="flex flex-col">
          <label htmlFor={`${columnId}-input`}>Columns</label>
          <input
            id={`${columnId}-input`}
            type="range"
            min={5}
            max={25}
            step={1}
            value={numberOfColumns}
            onChange={(e) => {
              const parsed = parseInt(e.target.value, 10)
              setNumberOfColumns(parsed)
            }}
          />
        </div>
      </div>
      <Grid rows={numberOfRows} columns={numberOfColumns} />
    </div>
  )
}
