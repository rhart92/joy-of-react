'use client'

// TODO: Look at https://tinkersynth.com/ for inspiration on generative art.
import _ from 'lodash'
import React from 'react'

import { useState } from 'react'
// TODO: Build something like https://www.joshwcomeau.com/gradient-generator/
// TODO: Skim through https://daveceddia.com/javascript-references/

type Shape = 'polygon' | 'circle'

export default function App() {
  const [lineCount, setLineCount] = useState(5)
  const [theme, setTheme] = useState<keyof typeof COLORS_BY_THEME>(() => {
    return Object.keys(COLORS_BY_THEME)[0]
  })
  const [shape, setShape] = useState<Shape>('circle')

  return (
    <div className="flex flex-col bg-blue-200 p-4 text-black max-w-xl mx-auto mt-4 rounded">
      <div className="bg-gray-800 min-w-full h-64 rounded mb-4">
        <svg fill="none" viewBox="0 0 400 200" width="100%" height="100%">
          {_.range(lineCount).map((i) => {
            const { lineColors } = COLORS_BY_THEME[theme]
            // Sliding window selector
            const color = lineColors[i % lineColors.length]
            return shape === 'circle' ? (
              <Circle
                key={i}
                cx={200}
                cy={100}
                radius={8 * i + 5}
                stroke={color}
              />
            ) : (
              <Polygon key={i} color={color} index={i} />
            )
          })}
        </svg>
      </div>
      <form>
        <fieldset className="flex flex-col border-2 border-black px-4 py-2">
          <legend className="px-2">Controls</legend>
          <label htmlFor="range">Number of lines: </label>
          <input
            type="range"
            id="range"
            min={1}
            max={30}
            value={lineCount}
            onChange={(e) => setLineCount(parseInt(e.target.value))}
          />
          <div className="flex gap-8 justify-center min-w-full">
            <div className="flex flex-col flex-1">
              <label>Color Theme:</label>
              <select onChange={(e) => setTheme(e.target.value)}>
                {Object.entries(COLORS_BY_THEME).map(([name, definition]) => {
                  return (
                    <option key={name} value={name}>
                      {definition.name}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="flex flex-col flex-1">
              <legend>Shape:</legend>
              <div className="flex">
                <div className="flex gap-2 mr-2">
                  <label htmlFor="circle">Circle</label>
                  <input type="radio" value="circle" id="circle" name="shape" />
                </div>
                <div className="flex">
                  <label htmlFor="polygon">Polygon</label>
                  <input
                    type="radio"
                    value="polygon"
                    checked={shape === 'polygon'}
                    onChange={() => setShape('polygon')}
                    id="polygon"
                    name="shape"
                  />
                </div>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  )
}

const normalize = (
  number: number,
  currentScaleMin: number,
  currentScaleMax: number,
  newScaleMin = 0,
  newScaleMax = 1
) => {
  // First, normalize the value between 0 and 1.
  const standardNormalization =
    (number - currentScaleMin) / (currentScaleMax - currentScaleMin)

  // Next, transpose that value to our desired scale.
  return (newScaleMax - newScaleMin) * standardNormalization + newScaleMin
}

// TODO: Learn math for generting these points of the polygon
const convertPolarToCartesian = ([angle, radius]: [number, number]) => {
  const x = radius * Math.cos(angle)
  const y = radius * Math.sin(angle)

  return [x, y]
}

function Polygon(props: { color: string; index: number }) {
  const { color, index } = props
  const pointDistance = index * 9 + 5
  const numOfPoints = 5
  const angles = _.range(numOfPoints).map((index) =>
    normalize(index, 0, numOfPoints, 0, Math.PI * 2)
  )

  const points = angles
    .map((angle) => {
      const twistyAngle = angle + index * -0.15
      const [x, y] = convertPolarToCartesian([twistyAngle, pointDistance])

      return [x + 200, y + 100]
    })
    .join(' ')

  return <polygon points={points} stroke={color} />
}

function Circle(props: {
  cx: number
  cy: number
  radius: number
  stroke: string
}) {
  const { cx, cy, radius, stroke } = props
  return <circle cx={cx} cy={cy} r={radius} stroke={stroke} strokeWidth={2} />
}

const COLORS_BY_THEME: Record<
  string,
  { name: string; background: string; lineColors: string[] }
> = {
  basic: {
    name: 'Basic',
    background: 'hsl(212deg, 12%, 15%)',
    lineColors: ['#FE253F', '#25D7FE', '#FEF625'],
  },
  monochrome: {
    name: 'Monochrome',
    background: 'black',
    lineColors: [
      'hsl(0deg 0% 100% / 0.2)',
      'hsl(0deg 0% 100% / 0.4)',
      'hsl(0deg 0% 100% / 0.6)',
      'hsl(0deg 0% 100% / 0.8)',
      'hsl(0deg 0% 100% / 0.9)',
      'hsl(0deg 0% 100% / 0.8)',
      'hsl(0deg 0% 100% / 0.6)',
      'hsl(0deg 0% 100% / 0.4)',
    ],
  },
  // cSpell:disable-next-line
  'froot-loops': {
    name: 'Fruit Loops 🍉',
    background: '#333',
    lineColors: [
      '#AF8ED5',
      '#89D894',
      '#FCC38D',
      '#EB6F75',
      '#96DDF8',
      '#FCDF47',
    ],
  },
  spooky: {
    name: 'Spooky 👻',
    background: '#000',
    lineColors: ['#FFF', '#FFA41C', '#333', '#FFF50F'],
  },
}
