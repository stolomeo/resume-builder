import React from "react";
import ExperienceForm from "./ExperienceForm";
import PersonalForm from "./PersonalForm";

export default function Form() {
  return (
    <>
      <PersonalForm />
      <ExperienceForm />
      <PersonalForm />
    </>
  );
}
