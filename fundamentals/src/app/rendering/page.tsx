/**
 * **Fundamental truth** (apparently): Every re-render in React starts with a state
 * change. It's the only "trigger" in React for a component to re-render.
 *
 * But what about props??
 *
 * When a components re-render, they also re-render all of their
 * descendants.
 */
'use client'
import React from 'react'

/**
 * In React, every state variables is attached to one and only one component
 * instance. In this Component tree, we have one piece of state `count` which is
 * associated with the `Counter` component. Whenever `count` changes, `Counter`
 * will re-render (not necessarily re-paint but re-render 🤔). Since
 * `BigCountNumber` is a descendant, it will be re-rendered too.
 *
 * TODO: Build the re-render flashing app shown at https://courses.joshwcomeau.com/joy-of-react/03-hooks/08.01-why-react-renders
 * It's interesting.
 *
 * ---------------------------------------------------------------------------
 *
 * Remember: React's “main job” is to keep the application UI in sync with the
 * React state. The point of a re-render is to figure out what needs to change.
 *
 * When the user clicks the button in `Counter`, React needs to figure out what
 * the new "picture" of the DOM we want. It does this by re-running the code in
 * `Counter` and `BigCountNumber` because it's a child of `Counter`. This
 * picture tell us "what the UI _should_ look like based on the current state of
 * the application".
 *
 * React then plays "find the difference" game to figure out what changed
 * betwen the snapshots (i.e pictures). In our case it notices that the text
 * node in the paragraph changed from 0 -> 1 and so it edits the text node in
 * the DOM. Now react waits for the next state change. This is the "React Core
 * Loop".
 *
 * The point of a re-render is to figure out how a state change should affect
 * the user interface. And so we need to re-render all potentially-affected
 * components, to get an accurate snapshot.
 */
export default function App() {
  console.log('App Re-rendering')
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Counter />
      <footer className="mt-4">
        <p>Copyright 2022 Big Count Inc.</p>
      </footer>
    </div>
  )
}

/**
 * Even though `Decoration` doesn't have any props that change or really has
 * anyway that it _could_ change, it's STILL re-rendered when the `count` state
 * changes.
 *
 * The tldr; is that it's hard for React to know for certain whether
 * `Decoration` depends on count directly or indirectly.
 *
 * In an ideal world, React components would always be “pure”. A pure component
 * is one that always produces the same UI when given the same props. Even just
 * using something like `Date.now()` will make your component impure. Refs are
 * another sneaky version of this problems since refs can't be checked if they
 * changed by object reference since they are mutated. So... React airs on the
 * side of caution and sacrafices performance.
 *
 * React's #1 goal is to make sure that the UI that the user sees is kept “in
 * sync” with the application state. And so, React will err on the side of too
 * many renders. It doesn't want to risk showing the user a stale UI.
 */
function Counter() {
  const [count, setCount] = React.useState(0)
  console.log('Counter Re-rendering')

  return (
    <main className="flex flex-col justify-center items-center">
      {/* <BigCountNumber count={count} /> */}
      <PureBigCountNumber count={count} />
      <button
        className="px-4 py-2 border border-gray-200 mt-4"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 border border-gray-200 mt-4"
        onClick={() => setCount(count - 1)}
      >
        Decrement
      </button>
      {/* <Decoration /> */}
      <PureDecoration />
    </main>
  )
}

function BigCountNumber(props: { count: number }) {
  const { count } = props
  console.log('BigCountNumber Re-rendering')
  return (
    <p>
      <span className="block">Count:</span>
      <span className="block text-6xl">{count}</span>
    </p>
  )
}

/**
 * Even though we wrap `BigCountNumber` in a React.memo, it'll still re-render
 * if it's props change.
 */
const PureBigCountNumber = React.memo(BigCountNumber)

/**
 * To let React know that this is a pure component and to ONLY re-render it
 * when it's props or state change, we can wrap it in `React.memo()`.
 */
function Decoration() {
  console.log('Decoration Re-rendering')
  return <div className="text-9xl absolute right-0 top-0">⛵️</div>
}

// Now we can pass THIS memoized component to `Counter` and it won't be
// re-rendered when `count` changes.
// Now `PureDecoration` can selectively ignore re-renders that don't affect it
//
// The idea is that React will remember the previous snapshot. If none of the
// props have changed, React will re-use that stale snapshot rather than going
// through the trouble of generating a brand new one.
const PureDecoration = React.memo(Decoration)
