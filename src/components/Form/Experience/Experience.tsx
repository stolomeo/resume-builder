import { FormSectionHeader } from "../styles";
import { ChangeEvent } from "react";
import ExperienceForm from "./ExperienceForm";

type Props = {
  experienceItems: any[];
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
    <section>
      <FormSectionHeader>Experience</FormSectionHeader>
      {experienceElements}
      <button onClick={handleAddExperience}>Add</button>
    </section>
  );
}
