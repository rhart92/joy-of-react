import _ from 'lodash'
import React from 'react'

function PureGrid(props: { rows: number; columns: number }) {
  const { rows, columns } = props

  console.log('Rendering grid...')
  return (
    <div className="flex flex-col gap-2">
      {_.range(rows).map((rowIndex) => {
        return (
          <div key={rowIndex} className="flex gap-2">
            {_.range(columns).map((columnIndex) => (
              <div
                key={rowIndex + ' ' + columnIndex}
                className="aspect-square flex-1 border border-white"
              ></div>
            ))}
          </div>
        )
      })}
    </div>
  )
}

// TIL: It can make sense to memoize your components before exporting so
// whenever it' used, it's already memoized!
export const Grid = React.memo(PureGrid)
