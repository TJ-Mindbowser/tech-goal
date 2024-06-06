import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { useSelector } from "react-redux";

interface Note {
  id: number;
  name: string;
  content: string;
}

interface User {
  id: number;
  name: string;
}

export const NoteDetails: React.FC = () => {
  const { Notes, SelectedNote, SelectedUser, Users } = useSelector(
    (state: any) => state
  );

  const note: Note | undefined = SelectedNote ? Notes[SelectedNote] : undefined;
  const user: User | undefined = SelectedUser ? Users[SelectedUser - 1] : undefined;

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
      {note && note.name && (
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
            <Typography>{note.name}</Typography>
          </Container>
        </>
      )}
    </Box>
  );
};
