import React, { ReactElement, ReactNode } from 'react'
import styles from './style.module.css'
import { Award, Camera, Icon, XCircle } from 'react-feather'

/**
 * TIL: If IconButton is the one importing those components, it means we need to load
 * all of the icons whenever we use an IconButton element. This can add a
 * significant amount of code to our JavaScript bundles, leading to performance
 * problems.
 *
 * With our approach above, however, we only need the user to download the
 * icons that are actively being used. If there are only 3 icons on the page,
 * our bundle only includes those 3 icons.
 */
export default function App() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center m-8">
      <IconButton icon={{ type: 'icon', value: Camera }}>Take Photo</IconButton>
      <IconButton icon={{ type: 'icon', value: XCircle }}>Dismiss</IconButton>
      <IconButton
        icon={{ type: 'node', value: <Award strokeWidth={5} color={'blue'} /> }}
      >
        Win Award
      </IconButton>
    </div>
  )
}

function IconButton({
  icon,
  children,
}: {
  // We can make this even nicer, by passing the function component as a
  // function which means that we can invoke it providing then necessary props
  // for our IconButton. Alternatively, we could clone `icon` and modify the
  // `props` properties since it's just an object this should work and it does.
  // REMEMBER: React JSX is just function calls which produce objects which we
  // can modify.
  // React actually ships with a helper to do just this. It's called
  //
  // React.cloneElement(element, newProps)
  //
  icon:
    | {
        // Option to pass the React component (not invoked)
        // Components are like a blueprint (instructions)
        // Obviously this structure is for example and not real world.
        type: 'icon'
        value: Icon
      }
    | {
        // Option to pass the React element (invoked component)
        // Elements are like the car that was produced by invoking the component.
        type: 'node'
        value: ReactElement
      }
  children: ReactNode
}) {
  let iconNode: ReactNode
  if (icon.type === 'icon') {
    // Render the component using the props we want since the caller never
    // actually invokes the function.
    const IconTag = icon.value
    iconNode = <IconTag strokeWidth={1.5} />
  } else {
    // Modify the React component that is provided.
    iconNode = React.cloneElement(icon.value, {
      strokeWidth: 1.5,
      color: 'white',
    })
  }
  return (
    <button
      className={`flex bg-purple-800 rounded justify-center items-center ${styles.button}`}
    >
      <span className={`m-1 p-2 bg-purple-500 rounded ${styles.icon}`}>
        {iconNode}
      </span>
      <span className={`px-3 content`}>{children}</span>
    </button>
  )
}
