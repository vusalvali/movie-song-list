import { configureStore, createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    // action creator = addMovie
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1)
    },
  },
});

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      console.log(state.length);
      console.log(state);
      // console.log(state.payload);
      state.push(action.payload);
    },
    removeSong(state, action) {
      // action.payload === string, the song we want to remove
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
    movies: moviesSlice.reducer,
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
export { store };
export const { addSong, removeSong } = songsSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
// console.log(songsSlice.actions.addSong());
