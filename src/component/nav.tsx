import * as React from "react";
import Box from "@mui/material/Box";
import { User } from "./Users";
import { NoteList } from "./NotesList";
import { NoteDetails } from "./NotesDetail";
import { useTheme } from "@mui/material";
import SwitchComponent from "./switch";
interface DrawerAppBarProps {
  window?: () => Window;
}

const DrawerAppBar: React.FC<DrawerAppBarProps> = ({ window }) => {
  const theme = useTheme();
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'column',
        py: "auto",
        height: "100vh",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <SwitchComponent />
      <Box
        component="section"
        sx={{
          width: "95%",
          height: "95vh",
          display: "flex",
          border: `1px solid ${theme.palette.divider}`, // Fixed double hash issue here
          borderRadius: theme.shape.borderRadius
        }}
      >
        <User />
        <NoteList />
        <NoteDetails />
      </Box>
    </Box>
  );
};

export default DrawerAppBar;
