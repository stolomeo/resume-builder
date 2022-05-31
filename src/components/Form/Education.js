import React from "react";
import EducationForm from "./EducationForm";

export default function Education({ educationItems, handleChangeEducation }) {
  const educationElements = educationItems.map((educationItem) => {
    return (
      <EducationForm
        key={educationItem.id}
        id={educationItem.id}
        educationItem={educationItem}
        handleChangeEducation={handleChangeEducation}
      />
    );
  });
  return (
    <section>
      <h2 className="form-title">Education</h2>
      {educationElements}
    </section>
  );
}
