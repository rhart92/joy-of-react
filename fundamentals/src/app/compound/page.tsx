// Compound components are a bit weird...
import React from 'react'
import List from './list'

// TIL: There is an interesting component design difference with this example.
// In other components, we've always added props to our component which are used
// throughout the component essentially making the implementation of the
// component a black box. In this example, we are allowing the user to provide
// children to customize the component. [Josh] It's more like a piece of
// furniture from IKEA, we are given all the parts but we have to assemble it.
//
// First approach is easier to use, but rigid. We can't customize it at all. The
// approach described here is a bit more work to set up, but a lot more
// flexible. We can combine the pieces in different ways, or even substitute in
// our own sub-components!
export default function App() {
  return (
    <div>
      <List>
        <List.ListItem>One</List.ListItem>
        <List.ListItem>Two</List.ListItem>
        <List.ListItem>Three</List.ListItem>
      </List>
    </div>
  )
}
