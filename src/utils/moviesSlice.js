import { createSlice } from "@reduxjs/toolkit"


const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        mainMovieTrailer: null,
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
    },
    reducers:{
        addNowPlayingMovies: (state, action) =>{
            state.nowPlayingMovies = action.payload;
        },
        addUpcomingMovies: (state, action) =>{
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) =>{
            state.topRatedMovies = action.payload;
        },
        addPopularMovies: (state, action) =>{
            state.popularMovies = action.payload;
        },
        addMainMovieTrailer: (state, action) =>{
            state.mainMovieTrailer = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addPopularMovies, addMainMovieTrailer, addTopRatedMovies, addUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;