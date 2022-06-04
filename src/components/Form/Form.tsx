import styled from "styled-components";
import Personal from "./Personal/";
import Experience from "./Experience/";
import Education from "./Education/";
import Skill from "./Skill";
import { Button } from "./styles";
import { exampleResume } from "../../utils";
import { useContext } from "react";
import { ResumeContext } from "../../context/ResumeContext";

export default function Form() {
  const { resume, setResume } = useContext(ResumeContext);

  const { personalItems, educationItems, skillItems } = resume;

  const handleLoadExample = () => {
    setResume(exampleResume);
  };
  return (
    <FormWrapper>
      <Personal />
      <Experience />
      <Education educationItems={educationItems} />
      <Skill skillItems={skillItems} />
      <Button onClick={handleLoadExample}>Load Example</Button>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 210mm;
  padding: 2rem;
  border-radius: 5px;
  background-color: rgb(238, 238, 238);
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  gap: 1rem;
`;
