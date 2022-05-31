import React, { useState } from "react";
import emptyResume from "./Utils/emptyResume";

import Preview from "./Preview";
import Form from "./Form";

export default function Main() {
  const [resumeValues, setResumeValues] = useState(emptyResume);

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;
    setResumeValues((oldValues) => ({
      ...oldValues,
      personalItems: {
        ...oldValues.personalItems,
        [name]: value,
      },
    }));
  };

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;
    setResumeValues((oldValues) => {
      const newExperience = oldValues.experienceItems.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });
      return { ...oldValues, experienceItems: [...newExperience] };
    });
  };

  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;
    setResumeValues((oldValues) => {
      const newEducation = oldValues.educationItems.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...oldValues, educationItems: [...newEducation] };
    });
  };

  console.log(resumeValues);

  return (
    <main>
      <div className="form-container">
        <Form
          resumeValues={resumeValues}
          handleChangePersonal={handleChangePersonal}
          handleChangeExperience={handleChangeExperience}
          handleChangeEducation={handleChangeEducation}
        />
      </div>
      <div className="resume-container">
        <Preview resumeValues={resumeValues} />
      </div>
    </main>
  );
}
