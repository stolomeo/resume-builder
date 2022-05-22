import React from "react";
import ExperienceItem from "./ExperienceItem";
export default function ExperienceContainer({ items }) {
  const experienceElements = items.map((item) => (
    <ExperienceItem item={item} />
  ));
  return (
    <section className="resume-section">
      <h2 className="section-title">WORK EXPERIENCE</h2>
      <hr />
      {experienceElements}
    </section>
  );
}
