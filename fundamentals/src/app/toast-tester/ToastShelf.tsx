import React from 'react'

import styles from './ToastShelf.module.css'
import Toast from './Toast'
import { ToastContext } from './ToastProvider'

function ToastShelf({
  handleDismiss,
}: {
  handleDismiss: (id: string) => void
}) {
  const { toastMessages } = React.useContext(ToastContext)

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toastMessages &&
        toastMessages.map((toast) => (
          <li key={toast.id} className={styles.toastWrapper}>
            <Toast
              variant={toast.variant}
              onDismiss={() => handleDismiss(toast.id)}
            >
              {toast.message}
            </Toast>
          </li>
        ))}
    </ol>
  )
}

export default ToastShelf
