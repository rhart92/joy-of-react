import React from 'react'

import styles from './List.module.css'

// Although there are MANY different ways to specify the tag to use for the List
// via props, there are some exiting conventions. `styled components` introduced
// the `as` prop which accepts the tag name as the prop.
function List({
  className = '',
  children,
  // Renamae the variable to whatever we need including making it capitalized.
  as: ListTag = "ul",
  ...delegated
}: {
  className?: string
  // We can also make optional and provide a default value with destructuring
  // magic ✨
  as?: 'ol' | 'ul'
  children: React.ReactNode
} & React.HTMLAttributes<HTMLUListElement>) {
  return (
    <ListTag
      {...delegated}
      className={`${styles.wrapper} ${className} ${
        ListTag === 'ol' ? 'list-decimal' : 'list-disc'
      }`}
    >
      {children}
    </ListTag>
  )
}

export default List
