import useTrailerVideo from '../hooks/useTrailerVideo';
import { useSelector } from "react-redux";

const VideoBackground = ({index}) => {
    
    const movieList = useSelector(state => state.movies.nowPlayingMovies);

    const mainMovie = Array.isArray(movieList) ? movieList[index] : null;
    useTrailerVideo(mainMovie?.id);
    const trailer = useSelector(state => state.movies.mainMovieTrailer);

    if(!trailer) return null;
    
  return (
    <div>
      <iframe className='w-screen aspect-video' src={`https://www.youtube.com/embed/${trailer[0]?.key}?&autoplay=1&mute=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
  )
}

export default VideoBackground;