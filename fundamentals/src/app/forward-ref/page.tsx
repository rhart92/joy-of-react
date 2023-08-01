'use client'
import React, { ForwardedRef, useEffect } from 'react'
import { Search } from 'react-feather'

export default function App() {
  const ref = React.useRef<HTMLInputElement>(null)
  const otherRef = React.useRef<HTMLInputElement>(null)

  useEffect(() => {
    otherRef.current?.focus()
    console.log(otherRef.current)
  }, [])

  // Trying to assign a ref to a functional component will lead to:
  //
  // Warning: Function components cannot be given refs. Attempts
  // to access this ref will fail. Did you mean to use React.forwardRef()?
  //
  // So we need to find another way to provide refs to inner elements on a
  // Component so we can focus the "super-charged" input.
  //
  // `ref` is a reserved keyword in React similar to `key` and it doesn't get
  // passed in props as you'd expect. We can see this, by logging the
  // `SearchInput`.
  //
  // One way to fix this is to just re-name the prop 😓 This _does_ work but
  // there is a better way. So the problem isn't with passing refs as props,
  // it's just with using the keyword `ref`.
  //
  // The react team has resolved this but we have to do some work on the
  // "producer" side (e.g. in our `SearchInput` component).
  const input = <SearchInput forwardRef={ref} key={'abc'} />
  /* const input = <SearchInput ref={ref} key={'abc'} /> */
  console.log(input)
  // {
  //    key: "abc",
  //    props: {},
  //    ref: { current: null },
  // }
  //
  // Notice that there are no props, and we have a ref property. That's because
  // `ref` is being automatically extracted by React.
  return (
    <div className="p-8 flex flex-col gap-8">
      {input}
      <SearchInputWithForwardedRef ref={otherRef} />
    </div>
  )
}

function SearchInput(
  props: {
    forwardRef: React.RefObject<HTMLInputElement>
  } & React.InputHTMLAttributes<HTMLInputElement>
) {
  const { forwardRef: ref, ...rest } = props
  return (
    <div className="text-black flex justify-center items-center">
      <Search color="white" className="mr-2" />
      <input className="px-4 py-2 rounded" type="text" ref={ref} {...rest} />
    </div>
  )
}

function SearchInputWithRef(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <div className="text-black flex justify-center items-center">
      <Search color="white" className="mr-2" />
      <input className="px-4 py-2 rounded" type="text" ref={ref} {...props} />
    </div>
  )
}

// React provides us with the React.forwardRef higher order component /
// function which will pluck out the `ref` prop and pass it as a second argument
// to the component that is provided as an argument. Then the component can use
// the `ref` inside as expected but now we don't need to worry about
// inconsistent naming of the forwardRef prop (which isn't really a prop).
//
// Why isn't this the default behavior?? It's mostly a historical reason because
// with Class components you actually could capture references to the component
// instances, but this isn't the case with functional components so it would be
// a big breaking change.
// TODO: Try this and see what you get.
//
// If you want to forward the ref and memoize the component, you can just use
// both as shown below. Again these are higher order components that accept a
// component as input and return a new component.
const SearchInputWithForwardedRef = React.memo(
  React.forwardRef(SearchInputWithRef)
)
