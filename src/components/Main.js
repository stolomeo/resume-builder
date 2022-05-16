import React, { useState } from "react";
import PersonalForm from "./Personal/PersonalForm";
import ExperienceForm from "./Experience/ExperienceForm";
import EducationForm from "./Education/EducationForm";
import Personal from "./Personal/Personal";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import { personalItems, experienceItems, educationItems } from "./Utils/resume";

export default function Main() {
  const [personalValues, setPersonalValues] = useState(personalItems);
  const [experienceValues, setExperienceValues] = useState(experienceItems);
  const [educationValues, setEducationValues] = useState(educationItems);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalValues((oldValues) => {
      return {
        ...oldValues,
        [name]: value,
      };
    });
    setExperienceValues((oldValues) => {
      return {
        ...oldValues,
        [name]: value,
      };
    });
    setEducationValues((oldValues) => {
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
        <EducationForm handleChange={handleChange} />
      </div>
      <div className="resume-container">
        <Personal personalValues={personalValues} />
        <Experience experienceValues={experienceValues} />
        <Education educationValues={educationValues} />
      </div>
    </main>
  );
}
