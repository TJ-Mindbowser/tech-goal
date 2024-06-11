import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the state
interface Note {
  id: number;
  userId: number;
  name: string;
}

const initialState: Note[] = [
  {
    id: 1,
    userId: 1,
    name: "Tanishq Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Enim eu turpis egestas pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 2,
    userId: 2,
    name: "Samar Hardia Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Enim eu turpis egestas pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 3,
    userId: 2,
    name: "Samar Hardia Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Enim eu turpis egestas pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 4,
    userId: 3,
    name: "Abhishek Jain Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Enim eu turpis egestas pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    id: 5,
    userId: 4,
    name: "Jaideep Singh Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit laoreet. Enim eu turpis egestas pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
];

export const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<Note>) => {
      state.push(action.payload);
      return state
    },
    // Assuming getUserNote was a typo in the original file since it's not defined.
  },
});

// Action creators are generated for each case reducer function
export const { addNote } = noteSlice.actions;

export default noteSlice.reducer;
