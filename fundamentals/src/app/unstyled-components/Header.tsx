import React from 'react'

import Modal from './Modal'
import styles from './Modal.module.css'
import LoginForm from './LoginForm'
import { useToggle } from '@/hooks/useToggle'
import { Dialog } from '@headlessui/react'
import VisuallyHidden from '@/components/VisuallyHidden'
import { X } from 'react-feather'

function Header() {
  const [isModalOpen, toggleIsModalOpen] = useToggle(false)

  return (
    <header className="flex justify-end mb-4 border-b border-dashed border-gray-600 p-4 text-black">
      {isModalOpen && (
        <Modal
          title="Log in"
          handleDismiss={() => toggleIsModalOpen()}
        >
          <LoginForm />
        </Modal>
      )}
      <button
        onClick={toggleIsModalOpen}
        className="px-2 py-1 bg-gray-200 rounded"
      >
        Log in
      </button>
    </header>
  )
}

export default Header
