import React from "react";

export default function PersonalForm({ personalItems, handleChangePersonal }) {
  return (
    <section>
      <h2 className="form-title">Personal Information</h2>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={personalItems.firstName}
          onChange={handleChangePersonal}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={personalItems.lastName}
          onChange={handleChangePersonal}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={personalItems.email}
          onChange={handleChangePersonal}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={personalItems.phoneNumber}
          onChange={handleChangePersonal}
        />
        <input
          type="text"
          name="homeCity"
          placeholder="City"
          value={personalItems.city}
          onChange={handleChangePersonal}
        />
        <input
          type="text"
          name="homeState"
          placeholder="State"
          value={personalItems.state}
          onChange={handleChangePersonal}
        />
      </form>
    </section>
  );
}
