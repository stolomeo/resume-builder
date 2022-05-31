import React from "react";
import EducationItems from "./EducationItems";

export default function Education({ educationItems }) {
  const educationElements = educationItems.map((educationItem) => {
    return (
      <EducationItems
        key={educationItem.id}
        id={educationItem.id}
        educationItem={educationItem}
      />
    );
  });

  return (
    <section className="resume-section">
      <h2 className="section-title">EDUCATION</h2>
      <hr />
      {educationElements}
    </section>
  );
}
