import { Search } from "@mui/icons-material";
import {
  Box,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  Link,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const User = () => {
  const users = useSelector((state) => state.Users);
  console.log("🚀 ~ User ~ users:", users)
  return (
    <Container
      sx={{
        backgroundColor: "#262626",
        borderRadius: "20px 0 0 20px",
        width: "50%",
      }}
    >
      <Container sx={{ my: "1em" }}>
        <Typography component="p" sx={{ fontSize: "20px", color: "#F8FAFC" }}>
          Patients
        </Typography>
        <Typography component="p" sx={{ fontSize: "15px", color: "#7F7F7F" }}>
          12 Patients
        </Typography>
      </Container>
      <Container>
        <FormControl
          sx={{ backgroundColor: "#4A4B4B", borderRadius: "20px" }}
          fullWidth
          variant="outlined"
        >
          <OutlinedInput
            id="outlined-adornment-password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton aria-label="toggle password visibility" edge="end">
                  <Search />
                </IconButton>
              </InputAdornment>
            }
            placeholder="Password"
          />
        </FormControl>
      </Container>
      <Box sx={{ mt: "2em", color: "#7F7F7F" }}>
        <Container sx={{ display: "flex", flexDirection: "column" }}>
          {users.map((user, id) => {
            return (
              <Link
                key={id}
                color="grey"
                sx={{ p: "1em" }}
                variant="subtitle1"
                href="#"
                underline="none"
              >
                {user.name}
              </Link>
            );
          })}
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
  );
};
