import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, ThemeProvider } from "@mui/material";
import DrawerAppBar from "./component/nav";
import React from 'react';
import { useSelector } from "react-redux";
import { lightTheme, darkTheme } from './theme';

const App: React.FC = () => {
  const isDarkMode = useSelector((state: any) => state.Theme.isDarkMode);

  return (
    <Box>
      <ThemeProvider theme={isDarkMode ? lightTheme : darkTheme}>
        <DrawerAppBar />
      </ThemeProvider>
    </Box>
  );
};

export default App;
