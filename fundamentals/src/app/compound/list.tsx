// This is a compound component.
// It allows the user to import a single default export as the "main" component
// and then use dot access to access sub components.
//
// This is possible because functions in javascript are just objects which means
// that we can assign them properties (as confusing as that is). So in this
// case are are assinging the sub component as a property on the default export
// 🤯
//
// There are other ways to expose multiple components without using the
// confusing syntax like having a single default export and them many named
// exports for each component.
//
// With compound components we also lose tree shaking since the bundler can't
// figure out whether the sub components are being used or not.
import React, { ReactNode } from 'react'

function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc m-8">{children}</ul>
}

function ListItem({ children }: { children: ReactNode }) {
  return <li>{children}</li>
}

List.ListItem = ListItem

export default List
