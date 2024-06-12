import { createTheme } from "@mui/material";

export const customTheme = createTheme({
    palette: {
        background: {
            default: "#4A4B4B",
        },
        primary: {
            main: "#262626",
            light: "",
            dark: "#1F1F1F",
            contrastText: '#F8FAFC'
        },
        secondary: {
            main: "#4A4B4B"
        },
        divider: "#7F7F7F",
    },
    shape: {
        borderRadius: 20,
    },
});
