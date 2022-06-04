import { Button, FormSectionHeader, SectionWrapper } from "../styles";
import { ChangeEvent } from "react";
import ExperienceForm from "./ExperienceForm";
import { ResumeExperienceItems } from "../../../types";

type Props = {
  experienceItems: ResumeExperienceItems[];
  handleChangeExperience: (e: ChangeEvent, id: string) => void;
  handleAddExperience: () => void;
  handleDeleteExperience: (id: string) => void;
};

export default function Experience({
  experienceItems,
  handleChangeExperience,
  handleAddExperience,
  handleDeleteExperience,
}: Props) {
  const experienceElements = experienceItems.map((experienceItem) => {
    return (
      <ExperienceForm
        key={experienceItem.id}
        id={experienceItem.id}
        experienceItem={experienceItem}
        handleChangeExperience={handleChangeExperience}
        handleDeleteExperience={handleDeleteExperience}
      />
    );
  });
  return (
    <>
      <FormSectionHeader>Experience</FormSectionHeader>
      <SectionWrapper>
        {experienceElements}
        <Button onClick={handleAddExperience}>Add</Button>
      </SectionWrapper>
    </>
  );
}
