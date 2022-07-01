import { Container } from "@mui/material";
import { resumeContainer } from "../../../styles";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Template() {
  return (
    <Container maxWidth="sm" sx={resumeContainer}>
      <Personal />
      <Education />
      <Skills />
      <Projects />
      <Experience />
    </Container>
  );
}
