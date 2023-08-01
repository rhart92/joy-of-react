import React from 'react'
import { Menu } from 'react-feather'

import Drawer from './Drawer'
import styles from './Header.module.css'
import { useToggle } from '@/hooks/useToggle'
import VisuallyHidden from '@/components/VisuallyHidden'

function Header() {
  const [isMenuOpen, toggleIsMenuOpen] = useToggle(false)

  return (
    <header className="bg-pink-200 text-black flex justify-between p-4">
      <a href="" className="font-semibold">
        Kaboom
      </a>

      {/* TIL: Since drawer is a low-level, reusable component, we want to add the `nav` */}
      {/* here which wraps the button and drawer. */}
      <nav role="navigation" aria-label="Main menu">
        <button
          className={styles.hamburgerBtn}
          onClick={toggleIsMenuOpen}
          aria-expanded={isMenuOpen}
        >
          {/* Indicate to screen readers that SVGs aren't focusable */}
          <Menu aria-hidden={true} focusable={false} />
          <VisuallyHidden>Open Menu Button</VisuallyHidden>
        </button>
        {/* TODO: Rather than unmounting the drawer, would be more accessible + nicer */}
        {/* animation if it was hidden. */}
        {isMenuOpen && (
          <Drawer handleDismiss={toggleIsMenuOpen}>
            <ul className={styles.navigationList}>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Gallery</a>
              </li>
              <li>
                <a href="">Photographers</a>
              </li>
              <li>
                <a href="">Submit Work</a>
              </li>
            </ul>
          </Drawer>
        )}
      </nav>
    </header>
  )
}

export default Header
