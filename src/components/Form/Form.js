import React from "react";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import PersonalForm from "./PersonalForm";

export default function Form({ resumeValues, handleChangePersonal }) {
  const { personalItems, experienceItems, educationItems } = resumeValues;
  console.log(experienceItems);
  return (
    <>
      <PersonalForm
        personalItems={personalItems}
        handleChangePersonal={handleChangePersonal}
      />
      <ExperienceForm experienceItems={experienceItems} />
      <EducationForm />
    </>
  );
}
