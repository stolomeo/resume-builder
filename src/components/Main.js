import React, { useState } from "react";
import emptyResume from "./Utils/emptyResume";

import Preview from "./Preview";
import Form from "./Form";

export default function Main() {
  const [resumeValues, setResumeValues] = useState(emptyResume);

  const handleChangePersonal = (e) => {
    const { name, value } = e.target;
    setResumeValues((oldValues) => ({
      ...oldValues,
      personalItems: {
        ...oldValues.personalItems,
        [name]: value,
      },
    }));
  };

  return (
    <main>
      <div className="form-container">
        <Form
          resumeValues={resumeValues}
          handleChangePersonal={handleChangePersonal}
        />
      </div>
      <div className="resume-container">
        <Preview resumeValues={resumeValues} />
      </div>
    </main>
  );
}
