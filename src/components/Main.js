import React, { useState } from "react";
import PersonalForm from "./Form/PersonalForm";
import ExperienceForm from "./Form/ExperienceForm";
import EducationForm from "./Form/EducationForm";
import PersonalContainer from "./Resume/Personal/PersonalContainer";
import ExperienceContainer from "./Resume/Experience/ExperienceContainer";
import EducationContainer from "./Resume/Education/EducationContainer";
import resume from "./Utils/resume";

export default function Main() {
  const [resumeValues, setResumeValues] = useState(resume);
  let currentEducationIndex = 0;

  const handleChange = (e) => {
    const { name, value, id } = e.target;
    setResumeValues((oldValues) => {
      if (id === "ed") {
        const newObject = {
          ...oldValues,
        };

        if (!newObject.educationItems[currentEducationIndex + 1]) {
          newObject.educationItems.push({
            [name]: value,
          });
        } else {
          newObject.educationItems[currentEducationIndex + 1][[name]] = value;
        }
        return newObject;
      }
      return {
        ...oldValues,
        [name]: value,
      };
    });
  };

  return (
    <main>
      <div className="form-container">
        <PersonalForm handleChange={handleChange} />
        <ExperienceForm handleChange={handleChange} />
        <button>Add</button>
        <EducationForm handleChange={handleChange} />
      </div>
      <div className="resume-container">
        <PersonalContainer items={resumeValues.personalItems} />
        <ExperienceContainer items={resumeValues.experienceItems} />
        <EducationContainer items={resumeValues.educationItems} />
      </div>
    </main>
  );
}
