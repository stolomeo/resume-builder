import React from "react";

export default function ExperienceForm() {
  return (
    <section>
      <h2 className="form-title">Experience</h2>
      <form>
        <input type="text" name="employerName" placeholder="Employer name" />
        <input type="text" name="jobTitle" placeholder="Job title" />
        <input type="text" name="workCity" placeholder="City" />
        <input type="text" name="workState" placeholder="State" />
        <input type="text" name="startDate" placeholder="Start date" />
        <input type="text" name="endDate" placeholder="End date" />
      </form>
    </section>
  );
}
