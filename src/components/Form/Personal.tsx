import { ChangeEvent } from "react";

type PersonalItems = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  homeCity: string;
  homeState: string;
};

type Props = {
  personalItems: PersonalItems;
  handleChangePersonal: (e: ChangeEvent) => void;
};

export default function Personal({
  personalItems,
  handleChangePersonal,
}: Props) {
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
