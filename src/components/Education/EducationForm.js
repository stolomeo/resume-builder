import React from "react";

export default function EducationForm() {
  return (
    <section>
      <h2>Education</h2>
      <form>
        <input type="text" name="university" placeholder="University" />
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="state" placeholder="State" />
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
