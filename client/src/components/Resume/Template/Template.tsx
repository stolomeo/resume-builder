import { Container } from "@mui/material";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Template() {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        mt: 1.5,
        flexDirection: "column",
        height: "100%",
        overflow: "auto",
        "@media print": {
          display: "block",
          width: "100%",
          height: "auto",
          position: "fixed",
          top: 0,
          left: 0,
        },
      }}
    >
      <Personal />
      <Education />
      <Skills />
      <Projects />
      <Experience />
    </Container>
  );
}
