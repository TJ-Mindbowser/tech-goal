import { Box, Typography, Container, selectClasses } from "@mui/material";
import { useSelector } from "react-redux";

export const NoteDetails = () => {
  const { Notes, SelectedNote, SelectedUser, Users } = useSelector(
    (state) => state
  );
  const note = SelectedNote ? Notes[SelectedNote] : {};
  const user = SelectedUser ? Users[SelectedUser - 1] : "";
  return (
    <Box
      sx={{
        border: "1px solid #7F7F7F",
        backgroundColor: "#1F1F1F",
        borderRadius: "0 20px 20px 0",
        py: "4px",
        width: "100%",
      }}
    >
      {note?.name && (
        <>
          <Box
            sx={{
              borderBottom: "1px solid #7F7F7F",
              color: "white",
              px: "2px",
              py: "1em",
            }}
          >
            <Container>
              <Typography>{user?.name}</Typography>
              <Typography>Added on : 2024-05-02 12:01:31 AM</Typography>
            </Container>
          </Box>
          <Container sx={{ color: "grey", mt: "1em" }}>
            {note?.name}
            <Typography>{note.name}</Typography>
          </Container>
        </>
      )}
    </Box>
  );
};
