'use client'
import React from 'react'

import styles from './Button.module.css'

function Button(
  {
    children,
    ...delgated
  }: {
    children: React.ReactNode
  } & React.HtmlHTMLAttributes<HTMLButtonElement>,
  ref: React.ForwardedRef<HTMLButtonElement>
) {
  return (
    <button ref={ref} className={styles.btn} {...delgated}>
      {children}
    </button>
  )
}

export default React.forwardRef(Button)
