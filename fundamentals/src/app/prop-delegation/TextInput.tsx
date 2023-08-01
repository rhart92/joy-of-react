import React, { InputHTMLAttributes, useId } from 'react'

export default function TextInput({
  id,
  label,
  ...delegated
}: {
  id?: string
  label: string
  /* TIL: How you type a destructured "rest" parameter */
  /* TODO: Maybe more options in https://www.totaltypescript.com/react-component-props-type-helper */
} & InputHTMLAttributes<HTMLInputElement>) {
  const generatedId = useId()
  const appliedId = id || generatedId

  // TODO: Ideally for properties we want to set like `className`, we'd merge the
  // property values with what's provided.
  return (
    <div className="flex flex-col">
      <label htmlFor={appliedId}>{label}</label>
      <input
        id={appliedId}
        type="text"
        className="px-4 py-2 rounded mb-4 text-black"
        {...delegated}
      />
    </div>
  )
}
