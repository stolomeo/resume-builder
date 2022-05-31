import React from "react";

export default function ExperienceForm({ experienceItems }) {
  const { employerName, jobTitle, workCity, workState, startDate, endDate } =
    experienceItems;
  console.log(employerName);
  return (
    <section>
      <h2 className="form-title">Experience</h2>
      <form>
        <input
          type="text"
          name="employerName"
          placeholder="Employer name"
          value={employerName}
        />
        <input
          type="text"
          name="jobTitle"
          placeholder="Job title"
          value={jobTitle}
        />
        <input
          type="text"
          name="workCity"
          placeholder="City"
          value={workCity}
        />
        <input
          type="text"
          name="workState"
          placeholder="State"
          value={workState}
        />
        <input
          type="text"
          name="startDate"
          placeholder="Start date"
          value={startDate}
        />
        <input
          type="text"
          name="endDate"
          placeholder="End date"
          value={endDate}
        />
      </form>
    </section>
  );
}
