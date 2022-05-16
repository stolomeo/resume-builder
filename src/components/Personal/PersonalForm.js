import React from "react";

export default function PersonalForm({
  firstName,
  lastName,
  email,
  phone,
  city,
  state,
  handleChange,
}) {
  return (
    <section>
      <h2>Personal Information</h2>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={city}
          onChange={handleChange}
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={state}
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
