import React, { ReactNode } from 'react'
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather'

import styles from './Toast.module.css'
import VisuallyHidden from '@/components/VisuallyHidden'
import { Variant } from './ToastPlayground'

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

function Toast({
  variant,
  children,
  onDismiss,
}: {
  variant: Variant
  children: ReactNode
  onDismiss: () => void
}) {
  const Icon = ICONS_BY_VARIANT[variant]
  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} -</VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        onClick={onDismiss}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  )
}

export default Toast