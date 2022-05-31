import React from "react";

export default function Personal({ items }) {
  // const { firstName, lastName, email, phone, homeCity, homeState } = items;
  return (
    <section className="resume-header">
      <h1 className="header-name">{/* {firstName} {lastName} */}</h1>
      <div className="header-contact-info">
        <p className="header-email"></p>
        <p className="divider">❖</p>
        <p className="header-phone-number"></p>
        <p className="divider">❖</p>
        <p className="header-city-state">{/* {homeCity}, {homeState} */}</p>
      </div>
      <hr />
    </section>
  );
}
