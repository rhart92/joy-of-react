import React from 'react'

/**
  TIL: To review, we have several options when it comes to conflicting attributes.

  1. If we want to allow the consumer to overwrite a particular hardcoded
  attribute, we can place the {...delegated} syntax afterwards.

  2. If we want to prioritize the hardcoded attribute, however, the {...delegated}
  syntax should come first.

  3. If we want to merge both values, we'll need to manage it ourselves, without
  using {...delegated} and it's usually best practice to specifically destructure
  the prop out.
*/

export default function App() {
  return (
    <div className="absolute left-0 right-0 top-0 bottom-0 bg-white">
      {/* Here unlike with the checkbox, we'll happily allow users to overwrite the defaults */}
      {/* setup in the SadArrowIcon component. So it depends. */}
      {/* Rather, it's a choice we can use as a tool, to decide how much */}
      {/* power/flexibility I want to grant to the developers consuming this */}
      {/* component. */}
      <SadArrowIcon size={50} strokeWidth={3} strokeLinecap="square" />
    </div>
  )
}

function SadArrowIcon({
  size,
  ...delegated
}: { size: number } & React.SVGProps<SVGPathElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
    >
      <path
        d="M 20 0 L 24 12 L 0 12 L 24 12 L 20 24"
        stroke="black"
        strokeLinecap="round"
        {...delegated}
      />
    </svg>
  )
}
