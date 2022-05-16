import React from "react";

export default function Personal({
  firstName,
  lastName,
  email,
  phone,
  city,
  state,
}) {
  return (
    <section className="resume-header">
      <h1 className="header-name">
        {firstName} {lastName}
      </h1>
      <div className="header-contact-info">
        <p className="header-email">{email}</p>
        <p className="divider">❖</p>
        <p className="header-phone-number">{phone}</p>
        <p className="divider">❖</p>
        <p className="header-city-state">
          {city}, {state}
        </p>
      </div>
      <hr />
    </section>
  );
}
