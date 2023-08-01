import React from 'react'
import { createRoot } from 'react-dom/client'

const element = React.createElement('p', { id: 'hello' }, 'Hello, World!')

const container = document.querySelector('#root')
const root = createRoot(container)
root.render(element)
