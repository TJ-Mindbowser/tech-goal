import { createSlice } from "@reduxjs/toolkit";

// Define the type for the state
type UserState = User | null;

// Define the User type if it is not already defined
interface User {
  id: number;
  name: string;
  // Add other user properties here
}

const initialState: UserState = null;

export const selectedUserSlice = createSlice({
  name: "selected-user",
  initialState,
  reducers: {
    selectUser: (state, action) => {
      state = action.payload;
      return state;
    }
  }
});

// Action creators are generated for each case reducer function
export const { selectUser } = selectedUserSlice.actions;

export default selectedUserSlice.reducer;