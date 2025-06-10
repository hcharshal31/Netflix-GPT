import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js';
import MainContainer from './MainContainer.js';
import SecondaryContainer from "./SecondaryContainer.js";

const Browse = () => {

  useNowPlayingMovies();  

  return (
    <div className="pt-20 bg-black">
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default Browse;