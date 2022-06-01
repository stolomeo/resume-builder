import { ChangeEvent } from "react";
import styled from "styled-components";
import Education from "./Education/";
import Experience from "./Experience/";
import Personal from "./Personal/";

type Props = {
  resume: any;
  handleChangePersonal: (e: ChangeEvent) => void;
  handleChangeExperience: (e: ChangeEvent, id: string) => void;
  handleChangeEducation: (e: ChangeEvent, id: string) => void;
  handleAddExperience: () => void;
  handleAddEducation: () => void;
  handleDeleteExperience: (id: string) => void;
  handleDeleteEducation: (id: string) => void;
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
