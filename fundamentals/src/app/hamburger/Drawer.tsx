import React, { ReactNode, useEffect } from 'react'
import { X as Close } from 'react-feather'

import styles from './Drawer.module.css'
import FocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'
import VisuallyHidden from '@/components/VisuallyHidden'
import { useEscapeKey } from '@/hooks/useEscapeKey'

function Drawer({
  handleDismiss,
  children,
}: {
  handleDismiss: () => void
  children: ReactNode
}) {
  useEscapeKey(handleDismiss)

  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className={styles.wrapper}>
          <div className={styles.backdrop} onClick={handleDismiss} />
          <div className={styles.drawer} aria-modal={true}>
            <div>{children}</div>
            <button className={styles.closeBtn} onClick={handleDismiss}>
              <Close aria-hidden={true} focusable={false} size={18} /> Dismiss
              <VisuallyHidden>Close menu</VisuallyHidden>
            </button>
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  )
}

export default Drawer
