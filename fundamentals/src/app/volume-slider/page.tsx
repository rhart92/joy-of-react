'use client'
import React, { useState } from 'react'

import SliderClass from './Slider_classname'
import SliderProps from './Slider_props'
import styles from './VolumeSlider.module.css'

export default function App() {
  const [volume, setVolume] = useState(10)

  return (
    <div>
      <VolumeSlider volume={volume} setVolume={setVolume} />
    </div>
  )
}

// TIL: Trade-offs:
//
// Props:
// --------------------------------------------------------------------------
//
// When building low-level components, we are probably implementing according to
// a design system which specifies which changes are allowed, and which changes
// are not allowed. The components we implement should only allow the
// customizations specified in the design system.
//
// In other words, we want to make sure that developers “color within the lines”.
//
//
// Classname:
// --------------------------------------------------------------------------
//
// In the real world, the "specific props" approach tends to become completely
// unwieldy.
//
// In our example above, we added 3 props, but this is only the tip of the
// iceberg. For example, what if we want to allow the consumer to specify a
// hover color? Or, what if we want to customize the handle size, but only for a
// specific media query?
//
// CSS is a huge, sprawling language. We could wind up with 50+ props, which
// would be a nightmare to maintain, and no fun at all to consume. Each new prop
// is another Jenga™ brick being added to the top of the tower.
//
// Also, designers have a knack for creating exceptions and one-offs.
//
// Soon you'll end up with:
//
//   /* HACK: Apply rotation to Slider component */
//   .some-wrapper form input[type="range"] {
//     margin: 50px !important;
//     transform: rotate(90deg) !important;
//   }
//
// in some CSS file.
//
// It's just not realistic to come up with a handful of style-related props that
// will work for every possible use case. The real world is too messy for
// that.
//
// Josh's recommendation:
//
// The real world really is too messy, and CSS really is too big and sprawling.
// So I like to add a className prop.
//
// What about consistency? Personally, I think polish and UX is more important
// than consistency. I don't want a worse user experience because we got boxed
// in by the design system!

function VolumeSlider({
  volume,
  setVolume,
}: {
  volume: number
  setVolume: (volume: number) => void
}) {
  return (
    <>
      {/* A bit less easy but more customizable since we don't need to specify what can */}
      {/* be overridden, they can just write the CSS class and everything just works. */}
      {/* The BIG con here is that someone needs to be MUCH more familiar with the */}
      {/* implementation details of SliderClass vs. SliderProps */}
      {/* This 👇 is more powerful for the user... but requires more familiarity. */}
      <SliderClass
        label="Volume"
        min={0}
        max={100}
        value={volume}
        className={styles.volumeSlider}
        onChange={(event) => {
          setVolume(parseInt(event.target.value, 10))
        }}
      />
      {/* Nice and easy to configure since it has specific properties defined for each */}
      <SliderProps
        label="Volume"
        min={0}
        max={100}
        value={volume}
        handleSize={24}
        handleColor="blue"
        handleActiveColor="red"
        onChange={(event) => {
          setVolume(parseInt(event.target.value, 10))
        }}
      />
    </>
  )
}
