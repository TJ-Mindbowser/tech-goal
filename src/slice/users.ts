import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the User type
interface User {
  id: number;
  name: string;
}

// Define the type for the state
type UsersState = User[];

const initialState: UsersState = [
  { id: 1, name: "Tanishq Joshi" },
  { id: 2, name: "Samar Hardia" },
  { id: 3, name: "Abhishek Jain" },
  { id: 4, name: "Jaideep Singh" },
];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions;

export default userSlice.reducer;
