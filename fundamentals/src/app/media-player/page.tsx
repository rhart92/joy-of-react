'use client'
import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { Pause, Play } from 'react-feather'
import style from './style.module.css'

export default function MediaPlayer() {
  const [playing, setPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)
  const src =
    'https://storage.googleapis.com/joshwcomeau/bvrnout-take-it-easy-short.mp3'

  // Automatically handle pausing or playing the song based on the `playing`
  // state to avoid getting out of sync.
  useEffect(() => {
    if (playing) {
      audioRef.current?.play()
    } else {
      audioRef.current?.pause()
    }
  }, [playing])

  // TIL: You can't really replicate strict mode by killing the component and
  // re-rendering it. The reason this doesn't work is that when we kill and
  // re-render the component to trigger the `useEffect`, we are running
  // `useEffect` twice but they are tied to different instances of the
  // component so the previous effect with it's long running listener **is**
  // still toggling state but it's the state of the component that isn't on the
  // page anymore.
  useEffect(() => {
    const keypressHandler = (e: KeyboardEvent) => {
      if (e.code !== 'Space') {
        return
      }
      setPlaying((p) => !p)
    }

    // TODO: keydown vs. keyup vs. keypress
    window.addEventListener('keypress', keypressHandler)

    return () => {
      window.removeEventListener('keypress', keypressHandler)
    }
    // Without the dependency array, variables will be captured in scope and
    // will end up being stale.
  }, [playing])

  return (
    <div className={style.container}>
      <footer className={style.playerFooter}>
        <img
          src="https://sandpack-bundler.vercel.app/img/take-it-easy.png"
          alt="song image"
          className={style.songImage}
        />
        <div className="flex flex-col flex-1">
          <span className="font-semibold text-lg">Take It Easy</span>
          <span className="text-gray-600">Bvrnout ft. Mia Vaile</span>
        </div>
        <button
          className="rounded-full bg-black p-4 text-white"
          onKeyPress={(e) => {
            // We have a subtle bug without this line of code. If you click the
            // button and then hit the `space` key. The `onClick` handler for
            // the button will actually fire since it's still "focused" and
            // buttons by default allow users who aren't using a mouse to
            // trigger them using `space` or `enter` if they are focused. This
            // means that both our `keypressHandler` and the button's `onClick`
            // fire which toggle the playing state twice. This happens because
            // of Event Bubbling. The button is the HTML element that is the
            // element that was focused when `space` is hit but our `addEventListener`
            // is on the window object 🤔 The reason this still works is because
            // the button will try to fire it's `onKeyPress` handler, then it's
            // parent will try to do the same, all the way up to the window
            // element. In this case, we don't want to do that for the `space`
            // key to avoid this double event bug.
            if (e.code !== 'Space') {
              return
            }
            e.stopPropagation()
          }}
          onClick={() => {
            // TIL: Could also use the `isPaused` property on the audio tag vs.
            // state 🤷 But this has issues with setting the icon since we don't
            // re-render the component when modifying refs so we need state to
            // to tell React we want to re-render when the song stops / starts.
            // This isn't _quite_ complete because I can use media keys on the
            // Mac to also start / stop the music so need to figure out a way to
            // handle that.
            // TODO: Figure out media keys (probably a eventlistener?)
            if (playing) {
              setPlaying(false)
              return
            }
            setPlaying(true)
          }}
        >
          {playing ? <Pause /> : <Play />}
        </button>
        <audio
          ref={audioRef}
          src={src}
          onEnded={() => {
            // TIL: `onEnded` allows us to run code at the end of the song
            // Would also be a nice place to automatically swap to the next song
            // or loop.
            // TODO: Build scrubber?
            setPlaying(false)
          }}
        />
      </footer>
    </div>
  )
}
