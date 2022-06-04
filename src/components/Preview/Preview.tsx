import styled from "styled-components";
import Personal from "./Personal/Personal";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Skill from "./Skill";
import { Resume } from "../../types";

type Props = {
  resume: Resume;
};

export default function Preview({ resume }: Props) {
  const { personalItems, experienceItems, educationItems, skillItems } = resume;

  return (
    <PreviewWrapper>
      <Personal personalItems={personalItems} />
      <Experience experienceItems={experienceItems} />
      <Education educationItems={educationItems} />
      <Skill skillItems={skillItems} />
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
