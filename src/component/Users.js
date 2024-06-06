import { Search } from "@mui/icons-material";
import {
  Box,
  Container,
  FormControl,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../slice/selected-user";

export const User = () => {
  const users = useSelector((state) => state.Users);
  const dispatch = useDispatch();
  const [searchKeyword, setSearchKeyword] = useState("");
  const [select, setSelect] = useState();
  const [filterUser, setFilteredUser] = useState(users);

  //Function to search user
  useEffect(() => {
    searchByName(searchKeyword, users);
  }, [searchKeyword]);

  //Action to save selected user state to store
  useEffect(() => {
    dispatch(selectUser(select));
  }, [select]);

  const searchByName = (keyword, data) => {
    // Convert the keyword to lowercase for case-insensitive search
    const keywordLower = keyword.toLowerCase();

    // Search for matching names
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(keywordLower)
    );
    setFilteredUser(results);
    return results;
  };

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
            placeholder="Search Patient"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </FormControl>
      </Container>
      <Box sx={{ color: "#7F7F7F" }}>
        <Container sx={{ display: "flex", flexDirection: "column" }}>
          {filterUser.map((user, id) => {
            return (
              <List disablePadding={true} sx={{ mt: "5px" }}>
                <ListItem disablePadding={true}>
                  <ListItemButton
                    component="a"
                    selected={select === user.id}
                    href={`#${user.name}`}
                    onClick={() => setSelect(user.id)}
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
