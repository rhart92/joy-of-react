'use client'
import { useId, useState } from 'react'
import { Search, X } from 'react-feather'

// TODO: Learn how to animate react components on render. In order to get the
// animation to work, had to animate the width from 0 -> 250 rather than being
// able to conditionally render the input.
export default function SliderInput() {
  const [showSearch, setShowSearch] = useState(false)
  return (
    <div className="p-4 flex justify-end items-center">
      <SearchInput showSearch={showSearch} />
      <button
        className="p-4 rounded-full bg-green-500"
        onClick={() => setShowSearch((v) => !v)}
      >
        {showSearch ? <X /> : <Search />}
      </button>
    </div>
  )
}
function SearchInput(props: { showSearch: boolean }) {
  const { showSearch } = props
  // If we didn't want to worry about the performance impact of calling `useId`
  // when the search input isn't shown, we *can* move that logic to it's own
  // component like this and now it's only called when it's needed. 
  // TIL: Conditional hooks _can_ be a smell that you are doing too much in a
  // single component.
  const id = useId()
  return (
    <form>
      <label htmlFor={`${id}-search`}>
        {/* Do something visually hidden */}
      </label>
      <input
        type="text"
        id={`${id}-search`}
        className="mr-4 bg-transparent border-b-2 border-green-500"
        style={{
          width: showSearch ? 250 : 0,
          transition: 'width 200ms ease-in-out',
          opacity: showSearch ? '1' : '0',
        }}
      />
    </form>
  )
}
