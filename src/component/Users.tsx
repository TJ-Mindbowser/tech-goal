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
import { selectNote } from "../slice/selected-note";
// import { RootState } from "../store"; 

// Define a type for the user
interface User {
  id: number;
  name: string;
}

export const User: React.FC = () => {
  // Use the defined User type
  const users = useSelector((state: any) => state.Users) as User[];
  const dispatch = useDispatch();
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [select, setSelect] = useState<User | null>(null);
  const [filterUser, setFilteredUser] = useState<User[]>(users);

  // Function to search user
  useEffect(() => {
    searchByName(searchKeyword, users);
  }, [searchKeyword, users]);

  // Action to save selected user state to store
  useEffect(() => {
    dispatch(selectUser(select));
    dispatch(selectNote(null));
  }, [select, dispatch]);

  const searchByName = (keyword: string, data: User[]): User[] => {
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
          {filterUser.map((user) => (
            <List key={user.id} disablePadding sx={{ mt: "5px" }}>
              <ListItem disablePadding>
                <ListItemButton
                  component="a"
                  selected={select?.id === user.id}
                  href={`#${user.name}`}
                  onClick={() => setSelect(user)}
                >
                  <ListItemText primary={user.name} />
                </ListItemButton>
              </ListItem>
            </List>
          ))}
        </Container>
      </Box>
    </Container>
  );
};
