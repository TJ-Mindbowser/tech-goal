import { Box, Typography, Container } from "@mui/material";

export const NoteDetails = () => {
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
      <Box
        sx={{
          borderBottom: "1px solid #7F7F7F",
          color: "white",
          px: "2px",
          py: "1em",
        }}
      >
        <Container>
          <Typography>Tanishq</Typography>
          <Typography>
            Added on : timestamp | Last modified : timestamp
          </Typography>
        </Container>
      </Box>
      <Container sx={{ color: "grey", mt: "1em" }}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis
          tellus id interdum velit laoreet. Enim eu turpis egestas pretium.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis
          tellus id interdum velit laoreet. Enim eu turpis egestas pretium
        </Typography>
      </Container>
    </Box>
  );
};
