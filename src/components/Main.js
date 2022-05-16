import React, { useState } from "react";
import PersonalForm from "./Personal/PersonalForm";
import ExperienceForm from "./Experience/ExperienceForm";
import EducationForm from "./Education/EducationForm";
import Personal from "./Personal/Personal";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import { personalItems } from "./Utils/resume";
console.log(personalItems);

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

  const personalElements = personalItems.map((item) => {
    return (
      <PersonalForm
        firstName={item.firstName}
        lastName={item.lastName}
        email={item.email}
        phone={item.phone}
        city={item.city}
        state={item.state}
        handleChange={handleChange}
      />
    );
  });

  return (
    <main>
      <div className="form-container">
        {personalElements}
        <ExperienceForm />
        <EducationForm />
      </div>
      <div className="resume-container">
        <Personal />
        <Experience />
        <Education />
      </div>
    </main>
  );
}
