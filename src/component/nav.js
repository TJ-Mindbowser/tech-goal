import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Button, Container, Link, List, Typography } from "@mui/material";
import { User } from "./Users";
import { NoteList } from "./List";
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
        <Container
          sx={{
            border: "1px solid #7F7F7F",
            backgroundColor: "#1F1F1F",
            borderRadius: "0 20px 20px 0",
          }}
        >
          <Container>
            <Container sx={{ color: "white" }}>
              <Typography>Tanishq</Typography>
              <Typography>
                Added on : timestamp | Last modified : timestamp
              </Typography>
            </Container>
            <Container sx={{ color: "grey" }}>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Convallis tellus id interdum velit laoreet. Enim eu turpis
                egestas pretium. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Convallis tellus id interdum velit laoreet.
                Enim eu turpis egestas pretium
              </Typography>
            </Container>
          </Container>
        </Container>
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
