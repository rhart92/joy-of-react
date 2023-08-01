// After building with esbuild, you can execute output file with Node.js to get
// the HTML string.
import React from 'react'
import { createRoot } from 'react-dom/client'

const Hello = () => <h1>Hello, World!!!</h1>

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(<Hello />)
