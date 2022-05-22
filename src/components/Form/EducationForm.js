import React from "react";

export default function EducationForm({ handleChange }) {
  return (
    <section>
      <h2 className="form-title">Education</h2>
      <form>
        <input
          type="text"
          name="university"
          id="ed"
          placeholder="University"
          onChange={handleChange}
        />
        <input
          type="text"
          name="schoolCity"
          id="ed"
          placeholder="City"
          onChange={handleChange}
        />
        <input
          type="text"
          name="schoolState"
          id="ed"
          placeholder="State"
          onChange={handleChange}
        />
        <input
          type="text"
          name="degree"
          id="ed"
          placeholder="Degree"
          onChange={handleChange}
        />
        <input
          type="text"
          name="major"
          id="ed"
          placeholder="Major / area of study"
          onChange={handleChange}
        />
        <input
          type="text"
          name="graduationDate"
          id="ed"
          placeholder="Graduation Date"
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
    </section>
  );
}
