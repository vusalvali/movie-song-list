import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import {reset} from './actions'

//this is a action creator

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

// console.log(songsSlice.actions)
// const startingState = store.getState();
// console.log(startingState);

// store.dispatch({
//   type: "song/addSong",
//   payload: 'New Song!!!'
// });
// store.dispatch({
//   songsSlice.actions.addSong('Some song!')
// });

// const finalState = store.getState();
// console.log(JSON.stringify(finalState));
// export { store };
// export const { addSong, removeSong } = songsSlice.actions;
// export const { addMovie, removeMovie, reset } = moviesSlice.actions;

// export const { addMovie, removeMovie } = moviesSlice.actions;
// console.log(songsSlice.actions.addSong());
export {store, reset, addSong, removeSong, addMovie, removeMovie}
// Circular imports issue
