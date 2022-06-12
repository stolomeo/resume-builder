import { Box, Button, Typography } from "@mui/material";
import styled from "styled-components";
export default function Home() {
  return (
    <HomeWrapper>
      <Box
        sx={{
          marginTop: 18,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 10rem",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "40%",
            gap: "1.4rem",
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            fontSize="4rem"
            fontWeight="bold"
          >
            Build a professional resume for free
          </Typography>
          <Typography component="h2" variant="h3" fontSize="2rem">
            Create your resume easily with our free builder and professional
            templates.
          </Typography>
          <Button
            href="/create"
            variant="contained"
            size="large"
            fullWidth={false}
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
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 4rem 8rem;
  margin: 0 auto;
  margin-bottom: 4rem;
`;
