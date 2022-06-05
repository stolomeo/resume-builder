import { useContext } from "react";
import styled from "styled-components";
import ResumeContext from "../../context/";
import { emptyResume, exampleResume } from "../../utils";
import Education from "./Education/";
import Experience from "./Experience/";
import Personal from "./Personal/";
import Skill from "./Skill";
import { Button } from "./styles";

export default function Form() {
  const { setResume } = useContext(ResumeContext);

  const handleLoadExample = () => {
    setResume(exampleResume);
  };

  const handleReset = () => {
    setResume(emptyResume);
  };

  return (
    <FormWrapper>
      <Personal />
      <Experience />
      <Education />
      <Skill />
      <Button onClick={handleLoadExample}>Load Example</Button>
      <Button onClick={handleReset}>Reset</Button>
    </FormWrapper>
  );
}

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 210mm;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
  gap: 1rem;
`;
