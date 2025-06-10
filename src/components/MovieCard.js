import { IMG_URL } from "../utils/Constants";

const MovieCard = ({ movie }) => {
    
    return(
        <img className="w-40 rounded-xl" src={IMG_URL+ movie?.poster_path} alt={movie?.title} />
    )
}

export default MovieCard;