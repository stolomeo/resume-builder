import React, { useState } from "react";
import PersonalForm from "./Personal/PersonalForm";
import ExperienceForm from "./Experience/ExperienceForm";
import EducationForm from "./Education/EducationForm";
import Personal from "./Personal/Personal";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import { personalItems } from "./Utils/resume";

export default function Main() {
  const [personalValues, setPersonalValues] = useState(personalItems);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalValues((oldValues) => {
      return {
        ...oldValues,
        [name]: value,
      };
    });
  };

  return (
    <main>
      <div className="form-container">
        <PersonalForm
          firstName={personalValues.firstName}
          lastName={personalValues.lastName}
          email={personalValues.email}
          phone={personalValues.phone}
          city={personalValues.city}
          state={personalValues.state}
          handleChange={handleChange}
        />
        <ExperienceForm />
        <EducationForm />
      </div>
      <div className="resume-container">
        <Personal
          firstName={personalValues.firstName}
          lastName={personalValues.lastName}
        />
        <Experience />
        <Education />
      </div>
    </main>
  );
}
