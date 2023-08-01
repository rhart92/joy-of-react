'use client'
import React, { ReactNode } from 'react'

type PlaybackContextType = {
  playbackRate: number
  setPlaybackRate: (n: number) => void
  resetPlaybackRate: () => void
}

export const PlaybackRateContext = React.createContext<PlaybackContextType>({
  playbackRate: 1,
  setPlaybackRate: (n) => {
    throw new Error('Expected content context to be initialized')
  },
  resetPlaybackRate: () => {
    throw new Error('Expected content context to be initialized')
  },
})

function PlaybackRateProvider({ children }: { children: ReactNode }) {
  const [playbackRate, setPlaybackRate] = React.useState(1)

  const resetPlaybackRate = React.useCallback(() => {
    setPlaybackRate(1)
  }, [])

  return (
    <PlaybackRateContext.Provider
      value={{
        playbackRate,
        setPlaybackRate,
        resetPlaybackRate,
      }}
    >
      {children}
    </PlaybackRateContext.Provider>
  )
}

export default PlaybackRateProvider
