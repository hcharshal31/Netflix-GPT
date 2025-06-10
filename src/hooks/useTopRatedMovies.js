import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";


const useTopRatedMovies = () => {

    const dispatch = useDispatch();

    const getTopRatedMovies = async ()=>{
        try{
            const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
            const json = await data.json();
            dispatch(addTopRatedMovies(json.results))
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getTopRatedMovies();
    }, []);
}

export default useTopRatedMovies;