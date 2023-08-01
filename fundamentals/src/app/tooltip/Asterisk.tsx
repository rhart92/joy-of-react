import React, { ReactNode } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'

import styles from './Asterisk.module.css'

// TIL: Tooltips, semantically, are meant to provide context for a button (it's
// a tip about a tool).
//
// The more semantically appropriate component for the Asterisk use case would
// be a [Popover](https://www.radix-ui.com/docs/primitives/components/popover). 
// A popover is a generic UI element that "pops over" something else.

function Asterisk({
  delay,
  children,
}: {
  delay?: number
  children: ReactNode
}) {
  return (
    <Tooltip.Root delayDuration={delay}>
      <Tooltip.Trigger className={styles.trigger}>*</Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className={styles.content}>
          {children}
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  )
}

export default Asterisk
