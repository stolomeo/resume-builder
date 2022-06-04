import styled from "styled-components";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Personal from "./Personal/Personal";
import Skill from "./Skill";

export default function Preview() {
  return (
    <PreviewWrapper>
      <Personal />
      <Experience />
      <Education />
      <Skill />
    </PreviewWrapper>
  );
}

const PreviewWrapper = styled.div`
  font-family: "EB Garamond", serif;
  background-color: rgb(238, 238, 238);
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  width: 210mm;
`;
