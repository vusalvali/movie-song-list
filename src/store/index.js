import { configureStore, createSlice } from "@reduxjs/toolkit";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      //
    },
  },
});

const store = configureStore({
  reducer: {
    songs: songsSlice.reducer,
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
export const { addSong } = songsSlice.actions;
// console.log(songsSlice.actions.addSong()); 
