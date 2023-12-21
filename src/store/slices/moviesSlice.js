import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

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

export const {addMovie, removeMovie} = moviesSlice.actions;
// export default moviesSlice.reducer;
export const moviesReducer = moviesSlice.reducer
