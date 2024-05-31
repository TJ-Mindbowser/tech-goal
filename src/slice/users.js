import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Tanishq Joshi" },
  { id: 2, name: "Samar Hardia" },
  { id: 3, name: "Abhishek Jain" },
  { id: 4, name: "Jaideep Singh" },
];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state) => {
      state.push(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions;

export default userSlice.reducer;
