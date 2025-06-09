import React from 'react'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
  const randomIndex = Math.floor(Math.random()*21);

  return (
    <div>
        <VideoBackground index={randomIndex} />
    </div>
  )
}

export default MainContainer;