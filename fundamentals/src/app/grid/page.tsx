import _ from 'lodash'

/**
 * Flexbox + aspect-ratio makes this pretty cool to build since we can
 * dynamically re-size our boxes so they all fit on screen
 * https://makandracards.com/makandra/66994-css-flex-and-min-width
 */
export default function Scrabble() {
  return (
    <div className="p-4 box-border">
      <h2 className="font-bold text-2xl mb-4">Grid</h2>
      <Grid rows={9} columns={8} />
    </div>
  )
}

function Grid(props: { rows: number; columns: number }) {
  return (
    <div className="flex flex-col gap-4 max-w-lg">
      {_.range(props.rows).map((i) => (
        <Row key={i} columns={props.columns} />
      ))}
    </div>
  )
}

function Row(props: { columns: number }) {
  return (
    <div className="flex flex-1 gap-4 min-w-0">
      {_.range(props.columns).map((i) => (
        <Cell />
      ))}
    </div>
  )
}

function Cell() {
  return (
    <div className="flex-1 min-w-0 border border-white rounded-md aspect-square hover:bg-amber-200 transition-colors ease-in-out"></div>
  )
}
