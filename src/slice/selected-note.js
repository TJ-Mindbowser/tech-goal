import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const selectedNoteSlice = createSlice({
  name: "selected-note",
  initialState,
  reducers: {
    selectNote: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectNote } = selectedNoteSlice.actions;

export default selectedNoteSlice.reducer;
