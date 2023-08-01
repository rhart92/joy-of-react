'use client'
import React from 'react'

import ToastPlayground from './ToastPlayground'
import Footer from './Footer'
import './styles.css'
import ToastProvider from './ToastProvider'

function App() {
  return (
    <ToastProvider>
      <ToastPlayground />
      <Footer />
    </ToastProvider>
  )
}

export default App
