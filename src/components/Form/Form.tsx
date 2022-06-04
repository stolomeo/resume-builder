import styled from "styled-components";
import Personal from "./Personal/";
import Experience from "./Experience/";
import Education from "./Education/";
import Skill from "./Skill";
import { ResumeType } from "../../types";
import { Button } from "./styles";
import { ChangeEvent } from "react";

type Props = {
  resume: ResumeType;
  setResume: (resume: ResumeType) => void;
  handleChangePersonal: (e: ChangeEvent) => void;
  handleChangeEducation: (e: ChangeEvent, id: string) => void;
  handleChangeSkill: (e: ChangeEvent, id: string) => void;
  handleAddEducation: () => void;
  handleAddSkill: () => void;
  handleDeleteEducation: (id: string) => void;
  handleDeleteSkill: (id: string) => void;
  handleLoadExample: () => void;
};

export default function Form({
  resume,
  setResume,
  handleChangePersonal,
  handleChangeEducation,
  handleChangeSkill,
  handleAddEducation,
  handleAddSkill,
  handleDeleteEducation,
  handleDeleteSkill,
  handleLoadExample,
}: Props) {
  const { personalItems, educationItems, skillItems } = resume;
  return (
    <FormWrapper>
      <Personal
        personalItems={personalItems}
        handleChangePersonal={handleChangePersonal}
      />
      <Experience />
      <Education
        educationItems={educationItems}
        handleChangeEducation={handleChangeEducation}
        handleAddEducation={handleAddEducation}
        handleDeleteEducation={handleDeleteEducation}
      />
      <Skill
        skillItems={skillItems}
        handleChangeSkill={handleChangeSkill}
        handleAddSkill={handleAddSkill}
        handleDeleteSkill={handleDeleteSkill}
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
