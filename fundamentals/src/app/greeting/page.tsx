"use client"
import React from "react"

export default function GreetingContainer() {
  // We pass `createElement` the function itself along with the props.
  const element = React.createElement(Greeting, { name: "Bob" })
  /* console.log(element) */
  /* { */
  /*   $$typeof: Symbol(react.element) */
  /*   key: null */
  /*   props: {name: 'Bob'} */
  /*   ref: null */
  /*   // Type for custom components is a function */
  /*   type: ƒ Greeting(props) */
  /* } */
  /* Then react will call the function providing the props as the argument */
  console.log(element)
  return (
    <div className="m-4">
      <Greeting name="Ryan" />
      <Greeting name="Rahul" />
      <Greeting name="Kate" />
      {element}
      <Greeting />
    </div>
  )
}

/* function Greeting(props: { name?: string }) { */
/* We can have default values for props as well */
function Greeting({ name = "weary traveller" }) {
  /* If we try to convert to JS, we'd get: */
  return (
    React.createElement("p", {}, "Hello"),
    React.createElement("p", {}, "world")
    /* You can't just return multiple function calls in JS either so it kinda makes sense */
  )
}

function multipleReturns() {
  // The first retun value is ignored with the warning that it is unused.
  /* return 5, 3 */
}
