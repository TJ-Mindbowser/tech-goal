import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Modal,
  TextareaAutosize,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import { selectNote } from "../slice/selected-note";
import { addNote } from "../slice/notes-list";


interface Note {
  id: number;
  name: string;
  userId: number;
}

interface User {
  id: number;
  name: string;
}

export const NoteList: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedNote, setSelectedNote] = useState<number | null>(null);
  const [textareaValue, setTextareaValue] = useState('');
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { SelectedUser, Notes } = useSelector((state: any) => state);
  const notes = SelectedUser
    ? Notes.filter((note: Note) => note.userId === SelectedUser.id)
    : [];
  useEffect(() => {
    if (selectedNote !== null) {
      dispatch(selectNote(selectedNote));
    }
  }, [selectedNote, dispatch]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const note = { id: 7, userId: SelectedUser.id, name: textareaValue }
    dispatch(addNote(note))
    setOpenModal(false);
    setTextareaValue('')
  };

  const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Box
      sx={{
        backgroundColor: "#1F1F1F",
        width: "50%",
      }}
    >
      {SelectedUser && (
        <>
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
              <Typography
                component="p"
                sx={{ fontSize: "20px", color: "#F8FAFC" }}
              >
                Notes
              </Typography>
              <Typography
                component="p"
                sx={{ fontSize: "15px", color: "#7F7F7F" }}
              >
                {notes.length} Notes
              </Typography>
            </Container>
            <Box sx={{ mr: "10px" }}>
              <Button variant="contained" onClick={() => setOpenModal(true)}>
                <AddIcon />
              </Button>
            </Box>
          </Box>
          <Box sx={{ mt: "1em", color: "#7F7F7F" }}>
            <Container sx={{ display: "flex", flexDirection: "column" }}>
              <List disablePadding sx={{ mt: "5px" }}>
                {notes.map((note: Note) => (
                  <div key={note.id}>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => {
                          setSelectedNote(note.id);
                        }}
                      >
                        <ListItemText primary={note.name} />
                      </ListItemButton>
                    </ListItem>
                    <Divider />
                  </div>
                ))}
              </List>
            </Container>
          </Box>
        </>
      )}
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
            <TextareaAutosize
              minRows={5}
              placeholder="Enter your note here"
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              style={{ width: '100%', marginTop: '16px', marginBottom: '16px' }}
            />
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};
