import { createTheme, Theme } from '@mui/material';

export const lightTheme: Theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#F8FAFC',
        },
        primary: {
            main: '#1976d2',
            light: '',
            dark: '#115293',
            contrastText: '#000000'
        },
        secondary: {
            main: '#FF4081'
        },
        divider: '#E0E0E0',
    },
    shape: {
        borderRadius: 20,
    },
});

export const darkTheme: Theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#4A4B4B',
        },
        primary: {
            main: '#262626',
            light: '',
            dark: '#1F1F1F',
            contrastText: '#F8FAFC'
        },
        secondary: {
            main: '#4A4B4B'
        },
        divider: '#7F7F7F',
    },
    shape: {
        borderRadius: 20,
    },
});
