import { ChangeEvent } from "react";
import styled from "styled-components";
import { Resume } from "../../types";
import Education from "./Education/";
import Experience from "./Experience/";
import Personal from "./Personal/";
import { Button } from "./styles";

type Props = {
  resume: Resume;
  handleChangePersonal: (e: ChangeEvent) => void;
  handleChangeExperience: (e: ChangeEvent, id: string) => void;
  handleChangeEducation: (e: ChangeEvent, id: string) => void;
  handleAddExperience: () => void;
  handleAddEducation: () => void;
  handleDeleteExperience: (id: string) => void;
  handleDeleteEducation: (id: string) => void;
  handleLoadExample: () => void;
};

export default function Form({
  resume,
  handleChangePersonal,
  handleChangeExperience,
  handleChangeEducation,
  handleAddExperience,
  handleAddEducation,
  handleDeleteExperience,
  handleDeleteEducation,
  handleLoadExample,
}: Props) {
  const { personalItems, experienceItems, educationItems } = resume;
  return (
    <FormWrapper>
      <Personal
        personalItems={personalItems}
        handleChangePersonal={handleChangePersonal}
      />
      <Experience
        experienceItems={experienceItems}
        handleChangeExperience={handleChangeExperience}
        handleAddExperience={handleAddExperience}
        handleDeleteExperience={handleDeleteExperience}
      />
      <Education
        educationItems={educationItems}
        handleChangeEducation={handleChangeEducation}
        handleAddEducation={handleAddEducation}
        handleDeleteEducation={handleDeleteEducation}
      />
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
