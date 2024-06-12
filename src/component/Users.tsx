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
  useTheme,
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
  const theme = useTheme()

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
        backgroundColor: theme.palette.primary.main,
        borderRadius: "20px 0 0 20px",
        width: "50%",
      }}
    >
      <Container sx={{ my: "1em" }}>
        <Typography component="p" sx={{ fontSize: "20px", color: theme.palette.primary.contrastText }}>
          Patients
        </Typography>
        <Typography component="p" sx={{ fontSize: "15px", color: theme.palette.divider }}>
          {users.length} Patients
        </Typography>
      </Container>
      <Container>
        <FormControl
          sx={{ backgroundColor: theme.palette.secondary.main, borderRadius: theme.shape.borderRadius }}
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
      <Box sx={{ color: theme.palette.divider }}>
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
