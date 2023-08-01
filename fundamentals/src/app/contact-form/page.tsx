'use client'
import React, { useState } from 'react'
import styles from './style.module.css'

const endpoint = '/api/contact'
/* const endpoint = '/api/contact?simulatedError=true' */

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Wrapper() {
  return (
    <div className="flex absolute top-0 left-0 bottom-0 right-0 items-center justify-center bg-orange-200 text-black">
      <ContactForm />
    </div>
  )
}

export function ContactForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  return (
    <form
      className="flex flex-col"
      onSubmit={async (e) => {
        e.preventDefault()

        setStatus('loading')

        const response = await fetch(endpoint, {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            message: message,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (response.ok) {
          setStatus('success')
          setMessage('')
        } else {
          setStatus('error')
        }

        const data = await response.json()
        console.log(data)
      }}
    >
      <div className={styles.inputContainer}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'loading'}
          required={true}
        />
      </div>
      <div className={styles.inputContainer}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          className={styles.input}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={status === 'loading'}
          required={true}
        />
      </div>
      <button
        className="px-8 py-2 border border-gray-800 bg-gray-200 self-center rounded"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Submiting...' : 'Submit'}
      </button>
      {status === 'success' && <p>Message sent!</p>}
      {status === 'error' && <p>Something went wrong.</p>}
    </form>
  )
}
