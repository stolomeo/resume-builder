import { Container } from "@mui/material";
import { resumeContainer } from "../styles";
import Education from "./Resume/Template/Education";
import Experience from "./Resume/Template/Experience";
import Personal from "./Resume/Template/Personal";
import Projects from "./Resume/Template/Projects";
import Skills from "./Resume/Template/Skills";

export default function DevTemplate() {
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
