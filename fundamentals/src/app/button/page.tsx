"use client"
import React from "react"

export default function ButtonContainer() {
  const button = <Button>Hello, world!</Button>
  console.log(button)
  //{
  //  type: f Button,
  //  props: {
  //    // React will nicely put anything between the tags on `children` prop
  //    children: "Hello, world!"
  //  }
  //}
  return <div className="m-4">{button}</div>
}

/* function Greeting(props: { name?: string }) { */
/* We can have default values for props as well */
function Button({ children }: { children: any }) {
  return (
    <button className="text-blue-200 bg-gray-800 px-4 py-2 rounded-lg">
      {children}
    </button>
  )
}
