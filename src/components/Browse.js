import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js';
import MainContainer from './MainContainer.js';

const Browse = () => {

  useNowPlayingMovies();  

  return (
    <div className="pt-20">
      <MainContainer />
    </div>
  )
}

export default Browse;