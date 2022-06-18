import { Typography } from "@mui/material";
import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../../context/UserContext";

export default function Personal() {
  const { user } = useContext(UserContext);

  const { firstName, lastName, email, phone, homeCity, homeState } =
    user.resume.personalItems;
  return (
    <section>
      <Typography component="h1" variant="h6" fontWeight="bold">
        {firstName} {lastName}
      </Typography>
      <ContactInfoWrapper>
        <Typography>{email}</Typography>
        <Typography>❖</Typography>
        <Typography>{phone}</Typography>
        <Typography>❖</Typography>
        <Typography>
          {homeCity}, {homeState}
        </Typography>
      </ContactInfoWrapper>
      <hr />
    </section>
  );
}

const FullName = styled.h1`
  font-size: 26px;
  font-weight: bold;
`;

const ContactInfoWrapper = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 22px;
`;
