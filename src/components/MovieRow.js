import MovieCard from "./MovieCard";

const MovieRow = ({movieData, rowTitle}) => {
    
    return(
        <div className="pb-14">
            <h1 className="text-2xl text-white px-16 mb-8">{rowTitle}</h1>
            <div className="flex overflow-x-auto gap-10 mx-16 hide-scrollbar">
                {
                movieData?.map(movie =>{
                    return <MovieCard key={movie.id} movie={ movie } />
                })
                }
            </div>
        </div>
    );
}

export default MovieRow;