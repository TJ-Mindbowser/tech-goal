import React from "react";
import { Box, Typography, Container, useTheme } from "@mui/material";
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
  const theme = useTheme()
  const { Notes, SelectedNote, SelectedUser, Users } = useSelector(
    (state: any) => state
  );
  const note = SelectedNote ? Notes.filter((e: any) => e.id === SelectedNote) : []
  const user = SelectedUser ? Users.filter((e: any) => e.id === SelectedUser.id) : []

  return (
    <Box
      sx={{
        border: `1px solid ${theme.palette.background.default}`,
        backgroundColor: theme.palette.primary.dark,
        borderRadius: "0 20px 20px 0",
        py: "4px",
        width: "100%",
      }}
    >
      {!!note.length && note[0]?.name && (
        <>
          <Box
            sx={{
              borderBottom: `1px solid ${theme.palette.divider}`,
              color: theme.palette.primary.contrastText,
              px: "2px",
              py: "1em",
            }}
          >
            <Container>
              <Typography>{user[0]?.name}</Typography>
              <Typography sx={{ color: theme.palette.divider }}>Added on : 2024-05-02 12:01:31 AM</Typography>
            </Container>
          </Box>
          <Container sx={{ color: theme.palette.divider, mt: "1em" }}>
            <Typography>{note[0].name}</Typography>
          </Container>
        </>
      )
      }
    </Box >
  );
};
