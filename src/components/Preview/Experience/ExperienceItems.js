import React from "react";

export default function ExperienceItems({ experienceItem }) {
  const { employerName, jobTitle, workCity, workState, startDate, endDate } =
    experienceItem;
  return (
    <>
      <div className="section-top">
        <p className="section-top-title">{employerName}</p>
        <p className="section-top-date">
          {startDate} - {endDate}
        </p>
      </div>
      <div className="section-bottom">
        <p className="section-bottom-title">{jobTitle}</p>
        <p className="section-bottom-location">
          {workCity}, {workState}
        </p>
      </div>
    </>
  );
}
