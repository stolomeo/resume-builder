import { FormSectionHeader, Input, SectionWrapper } from "../styles";
import { ChangeEvent } from "react";
import { PersonalItems } from "../../../types/";

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
    <>
      <FormSectionHeader>Personal Information</FormSectionHeader>
      <SectionWrapper>
        <Input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={handleChangePersonal}
        />
        <Input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          onChange={handleChangePersonal}
        />
        <Input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChangePersonal}
        />
        <Input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={phone}
          onChange={handleChangePersonal}
        />
        <Input
          type="text"
          name="homeCity"
          placeholder="City"
          value={homeCity}
          onChange={handleChangePersonal}
        />
        <Input
          type="text"
          name="homeState"
          placeholder="State"
          value={homeState}
          onChange={handleChangePersonal}
        />
      </SectionWrapper>
    </>
  );
}
