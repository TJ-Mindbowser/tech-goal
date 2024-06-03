import {
  Container,
  Link,
  Typography,
  Box,
  Button,
  List,
  ListItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export const NoteList = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1F1F1F",
        width: "50%",
      }}
    >
      <Box
        sx={{
          borderBottom: "1px solid #7F7F7F",
          display: "flex",
          alignItems: "center",
          px: "2px",
          py: "1em",
        }}
      >
        <Container>
          <Typography component="p" sx={{ fontSize: "20px", color: "#F8FAFC" }}>
            Notes
          </Typography>
          <Typography component="p" sx={{ fontSize: "15px", color: "#7F7F7F" }}>
            22 Notes
          </Typography>
        </Container>
        <Box sx={{ mr: "10px" }}>
          <Button variant="contained">
            <AddIcon color="grey" />
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: "1em", color: "#7F7F7F" }}>
        <Container sx={{ display: "flex", flexDirection: "column" }}>
          <List disablePadding={true} sx={{ mt: "5px" }}>
            <ListItem disablePadding={true}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Link
                  color="white"
                  variant="subtitle1"
                  href="#"
                  underline="none"
                >
                  Tanishq Joshi
                </Link>
                <Typography sx={{ fontSize: "15px" }} variant="i">
                  20 June 2024 | 3:13 PM
                </Typography>
                <Typography sx={{ mt: 1 }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore ...
                </Typography>
              </Box>
            </ListItem>
          </List>
        </Container>
      </Box>
    </Box>
  );
};
