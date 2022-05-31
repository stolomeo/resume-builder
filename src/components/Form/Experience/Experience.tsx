import { ChangeEvent } from "react";
import ExperienceForm from "./ExperienceForm";

type Props = {
  experienceItems: any[];
  handleChangeExperience: (e: ChangeEvent, id: string) => void;
  handleAddExperience: () => void;
};

export default function Experience({
  experienceItems,
  handleChangeExperience,
  handleAddExperience,
}: Props) {
  const experienceElements = experienceItems.map((experienceItem) => {
    return (
      <ExperienceForm
        key={experienceItem.id}
        id={experienceItem.id}
        experienceItem={experienceItem}
        handleChangeExperience={handleChangeExperience}
      />
    );
  });
  return (
    <section>
      <h2 className="form-title">Experience</h2>
      {experienceElements}
      <button onClick={handleAddExperience}>Add</button>
    </section>
  );
}
