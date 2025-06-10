import React from 'react'
import MovieRow from './MovieRow';
import {useSelector} from "react-redux";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const SecondaryContainer = () => {

  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const popularMovies = useSelector(state => state.movies.popularMovies);
  const nowPlayingMovies = useSelector(state => state.movies.nowPlayingMovies);
  const upcomingMovies = useSelector(state => state.movies.upcomingMovies);
  const topRatedMovies = useSelector(state => state.movies.topRatedMovies);

  if(!popularMovies || !upcomingMovies || !topRatedMovies || !nowPlayingMovies ) return null;

  return (
    <div className='static'>
      <MovieRow rowTitle={"Now Playing"} movieData={nowPlayingMovies} />
      <MovieRow rowTitle={"Popular"} movieData={popularMovies} />
      <MovieRow rowTitle={"Top Rated"} movieData={topRatedMovies} />
      <MovieRow rowTitle={"Upcoming"} movieData={upcomingMovies} />
    </div>
  )
}

export default SecondaryContainer