import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box, ThemeProvider } from "@mui/material";
import DrawerAppBar from "./component/nav";
import React from 'react';
import { customTheme } from "./theme";

const App: React.FC = () => {
  return (
    <Box>
      <ThemeProvider theme={customTheme}>
        <DrawerAppBar />
      </ThemeProvider>
    </Box>
  );
};

export default App;
