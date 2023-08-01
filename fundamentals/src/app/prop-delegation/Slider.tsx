import React, { InputHTMLAttributes, useId } from 'react'
import styles from './Slider.module.css'

/**
 * Josh refers to these types of components as "Supercharged HTML" elements
 * which I think is a great name!
 */
export default function SliderInput({
  id,
  label,
  ...delegated
}: {
  id?: string
  label: string
} & InputHTMLAttributes<HTMLInputElement>) {
  const generatedId = useId()
  const appliedId = id || generatedId
  return (
    <div>
      <label htmlFor={appliedId} className="mr-4">
        {label}
      </label>
      <input
        id={id}
        type="range"
        className={`${styles.slider}`}
        {...delegated}
      />
    </div>
  )
}
