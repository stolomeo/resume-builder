import React from "react";

export default function Personal({ personalItems, handleChangePersonal }) {
  const { firstName, lastName, email, phone, homeCity, homeState } =
    personalItems;
  return (
    <section>
      <h2 className="form-title">Personal Information</h2>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={handleChangePersonal}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={handleChangePersonal}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChangePersonal}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={handleChangePersonal}
        />
        <input
          type="text"
          name="homeCity"
          placeholder="City"
          value={homeCity}
          onChange={handleChangePersonal}
        />
        <input
          type="text"
          name="homeState"
          placeholder="State"
          value={homeState}
          onChange={handleChangePersonal}
        />
      </form>
    </section>
  );
}
