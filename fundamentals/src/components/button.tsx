import React, { CSSProperties } from 'react'

type ButtonVariant = 'success' | 'plain' | 'mega'

export function Button(props: {
  variant: ButtonVariant
  onClick: () => void
  logOnRender?: () => void
  children: React.JSX.Element
}) {
  const styles: CSSProperties = {}
  const classes: Array<string> = []

  if (props.logOnRender) {
    props.logOnRender()
  }

  if (props.variant === 'mega') {
    classes.push('bg-red-800', 'px-4', 'py-2', 'rounded')
  } else if (props.variant === 'plain') {
    classes.push('border', 'border-white', 'px-4', 'py-2', 'rounded')
  } else if (props.variant === 'success') {
    classes.push('bg-green-800', 'px-4', 'py-2', 'rounded')
  }

  return (
    <button
      style={styles}
      className={classes.join(' ')}
      onClick={props.onClick}
    >{props.children}</button>
  )
}
