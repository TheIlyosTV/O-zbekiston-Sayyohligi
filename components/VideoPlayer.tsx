'use client'

import { useRef, useEffect } from 'react'

interface VideoPlayerProps {
  videoUrl: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  return (
    <video ref={videoRef} src={videoUrl} controls className="w-full h-64 object-cover" />
  )
}

export default VideoPlayer

