import { Search } from "@mui/icons-material";
import {
  Box,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  OutlinedInput,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const User = () => {
  const users = useSelector((state) => state.Users);
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
          {users.length} Patients
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
      <Box sx={{ color: "#7F7F7F" }}>
        <Container sx={{ display: "flex", flexDirection: "column" }}>
          {users.map((user, id) => {
            return (
              <List disablePadding={true} sx={{ mt: "5px" }}>
                <ListItem disablePadding={true}>
                  <ListItemButton
                    component="a"
                    selected={true}
                    href={`#${user.name}`}
                  >
                    <ListItemText primary={user.name} />
                  </ListItemButton>
                </ListItem>
              </List>
            );
          })}
        </Container>
      </Box>
    </Container>
  );
};
