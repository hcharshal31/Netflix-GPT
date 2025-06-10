import { useEffect } from 'react';
import {useDispatch} from "react-redux";
import { addMainMovieTrailer } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/Constants';

const useTrailerVideo = (movie_id) => {

  const dispatch = useDispatch();

  const getMainMovieTrailer = async () => {
      try {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();

        const trailer = json?.results?.filter((item)=>{
          return item.type === "Trailer";
        });
        
        dispatch(addMainMovieTrailer(trailer));
      } catch (error) {
        console.error("Failed to fetch now playing movies:", error);
      }
    };
  
    useEffect(() => {
      if(!movie_id) return;
      getMainMovieTrailer();
    }, [movie_id]);
}

export default useTrailerVideo