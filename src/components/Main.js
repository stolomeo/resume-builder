import React, { useState } from "react";
import emptyResume from "./utils/emptyResume";

import Preview from "./Preview";
import Form from "./Form";

export default function Main() {
  const [resume, setresume] = useState(emptyResume);

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;
    setresume((oldValues) => ({
      ...oldValues,
      personalItems: {
        ...oldValues.personalItems,
        [name]: value,
      },
    }));
  };

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;
    setresume((oldValues) => {
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
    setresume((oldValues) => {
      const newEducation = oldValues.educationItems.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...oldValues, educationItems: [...newEducation] };
    });
  };

  const handleAddExperience = () => {};

  return (
    <main>
      <div className="form-container">
        <Form
          resume={resume}
          handleChangePersonal={handleChangePersonal}
          handleChangeExperience={handleChangeExperience}
          handleChangeEducation={handleChangeEducation}
        />
      </div>
      <div className="resume-container">
        <Preview resume={resume} />
      </div>
    </main>
  );
}
