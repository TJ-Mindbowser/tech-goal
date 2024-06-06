import * as React from "react";
import Box from "@mui/material/Box";
import { User } from "./Users";
import { NoteList } from "./NotesList";
import { NoteDetails } from "./NotesDetail";

interface DrawerAppBarProps {
  window?: () => Window;
}

const DrawerAppBar: React.FC<DrawerAppBarProps> = ({ window }) => {
  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: "auto",
        height: "100vh",
        backgroundColor: "#4A4B4B",
      }}
    >
      <Box
        component="section"
        sx={{
          width: "95%",
          height: "95vh",
          display: "flex",
          border: "1px solid #7F7F7F", // Fixed double hash issue here
          borderRadius: "20px",
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
