// After building with esbuild, you can execute output file with Node.js to get
// the HTML string.
import React from 'react'
import Server from 'react-dom/server'

const Hello = () => <h1>Hello, World!</h1>

console.log(Server.renderToString(<Hello />))

