'use client'
import { useToggle } from '@/hooks/useToggle'
import React, { ReactNode, useEffect, useRef, useState } from 'react'
import modalStyles from './modal.module.css'
import { X } from 'react-feather'
// Since locking focus to a particular DOM element is pretty challenging, we'll
// use a library to help us out.
// e.g. Modal dialogs. You can not leave it with "Tab", ie do a "tab-out".
import FocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'
import VisuallyHidden from '@/components/VisuallyHidden'

// Modal ARIA guide -- https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/
// TIL: Browser DEV tools have 👀 button right below the `Console` tab where you
// can setup "live expressions" that will constantly be re-evaluated when the
// app changes.
//
export default function App() {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false)
  return (
    <div className="bg-white text-black p-4 max-w-sm">
      {isModalOpen && (
        <Modal handleDismiss={toggleIsModalOpen} title='Hello, World!'>
          This is an example modal! It includes <a href="">several</a>{' '}
          <a href="">different</a> <a href="">links</a>.
        </Modal>
      )}

      <button
        onClick={toggleIsModalOpen}
        className="p-2 bg-gray-200 rounded mt-2 mb-80"
      >
        Toggle modal
      </button>
      <p className="mb-64">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </p>
      <p className="mb-64">
        It was popularized in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of Lorem
        Ipsum.
      </p>
      <p>
        <a href="https://www.lipsum.com/" className="text-blue-500 underline">
          Read more on lipsum.com
        </a>
        .
      </p>
    </div>
  )
}

function Modal({
  title,
  handleDismiss,
  children,
}: {
  title: string
  handleDismiss: () => void
  children: ReactNode
}) {
  // Rather than leaving the button that toggles the modal focused, we should
  // automatically focus the close button to help keyboard users.
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  // It would be nice if when the modal was closed, we re-focused the element
  // that was previously focused (in most cases the button that launched the
  // modal)
  useEffect(() => {
    // TIL: You can use `instanceof` to narrow `Element` -> `HTMLElement`.
    const currentlyFocusedElement =
      document.activeElement && document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null

    closeButtonRef.current?.focus()

    return () => {
      currentlyFocusedElement?.focus()
    }
  }, [])

  // Allow pressing the escape key to close the modal.
  useEffect(() => {
    function handleKeyPress(e: KeyboardEvent) {
      // TODO: Look into whether `code` is the correct property to check for
      // keyboard events.
      if (e.code === 'Escape') {
        handleDismiss()
      }
    }
    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [handleDismiss])

  // FocusLock will prevent us to from tabbing out of the modal 🥳
  // Similarly, RemoveScroll will prevent us from scrolling the background
  // behind the modal 🥳
  //
  // TIL: FocusLock is also solving other accessibility problems for us like:
  //
  // - Focusing the first interactive child when the component mounts so we
  //   don't have to manually call focus.
  //
  // - We can also use the `returnFocus` prop which will tell `FocusLock` to
  //   automatically handle the tracking of the focused element before the modal
  //   was launched and then re-focus on unmount.
  return (
    <FocusLock>
      <RemoveScroll>
        <div className={modalStyles.wrapper}>
          <div className={modalStyles.backdrop} onClick={handleDismiss} />
          {/* We are now telling screen readers that we are in a dialog which is a */}
          {/* modal, and it now has a title which indicates what it's used for. */}
          <div
            className={modalStyles.dialog}
            role="dialog"
            aria-modal={true}
            aria-label={title}
          >
            {/* Need to make sure that we use buttons for keyboard navigation vs. DIV */}
            <button
              ref={closeButtonRef}
              className={modalStyles.closeBtn}
              onClick={handleDismiss}
            >
              <X />
              {/* We are adding hidden text which will be read by screen readers */}
              <VisuallyHidden>Dismiss modal.</VisuallyHidden>
            </button>
            {children}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  )
}
