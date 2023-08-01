"use client"
import React, { useState } from "react"

export default function Home() {
  /* const element = React.createElement("p", { id: "hello" }, "Hello, world") */
  /* const rawElementObject = {
    type: "p",
    key: null,
    ref: null,
    props: {
      id: "hello",
      children: "Hello, world",
    },
    _store: {},
  }
  console.log(element) */

  // New way is using JSX since as the tree structure grows, it becomes
  // increasingly easier to read.
  const elementID = "hello"
  const element = <p id={elementID}>Hello, World!</p>
  const numbers = [1, 2, 3].map((n) => <li key={"hello"}>{n}</li>)

  const items = ["apple", "orange", "lemon"]

  /* const withExpressions = <div>Number of items: {items.length}</div> */
  // It's not that magical what's happening... we are just adding a second
  // child with is a JS expression vs. a string. Josh Comeau calls it an
  // "Expression Slot" where we can put in JS and React won't touch it and it
  // will just append it as a child.
  // Thinking about why `if` statements don't work in Expression Slots but ternaries
  // do, we can think about how this would translate and it quickly becomes
  // apparent that JS wouldn't allow us to put an `if` statement below where
  // we have `items.length`. The rule is we are only allowed to use `Expressions` in
  // JSX but not `Statements` like `if`. Remember an expression is a bit of
  // JavaScript code that produces a value. Statement is an instruction to the
  // computer to do a particular thing like check if a value is equal to
  // another or assign a value to a variable.
  //
  // We can use the same Expression Slot trick for attributes in JSX.
  const withExpressions = React.createElement(
    "div",
    {
      // Similar to above using `JSX` to set the `id` attribute to a dynamic
      // value.
      id: elementID,
    },
    "Number of items(non JSX): ",
    items.length
  )
  return withExpressions
  /* return element */
}
