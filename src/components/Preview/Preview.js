import React from "react";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Personal from "./Personal/Personal";

export default function Preview({ resumeValues }) {
  const { personalItems, experienceItems, educationItems } = resumeValues;

  return (
    <>
      <Personal personalItems={personalItems} />
      <Experience experienceItems={experienceItems} />
      <Education educationItems={educationItems} />
    </>
  );
}
