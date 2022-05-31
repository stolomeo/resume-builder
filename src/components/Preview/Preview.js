import React from "react";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";
import Personal from "./Personal/Personal";

export default function Preview() {
  return (
    <>
      <Personal />
      <Experience />
      <Education />
    </>
  );
}
