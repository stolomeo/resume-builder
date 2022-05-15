import React from "react";

export default function Resume() {
  return (
    <>
      <section className="resume-header">
        <h1 className="header-name">Sebastian Tolomeo</h1>
        <div className="header-contact-info">
          <p className="header-email">tolomeosebastian@gmail.com</p>
          <p className="header-phone-number">(954) 913-6585</p>
          <p>Coconut Creek, FL</p>
        </div>
      </section>
      <section className="resume-section">
        <h2 className="section-title">Work Experience</h2>
        <div className="section-top">
          <p className="section-top-title">Apple</p>
          <p className="section-top-date">January, 2021 - Present</p>
        </div>
        <div className="section-bottom">
          <p className="section-bottom-title">Software Engineer</p>
          <p ckassName="section-bottom-location">Boca Raton, FL</p>
        </div>
      </section>
      <section className="resume-section">
        <h2 className="section-title">Education</h2>
        <div className="section-top">
          <p className="section-top-title">Florida Atlantic University</p>
          <p className="section-top-date">December, 2020</p>
        </div>
        <div className="section-bottom">
          <p className="section-bottom-title">
            Bachelors' of Business Administration
          </p>
          <p ckassName="section-bottom-location">Boca Raton, FL</p>
        </div>
      </section>
    </>
  );
}
