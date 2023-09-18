import { configureStore, createSlice, createAction } from "@reduxjs/toolkit";

//this is a action creator
export const reset = createAction("app/reset");

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
      state.splice(index, 1);
    },
    // reset(state, action) {
    //   // state.splice(0, 99999)
    //   // console.log(action);
    //   return [];
    // },
    
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      return [];
    });
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
  extraReducers(builder) {
    // builder.addCase(moviesSlice.actions.reset.toString(), (state, action) => {
    //   // state.push('new song')
    //   return [];
    // });
    builder.addCase(reset.toString(), (state, action) => {
      // state.push('new song')
      return [];
    });
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
// export const { addMovie, removeMovie, reset } = moviesSlice.actions;
export const { addMovie, removeMovie } = moviesSlice.actions;
// console.log(songsSlice.actions.addSong());
