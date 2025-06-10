import React from 'react';
import VideoBackground from './VideoBackground'
import VideoDiscription from './VideoDiscription';
import { useSelector } from "react-redux";

const MainContainer = () => {
  const index = Math.floor(Math.random()*21);
  const movieList = useSelector((state) => state.movies.nowPlayingMovies);

  const mainMovie = Array.isArray(movieList) ? movieList[index] : null;

  return (
    <div className='relative h-screen'>
        <VideoBackground mainMovie={mainMovie} />
        <VideoDiscription mainMovie={mainMovie} />
    </div>
  )
}

export default MainContainer;