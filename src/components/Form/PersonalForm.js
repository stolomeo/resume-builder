import React from "react";

export default function PersonalForm() {
  return (
    <section>
      <h2 className="form-title">Personal Information</h2>
      <form>
        <input type="text" name="firstName" placeholder="First Name" />
        <input type="text" name="lastName" placeholder="Last Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="phone" placeholder="Phone Number" />
        <input type="text" name="homeCity" placeholder="City" />
        <input type="text" name="homeState" placeholder="State" />
      </form>
    </section>
  );
}
