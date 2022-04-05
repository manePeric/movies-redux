import { createSlice } from "@reduxjs/toolkit";

export const movieSlice = createSlice({
    name: "movie",
    initialState: {
      movies: [],
    },
    reducers: {
        getMovies: (state, action ) => {
            state.movies = action.payload;
        }
    } 
})


export const {getMovies} = movieSlice.actions
export default movieSlice.reducer;  