import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Box } from "@mui/material";
import DrawerAppBar from "./component/nav";
import React from 'react';

const App: React.FC = () => {
  return (
    <Box>
      <DrawerAppBar />
    </Box>
  );
};

export default App;
