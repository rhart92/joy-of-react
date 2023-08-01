'use client'
import React from 'react'

import VideoPlayer from './VideoPlayer'
import { VideoContext, VideoContextType } from './VideoContext'

function App() {
  const [playbackRate, setPlaybackRate] = React.useState(1)

  const videoContextValue: VideoContextType = {
    playbackRate,
    setPlaybackRate,
  }

  return (
    <VideoContext.Provider value={videoContextValue}>
      <main className='flex flex-col items-center justify-center p-4 gap-4'>
        <h1 className='text-3xl font-semibold'>Video Archives</h1>

        {DATA.map(({ id, video, createdBy, license }) => (
          <article key={id} className='max-w-lg'>
            <VideoPlayer
              src={video.src}
              caption={video.caption}
            />
            <dl>
              <dt>Created by</dt>
              <dd>{createdBy}</dd>
              <dt>Licensed under</dt>
              <dd>{license}</dd>
            </dl>
          </article>
        ))}
      </main>
    </VideoContext.Provider>
  )
}

const DATA = [
  {
    id: 'snowstorm',
    video: {
      src: 'https://sandpack-bundler.vercel.app/videos/snowstorm.mp4',
      caption: 'A peaceful snowstorm in a residential area',
    },
    createdBy: 'Karolina Grabowska',
    license: 'Creative Commons Zero (CC0)',
  },
  {
    id: 'flowers',
    video: {
      src: 'https://sandpack-bundler.vercel.app/videos/flowers.mp4',
      caption: 'Macro video of a flower blowing in the wind',
    },
    createdBy: 'Imam Hossain',
    license: 'Creative Commons Zero (CC0)',
  },
  {
    id: 'plane',
    video: {
      src: 'https://sandpack-bundler.vercel.app/videos/plane.mp4',
      caption: 'Plane flying over the clouds',
    },
    createdBy: 'Ahmet Akpolat',
    license: 'Creative Commons Zero (CC0)',
  },
]

export default App
