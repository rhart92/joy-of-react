'use client'
import styles from './styles.module.css'
import { useState } from 'react'
import _ from 'lodash'
import { STICKERS } from './stickers'

function getSticker() {
  return STICKERS[_.random(STICKERS.length - 1)]
}

type Sticker = {
  src: string
  alt: string
  width: number
  height: number
}

type ButtonSticker = {
  sticker: Sticker
  position: {
    x: number
    y: number
  }
  id: string
}

export default function Stickers() {
  const [stickers, setStickers] = useState<ButtonSticker[]>([])

  return (
    <button
      className={styles.fullPageButton}
      onClick={(e) => {
        const sticker = getSticker()
        setStickers([
          ...stickers,
          {
            // Now we generate a unique ID for each sticker when we append to
            // allow React to easy associate a value -> a particular instance of
            // a sticker 🤔
            id: crypto.randomUUID(),
            sticker,
            position: {
              // Alternative would be to apply a class to all stickers with a
              // transform.
              /* x: e.clientX - sticker.width / 2, */
              /* y: e.clientY - sticker.height / 2, */
              x: e.clientX,
              y: e.clientY,
            },
          },
        ])
      }}
    >
      <span>Click around to add stickers.</span>
      {stickers.map((sticker, i) => (
        <img
          key={sticker.id}
          src={sticker.sticker.src}
          alt={sticker.sticker.alt}
          className={styles.sticker}
          style={{
            left: sticker.position.x,
            top: sticker.position.y,
            width: sticker.sticker.width,
            height: sticker.sticker.height,
          }}
        />
      ))}
    </button>
  )
}
