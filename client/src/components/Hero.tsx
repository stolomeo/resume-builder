import { Box, Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          maxWidth: "100vw",
          gap: "3rem",
          padding: "0 7.8rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1.4rem",
          }}
        >
          <Typography component="h1" variant="h3" fontWeight="bold">
            Build a professional resume for free
          </Typography>
          <Typography component="h2" variant="h5">
            Create your resume easily with our free builder and professional
            templates.
          </Typography>
          <Button
            component={Link}
            to="/create"
            variant="contained"
            size="large"
            sx={{ width: "30%" }}
          >
            Get Started
          </Button>
        </Box>
        <Box>
          <iframe
            title="gif"
            src="https://giphy.com/embed/xFvopXeL86JpxR6kg4"
            width="600px"
            height="600px"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </Box>
      </Box>
    </Container>
  );
}
