import React, { useState } from "react";
import emptyResume from "./utils/emptyResume";

import Preview from "./Preview";
import Form from "./Form";
import { nanoid } from "nanoid";

export default function Main() {
  const [resume, setResume] = useState(emptyResume);

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;
    setResume((oldResume) => ({
      ...oldResume,
      personalItems: {
        ...oldResume.personalItems,
        [name]: value,
      },
    }));
  };

  const handleChangeExperience = (e, id) => {
    const { name, value } = e.target;
    setResume((oldResume) => {
      const newExperience = oldResume.experienceItems.map((experienceItem) => {
        if (experienceItem.id === id) {
          return { ...experienceItem, [name]: value };
        }
        return experienceItem;
      });
      return { ...oldResume, experienceItems: [...newExperience] };
    });
  };

  const handleChangeEducation = (e, id) => {
    const { name, value } = e.target;
    setResume((oldResume) => {
      const newEducation = oldResume.educationItems.map((educationItem) => {
        if (educationItem.id === id) {
          return { ...educationItem, [name]: value };
        }
        return educationItem;
      });
      return { ...oldResume, educationItems: [...newEducation] };
    });
  };

  const handleAddExperience = () => {
    setResume((oldResume) => ({
      ...oldResume,
      experienceItems: [
        ...oldResume.experienceItems,
        {
          id: nanoid(),
          employerName: "",
          jobTitle: "",
          workCity: "",
          workState: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
  };
  const handleAddEducation = () => {
    setResume((oldResume) => ({
      ...oldResume,
      educationItems: [
        ...oldResume.educationItems,
        {
          id: nanoid(),
          employerName: "",
          jobTitle: "",
          workCity: "",
          workState: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
  };

  return (
    <main>
      <div className="form-container">
        <Form
          resume={resume}
          handleChangePersonal={handleChangePersonal}
          handleChangeExperience={handleChangeExperience}
          handleChangeEducation={handleChangeEducation}
          handleAddExperience={handleAddExperience}
          handleAddEducation={handleAddEducation}
        />
      </div>
      <div className="resume-container">
        <Preview resume={resume} />
      </div>
    </main>
  );
}
