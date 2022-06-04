import styled from "styled-components";
import EducationItems from "./EducationItems";
import { ResumeEducationItems } from "../../../types";
import { SectionHeader, SectionItems } from "../styles";

type Props = {
  educationItems: ResumeEducationItems[];
};

export default function Education({ educationItems }: Props) {
  const educationElements = educationItems.map((educationItem) => {
    return (
      <EducationItems key={educationItem.id} educationItem={educationItem} />
    );
  });

  return (
    <EducationSection>
      <SectionHeader>EDUCATION</SectionHeader>
      <hr />
      <SectionItems>{educationElements}</SectionItems>
    </EducationSection>
  );
}

const EducationSection = styled.section`
  margin-top: 1rem;
`;
