// These styles will make sure the component
// is not visible, but will still be announced
// by screen readers.
//
// Adding “display: none” would hide the
// element from ALL users, including those

import React, { CSSProperties, ReactNode } from 'react'

// using screen-readers.
const hiddenStyles: CSSProperties = {
  display: 'inline-block',
  position: 'absolute',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0,
}

const VisuallyHidden = ({ children }: { children: ReactNode }) => {
  return <span style={hiddenStyles}>{children}</span>
}

export default VisuallyHidden
