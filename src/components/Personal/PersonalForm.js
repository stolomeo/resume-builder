import React from "react";

export default function PersonalForm({ handleChange }) {
  return (
    <section>
      <h2>Personal Information</h2>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <input
          type="text"
          name="homeCity"
          placeholder="City"
          onChange={handleChange}
        />
        <input
          type="text"
          name="homeState"
          placeholder="State"
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
