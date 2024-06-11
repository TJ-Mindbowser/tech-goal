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
  const note = SelectedNote ? Notes.filter((e: any) => e.id === SelectedNote) : []
  const user = SelectedUser ? Users.filter((e: any) => e.id === SelectedUser.id) : []

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
      {note.length && note[0]?.name && (
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
              <Typography>{user[0]?.name}</Typography>
              <Typography>Added on : 2024-05-02 12:01:31 AM</Typography>
            </Container>
          </Box>
          <Container sx={{ color: "grey", mt: "1em" }}>
            <Typography>{note[0].name}</Typography>
          </Container>
        </>
      )}
    </Box>
  );
};
