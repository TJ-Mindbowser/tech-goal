import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import { User } from "./Users";
import { NoteList } from "./List";
import { NoteDetails } from "./NotesDetail";
function DrawerAppBar() {
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
          border: "1px solid ##7F7F7F",
          borderRadius: "20px",
        }}
      >
        <User />
        <NoteList />
        <NoteDetails />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
