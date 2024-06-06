import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const selectedUserSlice = createSlice({
  name: "selected-user",
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectUser } = selectedUserSlice.actions;

export default selectedUserSlice.reducer;
