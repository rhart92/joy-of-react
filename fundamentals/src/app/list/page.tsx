import React from 'react'

import List from './List'

function App() {
  return (
    <main className="absolute left-0 right-0 top-0 bottom-0 bg-white text-black flex flex-col items-center justify-center">
      <List as="ol" className="mb-4">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </List>
      <List as="ul" className="mb-4">
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </List>
      <List>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </List>
    </main>
  )
}

export default App
