/**
 * One of the coolest things about React is that we can create these thin
 * layers on top of our base components where we lock in the attributes like
 * we've done with SquareSlider which wraps Slider
 */
import React, { ForwardedRef } from 'react'

import Slider from './Slider'
import styles from './SquareSlider.module.css'

function SquareSlider(
  props: {
    label: string
  } & React.InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>
) {
  return <Slider ref={ref} {...props} className={styles.squareSlider} />
}

export default React.forwardRef(SquareSlider)
