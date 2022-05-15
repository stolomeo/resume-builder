import React, { useState } from "react";

export default function PersonalForm() {
  const [firstName, setFirstName] = useState("");

  return (
    <section>
      <h2>Personal Information</h2>
      <form>
        <input
          type="text"
          name="firstname"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input type="text" name="lastname" placeholder="Last Name" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="phoneNumber" placeholder="Phone Number" />
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="state" placeholder="State" />
        <p>{firstName}</p>
      </form>
    </section>
  );
}
