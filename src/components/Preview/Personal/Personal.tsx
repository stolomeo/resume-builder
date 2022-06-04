import { ResumePersonalItems } from "../../../types/";
import styled from "styled-components";

type Props = {
  personalItems: ResumePersonalItems;
};
export default function Personal({ personalItems }: Props) {
  const { firstName, lastName, email, phone, homeCity, homeState } =
    personalItems;
  return (
    <section>
      <FullName>
        {firstName} {lastName}
      </FullName>
      <ContactInfoWrapper>
        <p>{email}</p>
        <p>❖</p>
        <p>{phone}</p>
        <p>❖</p>
        <p>
          {homeCity}, {homeState}
        </p>
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
