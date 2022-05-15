import React from "react";

export default function Resume() {
  return (
    <>
      <section className="header">
        <h1 className="header-name">Sebastian Tolomeo</h1>
        <div className="header-contact-info">
          <p className="header-email">tolomeosebastian@gmail.com</p>
          <p className="header-phone-number">(954) 913-6585</p>
          <p>Coconut Creek, FL</p>
        </div>
      </section>
      <section className="education">
        <h2 className="section-title">Education</h2>
        <div className="section-top">
          <p className="education-school-name">Florida Atlantic University</p>
          <p className="education-graduation-date">December, 2020</p>
        </div>
        <div className="section-bottom">
          <p className="education-degree">
            Bachelors' of Business Administration
          </p>
          <p ckassName="education-location">Boca Raton, FL</p>
        </div>
      </section>
    </>
  );
}
