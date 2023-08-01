'use client'
import React, { useState } from 'react'

import Button from './Button'

import styles from './ToastPlayground.module.css'
import ToastShelf from './ToastShelf'
import { ToastContext } from './ToastProvider'

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'] as const

export type Variant = typeof VARIANT_OPTIONS[number]

export type ToastMessage = {
  id: string
  variant: Variant
  message: string
}

function ToastPlayground() {
  const { toastMessages, dismissToast, addToast } =
    React.useContext(ToastContext)

  const [selectedVariant, setSelectedVariant] = useState<Variant>(
    VARIANT_OPTIONS[0]
  )

  const [message, setMessage] = useState('')

  if (!addToast || !dismissToast) {
    return
  }

  function addNewToast() {
    if (!addToast) {
      return
    }
    addToast(message, selectedVariant)
    setMessage('')
    setSelectedVariant('notice')
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toastMessages && <ToastShelf handleDismiss={dismissToast} />}

      <form
        className={styles.controlsWrapper}
        onSubmit={(e) => {
          e.preventDefault()
          addNewToast()
        }}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              onKeyDown={(e) => {
                if (e.code === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  addNewToast()
                }
              }}
              required={true}
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label key={option} htmlFor={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={option === selectedVariant}
                  onChange={() => setSelectedVariant(option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ToastPlayground
