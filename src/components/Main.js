import React, { useState } from "react";
import PersonalForm from "./Personal/PersonalForm";
import ExperienceForm from "./Experience/ExperienceForm";
import EducationForm from "./Education/EducationForm";
import Personal from "./Personal/Personal";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import { personalItems, experienceItems } from "./Utils/resume";

export default function Main() {
  const [personalValues, setPersonalValues] = useState(personalItems);
  const [experienceValues, setExperienceValues] = useState(experienceItems);

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
        <ExperienceForm
          employerName={experienceValues.employerName}
          jobTitle={experienceValues.jobTitle}
          city={experienceValues.city}
          state={experienceValues.state}
          startDate={experienceValues.startDate}
          endDate={experienceValues.endDate}
          handleChange={handleChange}
        />
        <EducationForm />
      </div>
      <div className="resume-container">
        <Personal
          firstName={personalValues.firstName}
          lastName={personalValues.lastName}
          email={personalValues.email}
          phone={personalValues.phone}
          city={personalValues.city}
          state={personalValues.state}
        />
        <Experience
          employerName={experienceValues.employerName}
          jobTitle={experienceValues.jobTitle}
          city={experienceValues.city}
          state={experienceValues.state}
          startDate={experienceValues.startDate}
          endDate={experienceValues.endDate}
        />
        <Education />
      </div>
    </main>
  );
}
