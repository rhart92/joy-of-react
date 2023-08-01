'use client'
import React from 'react'
import styles from './LinkButton.module.css'
import { unreachable } from '@/utils/utils'

type Anchor = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children: React.ReactNode
}

type Button = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  href?: undefined
  children: React.ReactNode
}

/**
 * We can always use styles to make any element look like any other with CSS
 * magic ✨. So we should always try to use the correct HTML elements and then
 * fix with styles as we've done with LinkButton.
 */
export function LinkButton(props: Anchor | Button) {
  const { children, ...rest } = props
  // Polymorphism allows us to dynamically figure out the tag and then render
  // using that tag 😮
  // TODO: How to resolve this typescript problem???
  // TIL: In order to make this work... `Tag` MUST be uppercase since the way
  // React JSX compiler determines if it should "resolve" the tag name or use it
  // verbatim is based on whether the first letter is capitalized 😬.So if we
  // name the variable `tag` and use it as `<tag>`, React will think we want to
  // use it directly vs. evaluating `tag` -> `a` | `button`. So again the
  // capitalization doesn't determine string or component, it determines string
  // or JS expression to be evaluated so variables are fair game 👍 This is to
  // allow support for custom elements (native) which can use lowercase names.
  const Tag = typeof rest.href === 'string' ? 'a' : 'button'
  // This makes some sense when we think about how React knows what to render.
  // When we type <button>, it's being converted to a React.createElement call
  // with the first argument being a string name of the DOM node.
  //
  // const button = React.createElement('button', {}, 'Content')
  //
  // So this kind of makes sense that we'd be able to dynamically render
  // whatever DOM node we want.
  return (
    <>
      <Tag className={styles.button} {...(rest as any)}>
        {children}
      </Tag>
    </>
  )
}
