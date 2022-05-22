import React from "react";
import EducationItem from "./EducationItem";

export default function EducationContainer({ items }) {
  const educationElements = items.map((item) => <EducationItem item={item} />);
  return (
    <section className="resume-section">
      <h2 className="section-title">EDUCATION</h2>
      <hr />
      {educationElements}
    </section>
  );
}
