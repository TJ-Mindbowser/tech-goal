import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/users";
import noteReducer from "./slice/notes-list";
import selectedUseReducer from "./slice/selected-user";
import selectedNoteReducer from "./slice/selected-note";
import themeReducer from './slice/theme';

export const store = configureStore({
  reducer: {
    Users: userReducer,
    Notes: noteReducer,
    SelectedUser: selectedUseReducer,
    SelectedNote: selectedNoteReducer,
    Theme: themeReducer,

  },
});
