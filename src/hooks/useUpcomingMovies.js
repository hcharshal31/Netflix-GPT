import { useEffect } from "react";
import { API_OPTIONS } from "../utils/Constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";


const useUpcomingMovies = () => {

    const dispatch = useDispatch();

    const getUpcomingMovies = async ()=>{
        try{
            const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTIONS)
            const json = await data.json();
            dispatch(addUpcomingMovies(json.results))
        }catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
        getUpcomingMovies();
    }, []);
}

export default useUpcomingMovies;