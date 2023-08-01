import React, { ReactNode } from 'react'
import styles from './Card.module.css'

type Elevation = 1 | 2 | 3
const elevationToClassMap: Record<Elevation, string> = {
  1: styles.elevationOne,
  2: styles.elevationTwo,
  3: styles.elevationThree,
}

export default function Card({
  elevation = 2,
  children,
}: {
  elevation?: Elevation
  children?: ReactNode
}) {
  return (
    <div className={`${styles.card} ${elevationToClassMap[elevation]}`}>
      {children}
    </div>
  )
}
