'use client'
import { useId, useRef, useState } from 'react'
import style from './style.module.css'

export default function VideoPlayback() {
  return (
    <div className="max-w-xl p-4">
      <VideoPlayer
        src="https://sandpack-bundler.vercel.app/videos/snowstorm.mp4"
        caption="Snow falls by a pine tree and house"
      />
      <dl className={style.dl}>
        <dt className={style.dt}>Filmed by</dt>
        <dd className={style.dd}>Karolina Grabowska</dd>
        <dt className={style.dt}>Licensed under</dt>
        <dd className={style.dd}>Creative Commons Zero (CC0)</dd>
      </dl>
    </div>
  )
}

const supportedSpeeds = [1, 1.25, 1.5, 1.75, 2, 3]

function VideoPlayer(props: { src: string; caption: string }) {
  const selectId = useId()
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <div className="flex flex-col items-center">
      <div className="p-1 bg-gray-800 rounded-lg">
        <video className='rounded-lg' src={props.src} controls ref={videoRef} />
        <p className="text-center text-sm mt-2">{props.caption}</p>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
        }}
        className="flex justify-center items-center my-4"
      >
        <label className="mr-2" htmlFor={`${selectId}-select`}>
          Select playback speed:
        </label>
        <select
          className="text-black px-2 py-1 rounded"
          id={`${selectId}-select`}
          value={playbackSpeed}
          onChange={(e) => {
            try {
              const nextPlaybackSpeed = parseFloat(e.target.value)
              setPlaybackSpeed(nextPlaybackSpeed)
              if (videoRef.current) {
                // TIL: It's super easy to work with video elements 😮
                // TODO: Build a custom video player with custom controls
                videoRef.current.playbackRate = nextPlaybackSpeed
              }
            } catch (e) {
              alert('Unable to set video speed')
              console.log(e)
            }
          }}
        >
          {supportedSpeeds.map((speed) => (
            <option key={speed} value={speed}>
              {speed}
            </option>
          ))}
        </select>
      </form>
    </div>
  )
}
