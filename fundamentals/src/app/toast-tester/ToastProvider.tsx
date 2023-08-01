'use client'
import React, { ReactNode, useCallback, useState } from 'react'
import { ToastMessage, Variant } from './ToastPlayground'
import { useEscapeKey } from '@/hooks/useEscapeKey'

export const ToastContext = React.createContext<{
  toastMessages?: Array<ToastMessage>
  dismissToast?: (id: string) => void
  addToast?: (message: string, variant: Variant) => void
}>({})

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [toastMessages, setToastMessages] = useState<Array<ToastMessage>>([])

  const dismissToast = useCallback(
    (id: string) => {
      if (!setToastMessages || !toastMessages) {
        return
      }
      const nextToastMessages = toastMessages.filter((toast) => toast.id !== id)
      setToastMessages(nextToastMessages)
    },
    [toastMessages]
  )

  const addToast = useCallback(
    (message: string, variant: Variant) => {
      if (!setToastMessages || !toastMessages) {
        return
      }
      setToastMessages([
        ...toastMessages,
        {
          id: crypto.randomUUID(),
          variant: variant,
          message: message,
        },
      ])
    },
    [toastMessages]
  )

  const clearToasts = useCallback(() => {
    setToastMessages([])
  }, [])

  // Globally add a shortcut for `escape` to clear toast messages
  useEscapeKey(() => {
    if (clearToasts) {
      clearToasts()
    }
  })

  const toastContextValue = React.useMemo(() => {
    return {
      toastMessages,
      dismissToast,
      addToast,
    }
  }, [addToast, dismissToast, toastMessages])

  return (
    <ToastContext.Provider value={toastContextValue}>
      {children}
    </ToastContext.Provider>
  )
}
