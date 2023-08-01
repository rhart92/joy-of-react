"use client"
import React from "react"

export default function CustomButton() {
  const continueButton = <Button color="green">Continue</Button>
  const cancelButton = <Button color="red">Cancel</Button>
  const otherButton = <Button color="teal">Other</Button>

  return (
    <div className="m-4">
      {cancelButton}
      <span className="mr-4"></span>
      {continueButton}
      <span className="mr-4"></span>
      {otherButton}
    </div>
  )
}

/* function Greeting(props: { name?: string }) { */
/* We can have default values for props as well */
function Button({ children, color }: { color: string; children: any }) {
  let classes = ""
  if (color === "green") {
    // Can't construct class names dynamically since Tailwind searches through
    // code to find which class names are required in the bundle.
    classes = `border-green-500 text-green-500`
  } else if (color === "red") {
    classes = `border-red-500 text-red-500`
  } else if (color === "teal") {
    classes = `border-teal-500 text-teal-500`
  }
  return (
    <button className={`px-4 py-2 rounded-lg border border-2 ${classes}`}>
      {children}
    </button>
  )
}
