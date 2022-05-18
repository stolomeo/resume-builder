import React from "react";

export default function EducationForm({ handleChange }) {
  return (
    <section>
      <h2>Education</h2>
      <form>
        <input
          type="text"
          name="university"
          placeholder="University"
          onChange={handleChange}
        />
        <input
          type="text"
          name="schoolCity"
          placeholder="City"
          onChange={handleChange}
        />
        <input
          type="text"
          name="schoolState"
          placeholder="State"
          onChange={handleChange}
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          onChange={handleChange}
        />
        <input
          type="text"
          name="major"
          placeholder="Major / area of study"
          onChange={handleChange}
        />
        <input
          type="text"
          name="graduationDate"
          placeholder="Graduation Date"
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
