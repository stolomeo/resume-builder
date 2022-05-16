import React from "react";

export default function PersonalForm(props) {
  console.log(props);
  return (
    <section>
      <h2>Personal Information</h2>
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={props.firstName}
          onChange={props.handleChange}
        />
        <input type="text" name="lastName" placeholder="Last Name" />
        <input type="text" name="email" placeholder="Email" />
        <input type="text" name="phone" placeholder="Phone Number" />
        <input type="text" name="city" placeholder="City" />
        <input type="text" name="state" placeholder="State" />
      </form>
    </section>
  );
}
