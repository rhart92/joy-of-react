import React from 'react'
import { VideoContext } from './VideoContext'

function VideoPlayer({ src, caption }: { src: string; caption: string }) {
  const playbackRateSelectId = React.useId()

  const videoRef = React.useRef<HTMLVideoElement>(null)

  const videoContext = React.useContext(VideoContext)

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = videoContext.playbackRate
    }
  }, [videoContext.playbackRate])

  return (
    <div className="video-player">
      <figure>
        <video ref={videoRef} controls src={src} />
        <figcaption>{caption}</figcaption>
      </figure>

      <div className="actions">
        <label htmlFor={playbackRateSelectId}>Select playback speed:</label>
        <select
          className="text-black"
          id={playbackRateSelectId}
          value={videoContext.playbackRate}
          onChange={(event) => {
            videoContext.setPlaybackRate(parseInt(event.target.value, 10))
          }}
        >
          <option value="0.5">0.5</option>
          <option value="1">1</option>
          <option value="1.25">1.25</option>
          <option value="1.5">1.5</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
    </div>
  )
}

export default VideoPlayer
