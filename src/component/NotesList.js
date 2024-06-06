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
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { selectNote } from "../slice/selected-note";

export const NoteList = () => {
  const dispatch = useDispatch();
  const [selectedNote, setSelectedNote] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const { SelectedUser, Notes, Users } = useSelector((state) => state);
  const notes = SelectedUser
    ? Notes.filter((note) => note.userId === SelectedUser)
    : [];

  useEffect(() => {
    if (selectedNote !== null) {
      dispatch(selectNote(selectedNote));
    }
  }, [selectedNote]);

  const style = {
    position: "absolute",
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
                <AddIcon color="grey" />
              </Button>
            </Box>
          </Box>
          <Box sx={{ mt: "1em", color: "#7F7F7F" }}>
            <Container sx={{ display: "flex", flexDirection: "column" }}>
              <List disablePadding={true} sx={{ mt: "5px" }}>
                {notes.map((note, id) => (
                  <div key={id}>
                    <ListItem disablePadding={true}>
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};
