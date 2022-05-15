import React from "react";

export default function PersonalInfo() {
  return (
    <section>
      <h2>Personal Information</h2>
      <form>
        <input type="text" name="firstname" placeholder="First Name" />
        <input type="text" name="lastname" placeholder="Last Name" />
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="address" placeholder="Address" />
        <input type="text" name="phoneNumber" placeholder="Phone Number" />
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="description" placeholder="Description" />
      </form>
    </section>
  );
}
