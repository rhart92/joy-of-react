import React, { ReactNode } from 'react'
import { X as Close, X } from 'react-feather'
import FocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'

import styles from './Modal.module.css'
import VisuallyHidden from '@/components/VisuallyHidden'
import { useEscapeKey } from '@/hooks/useEscapeKey'
import { Dialog } from '@headlessui/react'

function Modal({
  title,
  handleDismiss,
  children,
}: {
  title: string
  handleDismiss: () => void
  children: ReactNode
}) {
  /* useEscapeKey(handleDismiss) */

  // TIL: These components are just the markup, but no styles. This can be
  // alarming when trying to use since you'll be missing fundamental styles
  // like showing the backdrop or having the modal float above the rest of the
  // content. Remember, this is by design so we can style our components however
  // we need.
  //
  // It should be clear now why we don't just use the raw `Dialog` component
  // in our application, but instead wrap it in our own `Modal` component that
  // customizes the Dialog component to our needs. It also allows us to control
  // the API for this component vs. having to memorize the API provided by
  // headless UI.
  //
  // Lastly, if we want to swap from HeadlessUI to Radix, we can do so in a
  // single place and everything else should just work 🥳
  return (
    <Dialog
      className={`${styles.wrapper} text-black`}
      open={true}
      onClose={handleDismiss}
    >
      <div className={styles.backdrop} onClick={handleDismiss} />
      <Dialog.Panel className={styles.dialog}>
        <Dialog.Title className="text-xl font-semibold">{title}</Dialog.Title>

        {children}

        <button className={styles.closeBtn} onClick={handleDismiss}>
          <Close />
          <VisuallyHidden>Dismiss modal</VisuallyHidden>
        </button>
      </Dialog.Panel>
    </Dialog>
  )

  // Old content before using headless UI
  /* return ( */
  /*   <FocusLock returnFocus={true}> */
  /*     <RemoveScroll> */
  /*       <div className={styles.wrapper}> */
  /*         <div className={styles.backdrop} onClick={handleDismiss} /> */
  /*         <div */
  /*           className={styles.dialog} */
  /*           role="dialog" */
  /*           aria-modal="true" */
  /*           aria-label={title} */
  /*         > */
  /*           <button className={styles.closeBtn} onClick={handleDismiss}> */
  /*             <X /> */
  /*             <VisuallyHidden>Dismiss modal</VisuallyHidden> */
  /*           </button> */
  /*           <h2>{title}</h2> */
  /*           {children} */
  /*         </div> */
  /*       </div> */
  /*     </RemoveScroll> */
  /*   </FocusLock> */
  /* ) */
}

export default Modal
