export async function delayMs(ms: number) {
  return new Promise((res) => {
    setTimeout(res, ms)
  })
}

export function normalize(args: {
  value: number
  currentMin: number
  currentMax: number
  newMin: number
  newMax: number
}) {
  const { value, currentMin, currentMax, newMin, newMax } = args

  if (value > currentMax || value < currentMin) {
    throw new Error('Value out of range.')
  }

  const valueAsPercent = value - currentMin / (currentMax - currentMin)

  return (newMax - newMin) * valueAsPercent + newMin
}

export function unreachable(value: never) {
  throw new Error(`Expected ${value} to never occur.`)
}
