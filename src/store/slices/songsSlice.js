import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

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

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
