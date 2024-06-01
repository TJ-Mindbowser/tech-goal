import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Container, Link, Typography } from "@mui/material";
import { User } from "./Users";
import SwapVertIcon from "@mui/icons-material/SwapVert";
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
        <Container
          sx={{
            backgroundColor: "#1F1F1F",
            width: "50%",
          }}
        >
          <Container
            sx={{
              my: "1em",
              borderBottom: "1px solid #7F7F7F",
              display: "flex",
            }}
          >
            <Container>
              <Typography
                component="p"
                sx={{ fontSize: "20px", color: "#F8FAFC" }}
              >
                Notes
              </Typography>
              <Typography
                component="p"
                sx={{ fontSize: "15px", color: "#7F7F7F" }}
              >
                22 Notes
              </Typography>
            </Container>
            <Container>
              <SwapVertIcon color="grey" />
            </Container>
          </Container>
          <Box sx={{ mt: "2em", color: "#7F7F7F" }}>
            <Container sx={{ display: "flex", flexDirection: "column" }}>
              <Container>
                <Container sx={{ display: "flex" }}>
                  <Link
                    color="white"
                    variant="subtitle1"
                    href="#"
                    underline="none"
                  >
                    Tanishq Joshi
                  </Link>
                  <Typography>20 June 2024 | 3:13 PM</Typography>
                </Container>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore ...
                </Typography>
              </Container>

              <Link
                color="grey"
                sx={{ p: "1em" }}
                variant="subtitle1"
                href="#"
                underline="none"
              >
                Samar Hardia
              </Link>
              <Link
                color="grey"
                sx={{ p: "1em" }}
                variant="subtitle1"
                href="#"
                underline="none"
              >
                Abhishek Jain
              </Link>
              <Link
                color="grey"
                sx={{ p: "1em" }}
                variant="subtitle1"
                href="#"
                underline="none"
              >
                Jaydeep Singh
              </Link>
            </Container>
          </Box>
        </Container>
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
