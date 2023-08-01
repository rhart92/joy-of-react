import React from 'react'

import styles from './Slider.module.css'

// TIL: By default, React CSSProperties doesn't allow you to safely specify CSS
// variables, but we can modify the definition to include the string patterns we
// allow.
// Reference: https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
declare module 'csstype' {
  interface Properties {
    // Add a missing property
    /* WebkitRocketLauncher?: string */
    // Add a CSS Custom Property
    /* '--theme-color'?: 'black' | 'white' */
    // Allow namespaced CSS Custom Properties
    /* [index: `--theme-${string}`]: any */
    // Allow any CSS Custom Properties
    [index: `--${string}`]: string | undefined
    // ...or allow any other property
    /* [index: string]: any */
  }
}
function Slider({
  label,
  handleSize = 16,
  handleColor,
  handleActiveColor,
  ...delegated
}: {
  label: string
  handleSize?: number
  handleColor?: string
  handleActiveColor?: string
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = React.useId()

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        {...delegated}
        type="range"
        id={id}
        className={styles.slider}
        style={{
          '--handle-size': handleSize + 'px',
          '--handle-color': handleColor,
          '--handle-active-color': handleActiveColor,
        }}
      />
    </div>
  )
}

export default Slider
