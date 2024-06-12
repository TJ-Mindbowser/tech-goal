// src/slice/theme.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
    isDarkMode: boolean;
}

const initialState: ThemeState = {
    isDarkMode: true,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme(state) {
            state.isDarkMode = !state.isDarkMode;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;