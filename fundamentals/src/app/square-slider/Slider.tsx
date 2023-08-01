import React, { ForwardedRef } from 'react'

import styles from './Slider.module.css'

function Slider(
  {
    label,
    className = '',
    ...delegated
  }: {
    label: string
    className?: string
  } & React.InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>
) {
  const id = React.useId()

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        ref={ref}
        {...delegated}
        type="range"
        id={id}
        className={`${styles.slider} ${className}`}
      />
    </div>
  )
}

export default React.forwardRef(Slider)
