import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import Personal from "./Personal";

export default function Form({
  resume,
  handleChangePersonal,
  handleChangeExperience,
  handleChangeEducation,
  handleAddExperience,
}) {
  const { personalItems, experienceItems, educationItems } = resume;
  return (
    <>
      <Personal
        personalItems={personalItems}
        handleChangePersonal={handleChangePersonal}
      />
      <Experience
        experienceItems={experienceItems}
        handleChangeExperience={handleChangeExperience}
        handleAddExperience={handleAddExperience}
      />
      <Education
        educationItems={educationItems}
        handleChangeEducation={handleChangeEducation}
      />
    </>
  );
}
