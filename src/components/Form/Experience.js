import React from "react";
import ExperienceForm from "./ExperienceForm";
export default function Experience({
  experienceItems,
  handleChangeExperience,
}) {
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
    </section>
  );
}
