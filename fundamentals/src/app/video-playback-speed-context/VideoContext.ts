import React from "react"

export type VideoContextType = {
  playbackRate: number
  setPlaybackRate: (n: number) => void
}

export const VideoContext = React.createContext<VideoContextType>({
  playbackRate: 1,
  setPlaybackRate: () => {
    throw new Error('Context not initialized')
  },
})
