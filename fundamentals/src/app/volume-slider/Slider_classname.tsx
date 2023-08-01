import React from 'react'

import styles from './Slider.module.css'

function Slider({
  label,
  className = '',
  ...delegated
}: {
  label: string
  className?: string
} & React.InputHTMLAttributes<HTMLInputElement>) {
  const id = React.useId()

  const sliderClassName = `${styles.slider} ${className}`

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input {...delegated} type="range" id={id} className={sliderClassName} />
    </div>
  )
}

export default Slider
