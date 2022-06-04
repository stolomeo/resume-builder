import { FormSectionHeader, Input, SectionWrapper } from "../styles";
import { ChangeEvent, useContext } from "react";
import { ResumeContext } from "../../../context/ResumeContext";

export default function Personal() {
  const { resume, setResume } = useContext(ResumeContext);

  const { firstName, lastName, email, phone, homeCity, homeState } =
    resume.personalItems;

  const handleChangePersonal = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLTextAreaElement;
    setResume({
      ...resume,
      personalItems: {
        ...resume.personalItems,
        [name]: value,
      },
    });
  };
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
