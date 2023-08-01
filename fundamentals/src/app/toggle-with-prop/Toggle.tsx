import React, { ButtonHTMLAttributes } from 'react'
import styles from './toggle.module.css'

function Toggle({
  label,
  checked,
  className = '',
  ...delegated
}: {
  label: string
  checked: boolean
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const id = React.useId()

  // This style updates the UI, to move the ball
  // and indicate whether it's toggled or not.
  const ballStyle = {
    transform: checked ? `translateX(100%)` : `translateX(0%)`,
  }

  // TIL: Reminder, order doesn't matter here. The precedence / importance is
  // determined by the order in the CSS file.
  // We also need to handle `undefined` explicitly when dealing with template
  // strings to avoid a weird class named `undefined` actually applying. In our
  // case when stringified, we'll actually just add a space but to be safe we
  // can conditionally add the class.
  // Note: This actually can't be replicated with CSS modules + typescript since
  // `undefined` can't be used to index an object. 👍
  // We _could_ also provide a default value since we are destructuring.
  const buttonClasses = [styles.toggle, className].join(' ')
  /* const buttonClasses = [styles.toggle, className].join(" ") */
  /* const buttonClasses = `${styles.toggle} ${className}` */

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id} className="label">
        {label}
      </label>
      {/* Order of props here can be important. If a user supplied a different `type` here */}
      {/* it might not matter too much but we probably wouldn't want the user of our component */}
      {/* to supply a different type for `input` if we were building a checkbox. To achieve */}
      {/* this easily, it's usually a good idea to put the `delegated` props at the beginning */}
      {/* so the local props in the component overwrite what the user provided where it's */}
      {/* important. */}
      {/* See more in `arrow` */}
      <button
        {...delegated}
        id={id}
        type="button"
        aria-pressed={checked}
        onClick={delegated.onClick}
        className={buttonClasses}
      >
        <span className={styles.ball} style={ballStyle} />
      </button>
    </div>
  )
}

export default Toggle
