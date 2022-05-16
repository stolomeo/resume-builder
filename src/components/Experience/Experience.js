import React from "react";

export default function Experience({
  employerName,
  jobTitle,
  city,
  state,
  startDate,
  endDate,
}) {
  return (
    <section className="resume-section">
      <h2 className="section-title">WORK EXPERIENCE</h2>
      <hr />
      <div className="section-top">
        <p className="section-top-title">{employerName}</p>
        <p className="section-top-date">
          {startDate} – {endDate}
        </p>
      </div>
      <div className="section-bottom">
        <p className="section-bottom-title">{jobTitle}</p>
        <p ckassName="section-bottom-location">
          {city}, {state}
        </p>
      </div>
    </section>
  );
}
