import React from "react";

export default function EducationForm() {
  return (
    <section>
      <h2 className="form-title">Education</h2>
      <form>
        <input type="text" name="university" placeholder="University" />
        <input type="text" name="schoolCity" placeholder="City" />
        <input type="text" name="schoolState" placeholder="State" />
        <input type="text" name="degree" placeholder="Degree" />
        <input type="text" name="major" placeholder="Major / area of study" />
        <input
          type="text"
          name="graduationDate"
          placeholder="Graduation Date"
        />
      </form>
    </section>
  );
}
