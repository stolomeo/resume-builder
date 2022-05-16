import React from "react";

export default function ExperienceForm({
  employerName,
  jobTitle,
  city,
  state,
  startDate,
  endDate,
  handleChange,
}) {
  return (
    <section>
      <h2>Experience</h2>
      <form>
        <input
          type="text"
          name="employerName"
          placeholder="Employer name"
          value={employerName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="jobTitle"
          placeholder="Job title"
          value={jobTitle}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={state}
          onChange={handleChange}
        />
        <input
          type="text"
          name="startDate"
          placeholder="Start date"
          value={startDate}
          onChange={handleChange}
        />
        <input
          type="text"
          name="endDate"
          placeholder="End date"
          value={endDate}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
